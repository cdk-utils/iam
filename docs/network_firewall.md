# `network_firewall` Submodule <a name="`network_firewall` Submodule" id="@cdk_utils/iam.network_firewall"></a>


## Structs <a name="Structs" id="Structs"></a>

### NetworkFirewallContainerAssociationArnComponents <a name="NetworkFirewallContainerAssociationArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents"></a>

Parsed components of a ContainerAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallContainerAssociationArnComponents: network_firewall.NetworkFirewallContainerAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallContainerAssociationArnProps <a name="NetworkFirewallContainerAssociationArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps"></a>

Properties for building a ContainerAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallContainerAssociationArnProps: network_firewall.NetworkFirewallContainerAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallFirewallArnComponents <a name="NetworkFirewallFirewallArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents"></a>

Parsed components of a Firewall ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallFirewallArnComponents: network_firewall.NetworkFirewallFirewallArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallFirewallArnProps <a name="NetworkFirewallFirewallArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps"></a>

Properties for building a Firewall ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallFirewallArnProps: network_firewall.NetworkFirewallFirewallArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallFirewallPolicyArnComponents <a name="NetworkFirewallFirewallPolicyArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents"></a>

Parsed components of a FirewallPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallFirewallPolicyArnComponents: network_firewall.NetworkFirewallFirewallPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallFirewallPolicyArnProps <a name="NetworkFirewallFirewallPolicyArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps"></a>

Properties for building a FirewallPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallFirewallPolicyArnProps: network_firewall.NetworkFirewallFirewallPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallProxyArnComponents <a name="NetworkFirewallProxyArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents"></a>

Parsed components of a Proxy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallProxyArnComponents: network_firewall.NetworkFirewallProxyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallProxyArnProps <a name="NetworkFirewallProxyArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps"></a>

Properties for building a Proxy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallProxyArnProps: network_firewall.NetworkFirewallProxyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallProxyConfigurationArnComponents <a name="NetworkFirewallProxyConfigurationArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents"></a>

Parsed components of a ProxyConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallProxyConfigurationArnComponents: network_firewall.NetworkFirewallProxyConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallProxyConfigurationArnProps <a name="NetworkFirewallProxyConfigurationArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps"></a>

Properties for building a ProxyConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallProxyConfigurationArnProps: network_firewall.NetworkFirewallProxyConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallProxyRuleGroupArnComponents <a name="NetworkFirewallProxyRuleGroupArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents"></a>

Parsed components of a ProxyRuleGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallProxyRuleGroupArnComponents: network_firewall.NetworkFirewallProxyRuleGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallProxyRuleGroupArnProps <a name="NetworkFirewallProxyRuleGroupArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps"></a>

Properties for building a ProxyRuleGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallProxyRuleGroupArnProps: network_firewall.NetworkFirewallProxyRuleGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallStatefulRuleGroupArnComponents <a name="NetworkFirewallStatefulRuleGroupArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents"></a>

Parsed components of a StatefulRuleGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallStatefulRuleGroupArnComponents: network_firewall.NetworkFirewallStatefulRuleGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallStatefulRuleGroupArnProps <a name="NetworkFirewallStatefulRuleGroupArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps"></a>

Properties for building a StatefulRuleGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallStatefulRuleGroupArnProps: network_firewall.NetworkFirewallStatefulRuleGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallStatelessRuleGroupArnComponents <a name="NetworkFirewallStatelessRuleGroupArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents"></a>

Parsed components of a StatelessRuleGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallStatelessRuleGroupArnComponents: network_firewall.NetworkFirewallStatelessRuleGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallStatelessRuleGroupArnProps <a name="NetworkFirewallStatelessRuleGroupArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps"></a>

Properties for building a StatelessRuleGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallStatelessRuleGroupArnProps: network_firewall.NetworkFirewallStatelessRuleGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallTLSInspectionConfigurationArnComponents <a name="NetworkFirewallTLSInspectionConfigurationArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents"></a>

Parsed components of a TLSInspectionConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallTLSInspectionConfigurationArnComponents: network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallTLSInspectionConfigurationArnProps <a name="NetworkFirewallTLSInspectionConfigurationArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps"></a>

Properties for building a TLSInspectionConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallTLSInspectionConfigurationArnProps: network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkFirewallVPCEndpointAssociationArnComponents <a name="NetworkFirewallVPCEndpointAssociationArnComponents" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents"></a>

Parsed components of a VpcEndpointAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallVPCEndpointAssociationArnComponents: network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkFirewallVPCEndpointAssociationArnProps <a name="NetworkFirewallVPCEndpointAssociationArnProps" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps"></a>

Properties for building a VpcEndpointAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

const networkFirewallVPCEndpointAssociationArnProps: network_firewall.NetworkFirewallVPCEndpointAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkFirewallActions <a name="NetworkFirewallActions" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions"></a>

IAM action constants for the network-firewall service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

new network_firewall.NetworkFirewallActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AcceptNetworkFirewallTransitGatewayAttachment">AcceptNetworkFirewallTransitGatewayAttachment</a></code> | <code>string</code> | [Write] network-firewall:AcceptNetworkFirewallTransitGatewayAttachment. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.actionGetAnalysisReportResults">actionGetAnalysisReportResults</a></code> | <code>string</code> | [Read] network-firewall:GetAnalysisReportResults. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AssociateAvailabilityZones">AssociateAvailabilityZones</a></code> | <code>string</code> | [Write] network-firewall:AssociateAvailabilityZones. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AssociateFirewallPolicy">AssociateFirewallPolicy</a></code> | <code>string</code> | [Write] network-firewall:AssociateFirewallPolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AssociateSubnets">AssociateSubnets</a></code> | <code>string</code> | [Write] network-firewall:AssociateSubnets. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AttachRuleGroupsToProxyConfiguration">AttachRuleGroupsToProxyConfiguration</a></code> | <code>string</code> | [Write] network-firewall:AttachRuleGroupsToProxyConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateContainerAssociation">CreateContainerAssociation</a></code> | <code>string</code> | [Write] network-firewall:CreateContainerAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateFirewall">CreateFirewall</a></code> | <code>string</code> | [Write] network-firewall:CreateFirewall. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateFirewallPolicy">CreateFirewallPolicy</a></code> | <code>string</code> | [Write] network-firewall:CreateFirewallPolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxy">CreateProxy</a></code> | <code>string</code> | [Write] network-firewall:CreateProxy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxyConfiguration">CreateProxyConfiguration</a></code> | <code>string</code> | [Write] network-firewall:CreateProxyConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxyRuleGroup">CreateProxyRuleGroup</a></code> | <code>string</code> | [Write] network-firewall:CreateProxyRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxyRules">CreateProxyRules</a></code> | <code>string</code> | [Write] network-firewall:CreateProxyRules. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string</code> | [Write] network-firewall:CreateRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateTLSInspectionConfiguration">CreateTLSInspectionConfiguration</a></code> | <code>string</code> | [Write] network-firewall:CreateTLSInspectionConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateVpcEndpointAssociation">CreateVpcEndpointAssociation</a></code> | <code>string</code> | [Write] network-firewall:CreateVpcEndpointAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteContainerAssociation">DeleteContainerAssociation</a></code> | <code>string</code> | [Write] network-firewall:DeleteContainerAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteFirewall">DeleteFirewall</a></code> | <code>string</code> | [Write] network-firewall:DeleteFirewall. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteFirewallPolicy">DeleteFirewallPolicy</a></code> | <code>string</code> | [Write] network-firewall:DeleteFirewallPolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteNetworkFirewallTransitGatewayAttachment">DeleteNetworkFirewallTransitGatewayAttachment</a></code> | <code>string</code> | [Write] network-firewall:DeleteNetworkFirewallTransitGatewayAttachment. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxy">DeleteProxy</a></code> | <code>string</code> | [Write] network-firewall:DeleteProxy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxyConfiguration">DeleteProxyConfiguration</a></code> | <code>string</code> | [Write] network-firewall:DeleteProxyConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxyRuleGroup">DeleteProxyRuleGroup</a></code> | <code>string</code> | [Write] network-firewall:DeleteProxyRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxyRules">DeleteProxyRules</a></code> | <code>string</code> | [Write] network-firewall:DeleteProxyRules. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] network-firewall:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string</code> | [Write] network-firewall:DeleteRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteTLSInspectionConfiguration">DeleteTLSInspectionConfiguration</a></code> | <code>string</code> | [Write] network-firewall:DeleteTLSInspectionConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteVpcEndpointAssociation">DeleteVpcEndpointAssociation</a></code> | <code>string</code> | [Write] network-firewall:DeleteVpcEndpointAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeContainerAssociation">DescribeContainerAssociation</a></code> | <code>string</code> | [Read] network-firewall:DescribeContainerAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFirewall">DescribeFirewall</a></code> | <code>string</code> | [Read] network-firewall:DescribeFirewall. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFirewallMetadata">DescribeFirewallMetadata</a></code> | <code>string</code> | [Read] network-firewall:DescribeFirewallMetadata. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFirewallPolicy">DescribeFirewallPolicy</a></code> | <code>string</code> | [Read] network-firewall:DescribeFirewallPolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFlowOperation">DescribeFlowOperation</a></code> | <code>string</code> | [Read] network-firewall:DescribeFlowOperation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeLoggingConfiguration">DescribeLoggingConfiguration</a></code> | <code>string</code> | [Read] network-firewall:DescribeLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxy">DescribeProxy</a></code> | <code>string</code> | [Read] network-firewall:DescribeProxy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxyConfiguration">DescribeProxyConfiguration</a></code> | <code>string</code> | [Read] network-firewall:DescribeProxyConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxyRule">DescribeProxyRule</a></code> | <code>string</code> | [Read] network-firewall:DescribeProxyRule. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxyRuleGroup">DescribeProxyRuleGroup</a></code> | <code>string</code> | [Read] network-firewall:DescribeProxyRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string</code> | [Read] network-firewall:DescribeResourcePolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeRuleGroup">DescribeRuleGroup</a></code> | <code>string</code> | [Read] network-firewall:DescribeRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeRuleGroupMetadata">DescribeRuleGroupMetadata</a></code> | <code>string</code> | [Read] network-firewall:DescribeRuleGroupMetadata. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeRuleGroupSummary">DescribeRuleGroupSummary</a></code> | <code>string</code> | [Read] network-firewall:DescribeRuleGroupSummary. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeTLSInspectionConfiguration">DescribeTLSInspectionConfiguration</a></code> | <code>string</code> | [Read] network-firewall:DescribeTLSInspectionConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeVpcEndpointAssociation">DescribeVpcEndpointAssociation</a></code> | <code>string</code> | [Read] network-firewall:DescribeVpcEndpointAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DetachRuleGroupsFromProxyConfiguration">DetachRuleGroupsFromProxyConfiguration</a></code> | <code>string</code> | [Write] network-firewall:DetachRuleGroupsFromProxyConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DisassociateAvailabilityZones">DisassociateAvailabilityZones</a></code> | <code>string</code> | [Write] network-firewall:DisassociateAvailabilityZones. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DisassociateSubnets">DisassociateSubnets</a></code> | <code>string</code> | [Write] network-firewall:DisassociateSubnets. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListAnalysisReports">ListAnalysisReports</a></code> | <code>string</code> | [List] network-firewall:ListAnalysisReports. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListContainerAssociations">ListContainerAssociations</a></code> | <code>string</code> | [List] network-firewall:ListContainerAssociations. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFirewallPolicies">ListFirewallPolicies</a></code> | <code>string</code> | [List] network-firewall:ListFirewallPolicies. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFirewalls">ListFirewalls</a></code> | <code>string</code> | [List] network-firewall:ListFirewalls. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFlowOperationResults">ListFlowOperationResults</a></code> | <code>string</code> | [Read] network-firewall:ListFlowOperationResults. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFlowOperations">ListFlowOperations</a></code> | <code>string</code> | [List] network-firewall:ListFlowOperations. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListProxies">ListProxies</a></code> | <code>string</code> | [List] network-firewall:ListProxies. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListProxyConfigurations">ListProxyConfigurations</a></code> | <code>string</code> | [List] network-firewall:ListProxyConfigurations. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListProxyRuleGroups">ListProxyRuleGroups</a></code> | <code>string</code> | [List] network-firewall:ListProxyRuleGroups. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string</code> | [List] network-firewall:ListRuleGroups. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] network-firewall:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListTLSInspectionConfigurations">ListTLSInspectionConfigurations</a></code> | <code>string</code> | [List] network-firewall:ListTLSInspectionConfigurations. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListVpcEndpointAssociations">ListVpcEndpointAssociations</a></code> | <code>string</code> | [List] network-firewall:ListVpcEndpointAssociations. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] network-firewall:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.RejectNetworkFirewallTransitGatewayAttachment">RejectNetworkFirewallTransitGatewayAttachment</a></code> | <code>string</code> | [Write] network-firewall:RejectNetworkFirewallTransitGatewayAttachment. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.StartAnalysisReport">StartAnalysisReport</a></code> | <code>string</code> | [Write] network-firewall:StartAnalysisReport. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.StartFlowCapture">StartFlowCapture</a></code> | <code>string</code> | [Write] network-firewall:StartFlowCapture. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.StartFlowFlush">StartFlowFlush</a></code> | <code>string</code> | [Write] network-firewall:StartFlowFlush. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] network-firewall:TagResource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] network-firewall:UntagResource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateAvailabilityZoneChangeProtection">UpdateAvailabilityZoneChangeProtection</a></code> | <code>string</code> | [Write] network-firewall:UpdateAvailabilityZoneChangeProtection. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateContainerAssociation">UpdateContainerAssociation</a></code> | <code>string</code> | [Write] network-firewall:UpdateContainerAssociation. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallAnalysisSettings">UpdateFirewallAnalysisSettings</a></code> | <code>string</code> | [Write] network-firewall:UpdateFirewallAnalysisSettings. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallDeleteProtection">UpdateFirewallDeleteProtection</a></code> | <code>string</code> | [Write] network-firewall:UpdateFirewallDeleteProtection. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallDescription">UpdateFirewallDescription</a></code> | <code>string</code> | [Write] network-firewall:UpdateFirewallDescription. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallEncryptionConfiguration">UpdateFirewallEncryptionConfiguration</a></code> | <code>string</code> | [Write] network-firewall:UpdateFirewallEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallPolicy">UpdateFirewallPolicy</a></code> | <code>string</code> | [Write] network-firewall:UpdateFirewallPolicy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallPolicyChangeProtection">UpdateFirewallPolicyChangeProtection</a></code> | <code>string</code> | [Write] network-firewall:UpdateFirewallPolicyChangeProtection. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateLoggingConfiguration">UpdateLoggingConfiguration</a></code> | <code>string</code> | [Write] network-firewall:UpdateLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxy">UpdateProxy</a></code> | <code>string</code> | [Write] network-firewall:UpdateProxy. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyConfiguration">UpdateProxyConfiguration</a></code> | <code>string</code> | [Write] network-firewall:UpdateProxyConfiguration. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyRule">UpdateProxyRule</a></code> | <code>string</code> | [Write] network-firewall:UpdateProxyRule. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyRuleGroupPriorities">UpdateProxyRuleGroupPriorities</a></code> | <code>string</code> | [Write] network-firewall:UpdateProxyRuleGroupPriorities. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyRulePriorities">UpdateProxyRulePriorities</a></code> | <code>string</code> | [Write] network-firewall:UpdateProxyRulePriorities. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string</code> | [Write] network-firewall:UpdateRuleGroup. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateSubnetChangeProtection">UpdateSubnetChangeProtection</a></code> | <code>string</code> | [Write] network-firewall:UpdateSubnetChangeProtection. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateTLSInspectionConfiguration">UpdateTLSInspectionConfiguration</a></code> | <code>string</code> | [Write] network-firewall:UpdateTLSInspectionConfiguration. |

---

##### `AcceptNetworkFirewallTransitGatewayAttachment`<sup>Required</sup> <a name="AcceptNetworkFirewallTransitGatewayAttachment" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AcceptNetworkFirewallTransitGatewayAttachment"></a>

```typescript
public readonly AcceptNetworkFirewallTransitGatewayAttachment: string;
```

- *Type:* string

[Write] network-firewall:AcceptNetworkFirewallTransitGatewayAttachment.

---

##### `actionGetAnalysisReportResults`<sup>Required</sup> <a name="actionGetAnalysisReportResults" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.actionGetAnalysisReportResults"></a>

```typescript
public readonly actionGetAnalysisReportResults: string;
```

- *Type:* string

[Read] network-firewall:GetAnalysisReportResults.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAvailabilityZones`<sup>Required</sup> <a name="AssociateAvailabilityZones" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AssociateAvailabilityZones"></a>

```typescript
public readonly AssociateAvailabilityZones: string;
```

- *Type:* string

[Write] network-firewall:AssociateAvailabilityZones.

---

##### `AssociateFirewallPolicy`<sup>Required</sup> <a name="AssociateFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AssociateFirewallPolicy"></a>

```typescript
public readonly AssociateFirewallPolicy: string;
```

- *Type:* string

[Write] network-firewall:AssociateFirewallPolicy.

---

##### `AssociateSubnets`<sup>Required</sup> <a name="AssociateSubnets" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AssociateSubnets"></a>

```typescript
public readonly AssociateSubnets: string;
```

- *Type:* string

[Write] network-firewall:AssociateSubnets.

---

##### `AttachRuleGroupsToProxyConfiguration`<sup>Required</sup> <a name="AttachRuleGroupsToProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.AttachRuleGroupsToProxyConfiguration"></a>

```typescript
public readonly AttachRuleGroupsToProxyConfiguration: string;
```

- *Type:* string

[Write] network-firewall:AttachRuleGroupsToProxyConfiguration.

---

##### `CreateContainerAssociation`<sup>Required</sup> <a name="CreateContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateContainerAssociation"></a>

```typescript
public readonly CreateContainerAssociation: string;
```

- *Type:* string

[Write] network-firewall:CreateContainerAssociation.

---

##### `CreateFirewall`<sup>Required</sup> <a name="CreateFirewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateFirewall"></a>

```typescript
public readonly CreateFirewall: string;
```

- *Type:* string

[Write] network-firewall:CreateFirewall.

---

##### `CreateFirewallPolicy`<sup>Required</sup> <a name="CreateFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateFirewallPolicy"></a>

```typescript
public readonly CreateFirewallPolicy: string;
```

- *Type:* string

[Write] network-firewall:CreateFirewallPolicy.

---

##### `CreateProxy`<sup>Required</sup> <a name="CreateProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxy"></a>

```typescript
public readonly CreateProxy: string;
```

- *Type:* string

[Write] network-firewall:CreateProxy.

---

##### `CreateProxyConfiguration`<sup>Required</sup> <a name="CreateProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxyConfiguration"></a>

```typescript
public readonly CreateProxyConfiguration: string;
```

- *Type:* string

[Write] network-firewall:CreateProxyConfiguration.

---

##### `CreateProxyRuleGroup`<sup>Required</sup> <a name="CreateProxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxyRuleGroup"></a>

```typescript
public readonly CreateProxyRuleGroup: string;
```

- *Type:* string

[Write] network-firewall:CreateProxyRuleGroup.

---

##### `CreateProxyRules`<sup>Required</sup> <a name="CreateProxyRules" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateProxyRules"></a>

```typescript
public readonly CreateProxyRules: string;
```

- *Type:* string

[Write] network-firewall:CreateProxyRules.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string;
```

- *Type:* string

[Write] network-firewall:CreateRuleGroup.

---

##### `CreateTLSInspectionConfiguration`<sup>Required</sup> <a name="CreateTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateTLSInspectionConfiguration"></a>

```typescript
public readonly CreateTLSInspectionConfiguration: string;
```

- *Type:* string

[Write] network-firewall:CreateTLSInspectionConfiguration.

---

##### `CreateVpcEndpointAssociation`<sup>Required</sup> <a name="CreateVpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.CreateVpcEndpointAssociation"></a>

```typescript
public readonly CreateVpcEndpointAssociation: string;
```

- *Type:* string

[Write] network-firewall:CreateVpcEndpointAssociation.

---

##### `DeleteContainerAssociation`<sup>Required</sup> <a name="DeleteContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteContainerAssociation"></a>

```typescript
public readonly DeleteContainerAssociation: string;
```

- *Type:* string

[Write] network-firewall:DeleteContainerAssociation.

---

##### `DeleteFirewall`<sup>Required</sup> <a name="DeleteFirewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteFirewall"></a>

```typescript
public readonly DeleteFirewall: string;
```

- *Type:* string

[Write] network-firewall:DeleteFirewall.

---

##### `DeleteFirewallPolicy`<sup>Required</sup> <a name="DeleteFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteFirewallPolicy"></a>

```typescript
public readonly DeleteFirewallPolicy: string;
```

- *Type:* string

[Write] network-firewall:DeleteFirewallPolicy.

---

##### `DeleteNetworkFirewallTransitGatewayAttachment`<sup>Required</sup> <a name="DeleteNetworkFirewallTransitGatewayAttachment" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteNetworkFirewallTransitGatewayAttachment"></a>

```typescript
public readonly DeleteNetworkFirewallTransitGatewayAttachment: string;
```

- *Type:* string

[Write] network-firewall:DeleteNetworkFirewallTransitGatewayAttachment.

---

##### `DeleteProxy`<sup>Required</sup> <a name="DeleteProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxy"></a>

```typescript
public readonly DeleteProxy: string;
```

- *Type:* string

[Write] network-firewall:DeleteProxy.

---

##### `DeleteProxyConfiguration`<sup>Required</sup> <a name="DeleteProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxyConfiguration"></a>

```typescript
public readonly DeleteProxyConfiguration: string;
```

- *Type:* string

[Write] network-firewall:DeleteProxyConfiguration.

---

##### `DeleteProxyRuleGroup`<sup>Required</sup> <a name="DeleteProxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxyRuleGroup"></a>

```typescript
public readonly DeleteProxyRuleGroup: string;
```

- *Type:* string

[Write] network-firewall:DeleteProxyRuleGroup.

---

##### `DeleteProxyRules`<sup>Required</sup> <a name="DeleteProxyRules" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteProxyRules"></a>

```typescript
public readonly DeleteProxyRules: string;
```

- *Type:* string

[Write] network-firewall:DeleteProxyRules.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] network-firewall:DeleteResourcePolicy.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string;
```

- *Type:* string

[Write] network-firewall:DeleteRuleGroup.

---

##### `DeleteTLSInspectionConfiguration`<sup>Required</sup> <a name="DeleteTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteTLSInspectionConfiguration"></a>

```typescript
public readonly DeleteTLSInspectionConfiguration: string;
```

- *Type:* string

[Write] network-firewall:DeleteTLSInspectionConfiguration.

---

##### `DeleteVpcEndpointAssociation`<sup>Required</sup> <a name="DeleteVpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DeleteVpcEndpointAssociation"></a>

```typescript
public readonly DeleteVpcEndpointAssociation: string;
```

- *Type:* string

[Write] network-firewall:DeleteVpcEndpointAssociation.

---

##### `DescribeContainerAssociation`<sup>Required</sup> <a name="DescribeContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeContainerAssociation"></a>

```typescript
public readonly DescribeContainerAssociation: string;
```

- *Type:* string

[Read] network-firewall:DescribeContainerAssociation.

---

##### `DescribeFirewall`<sup>Required</sup> <a name="DescribeFirewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFirewall"></a>

```typescript
public readonly DescribeFirewall: string;
```

- *Type:* string

[Read] network-firewall:DescribeFirewall.

---

##### `DescribeFirewallMetadata`<sup>Required</sup> <a name="DescribeFirewallMetadata" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFirewallMetadata"></a>

```typescript
public readonly DescribeFirewallMetadata: string;
```

- *Type:* string

[Read] network-firewall:DescribeFirewallMetadata.

---

##### `DescribeFirewallPolicy`<sup>Required</sup> <a name="DescribeFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFirewallPolicy"></a>

```typescript
public readonly DescribeFirewallPolicy: string;
```

- *Type:* string

[Read] network-firewall:DescribeFirewallPolicy.

---

##### `DescribeFlowOperation`<sup>Required</sup> <a name="DescribeFlowOperation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeFlowOperation"></a>

```typescript
public readonly DescribeFlowOperation: string;
```

- *Type:* string

[Read] network-firewall:DescribeFlowOperation.

---

##### `DescribeLoggingConfiguration`<sup>Required</sup> <a name="DescribeLoggingConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeLoggingConfiguration"></a>

```typescript
public readonly DescribeLoggingConfiguration: string;
```

- *Type:* string

[Read] network-firewall:DescribeLoggingConfiguration.

---

##### `DescribeProxy`<sup>Required</sup> <a name="DescribeProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxy"></a>

```typescript
public readonly DescribeProxy: string;
```

- *Type:* string

[Read] network-firewall:DescribeProxy.

---

##### `DescribeProxyConfiguration`<sup>Required</sup> <a name="DescribeProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxyConfiguration"></a>

```typescript
public readonly DescribeProxyConfiguration: string;
```

- *Type:* string

[Read] network-firewall:DescribeProxyConfiguration.

---

##### `DescribeProxyRule`<sup>Required</sup> <a name="DescribeProxyRule" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxyRule"></a>

```typescript
public readonly DescribeProxyRule: string;
```

- *Type:* string

[Read] network-firewall:DescribeProxyRule.

---

##### `DescribeProxyRuleGroup`<sup>Required</sup> <a name="DescribeProxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeProxyRuleGroup"></a>

```typescript
public readonly DescribeProxyRuleGroup: string;
```

- *Type:* string

[Read] network-firewall:DescribeProxyRuleGroup.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string;
```

- *Type:* string

[Read] network-firewall:DescribeResourcePolicy.

---

##### `DescribeRuleGroup`<sup>Required</sup> <a name="DescribeRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeRuleGroup"></a>

```typescript
public readonly DescribeRuleGroup: string;
```

- *Type:* string

[Read] network-firewall:DescribeRuleGroup.

---

##### `DescribeRuleGroupMetadata`<sup>Required</sup> <a name="DescribeRuleGroupMetadata" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeRuleGroupMetadata"></a>

```typescript
public readonly DescribeRuleGroupMetadata: string;
```

- *Type:* string

[Read] network-firewall:DescribeRuleGroupMetadata.

---

##### `DescribeRuleGroupSummary`<sup>Required</sup> <a name="DescribeRuleGroupSummary" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeRuleGroupSummary"></a>

```typescript
public readonly DescribeRuleGroupSummary: string;
```

- *Type:* string

[Read] network-firewall:DescribeRuleGroupSummary.

---

##### `DescribeTLSInspectionConfiguration`<sup>Required</sup> <a name="DescribeTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeTLSInspectionConfiguration"></a>

```typescript
public readonly DescribeTLSInspectionConfiguration: string;
```

- *Type:* string

[Read] network-firewall:DescribeTLSInspectionConfiguration.

---

##### `DescribeVpcEndpointAssociation`<sup>Required</sup> <a name="DescribeVpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DescribeVpcEndpointAssociation"></a>

```typescript
public readonly DescribeVpcEndpointAssociation: string;
```

- *Type:* string

[Read] network-firewall:DescribeVpcEndpointAssociation.

---

##### `DetachRuleGroupsFromProxyConfiguration`<sup>Required</sup> <a name="DetachRuleGroupsFromProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DetachRuleGroupsFromProxyConfiguration"></a>

```typescript
public readonly DetachRuleGroupsFromProxyConfiguration: string;
```

- *Type:* string

[Write] network-firewall:DetachRuleGroupsFromProxyConfiguration.

---

##### `DisassociateAvailabilityZones`<sup>Required</sup> <a name="DisassociateAvailabilityZones" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DisassociateAvailabilityZones"></a>

```typescript
public readonly DisassociateAvailabilityZones: string;
```

- *Type:* string

[Write] network-firewall:DisassociateAvailabilityZones.

---

##### `DisassociateSubnets`<sup>Required</sup> <a name="DisassociateSubnets" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.DisassociateSubnets"></a>

```typescript
public readonly DisassociateSubnets: string;
```

- *Type:* string

[Write] network-firewall:DisassociateSubnets.

---

##### `ListAnalysisReports`<sup>Required</sup> <a name="ListAnalysisReports" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListAnalysisReports"></a>

```typescript
public readonly ListAnalysisReports: string;
```

- *Type:* string

[List] network-firewall:ListAnalysisReports.

---

##### `ListContainerAssociations`<sup>Required</sup> <a name="ListContainerAssociations" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListContainerAssociations"></a>

```typescript
public readonly ListContainerAssociations: string;
```

- *Type:* string

[List] network-firewall:ListContainerAssociations.

---

##### `ListFirewallPolicies`<sup>Required</sup> <a name="ListFirewallPolicies" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFirewallPolicies"></a>

```typescript
public readonly ListFirewallPolicies: string;
```

- *Type:* string

[List] network-firewall:ListFirewallPolicies.

---

##### `ListFirewalls`<sup>Required</sup> <a name="ListFirewalls" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFirewalls"></a>

```typescript
public readonly ListFirewalls: string;
```

- *Type:* string

[List] network-firewall:ListFirewalls.

---

##### `ListFlowOperationResults`<sup>Required</sup> <a name="ListFlowOperationResults" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFlowOperationResults"></a>

```typescript
public readonly ListFlowOperationResults: string;
```

- *Type:* string

[Read] network-firewall:ListFlowOperationResults.

---

##### `ListFlowOperations`<sup>Required</sup> <a name="ListFlowOperations" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListFlowOperations"></a>

```typescript
public readonly ListFlowOperations: string;
```

- *Type:* string

[List] network-firewall:ListFlowOperations.

---

##### `ListProxies`<sup>Required</sup> <a name="ListProxies" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListProxies"></a>

```typescript
public readonly ListProxies: string;
```

- *Type:* string

[List] network-firewall:ListProxies.

---

##### `ListProxyConfigurations`<sup>Required</sup> <a name="ListProxyConfigurations" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListProxyConfigurations"></a>

```typescript
public readonly ListProxyConfigurations: string;
```

- *Type:* string

[List] network-firewall:ListProxyConfigurations.

---

##### `ListProxyRuleGroups`<sup>Required</sup> <a name="ListProxyRuleGroups" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListProxyRuleGroups"></a>

```typescript
public readonly ListProxyRuleGroups: string;
```

- *Type:* string

[List] network-firewall:ListProxyRuleGroups.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string;
```

- *Type:* string

[List] network-firewall:ListRuleGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] network-firewall:ListTagsForResource.

---

##### `ListTLSInspectionConfigurations`<sup>Required</sup> <a name="ListTLSInspectionConfigurations" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListTLSInspectionConfigurations"></a>

```typescript
public readonly ListTLSInspectionConfigurations: string;
```

- *Type:* string

[List] network-firewall:ListTLSInspectionConfigurations.

---

##### `ListVpcEndpointAssociations`<sup>Required</sup> <a name="ListVpcEndpointAssociations" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.ListVpcEndpointAssociations"></a>

```typescript
public readonly ListVpcEndpointAssociations: string;
```

- *Type:* string

[List] network-firewall:ListVpcEndpointAssociations.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] network-firewall:PutResourcePolicy.

---

##### `RejectNetworkFirewallTransitGatewayAttachment`<sup>Required</sup> <a name="RejectNetworkFirewallTransitGatewayAttachment" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.RejectNetworkFirewallTransitGatewayAttachment"></a>

```typescript
public readonly RejectNetworkFirewallTransitGatewayAttachment: string;
```

- *Type:* string

[Write] network-firewall:RejectNetworkFirewallTransitGatewayAttachment.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAnalysisReport`<sup>Required</sup> <a name="StartAnalysisReport" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.StartAnalysisReport"></a>

```typescript
public readonly StartAnalysisReport: string;
```

- *Type:* string

[Write] network-firewall:StartAnalysisReport.

---

##### `StartFlowCapture`<sup>Required</sup> <a name="StartFlowCapture" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.StartFlowCapture"></a>

```typescript
public readonly StartFlowCapture: string;
```

- *Type:* string

[Write] network-firewall:StartFlowCapture.

---

##### `StartFlowFlush`<sup>Required</sup> <a name="StartFlowFlush" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.StartFlowFlush"></a>

```typescript
public readonly StartFlowFlush: string;
```

- *Type:* string

[Write] network-firewall:StartFlowFlush.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] network-firewall:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] network-firewall:UntagResource.

---

##### `UpdateAvailabilityZoneChangeProtection`<sup>Required</sup> <a name="UpdateAvailabilityZoneChangeProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateAvailabilityZoneChangeProtection"></a>

```typescript
public readonly UpdateAvailabilityZoneChangeProtection: string;
```

- *Type:* string

[Write] network-firewall:UpdateAvailabilityZoneChangeProtection.

---

##### `UpdateContainerAssociation`<sup>Required</sup> <a name="UpdateContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateContainerAssociation"></a>

```typescript
public readonly UpdateContainerAssociation: string;
```

- *Type:* string

[Write] network-firewall:UpdateContainerAssociation.

---

##### `UpdateFirewallAnalysisSettings`<sup>Required</sup> <a name="UpdateFirewallAnalysisSettings" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallAnalysisSettings"></a>

```typescript
public readonly UpdateFirewallAnalysisSettings: string;
```

- *Type:* string

[Write] network-firewall:UpdateFirewallAnalysisSettings.

---

##### `UpdateFirewallDeleteProtection`<sup>Required</sup> <a name="UpdateFirewallDeleteProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallDeleteProtection"></a>

```typescript
public readonly UpdateFirewallDeleteProtection: string;
```

- *Type:* string

[Write] network-firewall:UpdateFirewallDeleteProtection.

---

##### `UpdateFirewallDescription`<sup>Required</sup> <a name="UpdateFirewallDescription" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallDescription"></a>

```typescript
public readonly UpdateFirewallDescription: string;
```

- *Type:* string

[Write] network-firewall:UpdateFirewallDescription.

---

##### `UpdateFirewallEncryptionConfiguration`<sup>Required</sup> <a name="UpdateFirewallEncryptionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallEncryptionConfiguration"></a>

```typescript
public readonly UpdateFirewallEncryptionConfiguration: string;
```

- *Type:* string

[Write] network-firewall:UpdateFirewallEncryptionConfiguration.

---

##### `UpdateFirewallPolicy`<sup>Required</sup> <a name="UpdateFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallPolicy"></a>

```typescript
public readonly UpdateFirewallPolicy: string;
```

- *Type:* string

[Write] network-firewall:UpdateFirewallPolicy.

---

##### `UpdateFirewallPolicyChangeProtection`<sup>Required</sup> <a name="UpdateFirewallPolicyChangeProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateFirewallPolicyChangeProtection"></a>

```typescript
public readonly UpdateFirewallPolicyChangeProtection: string;
```

- *Type:* string

[Write] network-firewall:UpdateFirewallPolicyChangeProtection.

---

##### `UpdateLoggingConfiguration`<sup>Required</sup> <a name="UpdateLoggingConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateLoggingConfiguration"></a>

```typescript
public readonly UpdateLoggingConfiguration: string;
```

- *Type:* string

[Write] network-firewall:UpdateLoggingConfiguration.

---

##### `UpdateProxy`<sup>Required</sup> <a name="UpdateProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxy"></a>

```typescript
public readonly UpdateProxy: string;
```

- *Type:* string

[Write] network-firewall:UpdateProxy.

---

##### `UpdateProxyConfiguration`<sup>Required</sup> <a name="UpdateProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyConfiguration"></a>

```typescript
public readonly UpdateProxyConfiguration: string;
```

- *Type:* string

[Write] network-firewall:UpdateProxyConfiguration.

---

##### `UpdateProxyRule`<sup>Required</sup> <a name="UpdateProxyRule" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyRule"></a>

```typescript
public readonly UpdateProxyRule: string;
```

- *Type:* string

[Write] network-firewall:UpdateProxyRule.

---

##### `UpdateProxyRuleGroupPriorities`<sup>Required</sup> <a name="UpdateProxyRuleGroupPriorities" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyRuleGroupPriorities"></a>

```typescript
public readonly UpdateProxyRuleGroupPriorities: string;
```

- *Type:* string

[Write] network-firewall:UpdateProxyRuleGroupPriorities.

---

##### `UpdateProxyRulePriorities`<sup>Required</sup> <a name="UpdateProxyRulePriorities" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateProxyRulePriorities"></a>

```typescript
public readonly UpdateProxyRulePriorities: string;
```

- *Type:* string

[Write] network-firewall:UpdateProxyRulePriorities.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string;
```

- *Type:* string

[Write] network-firewall:UpdateRuleGroup.

---

##### `UpdateSubnetChangeProtection`<sup>Required</sup> <a name="UpdateSubnetChangeProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateSubnetChangeProtection"></a>

```typescript
public readonly UpdateSubnetChangeProtection: string;
```

- *Type:* string

[Write] network-firewall:UpdateSubnetChangeProtection.

---

##### `UpdateTLSInspectionConfiguration`<sup>Required</sup> <a name="UpdateTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallActions.property.UpdateTLSInspectionConfiguration"></a>

```typescript
public readonly UpdateTLSInspectionConfiguration: string;
```

- *Type:* string

[Write] network-firewall:UpdateTLSInspectionConfiguration.

---

### NetworkFirewallConditions <a name="NetworkFirewallConditions" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions"></a>

Condition key constants and builders for network-firewall.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

new network_firewall.NetworkFirewallConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.requestTag"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.resourceTag"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.tagKeys"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AssociateFirewallPolicyConditionKeys">AssociateFirewallPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateFirewallPolicy action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateContainerAssociationConditionKeys">CreateContainerAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateContainerAssociation action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateFirewallConditionKeys">CreateFirewallConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFirewall action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateFirewallPolicyConditionKeys">CreateFirewallPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFirewallPolicy action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateProxyConditionKeys">CreateProxyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProxy action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateProxyConfigurationConditionKeys">CreateProxyConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProxyConfiguration action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateProxyRuleGroupConditionKeys">CreateProxyRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProxyRuleGroup action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateRuleGroupConditionKeys">CreateRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleGroup action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateTLSInspectionConfigurationConditionKeys">CreateTLSInspectionConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTLSInspectionConfiguration action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateVpcEndpointAssociationConditionKeys">CreateVpcEndpointAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVpcEndpointAssociation action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssociateFirewallPolicyConditionKeys`<sup>Required</sup> <a name="AssociateFirewallPolicyConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AssociateFirewallPolicyConditionKeys"></a>

```typescript
public readonly AssociateFirewallPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateFirewallPolicy action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateContainerAssociationConditionKeys`<sup>Required</sup> <a name="CreateContainerAssociationConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateContainerAssociationConditionKeys"></a>

```typescript
public readonly CreateContainerAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateContainerAssociation action.

---

##### `CreateFirewallConditionKeys`<sup>Required</sup> <a name="CreateFirewallConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateFirewallConditionKeys"></a>

```typescript
public readonly CreateFirewallConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFirewall action.

---

##### `CreateFirewallPolicyConditionKeys`<sup>Required</sup> <a name="CreateFirewallPolicyConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateFirewallPolicyConditionKeys"></a>

```typescript
public readonly CreateFirewallPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFirewallPolicy action.

---

##### `CreateProxyConditionKeys`<sup>Required</sup> <a name="CreateProxyConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateProxyConditionKeys"></a>

```typescript
public readonly CreateProxyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProxy action.

---

##### `CreateProxyConfigurationConditionKeys`<sup>Required</sup> <a name="CreateProxyConfigurationConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateProxyConfigurationConditionKeys"></a>

```typescript
public readonly CreateProxyConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProxyConfiguration action.

---

##### `CreateProxyRuleGroupConditionKeys`<sup>Required</sup> <a name="CreateProxyRuleGroupConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateProxyRuleGroupConditionKeys"></a>

```typescript
public readonly CreateProxyRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProxyRuleGroup action.

---

##### `CreateRuleGroupConditionKeys`<sup>Required</sup> <a name="CreateRuleGroupConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateRuleGroupConditionKeys"></a>

```typescript
public readonly CreateRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleGroup action.

---

##### `CreateTLSInspectionConfigurationConditionKeys`<sup>Required</sup> <a name="CreateTLSInspectionConfigurationConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateTLSInspectionConfigurationConditionKeys"></a>

```typescript
public readonly CreateTLSInspectionConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTLSInspectionConfiguration action.

---

##### `CreateVpcEndpointAssociationConditionKeys`<sup>Required</sup> <a name="CreateVpcEndpointAssociationConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.CreateVpcEndpointAssociationConditionKeys"></a>

```typescript
public readonly CreateVpcEndpointAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVpcEndpointAssociation action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.network_firewall.NetworkFirewallConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NetworkFirewallOperations <a name="NetworkFirewallOperations" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations"></a>

API operation to required IAM actions mapping for network-firewall.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

new network_firewall.NetworkFirewallOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AcceptNetworkFirewallTransitGatewayAttachment">AcceptNetworkFirewallTransitGatewayAttachment</a></code> | <code>string[]</code> | IAM actions required for the AcceptNetworkFirewallTransitGatewayAttachment API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AssociateAvailabilityZones">AssociateAvailabilityZones</a></code> | <code>string[]</code> | IAM actions required for the AssociateAvailabilityZones API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AssociateFirewallPolicy">AssociateFirewallPolicy</a></code> | <code>string[]</code> | IAM actions required for the AssociateFirewallPolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AssociateSubnets">AssociateSubnets</a></code> | <code>string[]</code> | IAM actions required for the AssociateSubnets API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AttachRuleGroupsToProxyConfiguration">AttachRuleGroupsToProxyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the AttachRuleGroupsToProxyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateContainerAssociation">CreateContainerAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateContainerAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateFirewall">CreateFirewall</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewall API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateFirewallPolicy">CreateFirewallPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewallPolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxy">CreateProxy</a></code> | <code>string[]</code> | IAM actions required for the CreateProxy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxyConfiguration">CreateProxyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateProxyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxyRuleGroup">CreateProxyRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateProxyRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxyRules">CreateProxyRules</a></code> | <code>string[]</code> | IAM actions required for the CreateProxyRules API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateTLSInspectionConfiguration">CreateTLSInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateTLSInspectionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateVpcEndpointAssociation">CreateVpcEndpointAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcEndpointAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteContainerAssociation">DeleteContainerAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteContainerAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteFirewall">DeleteFirewall</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewall API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteFirewallPolicy">DeleteFirewallPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallPolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteNetworkFirewallTransitGatewayAttachment">DeleteNetworkFirewallTransitGatewayAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetworkFirewallTransitGatewayAttachment API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxy">DeleteProxy</a></code> | <code>string[]</code> | IAM actions required for the DeleteProxy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxyConfiguration">DeleteProxyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteProxyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxyRuleGroup">DeleteProxyRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteProxyRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxyRules">DeleteProxyRules</a></code> | <code>string[]</code> | IAM actions required for the DeleteProxyRules API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteTLSInspectionConfiguration">DeleteTLSInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteTLSInspectionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteVpcEndpointAssociation">DeleteVpcEndpointAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteVpcEndpointAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeContainerAssociation">DescribeContainerAssociation</a></code> | <code>string[]</code> | IAM actions required for the DescribeContainerAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFirewall">DescribeFirewall</a></code> | <code>string[]</code> | IAM actions required for the DescribeFirewall API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFirewallMetadata">DescribeFirewallMetadata</a></code> | <code>string[]</code> | IAM actions required for the DescribeFirewallMetadata API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFirewallPolicy">DescribeFirewallPolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeFirewallPolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFlowOperation">DescribeFlowOperation</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlowOperation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeLoggingConfiguration">DescribeLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxy">DescribeProxy</a></code> | <code>string[]</code> | IAM actions required for the DescribeProxy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxyConfiguration">DescribeProxyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeProxyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxyRule">DescribeProxyRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeProxyRule API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxyRuleGroup">DescribeProxyRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeProxyRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeResourcePolicy">DescribeResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeRuleGroup">DescribeRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeRuleGroupMetadata">DescribeRuleGroupMetadata</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuleGroupMetadata API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeRuleGroupSummary">DescribeRuleGroupSummary</a></code> | <code>string[]</code> | IAM actions required for the DescribeRuleGroupSummary API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeTLSInspectionConfiguration">DescribeTLSInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeTLSInspectionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeVpcEndpointAssociation">DescribeVpcEndpointAssociation</a></code> | <code>string[]</code> | IAM actions required for the DescribeVpcEndpointAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DetachRuleGroupsFromProxyConfiguration">DetachRuleGroupsFromProxyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DetachRuleGroupsFromProxyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DisassociateAvailabilityZones">DisassociateAvailabilityZones</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAvailabilityZones API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DisassociateSubnets">DisassociateSubnets</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSubnets API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListAnalysisReports">ListAnalysisReports</a></code> | <code>string[]</code> | IAM actions required for the ListAnalysisReports API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListContainerAssociations">ListContainerAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListContainerAssociations API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFirewallPolicies">ListFirewallPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallPolicies API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFirewalls">ListFirewalls</a></code> | <code>string[]</code> | IAM actions required for the ListFirewalls API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFlowOperationResults">ListFlowOperationResults</a></code> | <code>string[]</code> | IAM actions required for the ListFlowOperationResults API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFlowOperations">ListFlowOperations</a></code> | <code>string[]</code> | IAM actions required for the ListFlowOperations API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListProxies">ListProxies</a></code> | <code>string[]</code> | IAM actions required for the ListProxies API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListProxyConfigurations">ListProxyConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListProxyConfigurations API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListProxyRuleGroups">ListProxyRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListProxyRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListTLSInspectionConfigurations">ListTLSInspectionConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListTLSInspectionConfigurations API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListVpcEndpointAssociations">ListVpcEndpointAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListVpcEndpointAssociations API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.opGetAnalysisReportResults">opGetAnalysisReportResults</a></code> | <code>string[]</code> | IAM actions required for the GetAnalysisReportResults API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.RejectNetworkFirewallTransitGatewayAttachment">RejectNetworkFirewallTransitGatewayAttachment</a></code> | <code>string[]</code> | IAM actions required for the RejectNetworkFirewallTransitGatewayAttachment API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.StartAnalysisReport">StartAnalysisReport</a></code> | <code>string[]</code> | IAM actions required for the StartAnalysisReport API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.StartFlowCapture">StartFlowCapture</a></code> | <code>string[]</code> | IAM actions required for the StartFlowCapture API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.StartFlowFlush">StartFlowFlush</a></code> | <code>string[]</code> | IAM actions required for the StartFlowFlush API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateAvailabilityZoneChangeProtection">UpdateAvailabilityZoneChangeProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateAvailabilityZoneChangeProtection API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateContainerAssociation">UpdateContainerAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateContainerAssociation API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallAnalysisSettings">UpdateFirewallAnalysisSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallAnalysisSettings API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallDeleteProtection">UpdateFirewallDeleteProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallDeleteProtection API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallDescription">UpdateFirewallDescription</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallDescription API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallEncryptionConfiguration">UpdateFirewallEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallPolicy">UpdateFirewallPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallPolicy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallPolicyChangeProtection">UpdateFirewallPolicyChangeProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallPolicyChangeProtection API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateLoggingConfiguration">UpdateLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxy">UpdateProxy</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxy API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyConfiguration">UpdateProxyConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxyConfiguration API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyRule">UpdateProxyRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxyRule API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyRuleGroupPriorities">UpdateProxyRuleGroupPriorities</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxyRuleGroupPriorities API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyRulePriorities">UpdateProxyRulePriorities</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxyRulePriorities API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxySettings">UpdateProxySettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateProxySettings API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateSubnetChangeProtection">UpdateSubnetChangeProtection</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubnetChangeProtection API call. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateTLSInspectionConfiguration">UpdateTLSInspectionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateTLSInspectionConfiguration API call. |

---

##### `AcceptNetworkFirewallTransitGatewayAttachment`<sup>Required</sup> <a name="AcceptNetworkFirewallTransitGatewayAttachment" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AcceptNetworkFirewallTransitGatewayAttachment"></a>

```typescript
public readonly AcceptNetworkFirewallTransitGatewayAttachment: string[];
```

- *Type:* string[]

IAM actions required for the AcceptNetworkFirewallTransitGatewayAttachment API call.

---

##### `AssociateAvailabilityZones`<sup>Required</sup> <a name="AssociateAvailabilityZones" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AssociateAvailabilityZones"></a>

```typescript
public readonly AssociateAvailabilityZones: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAvailabilityZones API call.

---

##### `AssociateFirewallPolicy`<sup>Required</sup> <a name="AssociateFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AssociateFirewallPolicy"></a>

```typescript
public readonly AssociateFirewallPolicy: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFirewallPolicy API call.

---

##### `AssociateSubnets`<sup>Required</sup> <a name="AssociateSubnets" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AssociateSubnets"></a>

```typescript
public readonly AssociateSubnets: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSubnets API call.

---

##### `AttachRuleGroupsToProxyConfiguration`<sup>Required</sup> <a name="AttachRuleGroupsToProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.AttachRuleGroupsToProxyConfiguration"></a>

```typescript
public readonly AttachRuleGroupsToProxyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the AttachRuleGroupsToProxyConfiguration API call.

---

##### `CreateContainerAssociation`<sup>Required</sup> <a name="CreateContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateContainerAssociation"></a>

```typescript
public readonly CreateContainerAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateContainerAssociation API call.

---

##### `CreateFirewall`<sup>Required</sup> <a name="CreateFirewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateFirewall"></a>

```typescript
public readonly CreateFirewall: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewall API call.

---

##### `CreateFirewallPolicy`<sup>Required</sup> <a name="CreateFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateFirewallPolicy"></a>

```typescript
public readonly CreateFirewallPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewallPolicy API call.

---

##### `CreateProxy`<sup>Required</sup> <a name="CreateProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxy"></a>

```typescript
public readonly CreateProxy: string[];
```

- *Type:* string[]

IAM actions required for the CreateProxy API call.

---

##### `CreateProxyConfiguration`<sup>Required</sup> <a name="CreateProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxyConfiguration"></a>

```typescript
public readonly CreateProxyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateProxyConfiguration API call.

---

##### `CreateProxyRuleGroup`<sup>Required</sup> <a name="CreateProxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxyRuleGroup"></a>

```typescript
public readonly CreateProxyRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateProxyRuleGroup API call.

---

##### `CreateProxyRules`<sup>Required</sup> <a name="CreateProxyRules" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateProxyRules"></a>

```typescript
public readonly CreateProxyRules: string[];
```

- *Type:* string[]

IAM actions required for the CreateProxyRules API call.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleGroup API call.

---

##### `CreateTLSInspectionConfiguration`<sup>Required</sup> <a name="CreateTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateTLSInspectionConfiguration"></a>

```typescript
public readonly CreateTLSInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateTLSInspectionConfiguration API call.

---

##### `CreateVpcEndpointAssociation`<sup>Required</sup> <a name="CreateVpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.CreateVpcEndpointAssociation"></a>

```typescript
public readonly CreateVpcEndpointAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcEndpointAssociation API call.

---

##### `DeleteContainerAssociation`<sup>Required</sup> <a name="DeleteContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteContainerAssociation"></a>

```typescript
public readonly DeleteContainerAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteContainerAssociation API call.

---

##### `DeleteFirewall`<sup>Required</sup> <a name="DeleteFirewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteFirewall"></a>

```typescript
public readonly DeleteFirewall: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewall API call.

---

##### `DeleteFirewallPolicy`<sup>Required</sup> <a name="DeleteFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteFirewallPolicy"></a>

```typescript
public readonly DeleteFirewallPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallPolicy API call.

---

##### `DeleteNetworkFirewallTransitGatewayAttachment`<sup>Required</sup> <a name="DeleteNetworkFirewallTransitGatewayAttachment" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteNetworkFirewallTransitGatewayAttachment"></a>

```typescript
public readonly DeleteNetworkFirewallTransitGatewayAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetworkFirewallTransitGatewayAttachment API call.

---

##### `DeleteProxy`<sup>Required</sup> <a name="DeleteProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxy"></a>

```typescript
public readonly DeleteProxy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProxy API call.

---

##### `DeleteProxyConfiguration`<sup>Required</sup> <a name="DeleteProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxyConfiguration"></a>

```typescript
public readonly DeleteProxyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProxyConfiguration API call.

---

##### `DeleteProxyRuleGroup`<sup>Required</sup> <a name="DeleteProxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxyRuleGroup"></a>

```typescript
public readonly DeleteProxyRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProxyRuleGroup API call.

---

##### `DeleteProxyRules`<sup>Required</sup> <a name="DeleteProxyRules" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteProxyRules"></a>

```typescript
public readonly DeleteProxyRules: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProxyRules API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleGroup API call.

---

##### `DeleteTLSInspectionConfiguration`<sup>Required</sup> <a name="DeleteTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteTLSInspectionConfiguration"></a>

```typescript
public readonly DeleteTLSInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTLSInspectionConfiguration API call.

---

##### `DeleteVpcEndpointAssociation`<sup>Required</sup> <a name="DeleteVpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DeleteVpcEndpointAssociation"></a>

```typescript
public readonly DeleteVpcEndpointAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVpcEndpointAssociation API call.

---

##### `DescribeContainerAssociation`<sup>Required</sup> <a name="DescribeContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeContainerAssociation"></a>

```typescript
public readonly DescribeContainerAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContainerAssociation API call.

---

##### `DescribeFirewall`<sup>Required</sup> <a name="DescribeFirewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFirewall"></a>

```typescript
public readonly DescribeFirewall: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFirewall API call.

---

##### `DescribeFirewallMetadata`<sup>Required</sup> <a name="DescribeFirewallMetadata" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFirewallMetadata"></a>

```typescript
public readonly DescribeFirewallMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFirewallMetadata API call.

---

##### `DescribeFirewallPolicy`<sup>Required</sup> <a name="DescribeFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFirewallPolicy"></a>

```typescript
public readonly DescribeFirewallPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFirewallPolicy API call.

---

##### `DescribeFlowOperation`<sup>Required</sup> <a name="DescribeFlowOperation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeFlowOperation"></a>

```typescript
public readonly DescribeFlowOperation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlowOperation API call.

---

##### `DescribeLoggingConfiguration`<sup>Required</sup> <a name="DescribeLoggingConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeLoggingConfiguration"></a>

```typescript
public readonly DescribeLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoggingConfiguration API call.

---

##### `DescribeProxy`<sup>Required</sup> <a name="DescribeProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxy"></a>

```typescript
public readonly DescribeProxy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProxy API call.

---

##### `DescribeProxyConfiguration`<sup>Required</sup> <a name="DescribeProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxyConfiguration"></a>

```typescript
public readonly DescribeProxyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProxyConfiguration API call.

---

##### `DescribeProxyRule`<sup>Required</sup> <a name="DescribeProxyRule" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxyRule"></a>

```typescript
public readonly DescribeProxyRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProxyRule API call.

---

##### `DescribeProxyRuleGroup`<sup>Required</sup> <a name="DescribeProxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeProxyRuleGroup"></a>

```typescript
public readonly DescribeProxyRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProxyRuleGroup API call.

---

##### `DescribeResourcePolicy`<sup>Required</sup> <a name="DescribeResourcePolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeResourcePolicy"></a>

```typescript
public readonly DescribeResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourcePolicy API call.

---

##### `DescribeRuleGroup`<sup>Required</sup> <a name="DescribeRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeRuleGroup"></a>

```typescript
public readonly DescribeRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuleGroup API call.

---

##### `DescribeRuleGroupMetadata`<sup>Required</sup> <a name="DescribeRuleGroupMetadata" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeRuleGroupMetadata"></a>

```typescript
public readonly DescribeRuleGroupMetadata: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuleGroupMetadata API call.

---

##### `DescribeRuleGroupSummary`<sup>Required</sup> <a name="DescribeRuleGroupSummary" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeRuleGroupSummary"></a>

```typescript
public readonly DescribeRuleGroupSummary: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRuleGroupSummary API call.

---

##### `DescribeTLSInspectionConfiguration`<sup>Required</sup> <a name="DescribeTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeTLSInspectionConfiguration"></a>

```typescript
public readonly DescribeTLSInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTLSInspectionConfiguration API call.

---

##### `DescribeVpcEndpointAssociation`<sup>Required</sup> <a name="DescribeVpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DescribeVpcEndpointAssociation"></a>

```typescript
public readonly DescribeVpcEndpointAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVpcEndpointAssociation API call.

---

##### `DetachRuleGroupsFromProxyConfiguration`<sup>Required</sup> <a name="DetachRuleGroupsFromProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DetachRuleGroupsFromProxyConfiguration"></a>

```typescript
public readonly DetachRuleGroupsFromProxyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DetachRuleGroupsFromProxyConfiguration API call.

---

##### `DisassociateAvailabilityZones`<sup>Required</sup> <a name="DisassociateAvailabilityZones" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DisassociateAvailabilityZones"></a>

```typescript
public readonly DisassociateAvailabilityZones: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAvailabilityZones API call.

---

##### `DisassociateSubnets`<sup>Required</sup> <a name="DisassociateSubnets" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.DisassociateSubnets"></a>

```typescript
public readonly DisassociateSubnets: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSubnets API call.

---

##### `ListAnalysisReports`<sup>Required</sup> <a name="ListAnalysisReports" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListAnalysisReports"></a>

```typescript
public readonly ListAnalysisReports: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalysisReports API call.

---

##### `ListContainerAssociations`<sup>Required</sup> <a name="ListContainerAssociations" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListContainerAssociations"></a>

```typescript
public readonly ListContainerAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListContainerAssociations API call.

---

##### `ListFirewallPolicies`<sup>Required</sup> <a name="ListFirewallPolicies" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFirewallPolicies"></a>

```typescript
public readonly ListFirewallPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallPolicies API call.

---

##### `ListFirewalls`<sup>Required</sup> <a name="ListFirewalls" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFirewalls"></a>

```typescript
public readonly ListFirewalls: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewalls API call.

---

##### `ListFlowOperationResults`<sup>Required</sup> <a name="ListFlowOperationResults" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFlowOperationResults"></a>

```typescript
public readonly ListFlowOperationResults: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowOperationResults API call.

---

##### `ListFlowOperations`<sup>Required</sup> <a name="ListFlowOperations" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListFlowOperations"></a>

```typescript
public readonly ListFlowOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListFlowOperations API call.

---

##### `ListProxies`<sup>Required</sup> <a name="ListProxies" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListProxies"></a>

```typescript
public readonly ListProxies: string[];
```

- *Type:* string[]

IAM actions required for the ListProxies API call.

---

##### `ListProxyConfigurations`<sup>Required</sup> <a name="ListProxyConfigurations" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListProxyConfigurations"></a>

```typescript
public readonly ListProxyConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListProxyConfigurations API call.

---

##### `ListProxyRuleGroups`<sup>Required</sup> <a name="ListProxyRuleGroups" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListProxyRuleGroups"></a>

```typescript
public readonly ListProxyRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListProxyRuleGroups API call.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTLSInspectionConfigurations`<sup>Required</sup> <a name="ListTLSInspectionConfigurations" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListTLSInspectionConfigurations"></a>

```typescript
public readonly ListTLSInspectionConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListTLSInspectionConfigurations API call.

---

##### `ListVpcEndpointAssociations`<sup>Required</sup> <a name="ListVpcEndpointAssociations" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.ListVpcEndpointAssociations"></a>

```typescript
public readonly ListVpcEndpointAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListVpcEndpointAssociations API call.

---

##### `opGetAnalysisReportResults`<sup>Required</sup> <a name="opGetAnalysisReportResults" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.opGetAnalysisReportResults"></a>

```typescript
public readonly opGetAnalysisReportResults: string[];
```

- *Type:* string[]

IAM actions required for the GetAnalysisReportResults API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RejectNetworkFirewallTransitGatewayAttachment`<sup>Required</sup> <a name="RejectNetworkFirewallTransitGatewayAttachment" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.RejectNetworkFirewallTransitGatewayAttachment"></a>

```typescript
public readonly RejectNetworkFirewallTransitGatewayAttachment: string[];
```

- *Type:* string[]

IAM actions required for the RejectNetworkFirewallTransitGatewayAttachment API call.

---

##### `StartAnalysisReport`<sup>Required</sup> <a name="StartAnalysisReport" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.StartAnalysisReport"></a>

```typescript
public readonly StartAnalysisReport: string[];
```

- *Type:* string[]

IAM actions required for the StartAnalysisReport API call.

---

##### `StartFlowCapture`<sup>Required</sup> <a name="StartFlowCapture" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.StartFlowCapture"></a>

```typescript
public readonly StartFlowCapture: string[];
```

- *Type:* string[]

IAM actions required for the StartFlowCapture API call.

---

##### `StartFlowFlush`<sup>Required</sup> <a name="StartFlowFlush" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.StartFlowFlush"></a>

```typescript
public readonly StartFlowFlush: string[];
```

- *Type:* string[]

IAM actions required for the StartFlowFlush API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAvailabilityZoneChangeProtection`<sup>Required</sup> <a name="UpdateAvailabilityZoneChangeProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateAvailabilityZoneChangeProtection"></a>

```typescript
public readonly UpdateAvailabilityZoneChangeProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAvailabilityZoneChangeProtection API call.

---

##### `UpdateContainerAssociation`<sup>Required</sup> <a name="UpdateContainerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateContainerAssociation"></a>

```typescript
public readonly UpdateContainerAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContainerAssociation API call.

---

##### `UpdateFirewallAnalysisSettings`<sup>Required</sup> <a name="UpdateFirewallAnalysisSettings" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallAnalysisSettings"></a>

```typescript
public readonly UpdateFirewallAnalysisSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallAnalysisSettings API call.

---

##### `UpdateFirewallDeleteProtection`<sup>Required</sup> <a name="UpdateFirewallDeleteProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallDeleteProtection"></a>

```typescript
public readonly UpdateFirewallDeleteProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallDeleteProtection API call.

---

##### `UpdateFirewallDescription`<sup>Required</sup> <a name="UpdateFirewallDescription" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallDescription"></a>

```typescript
public readonly UpdateFirewallDescription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallDescription API call.

---

##### `UpdateFirewallEncryptionConfiguration`<sup>Required</sup> <a name="UpdateFirewallEncryptionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallEncryptionConfiguration"></a>

```typescript
public readonly UpdateFirewallEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallEncryptionConfiguration API call.

---

##### `UpdateFirewallPolicy`<sup>Required</sup> <a name="UpdateFirewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallPolicy"></a>

```typescript
public readonly UpdateFirewallPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallPolicy API call.

---

##### `UpdateFirewallPolicyChangeProtection`<sup>Required</sup> <a name="UpdateFirewallPolicyChangeProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateFirewallPolicyChangeProtection"></a>

```typescript
public readonly UpdateFirewallPolicyChangeProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallPolicyChangeProtection API call.

---

##### `UpdateLoggingConfiguration`<sup>Required</sup> <a name="UpdateLoggingConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateLoggingConfiguration"></a>

```typescript
public readonly UpdateLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLoggingConfiguration API call.

---

##### `UpdateProxy`<sup>Required</sup> <a name="UpdateProxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxy"></a>

```typescript
public readonly UpdateProxy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxy API call.

---

##### `UpdateProxyConfiguration`<sup>Required</sup> <a name="UpdateProxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyConfiguration"></a>

```typescript
public readonly UpdateProxyConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxyConfiguration API call.

---

##### `UpdateProxyRule`<sup>Required</sup> <a name="UpdateProxyRule" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyRule"></a>

```typescript
public readonly UpdateProxyRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxyRule API call.

---

##### `UpdateProxyRuleGroupPriorities`<sup>Required</sup> <a name="UpdateProxyRuleGroupPriorities" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyRuleGroupPriorities"></a>

```typescript
public readonly UpdateProxyRuleGroupPriorities: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxyRuleGroupPriorities API call.

---

##### `UpdateProxyRulePriorities`<sup>Required</sup> <a name="UpdateProxyRulePriorities" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxyRulePriorities"></a>

```typescript
public readonly UpdateProxyRulePriorities: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxyRulePriorities API call.

---

##### `UpdateProxySettings`<sup>Required</sup> <a name="UpdateProxySettings" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateProxySettings"></a>

```typescript
public readonly UpdateProxySettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProxySettings API call.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleGroup API call.

---

##### `UpdateSubnetChangeProtection`<sup>Required</sup> <a name="UpdateSubnetChangeProtection" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateSubnetChangeProtection"></a>

```typescript
public readonly UpdateSubnetChangeProtection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubnetChangeProtection API call.

---

##### `UpdateTLSInspectionConfiguration`<sup>Required</sup> <a name="UpdateTLSInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallOperations.property.UpdateTLSInspectionConfiguration"></a>

```typescript
public readonly UpdateTLSInspectionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTLSInspectionConfiguration API call.

---

### NetworkFirewallResources <a name="NetworkFirewallResources" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources"></a>

ARN builders, validators, and parsers for network-firewall resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.Initializer"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

new network_firewall.NetworkFirewallResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.containerAssociation">containerAssociation</a></code> | Builds an ARN for the ContainerAssociation resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.firewall">firewall</a></code> | Builds an ARN for the Firewall resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.firewallPolicy">firewallPolicy</a></code> | Builds an ARN for the FirewallPolicy resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidContainerAssociationArn">isValidContainerAssociationArn</a></code> | Validates whether a string is a valid ARN for the ContainerAssociation resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidFirewallArn">isValidFirewallArn</a></code> | Validates whether a string is a valid ARN for the Firewall resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidFirewallPolicyArn">isValidFirewallPolicyArn</a></code> | Validates whether a string is a valid ARN for the FirewallPolicy resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyArn">isValidProxyArn</a></code> | Validates whether a string is a valid ARN for the Proxy resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyConfigurationArn">isValidProxyConfigurationArn</a></code> | Validates whether a string is a valid ARN for the ProxyConfiguration resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyRuleGroupArn">isValidProxyRuleGroupArn</a></code> | Validates whether a string is a valid ARN for the ProxyRuleGroup resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidStatefulRuleGroupArn">isValidStatefulRuleGroupArn</a></code> | Validates whether a string is a valid ARN for the StatefulRuleGroup resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidStatelessRuleGroupArn">isValidStatelessRuleGroupArn</a></code> | Validates whether a string is a valid ARN for the StatelessRuleGroup resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidTLSInspectionConfigurationArn">isValidTLSInspectionConfigurationArn</a></code> | Validates whether a string is a valid ARN for the TLSInspectionConfiguration resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidVPCEndpointAssociationArn">isValidVPCEndpointAssociationArn</a></code> | Validates whether a string is a valid ARN for the VpcEndpointAssociation resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseContainerAssociationArn">parseContainerAssociationArn</a></code> | Parses a ContainerAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseFirewallArn">parseFirewallArn</a></code> | Parses a Firewall ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseFirewallPolicyArn">parseFirewallPolicyArn</a></code> | Parses a FirewallPolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyArn">parseProxyArn</a></code> | Parses a Proxy ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyConfigurationArn">parseProxyConfigurationArn</a></code> | Parses a ProxyConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyRuleGroupArn">parseProxyRuleGroupArn</a></code> | Parses a ProxyRuleGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseStatefulRuleGroupArn">parseStatefulRuleGroupArn</a></code> | Parses a StatefulRuleGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseStatelessRuleGroupArn">parseStatelessRuleGroupArn</a></code> | Parses a StatelessRuleGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseTLSInspectionConfigurationArn">parseTLSInspectionConfigurationArn</a></code> | Parses a TLSInspectionConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseVPCEndpointAssociationArn">parseVPCEndpointAssociationArn</a></code> | Parses a VpcEndpointAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxy">proxy</a></code> | Builds an ARN for the Proxy resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxyConfiguration">proxyConfiguration</a></code> | Builds an ARN for the ProxyConfiguration resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxyRuleGroup">proxyRuleGroup</a></code> | Builds an ARN for the ProxyRuleGroup resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.statefulRuleGroup">statefulRuleGroup</a></code> | Builds an ARN for the StatefulRuleGroup resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.statelessRuleGroup">statelessRuleGroup</a></code> | Builds an ARN for the StatelessRuleGroup resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.tlsInspectionConfiguration">tlsInspectionConfiguration</a></code> | Builds an ARN for the TLSInspectionConfiguration resource. |
| <code><a href="#@cdk_utils/iam.network_firewall.NetworkFirewallResources.vpcEndpointAssociation">vpcEndpointAssociation</a></code> | Builds an ARN for the VpcEndpointAssociation resource. |

---

##### `containerAssociation` <a name="containerAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.containerAssociation"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.containerAssociation(props: NetworkFirewallContainerAssociationArnProps)
```

Builds an ARN for the ContainerAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.containerAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallContainerAssociationArnProps">NetworkFirewallContainerAssociationArnProps</a>

---

##### `firewall` <a name="firewall" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.firewall"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.firewall(props: NetworkFirewallFirewallArnProps)
```

Builds an ARN for the Firewall resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.firewall.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallArnProps">NetworkFirewallFirewallArnProps</a>

---

##### `firewallPolicy` <a name="firewallPolicy" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.firewallPolicy"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.firewallPolicy(props: NetworkFirewallFirewallPolicyArnProps)
```

Builds an ARN for the FirewallPolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.firewallPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallFirewallPolicyArnProps">NetworkFirewallFirewallPolicyArnProps</a>

---

##### `isValidContainerAssociationArn` <a name="isValidContainerAssociationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidContainerAssociationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidContainerAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the ContainerAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidContainerAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallArn` <a name="isValidFirewallArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidFirewallArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidFirewallArn(arn: string)
```

Validates whether a string is a valid ARN for the Firewall resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidFirewallArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallPolicyArn` <a name="isValidFirewallPolicyArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidFirewallPolicyArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidFirewallPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the FirewallPolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidFirewallPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProxyArn` <a name="isValidProxyArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidProxyArn(arn: string)
```

Validates whether a string is a valid ARN for the Proxy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProxyConfigurationArn` <a name="isValidProxyConfigurationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyConfigurationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidProxyConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the ProxyConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProxyRuleGroupArn` <a name="isValidProxyRuleGroupArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyRuleGroupArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidProxyRuleGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the ProxyRuleGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidProxyRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStatefulRuleGroupArn` <a name="isValidStatefulRuleGroupArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidStatefulRuleGroupArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidStatefulRuleGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the StatefulRuleGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidStatefulRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStatelessRuleGroupArn` <a name="isValidStatelessRuleGroupArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidStatelessRuleGroupArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidStatelessRuleGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the StatelessRuleGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidStatelessRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTLSInspectionConfigurationArn` <a name="isValidTLSInspectionConfigurationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidTLSInspectionConfigurationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidTLSInspectionConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the TLSInspectionConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidTLSInspectionConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCEndpointAssociationArn` <a name="isValidVPCEndpointAssociationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidVPCEndpointAssociationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.isValidVPCEndpointAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the VpcEndpointAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.isValidVPCEndpointAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContainerAssociationArn` <a name="parseContainerAssociationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseContainerAssociationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseContainerAssociationArn(arn: string)
```

Parses a ContainerAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseContainerAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallArn` <a name="parseFirewallArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseFirewallArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseFirewallArn(arn: string)
```

Parses a Firewall ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseFirewallArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallPolicyArn` <a name="parseFirewallPolicyArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseFirewallPolicyArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseFirewallPolicyArn(arn: string)
```

Parses a FirewallPolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseFirewallPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProxyArn` <a name="parseProxyArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseProxyArn(arn: string)
```

Parses a Proxy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProxyConfigurationArn` <a name="parseProxyConfigurationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyConfigurationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseProxyConfigurationArn(arn: string)
```

Parses a ProxyConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProxyRuleGroupArn` <a name="parseProxyRuleGroupArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyRuleGroupArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseProxyRuleGroupArn(arn: string)
```

Parses a ProxyRuleGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseProxyRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStatefulRuleGroupArn` <a name="parseStatefulRuleGroupArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseStatefulRuleGroupArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseStatefulRuleGroupArn(arn: string)
```

Parses a StatefulRuleGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseStatefulRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStatelessRuleGroupArn` <a name="parseStatelessRuleGroupArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseStatelessRuleGroupArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseStatelessRuleGroupArn(arn: string)
```

Parses a StatelessRuleGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseStatelessRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTLSInspectionConfigurationArn` <a name="parseTLSInspectionConfigurationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseTLSInspectionConfigurationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseTLSInspectionConfigurationArn(arn: string)
```

Parses a TLSInspectionConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseTLSInspectionConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCEndpointAssociationArn` <a name="parseVPCEndpointAssociationArn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseVPCEndpointAssociationArn"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.parseVPCEndpointAssociationArn(arn: string)
```

Parses a VpcEndpointAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.parseVPCEndpointAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `proxy` <a name="proxy" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxy"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.proxy(props: NetworkFirewallProxyArnProps)
```

Builds an ARN for the Proxy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyArnProps">NetworkFirewallProxyArnProps</a>

---

##### `proxyConfiguration` <a name="proxyConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxyConfiguration"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.proxyConfiguration(props: NetworkFirewallProxyConfigurationArnProps)
```

Builds an ARN for the ProxyConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxyConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyConfigurationArnProps">NetworkFirewallProxyConfigurationArnProps</a>

---

##### `proxyRuleGroup` <a name="proxyRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxyRuleGroup"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.proxyRuleGroup(props: NetworkFirewallProxyRuleGroupArnProps)
```

Builds an ARN for the ProxyRuleGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.proxyRuleGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallProxyRuleGroupArnProps">NetworkFirewallProxyRuleGroupArnProps</a>

---

##### `statefulRuleGroup` <a name="statefulRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.statefulRuleGroup"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.statefulRuleGroup(props: NetworkFirewallStatefulRuleGroupArnProps)
```

Builds an ARN for the StatefulRuleGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.statefulRuleGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatefulRuleGroupArnProps">NetworkFirewallStatefulRuleGroupArnProps</a>

---

##### `statelessRuleGroup` <a name="statelessRuleGroup" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.statelessRuleGroup"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.statelessRuleGroup(props: NetworkFirewallStatelessRuleGroupArnProps)
```

Builds an ARN for the StatelessRuleGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.statelessRuleGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallStatelessRuleGroupArnProps">NetworkFirewallStatelessRuleGroupArnProps</a>

---

##### `tlsInspectionConfiguration` <a name="tlsInspectionConfiguration" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.tlsInspectionConfiguration"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.tlsInspectionConfiguration(props: NetworkFirewallTLSInspectionConfigurationArnProps)
```

Builds an ARN for the TLSInspectionConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.tlsInspectionConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallTLSInspectionConfigurationArnProps">NetworkFirewallTLSInspectionConfigurationArnProps</a>

---

##### `vpcEndpointAssociation` <a name="vpcEndpointAssociation" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.vpcEndpointAssociation"></a>

```typescript
import { network_firewall } from '@cdk_utils/iam'

network_firewall.NetworkFirewallResources.vpcEndpointAssociation(props: NetworkFirewallVPCEndpointAssociationArnProps)
```

Builds an ARN for the VpcEndpointAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.network_firewall.NetworkFirewallResources.vpcEndpointAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.network_firewall.NetworkFirewallVPCEndpointAssociationArnProps">NetworkFirewallVPCEndpointAssociationArnProps</a>

---




