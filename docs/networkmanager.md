# `networkmanager` Submodule <a name="`networkmanager` Submodule" id="@cdk_utils/iam.networkmanager"></a>


## Structs <a name="Structs" id="Structs"></a>

### NetworkManagerAttachmentArnComponents <a name="NetworkManagerAttachmentArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents"></a>

Parsed components of a attachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerAttachmentArnComponents: networkmanager.NetworkManagerAttachmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerAttachmentArnProps <a name="NetworkManagerAttachmentArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps"></a>

Properties for building a attachment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerAttachmentArnProps: networkmanager.NetworkManagerAttachmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerConnectionArnComponents <a name="NetworkManagerConnectionArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents"></a>

Parsed components of a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerConnectionArnComponents: networkmanager.NetworkManagerConnectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerConnectionArnProps <a name="NetworkManagerConnectionArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps"></a>

Properties for building a connection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerConnectionArnProps: networkmanager.NetworkManagerConnectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerConnectPeerArnComponents <a name="NetworkManagerConnectPeerArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents"></a>

Parsed components of a connect-peer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerConnectPeerArnComponents: networkmanager.NetworkManagerConnectPeerArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerConnectPeerArnProps <a name="NetworkManagerConnectPeerArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps"></a>

Properties for building a connect-peer ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerConnectPeerArnProps: networkmanager.NetworkManagerConnectPeerArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerCoreNetworkArnComponents <a name="NetworkManagerCoreNetworkArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents"></a>

Parsed components of a core-network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerCoreNetworkArnComponents: networkmanager.NetworkManagerCoreNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerCoreNetworkArnProps <a name="NetworkManagerCoreNetworkArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps"></a>

Properties for building a core-network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerCoreNetworkArnProps: networkmanager.NetworkManagerCoreNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerDeviceArnComponents <a name="NetworkManagerDeviceArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents"></a>

Parsed components of a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerDeviceArnComponents: networkmanager.NetworkManagerDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerDeviceArnProps <a name="NetworkManagerDeviceArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps"></a>

Properties for building a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerDeviceArnProps: networkmanager.NetworkManagerDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerGlobalNetworkArnComponents <a name="NetworkManagerGlobalNetworkArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents"></a>

Parsed components of a global-network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerGlobalNetworkArnComponents: networkmanager.NetworkManagerGlobalNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerGlobalNetworkArnProps <a name="NetworkManagerGlobalNetworkArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps"></a>

Properties for building a global-network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerGlobalNetworkArnProps: networkmanager.NetworkManagerGlobalNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerLinkArnComponents <a name="NetworkManagerLinkArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents"></a>

Parsed components of a link ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerLinkArnComponents: networkmanager.NetworkManagerLinkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerLinkArnProps <a name="NetworkManagerLinkArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps"></a>

Properties for building a link ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerLinkArnProps: networkmanager.NetworkManagerLinkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerPeeringArnComponents <a name="NetworkManagerPeeringArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents"></a>

Parsed components of a peering ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerPeeringArnComponents: networkmanager.NetworkManagerPeeringArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerPeeringArnProps <a name="NetworkManagerPeeringArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps"></a>

Properties for building a peering ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerPeeringArnProps: networkmanager.NetworkManagerPeeringArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### NetworkManagerSiteArnComponents <a name="NetworkManagerSiteArnComponents" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents"></a>

Parsed components of a site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerSiteArnComponents: networkmanager.NetworkManagerSiteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### NetworkManagerSiteArnProps <a name="NetworkManagerSiteArnProps" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps"></a>

Properties for building a site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

const networkManagerSiteArnProps: networkmanager.NetworkManagerSiteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.globalNetworkId">globalNetworkId</a></code> | <code>string</code> | The GlobalNetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `globalNetworkId`<sup>Required</sup> <a name="globalNetworkId" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.globalNetworkId"></a>

```typescript
public readonly globalNetworkId: string;
```

- *Type:* string

The GlobalNetworkId component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkManagerActions <a name="NetworkManagerActions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions"></a>

IAM action constants for the networkmanager service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

new networkmanager.NetworkManagerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AcceptAttachment">AcceptAttachment</a></code> | <code>string</code> | [Write] networkmanager:AcceptAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnectAttachment">actionGetConnectAttachment</a></code> | <code>string</code> | [Read] networkmanager:GetConnectAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnections">actionGetConnections</a></code> | <code>string</code> | [List] networkmanager:GetConnections. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnectPeer">actionGetConnectPeer</a></code> | <code>string</code> | [Read] networkmanager:GetConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnectPeerAssociations">actionGetConnectPeerAssociations</a></code> | <code>string</code> | [Read] networkmanager:GetConnectPeerAssociations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetwork">actionGetCoreNetwork</a></code> | <code>string</code> | [Read] networkmanager:GetCoreNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetworkChangeEvents">actionGetCoreNetworkChangeEvents</a></code> | <code>string</code> | [Read] networkmanager:GetCoreNetworkChangeEvents. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetworkChangeSet">actionGetCoreNetworkChangeSet</a></code> | <code>string</code> | [Read] networkmanager:GetCoreNetworkChangeSet. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetworkPolicy">actionGetCoreNetworkPolicy</a></code> | <code>string</code> | [Read] networkmanager:GetCoreNetworkPolicy. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCustomerGatewayAssociations">actionGetCustomerGatewayAssociations</a></code> | <code>string</code> | [List] networkmanager:GetCustomerGatewayAssociations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetDevices">actionGetDevices</a></code> | <code>string</code> | [List] networkmanager:GetDevices. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetDirectConnectGatewayAttachment">actionGetDirectConnectGatewayAttachment</a></code> | <code>string</code> | [Read] networkmanager:GetDirectConnectGatewayAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetLinkAssociations">actionGetLinkAssociations</a></code> | <code>string</code> | [List] networkmanager:GetLinkAssociations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetLinks">actionGetLinks</a></code> | <code>string</code> | [List] networkmanager:GetLinks. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkResourceCounts">actionGetNetworkResourceCounts</a></code> | <code>string</code> | [Read] networkmanager:GetNetworkResourceCounts. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkResourceRelationships">actionGetNetworkResourceRelationships</a></code> | <code>string</code> | [Read] networkmanager:GetNetworkResourceRelationships. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkResources">actionGetNetworkResources</a></code> | <code>string</code> | [Read] networkmanager:GetNetworkResources. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkRoutes">actionGetNetworkRoutes</a></code> | <code>string</code> | [Read] networkmanager:GetNetworkRoutes. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkTelemetry">actionGetNetworkTelemetry</a></code> | <code>string</code> | [Read] networkmanager:GetNetworkTelemetry. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] networkmanager:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetRouteAnalysis">actionGetRouteAnalysis</a></code> | <code>string</code> | [Read] networkmanager:GetRouteAnalysis. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetSites">actionGetSites</a></code> | <code>string</code> | [List] networkmanager:GetSites. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetSiteToSiteVpnAttachment">actionGetSiteToSiteVpnAttachment</a></code> | <code>string</code> | [Read] networkmanager:GetSiteToSiteVpnAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayConnectPeerAssociations">actionGetTransitGatewayConnectPeerAssociations</a></code> | <code>string</code> | [List] networkmanager:GetTransitGatewayConnectPeerAssociations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayPeering">actionGetTransitGatewayPeering</a></code> | <code>string</code> | [Read] networkmanager:GetTransitGatewayPeering. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayRegistrations">actionGetTransitGatewayRegistrations</a></code> | <code>string</code> | [List] networkmanager:GetTransitGatewayRegistrations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayRouteTableAttachment">actionGetTransitGatewayRouteTableAttachment</a></code> | <code>string</code> | [Read] networkmanager:GetTransitGatewayRouteTableAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetVpcAttachment">actionGetVpcAttachment</a></code> | <code>string</code> | [Read] networkmanager:GetVpcAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateConnectPeer">AssociateConnectPeer</a></code> | <code>string</code> | [Write] networkmanager:AssociateConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateCustomerGateway">AssociateCustomerGateway</a></code> | <code>string</code> | [Write] networkmanager:AssociateCustomerGateway. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateLink">AssociateLink</a></code> | <code>string</code> | [Write] networkmanager:AssociateLink. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateTransitGatewayConnectPeer">AssociateTransitGatewayConnectPeer</a></code> | <code>string</code> | [Write] networkmanager:AssociateTransitGatewayConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateConnectAttachment">CreateConnectAttachment</a></code> | <code>string</code> | [Write] networkmanager:CreateConnectAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateConnection">CreateConnection</a></code> | <code>string</code> | [Write] networkmanager:CreateConnection. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateConnectPeer">CreateConnectPeer</a></code> | <code>string</code> | [Write] networkmanager:CreateConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateCoreNetwork">CreateCoreNetwork</a></code> | <code>string</code> | [Write] networkmanager:CreateCoreNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateCoreNetworkPrefixListAssociation">CreateCoreNetworkPrefixListAssociation</a></code> | <code>string</code> | [Write] networkmanager:CreateCoreNetworkPrefixListAssociation. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateDevice">CreateDevice</a></code> | <code>string</code> | [Write] networkmanager:CreateDevice. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateDirectConnectGatewayAttachment">CreateDirectConnectGatewayAttachment</a></code> | <code>string</code> | [Write] networkmanager:CreateDirectConnectGatewayAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateGlobalNetwork">CreateGlobalNetwork</a></code> | <code>string</code> | [Write] networkmanager:CreateGlobalNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateLink">CreateLink</a></code> | <code>string</code> | [Write] networkmanager:CreateLink. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateSite">CreateSite</a></code> | <code>string</code> | [Write] networkmanager:CreateSite. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateSiteToSiteVpnAttachment">CreateSiteToSiteVpnAttachment</a></code> | <code>string</code> | [Write] networkmanager:CreateSiteToSiteVpnAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateTransitGatewayPeering">CreateTransitGatewayPeering</a></code> | <code>string</code> | [Write] networkmanager:CreateTransitGatewayPeering. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateTransitGatewayRouteTableAttachment">CreateTransitGatewayRouteTableAttachment</a></code> | <code>string</code> | [Write] networkmanager:CreateTransitGatewayRouteTableAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateVpcAttachment">CreateVpcAttachment</a></code> | <code>string</code> | [Write] networkmanager:CreateVpcAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteAttachment">DeleteAttachment</a></code> | <code>string</code> | [Write] networkmanager:DeleteAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteConnection">DeleteConnection</a></code> | <code>string</code> | [Write] networkmanager:DeleteConnection. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteConnectPeer">DeleteConnectPeer</a></code> | <code>string</code> | [Write] networkmanager:DeleteConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteCoreNetwork">DeleteCoreNetwork</a></code> | <code>string</code> | [Write] networkmanager:DeleteCoreNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteCoreNetworkPolicyVersion">DeleteCoreNetworkPolicyVersion</a></code> | <code>string</code> | [Write] networkmanager:DeleteCoreNetworkPolicyVersion. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteCoreNetworkPrefixListAssociation">DeleteCoreNetworkPrefixListAssociation</a></code> | <code>string</code> | [Write] networkmanager:DeleteCoreNetworkPrefixListAssociation. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteDevice">DeleteDevice</a></code> | <code>string</code> | [Write] networkmanager:DeleteDevice. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteGlobalNetwork">DeleteGlobalNetwork</a></code> | <code>string</code> | [Write] networkmanager:DeleteGlobalNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteLink">DeleteLink</a></code> | <code>string</code> | [Write] networkmanager:DeleteLink. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeletePeering">DeletePeering</a></code> | <code>string</code> | [Write] networkmanager:DeletePeering. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] networkmanager:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteSite">DeleteSite</a></code> | <code>string</code> | [Write] networkmanager:DeleteSite. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeregisterTransitGateway">DeregisterTransitGateway</a></code> | <code>string</code> | [Write] networkmanager:DeregisterTransitGateway. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DescribeGlobalNetworks">DescribeGlobalNetworks</a></code> | <code>string</code> | [List] networkmanager:DescribeGlobalNetworks. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateConnectPeer">DisassociateConnectPeer</a></code> | <code>string</code> | [Write] networkmanager:DisassociateConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateCustomerGateway">DisassociateCustomerGateway</a></code> | <code>string</code> | [Write] networkmanager:DisassociateCustomerGateway. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateLink">DisassociateLink</a></code> | <code>string</code> | [Write] networkmanager:DisassociateLink. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateTransitGatewayConnectPeer">DisassociateTransitGatewayConnectPeer</a></code> | <code>string</code> | [Write] networkmanager:DisassociateTransitGatewayConnectPeer. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ExecuteCoreNetworkChangeSet">ExecuteCoreNetworkChangeSet</a></code> | <code>string</code> | [Write] networkmanager:ExecuteCoreNetworkChangeSet. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListAttachmentRoutingPolicyAssociations">ListAttachmentRoutingPolicyAssociations</a></code> | <code>string</code> | [List] networkmanager:ListAttachmentRoutingPolicyAssociations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListAttachments">ListAttachments</a></code> | <code>string</code> | [List] networkmanager:ListAttachments. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListConnectPeers">ListConnectPeers</a></code> | <code>string</code> | [List] networkmanager:ListConnectPeers. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworkPolicyVersions">ListCoreNetworkPolicyVersions</a></code> | <code>string</code> | [List] networkmanager:ListCoreNetworkPolicyVersions. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworkPrefixListAssociations">ListCoreNetworkPrefixListAssociations</a></code> | <code>string</code> | [List] networkmanager:ListCoreNetworkPrefixListAssociations. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworkRoutingInformation">ListCoreNetworkRoutingInformation</a></code> | <code>string</code> | [List] networkmanager:ListCoreNetworkRoutingInformation. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworks">ListCoreNetworks</a></code> | <code>string</code> | [List] networkmanager:ListCoreNetworks. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListOrganizationServiceAccessStatus">ListOrganizationServiceAccessStatus</a></code> | <code>string</code> | [List] networkmanager:ListOrganizationServiceAccessStatus. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListPeerings">ListPeerings</a></code> | <code>string</code> | [List] networkmanager:ListPeerings. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] networkmanager:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.PutAttachmentRoutingPolicyLabel">PutAttachmentRoutingPolicyLabel</a></code> | <code>string</code> | [Write] networkmanager:PutAttachmentRoutingPolicyLabel. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.PutCoreNetworkPolicy">PutCoreNetworkPolicy</a></code> | <code>string</code> | [Write] networkmanager:PutCoreNetworkPolicy. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] networkmanager:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RegisterTransitGateway">RegisterTransitGateway</a></code> | <code>string</code> | [Write] networkmanager:RegisterTransitGateway. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RejectAttachment">RejectAttachment</a></code> | <code>string</code> | [Write] networkmanager:RejectAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RemoveAttachmentRoutingPolicyLabel">RemoveAttachmentRoutingPolicyLabel</a></code> | <code>string</code> | [Write] networkmanager:RemoveAttachmentRoutingPolicyLabel. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RestoreCoreNetworkPolicyVersion">RestoreCoreNetworkPolicyVersion</a></code> | <code>string</code> | [Write] networkmanager:RestoreCoreNetworkPolicyVersion. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.StartOrganizationServiceAccessUpdate">StartOrganizationServiceAccessUpdate</a></code> | <code>string</code> | [PermissionManagement] networkmanager:StartOrganizationServiceAccessUpdate. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.StartRouteAnalysis">StartRouteAnalysis</a></code> | <code>string</code> | [Write] networkmanager:StartRouteAnalysis. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] networkmanager:TagResource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] networkmanager:UntagResource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateConnection">UpdateConnection</a></code> | <code>string</code> | [Write] networkmanager:UpdateConnection. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateCoreNetwork">UpdateCoreNetwork</a></code> | <code>string</code> | [Write] networkmanager:UpdateCoreNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateDevice">UpdateDevice</a></code> | <code>string</code> | [Write] networkmanager:UpdateDevice. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateDirectConnectGatewayAttachment">UpdateDirectConnectGatewayAttachment</a></code> | <code>string</code> | [Write] networkmanager:UpdateDirectConnectGatewayAttachment. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateGlobalNetwork">UpdateGlobalNetwork</a></code> | <code>string</code> | [Write] networkmanager:UpdateGlobalNetwork. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateLink">UpdateLink</a></code> | <code>string</code> | [Write] networkmanager:UpdateLink. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateNetworkResourceMetadata">UpdateNetworkResourceMetadata</a></code> | <code>string</code> | [Write] networkmanager:UpdateNetworkResourceMetadata. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateSite">UpdateSite</a></code> | <code>string</code> | [Write] networkmanager:UpdateSite. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateVpcAttachment">UpdateVpcAttachment</a></code> | <code>string</code> | [Write] networkmanager:UpdateVpcAttachment. |

---

##### `AcceptAttachment`<sup>Required</sup> <a name="AcceptAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AcceptAttachment"></a>

```typescript
public readonly AcceptAttachment: string;
```

- *Type:* string

[Write] networkmanager:AcceptAttachment.

---

##### `actionGetConnectAttachment`<sup>Required</sup> <a name="actionGetConnectAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnectAttachment"></a>

```typescript
public readonly actionGetConnectAttachment: string;
```

- *Type:* string

[Read] networkmanager:GetConnectAttachment.

---

##### `actionGetConnections`<sup>Required</sup> <a name="actionGetConnections" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnections"></a>

```typescript
public readonly actionGetConnections: string;
```

- *Type:* string

[List] networkmanager:GetConnections.

---

##### `actionGetConnectPeer`<sup>Required</sup> <a name="actionGetConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnectPeer"></a>

```typescript
public readonly actionGetConnectPeer: string;
```

- *Type:* string

[Read] networkmanager:GetConnectPeer.

---

##### `actionGetConnectPeerAssociations`<sup>Required</sup> <a name="actionGetConnectPeerAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetConnectPeerAssociations"></a>

```typescript
public readonly actionGetConnectPeerAssociations: string;
```

- *Type:* string

[Read] networkmanager:GetConnectPeerAssociations.

---

##### `actionGetCoreNetwork`<sup>Required</sup> <a name="actionGetCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetwork"></a>

```typescript
public readonly actionGetCoreNetwork: string;
```

- *Type:* string

[Read] networkmanager:GetCoreNetwork.

---

##### `actionGetCoreNetworkChangeEvents`<sup>Required</sup> <a name="actionGetCoreNetworkChangeEvents" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetworkChangeEvents"></a>

```typescript
public readonly actionGetCoreNetworkChangeEvents: string;
```

- *Type:* string

[Read] networkmanager:GetCoreNetworkChangeEvents.

---

##### `actionGetCoreNetworkChangeSet`<sup>Required</sup> <a name="actionGetCoreNetworkChangeSet" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetworkChangeSet"></a>

```typescript
public readonly actionGetCoreNetworkChangeSet: string;
```

- *Type:* string

[Read] networkmanager:GetCoreNetworkChangeSet.

---

##### `actionGetCoreNetworkPolicy`<sup>Required</sup> <a name="actionGetCoreNetworkPolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCoreNetworkPolicy"></a>

```typescript
public readonly actionGetCoreNetworkPolicy: string;
```

- *Type:* string

[Read] networkmanager:GetCoreNetworkPolicy.

---

##### `actionGetCustomerGatewayAssociations`<sup>Required</sup> <a name="actionGetCustomerGatewayAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetCustomerGatewayAssociations"></a>

```typescript
public readonly actionGetCustomerGatewayAssociations: string;
```

- *Type:* string

[List] networkmanager:GetCustomerGatewayAssociations.

---

##### `actionGetDevices`<sup>Required</sup> <a name="actionGetDevices" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetDevices"></a>

```typescript
public readonly actionGetDevices: string;
```

- *Type:* string

[List] networkmanager:GetDevices.

---

##### `actionGetDirectConnectGatewayAttachment`<sup>Required</sup> <a name="actionGetDirectConnectGatewayAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetDirectConnectGatewayAttachment"></a>

```typescript
public readonly actionGetDirectConnectGatewayAttachment: string;
```

- *Type:* string

[Read] networkmanager:GetDirectConnectGatewayAttachment.

---

##### `actionGetLinkAssociations`<sup>Required</sup> <a name="actionGetLinkAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetLinkAssociations"></a>

```typescript
public readonly actionGetLinkAssociations: string;
```

- *Type:* string

[List] networkmanager:GetLinkAssociations.

---

##### `actionGetLinks`<sup>Required</sup> <a name="actionGetLinks" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetLinks"></a>

```typescript
public readonly actionGetLinks: string;
```

- *Type:* string

[List] networkmanager:GetLinks.

---

##### `actionGetNetworkResourceCounts`<sup>Required</sup> <a name="actionGetNetworkResourceCounts" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkResourceCounts"></a>

```typescript
public readonly actionGetNetworkResourceCounts: string;
```

- *Type:* string

[Read] networkmanager:GetNetworkResourceCounts.

---

##### `actionGetNetworkResourceRelationships`<sup>Required</sup> <a name="actionGetNetworkResourceRelationships" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkResourceRelationships"></a>

```typescript
public readonly actionGetNetworkResourceRelationships: string;
```

- *Type:* string

[Read] networkmanager:GetNetworkResourceRelationships.

---

##### `actionGetNetworkResources`<sup>Required</sup> <a name="actionGetNetworkResources" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkResources"></a>

```typescript
public readonly actionGetNetworkResources: string;
```

- *Type:* string

[Read] networkmanager:GetNetworkResources.

---

##### `actionGetNetworkRoutes`<sup>Required</sup> <a name="actionGetNetworkRoutes" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkRoutes"></a>

```typescript
public readonly actionGetNetworkRoutes: string;
```

- *Type:* string

[Read] networkmanager:GetNetworkRoutes.

---

##### `actionGetNetworkTelemetry`<sup>Required</sup> <a name="actionGetNetworkTelemetry" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetNetworkTelemetry"></a>

```typescript
public readonly actionGetNetworkTelemetry: string;
```

- *Type:* string

[Read] networkmanager:GetNetworkTelemetry.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] networkmanager:GetResourcePolicy.

---

##### `actionGetRouteAnalysis`<sup>Required</sup> <a name="actionGetRouteAnalysis" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetRouteAnalysis"></a>

```typescript
public readonly actionGetRouteAnalysis: string;
```

- *Type:* string

[Read] networkmanager:GetRouteAnalysis.

---

##### `actionGetSites`<sup>Required</sup> <a name="actionGetSites" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetSites"></a>

```typescript
public readonly actionGetSites: string;
```

- *Type:* string

[List] networkmanager:GetSites.

---

##### `actionGetSiteToSiteVpnAttachment`<sup>Required</sup> <a name="actionGetSiteToSiteVpnAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetSiteToSiteVpnAttachment"></a>

```typescript
public readonly actionGetSiteToSiteVpnAttachment: string;
```

- *Type:* string

[Read] networkmanager:GetSiteToSiteVpnAttachment.

---

##### `actionGetTransitGatewayConnectPeerAssociations`<sup>Required</sup> <a name="actionGetTransitGatewayConnectPeerAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayConnectPeerAssociations"></a>

```typescript
public readonly actionGetTransitGatewayConnectPeerAssociations: string;
```

- *Type:* string

[List] networkmanager:GetTransitGatewayConnectPeerAssociations.

---

##### `actionGetTransitGatewayPeering`<sup>Required</sup> <a name="actionGetTransitGatewayPeering" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayPeering"></a>

```typescript
public readonly actionGetTransitGatewayPeering: string;
```

- *Type:* string

[Read] networkmanager:GetTransitGatewayPeering.

---

##### `actionGetTransitGatewayRegistrations`<sup>Required</sup> <a name="actionGetTransitGatewayRegistrations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayRegistrations"></a>

```typescript
public readonly actionGetTransitGatewayRegistrations: string;
```

- *Type:* string

[List] networkmanager:GetTransitGatewayRegistrations.

---

##### `actionGetTransitGatewayRouteTableAttachment`<sup>Required</sup> <a name="actionGetTransitGatewayRouteTableAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetTransitGatewayRouteTableAttachment"></a>

```typescript
public readonly actionGetTransitGatewayRouteTableAttachment: string;
```

- *Type:* string

[Read] networkmanager:GetTransitGatewayRouteTableAttachment.

---

##### `actionGetVpcAttachment`<sup>Required</sup> <a name="actionGetVpcAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.actionGetVpcAttachment"></a>

```typescript
public readonly actionGetVpcAttachment: string;
```

- *Type:* string

[Read] networkmanager:GetVpcAttachment.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateConnectPeer`<sup>Required</sup> <a name="AssociateConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateConnectPeer"></a>

```typescript
public readonly AssociateConnectPeer: string;
```

- *Type:* string

[Write] networkmanager:AssociateConnectPeer.

---

##### `AssociateCustomerGateway`<sup>Required</sup> <a name="AssociateCustomerGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateCustomerGateway"></a>

```typescript
public readonly AssociateCustomerGateway: string;
```

- *Type:* string

[Write] networkmanager:AssociateCustomerGateway.

---

##### `AssociateLink`<sup>Required</sup> <a name="AssociateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateLink"></a>

```typescript
public readonly AssociateLink: string;
```

- *Type:* string

[Write] networkmanager:AssociateLink.

---

##### `AssociateTransitGatewayConnectPeer`<sup>Required</sup> <a name="AssociateTransitGatewayConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.AssociateTransitGatewayConnectPeer"></a>

```typescript
public readonly AssociateTransitGatewayConnectPeer: string;
```

- *Type:* string

[Write] networkmanager:AssociateTransitGatewayConnectPeer.

---

##### `CreateConnectAttachment`<sup>Required</sup> <a name="CreateConnectAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateConnectAttachment"></a>

```typescript
public readonly CreateConnectAttachment: string;
```

- *Type:* string

[Write] networkmanager:CreateConnectAttachment.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string;
```

- *Type:* string

[Write] networkmanager:CreateConnection.

---

##### `CreateConnectPeer`<sup>Required</sup> <a name="CreateConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateConnectPeer"></a>

```typescript
public readonly CreateConnectPeer: string;
```

- *Type:* string

[Write] networkmanager:CreateConnectPeer.

---

##### `CreateCoreNetwork`<sup>Required</sup> <a name="CreateCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateCoreNetwork"></a>

```typescript
public readonly CreateCoreNetwork: string;
```

- *Type:* string

[Write] networkmanager:CreateCoreNetwork.

---

##### `CreateCoreNetworkPrefixListAssociation`<sup>Required</sup> <a name="CreateCoreNetworkPrefixListAssociation" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateCoreNetworkPrefixListAssociation"></a>

```typescript
public readonly CreateCoreNetworkPrefixListAssociation: string;
```

- *Type:* string

[Write] networkmanager:CreateCoreNetworkPrefixListAssociation.

---

##### `CreateDevice`<sup>Required</sup> <a name="CreateDevice" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateDevice"></a>

```typescript
public readonly CreateDevice: string;
```

- *Type:* string

[Write] networkmanager:CreateDevice.

---

##### `CreateDirectConnectGatewayAttachment`<sup>Required</sup> <a name="CreateDirectConnectGatewayAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateDirectConnectGatewayAttachment"></a>

```typescript
public readonly CreateDirectConnectGatewayAttachment: string;
```

- *Type:* string

[Write] networkmanager:CreateDirectConnectGatewayAttachment.

---

##### `CreateGlobalNetwork`<sup>Required</sup> <a name="CreateGlobalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateGlobalNetwork"></a>

```typescript
public readonly CreateGlobalNetwork: string;
```

- *Type:* string

[Write] networkmanager:CreateGlobalNetwork.

---

##### `CreateLink`<sup>Required</sup> <a name="CreateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateLink"></a>

```typescript
public readonly CreateLink: string;
```

- *Type:* string

[Write] networkmanager:CreateLink.

---

##### `CreateSite`<sup>Required</sup> <a name="CreateSite" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateSite"></a>

```typescript
public readonly CreateSite: string;
```

- *Type:* string

[Write] networkmanager:CreateSite.

---

##### `CreateSiteToSiteVpnAttachment`<sup>Required</sup> <a name="CreateSiteToSiteVpnAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateSiteToSiteVpnAttachment"></a>

```typescript
public readonly CreateSiteToSiteVpnAttachment: string;
```

- *Type:* string

[Write] networkmanager:CreateSiteToSiteVpnAttachment.

---

##### `CreateTransitGatewayPeering`<sup>Required</sup> <a name="CreateTransitGatewayPeering" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateTransitGatewayPeering"></a>

```typescript
public readonly CreateTransitGatewayPeering: string;
```

- *Type:* string

[Write] networkmanager:CreateTransitGatewayPeering.

---

##### `CreateTransitGatewayRouteTableAttachment`<sup>Required</sup> <a name="CreateTransitGatewayRouteTableAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateTransitGatewayRouteTableAttachment"></a>

```typescript
public readonly CreateTransitGatewayRouteTableAttachment: string;
```

- *Type:* string

[Write] networkmanager:CreateTransitGatewayRouteTableAttachment.

---

##### `CreateVpcAttachment`<sup>Required</sup> <a name="CreateVpcAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.CreateVpcAttachment"></a>

```typescript
public readonly CreateVpcAttachment: string;
```

- *Type:* string

[Write] networkmanager:CreateVpcAttachment.

---

##### `DeleteAttachment`<sup>Required</sup> <a name="DeleteAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteAttachment"></a>

```typescript
public readonly DeleteAttachment: string;
```

- *Type:* string

[Write] networkmanager:DeleteAttachment.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string;
```

- *Type:* string

[Write] networkmanager:DeleteConnection.

---

##### `DeleteConnectPeer`<sup>Required</sup> <a name="DeleteConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteConnectPeer"></a>

```typescript
public readonly DeleteConnectPeer: string;
```

- *Type:* string

[Write] networkmanager:DeleteConnectPeer.

---

##### `DeleteCoreNetwork`<sup>Required</sup> <a name="DeleteCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteCoreNetwork"></a>

```typescript
public readonly DeleteCoreNetwork: string;
```

- *Type:* string

[Write] networkmanager:DeleteCoreNetwork.

---

##### `DeleteCoreNetworkPolicyVersion`<sup>Required</sup> <a name="DeleteCoreNetworkPolicyVersion" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteCoreNetworkPolicyVersion"></a>

```typescript
public readonly DeleteCoreNetworkPolicyVersion: string;
```

- *Type:* string

[Write] networkmanager:DeleteCoreNetworkPolicyVersion.

---

##### `DeleteCoreNetworkPrefixListAssociation`<sup>Required</sup> <a name="DeleteCoreNetworkPrefixListAssociation" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteCoreNetworkPrefixListAssociation"></a>

```typescript
public readonly DeleteCoreNetworkPrefixListAssociation: string;
```

- *Type:* string

[Write] networkmanager:DeleteCoreNetworkPrefixListAssociation.

---

##### `DeleteDevice`<sup>Required</sup> <a name="DeleteDevice" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteDevice"></a>

```typescript
public readonly DeleteDevice: string;
```

- *Type:* string

[Write] networkmanager:DeleteDevice.

---

##### `DeleteGlobalNetwork`<sup>Required</sup> <a name="DeleteGlobalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteGlobalNetwork"></a>

```typescript
public readonly DeleteGlobalNetwork: string;
```

- *Type:* string

[Write] networkmanager:DeleteGlobalNetwork.

---

##### `DeleteLink`<sup>Required</sup> <a name="DeleteLink" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteLink"></a>

```typescript
public readonly DeleteLink: string;
```

- *Type:* string

[Write] networkmanager:DeleteLink.

---

##### `DeletePeering`<sup>Required</sup> <a name="DeletePeering" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeletePeering"></a>

```typescript
public readonly DeletePeering: string;
```

- *Type:* string

[Write] networkmanager:DeletePeering.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] networkmanager:DeleteResourcePolicy.

---

##### `DeleteSite`<sup>Required</sup> <a name="DeleteSite" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeleteSite"></a>

```typescript
public readonly DeleteSite: string;
```

- *Type:* string

[Write] networkmanager:DeleteSite.

---

##### `DeregisterTransitGateway`<sup>Required</sup> <a name="DeregisterTransitGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DeregisterTransitGateway"></a>

```typescript
public readonly DeregisterTransitGateway: string;
```

- *Type:* string

[Write] networkmanager:DeregisterTransitGateway.

---

##### `DescribeGlobalNetworks`<sup>Required</sup> <a name="DescribeGlobalNetworks" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DescribeGlobalNetworks"></a>

```typescript
public readonly DescribeGlobalNetworks: string;
```

- *Type:* string

[List] networkmanager:DescribeGlobalNetworks.

---

##### `DisassociateConnectPeer`<sup>Required</sup> <a name="DisassociateConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateConnectPeer"></a>

```typescript
public readonly DisassociateConnectPeer: string;
```

- *Type:* string

[Write] networkmanager:DisassociateConnectPeer.

---

##### `DisassociateCustomerGateway`<sup>Required</sup> <a name="DisassociateCustomerGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateCustomerGateway"></a>

```typescript
public readonly DisassociateCustomerGateway: string;
```

- *Type:* string

[Write] networkmanager:DisassociateCustomerGateway.

---

##### `DisassociateLink`<sup>Required</sup> <a name="DisassociateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateLink"></a>

```typescript
public readonly DisassociateLink: string;
```

- *Type:* string

[Write] networkmanager:DisassociateLink.

---

##### `DisassociateTransitGatewayConnectPeer`<sup>Required</sup> <a name="DisassociateTransitGatewayConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.DisassociateTransitGatewayConnectPeer"></a>

```typescript
public readonly DisassociateTransitGatewayConnectPeer: string;
```

- *Type:* string

[Write] networkmanager:DisassociateTransitGatewayConnectPeer.

---

##### `ExecuteCoreNetworkChangeSet`<sup>Required</sup> <a name="ExecuteCoreNetworkChangeSet" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ExecuteCoreNetworkChangeSet"></a>

```typescript
public readonly ExecuteCoreNetworkChangeSet: string;
```

- *Type:* string

[Write] networkmanager:ExecuteCoreNetworkChangeSet.

---

##### `ListAttachmentRoutingPolicyAssociations`<sup>Required</sup> <a name="ListAttachmentRoutingPolicyAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListAttachmentRoutingPolicyAssociations"></a>

```typescript
public readonly ListAttachmentRoutingPolicyAssociations: string;
```

- *Type:* string

[List] networkmanager:ListAttachmentRoutingPolicyAssociations.

---

##### `ListAttachments`<sup>Required</sup> <a name="ListAttachments" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListAttachments"></a>

```typescript
public readonly ListAttachments: string;
```

- *Type:* string

[List] networkmanager:ListAttachments.

---

##### `ListConnectPeers`<sup>Required</sup> <a name="ListConnectPeers" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListConnectPeers"></a>

```typescript
public readonly ListConnectPeers: string;
```

- *Type:* string

[List] networkmanager:ListConnectPeers.

---

##### `ListCoreNetworkPolicyVersions`<sup>Required</sup> <a name="ListCoreNetworkPolicyVersions" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworkPolicyVersions"></a>

```typescript
public readonly ListCoreNetworkPolicyVersions: string;
```

- *Type:* string

[List] networkmanager:ListCoreNetworkPolicyVersions.

---

##### `ListCoreNetworkPrefixListAssociations`<sup>Required</sup> <a name="ListCoreNetworkPrefixListAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworkPrefixListAssociations"></a>

```typescript
public readonly ListCoreNetworkPrefixListAssociations: string;
```

- *Type:* string

[List] networkmanager:ListCoreNetworkPrefixListAssociations.

---

##### `ListCoreNetworkRoutingInformation`<sup>Required</sup> <a name="ListCoreNetworkRoutingInformation" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworkRoutingInformation"></a>

```typescript
public readonly ListCoreNetworkRoutingInformation: string;
```

- *Type:* string

[List] networkmanager:ListCoreNetworkRoutingInformation.

---

##### `ListCoreNetworks`<sup>Required</sup> <a name="ListCoreNetworks" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListCoreNetworks"></a>

```typescript
public readonly ListCoreNetworks: string;
```

- *Type:* string

[List] networkmanager:ListCoreNetworks.

---

##### `ListOrganizationServiceAccessStatus`<sup>Required</sup> <a name="ListOrganizationServiceAccessStatus" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListOrganizationServiceAccessStatus"></a>

```typescript
public readonly ListOrganizationServiceAccessStatus: string;
```

- *Type:* string

[List] networkmanager:ListOrganizationServiceAccessStatus.

---

##### `ListPeerings`<sup>Required</sup> <a name="ListPeerings" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListPeerings"></a>

```typescript
public readonly ListPeerings: string;
```

- *Type:* string

[List] networkmanager:ListPeerings.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] networkmanager:ListTagsForResource.

---

##### `PutAttachmentRoutingPolicyLabel`<sup>Required</sup> <a name="PutAttachmentRoutingPolicyLabel" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.PutAttachmentRoutingPolicyLabel"></a>

```typescript
public readonly PutAttachmentRoutingPolicyLabel: string;
```

- *Type:* string

[Write] networkmanager:PutAttachmentRoutingPolicyLabel.

---

##### `PutCoreNetworkPolicy`<sup>Required</sup> <a name="PutCoreNetworkPolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.PutCoreNetworkPolicy"></a>

```typescript
public readonly PutCoreNetworkPolicy: string;
```

- *Type:* string

[Write] networkmanager:PutCoreNetworkPolicy.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] networkmanager:PutResourcePolicy.

---

##### `RegisterTransitGateway`<sup>Required</sup> <a name="RegisterTransitGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RegisterTransitGateway"></a>

```typescript
public readonly RegisterTransitGateway: string;
```

- *Type:* string

[Write] networkmanager:RegisterTransitGateway.

---

##### `RejectAttachment`<sup>Required</sup> <a name="RejectAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RejectAttachment"></a>

```typescript
public readonly RejectAttachment: string;
```

- *Type:* string

[Write] networkmanager:RejectAttachment.

---

##### `RemoveAttachmentRoutingPolicyLabel`<sup>Required</sup> <a name="RemoveAttachmentRoutingPolicyLabel" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RemoveAttachmentRoutingPolicyLabel"></a>

```typescript
public readonly RemoveAttachmentRoutingPolicyLabel: string;
```

- *Type:* string

[Write] networkmanager:RemoveAttachmentRoutingPolicyLabel.

---

##### `RestoreCoreNetworkPolicyVersion`<sup>Required</sup> <a name="RestoreCoreNetworkPolicyVersion" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.RestoreCoreNetworkPolicyVersion"></a>

```typescript
public readonly RestoreCoreNetworkPolicyVersion: string;
```

- *Type:* string

[Write] networkmanager:RestoreCoreNetworkPolicyVersion.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartOrganizationServiceAccessUpdate`<sup>Required</sup> <a name="StartOrganizationServiceAccessUpdate" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.StartOrganizationServiceAccessUpdate"></a>

```typescript
public readonly StartOrganizationServiceAccessUpdate: string;
```

- *Type:* string

[PermissionManagement] networkmanager:StartOrganizationServiceAccessUpdate.

---

##### `StartRouteAnalysis`<sup>Required</sup> <a name="StartRouteAnalysis" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.StartRouteAnalysis"></a>

```typescript
public readonly StartRouteAnalysis: string;
```

- *Type:* string

[Write] networkmanager:StartRouteAnalysis.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] networkmanager:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] networkmanager:UntagResource.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string;
```

- *Type:* string

[Write] networkmanager:UpdateConnection.

---

##### `UpdateCoreNetwork`<sup>Required</sup> <a name="UpdateCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateCoreNetwork"></a>

```typescript
public readonly UpdateCoreNetwork: string;
```

- *Type:* string

[Write] networkmanager:UpdateCoreNetwork.

---

##### `UpdateDevice`<sup>Required</sup> <a name="UpdateDevice" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateDevice"></a>

```typescript
public readonly UpdateDevice: string;
```

- *Type:* string

[Write] networkmanager:UpdateDevice.

---

##### `UpdateDirectConnectGatewayAttachment`<sup>Required</sup> <a name="UpdateDirectConnectGatewayAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateDirectConnectGatewayAttachment"></a>

```typescript
public readonly UpdateDirectConnectGatewayAttachment: string;
```

- *Type:* string

[Write] networkmanager:UpdateDirectConnectGatewayAttachment.

---

##### `UpdateGlobalNetwork`<sup>Required</sup> <a name="UpdateGlobalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateGlobalNetwork"></a>

```typescript
public readonly UpdateGlobalNetwork: string;
```

- *Type:* string

[Write] networkmanager:UpdateGlobalNetwork.

---

##### `UpdateLink`<sup>Required</sup> <a name="UpdateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateLink"></a>

```typescript
public readonly UpdateLink: string;
```

- *Type:* string

[Write] networkmanager:UpdateLink.

---

##### `UpdateNetworkResourceMetadata`<sup>Required</sup> <a name="UpdateNetworkResourceMetadata" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateNetworkResourceMetadata"></a>

```typescript
public readonly UpdateNetworkResourceMetadata: string;
```

- *Type:* string

[Write] networkmanager:UpdateNetworkResourceMetadata.

---

##### `UpdateSite`<sup>Required</sup> <a name="UpdateSite" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateSite"></a>

```typescript
public readonly UpdateSite: string;
```

- *Type:* string

[Write] networkmanager:UpdateSite.

---

##### `UpdateVpcAttachment`<sup>Required</sup> <a name="UpdateVpcAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerActions.property.UpdateVpcAttachment"></a>

```typescript
public readonly UpdateVpcAttachment: string;
```

- *Type:* string

[Write] networkmanager:UpdateVpcAttachment.

---

### NetworkManagerConditions <a name="NetworkManagerConditions" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions"></a>

Condition key constants and builders for networkmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

new networkmanager.NetworkManagerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.cgwARN">cgwARN</a></code> | Generates a condition block for `networkmanager:cgwArn`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.directConnectGatewayARN">directConnectGatewayARN</a></code> | Generates a condition block for `networkmanager:directConnectGatewayArn`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.edgeLocations">edgeLocations</a></code> | Generates a condition block for `networkmanager:edgeLocations`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.subnetArns">subnetArns</a></code> | Generates a condition block for `networkmanager:subnetArns`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwARN">tgwARN</a></code> | Generates a condition block for `networkmanager:tgwArn`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwConnectPeerARN">tgwConnectPeerARN</a></code> | Generates a condition block for `networkmanager:tgwConnectPeerArn`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwRtbARN">tgwRtbARN</a></code> | Generates a condition block for `networkmanager:tgwRtbArn`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.vpcARN">vpcARN</a></code> | Generates a condition block for `networkmanager:vpcArn`. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.vpnConnectionARN">vpnConnectionARN</a></code> | Generates a condition block for `networkmanager:vpnConnectionArn`. |

---

##### `cgwARN` <a name="cgwARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.cgwARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.cgwARN(value: string)
```

Generates a condition block for `networkmanager:cgwArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.cgwARN.parameter.value"></a>

- *Type:* string

---

##### `directConnectGatewayARN` <a name="directConnectGatewayARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.directConnectGatewayARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.directConnectGatewayARN(value: string)
```

Generates a condition block for `networkmanager:directConnectGatewayArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.directConnectGatewayARN.parameter.value"></a>

- *Type:* string

---

##### `edgeLocations` <a name="edgeLocations" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.edgeLocations"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.edgeLocations(values: string[])
```

Generates a condition block for `networkmanager:edgeLocations`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.edgeLocations.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.requestTag"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.resourceTag"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `subnetArns` <a name="subnetArns" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.subnetArns"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.subnetArns(values: string[])
```

Generates a condition block for `networkmanager:subnetArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.subnetArns.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tagKeys"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `tgwARN` <a name="tgwARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.tgwARN(value: string)
```

Generates a condition block for `networkmanager:tgwArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwARN.parameter.value"></a>

- *Type:* string

---

##### `tgwConnectPeerARN` <a name="tgwConnectPeerARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwConnectPeerARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.tgwConnectPeerARN(value: string)
```

Generates a condition block for `networkmanager:tgwConnectPeerArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwConnectPeerARN.parameter.value"></a>

- *Type:* string

---

##### `tgwRtbARN` <a name="tgwRtbARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwRtbARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.tgwRtbARN(value: string)
```

Generates a condition block for `networkmanager:tgwRtbArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.tgwRtbARN.parameter.value"></a>

- *Type:* string

---

##### `vpcARN` <a name="vpcARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.vpcARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.vpcARN(value: string)
```

Generates a condition block for `networkmanager:vpcArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.vpcARN.parameter.value"></a>

- *Type:* string

---

##### `vpnConnectionARN` <a name="vpnConnectionARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.vpnConnectionARN"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerConditions.vpnConnectionARN(value: string)
```

Generates a condition block for `networkmanager:vpnConnectionArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.vpnConnectionARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AssociateCustomerGatewayConditionKeys">AssociateCustomerGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateCustomerGateway action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AssociateTransitGatewayConnectPeerConditionKeys">AssociateTransitGatewayConnectPeerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateTransitGatewayConnectPeer action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CGW_ARN">CGW_ARN</a></code> | <code>string</code> | Condition key: networkmanager:cgwArn (ARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateConnectAttachmentConditionKeys">CreateConnectAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateConnectionConditionKeys">CreateConnectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnection action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateConnectPeerConditionKeys">CreateConnectPeerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConnectPeer action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateCoreNetworkConditionKeys">CreateCoreNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCoreNetwork action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateDeviceConditionKeys">CreateDeviceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDevice action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateDirectConnectGatewayAttachmentConditionKeys">CreateDirectConnectGatewayAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDirectConnectGatewayAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateGlobalNetworkConditionKeys">CreateGlobalNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGlobalNetwork action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateLinkConditionKeys">CreateLinkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLink action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateSiteConditionKeys">CreateSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSite action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateSiteToSiteVpnAttachmentConditionKeys">CreateSiteToSiteVpnAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSiteToSiteVpnAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateTransitGatewayPeeringConditionKeys">CreateTransitGatewayPeeringConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTransitGatewayPeering action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateTransitGatewayRouteTableAttachmentConditionKeys">CreateTransitGatewayRouteTableAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTransitGatewayRouteTableAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateVpcAttachmentConditionKeys">CreateVpcAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVpcAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DeregisterTransitGatewayConditionKeys">DeregisterTransitGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterTransitGateway action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DIRECT_CONNECT_GATEWAY_ARN">DIRECT_CONNECT_GATEWAY_ARN</a></code> | <code>string</code> | Condition key: networkmanager:directConnectGatewayArn (ARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DisassociateCustomerGatewayConditionKeys">DisassociateCustomerGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateCustomerGateway action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DisassociateTransitGatewayConnectPeerConditionKeys">DisassociateTransitGatewayConnectPeerConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateTransitGatewayConnectPeer action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.EDGE_LOCATIONS">EDGE_LOCATIONS</a></code> | <code>string</code> | Condition key: networkmanager:edgeLocations (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.RegisterTransitGatewayConditionKeys">RegisterTransitGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterTransitGateway action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.SUBNET_ARNS">SUBNET_ARNS</a></code> | <code>string</code> | Condition key: networkmanager:subnetArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TGW_ARN">TGW_ARN</a></code> | <code>string</code> | Condition key: networkmanager:tgwArn (ARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TGW_CONNECT_PEER_ARN">TGW_CONNECT_PEER_ARN</a></code> | <code>string</code> | Condition key: networkmanager:tgwConnectPeerArn (ARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TGW_RTB_ARN">TGW_RTB_ARN</a></code> | <code>string</code> | Condition key: networkmanager:tgwRtbArn (ARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.UpdateDirectConnectGatewayAttachmentConditionKeys">UpdateDirectConnectGatewayAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateDirectConnectGatewayAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.UpdateVpcAttachmentConditionKeys">UpdateVpcAttachmentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateVpcAttachment action. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.VPC_ARN">VPC_ARN</a></code> | <code>string</code> | Condition key: networkmanager:vpcArn (ARN). |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.VPN_CONNECTION_ARN">VPN_CONNECTION_ARN</a></code> | <code>string</code> | Condition key: networkmanager:vpnConnectionArn (ARN). |

---

##### `AssociateCustomerGatewayConditionKeys`<sup>Required</sup> <a name="AssociateCustomerGatewayConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AssociateCustomerGatewayConditionKeys"></a>

```typescript
public readonly AssociateCustomerGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateCustomerGateway action.

---

##### `AssociateTransitGatewayConnectPeerConditionKeys`<sup>Required</sup> <a name="AssociateTransitGatewayConnectPeerConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AssociateTransitGatewayConnectPeerConditionKeys"></a>

```typescript
public readonly AssociateTransitGatewayConnectPeerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateTransitGatewayConnectPeer action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CGW_ARN`<sup>Required</sup> <a name="CGW_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CGW_ARN"></a>

```typescript
public readonly CGW_ARN: string;
```

- *Type:* string

Condition key: networkmanager:cgwArn (ARN).

---

##### `CreateConnectAttachmentConditionKeys`<sup>Required</sup> <a name="CreateConnectAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateConnectAttachmentConditionKeys"></a>

```typescript
public readonly CreateConnectAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectAttachment action.

---

##### `CreateConnectionConditionKeys`<sup>Required</sup> <a name="CreateConnectionConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateConnectionConditionKeys"></a>

```typescript
public readonly CreateConnectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnection action.

---

##### `CreateConnectPeerConditionKeys`<sup>Required</sup> <a name="CreateConnectPeerConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateConnectPeerConditionKeys"></a>

```typescript
public readonly CreateConnectPeerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConnectPeer action.

---

##### `CreateCoreNetworkConditionKeys`<sup>Required</sup> <a name="CreateCoreNetworkConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateCoreNetworkConditionKeys"></a>

```typescript
public readonly CreateCoreNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCoreNetwork action.

---

##### `CreateDeviceConditionKeys`<sup>Required</sup> <a name="CreateDeviceConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateDeviceConditionKeys"></a>

```typescript
public readonly CreateDeviceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDevice action.

---

##### `CreateDirectConnectGatewayAttachmentConditionKeys`<sup>Required</sup> <a name="CreateDirectConnectGatewayAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateDirectConnectGatewayAttachmentConditionKeys"></a>

```typescript
public readonly CreateDirectConnectGatewayAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDirectConnectGatewayAttachment action.

---

##### `CreateGlobalNetworkConditionKeys`<sup>Required</sup> <a name="CreateGlobalNetworkConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateGlobalNetworkConditionKeys"></a>

```typescript
public readonly CreateGlobalNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGlobalNetwork action.

---

##### `CreateLinkConditionKeys`<sup>Required</sup> <a name="CreateLinkConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateLinkConditionKeys"></a>

```typescript
public readonly CreateLinkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLink action.

---

##### `CreateSiteConditionKeys`<sup>Required</sup> <a name="CreateSiteConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateSiteConditionKeys"></a>

```typescript
public readonly CreateSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSite action.

---

##### `CreateSiteToSiteVpnAttachmentConditionKeys`<sup>Required</sup> <a name="CreateSiteToSiteVpnAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateSiteToSiteVpnAttachmentConditionKeys"></a>

```typescript
public readonly CreateSiteToSiteVpnAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSiteToSiteVpnAttachment action.

---

##### `CreateTransitGatewayPeeringConditionKeys`<sup>Required</sup> <a name="CreateTransitGatewayPeeringConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateTransitGatewayPeeringConditionKeys"></a>

```typescript
public readonly CreateTransitGatewayPeeringConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTransitGatewayPeering action.

---

##### `CreateTransitGatewayRouteTableAttachmentConditionKeys`<sup>Required</sup> <a name="CreateTransitGatewayRouteTableAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateTransitGatewayRouteTableAttachmentConditionKeys"></a>

```typescript
public readonly CreateTransitGatewayRouteTableAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTransitGatewayRouteTableAttachment action.

---

##### `CreateVpcAttachmentConditionKeys`<sup>Required</sup> <a name="CreateVpcAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.CreateVpcAttachmentConditionKeys"></a>

```typescript
public readonly CreateVpcAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVpcAttachment action.

---

##### `DeregisterTransitGatewayConditionKeys`<sup>Required</sup> <a name="DeregisterTransitGatewayConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DeregisterTransitGatewayConditionKeys"></a>

```typescript
public readonly DeregisterTransitGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterTransitGateway action.

---

##### `DIRECT_CONNECT_GATEWAY_ARN`<sup>Required</sup> <a name="DIRECT_CONNECT_GATEWAY_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DIRECT_CONNECT_GATEWAY_ARN"></a>

```typescript
public readonly DIRECT_CONNECT_GATEWAY_ARN: string;
```

- *Type:* string

Condition key: networkmanager:directConnectGatewayArn (ARN).

---

##### `DisassociateCustomerGatewayConditionKeys`<sup>Required</sup> <a name="DisassociateCustomerGatewayConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DisassociateCustomerGatewayConditionKeys"></a>

```typescript
public readonly DisassociateCustomerGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateCustomerGateway action.

---

##### `DisassociateTransitGatewayConnectPeerConditionKeys`<sup>Required</sup> <a name="DisassociateTransitGatewayConnectPeerConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.DisassociateTransitGatewayConnectPeerConditionKeys"></a>

```typescript
public readonly DisassociateTransitGatewayConnectPeerConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateTransitGatewayConnectPeer action.

---

##### `EDGE_LOCATIONS`<sup>Required</sup> <a name="EDGE_LOCATIONS" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.EDGE_LOCATIONS"></a>

```typescript
public readonly EDGE_LOCATIONS: string;
```

- *Type:* string

Condition key: networkmanager:edgeLocations (ArrayOfString).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `RegisterTransitGatewayConditionKeys`<sup>Required</sup> <a name="RegisterTransitGatewayConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.RegisterTransitGatewayConditionKeys"></a>

```typescript
public readonly RegisterTransitGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterTransitGateway action.

---

##### `SUBNET_ARNS`<sup>Required</sup> <a name="SUBNET_ARNS" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.SUBNET_ARNS"></a>

```typescript
public readonly SUBNET_ARNS: string;
```

- *Type:* string

Condition key: networkmanager:subnetArns (ArrayOfARN).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TGW_ARN`<sup>Required</sup> <a name="TGW_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TGW_ARN"></a>

```typescript
public readonly TGW_ARN: string;
```

- *Type:* string

Condition key: networkmanager:tgwArn (ARN).

---

##### `TGW_CONNECT_PEER_ARN`<sup>Required</sup> <a name="TGW_CONNECT_PEER_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TGW_CONNECT_PEER_ARN"></a>

```typescript
public readonly TGW_CONNECT_PEER_ARN: string;
```

- *Type:* string

Condition key: networkmanager:tgwConnectPeerArn (ARN).

---

##### `TGW_RTB_ARN`<sup>Required</sup> <a name="TGW_RTB_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.TGW_RTB_ARN"></a>

```typescript
public readonly TGW_RTB_ARN: string;
```

- *Type:* string

Condition key: networkmanager:tgwRtbArn (ARN).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateDirectConnectGatewayAttachmentConditionKeys`<sup>Required</sup> <a name="UpdateDirectConnectGatewayAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.UpdateDirectConnectGatewayAttachmentConditionKeys"></a>

```typescript
public readonly UpdateDirectConnectGatewayAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateDirectConnectGatewayAttachment action.

---

##### `UpdateVpcAttachmentConditionKeys`<sup>Required</sup> <a name="UpdateVpcAttachmentConditionKeys" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.UpdateVpcAttachmentConditionKeys"></a>

```typescript
public readonly UpdateVpcAttachmentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateVpcAttachment action.

---

##### `VPC_ARN`<sup>Required</sup> <a name="VPC_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.VPC_ARN"></a>

```typescript
public readonly VPC_ARN: string;
```

- *Type:* string

Condition key: networkmanager:vpcArn (ARN).

---

##### `VPN_CONNECTION_ARN`<sup>Required</sup> <a name="VPN_CONNECTION_ARN" id="@cdk_utils/iam.networkmanager.NetworkManagerConditions.property.VPN_CONNECTION_ARN"></a>

```typescript
public readonly VPN_CONNECTION_ARN: string;
```

- *Type:* string

Condition key: networkmanager:vpnConnectionArn (ARN).

---

### NetworkManagerOperations <a name="NetworkManagerOperations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations"></a>

API operation to required IAM actions mapping for networkmanager.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

new networkmanager.NetworkManagerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AcceptAttachment">AcceptAttachment</a></code> | <code>string[]</code> | IAM actions required for the AcceptAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateConnectPeer">AssociateConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the AssociateConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateCustomerGateway">AssociateCustomerGateway</a></code> | <code>string[]</code> | IAM actions required for the AssociateCustomerGateway API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateLink">AssociateLink</a></code> | <code>string[]</code> | IAM actions required for the AssociateLink API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateTransitGatewayConnectPeer">AssociateTransitGatewayConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the AssociateTransitGatewayConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateConnectAttachment">CreateConnectAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateConnection">CreateConnection</a></code> | <code>string[]</code> | IAM actions required for the CreateConnection API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateConnectPeer">CreateConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateCoreNetwork">CreateCoreNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateCoreNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateCoreNetworkPrefixListAssociation">CreateCoreNetworkPrefixListAssociation</a></code> | <code>string[]</code> | IAM actions required for the CreateCoreNetworkPrefixListAssociation API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateDevice">CreateDevice</a></code> | <code>string[]</code> | IAM actions required for the CreateDevice API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateDirectConnectGatewayAttachment">CreateDirectConnectGatewayAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateDirectConnectGatewayAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateGlobalNetwork">CreateGlobalNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateGlobalNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateLink">CreateLink</a></code> | <code>string[]</code> | IAM actions required for the CreateLink API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateSite">CreateSite</a></code> | <code>string[]</code> | IAM actions required for the CreateSite API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateSiteToSiteVpnAttachment">CreateSiteToSiteVpnAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateSiteToSiteVpnAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateTransitGatewayPeering">CreateTransitGatewayPeering</a></code> | <code>string[]</code> | IAM actions required for the CreateTransitGatewayPeering API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateTransitGatewayRouteTableAttachment">CreateTransitGatewayRouteTableAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateTransitGatewayRouteTableAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateVpcAttachment">CreateVpcAttachment</a></code> | <code>string[]</code> | IAM actions required for the CreateVpcAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteAttachment">DeleteAttachment</a></code> | <code>string[]</code> | IAM actions required for the DeleteAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteConnection">DeleteConnection</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnection API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteConnectPeer">DeleteConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteCoreNetwork">DeleteCoreNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteCoreNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteCoreNetworkPolicyVersion">DeleteCoreNetworkPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteCoreNetworkPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteCoreNetworkPrefixListAssociation">DeleteCoreNetworkPrefixListAssociation</a></code> | <code>string[]</code> | IAM actions required for the DeleteCoreNetworkPrefixListAssociation API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteDevice">DeleteDevice</a></code> | <code>string[]</code> | IAM actions required for the DeleteDevice API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteGlobalNetwork">DeleteGlobalNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteGlobalNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteLink">DeleteLink</a></code> | <code>string[]</code> | IAM actions required for the DeleteLink API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeletePeering">DeletePeering</a></code> | <code>string[]</code> | IAM actions required for the DeletePeering API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteSite">DeleteSite</a></code> | <code>string[]</code> | IAM actions required for the DeleteSite API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeregisterTransitGateway">DeregisterTransitGateway</a></code> | <code>string[]</code> | IAM actions required for the DeregisterTransitGateway API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DescribeGlobalNetworks">DescribeGlobalNetworks</a></code> | <code>string[]</code> | IAM actions required for the DescribeGlobalNetworks API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateConnectPeer">DisassociateConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the DisassociateConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateCustomerGateway">DisassociateCustomerGateway</a></code> | <code>string[]</code> | IAM actions required for the DisassociateCustomerGateway API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateLink">DisassociateLink</a></code> | <code>string[]</code> | IAM actions required for the DisassociateLink API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateTransitGatewayConnectPeer">DisassociateTransitGatewayConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the DisassociateTransitGatewayConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ExecuteCoreNetworkChangeSet">ExecuteCoreNetworkChangeSet</a></code> | <code>string[]</code> | IAM actions required for the ExecuteCoreNetworkChangeSet API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListAttachmentRoutingPolicyAssociations">ListAttachmentRoutingPolicyAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAttachmentRoutingPolicyAssociations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListAttachments">ListAttachments</a></code> | <code>string[]</code> | IAM actions required for the ListAttachments API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListConnectPeers">ListConnectPeers</a></code> | <code>string[]</code> | IAM actions required for the ListConnectPeers API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworkPolicyVersions">ListCoreNetworkPolicyVersions</a></code> | <code>string[]</code> | IAM actions required for the ListCoreNetworkPolicyVersions API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworkPrefixListAssociations">ListCoreNetworkPrefixListAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListCoreNetworkPrefixListAssociations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworkRoutingInformation">ListCoreNetworkRoutingInformation</a></code> | <code>string[]</code> | IAM actions required for the ListCoreNetworkRoutingInformation API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworks">ListCoreNetworks</a></code> | <code>string[]</code> | IAM actions required for the ListCoreNetworks API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListOrganizationServiceAccessStatus">ListOrganizationServiceAccessStatus</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationServiceAccessStatus API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListPeerings">ListPeerings</a></code> | <code>string[]</code> | IAM actions required for the ListPeerings API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnectAttachment">opGetConnectAttachment</a></code> | <code>string[]</code> | IAM actions required for the GetConnectAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnections">opGetConnections</a></code> | <code>string[]</code> | IAM actions required for the GetConnections API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnectPeer">opGetConnectPeer</a></code> | <code>string[]</code> | IAM actions required for the GetConnectPeer API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnectPeerAssociations">opGetConnectPeerAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetConnectPeerAssociations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetwork">opGetCoreNetwork</a></code> | <code>string[]</code> | IAM actions required for the GetCoreNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetworkChangeEvents">opGetCoreNetworkChangeEvents</a></code> | <code>string[]</code> | IAM actions required for the GetCoreNetworkChangeEvents API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetworkChangeSet">opGetCoreNetworkChangeSet</a></code> | <code>string[]</code> | IAM actions required for the GetCoreNetworkChangeSet API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetworkPolicy">opGetCoreNetworkPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetCoreNetworkPolicy API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCustomerGatewayAssociations">opGetCustomerGatewayAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetCustomerGatewayAssociations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetDevices">opGetDevices</a></code> | <code>string[]</code> | IAM actions required for the GetDevices API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetDirectConnectGatewayAttachment">opGetDirectConnectGatewayAttachment</a></code> | <code>string[]</code> | IAM actions required for the GetDirectConnectGatewayAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetLinkAssociations">opGetLinkAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetLinkAssociations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetLinks">opGetLinks</a></code> | <code>string[]</code> | IAM actions required for the GetLinks API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkResourceCounts">opGetNetworkResourceCounts</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkResourceCounts API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkResourceRelationships">opGetNetworkResourceRelationships</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkResourceRelationships API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkResources">opGetNetworkResources</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkResources API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkRoutes">opGetNetworkRoutes</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkRoutes API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkTelemetry">opGetNetworkTelemetry</a></code> | <code>string[]</code> | IAM actions required for the GetNetworkTelemetry API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetRouteAnalysis">opGetRouteAnalysis</a></code> | <code>string[]</code> | IAM actions required for the GetRouteAnalysis API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetSites">opGetSites</a></code> | <code>string[]</code> | IAM actions required for the GetSites API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetSiteToSiteVpnAttachment">opGetSiteToSiteVpnAttachment</a></code> | <code>string[]</code> | IAM actions required for the GetSiteToSiteVpnAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayConnectPeerAssociations">opGetTransitGatewayConnectPeerAssociations</a></code> | <code>string[]</code> | IAM actions required for the GetTransitGatewayConnectPeerAssociations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayPeering">opGetTransitGatewayPeering</a></code> | <code>string[]</code> | IAM actions required for the GetTransitGatewayPeering API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayRegistrations">opGetTransitGatewayRegistrations</a></code> | <code>string[]</code> | IAM actions required for the GetTransitGatewayRegistrations API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayRouteTableAttachment">opGetTransitGatewayRouteTableAttachment</a></code> | <code>string[]</code> | IAM actions required for the GetTransitGatewayRouteTableAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetVpcAttachment">opGetVpcAttachment</a></code> | <code>string[]</code> | IAM actions required for the GetVpcAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.PutAttachmentRoutingPolicyLabel">PutAttachmentRoutingPolicyLabel</a></code> | <code>string[]</code> | IAM actions required for the PutAttachmentRoutingPolicyLabel API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.PutCoreNetworkPolicy">PutCoreNetworkPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutCoreNetworkPolicy API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RegisterTransitGateway">RegisterTransitGateway</a></code> | <code>string[]</code> | IAM actions required for the RegisterTransitGateway API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RejectAttachment">RejectAttachment</a></code> | <code>string[]</code> | IAM actions required for the RejectAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RemoveAttachmentRoutingPolicyLabel">RemoveAttachmentRoutingPolicyLabel</a></code> | <code>string[]</code> | IAM actions required for the RemoveAttachmentRoutingPolicyLabel API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RestoreCoreNetworkPolicyVersion">RestoreCoreNetworkPolicyVersion</a></code> | <code>string[]</code> | IAM actions required for the RestoreCoreNetworkPolicyVersion API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.StartOrganizationServiceAccessUpdate">StartOrganizationServiceAccessUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartOrganizationServiceAccessUpdate API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.StartRouteAnalysis">StartRouteAnalysis</a></code> | <code>string[]</code> | IAM actions required for the StartRouteAnalysis API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateConnection">UpdateConnection</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnection API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateCoreNetwork">UpdateCoreNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateCoreNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateDevice">UpdateDevice</a></code> | <code>string[]</code> | IAM actions required for the UpdateDevice API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateDirectConnectGatewayAttachment">UpdateDirectConnectGatewayAttachment</a></code> | <code>string[]</code> | IAM actions required for the UpdateDirectConnectGatewayAttachment API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateGlobalNetwork">UpdateGlobalNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateGlobalNetwork API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateLink">UpdateLink</a></code> | <code>string[]</code> | IAM actions required for the UpdateLink API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateNetworkResourceMetadata">UpdateNetworkResourceMetadata</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetworkResourceMetadata API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateSite">UpdateSite</a></code> | <code>string[]</code> | IAM actions required for the UpdateSite API call. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateVpcAttachment">UpdateVpcAttachment</a></code> | <code>string[]</code> | IAM actions required for the UpdateVpcAttachment API call. |

---

##### `AcceptAttachment`<sup>Required</sup> <a name="AcceptAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AcceptAttachment"></a>

```typescript
public readonly AcceptAttachment: string[];
```

- *Type:* string[]

IAM actions required for the AcceptAttachment API call.

---

##### `AssociateConnectPeer`<sup>Required</sup> <a name="AssociateConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateConnectPeer"></a>

```typescript
public readonly AssociateConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the AssociateConnectPeer API call.

---

##### `AssociateCustomerGateway`<sup>Required</sup> <a name="AssociateCustomerGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateCustomerGateway"></a>

```typescript
public readonly AssociateCustomerGateway: string[];
```

- *Type:* string[]

IAM actions required for the AssociateCustomerGateway API call.

---

##### `AssociateLink`<sup>Required</sup> <a name="AssociateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateLink"></a>

```typescript
public readonly AssociateLink: string[];
```

- *Type:* string[]

IAM actions required for the AssociateLink API call.

---

##### `AssociateTransitGatewayConnectPeer`<sup>Required</sup> <a name="AssociateTransitGatewayConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.AssociateTransitGatewayConnectPeer"></a>

```typescript
public readonly AssociateTransitGatewayConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the AssociateTransitGatewayConnectPeer API call.

---

##### `CreateConnectAttachment`<sup>Required</sup> <a name="CreateConnectAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateConnectAttachment"></a>

```typescript
public readonly CreateConnectAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectAttachment API call.

---

##### `CreateConnection`<sup>Required</sup> <a name="CreateConnection" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateConnection"></a>

```typescript
public readonly CreateConnection: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnection API call.

---

##### `CreateConnectPeer`<sup>Required</sup> <a name="CreateConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateConnectPeer"></a>

```typescript
public readonly CreateConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectPeer API call.

---

##### `CreateCoreNetwork`<sup>Required</sup> <a name="CreateCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateCoreNetwork"></a>

```typescript
public readonly CreateCoreNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateCoreNetwork API call.

---

##### `CreateCoreNetworkPrefixListAssociation`<sup>Required</sup> <a name="CreateCoreNetworkPrefixListAssociation" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateCoreNetworkPrefixListAssociation"></a>

```typescript
public readonly CreateCoreNetworkPrefixListAssociation: string[];
```

- *Type:* string[]

IAM actions required for the CreateCoreNetworkPrefixListAssociation API call.

---

##### `CreateDevice`<sup>Required</sup> <a name="CreateDevice" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateDevice"></a>

```typescript
public readonly CreateDevice: string[];
```

- *Type:* string[]

IAM actions required for the CreateDevice API call.

---

##### `CreateDirectConnectGatewayAttachment`<sup>Required</sup> <a name="CreateDirectConnectGatewayAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateDirectConnectGatewayAttachment"></a>

```typescript
public readonly CreateDirectConnectGatewayAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateDirectConnectGatewayAttachment API call.

---

##### `CreateGlobalNetwork`<sup>Required</sup> <a name="CreateGlobalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateGlobalNetwork"></a>

```typescript
public readonly CreateGlobalNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateGlobalNetwork API call.

---

##### `CreateLink`<sup>Required</sup> <a name="CreateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateLink"></a>

```typescript
public readonly CreateLink: string[];
```

- *Type:* string[]

IAM actions required for the CreateLink API call.

---

##### `CreateSite`<sup>Required</sup> <a name="CreateSite" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateSite"></a>

```typescript
public readonly CreateSite: string[];
```

- *Type:* string[]

IAM actions required for the CreateSite API call.

---

##### `CreateSiteToSiteVpnAttachment`<sup>Required</sup> <a name="CreateSiteToSiteVpnAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateSiteToSiteVpnAttachment"></a>

```typescript
public readonly CreateSiteToSiteVpnAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateSiteToSiteVpnAttachment API call.

---

##### `CreateTransitGatewayPeering`<sup>Required</sup> <a name="CreateTransitGatewayPeering" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateTransitGatewayPeering"></a>

```typescript
public readonly CreateTransitGatewayPeering: string[];
```

- *Type:* string[]

IAM actions required for the CreateTransitGatewayPeering API call.

---

##### `CreateTransitGatewayRouteTableAttachment`<sup>Required</sup> <a name="CreateTransitGatewayRouteTableAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateTransitGatewayRouteTableAttachment"></a>

```typescript
public readonly CreateTransitGatewayRouteTableAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateTransitGatewayRouteTableAttachment API call.

---

##### `CreateVpcAttachment`<sup>Required</sup> <a name="CreateVpcAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.CreateVpcAttachment"></a>

```typescript
public readonly CreateVpcAttachment: string[];
```

- *Type:* string[]

IAM actions required for the CreateVpcAttachment API call.

---

##### `DeleteAttachment`<sup>Required</sup> <a name="DeleteAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteAttachment"></a>

```typescript
public readonly DeleteAttachment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAttachment API call.

---

##### `DeleteConnection`<sup>Required</sup> <a name="DeleteConnection" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteConnection"></a>

```typescript
public readonly DeleteConnection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnection API call.

---

##### `DeleteConnectPeer`<sup>Required</sup> <a name="DeleteConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteConnectPeer"></a>

```typescript
public readonly DeleteConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectPeer API call.

---

##### `DeleteCoreNetwork`<sup>Required</sup> <a name="DeleteCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteCoreNetwork"></a>

```typescript
public readonly DeleteCoreNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCoreNetwork API call.

---

##### `DeleteCoreNetworkPolicyVersion`<sup>Required</sup> <a name="DeleteCoreNetworkPolicyVersion" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteCoreNetworkPolicyVersion"></a>

```typescript
public readonly DeleteCoreNetworkPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCoreNetworkPolicyVersion API call.

---

##### `DeleteCoreNetworkPrefixListAssociation`<sup>Required</sup> <a name="DeleteCoreNetworkPrefixListAssociation" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteCoreNetworkPrefixListAssociation"></a>

```typescript
public readonly DeleteCoreNetworkPrefixListAssociation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCoreNetworkPrefixListAssociation API call.

---

##### `DeleteDevice`<sup>Required</sup> <a name="DeleteDevice" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteDevice"></a>

```typescript
public readonly DeleteDevice: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDevice API call.

---

##### `DeleteGlobalNetwork`<sup>Required</sup> <a name="DeleteGlobalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteGlobalNetwork"></a>

```typescript
public readonly DeleteGlobalNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGlobalNetwork API call.

---

##### `DeleteLink`<sup>Required</sup> <a name="DeleteLink" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteLink"></a>

```typescript
public readonly DeleteLink: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLink API call.

---

##### `DeletePeering`<sup>Required</sup> <a name="DeletePeering" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeletePeering"></a>

```typescript
public readonly DeletePeering: string[];
```

- *Type:* string[]

IAM actions required for the DeletePeering API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSite`<sup>Required</sup> <a name="DeleteSite" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeleteSite"></a>

```typescript
public readonly DeleteSite: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSite API call.

---

##### `DeregisterTransitGateway`<sup>Required</sup> <a name="DeregisterTransitGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DeregisterTransitGateway"></a>

```typescript
public readonly DeregisterTransitGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterTransitGateway API call.

---

##### `DescribeGlobalNetworks`<sup>Required</sup> <a name="DescribeGlobalNetworks" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DescribeGlobalNetworks"></a>

```typescript
public readonly DescribeGlobalNetworks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGlobalNetworks API call.

---

##### `DisassociateConnectPeer`<sup>Required</sup> <a name="DisassociateConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateConnectPeer"></a>

```typescript
public readonly DisassociateConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateConnectPeer API call.

---

##### `DisassociateCustomerGateway`<sup>Required</sup> <a name="DisassociateCustomerGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateCustomerGateway"></a>

```typescript
public readonly DisassociateCustomerGateway: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateCustomerGateway API call.

---

##### `DisassociateLink`<sup>Required</sup> <a name="DisassociateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateLink"></a>

```typescript
public readonly DisassociateLink: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateLink API call.

---

##### `DisassociateTransitGatewayConnectPeer`<sup>Required</sup> <a name="DisassociateTransitGatewayConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.DisassociateTransitGatewayConnectPeer"></a>

```typescript
public readonly DisassociateTransitGatewayConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateTransitGatewayConnectPeer API call.

---

##### `ExecuteCoreNetworkChangeSet`<sup>Required</sup> <a name="ExecuteCoreNetworkChangeSet" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ExecuteCoreNetworkChangeSet"></a>

```typescript
public readonly ExecuteCoreNetworkChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteCoreNetworkChangeSet API call.

---

##### `ListAttachmentRoutingPolicyAssociations`<sup>Required</sup> <a name="ListAttachmentRoutingPolicyAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListAttachmentRoutingPolicyAssociations"></a>

```typescript
public readonly ListAttachmentRoutingPolicyAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachmentRoutingPolicyAssociations API call.

---

##### `ListAttachments`<sup>Required</sup> <a name="ListAttachments" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListAttachments"></a>

```typescript
public readonly ListAttachments: string[];
```

- *Type:* string[]

IAM actions required for the ListAttachments API call.

---

##### `ListConnectPeers`<sup>Required</sup> <a name="ListConnectPeers" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListConnectPeers"></a>

```typescript
public readonly ListConnectPeers: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectPeers API call.

---

##### `ListCoreNetworkPolicyVersions`<sup>Required</sup> <a name="ListCoreNetworkPolicyVersions" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworkPolicyVersions"></a>

```typescript
public readonly ListCoreNetworkPolicyVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreNetworkPolicyVersions API call.

---

##### `ListCoreNetworkPrefixListAssociations`<sup>Required</sup> <a name="ListCoreNetworkPrefixListAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworkPrefixListAssociations"></a>

```typescript
public readonly ListCoreNetworkPrefixListAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreNetworkPrefixListAssociations API call.

---

##### `ListCoreNetworkRoutingInformation`<sup>Required</sup> <a name="ListCoreNetworkRoutingInformation" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworkRoutingInformation"></a>

```typescript
public readonly ListCoreNetworkRoutingInformation: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreNetworkRoutingInformation API call.

---

##### `ListCoreNetworks`<sup>Required</sup> <a name="ListCoreNetworks" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListCoreNetworks"></a>

```typescript
public readonly ListCoreNetworks: string[];
```

- *Type:* string[]

IAM actions required for the ListCoreNetworks API call.

---

##### `ListOrganizationServiceAccessStatus`<sup>Required</sup> <a name="ListOrganizationServiceAccessStatus" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListOrganizationServiceAccessStatus"></a>

```typescript
public readonly ListOrganizationServiceAccessStatus: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationServiceAccessStatus API call.

---

##### `ListPeerings`<sup>Required</sup> <a name="ListPeerings" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListPeerings"></a>

```typescript
public readonly ListPeerings: string[];
```

- *Type:* string[]

IAM actions required for the ListPeerings API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetConnectAttachment`<sup>Required</sup> <a name="opGetConnectAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnectAttachment"></a>

```typescript
public readonly opGetConnectAttachment: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectAttachment API call.

---

##### `opGetConnections`<sup>Required</sup> <a name="opGetConnections" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnections"></a>

```typescript
public readonly opGetConnections: string[];
```

- *Type:* string[]

IAM actions required for the GetConnections API call.

---

##### `opGetConnectPeer`<sup>Required</sup> <a name="opGetConnectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnectPeer"></a>

```typescript
public readonly opGetConnectPeer: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectPeer API call.

---

##### `opGetConnectPeerAssociations`<sup>Required</sup> <a name="opGetConnectPeerAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetConnectPeerAssociations"></a>

```typescript
public readonly opGetConnectPeerAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectPeerAssociations API call.

---

##### `opGetCoreNetwork`<sup>Required</sup> <a name="opGetCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetwork"></a>

```typescript
public readonly opGetCoreNetwork: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreNetwork API call.

---

##### `opGetCoreNetworkChangeEvents`<sup>Required</sup> <a name="opGetCoreNetworkChangeEvents" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetworkChangeEvents"></a>

```typescript
public readonly opGetCoreNetworkChangeEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreNetworkChangeEvents API call.

---

##### `opGetCoreNetworkChangeSet`<sup>Required</sup> <a name="opGetCoreNetworkChangeSet" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetworkChangeSet"></a>

```typescript
public readonly opGetCoreNetworkChangeSet: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreNetworkChangeSet API call.

---

##### `opGetCoreNetworkPolicy`<sup>Required</sup> <a name="opGetCoreNetworkPolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCoreNetworkPolicy"></a>

```typescript
public readonly opGetCoreNetworkPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetCoreNetworkPolicy API call.

---

##### `opGetCustomerGatewayAssociations`<sup>Required</sup> <a name="opGetCustomerGatewayAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetCustomerGatewayAssociations"></a>

```typescript
public readonly opGetCustomerGatewayAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomerGatewayAssociations API call.

---

##### `opGetDevices`<sup>Required</sup> <a name="opGetDevices" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetDevices"></a>

```typescript
public readonly opGetDevices: string[];
```

- *Type:* string[]

IAM actions required for the GetDevices API call.

---

##### `opGetDirectConnectGatewayAttachment`<sup>Required</sup> <a name="opGetDirectConnectGatewayAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetDirectConnectGatewayAttachment"></a>

```typescript
public readonly opGetDirectConnectGatewayAttachment: string[];
```

- *Type:* string[]

IAM actions required for the GetDirectConnectGatewayAttachment API call.

---

##### `opGetLinkAssociations`<sup>Required</sup> <a name="opGetLinkAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetLinkAssociations"></a>

```typescript
public readonly opGetLinkAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetLinkAssociations API call.

---

##### `opGetLinks`<sup>Required</sup> <a name="opGetLinks" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetLinks"></a>

```typescript
public readonly opGetLinks: string[];
```

- *Type:* string[]

IAM actions required for the GetLinks API call.

---

##### `opGetNetworkResourceCounts`<sup>Required</sup> <a name="opGetNetworkResourceCounts" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkResourceCounts"></a>

```typescript
public readonly opGetNetworkResourceCounts: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkResourceCounts API call.

---

##### `opGetNetworkResourceRelationships`<sup>Required</sup> <a name="opGetNetworkResourceRelationships" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkResourceRelationships"></a>

```typescript
public readonly opGetNetworkResourceRelationships: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkResourceRelationships API call.

---

##### `opGetNetworkResources`<sup>Required</sup> <a name="opGetNetworkResources" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkResources"></a>

```typescript
public readonly opGetNetworkResources: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkResources API call.

---

##### `opGetNetworkRoutes`<sup>Required</sup> <a name="opGetNetworkRoutes" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkRoutes"></a>

```typescript
public readonly opGetNetworkRoutes: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkRoutes API call.

---

##### `opGetNetworkTelemetry`<sup>Required</sup> <a name="opGetNetworkTelemetry" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetNetworkTelemetry"></a>

```typescript
public readonly opGetNetworkTelemetry: string[];
```

- *Type:* string[]

IAM actions required for the GetNetworkTelemetry API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetRouteAnalysis`<sup>Required</sup> <a name="opGetRouteAnalysis" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetRouteAnalysis"></a>

```typescript
public readonly opGetRouteAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the GetRouteAnalysis API call.

---

##### `opGetSites`<sup>Required</sup> <a name="opGetSites" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetSites"></a>

```typescript
public readonly opGetSites: string[];
```

- *Type:* string[]

IAM actions required for the GetSites API call.

---

##### `opGetSiteToSiteVpnAttachment`<sup>Required</sup> <a name="opGetSiteToSiteVpnAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetSiteToSiteVpnAttachment"></a>

```typescript
public readonly opGetSiteToSiteVpnAttachment: string[];
```

- *Type:* string[]

IAM actions required for the GetSiteToSiteVpnAttachment API call.

---

##### `opGetTransitGatewayConnectPeerAssociations`<sup>Required</sup> <a name="opGetTransitGatewayConnectPeerAssociations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayConnectPeerAssociations"></a>

```typescript
public readonly opGetTransitGatewayConnectPeerAssociations: string[];
```

- *Type:* string[]

IAM actions required for the GetTransitGatewayConnectPeerAssociations API call.

---

##### `opGetTransitGatewayPeering`<sup>Required</sup> <a name="opGetTransitGatewayPeering" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayPeering"></a>

```typescript
public readonly opGetTransitGatewayPeering: string[];
```

- *Type:* string[]

IAM actions required for the GetTransitGatewayPeering API call.

---

##### `opGetTransitGatewayRegistrations`<sup>Required</sup> <a name="opGetTransitGatewayRegistrations" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayRegistrations"></a>

```typescript
public readonly opGetTransitGatewayRegistrations: string[];
```

- *Type:* string[]

IAM actions required for the GetTransitGatewayRegistrations API call.

---

##### `opGetTransitGatewayRouteTableAttachment`<sup>Required</sup> <a name="opGetTransitGatewayRouteTableAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetTransitGatewayRouteTableAttachment"></a>

```typescript
public readonly opGetTransitGatewayRouteTableAttachment: string[];
```

- *Type:* string[]

IAM actions required for the GetTransitGatewayRouteTableAttachment API call.

---

##### `opGetVpcAttachment`<sup>Required</sup> <a name="opGetVpcAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.opGetVpcAttachment"></a>

```typescript
public readonly opGetVpcAttachment: string[];
```

- *Type:* string[]

IAM actions required for the GetVpcAttachment API call.

---

##### `PutAttachmentRoutingPolicyLabel`<sup>Required</sup> <a name="PutAttachmentRoutingPolicyLabel" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.PutAttachmentRoutingPolicyLabel"></a>

```typescript
public readonly PutAttachmentRoutingPolicyLabel: string[];
```

- *Type:* string[]

IAM actions required for the PutAttachmentRoutingPolicyLabel API call.

---

##### `PutCoreNetworkPolicy`<sup>Required</sup> <a name="PutCoreNetworkPolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.PutCoreNetworkPolicy"></a>

```typescript
public readonly PutCoreNetworkPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutCoreNetworkPolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `RegisterTransitGateway`<sup>Required</sup> <a name="RegisterTransitGateway" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RegisterTransitGateway"></a>

```typescript
public readonly RegisterTransitGateway: string[];
```

- *Type:* string[]

IAM actions required for the RegisterTransitGateway API call.

---

##### `RejectAttachment`<sup>Required</sup> <a name="RejectAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RejectAttachment"></a>

```typescript
public readonly RejectAttachment: string[];
```

- *Type:* string[]

IAM actions required for the RejectAttachment API call.

---

##### `RemoveAttachmentRoutingPolicyLabel`<sup>Required</sup> <a name="RemoveAttachmentRoutingPolicyLabel" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RemoveAttachmentRoutingPolicyLabel"></a>

```typescript
public readonly RemoveAttachmentRoutingPolicyLabel: string[];
```

- *Type:* string[]

IAM actions required for the RemoveAttachmentRoutingPolicyLabel API call.

---

##### `RestoreCoreNetworkPolicyVersion`<sup>Required</sup> <a name="RestoreCoreNetworkPolicyVersion" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.RestoreCoreNetworkPolicyVersion"></a>

```typescript
public readonly RestoreCoreNetworkPolicyVersion: string[];
```

- *Type:* string[]

IAM actions required for the RestoreCoreNetworkPolicyVersion API call.

---

##### `StartOrganizationServiceAccessUpdate`<sup>Required</sup> <a name="StartOrganizationServiceAccessUpdate" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.StartOrganizationServiceAccessUpdate"></a>

```typescript
public readonly StartOrganizationServiceAccessUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartOrganizationServiceAccessUpdate API call.

---

##### `StartRouteAnalysis`<sup>Required</sup> <a name="StartRouteAnalysis" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.StartRouteAnalysis"></a>

```typescript
public readonly StartRouteAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the StartRouteAnalysis API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConnection`<sup>Required</sup> <a name="UpdateConnection" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateConnection"></a>

```typescript
public readonly UpdateConnection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnection API call.

---

##### `UpdateCoreNetwork`<sup>Required</sup> <a name="UpdateCoreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateCoreNetwork"></a>

```typescript
public readonly UpdateCoreNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCoreNetwork API call.

---

##### `UpdateDevice`<sup>Required</sup> <a name="UpdateDevice" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateDevice"></a>

```typescript
public readonly UpdateDevice: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDevice API call.

---

##### `UpdateDirectConnectGatewayAttachment`<sup>Required</sup> <a name="UpdateDirectConnectGatewayAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateDirectConnectGatewayAttachment"></a>

```typescript
public readonly UpdateDirectConnectGatewayAttachment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDirectConnectGatewayAttachment API call.

---

##### `UpdateGlobalNetwork`<sup>Required</sup> <a name="UpdateGlobalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateGlobalNetwork"></a>

```typescript
public readonly UpdateGlobalNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGlobalNetwork API call.

---

##### `UpdateLink`<sup>Required</sup> <a name="UpdateLink" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateLink"></a>

```typescript
public readonly UpdateLink: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLink API call.

---

##### `UpdateNetworkResourceMetadata`<sup>Required</sup> <a name="UpdateNetworkResourceMetadata" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateNetworkResourceMetadata"></a>

```typescript
public readonly UpdateNetworkResourceMetadata: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetworkResourceMetadata API call.

---

##### `UpdateSite`<sup>Required</sup> <a name="UpdateSite" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateSite"></a>

```typescript
public readonly UpdateSite: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSite API call.

---

##### `UpdateVpcAttachment`<sup>Required</sup> <a name="UpdateVpcAttachment" id="@cdk_utils/iam.networkmanager.NetworkManagerOperations.property.UpdateVpcAttachment"></a>

```typescript
public readonly UpdateVpcAttachment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVpcAttachment API call.

---

### NetworkManagerResources <a name="NetworkManagerResources" id="@cdk_utils/iam.networkmanager.NetworkManagerResources"></a>

ARN builders, validators, and parsers for networkmanager resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.Initializer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

new networkmanager.NetworkManagerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.attachment">attachment</a></code> | Builds an ARN for the attachment resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.connection">connection</a></code> | Builds an ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.connectPeer">connectPeer</a></code> | Builds an ARN for the connect-peer resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.coreNetwork">coreNetwork</a></code> | Builds an ARN for the core-network resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.device">device</a></code> | Builds an ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.globalNetwork">globalNetwork</a></code> | Builds an ARN for the global-network resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidAttachmentArn">isValidAttachmentArn</a></code> | Validates whether a string is a valid ARN for the attachment resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidConnectionArn">isValidConnectionArn</a></code> | Validates whether a string is a valid ARN for the connection resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidConnectPeerArn">isValidConnectPeerArn</a></code> | Validates whether a string is a valid ARN for the connect-peer resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidCoreNetworkArn">isValidCoreNetworkArn</a></code> | Validates whether a string is a valid ARN for the core-network resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidDeviceArn">isValidDeviceArn</a></code> | Validates whether a string is a valid ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidGlobalNetworkArn">isValidGlobalNetworkArn</a></code> | Validates whether a string is a valid ARN for the global-network resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidLinkArn">isValidLinkArn</a></code> | Validates whether a string is a valid ARN for the link resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidPeeringArn">isValidPeeringArn</a></code> | Validates whether a string is a valid ARN for the peering resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidSiteArn">isValidSiteArn</a></code> | Validates whether a string is a valid ARN for the site resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.link">link</a></code> | Builds an ARN for the link resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseAttachmentArn">parseAttachmentArn</a></code> | Parses a attachment ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseConnectionArn">parseConnectionArn</a></code> | Parses a connection ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseConnectPeerArn">parseConnectPeerArn</a></code> | Parses a connect-peer ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseCoreNetworkArn">parseCoreNetworkArn</a></code> | Parses a core-network ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseDeviceArn">parseDeviceArn</a></code> | Parses a device ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseGlobalNetworkArn">parseGlobalNetworkArn</a></code> | Parses a global-network ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseLinkArn">parseLinkArn</a></code> | Parses a link ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parsePeeringArn">parsePeeringArn</a></code> | Parses a peering ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.parseSiteArn">parseSiteArn</a></code> | Parses a site ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.peering">peering</a></code> | Builds an ARN for the peering resource. |
| <code><a href="#@cdk_utils/iam.networkmanager.NetworkManagerResources.site">site</a></code> | Builds an ARN for the site resource. |

---

##### `attachment` <a name="attachment" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.attachment"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.attachment(props: NetworkManagerAttachmentArnProps)
```

Builds an ARN for the attachment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.attachment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerAttachmentArnProps">NetworkManagerAttachmentArnProps</a>

---

##### `connection` <a name="connection" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.connection"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.connection(props: NetworkManagerConnectionArnProps)
```

Builds an ARN for the connection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.connection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectionArnProps">NetworkManagerConnectionArnProps</a>

---

##### `connectPeer` <a name="connectPeer" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.connectPeer"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.connectPeer(props: NetworkManagerConnectPeerArnProps)
```

Builds an ARN for the connect-peer resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.connectPeer.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerConnectPeerArnProps">NetworkManagerConnectPeerArnProps</a>

---

##### `coreNetwork` <a name="coreNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.coreNetwork"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.coreNetwork(props: NetworkManagerCoreNetworkArnProps)
```

Builds an ARN for the core-network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.coreNetwork.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerCoreNetworkArnProps">NetworkManagerCoreNetworkArnProps</a>

---

##### `device` <a name="device" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.device"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.device(props: NetworkManagerDeviceArnProps)
```

Builds an ARN for the device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.device.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerDeviceArnProps">NetworkManagerDeviceArnProps</a>

---

##### `globalNetwork` <a name="globalNetwork" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.globalNetwork"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.globalNetwork(props: NetworkManagerGlobalNetworkArnProps)
```

Builds an ARN for the global-network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.globalNetwork.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerGlobalNetworkArnProps">NetworkManagerGlobalNetworkArnProps</a>

---

##### `isValidAttachmentArn` <a name="isValidAttachmentArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidAttachmentArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidAttachmentArn(arn: string)
```

Validates whether a string is a valid ARN for the attachment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectionArn` <a name="isValidConnectionArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidConnectionArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidConnectionArn(arn: string)
```

Validates whether a string is a valid ARN for the connection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectPeerArn` <a name="isValidConnectPeerArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidConnectPeerArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidConnectPeerArn(arn: string)
```

Validates whether a string is a valid ARN for the connect-peer resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidConnectPeerArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCoreNetworkArn` <a name="isValidCoreNetworkArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidCoreNetworkArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidCoreNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the core-network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidCoreNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceArn` <a name="isValidDeviceArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidDeviceArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGlobalNetworkArn` <a name="isValidGlobalNetworkArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidGlobalNetworkArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidGlobalNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the global-network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidGlobalNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLinkArn` <a name="isValidLinkArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidLinkArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidLinkArn(arn: string)
```

Validates whether a string is a valid ARN for the link resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPeeringArn` <a name="isValidPeeringArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidPeeringArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidPeeringArn(arn: string)
```

Validates whether a string is a valid ARN for the peering resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidPeeringArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSiteArn` <a name="isValidSiteArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidSiteArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.isValidSiteArn(arn: string)
```

Validates whether a string is a valid ARN for the site resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.isValidSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `link` <a name="link" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.link"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.link(props: NetworkManagerLinkArnProps)
```

Builds an ARN for the link resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.link.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerLinkArnProps">NetworkManagerLinkArnProps</a>

---

##### `parseAttachmentArn` <a name="parseAttachmentArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseAttachmentArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseAttachmentArn(arn: string)
```

Parses a attachment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseAttachmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectionArn` <a name="parseConnectionArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseConnectionArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseConnectionArn(arn: string)
```

Parses a connection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseConnectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectPeerArn` <a name="parseConnectPeerArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseConnectPeerArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseConnectPeerArn(arn: string)
```

Parses a connect-peer ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseConnectPeerArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCoreNetworkArn` <a name="parseCoreNetworkArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseCoreNetworkArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseCoreNetworkArn(arn: string)
```

Parses a core-network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseCoreNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceArn` <a name="parseDeviceArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseDeviceArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseDeviceArn(arn: string)
```

Parses a device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGlobalNetworkArn` <a name="parseGlobalNetworkArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseGlobalNetworkArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseGlobalNetworkArn(arn: string)
```

Parses a global-network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseGlobalNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLinkArn` <a name="parseLinkArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseLinkArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseLinkArn(arn: string)
```

Parses a link ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseLinkArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePeeringArn` <a name="parsePeeringArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parsePeeringArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parsePeeringArn(arn: string)
```

Parses a peering ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parsePeeringArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSiteArn` <a name="parseSiteArn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseSiteArn"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.parseSiteArn(arn: string)
```

Parses a site ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.parseSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `peering` <a name="peering" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.peering"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.peering(props: NetworkManagerPeeringArnProps)
```

Builds an ARN for the peering resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.peering.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerPeeringArnProps">NetworkManagerPeeringArnProps</a>

---

##### `site` <a name="site" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.site"></a>

```typescript
import { networkmanager } from '@cdk_utils/iam'

networkmanager.NetworkManagerResources.site(props: NetworkManagerSiteArnProps)
```

Builds an ARN for the site resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmanager.NetworkManagerResources.site.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmanager.NetworkManagerSiteArnProps">NetworkManagerSiteArnProps</a>

---




