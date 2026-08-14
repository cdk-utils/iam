# `waf_regional` Submodule <a name="`waf_regional` Submodule" id="@cdk_utils/iam.waf_regional"></a>


## Structs <a name="Structs" id="Structs"></a>

### WAFRegionalBytematchsetArnComponents <a name="WAFRegionalBytematchsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents"></a>

Parsed components of a bytematchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalBytematchsetArnComponents: waf_regional.WAFRegionalBytematchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalBytematchsetArnProps <a name="WAFRegionalBytematchsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps"></a>

Properties for building a bytematchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalBytematchsetArnProps: waf_regional.WAFRegionalBytematchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalGeomatchsetArnComponents <a name="WAFRegionalGeomatchsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents"></a>

Parsed components of a geomatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalGeomatchsetArnComponents: waf_regional.WAFRegionalGeomatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalGeomatchsetArnProps <a name="WAFRegionalGeomatchsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps"></a>

Properties for building a geomatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalGeomatchsetArnProps: waf_regional.WAFRegionalGeomatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalIpsetArnComponents <a name="WAFRegionalIpsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents"></a>

Parsed components of a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalIpsetArnComponents: waf_regional.WAFRegionalIpsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalIpsetArnProps <a name="WAFRegionalIpsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps"></a>

Properties for building a ipset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalIpsetArnProps: waf_regional.WAFRegionalIpsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalLoadbalancerAppArnComponents <a name="WAFRegionalLoadbalancerAppArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents"></a>

Parsed components of a loadbalancer/app/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalLoadbalancerAppArnComponents: waf_regional.WAFRegionalLoadbalancerAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalLoadbalancerAppArnProps <a name="WAFRegionalLoadbalancerAppArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps"></a>

Properties for building a loadbalancer/app/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalLoadbalancerAppArnProps: waf_regional.WAFRegionalLoadbalancerAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalRatebasedruleArnComponents <a name="WAFRegionalRatebasedruleArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents"></a>

Parsed components of a ratebasedrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRatebasedruleArnComponents: waf_regional.WAFRegionalRatebasedruleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalRatebasedruleArnProps <a name="WAFRegionalRatebasedruleArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps"></a>

Properties for building a ratebasedrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRatebasedruleArnProps: waf_regional.WAFRegionalRatebasedruleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalRegexmatchsetArnComponents <a name="WAFRegionalRegexmatchsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents"></a>

Parsed components of a regexmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRegexmatchsetArnComponents: waf_regional.WAFRegionalRegexmatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalRegexmatchsetArnProps <a name="WAFRegionalRegexmatchsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps"></a>

Properties for building a regexmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRegexmatchsetArnProps: waf_regional.WAFRegionalRegexmatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalRegexpatternsetArnComponents <a name="WAFRegionalRegexpatternsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents"></a>

Parsed components of a regexpatternset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRegexpatternsetArnComponents: waf_regional.WAFRegionalRegexpatternsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalRegexpatternsetArnProps <a name="WAFRegionalRegexpatternsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps"></a>

Properties for building a regexpatternset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRegexpatternsetArnProps: waf_regional.WAFRegionalRegexpatternsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalRuleArnComponents <a name="WAFRegionalRuleArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRuleArnComponents: waf_regional.WAFRegionalRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalRuleArnProps <a name="WAFRegionalRuleArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRuleArnProps: waf_regional.WAFRegionalRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalRulegroupArnComponents <a name="WAFRegionalRulegroupArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents"></a>

Parsed components of a rulegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRulegroupArnComponents: waf_regional.WAFRegionalRulegroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalRulegroupArnProps <a name="WAFRegionalRulegroupArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps"></a>

Properties for building a rulegroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalRulegroupArnProps: waf_regional.WAFRegionalRulegroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalSizeconstraintsetArnComponents <a name="WAFRegionalSizeconstraintsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents"></a>

Parsed components of a sizeconstraintset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalSizeconstraintsetArnComponents: waf_regional.WAFRegionalSizeconstraintsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalSizeconstraintsetArnProps <a name="WAFRegionalSizeconstraintsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps"></a>

Properties for building a sizeconstraintset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalSizeconstraintsetArnProps: waf_regional.WAFRegionalSizeconstraintsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalSqlinjectionmatchsetArnComponents <a name="WAFRegionalSqlinjectionmatchsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents"></a>

Parsed components of a sqlinjectionmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalSqlinjectionmatchsetArnComponents: waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalSqlinjectionmatchsetArnProps <a name="WAFRegionalSqlinjectionmatchsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps"></a>

Properties for building a sqlinjectionmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalSqlinjectionmatchsetArnProps: waf_regional.WAFRegionalSqlinjectionmatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalWebaclArnComponents <a name="WAFRegionalWebaclArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents"></a>

Parsed components of a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalWebaclArnComponents: waf_regional.WAFRegionalWebaclArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalWebaclArnProps <a name="WAFRegionalWebaclArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps"></a>

Properties for building a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalWebaclArnProps: waf_regional.WAFRegionalWebaclArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### WAFRegionalXssmatchsetArnComponents <a name="WAFRegionalXssmatchsetArnComponents" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents"></a>

Parsed components of a xssmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalXssmatchsetArnComponents: waf_regional.WAFRegionalXssmatchsetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### WAFRegionalXssmatchsetArnProps <a name="WAFRegionalXssmatchsetArnProps" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps"></a>

Properties for building a xssmatchset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

const wAFRegionalXssmatchsetArnProps: waf_regional.WAFRegionalXssmatchsetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### WAFRegionalActions <a name="WAFRegionalActions" id="@cdk_utils/iam.waf_regional.WAFRegionalActions"></a>

IAM action constants for the waf-regional service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

new waf_regional.WAFRegionalActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetByteMatchSet">actionGetByteMatchSet</a></code> | <code>string</code> | [Read] waf-regional:GetByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetChangeToken">actionGetChangeToken</a></code> | <code>string</code> | [Read] waf-regional:GetChangeToken. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetChangeTokenStatus">actionGetChangeTokenStatus</a></code> | <code>string</code> | [Read] waf-regional:GetChangeTokenStatus. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetGeoMatchSet">actionGetGeoMatchSet</a></code> | <code>string</code> | [Read] waf-regional:GetGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetIPSet">actionGetIPSet</a></code> | <code>string</code> | [Read] waf-regional:GetIPSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetLoggingConfiguration">actionGetLoggingConfiguration</a></code> | <code>string</code> | [Read] waf-regional:GetLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetPermissionPolicy">actionGetPermissionPolicy</a></code> | <code>string</code> | [Read] waf-regional:GetPermissionPolicy. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRateBasedRule">actionGetRateBasedRule</a></code> | <code>string</code> | [Read] waf-regional:GetRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRateBasedRuleManagedKeys">actionGetRateBasedRuleManagedKeys</a></code> | <code>string</code> | [Read] waf-regional:GetRateBasedRuleManagedKeys. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRegexMatchSet">actionGetRegexMatchSet</a></code> | <code>string</code> | [Read] waf-regional:GetRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRegexPatternSet">actionGetRegexPatternSet</a></code> | <code>string</code> | [Read] waf-regional:GetRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRule">actionGetRule</a></code> | <code>string</code> | [Read] waf-regional:GetRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRuleGroup">actionGetRuleGroup</a></code> | <code>string</code> | [Read] waf-regional:GetRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetSampledRequests">actionGetSampledRequests</a></code> | <code>string</code> | [Read] waf-regional:GetSampledRequests. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetSizeConstraintSet">actionGetSizeConstraintSet</a></code> | <code>string</code> | [Read] waf-regional:GetSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetSqlInjectionMatchSet">actionGetSqlInjectionMatchSet</a></code> | <code>string</code> | [Read] waf-regional:GetSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetWebACL">actionGetWebACL</a></code> | <code>string</code> | [Read] waf-regional:GetWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetWebACLForResource">actionGetWebACLForResource</a></code> | <code>string</code> | [Read] waf-regional:GetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetXssMatchSet">actionGetXssMatchSet</a></code> | <code>string</code> | [Read] waf-regional:GetXssMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string</code> | [Write] waf-regional:AssociateWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateByteMatchSet">CreateByteMatchSet</a></code> | <code>string</code> | [Write] waf-regional:CreateByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateGeoMatchSet">CreateGeoMatchSet</a></code> | <code>string</code> | [Write] waf-regional:CreateGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateIPSet">CreateIPSet</a></code> | <code>string</code> | [Write] waf-regional:CreateIPSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRateBasedRule">CreateRateBasedRule</a></code> | <code>string</code> | [Write] waf-regional:CreateRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRegexMatchSet">CreateRegexMatchSet</a></code> | <code>string</code> | [Write] waf-regional:CreateRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRegexPatternSet">CreateRegexPatternSet</a></code> | <code>string</code> | [Write] waf-regional:CreateRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] waf-regional:CreateRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string</code> | [Write] waf-regional:CreateRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateSizeConstraintSet">CreateSizeConstraintSet</a></code> | <code>string</code> | [Write] waf-regional:CreateSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateSqlInjectionMatchSet">CreateSqlInjectionMatchSet</a></code> | <code>string</code> | [Write] waf-regional:CreateSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateWebACL">CreateWebACL</a></code> | <code>string</code> | [PermissionManagement] waf-regional:CreateWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateWebACLMigrationStack">CreateWebACLMigrationStack</a></code> | <code>string</code> | [Write] waf-regional:CreateWebACLMigrationStack. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateXssMatchSet">CreateXssMatchSet</a></code> | <code>string</code> | [Write] waf-regional:CreateXssMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteByteMatchSet">DeleteByteMatchSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteGeoMatchSet">DeleteGeoMatchSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteIPSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string</code> | [Write] waf-regional:DeleteLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeletePermissionPolicy">DeletePermissionPolicy</a></code> | <code>string</code> | [PermissionManagement] waf-regional:DeletePermissionPolicy. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRateBasedRule">DeleteRateBasedRule</a></code> | <code>string</code> | [Write] waf-regional:DeleteRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRegexMatchSet">DeleteRegexMatchSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRegexPatternSet">DeleteRegexPatternSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] waf-regional:DeleteRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string</code> | [Write] waf-regional:DeleteRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteSizeConstraintSet">DeleteSizeConstraintSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteSqlInjectionMatchSet">DeleteSqlInjectionMatchSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteWebACL">DeleteWebACL</a></code> | <code>string</code> | [PermissionManagement] waf-regional:DeleteWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteXssMatchSet">DeleteXssMatchSet</a></code> | <code>string</code> | [Write] waf-regional:DeleteXssMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string</code> | [Write] waf-regional:DisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListActivatedRulesInRuleGroup">ListActivatedRulesInRuleGroup</a></code> | <code>string</code> | [List] waf-regional:ListActivatedRulesInRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListByteMatchSets">ListByteMatchSets</a></code> | <code>string</code> | [List] waf-regional:ListByteMatchSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListGeoMatchSets">ListGeoMatchSets</a></code> | <code>string</code> | [List] waf-regional:ListGeoMatchSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListIPSets">ListIPSets</a></code> | <code>string</code> | [List] waf-regional:ListIPSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string</code> | [List] waf-regional:ListLoggingConfigurations. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRateBasedRules">ListRateBasedRules</a></code> | <code>string</code> | [List] waf-regional:ListRateBasedRules. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRegexMatchSets">ListRegexMatchSets</a></code> | <code>string</code> | [List] waf-regional:ListRegexMatchSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRegexPatternSets">ListRegexPatternSets</a></code> | <code>string</code> | [List] waf-regional:ListRegexPatternSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string</code> | [List] waf-regional:ListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string</code> | [List] waf-regional:ListRuleGroups. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] waf-regional:ListRules. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListSizeConstraintSets">ListSizeConstraintSets</a></code> | <code>string</code> | [List] waf-regional:ListSizeConstraintSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListSqlInjectionMatchSets">ListSqlInjectionMatchSets</a></code> | <code>string</code> | [List] waf-regional:ListSqlInjectionMatchSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListSubscribedRuleGroups">ListSubscribedRuleGroups</a></code> | <code>string</code> | [List] waf-regional:ListSubscribedRuleGroups. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] waf-regional:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListWebACLs">ListWebACLs</a></code> | <code>string</code> | [List] waf-regional:ListWebACLs. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListXssMatchSets">ListXssMatchSets</a></code> | <code>string</code> | [List] waf-regional:ListXssMatchSets. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.PutLoggingConfiguration">PutLoggingConfiguration</a></code> | <code>string</code> | [Write] waf-regional:PutLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.PutPermissionPolicy">PutPermissionPolicy</a></code> | <code>string</code> | [PermissionManagement] waf-regional:PutPermissionPolicy. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] waf-regional:TagResource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] waf-regional:UntagResource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateByteMatchSet">UpdateByteMatchSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateByteMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateGeoMatchSet">UpdateGeoMatchSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateGeoMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateIPSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRateBasedRule">UpdateRateBasedRule</a></code> | <code>string</code> | [Write] waf-regional:UpdateRateBasedRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRegexMatchSet">UpdateRegexMatchSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateRegexMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRegexPatternSet">UpdateRegexPatternSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateRegexPatternSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] waf-regional:UpdateRule. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string</code> | [Write] waf-regional:UpdateRuleGroup. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateSizeConstraintSet">UpdateSizeConstraintSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateSizeConstraintSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateSqlInjectionMatchSet">UpdateSqlInjectionMatchSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateSqlInjectionMatchSet. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateWebACL">UpdateWebACL</a></code> | <code>string</code> | [PermissionManagement] waf-regional:UpdateWebACL. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateXssMatchSet">UpdateXssMatchSet</a></code> | <code>string</code> | [Write] waf-regional:UpdateXssMatchSet. |

---

##### `actionGetByteMatchSet`<sup>Required</sup> <a name="actionGetByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetByteMatchSet"></a>

```typescript
public readonly actionGetByteMatchSet: string;
```

- *Type:* string

[Read] waf-regional:GetByteMatchSet.

---

##### `actionGetChangeToken`<sup>Required</sup> <a name="actionGetChangeToken" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetChangeToken"></a>

```typescript
public readonly actionGetChangeToken: string;
```

- *Type:* string

[Read] waf-regional:GetChangeToken.

---

##### `actionGetChangeTokenStatus`<sup>Required</sup> <a name="actionGetChangeTokenStatus" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetChangeTokenStatus"></a>

```typescript
public readonly actionGetChangeTokenStatus: string;
```

- *Type:* string

[Read] waf-regional:GetChangeTokenStatus.

---

##### `actionGetGeoMatchSet`<sup>Required</sup> <a name="actionGetGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetGeoMatchSet"></a>

```typescript
public readonly actionGetGeoMatchSet: string;
```

- *Type:* string

[Read] waf-regional:GetGeoMatchSet.

---

##### `actionGetIPSet`<sup>Required</sup> <a name="actionGetIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetIPSet"></a>

```typescript
public readonly actionGetIPSet: string;
```

- *Type:* string

[Read] waf-regional:GetIPSet.

---

##### `actionGetLoggingConfiguration`<sup>Required</sup> <a name="actionGetLoggingConfiguration" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetLoggingConfiguration"></a>

```typescript
public readonly actionGetLoggingConfiguration: string;
```

- *Type:* string

[Read] waf-regional:GetLoggingConfiguration.

---

##### `actionGetPermissionPolicy`<sup>Required</sup> <a name="actionGetPermissionPolicy" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetPermissionPolicy"></a>

```typescript
public readonly actionGetPermissionPolicy: string;
```

- *Type:* string

[Read] waf-regional:GetPermissionPolicy.

---

##### `actionGetRateBasedRule`<sup>Required</sup> <a name="actionGetRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRateBasedRule"></a>

```typescript
public readonly actionGetRateBasedRule: string;
```

- *Type:* string

[Read] waf-regional:GetRateBasedRule.

---

##### `actionGetRateBasedRuleManagedKeys`<sup>Required</sup> <a name="actionGetRateBasedRuleManagedKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRateBasedRuleManagedKeys"></a>

```typescript
public readonly actionGetRateBasedRuleManagedKeys: string;
```

- *Type:* string

[Read] waf-regional:GetRateBasedRuleManagedKeys.

---

##### `actionGetRegexMatchSet`<sup>Required</sup> <a name="actionGetRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRegexMatchSet"></a>

```typescript
public readonly actionGetRegexMatchSet: string;
```

- *Type:* string

[Read] waf-regional:GetRegexMatchSet.

---

##### `actionGetRegexPatternSet`<sup>Required</sup> <a name="actionGetRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRegexPatternSet"></a>

```typescript
public readonly actionGetRegexPatternSet: string;
```

- *Type:* string

[Read] waf-regional:GetRegexPatternSet.

---

##### `actionGetRule`<sup>Required</sup> <a name="actionGetRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRule"></a>

```typescript
public readonly actionGetRule: string;
```

- *Type:* string

[Read] waf-regional:GetRule.

---

##### `actionGetRuleGroup`<sup>Required</sup> <a name="actionGetRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetRuleGroup"></a>

```typescript
public readonly actionGetRuleGroup: string;
```

- *Type:* string

[Read] waf-regional:GetRuleGroup.

---

##### `actionGetSampledRequests`<sup>Required</sup> <a name="actionGetSampledRequests" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetSampledRequests"></a>

```typescript
public readonly actionGetSampledRequests: string;
```

- *Type:* string

[Read] waf-regional:GetSampledRequests.

---

##### `actionGetSizeConstraintSet`<sup>Required</sup> <a name="actionGetSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetSizeConstraintSet"></a>

```typescript
public readonly actionGetSizeConstraintSet: string;
```

- *Type:* string

[Read] waf-regional:GetSizeConstraintSet.

---

##### `actionGetSqlInjectionMatchSet`<sup>Required</sup> <a name="actionGetSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetSqlInjectionMatchSet"></a>

```typescript
public readonly actionGetSqlInjectionMatchSet: string;
```

- *Type:* string

[Read] waf-regional:GetSqlInjectionMatchSet.

---

##### `actionGetWebACL`<sup>Required</sup> <a name="actionGetWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetWebACL"></a>

```typescript
public readonly actionGetWebACL: string;
```

- *Type:* string

[Read] waf-regional:GetWebACL.

---

##### `actionGetWebACLForResource`<sup>Required</sup> <a name="actionGetWebACLForResource" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetWebACLForResource"></a>

```typescript
public readonly actionGetWebACLForResource: string;
```

- *Type:* string

[Read] waf-regional:GetWebACLForResource.

---

##### `actionGetXssMatchSet`<sup>Required</sup> <a name="actionGetXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.actionGetXssMatchSet"></a>

```typescript
public readonly actionGetXssMatchSet: string;
```

- *Type:* string

[Read] waf-regional:GetXssMatchSet.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string;
```

- *Type:* string

[Write] waf-regional:AssociateWebACL.

---

##### `CreateByteMatchSet`<sup>Required</sup> <a name="CreateByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateByteMatchSet"></a>

```typescript
public readonly CreateByteMatchSet: string;
```

- *Type:* string

[Write] waf-regional:CreateByteMatchSet.

---

##### `CreateGeoMatchSet`<sup>Required</sup> <a name="CreateGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateGeoMatchSet"></a>

```typescript
public readonly CreateGeoMatchSet: string;
```

- *Type:* string

[Write] waf-regional:CreateGeoMatchSet.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string;
```

- *Type:* string

[Write] waf-regional:CreateIPSet.

---

##### `CreateRateBasedRule`<sup>Required</sup> <a name="CreateRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRateBasedRule"></a>

```typescript
public readonly CreateRateBasedRule: string;
```

- *Type:* string

[Write] waf-regional:CreateRateBasedRule.

---

##### `CreateRegexMatchSet`<sup>Required</sup> <a name="CreateRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRegexMatchSet"></a>

```typescript
public readonly CreateRegexMatchSet: string;
```

- *Type:* string

[Write] waf-regional:CreateRegexMatchSet.

---

##### `CreateRegexPatternSet`<sup>Required</sup> <a name="CreateRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRegexPatternSet"></a>

```typescript
public readonly CreateRegexPatternSet: string;
```

- *Type:* string

[Write] waf-regional:CreateRegexPatternSet.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] waf-regional:CreateRule.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string;
```

- *Type:* string

[Write] waf-regional:CreateRuleGroup.

---

##### `CreateSizeConstraintSet`<sup>Required</sup> <a name="CreateSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateSizeConstraintSet"></a>

```typescript
public readonly CreateSizeConstraintSet: string;
```

- *Type:* string

[Write] waf-regional:CreateSizeConstraintSet.

---

##### `CreateSqlInjectionMatchSet`<sup>Required</sup> <a name="CreateSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateSqlInjectionMatchSet"></a>

```typescript
public readonly CreateSqlInjectionMatchSet: string;
```

- *Type:* string

[Write] waf-regional:CreateSqlInjectionMatchSet.

---

##### `CreateWebACL`<sup>Required</sup> <a name="CreateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateWebACL"></a>

```typescript
public readonly CreateWebACL: string;
```

- *Type:* string

[PermissionManagement] waf-regional:CreateWebACL.

---

##### `CreateWebACLMigrationStack`<sup>Required</sup> <a name="CreateWebACLMigrationStack" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateWebACLMigrationStack"></a>

```typescript
public readonly CreateWebACLMigrationStack: string;
```

- *Type:* string

[Write] waf-regional:CreateWebACLMigrationStack.

---

##### `CreateXssMatchSet`<sup>Required</sup> <a name="CreateXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.CreateXssMatchSet"></a>

```typescript
public readonly CreateXssMatchSet: string;
```

- *Type:* string

[Write] waf-regional:CreateXssMatchSet.

---

##### `DeleteByteMatchSet`<sup>Required</sup> <a name="DeleteByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteByteMatchSet"></a>

```typescript
public readonly DeleteByteMatchSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteByteMatchSet.

---

##### `DeleteGeoMatchSet`<sup>Required</sup> <a name="DeleteGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteGeoMatchSet"></a>

```typescript
public readonly DeleteGeoMatchSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteGeoMatchSet.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteIPSet.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string;
```

- *Type:* string

[Write] waf-regional:DeleteLoggingConfiguration.

---

##### `DeletePermissionPolicy`<sup>Required</sup> <a name="DeletePermissionPolicy" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeletePermissionPolicy"></a>

```typescript
public readonly DeletePermissionPolicy: string;
```

- *Type:* string

[PermissionManagement] waf-regional:DeletePermissionPolicy.

---

##### `DeleteRateBasedRule`<sup>Required</sup> <a name="DeleteRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRateBasedRule"></a>

```typescript
public readonly DeleteRateBasedRule: string;
```

- *Type:* string

[Write] waf-regional:DeleteRateBasedRule.

---

##### `DeleteRegexMatchSet`<sup>Required</sup> <a name="DeleteRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRegexMatchSet"></a>

```typescript
public readonly DeleteRegexMatchSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteRegexMatchSet.

---

##### `DeleteRegexPatternSet`<sup>Required</sup> <a name="DeleteRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRegexPatternSet"></a>

```typescript
public readonly DeleteRegexPatternSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteRegexPatternSet.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] waf-regional:DeleteRule.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string;
```

- *Type:* string

[Write] waf-regional:DeleteRuleGroup.

---

##### `DeleteSizeConstraintSet`<sup>Required</sup> <a name="DeleteSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteSizeConstraintSet"></a>

```typescript
public readonly DeleteSizeConstraintSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteSizeConstraintSet.

---

##### `DeleteSqlInjectionMatchSet`<sup>Required</sup> <a name="DeleteSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteSqlInjectionMatchSet"></a>

```typescript
public readonly DeleteSqlInjectionMatchSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteSqlInjectionMatchSet.

---

##### `DeleteWebACL`<sup>Required</sup> <a name="DeleteWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteWebACL"></a>

```typescript
public readonly DeleteWebACL: string;
```

- *Type:* string

[PermissionManagement] waf-regional:DeleteWebACL.

---

##### `DeleteXssMatchSet`<sup>Required</sup> <a name="DeleteXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DeleteXssMatchSet"></a>

```typescript
public readonly DeleteXssMatchSet: string;
```

- *Type:* string

[Write] waf-regional:DeleteXssMatchSet.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string;
```

- *Type:* string

[Write] waf-regional:DisassociateWebACL.

---

##### `ListActivatedRulesInRuleGroup`<sup>Required</sup> <a name="ListActivatedRulesInRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListActivatedRulesInRuleGroup"></a>

```typescript
public readonly ListActivatedRulesInRuleGroup: string;
```

- *Type:* string

[List] waf-regional:ListActivatedRulesInRuleGroup.

---

##### `ListByteMatchSets`<sup>Required</sup> <a name="ListByteMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListByteMatchSets"></a>

```typescript
public readonly ListByteMatchSets: string;
```

- *Type:* string

[List] waf-regional:ListByteMatchSets.

---

##### `ListGeoMatchSets`<sup>Required</sup> <a name="ListGeoMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListGeoMatchSets"></a>

```typescript
public readonly ListGeoMatchSets: string;
```

- *Type:* string

[List] waf-regional:ListGeoMatchSets.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string;
```

- *Type:* string

[List] waf-regional:ListIPSets.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string;
```

- *Type:* string

[List] waf-regional:ListLoggingConfigurations.

---

##### `ListRateBasedRules`<sup>Required</sup> <a name="ListRateBasedRules" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRateBasedRules"></a>

```typescript
public readonly ListRateBasedRules: string;
```

- *Type:* string

[List] waf-regional:ListRateBasedRules.

---

##### `ListRegexMatchSets`<sup>Required</sup> <a name="ListRegexMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRegexMatchSets"></a>

```typescript
public readonly ListRegexMatchSets: string;
```

- *Type:* string

[List] waf-regional:ListRegexMatchSets.

---

##### `ListRegexPatternSets`<sup>Required</sup> <a name="ListRegexPatternSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRegexPatternSets"></a>

```typescript
public readonly ListRegexPatternSets: string;
```

- *Type:* string

[List] waf-regional:ListRegexPatternSets.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string;
```

- *Type:* string

[List] waf-regional:ListResourcesForWebACL.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string;
```

- *Type:* string

[List] waf-regional:ListRuleGroups.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] waf-regional:ListRules.

---

##### `ListSizeConstraintSets`<sup>Required</sup> <a name="ListSizeConstraintSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListSizeConstraintSets"></a>

```typescript
public readonly ListSizeConstraintSets: string;
```

- *Type:* string

[List] waf-regional:ListSizeConstraintSets.

---

##### `ListSqlInjectionMatchSets`<sup>Required</sup> <a name="ListSqlInjectionMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListSqlInjectionMatchSets"></a>

```typescript
public readonly ListSqlInjectionMatchSets: string;
```

- *Type:* string

[List] waf-regional:ListSqlInjectionMatchSets.

---

##### `ListSubscribedRuleGroups`<sup>Required</sup> <a name="ListSubscribedRuleGroups" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListSubscribedRuleGroups"></a>

```typescript
public readonly ListSubscribedRuleGroups: string;
```

- *Type:* string

[List] waf-regional:ListSubscribedRuleGroups.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] waf-regional:ListTagsForResource.

---

##### `ListWebACLs`<sup>Required</sup> <a name="ListWebACLs" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListWebACLs"></a>

```typescript
public readonly ListWebACLs: string;
```

- *Type:* string

[List] waf-regional:ListWebACLs.

---

##### `ListXssMatchSets`<sup>Required</sup> <a name="ListXssMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.ListXssMatchSets"></a>

```typescript
public readonly ListXssMatchSets: string;
```

- *Type:* string

[List] waf-regional:ListXssMatchSets.

---

##### `PutLoggingConfiguration`<sup>Required</sup> <a name="PutLoggingConfiguration" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.PutLoggingConfiguration"></a>

```typescript
public readonly PutLoggingConfiguration: string;
```

- *Type:* string

[Write] waf-regional:PutLoggingConfiguration.

---

##### `PutPermissionPolicy`<sup>Required</sup> <a name="PutPermissionPolicy" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.PutPermissionPolicy"></a>

```typescript
public readonly PutPermissionPolicy: string;
```

- *Type:* string

[PermissionManagement] waf-regional:PutPermissionPolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] waf-regional:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] waf-regional:UntagResource.

---

##### `UpdateByteMatchSet`<sup>Required</sup> <a name="UpdateByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateByteMatchSet"></a>

```typescript
public readonly UpdateByteMatchSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateByteMatchSet.

---

##### `UpdateGeoMatchSet`<sup>Required</sup> <a name="UpdateGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateGeoMatchSet"></a>

```typescript
public readonly UpdateGeoMatchSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateGeoMatchSet.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateIPSet.

---

##### `UpdateRateBasedRule`<sup>Required</sup> <a name="UpdateRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRateBasedRule"></a>

```typescript
public readonly UpdateRateBasedRule: string;
```

- *Type:* string

[Write] waf-regional:UpdateRateBasedRule.

---

##### `UpdateRegexMatchSet`<sup>Required</sup> <a name="UpdateRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRegexMatchSet"></a>

```typescript
public readonly UpdateRegexMatchSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateRegexMatchSet.

---

##### `UpdateRegexPatternSet`<sup>Required</sup> <a name="UpdateRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRegexPatternSet"></a>

```typescript
public readonly UpdateRegexPatternSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateRegexPatternSet.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] waf-regional:UpdateRule.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string;
```

- *Type:* string

[Write] waf-regional:UpdateRuleGroup.

---

##### `UpdateSizeConstraintSet`<sup>Required</sup> <a name="UpdateSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateSizeConstraintSet"></a>

```typescript
public readonly UpdateSizeConstraintSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateSizeConstraintSet.

---

##### `UpdateSqlInjectionMatchSet`<sup>Required</sup> <a name="UpdateSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateSqlInjectionMatchSet"></a>

```typescript
public readonly UpdateSqlInjectionMatchSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateSqlInjectionMatchSet.

---

##### `UpdateWebACL`<sup>Required</sup> <a name="UpdateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateWebACL"></a>

```typescript
public readonly UpdateWebACL: string;
```

- *Type:* string

[PermissionManagement] waf-regional:UpdateWebACL.

---

##### `UpdateXssMatchSet`<sup>Required</sup> <a name="UpdateXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalActions.property.UpdateXssMatchSet"></a>

```typescript
public readonly UpdateXssMatchSet: string;
```

- *Type:* string

[Write] waf-regional:UpdateXssMatchSet.

---

### WAFRegionalConditions <a name="WAFRegionalConditions" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions"></a>

Condition key constants and builders for waf-regional.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

new waf_regional.WAFRegionalConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.requestTag"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.resourceTag"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.tagKeys"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateRateBasedRuleConditionKeys">CreateRateBasedRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRateBasedRule action. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateRuleGroupConditionKeys">CreateRuleGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRuleGroup action. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateWebACLConditionKeys">CreateWebACLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebACL action. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRateBasedRuleConditionKeys`<sup>Required</sup> <a name="CreateRateBasedRuleConditionKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateRateBasedRuleConditionKeys"></a>

```typescript
public readonly CreateRateBasedRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRateBasedRule action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateRuleGroupConditionKeys`<sup>Required</sup> <a name="CreateRuleGroupConditionKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateRuleGroupConditionKeys"></a>

```typescript
public readonly CreateRuleGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRuleGroup action.

---

##### `CreateWebACLConditionKeys`<sup>Required</sup> <a name="CreateWebACLConditionKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.CreateWebACLConditionKeys"></a>

```typescript
public readonly CreateWebACLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebACL action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### WAFRegionalOperations <a name="WAFRegionalOperations" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations"></a>

API operation to required IAM actions mapping for waf-regional.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

new waf_regional.WAFRegionalOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string[]</code> | IAM actions required for the AssociateWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateByteMatchSet">CreateByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateGeoMatchSet">CreateGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateIPSet">CreateIPSet</a></code> | <code>string[]</code> | IAM actions required for the CreateIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRateBasedRule">CreateRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRegexMatchSet">CreateRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRegexPatternSet">CreateRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the CreateRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRuleGroup">CreateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateSizeConstraintSet">CreateSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the CreateSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateSqlInjectionMatchSet">CreateSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateWebACL">CreateWebACL</a></code> | <code>string[]</code> | IAM actions required for the CreateWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateWebACLMigrationStack">CreateWebACLMigrationStack</a></code> | <code>string[]</code> | IAM actions required for the CreateWebACLMigrationStack API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateXssMatchSet">CreateXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the CreateXssMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteByteMatchSet">DeleteByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteGeoMatchSet">DeleteGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteIPSet">DeleteIPSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeletePermissionPolicy">DeletePermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRateBasedRule">DeleteRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRegexMatchSet">DeleteRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRegexPatternSet">DeleteRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRuleGroup">DeleteRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteSizeConstraintSet">DeleteSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteSqlInjectionMatchSet">DeleteSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteWebACL">DeleteWebACL</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteXssMatchSet">DeleteXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the DeleteXssMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListActivatedRulesInRuleGroup">ListActivatedRulesInRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the ListActivatedRulesInRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListByteMatchSets">ListByteMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListByteMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListGeoMatchSets">ListGeoMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListGeoMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListIPSets">ListIPSets</a></code> | <code>string[]</code> | IAM actions required for the ListIPSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListLoggingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRateBasedRules">ListRateBasedRules</a></code> | <code>string[]</code> | IAM actions required for the ListRateBasedRules API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRegexMatchSets">ListRegexMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListRegexMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRegexPatternSets">ListRegexPatternSets</a></code> | <code>string[]</code> | IAM actions required for the ListRegexPatternSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string[]</code> | IAM actions required for the ListResourcesForWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRuleGroups">ListRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListSizeConstraintSets">ListSizeConstraintSets</a></code> | <code>string[]</code> | IAM actions required for the ListSizeConstraintSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListSqlInjectionMatchSets">ListSqlInjectionMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListSqlInjectionMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListSubscribedRuleGroups">ListSubscribedRuleGroups</a></code> | <code>string[]</code> | IAM actions required for the ListSubscribedRuleGroups API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListWebACLs">ListWebACLs</a></code> | <code>string[]</code> | IAM actions required for the ListWebACLs API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListXssMatchSets">ListXssMatchSets</a></code> | <code>string[]</code> | IAM actions required for the ListXssMatchSets API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetByteMatchSet">opGetByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetChangeToken">opGetChangeToken</a></code> | <code>string[]</code> | IAM actions required for the GetChangeToken API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetChangeTokenStatus">opGetChangeTokenStatus</a></code> | <code>string[]</code> | IAM actions required for the GetChangeTokenStatus API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetGeoMatchSet">opGetGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetIPSet">opGetIPSet</a></code> | <code>string[]</code> | IAM actions required for the GetIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetLoggingConfiguration">opGetLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetPermissionPolicy">opGetPermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRateBasedRule">opGetRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the GetRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRateBasedRuleManagedKeys">opGetRateBasedRuleManagedKeys</a></code> | <code>string[]</code> | IAM actions required for the GetRateBasedRuleManagedKeys API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRegexMatchSet">opGetRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRegexPatternSet">opGetRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the GetRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRule">opGetRule</a></code> | <code>string[]</code> | IAM actions required for the GetRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRuleGroup">opGetRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the GetRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetSampledRequests">opGetSampledRequests</a></code> | <code>string[]</code> | IAM actions required for the GetSampledRequests API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetSizeConstraintSet">opGetSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the GetSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetSqlInjectionMatchSet">opGetSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetWebACL">opGetWebACL</a></code> | <code>string[]</code> | IAM actions required for the GetWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetWebACLForResource">opGetWebACLForResource</a></code> | <code>string[]</code> | IAM actions required for the GetWebACLForResource API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetXssMatchSet">opGetXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the GetXssMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.PutLoggingConfiguration">PutLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.PutPermissionPolicy">PutPermissionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutPermissionPolicy API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateByteMatchSet">UpdateByteMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateByteMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateGeoMatchSet">UpdateGeoMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateGeoMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateIPSet">UpdateIPSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateIPSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRateBasedRule">UpdateRateBasedRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRateBasedRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRegexMatchSet">UpdateRegexMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegexMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRegexPatternSet">UpdateRegexPatternSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegexPatternSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRuleGroup">UpdateRuleGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateRuleGroup API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateSizeConstraintSet">UpdateSizeConstraintSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateSizeConstraintSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateSqlInjectionMatchSet">UpdateSqlInjectionMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateSqlInjectionMatchSet API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateWebACL">UpdateWebACL</a></code> | <code>string[]</code> | IAM actions required for the UpdateWebACL API call. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateXssMatchSet">UpdateXssMatchSet</a></code> | <code>string[]</code> | IAM actions required for the UpdateXssMatchSet API call. |

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWebACL API call.

---

##### `CreateByteMatchSet`<sup>Required</sup> <a name="CreateByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateByteMatchSet"></a>

```typescript
public readonly CreateByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateByteMatchSet API call.

---

##### `CreateGeoMatchSet`<sup>Required</sup> <a name="CreateGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateGeoMatchSet"></a>

```typescript
public readonly CreateGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateGeoMatchSet API call.

---

##### `CreateIPSet`<sup>Required</sup> <a name="CreateIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateIPSet"></a>

```typescript
public readonly CreateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateIPSet API call.

---

##### `CreateRateBasedRule`<sup>Required</sup> <a name="CreateRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRateBasedRule"></a>

```typescript
public readonly CreateRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRateBasedRule API call.

---

##### `CreateRegexMatchSet`<sup>Required</sup> <a name="CreateRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRegexMatchSet"></a>

```typescript
public readonly CreateRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegexMatchSet API call.

---

##### `CreateRegexPatternSet`<sup>Required</sup> <a name="CreateRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRegexPatternSet"></a>

```typescript
public readonly CreateRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegexPatternSet API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateRuleGroup`<sup>Required</sup> <a name="CreateRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateRuleGroup"></a>

```typescript
public readonly CreateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateRuleGroup API call.

---

##### `CreateSizeConstraintSet`<sup>Required</sup> <a name="CreateSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateSizeConstraintSet"></a>

```typescript
public readonly CreateSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateSizeConstraintSet API call.

---

##### `CreateSqlInjectionMatchSet`<sup>Required</sup> <a name="CreateSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateSqlInjectionMatchSet"></a>

```typescript
public readonly CreateSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateSqlInjectionMatchSet API call.

---

##### `CreateWebACL`<sup>Required</sup> <a name="CreateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateWebACL"></a>

```typescript
public readonly CreateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebACL API call.

---

##### `CreateWebACLMigrationStack`<sup>Required</sup> <a name="CreateWebACLMigrationStack" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateWebACLMigrationStack"></a>

```typescript
public readonly CreateWebACLMigrationStack: string[];
```

- *Type:* string[]

IAM actions required for the CreateWebACLMigrationStack API call.

---

##### `CreateXssMatchSet`<sup>Required</sup> <a name="CreateXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.CreateXssMatchSet"></a>

```typescript
public readonly CreateXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the CreateXssMatchSet API call.

---

##### `DeleteByteMatchSet`<sup>Required</sup> <a name="DeleteByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteByteMatchSet"></a>

```typescript
public readonly DeleteByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteByteMatchSet API call.

---

##### `DeleteGeoMatchSet`<sup>Required</sup> <a name="DeleteGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteGeoMatchSet"></a>

```typescript
public readonly DeleteGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGeoMatchSet API call.

---

##### `DeleteIPSet`<sup>Required</sup> <a name="DeleteIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteIPSet"></a>

```typescript
public readonly DeleteIPSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIPSet API call.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoggingConfiguration API call.

---

##### `DeletePermissionPolicy`<sup>Required</sup> <a name="DeletePermissionPolicy" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeletePermissionPolicy"></a>

```typescript
public readonly DeletePermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePermissionPolicy API call.

---

##### `DeleteRateBasedRule`<sup>Required</sup> <a name="DeleteRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRateBasedRule"></a>

```typescript
public readonly DeleteRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRateBasedRule API call.

---

##### `DeleteRegexMatchSet`<sup>Required</sup> <a name="DeleteRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRegexMatchSet"></a>

```typescript
public readonly DeleteRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegexMatchSet API call.

---

##### `DeleteRegexPatternSet`<sup>Required</sup> <a name="DeleteRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRegexPatternSet"></a>

```typescript
public readonly DeleteRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRegexPatternSet API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteRuleGroup`<sup>Required</sup> <a name="DeleteRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteRuleGroup"></a>

```typescript
public readonly DeleteRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRuleGroup API call.

---

##### `DeleteSizeConstraintSet`<sup>Required</sup> <a name="DeleteSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteSizeConstraintSet"></a>

```typescript
public readonly DeleteSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSizeConstraintSet API call.

---

##### `DeleteSqlInjectionMatchSet`<sup>Required</sup> <a name="DeleteSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteSqlInjectionMatchSet"></a>

```typescript
public readonly DeleteSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSqlInjectionMatchSet API call.

---

##### `DeleteWebACL`<sup>Required</sup> <a name="DeleteWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteWebACL"></a>

```typescript
public readonly DeleteWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebACL API call.

---

##### `DeleteXssMatchSet`<sup>Required</sup> <a name="DeleteXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DeleteXssMatchSet"></a>

```typescript
public readonly DeleteXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteXssMatchSet API call.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWebACL API call.

---

##### `ListActivatedRulesInRuleGroup`<sup>Required</sup> <a name="ListActivatedRulesInRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListActivatedRulesInRuleGroup"></a>

```typescript
public readonly ListActivatedRulesInRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListActivatedRulesInRuleGroup API call.

---

##### `ListByteMatchSets`<sup>Required</sup> <a name="ListByteMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListByteMatchSets"></a>

```typescript
public readonly ListByteMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListByteMatchSets API call.

---

##### `ListGeoMatchSets`<sup>Required</sup> <a name="ListGeoMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListGeoMatchSets"></a>

```typescript
public readonly ListGeoMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListGeoMatchSets API call.

---

##### `ListIPSets`<sup>Required</sup> <a name="ListIPSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListIPSets"></a>

```typescript
public readonly ListIPSets: string[];
```

- *Type:* string[]

IAM actions required for the ListIPSets API call.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListLoggingConfigurations API call.

---

##### `ListRateBasedRules`<sup>Required</sup> <a name="ListRateBasedRules" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRateBasedRules"></a>

```typescript
public readonly ListRateBasedRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRateBasedRules API call.

---

##### `ListRegexMatchSets`<sup>Required</sup> <a name="ListRegexMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRegexMatchSets"></a>

```typescript
public readonly ListRegexMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListRegexMatchSets API call.

---

##### `ListRegexPatternSets`<sup>Required</sup> <a name="ListRegexPatternSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRegexPatternSets"></a>

```typescript
public readonly ListRegexPatternSets: string[];
```

- *Type:* string[]

IAM actions required for the ListRegexPatternSets API call.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcesForWebACL API call.

---

##### `ListRuleGroups`<sup>Required</sup> <a name="ListRuleGroups" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRuleGroups"></a>

```typescript
public readonly ListRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListRuleGroups API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListSizeConstraintSets`<sup>Required</sup> <a name="ListSizeConstraintSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListSizeConstraintSets"></a>

```typescript
public readonly ListSizeConstraintSets: string[];
```

- *Type:* string[]

IAM actions required for the ListSizeConstraintSets API call.

---

##### `ListSqlInjectionMatchSets`<sup>Required</sup> <a name="ListSqlInjectionMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListSqlInjectionMatchSets"></a>

```typescript
public readonly ListSqlInjectionMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListSqlInjectionMatchSets API call.

---

##### `ListSubscribedRuleGroups`<sup>Required</sup> <a name="ListSubscribedRuleGroups" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListSubscribedRuleGroups"></a>

```typescript
public readonly ListSubscribedRuleGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscribedRuleGroups API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWebACLs`<sup>Required</sup> <a name="ListWebACLs" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListWebACLs"></a>

```typescript
public readonly ListWebACLs: string[];
```

- *Type:* string[]

IAM actions required for the ListWebACLs API call.

---

##### `ListXssMatchSets`<sup>Required</sup> <a name="ListXssMatchSets" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.ListXssMatchSets"></a>

```typescript
public readonly ListXssMatchSets: string[];
```

- *Type:* string[]

IAM actions required for the ListXssMatchSets API call.

---

##### `opGetByteMatchSet`<sup>Required</sup> <a name="opGetByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetByteMatchSet"></a>

```typescript
public readonly opGetByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetByteMatchSet API call.

---

##### `opGetChangeToken`<sup>Required</sup> <a name="opGetChangeToken" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetChangeToken"></a>

```typescript
public readonly opGetChangeToken: string[];
```

- *Type:* string[]

IAM actions required for the GetChangeToken API call.

---

##### `opGetChangeTokenStatus`<sup>Required</sup> <a name="opGetChangeTokenStatus" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetChangeTokenStatus"></a>

```typescript
public readonly opGetChangeTokenStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetChangeTokenStatus API call.

---

##### `opGetGeoMatchSet`<sup>Required</sup> <a name="opGetGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetGeoMatchSet"></a>

```typescript
public readonly opGetGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetGeoMatchSet API call.

---

##### `opGetIPSet`<sup>Required</sup> <a name="opGetIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetIPSet"></a>

```typescript
public readonly opGetIPSet: string[];
```

- *Type:* string[]

IAM actions required for the GetIPSet API call.

---

##### `opGetLoggingConfiguration`<sup>Required</sup> <a name="opGetLoggingConfiguration" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetLoggingConfiguration"></a>

```typescript
public readonly opGetLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggingConfiguration API call.

---

##### `opGetPermissionPolicy`<sup>Required</sup> <a name="opGetPermissionPolicy" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetPermissionPolicy"></a>

```typescript
public readonly opGetPermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPermissionPolicy API call.

---

##### `opGetRateBasedRule`<sup>Required</sup> <a name="opGetRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRateBasedRule"></a>

```typescript
public readonly opGetRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRateBasedRule API call.

---

##### `opGetRateBasedRuleManagedKeys`<sup>Required</sup> <a name="opGetRateBasedRuleManagedKeys" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRateBasedRuleManagedKeys"></a>

```typescript
public readonly opGetRateBasedRuleManagedKeys: string[];
```

- *Type:* string[]

IAM actions required for the GetRateBasedRuleManagedKeys API call.

---

##### `opGetRegexMatchSet`<sup>Required</sup> <a name="opGetRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRegexMatchSet"></a>

```typescript
public readonly opGetRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetRegexMatchSet API call.

---

##### `opGetRegexPatternSet`<sup>Required</sup> <a name="opGetRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRegexPatternSet"></a>

```typescript
public readonly opGetRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the GetRegexPatternSet API call.

---

##### `opGetRule`<sup>Required</sup> <a name="opGetRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRule"></a>

```typescript
public readonly opGetRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRule API call.

---

##### `opGetRuleGroup`<sup>Required</sup> <a name="opGetRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetRuleGroup"></a>

```typescript
public readonly opGetRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetRuleGroup API call.

---

##### `opGetSampledRequests`<sup>Required</sup> <a name="opGetSampledRequests" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetSampledRequests"></a>

```typescript
public readonly opGetSampledRequests: string[];
```

- *Type:* string[]

IAM actions required for the GetSampledRequests API call.

---

##### `opGetSizeConstraintSet`<sup>Required</sup> <a name="opGetSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetSizeConstraintSet"></a>

```typescript
public readonly opGetSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the GetSizeConstraintSet API call.

---

##### `opGetSqlInjectionMatchSet`<sup>Required</sup> <a name="opGetSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetSqlInjectionMatchSet"></a>

```typescript
public readonly opGetSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetSqlInjectionMatchSet API call.

---

##### `opGetWebACL`<sup>Required</sup> <a name="opGetWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetWebACL"></a>

```typescript
public readonly opGetWebACL: string[];
```

- *Type:* string[]

IAM actions required for the GetWebACL API call.

---

##### `opGetWebACLForResource`<sup>Required</sup> <a name="opGetWebACLForResource" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetWebACLForResource"></a>

```typescript
public readonly opGetWebACLForResource: string[];
```

- *Type:* string[]

IAM actions required for the GetWebACLForResource API call.

---

##### `opGetXssMatchSet`<sup>Required</sup> <a name="opGetXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.opGetXssMatchSet"></a>

```typescript
public readonly opGetXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the GetXssMatchSet API call.

---

##### `PutLoggingConfiguration`<sup>Required</sup> <a name="PutLoggingConfiguration" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.PutLoggingConfiguration"></a>

```typescript
public readonly PutLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutLoggingConfiguration API call.

---

##### `PutPermissionPolicy`<sup>Required</sup> <a name="PutPermissionPolicy" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.PutPermissionPolicy"></a>

```typescript
public readonly PutPermissionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutPermissionPolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateByteMatchSet`<sup>Required</sup> <a name="UpdateByteMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateByteMatchSet"></a>

```typescript
public readonly UpdateByteMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateByteMatchSet API call.

---

##### `UpdateGeoMatchSet`<sup>Required</sup> <a name="UpdateGeoMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateGeoMatchSet"></a>

```typescript
public readonly UpdateGeoMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGeoMatchSet API call.

---

##### `UpdateIPSet`<sup>Required</sup> <a name="UpdateIPSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateIPSet"></a>

```typescript
public readonly UpdateIPSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIPSet API call.

---

##### `UpdateRateBasedRule`<sup>Required</sup> <a name="UpdateRateBasedRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRateBasedRule"></a>

```typescript
public readonly UpdateRateBasedRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRateBasedRule API call.

---

##### `UpdateRegexMatchSet`<sup>Required</sup> <a name="UpdateRegexMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRegexMatchSet"></a>

```typescript
public readonly UpdateRegexMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegexMatchSet API call.

---

##### `UpdateRegexPatternSet`<sup>Required</sup> <a name="UpdateRegexPatternSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRegexPatternSet"></a>

```typescript
public readonly UpdateRegexPatternSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegexPatternSet API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

##### `UpdateRuleGroup`<sup>Required</sup> <a name="UpdateRuleGroup" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateRuleGroup"></a>

```typescript
public readonly UpdateRuleGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRuleGroup API call.

---

##### `UpdateSizeConstraintSet`<sup>Required</sup> <a name="UpdateSizeConstraintSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateSizeConstraintSet"></a>

```typescript
public readonly UpdateSizeConstraintSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSizeConstraintSet API call.

---

##### `UpdateSqlInjectionMatchSet`<sup>Required</sup> <a name="UpdateSqlInjectionMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateSqlInjectionMatchSet"></a>

```typescript
public readonly UpdateSqlInjectionMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSqlInjectionMatchSet API call.

---

##### `UpdateWebACL`<sup>Required</sup> <a name="UpdateWebACL" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateWebACL"></a>

```typescript
public readonly UpdateWebACL: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWebACL API call.

---

##### `UpdateXssMatchSet`<sup>Required</sup> <a name="UpdateXssMatchSet" id="@cdk_utils/iam.waf_regional.WAFRegionalOperations.property.UpdateXssMatchSet"></a>

```typescript
public readonly UpdateXssMatchSet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateXssMatchSet API call.

---

### WAFRegionalResources <a name="WAFRegionalResources" id="@cdk_utils/iam.waf_regional.WAFRegionalResources"></a>

ARN builders, validators, and parsers for waf-regional resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.Initializer"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

new waf_regional.WAFRegionalResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.bytematchset">bytematchset</a></code> | Builds an ARN for the bytematchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.geomatchset">geomatchset</a></code> | Builds an ARN for the geomatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.ipset">ipset</a></code> | Builds an ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidBytematchsetArn">isValidBytematchsetArn</a></code> | Validates whether a string is a valid ARN for the bytematchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidGeomatchsetArn">isValidGeomatchsetArn</a></code> | Validates whether a string is a valid ARN for the geomatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidIpsetArn">isValidIpsetArn</a></code> | Validates whether a string is a valid ARN for the ipset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidLoadbalancerAppArn">isValidLoadbalancerAppArn</a></code> | Validates whether a string is a valid ARN for the loadbalancer/app/ resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRatebasedruleArn">isValidRatebasedruleArn</a></code> | Validates whether a string is a valid ARN for the ratebasedrule resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRegexmatchsetArn">isValidRegexmatchsetArn</a></code> | Validates whether a string is a valid ARN for the regexmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRegexpatternsetArn">isValidRegexpatternsetArn</a></code> | Validates whether a string is a valid ARN for the regexpatternset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRulegroupArn">isValidRulegroupArn</a></code> | Validates whether a string is a valid ARN for the rulegroup resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidSizeconstraintsetArn">isValidSizeconstraintsetArn</a></code> | Validates whether a string is a valid ARN for the sizeconstraintset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidSqlinjectionmatchsetArn">isValidSqlinjectionmatchsetArn</a></code> | Validates whether a string is a valid ARN for the sqlinjectionmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidWebaclArn">isValidWebaclArn</a></code> | Validates whether a string is a valid ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidXssmatchsetArn">isValidXssmatchsetArn</a></code> | Validates whether a string is a valid ARN for the xssmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.loadbalancerApp">loadbalancerApp</a></code> | Builds an ARN for the loadbalancer/app/ resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseBytematchsetArn">parseBytematchsetArn</a></code> | Parses a bytematchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseGeomatchsetArn">parseGeomatchsetArn</a></code> | Parses a geomatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseIpsetArn">parseIpsetArn</a></code> | Parses a ipset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseLoadbalancerAppArn">parseLoadbalancerAppArn</a></code> | Parses a loadbalancer/app/ ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRatebasedruleArn">parseRatebasedruleArn</a></code> | Parses a ratebasedrule ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRegexmatchsetArn">parseRegexmatchsetArn</a></code> | Parses a regexmatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRegexpatternsetArn">parseRegexpatternsetArn</a></code> | Parses a regexpatternset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRulegroupArn">parseRulegroupArn</a></code> | Parses a rulegroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseSizeconstraintsetArn">parseSizeconstraintsetArn</a></code> | Parses a sizeconstraintset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseSqlinjectionmatchsetArn">parseSqlinjectionmatchsetArn</a></code> | Parses a sqlinjectionmatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseWebaclArn">parseWebaclArn</a></code> | Parses a webacl ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.parseXssmatchsetArn">parseXssmatchsetArn</a></code> | Parses a xssmatchset ARN into its components. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.ratebasedrule">ratebasedrule</a></code> | Builds an ARN for the ratebasedrule resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.regexmatchset">regexmatchset</a></code> | Builds an ARN for the regexmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.regexpatternset">regexpatternset</a></code> | Builds an ARN for the regexpatternset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.rule">rule</a></code> | Builds an ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.rulegroup">rulegroup</a></code> | Builds an ARN for the rulegroup resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.sizeconstraintset">sizeconstraintset</a></code> | Builds an ARN for the sizeconstraintset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.sqlinjectionmatchset">sqlinjectionmatchset</a></code> | Builds an ARN for the sqlinjectionmatchset resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.webacl">webacl</a></code> | Builds an ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.waf_regional.WAFRegionalResources.xssmatchset">xssmatchset</a></code> | Builds an ARN for the xssmatchset resource. |

---

##### `bytematchset` <a name="bytematchset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.bytematchset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.bytematchset(props: WAFRegionalBytematchsetArnProps)
```

Builds an ARN for the bytematchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.bytematchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalBytematchsetArnProps">WAFRegionalBytematchsetArnProps</a>

---

##### `geomatchset` <a name="geomatchset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.geomatchset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.geomatchset(props: WAFRegionalGeomatchsetArnProps)
```

Builds an ARN for the geomatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.geomatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalGeomatchsetArnProps">WAFRegionalGeomatchsetArnProps</a>

---

##### `ipset` <a name="ipset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.ipset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.ipset(props: WAFRegionalIpsetArnProps)
```

Builds an ARN for the ipset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.ipset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalIpsetArnProps">WAFRegionalIpsetArnProps</a>

---

##### `isValidBytematchsetArn` <a name="isValidBytematchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidBytematchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidBytematchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the bytematchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidBytematchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGeomatchsetArn` <a name="isValidGeomatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidGeomatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidGeomatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the geomatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidGeomatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIpsetArn` <a name="isValidIpsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidIpsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidIpsetArn(arn: string)
```

Validates whether a string is a valid ARN for the ipset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadbalancerAppArn` <a name="isValidLoadbalancerAppArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidLoadbalancerAppArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidLoadbalancerAppArn(arn: string)
```

Validates whether a string is a valid ARN for the loadbalancer/app/ resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidLoadbalancerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRatebasedruleArn` <a name="isValidRatebasedruleArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRatebasedruleArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidRatebasedruleArn(arn: string)
```

Validates whether a string is a valid ARN for the ratebasedrule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRatebasedruleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegexmatchsetArn` <a name="isValidRegexmatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRegexmatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidRegexmatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the regexmatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRegexmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRegexpatternsetArn` <a name="isValidRegexpatternsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRegexpatternsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidRegexpatternsetArn(arn: string)
```

Validates whether a string is a valid ARN for the regexpatternset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRegexpatternsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRuleArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRulegroupArn` <a name="isValidRulegroupArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRulegroupArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidRulegroupArn(arn: string)
```

Validates whether a string is a valid ARN for the rulegroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidRulegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSizeconstraintsetArn` <a name="isValidSizeconstraintsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidSizeconstraintsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidSizeconstraintsetArn(arn: string)
```

Validates whether a string is a valid ARN for the sizeconstraintset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidSizeconstraintsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSqlinjectionmatchsetArn` <a name="isValidSqlinjectionmatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidSqlinjectionmatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidSqlinjectionmatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the sqlinjectionmatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidSqlinjectionmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebaclArn` <a name="isValidWebaclArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidWebaclArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidWebaclArn(arn: string)
```

Validates whether a string is a valid ARN for the webacl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidXssmatchsetArn` <a name="isValidXssmatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidXssmatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.isValidXssmatchsetArn(arn: string)
```

Validates whether a string is a valid ARN for the xssmatchset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.isValidXssmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `loadbalancerApp` <a name="loadbalancerApp" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.loadbalancerApp"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.loadbalancerApp(props: WAFRegionalLoadbalancerAppArnProps)
```

Builds an ARN for the loadbalancer/app/ resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.loadbalancerApp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalLoadbalancerAppArnProps">WAFRegionalLoadbalancerAppArnProps</a>

---

##### `parseBytematchsetArn` <a name="parseBytematchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseBytematchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseBytematchsetArn(arn: string)
```

Parses a bytematchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseBytematchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGeomatchsetArn` <a name="parseGeomatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseGeomatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseGeomatchsetArn(arn: string)
```

Parses a geomatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseGeomatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIpsetArn` <a name="parseIpsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseIpsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseIpsetArn(arn: string)
```

Parses a ipset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseIpsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadbalancerAppArn` <a name="parseLoadbalancerAppArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseLoadbalancerAppArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseLoadbalancerAppArn(arn: string)
```

Parses a loadbalancer/app/ ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseLoadbalancerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRatebasedruleArn` <a name="parseRatebasedruleArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRatebasedruleArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseRatebasedruleArn(arn: string)
```

Parses a ratebasedrule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRatebasedruleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegexmatchsetArn` <a name="parseRegexmatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRegexmatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseRegexmatchsetArn(arn: string)
```

Parses a regexmatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRegexmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRegexpatternsetArn` <a name="parseRegexpatternsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRegexpatternsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseRegexpatternsetArn(arn: string)
```

Parses a regexpatternset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRegexpatternsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRuleArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRulegroupArn` <a name="parseRulegroupArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRulegroupArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseRulegroupArn(arn: string)
```

Parses a rulegroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseRulegroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSizeconstraintsetArn` <a name="parseSizeconstraintsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseSizeconstraintsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseSizeconstraintsetArn(arn: string)
```

Parses a sizeconstraintset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseSizeconstraintsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSqlinjectionmatchsetArn` <a name="parseSqlinjectionmatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseSqlinjectionmatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseSqlinjectionmatchsetArn(arn: string)
```

Parses a sqlinjectionmatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseSqlinjectionmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebaclArn` <a name="parseWebaclArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseWebaclArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseWebaclArn(arn: string)
```

Parses a webacl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `parseXssmatchsetArn` <a name="parseXssmatchsetArn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseXssmatchsetArn"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.parseXssmatchsetArn(arn: string)
```

Parses a xssmatchset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.parseXssmatchsetArn.parameter.arn"></a>

- *Type:* string

---

##### `ratebasedrule` <a name="ratebasedrule" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.ratebasedrule"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.ratebasedrule(props: WAFRegionalRatebasedruleArnProps)
```

Builds an ARN for the ratebasedrule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.ratebasedrule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalRatebasedruleArnProps">WAFRegionalRatebasedruleArnProps</a>

---

##### `regexmatchset` <a name="regexmatchset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.regexmatchset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.regexmatchset(props: WAFRegionalRegexmatchsetArnProps)
```

Builds an ARN for the regexmatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.regexmatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexmatchsetArnProps">WAFRegionalRegexmatchsetArnProps</a>

---

##### `regexpatternset` <a name="regexpatternset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.regexpatternset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.regexpatternset(props: WAFRegionalRegexpatternsetArnProps)
```

Builds an ARN for the regexpatternset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.regexpatternset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalRegexpatternsetArnProps">WAFRegionalRegexpatternsetArnProps</a>

---

##### `rule` <a name="rule" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.rule"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.rule(props: WAFRegionalRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalRuleArnProps">WAFRegionalRuleArnProps</a>

---

##### `rulegroup` <a name="rulegroup" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.rulegroup"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.rulegroup(props: WAFRegionalRulegroupArnProps)
```

Builds an ARN for the rulegroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.rulegroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalRulegroupArnProps">WAFRegionalRulegroupArnProps</a>

---

##### `sizeconstraintset` <a name="sizeconstraintset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.sizeconstraintset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.sizeconstraintset(props: WAFRegionalSizeconstraintsetArnProps)
```

Builds an ARN for the sizeconstraintset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.sizeconstraintset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalSizeconstraintsetArnProps">WAFRegionalSizeconstraintsetArnProps</a>

---

##### `sqlinjectionmatchset` <a name="sqlinjectionmatchset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.sqlinjectionmatchset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.sqlinjectionmatchset(props: WAFRegionalSqlinjectionmatchsetArnProps)
```

Builds an ARN for the sqlinjectionmatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.sqlinjectionmatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalSqlinjectionmatchsetArnProps">WAFRegionalSqlinjectionmatchsetArnProps</a>

---

##### `webacl` <a name="webacl" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.webacl"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.webacl(props: WAFRegionalWebaclArnProps)
```

Builds an ARN for the webacl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.webacl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalWebaclArnProps">WAFRegionalWebaclArnProps</a>

---

##### `xssmatchset` <a name="xssmatchset" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.xssmatchset"></a>

```typescript
import { waf_regional } from '@cdk_utils/iam'

waf_regional.WAFRegionalResources.xssmatchset(props: WAFRegionalXssmatchsetArnProps)
```

Builds an ARN for the xssmatchset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.waf_regional.WAFRegionalResources.xssmatchset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.waf_regional.WAFRegionalXssmatchsetArnProps">WAFRegionalXssmatchsetArnProps</a>

---




