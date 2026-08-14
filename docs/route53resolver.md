# `route53resolver` Submodule <a name="`route53resolver` Submodule" id="@cdk_utils/iam.route53resolver"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53resolverAutodefinedRuleArnComponents <a name="Route53resolverAutodefinedRuleArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents"></a>

Parsed components of a autodefined-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverAutodefinedRuleArnComponents: route53resolver.Route53resolverAutodefinedRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverAutodefinedRuleArnProps <a name="Route53resolverAutodefinedRuleArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps"></a>

Properties for building a autodefined-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverAutodefinedRuleArnProps: route53resolver.Route53resolverAutodefinedRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverFirewallConfigArnComponents <a name="Route53resolverFirewallConfigArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents"></a>

Parsed components of a firewall-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallConfigArnComponents: route53resolver.Route53resolverFirewallConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverFirewallConfigArnProps <a name="Route53resolverFirewallConfigArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps"></a>

Properties for building a firewall-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallConfigArnProps: route53resolver.Route53resolverFirewallConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverFirewallDomainListArnComponents <a name="Route53resolverFirewallDomainListArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents"></a>

Parsed components of a firewall-domain-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallDomainListArnComponents: route53resolver.Route53resolverFirewallDomainListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverFirewallDomainListArnProps <a name="Route53resolverFirewallDomainListArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps"></a>

Properties for building a firewall-domain-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallDomainListArnProps: route53resolver.Route53resolverFirewallDomainListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverFirewallRuleGroupArnComponents <a name="Route53resolverFirewallRuleGroupArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents"></a>

Parsed components of a firewall-rule-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallRuleGroupArnComponents: route53resolver.Route53resolverFirewallRuleGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverFirewallRuleGroupArnProps <a name="Route53resolverFirewallRuleGroupArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps"></a>

Properties for building a firewall-rule-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallRuleGroupArnProps: route53resolver.Route53resolverFirewallRuleGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverFirewallRuleGroupAssociationArnComponents <a name="Route53resolverFirewallRuleGroupAssociationArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents"></a>

Parsed components of a firewall-rule-group-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallRuleGroupAssociationArnComponents: route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverFirewallRuleGroupAssociationArnProps <a name="Route53resolverFirewallRuleGroupAssociationArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps"></a>

Properties for building a firewall-rule-group-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverFirewallRuleGroupAssociationArnProps: route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverOutpostResolverArnComponents <a name="Route53resolverOutpostResolverArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents"></a>

Parsed components of a outpost-resolver ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverOutpostResolverArnComponents: route53resolver.Route53resolverOutpostResolverArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverOutpostResolverArnProps <a name="Route53resolverOutpostResolverArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps"></a>

Properties for building a outpost-resolver ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverOutpostResolverArnProps: route53resolver.Route53resolverOutpostResolverArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverResolverConfigArnComponents <a name="Route53resolverResolverConfigArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents"></a>

Parsed components of a resolver-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverConfigArnComponents: route53resolver.Route53resolverResolverConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverResolverConfigArnProps <a name="Route53resolverResolverConfigArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps"></a>

Properties for building a resolver-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverConfigArnProps: route53resolver.Route53resolverResolverConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverResolverDnssecConfigArnComponents <a name="Route53resolverResolverDnssecConfigArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents"></a>

Parsed components of a resolver-dnssec-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverDnssecConfigArnComponents: route53resolver.Route53resolverResolverDnssecConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverResolverDnssecConfigArnProps <a name="Route53resolverResolverDnssecConfigArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps"></a>

Properties for building a resolver-dnssec-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverDnssecConfigArnProps: route53resolver.Route53resolverResolverDnssecConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverResolverEndpointArnComponents <a name="Route53resolverResolverEndpointArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents"></a>

Parsed components of a resolver-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverEndpointArnComponents: route53resolver.Route53resolverResolverEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverResolverEndpointArnProps <a name="Route53resolverResolverEndpointArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps"></a>

Properties for building a resolver-endpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverEndpointArnProps: route53resolver.Route53resolverResolverEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverResolverQueryLogConfigArnComponents <a name="Route53resolverResolverQueryLogConfigArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents"></a>

Parsed components of a resolver-query-log-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverQueryLogConfigArnComponents: route53resolver.Route53resolverResolverQueryLogConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverResolverQueryLogConfigArnProps <a name="Route53resolverResolverQueryLogConfigArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps"></a>

Properties for building a resolver-query-log-config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverQueryLogConfigArnProps: route53resolver.Route53resolverResolverQueryLogConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53resolverResolverRuleArnComponents <a name="Route53resolverResolverRuleArnComponents" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents"></a>

Parsed components of a resolver-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverRuleArnComponents: route53resolver.Route53resolverResolverRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53resolverResolverRuleArnProps <a name="Route53resolverResolverRuleArnProps" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps"></a>

Properties for building a resolver-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

const route53resolverResolverRuleArnProps: route53resolver.Route53resolverResolverRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53resolverActions <a name="Route53resolverActions" id="@cdk_utils/iam.route53resolver.Route53resolverActions"></a>

IAM action constants for the route53resolver service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53resolver.Route53resolverActions.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

new route53resolver.Route53resolverActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallConfig">actionGetFirewallConfig</a></code> | <code>string</code> | [Read] route53resolver:GetFirewallConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallDomainList">actionGetFirewallDomainList</a></code> | <code>string</code> | [Read] route53resolver:GetFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallRuleGroup">actionGetFirewallRuleGroup</a></code> | <code>string</code> | [Read] route53resolver:GetFirewallRuleGroup. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallRuleGroupAssociation">actionGetFirewallRuleGroupAssociation</a></code> | <code>string</code> | [Read] route53resolver:GetFirewallRuleGroupAssociation. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallRuleGroupPolicy">actionGetFirewallRuleGroupPolicy</a></code> | <code>string</code> | [Read] route53resolver:GetFirewallRuleGroupPolicy. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetOutpostResolver">actionGetOutpostResolver</a></code> | <code>string</code> | [Read] route53resolver:GetOutpostResolver. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverConfig">actionGetResolverConfig</a></code> | <code>string</code> | [Read] route53resolver:GetResolverConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverDnssecConfig">actionGetResolverDnssecConfig</a></code> | <code>string</code> | [Read] route53resolver:GetResolverDnssecConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverEndpoint">actionGetResolverEndpoint</a></code> | <code>string</code> | [Read] route53resolver:GetResolverEndpoint. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverQueryLogConfig">actionGetResolverQueryLogConfig</a></code> | <code>string</code> | [Read] route53resolver:GetResolverQueryLogConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverQueryLogConfigAssociation">actionGetResolverQueryLogConfigAssociation</a></code> | <code>string</code> | [Read] route53resolver:GetResolverQueryLogConfigAssociation. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverQueryLogConfigPolicy">actionGetResolverQueryLogConfigPolicy</a></code> | <code>string</code> | [Read] route53resolver:GetResolverQueryLogConfigPolicy. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverRule">actionGetResolverRule</a></code> | <code>string</code> | [Read] route53resolver:GetResolverRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverRuleAssociation">actionGetResolverRuleAssociation</a></code> | <code>string</code> | [Read] route53resolver:GetResolverRuleAssociation. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverRulePolicy">actionGetResolverRulePolicy</a></code> | <code>string</code> | [Read] route53resolver:GetResolverRulePolicy. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateFirewallRuleGroup">AssociateFirewallRuleGroup</a></code> | <code>string</code> | [Write] route53resolver:AssociateFirewallRuleGroup. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateResolverEndpointIpAddress">AssociateResolverEndpointIpAddress</a></code> | <code>string</code> | [Write] route53resolver:AssociateResolverEndpointIpAddress. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateResolverQueryLogConfig">AssociateResolverQueryLogConfig</a></code> | <code>string</code> | [Write] route53resolver:AssociateResolverQueryLogConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateResolverRule">AssociateResolverRule</a></code> | <code>string</code> | [Write] route53resolver:AssociateResolverRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateFirewallDomainList">CreateFirewallDomainList</a></code> | <code>string</code> | [Write] route53resolver:CreateFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateFirewallRule">CreateFirewallRule</a></code> | <code>string</code> | [Write] route53resolver:CreateFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateFirewallRuleGroup">CreateFirewallRuleGroup</a></code> | <code>string</code> | [Write] route53resolver:CreateFirewallRuleGroup. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateOutpostResolver">CreateOutpostResolver</a></code> | <code>string</code> | [Write] route53resolver:CreateOutpostResolver. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateResolverEndpoint">CreateResolverEndpoint</a></code> | <code>string</code> | [Write] route53resolver:CreateResolverEndpoint. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateResolverQueryLogConfig">CreateResolverQueryLogConfig</a></code> | <code>string</code> | [Write] route53resolver:CreateResolverQueryLogConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateResolverRule">CreateResolverRule</a></code> | <code>string</code> | [Write] route53resolver:CreateResolverRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteFirewallDomainList">DeleteFirewallDomainList</a></code> | <code>string</code> | [Write] route53resolver:DeleteFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteFirewallRule">DeleteFirewallRule</a></code> | <code>string</code> | [Write] route53resolver:DeleteFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteFirewallRuleGroup">DeleteFirewallRuleGroup</a></code> | <code>string</code> | [Write] route53resolver:DeleteFirewallRuleGroup. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteOutpostResolver">DeleteOutpostResolver</a></code> | <code>string</code> | [Write] route53resolver:DeleteOutpostResolver. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteResolverEndpoint">DeleteResolverEndpoint</a></code> | <code>string</code> | [Write] route53resolver:DeleteResolverEndpoint. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteResolverQueryLogConfig">DeleteResolverQueryLogConfig</a></code> | <code>string</code> | [Write] route53resolver:DeleteResolverQueryLogConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteResolverRule">DeleteResolverRule</a></code> | <code>string</code> | [Write] route53resolver:DeleteResolverRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateFirewallRuleGroup">DisassociateFirewallRuleGroup</a></code> | <code>string</code> | [Write] route53resolver:DisassociateFirewallRuleGroup. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateResolverEndpointIpAddress">DisassociateResolverEndpointIpAddress</a></code> | <code>string</code> | [Write] route53resolver:DisassociateResolverEndpointIpAddress. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateResolverQueryLogConfig">DisassociateResolverQueryLogConfig</a></code> | <code>string</code> | [Write] route53resolver:DisassociateResolverQueryLogConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateResolverRule">DisassociateResolverRule</a></code> | <code>string</code> | [Write] route53resolver:DisassociateResolverRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ImportFirewallDomains">ImportFirewallDomains</a></code> | <code>string</code> | [Write] route53resolver:ImportFirewallDomains. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallConfigs">ListFirewallConfigs</a></code> | <code>string</code> | [List] route53resolver:ListFirewallConfigs. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallDomainLists">ListFirewallDomainLists</a></code> | <code>string</code> | [List] route53resolver:ListFirewallDomainLists. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallDomains">ListFirewallDomains</a></code> | <code>string</code> | [List] route53resolver:ListFirewallDomains. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRuleGroupAssociations">ListFirewallRuleGroupAssociations</a></code> | <code>string</code> | [List] route53resolver:ListFirewallRuleGroupAssociations. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRuleGroups">ListFirewallRuleGroups</a></code> | <code>string</code> | [List] route53resolver:ListFirewallRuleGroups. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRules">ListFirewallRules</a></code> | <code>string</code> | [List] route53resolver:ListFirewallRules. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRuleTypes">ListFirewallRuleTypes</a></code> | <code>string</code> | [List] route53resolver:ListFirewallRuleTypes. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListOutpostResolvers">ListOutpostResolvers</a></code> | <code>string</code> | [List] route53resolver:ListOutpostResolvers. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverConfigs">ListResolverConfigs</a></code> | <code>string</code> | [List] route53resolver:ListResolverConfigs. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverDnssecConfigs">ListResolverDnssecConfigs</a></code> | <code>string</code> | [List] route53resolver:ListResolverDnssecConfigs. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverEndpointIpAddresses">ListResolverEndpointIpAddresses</a></code> | <code>string</code> | [List] route53resolver:ListResolverEndpointIpAddresses. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverEndpoints">ListResolverEndpoints</a></code> | <code>string</code> | [List] route53resolver:ListResolverEndpoints. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverQueryLogConfigAssociations">ListResolverQueryLogConfigAssociations</a></code> | <code>string</code> | [List] route53resolver:ListResolverQueryLogConfigAssociations. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverQueryLogConfigs">ListResolverQueryLogConfigs</a></code> | <code>string</code> | [List] route53resolver:ListResolverQueryLogConfigs. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverRuleAssociations">ListResolverRuleAssociations</a></code> | <code>string</code> | [List] route53resolver:ListResolverRuleAssociations. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverRules">ListResolverRules</a></code> | <code>string</code> | [List] route53resolver:ListResolverRules. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] route53resolver:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.PutFirewallRuleGroupPolicy">PutFirewallRuleGroupPolicy</a></code> | <code>string</code> | [PermissionManagement] route53resolver:PutFirewallRuleGroupPolicy. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.PutResolverQueryLogConfigPolicy">PutResolverQueryLogConfigPolicy</a></code> | <code>string</code> | [PermissionManagement] route53resolver:PutResolverQueryLogConfigPolicy. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.PutResolverRulePolicy">PutResolverRulePolicy</a></code> | <code>string</code> | [PermissionManagement] route53resolver:PutResolverRulePolicy. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] route53resolver:TagResource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] route53resolver:UntagResource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallConfig">UpdateFirewallConfig</a></code> | <code>string</code> | [Write] route53resolver:UpdateFirewallConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallDomains">UpdateFirewallDomains</a></code> | <code>string</code> | [Write] route53resolver:UpdateFirewallDomains. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallRule">UpdateFirewallRule</a></code> | <code>string</code> | [Write] route53resolver:UpdateFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallRuleGroupAssociation">UpdateFirewallRuleGroupAssociation</a></code> | <code>string</code> | [Write] route53resolver:UpdateFirewallRuleGroupAssociation. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateOutpostResolver">UpdateOutpostResolver</a></code> | <code>string</code> | [Write] route53resolver:UpdateOutpostResolver. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverConfig">UpdateResolverConfig</a></code> | <code>string</code> | [Write] route53resolver:UpdateResolverConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverDnssecConfig">UpdateResolverDnssecConfig</a></code> | <code>string</code> | [Write] route53resolver:UpdateResolverDnssecConfig. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverEndpoint">UpdateResolverEndpoint</a></code> | <code>string</code> | [Write] route53resolver:UpdateResolverEndpoint. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverRule">UpdateResolverRule</a></code> | <code>string</code> | [Write] route53resolver:UpdateResolverRule. |

---

##### `actionGetFirewallConfig`<sup>Required</sup> <a name="actionGetFirewallConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallConfig"></a>

```typescript
public readonly actionGetFirewallConfig: string;
```

- *Type:* string

[Read] route53resolver:GetFirewallConfig.

---

##### `actionGetFirewallDomainList`<sup>Required</sup> <a name="actionGetFirewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallDomainList"></a>

```typescript
public readonly actionGetFirewallDomainList: string;
```

- *Type:* string

[Read] route53resolver:GetFirewallDomainList.

---

##### `actionGetFirewallRuleGroup`<sup>Required</sup> <a name="actionGetFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallRuleGroup"></a>

```typescript
public readonly actionGetFirewallRuleGroup: string;
```

- *Type:* string

[Read] route53resolver:GetFirewallRuleGroup.

---

##### `actionGetFirewallRuleGroupAssociation`<sup>Required</sup> <a name="actionGetFirewallRuleGroupAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallRuleGroupAssociation"></a>

```typescript
public readonly actionGetFirewallRuleGroupAssociation: string;
```

- *Type:* string

[Read] route53resolver:GetFirewallRuleGroupAssociation.

---

##### `actionGetFirewallRuleGroupPolicy`<sup>Required</sup> <a name="actionGetFirewallRuleGroupPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetFirewallRuleGroupPolicy"></a>

```typescript
public readonly actionGetFirewallRuleGroupPolicy: string;
```

- *Type:* string

[Read] route53resolver:GetFirewallRuleGroupPolicy.

---

##### `actionGetOutpostResolver`<sup>Required</sup> <a name="actionGetOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetOutpostResolver"></a>

```typescript
public readonly actionGetOutpostResolver: string;
```

- *Type:* string

[Read] route53resolver:GetOutpostResolver.

---

##### `actionGetResolverConfig`<sup>Required</sup> <a name="actionGetResolverConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverConfig"></a>

```typescript
public readonly actionGetResolverConfig: string;
```

- *Type:* string

[Read] route53resolver:GetResolverConfig.

---

##### `actionGetResolverDnssecConfig`<sup>Required</sup> <a name="actionGetResolverDnssecConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverDnssecConfig"></a>

```typescript
public readonly actionGetResolverDnssecConfig: string;
```

- *Type:* string

[Read] route53resolver:GetResolverDnssecConfig.

---

##### `actionGetResolverEndpoint`<sup>Required</sup> <a name="actionGetResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverEndpoint"></a>

```typescript
public readonly actionGetResolverEndpoint: string;
```

- *Type:* string

[Read] route53resolver:GetResolverEndpoint.

---

##### `actionGetResolverQueryLogConfig`<sup>Required</sup> <a name="actionGetResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverQueryLogConfig"></a>

```typescript
public readonly actionGetResolverQueryLogConfig: string;
```

- *Type:* string

[Read] route53resolver:GetResolverQueryLogConfig.

---

##### `actionGetResolverQueryLogConfigAssociation`<sup>Required</sup> <a name="actionGetResolverQueryLogConfigAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverQueryLogConfigAssociation"></a>

```typescript
public readonly actionGetResolverQueryLogConfigAssociation: string;
```

- *Type:* string

[Read] route53resolver:GetResolverQueryLogConfigAssociation.

---

##### `actionGetResolverQueryLogConfigPolicy`<sup>Required</sup> <a name="actionGetResolverQueryLogConfigPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverQueryLogConfigPolicy"></a>

```typescript
public readonly actionGetResolverQueryLogConfigPolicy: string;
```

- *Type:* string

[Read] route53resolver:GetResolverQueryLogConfigPolicy.

---

##### `actionGetResolverRule`<sup>Required</sup> <a name="actionGetResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverRule"></a>

```typescript
public readonly actionGetResolverRule: string;
```

- *Type:* string

[Read] route53resolver:GetResolverRule.

---

##### `actionGetResolverRuleAssociation`<sup>Required</sup> <a name="actionGetResolverRuleAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverRuleAssociation"></a>

```typescript
public readonly actionGetResolverRuleAssociation: string;
```

- *Type:* string

[Read] route53resolver:GetResolverRuleAssociation.

---

##### `actionGetResolverRulePolicy`<sup>Required</sup> <a name="actionGetResolverRulePolicy" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.actionGetResolverRulePolicy"></a>

```typescript
public readonly actionGetResolverRulePolicy: string;
```

- *Type:* string

[Read] route53resolver:GetResolverRulePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateFirewallRuleGroup`<sup>Required</sup> <a name="AssociateFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateFirewallRuleGroup"></a>

```typescript
public readonly AssociateFirewallRuleGroup: string;
```

- *Type:* string

[Write] route53resolver:AssociateFirewallRuleGroup.

---

##### `AssociateResolverEndpointIpAddress`<sup>Required</sup> <a name="AssociateResolverEndpointIpAddress" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateResolverEndpointIpAddress"></a>

```typescript
public readonly AssociateResolverEndpointIpAddress: string;
```

- *Type:* string

[Write] route53resolver:AssociateResolverEndpointIpAddress.

---

##### `AssociateResolverQueryLogConfig`<sup>Required</sup> <a name="AssociateResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateResolverQueryLogConfig"></a>

```typescript
public readonly AssociateResolverQueryLogConfig: string;
```

- *Type:* string

[Write] route53resolver:AssociateResolverQueryLogConfig.

---

##### `AssociateResolverRule`<sup>Required</sup> <a name="AssociateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.AssociateResolverRule"></a>

```typescript
public readonly AssociateResolverRule: string;
```

- *Type:* string

[Write] route53resolver:AssociateResolverRule.

---

##### `CreateFirewallDomainList`<sup>Required</sup> <a name="CreateFirewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateFirewallDomainList"></a>

```typescript
public readonly CreateFirewallDomainList: string;
```

- *Type:* string

[Write] route53resolver:CreateFirewallDomainList.

---

##### `CreateFirewallRule`<sup>Required</sup> <a name="CreateFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateFirewallRule"></a>

```typescript
public readonly CreateFirewallRule: string;
```

- *Type:* string

[Write] route53resolver:CreateFirewallRule.

---

##### `CreateFirewallRuleGroup`<sup>Required</sup> <a name="CreateFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateFirewallRuleGroup"></a>

```typescript
public readonly CreateFirewallRuleGroup: string;
```

- *Type:* string

[Write] route53resolver:CreateFirewallRuleGroup.

---

##### `CreateOutpostResolver`<sup>Required</sup> <a name="CreateOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateOutpostResolver"></a>

```typescript
public readonly CreateOutpostResolver: string;
```

- *Type:* string

[Write] route53resolver:CreateOutpostResolver.

---

##### `CreateResolverEndpoint`<sup>Required</sup> <a name="CreateResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateResolverEndpoint"></a>

```typescript
public readonly CreateResolverEndpoint: string;
```

- *Type:* string

[Write] route53resolver:CreateResolverEndpoint.

---

##### `CreateResolverQueryLogConfig`<sup>Required</sup> <a name="CreateResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateResolverQueryLogConfig"></a>

```typescript
public readonly CreateResolverQueryLogConfig: string;
```

- *Type:* string

[Write] route53resolver:CreateResolverQueryLogConfig.

---

##### `CreateResolverRule`<sup>Required</sup> <a name="CreateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.CreateResolverRule"></a>

```typescript
public readonly CreateResolverRule: string;
```

- *Type:* string

[Write] route53resolver:CreateResolverRule.

---

##### `DeleteFirewallDomainList`<sup>Required</sup> <a name="DeleteFirewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteFirewallDomainList"></a>

```typescript
public readonly DeleteFirewallDomainList: string;
```

- *Type:* string

[Write] route53resolver:DeleteFirewallDomainList.

---

##### `DeleteFirewallRule`<sup>Required</sup> <a name="DeleteFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteFirewallRule"></a>

```typescript
public readonly DeleteFirewallRule: string;
```

- *Type:* string

[Write] route53resolver:DeleteFirewallRule.

---

##### `DeleteFirewallRuleGroup`<sup>Required</sup> <a name="DeleteFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteFirewallRuleGroup"></a>

```typescript
public readonly DeleteFirewallRuleGroup: string;
```

- *Type:* string

[Write] route53resolver:DeleteFirewallRuleGroup.

---

##### `DeleteOutpostResolver`<sup>Required</sup> <a name="DeleteOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteOutpostResolver"></a>

```typescript
public readonly DeleteOutpostResolver: string;
```

- *Type:* string

[Write] route53resolver:DeleteOutpostResolver.

---

##### `DeleteResolverEndpoint`<sup>Required</sup> <a name="DeleteResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteResolverEndpoint"></a>

```typescript
public readonly DeleteResolverEndpoint: string;
```

- *Type:* string

[Write] route53resolver:DeleteResolverEndpoint.

---

##### `DeleteResolverQueryLogConfig`<sup>Required</sup> <a name="DeleteResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteResolverQueryLogConfig"></a>

```typescript
public readonly DeleteResolverQueryLogConfig: string;
```

- *Type:* string

[Write] route53resolver:DeleteResolverQueryLogConfig.

---

##### `DeleteResolverRule`<sup>Required</sup> <a name="DeleteResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DeleteResolverRule"></a>

```typescript
public readonly DeleteResolverRule: string;
```

- *Type:* string

[Write] route53resolver:DeleteResolverRule.

---

##### `DisassociateFirewallRuleGroup`<sup>Required</sup> <a name="DisassociateFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateFirewallRuleGroup"></a>

```typescript
public readonly DisassociateFirewallRuleGroup: string;
```

- *Type:* string

[Write] route53resolver:DisassociateFirewallRuleGroup.

---

##### `DisassociateResolverEndpointIpAddress`<sup>Required</sup> <a name="DisassociateResolverEndpointIpAddress" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateResolverEndpointIpAddress"></a>

```typescript
public readonly DisassociateResolverEndpointIpAddress: string;
```

- *Type:* string

[Write] route53resolver:DisassociateResolverEndpointIpAddress.

---

##### `DisassociateResolverQueryLogConfig`<sup>Required</sup> <a name="DisassociateResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateResolverQueryLogConfig"></a>

```typescript
public readonly DisassociateResolverQueryLogConfig: string;
```

- *Type:* string

[Write] route53resolver:DisassociateResolverQueryLogConfig.

---

##### `DisassociateResolverRule`<sup>Required</sup> <a name="DisassociateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.DisassociateResolverRule"></a>

```typescript
public readonly DisassociateResolverRule: string;
```

- *Type:* string

[Write] route53resolver:DisassociateResolverRule.

---

##### `ImportFirewallDomains`<sup>Required</sup> <a name="ImportFirewallDomains" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ImportFirewallDomains"></a>

```typescript
public readonly ImportFirewallDomains: string;
```

- *Type:* string

[Write] route53resolver:ImportFirewallDomains.

---

##### `ListFirewallConfigs`<sup>Required</sup> <a name="ListFirewallConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallConfigs"></a>

```typescript
public readonly ListFirewallConfigs: string;
```

- *Type:* string

[List] route53resolver:ListFirewallConfigs.

---

##### `ListFirewallDomainLists`<sup>Required</sup> <a name="ListFirewallDomainLists" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallDomainLists"></a>

```typescript
public readonly ListFirewallDomainLists: string;
```

- *Type:* string

[List] route53resolver:ListFirewallDomainLists.

---

##### `ListFirewallDomains`<sup>Required</sup> <a name="ListFirewallDomains" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallDomains"></a>

```typescript
public readonly ListFirewallDomains: string;
```

- *Type:* string

[List] route53resolver:ListFirewallDomains.

---

##### `ListFirewallRuleGroupAssociations`<sup>Required</sup> <a name="ListFirewallRuleGroupAssociations" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRuleGroupAssociations"></a>

```typescript
public readonly ListFirewallRuleGroupAssociations: string;
```

- *Type:* string

[List] route53resolver:ListFirewallRuleGroupAssociations.

---

##### `ListFirewallRuleGroups`<sup>Required</sup> <a name="ListFirewallRuleGroups" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRuleGroups"></a>

```typescript
public readonly ListFirewallRuleGroups: string;
```

- *Type:* string

[List] route53resolver:ListFirewallRuleGroups.

---

##### `ListFirewallRules`<sup>Required</sup> <a name="ListFirewallRules" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRules"></a>

```typescript
public readonly ListFirewallRules: string;
```

- *Type:* string

[List] route53resolver:ListFirewallRules.

---

##### `ListFirewallRuleTypes`<sup>Required</sup> <a name="ListFirewallRuleTypes" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListFirewallRuleTypes"></a>

```typescript
public readonly ListFirewallRuleTypes: string;
```

- *Type:* string

[List] route53resolver:ListFirewallRuleTypes.

---

##### `ListOutpostResolvers`<sup>Required</sup> <a name="ListOutpostResolvers" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListOutpostResolvers"></a>

```typescript
public readonly ListOutpostResolvers: string;
```

- *Type:* string

[List] route53resolver:ListOutpostResolvers.

---

##### `ListResolverConfigs`<sup>Required</sup> <a name="ListResolverConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverConfigs"></a>

```typescript
public readonly ListResolverConfigs: string;
```

- *Type:* string

[List] route53resolver:ListResolverConfigs.

---

##### `ListResolverDnssecConfigs`<sup>Required</sup> <a name="ListResolverDnssecConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverDnssecConfigs"></a>

```typescript
public readonly ListResolverDnssecConfigs: string;
```

- *Type:* string

[List] route53resolver:ListResolverDnssecConfigs.

---

##### `ListResolverEndpointIpAddresses`<sup>Required</sup> <a name="ListResolverEndpointIpAddresses" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverEndpointIpAddresses"></a>

```typescript
public readonly ListResolverEndpointIpAddresses: string;
```

- *Type:* string

[List] route53resolver:ListResolverEndpointIpAddresses.

---

##### `ListResolverEndpoints`<sup>Required</sup> <a name="ListResolverEndpoints" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverEndpoints"></a>

```typescript
public readonly ListResolverEndpoints: string;
```

- *Type:* string

[List] route53resolver:ListResolverEndpoints.

---

##### `ListResolverQueryLogConfigAssociations`<sup>Required</sup> <a name="ListResolverQueryLogConfigAssociations" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverQueryLogConfigAssociations"></a>

```typescript
public readonly ListResolverQueryLogConfigAssociations: string;
```

- *Type:* string

[List] route53resolver:ListResolverQueryLogConfigAssociations.

---

##### `ListResolverQueryLogConfigs`<sup>Required</sup> <a name="ListResolverQueryLogConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverQueryLogConfigs"></a>

```typescript
public readonly ListResolverQueryLogConfigs: string;
```

- *Type:* string

[List] route53resolver:ListResolverQueryLogConfigs.

---

##### `ListResolverRuleAssociations`<sup>Required</sup> <a name="ListResolverRuleAssociations" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverRuleAssociations"></a>

```typescript
public readonly ListResolverRuleAssociations: string;
```

- *Type:* string

[List] route53resolver:ListResolverRuleAssociations.

---

##### `ListResolverRules`<sup>Required</sup> <a name="ListResolverRules" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListResolverRules"></a>

```typescript
public readonly ListResolverRules: string;
```

- *Type:* string

[List] route53resolver:ListResolverRules.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] route53resolver:ListTagsForResource.

---

##### `PutFirewallRuleGroupPolicy`<sup>Required</sup> <a name="PutFirewallRuleGroupPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.PutFirewallRuleGroupPolicy"></a>

```typescript
public readonly PutFirewallRuleGroupPolicy: string;
```

- *Type:* string

[PermissionManagement] route53resolver:PutFirewallRuleGroupPolicy.

---

##### `PutResolverQueryLogConfigPolicy`<sup>Required</sup> <a name="PutResolverQueryLogConfigPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.PutResolverQueryLogConfigPolicy"></a>

```typescript
public readonly PutResolverQueryLogConfigPolicy: string;
```

- *Type:* string

[PermissionManagement] route53resolver:PutResolverQueryLogConfigPolicy.

---

##### `PutResolverRulePolicy`<sup>Required</sup> <a name="PutResolverRulePolicy" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.PutResolverRulePolicy"></a>

```typescript
public readonly PutResolverRulePolicy: string;
```

- *Type:* string

[PermissionManagement] route53resolver:PutResolverRulePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] route53resolver:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] route53resolver:UntagResource.

---

##### `UpdateFirewallConfig`<sup>Required</sup> <a name="UpdateFirewallConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallConfig"></a>

```typescript
public readonly UpdateFirewallConfig: string;
```

- *Type:* string

[Write] route53resolver:UpdateFirewallConfig.

---

##### `UpdateFirewallDomains`<sup>Required</sup> <a name="UpdateFirewallDomains" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallDomains"></a>

```typescript
public readonly UpdateFirewallDomains: string;
```

- *Type:* string

[Write] route53resolver:UpdateFirewallDomains.

---

##### `UpdateFirewallRule`<sup>Required</sup> <a name="UpdateFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallRule"></a>

```typescript
public readonly UpdateFirewallRule: string;
```

- *Type:* string

[Write] route53resolver:UpdateFirewallRule.

---

##### `UpdateFirewallRuleGroupAssociation`<sup>Required</sup> <a name="UpdateFirewallRuleGroupAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateFirewallRuleGroupAssociation"></a>

```typescript
public readonly UpdateFirewallRuleGroupAssociation: string;
```

- *Type:* string

[Write] route53resolver:UpdateFirewallRuleGroupAssociation.

---

##### `UpdateOutpostResolver`<sup>Required</sup> <a name="UpdateOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateOutpostResolver"></a>

```typescript
public readonly UpdateOutpostResolver: string;
```

- *Type:* string

[Write] route53resolver:UpdateOutpostResolver.

---

##### `UpdateResolverConfig`<sup>Required</sup> <a name="UpdateResolverConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverConfig"></a>

```typescript
public readonly UpdateResolverConfig: string;
```

- *Type:* string

[Write] route53resolver:UpdateResolverConfig.

---

##### `UpdateResolverDnssecConfig`<sup>Required</sup> <a name="UpdateResolverDnssecConfig" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverDnssecConfig"></a>

```typescript
public readonly UpdateResolverDnssecConfig: string;
```

- *Type:* string

[Write] route53resolver:UpdateResolverDnssecConfig.

---

##### `UpdateResolverEndpoint`<sup>Required</sup> <a name="UpdateResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverEndpoint"></a>

```typescript
public readonly UpdateResolverEndpoint: string;
```

- *Type:* string

[Write] route53resolver:UpdateResolverEndpoint.

---

##### `UpdateResolverRule`<sup>Required</sup> <a name="UpdateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverActions.property.UpdateResolverRule"></a>

```typescript
public readonly UpdateResolverRule: string;
```

- *Type:* string

[Write] route53resolver:UpdateResolverRule.

---

### Route53resolverConditions <a name="Route53resolverConditions" id="@cdk_utils/iam.route53resolver.Route53resolverConditions"></a>

Condition key constants and builders for route53resolver.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

new route53resolver.Route53resolverConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.requestTag"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.resourceTag"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.tagKeys"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AssociateFirewallRuleGroupConditionKeys">AssociateFirewallRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateFirewallRuleGroup action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateFirewallDomainListConditionKeys">CreateFirewallDomainListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFirewallDomainList action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateFirewallRuleGroupConditionKeys">CreateFirewallRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFirewallRuleGroup action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateOutpostResolverConditionKeys">CreateOutpostResolverConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOutpostResolver action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateResolverEndpointConditionKeys">CreateResolverEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResolverEndpoint action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateResolverQueryLogConfigConditionKeys">CreateResolverQueryLogConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResolverQueryLogConfig action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateResolverRuleConditionKeys">CreateResolverRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResolverRule action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssociateFirewallRuleGroupConditionKeys`<sup>Required</sup> <a name="AssociateFirewallRuleGroupConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AssociateFirewallRuleGroupConditionKeys"></a>

```typescript
public readonly AssociateFirewallRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateFirewallRuleGroup action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateFirewallDomainListConditionKeys`<sup>Required</sup> <a name="CreateFirewallDomainListConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateFirewallDomainListConditionKeys"></a>

```typescript
public readonly CreateFirewallDomainListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFirewallDomainList action.

---

##### `CreateFirewallRuleGroupConditionKeys`<sup>Required</sup> <a name="CreateFirewallRuleGroupConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateFirewallRuleGroupConditionKeys"></a>

```typescript
public readonly CreateFirewallRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFirewallRuleGroup action.

---

##### `CreateOutpostResolverConditionKeys`<sup>Required</sup> <a name="CreateOutpostResolverConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateOutpostResolverConditionKeys"></a>

```typescript
public readonly CreateOutpostResolverConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOutpostResolver action.

---

##### `CreateResolverEndpointConditionKeys`<sup>Required</sup> <a name="CreateResolverEndpointConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateResolverEndpointConditionKeys"></a>

```typescript
public readonly CreateResolverEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResolverEndpoint action.

---

##### `CreateResolverQueryLogConfigConditionKeys`<sup>Required</sup> <a name="CreateResolverQueryLogConfigConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateResolverQueryLogConfigConditionKeys"></a>

```typescript
public readonly CreateResolverQueryLogConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResolverQueryLogConfig action.

---

##### `CreateResolverRuleConditionKeys`<sup>Required</sup> <a name="CreateResolverRuleConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.CreateResolverRuleConditionKeys"></a>

```typescript
public readonly CreateResolverRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResolverRule action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.route53resolver.Route53resolverConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### Route53resolverOperations <a name="Route53resolverOperations" id="@cdk_utils/iam.route53resolver.Route53resolverOperations"></a>

API operation to required IAM actions mapping for route53resolver.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

new route53resolver.Route53resolverOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateFirewallRuleGroup">AssociateFirewallRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the AssociateFirewallRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateResolverEndpointIpAddress">AssociateResolverEndpointIpAddress</a></code> | <code>string[]</code> | IAM actions required for the AssociateResolverEndpointIpAddress API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateResolverQueryLogConfig">AssociateResolverQueryLogConfig</a></code> | <code>string[]</code> | IAM actions required for the AssociateResolverQueryLogConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateResolverRule">AssociateResolverRule</a></code> | <code>string[]</code> | IAM actions required for the AssociateResolverRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.BatchCreateFirewallRule">BatchCreateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.BatchDeleteFirewallRule">BatchDeleteFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.BatchUpdateFirewallRule">BatchUpdateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateFirewallDomainList">CreateFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateFirewallRule">CreateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateFirewallRuleGroup">CreateFirewallRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewallRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateOutpostResolver">CreateOutpostResolver</a></code> | <code>string[]</code> | IAM actions required for the CreateOutpostResolver API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateResolverEndpoint">CreateResolverEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateResolverEndpoint API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateResolverQueryLogConfig">CreateResolverQueryLogConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateResolverQueryLogConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateResolverRule">CreateResolverRule</a></code> | <code>string[]</code> | IAM actions required for the CreateResolverRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteFirewallDomainList">DeleteFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteFirewallRule">DeleteFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteFirewallRuleGroup">DeleteFirewallRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteOutpostResolver">DeleteOutpostResolver</a></code> | <code>string[]</code> | IAM actions required for the DeleteOutpostResolver API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteResolverEndpoint">DeleteResolverEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteResolverEndpoint API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteResolverQueryLogConfig">DeleteResolverQueryLogConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteResolverQueryLogConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteResolverRule">DeleteResolverRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteResolverRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateFirewallRuleGroup">DisassociateFirewallRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFirewallRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateResolverEndpointIpAddress">DisassociateResolverEndpointIpAddress</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResolverEndpointIpAddress API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateResolverQueryLogConfig">DisassociateResolverQueryLogConfig</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResolverQueryLogConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateResolverRule">DisassociateResolverRule</a></code> | <code>string[]</code> | IAM actions required for the DisassociateResolverRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ImportFirewallDomains">ImportFirewallDomains</a></code> | <code>string[]</code> | IAM actions required for the ImportFirewallDomains API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallConfigs">ListFirewallConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallConfigs API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallDomainLists">ListFirewallDomainLists</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallDomainLists API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallDomains">ListFirewallDomains</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallDomains API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRuleGroupAssociations">ListFirewallRuleGroupAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallRuleGroupAssociations API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRuleGroups">ListFirewallRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRules">ListFirewallRules</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallRules API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRuleTypes">ListFirewallRuleTypes</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallRuleTypes API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListOutpostResolvers">ListOutpostResolvers</a></code> | <code>string[]</code> | IAM actions required for the ListOutpostResolvers API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverConfigs">ListResolverConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListResolverConfigs API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverDnssecConfigs">ListResolverDnssecConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListResolverDnssecConfigs API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverEndpointIpAddresses">ListResolverEndpointIpAddresses</a></code> | <code>string[]</code> | IAM actions required for the ListResolverEndpointIpAddresses API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverEndpoints">ListResolverEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListResolverEndpoints API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverQueryLogConfigAssociations">ListResolverQueryLogConfigAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListResolverQueryLogConfigAssociations API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverQueryLogConfigs">ListResolverQueryLogConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListResolverQueryLogConfigs API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverRuleAssociations">ListResolverRuleAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListResolverRuleAssociations API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverRules">ListResolverRules</a></code> | <code>string[]</code> | IAM actions required for the ListResolverRules API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallConfig">opGetFirewallConfig</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallDomainList">opGetFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallRuleGroup">opGetFirewallRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallRuleGroupAssociation">opGetFirewallRuleGroupAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallRuleGroupAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallRuleGroupPolicy">opGetFirewallRuleGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallRuleGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetOutpostResolver">opGetOutpostResolver</a></code> | <code>string[]</code> | IAM actions required for the GetOutpostResolver API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverConfig">opGetResolverConfig</a></code> | <code>string[]</code> | IAM actions required for the GetResolverConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverDnssecConfig">opGetResolverDnssecConfig</a></code> | <code>string[]</code> | IAM actions required for the GetResolverDnssecConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverEndpoint">opGetResolverEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetResolverEndpoint API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverQueryLogConfig">opGetResolverQueryLogConfig</a></code> | <code>string[]</code> | IAM actions required for the GetResolverQueryLogConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverQueryLogConfigAssociation">opGetResolverQueryLogConfigAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetResolverQueryLogConfigAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverQueryLogConfigPolicy">opGetResolverQueryLogConfigPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResolverQueryLogConfigPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverRule">opGetResolverRule</a></code> | <code>string[]</code> | IAM actions required for the GetResolverRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverRuleAssociation">opGetResolverRuleAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetResolverRuleAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverRulePolicy">opGetResolverRulePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResolverRulePolicy API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.PutFirewallRuleGroupPolicy">PutFirewallRuleGroupPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutFirewallRuleGroupPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.PutResolverQueryLogConfigPolicy">PutResolverQueryLogConfigPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResolverQueryLogConfigPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.PutResolverRulePolicy">PutResolverRulePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResolverRulePolicy API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallConfig">UpdateFirewallConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallDomains">UpdateFirewallDomains</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallDomains API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallRule">UpdateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallRuleGroupAssociation">UpdateFirewallRuleGroupAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallRuleGroupAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateOutpostResolver">UpdateOutpostResolver</a></code> | <code>string[]</code> | IAM actions required for the UpdateOutpostResolver API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverConfig">UpdateResolverConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateResolverConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverDnssecConfig">UpdateResolverDnssecConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateResolverDnssecConfig API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverEndpoint">UpdateResolverEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateResolverEndpoint API call. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverRule">UpdateResolverRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateResolverRule API call. |

---

##### `AssociateFirewallRuleGroup`<sup>Required</sup> <a name="AssociateFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateFirewallRuleGroup"></a>

```typescript
public readonly AssociateFirewallRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFirewallRuleGroup API call.

---

##### `AssociateResolverEndpointIpAddress`<sup>Required</sup> <a name="AssociateResolverEndpointIpAddress" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateResolverEndpointIpAddress"></a>

```typescript
public readonly AssociateResolverEndpointIpAddress: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResolverEndpointIpAddress API call.

---

##### `AssociateResolverQueryLogConfig`<sup>Required</sup> <a name="AssociateResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateResolverQueryLogConfig"></a>

```typescript
public readonly AssociateResolverQueryLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResolverQueryLogConfig API call.

---

##### `AssociateResolverRule`<sup>Required</sup> <a name="AssociateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.AssociateResolverRule"></a>

```typescript
public readonly AssociateResolverRule: string[];
```

- *Type:* string[]

IAM actions required for the AssociateResolverRule API call.

---

##### `BatchCreateFirewallRule`<sup>Required</sup> <a name="BatchCreateFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.BatchCreateFirewallRule"></a>

```typescript
public readonly BatchCreateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateFirewallRule API call.

---

##### `BatchDeleteFirewallRule`<sup>Required</sup> <a name="BatchDeleteFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.BatchDeleteFirewallRule"></a>

```typescript
public readonly BatchDeleteFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteFirewallRule API call.

---

##### `BatchUpdateFirewallRule`<sup>Required</sup> <a name="BatchUpdateFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.BatchUpdateFirewallRule"></a>

```typescript
public readonly BatchUpdateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateFirewallRule API call.

---

##### `CreateFirewallDomainList`<sup>Required</sup> <a name="CreateFirewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateFirewallDomainList"></a>

```typescript
public readonly CreateFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewallDomainList API call.

---

##### `CreateFirewallRule`<sup>Required</sup> <a name="CreateFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateFirewallRule"></a>

```typescript
public readonly CreateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewallRule API call.

---

##### `CreateFirewallRuleGroup`<sup>Required</sup> <a name="CreateFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateFirewallRuleGroup"></a>

```typescript
public readonly CreateFirewallRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewallRuleGroup API call.

---

##### `CreateOutpostResolver`<sup>Required</sup> <a name="CreateOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateOutpostResolver"></a>

```typescript
public readonly CreateOutpostResolver: string[];
```

- *Type:* string[]

IAM actions required for the CreateOutpostResolver API call.

---

##### `CreateResolverEndpoint`<sup>Required</sup> <a name="CreateResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateResolverEndpoint"></a>

```typescript
public readonly CreateResolverEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateResolverEndpoint API call.

---

##### `CreateResolverQueryLogConfig`<sup>Required</sup> <a name="CreateResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateResolverQueryLogConfig"></a>

```typescript
public readonly CreateResolverQueryLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateResolverQueryLogConfig API call.

---

##### `CreateResolverRule`<sup>Required</sup> <a name="CreateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.CreateResolverRule"></a>

```typescript
public readonly CreateResolverRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateResolverRule API call.

---

##### `DeleteFirewallDomainList`<sup>Required</sup> <a name="DeleteFirewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteFirewallDomainList"></a>

```typescript
public readonly DeleteFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallDomainList API call.

---

##### `DeleteFirewallRule`<sup>Required</sup> <a name="DeleteFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteFirewallRule"></a>

```typescript
public readonly DeleteFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallRule API call.

---

##### `DeleteFirewallRuleGroup`<sup>Required</sup> <a name="DeleteFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteFirewallRuleGroup"></a>

```typescript
public readonly DeleteFirewallRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallRuleGroup API call.

---

##### `DeleteOutpostResolver`<sup>Required</sup> <a name="DeleteOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteOutpostResolver"></a>

```typescript
public readonly DeleteOutpostResolver: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOutpostResolver API call.

---

##### `DeleteResolverEndpoint`<sup>Required</sup> <a name="DeleteResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteResolverEndpoint"></a>

```typescript
public readonly DeleteResolverEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResolverEndpoint API call.

---

##### `DeleteResolverQueryLogConfig`<sup>Required</sup> <a name="DeleteResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteResolverQueryLogConfig"></a>

```typescript
public readonly DeleteResolverQueryLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResolverQueryLogConfig API call.

---

##### `DeleteResolverRule`<sup>Required</sup> <a name="DeleteResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DeleteResolverRule"></a>

```typescript
public readonly DeleteResolverRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResolverRule API call.

---

##### `DisassociateFirewallRuleGroup`<sup>Required</sup> <a name="DisassociateFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateFirewallRuleGroup"></a>

```typescript
public readonly DisassociateFirewallRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFirewallRuleGroup API call.

---

##### `DisassociateResolverEndpointIpAddress`<sup>Required</sup> <a name="DisassociateResolverEndpointIpAddress" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateResolverEndpointIpAddress"></a>

```typescript
public readonly DisassociateResolverEndpointIpAddress: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResolverEndpointIpAddress API call.

---

##### `DisassociateResolverQueryLogConfig`<sup>Required</sup> <a name="DisassociateResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateResolverQueryLogConfig"></a>

```typescript
public readonly DisassociateResolverQueryLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResolverQueryLogConfig API call.

---

##### `DisassociateResolverRule`<sup>Required</sup> <a name="DisassociateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.DisassociateResolverRule"></a>

```typescript
public readonly DisassociateResolverRule: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateResolverRule API call.

---

##### `ImportFirewallDomains`<sup>Required</sup> <a name="ImportFirewallDomains" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ImportFirewallDomains"></a>

```typescript
public readonly ImportFirewallDomains: string[];
```

- *Type:* string[]

IAM actions required for the ImportFirewallDomains API call.

---

##### `ListFirewallConfigs`<sup>Required</sup> <a name="ListFirewallConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallConfigs"></a>

```typescript
public readonly ListFirewallConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallConfigs API call.

---

##### `ListFirewallDomainLists`<sup>Required</sup> <a name="ListFirewallDomainLists" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallDomainLists"></a>

```typescript
public readonly ListFirewallDomainLists: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallDomainLists API call.

---

##### `ListFirewallDomains`<sup>Required</sup> <a name="ListFirewallDomains" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallDomains"></a>

```typescript
public readonly ListFirewallDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallDomains API call.

---

##### `ListFirewallRuleGroupAssociations`<sup>Required</sup> <a name="ListFirewallRuleGroupAssociations" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRuleGroupAssociations"></a>

```typescript
public readonly ListFirewallRuleGroupAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallRuleGroupAssociations API call.

---

##### `ListFirewallRuleGroups`<sup>Required</sup> <a name="ListFirewallRuleGroups" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRuleGroups"></a>

```typescript
public readonly ListFirewallRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallRuleGroups API call.

---

##### `ListFirewallRules`<sup>Required</sup> <a name="ListFirewallRules" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRules"></a>

```typescript
public readonly ListFirewallRules: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallRules API call.

---

##### `ListFirewallRuleTypes`<sup>Required</sup> <a name="ListFirewallRuleTypes" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListFirewallRuleTypes"></a>

```typescript
public readonly ListFirewallRuleTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallRuleTypes API call.

---

##### `ListOutpostResolvers`<sup>Required</sup> <a name="ListOutpostResolvers" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListOutpostResolvers"></a>

```typescript
public readonly ListOutpostResolvers: string[];
```

- *Type:* string[]

IAM actions required for the ListOutpostResolvers API call.

---

##### `ListResolverConfigs`<sup>Required</sup> <a name="ListResolverConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverConfigs"></a>

```typescript
public readonly ListResolverConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverConfigs API call.

---

##### `ListResolverDnssecConfigs`<sup>Required</sup> <a name="ListResolverDnssecConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverDnssecConfigs"></a>

```typescript
public readonly ListResolverDnssecConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverDnssecConfigs API call.

---

##### `ListResolverEndpointIpAddresses`<sup>Required</sup> <a name="ListResolverEndpointIpAddresses" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverEndpointIpAddresses"></a>

```typescript
public readonly ListResolverEndpointIpAddresses: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverEndpointIpAddresses API call.

---

##### `ListResolverEndpoints`<sup>Required</sup> <a name="ListResolverEndpoints" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverEndpoints"></a>

```typescript
public readonly ListResolverEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverEndpoints API call.

---

##### `ListResolverQueryLogConfigAssociations`<sup>Required</sup> <a name="ListResolverQueryLogConfigAssociations" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverQueryLogConfigAssociations"></a>

```typescript
public readonly ListResolverQueryLogConfigAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverQueryLogConfigAssociations API call.

---

##### `ListResolverQueryLogConfigs`<sup>Required</sup> <a name="ListResolverQueryLogConfigs" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverQueryLogConfigs"></a>

```typescript
public readonly ListResolverQueryLogConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverQueryLogConfigs API call.

---

##### `ListResolverRuleAssociations`<sup>Required</sup> <a name="ListResolverRuleAssociations" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverRuleAssociations"></a>

```typescript
public readonly ListResolverRuleAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverRuleAssociations API call.

---

##### `ListResolverRules`<sup>Required</sup> <a name="ListResolverRules" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListResolverRules"></a>

```typescript
public readonly ListResolverRules: string[];
```

- *Type:* string[]

IAM actions required for the ListResolverRules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetFirewallConfig`<sup>Required</sup> <a name="opGetFirewallConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallConfig"></a>

```typescript
public readonly opGetFirewallConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallConfig API call.

---

##### `opGetFirewallDomainList`<sup>Required</sup> <a name="opGetFirewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallDomainList"></a>

```typescript
public readonly opGetFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallDomainList API call.

---

##### `opGetFirewallRuleGroup`<sup>Required</sup> <a name="opGetFirewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallRuleGroup"></a>

```typescript
public readonly opGetFirewallRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallRuleGroup API call.

---

##### `opGetFirewallRuleGroupAssociation`<sup>Required</sup> <a name="opGetFirewallRuleGroupAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallRuleGroupAssociation"></a>

```typescript
public readonly opGetFirewallRuleGroupAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallRuleGroupAssociation API call.

---

##### `opGetFirewallRuleGroupPolicy`<sup>Required</sup> <a name="opGetFirewallRuleGroupPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetFirewallRuleGroupPolicy"></a>

```typescript
public readonly opGetFirewallRuleGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallRuleGroupPolicy API call.

---

##### `opGetOutpostResolver`<sup>Required</sup> <a name="opGetOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetOutpostResolver"></a>

```typescript
public readonly opGetOutpostResolver: string[];
```

- *Type:* string[]

IAM actions required for the GetOutpostResolver API call.

---

##### `opGetResolverConfig`<sup>Required</sup> <a name="opGetResolverConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverConfig"></a>

```typescript
public readonly opGetResolverConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverConfig API call.

---

##### `opGetResolverDnssecConfig`<sup>Required</sup> <a name="opGetResolverDnssecConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverDnssecConfig"></a>

```typescript
public readonly opGetResolverDnssecConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverDnssecConfig API call.

---

##### `opGetResolverEndpoint`<sup>Required</sup> <a name="opGetResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverEndpoint"></a>

```typescript
public readonly opGetResolverEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverEndpoint API call.

---

##### `opGetResolverQueryLogConfig`<sup>Required</sup> <a name="opGetResolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverQueryLogConfig"></a>

```typescript
public readonly opGetResolverQueryLogConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverQueryLogConfig API call.

---

##### `opGetResolverQueryLogConfigAssociation`<sup>Required</sup> <a name="opGetResolverQueryLogConfigAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverQueryLogConfigAssociation"></a>

```typescript
public readonly opGetResolverQueryLogConfigAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverQueryLogConfigAssociation API call.

---

##### `opGetResolverQueryLogConfigPolicy`<sup>Required</sup> <a name="opGetResolverQueryLogConfigPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverQueryLogConfigPolicy"></a>

```typescript
public readonly opGetResolverQueryLogConfigPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverQueryLogConfigPolicy API call.

---

##### `opGetResolverRule`<sup>Required</sup> <a name="opGetResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverRule"></a>

```typescript
public readonly opGetResolverRule: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverRule API call.

---

##### `opGetResolverRuleAssociation`<sup>Required</sup> <a name="opGetResolverRuleAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverRuleAssociation"></a>

```typescript
public readonly opGetResolverRuleAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverRuleAssociation API call.

---

##### `opGetResolverRulePolicy`<sup>Required</sup> <a name="opGetResolverRulePolicy" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.opGetResolverRulePolicy"></a>

```typescript
public readonly opGetResolverRulePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResolverRulePolicy API call.

---

##### `PutFirewallRuleGroupPolicy`<sup>Required</sup> <a name="PutFirewallRuleGroupPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.PutFirewallRuleGroupPolicy"></a>

```typescript
public readonly PutFirewallRuleGroupPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutFirewallRuleGroupPolicy API call.

---

##### `PutResolverQueryLogConfigPolicy`<sup>Required</sup> <a name="PutResolverQueryLogConfigPolicy" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.PutResolverQueryLogConfigPolicy"></a>

```typescript
public readonly PutResolverQueryLogConfigPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResolverQueryLogConfigPolicy API call.

---

##### `PutResolverRulePolicy`<sup>Required</sup> <a name="PutResolverRulePolicy" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.PutResolverRulePolicy"></a>

```typescript
public readonly PutResolverRulePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResolverRulePolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateFirewallConfig`<sup>Required</sup> <a name="UpdateFirewallConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallConfig"></a>

```typescript
public readonly UpdateFirewallConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallConfig API call.

---

##### `UpdateFirewallDomains`<sup>Required</sup> <a name="UpdateFirewallDomains" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallDomains"></a>

```typescript
public readonly UpdateFirewallDomains: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallDomains API call.

---

##### `UpdateFirewallRule`<sup>Required</sup> <a name="UpdateFirewallRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallRule"></a>

```typescript
public readonly UpdateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallRule API call.

---

##### `UpdateFirewallRuleGroupAssociation`<sup>Required</sup> <a name="UpdateFirewallRuleGroupAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateFirewallRuleGroupAssociation"></a>

```typescript
public readonly UpdateFirewallRuleGroupAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallRuleGroupAssociation API call.

---

##### `UpdateOutpostResolver`<sup>Required</sup> <a name="UpdateOutpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateOutpostResolver"></a>

```typescript
public readonly UpdateOutpostResolver: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOutpostResolver API call.

---

##### `UpdateResolverConfig`<sup>Required</sup> <a name="UpdateResolverConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverConfig"></a>

```typescript
public readonly UpdateResolverConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResolverConfig API call.

---

##### `UpdateResolverDnssecConfig`<sup>Required</sup> <a name="UpdateResolverDnssecConfig" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverDnssecConfig"></a>

```typescript
public readonly UpdateResolverDnssecConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResolverDnssecConfig API call.

---

##### `UpdateResolverEndpoint`<sup>Required</sup> <a name="UpdateResolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverEndpoint"></a>

```typescript
public readonly UpdateResolverEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResolverEndpoint API call.

---

##### `UpdateResolverRule`<sup>Required</sup> <a name="UpdateResolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverOperations.property.UpdateResolverRule"></a>

```typescript
public readonly UpdateResolverRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResolverRule API call.

---

### Route53resolverResources <a name="Route53resolverResources" id="@cdk_utils/iam.route53resolver.Route53resolverResources"></a>

ARN builders, validators, and parsers for route53resolver resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53resolver.Route53resolverResources.Initializer"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

new route53resolver.Route53resolverResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.autodefinedRule">autodefinedRule</a></code> | Builds an ARN for the autodefined-rule resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.firewallConfig">firewallConfig</a></code> | Builds an ARN for the firewall-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.firewallDomainList">firewallDomainList</a></code> | Builds an ARN for the firewall-domain-list resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.firewallRuleGroup">firewallRuleGroup</a></code> | Builds an ARN for the firewall-rule-group resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.firewallRuleGroupAssociation">firewallRuleGroupAssociation</a></code> | Builds an ARN for the firewall-rule-group-association resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidAutodefinedRuleArn">isValidAutodefinedRuleArn</a></code> | Validates whether a string is a valid ARN for the autodefined-rule resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallConfigArn">isValidFirewallConfigArn</a></code> | Validates whether a string is a valid ARN for the firewall-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallDomainListArn">isValidFirewallDomainListArn</a></code> | Validates whether a string is a valid ARN for the firewall-domain-list resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallRuleGroupArn">isValidFirewallRuleGroupArn</a></code> | Validates whether a string is a valid ARN for the firewall-rule-group resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallRuleGroupAssociationArn">isValidFirewallRuleGroupAssociationArn</a></code> | Validates whether a string is a valid ARN for the firewall-rule-group-association resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidOutpostResolverArn">isValidOutpostResolverArn</a></code> | Validates whether a string is a valid ARN for the outpost-resolver resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverConfigArn">isValidResolverConfigArn</a></code> | Validates whether a string is a valid ARN for the resolver-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverDnssecConfigArn">isValidResolverDnssecConfigArn</a></code> | Validates whether a string is a valid ARN for the resolver-dnssec-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverEndpointArn">isValidResolverEndpointArn</a></code> | Validates whether a string is a valid ARN for the resolver-endpoint resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverQueryLogConfigArn">isValidResolverQueryLogConfigArn</a></code> | Validates whether a string is a valid ARN for the resolver-query-log-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverRuleArn">isValidResolverRuleArn</a></code> | Validates whether a string is a valid ARN for the resolver-rule resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.outpostResolver">outpostResolver</a></code> | Builds an ARN for the outpost-resolver resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseAutodefinedRuleArn">parseAutodefinedRuleArn</a></code> | Parses a autodefined-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallConfigArn">parseFirewallConfigArn</a></code> | Parses a firewall-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallDomainListArn">parseFirewallDomainListArn</a></code> | Parses a firewall-domain-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallRuleGroupArn">parseFirewallRuleGroupArn</a></code> | Parses a firewall-rule-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallRuleGroupAssociationArn">parseFirewallRuleGroupAssociationArn</a></code> | Parses a firewall-rule-group-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseOutpostResolverArn">parseOutpostResolverArn</a></code> | Parses a outpost-resolver ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverConfigArn">parseResolverConfigArn</a></code> | Parses a resolver-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverDnssecConfigArn">parseResolverDnssecConfigArn</a></code> | Parses a resolver-dnssec-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverEndpointArn">parseResolverEndpointArn</a></code> | Parses a resolver-endpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverQueryLogConfigArn">parseResolverQueryLogConfigArn</a></code> | Parses a resolver-query-log-config ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverRuleArn">parseResolverRuleArn</a></code> | Parses a resolver-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.resolverConfig">resolverConfig</a></code> | Builds an ARN for the resolver-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.resolverDnssecConfig">resolverDnssecConfig</a></code> | Builds an ARN for the resolver-dnssec-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.resolverEndpoint">resolverEndpoint</a></code> | Builds an ARN for the resolver-endpoint resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.resolverQueryLogConfig">resolverQueryLogConfig</a></code> | Builds an ARN for the resolver-query-log-config resource. |
| <code><a href="#@cdk_utils/iam.route53resolver.Route53resolverResources.resolverRule">resolverRule</a></code> | Builds an ARN for the resolver-rule resource. |

---

##### `autodefinedRule` <a name="autodefinedRule" id="@cdk_utils/iam.route53resolver.Route53resolverResources.autodefinedRule"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.autodefinedRule(props: Route53resolverAutodefinedRuleArnProps)
```

Builds an ARN for the autodefined-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.autodefinedRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverAutodefinedRuleArnProps">Route53resolverAutodefinedRuleArnProps</a>

---

##### `firewallConfig` <a name="firewallConfig" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallConfig"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.firewallConfig(props: Route53resolverFirewallConfigArnProps)
```

Builds an ARN for the firewall-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallConfigArnProps">Route53resolverFirewallConfigArnProps</a>

---

##### `firewallDomainList` <a name="firewallDomainList" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallDomainList"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.firewallDomainList(props: Route53resolverFirewallDomainListArnProps)
```

Builds an ARN for the firewall-domain-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallDomainList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallDomainListArnProps">Route53resolverFirewallDomainListArnProps</a>

---

##### `firewallRuleGroup` <a name="firewallRuleGroup" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallRuleGroup"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.firewallRuleGroup(props: Route53resolverFirewallRuleGroupArnProps)
```

Builds an ARN for the firewall-rule-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallRuleGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupArnProps">Route53resolverFirewallRuleGroupArnProps</a>

---

##### `firewallRuleGroupAssociation` <a name="firewallRuleGroupAssociation" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallRuleGroupAssociation"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.firewallRuleGroupAssociation(props: Route53resolverFirewallRuleGroupAssociationArnProps)
```

Builds an ARN for the firewall-rule-group-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.firewallRuleGroupAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverFirewallRuleGroupAssociationArnProps">Route53resolverFirewallRuleGroupAssociationArnProps</a>

---

##### `isValidAutodefinedRuleArn` <a name="isValidAutodefinedRuleArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidAutodefinedRuleArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidAutodefinedRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the autodefined-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidAutodefinedRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallConfigArn` <a name="isValidFirewallConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidFirewallConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the firewall-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallDomainListArn` <a name="isValidFirewallDomainListArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallDomainListArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidFirewallDomainListArn(arn: string)
```

Validates whether a string is a valid ARN for the firewall-domain-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallDomainListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallRuleGroupArn` <a name="isValidFirewallRuleGroupArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallRuleGroupArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidFirewallRuleGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the firewall-rule-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallRuleGroupAssociationArn` <a name="isValidFirewallRuleGroupAssociationArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallRuleGroupAssociationArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidFirewallRuleGroupAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the firewall-rule-group-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidFirewallRuleGroupAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOutpostResolverArn` <a name="isValidOutpostResolverArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidOutpostResolverArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidOutpostResolverArn(arn: string)
```

Validates whether a string is a valid ARN for the outpost-resolver resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidOutpostResolverArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResolverConfigArn` <a name="isValidResolverConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidResolverConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the resolver-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResolverDnssecConfigArn` <a name="isValidResolverDnssecConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverDnssecConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidResolverDnssecConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the resolver-dnssec-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverDnssecConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResolverEndpointArn` <a name="isValidResolverEndpointArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverEndpointArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidResolverEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the resolver-endpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResolverQueryLogConfigArn` <a name="isValidResolverQueryLogConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverQueryLogConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidResolverQueryLogConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the resolver-query-log-config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverQueryLogConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResolverRuleArn` <a name="isValidResolverRuleArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverRuleArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.isValidResolverRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the resolver-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.isValidResolverRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `outpostResolver` <a name="outpostResolver" id="@cdk_utils/iam.route53resolver.Route53resolverResources.outpostResolver"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.outpostResolver(props: Route53resolverOutpostResolverArnProps)
```

Builds an ARN for the outpost-resolver resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.outpostResolver.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverOutpostResolverArnProps">Route53resolverOutpostResolverArnProps</a>

---

##### `parseAutodefinedRuleArn` <a name="parseAutodefinedRuleArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseAutodefinedRuleArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseAutodefinedRuleArn(arn: string)
```

Parses a autodefined-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseAutodefinedRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallConfigArn` <a name="parseFirewallConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseFirewallConfigArn(arn: string)
```

Parses a firewall-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallDomainListArn` <a name="parseFirewallDomainListArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallDomainListArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseFirewallDomainListArn(arn: string)
```

Parses a firewall-domain-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallDomainListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallRuleGroupArn` <a name="parseFirewallRuleGroupArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallRuleGroupArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseFirewallRuleGroupArn(arn: string)
```

Parses a firewall-rule-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallRuleGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallRuleGroupAssociationArn` <a name="parseFirewallRuleGroupAssociationArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallRuleGroupAssociationArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseFirewallRuleGroupAssociationArn(arn: string)
```

Parses a firewall-rule-group-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseFirewallRuleGroupAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOutpostResolverArn` <a name="parseOutpostResolverArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseOutpostResolverArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseOutpostResolverArn(arn: string)
```

Parses a outpost-resolver ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseOutpostResolverArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResolverConfigArn` <a name="parseResolverConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseResolverConfigArn(arn: string)
```

Parses a resolver-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResolverDnssecConfigArn` <a name="parseResolverDnssecConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverDnssecConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseResolverDnssecConfigArn(arn: string)
```

Parses a resolver-dnssec-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverDnssecConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResolverEndpointArn` <a name="parseResolverEndpointArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverEndpointArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseResolverEndpointArn(arn: string)
```

Parses a resolver-endpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResolverQueryLogConfigArn` <a name="parseResolverQueryLogConfigArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverQueryLogConfigArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseResolverQueryLogConfigArn(arn: string)
```

Parses a resolver-query-log-config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverQueryLogConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResolverRuleArn` <a name="parseResolverRuleArn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverRuleArn"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.parseResolverRuleArn(arn: string)
```

Parses a resolver-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53resolver.Route53resolverResources.parseResolverRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `resolverConfig` <a name="resolverConfig" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverConfig"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.resolverConfig(props: Route53resolverResolverConfigArnProps)
```

Builds an ARN for the resolver-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverConfigArnProps">Route53resolverResolverConfigArnProps</a>

---

##### `resolverDnssecConfig` <a name="resolverDnssecConfig" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverDnssecConfig"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.resolverDnssecConfig(props: Route53resolverResolverDnssecConfigArnProps)
```

Builds an ARN for the resolver-dnssec-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverDnssecConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverDnssecConfigArnProps">Route53resolverResolverDnssecConfigArnProps</a>

---

##### `resolverEndpoint` <a name="resolverEndpoint" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverEndpoint"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.resolverEndpoint(props: Route53resolverResolverEndpointArnProps)
```

Builds an ARN for the resolver-endpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverEndpointArnProps">Route53resolverResolverEndpointArnProps</a>

---

##### `resolverQueryLogConfig` <a name="resolverQueryLogConfig" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverQueryLogConfig"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.resolverQueryLogConfig(props: Route53resolverResolverQueryLogConfigArnProps)
```

Builds an ARN for the resolver-query-log-config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverQueryLogConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverQueryLogConfigArnProps">Route53resolverResolverQueryLogConfigArnProps</a>

---

##### `resolverRule` <a name="resolverRule" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverRule"></a>

```typescript
import { route53resolver } from '@cdk_utils/iam'

route53resolver.Route53resolverResources.resolverRule(props: Route53resolverResolverRuleArnProps)
```

Builds an ARN for the resolver-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53resolver.Route53resolverResources.resolverRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53resolver.Route53resolverResolverRuleArnProps">Route53resolverResolverRuleArnProps</a>

---




