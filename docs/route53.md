# `route53` Submodule <a name="`route53` Submodule" id="@cdk_utils/iam.route53"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53ChangeArnComponents <a name="Route53ChangeArnComponents" id="@cdk_utils/iam.route53.Route53ChangeArnComponents"></a>

Parsed components of a change ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53ChangeArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53ChangeArnComponents: route53.Route53ChangeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53ChangeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53ChangeArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53ChangeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53ChangeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53ChangeArnProps <a name="Route53ChangeArnProps" id="@cdk_utils/iam.route53.Route53ChangeArnProps"></a>

Properties for building a change ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53ChangeArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53ChangeArnProps: route53.Route53ChangeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53ChangeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53ChangeArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53ChangeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53ChangeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53ChangeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53CidrcollectionArnComponents <a name="Route53CidrcollectionArnComponents" id="@cdk_utils/iam.route53.Route53CidrcollectionArnComponents"></a>

Parsed components of a cidrcollection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53CidrcollectionArnComponents: route53.Route53CidrcollectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53CidrcollectionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53CidrcollectionArnProps <a name="Route53CidrcollectionArnProps" id="@cdk_utils/iam.route53.Route53CidrcollectionArnProps"></a>

Properties for building a cidrcollection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53CidrcollectionArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53CidrcollectionArnProps: route53.Route53CidrcollectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53CidrcollectionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53DelegationsetArnComponents <a name="Route53DelegationsetArnComponents" id="@cdk_utils/iam.route53.Route53DelegationsetArnComponents"></a>

Parsed components of a delegationset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53DelegationsetArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53DelegationsetArnComponents: route53.Route53DelegationsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53DelegationsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53DelegationsetArnProps <a name="Route53DelegationsetArnProps" id="@cdk_utils/iam.route53.Route53DelegationsetArnProps"></a>

Properties for building a delegationset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53DelegationsetArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53DelegationsetArnProps: route53.Route53DelegationsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53DelegationsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53HealthcheckArnComponents <a name="Route53HealthcheckArnComponents" id="@cdk_utils/iam.route53.Route53HealthcheckArnComponents"></a>

Parsed components of a healthcheck ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53HealthcheckArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53HealthcheckArnComponents: route53.Route53HealthcheckArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53HealthcheckArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53HealthcheckArnProps <a name="Route53HealthcheckArnProps" id="@cdk_utils/iam.route53.Route53HealthcheckArnProps"></a>

Properties for building a healthcheck ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53HealthcheckArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53HealthcheckArnProps: route53.Route53HealthcheckArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53HealthcheckArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53HostedzoneArnComponents <a name="Route53HostedzoneArnComponents" id="@cdk_utils/iam.route53.Route53HostedzoneArnComponents"></a>

Parsed components of a hostedzone ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53HostedzoneArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53HostedzoneArnComponents: route53.Route53HostedzoneArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53HostedzoneArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53HostedzoneArnProps <a name="Route53HostedzoneArnProps" id="@cdk_utils/iam.route53.Route53HostedzoneArnProps"></a>

Properties for building a hostedzone ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53HostedzoneArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53HostedzoneArnProps: route53.Route53HostedzoneArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53HostedzoneArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53QueryloggingconfigArnComponents <a name="Route53QueryloggingconfigArnComponents" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents"></a>

Parsed components of a queryloggingconfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53QueryloggingconfigArnComponents: route53.Route53QueryloggingconfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53QueryloggingconfigArnProps <a name="Route53QueryloggingconfigArnProps" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps"></a>

Properties for building a queryloggingconfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53QueryloggingconfigArnProps: route53.Route53QueryloggingconfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53TrafficpolicyArnComponents <a name="Route53TrafficpolicyArnComponents" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents"></a>

Parsed components of a trafficpolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53TrafficpolicyArnComponents: route53.Route53TrafficpolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53TrafficpolicyArnProps <a name="Route53TrafficpolicyArnProps" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnProps"></a>

Properties for building a trafficpolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53TrafficpolicyArnProps: route53.Route53TrafficpolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53TrafficpolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53TrafficpolicyinstanceArnComponents <a name="Route53TrafficpolicyinstanceArnComponents" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents"></a>

Parsed components of a trafficpolicyinstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53TrafficpolicyinstanceArnComponents: route53.Route53TrafficpolicyinstanceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Route53TrafficpolicyinstanceArnProps <a name="Route53TrafficpolicyinstanceArnProps" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps"></a>

Properties for building a trafficpolicyinstance ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53TrafficpolicyinstanceArnProps: route53.Route53TrafficpolicyinstanceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Route53VPCArnComponents <a name="Route53VPCArnComponents" id="@cdk_utils/iam.route53.Route53VPCArnComponents"></a>

Parsed components of a vpc ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53VPCArnComponents.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53VPCArnComponents: route53.Route53VPCArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnComponents.property.vpcId">vpcId</a></code> | <code>string</code> | The VpcId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53.Route53VPCArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53VPCArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.route53.Route53VPCArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdk_utils/iam.route53.Route53VPCArnComponents.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VpcId component.

---

### Route53VPCArnProps <a name="Route53VPCArnProps" id="@cdk_utils/iam.route53.Route53VPCArnProps"></a>

Properties for building a vpc ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53.Route53VPCArnProps.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

const route53VPCArnProps: route53.Route53VPCArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnProps.property.vpcId">vpcId</a></code> | <code>string</code> | The VpcId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53.Route53VPCArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdk_utils/iam.route53.Route53VPCArnProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

The VpcId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53.Route53VPCArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53.Route53VPCArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.route53.Route53VPCArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53Actions <a name="Route53Actions" id="@cdk_utils/iam.route53.Route53Actions"></a>

IAM action constants for the route53 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53.Route53Actions.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

new route53.Route53Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetAccountLimit">actionGetAccountLimit</a></code> | <code>string</code> | [Read] route53:GetAccountLimit. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetChange">actionGetChange</a></code> | <code>string</code> | [List] route53:GetChange. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetCheckerIpRanges">actionGetCheckerIpRanges</a></code> | <code>string</code> | [List] route53:GetCheckerIpRanges. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetDNSSEC">actionGetDNSSEC</a></code> | <code>string</code> | [Read] route53:GetDNSSEC. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetGeoLocation">actionGetGeoLocation</a></code> | <code>string</code> | [List] route53:GetGeoLocation. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheck">actionGetHealthCheck</a></code> | <code>string</code> | [Read] route53:GetHealthCheck. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheckCount">actionGetHealthCheckCount</a></code> | <code>string</code> | [List] route53:GetHealthCheckCount. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheckLastFailureReason">actionGetHealthCheckLastFailureReason</a></code> | <code>string</code> | [List] route53:GetHealthCheckLastFailureReason. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheckStatus">actionGetHealthCheckStatus</a></code> | <code>string</code> | [List] route53:GetHealthCheckStatus. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHostedZone">actionGetHostedZone</a></code> | <code>string</code> | [List] route53:GetHostedZone. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHostedZoneCount">actionGetHostedZoneCount</a></code> | <code>string</code> | [List] route53:GetHostedZoneCount. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetHostedZoneLimit">actionGetHostedZoneLimit</a></code> | <code>string</code> | [Read] route53:GetHostedZoneLimit. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetQueryLoggingConfig">actionGetQueryLoggingConfig</a></code> | <code>string</code> | [Read] route53:GetQueryLoggingConfig. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetReusableDelegationSet">actionGetReusableDelegationSet</a></code> | <code>string</code> | [List] route53:GetReusableDelegationSet. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetReusableDelegationSetLimit">actionGetReusableDelegationSetLimit</a></code> | <code>string</code> | [Read] route53:GetReusableDelegationSetLimit. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetTrafficPolicy">actionGetTrafficPolicy</a></code> | <code>string</code> | [Read] route53:GetTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetTrafficPolicyInstance">actionGetTrafficPolicyInstance</a></code> | <code>string</code> | [Read] route53:GetTrafficPolicyInstance. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.actionGetTrafficPolicyInstanceCount">actionGetTrafficPolicyInstanceCount</a></code> | <code>string</code> | [Read] route53:GetTrafficPolicyInstanceCount. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ActivateKeySigningKey">ActivateKeySigningKey</a></code> | <code>string</code> | [Write] route53:ActivateKeySigningKey. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.AssociateVPCWithHostedZone">AssociateVPCWithHostedZone</a></code> | <code>string</code> | [Write] route53:AssociateVPCWithHostedZone. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ChangeCidrCollection">ChangeCidrCollection</a></code> | <code>string</code> | [Write] route53:ChangeCidrCollection. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ChangeResourceRecordSets">ChangeResourceRecordSets</a></code> | <code>string</code> | [Write] route53:ChangeResourceRecordSets. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ChangeTagsForResource">ChangeTagsForResource</a></code> | <code>string</code> | [Tagging] route53:ChangeTagsForResource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateCidrCollection">CreateCidrCollection</a></code> | <code>string</code> | [Write] route53:CreateCidrCollection. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateHealthCheck">CreateHealthCheck</a></code> | <code>string</code> | [Write] route53:CreateHealthCheck. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateHostedZone">CreateHostedZone</a></code> | <code>string</code> | [Write] route53:CreateHostedZone. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateKeySigningKey">CreateKeySigningKey</a></code> | <code>string</code> | [Write] route53:CreateKeySigningKey. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateQueryLoggingConfig">CreateQueryLoggingConfig</a></code> | <code>string</code> | [Write] route53:CreateQueryLoggingConfig. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateReusableDelegationSet">CreateReusableDelegationSet</a></code> | <code>string</code> | [Write] route53:CreateReusableDelegationSet. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateTrafficPolicy">CreateTrafficPolicy</a></code> | <code>string</code> | [Write] route53:CreateTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateTrafficPolicyInstance">CreateTrafficPolicyInstance</a></code> | <code>string</code> | [Write] route53:CreateTrafficPolicyInstance. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateTrafficPolicyVersion">CreateTrafficPolicyVersion</a></code> | <code>string</code> | [Write] route53:CreateTrafficPolicyVersion. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.CreateVPCAssociationAuthorization">CreateVPCAssociationAuthorization</a></code> | <code>string</code> | [Write] route53:CreateVPCAssociationAuthorization. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeactivateKeySigningKey">DeactivateKeySigningKey</a></code> | <code>string</code> | [Write] route53:DeactivateKeySigningKey. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteCidrCollection">DeleteCidrCollection</a></code> | <code>string</code> | [Write] route53:DeleteCidrCollection. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteHealthCheck">DeleteHealthCheck</a></code> | <code>string</code> | [Write] route53:DeleteHealthCheck. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteHostedZone">DeleteHostedZone</a></code> | <code>string</code> | [Write] route53:DeleteHostedZone. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteKeySigningKey">DeleteKeySigningKey</a></code> | <code>string</code> | [Write] route53:DeleteKeySigningKey. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteQueryLoggingConfig">DeleteQueryLoggingConfig</a></code> | <code>string</code> | [Write] route53:DeleteQueryLoggingConfig. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteReusableDelegationSet">DeleteReusableDelegationSet</a></code> | <code>string</code> | [Write] route53:DeleteReusableDelegationSet. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteTrafficPolicy">DeleteTrafficPolicy</a></code> | <code>string</code> | [Write] route53:DeleteTrafficPolicy. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteTrafficPolicyInstance">DeleteTrafficPolicyInstance</a></code> | <code>string</code> | [Write] route53:DeleteTrafficPolicyInstance. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DeleteVPCAssociationAuthorization">DeleteVPCAssociationAuthorization</a></code> | <code>string</code> | [Write] route53:DeleteVPCAssociationAuthorization. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DisableHostedZoneDNSSEC">DisableHostedZoneDNSSEC</a></code> | <code>string</code> | [Write] route53:DisableHostedZoneDNSSEC. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.DisassociateVPCFromHostedZone">DisassociateVPCFromHostedZone</a></code> | <code>string</code> | [Write] route53:DisassociateVPCFromHostedZone. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.EnableHostedZoneDNSSEC">EnableHostedZoneDNSSEC</a></code> | <code>string</code> | [Write] route53:EnableHostedZoneDNSSEC. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListCidrBlocks">ListCidrBlocks</a></code> | <code>string</code> | [List] route53:ListCidrBlocks. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListCidrCollections">ListCidrCollections</a></code> | <code>string</code> | [List] route53:ListCidrCollections. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListCidrLocations">ListCidrLocations</a></code> | <code>string</code> | [List] route53:ListCidrLocations. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListGeoLocations">ListGeoLocations</a></code> | <code>string</code> | [Read] route53:ListGeoLocations. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListHealthChecks">ListHealthChecks</a></code> | <code>string</code> | [Read] route53:ListHealthChecks. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListHostedZones">ListHostedZones</a></code> | <code>string</code> | [List] route53:ListHostedZones. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListHostedZonesByName">ListHostedZonesByName</a></code> | <code>string</code> | [List] route53:ListHostedZonesByName. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListHostedZonesByVPC">ListHostedZonesByVPC</a></code> | <code>string</code> | [List] route53:ListHostedZonesByVPC. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListQueryLoggingConfigs">ListQueryLoggingConfigs</a></code> | <code>string</code> | [List] route53:ListQueryLoggingConfigs. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListResourceRecordSets">ListResourceRecordSets</a></code> | <code>string</code> | [List] route53:ListResourceRecordSets. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListReusableDelegationSets">ListReusableDelegationSets</a></code> | <code>string</code> | [Read] route53:ListReusableDelegationSets. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] route53:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTagsForResources">ListTagsForResources</a></code> | <code>string</code> | [Read] route53:ListTagsForResources. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicies">ListTrafficPolicies</a></code> | <code>string</code> | [List] route53:ListTrafficPolicies. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyInstances">ListTrafficPolicyInstances</a></code> | <code>string</code> | [Read] route53:ListTrafficPolicyInstances. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyInstancesByHostedZone">ListTrafficPolicyInstancesByHostedZone</a></code> | <code>string</code> | [List] route53:ListTrafficPolicyInstancesByHostedZone. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyInstancesByPolicy">ListTrafficPolicyInstancesByPolicy</a></code> | <code>string</code> | [List] route53:ListTrafficPolicyInstancesByPolicy. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyVersions">ListTrafficPolicyVersions</a></code> | <code>string</code> | [List] route53:ListTrafficPolicyVersions. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.ListVPCAssociationAuthorizations">ListVPCAssociationAuthorizations</a></code> | <code>string</code> | [List] route53:ListVPCAssociationAuthorizations. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.TestDNSAnswer">TestDNSAnswer</a></code> | <code>string</code> | [Read] route53:TestDNSAnswer. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.UpdateHealthCheck">UpdateHealthCheck</a></code> | <code>string</code> | [Write] route53:UpdateHealthCheck. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.UpdateHostedZoneComment">UpdateHostedZoneComment</a></code> | <code>string</code> | [Write] route53:UpdateHostedZoneComment. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.UpdateHostedZoneFeatures">UpdateHostedZoneFeatures</a></code> | <code>string</code> | [Write] route53:UpdateHostedZoneFeatures. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.UpdateTrafficPolicyComment">UpdateTrafficPolicyComment</a></code> | <code>string</code> | [Write] route53:UpdateTrafficPolicyComment. |
| <code><a href="#@cdk_utils/iam.route53.Route53Actions.property.UpdateTrafficPolicyInstance">UpdateTrafficPolicyInstance</a></code> | <code>string</code> | [Write] route53:UpdateTrafficPolicyInstance. |

---

##### `actionGetAccountLimit`<sup>Required</sup> <a name="actionGetAccountLimit" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetAccountLimit"></a>

```typescript
public readonly actionGetAccountLimit: string;
```

- *Type:* string

[Read] route53:GetAccountLimit.

---

##### `actionGetChange`<sup>Required</sup> <a name="actionGetChange" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetChange"></a>

```typescript
public readonly actionGetChange: string;
```

- *Type:* string

[List] route53:GetChange.

---

##### `actionGetCheckerIpRanges`<sup>Required</sup> <a name="actionGetCheckerIpRanges" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetCheckerIpRanges"></a>

```typescript
public readonly actionGetCheckerIpRanges: string;
```

- *Type:* string

[List] route53:GetCheckerIpRanges.

---

##### `actionGetDNSSEC`<sup>Required</sup> <a name="actionGetDNSSEC" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetDNSSEC"></a>

```typescript
public readonly actionGetDNSSEC: string;
```

- *Type:* string

[Read] route53:GetDNSSEC.

---

##### `actionGetGeoLocation`<sup>Required</sup> <a name="actionGetGeoLocation" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetGeoLocation"></a>

```typescript
public readonly actionGetGeoLocation: string;
```

- *Type:* string

[List] route53:GetGeoLocation.

---

##### `actionGetHealthCheck`<sup>Required</sup> <a name="actionGetHealthCheck" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheck"></a>

```typescript
public readonly actionGetHealthCheck: string;
```

- *Type:* string

[Read] route53:GetHealthCheck.

---

##### `actionGetHealthCheckCount`<sup>Required</sup> <a name="actionGetHealthCheckCount" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheckCount"></a>

```typescript
public readonly actionGetHealthCheckCount: string;
```

- *Type:* string

[List] route53:GetHealthCheckCount.

---

##### `actionGetHealthCheckLastFailureReason`<sup>Required</sup> <a name="actionGetHealthCheckLastFailureReason" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheckLastFailureReason"></a>

```typescript
public readonly actionGetHealthCheckLastFailureReason: string;
```

- *Type:* string

[List] route53:GetHealthCheckLastFailureReason.

---

##### `actionGetHealthCheckStatus`<sup>Required</sup> <a name="actionGetHealthCheckStatus" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHealthCheckStatus"></a>

```typescript
public readonly actionGetHealthCheckStatus: string;
```

- *Type:* string

[List] route53:GetHealthCheckStatus.

---

##### `actionGetHostedZone`<sup>Required</sup> <a name="actionGetHostedZone" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHostedZone"></a>

```typescript
public readonly actionGetHostedZone: string;
```

- *Type:* string

[List] route53:GetHostedZone.

---

##### `actionGetHostedZoneCount`<sup>Required</sup> <a name="actionGetHostedZoneCount" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHostedZoneCount"></a>

```typescript
public readonly actionGetHostedZoneCount: string;
```

- *Type:* string

[List] route53:GetHostedZoneCount.

---

##### `actionGetHostedZoneLimit`<sup>Required</sup> <a name="actionGetHostedZoneLimit" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetHostedZoneLimit"></a>

```typescript
public readonly actionGetHostedZoneLimit: string;
```

- *Type:* string

[Read] route53:GetHostedZoneLimit.

---

##### `actionGetQueryLoggingConfig`<sup>Required</sup> <a name="actionGetQueryLoggingConfig" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetQueryLoggingConfig"></a>

```typescript
public readonly actionGetQueryLoggingConfig: string;
```

- *Type:* string

[Read] route53:GetQueryLoggingConfig.

---

##### `actionGetReusableDelegationSet`<sup>Required</sup> <a name="actionGetReusableDelegationSet" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetReusableDelegationSet"></a>

```typescript
public readonly actionGetReusableDelegationSet: string;
```

- *Type:* string

[List] route53:GetReusableDelegationSet.

---

##### `actionGetReusableDelegationSetLimit`<sup>Required</sup> <a name="actionGetReusableDelegationSetLimit" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetReusableDelegationSetLimit"></a>

```typescript
public readonly actionGetReusableDelegationSetLimit: string;
```

- *Type:* string

[Read] route53:GetReusableDelegationSetLimit.

---

##### `actionGetTrafficPolicy`<sup>Required</sup> <a name="actionGetTrafficPolicy" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetTrafficPolicy"></a>

```typescript
public readonly actionGetTrafficPolicy: string;
```

- *Type:* string

[Read] route53:GetTrafficPolicy.

---

##### `actionGetTrafficPolicyInstance`<sup>Required</sup> <a name="actionGetTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetTrafficPolicyInstance"></a>

```typescript
public readonly actionGetTrafficPolicyInstance: string;
```

- *Type:* string

[Read] route53:GetTrafficPolicyInstance.

---

##### `actionGetTrafficPolicyInstanceCount`<sup>Required</sup> <a name="actionGetTrafficPolicyInstanceCount" id="@cdk_utils/iam.route53.Route53Actions.property.actionGetTrafficPolicyInstanceCount"></a>

```typescript
public readonly actionGetTrafficPolicyInstanceCount: string;
```

- *Type:* string

[Read] route53:GetTrafficPolicyInstanceCount.

---

##### `ActivateKeySigningKey`<sup>Required</sup> <a name="ActivateKeySigningKey" id="@cdk_utils/iam.route53.Route53Actions.property.ActivateKeySigningKey"></a>

```typescript
public readonly ActivateKeySigningKey: string;
```

- *Type:* string

[Write] route53:ActivateKeySigningKey.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53.Route53Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53.Route53Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53.Route53Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53.Route53Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53.Route53Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateVPCWithHostedZone`<sup>Required</sup> <a name="AssociateVPCWithHostedZone" id="@cdk_utils/iam.route53.Route53Actions.property.AssociateVPCWithHostedZone"></a>

```typescript
public readonly AssociateVPCWithHostedZone: string;
```

- *Type:* string

[Write] route53:AssociateVPCWithHostedZone.

---

##### `ChangeCidrCollection`<sup>Required</sup> <a name="ChangeCidrCollection" id="@cdk_utils/iam.route53.Route53Actions.property.ChangeCidrCollection"></a>

```typescript
public readonly ChangeCidrCollection: string;
```

- *Type:* string

[Write] route53:ChangeCidrCollection.

---

##### `ChangeResourceRecordSets`<sup>Required</sup> <a name="ChangeResourceRecordSets" id="@cdk_utils/iam.route53.Route53Actions.property.ChangeResourceRecordSets"></a>

```typescript
public readonly ChangeResourceRecordSets: string;
```

- *Type:* string

[Write] route53:ChangeResourceRecordSets.

---

##### `ChangeTagsForResource`<sup>Required</sup> <a name="ChangeTagsForResource" id="@cdk_utils/iam.route53.Route53Actions.property.ChangeTagsForResource"></a>

```typescript
public readonly ChangeTagsForResource: string;
```

- *Type:* string

[Tagging] route53:ChangeTagsForResource.

---

##### `CreateCidrCollection`<sup>Required</sup> <a name="CreateCidrCollection" id="@cdk_utils/iam.route53.Route53Actions.property.CreateCidrCollection"></a>

```typescript
public readonly CreateCidrCollection: string;
```

- *Type:* string

[Write] route53:CreateCidrCollection.

---

##### `CreateHealthCheck`<sup>Required</sup> <a name="CreateHealthCheck" id="@cdk_utils/iam.route53.Route53Actions.property.CreateHealthCheck"></a>

```typescript
public readonly CreateHealthCheck: string;
```

- *Type:* string

[Write] route53:CreateHealthCheck.

---

##### `CreateHostedZone`<sup>Required</sup> <a name="CreateHostedZone" id="@cdk_utils/iam.route53.Route53Actions.property.CreateHostedZone"></a>

```typescript
public readonly CreateHostedZone: string;
```

- *Type:* string

[Write] route53:CreateHostedZone.

---

##### `CreateKeySigningKey`<sup>Required</sup> <a name="CreateKeySigningKey" id="@cdk_utils/iam.route53.Route53Actions.property.CreateKeySigningKey"></a>

```typescript
public readonly CreateKeySigningKey: string;
```

- *Type:* string

[Write] route53:CreateKeySigningKey.

---

##### `CreateQueryLoggingConfig`<sup>Required</sup> <a name="CreateQueryLoggingConfig" id="@cdk_utils/iam.route53.Route53Actions.property.CreateQueryLoggingConfig"></a>

```typescript
public readonly CreateQueryLoggingConfig: string;
```

- *Type:* string

[Write] route53:CreateQueryLoggingConfig.

---

##### `CreateReusableDelegationSet`<sup>Required</sup> <a name="CreateReusableDelegationSet" id="@cdk_utils/iam.route53.Route53Actions.property.CreateReusableDelegationSet"></a>

```typescript
public readonly CreateReusableDelegationSet: string;
```

- *Type:* string

[Write] route53:CreateReusableDelegationSet.

---

##### `CreateTrafficPolicy`<sup>Required</sup> <a name="CreateTrafficPolicy" id="@cdk_utils/iam.route53.Route53Actions.property.CreateTrafficPolicy"></a>

```typescript
public readonly CreateTrafficPolicy: string;
```

- *Type:* string

[Write] route53:CreateTrafficPolicy.

---

##### `CreateTrafficPolicyInstance`<sup>Required</sup> <a name="CreateTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Actions.property.CreateTrafficPolicyInstance"></a>

```typescript
public readonly CreateTrafficPolicyInstance: string;
```

- *Type:* string

[Write] route53:CreateTrafficPolicyInstance.

---

##### `CreateTrafficPolicyVersion`<sup>Required</sup> <a name="CreateTrafficPolicyVersion" id="@cdk_utils/iam.route53.Route53Actions.property.CreateTrafficPolicyVersion"></a>

```typescript
public readonly CreateTrafficPolicyVersion: string;
```

- *Type:* string

[Write] route53:CreateTrafficPolicyVersion.

---

##### `CreateVPCAssociationAuthorization`<sup>Required</sup> <a name="CreateVPCAssociationAuthorization" id="@cdk_utils/iam.route53.Route53Actions.property.CreateVPCAssociationAuthorization"></a>

```typescript
public readonly CreateVPCAssociationAuthorization: string;
```

- *Type:* string

[Write] route53:CreateVPCAssociationAuthorization.

---

##### `DeactivateKeySigningKey`<sup>Required</sup> <a name="DeactivateKeySigningKey" id="@cdk_utils/iam.route53.Route53Actions.property.DeactivateKeySigningKey"></a>

```typescript
public readonly DeactivateKeySigningKey: string;
```

- *Type:* string

[Write] route53:DeactivateKeySigningKey.

---

##### `DeleteCidrCollection`<sup>Required</sup> <a name="DeleteCidrCollection" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteCidrCollection"></a>

```typescript
public readonly DeleteCidrCollection: string;
```

- *Type:* string

[Write] route53:DeleteCidrCollection.

---

##### `DeleteHealthCheck`<sup>Required</sup> <a name="DeleteHealthCheck" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteHealthCheck"></a>

```typescript
public readonly DeleteHealthCheck: string;
```

- *Type:* string

[Write] route53:DeleteHealthCheck.

---

##### `DeleteHostedZone`<sup>Required</sup> <a name="DeleteHostedZone" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteHostedZone"></a>

```typescript
public readonly DeleteHostedZone: string;
```

- *Type:* string

[Write] route53:DeleteHostedZone.

---

##### `DeleteKeySigningKey`<sup>Required</sup> <a name="DeleteKeySigningKey" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteKeySigningKey"></a>

```typescript
public readonly DeleteKeySigningKey: string;
```

- *Type:* string

[Write] route53:DeleteKeySigningKey.

---

##### `DeleteQueryLoggingConfig`<sup>Required</sup> <a name="DeleteQueryLoggingConfig" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteQueryLoggingConfig"></a>

```typescript
public readonly DeleteQueryLoggingConfig: string;
```

- *Type:* string

[Write] route53:DeleteQueryLoggingConfig.

---

##### `DeleteReusableDelegationSet`<sup>Required</sup> <a name="DeleteReusableDelegationSet" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteReusableDelegationSet"></a>

```typescript
public readonly DeleteReusableDelegationSet: string;
```

- *Type:* string

[Write] route53:DeleteReusableDelegationSet.

---

##### `DeleteTrafficPolicy`<sup>Required</sup> <a name="DeleteTrafficPolicy" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteTrafficPolicy"></a>

```typescript
public readonly DeleteTrafficPolicy: string;
```

- *Type:* string

[Write] route53:DeleteTrafficPolicy.

---

##### `DeleteTrafficPolicyInstance`<sup>Required</sup> <a name="DeleteTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteTrafficPolicyInstance"></a>

```typescript
public readonly DeleteTrafficPolicyInstance: string;
```

- *Type:* string

[Write] route53:DeleteTrafficPolicyInstance.

---

##### `DeleteVPCAssociationAuthorization`<sup>Required</sup> <a name="DeleteVPCAssociationAuthorization" id="@cdk_utils/iam.route53.Route53Actions.property.DeleteVPCAssociationAuthorization"></a>

```typescript
public readonly DeleteVPCAssociationAuthorization: string;
```

- *Type:* string

[Write] route53:DeleteVPCAssociationAuthorization.

---

##### `DisableHostedZoneDNSSEC`<sup>Required</sup> <a name="DisableHostedZoneDNSSEC" id="@cdk_utils/iam.route53.Route53Actions.property.DisableHostedZoneDNSSEC"></a>

```typescript
public readonly DisableHostedZoneDNSSEC: string;
```

- *Type:* string

[Write] route53:DisableHostedZoneDNSSEC.

---

##### `DisassociateVPCFromHostedZone`<sup>Required</sup> <a name="DisassociateVPCFromHostedZone" id="@cdk_utils/iam.route53.Route53Actions.property.DisassociateVPCFromHostedZone"></a>

```typescript
public readonly DisassociateVPCFromHostedZone: string;
```

- *Type:* string

[Write] route53:DisassociateVPCFromHostedZone.

---

##### `EnableHostedZoneDNSSEC`<sup>Required</sup> <a name="EnableHostedZoneDNSSEC" id="@cdk_utils/iam.route53.Route53Actions.property.EnableHostedZoneDNSSEC"></a>

```typescript
public readonly EnableHostedZoneDNSSEC: string;
```

- *Type:* string

[Write] route53:EnableHostedZoneDNSSEC.

---

##### `ListCidrBlocks`<sup>Required</sup> <a name="ListCidrBlocks" id="@cdk_utils/iam.route53.Route53Actions.property.ListCidrBlocks"></a>

```typescript
public readonly ListCidrBlocks: string;
```

- *Type:* string

[List] route53:ListCidrBlocks.

---

##### `ListCidrCollections`<sup>Required</sup> <a name="ListCidrCollections" id="@cdk_utils/iam.route53.Route53Actions.property.ListCidrCollections"></a>

```typescript
public readonly ListCidrCollections: string;
```

- *Type:* string

[List] route53:ListCidrCollections.

---

##### `ListCidrLocations`<sup>Required</sup> <a name="ListCidrLocations" id="@cdk_utils/iam.route53.Route53Actions.property.ListCidrLocations"></a>

```typescript
public readonly ListCidrLocations: string;
```

- *Type:* string

[List] route53:ListCidrLocations.

---

##### `ListGeoLocations`<sup>Required</sup> <a name="ListGeoLocations" id="@cdk_utils/iam.route53.Route53Actions.property.ListGeoLocations"></a>

```typescript
public readonly ListGeoLocations: string;
```

- *Type:* string

[Read] route53:ListGeoLocations.

---

##### `ListHealthChecks`<sup>Required</sup> <a name="ListHealthChecks" id="@cdk_utils/iam.route53.Route53Actions.property.ListHealthChecks"></a>

```typescript
public readonly ListHealthChecks: string;
```

- *Type:* string

[Read] route53:ListHealthChecks.

---

##### `ListHostedZones`<sup>Required</sup> <a name="ListHostedZones" id="@cdk_utils/iam.route53.Route53Actions.property.ListHostedZones"></a>

```typescript
public readonly ListHostedZones: string;
```

- *Type:* string

[List] route53:ListHostedZones.

---

##### `ListHostedZonesByName`<sup>Required</sup> <a name="ListHostedZonesByName" id="@cdk_utils/iam.route53.Route53Actions.property.ListHostedZonesByName"></a>

```typescript
public readonly ListHostedZonesByName: string;
```

- *Type:* string

[List] route53:ListHostedZonesByName.

---

##### `ListHostedZonesByVPC`<sup>Required</sup> <a name="ListHostedZonesByVPC" id="@cdk_utils/iam.route53.Route53Actions.property.ListHostedZonesByVPC"></a>

```typescript
public readonly ListHostedZonesByVPC: string;
```

- *Type:* string

[List] route53:ListHostedZonesByVPC.

---

##### `ListQueryLoggingConfigs`<sup>Required</sup> <a name="ListQueryLoggingConfigs" id="@cdk_utils/iam.route53.Route53Actions.property.ListQueryLoggingConfigs"></a>

```typescript
public readonly ListQueryLoggingConfigs: string;
```

- *Type:* string

[List] route53:ListQueryLoggingConfigs.

---

##### `ListResourceRecordSets`<sup>Required</sup> <a name="ListResourceRecordSets" id="@cdk_utils/iam.route53.Route53Actions.property.ListResourceRecordSets"></a>

```typescript
public readonly ListResourceRecordSets: string;
```

- *Type:* string

[List] route53:ListResourceRecordSets.

---

##### `ListReusableDelegationSets`<sup>Required</sup> <a name="ListReusableDelegationSets" id="@cdk_utils/iam.route53.Route53Actions.property.ListReusableDelegationSets"></a>

```typescript
public readonly ListReusableDelegationSets: string;
```

- *Type:* string

[Read] route53:ListReusableDelegationSets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53.Route53Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] route53:ListTagsForResource.

---

##### `ListTagsForResources`<sup>Required</sup> <a name="ListTagsForResources" id="@cdk_utils/iam.route53.Route53Actions.property.ListTagsForResources"></a>

```typescript
public readonly ListTagsForResources: string;
```

- *Type:* string

[Read] route53:ListTagsForResources.

---

##### `ListTrafficPolicies`<sup>Required</sup> <a name="ListTrafficPolicies" id="@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicies"></a>

```typescript
public readonly ListTrafficPolicies: string;
```

- *Type:* string

[List] route53:ListTrafficPolicies.

---

##### `ListTrafficPolicyInstances`<sup>Required</sup> <a name="ListTrafficPolicyInstances" id="@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyInstances"></a>

```typescript
public readonly ListTrafficPolicyInstances: string;
```

- *Type:* string

[Read] route53:ListTrafficPolicyInstances.

---

##### `ListTrafficPolicyInstancesByHostedZone`<sup>Required</sup> <a name="ListTrafficPolicyInstancesByHostedZone" id="@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyInstancesByHostedZone"></a>

```typescript
public readonly ListTrafficPolicyInstancesByHostedZone: string;
```

- *Type:* string

[List] route53:ListTrafficPolicyInstancesByHostedZone.

---

##### `ListTrafficPolicyInstancesByPolicy`<sup>Required</sup> <a name="ListTrafficPolicyInstancesByPolicy" id="@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyInstancesByPolicy"></a>

```typescript
public readonly ListTrafficPolicyInstancesByPolicy: string;
```

- *Type:* string

[List] route53:ListTrafficPolicyInstancesByPolicy.

---

##### `ListTrafficPolicyVersions`<sup>Required</sup> <a name="ListTrafficPolicyVersions" id="@cdk_utils/iam.route53.Route53Actions.property.ListTrafficPolicyVersions"></a>

```typescript
public readonly ListTrafficPolicyVersions: string;
```

- *Type:* string

[List] route53:ListTrafficPolicyVersions.

---

##### `ListVPCAssociationAuthorizations`<sup>Required</sup> <a name="ListVPCAssociationAuthorizations" id="@cdk_utils/iam.route53.Route53Actions.property.ListVPCAssociationAuthorizations"></a>

```typescript
public readonly ListVPCAssociationAuthorizations: string;
```

- *Type:* string

[List] route53:ListVPCAssociationAuthorizations.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53.Route53Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TestDNSAnswer`<sup>Required</sup> <a name="TestDNSAnswer" id="@cdk_utils/iam.route53.Route53Actions.property.TestDNSAnswer"></a>

```typescript
public readonly TestDNSAnswer: string;
```

- *Type:* string

[Read] route53:TestDNSAnswer.

---

##### `UpdateHealthCheck`<sup>Required</sup> <a name="UpdateHealthCheck" id="@cdk_utils/iam.route53.Route53Actions.property.UpdateHealthCheck"></a>

```typescript
public readonly UpdateHealthCheck: string;
```

- *Type:* string

[Write] route53:UpdateHealthCheck.

---

##### `UpdateHostedZoneComment`<sup>Required</sup> <a name="UpdateHostedZoneComment" id="@cdk_utils/iam.route53.Route53Actions.property.UpdateHostedZoneComment"></a>

```typescript
public readonly UpdateHostedZoneComment: string;
```

- *Type:* string

[Write] route53:UpdateHostedZoneComment.

---

##### `UpdateHostedZoneFeatures`<sup>Required</sup> <a name="UpdateHostedZoneFeatures" id="@cdk_utils/iam.route53.Route53Actions.property.UpdateHostedZoneFeatures"></a>

```typescript
public readonly UpdateHostedZoneFeatures: string;
```

- *Type:* string

[Write] route53:UpdateHostedZoneFeatures.

---

##### `UpdateTrafficPolicyComment`<sup>Required</sup> <a name="UpdateTrafficPolicyComment" id="@cdk_utils/iam.route53.Route53Actions.property.UpdateTrafficPolicyComment"></a>

```typescript
public readonly UpdateTrafficPolicyComment: string;
```

- *Type:* string

[Write] route53:UpdateTrafficPolicyComment.

---

##### `UpdateTrafficPolicyInstance`<sup>Required</sup> <a name="UpdateTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Actions.property.UpdateTrafficPolicyInstance"></a>

```typescript
public readonly UpdateTrafficPolicyInstance: string;
```

- *Type:* string

[Write] route53:UpdateTrafficPolicyInstance.

---

### Route53Conditions <a name="Route53Conditions" id="@cdk_utils/iam.route53.Route53Conditions"></a>

Condition key constants and builders for route53.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53.Route53Conditions.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

new route53.Route53Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsActions">changeResourceRecordSetsActions</a></code> | Generates a condition block for `route53:ChangeResourceRecordSetsActions`. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsNormalizedRecordNames">changeResourceRecordSetsNormalizedRecordNames</a></code> | Generates a condition block for `route53:ChangeResourceRecordSetsNormalizedRecordNames`. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsRecordTypes">changeResourceRecordSetsRecordTypes</a></code> | Generates a condition block for `route53:ChangeResourceRecordSetsRecordTypes`. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.vpCs">vpCs</a></code> | Generates a condition block for `route53:VPCs`. |

---

##### `changeResourceRecordSetsActions` <a name="changeResourceRecordSetsActions" id="@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsActions"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Conditions.changeResourceRecordSetsActions(values: string[])
```

Generates a condition block for `route53:ChangeResourceRecordSetsActions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsActions.parameter.values"></a>

- *Type:* string[]

---

##### `changeResourceRecordSetsNormalizedRecordNames` <a name="changeResourceRecordSetsNormalizedRecordNames" id="@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsNormalizedRecordNames"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Conditions.changeResourceRecordSetsNormalizedRecordNames(values: string[])
```

Generates a condition block for `route53:ChangeResourceRecordSetsNormalizedRecordNames`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsNormalizedRecordNames.parameter.values"></a>

- *Type:* string[]

---

##### `changeResourceRecordSetsRecordTypes` <a name="changeResourceRecordSetsRecordTypes" id="@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsRecordTypes"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Conditions.changeResourceRecordSetsRecordTypes(values: string[])
```

Generates a condition block for `route53:ChangeResourceRecordSetsRecordTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53.Route53Conditions.changeResourceRecordSetsRecordTypes.parameter.values"></a>

- *Type:* string[]

---

##### `vpCs` <a name="vpCs" id="@cdk_utils/iam.route53.Route53Conditions.vpCs"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Conditions.vpCs(value: string)
```

Generates a condition block for `route53:VPCs`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53.Route53Conditions.vpCs.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.AssociateVPCWithHostedZoneConditionKeys">AssociateVPCWithHostedZoneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateVPCWithHostedZone action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.CHANGE_RESOURCE_RECORD_SETS_ACTIONS">CHANGE_RESOURCE_RECORD_SETS_ACTIONS</a></code> | <code>string</code> | Condition key: route53:ChangeResourceRecordSetsActions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES">CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES</a></code> | <code>string</code> | Condition key: route53:ChangeResourceRecordSetsNormalizedRecordNames (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES">CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES</a></code> | <code>string</code> | Condition key: route53:ChangeResourceRecordSetsRecordTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.ChangeResourceRecordSetsConditionKeys">ChangeResourceRecordSetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ChangeResourceRecordSets action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.CreateHostedZoneConditionKeys">CreateHostedZoneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHostedZone action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.CreateVPCAssociationAuthorizationConditionKeys">CreateVPCAssociationAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVPCAssociationAuthorization action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.DeleteVPCAssociationAuthorizationConditionKeys">DeleteVPCAssociationAuthorizationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteVPCAssociationAuthorization action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.DisassociateVPCFromHostedZoneConditionKeys">DisassociateVPCFromHostedZoneConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateVPCFromHostedZone action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.ListHostedZonesByVPCConditionKeys">ListHostedZonesByVPCConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListHostedZonesByVPC action. |
| <code><a href="#@cdk_utils/iam.route53.Route53Conditions.property.VP_CS">VP_CS</a></code> | <code>string</code> | Condition key: route53:VPCs (String). |

---

##### `AssociateVPCWithHostedZoneConditionKeys`<sup>Required</sup> <a name="AssociateVPCWithHostedZoneConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.AssociateVPCWithHostedZoneConditionKeys"></a>

```typescript
public readonly AssociateVPCWithHostedZoneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateVPCWithHostedZone action.

---

##### `CHANGE_RESOURCE_RECORD_SETS_ACTIONS`<sup>Required</sup> <a name="CHANGE_RESOURCE_RECORD_SETS_ACTIONS" id="@cdk_utils/iam.route53.Route53Conditions.property.CHANGE_RESOURCE_RECORD_SETS_ACTIONS"></a>

```typescript
public readonly CHANGE_RESOURCE_RECORD_SETS_ACTIONS: string;
```

- *Type:* string

Condition key: route53:ChangeResourceRecordSetsActions (ArrayOfString).

---

##### `CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES`<sup>Required</sup> <a name="CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES" id="@cdk_utils/iam.route53.Route53Conditions.property.CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES"></a>

```typescript
public readonly CHANGE_RESOURCE_RECORD_SETS_NORMALIZED_RECORD_NAMES: string;
```

- *Type:* string

Condition key: route53:ChangeResourceRecordSetsNormalizedRecordNames (ArrayOfString).

---

##### `CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES`<sup>Required</sup> <a name="CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES" id="@cdk_utils/iam.route53.Route53Conditions.property.CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES"></a>

```typescript
public readonly CHANGE_RESOURCE_RECORD_SETS_RECORD_TYPES: string;
```

- *Type:* string

Condition key: route53:ChangeResourceRecordSetsRecordTypes (ArrayOfString).

---

##### `ChangeResourceRecordSetsConditionKeys`<sup>Required</sup> <a name="ChangeResourceRecordSetsConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.ChangeResourceRecordSetsConditionKeys"></a>

```typescript
public readonly ChangeResourceRecordSetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ChangeResourceRecordSets action.

---

##### `CreateHostedZoneConditionKeys`<sup>Required</sup> <a name="CreateHostedZoneConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.CreateHostedZoneConditionKeys"></a>

```typescript
public readonly CreateHostedZoneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHostedZone action.

---

##### `CreateVPCAssociationAuthorizationConditionKeys`<sup>Required</sup> <a name="CreateVPCAssociationAuthorizationConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.CreateVPCAssociationAuthorizationConditionKeys"></a>

```typescript
public readonly CreateVPCAssociationAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVPCAssociationAuthorization action.

---

##### `DeleteVPCAssociationAuthorizationConditionKeys`<sup>Required</sup> <a name="DeleteVPCAssociationAuthorizationConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.DeleteVPCAssociationAuthorizationConditionKeys"></a>

```typescript
public readonly DeleteVPCAssociationAuthorizationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteVPCAssociationAuthorization action.

---

##### `DisassociateVPCFromHostedZoneConditionKeys`<sup>Required</sup> <a name="DisassociateVPCFromHostedZoneConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.DisassociateVPCFromHostedZoneConditionKeys"></a>

```typescript
public readonly DisassociateVPCFromHostedZoneConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateVPCFromHostedZone action.

---

##### `ListHostedZonesByVPCConditionKeys`<sup>Required</sup> <a name="ListHostedZonesByVPCConditionKeys" id="@cdk_utils/iam.route53.Route53Conditions.property.ListHostedZonesByVPCConditionKeys"></a>

```typescript
public readonly ListHostedZonesByVPCConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListHostedZonesByVPC action.

---

##### `VP_CS`<sup>Required</sup> <a name="VP_CS" id="@cdk_utils/iam.route53.Route53Conditions.property.VP_CS"></a>

```typescript
public readonly VP_CS: string;
```

- *Type:* string

Condition key: route53:VPCs (String).

---

### Route53Operations <a name="Route53Operations" id="@cdk_utils/iam.route53.Route53Operations"></a>

API operation to required IAM actions mapping for route53.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53.Route53Operations.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

new route53.Route53Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ActivateKeySigningKey">ActivateKeySigningKey</a></code> | <code>string[]</code> | IAM actions required for the ActivateKeySigningKey API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.AssociateVPCWithHostedZone">AssociateVPCWithHostedZone</a></code> | <code>string[]</code> | IAM actions required for the AssociateVPCWithHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ChangeCidrCollection">ChangeCidrCollection</a></code> | <code>string[]</code> | IAM actions required for the ChangeCidrCollection API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ChangeResourceRecordSets">ChangeResourceRecordSets</a></code> | <code>string[]</code> | IAM actions required for the ChangeResourceRecordSets API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ChangeTagsForResource">ChangeTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ChangeTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateCidrCollection">CreateCidrCollection</a></code> | <code>string[]</code> | IAM actions required for the CreateCidrCollection API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateHealthCheck">CreateHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the CreateHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateHostedZone">CreateHostedZone</a></code> | <code>string[]</code> | IAM actions required for the CreateHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateKeySigningKey">CreateKeySigningKey</a></code> | <code>string[]</code> | IAM actions required for the CreateKeySigningKey API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateQueryLoggingConfig">CreateQueryLoggingConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateQueryLoggingConfig API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateReusableDelegationSet">CreateReusableDelegationSet</a></code> | <code>string[]</code> | IAM actions required for the CreateReusableDelegationSet API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateTrafficPolicy">CreateTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateTrafficPolicyInstance">CreateTrafficPolicyInstance</a></code> | <code>string[]</code> | IAM actions required for the CreateTrafficPolicyInstance API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateTrafficPolicyVersion">CreateTrafficPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateTrafficPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.CreateVPCAssociationAuthorization">CreateVPCAssociationAuthorization</a></code> | <code>string[]</code> | IAM actions required for the CreateVPCAssociationAuthorization API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeactivateKeySigningKey">DeactivateKeySigningKey</a></code> | <code>string[]</code> | IAM actions required for the DeactivateKeySigningKey API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteCidrCollection">DeleteCidrCollection</a></code> | <code>string[]</code> | IAM actions required for the DeleteCidrCollection API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteHealthCheck">DeleteHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the DeleteHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteHostedZone">DeleteHostedZone</a></code> | <code>string[]</code> | IAM actions required for the DeleteHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteKeySigningKey">DeleteKeySigningKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteKeySigningKey API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteQueryLoggingConfig">DeleteQueryLoggingConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteQueryLoggingConfig API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteReusableDelegationSet">DeleteReusableDelegationSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteReusableDelegationSet API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteTrafficPolicy">DeleteTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteTrafficPolicyInstance">DeleteTrafficPolicyInstance</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrafficPolicyInstance API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DeleteVPCAssociationAuthorization">DeleteVPCAssociationAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DeleteVPCAssociationAuthorization API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DisableHostedZoneDNSSEC">DisableHostedZoneDNSSEC</a></code> | <code>string[]</code> | IAM actions required for the DisableHostedZoneDNSSEC API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.DisassociateVPCFromHostedZone">DisassociateVPCFromHostedZone</a></code> | <code>string[]</code> | IAM actions required for the DisassociateVPCFromHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.EnableHostedZoneDNSSEC">EnableHostedZoneDNSSEC</a></code> | <code>string[]</code> | IAM actions required for the EnableHostedZoneDNSSEC API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListCidrBlocks">ListCidrBlocks</a></code> | <code>string[]</code> | IAM actions required for the ListCidrBlocks API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListCidrCollections">ListCidrCollections</a></code> | <code>string[]</code> | IAM actions required for the ListCidrCollections API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListCidrLocations">ListCidrLocations</a></code> | <code>string[]</code> | IAM actions required for the ListCidrLocations API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListGeoLocations">ListGeoLocations</a></code> | <code>string[]</code> | IAM actions required for the ListGeoLocations API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListHealthChecks">ListHealthChecks</a></code> | <code>string[]</code> | IAM actions required for the ListHealthChecks API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListHostedZones">ListHostedZones</a></code> | <code>string[]</code> | IAM actions required for the ListHostedZones API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListHostedZonesByName">ListHostedZonesByName</a></code> | <code>string[]</code> | IAM actions required for the ListHostedZonesByName API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListHostedZonesByVPC">ListHostedZonesByVPC</a></code> | <code>string[]</code> | IAM actions required for the ListHostedZonesByVPC API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListQueryLoggingConfigs">ListQueryLoggingConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListQueryLoggingConfigs API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListResourceRecordSets">ListResourceRecordSets</a></code> | <code>string[]</code> | IAM actions required for the ListResourceRecordSets API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListReusableDelegationSets">ListReusableDelegationSets</a></code> | <code>string[]</code> | IAM actions required for the ListReusableDelegationSets API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTagsForResources">ListTagsForResources</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResources API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicies">ListTrafficPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficPolicies API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyInstances">ListTrafficPolicyInstances</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficPolicyInstances API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyInstancesByHostedZone">ListTrafficPolicyInstancesByHostedZone</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficPolicyInstancesByHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyInstancesByPolicy">ListTrafficPolicyInstancesByPolicy</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficPolicyInstancesByPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyVersions">ListTrafficPolicyVersions</a></code> | <code>string[]</code> | IAM actions required for the ListTrafficPolicyVersions API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.ListVPCAssociationAuthorizations">ListVPCAssociationAuthorizations</a></code> | <code>string[]</code> | IAM actions required for the ListVPCAssociationAuthorizations API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetAccountLimit">opGetAccountLimit</a></code> | <code>string[]</code> | IAM actions required for the GetAccountLimit API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetChange">opGetChange</a></code> | <code>string[]</code> | IAM actions required for the GetChange API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetCheckerIpRanges">opGetCheckerIpRanges</a></code> | <code>string[]</code> | IAM actions required for the GetCheckerIpRanges API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetDNSSEC">opGetDNSSEC</a></code> | <code>string[]</code> | IAM actions required for the GetDNSSEC API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetGeoLocation">opGetGeoLocation</a></code> | <code>string[]</code> | IAM actions required for the GetGeoLocation API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheck">opGetHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the GetHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheckCount">opGetHealthCheckCount</a></code> | <code>string[]</code> | IAM actions required for the GetHealthCheckCount API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheckLastFailureReason">opGetHealthCheckLastFailureReason</a></code> | <code>string[]</code> | IAM actions required for the GetHealthCheckLastFailureReason API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheckStatus">opGetHealthCheckStatus</a></code> | <code>string[]</code> | IAM actions required for the GetHealthCheckStatus API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHostedZone">opGetHostedZone</a></code> | <code>string[]</code> | IAM actions required for the GetHostedZone API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHostedZoneCount">opGetHostedZoneCount</a></code> | <code>string[]</code> | IAM actions required for the GetHostedZoneCount API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetHostedZoneLimit">opGetHostedZoneLimit</a></code> | <code>string[]</code> | IAM actions required for the GetHostedZoneLimit API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetQueryLoggingConfig">opGetQueryLoggingConfig</a></code> | <code>string[]</code> | IAM actions required for the GetQueryLoggingConfig API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetReusableDelegationSet">opGetReusableDelegationSet</a></code> | <code>string[]</code> | IAM actions required for the GetReusableDelegationSet API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetReusableDelegationSetLimit">opGetReusableDelegationSetLimit</a></code> | <code>string[]</code> | IAM actions required for the GetReusableDelegationSetLimit API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetTrafficPolicy">opGetTrafficPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetTrafficPolicy API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetTrafficPolicyInstance">opGetTrafficPolicyInstance</a></code> | <code>string[]</code> | IAM actions required for the GetTrafficPolicyInstance API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.opGetTrafficPolicyInstanceCount">opGetTrafficPolicyInstanceCount</a></code> | <code>string[]</code> | IAM actions required for the GetTrafficPolicyInstanceCount API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.TestDNSAnswer">TestDNSAnswer</a></code> | <code>string[]</code> | IAM actions required for the TestDNSAnswer API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.UpdateHealthCheck">UpdateHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the UpdateHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.UpdateHostedZoneComment">UpdateHostedZoneComment</a></code> | <code>string[]</code> | IAM actions required for the UpdateHostedZoneComment API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.UpdateHostedZoneFeatures">UpdateHostedZoneFeatures</a></code> | <code>string[]</code> | IAM actions required for the UpdateHostedZoneFeatures API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.UpdateTrafficPolicyComment">UpdateTrafficPolicyComment</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrafficPolicyComment API call. |
| <code><a href="#@cdk_utils/iam.route53.Route53Operations.property.UpdateTrafficPolicyInstance">UpdateTrafficPolicyInstance</a></code> | <code>string[]</code> | IAM actions required for the UpdateTrafficPolicyInstance API call. |

---

##### `ActivateKeySigningKey`<sup>Required</sup> <a name="ActivateKeySigningKey" id="@cdk_utils/iam.route53.Route53Operations.property.ActivateKeySigningKey"></a>

```typescript
public readonly ActivateKeySigningKey: string[];
```

- *Type:* string[]

IAM actions required for the ActivateKeySigningKey API call.

---

##### `AssociateVPCWithHostedZone`<sup>Required</sup> <a name="AssociateVPCWithHostedZone" id="@cdk_utils/iam.route53.Route53Operations.property.AssociateVPCWithHostedZone"></a>

```typescript
public readonly AssociateVPCWithHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the AssociateVPCWithHostedZone API call.

---

##### `ChangeCidrCollection`<sup>Required</sup> <a name="ChangeCidrCollection" id="@cdk_utils/iam.route53.Route53Operations.property.ChangeCidrCollection"></a>

```typescript
public readonly ChangeCidrCollection: string[];
```

- *Type:* string[]

IAM actions required for the ChangeCidrCollection API call.

---

##### `ChangeResourceRecordSets`<sup>Required</sup> <a name="ChangeResourceRecordSets" id="@cdk_utils/iam.route53.Route53Operations.property.ChangeResourceRecordSets"></a>

```typescript
public readonly ChangeResourceRecordSets: string[];
```

- *Type:* string[]

IAM actions required for the ChangeResourceRecordSets API call.

---

##### `ChangeTagsForResource`<sup>Required</sup> <a name="ChangeTagsForResource" id="@cdk_utils/iam.route53.Route53Operations.property.ChangeTagsForResource"></a>

```typescript
public readonly ChangeTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ChangeTagsForResource API call.

---

##### `CreateCidrCollection`<sup>Required</sup> <a name="CreateCidrCollection" id="@cdk_utils/iam.route53.Route53Operations.property.CreateCidrCollection"></a>

```typescript
public readonly CreateCidrCollection: string[];
```

- *Type:* string[]

IAM actions required for the CreateCidrCollection API call.

---

##### `CreateHealthCheck`<sup>Required</sup> <a name="CreateHealthCheck" id="@cdk_utils/iam.route53.Route53Operations.property.CreateHealthCheck"></a>

```typescript
public readonly CreateHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the CreateHealthCheck API call.

---

##### `CreateHostedZone`<sup>Required</sup> <a name="CreateHostedZone" id="@cdk_utils/iam.route53.Route53Operations.property.CreateHostedZone"></a>

```typescript
public readonly CreateHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the CreateHostedZone API call.

---

##### `CreateKeySigningKey`<sup>Required</sup> <a name="CreateKeySigningKey" id="@cdk_utils/iam.route53.Route53Operations.property.CreateKeySigningKey"></a>

```typescript
public readonly CreateKeySigningKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateKeySigningKey API call.

---

##### `CreateQueryLoggingConfig`<sup>Required</sup> <a name="CreateQueryLoggingConfig" id="@cdk_utils/iam.route53.Route53Operations.property.CreateQueryLoggingConfig"></a>

```typescript
public readonly CreateQueryLoggingConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateQueryLoggingConfig API call.

---

##### `CreateReusableDelegationSet`<sup>Required</sup> <a name="CreateReusableDelegationSet" id="@cdk_utils/iam.route53.Route53Operations.property.CreateReusableDelegationSet"></a>

```typescript
public readonly CreateReusableDelegationSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateReusableDelegationSet API call.

---

##### `CreateTrafficPolicy`<sup>Required</sup> <a name="CreateTrafficPolicy" id="@cdk_utils/iam.route53.Route53Operations.property.CreateTrafficPolicy"></a>

```typescript
public readonly CreateTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrafficPolicy API call.

---

##### `CreateTrafficPolicyInstance`<sup>Required</sup> <a name="CreateTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Operations.property.CreateTrafficPolicyInstance"></a>

```typescript
public readonly CreateTrafficPolicyInstance: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrafficPolicyInstance API call.

---

##### `CreateTrafficPolicyVersion`<sup>Required</sup> <a name="CreateTrafficPolicyVersion" id="@cdk_utils/iam.route53.Route53Operations.property.CreateTrafficPolicyVersion"></a>

```typescript
public readonly CreateTrafficPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrafficPolicyVersion API call.

---

##### `CreateVPCAssociationAuthorization`<sup>Required</sup> <a name="CreateVPCAssociationAuthorization" id="@cdk_utils/iam.route53.Route53Operations.property.CreateVPCAssociationAuthorization"></a>

```typescript
public readonly CreateVPCAssociationAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the CreateVPCAssociationAuthorization API call.

---

##### `DeactivateKeySigningKey`<sup>Required</sup> <a name="DeactivateKeySigningKey" id="@cdk_utils/iam.route53.Route53Operations.property.DeactivateKeySigningKey"></a>

```typescript
public readonly DeactivateKeySigningKey: string[];
```

- *Type:* string[]

IAM actions required for the DeactivateKeySigningKey API call.

---

##### `DeleteCidrCollection`<sup>Required</sup> <a name="DeleteCidrCollection" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteCidrCollection"></a>

```typescript
public readonly DeleteCidrCollection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCidrCollection API call.

---

##### `DeleteHealthCheck`<sup>Required</sup> <a name="DeleteHealthCheck" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteHealthCheck"></a>

```typescript
public readonly DeleteHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHealthCheck API call.

---

##### `DeleteHostedZone`<sup>Required</sup> <a name="DeleteHostedZone" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteHostedZone"></a>

```typescript
public readonly DeleteHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the DeleteHostedZone API call.

---

##### `DeleteKeySigningKey`<sup>Required</sup> <a name="DeleteKeySigningKey" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteKeySigningKey"></a>

```typescript
public readonly DeleteKeySigningKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteKeySigningKey API call.

---

##### `DeleteQueryLoggingConfig`<sup>Required</sup> <a name="DeleteQueryLoggingConfig" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteQueryLoggingConfig"></a>

```typescript
public readonly DeleteQueryLoggingConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteQueryLoggingConfig API call.

---

##### `DeleteReusableDelegationSet`<sup>Required</sup> <a name="DeleteReusableDelegationSet" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteReusableDelegationSet"></a>

```typescript
public readonly DeleteReusableDelegationSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReusableDelegationSet API call.

---

##### `DeleteTrafficPolicy`<sup>Required</sup> <a name="DeleteTrafficPolicy" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteTrafficPolicy"></a>

```typescript
public readonly DeleteTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrafficPolicy API call.

---

##### `DeleteTrafficPolicyInstance`<sup>Required</sup> <a name="DeleteTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteTrafficPolicyInstance"></a>

```typescript
public readonly DeleteTrafficPolicyInstance: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrafficPolicyInstance API call.

---

##### `DeleteVPCAssociationAuthorization`<sup>Required</sup> <a name="DeleteVPCAssociationAuthorization" id="@cdk_utils/iam.route53.Route53Operations.property.DeleteVPCAssociationAuthorization"></a>

```typescript
public readonly DeleteVPCAssociationAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVPCAssociationAuthorization API call.

---

##### `DisableHostedZoneDNSSEC`<sup>Required</sup> <a name="DisableHostedZoneDNSSEC" id="@cdk_utils/iam.route53.Route53Operations.property.DisableHostedZoneDNSSEC"></a>

```typescript
public readonly DisableHostedZoneDNSSEC: string[];
```

- *Type:* string[]

IAM actions required for the DisableHostedZoneDNSSEC API call.

---

##### `DisassociateVPCFromHostedZone`<sup>Required</sup> <a name="DisassociateVPCFromHostedZone" id="@cdk_utils/iam.route53.Route53Operations.property.DisassociateVPCFromHostedZone"></a>

```typescript
public readonly DisassociateVPCFromHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateVPCFromHostedZone API call.

---

##### `EnableHostedZoneDNSSEC`<sup>Required</sup> <a name="EnableHostedZoneDNSSEC" id="@cdk_utils/iam.route53.Route53Operations.property.EnableHostedZoneDNSSEC"></a>

```typescript
public readonly EnableHostedZoneDNSSEC: string[];
```

- *Type:* string[]

IAM actions required for the EnableHostedZoneDNSSEC API call.

---

##### `ListCidrBlocks`<sup>Required</sup> <a name="ListCidrBlocks" id="@cdk_utils/iam.route53.Route53Operations.property.ListCidrBlocks"></a>

```typescript
public readonly ListCidrBlocks: string[];
```

- *Type:* string[]

IAM actions required for the ListCidrBlocks API call.

---

##### `ListCidrCollections`<sup>Required</sup> <a name="ListCidrCollections" id="@cdk_utils/iam.route53.Route53Operations.property.ListCidrCollections"></a>

```typescript
public readonly ListCidrCollections: string[];
```

- *Type:* string[]

IAM actions required for the ListCidrCollections API call.

---

##### `ListCidrLocations`<sup>Required</sup> <a name="ListCidrLocations" id="@cdk_utils/iam.route53.Route53Operations.property.ListCidrLocations"></a>

```typescript
public readonly ListCidrLocations: string[];
```

- *Type:* string[]

IAM actions required for the ListCidrLocations API call.

---

##### `ListGeoLocations`<sup>Required</sup> <a name="ListGeoLocations" id="@cdk_utils/iam.route53.Route53Operations.property.ListGeoLocations"></a>

```typescript
public readonly ListGeoLocations: string[];
```

- *Type:* string[]

IAM actions required for the ListGeoLocations API call.

---

##### `ListHealthChecks`<sup>Required</sup> <a name="ListHealthChecks" id="@cdk_utils/iam.route53.Route53Operations.property.ListHealthChecks"></a>

```typescript
public readonly ListHealthChecks: string[];
```

- *Type:* string[]

IAM actions required for the ListHealthChecks API call.

---

##### `ListHostedZones`<sup>Required</sup> <a name="ListHostedZones" id="@cdk_utils/iam.route53.Route53Operations.property.ListHostedZones"></a>

```typescript
public readonly ListHostedZones: string[];
```

- *Type:* string[]

IAM actions required for the ListHostedZones API call.

---

##### `ListHostedZonesByName`<sup>Required</sup> <a name="ListHostedZonesByName" id="@cdk_utils/iam.route53.Route53Operations.property.ListHostedZonesByName"></a>

```typescript
public readonly ListHostedZonesByName: string[];
```

- *Type:* string[]

IAM actions required for the ListHostedZonesByName API call.

---

##### `ListHostedZonesByVPC`<sup>Required</sup> <a name="ListHostedZonesByVPC" id="@cdk_utils/iam.route53.Route53Operations.property.ListHostedZonesByVPC"></a>

```typescript
public readonly ListHostedZonesByVPC: string[];
```

- *Type:* string[]

IAM actions required for the ListHostedZonesByVPC API call.

---

##### `ListQueryLoggingConfigs`<sup>Required</sup> <a name="ListQueryLoggingConfigs" id="@cdk_utils/iam.route53.Route53Operations.property.ListQueryLoggingConfigs"></a>

```typescript
public readonly ListQueryLoggingConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListQueryLoggingConfigs API call.

---

##### `ListResourceRecordSets`<sup>Required</sup> <a name="ListResourceRecordSets" id="@cdk_utils/iam.route53.Route53Operations.property.ListResourceRecordSets"></a>

```typescript
public readonly ListResourceRecordSets: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceRecordSets API call.

---

##### `ListReusableDelegationSets`<sup>Required</sup> <a name="ListReusableDelegationSets" id="@cdk_utils/iam.route53.Route53Operations.property.ListReusableDelegationSets"></a>

```typescript
public readonly ListReusableDelegationSets: string[];
```

- *Type:* string[]

IAM actions required for the ListReusableDelegationSets API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53.Route53Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTagsForResources`<sup>Required</sup> <a name="ListTagsForResources" id="@cdk_utils/iam.route53.Route53Operations.property.ListTagsForResources"></a>

```typescript
public readonly ListTagsForResources: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResources API call.

---

##### `ListTrafficPolicies`<sup>Required</sup> <a name="ListTrafficPolicies" id="@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicies"></a>

```typescript
public readonly ListTrafficPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficPolicies API call.

---

##### `ListTrafficPolicyInstances`<sup>Required</sup> <a name="ListTrafficPolicyInstances" id="@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyInstances"></a>

```typescript
public readonly ListTrafficPolicyInstances: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficPolicyInstances API call.

---

##### `ListTrafficPolicyInstancesByHostedZone`<sup>Required</sup> <a name="ListTrafficPolicyInstancesByHostedZone" id="@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyInstancesByHostedZone"></a>

```typescript
public readonly ListTrafficPolicyInstancesByHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficPolicyInstancesByHostedZone API call.

---

##### `ListTrafficPolicyInstancesByPolicy`<sup>Required</sup> <a name="ListTrafficPolicyInstancesByPolicy" id="@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyInstancesByPolicy"></a>

```typescript
public readonly ListTrafficPolicyInstancesByPolicy: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficPolicyInstancesByPolicy API call.

---

##### `ListTrafficPolicyVersions`<sup>Required</sup> <a name="ListTrafficPolicyVersions" id="@cdk_utils/iam.route53.Route53Operations.property.ListTrafficPolicyVersions"></a>

```typescript
public readonly ListTrafficPolicyVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListTrafficPolicyVersions API call.

---

##### `ListVPCAssociationAuthorizations`<sup>Required</sup> <a name="ListVPCAssociationAuthorizations" id="@cdk_utils/iam.route53.Route53Operations.property.ListVPCAssociationAuthorizations"></a>

```typescript
public readonly ListVPCAssociationAuthorizations: string[];
```

- *Type:* string[]

IAM actions required for the ListVPCAssociationAuthorizations API call.

---

##### `opGetAccountLimit`<sup>Required</sup> <a name="opGetAccountLimit" id="@cdk_utils/iam.route53.Route53Operations.property.opGetAccountLimit"></a>

```typescript
public readonly opGetAccountLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountLimit API call.

---

##### `opGetChange`<sup>Required</sup> <a name="opGetChange" id="@cdk_utils/iam.route53.Route53Operations.property.opGetChange"></a>

```typescript
public readonly opGetChange: string[];
```

- *Type:* string[]

IAM actions required for the GetChange API call.

---

##### `opGetCheckerIpRanges`<sup>Required</sup> <a name="opGetCheckerIpRanges" id="@cdk_utils/iam.route53.Route53Operations.property.opGetCheckerIpRanges"></a>

```typescript
public readonly opGetCheckerIpRanges: string[];
```

- *Type:* string[]

IAM actions required for the GetCheckerIpRanges API call.

---

##### `opGetDNSSEC`<sup>Required</sup> <a name="opGetDNSSEC" id="@cdk_utils/iam.route53.Route53Operations.property.opGetDNSSEC"></a>

```typescript
public readonly opGetDNSSEC: string[];
```

- *Type:* string[]

IAM actions required for the GetDNSSEC API call.

---

##### `opGetGeoLocation`<sup>Required</sup> <a name="opGetGeoLocation" id="@cdk_utils/iam.route53.Route53Operations.property.opGetGeoLocation"></a>

```typescript
public readonly opGetGeoLocation: string[];
```

- *Type:* string[]

IAM actions required for the GetGeoLocation API call.

---

##### `opGetHealthCheck`<sup>Required</sup> <a name="opGetHealthCheck" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheck"></a>

```typescript
public readonly opGetHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the GetHealthCheck API call.

---

##### `opGetHealthCheckCount`<sup>Required</sup> <a name="opGetHealthCheckCount" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheckCount"></a>

```typescript
public readonly opGetHealthCheckCount: string[];
```

- *Type:* string[]

IAM actions required for the GetHealthCheckCount API call.

---

##### `opGetHealthCheckLastFailureReason`<sup>Required</sup> <a name="opGetHealthCheckLastFailureReason" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheckLastFailureReason"></a>

```typescript
public readonly opGetHealthCheckLastFailureReason: string[];
```

- *Type:* string[]

IAM actions required for the GetHealthCheckLastFailureReason API call.

---

##### `opGetHealthCheckStatus`<sup>Required</sup> <a name="opGetHealthCheckStatus" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHealthCheckStatus"></a>

```typescript
public readonly opGetHealthCheckStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetHealthCheckStatus API call.

---

##### `opGetHostedZone`<sup>Required</sup> <a name="opGetHostedZone" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHostedZone"></a>

```typescript
public readonly opGetHostedZone: string[];
```

- *Type:* string[]

IAM actions required for the GetHostedZone API call.

---

##### `opGetHostedZoneCount`<sup>Required</sup> <a name="opGetHostedZoneCount" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHostedZoneCount"></a>

```typescript
public readonly opGetHostedZoneCount: string[];
```

- *Type:* string[]

IAM actions required for the GetHostedZoneCount API call.

---

##### `opGetHostedZoneLimit`<sup>Required</sup> <a name="opGetHostedZoneLimit" id="@cdk_utils/iam.route53.Route53Operations.property.opGetHostedZoneLimit"></a>

```typescript
public readonly opGetHostedZoneLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetHostedZoneLimit API call.

---

##### `opGetQueryLoggingConfig`<sup>Required</sup> <a name="opGetQueryLoggingConfig" id="@cdk_utils/iam.route53.Route53Operations.property.opGetQueryLoggingConfig"></a>

```typescript
public readonly opGetQueryLoggingConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryLoggingConfig API call.

---

##### `opGetReusableDelegationSet`<sup>Required</sup> <a name="opGetReusableDelegationSet" id="@cdk_utils/iam.route53.Route53Operations.property.opGetReusableDelegationSet"></a>

```typescript
public readonly opGetReusableDelegationSet: string[];
```

- *Type:* string[]

IAM actions required for the GetReusableDelegationSet API call.

---

##### `opGetReusableDelegationSetLimit`<sup>Required</sup> <a name="opGetReusableDelegationSetLimit" id="@cdk_utils/iam.route53.Route53Operations.property.opGetReusableDelegationSetLimit"></a>

```typescript
public readonly opGetReusableDelegationSetLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetReusableDelegationSetLimit API call.

---

##### `opGetTrafficPolicy`<sup>Required</sup> <a name="opGetTrafficPolicy" id="@cdk_utils/iam.route53.Route53Operations.property.opGetTrafficPolicy"></a>

```typescript
public readonly opGetTrafficPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetTrafficPolicy API call.

---

##### `opGetTrafficPolicyInstance`<sup>Required</sup> <a name="opGetTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Operations.property.opGetTrafficPolicyInstance"></a>

```typescript
public readonly opGetTrafficPolicyInstance: string[];
```

- *Type:* string[]

IAM actions required for the GetTrafficPolicyInstance API call.

---

##### `opGetTrafficPolicyInstanceCount`<sup>Required</sup> <a name="opGetTrafficPolicyInstanceCount" id="@cdk_utils/iam.route53.Route53Operations.property.opGetTrafficPolicyInstanceCount"></a>

```typescript
public readonly opGetTrafficPolicyInstanceCount: string[];
```

- *Type:* string[]

IAM actions required for the GetTrafficPolicyInstanceCount API call.

---

##### `TestDNSAnswer`<sup>Required</sup> <a name="TestDNSAnswer" id="@cdk_utils/iam.route53.Route53Operations.property.TestDNSAnswer"></a>

```typescript
public readonly TestDNSAnswer: string[];
```

- *Type:* string[]

IAM actions required for the TestDNSAnswer API call.

---

##### `UpdateHealthCheck`<sup>Required</sup> <a name="UpdateHealthCheck" id="@cdk_utils/iam.route53.Route53Operations.property.UpdateHealthCheck"></a>

```typescript
public readonly UpdateHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHealthCheck API call.

---

##### `UpdateHostedZoneComment`<sup>Required</sup> <a name="UpdateHostedZoneComment" id="@cdk_utils/iam.route53.Route53Operations.property.UpdateHostedZoneComment"></a>

```typescript
public readonly UpdateHostedZoneComment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHostedZoneComment API call.

---

##### `UpdateHostedZoneFeatures`<sup>Required</sup> <a name="UpdateHostedZoneFeatures" id="@cdk_utils/iam.route53.Route53Operations.property.UpdateHostedZoneFeatures"></a>

```typescript
public readonly UpdateHostedZoneFeatures: string[];
```

- *Type:* string[]

IAM actions required for the UpdateHostedZoneFeatures API call.

---

##### `UpdateTrafficPolicyComment`<sup>Required</sup> <a name="UpdateTrafficPolicyComment" id="@cdk_utils/iam.route53.Route53Operations.property.UpdateTrafficPolicyComment"></a>

```typescript
public readonly UpdateTrafficPolicyComment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrafficPolicyComment API call.

---

##### `UpdateTrafficPolicyInstance`<sup>Required</sup> <a name="UpdateTrafficPolicyInstance" id="@cdk_utils/iam.route53.Route53Operations.property.UpdateTrafficPolicyInstance"></a>

```typescript
public readonly UpdateTrafficPolicyInstance: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTrafficPolicyInstance API call.

---

### Route53Resources <a name="Route53Resources" id="@cdk_utils/iam.route53.Route53Resources"></a>

ARN builders, validators, and parsers for route53 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53.Route53Resources.Initializer"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

new route53.Route53Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.change">change</a></code> | Builds an ARN for the change resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.cidrcollection">cidrcollection</a></code> | Builds an ARN for the cidrcollection resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.delegationset">delegationset</a></code> | Builds an ARN for the delegationset resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.healthcheck">healthcheck</a></code> | Builds an ARN for the healthcheck resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.hostedzone">hostedzone</a></code> | Builds an ARN for the hostedzone resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidChangeArn">isValidChangeArn</a></code> | Validates whether a string is a valid ARN for the change resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidCidrcollectionArn">isValidCidrcollectionArn</a></code> | Validates whether a string is a valid ARN for the cidrcollection resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidDelegationsetArn">isValidDelegationsetArn</a></code> | Validates whether a string is a valid ARN for the delegationset resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidHealthcheckArn">isValidHealthcheckArn</a></code> | Validates whether a string is a valid ARN for the healthcheck resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidHostedzoneArn">isValidHostedzoneArn</a></code> | Validates whether a string is a valid ARN for the hostedzone resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidQueryloggingconfigArn">isValidQueryloggingconfigArn</a></code> | Validates whether a string is a valid ARN for the queryloggingconfig resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidTrafficpolicyArn">isValidTrafficpolicyArn</a></code> | Validates whether a string is a valid ARN for the trafficpolicy resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidTrafficpolicyinstanceArn">isValidTrafficpolicyinstanceArn</a></code> | Validates whether a string is a valid ARN for the trafficpolicyinstance resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.isValidVPCArn">isValidVPCArn</a></code> | Validates whether a string is a valid ARN for the vpc resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseChangeArn">parseChangeArn</a></code> | Parses a change ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseCidrcollectionArn">parseCidrcollectionArn</a></code> | Parses a cidrcollection ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseDelegationsetArn">parseDelegationsetArn</a></code> | Parses a delegationset ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseHealthcheckArn">parseHealthcheckArn</a></code> | Parses a healthcheck ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseHostedzoneArn">parseHostedzoneArn</a></code> | Parses a hostedzone ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseQueryloggingconfigArn">parseQueryloggingconfigArn</a></code> | Parses a queryloggingconfig ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseTrafficpolicyArn">parseTrafficpolicyArn</a></code> | Parses a trafficpolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseTrafficpolicyinstanceArn">parseTrafficpolicyinstanceArn</a></code> | Parses a trafficpolicyinstance ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.parseVPCArn">parseVPCArn</a></code> | Parses a vpc ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.queryloggingconfig">queryloggingconfig</a></code> | Builds an ARN for the queryloggingconfig resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.trafficpolicy">trafficpolicy</a></code> | Builds an ARN for the trafficpolicy resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.trafficpolicyinstance">trafficpolicyinstance</a></code> | Builds an ARN for the trafficpolicyinstance resource. |
| <code><a href="#@cdk_utils/iam.route53.Route53Resources.vpc">vpc</a></code> | Builds an ARN for the vpc resource. |

---

##### `change` <a name="change" id="@cdk_utils/iam.route53.Route53Resources.change"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.change(props: Route53ChangeArnProps)
```

Builds an ARN for the change resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.change.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53ChangeArnProps">Route53ChangeArnProps</a>

---

##### `cidrcollection` <a name="cidrcollection" id="@cdk_utils/iam.route53.Route53Resources.cidrcollection"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.cidrcollection(props: Route53CidrcollectionArnProps)
```

Builds an ARN for the cidrcollection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.cidrcollection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53CidrcollectionArnProps">Route53CidrcollectionArnProps</a>

---

##### `delegationset` <a name="delegationset" id="@cdk_utils/iam.route53.Route53Resources.delegationset"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.delegationset(props: Route53DelegationsetArnProps)
```

Builds an ARN for the delegationset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.delegationset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53DelegationsetArnProps">Route53DelegationsetArnProps</a>

---

##### `healthcheck` <a name="healthcheck" id="@cdk_utils/iam.route53.Route53Resources.healthcheck"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.healthcheck(props: Route53HealthcheckArnProps)
```

Builds an ARN for the healthcheck resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.healthcheck.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53HealthcheckArnProps">Route53HealthcheckArnProps</a>

---

##### `hostedzone` <a name="hostedzone" id="@cdk_utils/iam.route53.Route53Resources.hostedzone"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.hostedzone(props: Route53HostedzoneArnProps)
```

Builds an ARN for the hostedzone resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.hostedzone.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53HostedzoneArnProps">Route53HostedzoneArnProps</a>

---

##### `isValidChangeArn` <a name="isValidChangeArn" id="@cdk_utils/iam.route53.Route53Resources.isValidChangeArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidChangeArn(arn: string)
```

Validates whether a string is a valid ARN for the change resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidChangeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCidrcollectionArn` <a name="isValidCidrcollectionArn" id="@cdk_utils/iam.route53.Route53Resources.isValidCidrcollectionArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidCidrcollectionArn(arn: string)
```

Validates whether a string is a valid ARN for the cidrcollection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidCidrcollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDelegationsetArn` <a name="isValidDelegationsetArn" id="@cdk_utils/iam.route53.Route53Resources.isValidDelegationsetArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidDelegationsetArn(arn: string)
```

Validates whether a string is a valid ARN for the delegationset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidDelegationsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHealthcheckArn` <a name="isValidHealthcheckArn" id="@cdk_utils/iam.route53.Route53Resources.isValidHealthcheckArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidHealthcheckArn(arn: string)
```

Validates whether a string is a valid ARN for the healthcheck resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidHealthcheckArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHostedzoneArn` <a name="isValidHostedzoneArn" id="@cdk_utils/iam.route53.Route53Resources.isValidHostedzoneArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidHostedzoneArn(arn: string)
```

Validates whether a string is a valid ARN for the hostedzone resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidHostedzoneArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidQueryloggingconfigArn` <a name="isValidQueryloggingconfigArn" id="@cdk_utils/iam.route53.Route53Resources.isValidQueryloggingconfigArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidQueryloggingconfigArn(arn: string)
```

Validates whether a string is a valid ARN for the queryloggingconfig resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidQueryloggingconfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrafficpolicyArn` <a name="isValidTrafficpolicyArn" id="@cdk_utils/iam.route53.Route53Resources.isValidTrafficpolicyArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidTrafficpolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the trafficpolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidTrafficpolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTrafficpolicyinstanceArn` <a name="isValidTrafficpolicyinstanceArn" id="@cdk_utils/iam.route53.Route53Resources.isValidTrafficpolicyinstanceArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidTrafficpolicyinstanceArn(arn: string)
```

Validates whether a string is a valid ARN for the trafficpolicyinstance resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidTrafficpolicyinstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVPCArn` <a name="isValidVPCArn" id="@cdk_utils/iam.route53.Route53Resources.isValidVPCArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.isValidVPCArn(arn: string)
```

Validates whether a string is a valid ARN for the vpc resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.isValidVPCArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChangeArn` <a name="parseChangeArn" id="@cdk_utils/iam.route53.Route53Resources.parseChangeArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseChangeArn(arn: string)
```

Parses a change ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseChangeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCidrcollectionArn` <a name="parseCidrcollectionArn" id="@cdk_utils/iam.route53.Route53Resources.parseCidrcollectionArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseCidrcollectionArn(arn: string)
```

Parses a cidrcollection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseCidrcollectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDelegationsetArn` <a name="parseDelegationsetArn" id="@cdk_utils/iam.route53.Route53Resources.parseDelegationsetArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseDelegationsetArn(arn: string)
```

Parses a delegationset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseDelegationsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHealthcheckArn` <a name="parseHealthcheckArn" id="@cdk_utils/iam.route53.Route53Resources.parseHealthcheckArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseHealthcheckArn(arn: string)
```

Parses a healthcheck ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseHealthcheckArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHostedzoneArn` <a name="parseHostedzoneArn" id="@cdk_utils/iam.route53.Route53Resources.parseHostedzoneArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseHostedzoneArn(arn: string)
```

Parses a hostedzone ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseHostedzoneArn.parameter.arn"></a>

- *Type:* string

---

##### `parseQueryloggingconfigArn` <a name="parseQueryloggingconfigArn" id="@cdk_utils/iam.route53.Route53Resources.parseQueryloggingconfigArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseQueryloggingconfigArn(arn: string)
```

Parses a queryloggingconfig ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseQueryloggingconfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrafficpolicyArn` <a name="parseTrafficpolicyArn" id="@cdk_utils/iam.route53.Route53Resources.parseTrafficpolicyArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseTrafficpolicyArn(arn: string)
```

Parses a trafficpolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseTrafficpolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTrafficpolicyinstanceArn` <a name="parseTrafficpolicyinstanceArn" id="@cdk_utils/iam.route53.Route53Resources.parseTrafficpolicyinstanceArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseTrafficpolicyinstanceArn(arn: string)
```

Parses a trafficpolicyinstance ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseTrafficpolicyinstanceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVPCArn` <a name="parseVPCArn" id="@cdk_utils/iam.route53.Route53Resources.parseVPCArn"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.parseVPCArn(arn: string)
```

Parses a vpc ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53.Route53Resources.parseVPCArn.parameter.arn"></a>

- *Type:* string

---

##### `queryloggingconfig` <a name="queryloggingconfig" id="@cdk_utils/iam.route53.Route53Resources.queryloggingconfig"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.queryloggingconfig(props: Route53QueryloggingconfigArnProps)
```

Builds an ARN for the queryloggingconfig resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.queryloggingconfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53QueryloggingconfigArnProps">Route53QueryloggingconfigArnProps</a>

---

##### `trafficpolicy` <a name="trafficpolicy" id="@cdk_utils/iam.route53.Route53Resources.trafficpolicy"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.trafficpolicy(props: Route53TrafficpolicyArnProps)
```

Builds an ARN for the trafficpolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.trafficpolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53TrafficpolicyArnProps">Route53TrafficpolicyArnProps</a>

---

##### `trafficpolicyinstance` <a name="trafficpolicyinstance" id="@cdk_utils/iam.route53.Route53Resources.trafficpolicyinstance"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.trafficpolicyinstance(props: Route53TrafficpolicyinstanceArnProps)
```

Builds an ARN for the trafficpolicyinstance resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.trafficpolicyinstance.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53TrafficpolicyinstanceArnProps">Route53TrafficpolicyinstanceArnProps</a>

---

##### `vpc` <a name="vpc" id="@cdk_utils/iam.route53.Route53Resources.vpc"></a>

```typescript
import { route53 } from '@cdk_utils/iam'

route53.Route53Resources.vpc(props: Route53VPCArnProps)
```

Builds an ARN for the vpc resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53.Route53Resources.vpc.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53.Route53VPCArnProps">Route53VPCArnProps</a>

---




