# `vpc_lattice` Submodule <a name="`vpc_lattice` Submodule" id="@cdk_utils/iam.vpc_lattice"></a>


## Structs <a name="Structs" id="Structs"></a>

### VPCLatticeAccessLogSubscriptionArnComponents <a name="VPCLatticeAccessLogSubscriptionArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents"></a>

Parsed components of a AccessLogSubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeAccessLogSubscriptionArnComponents: vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.accessLogSubscriptionId">accessLogSubscriptionId</a></code> | <code>string</code> | The AccessLogSubscriptionId component. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessLogSubscriptionId`<sup>Required</sup> <a name="accessLogSubscriptionId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.accessLogSubscriptionId"></a>

```typescript
public readonly accessLogSubscriptionId: string;
```

- *Type:* string

The AccessLogSubscriptionId component.

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### VPCLatticeAccessLogSubscriptionArnProps <a name="VPCLatticeAccessLogSubscriptionArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps"></a>

Properties for building a AccessLogSubscription ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeAccessLogSubscriptionArnProps: vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.accessLogSubscriptionId">accessLogSubscriptionId</a></code> | <code>string</code> | The AccessLogSubscriptionId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `accessLogSubscriptionId`<sup>Required</sup> <a name="accessLogSubscriptionId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.accessLogSubscriptionId"></a>

```typescript
public readonly accessLogSubscriptionId: string;
```

- *Type:* string

The AccessLogSubscriptionId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeDomainVerificationArnComponents <a name="VPCLatticeDomainVerificationArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents"></a>

Parsed components of a DomainVerification ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeDomainVerificationArnComponents: vpc_lattice.VPCLatticeDomainVerificationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.domainVerificationId">domainVerificationId</a></code> | <code>string</code> | The DomainVerificationId component. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainVerificationId`<sup>Required</sup> <a name="domainVerificationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.domainVerificationId"></a>

```typescript
public readonly domainVerificationId: string;
```

- *Type:* string

The DomainVerificationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### VPCLatticeDomainVerificationArnProps <a name="VPCLatticeDomainVerificationArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps"></a>

Properties for building a DomainVerification ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeDomainVerificationArnProps: vpc_lattice.VPCLatticeDomainVerificationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.domainVerificationId">domainVerificationId</a></code> | <code>string</code> | The DomainVerificationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainVerificationId`<sup>Required</sup> <a name="domainVerificationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.domainVerificationId"></a>

```typescript
public readonly domainVerificationId: string;
```

- *Type:* string

The DomainVerificationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeListenerArnComponents <a name="VPCLatticeListenerArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents"></a>

Parsed components of a Listener ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeListenerArnComponents: vpc_lattice.VPCLatticeListenerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### VPCLatticeListenerArnProps <a name="VPCLatticeListenerArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps"></a>

Properties for building a Listener ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeListenerArnProps: vpc_lattice.VPCLatticeListenerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeResourceConfigurationArnComponents <a name="VPCLatticeResourceConfigurationArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents"></a>

Parsed components of a ResourceConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeResourceConfigurationArnComponents: vpc_lattice.VPCLatticeResourceConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | The ResourceConfigurationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnComponents.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

The ResourceConfigurationId component.

---

### VPCLatticeResourceConfigurationArnProps <a name="VPCLatticeResourceConfigurationArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps"></a>

Properties for building a ResourceConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeResourceConfigurationArnProps: vpc_lattice.VPCLatticeResourceConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.resourceConfigurationId">resourceConfigurationId</a></code> | <code>string</code> | The ResourceConfigurationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceConfigurationId`<sup>Required</sup> <a name="resourceConfigurationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.resourceConfigurationId"></a>

```typescript
public readonly resourceConfigurationId: string;
```

- *Type:* string

The ResourceConfigurationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeResourceEndpointAssociationArnComponents <a name="VPCLatticeResourceEndpointAssociationArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents"></a>

Parsed components of a ResourceEndpointAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeResourceEndpointAssociationArnComponents: vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.resourceEndpointAssociationId">resourceEndpointAssociationId</a></code> | <code>string</code> | The ResourceEndpointAssociationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceEndpointAssociationId`<sup>Required</sup> <a name="resourceEndpointAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnComponents.property.resourceEndpointAssociationId"></a>

```typescript
public readonly resourceEndpointAssociationId: string;
```

- *Type:* string

The ResourceEndpointAssociationId component.

---

### VPCLatticeResourceEndpointAssociationArnProps <a name="VPCLatticeResourceEndpointAssociationArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps"></a>

Properties for building a ResourceEndpointAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeResourceEndpointAssociationArnProps: vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.resourceEndpointAssociationId">resourceEndpointAssociationId</a></code> | <code>string</code> | The ResourceEndpointAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceEndpointAssociationId`<sup>Required</sup> <a name="resourceEndpointAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.resourceEndpointAssociationId"></a>

```typescript
public readonly resourceEndpointAssociationId: string;
```

- *Type:* string

The ResourceEndpointAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeResourceGatewayArnComponents <a name="VPCLatticeResourceGatewayArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents"></a>

Parsed components of a ResourceGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeResourceGatewayArnComponents: vpc_lattice.VPCLatticeResourceGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.resourceGatewayId">resourceGatewayId</a></code> | <code>string</code> | The ResourceGatewayId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceGatewayId`<sup>Required</sup> <a name="resourceGatewayId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnComponents.property.resourceGatewayId"></a>

```typescript
public readonly resourceGatewayId: string;
```

- *Type:* string

The ResourceGatewayId component.

---

### VPCLatticeResourceGatewayArnProps <a name="VPCLatticeResourceGatewayArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps"></a>

Properties for building a ResourceGateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeResourceGatewayArnProps: vpc_lattice.VPCLatticeResourceGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.resourceGatewayId">resourceGatewayId</a></code> | <code>string</code> | The ResourceGatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceGatewayId`<sup>Required</sup> <a name="resourceGatewayId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.resourceGatewayId"></a>

```typescript
public readonly resourceGatewayId: string;
```

- *Type:* string

The ResourceGatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeRuleArnComponents <a name="VPCLatticeRuleArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents"></a>

Parsed components of a Rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeRuleArnComponents: vpc_lattice.VPCLatticeRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### VPCLatticeRuleArnProps <a name="VPCLatticeRuleArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps"></a>

Properties for building a Rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeRuleArnProps: vpc_lattice.VPCLatticeRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.listenerId">listenerId</a></code> | <code>string</code> | The ListenerId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.ruleId">ruleId</a></code> | <code>string</code> | The RuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `listenerId`<sup>Required</sup> <a name="listenerId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.listenerId"></a>

```typescript
public readonly listenerId: string;
```

- *Type:* string

The ListenerId component of the ARN.

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

The RuleId component of the ARN.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeServiceArnComponents <a name="VPCLatticeServiceArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents"></a>

Parsed components of a Service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceArnComponents: vpc_lattice.VPCLatticeServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnComponents.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component.

---

### VPCLatticeServiceArnProps <a name="VPCLatticeServiceArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps"></a>

Properties for building a Service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceArnProps: vpc_lattice.VPCLatticeServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.serviceId">serviceId</a></code> | <code>string</code> | The ServiceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ServiceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeServiceNetworkArnComponents <a name="VPCLatticeServiceNetworkArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents"></a>

Parsed components of a ServiceNetwork ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkArnComponents: vpc_lattice.VPCLatticeServiceNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The ServiceNetworkId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnComponents.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The ServiceNetworkId component.

---

### VPCLatticeServiceNetworkArnProps <a name="VPCLatticeServiceNetworkArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps"></a>

Properties for building a ServiceNetwork ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkArnProps: vpc_lattice.VPCLatticeServiceNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.serviceNetworkId">serviceNetworkId</a></code> | <code>string</code> | The ServiceNetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceNetworkId`<sup>Required</sup> <a name="serviceNetworkId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.serviceNetworkId"></a>

```typescript
public readonly serviceNetworkId: string;
```

- *Type:* string

The ServiceNetworkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeServiceNetworkResourceAssociationArnComponents <a name="VPCLatticeServiceNetworkResourceAssociationArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents"></a>

Parsed components of a ServiceNetworkResourceAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkResourceAssociationArnComponents: vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.serviceNetworkResourceAssociationId">serviceNetworkResourceAssociationId</a></code> | <code>string</code> | The ServiceNetworkResourceAssociationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceNetworkResourceAssociationId`<sup>Required</sup> <a name="serviceNetworkResourceAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnComponents.property.serviceNetworkResourceAssociationId"></a>

```typescript
public readonly serviceNetworkResourceAssociationId: string;
```

- *Type:* string

The ServiceNetworkResourceAssociationId component.

---

### VPCLatticeServiceNetworkResourceAssociationArnProps <a name="VPCLatticeServiceNetworkResourceAssociationArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps"></a>

Properties for building a ServiceNetworkResourceAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkResourceAssociationArnProps: vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.serviceNetworkResourceAssociationId">serviceNetworkResourceAssociationId</a></code> | <code>string</code> | The ServiceNetworkResourceAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceNetworkResourceAssociationId`<sup>Required</sup> <a name="serviceNetworkResourceAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.serviceNetworkResourceAssociationId"></a>

```typescript
public readonly serviceNetworkResourceAssociationId: string;
```

- *Type:* string

The ServiceNetworkResourceAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeServiceNetworkServiceAssociationArnComponents <a name="VPCLatticeServiceNetworkServiceAssociationArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents"></a>

Parsed components of a ServiceNetworkServiceAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkServiceAssociationArnComponents: vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.serviceNetworkServiceAssociationId">serviceNetworkServiceAssociationId</a></code> | <code>string</code> | The ServiceNetworkServiceAssociationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceNetworkServiceAssociationId`<sup>Required</sup> <a name="serviceNetworkServiceAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnComponents.property.serviceNetworkServiceAssociationId"></a>

```typescript
public readonly serviceNetworkServiceAssociationId: string;
```

- *Type:* string

The ServiceNetworkServiceAssociationId component.

---

### VPCLatticeServiceNetworkServiceAssociationArnProps <a name="VPCLatticeServiceNetworkServiceAssociationArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps"></a>

Properties for building a ServiceNetworkServiceAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkServiceAssociationArnProps: vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.serviceNetworkServiceAssociationId">serviceNetworkServiceAssociationId</a></code> | <code>string</code> | The ServiceNetworkServiceAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceNetworkServiceAssociationId`<sup>Required</sup> <a name="serviceNetworkServiceAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.serviceNetworkServiceAssociationId"></a>

```typescript
public readonly serviceNetworkServiceAssociationId: string;
```

- *Type:* string

The ServiceNetworkServiceAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeServiceNetworkVPCAssociationArnComponents <a name="VPCLatticeServiceNetworkVPCAssociationArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents"></a>

Parsed components of a ServiceNetworkVpcAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkVPCAssociationArnComponents: vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.serviceNetworkVPCAssociationId">serviceNetworkVPCAssociationId</a></code> | <code>string</code> | The ServiceNetworkVpcAssociationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceNetworkVPCAssociationId`<sup>Required</sup> <a name="serviceNetworkVPCAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnComponents.property.serviceNetworkVPCAssociationId"></a>

```typescript
public readonly serviceNetworkVPCAssociationId: string;
```

- *Type:* string

The ServiceNetworkVpcAssociationId component.

---

### VPCLatticeServiceNetworkVPCAssociationArnProps <a name="VPCLatticeServiceNetworkVPCAssociationArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps"></a>

Properties for building a ServiceNetworkVpcAssociation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeServiceNetworkVPCAssociationArnProps: vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.serviceNetworkVPCAssociationId">serviceNetworkVPCAssociationId</a></code> | <code>string</code> | The ServiceNetworkVpcAssociationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceNetworkVPCAssociationId`<sup>Required</sup> <a name="serviceNetworkVPCAssociationId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.serviceNetworkVPCAssociationId"></a>

```typescript
public readonly serviceNetworkVPCAssociationId: string;
```

- *Type:* string

The ServiceNetworkVpcAssociationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VPCLatticeTargetGroupArnComponents <a name="VPCLatticeTargetGroupArnComponents" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents"></a>

Parsed components of a TargetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeTargetGroupArnComponents: vpc_lattice.VPCLatticeTargetGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The TargetGroupId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnComponents.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The TargetGroupId component.

---

### VPCLatticeTargetGroupArnProps <a name="VPCLatticeTargetGroupArnProps" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps"></a>

Properties for building a TargetGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

const vPCLatticeTargetGroupArnProps: vpc_lattice.VPCLatticeTargetGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.targetGroupId">targetGroupId</a></code> | <code>string</code> | The TargetGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `targetGroupId`<sup>Required</sup> <a name="targetGroupId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.targetGroupId"></a>

```typescript
public readonly targetGroupId: string;
```

- *Type:* string

The TargetGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### VPCLatticeActions <a name="VPCLatticeActions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions"></a>

IAM action constants for the vpc-lattice service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

new vpc_lattice.VPCLatticeActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetAccessLogSubscription">actionGetAccessLogSubscription</a></code> | <code>string</code> | [Read] vpc-lattice:GetAccessLogSubscription. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetAuthPolicy">actionGetAuthPolicy</a></code> | <code>string</code> | [Read] vpc-lattice:GetAuthPolicy. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetDomainVerification">actionGetDomainVerification</a></code> | <code>string</code> | [Read] vpc-lattice:GetDomainVerification. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetListener">actionGetListener</a></code> | <code>string</code> | [Read] vpc-lattice:GetListener. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetResourceConfiguration">actionGetResourceConfiguration</a></code> | <code>string</code> | [Read] vpc-lattice:GetResourceConfiguration. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetResourceGateway">actionGetResourceGateway</a></code> | <code>string</code> | [Read] vpc-lattice:GetResourceGateway. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] vpc-lattice:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetRule">actionGetRule</a></code> | <code>string</code> | [Read] vpc-lattice:GetRule. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] vpc-lattice:GetService. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetwork">actionGetServiceNetwork</a></code> | <code>string</code> | [Read] vpc-lattice:GetServiceNetwork. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetworkResourceAssociation">actionGetServiceNetworkResourceAssociation</a></code> | <code>string</code> | [Read] vpc-lattice:GetServiceNetworkResourceAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetworkServiceAssociation">actionGetServiceNetworkServiceAssociation</a></code> | <code>string</code> | [Read] vpc-lattice:GetServiceNetworkServiceAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetworkVpcAssociation">actionGetServiceNetworkVpcAssociation</a></code> | <code>string</code> | [Read] vpc-lattice:GetServiceNetworkVpcAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetTargetGroup">actionGetTargetGroup</a></code> | <code>string</code> | [Read] vpc-lattice:GetTargetGroup. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AssociateViaAWSService">AssociateViaAWSService</a></code> | <code>string</code> | [PermissionManagement] vpc-lattice:AssociateViaAWSService. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AssociateViaAWSServiceEventsAndStates">AssociateViaAWSServiceEventsAndStates</a></code> | <code>string</code> | [PermissionManagement] vpc-lattice:AssociateViaAWSService-EventsAndStates. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateAccessLogSubscription">CreateAccessLogSubscription</a></code> | <code>string</code> | [Write] vpc-lattice:CreateAccessLogSubscription. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateListener">CreateListener</a></code> | <code>string</code> | [Write] vpc-lattice:CreateListener. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateResourceConfiguration">CreateResourceConfiguration</a></code> | <code>string</code> | [Write] vpc-lattice:CreateResourceConfiguration. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateResourceGateway">CreateResourceGateway</a></code> | <code>string</code> | [Write] vpc-lattice:CreateResourceGateway. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] vpc-lattice:CreateRule. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateService">CreateService</a></code> | <code>string</code> | [Write] vpc-lattice:CreateService. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetwork">CreateServiceNetwork</a></code> | <code>string</code> | [Write] vpc-lattice:CreateServiceNetwork. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkResourceAssociation">CreateServiceNetworkResourceAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:CreateServiceNetworkResourceAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkServiceAssociation">CreateServiceNetworkServiceAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:CreateServiceNetworkServiceAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkVpcAssociation">CreateServiceNetworkVpcAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:CreateServiceNetworkVpcAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkVpcEndpointAssociation">CreateServiceNetworkVpcEndpointAssociation</a></code> | <code>string</code> | [PermissionManagement] vpc-lattice:CreateServiceNetworkVpcEndpointAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateTargetGroup">CreateTargetGroup</a></code> | <code>string</code> | [Write] vpc-lattice:CreateTargetGroup. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteAccessLogSubscription">DeleteAccessLogSubscription</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteAccessLogSubscription. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteAuthPolicy">DeleteAuthPolicy</a></code> | <code>string</code> | [PermissionManagement] vpc-lattice:DeleteAuthPolicy. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteDomainVerification">DeleteDomainVerification</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteDomainVerification. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteListener">DeleteListener</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteListener. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourceConfiguration">DeleteResourceConfiguration</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteResourceConfiguration. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourceEndpointAssociation">DeleteResourceEndpointAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteResourceEndpointAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourceGateway">DeleteResourceGateway</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteResourceGateway. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteRule. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteService">DeleteService</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteService. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetwork">DeleteServiceNetwork</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteServiceNetwork. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetworkResourceAssociation">DeleteServiceNetworkResourceAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteServiceNetworkResourceAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetworkServiceAssociation">DeleteServiceNetworkServiceAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteServiceNetworkServiceAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetworkVpcAssociation">DeleteServiceNetworkVpcAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteServiceNetworkVpcAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteTargetGroup">DeleteTargetGroup</a></code> | <code>string</code> | [Write] vpc-lattice:DeleteTargetGroup. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeregisterTargets">DeregisterTargets</a></code> | <code>string</code> | [Write] vpc-lattice:DeregisterTargets. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListAccessLogSubscriptions">ListAccessLogSubscriptions</a></code> | <code>string</code> | [List] vpc-lattice:ListAccessLogSubscriptions. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListDomainVerifications">ListDomainVerifications</a></code> | <code>string</code> | [List] vpc-lattice:ListDomainVerifications. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListListeners">ListListeners</a></code> | <code>string</code> | [List] vpc-lattice:ListListeners. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListResourceConfigurations">ListResourceConfigurations</a></code> | <code>string</code> | [List] vpc-lattice:ListResourceConfigurations. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListResourceEndpointAssociations">ListResourceEndpointAssociations</a></code> | <code>string</code> | [List] vpc-lattice:ListResourceEndpointAssociations. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListResourceGateways">ListResourceGateways</a></code> | <code>string</code> | [List] vpc-lattice:ListResourceGateways. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListRules">ListRules</a></code> | <code>string</code> | [List] vpc-lattice:ListRules. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkResourceAssociations">ListServiceNetworkResourceAssociations</a></code> | <code>string</code> | [List] vpc-lattice:ListServiceNetworkResourceAssociations. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworks">ListServiceNetworks</a></code> | <code>string</code> | [List] vpc-lattice:ListServiceNetworks. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkServiceAssociations">ListServiceNetworkServiceAssociations</a></code> | <code>string</code> | [List] vpc-lattice:ListServiceNetworkServiceAssociations. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkVpcAssociations">ListServiceNetworkVpcAssociations</a></code> | <code>string</code> | [List] vpc-lattice:ListServiceNetworkVpcAssociations. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkVpcEndpointAssociations">ListServiceNetworkVpcEndpointAssociations</a></code> | <code>string</code> | [List] vpc-lattice:ListServiceNetworkVpcEndpointAssociations. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] vpc-lattice:ListServices. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] vpc-lattice:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListTargetGroups">ListTargetGroups</a></code> | <code>string</code> | [List] vpc-lattice:ListTargetGroups. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListTargets">ListTargets</a></code> | <code>string</code> | [List] vpc-lattice:ListTargets. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.PutAuthPolicy">PutAuthPolicy</a></code> | <code>string</code> | [PermissionManagement] vpc-lattice:PutAuthPolicy. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] vpc-lattice:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.RegisterTargets">RegisterTargets</a></code> | <code>string</code> | [Write] vpc-lattice:RegisterTargets. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.StartDomainVerification">StartDomainVerification</a></code> | <code>string</code> | [Write] vpc-lattice:StartDomainVerification. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] vpc-lattice:TagResource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] vpc-lattice:UntagResource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateAccessLogSubscription">UpdateAccessLogSubscription</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateAccessLogSubscription. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateListener">UpdateListener</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateListener. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateResourceConfiguration">UpdateResourceConfiguration</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateResourceConfiguration. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateResourceGateway">UpdateResourceGateway</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateResourceGateway. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateRule. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateService">UpdateService</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateService. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateServiceNetwork">UpdateServiceNetwork</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateServiceNetwork. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateServiceNetworkVpcAssociation">UpdateServiceNetworkVpcAssociation</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateServiceNetworkVpcAssociation. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateTargetGroup">UpdateTargetGroup</a></code> | <code>string</code> | [Write] vpc-lattice:UpdateTargetGroup. |

---

##### `actionGetAccessLogSubscription`<sup>Required</sup> <a name="actionGetAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetAccessLogSubscription"></a>

```typescript
public readonly actionGetAccessLogSubscription: string;
```

- *Type:* string

[Read] vpc-lattice:GetAccessLogSubscription.

---

##### `actionGetAuthPolicy`<sup>Required</sup> <a name="actionGetAuthPolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetAuthPolicy"></a>

```typescript
public readonly actionGetAuthPolicy: string;
```

- *Type:* string

[Read] vpc-lattice:GetAuthPolicy.

---

##### `actionGetDomainVerification`<sup>Required</sup> <a name="actionGetDomainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetDomainVerification"></a>

```typescript
public readonly actionGetDomainVerification: string;
```

- *Type:* string

[Read] vpc-lattice:GetDomainVerification.

---

##### `actionGetListener`<sup>Required</sup> <a name="actionGetListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetListener"></a>

```typescript
public readonly actionGetListener: string;
```

- *Type:* string

[Read] vpc-lattice:GetListener.

---

##### `actionGetResourceConfiguration`<sup>Required</sup> <a name="actionGetResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetResourceConfiguration"></a>

```typescript
public readonly actionGetResourceConfiguration: string;
```

- *Type:* string

[Read] vpc-lattice:GetResourceConfiguration.

---

##### `actionGetResourceGateway`<sup>Required</sup> <a name="actionGetResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetResourceGateway"></a>

```typescript
public readonly actionGetResourceGateway: string;
```

- *Type:* string

[Read] vpc-lattice:GetResourceGateway.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] vpc-lattice:GetResourcePolicy.

---

##### `actionGetRule`<sup>Required</sup> <a name="actionGetRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetRule"></a>

```typescript
public readonly actionGetRule: string;
```

- *Type:* string

[Read] vpc-lattice:GetRule.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] vpc-lattice:GetService.

---

##### `actionGetServiceNetwork`<sup>Required</sup> <a name="actionGetServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetwork"></a>

```typescript
public readonly actionGetServiceNetwork: string;
```

- *Type:* string

[Read] vpc-lattice:GetServiceNetwork.

---

##### `actionGetServiceNetworkResourceAssociation`<sup>Required</sup> <a name="actionGetServiceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetworkResourceAssociation"></a>

```typescript
public readonly actionGetServiceNetworkResourceAssociation: string;
```

- *Type:* string

[Read] vpc-lattice:GetServiceNetworkResourceAssociation.

---

##### `actionGetServiceNetworkServiceAssociation`<sup>Required</sup> <a name="actionGetServiceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetworkServiceAssociation"></a>

```typescript
public readonly actionGetServiceNetworkServiceAssociation: string;
```

- *Type:* string

[Read] vpc-lattice:GetServiceNetworkServiceAssociation.

---

##### `actionGetServiceNetworkVpcAssociation`<sup>Required</sup> <a name="actionGetServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetServiceNetworkVpcAssociation"></a>

```typescript
public readonly actionGetServiceNetworkVpcAssociation: string;
```

- *Type:* string

[Read] vpc-lattice:GetServiceNetworkVpcAssociation.

---

##### `actionGetTargetGroup`<sup>Required</sup> <a name="actionGetTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.actionGetTargetGroup"></a>

```typescript
public readonly actionGetTargetGroup: string;
```

- *Type:* string

[Read] vpc-lattice:GetTargetGroup.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateViaAWSService`<sup>Required</sup> <a name="AssociateViaAWSService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AssociateViaAWSService"></a>

```typescript
public readonly AssociateViaAWSService: string;
```

- *Type:* string

[PermissionManagement] vpc-lattice:AssociateViaAWSService.

---

##### `AssociateViaAWSServiceEventsAndStates`<sup>Required</sup> <a name="AssociateViaAWSServiceEventsAndStates" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.AssociateViaAWSServiceEventsAndStates"></a>

```typescript
public readonly AssociateViaAWSServiceEventsAndStates: string;
```

- *Type:* string

[PermissionManagement] vpc-lattice:AssociateViaAWSService-EventsAndStates.

---

##### `CreateAccessLogSubscription`<sup>Required</sup> <a name="CreateAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateAccessLogSubscription"></a>

```typescript
public readonly CreateAccessLogSubscription: string;
```

- *Type:* string

[Write] vpc-lattice:CreateAccessLogSubscription.

---

##### `CreateListener`<sup>Required</sup> <a name="CreateListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateListener"></a>

```typescript
public readonly CreateListener: string;
```

- *Type:* string

[Write] vpc-lattice:CreateListener.

---

##### `CreateResourceConfiguration`<sup>Required</sup> <a name="CreateResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateResourceConfiguration"></a>

```typescript
public readonly CreateResourceConfiguration: string;
```

- *Type:* string

[Write] vpc-lattice:CreateResourceConfiguration.

---

##### `CreateResourceGateway`<sup>Required</sup> <a name="CreateResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateResourceGateway"></a>

```typescript
public readonly CreateResourceGateway: string;
```

- *Type:* string

[Write] vpc-lattice:CreateResourceGateway.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] vpc-lattice:CreateRule.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateService"></a>

```typescript
public readonly CreateService: string;
```

- *Type:* string

[Write] vpc-lattice:CreateService.

---

##### `CreateServiceNetwork`<sup>Required</sup> <a name="CreateServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetwork"></a>

```typescript
public readonly CreateServiceNetwork: string;
```

- *Type:* string

[Write] vpc-lattice:CreateServiceNetwork.

---

##### `CreateServiceNetworkResourceAssociation`<sup>Required</sup> <a name="CreateServiceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkResourceAssociation"></a>

```typescript
public readonly CreateServiceNetworkResourceAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:CreateServiceNetworkResourceAssociation.

---

##### `CreateServiceNetworkServiceAssociation`<sup>Required</sup> <a name="CreateServiceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkServiceAssociation"></a>

```typescript
public readonly CreateServiceNetworkServiceAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:CreateServiceNetworkServiceAssociation.

---

##### `CreateServiceNetworkVpcAssociation`<sup>Required</sup> <a name="CreateServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkVpcAssociation"></a>

```typescript
public readonly CreateServiceNetworkVpcAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:CreateServiceNetworkVpcAssociation.

---

##### `CreateServiceNetworkVpcEndpointAssociation`<sup>Required</sup> <a name="CreateServiceNetworkVpcEndpointAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateServiceNetworkVpcEndpointAssociation"></a>

```typescript
public readonly CreateServiceNetworkVpcEndpointAssociation: string;
```

- *Type:* string

[PermissionManagement] vpc-lattice:CreateServiceNetworkVpcEndpointAssociation.

---

##### `CreateTargetGroup`<sup>Required</sup> <a name="CreateTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.CreateTargetGroup"></a>

```typescript
public readonly CreateTargetGroup: string;
```

- *Type:* string

[Write] vpc-lattice:CreateTargetGroup.

---

##### `DeleteAccessLogSubscription`<sup>Required</sup> <a name="DeleteAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteAccessLogSubscription"></a>

```typescript
public readonly DeleteAccessLogSubscription: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteAccessLogSubscription.

---

##### `DeleteAuthPolicy`<sup>Required</sup> <a name="DeleteAuthPolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteAuthPolicy"></a>

```typescript
public readonly DeleteAuthPolicy: string;
```

- *Type:* string

[PermissionManagement] vpc-lattice:DeleteAuthPolicy.

---

##### `DeleteDomainVerification`<sup>Required</sup> <a name="DeleteDomainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteDomainVerification"></a>

```typescript
public readonly DeleteDomainVerification: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteDomainVerification.

---

##### `DeleteListener`<sup>Required</sup> <a name="DeleteListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteListener"></a>

```typescript
public readonly DeleteListener: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteListener.

---

##### `DeleteResourceConfiguration`<sup>Required</sup> <a name="DeleteResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourceConfiguration"></a>

```typescript
public readonly DeleteResourceConfiguration: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteResourceConfiguration.

---

##### `DeleteResourceEndpointAssociation`<sup>Required</sup> <a name="DeleteResourceEndpointAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourceEndpointAssociation"></a>

```typescript
public readonly DeleteResourceEndpointAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteResourceEndpointAssociation.

---

##### `DeleteResourceGateway`<sup>Required</sup> <a name="DeleteResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourceGateway"></a>

```typescript
public readonly DeleteResourceGateway: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteResourceGateway.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteResourcePolicy.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteRule.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteService"></a>

```typescript
public readonly DeleteService: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteService.

---

##### `DeleteServiceNetwork`<sup>Required</sup> <a name="DeleteServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetwork"></a>

```typescript
public readonly DeleteServiceNetwork: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteServiceNetwork.

---

##### `DeleteServiceNetworkResourceAssociation`<sup>Required</sup> <a name="DeleteServiceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetworkResourceAssociation"></a>

```typescript
public readonly DeleteServiceNetworkResourceAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteServiceNetworkResourceAssociation.

---

##### `DeleteServiceNetworkServiceAssociation`<sup>Required</sup> <a name="DeleteServiceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetworkServiceAssociation"></a>

```typescript
public readonly DeleteServiceNetworkServiceAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteServiceNetworkServiceAssociation.

---

##### `DeleteServiceNetworkVpcAssociation`<sup>Required</sup> <a name="DeleteServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteServiceNetworkVpcAssociation"></a>

```typescript
public readonly DeleteServiceNetworkVpcAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteServiceNetworkVpcAssociation.

---

##### `DeleteTargetGroup`<sup>Required</sup> <a name="DeleteTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeleteTargetGroup"></a>

```typescript
public readonly DeleteTargetGroup: string;
```

- *Type:* string

[Write] vpc-lattice:DeleteTargetGroup.

---

##### `DeregisterTargets`<sup>Required</sup> <a name="DeregisterTargets" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.DeregisterTargets"></a>

```typescript
public readonly DeregisterTargets: string;
```

- *Type:* string

[Write] vpc-lattice:DeregisterTargets.

---

##### `ListAccessLogSubscriptions`<sup>Required</sup> <a name="ListAccessLogSubscriptions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListAccessLogSubscriptions"></a>

```typescript
public readonly ListAccessLogSubscriptions: string;
```

- *Type:* string

[List] vpc-lattice:ListAccessLogSubscriptions.

---

##### `ListDomainVerifications`<sup>Required</sup> <a name="ListDomainVerifications" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListDomainVerifications"></a>

```typescript
public readonly ListDomainVerifications: string;
```

- *Type:* string

[List] vpc-lattice:ListDomainVerifications.

---

##### `ListListeners`<sup>Required</sup> <a name="ListListeners" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListListeners"></a>

```typescript
public readonly ListListeners: string;
```

- *Type:* string

[List] vpc-lattice:ListListeners.

---

##### `ListResourceConfigurations`<sup>Required</sup> <a name="ListResourceConfigurations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListResourceConfigurations"></a>

```typescript
public readonly ListResourceConfigurations: string;
```

- *Type:* string

[List] vpc-lattice:ListResourceConfigurations.

---

##### `ListResourceEndpointAssociations`<sup>Required</sup> <a name="ListResourceEndpointAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListResourceEndpointAssociations"></a>

```typescript
public readonly ListResourceEndpointAssociations: string;
```

- *Type:* string

[List] vpc-lattice:ListResourceEndpointAssociations.

---

##### `ListResourceGateways`<sup>Required</sup> <a name="ListResourceGateways" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListResourceGateways"></a>

```typescript
public readonly ListResourceGateways: string;
```

- *Type:* string

[List] vpc-lattice:ListResourceGateways.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[List] vpc-lattice:ListRules.

---

##### `ListServiceNetworkResourceAssociations`<sup>Required</sup> <a name="ListServiceNetworkResourceAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkResourceAssociations"></a>

```typescript
public readonly ListServiceNetworkResourceAssociations: string;
```

- *Type:* string

[List] vpc-lattice:ListServiceNetworkResourceAssociations.

---

##### `ListServiceNetworks`<sup>Required</sup> <a name="ListServiceNetworks" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworks"></a>

```typescript
public readonly ListServiceNetworks: string;
```

- *Type:* string

[List] vpc-lattice:ListServiceNetworks.

---

##### `ListServiceNetworkServiceAssociations`<sup>Required</sup> <a name="ListServiceNetworkServiceAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkServiceAssociations"></a>

```typescript
public readonly ListServiceNetworkServiceAssociations: string;
```

- *Type:* string

[List] vpc-lattice:ListServiceNetworkServiceAssociations.

---

##### `ListServiceNetworkVpcAssociations`<sup>Required</sup> <a name="ListServiceNetworkVpcAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkVpcAssociations"></a>

```typescript
public readonly ListServiceNetworkVpcAssociations: string;
```

- *Type:* string

[List] vpc-lattice:ListServiceNetworkVpcAssociations.

---

##### `ListServiceNetworkVpcEndpointAssociations`<sup>Required</sup> <a name="ListServiceNetworkVpcEndpointAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServiceNetworkVpcEndpointAssociations"></a>

```typescript
public readonly ListServiceNetworkVpcEndpointAssociations: string;
```

- *Type:* string

[List] vpc-lattice:ListServiceNetworkVpcEndpointAssociations.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] vpc-lattice:ListServices.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] vpc-lattice:ListTagsForResource.

---

##### `ListTargetGroups`<sup>Required</sup> <a name="ListTargetGroups" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListTargetGroups"></a>

```typescript
public readonly ListTargetGroups: string;
```

- *Type:* string

[List] vpc-lattice:ListTargetGroups.

---

##### `ListTargets`<sup>Required</sup> <a name="ListTargets" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.ListTargets"></a>

```typescript
public readonly ListTargets: string;
```

- *Type:* string

[List] vpc-lattice:ListTargets.

---

##### `PutAuthPolicy`<sup>Required</sup> <a name="PutAuthPolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.PutAuthPolicy"></a>

```typescript
public readonly PutAuthPolicy: string;
```

- *Type:* string

[PermissionManagement] vpc-lattice:PutAuthPolicy.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] vpc-lattice:PutResourcePolicy.

---

##### `RegisterTargets`<sup>Required</sup> <a name="RegisterTargets" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.RegisterTargets"></a>

```typescript
public readonly RegisterTargets: string;
```

- *Type:* string

[Write] vpc-lattice:RegisterTargets.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDomainVerification`<sup>Required</sup> <a name="StartDomainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.StartDomainVerification"></a>

```typescript
public readonly StartDomainVerification: string;
```

- *Type:* string

[Write] vpc-lattice:StartDomainVerification.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] vpc-lattice:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] vpc-lattice:UntagResource.

---

##### `UpdateAccessLogSubscription`<sup>Required</sup> <a name="UpdateAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateAccessLogSubscription"></a>

```typescript
public readonly UpdateAccessLogSubscription: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateAccessLogSubscription.

---

##### `UpdateListener`<sup>Required</sup> <a name="UpdateListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateListener"></a>

```typescript
public readonly UpdateListener: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateListener.

---

##### `UpdateResourceConfiguration`<sup>Required</sup> <a name="UpdateResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateResourceConfiguration"></a>

```typescript
public readonly UpdateResourceConfiguration: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateResourceConfiguration.

---

##### `UpdateResourceGateway`<sup>Required</sup> <a name="UpdateResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateResourceGateway"></a>

```typescript
public readonly UpdateResourceGateway: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateResourceGateway.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateRule.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateService"></a>

```typescript
public readonly UpdateService: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateService.

---

##### `UpdateServiceNetwork`<sup>Required</sup> <a name="UpdateServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateServiceNetwork"></a>

```typescript
public readonly UpdateServiceNetwork: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateServiceNetwork.

---

##### `UpdateServiceNetworkVpcAssociation`<sup>Required</sup> <a name="UpdateServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateServiceNetworkVpcAssociation"></a>

```typescript
public readonly UpdateServiceNetworkVpcAssociation: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateServiceNetworkVpcAssociation.

---

##### `UpdateTargetGroup`<sup>Required</sup> <a name="UpdateTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeActions.property.UpdateTargetGroup"></a>

```typescript
public readonly UpdateTargetGroup: string;
```

- *Type:* string

[Write] vpc-lattice:UpdateTargetGroup.

---

### VPCLatticeConditions <a name="VPCLatticeConditions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions"></a>

Condition key constants and builders for vpc-lattice.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

new vpc_lattice.VPCLatticeConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.authType">authType</a></code> | Generates a condition block for `vpc-lattice:AuthType`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.createAction">createAction</a></code> | Generates a condition block for `vpc-lattice:CreateAction`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.domainName">domainName</a></code> | Generates a condition block for `vpc-lattice:DomainName`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.privateDNSPreference">privateDNSPreference</a></code> | Generates a condition block for `vpc-lattice:PrivateDnsPreference`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.privateDNSSpecifiedDomains">privateDNSSpecifiedDomains</a></code> | Generates a condition block for `vpc-lattice:PrivateDnsSpecifiedDomains`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.protocol">protocol</a></code> | Generates a condition block for `vpc-lattice:Protocol`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.resourceConfigurationARN">resourceConfigurationARN</a></code> | Generates a condition block for `vpc-lattice:ResourceConfigurationArn`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.securityGroupIds">securityGroupIds</a></code> | Generates a condition block for `vpc-lattice:SecurityGroupIds`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.serviceARN">serviceARN</a></code> | Generates a condition block for `vpc-lattice:ServiceArn`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.serviceNetworkARN">serviceNetworkARN</a></code> | Generates a condition block for `vpc-lattice:ServiceNetworkArn`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.targetGroupArns">targetGroupArns</a></code> | Generates a condition block for `vpc-lattice:TargetGroupArns`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.vpcEndpointId">vpcEndpointId</a></code> | Generates a condition block for `vpc-lattice:VpcEndpointId`. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.vpcId">vpcId</a></code> | Generates a condition block for `vpc-lattice:VpcId`. |

---

##### `authType` <a name="authType" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.authType"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.authType(value: string)
```

Generates a condition block for `vpc-lattice:AuthType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.authType.parameter.value"></a>

- *Type:* string

---

##### `createAction` <a name="createAction" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.createAction"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.createAction(value: string)
```

Generates a condition block for `vpc-lattice:CreateAction`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.createAction.parameter.value"></a>

- *Type:* string

---

##### `domainName` <a name="domainName" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.domainName"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.domainName(value: string)
```

Generates a condition block for `vpc-lattice:DomainName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.domainName.parameter.value"></a>

- *Type:* string

---

##### `privateDNSPreference` <a name="privateDNSPreference" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.privateDNSPreference"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.privateDNSPreference(value: string)
```

Generates a condition block for `vpc-lattice:PrivateDnsPreference`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.privateDNSPreference.parameter.value"></a>

- *Type:* string

---

##### `privateDNSSpecifiedDomains` <a name="privateDNSSpecifiedDomains" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.privateDNSSpecifiedDomains"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.privateDNSSpecifiedDomains(values: string[])
```

Generates a condition block for `vpc-lattice:PrivateDnsSpecifiedDomains`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.privateDNSSpecifiedDomains.parameter.values"></a>

- *Type:* string[]

---

##### `protocol` <a name="protocol" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.protocol"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.protocol(value: string)
```

Generates a condition block for `vpc-lattice:Protocol`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.protocol.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.requestTag"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceConfigurationARN` <a name="resourceConfigurationARN" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.resourceConfigurationARN"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.resourceConfigurationARN(value: string)
```

Generates a condition block for `vpc-lattice:ResourceConfigurationArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.resourceConfigurationARN.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.resourceTag"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `securityGroupIds` <a name="securityGroupIds" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.securityGroupIds"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.securityGroupIds(values: string[])
```

Generates a condition block for `vpc-lattice:SecurityGroupIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.securityGroupIds.parameter.values"></a>

- *Type:* string[]

---

##### `serviceARN` <a name="serviceARN" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.serviceARN"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.serviceARN(value: string)
```

Generates a condition block for `vpc-lattice:ServiceArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.serviceARN.parameter.value"></a>

- *Type:* string

---

##### `serviceNetworkARN` <a name="serviceNetworkARN" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.serviceNetworkARN"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.serviceNetworkARN(value: string)
```

Generates a condition block for `vpc-lattice:ServiceNetworkArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.serviceNetworkARN.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.tagKeys"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targetGroupArns` <a name="targetGroupArns" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.targetGroupArns"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.targetGroupArns(values: string[])
```

Generates a condition block for `vpc-lattice:TargetGroupArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.targetGroupArns.parameter.values"></a>

- *Type:* string[]

---

##### `vpcEndpointId` <a name="vpcEndpointId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.vpcEndpointId"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.vpcEndpointId(value: string)
```

Generates a condition block for `vpc-lattice:VpcEndpointId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.vpcEndpointId.parameter.value"></a>

- *Type:* string

---

##### `vpcId` <a name="vpcId" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.vpcId"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeConditions.vpcId(value: string)
```

Generates a condition block for `vpc-lattice:VpcId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.vpcId.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetAccessLogSubscriptionConditionKeys">actionGetAccessLogSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAccessLogSubscription action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetDomainVerificationConditionKeys">actionGetDomainVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDomainVerification action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetListenerConditionKeys">actionGetListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetListener action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetResourceConfigurationConditionKeys">actionGetResourceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourceConfiguration action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetResourceGatewayConditionKeys">actionGetResourceGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourceGateway action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetRuleConditionKeys">actionGetRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRule action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceConditionKeys">actionGetServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetService action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkConditionKeys">actionGetServiceNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceNetwork action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkResourceAssociationConditionKeys">actionGetServiceNetworkResourceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceNetworkResourceAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkServiceAssociationConditionKeys">actionGetServiceNetworkServiceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceNetworkServiceAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkVpcAssociationConditionKeys">actionGetServiceNetworkVpcAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceNetworkVpcAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetTargetGroupConditionKeys">actionGetTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetTargetGroup action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AUTH_TYPE">AUTH_TYPE</a></code> | <code>string</code> | Condition key: vpc-lattice:AuthType (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CREATE_ACTION">CREATE_ACTION</a></code> | <code>string</code> | Condition key: vpc-lattice:CreateAction (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateAccessLogSubscriptionConditionKeys">CreateAccessLogSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAccessLogSubscription action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateListenerConditionKeys">CreateListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateListener action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateResourceConfigurationConditionKeys">CreateResourceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceConfiguration action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateResourceGatewayConditionKeys">CreateResourceGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateResourceGateway action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceConditionKeys">CreateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateService action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkConditionKeys">CreateServiceNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceNetwork action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkResourceAssociationConditionKeys">CreateServiceNetworkResourceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceNetworkResourceAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkServiceAssociationConditionKeys">CreateServiceNetworkServiceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceNetworkServiceAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkVpcAssociationConditionKeys">CreateServiceNetworkVpcAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceNetworkVpcAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateTargetGroupConditionKeys">CreateTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTargetGroup action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteAccessLogSubscriptionConditionKeys">DeleteAccessLogSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAccessLogSubscription action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteDomainVerificationConditionKeys">DeleteDomainVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteDomainVerification action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteListenerConditionKeys">DeleteListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteListener action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteResourceConfigurationConditionKeys">DeleteResourceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceConfiguration action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteResourceEndpointAssociationConditionKeys">DeleteResourceEndpointAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceEndpointAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteResourceGatewayConditionKeys">DeleteResourceGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourceGateway action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteRuleConditionKeys">DeleteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRule action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceConditionKeys">DeleteServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteService action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkConditionKeys">DeleteServiceNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceNetwork action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkResourceAssociationConditionKeys">DeleteServiceNetworkResourceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceNetworkResourceAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkServiceAssociationConditionKeys">DeleteServiceNetworkServiceAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceNetworkServiceAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkVpcAssociationConditionKeys">DeleteServiceNetworkVpcAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteServiceNetworkVpcAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteTargetGroupConditionKeys">DeleteTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTargetGroup action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DOMAIN_NAME">DOMAIN_NAME</a></code> | <code>string</code> | Condition key: vpc-lattice:DomainName (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.ListResourceEndpointAssociationsConditionKeys">ListResourceEndpointAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListResourceEndpointAssociations action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.ListServiceNetworkServiceAssociationsConditionKeys">ListServiceNetworkServiceAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListServiceNetworkServiceAssociations action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.ListServiceNetworkVpcAssociationsConditionKeys">ListServiceNetworkVpcAssociationsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListServiceNetworkVpcAssociations action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.PRIVATE_DNS_PREFERENCE">PRIVATE_DNS_PREFERENCE</a></code> | <code>string</code> | Condition key: vpc-lattice:PrivateDnsPreference (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.PRIVATE_DNS_SPECIFIED_DOMAINS">PRIVATE_DNS_SPECIFIED_DOMAINS</a></code> | <code>string</code> | Condition key: vpc-lattice:PrivateDnsSpecifiedDomains (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.PROTOCOL">PROTOCOL</a></code> | <code>string</code> | Condition key: vpc-lattice:Protocol (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.RESOURCE_CONFIGURATION_ARN">RESOURCE_CONFIGURATION_ARN</a></code> | <code>string</code> | Condition key: vpc-lattice:ResourceConfigurationArn (ARN). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.SECURITY_GROUP_IDS">SECURITY_GROUP_IDS</a></code> | <code>string</code> | Condition key: vpc-lattice:SecurityGroupIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.SERVICE_ARN">SERVICE_ARN</a></code> | <code>string</code> | Condition key: vpc-lattice:ServiceArn (ARN). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.SERVICE_NETWORK_ARN">SERVICE_NETWORK_ARN</a></code> | <code>string</code> | Condition key: vpc-lattice:ServiceNetworkArn (ARN). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.StartDomainVerificationConditionKeys">StartDomainVerificationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartDomainVerification action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.TARGET_GROUP_ARNS">TARGET_GROUP_ARNS</a></code> | <code>string</code> | Condition key: vpc-lattice:TargetGroupArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateAccessLogSubscriptionConditionKeys">UpdateAccessLogSubscriptionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAccessLogSubscription action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateListenerConditionKeys">UpdateListenerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateListener action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateResourceConfigurationConditionKeys">UpdateResourceConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResourceConfiguration action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateResourceGatewayConditionKeys">UpdateResourceGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateResourceGateway action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateRuleConditionKeys">UpdateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRule action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateServiceConditionKeys">UpdateServiceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateService action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateServiceNetworkConditionKeys">UpdateServiceNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServiceNetwork action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateServiceNetworkVpcAssociationConditionKeys">UpdateServiceNetworkVpcAssociationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateServiceNetworkVpcAssociation action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateTargetGroupConditionKeys">UpdateTargetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTargetGroup action. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.VPC_ENDPOINT_ID">VPC_ENDPOINT_ID</a></code> | <code>string</code> | Condition key: vpc-lattice:VpcEndpointId (String). |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.VPC_ID">VPC_ID</a></code> | <code>string</code> | Condition key: vpc-lattice:VpcId (String). |

---

##### `actionGetAccessLogSubscriptionConditionKeys`<sup>Required</sup> <a name="actionGetAccessLogSubscriptionConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetAccessLogSubscriptionConditionKeys"></a>

```typescript
public readonly actionGetAccessLogSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAccessLogSubscription action.

---

##### `actionGetDomainVerificationConditionKeys`<sup>Required</sup> <a name="actionGetDomainVerificationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetDomainVerificationConditionKeys"></a>

```typescript
public readonly actionGetDomainVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDomainVerification action.

---

##### `actionGetListenerConditionKeys`<sup>Required</sup> <a name="actionGetListenerConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetListenerConditionKeys"></a>

```typescript
public readonly actionGetListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetListener action.

---

##### `actionGetResourceConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetResourceConfigurationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetResourceConfigurationConditionKeys"></a>

```typescript
public readonly actionGetResourceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourceConfiguration action.

---

##### `actionGetResourceGatewayConditionKeys`<sup>Required</sup> <a name="actionGetResourceGatewayConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetResourceGatewayConditionKeys"></a>

```typescript
public readonly actionGetResourceGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourceGateway action.

---

##### `actionGetRuleConditionKeys`<sup>Required</sup> <a name="actionGetRuleConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetRuleConditionKeys"></a>

```typescript
public readonly actionGetRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRule action.

---

##### `actionGetServiceConditionKeys`<sup>Required</sup> <a name="actionGetServiceConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceConditionKeys"></a>

```typescript
public readonly actionGetServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetService action.

---

##### `actionGetServiceNetworkConditionKeys`<sup>Required</sup> <a name="actionGetServiceNetworkConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkConditionKeys"></a>

```typescript
public readonly actionGetServiceNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceNetwork action.

---

##### `actionGetServiceNetworkResourceAssociationConditionKeys`<sup>Required</sup> <a name="actionGetServiceNetworkResourceAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkResourceAssociationConditionKeys"></a>

```typescript
public readonly actionGetServiceNetworkResourceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceNetworkResourceAssociation action.

---

##### `actionGetServiceNetworkServiceAssociationConditionKeys`<sup>Required</sup> <a name="actionGetServiceNetworkServiceAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkServiceAssociationConditionKeys"></a>

```typescript
public readonly actionGetServiceNetworkServiceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceNetworkServiceAssociation action.

---

##### `actionGetServiceNetworkVpcAssociationConditionKeys`<sup>Required</sup> <a name="actionGetServiceNetworkVpcAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetServiceNetworkVpcAssociationConditionKeys"></a>

```typescript
public readonly actionGetServiceNetworkVpcAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceNetworkVpcAssociation action.

---

##### `actionGetTargetGroupConditionKeys`<sup>Required</sup> <a name="actionGetTargetGroupConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.actionGetTargetGroupConditionKeys"></a>

```typescript
public readonly actionGetTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetTargetGroup action.

---

##### `AUTH_TYPE`<sup>Required</sup> <a name="AUTH_TYPE" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AUTH_TYPE"></a>

```typescript
public readonly AUTH_TYPE: string;
```

- *Type:* string

Condition key: vpc-lattice:AuthType (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CREATE_ACTION`<sup>Required</sup> <a name="CREATE_ACTION" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CREATE_ACTION"></a>

```typescript
public readonly CREATE_ACTION: string;
```

- *Type:* string

Condition key: vpc-lattice:CreateAction (String).

---

##### `CreateAccessLogSubscriptionConditionKeys`<sup>Required</sup> <a name="CreateAccessLogSubscriptionConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateAccessLogSubscriptionConditionKeys"></a>

```typescript
public readonly CreateAccessLogSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAccessLogSubscription action.

---

##### `CreateListenerConditionKeys`<sup>Required</sup> <a name="CreateListenerConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateListenerConditionKeys"></a>

```typescript
public readonly CreateListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateListener action.

---

##### `CreateResourceConfigurationConditionKeys`<sup>Required</sup> <a name="CreateResourceConfigurationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateResourceConfigurationConditionKeys"></a>

```typescript
public readonly CreateResourceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceConfiguration action.

---

##### `CreateResourceGatewayConditionKeys`<sup>Required</sup> <a name="CreateResourceGatewayConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateResourceGatewayConditionKeys"></a>

```typescript
public readonly CreateResourceGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateResourceGateway action.

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `CreateServiceConditionKeys`<sup>Required</sup> <a name="CreateServiceConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceConditionKeys"></a>

```typescript
public readonly CreateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateService action.

---

##### `CreateServiceNetworkConditionKeys`<sup>Required</sup> <a name="CreateServiceNetworkConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkConditionKeys"></a>

```typescript
public readonly CreateServiceNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceNetwork action.

---

##### `CreateServiceNetworkResourceAssociationConditionKeys`<sup>Required</sup> <a name="CreateServiceNetworkResourceAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkResourceAssociationConditionKeys"></a>

```typescript
public readonly CreateServiceNetworkResourceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceNetworkResourceAssociation action.

---

##### `CreateServiceNetworkServiceAssociationConditionKeys`<sup>Required</sup> <a name="CreateServiceNetworkServiceAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkServiceAssociationConditionKeys"></a>

```typescript
public readonly CreateServiceNetworkServiceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceNetworkServiceAssociation action.

---

##### `CreateServiceNetworkVpcAssociationConditionKeys`<sup>Required</sup> <a name="CreateServiceNetworkVpcAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateServiceNetworkVpcAssociationConditionKeys"></a>

```typescript
public readonly CreateServiceNetworkVpcAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceNetworkVpcAssociation action.

---

##### `CreateTargetGroupConditionKeys`<sup>Required</sup> <a name="CreateTargetGroupConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.CreateTargetGroupConditionKeys"></a>

```typescript
public readonly CreateTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTargetGroup action.

---

##### `DeleteAccessLogSubscriptionConditionKeys`<sup>Required</sup> <a name="DeleteAccessLogSubscriptionConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteAccessLogSubscriptionConditionKeys"></a>

```typescript
public readonly DeleteAccessLogSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAccessLogSubscription action.

---

##### `DeleteDomainVerificationConditionKeys`<sup>Required</sup> <a name="DeleteDomainVerificationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteDomainVerificationConditionKeys"></a>

```typescript
public readonly DeleteDomainVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteDomainVerification action.

---

##### `DeleteListenerConditionKeys`<sup>Required</sup> <a name="DeleteListenerConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteListenerConditionKeys"></a>

```typescript
public readonly DeleteListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteListener action.

---

##### `DeleteResourceConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteResourceConfigurationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteResourceConfigurationConditionKeys"></a>

```typescript
public readonly DeleteResourceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceConfiguration action.

---

##### `DeleteResourceEndpointAssociationConditionKeys`<sup>Required</sup> <a name="DeleteResourceEndpointAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteResourceEndpointAssociationConditionKeys"></a>

```typescript
public readonly DeleteResourceEndpointAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceEndpointAssociation action.

---

##### `DeleteResourceGatewayConditionKeys`<sup>Required</sup> <a name="DeleteResourceGatewayConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteResourceGatewayConditionKeys"></a>

```typescript
public readonly DeleteResourceGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourceGateway action.

---

##### `DeleteRuleConditionKeys`<sup>Required</sup> <a name="DeleteRuleConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteRuleConditionKeys"></a>

```typescript
public readonly DeleteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRule action.

---

##### `DeleteServiceConditionKeys`<sup>Required</sup> <a name="DeleteServiceConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceConditionKeys"></a>

```typescript
public readonly DeleteServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteService action.

---

##### `DeleteServiceNetworkConditionKeys`<sup>Required</sup> <a name="DeleteServiceNetworkConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkConditionKeys"></a>

```typescript
public readonly DeleteServiceNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceNetwork action.

---

##### `DeleteServiceNetworkResourceAssociationConditionKeys`<sup>Required</sup> <a name="DeleteServiceNetworkResourceAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkResourceAssociationConditionKeys"></a>

```typescript
public readonly DeleteServiceNetworkResourceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceNetworkResourceAssociation action.

---

##### `DeleteServiceNetworkServiceAssociationConditionKeys`<sup>Required</sup> <a name="DeleteServiceNetworkServiceAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkServiceAssociationConditionKeys"></a>

```typescript
public readonly DeleteServiceNetworkServiceAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceNetworkServiceAssociation action.

---

##### `DeleteServiceNetworkVpcAssociationConditionKeys`<sup>Required</sup> <a name="DeleteServiceNetworkVpcAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteServiceNetworkVpcAssociationConditionKeys"></a>

```typescript
public readonly DeleteServiceNetworkVpcAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteServiceNetworkVpcAssociation action.

---

##### `DeleteTargetGroupConditionKeys`<sup>Required</sup> <a name="DeleteTargetGroupConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DeleteTargetGroupConditionKeys"></a>

```typescript
public readonly DeleteTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTargetGroup action.

---

##### `DOMAIN_NAME`<sup>Required</sup> <a name="DOMAIN_NAME" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.DOMAIN_NAME"></a>

```typescript
public readonly DOMAIN_NAME: string;
```

- *Type:* string

Condition key: vpc-lattice:DomainName (String).

---

##### `ListResourceEndpointAssociationsConditionKeys`<sup>Required</sup> <a name="ListResourceEndpointAssociationsConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.ListResourceEndpointAssociationsConditionKeys"></a>

```typescript
public readonly ListResourceEndpointAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListResourceEndpointAssociations action.

---

##### `ListServiceNetworkServiceAssociationsConditionKeys`<sup>Required</sup> <a name="ListServiceNetworkServiceAssociationsConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.ListServiceNetworkServiceAssociationsConditionKeys"></a>

```typescript
public readonly ListServiceNetworkServiceAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListServiceNetworkServiceAssociations action.

---

##### `ListServiceNetworkVpcAssociationsConditionKeys`<sup>Required</sup> <a name="ListServiceNetworkVpcAssociationsConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.ListServiceNetworkVpcAssociationsConditionKeys"></a>

```typescript
public readonly ListServiceNetworkVpcAssociationsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListServiceNetworkVpcAssociations action.

---

##### `PRIVATE_DNS_PREFERENCE`<sup>Required</sup> <a name="PRIVATE_DNS_PREFERENCE" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.PRIVATE_DNS_PREFERENCE"></a>

```typescript
public readonly PRIVATE_DNS_PREFERENCE: string;
```

- *Type:* string

Condition key: vpc-lattice:PrivateDnsPreference (String).

---

##### `PRIVATE_DNS_SPECIFIED_DOMAINS`<sup>Required</sup> <a name="PRIVATE_DNS_SPECIFIED_DOMAINS" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.PRIVATE_DNS_SPECIFIED_DOMAINS"></a>

```typescript
public readonly PRIVATE_DNS_SPECIFIED_DOMAINS: string;
```

- *Type:* string

Condition key: vpc-lattice:PrivateDnsSpecifiedDomains (ArrayOfString).

---

##### `PROTOCOL`<sup>Required</sup> <a name="PROTOCOL" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.PROTOCOL"></a>

```typescript
public readonly PROTOCOL: string;
```

- *Type:* string

Condition key: vpc-lattice:Protocol (String).

---

##### `RESOURCE_CONFIGURATION_ARN`<sup>Required</sup> <a name="RESOURCE_CONFIGURATION_ARN" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.RESOURCE_CONFIGURATION_ARN"></a>

```typescript
public readonly RESOURCE_CONFIGURATION_ARN: string;
```

- *Type:* string

Condition key: vpc-lattice:ResourceConfigurationArn (ARN).

---

##### `SECURITY_GROUP_IDS`<sup>Required</sup> <a name="SECURITY_GROUP_IDS" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.SECURITY_GROUP_IDS"></a>

```typescript
public readonly SECURITY_GROUP_IDS: string;
```

- *Type:* string

Condition key: vpc-lattice:SecurityGroupIds (ArrayOfString).

---

##### `SERVICE_ARN`<sup>Required</sup> <a name="SERVICE_ARN" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.SERVICE_ARN"></a>

```typescript
public readonly SERVICE_ARN: string;
```

- *Type:* string

Condition key: vpc-lattice:ServiceArn (ARN).

---

##### `SERVICE_NETWORK_ARN`<sup>Required</sup> <a name="SERVICE_NETWORK_ARN" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.SERVICE_NETWORK_ARN"></a>

```typescript
public readonly SERVICE_NETWORK_ARN: string;
```

- *Type:* string

Condition key: vpc-lattice:ServiceNetworkArn (ARN).

---

##### `StartDomainVerificationConditionKeys`<sup>Required</sup> <a name="StartDomainVerificationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.StartDomainVerificationConditionKeys"></a>

```typescript
public readonly StartDomainVerificationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartDomainVerification action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TARGET_GROUP_ARNS`<sup>Required</sup> <a name="TARGET_GROUP_ARNS" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.TARGET_GROUP_ARNS"></a>

```typescript
public readonly TARGET_GROUP_ARNS: string;
```

- *Type:* string

Condition key: vpc-lattice:TargetGroupArns (ArrayOfARN).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateAccessLogSubscriptionConditionKeys`<sup>Required</sup> <a name="UpdateAccessLogSubscriptionConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateAccessLogSubscriptionConditionKeys"></a>

```typescript
public readonly UpdateAccessLogSubscriptionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAccessLogSubscription action.

---

##### `UpdateListenerConditionKeys`<sup>Required</sup> <a name="UpdateListenerConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateListenerConditionKeys"></a>

```typescript
public readonly UpdateListenerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateListener action.

---

##### `UpdateResourceConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateResourceConfigurationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateResourceConfigurationConditionKeys"></a>

```typescript
public readonly UpdateResourceConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResourceConfiguration action.

---

##### `UpdateResourceGatewayConditionKeys`<sup>Required</sup> <a name="UpdateResourceGatewayConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateResourceGatewayConditionKeys"></a>

```typescript
public readonly UpdateResourceGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateResourceGateway action.

---

##### `UpdateRuleConditionKeys`<sup>Required</sup> <a name="UpdateRuleConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateRuleConditionKeys"></a>

```typescript
public readonly UpdateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRule action.

---

##### `UpdateServiceConditionKeys`<sup>Required</sup> <a name="UpdateServiceConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateServiceConditionKeys"></a>

```typescript
public readonly UpdateServiceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateService action.

---

##### `UpdateServiceNetworkConditionKeys`<sup>Required</sup> <a name="UpdateServiceNetworkConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateServiceNetworkConditionKeys"></a>

```typescript
public readonly UpdateServiceNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServiceNetwork action.

---

##### `UpdateServiceNetworkVpcAssociationConditionKeys`<sup>Required</sup> <a name="UpdateServiceNetworkVpcAssociationConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateServiceNetworkVpcAssociationConditionKeys"></a>

```typescript
public readonly UpdateServiceNetworkVpcAssociationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateServiceNetworkVpcAssociation action.

---

##### `UpdateTargetGroupConditionKeys`<sup>Required</sup> <a name="UpdateTargetGroupConditionKeys" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.UpdateTargetGroupConditionKeys"></a>

```typescript
public readonly UpdateTargetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTargetGroup action.

---

##### `VPC_ENDPOINT_ID`<sup>Required</sup> <a name="VPC_ENDPOINT_ID" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.VPC_ENDPOINT_ID"></a>

```typescript
public readonly VPC_ENDPOINT_ID: string;
```

- *Type:* string

Condition key: vpc-lattice:VpcEndpointId (String).

---

##### `VPC_ID`<sup>Required</sup> <a name="VPC_ID" id="@cdk_utils/iam.vpc_lattice.VPCLatticeConditions.property.VPC_ID"></a>

```typescript
public readonly VPC_ID: string;
```

- *Type:* string

Condition key: vpc-lattice:VpcId (String).

---

### VPCLatticeOperations <a name="VPCLatticeOperations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations"></a>

API operation to required IAM actions mapping for vpc-lattice.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

new vpc_lattice.VPCLatticeOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.BatchUpdateRule">BatchUpdateRule</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateRule API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateAccessLogSubscription">CreateAccessLogSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateAccessLogSubscription API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateListener">CreateListener</a></code> | <code>string[]</code> | IAM actions required for the CreateListener API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateResourceConfiguration">CreateResourceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateResourceGateway">CreateResourceGateway</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceGateway API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateService">CreateService</a></code> | <code>string[]</code> | IAM actions required for the CreateService API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetwork">CreateServiceNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceNetwork API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetworkResourceAssociation">CreateServiceNetworkResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceNetworkResourceAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetworkServiceAssociation">CreateServiceNetworkServiceAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceNetworkServiceAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetworkVpcAssociation">CreateServiceNetworkVpcAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceNetworkVpcAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateTargetGroup">CreateTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteAccessLogSubscription">DeleteAccessLogSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteAccessLogSubscription API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteAuthPolicy">DeleteAuthPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAuthPolicy API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteDomainVerification">DeleteDomainVerification</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomainVerification API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteListener">DeleteListener</a></code> | <code>string[]</code> | IAM actions required for the DeleteListener API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourceConfiguration">DeleteResourceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourceEndpointAssociation">DeleteResourceEndpointAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceEndpointAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourceGateway">DeleteResourceGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceGateway API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteService">DeleteService</a></code> | <code>string[]</code> | IAM actions required for the DeleteService API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetwork">DeleteServiceNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceNetwork API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetworkResourceAssociation">DeleteServiceNetworkResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceNetworkResourceAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetworkServiceAssociation">DeleteServiceNetworkServiceAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceNetworkServiceAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetworkVpcAssociation">DeleteServiceNetworkVpcAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceNetworkVpcAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteTargetGroup">DeleteTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeregisterTargets">DeregisterTargets</a></code> | <code>string[]</code> | IAM actions required for the DeregisterTargets API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListAccessLogSubscriptions">ListAccessLogSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListAccessLogSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListDomainVerifications">ListDomainVerifications</a></code> | <code>string[]</code> | IAM actions required for the ListDomainVerifications API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListListeners">ListListeners</a></code> | <code>string[]</code> | IAM actions required for the ListListeners API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListResourceConfigurations">ListResourceConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListResourceConfigurations API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListResourceEndpointAssociations">ListResourceEndpointAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListResourceEndpointAssociations API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListResourceGateways">ListResourceGateways</a></code> | <code>string[]</code> | IAM actions required for the ListResourceGateways API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkResourceAssociations">ListServiceNetworkResourceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListServiceNetworkResourceAssociations API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworks">ListServiceNetworks</a></code> | <code>string[]</code> | IAM actions required for the ListServiceNetworks API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkServiceAssociations">ListServiceNetworkServiceAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListServiceNetworkServiceAssociations API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkVpcAssociations">ListServiceNetworkVpcAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListServiceNetworkVpcAssociations API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkVpcEndpointAssociations">ListServiceNetworkVpcEndpointAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListServiceNetworkVpcEndpointAssociations API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListTargetGroups">ListTargetGroups</a></code> | <code>string[]</code> | IAM actions required for the ListTargetGroups API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListTargets">ListTargets</a></code> | <code>string[]</code> | IAM actions required for the ListTargets API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetAccessLogSubscription">opGetAccessLogSubscription</a></code> | <code>string[]</code> | IAM actions required for the GetAccessLogSubscription API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetAuthPolicy">opGetAuthPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetAuthPolicy API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetDomainVerification">opGetDomainVerification</a></code> | <code>string[]</code> | IAM actions required for the GetDomainVerification API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetListener">opGetListener</a></code> | <code>string[]</code> | IAM actions required for the GetListener API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetResourceConfiguration">opGetResourceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetResourceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetResourceGateway">opGetResourceGateway</a></code> | <code>string[]</code> | IAM actions required for the GetResourceGateway API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetRule">opGetRule</a></code> | <code>string[]</code> | IAM actions required for the GetRule API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetwork">opGetServiceNetwork</a></code> | <code>string[]</code> | IAM actions required for the GetServiceNetwork API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetworkResourceAssociation">opGetServiceNetworkResourceAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetServiceNetworkResourceAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetworkServiceAssociation">opGetServiceNetworkServiceAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetServiceNetworkServiceAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetworkVpcAssociation">opGetServiceNetworkVpcAssociation</a></code> | <code>string[]</code> | IAM actions required for the GetServiceNetworkVpcAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetTargetGroup">opGetTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetTargetGroup API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.PutAuthPolicy">PutAuthPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutAuthPolicy API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.RegisterTargets">RegisterTargets</a></code> | <code>string[]</code> | IAM actions required for the RegisterTargets API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.StartDomainVerification">StartDomainVerification</a></code> | <code>string[]</code> | IAM actions required for the StartDomainVerification API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateAccessLogSubscription">UpdateAccessLogSubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccessLogSubscription API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateListener">UpdateListener</a></code> | <code>string[]</code> | IAM actions required for the UpdateListener API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateResourceConfiguration">UpdateResourceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateResourceGateway">UpdateResourceGateway</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceGateway API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateService">UpdateService</a></code> | <code>string[]</code> | IAM actions required for the UpdateService API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateServiceNetwork">UpdateServiceNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceNetwork API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateServiceNetworkVpcAssociation">UpdateServiceNetworkVpcAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceNetworkVpcAssociation API call. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateTargetGroup">UpdateTargetGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateTargetGroup API call. |

---

##### `BatchUpdateRule`<sup>Required</sup> <a name="BatchUpdateRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.BatchUpdateRule"></a>

```typescript
public readonly BatchUpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateRule API call.

---

##### `CreateAccessLogSubscription`<sup>Required</sup> <a name="CreateAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateAccessLogSubscription"></a>

```typescript
public readonly CreateAccessLogSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateAccessLogSubscription API call.

---

##### `CreateListener`<sup>Required</sup> <a name="CreateListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateListener"></a>

```typescript
public readonly CreateListener: string[];
```

- *Type:* string[]

IAM actions required for the CreateListener API call.

---

##### `CreateResourceConfiguration`<sup>Required</sup> <a name="CreateResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateResourceConfiguration"></a>

```typescript
public readonly CreateResourceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceConfiguration API call.

---

##### `CreateResourceGateway`<sup>Required</sup> <a name="CreateResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateResourceGateway"></a>

```typescript
public readonly CreateResourceGateway: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceGateway API call.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `CreateService`<sup>Required</sup> <a name="CreateService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateService"></a>

```typescript
public readonly CreateService: string[];
```

- *Type:* string[]

IAM actions required for the CreateService API call.

---

##### `CreateServiceNetwork`<sup>Required</sup> <a name="CreateServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetwork"></a>

```typescript
public readonly CreateServiceNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceNetwork API call.

---

##### `CreateServiceNetworkResourceAssociation`<sup>Required</sup> <a name="CreateServiceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetworkResourceAssociation"></a>

```typescript
public readonly CreateServiceNetworkResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceNetworkResourceAssociation API call.

---

##### `CreateServiceNetworkServiceAssociation`<sup>Required</sup> <a name="CreateServiceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetworkServiceAssociation"></a>

```typescript
public readonly CreateServiceNetworkServiceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceNetworkServiceAssociation API call.

---

##### `CreateServiceNetworkVpcAssociation`<sup>Required</sup> <a name="CreateServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateServiceNetworkVpcAssociation"></a>

```typescript
public readonly CreateServiceNetworkVpcAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceNetworkVpcAssociation API call.

---

##### `CreateTargetGroup`<sup>Required</sup> <a name="CreateTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.CreateTargetGroup"></a>

```typescript
public readonly CreateTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateTargetGroup API call.

---

##### `DeleteAccessLogSubscription`<sup>Required</sup> <a name="DeleteAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteAccessLogSubscription"></a>

```typescript
public readonly DeleteAccessLogSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAccessLogSubscription API call.

---

##### `DeleteAuthPolicy`<sup>Required</sup> <a name="DeleteAuthPolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteAuthPolicy"></a>

```typescript
public readonly DeleteAuthPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAuthPolicy API call.

---

##### `DeleteDomainVerification`<sup>Required</sup> <a name="DeleteDomainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteDomainVerification"></a>

```typescript
public readonly DeleteDomainVerification: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomainVerification API call.

---

##### `DeleteListener`<sup>Required</sup> <a name="DeleteListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteListener"></a>

```typescript
public readonly DeleteListener: string[];
```

- *Type:* string[]

IAM actions required for the DeleteListener API call.

---

##### `DeleteResourceConfiguration`<sup>Required</sup> <a name="DeleteResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourceConfiguration"></a>

```typescript
public readonly DeleteResourceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceConfiguration API call.

---

##### `DeleteResourceEndpointAssociation`<sup>Required</sup> <a name="DeleteResourceEndpointAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourceEndpointAssociation"></a>

```typescript
public readonly DeleteResourceEndpointAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceEndpointAssociation API call.

---

##### `DeleteResourceGateway`<sup>Required</sup> <a name="DeleteResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourceGateway"></a>

```typescript
public readonly DeleteResourceGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceGateway API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `DeleteService`<sup>Required</sup> <a name="DeleteService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteService"></a>

```typescript
public readonly DeleteService: string[];
```

- *Type:* string[]

IAM actions required for the DeleteService API call.

---

##### `DeleteServiceNetwork`<sup>Required</sup> <a name="DeleteServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetwork"></a>

```typescript
public readonly DeleteServiceNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceNetwork API call.

---

##### `DeleteServiceNetworkResourceAssociation`<sup>Required</sup> <a name="DeleteServiceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetworkResourceAssociation"></a>

```typescript
public readonly DeleteServiceNetworkResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceNetworkResourceAssociation API call.

---

##### `DeleteServiceNetworkServiceAssociation`<sup>Required</sup> <a name="DeleteServiceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetworkServiceAssociation"></a>

```typescript
public readonly DeleteServiceNetworkServiceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceNetworkServiceAssociation API call.

---

##### `DeleteServiceNetworkVpcAssociation`<sup>Required</sup> <a name="DeleteServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteServiceNetworkVpcAssociation"></a>

```typescript
public readonly DeleteServiceNetworkVpcAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceNetworkVpcAssociation API call.

---

##### `DeleteTargetGroup`<sup>Required</sup> <a name="DeleteTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeleteTargetGroup"></a>

```typescript
public readonly DeleteTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTargetGroup API call.

---

##### `DeregisterTargets`<sup>Required</sup> <a name="DeregisterTargets" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.DeregisterTargets"></a>

```typescript
public readonly DeregisterTargets: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterTargets API call.

---

##### `ListAccessLogSubscriptions`<sup>Required</sup> <a name="ListAccessLogSubscriptions" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListAccessLogSubscriptions"></a>

```typescript
public readonly ListAccessLogSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListAccessLogSubscriptions API call.

---

##### `ListDomainVerifications`<sup>Required</sup> <a name="ListDomainVerifications" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListDomainVerifications"></a>

```typescript
public readonly ListDomainVerifications: string[];
```

- *Type:* string[]

IAM actions required for the ListDomainVerifications API call.

---

##### `ListListeners`<sup>Required</sup> <a name="ListListeners" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListListeners"></a>

```typescript
public readonly ListListeners: string[];
```

- *Type:* string[]

IAM actions required for the ListListeners API call.

---

##### `ListResourceConfigurations`<sup>Required</sup> <a name="ListResourceConfigurations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListResourceConfigurations"></a>

```typescript
public readonly ListResourceConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceConfigurations API call.

---

##### `ListResourceEndpointAssociations`<sup>Required</sup> <a name="ListResourceEndpointAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListResourceEndpointAssociations"></a>

```typescript
public readonly ListResourceEndpointAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceEndpointAssociations API call.

---

##### `ListResourceGateways`<sup>Required</sup> <a name="ListResourceGateways" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListResourceGateways"></a>

```typescript
public readonly ListResourceGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceGateways API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListServiceNetworkResourceAssociations`<sup>Required</sup> <a name="ListServiceNetworkResourceAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkResourceAssociations"></a>

```typescript
public readonly ListServiceNetworkResourceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceNetworkResourceAssociations API call.

---

##### `ListServiceNetworks`<sup>Required</sup> <a name="ListServiceNetworks" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworks"></a>

```typescript
public readonly ListServiceNetworks: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceNetworks API call.

---

##### `ListServiceNetworkServiceAssociations`<sup>Required</sup> <a name="ListServiceNetworkServiceAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkServiceAssociations"></a>

```typescript
public readonly ListServiceNetworkServiceAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceNetworkServiceAssociations API call.

---

##### `ListServiceNetworkVpcAssociations`<sup>Required</sup> <a name="ListServiceNetworkVpcAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkVpcAssociations"></a>

```typescript
public readonly ListServiceNetworkVpcAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceNetworkVpcAssociations API call.

---

##### `ListServiceNetworkVpcEndpointAssociations`<sup>Required</sup> <a name="ListServiceNetworkVpcEndpointAssociations" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServiceNetworkVpcEndpointAssociations"></a>

```typescript
public readonly ListServiceNetworkVpcEndpointAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceNetworkVpcEndpointAssociations API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargetGroups`<sup>Required</sup> <a name="ListTargetGroups" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListTargetGroups"></a>

```typescript
public readonly ListTargetGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListTargetGroups API call.

---

##### `ListTargets`<sup>Required</sup> <a name="ListTargets" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.ListTargets"></a>

```typescript
public readonly ListTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListTargets API call.

---

##### `opGetAccessLogSubscription`<sup>Required</sup> <a name="opGetAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetAccessLogSubscription"></a>

```typescript
public readonly opGetAccessLogSubscription: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessLogSubscription API call.

---

##### `opGetAuthPolicy`<sup>Required</sup> <a name="opGetAuthPolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetAuthPolicy"></a>

```typescript
public readonly opGetAuthPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetAuthPolicy API call.

---

##### `opGetDomainVerification`<sup>Required</sup> <a name="opGetDomainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetDomainVerification"></a>

```typescript
public readonly opGetDomainVerification: string[];
```

- *Type:* string[]

IAM actions required for the GetDomainVerification API call.

---

##### `opGetListener`<sup>Required</sup> <a name="opGetListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetListener"></a>

```typescript
public readonly opGetListener: string[];
```

- *Type:* string[]

IAM actions required for the GetListener API call.

---

##### `opGetResourceConfiguration`<sup>Required</sup> <a name="opGetResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetResourceConfiguration"></a>

```typescript
public readonly opGetResourceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceConfiguration API call.

---

##### `opGetResourceGateway`<sup>Required</sup> <a name="opGetResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetResourceGateway"></a>

```typescript
public readonly opGetResourceGateway: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceGateway API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetRule`<sup>Required</sup> <a name="opGetRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetRule"></a>

```typescript
public readonly opGetRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRule API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `opGetServiceNetwork`<sup>Required</sup> <a name="opGetServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetwork"></a>

```typescript
public readonly opGetServiceNetwork: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceNetwork API call.

---

##### `opGetServiceNetworkResourceAssociation`<sup>Required</sup> <a name="opGetServiceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetworkResourceAssociation"></a>

```typescript
public readonly opGetServiceNetworkResourceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceNetworkResourceAssociation API call.

---

##### `opGetServiceNetworkServiceAssociation`<sup>Required</sup> <a name="opGetServiceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetworkServiceAssociation"></a>

```typescript
public readonly opGetServiceNetworkServiceAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceNetworkServiceAssociation API call.

---

##### `opGetServiceNetworkVpcAssociation`<sup>Required</sup> <a name="opGetServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetServiceNetworkVpcAssociation"></a>

```typescript
public readonly opGetServiceNetworkVpcAssociation: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceNetworkVpcAssociation API call.

---

##### `opGetTargetGroup`<sup>Required</sup> <a name="opGetTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.opGetTargetGroup"></a>

```typescript
public readonly opGetTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetTargetGroup API call.

---

##### `PutAuthPolicy`<sup>Required</sup> <a name="PutAuthPolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.PutAuthPolicy"></a>

```typescript
public readonly PutAuthPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutAuthPolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterTargets`<sup>Required</sup> <a name="RegisterTargets" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.RegisterTargets"></a>

```typescript
public readonly RegisterTargets: string[];
```

- *Type:* string[]

IAM actions required for the RegisterTargets API call.

---

##### `StartDomainVerification`<sup>Required</sup> <a name="StartDomainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.StartDomainVerification"></a>

```typescript
public readonly StartDomainVerification: string[];
```

- *Type:* string[]

IAM actions required for the StartDomainVerification API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccessLogSubscription`<sup>Required</sup> <a name="UpdateAccessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateAccessLogSubscription"></a>

```typescript
public readonly UpdateAccessLogSubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccessLogSubscription API call.

---

##### `UpdateListener`<sup>Required</sup> <a name="UpdateListener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateListener"></a>

```typescript
public readonly UpdateListener: string[];
```

- *Type:* string[]

IAM actions required for the UpdateListener API call.

---

##### `UpdateResourceConfiguration`<sup>Required</sup> <a name="UpdateResourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateResourceConfiguration"></a>

```typescript
public readonly UpdateResourceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceConfiguration API call.

---

##### `UpdateResourceGateway`<sup>Required</sup> <a name="UpdateResourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateResourceGateway"></a>

```typescript
public readonly UpdateResourceGateway: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceGateway API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

##### `UpdateService`<sup>Required</sup> <a name="UpdateService" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateService"></a>

```typescript
public readonly UpdateService: string[];
```

- *Type:* string[]

IAM actions required for the UpdateService API call.

---

##### `UpdateServiceNetwork`<sup>Required</sup> <a name="UpdateServiceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateServiceNetwork"></a>

```typescript
public readonly UpdateServiceNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceNetwork API call.

---

##### `UpdateServiceNetworkVpcAssociation`<sup>Required</sup> <a name="UpdateServiceNetworkVpcAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateServiceNetworkVpcAssociation"></a>

```typescript
public readonly UpdateServiceNetworkVpcAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceNetworkVpcAssociation API call.

---

##### `UpdateTargetGroup`<sup>Required</sup> <a name="UpdateTargetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeOperations.property.UpdateTargetGroup"></a>

```typescript
public readonly UpdateTargetGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTargetGroup API call.

---

### VPCLatticeResources <a name="VPCLatticeResources" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources"></a>

ARN builders, validators, and parsers for vpc-lattice resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.Initializer"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

new vpc_lattice.VPCLatticeResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.accessLogSubscription">accessLogSubscription</a></code> | Builds an ARN for the AccessLogSubscription resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.domainVerification">domainVerification</a></code> | Builds an ARN for the DomainVerification resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidAccessLogSubscriptionArn">isValidAccessLogSubscriptionArn</a></code> | Validates whether a string is a valid ARN for the AccessLogSubscription resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidDomainVerificationArn">isValidDomainVerificationArn</a></code> | Validates whether a string is a valid ARN for the DomainVerification resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidListenerArn">isValidListenerArn</a></code> | Validates whether a string is a valid ARN for the Listener resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceConfigurationArn">isValidResourceConfigurationArn</a></code> | Validates whether a string is a valid ARN for the ResourceConfiguration resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceEndpointAssociationArn">isValidResourceEndpointAssociationArn</a></code> | Validates whether a string is a valid ARN for the ResourceEndpointAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceGatewayArn">isValidResourceGatewayArn</a></code> | Validates whether a string is a valid ARN for the ResourceGateway resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the Rule resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the Service resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkArn">isValidServiceNetworkArn</a></code> | Validates whether a string is a valid ARN for the ServiceNetwork resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkResourceAssociationArn">isValidServiceNetworkResourceAssociationArn</a></code> | Validates whether a string is a valid ARN for the ServiceNetworkResourceAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkServiceAssociationArn">isValidServiceNetworkServiceAssociationArn</a></code> | Validates whether a string is a valid ARN for the ServiceNetworkServiceAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkVPCAssociationArn">isValidServiceNetworkVPCAssociationArn</a></code> | Validates whether a string is a valid ARN for the ServiceNetworkVpcAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidTargetGroupArn">isValidTargetGroupArn</a></code> | Validates whether a string is a valid ARN for the TargetGroup resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.listener">listener</a></code> | Builds an ARN for the Listener resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseAccessLogSubscriptionArn">parseAccessLogSubscriptionArn</a></code> | Parses a AccessLogSubscription ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseDomainVerificationArn">parseDomainVerificationArn</a></code> | Parses a DomainVerification ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseListenerArn">parseListenerArn</a></code> | Parses a Listener ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceConfigurationArn">parseResourceConfigurationArn</a></code> | Parses a ResourceConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceEndpointAssociationArn">parseResourceEndpointAssociationArn</a></code> | Parses a ResourceEndpointAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceGatewayArn">parseResourceGatewayArn</a></code> | Parses a ResourceGateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseRuleArn">parseRuleArn</a></code> | Parses a Rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceArn">parseServiceArn</a></code> | Parses a Service ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkArn">parseServiceNetworkArn</a></code> | Parses a ServiceNetwork ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkResourceAssociationArn">parseServiceNetworkResourceAssociationArn</a></code> | Parses a ServiceNetworkResourceAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkServiceAssociationArn">parseServiceNetworkServiceAssociationArn</a></code> | Parses a ServiceNetworkServiceAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkVPCAssociationArn">parseServiceNetworkVPCAssociationArn</a></code> | Parses a ServiceNetworkVpcAssociation ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseTargetGroupArn">parseTargetGroupArn</a></code> | Parses a TargetGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceConfiguration">resourceConfiguration</a></code> | Builds an ARN for the ResourceConfiguration resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceEndpointAssociation">resourceEndpointAssociation</a></code> | Builds an ARN for the ResourceEndpointAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceGateway">resourceGateway</a></code> | Builds an ARN for the ResourceGateway resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.rule">rule</a></code> | Builds an ARN for the Rule resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.service">service</a></code> | Builds an ARN for the Service resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetwork">serviceNetwork</a></code> | Builds an ARN for the ServiceNetwork resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkResourceAssociation">serviceNetworkResourceAssociation</a></code> | Builds an ARN for the ServiceNetworkResourceAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkServiceAssociation">serviceNetworkServiceAssociation</a></code> | Builds an ARN for the ServiceNetworkServiceAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkVPCAssociation">serviceNetworkVPCAssociation</a></code> | Builds an ARN for the ServiceNetworkVpcAssociation resource. |
| <code><a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResources.targetGroup">targetGroup</a></code> | Builds an ARN for the TargetGroup resource. |

---

##### `accessLogSubscription` <a name="accessLogSubscription" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.accessLogSubscription"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.accessLogSubscription(props: VPCLatticeAccessLogSubscriptionArnProps)
```

Builds an ARN for the AccessLogSubscription resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.accessLogSubscription.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeAccessLogSubscriptionArnProps">VPCLatticeAccessLogSubscriptionArnProps</a>

---

##### `domainVerification` <a name="domainVerification" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.domainVerification"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.domainVerification(props: VPCLatticeDomainVerificationArnProps)
```

Builds an ARN for the DomainVerification resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.domainVerification.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeDomainVerificationArnProps">VPCLatticeDomainVerificationArnProps</a>

---

##### `isValidAccessLogSubscriptionArn` <a name="isValidAccessLogSubscriptionArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidAccessLogSubscriptionArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidAccessLogSubscriptionArn(arn: string)
```

Validates whether a string is a valid ARN for the AccessLogSubscription resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidAccessLogSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDomainVerificationArn` <a name="isValidDomainVerificationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidDomainVerificationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidDomainVerificationArn(arn: string)
```

Validates whether a string is a valid ARN for the DomainVerification resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidDomainVerificationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidListenerArn` <a name="isValidListenerArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidListenerArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidListenerArn(arn: string)
```

Validates whether a string is a valid ARN for the Listener resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidListenerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceConfigurationArn` <a name="isValidResourceConfigurationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceConfigurationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidResourceConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the ResourceConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceEndpointAssociationArn` <a name="isValidResourceEndpointAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceEndpointAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidResourceEndpointAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the ResourceEndpointAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceEndpointAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidResourceGatewayArn` <a name="isValidResourceGatewayArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceGatewayArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidResourceGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the ResourceGateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidResourceGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidRuleArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the Rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the Service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceNetworkArn` <a name="isValidServiceNetworkArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidServiceNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the ServiceNetwork resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceNetworkResourceAssociationArn` <a name="isValidServiceNetworkResourceAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkResourceAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidServiceNetworkResourceAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the ServiceNetworkResourceAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkResourceAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceNetworkServiceAssociationArn` <a name="isValidServiceNetworkServiceAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkServiceAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidServiceNetworkServiceAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the ServiceNetworkServiceAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkServiceAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceNetworkVPCAssociationArn` <a name="isValidServiceNetworkVPCAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkVPCAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidServiceNetworkVPCAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the ServiceNetworkVpcAssociation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidServiceNetworkVPCAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTargetGroupArn` <a name="isValidTargetGroupArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidTargetGroupArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.isValidTargetGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the TargetGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.isValidTargetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `listener` <a name="listener" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.listener"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.listener(props: VPCLatticeListenerArnProps)
```

Builds an ARN for the Listener resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.listener.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeListenerArnProps">VPCLatticeListenerArnProps</a>

---

##### `parseAccessLogSubscriptionArn` <a name="parseAccessLogSubscriptionArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseAccessLogSubscriptionArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseAccessLogSubscriptionArn(arn: string)
```

Parses a AccessLogSubscription ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseAccessLogSubscriptionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainVerificationArn` <a name="parseDomainVerificationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseDomainVerificationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseDomainVerificationArn(arn: string)
```

Parses a DomainVerification ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseDomainVerificationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseListenerArn` <a name="parseListenerArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseListenerArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseListenerArn(arn: string)
```

Parses a Listener ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseListenerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceConfigurationArn` <a name="parseResourceConfigurationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceConfigurationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseResourceConfigurationArn(arn: string)
```

Parses a ResourceConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceEndpointAssociationArn` <a name="parseResourceEndpointAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceEndpointAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseResourceEndpointAssociationArn(arn: string)
```

Parses a ResourceEndpointAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceEndpointAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseResourceGatewayArn` <a name="parseResourceGatewayArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceGatewayArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseResourceGatewayArn(arn: string)
```

Parses a ResourceGateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseResourceGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseRuleArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseRuleArn(arn: string)
```

Parses a Rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseServiceArn(arn: string)
```

Parses a Service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceNetworkArn` <a name="parseServiceNetworkArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseServiceNetworkArn(arn: string)
```

Parses a ServiceNetwork ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceNetworkResourceAssociationArn` <a name="parseServiceNetworkResourceAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkResourceAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseServiceNetworkResourceAssociationArn(arn: string)
```

Parses a ServiceNetworkResourceAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkResourceAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceNetworkServiceAssociationArn` <a name="parseServiceNetworkServiceAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkServiceAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseServiceNetworkServiceAssociationArn(arn: string)
```

Parses a ServiceNetworkServiceAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkServiceAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceNetworkVPCAssociationArn` <a name="parseServiceNetworkVPCAssociationArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkVPCAssociationArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseServiceNetworkVPCAssociationArn(arn: string)
```

Parses a ServiceNetworkVpcAssociation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseServiceNetworkVPCAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTargetGroupArn` <a name="parseTargetGroupArn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseTargetGroupArn"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.parseTargetGroupArn(arn: string)
```

Parses a TargetGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.parseTargetGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `resourceConfiguration` <a name="resourceConfiguration" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceConfiguration"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.resourceConfiguration(props: VPCLatticeResourceConfigurationArnProps)
```

Builds an ARN for the ResourceConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceConfigurationArnProps">VPCLatticeResourceConfigurationArnProps</a>

---

##### `resourceEndpointAssociation` <a name="resourceEndpointAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceEndpointAssociation"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.resourceEndpointAssociation(props: VPCLatticeResourceEndpointAssociationArnProps)
```

Builds an ARN for the ResourceEndpointAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceEndpointAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceEndpointAssociationArnProps">VPCLatticeResourceEndpointAssociationArnProps</a>

---

##### `resourceGateway` <a name="resourceGateway" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceGateway"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.resourceGateway(props: VPCLatticeResourceGatewayArnProps)
```

Builds an ARN for the ResourceGateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.resourceGateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeResourceGatewayArnProps">VPCLatticeResourceGatewayArnProps</a>

---

##### `rule` <a name="rule" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.rule"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.rule(props: VPCLatticeRuleArnProps)
```

Builds an ARN for the Rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeRuleArnProps">VPCLatticeRuleArnProps</a>

---

##### `service` <a name="service" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.service"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.service(props: VPCLatticeServiceArnProps)
```

Builds an ARN for the Service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceArnProps">VPCLatticeServiceArnProps</a>

---

##### `serviceNetwork` <a name="serviceNetwork" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetwork"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.serviceNetwork(props: VPCLatticeServiceNetworkArnProps)
```

Builds an ARN for the ServiceNetwork resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetwork.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkArnProps">VPCLatticeServiceNetworkArnProps</a>

---

##### `serviceNetworkResourceAssociation` <a name="serviceNetworkResourceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkResourceAssociation"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.serviceNetworkResourceAssociation(props: VPCLatticeServiceNetworkResourceAssociationArnProps)
```

Builds an ARN for the ServiceNetworkResourceAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkResourceAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkResourceAssociationArnProps">VPCLatticeServiceNetworkResourceAssociationArnProps</a>

---

##### `serviceNetworkServiceAssociation` <a name="serviceNetworkServiceAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkServiceAssociation"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.serviceNetworkServiceAssociation(props: VPCLatticeServiceNetworkServiceAssociationArnProps)
```

Builds an ARN for the ServiceNetworkServiceAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkServiceAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkServiceAssociationArnProps">VPCLatticeServiceNetworkServiceAssociationArnProps</a>

---

##### `serviceNetworkVPCAssociation` <a name="serviceNetworkVPCAssociation" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkVPCAssociation"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.serviceNetworkVPCAssociation(props: VPCLatticeServiceNetworkVPCAssociationArnProps)
```

Builds an ARN for the ServiceNetworkVpcAssociation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.serviceNetworkVPCAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeServiceNetworkVPCAssociationArnProps">VPCLatticeServiceNetworkVPCAssociationArnProps</a>

---

##### `targetGroup` <a name="targetGroup" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.targetGroup"></a>

```typescript
import { vpc_lattice } from '@cdk_utils/iam'

vpc_lattice.VPCLatticeResources.targetGroup(props: VPCLatticeTargetGroupArnProps)
```

Builds an ARN for the TargetGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.vpc_lattice.VPCLatticeResources.targetGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.vpc_lattice.VPCLatticeTargetGroupArnProps">VPCLatticeTargetGroupArnProps</a>

---




