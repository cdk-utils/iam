# `organizations` Submodule <a name="`organizations` Submodule" id="@cdk_utils/iam.organizations"></a>


## Structs <a name="Structs" id="Structs"></a>

### OrganizationsAccountArnComponents <a name="OrganizationsAccountArnComponents" id="@cdk_utils/iam.organizations.OrganizationsAccountArnComponents"></a>

Parsed components of a account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsAccountArnComponents: organizations.OrganizationsAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### OrganizationsAccountArnProps <a name="OrganizationsAccountArnProps" id="@cdk_utils/iam.organizations.OrganizationsAccountArnProps"></a>

Properties for building a account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsAccountArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsAccountArnProps: organizations.OrganizationsAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.accountId">accountId</a></code> | <code>string</code> | The AccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

The AccountId component of the ARN.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsAwspolicyArnComponents <a name="OrganizationsAwspolicyArnComponents" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents"></a>

Parsed components of a awspolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsAwspolicyArnComponents: organizations.OrganizationsAwspolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.policyType">policyType</a></code> | <code>string</code> | The PolicyType component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

The PolicyType component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### OrganizationsAwspolicyArnProps <a name="OrganizationsAwspolicyArnProps" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps"></a>

Properties for building a awspolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsAwspolicyArnProps: organizations.OrganizationsAwspolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.policyType">policyType</a></code> | <code>string</code> | The PolicyType component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component of the ARN.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

The PolicyType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### OrganizationsHandshakeArnComponents <a name="OrganizationsHandshakeArnComponents" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents"></a>

Parsed components of a handshake ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsHandshakeArnComponents: organizations.OrganizationsHandshakeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.handshakeId">handshakeId</a></code> | <code>string</code> | The HandshakeId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.handshakeType">handshakeType</a></code> | <code>string</code> | The HandshakeType component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `handshakeId`<sup>Required</sup> <a name="handshakeId" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.handshakeId"></a>

```typescript
public readonly handshakeId: string;
```

- *Type:* string

The HandshakeId component.

---

##### `handshakeType`<sup>Required</sup> <a name="handshakeType" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.handshakeType"></a>

```typescript
public readonly handshakeType: string;
```

- *Type:* string

The HandshakeType component.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### OrganizationsHandshakeArnProps <a name="OrganizationsHandshakeArnProps" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps"></a>

Properties for building a handshake ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsHandshakeArnProps: organizations.OrganizationsHandshakeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.handshakeId">handshakeId</a></code> | <code>string</code> | The HandshakeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.handshakeType">handshakeType</a></code> | <code>string</code> | The HandshakeType component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `handshakeId`<sup>Required</sup> <a name="handshakeId" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.handshakeId"></a>

```typescript
public readonly handshakeId: string;
```

- *Type:* string

The HandshakeId component of the ARN.

---

##### `handshakeType`<sup>Required</sup> <a name="handshakeType" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.handshakeType"></a>

```typescript
public readonly handshakeType: string;
```

- *Type:* string

The HandshakeType component of the ARN.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsOrganizationalunitArnComponents <a name="OrganizationsOrganizationalunitArnComponents" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents"></a>

Parsed components of a organizationalunit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsOrganizationalunitArnComponents: organizations.OrganizationsOrganizationalunitArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.organizationalUnitId">organizationalUnitId</a></code> | <code>string</code> | The OrganizationalUnitId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.organizationalUnitId"></a>

```typescript
public readonly organizationalUnitId: string;
```

- *Type:* string

The OrganizationalUnitId component.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### OrganizationsOrganizationalunitArnProps <a name="OrganizationsOrganizationalunitArnProps" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps"></a>

Properties for building a organizationalunit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsOrganizationalunitArnProps: organizations.OrganizationsOrganizationalunitArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.organizationalUnitId">organizationalUnitId</a></code> | <code>string</code> | The OrganizationalUnitId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.organizationalUnitId"></a>

```typescript
public readonly organizationalUnitId: string;
```

- *Type:* string

The OrganizationalUnitId component of the ARN.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsOrganizationArnComponents <a name="OrganizationsOrganizationArnComponents" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents"></a>

Parsed components of a organization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsOrganizationArnComponents: organizations.OrganizationsOrganizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### OrganizationsOrganizationArnProps <a name="OrganizationsOrganizationArnProps" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps"></a>

Properties for building a organization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsOrganizationArnProps: organizations.OrganizationsOrganizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsPolicyArnComponents <a name="OrganizationsPolicyArnComponents" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsPolicyArnComponents: organizations.OrganizationsPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.policyType">policyType</a></code> | <code>string</code> | The PolicyType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnComponents.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

The PolicyType component.

---

### OrganizationsPolicyArnProps <a name="OrganizationsPolicyArnProps" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsPolicyArnProps: organizations.OrganizationsPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.policyId">policyId</a></code> | <code>string</code> | The PolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.policyType">policyType</a></code> | <code>string</code> | The PolicyType component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

The PolicyId component of the ARN.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

The PolicyType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsResourcepolicyArnComponents <a name="OrganizationsResourcepolicyArnComponents" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents"></a>

Parsed components of a resourcepolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsResourcepolicyArnComponents: organizations.OrganizationsResourcepolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.resourcePolicyId">resourcePolicyId</a></code> | <code>string</code> | The ResourcePolicyId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourcePolicyId`<sup>Required</sup> <a name="resourcePolicyId" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnComponents.property.resourcePolicyId"></a>

```typescript
public readonly resourcePolicyId: string;
```

- *Type:* string

The ResourcePolicyId component.

---

### OrganizationsResourcepolicyArnProps <a name="OrganizationsResourcepolicyArnProps" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps"></a>

Properties for building a resourcepolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsResourcepolicyArnProps: organizations.OrganizationsResourcepolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.resourcePolicyId">resourcePolicyId</a></code> | <code>string</code> | The ResourcePolicyId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `resourcePolicyId`<sup>Required</sup> <a name="resourcePolicyId" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.resourcePolicyId"></a>

```typescript
public readonly resourcePolicyId: string;
```

- *Type:* string

The ResourcePolicyId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsResponsibilitytransferArnComponents <a name="OrganizationsResponsibilitytransferArnComponents" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents"></a>

Parsed components of a responsibilitytransfer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsResponsibilitytransferArnComponents: organizations.OrganizationsResponsibilitytransferArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.responsibilityTransferId">responsibilityTransferId</a></code> | <code>string</code> | The ResponsibilityTransferId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.transferDirection">transferDirection</a></code> | <code>string</code> | The TransferDirection component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.transferType">transferType</a></code> | <code>string</code> | The TransferType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `responsibilityTransferId`<sup>Required</sup> <a name="responsibilityTransferId" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.responsibilityTransferId"></a>

```typescript
public readonly responsibilityTransferId: string;
```

- *Type:* string

The ResponsibilityTransferId component.

---

##### `transferDirection`<sup>Required</sup> <a name="transferDirection" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.transferDirection"></a>

```typescript
public readonly transferDirection: string;
```

- *Type:* string

The TransferDirection component.

---

##### `transferType`<sup>Required</sup> <a name="transferType" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnComponents.property.transferType"></a>

```typescript
public readonly transferType: string;
```

- *Type:* string

The TransferType component.

---

### OrganizationsResponsibilitytransferArnProps <a name="OrganizationsResponsibilitytransferArnProps" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps"></a>

Properties for building a responsibilitytransfer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsResponsibilitytransferArnProps: organizations.OrganizationsResponsibilitytransferArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.responsibilityTransferId">responsibilityTransferId</a></code> | <code>string</code> | The ResponsibilityTransferId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.transferDirection">transferDirection</a></code> | <code>string</code> | The TransferDirection component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.transferType">transferType</a></code> | <code>string</code> | The TransferType component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `responsibilityTransferId`<sup>Required</sup> <a name="responsibilityTransferId" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.responsibilityTransferId"></a>

```typescript
public readonly responsibilityTransferId: string;
```

- *Type:* string

The ResponsibilityTransferId component of the ARN.

---

##### `transferDirection`<sup>Required</sup> <a name="transferDirection" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.transferDirection"></a>

```typescript
public readonly transferDirection: string;
```

- *Type:* string

The TransferDirection component of the ARN.

---

##### `transferType`<sup>Required</sup> <a name="transferType" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.transferType"></a>

```typescript
public readonly transferType: string;
```

- *Type:* string

The TransferType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### OrganizationsRootArnComponents <a name="OrganizationsRootArnComponents" id="@cdk_utils/iam.organizations.OrganizationsRootArnComponents"></a>

Parsed components of a root ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsRootArnComponents.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsRootArnComponents: organizations.OrganizationsRootArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.rootId">rootId</a></code> | <code>string</code> | The RootId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="@cdk_utils/iam.organizations.OrganizationsRootArnComponents.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

The RootId component.

---

### OrganizationsRootArnProps <a name="OrganizationsRootArnProps" id="@cdk_utils/iam.organizations.OrganizationsRootArnProps"></a>

Properties for building a root ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.organizations.OrganizationsRootArnProps.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

const organizationsRootArnProps: organizations.OrganizationsRootArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.rootId">rootId</a></code> | <code>string</code> | The RootId component of the ARN. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `rootId`<sup>Required</sup> <a name="rootId" id="@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.rootId"></a>

```typescript
public readonly rootId: string;
```

- *Type:* string

The RootId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.organizations.OrganizationsRootArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationsActions <a name="OrganizationsActions" id="@cdk_utils/iam.organizations.OrganizationsActions"></a>

IAM action constants for the organizations service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.organizations.OrganizationsActions.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

new organizations.OrganizationsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AcceptHandshake">AcceptHandshake</a></code> | <code>string</code> | [Write] organizations:AcceptHandshake. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.AttachPolicy">AttachPolicy</a></code> | <code>string</code> | [PermissionManagement] organizations:AttachPolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CancelHandshake">CancelHandshake</a></code> | <code>string</code> | [Write] organizations:CancelHandshake. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CloseAccount">CloseAccount</a></code> | <code>string</code> | [Write] organizations:CloseAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CreateAccount">CreateAccount</a></code> | <code>string</code> | [Write] organizations:CreateAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CreateGovCloudAccount">CreateGovCloudAccount</a></code> | <code>string</code> | [Write] organizations:CreateGovCloudAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CreateOrganization">CreateOrganization</a></code> | <code>string</code> | [Write] organizations:CreateOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CreateOrganizationalUnit">CreateOrganizationalUnit</a></code> | <code>string</code> | [Write] organizations:CreateOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [Write] organizations:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DeclineHandshake">DeclineHandshake</a></code> | <code>string</code> | [Write] organizations:DeclineHandshake. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DeleteOrganization">DeleteOrganization</a></code> | <code>string</code> | [Write] organizations:DeleteOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DeleteOrganizationalUnit">DeleteOrganizationalUnit</a></code> | <code>string</code> | [Write] organizations:DeleteOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] organizations:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] organizations:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DeregisterDelegatedAdministrator">DeregisterDelegatedAdministrator</a></code> | <code>string</code> | [Write] organizations:DeregisterDelegatedAdministrator. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeAccount">DescribeAccount</a></code> | <code>string</code> | [Read] organizations:DescribeAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeCreateAccountStatus">DescribeCreateAccountStatus</a></code> | <code>string</code> | [Read] organizations:DescribeCreateAccountStatus. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeEffectivePolicy">DescribeEffectivePolicy</a></code> | <code>string</code> | [Read] organizations:DescribeEffectivePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeHandshake">DescribeHandshake</a></code> | <code>string</code> | [Read] organizations:DescribeHandshake. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeOrganization">DescribeOrganization</a></code> | <code>string</code> | [Read] organizations:DescribeOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeOrganizationalUnit">DescribeOrganizationalUnit</a></code> | <code>string</code> | [Read] organizations:DescribeOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribePolicy">DescribePolicy</a></code> | <code>string</code> | [Read] organizations:DescribePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string</code> | [Read] organizations:DescribeResourcePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeResponsibilityTransfer">DescribeResponsibilityTransfer</a></code> | <code>string</code> | [Read] organizations:DescribeResponsibilityTransfer. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DetachPolicy">DetachPolicy</a></code> | <code>string</code> | [PermissionManagement] organizations:DetachPolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DisableAWSServiceAccess">DisableAWSServiceAccess</a></code> | <code>string</code> | [Write] organizations:DisableAWSServiceAccess. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.DisablePolicyType">DisablePolicyType</a></code> | <code>string</code> | [Write] organizations:DisablePolicyType. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.EnableAllFeatures">EnableAllFeatures</a></code> | <code>string</code> | [Write] organizations:EnableAllFeatures. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.EnableAWSServiceAccess">EnableAWSServiceAccess</a></code> | <code>string</code> | [Write] organizations:EnableAWSServiceAccess. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.EnablePolicyType">EnablePolicyType</a></code> | <code>string</code> | [Write] organizations:EnablePolicyType. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.InviteAccountToOrganization">InviteAccountToOrganization</a></code> | <code>string</code> | [Write] organizations:InviteAccountToOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.InviteOrganizationToTransferResponsibility">InviteOrganizationToTransferResponsibility</a></code> | <code>string</code> | [Write] organizations:InviteOrganizationToTransferResponsibility. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.LeaveOrganization">LeaveOrganization</a></code> | <code>string</code> | [Write] organizations:LeaveOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListAccounts">ListAccounts</a></code> | <code>string</code> | [List] organizations:ListAccounts. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListAccountsForParent">ListAccountsForParent</a></code> | <code>string</code> | [List] organizations:ListAccountsForParent. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListAccountsWithInvalidEffectivePolicy">ListAccountsWithInvalidEffectivePolicy</a></code> | <code>string</code> | [List] organizations:ListAccountsWithInvalidEffectivePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListAWSServiceAccessForOrganization">ListAWSServiceAccessForOrganization</a></code> | <code>string</code> | [List] organizations:ListAWSServiceAccessForOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListChildren">ListChildren</a></code> | <code>string</code> | [List] organizations:ListChildren. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListCreateAccountStatus">ListCreateAccountStatus</a></code> | <code>string</code> | [List] organizations:ListCreateAccountStatus. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListDelegatedAdministrators">ListDelegatedAdministrators</a></code> | <code>string</code> | [List] organizations:ListDelegatedAdministrators. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListDelegatedServicesForAccount">ListDelegatedServicesForAccount</a></code> | <code>string</code> | [List] organizations:ListDelegatedServicesForAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListEffectivePolicyValidationErrors">ListEffectivePolicyValidationErrors</a></code> | <code>string</code> | [List] organizations:ListEffectivePolicyValidationErrors. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListHandshakesForAccount">ListHandshakesForAccount</a></code> | <code>string</code> | [List] organizations:ListHandshakesForAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListHandshakesForOrganization">ListHandshakesForOrganization</a></code> | <code>string</code> | [List] organizations:ListHandshakesForOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListInboundResponsibilityTransfers">ListInboundResponsibilityTransfers</a></code> | <code>string</code> | [List] organizations:ListInboundResponsibilityTransfers. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListOrganizationalUnitsForParent">ListOrganizationalUnitsForParent</a></code> | <code>string</code> | [List] organizations:ListOrganizationalUnitsForParent. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListOutboundResponsibilityTransfers">ListOutboundResponsibilityTransfers</a></code> | <code>string</code> | [List] organizations:ListOutboundResponsibilityTransfers. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListParents">ListParents</a></code> | <code>string</code> | [List] organizations:ListParents. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] organizations:ListPolicies. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListPoliciesForTarget">ListPoliciesForTarget</a></code> | <code>string</code> | [List] organizations:ListPoliciesForTarget. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListRoots">ListRoots</a></code> | <code>string</code> | [List] organizations:ListRoots. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] organizations:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.ListTargetsForPolicy">ListTargetsForPolicy</a></code> | <code>string</code> | [List] organizations:ListTargetsForPolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.MoveAccount">MoveAccount</a></code> | <code>string</code> | [Write] organizations:MoveAccount. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] organizations:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.RegisterDelegatedAdministrator">RegisterDelegatedAdministrator</a></code> | <code>string</code> | [Write] organizations:RegisterDelegatedAdministrator. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.RemoveAccountFromOrganization">RemoveAccountFromOrganization</a></code> | <code>string</code> | [Write] organizations:RemoveAccountFromOrganization. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] organizations:TagResource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.TerminateResponsibilityTransfer">TerminateResponsibilityTransfer</a></code> | <code>string</code> | [Write] organizations:TerminateResponsibilityTransfer. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] organizations:UntagResource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.UpdateOrganizationalUnit">UpdateOrganizationalUnit</a></code> | <code>string</code> | [Write] organizations:UpdateOrganizationalUnit. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string</code> | [PermissionManagement] organizations:UpdatePolicy. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsActions.property.UpdateResponsibilityTransfer">UpdateResponsibilityTransfer</a></code> | <code>string</code> | [Write] organizations:UpdateResponsibilityTransfer. |

---

##### `AcceptHandshake`<sup>Required</sup> <a name="AcceptHandshake" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AcceptHandshake"></a>

```typescript
public readonly AcceptHandshake: string;
```

- *Type:* string

[Write] organizations:AcceptHandshake.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AttachPolicy`<sup>Required</sup> <a name="AttachPolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.AttachPolicy"></a>

```typescript
public readonly AttachPolicy: string;
```

- *Type:* string

[PermissionManagement] organizations:AttachPolicy.

---

##### `CancelHandshake`<sup>Required</sup> <a name="CancelHandshake" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CancelHandshake"></a>

```typescript
public readonly CancelHandshake: string;
```

- *Type:* string

[Write] organizations:CancelHandshake.

---

##### `CloseAccount`<sup>Required</sup> <a name="CloseAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CloseAccount"></a>

```typescript
public readonly CloseAccount: string;
```

- *Type:* string

[Write] organizations:CloseAccount.

---

##### `CreateAccount`<sup>Required</sup> <a name="CreateAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CreateAccount"></a>

```typescript
public readonly CreateAccount: string;
```

- *Type:* string

[Write] organizations:CreateAccount.

---

##### `CreateGovCloudAccount`<sup>Required</sup> <a name="CreateGovCloudAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CreateGovCloudAccount"></a>

```typescript
public readonly CreateGovCloudAccount: string;
```

- *Type:* string

[Write] organizations:CreateGovCloudAccount.

---

##### `CreateOrganization`<sup>Required</sup> <a name="CreateOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CreateOrganization"></a>

```typescript
public readonly CreateOrganization: string;
```

- *Type:* string

[Write] organizations:CreateOrganization.

---

##### `CreateOrganizationalUnit`<sup>Required</sup> <a name="CreateOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CreateOrganizationalUnit"></a>

```typescript
public readonly CreateOrganizationalUnit: string;
```

- *Type:* string

[Write] organizations:CreateOrganizationalUnit.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[Write] organizations:CreatePolicy.

---

##### `DeclineHandshake`<sup>Required</sup> <a name="DeclineHandshake" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DeclineHandshake"></a>

```typescript
public readonly DeclineHandshake: string;
```

- *Type:* string

[Write] organizations:DeclineHandshake.

---

##### `DeleteOrganization`<sup>Required</sup> <a name="DeleteOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DeleteOrganization"></a>

```typescript
public readonly DeleteOrganization: string;
```

- *Type:* string

[Write] organizations:DeleteOrganization.

---

##### `DeleteOrganizationalUnit`<sup>Required</sup> <a name="DeleteOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DeleteOrganizationalUnit"></a>

```typescript
public readonly DeleteOrganizationalUnit: string;
```

- *Type:* string

[Write] organizations:DeleteOrganizationalUnit.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] organizations:DeletePolicy.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] organizations:DeleteResourcePolicy.

---

##### `DeregisterDelegatedAdministrator`<sup>Required</sup> <a name="DeregisterDelegatedAdministrator" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DeregisterDelegatedAdministrator"></a>

```typescript
public readonly DeregisterDelegatedAdministrator: string;
```

- *Type:* string

[Write] organizations:DeregisterDelegatedAdministrator.

---

##### `DescribeAccount`<sup>Required</sup> <a name="DescribeAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeAccount"></a>

```typescript
public readonly DescribeAccount: string;
```

- *Type:* string

[Read] organizations:DescribeAccount.

---

##### `DescribeCreateAccountStatus`<sup>Required</sup> <a name="DescribeCreateAccountStatus" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeCreateAccountStatus"></a>

```typescript
public readonly DescribeCreateAccountStatus: string;
```

- *Type:* string

[Read] organizations:DescribeCreateAccountStatus.

---

##### `DescribeEffectivePolicy`<sup>Required</sup> <a name="DescribeEffectivePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeEffectivePolicy"></a>

```typescript
public readonly DescribeEffectivePolicy: string;
```

- *Type:* string

[Read] organizations:DescribeEffectivePolicy.

---

##### `DescribeHandshake`<sup>Required</sup> <a name="DescribeHandshake" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeHandshake"></a>

```typescript
public readonly DescribeHandshake: string;
```

- *Type:* string

[Read] organizations:DescribeHandshake.

---

##### `DescribeOrganization`<sup>Required</sup> <a name="DescribeOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeOrganization"></a>

```typescript
public readonly DescribeOrganization: string;
```

- *Type:* string

[Read] organizations:DescribeOrganization.

---

##### `DescribeOrganizationalUnit`<sup>Required</sup> <a name="DescribeOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeOrganizationalUnit"></a>

```typescript
public readonly DescribeOrganizationalUnit: string;
```

- *Type:* string

[Read] organizations:DescribeOrganizationalUnit.

---

##### `DescribePolicy`<sup>Required</sup> <a name="DescribePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribePolicy"></a>

```typescript
public readonly DescribePolicy: string;
```

- *Type:* string

[Read] organizations:DescribePolicy.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string;
```

- *Type:* string

[Read] organizations:DescribeResourcePolicy.

---

##### `DescribeResponsibilityTransfer`<sup>Required</sup> <a name="DescribeResponsibilityTransfer" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DescribeResponsibilityTransfer"></a>

```typescript
public readonly DescribeResponsibilityTransfer: string;
```

- *Type:* string

[Read] organizations:DescribeResponsibilityTransfer.

---

##### `DetachPolicy`<sup>Required</sup> <a name="DetachPolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DetachPolicy"></a>

```typescript
public readonly DetachPolicy: string;
```

- *Type:* string

[PermissionManagement] organizations:DetachPolicy.

---

##### `DisableAWSServiceAccess`<sup>Required</sup> <a name="DisableAWSServiceAccess" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DisableAWSServiceAccess"></a>

```typescript
public readonly DisableAWSServiceAccess: string;
```

- *Type:* string

[Write] organizations:DisableAWSServiceAccess.

---

##### `DisablePolicyType`<sup>Required</sup> <a name="DisablePolicyType" id="@cdk_utils/iam.organizations.OrganizationsActions.property.DisablePolicyType"></a>

```typescript
public readonly DisablePolicyType: string;
```

- *Type:* string

[Write] organizations:DisablePolicyType.

---

##### `EnableAllFeatures`<sup>Required</sup> <a name="EnableAllFeatures" id="@cdk_utils/iam.organizations.OrganizationsActions.property.EnableAllFeatures"></a>

```typescript
public readonly EnableAllFeatures: string;
```

- *Type:* string

[Write] organizations:EnableAllFeatures.

---

##### `EnableAWSServiceAccess`<sup>Required</sup> <a name="EnableAWSServiceAccess" id="@cdk_utils/iam.organizations.OrganizationsActions.property.EnableAWSServiceAccess"></a>

```typescript
public readonly EnableAWSServiceAccess: string;
```

- *Type:* string

[Write] organizations:EnableAWSServiceAccess.

---

##### `EnablePolicyType`<sup>Required</sup> <a name="EnablePolicyType" id="@cdk_utils/iam.organizations.OrganizationsActions.property.EnablePolicyType"></a>

```typescript
public readonly EnablePolicyType: string;
```

- *Type:* string

[Write] organizations:EnablePolicyType.

---

##### `InviteAccountToOrganization`<sup>Required</sup> <a name="InviteAccountToOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.InviteAccountToOrganization"></a>

```typescript
public readonly InviteAccountToOrganization: string;
```

- *Type:* string

[Write] organizations:InviteAccountToOrganization.

---

##### `InviteOrganizationToTransferResponsibility`<sup>Required</sup> <a name="InviteOrganizationToTransferResponsibility" id="@cdk_utils/iam.organizations.OrganizationsActions.property.InviteOrganizationToTransferResponsibility"></a>

```typescript
public readonly InviteOrganizationToTransferResponsibility: string;
```

- *Type:* string

[Write] organizations:InviteOrganizationToTransferResponsibility.

---

##### `LeaveOrganization`<sup>Required</sup> <a name="LeaveOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.LeaveOrganization"></a>

```typescript
public readonly LeaveOrganization: string;
```

- *Type:* string

[Write] organizations:LeaveOrganization.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string;
```

- *Type:* string

[List] organizations:ListAccounts.

---

##### `ListAccountsForParent`<sup>Required</sup> <a name="ListAccountsForParent" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListAccountsForParent"></a>

```typescript
public readonly ListAccountsForParent: string;
```

- *Type:* string

[List] organizations:ListAccountsForParent.

---

##### `ListAccountsWithInvalidEffectivePolicy`<sup>Required</sup> <a name="ListAccountsWithInvalidEffectivePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListAccountsWithInvalidEffectivePolicy"></a>

```typescript
public readonly ListAccountsWithInvalidEffectivePolicy: string;
```

- *Type:* string

[List] organizations:ListAccountsWithInvalidEffectivePolicy.

---

##### `ListAWSServiceAccessForOrganization`<sup>Required</sup> <a name="ListAWSServiceAccessForOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListAWSServiceAccessForOrganization"></a>

```typescript
public readonly ListAWSServiceAccessForOrganization: string;
```

- *Type:* string

[List] organizations:ListAWSServiceAccessForOrganization.

---

##### `ListChildren`<sup>Required</sup> <a name="ListChildren" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListChildren"></a>

```typescript
public readonly ListChildren: string;
```

- *Type:* string

[List] organizations:ListChildren.

---

##### `ListCreateAccountStatus`<sup>Required</sup> <a name="ListCreateAccountStatus" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListCreateAccountStatus"></a>

```typescript
public readonly ListCreateAccountStatus: string;
```

- *Type:* string

[List] organizations:ListCreateAccountStatus.

---

##### `ListDelegatedAdministrators`<sup>Required</sup> <a name="ListDelegatedAdministrators" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListDelegatedAdministrators"></a>

```typescript
public readonly ListDelegatedAdministrators: string;
```

- *Type:* string

[List] organizations:ListDelegatedAdministrators.

---

##### `ListDelegatedServicesForAccount`<sup>Required</sup> <a name="ListDelegatedServicesForAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListDelegatedServicesForAccount"></a>

```typescript
public readonly ListDelegatedServicesForAccount: string;
```

- *Type:* string

[List] organizations:ListDelegatedServicesForAccount.

---

##### `ListEffectivePolicyValidationErrors`<sup>Required</sup> <a name="ListEffectivePolicyValidationErrors" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListEffectivePolicyValidationErrors"></a>

```typescript
public readonly ListEffectivePolicyValidationErrors: string;
```

- *Type:* string

[List] organizations:ListEffectivePolicyValidationErrors.

---

##### `ListHandshakesForAccount`<sup>Required</sup> <a name="ListHandshakesForAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListHandshakesForAccount"></a>

```typescript
public readonly ListHandshakesForAccount: string;
```

- *Type:* string

[List] organizations:ListHandshakesForAccount.

---

##### `ListHandshakesForOrganization`<sup>Required</sup> <a name="ListHandshakesForOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListHandshakesForOrganization"></a>

```typescript
public readonly ListHandshakesForOrganization: string;
```

- *Type:* string

[List] organizations:ListHandshakesForOrganization.

---

##### `ListInboundResponsibilityTransfers`<sup>Required</sup> <a name="ListInboundResponsibilityTransfers" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListInboundResponsibilityTransfers"></a>

```typescript
public readonly ListInboundResponsibilityTransfers: string;
```

- *Type:* string

[List] organizations:ListInboundResponsibilityTransfers.

---

##### `ListOrganizationalUnitsForParent`<sup>Required</sup> <a name="ListOrganizationalUnitsForParent" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListOrganizationalUnitsForParent"></a>

```typescript
public readonly ListOrganizationalUnitsForParent: string;
```

- *Type:* string

[List] organizations:ListOrganizationalUnitsForParent.

---

##### `ListOutboundResponsibilityTransfers`<sup>Required</sup> <a name="ListOutboundResponsibilityTransfers" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListOutboundResponsibilityTransfers"></a>

```typescript
public readonly ListOutboundResponsibilityTransfers: string;
```

- *Type:* string

[List] organizations:ListOutboundResponsibilityTransfers.

---

##### `ListParents`<sup>Required</sup> <a name="ListParents" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListParents"></a>

```typescript
public readonly ListParents: string;
```

- *Type:* string

[List] organizations:ListParents.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] organizations:ListPolicies.

---

##### `ListPoliciesForTarget`<sup>Required</sup> <a name="ListPoliciesForTarget" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListPoliciesForTarget"></a>

```typescript
public readonly ListPoliciesForTarget: string;
```

- *Type:* string

[List] organizations:ListPoliciesForTarget.

---

##### `ListRoots`<sup>Required</sup> <a name="ListRoots" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListRoots"></a>

```typescript
public readonly ListRoots: string;
```

- *Type:* string

[List] organizations:ListRoots.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] organizations:ListTagsForResource.

---

##### `ListTargetsForPolicy`<sup>Required</sup> <a name="ListTargetsForPolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.ListTargetsForPolicy"></a>

```typescript
public readonly ListTargetsForPolicy: string;
```

- *Type:* string

[List] organizations:ListTargetsForPolicy.

---

##### `MoveAccount`<sup>Required</sup> <a name="MoveAccount" id="@cdk_utils/iam.organizations.OrganizationsActions.property.MoveAccount"></a>

```typescript
public readonly MoveAccount: string;
```

- *Type:* string

[Write] organizations:MoveAccount.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] organizations:PutResourcePolicy.

---

##### `RegisterDelegatedAdministrator`<sup>Required</sup> <a name="RegisterDelegatedAdministrator" id="@cdk_utils/iam.organizations.OrganizationsActions.property.RegisterDelegatedAdministrator"></a>

```typescript
public readonly RegisterDelegatedAdministrator: string;
```

- *Type:* string

[Write] organizations:RegisterDelegatedAdministrator.

---

##### `RemoveAccountFromOrganization`<sup>Required</sup> <a name="RemoveAccountFromOrganization" id="@cdk_utils/iam.organizations.OrganizationsActions.property.RemoveAccountFromOrganization"></a>

```typescript
public readonly RemoveAccountFromOrganization: string;
```

- *Type:* string

[Write] organizations:RemoveAccountFromOrganization.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.organizations.OrganizationsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.organizations.OrganizationsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] organizations:TagResource.

---

##### `TerminateResponsibilityTransfer`<sup>Required</sup> <a name="TerminateResponsibilityTransfer" id="@cdk_utils/iam.organizations.OrganizationsActions.property.TerminateResponsibilityTransfer"></a>

```typescript
public readonly TerminateResponsibilityTransfer: string;
```

- *Type:* string

[Write] organizations:TerminateResponsibilityTransfer.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.organizations.OrganizationsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] organizations:UntagResource.

---

##### `UpdateOrganizationalUnit`<sup>Required</sup> <a name="UpdateOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsActions.property.UpdateOrganizationalUnit"></a>

```typescript
public readonly UpdateOrganizationalUnit: string;
```

- *Type:* string

[Write] organizations:UpdateOrganizationalUnit.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.organizations.OrganizationsActions.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string;
```

- *Type:* string

[PermissionManagement] organizations:UpdatePolicy.

---

##### `UpdateResponsibilityTransfer`<sup>Required</sup> <a name="UpdateResponsibilityTransfer" id="@cdk_utils/iam.organizations.OrganizationsActions.property.UpdateResponsibilityTransfer"></a>

```typescript
public readonly UpdateResponsibilityTransfer: string;
```

- *Type:* string

[Write] organizations:UpdateResponsibilityTransfer.

---

### OrganizationsConditions <a name="OrganizationsConditions" id="@cdk_utils/iam.organizations.OrganizationsConditions"></a>

Condition key constants and builders for organizations.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.organizations.OrganizationsConditions.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

new organizations.OrganizationsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.policyType">policyType</a></code> | Generates a condition block for `organizations:PolicyType`. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.servicePrincipal">servicePrincipal</a></code> | Generates a condition block for `organizations:ServicePrincipal`. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.transferDirection">transferDirection</a></code> | Generates a condition block for `organizations:TransferDirection`. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.transferType">transferType</a></code> | Generates a condition block for `organizations:TransferType`. |

---

##### `policyType` <a name="policyType" id="@cdk_utils/iam.organizations.OrganizationsConditions.policyType"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.policyType(value: string)
```

Generates a condition block for `organizations:PolicyType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.organizations.OrganizationsConditions.policyType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.organizations.OrganizationsConditions.requestTag"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.organizations.OrganizationsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.organizations.OrganizationsConditions.resourceTag"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.organizations.OrganizationsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `servicePrincipal` <a name="servicePrincipal" id="@cdk_utils/iam.organizations.OrganizationsConditions.servicePrincipal"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.servicePrincipal(value: string)
```

Generates a condition block for `organizations:ServicePrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.organizations.OrganizationsConditions.servicePrincipal.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.tagKeys"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.organizations.OrganizationsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `transferDirection` <a name="transferDirection" id="@cdk_utils/iam.organizations.OrganizationsConditions.transferDirection"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.transferDirection(value: string)
```

Generates a condition block for `organizations:TransferDirection`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.organizations.OrganizationsConditions.transferDirection.parameter.value"></a>

- *Type:* string

---

##### `transferType` <a name="transferType" id="@cdk_utils/iam.organizations.OrganizationsConditions.transferType"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsConditions.transferType(value: string)
```

Generates a condition block for `organizations:TransferType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.organizations.OrganizationsConditions.transferType.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.AttachPolicyConditionKeys">AttachPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachPolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.CreateAccountConditionKeys">CreateAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccount action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.CreateGovCloudAccountConditionKeys">CreateGovCloudAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGovCloudAccount action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.CreateOrganizationalUnitConditionKeys">CreateOrganizationalUnitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOrganizationalUnit action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.CreatePolicyConditionKeys">CreatePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DeletePolicyConditionKeys">DeletePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DeregisterDelegatedAdministratorConditionKeys">DeregisterDelegatedAdministratorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterDelegatedAdministrator action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DescribeEffectivePolicyConditionKeys">DescribeEffectivePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeEffectivePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DescribePolicyConditionKeys">DescribePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DescribeResponsibilityTransferConditionKeys">DescribeResponsibilityTransferConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeResponsibilityTransfer action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DetachPolicyConditionKeys">DetachPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachPolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DisableAWSServiceAccessConditionKeys">DisableAWSServiceAccessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableAWSServiceAccess action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.DisablePolicyTypeConditionKeys">DisablePolicyTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisablePolicyType action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.EnableAWSServiceAccessConditionKeys">EnableAWSServiceAccessConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableAWSServiceAccess action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.EnablePolicyTypeConditionKeys">EnablePolicyTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnablePolicyType action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.InviteAccountToOrganizationConditionKeys">InviteAccountToOrganizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InviteAccountToOrganization action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.InviteOrganizationToTransferResponsibilityConditionKeys">InviteOrganizationToTransferResponsibilityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the InviteOrganizationToTransferResponsibility action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListAccountsWithInvalidEffectivePolicyConditionKeys">ListAccountsWithInvalidEffectivePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAccountsWithInvalidEffectivePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListDelegatedAdministratorsConditionKeys">ListDelegatedAdministratorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListDelegatedAdministrators action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListEffectivePolicyValidationErrorsConditionKeys">ListEffectivePolicyValidationErrorsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListEffectivePolicyValidationErrors action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListInboundResponsibilityTransfersConditionKeys">ListInboundResponsibilityTransfersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListInboundResponsibilityTransfers action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListOutboundResponsibilityTransfersConditionKeys">ListOutboundResponsibilityTransfersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListOutboundResponsibilityTransfers action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListPoliciesConditionKeys">ListPoliciesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPolicies action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListPoliciesForTargetConditionKeys">ListPoliciesForTargetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPoliciesForTarget action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.ListTargetsForPolicyConditionKeys">ListTargetsForPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTargetsForPolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.POLICY_TYPE">POLICY_TYPE</a></code> | <code>string</code> | Condition key: organizations:PolicyType (String). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.PutResourcePolicyConditionKeys">PutResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.RegisterDelegatedAdministratorConditionKeys">RegisterDelegatedAdministratorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterDelegatedAdministrator action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.SERVICE_PRINCIPAL">SERVICE_PRINCIPAL</a></code> | <code>string</code> | Condition key: organizations:ServicePrincipal (String). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.TerminateResponsibilityTransferConditionKeys">TerminateResponsibilityTransferConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TerminateResponsibilityTransfer action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.TRANSFER_DIRECTION">TRANSFER_DIRECTION</a></code> | <code>string</code> | Condition key: organizations:TransferDirection (String). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.TRANSFER_TYPE">TRANSFER_TYPE</a></code> | <code>string</code> | Condition key: organizations:TransferType (String). |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.UpdatePolicyConditionKeys">UpdatePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePolicy action. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsConditions.property.UpdateResponsibilityTransferConditionKeys">UpdateResponsibilityTransferConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResponsibilityTransfer action. |

---

##### `AttachPolicyConditionKeys`<sup>Required</sup> <a name="AttachPolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.AttachPolicyConditionKeys"></a>

```typescript
public readonly AttachPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachPolicy action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAccountConditionKeys`<sup>Required</sup> <a name="CreateAccountConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.CreateAccountConditionKeys"></a>

```typescript
public readonly CreateAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccount action.

---

##### `CreateGovCloudAccountConditionKeys`<sup>Required</sup> <a name="CreateGovCloudAccountConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.CreateGovCloudAccountConditionKeys"></a>

```typescript
public readonly CreateGovCloudAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGovCloudAccount action.

---

##### `CreateOrganizationalUnitConditionKeys`<sup>Required</sup> <a name="CreateOrganizationalUnitConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.CreateOrganizationalUnitConditionKeys"></a>

```typescript
public readonly CreateOrganizationalUnitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOrganizationalUnit action.

---

##### `CreatePolicyConditionKeys`<sup>Required</sup> <a name="CreatePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.CreatePolicyConditionKeys"></a>

```typescript
public readonly CreatePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicy action.

---

##### `DeletePolicyConditionKeys`<sup>Required</sup> <a name="DeletePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DeletePolicyConditionKeys"></a>

```typescript
public readonly DeletePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePolicy action.

---

##### `DeregisterDelegatedAdministratorConditionKeys`<sup>Required</sup> <a name="DeregisterDelegatedAdministratorConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DeregisterDelegatedAdministratorConditionKeys"></a>

```typescript
public readonly DeregisterDelegatedAdministratorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterDelegatedAdministrator action.

---

##### `DescribeEffectivePolicyConditionKeys`<sup>Required</sup> <a name="DescribeEffectivePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DescribeEffectivePolicyConditionKeys"></a>

```typescript
public readonly DescribeEffectivePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeEffectivePolicy action.

---

##### `DescribePolicyConditionKeys`<sup>Required</sup> <a name="DescribePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DescribePolicyConditionKeys"></a>

```typescript
public readonly DescribePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribePolicy action.

---

##### `DescribeResponsibilityTransferConditionKeys`<sup>Required</sup> <a name="DescribeResponsibilityTransferConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DescribeResponsibilityTransferConditionKeys"></a>

```typescript
public readonly DescribeResponsibilityTransferConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeResponsibilityTransfer action.

---

##### `DetachPolicyConditionKeys`<sup>Required</sup> <a name="DetachPolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DetachPolicyConditionKeys"></a>

```typescript
public readonly DetachPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachPolicy action.

---

##### `DisableAWSServiceAccessConditionKeys`<sup>Required</sup> <a name="DisableAWSServiceAccessConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DisableAWSServiceAccessConditionKeys"></a>

```typescript
public readonly DisableAWSServiceAccessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableAWSServiceAccess action.

---

##### `DisablePolicyTypeConditionKeys`<sup>Required</sup> <a name="DisablePolicyTypeConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.DisablePolicyTypeConditionKeys"></a>

```typescript
public readonly DisablePolicyTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisablePolicyType action.

---

##### `EnableAWSServiceAccessConditionKeys`<sup>Required</sup> <a name="EnableAWSServiceAccessConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.EnableAWSServiceAccessConditionKeys"></a>

```typescript
public readonly EnableAWSServiceAccessConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableAWSServiceAccess action.

---

##### `EnablePolicyTypeConditionKeys`<sup>Required</sup> <a name="EnablePolicyTypeConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.EnablePolicyTypeConditionKeys"></a>

```typescript
public readonly EnablePolicyTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnablePolicyType action.

---

##### `InviteAccountToOrganizationConditionKeys`<sup>Required</sup> <a name="InviteAccountToOrganizationConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.InviteAccountToOrganizationConditionKeys"></a>

```typescript
public readonly InviteAccountToOrganizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InviteAccountToOrganization action.

---

##### `InviteOrganizationToTransferResponsibilityConditionKeys`<sup>Required</sup> <a name="InviteOrganizationToTransferResponsibilityConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.InviteOrganizationToTransferResponsibilityConditionKeys"></a>

```typescript
public readonly InviteOrganizationToTransferResponsibilityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the InviteOrganizationToTransferResponsibility action.

---

##### `ListAccountsWithInvalidEffectivePolicyConditionKeys`<sup>Required</sup> <a name="ListAccountsWithInvalidEffectivePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListAccountsWithInvalidEffectivePolicyConditionKeys"></a>

```typescript
public readonly ListAccountsWithInvalidEffectivePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAccountsWithInvalidEffectivePolicy action.

---

##### `ListDelegatedAdministratorsConditionKeys`<sup>Required</sup> <a name="ListDelegatedAdministratorsConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListDelegatedAdministratorsConditionKeys"></a>

```typescript
public readonly ListDelegatedAdministratorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListDelegatedAdministrators action.

---

##### `ListEffectivePolicyValidationErrorsConditionKeys`<sup>Required</sup> <a name="ListEffectivePolicyValidationErrorsConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListEffectivePolicyValidationErrorsConditionKeys"></a>

```typescript
public readonly ListEffectivePolicyValidationErrorsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListEffectivePolicyValidationErrors action.

---

##### `ListInboundResponsibilityTransfersConditionKeys`<sup>Required</sup> <a name="ListInboundResponsibilityTransfersConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListInboundResponsibilityTransfersConditionKeys"></a>

```typescript
public readonly ListInboundResponsibilityTransfersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListInboundResponsibilityTransfers action.

---

##### `ListOutboundResponsibilityTransfersConditionKeys`<sup>Required</sup> <a name="ListOutboundResponsibilityTransfersConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListOutboundResponsibilityTransfersConditionKeys"></a>

```typescript
public readonly ListOutboundResponsibilityTransfersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListOutboundResponsibilityTransfers action.

---

##### `ListPoliciesConditionKeys`<sup>Required</sup> <a name="ListPoliciesConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListPoliciesConditionKeys"></a>

```typescript
public readonly ListPoliciesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPolicies action.

---

##### `ListPoliciesForTargetConditionKeys`<sup>Required</sup> <a name="ListPoliciesForTargetConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListPoliciesForTargetConditionKeys"></a>

```typescript
public readonly ListPoliciesForTargetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPoliciesForTarget action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTargetsForPolicyConditionKeys`<sup>Required</sup> <a name="ListTargetsForPolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.ListTargetsForPolicyConditionKeys"></a>

```typescript
public readonly ListTargetsForPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTargetsForPolicy action.

---

##### `POLICY_TYPE`<sup>Required</sup> <a name="POLICY_TYPE" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.POLICY_TYPE"></a>

```typescript
public readonly POLICY_TYPE: string;
```

- *Type:* string

Condition key: organizations:PolicyType (String).

---

##### `PutResourcePolicyConditionKeys`<sup>Required</sup> <a name="PutResourcePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.PutResourcePolicyConditionKeys"></a>

```typescript
public readonly PutResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourcePolicy action.

---

##### `RegisterDelegatedAdministratorConditionKeys`<sup>Required</sup> <a name="RegisterDelegatedAdministratorConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.RegisterDelegatedAdministratorConditionKeys"></a>

```typescript
public readonly RegisterDelegatedAdministratorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterDelegatedAdministrator action.

---

##### `SERVICE_PRINCIPAL`<sup>Required</sup> <a name="SERVICE_PRINCIPAL" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.SERVICE_PRINCIPAL"></a>

```typescript
public readonly SERVICE_PRINCIPAL: string;
```

- *Type:* string

Condition key: organizations:ServicePrincipal (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TerminateResponsibilityTransferConditionKeys`<sup>Required</sup> <a name="TerminateResponsibilityTransferConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.TerminateResponsibilityTransferConditionKeys"></a>

```typescript
public readonly TerminateResponsibilityTransferConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TerminateResponsibilityTransfer action.

---

##### `TRANSFER_DIRECTION`<sup>Required</sup> <a name="TRANSFER_DIRECTION" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.TRANSFER_DIRECTION"></a>

```typescript
public readonly TRANSFER_DIRECTION: string;
```

- *Type:* string

Condition key: organizations:TransferDirection (String).

---

##### `TRANSFER_TYPE`<sup>Required</sup> <a name="TRANSFER_TYPE" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.TRANSFER_TYPE"></a>

```typescript
public readonly TRANSFER_TYPE: string;
```

- *Type:* string

Condition key: organizations:TransferType (String).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdatePolicyConditionKeys`<sup>Required</sup> <a name="UpdatePolicyConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.UpdatePolicyConditionKeys"></a>

```typescript
public readonly UpdatePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePolicy action.

---

##### `UpdateResponsibilityTransferConditionKeys`<sup>Required</sup> <a name="UpdateResponsibilityTransferConditionKeys" id="@cdk_utils/iam.organizations.OrganizationsConditions.property.UpdateResponsibilityTransferConditionKeys"></a>

```typescript
public readonly UpdateResponsibilityTransferConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResponsibilityTransfer action.

---

### OrganizationsOperations <a name="OrganizationsOperations" id="@cdk_utils/iam.organizations.OrganizationsOperations"></a>

API operation to required IAM actions mapping for organizations.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.organizations.OrganizationsOperations.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

new organizations.OrganizationsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.AcceptHandshake">AcceptHandshake</a></code> | <code>string[]</code> | IAM actions required for the AcceptHandshake API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.AttachPolicy">AttachPolicy</a></code> | <code>string[]</code> | IAM actions required for the AttachPolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CancelHandshake">CancelHandshake</a></code> | <code>string[]</code> | IAM actions required for the CancelHandshake API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CloseAccount">CloseAccount</a></code> | <code>string[]</code> | IAM actions required for the CloseAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateAccount">CreateAccount</a></code> | <code>string[]</code> | IAM actions required for the CreateAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateGovCloudAccount">CreateGovCloudAccount</a></code> | <code>string[]</code> | IAM actions required for the CreateGovCloudAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateOrganization">CreateOrganization</a></code> | <code>string[]</code> | IAM actions required for the CreateOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateOrganizationalUnit">CreateOrganizationalUnit</a></code> | <code>string[]</code> | IAM actions required for the CreateOrganizationalUnit API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DeclineHandshake">DeclineHandshake</a></code> | <code>string[]</code> | IAM actions required for the DeclineHandshake API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DeleteOrganization">DeleteOrganization</a></code> | <code>string[]</code> | IAM actions required for the DeleteOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DeleteOrganizationalUnit">DeleteOrganizationalUnit</a></code> | <code>string[]</code> | IAM actions required for the DeleteOrganizationalUnit API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DeregisterDelegatedAdministrator">DeregisterDelegatedAdministrator</a></code> | <code>string[]</code> | IAM actions required for the DeregisterDelegatedAdministrator API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeAccount">DescribeAccount</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeCreateAccountStatus">DescribeCreateAccountStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeCreateAccountStatus API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeEffectivePolicy">DescribeEffectivePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeEffectivePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeHandshake">DescribeHandshake</a></code> | <code>string[]</code> | IAM actions required for the DescribeHandshake API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeOrganization">DescribeOrganization</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeOrganizationalUnit">DescribeOrganizationalUnit</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationalUnit API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribePolicy">DescribePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeResponsibilityTransfer">DescribeResponsibilityTransfer</a></code> | <code>string[]</code> | IAM actions required for the DescribeResponsibilityTransfer API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DetachPolicy">DetachPolicy</a></code> | <code>string[]</code> | IAM actions required for the DetachPolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DisableAWSServiceAccess">DisableAWSServiceAccess</a></code> | <code>string[]</code> | IAM actions required for the DisableAWSServiceAccess API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.DisablePolicyType">DisablePolicyType</a></code> | <code>string[]</code> | IAM actions required for the DisablePolicyType API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.EnableAllFeatures">EnableAllFeatures</a></code> | <code>string[]</code> | IAM actions required for the EnableAllFeatures API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.EnableAWSServiceAccess">EnableAWSServiceAccess</a></code> | <code>string[]</code> | IAM actions required for the EnableAWSServiceAccess API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.EnablePolicyType">EnablePolicyType</a></code> | <code>string[]</code> | IAM actions required for the EnablePolicyType API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.InviteAccountToOrganization">InviteAccountToOrganization</a></code> | <code>string[]</code> | IAM actions required for the InviteAccountToOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.InviteOrganizationToTransferResponsibility">InviteOrganizationToTransferResponsibility</a></code> | <code>string[]</code> | IAM actions required for the InviteOrganizationToTransferResponsibility API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.LeaveOrganization">LeaveOrganization</a></code> | <code>string[]</code> | IAM actions required for the LeaveOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAccounts">ListAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListAccounts API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAccountsForParent">ListAccountsForParent</a></code> | <code>string[]</code> | IAM actions required for the ListAccountsForParent API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAccountsWithInvalidEffectivePolicy">ListAccountsWithInvalidEffectivePolicy</a></code> | <code>string[]</code> | IAM actions required for the ListAccountsWithInvalidEffectivePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAWSServiceAccessForOrganization">ListAWSServiceAccessForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListAWSServiceAccessForOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListChildren">ListChildren</a></code> | <code>string[]</code> | IAM actions required for the ListChildren API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListCreateAccountStatus">ListCreateAccountStatus</a></code> | <code>string[]</code> | IAM actions required for the ListCreateAccountStatus API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListDelegatedAdministrators">ListDelegatedAdministrators</a></code> | <code>string[]</code> | IAM actions required for the ListDelegatedAdministrators API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListDelegatedServicesForAccount">ListDelegatedServicesForAccount</a></code> | <code>string[]</code> | IAM actions required for the ListDelegatedServicesForAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListEffectivePolicyValidationErrors">ListEffectivePolicyValidationErrors</a></code> | <code>string[]</code> | IAM actions required for the ListEffectivePolicyValidationErrors API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListHandshakesForAccount">ListHandshakesForAccount</a></code> | <code>string[]</code> | IAM actions required for the ListHandshakesForAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListHandshakesForOrganization">ListHandshakesForOrganization</a></code> | <code>string[]</code> | IAM actions required for the ListHandshakesForOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListInboundResponsibilityTransfers">ListInboundResponsibilityTransfers</a></code> | <code>string[]</code> | IAM actions required for the ListInboundResponsibilityTransfers API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListOrganizationalUnitsForParent">ListOrganizationalUnitsForParent</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationalUnitsForParent API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListOutboundResponsibilityTransfers">ListOutboundResponsibilityTransfers</a></code> | <code>string[]</code> | IAM actions required for the ListOutboundResponsibilityTransfers API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListParents">ListParents</a></code> | <code>string[]</code> | IAM actions required for the ListParents API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListPoliciesForTarget">ListPoliciesForTarget</a></code> | <code>string[]</code> | IAM actions required for the ListPoliciesForTarget API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListRoots">ListRoots</a></code> | <code>string[]</code> | IAM actions required for the ListRoots API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.ListTargetsForPolicy">ListTargetsForPolicy</a></code> | <code>string[]</code> | IAM actions required for the ListTargetsForPolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.MoveAccount">MoveAccount</a></code> | <code>string[]</code> | IAM actions required for the MoveAccount API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.RegisterDelegatedAdministrator">RegisterDelegatedAdministrator</a></code> | <code>string[]</code> | IAM actions required for the RegisterDelegatedAdministrator API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.RemoveAccountFromOrganization">RemoveAccountFromOrganization</a></code> | <code>string[]</code> | IAM actions required for the RemoveAccountFromOrganization API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.TerminateResponsibilityTransfer">TerminateResponsibilityTransfer</a></code> | <code>string[]</code> | IAM actions required for the TerminateResponsibilityTransfer API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.UpdateOrganizationalUnit">UpdateOrganizationalUnit</a></code> | <code>string[]</code> | IAM actions required for the UpdateOrganizationalUnit API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicy API call. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsOperations.property.UpdateResponsibilityTransfer">UpdateResponsibilityTransfer</a></code> | <code>string[]</code> | IAM actions required for the UpdateResponsibilityTransfer API call. |

---

##### `AcceptHandshake`<sup>Required</sup> <a name="AcceptHandshake" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.AcceptHandshake"></a>

```typescript
public readonly AcceptHandshake: string[];
```

- *Type:* string[]

IAM actions required for the AcceptHandshake API call.

---

##### `AttachPolicy`<sup>Required</sup> <a name="AttachPolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.AttachPolicy"></a>

```typescript
public readonly AttachPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AttachPolicy API call.

---

##### `CancelHandshake`<sup>Required</sup> <a name="CancelHandshake" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CancelHandshake"></a>

```typescript
public readonly CancelHandshake: string[];
```

- *Type:* string[]

IAM actions required for the CancelHandshake API call.

---

##### `CloseAccount`<sup>Required</sup> <a name="CloseAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CloseAccount"></a>

```typescript
public readonly CloseAccount: string[];
```

- *Type:* string[]

IAM actions required for the CloseAccount API call.

---

##### `CreateAccount`<sup>Required</sup> <a name="CreateAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateAccount"></a>

```typescript
public readonly CreateAccount: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccount API call.

---

##### `CreateGovCloudAccount`<sup>Required</sup> <a name="CreateGovCloudAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateGovCloudAccount"></a>

```typescript
public readonly CreateGovCloudAccount: string[];
```

- *Type:* string[]

IAM actions required for the CreateGovCloudAccount API call.

---

##### `CreateOrganization`<sup>Required</sup> <a name="CreateOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateOrganization"></a>

```typescript
public readonly CreateOrganization: string[];
```

- *Type:* string[]

IAM actions required for the CreateOrganization API call.

---

##### `CreateOrganizationalUnit`<sup>Required</sup> <a name="CreateOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CreateOrganizationalUnit"></a>

```typescript
public readonly CreateOrganizationalUnit: string[];
```

- *Type:* string[]

IAM actions required for the CreateOrganizationalUnit API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `DeclineHandshake`<sup>Required</sup> <a name="DeclineHandshake" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DeclineHandshake"></a>

```typescript
public readonly DeclineHandshake: string[];
```

- *Type:* string[]

IAM actions required for the DeclineHandshake API call.

---

##### `DeleteOrganization`<sup>Required</sup> <a name="DeleteOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DeleteOrganization"></a>

```typescript
public readonly DeleteOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOrganization API call.

---

##### `DeleteOrganizationalUnit`<sup>Required</sup> <a name="DeleteOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DeleteOrganizationalUnit"></a>

```typescript
public readonly DeleteOrganizationalUnit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOrganizationalUnit API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeregisterDelegatedAdministrator`<sup>Required</sup> <a name="DeregisterDelegatedAdministrator" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DeregisterDelegatedAdministrator"></a>

```typescript
public readonly DeregisterDelegatedAdministrator: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterDelegatedAdministrator API call.

---

##### `DescribeAccount`<sup>Required</sup> <a name="DescribeAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeAccount"></a>

```typescript
public readonly DescribeAccount: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccount API call.

---

##### `DescribeCreateAccountStatus`<sup>Required</sup> <a name="DescribeCreateAccountStatus" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeCreateAccountStatus"></a>

```typescript
public readonly DescribeCreateAccountStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCreateAccountStatus API call.

---

##### `DescribeEffectivePolicy`<sup>Required</sup> <a name="DescribeEffectivePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeEffectivePolicy"></a>

```typescript
public readonly DescribeEffectivePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEffectivePolicy API call.

---

##### `DescribeHandshake`<sup>Required</sup> <a name="DescribeHandshake" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeHandshake"></a>

```typescript
public readonly DescribeHandshake: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHandshake API call.

---

##### `DescribeOrganization`<sup>Required</sup> <a name="DescribeOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeOrganization"></a>

```typescript
public readonly DescribeOrganization: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganization API call.

---

##### `DescribeOrganizationalUnit`<sup>Required</sup> <a name="DescribeOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeOrganizationalUnit"></a>

```typescript
public readonly DescribeOrganizationalUnit: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationalUnit API call.

---

##### `DescribePolicy`<sup>Required</sup> <a name="DescribePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribePolicy"></a>

```typescript
public readonly DescribePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribePolicy API call.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicy API call.

---

##### `DescribeResponsibilityTransfer`<sup>Required</sup> <a name="DescribeResponsibilityTransfer" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DescribeResponsibilityTransfer"></a>

```typescript
public readonly DescribeResponsibilityTransfer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResponsibilityTransfer API call.

---

##### `DetachPolicy`<sup>Required</sup> <a name="DetachPolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DetachPolicy"></a>

```typescript
public readonly DetachPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DetachPolicy API call.

---

##### `DisableAWSServiceAccess`<sup>Required</sup> <a name="DisableAWSServiceAccess" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DisableAWSServiceAccess"></a>

```typescript
public readonly DisableAWSServiceAccess: string[];
```

- *Type:* string[]

IAM actions required for the DisableAWSServiceAccess API call.

---

##### `DisablePolicyType`<sup>Required</sup> <a name="DisablePolicyType" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.DisablePolicyType"></a>

```typescript
public readonly DisablePolicyType: string[];
```

- *Type:* string[]

IAM actions required for the DisablePolicyType API call.

---

##### `EnableAllFeatures`<sup>Required</sup> <a name="EnableAllFeatures" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.EnableAllFeatures"></a>

```typescript
public readonly EnableAllFeatures: string[];
```

- *Type:* string[]

IAM actions required for the EnableAllFeatures API call.

---

##### `EnableAWSServiceAccess`<sup>Required</sup> <a name="EnableAWSServiceAccess" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.EnableAWSServiceAccess"></a>

```typescript
public readonly EnableAWSServiceAccess: string[];
```

- *Type:* string[]

IAM actions required for the EnableAWSServiceAccess API call.

---

##### `EnablePolicyType`<sup>Required</sup> <a name="EnablePolicyType" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.EnablePolicyType"></a>

```typescript
public readonly EnablePolicyType: string[];
```

- *Type:* string[]

IAM actions required for the EnablePolicyType API call.

---

##### `InviteAccountToOrganization`<sup>Required</sup> <a name="InviteAccountToOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.InviteAccountToOrganization"></a>

```typescript
public readonly InviteAccountToOrganization: string[];
```

- *Type:* string[]

IAM actions required for the InviteAccountToOrganization API call.

---

##### `InviteOrganizationToTransferResponsibility`<sup>Required</sup> <a name="InviteOrganizationToTransferResponsibility" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.InviteOrganizationToTransferResponsibility"></a>

```typescript
public readonly InviteOrganizationToTransferResponsibility: string[];
```

- *Type:* string[]

IAM actions required for the InviteOrganizationToTransferResponsibility API call.

---

##### `LeaveOrganization`<sup>Required</sup> <a name="LeaveOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.LeaveOrganization"></a>

```typescript
public readonly LeaveOrganization: string[];
```

- *Type:* string[]

IAM actions required for the LeaveOrganization API call.

---

##### `ListAccounts`<sup>Required</sup> <a name="ListAccounts" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAccounts"></a>

```typescript
public readonly ListAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListAccounts API call.

---

##### `ListAccountsForParent`<sup>Required</sup> <a name="ListAccountsForParent" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAccountsForParent"></a>

```typescript
public readonly ListAccountsForParent: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountsForParent API call.

---

##### `ListAccountsWithInvalidEffectivePolicy`<sup>Required</sup> <a name="ListAccountsWithInvalidEffectivePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAccountsWithInvalidEffectivePolicy"></a>

```typescript
public readonly ListAccountsWithInvalidEffectivePolicy: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountsWithInvalidEffectivePolicy API call.

---

##### `ListAWSServiceAccessForOrganization`<sup>Required</sup> <a name="ListAWSServiceAccessForOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListAWSServiceAccessForOrganization"></a>

```typescript
public readonly ListAWSServiceAccessForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListAWSServiceAccessForOrganization API call.

---

##### `ListChildren`<sup>Required</sup> <a name="ListChildren" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListChildren"></a>

```typescript
public readonly ListChildren: string[];
```

- *Type:* string[]

IAM actions required for the ListChildren API call.

---

##### `ListCreateAccountStatus`<sup>Required</sup> <a name="ListCreateAccountStatus" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListCreateAccountStatus"></a>

```typescript
public readonly ListCreateAccountStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListCreateAccountStatus API call.

---

##### `ListDelegatedAdministrators`<sup>Required</sup> <a name="ListDelegatedAdministrators" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListDelegatedAdministrators"></a>

```typescript
public readonly ListDelegatedAdministrators: string[];
```

- *Type:* string[]

IAM actions required for the ListDelegatedAdministrators API call.

---

##### `ListDelegatedServicesForAccount`<sup>Required</sup> <a name="ListDelegatedServicesForAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListDelegatedServicesForAccount"></a>

```typescript
public readonly ListDelegatedServicesForAccount: string[];
```

- *Type:* string[]

IAM actions required for the ListDelegatedServicesForAccount API call.

---

##### `ListEffectivePolicyValidationErrors`<sup>Required</sup> <a name="ListEffectivePolicyValidationErrors" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListEffectivePolicyValidationErrors"></a>

```typescript
public readonly ListEffectivePolicyValidationErrors: string[];
```

- *Type:* string[]

IAM actions required for the ListEffectivePolicyValidationErrors API call.

---

##### `ListHandshakesForAccount`<sup>Required</sup> <a name="ListHandshakesForAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListHandshakesForAccount"></a>

```typescript
public readonly ListHandshakesForAccount: string[];
```

- *Type:* string[]

IAM actions required for the ListHandshakesForAccount API call.

---

##### `ListHandshakesForOrganization`<sup>Required</sup> <a name="ListHandshakesForOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListHandshakesForOrganization"></a>

```typescript
public readonly ListHandshakesForOrganization: string[];
```

- *Type:* string[]

IAM actions required for the ListHandshakesForOrganization API call.

---

##### `ListInboundResponsibilityTransfers`<sup>Required</sup> <a name="ListInboundResponsibilityTransfers" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListInboundResponsibilityTransfers"></a>

```typescript
public readonly ListInboundResponsibilityTransfers: string[];
```

- *Type:* string[]

IAM actions required for the ListInboundResponsibilityTransfers API call.

---

##### `ListOrganizationalUnitsForParent`<sup>Required</sup> <a name="ListOrganizationalUnitsForParent" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListOrganizationalUnitsForParent"></a>

```typescript
public readonly ListOrganizationalUnitsForParent: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationalUnitsForParent API call.

---

##### `ListOutboundResponsibilityTransfers`<sup>Required</sup> <a name="ListOutboundResponsibilityTransfers" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListOutboundResponsibilityTransfers"></a>

```typescript
public readonly ListOutboundResponsibilityTransfers: string[];
```

- *Type:* string[]

IAM actions required for the ListOutboundResponsibilityTransfers API call.

---

##### `ListParents`<sup>Required</sup> <a name="ListParents" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListParents"></a>

```typescript
public readonly ListParents: string[];
```

- *Type:* string[]

IAM actions required for the ListParents API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPoliciesForTarget`<sup>Required</sup> <a name="ListPoliciesForTarget" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListPoliciesForTarget"></a>

```typescript
public readonly ListPoliciesForTarget: string[];
```

- *Type:* string[]

IAM actions required for the ListPoliciesForTarget API call.

---

##### `ListRoots`<sup>Required</sup> <a name="ListRoots" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListRoots"></a>

```typescript
public readonly ListRoots: string[];
```

- *Type:* string[]

IAM actions required for the ListRoots API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetsForPolicy`<sup>Required</sup> <a name="ListTargetsForPolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.ListTargetsForPolicy"></a>

```typescript
public readonly ListTargetsForPolicy: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetsForPolicy API call.

---

##### `MoveAccount`<sup>Required</sup> <a name="MoveAccount" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.MoveAccount"></a>

```typescript
public readonly MoveAccount: string[];
```

- *Type:* string[]

IAM actions required for the MoveAccount API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterDelegatedAdministrator`<sup>Required</sup> <a name="RegisterDelegatedAdministrator" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.RegisterDelegatedAdministrator"></a>

```typescript
public readonly RegisterDelegatedAdministrator: string[];
```

- *Type:* string[]

IAM actions required for the RegisterDelegatedAdministrator API call.

---

##### `RemoveAccountFromOrganization`<sup>Required</sup> <a name="RemoveAccountFromOrganization" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.RemoveAccountFromOrganization"></a>

```typescript
public readonly RemoveAccountFromOrganization: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAccountFromOrganization API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TerminateResponsibilityTransfer`<sup>Required</sup> <a name="TerminateResponsibilityTransfer" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.TerminateResponsibilityTransfer"></a>

```typescript
public readonly TerminateResponsibilityTransfer: string[];
```

- *Type:* string[]

IAM actions required for the TerminateResponsibilityTransfer API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateOrganizationalUnit`<sup>Required</sup> <a name="UpdateOrganizationalUnit" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.UpdateOrganizationalUnit"></a>

```typescript
public readonly UpdateOrganizationalUnit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOrganizationalUnit API call.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicy API call.

---

##### `UpdateResponsibilityTransfer`<sup>Required</sup> <a name="UpdateResponsibilityTransfer" id="@cdk_utils/iam.organizations.OrganizationsOperations.property.UpdateResponsibilityTransfer"></a>

```typescript
public readonly UpdateResponsibilityTransfer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResponsibilityTransfer API call.

---

### OrganizationsResources <a name="OrganizationsResources" id="@cdk_utils/iam.organizations.OrganizationsResources"></a>

ARN builders, validators, and parsers for organizations resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.organizations.OrganizationsResources.Initializer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

new organizations.OrganizationsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.account">account</a></code> | Builds an ARN for the account resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.awspolicy">awspolicy</a></code> | Builds an ARN for the awspolicy resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.handshake">handshake</a></code> | Builds an ARN for the handshake resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidAccountArn">isValidAccountArn</a></code> | Validates whether a string is a valid ARN for the account resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidAwspolicyArn">isValidAwspolicyArn</a></code> | Validates whether a string is a valid ARN for the awspolicy resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidHandshakeArn">isValidHandshakeArn</a></code> | Validates whether a string is a valid ARN for the handshake resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidOrganizationalunitArn">isValidOrganizationalunitArn</a></code> | Validates whether a string is a valid ARN for the organizationalunit resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidOrganizationArn">isValidOrganizationArn</a></code> | Validates whether a string is a valid ARN for the organization resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidResourcepolicyArn">isValidResourcepolicyArn</a></code> | Validates whether a string is a valid ARN for the resourcepolicy resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidResponsibilitytransferArn">isValidResponsibilitytransferArn</a></code> | Validates whether a string is a valid ARN for the responsibilitytransfer resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.isValidRootArn">isValidRootArn</a></code> | Validates whether a string is a valid ARN for the root resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.organization">organization</a></code> | Builds an ARN for the organization resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.organizationalunit">organizationalunit</a></code> | Builds an ARN for the organizationalunit resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseAccountArn">parseAccountArn</a></code> | Parses a account ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseAwspolicyArn">parseAwspolicyArn</a></code> | Parses a awspolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseHandshakeArn">parseHandshakeArn</a></code> | Parses a handshake ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseOrganizationalunitArn">parseOrganizationalunitArn</a></code> | Parses a organizationalunit ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseOrganizationArn">parseOrganizationArn</a></code> | Parses a organization ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseResourcepolicyArn">parseResourcepolicyArn</a></code> | Parses a resourcepolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseResponsibilitytransferArn">parseResponsibilitytransferArn</a></code> | Parses a responsibilitytransfer ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.parseRootArn">parseRootArn</a></code> | Parses a root ARN into its components. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.policy">policy</a></code> | Builds an ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.resourcepolicy">resourcepolicy</a></code> | Builds an ARN for the resourcepolicy resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.responsibilitytransfer">responsibilitytransfer</a></code> | Builds an ARN for the responsibilitytransfer resource. |
| <code><a href="#@cdk_utils/iam.organizations.OrganizationsResources.root">root</a></code> | Builds an ARN for the root resource. |

---

##### `account` <a name="account" id="@cdk_utils/iam.organizations.OrganizationsResources.account"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.account(props: OrganizationsAccountArnProps)
```

Builds an ARN for the account resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.account.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsAccountArnProps">OrganizationsAccountArnProps</a>

---

##### `awspolicy` <a name="awspolicy" id="@cdk_utils/iam.organizations.OrganizationsResources.awspolicy"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.awspolicy(props: OrganizationsAwspolicyArnProps)
```

Builds an ARN for the awspolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.awspolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsAwspolicyArnProps">OrganizationsAwspolicyArnProps</a>

---

##### `handshake` <a name="handshake" id="@cdk_utils/iam.organizations.OrganizationsResources.handshake"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.handshake(props: OrganizationsHandshakeArnProps)
```

Builds an ARN for the handshake resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.handshake.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsHandshakeArnProps">OrganizationsHandshakeArnProps</a>

---

##### `isValidAccountArn` <a name="isValidAccountArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidAccountArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the account resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAwspolicyArn` <a name="isValidAwspolicyArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidAwspolicyArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidAwspolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the awspolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidAwspolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHandshakeArn` <a name="isValidHandshakeArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidHandshakeArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidHandshakeArn(arn: string)
```

Validates whether a string is a valid ARN for the handshake resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidHandshakeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationalunitArn` <a name="isValidOrganizationalunitArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidOrganizationalunitArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidOrganizationalunitArn(arn: string)
```

Validates whether a string is a valid ARN for the organizationalunit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidOrganizationalunitArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrganizationArn` <a name="isValidOrganizationArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidOrganizationArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidOrganizationArn(arn: string)
```

Validates whether a string is a valid ARN for the organization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidOrganizationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidPolicyArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourcepolicyArn` <a name="isValidResourcepolicyArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidResourcepolicyArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidResourcepolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the resourcepolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidResourcepolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResponsibilitytransferArn` <a name="isValidResponsibilitytransferArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidResponsibilitytransferArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidResponsibilitytransferArn(arn: string)
```

Validates whether a string is a valid ARN for the responsibilitytransfer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidResponsibilitytransferArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRootArn` <a name="isValidRootArn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidRootArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.isValidRootArn(arn: string)
```

Validates whether a string is a valid ARN for the root resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.isValidRootArn.parameter.arn"></a>

- *Type:* string

---

##### `organization` <a name="organization" id="@cdk_utils/iam.organizations.OrganizationsResources.organization"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.organization(props: OrganizationsOrganizationArnProps)
```

Builds an ARN for the organization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.organization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationArnProps">OrganizationsOrganizationArnProps</a>

---

##### `organizationalunit` <a name="organizationalunit" id="@cdk_utils/iam.organizations.OrganizationsResources.organizationalunit"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.organizationalunit(props: OrganizationsOrganizationalunitArnProps)
```

Builds an ARN for the organizationalunit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.organizationalunit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsOrganizationalunitArnProps">OrganizationsOrganizationalunitArnProps</a>

---

##### `parseAccountArn` <a name="parseAccountArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseAccountArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseAccountArn(arn: string)
```

Parses a account ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAwspolicyArn` <a name="parseAwspolicyArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseAwspolicyArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseAwspolicyArn(arn: string)
```

Parses a awspolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseAwspolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHandshakeArn` <a name="parseHandshakeArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseHandshakeArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseHandshakeArn(arn: string)
```

Parses a handshake ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseHandshakeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationalunitArn` <a name="parseOrganizationalunitArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseOrganizationalunitArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseOrganizationalunitArn(arn: string)
```

Parses a organizationalunit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseOrganizationalunitArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrganizationArn` <a name="parseOrganizationArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseOrganizationArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseOrganizationArn(arn: string)
```

Parses a organization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseOrganizationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parsePolicyArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourcepolicyArn` <a name="parseResourcepolicyArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseResourcepolicyArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseResourcepolicyArn(arn: string)
```

Parses a resourcepolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseResourcepolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResponsibilitytransferArn` <a name="parseResponsibilitytransferArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseResponsibilitytransferArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseResponsibilitytransferArn(arn: string)
```

Parses a responsibilitytransfer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseResponsibilitytransferArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRootArn` <a name="parseRootArn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseRootArn"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.parseRootArn(arn: string)
```

Parses a root ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.organizations.OrganizationsResources.parseRootArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.organizations.OrganizationsResources.policy"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.policy(props: OrganizationsPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsPolicyArnProps">OrganizationsPolicyArnProps</a>

---

##### `resourcepolicy` <a name="resourcepolicy" id="@cdk_utils/iam.organizations.OrganizationsResources.resourcepolicy"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.resourcepolicy(props: OrganizationsResourcepolicyArnProps)
```

Builds an ARN for the resourcepolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.resourcepolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsResourcepolicyArnProps">OrganizationsResourcepolicyArnProps</a>

---

##### `responsibilitytransfer` <a name="responsibilitytransfer" id="@cdk_utils/iam.organizations.OrganizationsResources.responsibilitytransfer"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.responsibilitytransfer(props: OrganizationsResponsibilitytransferArnProps)
```

Builds an ARN for the responsibilitytransfer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.responsibilitytransfer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsResponsibilitytransferArnProps">OrganizationsResponsibilitytransferArnProps</a>

---

##### `root` <a name="root" id="@cdk_utils/iam.organizations.OrganizationsResources.root"></a>

```typescript
import { organizations } from '@cdk_utils/iam'

organizations.OrganizationsResources.root(props: OrganizationsRootArnProps)
```

Builds an ARN for the root resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.organizations.OrganizationsResources.root.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.organizations.OrganizationsRootArnProps">OrganizationsRootArnProps</a>

---




