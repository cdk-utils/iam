# `route53globalresolver` Submodule <a name="`route53globalresolver` Submodule" id="@cdk_utils/iam.route53globalresolver"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53globalresolverAccessSourceArnComponents <a name="Route53globalresolverAccessSourceArnComponents" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents"></a>

Parsed components of a access-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverAccessSourceArnComponents: route53globalresolver.Route53globalresolverAccessSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### Route53globalresolverAccessSourceArnProps <a name="Route53globalresolverAccessSourceArnProps" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps"></a>

Properties for building a access-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverAccessSourceArnProps: route53globalresolver.Route53globalresolverAccessSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53globalresolverAccessTokenArnComponents <a name="Route53globalresolverAccessTokenArnComponents" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents"></a>

Parsed components of a access-token ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverAccessTokenArnComponents: route53globalresolver.Route53globalresolverAccessTokenArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### Route53globalresolverAccessTokenArnProps <a name="Route53globalresolverAccessTokenArnProps" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps"></a>

Properties for building a access-token ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverAccessTokenArnProps: route53globalresolver.Route53globalresolverAccessTokenArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53globalresolverDNSViewArnComponents <a name="Route53globalresolverDNSViewArnComponents" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents"></a>

Parsed components of a dns-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverDNSViewArnComponents: route53globalresolver.Route53globalresolverDNSViewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### Route53globalresolverDNSViewArnProps <a name="Route53globalresolverDNSViewArnProps" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps"></a>

Properties for building a dns-view ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverDNSViewArnProps: route53globalresolver.Route53globalresolverDNSViewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53globalresolverFirewallDomainListArnComponents <a name="Route53globalresolverFirewallDomainListArnComponents" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents"></a>

Parsed components of a firewall-domain-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverFirewallDomainListArnComponents: route53globalresolver.Route53globalresolverFirewallDomainListArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### Route53globalresolverFirewallDomainListArnProps <a name="Route53globalresolverFirewallDomainListArnProps" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps"></a>

Properties for building a firewall-domain-list ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverFirewallDomainListArnProps: route53globalresolver.Route53globalresolverFirewallDomainListArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53globalresolverGlobalResolverArnComponents <a name="Route53globalresolverGlobalResolverArnComponents" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents"></a>

Parsed components of a global-resolver ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverGlobalResolverArnComponents: route53globalresolver.Route53globalresolverGlobalResolverArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### Route53globalresolverGlobalResolverArnProps <a name="Route53globalresolverGlobalResolverArnProps" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps"></a>

Properties for building a global-resolver ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

const route53globalresolverGlobalResolverArnProps: route53globalresolver.Route53globalresolverGlobalResolverArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53globalresolverActions <a name="Route53globalresolverActions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions"></a>

IAM action constants for the route53globalresolver service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

new route53globalresolver.Route53globalresolverActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetAccessSource">actionGetAccessSource</a></code> | <code>string</code> | [Read] route53globalresolver:GetAccessSource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetAccessToken">actionGetAccessToken</a></code> | <code>string</code> | [Read] route53globalresolver:GetAccessToken. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetDNSView">actionGetDNSView</a></code> | <code>string</code> | [Read] route53globalresolver:GetDNSView. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetFirewallDomainList">actionGetFirewallDomainList</a></code> | <code>string</code> | [Read] route53globalresolver:GetFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetFirewallRule">actionGetFirewallRule</a></code> | <code>string</code> | [Read] route53globalresolver:GetFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetGlobalResolver">actionGetGlobalResolver</a></code> | <code>string</code> | [Read] route53globalresolver:GetGlobalResolver. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetHostedZoneAssociation">actionGetHostedZoneAssociation</a></code> | <code>string</code> | [Read] route53globalresolver:GetHostedZoneAssociation. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetManagedFirewallDomainList">actionGetManagedFirewallDomainList</a></code> | <code>string</code> | [Read] route53globalresolver:GetManagedFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] route53globalresolver:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AssociateHostedZone">AssociateHostedZone</a></code> | <code>string</code> | [Write] route53globalresolver:AssociateHostedZone. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.BatchCreateFirewallRule">BatchCreateFirewallRule</a></code> | <code>string</code> | [Write] route53globalresolver:BatchCreateFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.BatchDeleteFirewallRule">BatchDeleteFirewallRule</a></code> | <code>string</code> | [Write] route53globalresolver:BatchDeleteFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.BatchUpdateFirewallRule">BatchUpdateFirewallRule</a></code> | <code>string</code> | [Write] route53globalresolver:BatchUpdateFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateAccessSource">CreateAccessSource</a></code> | <code>string</code> | [Write] route53globalresolver:CreateAccessSource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateAccessToken">CreateAccessToken</a></code> | <code>string</code> | [Write] route53globalresolver:CreateAccessToken. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateDNSView">CreateDNSView</a></code> | <code>string</code> | [Write] route53globalresolver:CreateDNSView. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateFirewallDomainList">CreateFirewallDomainList</a></code> | <code>string</code> | [Write] route53globalresolver:CreateFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateFirewallRule">CreateFirewallRule</a></code> | <code>string</code> | [Write] route53globalresolver:CreateFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateGlobalResolver">CreateGlobalResolver</a></code> | <code>string</code> | [Write] route53globalresolver:CreateGlobalResolver. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteAccessSource">DeleteAccessSource</a></code> | <code>string</code> | [Write] route53globalresolver:DeleteAccessSource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteAccessToken">DeleteAccessToken</a></code> | <code>string</code> | [Write] route53globalresolver:DeleteAccessToken. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteDNSView">DeleteDNSView</a></code> | <code>string</code> | [Write] route53globalresolver:DeleteDNSView. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteFirewallDomainList">DeleteFirewallDomainList</a></code> | <code>string</code> | [Write] route53globalresolver:DeleteFirewallDomainList. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteFirewallRule">DeleteFirewallRule</a></code> | <code>string</code> | [Write] route53globalresolver:DeleteFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteGlobalResolver">DeleteGlobalResolver</a></code> | <code>string</code> | [Write] route53globalresolver:DeleteGlobalResolver. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DisableDNSView">DisableDNSView</a></code> | <code>string</code> | [Write] route53globalresolver:DisableDNSView. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DisassociateHostedZone">DisassociateHostedZone</a></code> | <code>string</code> | [Write] route53globalresolver:DisassociateHostedZone. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.EnableDNSView">EnableDNSView</a></code> | <code>string</code> | [Write] route53globalresolver:EnableDNSView. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ImportFirewallDomains">ImportFirewallDomains</a></code> | <code>string</code> | [Write] route53globalresolver:ImportFirewallDomains. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListAccessSources">ListAccessSources</a></code> | <code>string</code> | [List] route53globalresolver:ListAccessSources. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListAccessTokens">ListAccessTokens</a></code> | <code>string</code> | [List] route53globalresolver:ListAccessTokens. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListDNSViews">ListDNSViews</a></code> | <code>string</code> | [List] route53globalresolver:ListDNSViews. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListFirewallDomainLists">ListFirewallDomainLists</a></code> | <code>string</code> | [List] route53globalresolver:ListFirewallDomainLists. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListFirewallDomains">ListFirewallDomains</a></code> | <code>string</code> | [Read] route53globalresolver:ListFirewallDomains. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListFirewallRules">ListFirewallRules</a></code> | <code>string</code> | [List] route53globalresolver:ListFirewallRules. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListGlobalResolvers">ListGlobalResolvers</a></code> | <code>string</code> | [List] route53globalresolver:ListGlobalResolvers. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListHostedZoneAssociations">ListHostedZoneAssociations</a></code> | <code>string</code> | [List] route53globalresolver:ListHostedZoneAssociations. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListManagedFirewallDomainLists">ListManagedFirewallDomainLists</a></code> | <code>string</code> | [List] route53globalresolver:ListManagedFirewallDomainLists. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Write] route53globalresolver:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] route53globalresolver:TagResource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] route53globalresolver:UntagResource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateAccessSource">UpdateAccessSource</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateAccessSource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateAccessToken">UpdateAccessToken</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateAccessToken. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateDNSView">UpdateDNSView</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateDNSView. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateFirewallDomains">UpdateFirewallDomains</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateFirewallDomains. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateFirewallRule">UpdateFirewallRule</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateFirewallRule. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateGlobalResolver">UpdateGlobalResolver</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateGlobalResolver. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateHostedZoneAssociation">UpdateHostedZoneAssociation</a></code> | <code>string</code> | [Write] route53globalresolver:UpdateHostedZoneAssociation. |

---

##### `actionGetAccessSource`<sup>Required</sup> <a name="actionGetAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetAccessSource"></a>

```typescript
public readonly actionGetAccessSource: string;
```

- *Type:* string

[Read] route53globalresolver:GetAccessSource.

---

##### `actionGetAccessToken`<sup>Required</sup> <a name="actionGetAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetAccessToken"></a>

```typescript
public readonly actionGetAccessToken: string;
```

- *Type:* string

[Read] route53globalresolver:GetAccessToken.

---

##### `actionGetDNSView`<sup>Required</sup> <a name="actionGetDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetDNSView"></a>

```typescript
public readonly actionGetDNSView: string;
```

- *Type:* string

[Read] route53globalresolver:GetDNSView.

---

##### `actionGetFirewallDomainList`<sup>Required</sup> <a name="actionGetFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetFirewallDomainList"></a>

```typescript
public readonly actionGetFirewallDomainList: string;
```

- *Type:* string

[Read] route53globalresolver:GetFirewallDomainList.

---

##### `actionGetFirewallRule`<sup>Required</sup> <a name="actionGetFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetFirewallRule"></a>

```typescript
public readonly actionGetFirewallRule: string;
```

- *Type:* string

[Read] route53globalresolver:GetFirewallRule.

---

##### `actionGetGlobalResolver`<sup>Required</sup> <a name="actionGetGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetGlobalResolver"></a>

```typescript
public readonly actionGetGlobalResolver: string;
```

- *Type:* string

[Read] route53globalresolver:GetGlobalResolver.

---

##### `actionGetHostedZoneAssociation`<sup>Required</sup> <a name="actionGetHostedZoneAssociation" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetHostedZoneAssociation"></a>

```typescript
public readonly actionGetHostedZoneAssociation: string;
```

- *Type:* string

[Read] route53globalresolver:GetHostedZoneAssociation.

---

##### `actionGetManagedFirewallDomainList`<sup>Required</sup> <a name="actionGetManagedFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.actionGetManagedFirewallDomainList"></a>

```typescript
public readonly actionGetManagedFirewallDomainList: string;
```

- *Type:* string

[Read] route53globalresolver:GetManagedFirewallDomainList.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] route53globalresolver:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateHostedZone`<sup>Required</sup> <a name="AssociateHostedZone" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.AssociateHostedZone"></a>

```typescript
public readonly AssociateHostedZone: string;
```

- *Type:* string

[Write] route53globalresolver:AssociateHostedZone.

---

##### `BatchCreateFirewallRule`<sup>Required</sup> <a name="BatchCreateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.BatchCreateFirewallRule"></a>

```typescript
public readonly BatchCreateFirewallRule: string;
```

- *Type:* string

[Write] route53globalresolver:BatchCreateFirewallRule.

---

##### `BatchDeleteFirewallRule`<sup>Required</sup> <a name="BatchDeleteFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.BatchDeleteFirewallRule"></a>

```typescript
public readonly BatchDeleteFirewallRule: string;
```

- *Type:* string

[Write] route53globalresolver:BatchDeleteFirewallRule.

---

##### `BatchUpdateFirewallRule`<sup>Required</sup> <a name="BatchUpdateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.BatchUpdateFirewallRule"></a>

```typescript
public readonly BatchUpdateFirewallRule: string;
```

- *Type:* string

[Write] route53globalresolver:BatchUpdateFirewallRule.

---

##### `CreateAccessSource`<sup>Required</sup> <a name="CreateAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateAccessSource"></a>

```typescript
public readonly CreateAccessSource: string;
```

- *Type:* string

[Write] route53globalresolver:CreateAccessSource.

---

##### `CreateAccessToken`<sup>Required</sup> <a name="CreateAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateAccessToken"></a>

```typescript
public readonly CreateAccessToken: string;
```

- *Type:* string

[Write] route53globalresolver:CreateAccessToken.

---

##### `CreateDNSView`<sup>Required</sup> <a name="CreateDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateDNSView"></a>

```typescript
public readonly CreateDNSView: string;
```

- *Type:* string

[Write] route53globalresolver:CreateDNSView.

---

##### `CreateFirewallDomainList`<sup>Required</sup> <a name="CreateFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateFirewallDomainList"></a>

```typescript
public readonly CreateFirewallDomainList: string;
```

- *Type:* string

[Write] route53globalresolver:CreateFirewallDomainList.

---

##### `CreateFirewallRule`<sup>Required</sup> <a name="CreateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateFirewallRule"></a>

```typescript
public readonly CreateFirewallRule: string;
```

- *Type:* string

[Write] route53globalresolver:CreateFirewallRule.

---

##### `CreateGlobalResolver`<sup>Required</sup> <a name="CreateGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.CreateGlobalResolver"></a>

```typescript
public readonly CreateGlobalResolver: string;
```

- *Type:* string

[Write] route53globalresolver:CreateGlobalResolver.

---

##### `DeleteAccessSource`<sup>Required</sup> <a name="DeleteAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteAccessSource"></a>

```typescript
public readonly DeleteAccessSource: string;
```

- *Type:* string

[Write] route53globalresolver:DeleteAccessSource.

---

##### `DeleteAccessToken`<sup>Required</sup> <a name="DeleteAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteAccessToken"></a>

```typescript
public readonly DeleteAccessToken: string;
```

- *Type:* string

[Write] route53globalresolver:DeleteAccessToken.

---

##### `DeleteDNSView`<sup>Required</sup> <a name="DeleteDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteDNSView"></a>

```typescript
public readonly DeleteDNSView: string;
```

- *Type:* string

[Write] route53globalresolver:DeleteDNSView.

---

##### `DeleteFirewallDomainList`<sup>Required</sup> <a name="DeleteFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteFirewallDomainList"></a>

```typescript
public readonly DeleteFirewallDomainList: string;
```

- *Type:* string

[Write] route53globalresolver:DeleteFirewallDomainList.

---

##### `DeleteFirewallRule`<sup>Required</sup> <a name="DeleteFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteFirewallRule"></a>

```typescript
public readonly DeleteFirewallRule: string;
```

- *Type:* string

[Write] route53globalresolver:DeleteFirewallRule.

---

##### `DeleteGlobalResolver`<sup>Required</sup> <a name="DeleteGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DeleteGlobalResolver"></a>

```typescript
public readonly DeleteGlobalResolver: string;
```

- *Type:* string

[Write] route53globalresolver:DeleteGlobalResolver.

---

##### `DisableDNSView`<sup>Required</sup> <a name="DisableDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DisableDNSView"></a>

```typescript
public readonly DisableDNSView: string;
```

- *Type:* string

[Write] route53globalresolver:DisableDNSView.

---

##### `DisassociateHostedZone`<sup>Required</sup> <a name="DisassociateHostedZone" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.DisassociateHostedZone"></a>

```typescript
public readonly DisassociateHostedZone: string;
```

- *Type:* string

[Write] route53globalresolver:DisassociateHostedZone.

---

##### `EnableDNSView`<sup>Required</sup> <a name="EnableDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.EnableDNSView"></a>

```typescript
public readonly EnableDNSView: string;
```

- *Type:* string

[Write] route53globalresolver:EnableDNSView.

---

##### `ImportFirewallDomains`<sup>Required</sup> <a name="ImportFirewallDomains" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ImportFirewallDomains"></a>

```typescript
public readonly ImportFirewallDomains: string;
```

- *Type:* string

[Write] route53globalresolver:ImportFirewallDomains.

---

##### `ListAccessSources`<sup>Required</sup> <a name="ListAccessSources" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListAccessSources"></a>

```typescript
public readonly ListAccessSources: string;
```

- *Type:* string

[List] route53globalresolver:ListAccessSources.

---

##### `ListAccessTokens`<sup>Required</sup> <a name="ListAccessTokens" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListAccessTokens"></a>

```typescript
public readonly ListAccessTokens: string;
```

- *Type:* string

[List] route53globalresolver:ListAccessTokens.

---

##### `ListDNSViews`<sup>Required</sup> <a name="ListDNSViews" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListDNSViews"></a>

```typescript
public readonly ListDNSViews: string;
```

- *Type:* string

[List] route53globalresolver:ListDNSViews.

---

##### `ListFirewallDomainLists`<sup>Required</sup> <a name="ListFirewallDomainLists" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListFirewallDomainLists"></a>

```typescript
public readonly ListFirewallDomainLists: string;
```

- *Type:* string

[List] route53globalresolver:ListFirewallDomainLists.

---

##### `ListFirewallDomains`<sup>Required</sup> <a name="ListFirewallDomains" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListFirewallDomains"></a>

```typescript
public readonly ListFirewallDomains: string;
```

- *Type:* string

[Read] route53globalresolver:ListFirewallDomains.

---

##### `ListFirewallRules`<sup>Required</sup> <a name="ListFirewallRules" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListFirewallRules"></a>

```typescript
public readonly ListFirewallRules: string;
```

- *Type:* string

[List] route53globalresolver:ListFirewallRules.

---

##### `ListGlobalResolvers`<sup>Required</sup> <a name="ListGlobalResolvers" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListGlobalResolvers"></a>

```typescript
public readonly ListGlobalResolvers: string;
```

- *Type:* string

[List] route53globalresolver:ListGlobalResolvers.

---

##### `ListHostedZoneAssociations`<sup>Required</sup> <a name="ListHostedZoneAssociations" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListHostedZoneAssociations"></a>

```typescript
public readonly ListHostedZoneAssociations: string;
```

- *Type:* string

[List] route53globalresolver:ListHostedZoneAssociations.

---

##### `ListManagedFirewallDomainLists`<sup>Required</sup> <a name="ListManagedFirewallDomainLists" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListManagedFirewallDomainLists"></a>

```typescript
public readonly ListManagedFirewallDomainLists: string;
```

- *Type:* string

[List] route53globalresolver:ListManagedFirewallDomainLists.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Write] route53globalresolver:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] route53globalresolver:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] route53globalresolver:UntagResource.

---

##### `UpdateAccessSource`<sup>Required</sup> <a name="UpdateAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateAccessSource"></a>

```typescript
public readonly UpdateAccessSource: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateAccessSource.

---

##### `UpdateAccessToken`<sup>Required</sup> <a name="UpdateAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateAccessToken"></a>

```typescript
public readonly UpdateAccessToken: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateAccessToken.

---

##### `UpdateDNSView`<sup>Required</sup> <a name="UpdateDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateDNSView"></a>

```typescript
public readonly UpdateDNSView: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateDNSView.

---

##### `UpdateFirewallDomains`<sup>Required</sup> <a name="UpdateFirewallDomains" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateFirewallDomains"></a>

```typescript
public readonly UpdateFirewallDomains: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateFirewallDomains.

---

##### `UpdateFirewallRule`<sup>Required</sup> <a name="UpdateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateFirewallRule"></a>

```typescript
public readonly UpdateFirewallRule: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateFirewallRule.

---

##### `UpdateGlobalResolver`<sup>Required</sup> <a name="UpdateGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateGlobalResolver"></a>

```typescript
public readonly UpdateGlobalResolver: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateGlobalResolver.

---

##### `UpdateHostedZoneAssociation`<sup>Required</sup> <a name="UpdateHostedZoneAssociation" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverActions.property.UpdateHostedZoneAssociation"></a>

```typescript
public readonly UpdateHostedZoneAssociation: string;
```

- *Type:* string

[Write] route53globalresolver:UpdateHostedZoneAssociation.

---

### Route53globalresolverConditions <a name="Route53globalresolverConditions" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions"></a>

Condition key constants and builders for route53globalresolver.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

new route53globalresolver.Route53globalresolverConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.requestTag"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.resourceTag"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.tagKeys"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateAccessSourceConditionKeys">CreateAccessSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessSource action. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateAccessTokenConditionKeys">CreateAccessTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessToken action. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateDNSViewConditionKeys">CreateDNSViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDNSView action. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateFirewallDomainListConditionKeys">CreateFirewallDomainListConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFirewallDomainList action. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateGlobalResolverConditionKeys">CreateGlobalResolverConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGlobalResolver action. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAccessSourceConditionKeys`<sup>Required</sup> <a name="CreateAccessSourceConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateAccessSourceConditionKeys"></a>

```typescript
public readonly CreateAccessSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessSource action.

---

##### `CreateAccessTokenConditionKeys`<sup>Required</sup> <a name="CreateAccessTokenConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateAccessTokenConditionKeys"></a>

```typescript
public readonly CreateAccessTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessToken action.

---

##### `CreateDNSViewConditionKeys`<sup>Required</sup> <a name="CreateDNSViewConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateDNSViewConditionKeys"></a>

```typescript
public readonly CreateDNSViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDNSView action.

---

##### `CreateFirewallDomainListConditionKeys`<sup>Required</sup> <a name="CreateFirewallDomainListConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateFirewallDomainListConditionKeys"></a>

```typescript
public readonly CreateFirewallDomainListConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFirewallDomainList action.

---

##### `CreateGlobalResolverConditionKeys`<sup>Required</sup> <a name="CreateGlobalResolverConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.CreateGlobalResolverConditionKeys"></a>

```typescript
public readonly CreateGlobalResolverConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGlobalResolver action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### Route53globalresolverOperations <a name="Route53globalresolverOperations" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations"></a>

API operation to required IAM actions mapping for route53globalresolver.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

new route53globalresolver.Route53globalresolverOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.AssociateHostedZone">AssociateHostedZone</a></code> | <code>string[]</code> | IAM actions required for the AssociateHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.BatchCreateFirewallRule">BatchCreateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.BatchDeleteFirewallRule">BatchDeleteFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.BatchUpdateFirewallRule">BatchUpdateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateAccessSource">CreateAccessSource</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessSource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateAccessToken">CreateAccessToken</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessToken API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateDNSView">CreateDNSView</a></code> | <code>string[]</code> | IAM actions required for the CreateDNSView API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateFirewallDomainList">CreateFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateFirewallRule">CreateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the CreateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateGlobalResolver">CreateGlobalResolver</a></code> | <code>string[]</code> | IAM actions required for the CreateGlobalResolver API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteAccessSource">DeleteAccessSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessSource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteAccessToken">DeleteAccessToken</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessToken API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteDNSView">DeleteDNSView</a></code> | <code>string[]</code> | IAM actions required for the DeleteDNSView API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteFirewallDomainList">DeleteFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteFirewallRule">DeleteFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteGlobalResolver">DeleteGlobalResolver</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlobalResolver API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DisableDNSView">DisableDNSView</a></code> | <code>string[]</code> | IAM actions required for the DisableDNSView API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DisassociateHostedZone">DisassociateHostedZone</a></code> | <code>string[]</code> | IAM actions required for the DisassociateHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.EnableDNSView">EnableDNSView</a></code> | <code>string[]</code> | IAM actions required for the EnableDNSView API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ImportFirewallDomains">ImportFirewallDomains</a></code> | <code>string[]</code> | IAM actions required for the ImportFirewallDomains API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListAccessSources">ListAccessSources</a></code> | <code>string[]</code> | IAM actions required for the ListAccessSources API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListAccessTokens">ListAccessTokens</a></code> | <code>string[]</code> | IAM actions required for the ListAccessTokens API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListDNSViews">ListDNSViews</a></code> | <code>string[]</code> | IAM actions required for the ListDNSViews API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListFirewallDomainLists">ListFirewallDomainLists</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallDomainLists API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListFirewallDomains">ListFirewallDomains</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallDomains API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListFirewallRules">ListFirewallRules</a></code> | <code>string[]</code> | IAM actions required for the ListFirewallRules API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListGlobalResolvers">ListGlobalResolvers</a></code> | <code>string[]</code> | IAM actions required for the ListGlobalResolvers API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListHostedZoneAssociations">ListHostedZoneAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListHostedZoneAssociations API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListManagedFirewallDomainLists">ListManagedFirewallDomainLists</a></code> | <code>string[]</code> | IAM actions required for the ListManagedFirewallDomainLists API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListSharedDNSViews">ListSharedDNSViews</a></code> | <code>string[]</code> | IAM actions required for the ListSharedDNSViews API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetAccessSource">opGetAccessSource</a></code> | <code>string[]</code> | IAM actions required for the GetAccessSource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetAccessToken">opGetAccessToken</a></code> | <code>string[]</code> | IAM actions required for the GetAccessToken API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetDNSView">opGetDNSView</a></code> | <code>string[]</code> | IAM actions required for the GetDNSView API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetFirewallDomainList">opGetFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetFirewallRule">opGetFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the GetFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetGlobalResolver">opGetGlobalResolver</a></code> | <code>string[]</code> | IAM actions required for the GetGlobalResolver API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetHostedZoneAssociation">opGetHostedZoneAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetHostedZoneAssociation API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetManagedFirewallDomainList">opGetManagedFirewallDomainList</a></code> | <code>string[]</code> | IAM actions required for the GetManagedFirewallDomainList API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateAccessSource">UpdateAccessSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessSource API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateAccessToken">UpdateAccessToken</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessToken API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateDNSView">UpdateDNSView</a></code> | <code>string[]</code> | IAM actions required for the UpdateDNSView API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateFirewallDomains">UpdateFirewallDomains</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallDomains API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateFirewallRule">UpdateFirewallRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateFirewallRule API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateGlobalResolver">UpdateGlobalResolver</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalResolver API call. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateHostedZoneAssociation">UpdateHostedZoneAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateHostedZoneAssociation API call. |

---

##### `AssociateHostedZone`<sup>Required</sup> <a name="AssociateHostedZone" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.AssociateHostedZone"></a>

```typescript
public readonly AssociateHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the AssociateHostedZone API call.

---

##### `BatchCreateFirewallRule`<sup>Required</sup> <a name="BatchCreateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.BatchCreateFirewallRule"></a>

```typescript
public readonly BatchCreateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateFirewallRule API call.

---

##### `BatchDeleteFirewallRule`<sup>Required</sup> <a name="BatchDeleteFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.BatchDeleteFirewallRule"></a>

```typescript
public readonly BatchDeleteFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteFirewallRule API call.

---

##### `BatchUpdateFirewallRule`<sup>Required</sup> <a name="BatchUpdateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.BatchUpdateFirewallRule"></a>

```typescript
public readonly BatchUpdateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateFirewallRule API call.

---

##### `CreateAccessSource`<sup>Required</sup> <a name="CreateAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateAccessSource"></a>

```typescript
public readonly CreateAccessSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessSource API call.

---

##### `CreateAccessToken`<sup>Required</sup> <a name="CreateAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateAccessToken"></a>

```typescript
public readonly CreateAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessToken API call.

---

##### `CreateDNSView`<sup>Required</sup> <a name="CreateDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateDNSView"></a>

```typescript
public readonly CreateDNSView: string[];
```

- *Type:* string[]

IAM actions required for the CreateDNSView API call.

---

##### `CreateFirewallDomainList`<sup>Required</sup> <a name="CreateFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateFirewallDomainList"></a>

```typescript
public readonly CreateFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewallDomainList API call.

---

##### `CreateFirewallRule`<sup>Required</sup> <a name="CreateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateFirewallRule"></a>

```typescript
public readonly CreateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateFirewallRule API call.

---

##### `CreateGlobalResolver`<sup>Required</sup> <a name="CreateGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.CreateGlobalResolver"></a>

```typescript
public readonly CreateGlobalResolver: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlobalResolver API call.

---

##### `DeleteAccessSource`<sup>Required</sup> <a name="DeleteAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteAccessSource"></a>

```typescript
public readonly DeleteAccessSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessSource API call.

---

##### `DeleteAccessToken`<sup>Required</sup> <a name="DeleteAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteAccessToken"></a>

```typescript
public readonly DeleteAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessToken API call.

---

##### `DeleteDNSView`<sup>Required</sup> <a name="DeleteDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteDNSView"></a>

```typescript
public readonly DeleteDNSView: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDNSView API call.

---

##### `DeleteFirewallDomainList`<sup>Required</sup> <a name="DeleteFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteFirewallDomainList"></a>

```typescript
public readonly DeleteFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallDomainList API call.

---

##### `DeleteFirewallRule`<sup>Required</sup> <a name="DeleteFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteFirewallRule"></a>

```typescript
public readonly DeleteFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFirewallRule API call.

---

##### `DeleteGlobalResolver`<sup>Required</sup> <a name="DeleteGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DeleteGlobalResolver"></a>

```typescript
public readonly DeleteGlobalResolver: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlobalResolver API call.

---

##### `DisableDNSView`<sup>Required</sup> <a name="DisableDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DisableDNSView"></a>

```typescript
public readonly DisableDNSView: string[];
```

- *Type:* string[]

IAM actions required for the DisableDNSView API call.

---

##### `DisassociateHostedZone`<sup>Required</sup> <a name="DisassociateHostedZone" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.DisassociateHostedZone"></a>

```typescript
public readonly DisassociateHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateHostedZone API call.

---

##### `EnableDNSView`<sup>Required</sup> <a name="EnableDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.EnableDNSView"></a>

```typescript
public readonly EnableDNSView: string[];
```

- *Type:* string[]

IAM actions required for the EnableDNSView API call.

---

##### `ImportFirewallDomains`<sup>Required</sup> <a name="ImportFirewallDomains" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ImportFirewallDomains"></a>

```typescript
public readonly ImportFirewallDomains: string[];
```

- *Type:* string[]

IAM actions required for the ImportFirewallDomains API call.

---

##### `ListAccessSources`<sup>Required</sup> <a name="ListAccessSources" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListAccessSources"></a>

```typescript
public readonly ListAccessSources: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessSources API call.

---

##### `ListAccessTokens`<sup>Required</sup> <a name="ListAccessTokens" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListAccessTokens"></a>

```typescript
public readonly ListAccessTokens: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessTokens API call.

---

##### `ListDNSViews`<sup>Required</sup> <a name="ListDNSViews" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListDNSViews"></a>

```typescript
public readonly ListDNSViews: string[];
```

- *Type:* string[]

IAM actions required for the ListDNSViews API call.

---

##### `ListFirewallDomainLists`<sup>Required</sup> <a name="ListFirewallDomainLists" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListFirewallDomainLists"></a>

```typescript
public readonly ListFirewallDomainLists: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallDomainLists API call.

---

##### `ListFirewallDomains`<sup>Required</sup> <a name="ListFirewallDomains" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListFirewallDomains"></a>

```typescript
public readonly ListFirewallDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallDomains API call.

---

##### `ListFirewallRules`<sup>Required</sup> <a name="ListFirewallRules" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListFirewallRules"></a>

```typescript
public readonly ListFirewallRules: string[];
```

- *Type:* string[]

IAM actions required for the ListFirewallRules API call.

---

##### `ListGlobalResolvers`<sup>Required</sup> <a name="ListGlobalResolvers" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListGlobalResolvers"></a>

```typescript
public readonly ListGlobalResolvers: string[];
```

- *Type:* string[]

IAM actions required for the ListGlobalResolvers API call.

---

##### `ListHostedZoneAssociations`<sup>Required</sup> <a name="ListHostedZoneAssociations" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListHostedZoneAssociations"></a>

```typescript
public readonly ListHostedZoneAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListHostedZoneAssociations API call.

---

##### `ListManagedFirewallDomainLists`<sup>Required</sup> <a name="ListManagedFirewallDomainLists" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListManagedFirewallDomainLists"></a>

```typescript
public readonly ListManagedFirewallDomainLists: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedFirewallDomainLists API call.

---

##### `ListSharedDNSViews`<sup>Required</sup> <a name="ListSharedDNSViews" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListSharedDNSViews"></a>

```typescript
public readonly ListSharedDNSViews: string[];
```

- *Type:* string[]

IAM actions required for the ListSharedDNSViews API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccessSource`<sup>Required</sup> <a name="opGetAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetAccessSource"></a>

```typescript
public readonly opGetAccessSource: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessSource API call.

---

##### `opGetAccessToken`<sup>Required</sup> <a name="opGetAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetAccessToken"></a>

```typescript
public readonly opGetAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessToken API call.

---

##### `opGetDNSView`<sup>Required</sup> <a name="opGetDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetDNSView"></a>

```typescript
public readonly opGetDNSView: string[];
```

- *Type:* string[]

IAM actions required for the GetDNSView API call.

---

##### `opGetFirewallDomainList`<sup>Required</sup> <a name="opGetFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetFirewallDomainList"></a>

```typescript
public readonly opGetFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallDomainList API call.

---

##### `opGetFirewallRule`<sup>Required</sup> <a name="opGetFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetFirewallRule"></a>

```typescript
public readonly opGetFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the GetFirewallRule API call.

---

##### `opGetGlobalResolver`<sup>Required</sup> <a name="opGetGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetGlobalResolver"></a>

```typescript
public readonly opGetGlobalResolver: string[];
```

- *Type:* string[]

IAM actions required for the GetGlobalResolver API call.

---

##### `opGetHostedZoneAssociation`<sup>Required</sup> <a name="opGetHostedZoneAssociation" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetHostedZoneAssociation"></a>

```typescript
public readonly opGetHostedZoneAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetHostedZoneAssociation API call.

---

##### `opGetManagedFirewallDomainList`<sup>Required</sup> <a name="opGetManagedFirewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.opGetManagedFirewallDomainList"></a>

```typescript
public readonly opGetManagedFirewallDomainList: string[];
```

- *Type:* string[]

IAM actions required for the GetManagedFirewallDomainList API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccessSource`<sup>Required</sup> <a name="UpdateAccessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateAccessSource"></a>

```typescript
public readonly UpdateAccessSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessSource API call.

---

##### `UpdateAccessToken`<sup>Required</sup> <a name="UpdateAccessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateAccessToken"></a>

```typescript
public readonly UpdateAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessToken API call.

---

##### `UpdateDNSView`<sup>Required</sup> <a name="UpdateDNSView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateDNSView"></a>

```typescript
public readonly UpdateDNSView: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDNSView API call.

---

##### `UpdateFirewallDomains`<sup>Required</sup> <a name="UpdateFirewallDomains" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateFirewallDomains"></a>

```typescript
public readonly UpdateFirewallDomains: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallDomains API call.

---

##### `UpdateFirewallRule`<sup>Required</sup> <a name="UpdateFirewallRule" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateFirewallRule"></a>

```typescript
public readonly UpdateFirewallRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFirewallRule API call.

---

##### `UpdateGlobalResolver`<sup>Required</sup> <a name="UpdateGlobalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateGlobalResolver"></a>

```typescript
public readonly UpdateGlobalResolver: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalResolver API call.

---

##### `UpdateHostedZoneAssociation`<sup>Required</sup> <a name="UpdateHostedZoneAssociation" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverOperations.property.UpdateHostedZoneAssociation"></a>

```typescript
public readonly UpdateHostedZoneAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHostedZoneAssociation API call.

---

### Route53globalresolverResources <a name="Route53globalresolverResources" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources"></a>

ARN builders, validators, and parsers for route53globalresolver resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.Initializer"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

new route53globalresolver.Route53globalresolverResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.accessSource">accessSource</a></code> | Builds an ARN for the access-source resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.accessToken">accessToken</a></code> | Builds an ARN for the access-token resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.dnsView">dnsView</a></code> | Builds an ARN for the dns-view resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.firewallDomainList">firewallDomainList</a></code> | Builds an ARN for the firewall-domain-list resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.globalResolver">globalResolver</a></code> | Builds an ARN for the global-resolver resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidAccessSourceArn">isValidAccessSourceArn</a></code> | Validates whether a string is a valid ARN for the access-source resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidAccessTokenArn">isValidAccessTokenArn</a></code> | Validates whether a string is a valid ARN for the access-token resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidDNSViewArn">isValidDNSViewArn</a></code> | Validates whether a string is a valid ARN for the dns-view resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidFirewallDomainListArn">isValidFirewallDomainListArn</a></code> | Validates whether a string is a valid ARN for the firewall-domain-list resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidGlobalResolverArn">isValidGlobalResolverArn</a></code> | Validates whether a string is a valid ARN for the global-resolver resource. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseAccessSourceArn">parseAccessSourceArn</a></code> | Parses a access-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseAccessTokenArn">parseAccessTokenArn</a></code> | Parses a access-token ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseDNSViewArn">parseDNSViewArn</a></code> | Parses a dns-view ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseFirewallDomainListArn">parseFirewallDomainListArn</a></code> | Parses a firewall-domain-list ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseGlobalResolverArn">parseGlobalResolverArn</a></code> | Parses a global-resolver ARN into its components. |

---

##### `accessSource` <a name="accessSource" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.accessSource"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.accessSource(props: Route53globalresolverAccessSourceArnProps)
```

Builds an ARN for the access-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.accessSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessSourceArnProps">Route53globalresolverAccessSourceArnProps</a>

---

##### `accessToken` <a name="accessToken" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.accessToken"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.accessToken(props: Route53globalresolverAccessTokenArnProps)
```

Builds an ARN for the access-token resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.accessToken.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverAccessTokenArnProps">Route53globalresolverAccessTokenArnProps</a>

---

##### `dnsView` <a name="dnsView" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.dnsView"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.dnsView(props: Route53globalresolverDNSViewArnProps)
```

Builds an ARN for the dns-view resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.dnsView.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverDNSViewArnProps">Route53globalresolverDNSViewArnProps</a>

---

##### `firewallDomainList` <a name="firewallDomainList" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.firewallDomainList"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.firewallDomainList(props: Route53globalresolverFirewallDomainListArnProps)
```

Builds an ARN for the firewall-domain-list resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.firewallDomainList.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverFirewallDomainListArnProps">Route53globalresolverFirewallDomainListArnProps</a>

---

##### `globalResolver` <a name="globalResolver" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.globalResolver"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.globalResolver(props: Route53globalresolverGlobalResolverArnProps)
```

Builds an ARN for the global-resolver resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.globalResolver.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53globalresolver.Route53globalresolverGlobalResolverArnProps">Route53globalresolverGlobalResolverArnProps</a>

---

##### `isValidAccessSourceArn` <a name="isValidAccessSourceArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidAccessSourceArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.isValidAccessSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the access-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidAccessSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAccessTokenArn` <a name="isValidAccessTokenArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidAccessTokenArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.isValidAccessTokenArn(arn: string)
```

Validates whether a string is a valid ARN for the access-token resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidAccessTokenArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDNSViewArn` <a name="isValidDNSViewArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidDNSViewArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.isValidDNSViewArn(arn: string)
```

Validates whether a string is a valid ARN for the dns-view resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidDNSViewArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFirewallDomainListArn` <a name="isValidFirewallDomainListArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidFirewallDomainListArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.isValidFirewallDomainListArn(arn: string)
```

Validates whether a string is a valid ARN for the firewall-domain-list resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidFirewallDomainListArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGlobalResolverArn` <a name="isValidGlobalResolverArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidGlobalResolverArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.isValidGlobalResolverArn(arn: string)
```

Validates whether a string is a valid ARN for the global-resolver resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.isValidGlobalResolverArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessSourceArn` <a name="parseAccessSourceArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseAccessSourceArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.parseAccessSourceArn(arn: string)
```

Parses a access-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseAccessSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccessTokenArn` <a name="parseAccessTokenArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseAccessTokenArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.parseAccessTokenArn(arn: string)
```

Parses a access-token ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseAccessTokenArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDNSViewArn` <a name="parseDNSViewArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseDNSViewArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.parseDNSViewArn(arn: string)
```

Parses a dns-view ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseDNSViewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFirewallDomainListArn` <a name="parseFirewallDomainListArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseFirewallDomainListArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.parseFirewallDomainListArn(arn: string)
```

Parses a firewall-domain-list ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseFirewallDomainListArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGlobalResolverArn` <a name="parseGlobalResolverArn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseGlobalResolverArn"></a>

```typescript
import { route53globalresolver } from '@cdk_utils/iam'

route53globalresolver.Route53globalresolverResources.parseGlobalResolverArn(arn: string)
```

Parses a global-resolver ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53globalresolver.Route53globalresolverResources.parseGlobalResolverArn.parameter.arn"></a>

- *Type:* string

---




