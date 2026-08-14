# `elasticloadbalancing` Submodule <a name="`elasticloadbalancing` Submodule" id="@cdk_utils/iam.elasticloadbalancing"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElasticloadbalancingListenerAppArnComponents <a name="ElasticloadbalancingListenerAppArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents"></a>

Parsed components of a listener/app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerAppArnComponents: elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingListenerAppArnProps <a name="ElasticloadbalancingListenerAppArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps"></a>

Properties for building a listener/app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerAppArnProps: elasticloadbalancing.ElasticloadbalancingListenerAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingListenerGwyArnComponents <a name="ElasticloadbalancingListenerGwyArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents"></a>

Parsed components of a listener/gwy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerGwyArnComponents: elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingListenerGwyArnProps <a name="ElasticloadbalancingListenerGwyArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps"></a>

Properties for building a listener/gwy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerGwyArnProps: elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingListenerNetArnComponents <a name="ElasticloadbalancingListenerNetArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents"></a>

Parsed components of a listener/net ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerNetArnComponents: elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingListenerNetArnProps <a name="ElasticloadbalancingListenerNetArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps"></a>

Properties for building a listener/net ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerNetArnProps: elasticloadbalancing.ElasticloadbalancingListenerNetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingListenerRuleAppArnComponents <a name="ElasticloadbalancingListenerRuleAppArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents"></a>

Parsed components of a listener-rule/app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerRuleAppArnComponents: elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.listenerRuleId">listenerRuleId</a></code> | <code>string</code> | The ListenerRuleId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `listenerRuleId`<sup>Required</sup> <a name="listenerRuleId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.listenerRuleId"></a>

```typescript
public readonly listenerRuleId: string;
```

- *Type:* string

The ListenerRuleId component.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingListenerRuleAppArnProps <a name="ElasticloadbalancingListenerRuleAppArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps"></a>

Properties for building a listener-rule/app ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerRuleAppArnProps: elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.listenerRuleId">listenerRuleId</a></code> | <code>string</code> | The ListenerRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `listenerRuleId`<sup>Required</sup> <a name="listenerRuleId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.listenerRuleId"></a>

```typescript
public readonly listenerRuleId: string;
```

- *Type:* string

The ListenerRuleId component of the ARN.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingListenerRuleNetArnComponents <a name="ElasticloadbalancingListenerRuleNetArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents"></a>

Parsed components of a listener-rule/net ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerRuleNetArnComponents: elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.listenerRuleId">listenerRuleId</a></code> | <code>string</code> | The ListenerRuleId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `listenerRuleId`<sup>Required</sup> <a name="listenerRuleId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.listenerRuleId"></a>

```typescript
public readonly listenerRuleId: string;
```

- *Type:* string

The ListenerRuleId component.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingListenerRuleNetArnProps <a name="ElasticloadbalancingListenerRuleNetArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps"></a>

Properties for building a listener-rule/net ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingListenerRuleNetArnProps: elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.listenerRuleId">listenerRuleId</a></code> | <code>string</code> | The ListenerRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `listenerRuleId`<sup>Required</sup> <a name="listenerRuleId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.listenerRuleId"></a>

```typescript
public readonly listenerRuleId: string;
```

- *Type:* string

The ListenerRuleId component of the ARN.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingLoadbalancerAppArnComponents <a name="ElasticloadbalancingLoadbalancerAppArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents"></a>

Parsed components of a loadbalancer/app/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerAppArnComponents: elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingLoadbalancerAppArnProps <a name="ElasticloadbalancingLoadbalancerAppArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps"></a>

Properties for building a loadbalancer/app/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerAppArnProps: elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingLoadbalancerArnComponents <a name="ElasticloadbalancingLoadbalancerArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents"></a>

Parsed components of a loadbalancer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerArnComponents: elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingLoadbalancerArnProps <a name="ElasticloadbalancingLoadbalancerArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps"></a>

Properties for building a loadbalancer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerArnProps: elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingLoadbalancerGwyArnComponents <a name="ElasticloadbalancingLoadbalancerGwyArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents"></a>

Parsed components of a loadbalancer/gwy/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerGwyArnComponents: elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingLoadbalancerGwyArnProps <a name="ElasticloadbalancingLoadbalancerGwyArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps"></a>

Properties for building a loadbalancer/gwy/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerGwyArnProps: elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingLoadbalancerNetArnComponents <a name="ElasticloadbalancingLoadbalancerNetArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents"></a>

Parsed components of a loadbalancer/net/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerNetArnComponents: elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ElasticloadbalancingLoadbalancerNetArnProps <a name="ElasticloadbalancingLoadbalancerNetArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps"></a>

Properties for building a loadbalancer/net/ ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingLoadbalancerNetArnProps: elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.loadBalancerId">loadBalancerId</a></code> | <code>string</code> | The LoadBalancerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.loadBalancerName">loadBalancerName</a></code> | <code>string</code> | The LoadBalancerName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `loadBalancerId`<sup>Required</sup> <a name="loadBalancerId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.loadBalancerId"></a>

```typescript
public readonly loadBalancerId: string;
```

- *Type:* string

The LoadBalancerId component of the ARN.

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.loadBalancerName"></a>

```typescript
public readonly loadBalancerName: string;
```

- *Type:* string

The LoadBalancerName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingTargetgroupArnComponents <a name="ElasticloadbalancingTargetgroupArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents"></a>

Parsed components of a targetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingTargetgroupArnComponents: elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The TargetGroupId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | The TargetGroupName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The TargetGroupId component.

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnComponents.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

The TargetGroupName component.

---

### ElasticloadbalancingTargetgroupArnProps <a name="ElasticloadbalancingTargetgroupArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps"></a>

Properties for building a targetgroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingTargetgroupArnProps: elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The TargetGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.targetGroupName">targetGroupName</a></code> | <code>string</code> | The TargetGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The TargetGroupId component of the ARN.

---

##### `targetGroupName`<sup>Required</sup> <a name="targetGroupName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.targetGroupName"></a>

```typescript
public readonly targetGroupName: string;
```

- *Type:* string

The TargetGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ElasticloadbalancingTruststoreArnComponents <a name="ElasticloadbalancingTruststoreArnComponents" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents"></a>

Parsed components of a truststore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingTruststoreArnComponents: elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.trustStoreId">trustStoreId</a></code> | <code>string</code> | The TrustStoreId component. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.trustStoreName">trustStoreName</a></code> | <code>string</code> | The TrustStoreName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `trustStoreId`<sup>Required</sup> <a name="trustStoreId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.trustStoreId"></a>

```typescript
public readonly trustStoreId: string;
```

- *Type:* string

The TrustStoreId component.

---

##### `trustStoreName`<sup>Required</sup> <a name="trustStoreName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnComponents.property.trustStoreName"></a>

```typescript
public readonly trustStoreName: string;
```

- *Type:* string

The TrustStoreName component.

---

### ElasticloadbalancingTruststoreArnProps <a name="ElasticloadbalancingTruststoreArnProps" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps"></a>

Properties for building a truststore ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

const elasticloadbalancingTruststoreArnProps: elasticloadbalancing.ElasticloadbalancingTruststoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.trustStoreId">trustStoreId</a></code> | <code>string</code> | The TrustStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.trustStoreName">trustStoreName</a></code> | <code>string</code> | The TrustStoreName component of the ARN. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `trustStoreId`<sup>Required</sup> <a name="trustStoreId" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.trustStoreId"></a>

```typescript
public readonly trustStoreId: string;
```

- *Type:* string

The TrustStoreId component of the ARN.

---

##### `trustStoreName`<sup>Required</sup> <a name="trustStoreName" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.trustStoreName"></a>

```typescript
public readonly trustStoreName: string;
```

- *Type:* string

The TrustStoreName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticloadbalancingActions <a name="ElasticloadbalancingActions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions"></a>

IAM action constants for the elasticloadbalancing service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

new elasticloadbalancing.ElasticloadbalancingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetLoadBalancerWebACL">actionGetLoadBalancerWebACL</a></code> | <code>string</code> | [Read] elasticloadbalancing:GetLoadBalancerWebACL. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] elasticloadbalancing:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetTrustStoreCaCertificatesBundle">actionGetTrustStoreCaCertificatesBundle</a></code> | <code>string</code> | [Read] elasticloadbalancing:GetTrustStoreCaCertificatesBundle. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetTrustStoreRevocationContent">actionGetTrustStoreRevocationContent</a></code> | <code>string</code> | [Read] elasticloadbalancing:GetTrustStoreRevocationContent. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetIpAddressType">actionSetIpAddressType</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetIpAddressType. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetLoadBalancerListenerSSLCertificate">actionSetLoadBalancerListenerSSLCertificate</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetLoadBalancerListenerSSLCertificate. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetLoadBalancerPoliciesForBackendServer">actionSetLoadBalancerPoliciesForBackendServer</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetLoadBalancerPoliciesOfListener">actionSetLoadBalancerPoliciesOfListener</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetLoadBalancerPoliciesOfListener. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetRulePriorities">actionSetRulePriorities</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetRulePriorities. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetSecurityGroups">actionSetSecurityGroups</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetSecurityGroups. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetSubnets">actionSetSubnets</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetSubnets. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetWebAcl">actionSetWebAcl</a></code> | <code>string</code> | [Write] elasticloadbalancing:SetWebAcl. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AddListenerCertificates">AddListenerCertificates</a></code> | <code>string</code> | [Write] elasticloadbalancing:AddListenerCertificates. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AddTags">AddTags</a></code> | <code>string</code> | [Tagging] elasticloadbalancing:AddTags. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AddTrustStoreRevocations">AddTrustStoreRevocations</a></code> | <code>string</code> | [Write] elasticloadbalancing:AddTrustStoreRevocations. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllowVendedLogDeliveryForResource">AllowVendedLogDeliveryForResource</a></code> | <code>string</code> | [PermissionManagement] elasticloadbalancing:AllowVendedLogDeliveryForResource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ApplySecurityGroupsToLoadBalancer">ApplySecurityGroupsToLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:ApplySecurityGroupsToLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AttachLoadBalancerToSubnets">AttachLoadBalancerToSubnets</a></code> | <code>string</code> | [Write] elasticloadbalancing:AttachLoadBalancerToSubnets. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ConfigureHealthCheck">ConfigureHealthCheck</a></code> | <code>string</code> | [Write] elasticloadbalancing:ConfigureHealthCheck. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateAppCookieStickinessPolicy">CreateAppCookieStickinessPolicy</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateAppCookieStickinessPolicy. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLBCookieStickinessPolicy">CreateLBCookieStickinessPolicy</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateLBCookieStickinessPolicy. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateListener">CreateListener</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateListener. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLoadBalancer">CreateLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLoadBalancerListeners">CreateLoadBalancerListeners</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateLoadBalancerListeners. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLoadBalancerPolicy">CreateLoadBalancerPolicy</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateLoadBalancerPolicy. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateRule. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateTargetGroup">CreateTargetGroup</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateTargetGroup. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateTrustStore">CreateTrustStore</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateTrustStore. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateWebACLAssociation">CreateWebACLAssociation</a></code> | <code>string</code> | [Write] elasticloadbalancing:CreateWebACLAssociation. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteListener">DeleteListener</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteListener. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteLoadBalancer">DeleteLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteLoadBalancerListeners">DeleteLoadBalancerListeners</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteLoadBalancerListeners. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteLoadBalancerPolicy">DeleteLoadBalancerPolicy</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteLoadBalancerPolicy. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteRule. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteSharedTrustStoreAssociation">DeleteSharedTrustStoreAssociation</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteSharedTrustStoreAssociation. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteTargetGroup">DeleteTargetGroup</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteTargetGroup. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteTrustStore">DeleteTrustStore</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteTrustStore. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteWebACLAssociation">DeleteWebACLAssociation</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeleteWebACLAssociation. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeregisterInstancesFromLoadBalancer">DeregisterInstancesFromLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeregisterInstancesFromLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeregisterTargets">DeregisterTargets</a></code> | <code>string</code> | [Write] elasticloadbalancing:DeregisterTargets. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeAccountLimits. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeCapacityReservation">DescribeCapacityReservation</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeCapacityReservation. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeInstanceHealth">DescribeInstanceHealth</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeInstanceHealth. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeListenerAttributes">DescribeListenerAttributes</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeListenerAttributes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeListenerCertificates">DescribeListenerCertificates</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeListenerCertificates. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeListeners">DescribeListeners</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeListeners. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancerAttributes">DescribeLoadBalancerAttributes</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeLoadBalancerAttributes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancerPolicies">DescribeLoadBalancerPolicies</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeLoadBalancerPolicies. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancerPolicyTypes">DescribeLoadBalancerPolicyTypes</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeLoadBalancerPolicyTypes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancers">DescribeLoadBalancers</a></code> | <code>string</code> | [List] elasticloadbalancing:DescribeLoadBalancers. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeRules">DescribeRules</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeRules. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeSSLPolicies">DescribeSSLPolicies</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeSSLPolicies. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTags. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTargetGroupAttributes">DescribeTargetGroupAttributes</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTargetGroupAttributes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTargetGroups">DescribeTargetGroups</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTargetGroups. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTargetHealth">DescribeTargetHealth</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTargetHealth. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTrustStoreAssociations">DescribeTrustStoreAssociations</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTrustStoreAssociations. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTrustStoreRevocations">DescribeTrustStoreRevocations</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTrustStoreRevocations. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTrustStores">DescribeTrustStores</a></code> | <code>string</code> | [Read] elasticloadbalancing:DescribeTrustStores. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeWebACLAssociation">DescribeWebACLAssociation</a></code> | <code>string</code> | [List] elasticloadbalancing:DescribeWebACLAssociation. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DetachLoadBalancerFromSubnets">DetachLoadBalancerFromSubnets</a></code> | <code>string</code> | [Write] elasticloadbalancing:DetachLoadBalancerFromSubnets. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DisableAvailabilityZonesForLoadBalancer">DisableAvailabilityZonesForLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.EnableAvailabilityZonesForLoadBalancer">EnableAvailabilityZonesForLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyCapacityReservation">ModifyCapacityReservation</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyCapacityReservation. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyIpPools">ModifyIpPools</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyIpPools. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyListener">ModifyListener</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyListener. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyListenerAttributes">ModifyListenerAttributes</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyListenerAttributes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyLoadBalancerAttributes">ModifyLoadBalancerAttributes</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyLoadBalancerAttributes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyRule">ModifyRule</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyRule. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyTargetGroup">ModifyTargetGroup</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyTargetGroup. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyTargetGroupAttributes">ModifyTargetGroupAttributes</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyTargetGroupAttributes. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyTrustStore">ModifyTrustStore</a></code> | <code>string</code> | [Write] elasticloadbalancing:ModifyTrustStore. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RegisterInstancesWithLoadBalancer">RegisterInstancesWithLoadBalancer</a></code> | <code>string</code> | [Write] elasticloadbalancing:RegisterInstancesWithLoadBalancer. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RegisterTargets">RegisterTargets</a></code> | <code>string</code> | [Write] elasticloadbalancing:RegisterTargets. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RemoveListenerCertificates">RemoveListenerCertificates</a></code> | <code>string</code> | [Write] elasticloadbalancing:RemoveListenerCertificates. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RemoveTags">RemoveTags</a></code> | <code>string</code> | [Tagging] elasticloadbalancing:RemoveTags. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RemoveTrustStoreRevocations">RemoveTrustStoreRevocations</a></code> | <code>string</code> | [Write] elasticloadbalancing:RemoveTrustStoreRevocations. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetLoadBalancerWebACL`<sup>Required</sup> <a name="actionGetLoadBalancerWebACL" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetLoadBalancerWebACL"></a>

```typescript
public readonly actionGetLoadBalancerWebACL: string;
```

- *Type:* string

[Read] elasticloadbalancing:GetLoadBalancerWebACL.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] elasticloadbalancing:GetResourcePolicy.

---

##### `actionGetTrustStoreCaCertificatesBundle`<sup>Required</sup> <a name="actionGetTrustStoreCaCertificatesBundle" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetTrustStoreCaCertificatesBundle"></a>

```typescript
public readonly actionGetTrustStoreCaCertificatesBundle: string;
```

- *Type:* string

[Read] elasticloadbalancing:GetTrustStoreCaCertificatesBundle.

---

##### `actionGetTrustStoreRevocationContent`<sup>Required</sup> <a name="actionGetTrustStoreRevocationContent" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionGetTrustStoreRevocationContent"></a>

```typescript
public readonly actionGetTrustStoreRevocationContent: string;
```

- *Type:* string

[Read] elasticloadbalancing:GetTrustStoreRevocationContent.

---

##### `actionSetIpAddressType`<sup>Required</sup> <a name="actionSetIpAddressType" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetIpAddressType"></a>

```typescript
public readonly actionSetIpAddressType: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetIpAddressType.

---

##### `actionSetLoadBalancerListenerSSLCertificate`<sup>Required</sup> <a name="actionSetLoadBalancerListenerSSLCertificate" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetLoadBalancerListenerSSLCertificate"></a>

```typescript
public readonly actionSetLoadBalancerListenerSSLCertificate: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetLoadBalancerListenerSSLCertificate.

---

##### `actionSetLoadBalancerPoliciesForBackendServer`<sup>Required</sup> <a name="actionSetLoadBalancerPoliciesForBackendServer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetLoadBalancerPoliciesForBackendServer"></a>

```typescript
public readonly actionSetLoadBalancerPoliciesForBackendServer: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetLoadBalancerPoliciesForBackendServer.

---

##### `actionSetLoadBalancerPoliciesOfListener`<sup>Required</sup> <a name="actionSetLoadBalancerPoliciesOfListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetLoadBalancerPoliciesOfListener"></a>

```typescript
public readonly actionSetLoadBalancerPoliciesOfListener: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetLoadBalancerPoliciesOfListener.

---

##### `actionSetRulePriorities`<sup>Required</sup> <a name="actionSetRulePriorities" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetRulePriorities"></a>

```typescript
public readonly actionSetRulePriorities: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetRulePriorities.

---

##### `actionSetSecurityGroups`<sup>Required</sup> <a name="actionSetSecurityGroups" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetSecurityGroups"></a>

```typescript
public readonly actionSetSecurityGroups: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetSecurityGroups.

---

##### `actionSetSubnets`<sup>Required</sup> <a name="actionSetSubnets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetSubnets"></a>

```typescript
public readonly actionSetSubnets: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetSubnets.

---

##### `actionSetWebAcl`<sup>Required</sup> <a name="actionSetWebAcl" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.actionSetWebAcl"></a>

```typescript
public readonly actionSetWebAcl: string;
```

- *Type:* string

[Write] elasticloadbalancing:SetWebAcl.

---

##### `AddListenerCertificates`<sup>Required</sup> <a name="AddListenerCertificates" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AddListenerCertificates"></a>

```typescript
public readonly AddListenerCertificates: string;
```

- *Type:* string

[Write] elasticloadbalancing:AddListenerCertificates.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AddTags"></a>

```typescript
public readonly AddTags: string;
```

- *Type:* string

[Tagging] elasticloadbalancing:AddTags.

---

##### `AddTrustStoreRevocations`<sup>Required</sup> <a name="AddTrustStoreRevocations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AddTrustStoreRevocations"></a>

```typescript
public readonly AddTrustStoreRevocations: string;
```

- *Type:* string

[Write] elasticloadbalancing:AddTrustStoreRevocations.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllowVendedLogDeliveryForResource`<sup>Required</sup> <a name="AllowVendedLogDeliveryForResource" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllowVendedLogDeliveryForResource"></a>

```typescript
public readonly AllowVendedLogDeliveryForResource: string;
```

- *Type:* string

[PermissionManagement] elasticloadbalancing:AllowVendedLogDeliveryForResource.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ApplySecurityGroupsToLoadBalancer`<sup>Required</sup> <a name="ApplySecurityGroupsToLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ApplySecurityGroupsToLoadBalancer"></a>

```typescript
public readonly ApplySecurityGroupsToLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:ApplySecurityGroupsToLoadBalancer.

---

##### `AttachLoadBalancerToSubnets`<sup>Required</sup> <a name="AttachLoadBalancerToSubnets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.AttachLoadBalancerToSubnets"></a>

```typescript
public readonly AttachLoadBalancerToSubnets: string;
```

- *Type:* string

[Write] elasticloadbalancing:AttachLoadBalancerToSubnets.

---

##### `ConfigureHealthCheck`<sup>Required</sup> <a name="ConfigureHealthCheck" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ConfigureHealthCheck"></a>

```typescript
public readonly ConfigureHealthCheck: string;
```

- *Type:* string

[Write] elasticloadbalancing:ConfigureHealthCheck.

---

##### `CreateAppCookieStickinessPolicy`<sup>Required</sup> <a name="CreateAppCookieStickinessPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateAppCookieStickinessPolicy"></a>

```typescript
public readonly CreateAppCookieStickinessPolicy: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateAppCookieStickinessPolicy.

---

##### `CreateLBCookieStickinessPolicy`<sup>Required</sup> <a name="CreateLBCookieStickinessPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLBCookieStickinessPolicy"></a>

```typescript
public readonly CreateLBCookieStickinessPolicy: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateLBCookieStickinessPolicy.

---

##### `CreateListener`<sup>Required</sup> <a name="CreateListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateListener"></a>

```typescript
public readonly CreateListener: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateListener.

---

##### `CreateLoadBalancer`<sup>Required</sup> <a name="CreateLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLoadBalancer"></a>

```typescript
public readonly CreateLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateLoadBalancer.

---

##### `CreateLoadBalancerListeners`<sup>Required</sup> <a name="CreateLoadBalancerListeners" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLoadBalancerListeners"></a>

```typescript
public readonly CreateLoadBalancerListeners: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateLoadBalancerListeners.

---

##### `CreateLoadBalancerPolicy`<sup>Required</sup> <a name="CreateLoadBalancerPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateLoadBalancerPolicy"></a>

```typescript
public readonly CreateLoadBalancerPolicy: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateLoadBalancerPolicy.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateRule.

---

##### `CreateTargetGroup`<sup>Required</sup> <a name="CreateTargetGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateTargetGroup"></a>

```typescript
public readonly CreateTargetGroup: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateTargetGroup.

---

##### `CreateTrustStore`<sup>Required</sup> <a name="CreateTrustStore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateTrustStore"></a>

```typescript
public readonly CreateTrustStore: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateTrustStore.

---

##### `CreateWebACLAssociation`<sup>Required</sup> <a name="CreateWebACLAssociation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.CreateWebACLAssociation"></a>

```typescript
public readonly CreateWebACLAssociation: string;
```

- *Type:* string

[Write] elasticloadbalancing:CreateWebACLAssociation.

---

##### `DeleteListener`<sup>Required</sup> <a name="DeleteListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteListener"></a>

```typescript
public readonly DeleteListener: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteListener.

---

##### `DeleteLoadBalancer`<sup>Required</sup> <a name="DeleteLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteLoadBalancer"></a>

```typescript
public readonly DeleteLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteLoadBalancer.

---

##### `DeleteLoadBalancerListeners`<sup>Required</sup> <a name="DeleteLoadBalancerListeners" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteLoadBalancerListeners"></a>

```typescript
public readonly DeleteLoadBalancerListeners: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteLoadBalancerListeners.

---

##### `DeleteLoadBalancerPolicy`<sup>Required</sup> <a name="DeleteLoadBalancerPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteLoadBalancerPolicy"></a>

```typescript
public readonly DeleteLoadBalancerPolicy: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteLoadBalancerPolicy.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteRule.

---

##### `DeleteSharedTrustStoreAssociation`<sup>Required</sup> <a name="DeleteSharedTrustStoreAssociation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteSharedTrustStoreAssociation"></a>

```typescript
public readonly DeleteSharedTrustStoreAssociation: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteSharedTrustStoreAssociation.

---

##### `DeleteTargetGroup`<sup>Required</sup> <a name="DeleteTargetGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteTargetGroup"></a>

```typescript
public readonly DeleteTargetGroup: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteTargetGroup.

---

##### `DeleteTrustStore`<sup>Required</sup> <a name="DeleteTrustStore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteTrustStore"></a>

```typescript
public readonly DeleteTrustStore: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteTrustStore.

---

##### `DeleteWebACLAssociation`<sup>Required</sup> <a name="DeleteWebACLAssociation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeleteWebACLAssociation"></a>

```typescript
public readonly DeleteWebACLAssociation: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeleteWebACLAssociation.

---

##### `DeregisterInstancesFromLoadBalancer`<sup>Required</sup> <a name="DeregisterInstancesFromLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeregisterInstancesFromLoadBalancer"></a>

```typescript
public readonly DeregisterInstancesFromLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeregisterInstancesFromLoadBalancer.

---

##### `DeregisterTargets`<sup>Required</sup> <a name="DeregisterTargets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DeregisterTargets"></a>

```typescript
public readonly DeregisterTargets: string;
```

- *Type:* string

[Write] elasticloadbalancing:DeregisterTargets.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeAccountLimits.

---

##### `DescribeCapacityReservation`<sup>Required</sup> <a name="DescribeCapacityReservation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeCapacityReservation"></a>

```typescript
public readonly DescribeCapacityReservation: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeCapacityReservation.

---

##### `DescribeInstanceHealth`<sup>Required</sup> <a name="DescribeInstanceHealth" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeInstanceHealth"></a>

```typescript
public readonly DescribeInstanceHealth: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeInstanceHealth.

---

##### `DescribeListenerAttributes`<sup>Required</sup> <a name="DescribeListenerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeListenerAttributes"></a>

```typescript
public readonly DescribeListenerAttributes: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeListenerAttributes.

---

##### `DescribeListenerCertificates`<sup>Required</sup> <a name="DescribeListenerCertificates" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeListenerCertificates"></a>

```typescript
public readonly DescribeListenerCertificates: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeListenerCertificates.

---

##### `DescribeListeners`<sup>Required</sup> <a name="DescribeListeners" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeListeners"></a>

```typescript
public readonly DescribeListeners: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeListeners.

---

##### `DescribeLoadBalancerAttributes`<sup>Required</sup> <a name="DescribeLoadBalancerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancerAttributes"></a>

```typescript
public readonly DescribeLoadBalancerAttributes: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeLoadBalancerAttributes.

---

##### `DescribeLoadBalancerPolicies`<sup>Required</sup> <a name="DescribeLoadBalancerPolicies" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancerPolicies"></a>

```typescript
public readonly DescribeLoadBalancerPolicies: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeLoadBalancerPolicies.

---

##### `DescribeLoadBalancerPolicyTypes`<sup>Required</sup> <a name="DescribeLoadBalancerPolicyTypes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancerPolicyTypes"></a>

```typescript
public readonly DescribeLoadBalancerPolicyTypes: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeLoadBalancerPolicyTypes.

---

##### `DescribeLoadBalancers`<sup>Required</sup> <a name="DescribeLoadBalancers" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeLoadBalancers"></a>

```typescript
public readonly DescribeLoadBalancers: string;
```

- *Type:* string

[List] elasticloadbalancing:DescribeLoadBalancers.

---

##### `DescribeRules`<sup>Required</sup> <a name="DescribeRules" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeRules"></a>

```typescript
public readonly DescribeRules: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeRules.

---

##### `DescribeSSLPolicies`<sup>Required</sup> <a name="DescribeSSLPolicies" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeSSLPolicies"></a>

```typescript
public readonly DescribeSSLPolicies: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeSSLPolicies.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTags.

---

##### `DescribeTargetGroupAttributes`<sup>Required</sup> <a name="DescribeTargetGroupAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTargetGroupAttributes"></a>

```typescript
public readonly DescribeTargetGroupAttributes: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTargetGroupAttributes.

---

##### `DescribeTargetGroups`<sup>Required</sup> <a name="DescribeTargetGroups" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTargetGroups"></a>

```typescript
public readonly DescribeTargetGroups: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTargetGroups.

---

##### `DescribeTargetHealth`<sup>Required</sup> <a name="DescribeTargetHealth" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTargetHealth"></a>

```typescript
public readonly DescribeTargetHealth: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTargetHealth.

---

##### `DescribeTrustStoreAssociations`<sup>Required</sup> <a name="DescribeTrustStoreAssociations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTrustStoreAssociations"></a>

```typescript
public readonly DescribeTrustStoreAssociations: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTrustStoreAssociations.

---

##### `DescribeTrustStoreRevocations`<sup>Required</sup> <a name="DescribeTrustStoreRevocations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTrustStoreRevocations"></a>

```typescript
public readonly DescribeTrustStoreRevocations: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTrustStoreRevocations.

---

##### `DescribeTrustStores`<sup>Required</sup> <a name="DescribeTrustStores" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeTrustStores"></a>

```typescript
public readonly DescribeTrustStores: string;
```

- *Type:* string

[Read] elasticloadbalancing:DescribeTrustStores.

---

##### `DescribeWebACLAssociation`<sup>Required</sup> <a name="DescribeWebACLAssociation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DescribeWebACLAssociation"></a>

```typescript
public readonly DescribeWebACLAssociation: string;
```

- *Type:* string

[List] elasticloadbalancing:DescribeWebACLAssociation.

---

##### `DetachLoadBalancerFromSubnets`<sup>Required</sup> <a name="DetachLoadBalancerFromSubnets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DetachLoadBalancerFromSubnets"></a>

```typescript
public readonly DetachLoadBalancerFromSubnets: string;
```

- *Type:* string

[Write] elasticloadbalancing:DetachLoadBalancerFromSubnets.

---

##### `DisableAvailabilityZonesForLoadBalancer`<sup>Required</sup> <a name="DisableAvailabilityZonesForLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.DisableAvailabilityZonesForLoadBalancer"></a>

```typescript
public readonly DisableAvailabilityZonesForLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:DisableAvailabilityZonesForLoadBalancer.

---

##### `EnableAvailabilityZonesForLoadBalancer`<sup>Required</sup> <a name="EnableAvailabilityZonesForLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.EnableAvailabilityZonesForLoadBalancer"></a>

```typescript
public readonly EnableAvailabilityZonesForLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:EnableAvailabilityZonesForLoadBalancer.

---

##### `ModifyCapacityReservation`<sup>Required</sup> <a name="ModifyCapacityReservation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyCapacityReservation"></a>

```typescript
public readonly ModifyCapacityReservation: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyCapacityReservation.

---

##### `ModifyIpPools`<sup>Required</sup> <a name="ModifyIpPools" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyIpPools"></a>

```typescript
public readonly ModifyIpPools: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyIpPools.

---

##### `ModifyListener`<sup>Required</sup> <a name="ModifyListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyListener"></a>

```typescript
public readonly ModifyListener: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyListener.

---

##### `ModifyListenerAttributes`<sup>Required</sup> <a name="ModifyListenerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyListenerAttributes"></a>

```typescript
public readonly ModifyListenerAttributes: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyListenerAttributes.

---

##### `ModifyLoadBalancerAttributes`<sup>Required</sup> <a name="ModifyLoadBalancerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyLoadBalancerAttributes"></a>

```typescript
public readonly ModifyLoadBalancerAttributes: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyLoadBalancerAttributes.

---

##### `ModifyRule`<sup>Required</sup> <a name="ModifyRule" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyRule"></a>

```typescript
public readonly ModifyRule: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyRule.

---

##### `ModifyTargetGroup`<sup>Required</sup> <a name="ModifyTargetGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyTargetGroup"></a>

```typescript
public readonly ModifyTargetGroup: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyTargetGroup.

---

##### `ModifyTargetGroupAttributes`<sup>Required</sup> <a name="ModifyTargetGroupAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyTargetGroupAttributes"></a>

```typescript
public readonly ModifyTargetGroupAttributes: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyTargetGroupAttributes.

---

##### `ModifyTrustStore`<sup>Required</sup> <a name="ModifyTrustStore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.ModifyTrustStore"></a>

```typescript
public readonly ModifyTrustStore: string;
```

- *Type:* string

[Write] elasticloadbalancing:ModifyTrustStore.

---

##### `RegisterInstancesWithLoadBalancer`<sup>Required</sup> <a name="RegisterInstancesWithLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RegisterInstancesWithLoadBalancer"></a>

```typescript
public readonly RegisterInstancesWithLoadBalancer: string;
```

- *Type:* string

[Write] elasticloadbalancing:RegisterInstancesWithLoadBalancer.

---

##### `RegisterTargets`<sup>Required</sup> <a name="RegisterTargets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RegisterTargets"></a>

```typescript
public readonly RegisterTargets: string;
```

- *Type:* string

[Write] elasticloadbalancing:RegisterTargets.

---

##### `RemoveListenerCertificates`<sup>Required</sup> <a name="RemoveListenerCertificates" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RemoveListenerCertificates"></a>

```typescript
public readonly RemoveListenerCertificates: string;
```

- *Type:* string

[Write] elasticloadbalancing:RemoveListenerCertificates.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string;
```

- *Type:* string

[Tagging] elasticloadbalancing:RemoveTags.

---

##### `RemoveTrustStoreRevocations`<sup>Required</sup> <a name="RemoveTrustStoreRevocations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.RemoveTrustStoreRevocations"></a>

```typescript
public readonly RemoveTrustStoreRevocations: string;
```

- *Type:* string

[Write] elasticloadbalancing:RemoveTrustStoreRevocations.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### ElasticloadbalancingConditions <a name="ElasticloadbalancingConditions" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions"></a>

Condition key constants and builders for elasticloadbalancing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

new elasticloadbalancing.ElasticloadbalancingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.createAction">createAction</a></code> | Generates a condition block for `elasticloadbalancing:CreateAction`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.listenerProtocol">listenerProtocol</a></code> | Generates a condition block for `elasticloadbalancing:ListenerProtocol`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.scheme">scheme</a></code> | Generates a condition block for `elasticloadbalancing:Scheme`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.securityGroup">securityGroup</a></code> | Generates a condition block for `elasticloadbalancing:SecurityGroup`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.securityPolicy">securityPolicy</a></code> | Generates a condition block for `elasticloadbalancing:SecurityPolicy`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.subnet">subnet</a></code> | Generates a condition block for `elasticloadbalancing:Subnet`. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.createAction"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.createAction(value: string)
```

Generates a condition block for `elasticloadbalancing:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `listenerProtocol` <a name="listenerProtocol" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.listenerProtocol"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.listenerProtocol(values: string[])
```

Generates a condition block for `elasticloadbalancing:ListenerProtocol`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.listenerProtocol.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.requestTag"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.resourceTag"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `scheme` <a name="scheme" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.scheme"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.scheme(value: string)
```

Generates a condition block for `elasticloadbalancing:Scheme`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.scheme.parameter.value"></a>

- *Type:* string

---

##### `securityGroup` <a name="securityGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.securityGroup"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.securityGroup(values: string[])
```

Generates a condition block for `elasticloadbalancing:SecurityGroup`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.securityGroup.parameter.values"></a>

- *Type:* string[]

---

##### `securityPolicy` <a name="securityPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.securityPolicy"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.securityPolicy(values: string[])
```

Generates a condition block for `elasticloadbalancing:SecurityPolicy`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.securityPolicy.parameter.values"></a>

- *Type:* string[]

---

##### `subnet` <a name="subnet" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.subnet"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.subnet(values: string[])
```

Generates a condition block for `elasticloadbalancing:Subnet`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.subnet.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.tagKeys"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetLoadBalancerWebACLConditionKeys">actionGetLoadBalancerWebACLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetLoadBalancerWebACL action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetResourcePolicyConditionKeys">actionGetResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetTrustStoreCaCertificatesBundleConditionKeys">actionGetTrustStoreCaCertificatesBundleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTrustStoreCaCertificatesBundle action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetTrustStoreRevocationContentConditionKeys">actionGetTrustStoreRevocationContentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTrustStoreRevocationContent action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetIpAddressTypeConditionKeys">actionSetIpAddressTypeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetIpAddressType action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetLoadBalancerListenerSSLCertificateConditionKeys">actionSetLoadBalancerListenerSSLCertificateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetLoadBalancerListenerSSLCertificate action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetLoadBalancerPoliciesForBackendServerConditionKeys">actionSetLoadBalancerPoliciesForBackendServerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetLoadBalancerPoliciesForBackendServer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetLoadBalancerPoliciesOfListenerConditionKeys">actionSetLoadBalancerPoliciesOfListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetLoadBalancerPoliciesOfListener action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetSecurityGroupsConditionKeys">actionSetSecurityGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetSecurityGroups action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetSubnetsConditionKeys">actionSetSubnetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetSubnets action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AddListenerCertificatesConditionKeys">AddListenerCertificatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddListenerCertificates action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AddTagsConditionKeys">AddTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTags action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AddTrustStoreRevocationsConditionKeys">AddTrustStoreRevocationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTrustStoreRevocations action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ApplySecurityGroupsToLoadBalancerConditionKeys">ApplySecurityGroupsToLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ApplySecurityGroupsToLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AttachLoadBalancerToSubnetsConditionKeys">AttachLoadBalancerToSubnetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachLoadBalancerToSubnets action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ConfigureHealthCheckConditionKeys">ConfigureHealthCheckConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ConfigureHealthCheck action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: elasticloadbalancing:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateAppCookieStickinessPolicyConditionKeys">CreateAppCookieStickinessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppCookieStickinessPolicy action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLBCookieStickinessPolicyConditionKeys">CreateLBCookieStickinessPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLBCookieStickinessPolicy action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateListenerConditionKeys">CreateListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateListener action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLoadBalancerConditionKeys">CreateLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLoadBalancerListenersConditionKeys">CreateLoadBalancerListenersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoadBalancerListeners action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLoadBalancerPolicyConditionKeys">CreateLoadBalancerPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoadBalancerPolicy action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateTargetGroupConditionKeys">CreateTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTargetGroup action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateTrustStoreConditionKeys">CreateTrustStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTrustStore action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateWebACLAssociationConditionKeys">CreateWebACLAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWebACLAssociation action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteListenerConditionKeys">DeleteListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteListener action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteLoadBalancerConditionKeys">DeleteLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteLoadBalancerListenersConditionKeys">DeleteLoadBalancerListenersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLoadBalancerListeners action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteLoadBalancerPolicyConditionKeys">DeleteLoadBalancerPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteLoadBalancerPolicy action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteRuleConditionKeys">DeleteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRule action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteSharedTrustStoreAssociationConditionKeys">DeleteSharedTrustStoreAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSharedTrustStoreAssociation action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteTargetGroupConditionKeys">DeleteTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTargetGroup action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteTrustStoreConditionKeys">DeleteTrustStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTrustStore action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteWebACLAssociationConditionKeys">DeleteWebACLAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteWebACLAssociation action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeregisterInstancesFromLoadBalancerConditionKeys">DeregisterInstancesFromLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterInstancesFromLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeregisterTargetsConditionKeys">DeregisterTargetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterTargets action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DetachLoadBalancerFromSubnetsConditionKeys">DetachLoadBalancerFromSubnetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachLoadBalancerFromSubnets action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DisableAvailabilityZonesForLoadBalancerConditionKeys">DisableAvailabilityZonesForLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableAvailabilityZonesForLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.EnableAvailabilityZonesForLoadBalancerConditionKeys">EnableAvailabilityZonesForLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableAvailabilityZonesForLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.LISTENER_PROTOCOL">LISTENER_PROTOCOL</a></code> | <code>string</code> | Condition key: elasticloadbalancing:ListenerProtocol (ArrayOfString, String). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyCapacityReservationConditionKeys">ModifyCapacityReservationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyCapacityReservation action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyIpPoolsConditionKeys">ModifyIpPoolsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyIpPools action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyListenerAttributesConditionKeys">ModifyListenerAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyListenerAttributes action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyListenerConditionKeys">ModifyListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyListener action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyLoadBalancerAttributesConditionKeys">ModifyLoadBalancerAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyLoadBalancerAttributes action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyRuleConditionKeys">ModifyRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyRule action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyTargetGroupAttributesConditionKeys">ModifyTargetGroupAttributesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyTargetGroupAttributes action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyTargetGroupConditionKeys">ModifyTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyTargetGroup action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyTrustStoreConditionKeys">ModifyTrustStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyTrustStore action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RegisterInstancesWithLoadBalancerConditionKeys">RegisterInstancesWithLoadBalancerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterInstancesWithLoadBalancer action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RegisterTargetsConditionKeys">RegisterTargetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterTargets action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RemoveListenerCertificatesConditionKeys">RemoveListenerCertificatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveListenerCertificates action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RemoveTagsConditionKeys">RemoveTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTags action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RemoveTrustStoreRevocationsConditionKeys">RemoveTrustStoreRevocationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTrustStoreRevocations action. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: elasticloadbalancing:ResourceTag/ (String). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SCHEME">SCHEME</a></code> | <code>string</code> | Condition key: elasticloadbalancing:Scheme (String). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SECURITY_GROUP">SECURITY_GROUP</a></code> | <code>string</code> | Condition key: elasticloadbalancing:SecurityGroup (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SECURITY_POLICY">SECURITY_POLICY</a></code> | <code>string</code> | Condition key: elasticloadbalancing:SecurityPolicy (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SUBNET">SUBNET</a></code> | <code>string</code> | Condition key: elasticloadbalancing:Subnet (ArrayOfString). |

---

##### `actionGetLoadBalancerWebACLConditionKeys`<sup>Required</sup> <a name="actionGetLoadBalancerWebACLConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetLoadBalancerWebACLConditionKeys"></a>

```typescript
public readonly actionGetLoadBalancerWebACLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetLoadBalancerWebACL action.

---

##### `actionGetResourcePolicyConditionKeys`<sup>Required</sup> <a name="actionGetResourcePolicyConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetResourcePolicyConditionKeys"></a>

```typescript
public readonly actionGetResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourcePolicy action.

---

##### `actionGetTrustStoreCaCertificatesBundleConditionKeys`<sup>Required</sup> <a name="actionGetTrustStoreCaCertificatesBundleConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetTrustStoreCaCertificatesBundleConditionKeys"></a>

```typescript
public readonly actionGetTrustStoreCaCertificatesBundleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTrustStoreCaCertificatesBundle action.

---

##### `actionGetTrustStoreRevocationContentConditionKeys`<sup>Required</sup> <a name="actionGetTrustStoreRevocationContentConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionGetTrustStoreRevocationContentConditionKeys"></a>

```typescript
public readonly actionGetTrustStoreRevocationContentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTrustStoreRevocationContent action.

---

##### `actionSetIpAddressTypeConditionKeys`<sup>Required</sup> <a name="actionSetIpAddressTypeConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetIpAddressTypeConditionKeys"></a>

```typescript
public readonly actionSetIpAddressTypeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetIpAddressType action.

---

##### `actionSetLoadBalancerListenerSSLCertificateConditionKeys`<sup>Required</sup> <a name="actionSetLoadBalancerListenerSSLCertificateConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetLoadBalancerListenerSSLCertificateConditionKeys"></a>

```typescript
public readonly actionSetLoadBalancerListenerSSLCertificateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetLoadBalancerListenerSSLCertificate action.

---

##### `actionSetLoadBalancerPoliciesForBackendServerConditionKeys`<sup>Required</sup> <a name="actionSetLoadBalancerPoliciesForBackendServerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetLoadBalancerPoliciesForBackendServerConditionKeys"></a>

```typescript
public readonly actionSetLoadBalancerPoliciesForBackendServerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetLoadBalancerPoliciesForBackendServer action.

---

##### `actionSetLoadBalancerPoliciesOfListenerConditionKeys`<sup>Required</sup> <a name="actionSetLoadBalancerPoliciesOfListenerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetLoadBalancerPoliciesOfListenerConditionKeys"></a>

```typescript
public readonly actionSetLoadBalancerPoliciesOfListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetLoadBalancerPoliciesOfListener action.

---

##### `actionSetSecurityGroupsConditionKeys`<sup>Required</sup> <a name="actionSetSecurityGroupsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetSecurityGroupsConditionKeys"></a>

```typescript
public readonly actionSetSecurityGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetSecurityGroups action.

---

##### `actionSetSubnetsConditionKeys`<sup>Required</sup> <a name="actionSetSubnetsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.actionSetSubnetsConditionKeys"></a>

```typescript
public readonly actionSetSubnetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetSubnets action.

---

##### `AddListenerCertificatesConditionKeys`<sup>Required</sup> <a name="AddListenerCertificatesConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AddListenerCertificatesConditionKeys"></a>

```typescript
public readonly AddListenerCertificatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddListenerCertificates action.

---

##### `AddTagsConditionKeys`<sup>Required</sup> <a name="AddTagsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AddTagsConditionKeys"></a>

```typescript
public readonly AddTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTags action.

---

##### `AddTrustStoreRevocationsConditionKeys`<sup>Required</sup> <a name="AddTrustStoreRevocationsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AddTrustStoreRevocationsConditionKeys"></a>

```typescript
public readonly AddTrustStoreRevocationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTrustStoreRevocations action.

---

##### `ApplySecurityGroupsToLoadBalancerConditionKeys`<sup>Required</sup> <a name="ApplySecurityGroupsToLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ApplySecurityGroupsToLoadBalancerConditionKeys"></a>

```typescript
public readonly ApplySecurityGroupsToLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ApplySecurityGroupsToLoadBalancer action.

---

##### `AttachLoadBalancerToSubnetsConditionKeys`<sup>Required</sup> <a name="AttachLoadBalancerToSubnetsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AttachLoadBalancerToSubnetsConditionKeys"></a>

```typescript
public readonly AttachLoadBalancerToSubnetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachLoadBalancerToSubnets action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ConfigureHealthCheckConditionKeys`<sup>Required</sup> <a name="ConfigureHealthCheckConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ConfigureHealthCheckConditionKeys"></a>

```typescript
public readonly ConfigureHealthCheckConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ConfigureHealthCheck action.

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: elasticloadbalancing:CreateAction (String).

---

##### `CreateAppCookieStickinessPolicyConditionKeys`<sup>Required</sup> <a name="CreateAppCookieStickinessPolicyConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateAppCookieStickinessPolicyConditionKeys"></a>

```typescript
public readonly CreateAppCookieStickinessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppCookieStickinessPolicy action.

---

##### `CreateLBCookieStickinessPolicyConditionKeys`<sup>Required</sup> <a name="CreateLBCookieStickinessPolicyConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLBCookieStickinessPolicyConditionKeys"></a>

```typescript
public readonly CreateLBCookieStickinessPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLBCookieStickinessPolicy action.

---

##### `CreateListenerConditionKeys`<sup>Required</sup> <a name="CreateListenerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateListenerConditionKeys"></a>

```typescript
public readonly CreateListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateListener action.

---

##### `CreateLoadBalancerConditionKeys`<sup>Required</sup> <a name="CreateLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLoadBalancerConditionKeys"></a>

```typescript
public readonly CreateLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoadBalancer action.

---

##### `CreateLoadBalancerListenersConditionKeys`<sup>Required</sup> <a name="CreateLoadBalancerListenersConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLoadBalancerListenersConditionKeys"></a>

```typescript
public readonly CreateLoadBalancerListenersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoadBalancerListeners action.

---

##### `CreateLoadBalancerPolicyConditionKeys`<sup>Required</sup> <a name="CreateLoadBalancerPolicyConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateLoadBalancerPolicyConditionKeys"></a>

```typescript
public readonly CreateLoadBalancerPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoadBalancerPolicy action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateTargetGroupConditionKeys`<sup>Required</sup> <a name="CreateTargetGroupConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateTargetGroupConditionKeys"></a>

```typescript
public readonly CreateTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTargetGroup action.

---

##### `CreateTrustStoreConditionKeys`<sup>Required</sup> <a name="CreateTrustStoreConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateTrustStoreConditionKeys"></a>

```typescript
public readonly CreateTrustStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTrustStore action.

---

##### `CreateWebACLAssociationConditionKeys`<sup>Required</sup> <a name="CreateWebACLAssociationConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.CreateWebACLAssociationConditionKeys"></a>

```typescript
public readonly CreateWebACLAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWebACLAssociation action.

---

##### `DeleteListenerConditionKeys`<sup>Required</sup> <a name="DeleteListenerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteListenerConditionKeys"></a>

```typescript
public readonly DeleteListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteListener action.

---

##### `DeleteLoadBalancerConditionKeys`<sup>Required</sup> <a name="DeleteLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteLoadBalancerConditionKeys"></a>

```typescript
public readonly DeleteLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLoadBalancer action.

---

##### `DeleteLoadBalancerListenersConditionKeys`<sup>Required</sup> <a name="DeleteLoadBalancerListenersConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteLoadBalancerListenersConditionKeys"></a>

```typescript
public readonly DeleteLoadBalancerListenersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLoadBalancerListeners action.

---

##### `DeleteLoadBalancerPolicyConditionKeys`<sup>Required</sup> <a name="DeleteLoadBalancerPolicyConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteLoadBalancerPolicyConditionKeys"></a>

```typescript
public readonly DeleteLoadBalancerPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteLoadBalancerPolicy action.

---

##### `DeleteRuleConditionKeys`<sup>Required</sup> <a name="DeleteRuleConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteRuleConditionKeys"></a>

```typescript
public readonly DeleteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRule action.

---

##### `DeleteSharedTrustStoreAssociationConditionKeys`<sup>Required</sup> <a name="DeleteSharedTrustStoreAssociationConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteSharedTrustStoreAssociationConditionKeys"></a>

```typescript
public readonly DeleteSharedTrustStoreAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSharedTrustStoreAssociation action.

---

##### `DeleteTargetGroupConditionKeys`<sup>Required</sup> <a name="DeleteTargetGroupConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteTargetGroupConditionKeys"></a>

```typescript
public readonly DeleteTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTargetGroup action.

---

##### `DeleteTrustStoreConditionKeys`<sup>Required</sup> <a name="DeleteTrustStoreConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteTrustStoreConditionKeys"></a>

```typescript
public readonly DeleteTrustStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTrustStore action.

---

##### `DeleteWebACLAssociationConditionKeys`<sup>Required</sup> <a name="DeleteWebACLAssociationConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeleteWebACLAssociationConditionKeys"></a>

```typescript
public readonly DeleteWebACLAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteWebACLAssociation action.

---

##### `DeregisterInstancesFromLoadBalancerConditionKeys`<sup>Required</sup> <a name="DeregisterInstancesFromLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeregisterInstancesFromLoadBalancerConditionKeys"></a>

```typescript
public readonly DeregisterInstancesFromLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterInstancesFromLoadBalancer action.

---

##### `DeregisterTargetsConditionKeys`<sup>Required</sup> <a name="DeregisterTargetsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DeregisterTargetsConditionKeys"></a>

```typescript
public readonly DeregisterTargetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterTargets action.

---

##### `DetachLoadBalancerFromSubnetsConditionKeys`<sup>Required</sup> <a name="DetachLoadBalancerFromSubnetsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DetachLoadBalancerFromSubnetsConditionKeys"></a>

```typescript
public readonly DetachLoadBalancerFromSubnetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachLoadBalancerFromSubnets action.

---

##### `DisableAvailabilityZonesForLoadBalancerConditionKeys`<sup>Required</sup> <a name="DisableAvailabilityZonesForLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.DisableAvailabilityZonesForLoadBalancerConditionKeys"></a>

```typescript
public readonly DisableAvailabilityZonesForLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableAvailabilityZonesForLoadBalancer action.

---

##### `EnableAvailabilityZonesForLoadBalancerConditionKeys`<sup>Required</sup> <a name="EnableAvailabilityZonesForLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.EnableAvailabilityZonesForLoadBalancerConditionKeys"></a>

```typescript
public readonly EnableAvailabilityZonesForLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableAvailabilityZonesForLoadBalancer action.

---

##### `LISTENER_PROTOCOL`<sup>Required</sup> <a name="LISTENER_PROTOCOL" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.LISTENER_PROTOCOL"></a>

```typescript
public readonly LISTENER_PROTOCOL: string;
```

- *Type:* string

Condition key: elasticloadbalancing:ListenerProtocol (ArrayOfString, String).

---

##### `ModifyCapacityReservationConditionKeys`<sup>Required</sup> <a name="ModifyCapacityReservationConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyCapacityReservationConditionKeys"></a>

```typescript
public readonly ModifyCapacityReservationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyCapacityReservation action.

---

##### `ModifyIpPoolsConditionKeys`<sup>Required</sup> <a name="ModifyIpPoolsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyIpPoolsConditionKeys"></a>

```typescript
public readonly ModifyIpPoolsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyIpPools action.

---

##### `ModifyListenerAttributesConditionKeys`<sup>Required</sup> <a name="ModifyListenerAttributesConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyListenerAttributesConditionKeys"></a>

```typescript
public readonly ModifyListenerAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyListenerAttributes action.

---

##### `ModifyListenerConditionKeys`<sup>Required</sup> <a name="ModifyListenerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyListenerConditionKeys"></a>

```typescript
public readonly ModifyListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyListener action.

---

##### `ModifyLoadBalancerAttributesConditionKeys`<sup>Required</sup> <a name="ModifyLoadBalancerAttributesConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyLoadBalancerAttributesConditionKeys"></a>

```typescript
public readonly ModifyLoadBalancerAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyLoadBalancerAttributes action.

---

##### `ModifyRuleConditionKeys`<sup>Required</sup> <a name="ModifyRuleConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyRuleConditionKeys"></a>

```typescript
public readonly ModifyRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyRule action.

---

##### `ModifyTargetGroupAttributesConditionKeys`<sup>Required</sup> <a name="ModifyTargetGroupAttributesConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyTargetGroupAttributesConditionKeys"></a>

```typescript
public readonly ModifyTargetGroupAttributesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyTargetGroupAttributes action.

---

##### `ModifyTargetGroupConditionKeys`<sup>Required</sup> <a name="ModifyTargetGroupConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyTargetGroupConditionKeys"></a>

```typescript
public readonly ModifyTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyTargetGroup action.

---

##### `ModifyTrustStoreConditionKeys`<sup>Required</sup> <a name="ModifyTrustStoreConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.ModifyTrustStoreConditionKeys"></a>

```typescript
public readonly ModifyTrustStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyTrustStore action.

---

##### `RegisterInstancesWithLoadBalancerConditionKeys`<sup>Required</sup> <a name="RegisterInstancesWithLoadBalancerConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RegisterInstancesWithLoadBalancerConditionKeys"></a>

```typescript
public readonly RegisterInstancesWithLoadBalancerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterInstancesWithLoadBalancer action.

---

##### `RegisterTargetsConditionKeys`<sup>Required</sup> <a name="RegisterTargetsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RegisterTargetsConditionKeys"></a>

```typescript
public readonly RegisterTargetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterTargets action.

---

##### `RemoveListenerCertificatesConditionKeys`<sup>Required</sup> <a name="RemoveListenerCertificatesConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RemoveListenerCertificatesConditionKeys"></a>

```typescript
public readonly RemoveListenerCertificatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveListenerCertificates action.

---

##### `RemoveTagsConditionKeys`<sup>Required</sup> <a name="RemoveTagsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RemoveTagsConditionKeys"></a>

```typescript
public readonly RemoveTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTags action.

---

##### `RemoveTrustStoreRevocationsConditionKeys`<sup>Required</sup> <a name="RemoveTrustStoreRevocationsConditionKeys" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RemoveTrustStoreRevocationsConditionKeys"></a>

```typescript
public readonly RemoveTrustStoreRevocationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTrustStoreRevocations action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: elasticloadbalancing:ResourceTag/ (String).

---

##### `SCHEME`<sup>Required</sup> <a name="SCHEME" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SCHEME"></a>

```typescript
public readonly SCHEME: string;
```

- *Type:* string

Condition key: elasticloadbalancing:Scheme (String).

---

##### `SECURITY_GROUP`<sup>Required</sup> <a name="SECURITY_GROUP" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SECURITY_GROUP"></a>

```typescript
public readonly SECURITY_GROUP: string;
```

- *Type:* string

Condition key: elasticloadbalancing:SecurityGroup (ArrayOfString).

---

##### `SECURITY_POLICY`<sup>Required</sup> <a name="SECURITY_POLICY" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SECURITY_POLICY"></a>

```typescript
public readonly SECURITY_POLICY: string;
```

- *Type:* string

Condition key: elasticloadbalancing:SecurityPolicy (ArrayOfString).

---

##### `SUBNET`<sup>Required</sup> <a name="SUBNET" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingConditions.property.SUBNET"></a>

```typescript
public readonly SUBNET: string;
```

- *Type:* string

Condition key: elasticloadbalancing:Subnet (ArrayOfString).

---

### ElasticloadbalancingOperations <a name="ElasticloadbalancingOperations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations"></a>

API operation to required IAM actions mapping for elasticloadbalancing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

new elasticloadbalancing.ElasticloadbalancingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AddListenerCertificates">AddListenerCertificates</a></code> | <code>string[]</code> | IAM actions required for the AddListenerCertificates API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AddTags">AddTags</a></code> | <code>string[]</code> | IAM actions required for the AddTags API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AddTrustStoreRevocations">AddTrustStoreRevocations</a></code> | <code>string[]</code> | IAM actions required for the AddTrustStoreRevocations API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ApplySecurityGroupsToLoadBalancer">ApplySecurityGroupsToLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the ApplySecurityGroupsToLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AttachLoadBalancerToSubnets">AttachLoadBalancerToSubnets</a></code> | <code>string[]</code> | IAM actions required for the AttachLoadBalancerToSubnets API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ConfigureHealthCheck">ConfigureHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the ConfigureHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateAppCookieStickinessPolicy">CreateAppCookieStickinessPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateAppCookieStickinessPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLBCookieStickinessPolicy">CreateLBCookieStickinessPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateLBCookieStickinessPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateListener">CreateListener</a></code> | <code>string[]</code> | IAM actions required for the CreateListener API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLoadBalancer">CreateLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the CreateLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLoadBalancerListeners">CreateLoadBalancerListeners</a></code> | <code>string[]</code> | IAM actions required for the CreateLoadBalancerListeners API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLoadBalancerPolicy">CreateLoadBalancerPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateLoadBalancerPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateTargetGroup">CreateTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateTrustStore">CreateTrustStore</a></code> | <code>string[]</code> | IAM actions required for the CreateTrustStore API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteListener">DeleteListener</a></code> | <code>string[]</code> | IAM actions required for the DeleteListener API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteLoadBalancer">DeleteLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteLoadBalancerListeners">DeleteLoadBalancerListeners</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoadBalancerListeners API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteLoadBalancerPolicy">DeleteLoadBalancerPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoadBalancerPolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteSharedTrustStoreAssociation">DeleteSharedTrustStoreAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteSharedTrustStoreAssociation API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteTargetGroup">DeleteTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteTrustStore">DeleteTrustStore</a></code> | <code>string[]</code> | IAM actions required for the DeleteTrustStore API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeregisterInstancesFromLoadBalancer">DeregisterInstancesFromLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the DeregisterInstancesFromLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeregisterTargets">DeregisterTargets</a></code> | <code>string[]</code> | IAM actions required for the DeregisterTargets API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountLimits API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeCapacityReservation">DescribeCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the DescribeCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeInstanceHealth">DescribeInstanceHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceHealth API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeListenerAttributes">DescribeListenerAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeListenerAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeListenerCertificates">DescribeListenerCertificates</a></code> | <code>string[]</code> | IAM actions required for the DescribeListenerCertificates API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeListeners">DescribeListeners</a></code> | <code>string[]</code> | IAM actions required for the DescribeListeners API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancerAttributes">DescribeLoadBalancerAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoadBalancerAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancerPolicies">DescribeLoadBalancerPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoadBalancerPolicies API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancerPolicyTypes">DescribeLoadBalancerPolicyTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoadBalancerPolicyTypes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancers">DescribeLoadBalancers</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoadBalancers API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeRules">DescribeRules</a></code> | <code>string[]</code> | IAM actions required for the DescribeRules API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeSSLPolicies">DescribeSSLPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeSSLPolicies API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTargetGroupAttributes">DescribeTargetGroupAttributes</a></code> | <code>string[]</code> | IAM actions required for the DescribeTargetGroupAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTargetGroups">DescribeTargetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeTargetGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTargetHealth">DescribeTargetHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeTargetHealth API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTrustStoreAssociations">DescribeTrustStoreAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustStoreAssociations API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTrustStoreRevocations">DescribeTrustStoreRevocations</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustStoreRevocations API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTrustStores">DescribeTrustStores</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrustStores API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DetachLoadBalancerFromSubnets">DetachLoadBalancerFromSubnets</a></code> | <code>string[]</code> | IAM actions required for the DetachLoadBalancerFromSubnets API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DisableAvailabilityZonesForLoadBalancer">DisableAvailabilityZonesForLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the DisableAvailabilityZonesForLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.EnableAvailabilityZonesForLoadBalancer">EnableAvailabilityZonesForLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the EnableAvailabilityZonesForLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyCapacityReservation">ModifyCapacityReservation</a></code> | <code>string[]</code> | IAM actions required for the ModifyCapacityReservation API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyIpPools">ModifyIpPools</a></code> | <code>string[]</code> | IAM actions required for the ModifyIpPools API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyListener">ModifyListener</a></code> | <code>string[]</code> | IAM actions required for the ModifyListener API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyListenerAttributes">ModifyListenerAttributes</a></code> | <code>string[]</code> | IAM actions required for the ModifyListenerAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyLoadBalancerAttributes">ModifyLoadBalancerAttributes</a></code> | <code>string[]</code> | IAM actions required for the ModifyLoadBalancerAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyRule">ModifyRule</a></code> | <code>string[]</code> | IAM actions required for the ModifyRule API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyTargetGroup">ModifyTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the ModifyTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyTargetGroupAttributes">ModifyTargetGroupAttributes</a></code> | <code>string[]</code> | IAM actions required for the ModifyTargetGroupAttributes API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyTrustStore">ModifyTrustStore</a></code> | <code>string[]</code> | IAM actions required for the ModifyTrustStore API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opGetTrustStoreCaCertificatesBundle">opGetTrustStoreCaCertificatesBundle</a></code> | <code>string[]</code> | IAM actions required for the GetTrustStoreCaCertificatesBundle API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opGetTrustStoreRevocationContent">opGetTrustStoreRevocationContent</a></code> | <code>string[]</code> | IAM actions required for the GetTrustStoreRevocationContent API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetIpAddressType">opSetIpAddressType</a></code> | <code>string[]</code> | IAM actions required for the SetIpAddressType API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetLoadBalancerListenerSSLCertificate">opSetLoadBalancerListenerSSLCertificate</a></code> | <code>string[]</code> | IAM actions required for the SetLoadBalancerListenerSSLCertificate API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetLoadBalancerPoliciesForBackendServer">opSetLoadBalancerPoliciesForBackendServer</a></code> | <code>string[]</code> | IAM actions required for the SetLoadBalancerPoliciesForBackendServer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetLoadBalancerPoliciesOfListener">opSetLoadBalancerPoliciesOfListener</a></code> | <code>string[]</code> | IAM actions required for the SetLoadBalancerPoliciesOfListener API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetRulePriorities">opSetRulePriorities</a></code> | <code>string[]</code> | IAM actions required for the SetRulePriorities API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetSecurityGroups">opSetSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the SetSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetSubnets">opSetSubnets</a></code> | <code>string[]</code> | IAM actions required for the SetSubnets API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RegisterInstancesWithLoadBalancer">RegisterInstancesWithLoadBalancer</a></code> | <code>string[]</code> | IAM actions required for the RegisterInstancesWithLoadBalancer API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RegisterTargets">RegisterTargets</a></code> | <code>string[]</code> | IAM actions required for the RegisterTargets API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RemoveListenerCertificates">RemoveListenerCertificates</a></code> | <code>string[]</code> | IAM actions required for the RemoveListenerCertificates API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RemoveTags">RemoveTags</a></code> | <code>string[]</code> | IAM actions required for the RemoveTags API call. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RemoveTrustStoreRevocations">RemoveTrustStoreRevocations</a></code> | <code>string[]</code> | IAM actions required for the RemoveTrustStoreRevocations API call. |

---

##### `AddListenerCertificates`<sup>Required</sup> <a name="AddListenerCertificates" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AddListenerCertificates"></a>

```typescript
public readonly AddListenerCertificates: string[];
```

- *Type:* string[]

IAM actions required for the AddListenerCertificates API call.

---

##### `AddTags`<sup>Required</sup> <a name="AddTags" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AddTags"></a>

```typescript
public readonly AddTags: string[];
```

- *Type:* string[]

IAM actions required for the AddTags API call.

---

##### `AddTrustStoreRevocations`<sup>Required</sup> <a name="AddTrustStoreRevocations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AddTrustStoreRevocations"></a>

```typescript
public readonly AddTrustStoreRevocations: string[];
```

- *Type:* string[]

IAM actions required for the AddTrustStoreRevocations API call.

---

##### `ApplySecurityGroupsToLoadBalancer`<sup>Required</sup> <a name="ApplySecurityGroupsToLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ApplySecurityGroupsToLoadBalancer"></a>

```typescript
public readonly ApplySecurityGroupsToLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the ApplySecurityGroupsToLoadBalancer API call.

---

##### `AttachLoadBalancerToSubnets`<sup>Required</sup> <a name="AttachLoadBalancerToSubnets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.AttachLoadBalancerToSubnets"></a>

```typescript
public readonly AttachLoadBalancerToSubnets: string[];
```

- *Type:* string[]

IAM actions required for the AttachLoadBalancerToSubnets API call.

---

##### `ConfigureHealthCheck`<sup>Required</sup> <a name="ConfigureHealthCheck" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ConfigureHealthCheck"></a>

```typescript
public readonly ConfigureHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the ConfigureHealthCheck API call.

---

##### `CreateAppCookieStickinessPolicy`<sup>Required</sup> <a name="CreateAppCookieStickinessPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateAppCookieStickinessPolicy"></a>

```typescript
public readonly CreateAppCookieStickinessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppCookieStickinessPolicy API call.

---

##### `CreateLBCookieStickinessPolicy`<sup>Required</sup> <a name="CreateLBCookieStickinessPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLBCookieStickinessPolicy"></a>

```typescript
public readonly CreateLBCookieStickinessPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateLBCookieStickinessPolicy API call.

---

##### `CreateListener`<sup>Required</sup> <a name="CreateListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateListener"></a>

```typescript
public readonly CreateListener: string[];
```

- *Type:* string[]

IAM actions required for the CreateListener API call.

---

##### `CreateLoadBalancer`<sup>Required</sup> <a name="CreateLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLoadBalancer"></a>

```typescript
public readonly CreateLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoadBalancer API call.

---

##### `CreateLoadBalancerListeners`<sup>Required</sup> <a name="CreateLoadBalancerListeners" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLoadBalancerListeners"></a>

```typescript
public readonly CreateLoadBalancerListeners: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoadBalancerListeners API call.

---

##### `CreateLoadBalancerPolicy`<sup>Required</sup> <a name="CreateLoadBalancerPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateLoadBalancerPolicy"></a>

```typescript
public readonly CreateLoadBalancerPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoadBalancerPolicy API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateTargetGroup`<sup>Required</sup> <a name="CreateTargetGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateTargetGroup"></a>

```typescript
public readonly CreateTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateTargetGroup API call.

---

##### `CreateTrustStore`<sup>Required</sup> <a name="CreateTrustStore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.CreateTrustStore"></a>

```typescript
public readonly CreateTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the CreateTrustStore API call.

---

##### `DeleteListener`<sup>Required</sup> <a name="DeleteListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteListener"></a>

```typescript
public readonly DeleteListener: string[];
```

- *Type:* string[]

IAM actions required for the DeleteListener API call.

---

##### `DeleteLoadBalancer`<sup>Required</sup> <a name="DeleteLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteLoadBalancer"></a>

```typescript
public readonly DeleteLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoadBalancer API call.

---

##### `DeleteLoadBalancerListeners`<sup>Required</sup> <a name="DeleteLoadBalancerListeners" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteLoadBalancerListeners"></a>

```typescript
public readonly DeleteLoadBalancerListeners: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoadBalancerListeners API call.

---

##### `DeleteLoadBalancerPolicy`<sup>Required</sup> <a name="DeleteLoadBalancerPolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteLoadBalancerPolicy"></a>

```typescript
public readonly DeleteLoadBalancerPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoadBalancerPolicy API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteSharedTrustStoreAssociation`<sup>Required</sup> <a name="DeleteSharedTrustStoreAssociation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteSharedTrustStoreAssociation"></a>

```typescript
public readonly DeleteSharedTrustStoreAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSharedTrustStoreAssociation API call.

---

##### `DeleteTargetGroup`<sup>Required</sup> <a name="DeleteTargetGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteTargetGroup"></a>

```typescript
public readonly DeleteTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTargetGroup API call.

---

##### `DeleteTrustStore`<sup>Required</sup> <a name="DeleteTrustStore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeleteTrustStore"></a>

```typescript
public readonly DeleteTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTrustStore API call.

---

##### `DeregisterInstancesFromLoadBalancer`<sup>Required</sup> <a name="DeregisterInstancesFromLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeregisterInstancesFromLoadBalancer"></a>

```typescript
public readonly DeregisterInstancesFromLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterInstancesFromLoadBalancer API call.

---

##### `DeregisterTargets`<sup>Required</sup> <a name="DeregisterTargets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DeregisterTargets"></a>

```typescript
public readonly DeregisterTargets: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterTargets API call.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountLimits API call.

---

##### `DescribeCapacityReservation`<sup>Required</sup> <a name="DescribeCapacityReservation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeCapacityReservation"></a>

```typescript
public readonly DescribeCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCapacityReservation API call.

---

##### `DescribeInstanceHealth`<sup>Required</sup> <a name="DescribeInstanceHealth" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeInstanceHealth"></a>

```typescript
public readonly DescribeInstanceHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceHealth API call.

---

##### `DescribeListenerAttributes`<sup>Required</sup> <a name="DescribeListenerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeListenerAttributes"></a>

```typescript
public readonly DescribeListenerAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeListenerAttributes API call.

---

##### `DescribeListenerCertificates`<sup>Required</sup> <a name="DescribeListenerCertificates" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeListenerCertificates"></a>

```typescript
public readonly DescribeListenerCertificates: string[];
```

- *Type:* string[]

IAM actions required for the DescribeListenerCertificates API call.

---

##### `DescribeListeners`<sup>Required</sup> <a name="DescribeListeners" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeListeners"></a>

```typescript
public readonly DescribeListeners: string[];
```

- *Type:* string[]

IAM actions required for the DescribeListeners API call.

---

##### `DescribeLoadBalancerAttributes`<sup>Required</sup> <a name="DescribeLoadBalancerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancerAttributes"></a>

```typescript
public readonly DescribeLoadBalancerAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoadBalancerAttributes API call.

---

##### `DescribeLoadBalancerPolicies`<sup>Required</sup> <a name="DescribeLoadBalancerPolicies" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancerPolicies"></a>

```typescript
public readonly DescribeLoadBalancerPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoadBalancerPolicies API call.

---

##### `DescribeLoadBalancerPolicyTypes`<sup>Required</sup> <a name="DescribeLoadBalancerPolicyTypes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancerPolicyTypes"></a>

```typescript
public readonly DescribeLoadBalancerPolicyTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoadBalancerPolicyTypes API call.

---

##### `DescribeLoadBalancers`<sup>Required</sup> <a name="DescribeLoadBalancers" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeLoadBalancers"></a>

```typescript
public readonly DescribeLoadBalancers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoadBalancers API call.

---

##### `DescribeRules`<sup>Required</sup> <a name="DescribeRules" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeRules"></a>

```typescript
public readonly DescribeRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRules API call.

---

##### `DescribeSSLPolicies`<sup>Required</sup> <a name="DescribeSSLPolicies" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeSSLPolicies"></a>

```typescript
public readonly DescribeSSLPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSSLPolicies API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `DescribeTargetGroupAttributes`<sup>Required</sup> <a name="DescribeTargetGroupAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTargetGroupAttributes"></a>

```typescript
public readonly DescribeTargetGroupAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTargetGroupAttributes API call.

---

##### `DescribeTargetGroups`<sup>Required</sup> <a name="DescribeTargetGroups" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTargetGroups"></a>

```typescript
public readonly DescribeTargetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTargetGroups API call.

---

##### `DescribeTargetHealth`<sup>Required</sup> <a name="DescribeTargetHealth" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTargetHealth"></a>

```typescript
public readonly DescribeTargetHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTargetHealth API call.

---

##### `DescribeTrustStoreAssociations`<sup>Required</sup> <a name="DescribeTrustStoreAssociations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTrustStoreAssociations"></a>

```typescript
public readonly DescribeTrustStoreAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustStoreAssociations API call.

---

##### `DescribeTrustStoreRevocations`<sup>Required</sup> <a name="DescribeTrustStoreRevocations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTrustStoreRevocations"></a>

```typescript
public readonly DescribeTrustStoreRevocations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustStoreRevocations API call.

---

##### `DescribeTrustStores`<sup>Required</sup> <a name="DescribeTrustStores" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DescribeTrustStores"></a>

```typescript
public readonly DescribeTrustStores: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrustStores API call.

---

##### `DetachLoadBalancerFromSubnets`<sup>Required</sup> <a name="DetachLoadBalancerFromSubnets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DetachLoadBalancerFromSubnets"></a>

```typescript
public readonly DetachLoadBalancerFromSubnets: string[];
```

- *Type:* string[]

IAM actions required for the DetachLoadBalancerFromSubnets API call.

---

##### `DisableAvailabilityZonesForLoadBalancer`<sup>Required</sup> <a name="DisableAvailabilityZonesForLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.DisableAvailabilityZonesForLoadBalancer"></a>

```typescript
public readonly DisableAvailabilityZonesForLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the DisableAvailabilityZonesForLoadBalancer API call.

---

##### `EnableAvailabilityZonesForLoadBalancer`<sup>Required</sup> <a name="EnableAvailabilityZonesForLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.EnableAvailabilityZonesForLoadBalancer"></a>

```typescript
public readonly EnableAvailabilityZonesForLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the EnableAvailabilityZonesForLoadBalancer API call.

---

##### `ModifyCapacityReservation`<sup>Required</sup> <a name="ModifyCapacityReservation" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyCapacityReservation"></a>

```typescript
public readonly ModifyCapacityReservation: string[];
```

- *Type:* string[]

IAM actions required for the ModifyCapacityReservation API call.

---

##### `ModifyIpPools`<sup>Required</sup> <a name="ModifyIpPools" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyIpPools"></a>

```typescript
public readonly ModifyIpPools: string[];
```

- *Type:* string[]

IAM actions required for the ModifyIpPools API call.

---

##### `ModifyListener`<sup>Required</sup> <a name="ModifyListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyListener"></a>

```typescript
public readonly ModifyListener: string[];
```

- *Type:* string[]

IAM actions required for the ModifyListener API call.

---

##### `ModifyListenerAttributes`<sup>Required</sup> <a name="ModifyListenerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyListenerAttributes"></a>

```typescript
public readonly ModifyListenerAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ModifyListenerAttributes API call.

---

##### `ModifyLoadBalancerAttributes`<sup>Required</sup> <a name="ModifyLoadBalancerAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyLoadBalancerAttributes"></a>

```typescript
public readonly ModifyLoadBalancerAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ModifyLoadBalancerAttributes API call.

---

##### `ModifyRule`<sup>Required</sup> <a name="ModifyRule" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyRule"></a>

```typescript
public readonly ModifyRule: string[];
```

- *Type:* string[]

IAM actions required for the ModifyRule API call.

---

##### `ModifyTargetGroup`<sup>Required</sup> <a name="ModifyTargetGroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyTargetGroup"></a>

```typescript
public readonly ModifyTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the ModifyTargetGroup API call.

---

##### `ModifyTargetGroupAttributes`<sup>Required</sup> <a name="ModifyTargetGroupAttributes" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyTargetGroupAttributes"></a>

```typescript
public readonly ModifyTargetGroupAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ModifyTargetGroupAttributes API call.

---

##### `ModifyTrustStore`<sup>Required</sup> <a name="ModifyTrustStore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.ModifyTrustStore"></a>

```typescript
public readonly ModifyTrustStore: string[];
```

- *Type:* string[]

IAM actions required for the ModifyTrustStore API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetTrustStoreCaCertificatesBundle`<sup>Required</sup> <a name="opGetTrustStoreCaCertificatesBundle" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opGetTrustStoreCaCertificatesBundle"></a>

```typescript
public readonly opGetTrustStoreCaCertificatesBundle: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustStoreCaCertificatesBundle API call.

---

##### `opGetTrustStoreRevocationContent`<sup>Required</sup> <a name="opGetTrustStoreRevocationContent" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opGetTrustStoreRevocationContent"></a>

```typescript
public readonly opGetTrustStoreRevocationContent: string[];
```

- *Type:* string[]

IAM actions required for the GetTrustStoreRevocationContent API call.

---

##### `opSetIpAddressType`<sup>Required</sup> <a name="opSetIpAddressType" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetIpAddressType"></a>

```typescript
public readonly opSetIpAddressType: string[];
```

- *Type:* string[]

IAM actions required for the SetIpAddressType API call.

---

##### `opSetLoadBalancerListenerSSLCertificate`<sup>Required</sup> <a name="opSetLoadBalancerListenerSSLCertificate" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetLoadBalancerListenerSSLCertificate"></a>

```typescript
public readonly opSetLoadBalancerListenerSSLCertificate: string[];
```

- *Type:* string[]

IAM actions required for the SetLoadBalancerListenerSSLCertificate API call.

---

##### `opSetLoadBalancerPoliciesForBackendServer`<sup>Required</sup> <a name="opSetLoadBalancerPoliciesForBackendServer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetLoadBalancerPoliciesForBackendServer"></a>

```typescript
public readonly opSetLoadBalancerPoliciesForBackendServer: string[];
```

- *Type:* string[]

IAM actions required for the SetLoadBalancerPoliciesForBackendServer API call.

---

##### `opSetLoadBalancerPoliciesOfListener`<sup>Required</sup> <a name="opSetLoadBalancerPoliciesOfListener" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetLoadBalancerPoliciesOfListener"></a>

```typescript
public readonly opSetLoadBalancerPoliciesOfListener: string[];
```

- *Type:* string[]

IAM actions required for the SetLoadBalancerPoliciesOfListener API call.

---

##### `opSetRulePriorities`<sup>Required</sup> <a name="opSetRulePriorities" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetRulePriorities"></a>

```typescript
public readonly opSetRulePriorities: string[];
```

- *Type:* string[]

IAM actions required for the SetRulePriorities API call.

---

##### `opSetSecurityGroups`<sup>Required</sup> <a name="opSetSecurityGroups" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetSecurityGroups"></a>

```typescript
public readonly opSetSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the SetSecurityGroups API call.

---

##### `opSetSubnets`<sup>Required</sup> <a name="opSetSubnets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.opSetSubnets"></a>

```typescript
public readonly opSetSubnets: string[];
```

- *Type:* string[]

IAM actions required for the SetSubnets API call.

---

##### `RegisterInstancesWithLoadBalancer`<sup>Required</sup> <a name="RegisterInstancesWithLoadBalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RegisterInstancesWithLoadBalancer"></a>

```typescript
public readonly RegisterInstancesWithLoadBalancer: string[];
```

- *Type:* string[]

IAM actions required for the RegisterInstancesWithLoadBalancer API call.

---

##### `RegisterTargets`<sup>Required</sup> <a name="RegisterTargets" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RegisterTargets"></a>

```typescript
public readonly RegisterTargets: string[];
```

- *Type:* string[]

IAM actions required for the RegisterTargets API call.

---

##### `RemoveListenerCertificates`<sup>Required</sup> <a name="RemoveListenerCertificates" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RemoveListenerCertificates"></a>

```typescript
public readonly RemoveListenerCertificates: string[];
```

- *Type:* string[]

IAM actions required for the RemoveListenerCertificates API call.

---

##### `RemoveTags`<sup>Required</sup> <a name="RemoveTags" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RemoveTags"></a>

```typescript
public readonly RemoveTags: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTags API call.

---

##### `RemoveTrustStoreRevocations`<sup>Required</sup> <a name="RemoveTrustStoreRevocations" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingOperations.property.RemoveTrustStoreRevocations"></a>

```typescript
public readonly RemoveTrustStoreRevocations: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTrustStoreRevocations API call.

---

### ElasticloadbalancingResources <a name="ElasticloadbalancingResources" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources"></a>

ARN builders, validators, and parsers for elasticloadbalancing resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.Initializer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

new elasticloadbalancing.ElasticloadbalancingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerAppArn">isValidListenerAppArn</a></code> | Validates whether a string is a valid ARN for the listener/app resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerGwyArn">isValidListenerGwyArn</a></code> | Validates whether a string is a valid ARN for the listener/gwy resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerNetArn">isValidListenerNetArn</a></code> | Validates whether a string is a valid ARN for the listener/net resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleAppArn">isValidListenerRuleAppArn</a></code> | Validates whether a string is a valid ARN for the listener-rule/app resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleNetArn">isValidListenerRuleNetArn</a></code> | Validates whether a string is a valid ARN for the listener-rule/net resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerAppArn">isValidLoadbalancerAppArn</a></code> | Validates whether a string is a valid ARN for the loadbalancer/app/ resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerArn">isValidLoadbalancerArn</a></code> | Validates whether a string is a valid ARN for the loadbalancer resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerGwyArn">isValidLoadbalancerGwyArn</a></code> | Validates whether a string is a valid ARN for the loadbalancer/gwy/ resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerNetArn">isValidLoadbalancerNetArn</a></code> | Validates whether a string is a valid ARN for the loadbalancer/net/ resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidTargetgroupArn">isValidTargetgroupArn</a></code> | Validates whether a string is a valid ARN for the targetgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidTruststoreArn">isValidTruststoreArn</a></code> | Validates whether a string is a valid ARN for the truststore resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerApp">listenerApp</a></code> | Builds an ARN for the listener/app resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerGwy">listenerGwy</a></code> | Builds an ARN for the listener/gwy resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerNet">listenerNet</a></code> | Builds an ARN for the listener/net resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerRuleApp">listenerRuleApp</a></code> | Builds an ARN for the listener-rule/app resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerRuleNet">listenerRuleNet</a></code> | Builds an ARN for the listener-rule/net resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancer">loadbalancer</a></code> | Builds an ARN for the loadbalancer resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerApp">loadbalancerApp</a></code> | Builds an ARN for the loadbalancer/app/ resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerGwy">loadbalancerGwy</a></code> | Builds an ARN for the loadbalancer/gwy/ resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerNet">loadbalancerNet</a></code> | Builds an ARN for the loadbalancer/net/ resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerAppArn">parseListenerAppArn</a></code> | Parses a listener/app ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerGwyArn">parseListenerGwyArn</a></code> | Parses a listener/gwy ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerNetArn">parseListenerNetArn</a></code> | Parses a listener/net ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleAppArn">parseListenerRuleAppArn</a></code> | Parses a listener-rule/app ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleNetArn">parseListenerRuleNetArn</a></code> | Parses a listener-rule/net ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerAppArn">parseLoadbalancerAppArn</a></code> | Parses a loadbalancer/app/ ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerArn">parseLoadbalancerArn</a></code> | Parses a loadbalancer ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerGwyArn">parseLoadbalancerGwyArn</a></code> | Parses a loadbalancer/gwy/ ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerNetArn">parseLoadbalancerNetArn</a></code> | Parses a loadbalancer/net/ ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseTargetgroupArn">parseTargetgroupArn</a></code> | Parses a targetgroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseTruststoreArn">parseTruststoreArn</a></code> | Parses a truststore ARN into its components. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.targetgroup">targetgroup</a></code> | Builds an ARN for the targetgroup resource. |
| <code><a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.truststore">truststore</a></code> | Builds an ARN for the truststore resource. |

---

##### `isValidListenerAppArn` <a name="isValidListenerAppArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerAppArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidListenerAppArn(arn: string)
```

Validates whether a string is a valid ARN for the listener/app resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListenerGwyArn` <a name="isValidListenerGwyArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerGwyArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidListenerGwyArn(arn: string)
```

Validates whether a string is a valid ARN for the listener/gwy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerGwyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListenerNetArn` <a name="isValidListenerNetArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerNetArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidListenerNetArn(arn: string)
```

Validates whether a string is a valid ARN for the listener/net resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerNetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListenerRuleAppArn` <a name="isValidListenerRuleAppArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleAppArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleAppArn(arn: string)
```

Validates whether a string is a valid ARN for the listener-rule/app resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListenerRuleNetArn` <a name="isValidListenerRuleNetArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleNetArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleNetArn(arn: string)
```

Validates whether a string is a valid ARN for the listener-rule/net resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidListenerRuleNetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadbalancerAppArn` <a name="isValidLoadbalancerAppArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerAppArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerAppArn(arn: string)
```

Validates whether a string is a valid ARN for the loadbalancer/app/ resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadbalancerArn` <a name="isValidLoadbalancerArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerArn(arn: string)
```

Validates whether a string is a valid ARN for the loadbalancer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadbalancerGwyArn` <a name="isValidLoadbalancerGwyArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerGwyArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerGwyArn(arn: string)
```

Validates whether a string is a valid ARN for the loadbalancer/gwy/ resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerGwyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLoadbalancerNetArn` <a name="isValidLoadbalancerNetArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerNetArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerNetArn(arn: string)
```

Validates whether a string is a valid ARN for the loadbalancer/net/ resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidLoadbalancerNetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTargetgroupArn` <a name="isValidTargetgroupArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidTargetgroupArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidTargetgroupArn(arn: string)
```

Validates whether a string is a valid ARN for the targetgroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidTargetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTruststoreArn` <a name="isValidTruststoreArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidTruststoreArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.isValidTruststoreArn(arn: string)
```

Validates whether a string is a valid ARN for the truststore resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.isValidTruststoreArn.parameter.arn"></a>

- *Type:* string

---

##### `listenerApp` <a name="listenerApp" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerApp"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.listenerApp(props: ElasticloadbalancingListenerAppArnProps)
```

Builds an ARN for the listener/app resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerApp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerAppArnProps">ElasticloadbalancingListenerAppArnProps</a>

---

##### `listenerGwy` <a name="listenerGwy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerGwy"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.listenerGwy(props: ElasticloadbalancingListenerGwyArnProps)
```

Builds an ARN for the listener/gwy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerGwy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerGwyArnProps">ElasticloadbalancingListenerGwyArnProps</a>

---

##### `listenerNet` <a name="listenerNet" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerNet"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.listenerNet(props: ElasticloadbalancingListenerNetArnProps)
```

Builds an ARN for the listener/net resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerNet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerNetArnProps">ElasticloadbalancingListenerNetArnProps</a>

---

##### `listenerRuleApp` <a name="listenerRuleApp" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerRuleApp"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.listenerRuleApp(props: ElasticloadbalancingListenerRuleAppArnProps)
```

Builds an ARN for the listener-rule/app resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerRuleApp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleAppArnProps">ElasticloadbalancingListenerRuleAppArnProps</a>

---

##### `listenerRuleNet` <a name="listenerRuleNet" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerRuleNet"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.listenerRuleNet(props: ElasticloadbalancingListenerRuleNetArnProps)
```

Builds an ARN for the listener-rule/net resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.listenerRuleNet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingListenerRuleNetArnProps">ElasticloadbalancingListenerRuleNetArnProps</a>

---

##### `loadbalancer` <a name="loadbalancer" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancer"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.loadbalancer(props: ElasticloadbalancingLoadbalancerArnProps)
```

Builds an ARN for the loadbalancer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerArnProps">ElasticloadbalancingLoadbalancerArnProps</a>

---

##### `loadbalancerApp` <a name="loadbalancerApp" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerApp"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.loadbalancerApp(props: ElasticloadbalancingLoadbalancerAppArnProps)
```

Builds an ARN for the loadbalancer/app/ resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerApp.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerAppArnProps">ElasticloadbalancingLoadbalancerAppArnProps</a>

---

##### `loadbalancerGwy` <a name="loadbalancerGwy" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerGwy"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.loadbalancerGwy(props: ElasticloadbalancingLoadbalancerGwyArnProps)
```

Builds an ARN for the loadbalancer/gwy/ resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerGwy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerGwyArnProps">ElasticloadbalancingLoadbalancerGwyArnProps</a>

---

##### `loadbalancerNet` <a name="loadbalancerNet" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerNet"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.loadbalancerNet(props: ElasticloadbalancingLoadbalancerNetArnProps)
```

Builds an ARN for the loadbalancer/net/ resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.loadbalancerNet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingLoadbalancerNetArnProps">ElasticloadbalancingLoadbalancerNetArnProps</a>

---

##### `parseListenerAppArn` <a name="parseListenerAppArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerAppArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseListenerAppArn(arn: string)
```

Parses a listener/app ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListenerGwyArn` <a name="parseListenerGwyArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerGwyArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseListenerGwyArn(arn: string)
```

Parses a listener/gwy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerGwyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListenerNetArn` <a name="parseListenerNetArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerNetArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseListenerNetArn(arn: string)
```

Parses a listener/net ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerNetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListenerRuleAppArn` <a name="parseListenerRuleAppArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleAppArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleAppArn(arn: string)
```

Parses a listener-rule/app ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListenerRuleNetArn` <a name="parseListenerRuleNetArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleNetArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleNetArn(arn: string)
```

Parses a listener-rule/net ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseListenerRuleNetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadbalancerAppArn` <a name="parseLoadbalancerAppArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerAppArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerAppArn(arn: string)
```

Parses a loadbalancer/app/ ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerAppArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadbalancerArn` <a name="parseLoadbalancerArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerArn(arn: string)
```

Parses a loadbalancer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadbalancerGwyArn` <a name="parseLoadbalancerGwyArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerGwyArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerGwyArn(arn: string)
```

Parses a loadbalancer/gwy/ ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerGwyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLoadbalancerNetArn` <a name="parseLoadbalancerNetArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerNetArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerNetArn(arn: string)
```

Parses a loadbalancer/net/ ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseLoadbalancerNetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTargetgroupArn` <a name="parseTargetgroupArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseTargetgroupArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseTargetgroupArn(arn: string)
```

Parses a targetgroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseTargetgroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTruststoreArn` <a name="parseTruststoreArn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseTruststoreArn"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.parseTruststoreArn(arn: string)
```

Parses a truststore ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.parseTruststoreArn.parameter.arn"></a>

- *Type:* string

---

##### `targetgroup` <a name="targetgroup" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.targetgroup"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.targetgroup(props: ElasticloadbalancingTargetgroupArnProps)
```

Builds an ARN for the targetgroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.targetgroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTargetgroupArnProps">ElasticloadbalancingTargetgroupArnProps</a>

---

##### `truststore` <a name="truststore" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.truststore"></a>

```typescript
import { elasticloadbalancing } from '@cdk_utils/iam'

elasticloadbalancing.ElasticloadbalancingResources.truststore(props: ElasticloadbalancingTruststoreArnProps)
```

Builds an ARN for the truststore resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingResources.truststore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elasticloadbalancing.ElasticloadbalancingTruststoreArnProps">ElasticloadbalancingTruststoreArnProps</a>

---




