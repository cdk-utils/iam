# `iotmanagedintegrations` Submodule <a name="`iotmanagedintegrations` Submodule" id="@cdk_utils/iam.iotmanagedintegrations"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotmanagedintegrationsAccountAssociationArnComponents <a name="IotmanagedintegrationsAccountAssociationArnComponents" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents"></a>

Parsed components of a account-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsAccountAssociationArnComponents: iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.accountAssociationId">accountAssociationId</a></code> | <code>string</code> | The AccountAssociationId component. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountAssociationId`<sup>Required</sup> <a name="accountAssociationId" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.accountAssociationId"></a>

```typescript
public readonly accountAssociationId: string;
```

- *Type:* string

The AccountAssociationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotmanagedintegrationsAccountAssociationArnProps <a name="IotmanagedintegrationsAccountAssociationArnProps" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps"></a>

Properties for building a account-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsAccountAssociationArnProps: iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.accountAssociationId">accountAssociationId</a></code> | <code>string</code> | The AccountAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accountAssociationId`<sup>Required</sup> <a name="accountAssociationId" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.accountAssociationId"></a>

```typescript
public readonly accountAssociationId: string;
```

- *Type:* string

The AccountAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotmanagedintegrationsCredentialLockerArnComponents <a name="IotmanagedintegrationsCredentialLockerArnComponents" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents"></a>

Parsed components of a credential-locker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsCredentialLockerArnComponents: iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotmanagedintegrationsCredentialLockerArnProps <a name="IotmanagedintegrationsCredentialLockerArnProps" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps"></a>

Properties for building a credential-locker ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsCredentialLockerArnProps: iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotmanagedintegrationsManagedThingArnComponents <a name="IotmanagedintegrationsManagedThingArnComponents" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents"></a>

Parsed components of a managed-thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsManagedThingArnComponents: iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotmanagedintegrationsManagedThingArnProps <a name="IotmanagedintegrationsManagedThingArnProps" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps"></a>

Properties for building a managed-thing ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsManagedThingArnProps: iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotmanagedintegrationsOtaTaskArnComponents <a name="IotmanagedintegrationsOtaTaskArnComponents" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents"></a>

Parsed components of a ota-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsOtaTaskArnComponents: iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotmanagedintegrationsOtaTaskArnProps <a name="IotmanagedintegrationsOtaTaskArnProps" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps"></a>

Properties for building a ota-task ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsOtaTaskArnProps: iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotmanagedintegrationsProvisioningProfileArnComponents <a name="IotmanagedintegrationsProvisioningProfileArnComponents" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents"></a>

Parsed components of a provisioning-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsProvisioningProfileArnComponents: iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotmanagedintegrationsProvisioningProfileArnProps <a name="IotmanagedintegrationsProvisioningProfileArnProps" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps"></a>

Properties for building a provisioning-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

const iotmanagedintegrationsProvisioningProfileArnProps: iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotmanagedintegrationsActions <a name="IotmanagedintegrationsActions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions"></a>

IAM action constants for the iotmanagedintegrations service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

new iotmanagedintegrations.IotmanagedintegrationsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetAccountAssociation">actionGetAccountAssociation</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetAccountAssociation. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetCloudConnector">actionGetCloudConnector</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetCloudConnector. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetConnectorDestination">actionGetConnectorDestination</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetConnectorDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetCredentialLocker">actionGetCredentialLocker</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetCredentialLocker. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetCustomEndpoint">actionGetCustomEndpoint</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetCustomEndpoint. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetDefaultEncryptionConfiguration">actionGetDefaultEncryptionConfiguration</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetDefaultEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetDestination">actionGetDestination</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetDeviceDiscovery">actionGetDeviceDiscovery</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetDeviceDiscovery. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetEventLogConfiguration">actionGetEventLogConfiguration</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetEventLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetHubConfiguration">actionGetHubConfiguration</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetHubConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThing">actionGetManagedThing</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetManagedThing. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingCapabilities">actionGetManagedThingCapabilities</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetManagedThingCapabilities. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingCertificate">actionGetManagedThingCertificate</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetManagedThingCertificate. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingConnectivityData">actionGetManagedThingConnectivityData</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetManagedThingConnectivityData. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingMetaData">actionGetManagedThingMetaData</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetManagedThingMetaData. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingState">actionGetManagedThingState</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetManagedThingState. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetNotificationConfiguration">actionGetNotificationConfiguration</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetOtaTask">actionGetOtaTask</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetOtaTask. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetOtaTaskConfiguration">actionGetOtaTaskConfiguration</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetOtaTaskConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetProvisioningProfile">actionGetProvisioningProfile</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetProvisioningProfile. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetRuntimeLogConfiguration">actionGetRuntimeLogConfiguration</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetRuntimeLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetSchemaVersion">actionGetSchemaVersion</a></code> | <code>string</code> | [Read] iotmanagedintegrations:GetSchemaVersion. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateAccountAssociation">CreateAccountAssociation</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateAccountAssociation. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateCloudConnector">CreateCloudConnector</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateCloudConnector. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateConnectorDestination">CreateConnectorDestination</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateConnectorDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateCredentialLocker">CreateCredentialLocker</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateCredentialLocker. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateDestination">CreateDestination</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateEventLogConfiguration">CreateEventLogConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateEventLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateManagedThing">CreateManagedThing</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateManagedThing. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateNotificationConfiguration">CreateNotificationConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateOtaTask">CreateOtaTask</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateOtaTask. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateOtaTaskConfiguration">CreateOtaTaskConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateOtaTaskConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateProvisioningProfile">CreateProvisioningProfile</a></code> | <code>string</code> | [Write] iotmanagedintegrations:CreateProvisioningProfile. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteAccountAssociation">DeleteAccountAssociation</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteAccountAssociation. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteCloudConnector">DeleteCloudConnector</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteCloudConnector. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteConnectorDestination">DeleteConnectorDestination</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteConnectorDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteCredentialLocker">DeleteCredentialLocker</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteCredentialLocker. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteDestination">DeleteDestination</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteEventLogConfiguration">DeleteEventLogConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteEventLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteManagedThing">DeleteManagedThing</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteManagedThing. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteNotificationConfiguration">DeleteNotificationConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteOtaTask">DeleteOtaTask</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteOtaTask. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteOtaTaskConfiguration">DeleteOtaTaskConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteOtaTaskConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteProvisioningProfile">DeleteProvisioningProfile</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeleteProvisioningProfile. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeregisterAccountAssociation">DeregisterAccountAssociation</a></code> | <code>string</code> | [Write] iotmanagedintegrations:DeregisterAccountAssociation. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListAccountAssociations">ListAccountAssociations</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListAccountAssociations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListCloudConnectors">ListCloudConnectors</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListCloudConnectors. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListConnectorDestinations">ListConnectorDestinations</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListConnectorDestinations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListCredentialLockers">ListCredentialLockers</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListCredentialLockers. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListDestinations">ListDestinations</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListDestinations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListDeviceDiscoveries">ListDeviceDiscoveries</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListDeviceDiscoveries. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListDiscoveredDevices">ListDiscoveredDevices</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListDiscoveredDevices. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListEventLogConfigurations">ListEventLogConfigurations</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListEventLogConfigurations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListManagedThingAccountAssociations">ListManagedThingAccountAssociations</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListManagedThingAccountAssociations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListManagedThings">ListManagedThings</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListManagedThings. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListManagedThingSchemas">ListManagedThingSchemas</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListManagedThingSchemas. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListNotificationConfigurations">ListNotificationConfigurations</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListNotificationConfigurations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListOtaTaskConfigurations">ListOtaTaskConfigurations</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListOtaTaskConfigurations. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListOtaTaskExecutions">ListOtaTaskExecutions</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListOtaTaskExecutions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListOtaTasks">ListOtaTasks</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListOtaTasks. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListProvisioningProfiles">ListProvisioningProfiles</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListProvisioningProfiles. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListSchemaVersions">ListSchemaVersions</a></code> | <code>string</code> | [List] iotmanagedintegrations:ListSchemaVersions. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotmanagedintegrations:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.PutDefaultEncryptionConfiguration">PutDefaultEncryptionConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:PutDefaultEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.PutHubConfiguration">PutHubConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:PutHubConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.PutRuntimeLogConfiguration">PutRuntimeLogConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:PutRuntimeLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.RegisterAccountAssociation">RegisterAccountAssociation</a></code> | <code>string</code> | [Write] iotmanagedintegrations:RegisterAccountAssociation. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.RegisterCustomEndpoint">RegisterCustomEndpoint</a></code> | <code>string</code> | [Write] iotmanagedintegrations:RegisterCustomEndpoint. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ResetRuntimeLogConfiguration">ResetRuntimeLogConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:ResetRuntimeLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.SendConnectorEvent">SendConnectorEvent</a></code> | <code>string</code> | [Write] iotmanagedintegrations:SendConnectorEvent. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.SendManagedThingCommand">SendManagedThingCommand</a></code> | <code>string</code> | [Write] iotmanagedintegrations:SendManagedThingCommand. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.StartAccountAssociationRefresh">StartAccountAssociationRefresh</a></code> | <code>string</code> | [Write] iotmanagedintegrations:StartAccountAssociationRefresh. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.StartDeviceDiscovery">StartDeviceDiscovery</a></code> | <code>string</code> | [Write] iotmanagedintegrations:StartDeviceDiscovery. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotmanagedintegrations:TagResource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotmanagedintegrations:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateAccountAssociation">UpdateAccountAssociation</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateAccountAssociation. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateCloudConnector">UpdateCloudConnector</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateCloudConnector. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateConnectorDestination">UpdateConnectorDestination</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateConnectorDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateDestination">UpdateDestination</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateDestination. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateEventLogConfiguration">UpdateEventLogConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateEventLogConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateManagedThing">UpdateManagedThing</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateManagedThing. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateNotificationConfiguration">UpdateNotificationConfiguration</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateOtaTask">UpdateOtaTask</a></code> | <code>string</code> | [Write] iotmanagedintegrations:UpdateOtaTask. |

---

##### `actionGetAccountAssociation`<sup>Required</sup> <a name="actionGetAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetAccountAssociation"></a>

```typescript
public readonly actionGetAccountAssociation: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetAccountAssociation.

---

##### `actionGetCloudConnector`<sup>Required</sup> <a name="actionGetCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetCloudConnector"></a>

```typescript
public readonly actionGetCloudConnector: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetCloudConnector.

---

##### `actionGetConnectorDestination`<sup>Required</sup> <a name="actionGetConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetConnectorDestination"></a>

```typescript
public readonly actionGetConnectorDestination: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetConnectorDestination.

---

##### `actionGetCredentialLocker`<sup>Required</sup> <a name="actionGetCredentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetCredentialLocker"></a>

```typescript
public readonly actionGetCredentialLocker: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetCredentialLocker.

---

##### `actionGetCustomEndpoint`<sup>Required</sup> <a name="actionGetCustomEndpoint" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetCustomEndpoint"></a>

```typescript
public readonly actionGetCustomEndpoint: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetCustomEndpoint.

---

##### `actionGetDefaultEncryptionConfiguration`<sup>Required</sup> <a name="actionGetDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetDefaultEncryptionConfiguration"></a>

```typescript
public readonly actionGetDefaultEncryptionConfiguration: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetDefaultEncryptionConfiguration.

---

##### `actionGetDestination`<sup>Required</sup> <a name="actionGetDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetDestination"></a>

```typescript
public readonly actionGetDestination: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetDestination.

---

##### `actionGetDeviceDiscovery`<sup>Required</sup> <a name="actionGetDeviceDiscovery" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetDeviceDiscovery"></a>

```typescript
public readonly actionGetDeviceDiscovery: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetDeviceDiscovery.

---

##### `actionGetEventLogConfiguration`<sup>Required</sup> <a name="actionGetEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetEventLogConfiguration"></a>

```typescript
public readonly actionGetEventLogConfiguration: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetEventLogConfiguration.

---

##### `actionGetHubConfiguration`<sup>Required</sup> <a name="actionGetHubConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetHubConfiguration"></a>

```typescript
public readonly actionGetHubConfiguration: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetHubConfiguration.

---

##### `actionGetManagedThing`<sup>Required</sup> <a name="actionGetManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThing"></a>

```typescript
public readonly actionGetManagedThing: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetManagedThing.

---

##### `actionGetManagedThingCapabilities`<sup>Required</sup> <a name="actionGetManagedThingCapabilities" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingCapabilities"></a>

```typescript
public readonly actionGetManagedThingCapabilities: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetManagedThingCapabilities.

---

##### `actionGetManagedThingCertificate`<sup>Required</sup> <a name="actionGetManagedThingCertificate" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingCertificate"></a>

```typescript
public readonly actionGetManagedThingCertificate: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetManagedThingCertificate.

---

##### `actionGetManagedThingConnectivityData`<sup>Required</sup> <a name="actionGetManagedThingConnectivityData" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingConnectivityData"></a>

```typescript
public readonly actionGetManagedThingConnectivityData: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetManagedThingConnectivityData.

---

##### `actionGetManagedThingMetaData`<sup>Required</sup> <a name="actionGetManagedThingMetaData" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingMetaData"></a>

```typescript
public readonly actionGetManagedThingMetaData: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetManagedThingMetaData.

---

##### `actionGetManagedThingState`<sup>Required</sup> <a name="actionGetManagedThingState" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetManagedThingState"></a>

```typescript
public readonly actionGetManagedThingState: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetManagedThingState.

---

##### `actionGetNotificationConfiguration`<sup>Required</sup> <a name="actionGetNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetNotificationConfiguration"></a>

```typescript
public readonly actionGetNotificationConfiguration: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetNotificationConfiguration.

---

##### `actionGetOtaTask`<sup>Required</sup> <a name="actionGetOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetOtaTask"></a>

```typescript
public readonly actionGetOtaTask: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetOtaTask.

---

##### `actionGetOtaTaskConfiguration`<sup>Required</sup> <a name="actionGetOtaTaskConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetOtaTaskConfiguration"></a>

```typescript
public readonly actionGetOtaTaskConfiguration: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetOtaTaskConfiguration.

---

##### `actionGetProvisioningProfile`<sup>Required</sup> <a name="actionGetProvisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetProvisioningProfile"></a>

```typescript
public readonly actionGetProvisioningProfile: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetProvisioningProfile.

---

##### `actionGetRuntimeLogConfiguration`<sup>Required</sup> <a name="actionGetRuntimeLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetRuntimeLogConfiguration"></a>

```typescript
public readonly actionGetRuntimeLogConfiguration: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetRuntimeLogConfiguration.

---

##### `actionGetSchemaVersion`<sup>Required</sup> <a name="actionGetSchemaVersion" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.actionGetSchemaVersion"></a>

```typescript
public readonly actionGetSchemaVersion: string;
```

- *Type:* string

[Read] iotmanagedintegrations:GetSchemaVersion.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateAccountAssociation`<sup>Required</sup> <a name="CreateAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateAccountAssociation"></a>

```typescript
public readonly CreateAccountAssociation: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateAccountAssociation.

---

##### `CreateCloudConnector`<sup>Required</sup> <a name="CreateCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateCloudConnector"></a>

```typescript
public readonly CreateCloudConnector: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateCloudConnector.

---

##### `CreateConnectorDestination`<sup>Required</sup> <a name="CreateConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateConnectorDestination"></a>

```typescript
public readonly CreateConnectorDestination: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateConnectorDestination.

---

##### `CreateCredentialLocker`<sup>Required</sup> <a name="CreateCredentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateCredentialLocker"></a>

```typescript
public readonly CreateCredentialLocker: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateCredentialLocker.

---

##### `CreateDestination`<sup>Required</sup> <a name="CreateDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateDestination"></a>

```typescript
public readonly CreateDestination: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateDestination.

---

##### `CreateEventLogConfiguration`<sup>Required</sup> <a name="CreateEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateEventLogConfiguration"></a>

```typescript
public readonly CreateEventLogConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateEventLogConfiguration.

---

##### `CreateManagedThing`<sup>Required</sup> <a name="CreateManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateManagedThing"></a>

```typescript
public readonly CreateManagedThing: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateManagedThing.

---

##### `CreateNotificationConfiguration`<sup>Required</sup> <a name="CreateNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateNotificationConfiguration"></a>

```typescript
public readonly CreateNotificationConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateNotificationConfiguration.

---

##### `CreateOtaTask`<sup>Required</sup> <a name="CreateOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateOtaTask"></a>

```typescript
public readonly CreateOtaTask: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateOtaTask.

---

##### `CreateOtaTaskConfiguration`<sup>Required</sup> <a name="CreateOtaTaskConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateOtaTaskConfiguration"></a>

```typescript
public readonly CreateOtaTaskConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateOtaTaskConfiguration.

---

##### `CreateProvisioningProfile`<sup>Required</sup> <a name="CreateProvisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.CreateProvisioningProfile"></a>

```typescript
public readonly CreateProvisioningProfile: string;
```

- *Type:* string

[Write] iotmanagedintegrations:CreateProvisioningProfile.

---

##### `DeleteAccountAssociation`<sup>Required</sup> <a name="DeleteAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteAccountAssociation"></a>

```typescript
public readonly DeleteAccountAssociation: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteAccountAssociation.

---

##### `DeleteCloudConnector`<sup>Required</sup> <a name="DeleteCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteCloudConnector"></a>

```typescript
public readonly DeleteCloudConnector: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteCloudConnector.

---

##### `DeleteConnectorDestination`<sup>Required</sup> <a name="DeleteConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteConnectorDestination"></a>

```typescript
public readonly DeleteConnectorDestination: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteConnectorDestination.

---

##### `DeleteCredentialLocker`<sup>Required</sup> <a name="DeleteCredentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteCredentialLocker"></a>

```typescript
public readonly DeleteCredentialLocker: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteCredentialLocker.

---

##### `DeleteDestination`<sup>Required</sup> <a name="DeleteDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteDestination"></a>

```typescript
public readonly DeleteDestination: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteDestination.

---

##### `DeleteEventLogConfiguration`<sup>Required</sup> <a name="DeleteEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteEventLogConfiguration"></a>

```typescript
public readonly DeleteEventLogConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteEventLogConfiguration.

---

##### `DeleteManagedThing`<sup>Required</sup> <a name="DeleteManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteManagedThing"></a>

```typescript
public readonly DeleteManagedThing: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteManagedThing.

---

##### `DeleteNotificationConfiguration`<sup>Required</sup> <a name="DeleteNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteNotificationConfiguration"></a>

```typescript
public readonly DeleteNotificationConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteNotificationConfiguration.

---

##### `DeleteOtaTask`<sup>Required</sup> <a name="DeleteOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteOtaTask"></a>

```typescript
public readonly DeleteOtaTask: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteOtaTask.

---

##### `DeleteOtaTaskConfiguration`<sup>Required</sup> <a name="DeleteOtaTaskConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteOtaTaskConfiguration"></a>

```typescript
public readonly DeleteOtaTaskConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteOtaTaskConfiguration.

---

##### `DeleteProvisioningProfile`<sup>Required</sup> <a name="DeleteProvisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeleteProvisioningProfile"></a>

```typescript
public readonly DeleteProvisioningProfile: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeleteProvisioningProfile.

---

##### `DeregisterAccountAssociation`<sup>Required</sup> <a name="DeregisterAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.DeregisterAccountAssociation"></a>

```typescript
public readonly DeregisterAccountAssociation: string;
```

- *Type:* string

[Write] iotmanagedintegrations:DeregisterAccountAssociation.

---

##### `ListAccountAssociations`<sup>Required</sup> <a name="ListAccountAssociations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListAccountAssociations"></a>

```typescript
public readonly ListAccountAssociations: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListAccountAssociations.

---

##### `ListCloudConnectors`<sup>Required</sup> <a name="ListCloudConnectors" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListCloudConnectors"></a>

```typescript
public readonly ListCloudConnectors: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListCloudConnectors.

---

##### `ListConnectorDestinations`<sup>Required</sup> <a name="ListConnectorDestinations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListConnectorDestinations"></a>

```typescript
public readonly ListConnectorDestinations: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListConnectorDestinations.

---

##### `ListCredentialLockers`<sup>Required</sup> <a name="ListCredentialLockers" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListCredentialLockers"></a>

```typescript
public readonly ListCredentialLockers: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListCredentialLockers.

---

##### `ListDestinations`<sup>Required</sup> <a name="ListDestinations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListDestinations"></a>

```typescript
public readonly ListDestinations: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListDestinations.

---

##### `ListDeviceDiscoveries`<sup>Required</sup> <a name="ListDeviceDiscoveries" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListDeviceDiscoveries"></a>

```typescript
public readonly ListDeviceDiscoveries: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListDeviceDiscoveries.

---

##### `ListDiscoveredDevices`<sup>Required</sup> <a name="ListDiscoveredDevices" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListDiscoveredDevices"></a>

```typescript
public readonly ListDiscoveredDevices: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListDiscoveredDevices.

---

##### `ListEventLogConfigurations`<sup>Required</sup> <a name="ListEventLogConfigurations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListEventLogConfigurations"></a>

```typescript
public readonly ListEventLogConfigurations: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListEventLogConfigurations.

---

##### `ListManagedThingAccountAssociations`<sup>Required</sup> <a name="ListManagedThingAccountAssociations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListManagedThingAccountAssociations"></a>

```typescript
public readonly ListManagedThingAccountAssociations: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListManagedThingAccountAssociations.

---

##### `ListManagedThings`<sup>Required</sup> <a name="ListManagedThings" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListManagedThings"></a>

```typescript
public readonly ListManagedThings: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListManagedThings.

---

##### `ListManagedThingSchemas`<sup>Required</sup> <a name="ListManagedThingSchemas" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListManagedThingSchemas"></a>

```typescript
public readonly ListManagedThingSchemas: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListManagedThingSchemas.

---

##### `ListNotificationConfigurations`<sup>Required</sup> <a name="ListNotificationConfigurations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListNotificationConfigurations"></a>

```typescript
public readonly ListNotificationConfigurations: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListNotificationConfigurations.

---

##### `ListOtaTaskConfigurations`<sup>Required</sup> <a name="ListOtaTaskConfigurations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListOtaTaskConfigurations"></a>

```typescript
public readonly ListOtaTaskConfigurations: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListOtaTaskConfigurations.

---

##### `ListOtaTaskExecutions`<sup>Required</sup> <a name="ListOtaTaskExecutions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListOtaTaskExecutions"></a>

```typescript
public readonly ListOtaTaskExecutions: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListOtaTaskExecutions.

---

##### `ListOtaTasks`<sup>Required</sup> <a name="ListOtaTasks" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListOtaTasks"></a>

```typescript
public readonly ListOtaTasks: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListOtaTasks.

---

##### `ListProvisioningProfiles`<sup>Required</sup> <a name="ListProvisioningProfiles" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListProvisioningProfiles"></a>

```typescript
public readonly ListProvisioningProfiles: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListProvisioningProfiles.

---

##### `ListSchemaVersions`<sup>Required</sup> <a name="ListSchemaVersions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListSchemaVersions"></a>

```typescript
public readonly ListSchemaVersions: string;
```

- *Type:* string

[List] iotmanagedintegrations:ListSchemaVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotmanagedintegrations:ListTagsForResource.

---

##### `PutDefaultEncryptionConfiguration`<sup>Required</sup> <a name="PutDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.PutDefaultEncryptionConfiguration"></a>

```typescript
public readonly PutDefaultEncryptionConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:PutDefaultEncryptionConfiguration.

---

##### `PutHubConfiguration`<sup>Required</sup> <a name="PutHubConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.PutHubConfiguration"></a>

```typescript
public readonly PutHubConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:PutHubConfiguration.

---

##### `PutRuntimeLogConfiguration`<sup>Required</sup> <a name="PutRuntimeLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.PutRuntimeLogConfiguration"></a>

```typescript
public readonly PutRuntimeLogConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:PutRuntimeLogConfiguration.

---

##### `RegisterAccountAssociation`<sup>Required</sup> <a name="RegisterAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.RegisterAccountAssociation"></a>

```typescript
public readonly RegisterAccountAssociation: string;
```

- *Type:* string

[Write] iotmanagedintegrations:RegisterAccountAssociation.

---

##### `RegisterCustomEndpoint`<sup>Required</sup> <a name="RegisterCustomEndpoint" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.RegisterCustomEndpoint"></a>

```typescript
public readonly RegisterCustomEndpoint: string;
```

- *Type:* string

[Write] iotmanagedintegrations:RegisterCustomEndpoint.

---

##### `ResetRuntimeLogConfiguration`<sup>Required</sup> <a name="ResetRuntimeLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.ResetRuntimeLogConfiguration"></a>

```typescript
public readonly ResetRuntimeLogConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:ResetRuntimeLogConfiguration.

---

##### `SendConnectorEvent`<sup>Required</sup> <a name="SendConnectorEvent" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.SendConnectorEvent"></a>

```typescript
public readonly SendConnectorEvent: string;
```

- *Type:* string

[Write] iotmanagedintegrations:SendConnectorEvent.

---

##### `SendManagedThingCommand`<sup>Required</sup> <a name="SendManagedThingCommand" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.SendManagedThingCommand"></a>

```typescript
public readonly SendManagedThingCommand: string;
```

- *Type:* string

[Write] iotmanagedintegrations:SendManagedThingCommand.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAccountAssociationRefresh`<sup>Required</sup> <a name="StartAccountAssociationRefresh" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.StartAccountAssociationRefresh"></a>

```typescript
public readonly StartAccountAssociationRefresh: string;
```

- *Type:* string

[Write] iotmanagedintegrations:StartAccountAssociationRefresh.

---

##### `StartDeviceDiscovery`<sup>Required</sup> <a name="StartDeviceDiscovery" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.StartDeviceDiscovery"></a>

```typescript
public readonly StartDeviceDiscovery: string;
```

- *Type:* string

[Write] iotmanagedintegrations:StartDeviceDiscovery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotmanagedintegrations:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotmanagedintegrations:UntagResource.

---

##### `UpdateAccountAssociation`<sup>Required</sup> <a name="UpdateAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateAccountAssociation"></a>

```typescript
public readonly UpdateAccountAssociation: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateAccountAssociation.

---

##### `UpdateCloudConnector`<sup>Required</sup> <a name="UpdateCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateCloudConnector"></a>

```typescript
public readonly UpdateCloudConnector: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateCloudConnector.

---

##### `UpdateConnectorDestination`<sup>Required</sup> <a name="UpdateConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateConnectorDestination"></a>

```typescript
public readonly UpdateConnectorDestination: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateConnectorDestination.

---

##### `UpdateDestination`<sup>Required</sup> <a name="UpdateDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateDestination"></a>

```typescript
public readonly UpdateDestination: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateDestination.

---

##### `UpdateEventLogConfiguration`<sup>Required</sup> <a name="UpdateEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateEventLogConfiguration"></a>

```typescript
public readonly UpdateEventLogConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateEventLogConfiguration.

---

##### `UpdateManagedThing`<sup>Required</sup> <a name="UpdateManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateManagedThing"></a>

```typescript
public readonly UpdateManagedThing: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateManagedThing.

---

##### `UpdateNotificationConfiguration`<sup>Required</sup> <a name="UpdateNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateNotificationConfiguration"></a>

```typescript
public readonly UpdateNotificationConfiguration: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateNotificationConfiguration.

---

##### `UpdateOtaTask`<sup>Required</sup> <a name="UpdateOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsActions.property.UpdateOtaTask"></a>

```typescript
public readonly UpdateOtaTask: string;
```

- *Type:* string

[Write] iotmanagedintegrations:UpdateOtaTask.

---

### IotmanagedintegrationsConditions <a name="IotmanagedintegrationsConditions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions"></a>

Condition key constants and builders for iotmanagedintegrations.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

new iotmanagedintegrations.IotmanagedintegrationsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.cloudConnectorId">cloudConnectorId</a></code> | Generates a condition block for `iotmanagedintegrations:cloudConnectorId`. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.connectorDestinationId">connectorDestinationId</a></code> | Generates a condition block for `iotmanagedintegrations:connectorDestinationId`. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `cloudConnectorId` <a name="cloudConnectorId" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.cloudConnectorId"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsConditions.cloudConnectorId(value: string)
```

Generates a condition block for `iotmanagedintegrations:cloudConnectorId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.cloudConnectorId.parameter.value"></a>

- *Type:* string

---

##### `connectorDestinationId` <a name="connectorDestinationId" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.connectorDestinationId"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsConditions.connectorDestinationId(value: string)
```

Generates a condition block for `iotmanagedintegrations:connectorDestinationId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.connectorDestinationId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.requestTag"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.resourceTag"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.tagKeys"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CLOUD_CONNECTOR_ID">CLOUD_CONNECTOR_ID</a></code> | <code>string</code> | Condition key: iotmanagedintegrations:cloudConnectorId (String). |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CONNECTOR_DESTINATION_ID">CONNECTOR_DESTINATION_ID</a></code> | <code>string</code> | Condition key: iotmanagedintegrations:connectorDestinationId (String). |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateAccountAssociationConditionKeys">CreateAccountAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccountAssociation action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateConnectorDestinationConditionKeys">CreateConnectorDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectorDestination action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateCredentialLockerConditionKeys">CreateCredentialLockerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCredentialLocker action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateManagedThingConditionKeys">CreateManagedThingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateManagedThing action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateOtaTaskConditionKeys">CreateOtaTaskConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOtaTask action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateProvisioningProfileConditionKeys">CreateProvisioningProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProvisioningProfile action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.DeleteCloudConnectorConditionKeys">DeleteCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCloudConnector action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.UpdateCloudConnectorConditionKeys">UpdateCloudConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCloudConnector action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CLOUD_CONNECTOR_ID`<sup>Required</sup> <a name="CLOUD_CONNECTOR_ID" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CLOUD_CONNECTOR_ID"></a>

```typescript
public readonly CLOUD_CONNECTOR_ID: string;
```

- *Type:* string

Condition key: iotmanagedintegrations:cloudConnectorId (String).

---

##### `CONNECTOR_DESTINATION_ID`<sup>Required</sup> <a name="CONNECTOR_DESTINATION_ID" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CONNECTOR_DESTINATION_ID"></a>

```typescript
public readonly CONNECTOR_DESTINATION_ID: string;
```

- *Type:* string

Condition key: iotmanagedintegrations:connectorDestinationId (String).

---

##### `CreateAccountAssociationConditionKeys`<sup>Required</sup> <a name="CreateAccountAssociationConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateAccountAssociationConditionKeys"></a>

```typescript
public readonly CreateAccountAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccountAssociation action.

---

##### `CreateConnectorDestinationConditionKeys`<sup>Required</sup> <a name="CreateConnectorDestinationConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateConnectorDestinationConditionKeys"></a>

```typescript
public readonly CreateConnectorDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectorDestination action.

---

##### `CreateCredentialLockerConditionKeys`<sup>Required</sup> <a name="CreateCredentialLockerConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateCredentialLockerConditionKeys"></a>

```typescript
public readonly CreateCredentialLockerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCredentialLocker action.

---

##### `CreateManagedThingConditionKeys`<sup>Required</sup> <a name="CreateManagedThingConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateManagedThingConditionKeys"></a>

```typescript
public readonly CreateManagedThingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateManagedThing action.

---

##### `CreateOtaTaskConditionKeys`<sup>Required</sup> <a name="CreateOtaTaskConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateOtaTaskConditionKeys"></a>

```typescript
public readonly CreateOtaTaskConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOtaTask action.

---

##### `CreateProvisioningProfileConditionKeys`<sup>Required</sup> <a name="CreateProvisioningProfileConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.CreateProvisioningProfileConditionKeys"></a>

```typescript
public readonly CreateProvisioningProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProvisioningProfile action.

---

##### `DeleteCloudConnectorConditionKeys`<sup>Required</sup> <a name="DeleteCloudConnectorConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.DeleteCloudConnectorConditionKeys"></a>

```typescript
public readonly DeleteCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCloudConnector action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateCloudConnectorConditionKeys`<sup>Required</sup> <a name="UpdateCloudConnectorConditionKeys" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsConditions.property.UpdateCloudConnectorConditionKeys"></a>

```typescript
public readonly UpdateCloudConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCloudConnector action.

---

### IotmanagedintegrationsOperations <a name="IotmanagedintegrationsOperations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations"></a>

API operation to required IAM actions mapping for iotmanagedintegrations.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

new iotmanagedintegrations.IotmanagedintegrationsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateAccountAssociation">CreateAccountAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateAccountAssociation API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateCloudConnector">CreateCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateConnectorDestination">CreateConnectorDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectorDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateCredentialLocker">CreateCredentialLocker</a></code> | <code>string[]</code> | IAM actions required for the CreateCredentialLocker API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateDestination">CreateDestination</a></code> | <code>string[]</code> | IAM actions required for the CreateDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateEventLogConfiguration">CreateEventLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateEventLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateManagedThing">CreateManagedThing</a></code> | <code>string[]</code> | IAM actions required for the CreateManagedThing API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateNotificationConfiguration">CreateNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateOtaTask">CreateOtaTask</a></code> | <code>string[]</code> | IAM actions required for the CreateOtaTask API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateOtaTaskConfiguration">CreateOtaTaskConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateOtaTaskConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateProvisioningProfile">CreateProvisioningProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateProvisioningProfile API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteAccountAssociation">DeleteAccountAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccountAssociation API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteCloudConnector">DeleteCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteConnectorDestination">DeleteConnectorDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectorDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteCredentialLocker">DeleteCredentialLocker</a></code> | <code>string[]</code> | IAM actions required for the DeleteCredentialLocker API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteDestination">DeleteDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteEventLogConfiguration">DeleteEventLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteManagedThing">DeleteManagedThing</a></code> | <code>string[]</code> | IAM actions required for the DeleteManagedThing API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteNotificationConfiguration">DeleteNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteOtaTask">DeleteOtaTask</a></code> | <code>string[]</code> | IAM actions required for the DeleteOtaTask API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteOtaTaskConfiguration">DeleteOtaTaskConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteOtaTaskConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteProvisioningProfile">DeleteProvisioningProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteProvisioningProfile API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeregisterAccountAssociation">DeregisterAccountAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeregisterAccountAssociation API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListAccountAssociations">ListAccountAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAssociations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListCloudConnectors">ListCloudConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListCloudConnectors API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListConnectorDestinations">ListConnectorDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorDestinations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListCredentialLockers">ListCredentialLockers</a></code> | <code>string[]</code> | IAM actions required for the ListCredentialLockers API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListDestinations">ListDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListDestinations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListDeviceDiscoveries">ListDeviceDiscoveries</a></code> | <code>string[]</code> | IAM actions required for the ListDeviceDiscoveries API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListDiscoveredDevices">ListDiscoveredDevices</a></code> | <code>string[]</code> | IAM actions required for the ListDiscoveredDevices API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListEventLogConfigurations">ListEventLogConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListEventLogConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListManagedThingAccountAssociations">ListManagedThingAccountAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListManagedThingAccountAssociations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListManagedThings">ListManagedThings</a></code> | <code>string[]</code> | IAM actions required for the ListManagedThings API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListManagedThingSchemas">ListManagedThingSchemas</a></code> | <code>string[]</code> | IAM actions required for the ListManagedThingSchemas API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListNotificationConfigurations">ListNotificationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListNotificationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListOtaTaskConfigurations">ListOtaTaskConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListOtaTaskConfigurations API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListOtaTaskExecutions">ListOtaTaskExecutions</a></code> | <code>string[]</code> | IAM actions required for the ListOtaTaskExecutions API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListOtaTasks">ListOtaTasks</a></code> | <code>string[]</code> | IAM actions required for the ListOtaTasks API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListProvisioningProfiles">ListProvisioningProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListProvisioningProfiles API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListSchemaVersions">ListSchemaVersions</a></code> | <code>string[]</code> | IAM actions required for the ListSchemaVersions API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetAccountAssociation">opGetAccountAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetAccountAssociation API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetCloudConnector">opGetCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the GetCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetConnectorDestination">opGetConnectorDestination</a></code> | <code>string[]</code> | IAM actions required for the GetConnectorDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetCredentialLocker">opGetCredentialLocker</a></code> | <code>string[]</code> | IAM actions required for the GetCredentialLocker API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetCustomEndpoint">opGetCustomEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetCustomEndpoint API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetDefaultEncryptionConfiguration">opGetDefaultEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetDefaultEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetDestination">opGetDestination</a></code> | <code>string[]</code> | IAM actions required for the GetDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetDeviceDiscovery">opGetDeviceDiscovery</a></code> | <code>string[]</code> | IAM actions required for the GetDeviceDiscovery API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetEventLogConfiguration">opGetEventLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEventLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetHubConfiguration">opGetHubConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetHubConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThing">opGetManagedThing</a></code> | <code>string[]</code> | IAM actions required for the GetManagedThing API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingCapabilities">opGetManagedThingCapabilities</a></code> | <code>string[]</code> | IAM actions required for the GetManagedThingCapabilities API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingCertificate">opGetManagedThingCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetManagedThingCertificate API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingConnectivityData">opGetManagedThingConnectivityData</a></code> | <code>string[]</code> | IAM actions required for the GetManagedThingConnectivityData API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingMetaData">opGetManagedThingMetaData</a></code> | <code>string[]</code> | IAM actions required for the GetManagedThingMetaData API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingState">opGetManagedThingState</a></code> | <code>string[]</code> | IAM actions required for the GetManagedThingState API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetNotificationConfiguration">opGetNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetOtaTask">opGetOtaTask</a></code> | <code>string[]</code> | IAM actions required for the GetOtaTask API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetOtaTaskConfiguration">opGetOtaTaskConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetOtaTaskConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetProvisioningProfile">opGetProvisioningProfile</a></code> | <code>string[]</code> | IAM actions required for the GetProvisioningProfile API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetRuntimeLogConfiguration">opGetRuntimeLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetRuntimeLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetSchemaVersion">opGetSchemaVersion</a></code> | <code>string[]</code> | IAM actions required for the GetSchemaVersion API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.PutDefaultEncryptionConfiguration">PutDefaultEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutDefaultEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.PutHubConfiguration">PutHubConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutHubConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.PutRuntimeLogConfiguration">PutRuntimeLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutRuntimeLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.RegisterAccountAssociation">RegisterAccountAssociation</a></code> | <code>string[]</code> | IAM actions required for the RegisterAccountAssociation API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.RegisterCustomEndpoint">RegisterCustomEndpoint</a></code> | <code>string[]</code> | IAM actions required for the RegisterCustomEndpoint API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ResetRuntimeLogConfiguration">ResetRuntimeLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ResetRuntimeLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.SendConnectorEvent">SendConnectorEvent</a></code> | <code>string[]</code> | IAM actions required for the SendConnectorEvent API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.SendManagedThingCommand">SendManagedThingCommand</a></code> | <code>string[]</code> | IAM actions required for the SendManagedThingCommand API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.StartAccountAssociationRefresh">StartAccountAssociationRefresh</a></code> | <code>string[]</code> | IAM actions required for the StartAccountAssociationRefresh API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.StartDeviceDiscovery">StartDeviceDiscovery</a></code> | <code>string[]</code> | IAM actions required for the StartDeviceDiscovery API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateAccountAssociation">UpdateAccountAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountAssociation API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateCloudConnector">UpdateCloudConnector</a></code> | <code>string[]</code> | IAM actions required for the UpdateCloudConnector API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateConnectorDestination">UpdateConnectorDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectorDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateDestination">UpdateDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateDestination API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateEventLogConfiguration">UpdateEventLogConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventLogConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateManagedThing">UpdateManagedThing</a></code> | <code>string[]</code> | IAM actions required for the UpdateManagedThing API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateNotificationConfiguration">UpdateNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateOtaTask">UpdateOtaTask</a></code> | <code>string[]</code> | IAM actions required for the UpdateOtaTask API call. |

---

##### `CreateAccountAssociation`<sup>Required</sup> <a name="CreateAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateAccountAssociation"></a>

```typescript
public readonly CreateAccountAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccountAssociation API call.

---

##### `CreateCloudConnector`<sup>Required</sup> <a name="CreateCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateCloudConnector"></a>

```typescript
public readonly CreateCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudConnector API call.

---

##### `CreateConnectorDestination`<sup>Required</sup> <a name="CreateConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateConnectorDestination"></a>

```typescript
public readonly CreateConnectorDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectorDestination API call.

---

##### `CreateCredentialLocker`<sup>Required</sup> <a name="CreateCredentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateCredentialLocker"></a>

```typescript
public readonly CreateCredentialLocker: string[];
```

- *Type:* string[]

IAM actions required for the CreateCredentialLocker API call.

---

##### `CreateDestination`<sup>Required</sup> <a name="CreateDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateDestination"></a>

```typescript
public readonly CreateDestination: string[];
```

- *Type:* string[]

IAM actions required for the CreateDestination API call.

---

##### `CreateEventLogConfiguration`<sup>Required</sup> <a name="CreateEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateEventLogConfiguration"></a>

```typescript
public readonly CreateEventLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventLogConfiguration API call.

---

##### `CreateManagedThing`<sup>Required</sup> <a name="CreateManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateManagedThing"></a>

```typescript
public readonly CreateManagedThing: string[];
```

- *Type:* string[]

IAM actions required for the CreateManagedThing API call.

---

##### `CreateNotificationConfiguration`<sup>Required</sup> <a name="CreateNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateNotificationConfiguration"></a>

```typescript
public readonly CreateNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotificationConfiguration API call.

---

##### `CreateOtaTask`<sup>Required</sup> <a name="CreateOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateOtaTask"></a>

```typescript
public readonly CreateOtaTask: string[];
```

- *Type:* string[]

IAM actions required for the CreateOtaTask API call.

---

##### `CreateOtaTaskConfiguration`<sup>Required</sup> <a name="CreateOtaTaskConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateOtaTaskConfiguration"></a>

```typescript
public readonly CreateOtaTaskConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateOtaTaskConfiguration API call.

---

##### `CreateProvisioningProfile`<sup>Required</sup> <a name="CreateProvisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.CreateProvisioningProfile"></a>

```typescript
public readonly CreateProvisioningProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateProvisioningProfile API call.

---

##### `DeleteAccountAssociation`<sup>Required</sup> <a name="DeleteAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteAccountAssociation"></a>

```typescript
public readonly DeleteAccountAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccountAssociation API call.

---

##### `DeleteCloudConnector`<sup>Required</sup> <a name="DeleteCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteCloudConnector"></a>

```typescript
public readonly DeleteCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudConnector API call.

---

##### `DeleteConnectorDestination`<sup>Required</sup> <a name="DeleteConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteConnectorDestination"></a>

```typescript
public readonly DeleteConnectorDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectorDestination API call.

---

##### `DeleteCredentialLocker`<sup>Required</sup> <a name="DeleteCredentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteCredentialLocker"></a>

```typescript
public readonly DeleteCredentialLocker: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCredentialLocker API call.

---

##### `DeleteDestination`<sup>Required</sup> <a name="DeleteDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteDestination"></a>

```typescript
public readonly DeleteDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDestination API call.

---

##### `DeleteEventLogConfiguration`<sup>Required</sup> <a name="DeleteEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteEventLogConfiguration"></a>

```typescript
public readonly DeleteEventLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventLogConfiguration API call.

---

##### `DeleteManagedThing`<sup>Required</sup> <a name="DeleteManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteManagedThing"></a>

```typescript
public readonly DeleteManagedThing: string[];
```

- *Type:* string[]

IAM actions required for the DeleteManagedThing API call.

---

##### `DeleteNotificationConfiguration`<sup>Required</sup> <a name="DeleteNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteNotificationConfiguration"></a>

```typescript
public readonly DeleteNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotificationConfiguration API call.

---

##### `DeleteOtaTask`<sup>Required</sup> <a name="DeleteOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteOtaTask"></a>

```typescript
public readonly DeleteOtaTask: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOtaTask API call.

---

##### `DeleteOtaTaskConfiguration`<sup>Required</sup> <a name="DeleteOtaTaskConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteOtaTaskConfiguration"></a>

```typescript
public readonly DeleteOtaTaskConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOtaTaskConfiguration API call.

---

##### `DeleteProvisioningProfile`<sup>Required</sup> <a name="DeleteProvisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeleteProvisioningProfile"></a>

```typescript
public readonly DeleteProvisioningProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProvisioningProfile API call.

---

##### `DeregisterAccountAssociation`<sup>Required</sup> <a name="DeregisterAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.DeregisterAccountAssociation"></a>

```typescript
public readonly DeregisterAccountAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterAccountAssociation API call.

---

##### `ListAccountAssociations`<sup>Required</sup> <a name="ListAccountAssociations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListAccountAssociations"></a>

```typescript
public readonly ListAccountAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAssociations API call.

---

##### `ListCloudConnectors`<sup>Required</sup> <a name="ListCloudConnectors" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListCloudConnectors"></a>

```typescript
public readonly ListCloudConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudConnectors API call.

---

##### `ListConnectorDestinations`<sup>Required</sup> <a name="ListConnectorDestinations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListConnectorDestinations"></a>

```typescript
public readonly ListConnectorDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorDestinations API call.

---

##### `ListCredentialLockers`<sup>Required</sup> <a name="ListCredentialLockers" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListCredentialLockers"></a>

```typescript
public readonly ListCredentialLockers: string[];
```

- *Type:* string[]

IAM actions required for the ListCredentialLockers API call.

---

##### `ListDestinations`<sup>Required</sup> <a name="ListDestinations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListDestinations"></a>

```typescript
public readonly ListDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListDestinations API call.

---

##### `ListDeviceDiscoveries`<sup>Required</sup> <a name="ListDeviceDiscoveries" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListDeviceDiscoveries"></a>

```typescript
public readonly ListDeviceDiscoveries: string[];
```

- *Type:* string[]

IAM actions required for the ListDeviceDiscoveries API call.

---

##### `ListDiscoveredDevices`<sup>Required</sup> <a name="ListDiscoveredDevices" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListDiscoveredDevices"></a>

```typescript
public readonly ListDiscoveredDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListDiscoveredDevices API call.

---

##### `ListEventLogConfigurations`<sup>Required</sup> <a name="ListEventLogConfigurations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListEventLogConfigurations"></a>

```typescript
public readonly ListEventLogConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListEventLogConfigurations API call.

---

##### `ListManagedThingAccountAssociations`<sup>Required</sup> <a name="ListManagedThingAccountAssociations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListManagedThingAccountAssociations"></a>

```typescript
public readonly ListManagedThingAccountAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedThingAccountAssociations API call.

---

##### `ListManagedThings`<sup>Required</sup> <a name="ListManagedThings" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListManagedThings"></a>

```typescript
public readonly ListManagedThings: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedThings API call.

---

##### `ListManagedThingSchemas`<sup>Required</sup> <a name="ListManagedThingSchemas" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListManagedThingSchemas"></a>

```typescript
public readonly ListManagedThingSchemas: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedThingSchemas API call.

---

##### `ListNotificationConfigurations`<sup>Required</sup> <a name="ListNotificationConfigurations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListNotificationConfigurations"></a>

```typescript
public readonly ListNotificationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListNotificationConfigurations API call.

---

##### `ListOtaTaskConfigurations`<sup>Required</sup> <a name="ListOtaTaskConfigurations" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListOtaTaskConfigurations"></a>

```typescript
public readonly ListOtaTaskConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListOtaTaskConfigurations API call.

---

##### `ListOtaTaskExecutions`<sup>Required</sup> <a name="ListOtaTaskExecutions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListOtaTaskExecutions"></a>

```typescript
public readonly ListOtaTaskExecutions: string[];
```

- *Type:* string[]

IAM actions required for the ListOtaTaskExecutions API call.

---

##### `ListOtaTasks`<sup>Required</sup> <a name="ListOtaTasks" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListOtaTasks"></a>

```typescript
public readonly ListOtaTasks: string[];
```

- *Type:* string[]

IAM actions required for the ListOtaTasks API call.

---

##### `ListProvisioningProfiles`<sup>Required</sup> <a name="ListProvisioningProfiles" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListProvisioningProfiles"></a>

```typescript
public readonly ListProvisioningProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListProvisioningProfiles API call.

---

##### `ListSchemaVersions`<sup>Required</sup> <a name="ListSchemaVersions" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListSchemaVersions"></a>

```typescript
public readonly ListSchemaVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListSchemaVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountAssociation`<sup>Required</sup> <a name="opGetAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetAccountAssociation"></a>

```typescript
public readonly opGetAccountAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountAssociation API call.

---

##### `opGetCloudConnector`<sup>Required</sup> <a name="opGetCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetCloudConnector"></a>

```typescript
public readonly opGetCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudConnector API call.

---

##### `opGetConnectorDestination`<sup>Required</sup> <a name="opGetConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetConnectorDestination"></a>

```typescript
public readonly opGetConnectorDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectorDestination API call.

---

##### `opGetCredentialLocker`<sup>Required</sup> <a name="opGetCredentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetCredentialLocker"></a>

```typescript
public readonly opGetCredentialLocker: string[];
```

- *Type:* string[]

IAM actions required for the GetCredentialLocker API call.

---

##### `opGetCustomEndpoint`<sup>Required</sup> <a name="opGetCustomEndpoint" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetCustomEndpoint"></a>

```typescript
public readonly opGetCustomEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomEndpoint API call.

---

##### `opGetDefaultEncryptionConfiguration`<sup>Required</sup> <a name="opGetDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetDefaultEncryptionConfiguration"></a>

```typescript
public readonly opGetDefaultEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetDefaultEncryptionConfiguration API call.

---

##### `opGetDestination`<sup>Required</sup> <a name="opGetDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetDestination"></a>

```typescript
public readonly opGetDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetDestination API call.

---

##### `opGetDeviceDiscovery`<sup>Required</sup> <a name="opGetDeviceDiscovery" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetDeviceDiscovery"></a>

```typescript
public readonly opGetDeviceDiscovery: string[];
```

- *Type:* string[]

IAM actions required for the GetDeviceDiscovery API call.

---

##### `opGetEventLogConfiguration`<sup>Required</sup> <a name="opGetEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetEventLogConfiguration"></a>

```typescript
public readonly opGetEventLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEventLogConfiguration API call.

---

##### `opGetHubConfiguration`<sup>Required</sup> <a name="opGetHubConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetHubConfiguration"></a>

```typescript
public readonly opGetHubConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetHubConfiguration API call.

---

##### `opGetManagedThing`<sup>Required</sup> <a name="opGetManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThing"></a>

```typescript
public readonly opGetManagedThing: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedThing API call.

---

##### `opGetManagedThingCapabilities`<sup>Required</sup> <a name="opGetManagedThingCapabilities" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingCapabilities"></a>

```typescript
public readonly opGetManagedThingCapabilities: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedThingCapabilities API call.

---

##### `opGetManagedThingCertificate`<sup>Required</sup> <a name="opGetManagedThingCertificate" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingCertificate"></a>

```typescript
public readonly opGetManagedThingCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedThingCertificate API call.

---

##### `opGetManagedThingConnectivityData`<sup>Required</sup> <a name="opGetManagedThingConnectivityData" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingConnectivityData"></a>

```typescript
public readonly opGetManagedThingConnectivityData: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedThingConnectivityData API call.

---

##### `opGetManagedThingMetaData`<sup>Required</sup> <a name="opGetManagedThingMetaData" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingMetaData"></a>

```typescript
public readonly opGetManagedThingMetaData: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedThingMetaData API call.

---

##### `opGetManagedThingState`<sup>Required</sup> <a name="opGetManagedThingState" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetManagedThingState"></a>

```typescript
public readonly opGetManagedThingState: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedThingState API call.

---

##### `opGetNotificationConfiguration`<sup>Required</sup> <a name="opGetNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetNotificationConfiguration"></a>

```typescript
public readonly opGetNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetNotificationConfiguration API call.

---

##### `opGetOtaTask`<sup>Required</sup> <a name="opGetOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetOtaTask"></a>

```typescript
public readonly opGetOtaTask: string[];
```

- *Type:* string[]

IAM actions required for the GetOtaTask API call.

---

##### `opGetOtaTaskConfiguration`<sup>Required</sup> <a name="opGetOtaTaskConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetOtaTaskConfiguration"></a>

```typescript
public readonly opGetOtaTaskConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetOtaTaskConfiguration API call.

---

##### `opGetProvisioningProfile`<sup>Required</sup> <a name="opGetProvisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetProvisioningProfile"></a>

```typescript
public readonly opGetProvisioningProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetProvisioningProfile API call.

---

##### `opGetRuntimeLogConfiguration`<sup>Required</sup> <a name="opGetRuntimeLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetRuntimeLogConfiguration"></a>

```typescript
public readonly opGetRuntimeLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetRuntimeLogConfiguration API call.

---

##### `opGetSchemaVersion`<sup>Required</sup> <a name="opGetSchemaVersion" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.opGetSchemaVersion"></a>

```typescript
public readonly opGetSchemaVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetSchemaVersion API call.

---

##### `PutDefaultEncryptionConfiguration`<sup>Required</sup> <a name="PutDefaultEncryptionConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.PutDefaultEncryptionConfiguration"></a>

```typescript
public readonly PutDefaultEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutDefaultEncryptionConfiguration API call.

---

##### `PutHubConfiguration`<sup>Required</sup> <a name="PutHubConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.PutHubConfiguration"></a>

```typescript
public readonly PutHubConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutHubConfiguration API call.

---

##### `PutRuntimeLogConfiguration`<sup>Required</sup> <a name="PutRuntimeLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.PutRuntimeLogConfiguration"></a>

```typescript
public readonly PutRuntimeLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutRuntimeLogConfiguration API call.

---

##### `RegisterAccountAssociation`<sup>Required</sup> <a name="RegisterAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.RegisterAccountAssociation"></a>

```typescript
public readonly RegisterAccountAssociation: string[];
```

- *Type:* string[]

IAM actions required for the RegisterAccountAssociation API call.

---

##### `RegisterCustomEndpoint`<sup>Required</sup> <a name="RegisterCustomEndpoint" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.RegisterCustomEndpoint"></a>

```typescript
public readonly RegisterCustomEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the RegisterCustomEndpoint API call.

---

##### `ResetRuntimeLogConfiguration`<sup>Required</sup> <a name="ResetRuntimeLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.ResetRuntimeLogConfiguration"></a>

```typescript
public readonly ResetRuntimeLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ResetRuntimeLogConfiguration API call.

---

##### `SendConnectorEvent`<sup>Required</sup> <a name="SendConnectorEvent" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.SendConnectorEvent"></a>

```typescript
public readonly SendConnectorEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendConnectorEvent API call.

---

##### `SendManagedThingCommand`<sup>Required</sup> <a name="SendManagedThingCommand" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.SendManagedThingCommand"></a>

```typescript
public readonly SendManagedThingCommand: string[];
```

- *Type:* string[]

IAM actions required for the SendManagedThingCommand API call.

---

##### `StartAccountAssociationRefresh`<sup>Required</sup> <a name="StartAccountAssociationRefresh" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.StartAccountAssociationRefresh"></a>

```typescript
public readonly StartAccountAssociationRefresh: string[];
```

- *Type:* string[]

IAM actions required for the StartAccountAssociationRefresh API call.

---

##### `StartDeviceDiscovery`<sup>Required</sup> <a name="StartDeviceDiscovery" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.StartDeviceDiscovery"></a>

```typescript
public readonly StartDeviceDiscovery: string[];
```

- *Type:* string[]

IAM actions required for the StartDeviceDiscovery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountAssociation`<sup>Required</sup> <a name="UpdateAccountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateAccountAssociation"></a>

```typescript
public readonly UpdateAccountAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountAssociation API call.

---

##### `UpdateCloudConnector`<sup>Required</sup> <a name="UpdateCloudConnector" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateCloudConnector"></a>

```typescript
public readonly UpdateCloudConnector: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCloudConnector API call.

---

##### `UpdateConnectorDestination`<sup>Required</sup> <a name="UpdateConnectorDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateConnectorDestination"></a>

```typescript
public readonly UpdateConnectorDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectorDestination API call.

---

##### `UpdateDestination`<sup>Required</sup> <a name="UpdateDestination" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateDestination"></a>

```typescript
public readonly UpdateDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDestination API call.

---

##### `UpdateEventLogConfiguration`<sup>Required</sup> <a name="UpdateEventLogConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateEventLogConfiguration"></a>

```typescript
public readonly UpdateEventLogConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventLogConfiguration API call.

---

##### `UpdateManagedThing`<sup>Required</sup> <a name="UpdateManagedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateManagedThing"></a>

```typescript
public readonly UpdateManagedThing: string[];
```

- *Type:* string[]

IAM actions required for the UpdateManagedThing API call.

---

##### `UpdateNotificationConfiguration`<sup>Required</sup> <a name="UpdateNotificationConfiguration" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateNotificationConfiguration"></a>

```typescript
public readonly UpdateNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotificationConfiguration API call.

---

##### `UpdateOtaTask`<sup>Required</sup> <a name="UpdateOtaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOperations.property.UpdateOtaTask"></a>

```typescript
public readonly UpdateOtaTask: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOtaTask API call.

---

### IotmanagedintegrationsResources <a name="IotmanagedintegrationsResources" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources"></a>

ARN builders, validators, and parsers for iotmanagedintegrations resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.Initializer"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

new iotmanagedintegrations.IotmanagedintegrationsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.accountAssociation">accountAssociation</a></code> | Builds an ARN for the account-association resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.credentialLocker">credentialLocker</a></code> | Builds an ARN for the credential-locker resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidAccountAssociationArn">isValidAccountAssociationArn</a></code> | Validates whether a string is a valid ARN for the account-association resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidCredentialLockerArn">isValidCredentialLockerArn</a></code> | Validates whether a string is a valid ARN for the credential-locker resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidManagedThingArn">isValidManagedThingArn</a></code> | Validates whether a string is a valid ARN for the managed-thing resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidOtaTaskArn">isValidOtaTaskArn</a></code> | Validates whether a string is a valid ARN for the ota-task resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidProvisioningProfileArn">isValidProvisioningProfileArn</a></code> | Validates whether a string is a valid ARN for the provisioning-profile resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.managedThing">managedThing</a></code> | Builds an ARN for the managed-thing resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.otaTask">otaTask</a></code> | Builds an ARN for the ota-task resource. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseAccountAssociationArn">parseAccountAssociationArn</a></code> | Parses a account-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseCredentialLockerArn">parseCredentialLockerArn</a></code> | Parses a credential-locker ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseManagedThingArn">parseManagedThingArn</a></code> | Parses a managed-thing ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseOtaTaskArn">parseOtaTaskArn</a></code> | Parses a ota-task ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseProvisioningProfileArn">parseProvisioningProfileArn</a></code> | Parses a provisioning-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.provisioningProfile">provisioningProfile</a></code> | Builds an ARN for the provisioning-profile resource. |

---

##### `accountAssociation` <a name="accountAssociation" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.accountAssociation"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.accountAssociation(props: IotmanagedintegrationsAccountAssociationArnProps)
```

Builds an ARN for the account-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.accountAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsAccountAssociationArnProps">IotmanagedintegrationsAccountAssociationArnProps</a>

---

##### `credentialLocker` <a name="credentialLocker" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.credentialLocker"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.credentialLocker(props: IotmanagedintegrationsCredentialLockerArnProps)
```

Builds an ARN for the credential-locker resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.credentialLocker.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsCredentialLockerArnProps">IotmanagedintegrationsCredentialLockerArnProps</a>

---

##### `isValidAccountAssociationArn` <a name="isValidAccountAssociationArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidAccountAssociationArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.isValidAccountAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the account-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidAccountAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCredentialLockerArn` <a name="isValidCredentialLockerArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidCredentialLockerArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.isValidCredentialLockerArn(arn: string)
```

Validates whether a string is a valid ARN for the credential-locker resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidCredentialLockerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidManagedThingArn` <a name="isValidManagedThingArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidManagedThingArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.isValidManagedThingArn(arn: string)
```

Validates whether a string is a valid ARN for the managed-thing resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidManagedThingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOtaTaskArn` <a name="isValidOtaTaskArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidOtaTaskArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.isValidOtaTaskArn(arn: string)
```

Validates whether a string is a valid ARN for the ota-task resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidOtaTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProvisioningProfileArn` <a name="isValidProvisioningProfileArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidProvisioningProfileArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.isValidProvisioningProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the provisioning-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.isValidProvisioningProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `managedThing` <a name="managedThing" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.managedThing"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.managedThing(props: IotmanagedintegrationsManagedThingArnProps)
```

Builds an ARN for the managed-thing resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.managedThing.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsManagedThingArnProps">IotmanagedintegrationsManagedThingArnProps</a>

---

##### `otaTask` <a name="otaTask" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.otaTask"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.otaTask(props: IotmanagedintegrationsOtaTaskArnProps)
```

Builds an ARN for the ota-task resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.otaTask.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsOtaTaskArnProps">IotmanagedintegrationsOtaTaskArnProps</a>

---

##### `parseAccountAssociationArn` <a name="parseAccountAssociationArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseAccountAssociationArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.parseAccountAssociationArn(arn: string)
```

Parses a account-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseAccountAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCredentialLockerArn` <a name="parseCredentialLockerArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseCredentialLockerArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.parseCredentialLockerArn(arn: string)
```

Parses a credential-locker ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseCredentialLockerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseManagedThingArn` <a name="parseManagedThingArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseManagedThingArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.parseManagedThingArn(arn: string)
```

Parses a managed-thing ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseManagedThingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOtaTaskArn` <a name="parseOtaTaskArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseOtaTaskArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.parseOtaTaskArn(arn: string)
```

Parses a ota-task ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseOtaTaskArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProvisioningProfileArn` <a name="parseProvisioningProfileArn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseProvisioningProfileArn"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.parseProvisioningProfileArn(arn: string)
```

Parses a provisioning-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.parseProvisioningProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `provisioningProfile` <a name="provisioningProfile" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.provisioningProfile"></a>

```typescript
import { iotmanagedintegrations } from '@cdk_utils/iam'

iotmanagedintegrations.IotmanagedintegrationsResources.provisioningProfile(props: IotmanagedintegrationsProvisioningProfileArnProps)
```

Builds an ARN for the provisioning-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsResources.provisioningProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotmanagedintegrations.IotmanagedintegrationsProvisioningProfileArnProps">IotmanagedintegrationsProvisioningProfileArnProps</a>

---




