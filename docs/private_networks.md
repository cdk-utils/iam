# `private_networks` Submodule <a name="`private_networks` Submodule" id="@cdk_utils/iam.private_networks"></a>


## Structs <a name="Structs" id="Structs"></a>

### PrivateNetworksDeviceIdentifierArnComponents <a name="PrivateNetworksDeviceIdentifierArnComponents" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents"></a>

Parsed components of a device-identifier ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksDeviceIdentifierArnComponents: private_networks.PrivateNetworksDeviceIdentifierArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PrivateNetworksDeviceIdentifierArnProps <a name="PrivateNetworksDeviceIdentifierArnProps" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps"></a>

Properties for building a device-identifier ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksDeviceIdentifierArnProps: private_networks.PrivateNetworksDeviceIdentifierArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component of the ARN.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PrivateNetworksNetworkArnComponents <a name="PrivateNetworksNetworkArnComponents" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents"></a>

Parsed components of a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksNetworkArnComponents: private_networks.PrivateNetworksNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PrivateNetworksNetworkArnProps <a name="PrivateNetworksNetworkArnProps" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps"></a>

Properties for building a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksNetworkArnProps: private_networks.PrivateNetworksNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PrivateNetworksNetworkResourceArnComponents <a name="PrivateNetworksNetworkResourceArnComponents" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents"></a>

Parsed components of a network-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksNetworkResourceArnComponents: private_networks.PrivateNetworksNetworkResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PrivateNetworksNetworkResourceArnProps <a name="PrivateNetworksNetworkResourceArnProps" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps"></a>

Properties for building a network-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksNetworkResourceArnProps: private_networks.PrivateNetworksNetworkResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component of the ARN.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PrivateNetworksNetworkSiteArnComponents <a name="PrivateNetworksNetworkSiteArnComponents" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents"></a>

Parsed components of a network-site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksNetworkSiteArnComponents: private_networks.PrivateNetworksNetworkSiteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.networkSiteName">networkSiteName</a></code> | <code>string</code> | The NetworkSiteName component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component.

---

##### `networkSiteName`<sup>Required</sup> <a name="networkSiteName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.networkSiteName"></a>

```typescript
public readonly networkSiteName: string;
```

- *Type:* string

The NetworkSiteName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PrivateNetworksNetworkSiteArnProps <a name="PrivateNetworksNetworkSiteArnProps" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps"></a>

Properties for building a network-site ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksNetworkSiteArnProps: private_networks.PrivateNetworksNetworkSiteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.networkSiteName">networkSiteName</a></code> | <code>string</code> | The NetworkSiteName component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component of the ARN.

---

##### `networkSiteName`<sup>Required</sup> <a name="networkSiteName" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.networkSiteName"></a>

```typescript
public readonly networkSiteName: string;
```

- *Type:* string

The NetworkSiteName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PrivateNetworksOrderArnComponents <a name="PrivateNetworksOrderArnComponents" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents"></a>

Parsed components of a order ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksOrderArnComponents: private_networks.PrivateNetworksOrderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.orderId">orderId</a></code> | <code>string</code> | The OrderId component. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component.

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

The OrderId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### PrivateNetworksOrderArnProps <a name="PrivateNetworksOrderArnProps" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps"></a>

Properties for building a order ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

const privateNetworksOrderArnProps: private_networks.PrivateNetworksOrderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.networkName">networkName</a></code> | <code>string</code> | The NetworkName component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.orderId">orderId</a></code> | <code>string</code> | The OrderId component of the ARN. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The NetworkName component of the ARN.

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

The OrderId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateNetworksActions <a name="PrivateNetworksActions" id="@cdk_utils/iam.private_networks.PrivateNetworksActions"></a>

IAM action constants for the private-networks service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

new private_networks.PrivateNetworksActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AcknowledgeOrderReceipt">AcknowledgeOrderReceipt</a></code> | <code>string</code> | [Write] private-networks:AcknowledgeOrderReceipt. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetDeviceIdentifier">actionGetDeviceIdentifier</a></code> | <code>string</code> | [Read] private-networks:GetDeviceIdentifier. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetNetwork">actionGetNetwork</a></code> | <code>string</code> | [Read] private-networks:GetNetwork. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetNetworkResource">actionGetNetworkResource</a></code> | <code>string</code> | [Read] private-networks:GetNetworkResource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetNetworkSite">actionGetNetworkSite</a></code> | <code>string</code> | [Read] private-networks:GetNetworkSite. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetOrder">actionGetOrder</a></code> | <code>string</code> | [Read] private-networks:GetOrder. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ActivateDeviceIdentifier">ActivateDeviceIdentifier</a></code> | <code>string</code> | [Write] private-networks:ActivateDeviceIdentifier. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ActivateNetworkSite">ActivateNetworkSite</a></code> | <code>string</code> | [Write] private-networks:ActivateNetworkSite. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ConfigureAccessPoint">ConfigureAccessPoint</a></code> | <code>string</code> | [Write] private-networks:ConfigureAccessPoint. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.CreateNetwork">CreateNetwork</a></code> | <code>string</code> | [Write] private-networks:CreateNetwork. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.CreateNetworkSite">CreateNetworkSite</a></code> | <code>string</code> | [Write] private-networks:CreateNetworkSite. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.DeactivateDeviceIdentifier">DeactivateDeviceIdentifier</a></code> | <code>string</code> | [Write] private-networks:DeactivateDeviceIdentifier. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.DeleteNetwork">DeleteNetwork</a></code> | <code>string</code> | [Write] private-networks:DeleteNetwork. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.DeleteNetworkSite">DeleteNetworkSite</a></code> | <code>string</code> | [Write] private-networks:DeleteNetworkSite. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListDeviceIdentifiers">ListDeviceIdentifiers</a></code> | <code>string</code> | [List] private-networks:ListDeviceIdentifiers. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListNetworkResources">ListNetworkResources</a></code> | <code>string</code> | [List] private-networks:ListNetworkResources. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListNetworks">ListNetworks</a></code> | <code>string</code> | [List] private-networks:ListNetworks. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListNetworkSites">ListNetworkSites</a></code> | <code>string</code> | [List] private-networks:ListNetworkSites. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListOrders">ListOrders</a></code> | <code>string</code> | [List] private-networks:ListOrders. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] private-networks:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.Ping">Ping</a></code> | <code>string</code> | [Read] private-networks:Ping. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.StartNetworkResourceUpdate">StartNetworkResourceUpdate</a></code> | <code>string</code> | [Write] private-networks:StartNetworkResourceUpdate. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] private-networks:TagResource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] private-networks:UntagResource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.UpdateNetworkSite">UpdateNetworkSite</a></code> | <code>string</code> | [Write] private-networks:UpdateNetworkSite. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksActions.property.UpdateNetworkSitePlan">UpdateNetworkSitePlan</a></code> | <code>string</code> | [Write] private-networks:UpdateNetworkSitePlan. |

---

##### `AcknowledgeOrderReceipt`<sup>Required</sup> <a name="AcknowledgeOrderReceipt" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AcknowledgeOrderReceipt"></a>

```typescript
public readonly AcknowledgeOrderReceipt: string;
```

- *Type:* string

[Write] private-networks:AcknowledgeOrderReceipt.

---

##### `actionGetDeviceIdentifier`<sup>Required</sup> <a name="actionGetDeviceIdentifier" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetDeviceIdentifier"></a>

```typescript
public readonly actionGetDeviceIdentifier: string;
```

- *Type:* string

[Read] private-networks:GetDeviceIdentifier.

---

##### `actionGetNetwork`<sup>Required</sup> <a name="actionGetNetwork" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetNetwork"></a>

```typescript
public readonly actionGetNetwork: string;
```

- *Type:* string

[Read] private-networks:GetNetwork.

---

##### `actionGetNetworkResource`<sup>Required</sup> <a name="actionGetNetworkResource" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetNetworkResource"></a>

```typescript
public readonly actionGetNetworkResource: string;
```

- *Type:* string

[Read] private-networks:GetNetworkResource.

---

##### `actionGetNetworkSite`<sup>Required</sup> <a name="actionGetNetworkSite" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetNetworkSite"></a>

```typescript
public readonly actionGetNetworkSite: string;
```

- *Type:* string

[Read] private-networks:GetNetworkSite.

---

##### `actionGetOrder`<sup>Required</sup> <a name="actionGetOrder" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.actionGetOrder"></a>

```typescript
public readonly actionGetOrder: string;
```

- *Type:* string

[Read] private-networks:GetOrder.

---

##### `ActivateDeviceIdentifier`<sup>Required</sup> <a name="ActivateDeviceIdentifier" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ActivateDeviceIdentifier"></a>

```typescript
public readonly ActivateDeviceIdentifier: string;
```

- *Type:* string

[Write] private-networks:ActivateDeviceIdentifier.

---

##### `ActivateNetworkSite`<sup>Required</sup> <a name="ActivateNetworkSite" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ActivateNetworkSite"></a>

```typescript
public readonly ActivateNetworkSite: string;
```

- *Type:* string

[Write] private-networks:ActivateNetworkSite.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConfigureAccessPoint`<sup>Required</sup> <a name="ConfigureAccessPoint" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ConfigureAccessPoint"></a>

```typescript
public readonly ConfigureAccessPoint: string;
```

- *Type:* string

[Write] private-networks:ConfigureAccessPoint.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string;
```

- *Type:* string

[Write] private-networks:CreateNetwork.

---

##### `CreateNetworkSite`<sup>Required</sup> <a name="CreateNetworkSite" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.CreateNetworkSite"></a>

```typescript
public readonly CreateNetworkSite: string;
```

- *Type:* string

[Write] private-networks:CreateNetworkSite.

---

##### `DeactivateDeviceIdentifier`<sup>Required</sup> <a name="DeactivateDeviceIdentifier" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.DeactivateDeviceIdentifier"></a>

```typescript
public readonly DeactivateDeviceIdentifier: string;
```

- *Type:* string

[Write] private-networks:DeactivateDeviceIdentifier.

---

##### `DeleteNetwork`<sup>Required</sup> <a name="DeleteNetwork" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.DeleteNetwork"></a>

```typescript
public readonly DeleteNetwork: string;
```

- *Type:* string

[Write] private-networks:DeleteNetwork.

---

##### `DeleteNetworkSite`<sup>Required</sup> <a name="DeleteNetworkSite" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.DeleteNetworkSite"></a>

```typescript
public readonly DeleteNetworkSite: string;
```

- *Type:* string

[Write] private-networks:DeleteNetworkSite.

---

##### `ListDeviceIdentifiers`<sup>Required</sup> <a name="ListDeviceIdentifiers" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListDeviceIdentifiers"></a>

```typescript
public readonly ListDeviceIdentifiers: string;
```

- *Type:* string

[List] private-networks:ListDeviceIdentifiers.

---

##### `ListNetworkResources`<sup>Required</sup> <a name="ListNetworkResources" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListNetworkResources"></a>

```typescript
public readonly ListNetworkResources: string;
```

- *Type:* string

[List] private-networks:ListNetworkResources.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string;
```

- *Type:* string

[List] private-networks:ListNetworks.

---

##### `ListNetworkSites`<sup>Required</sup> <a name="ListNetworkSites" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListNetworkSites"></a>

```typescript
public readonly ListNetworkSites: string;
```

- *Type:* string

[List] private-networks:ListNetworkSites.

---

##### `ListOrders`<sup>Required</sup> <a name="ListOrders" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListOrders"></a>

```typescript
public readonly ListOrders: string;
```

- *Type:* string

[List] private-networks:ListOrders.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] private-networks:ListTagsForResource.

---

##### `Ping`<sup>Required</sup> <a name="Ping" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.Ping"></a>

```typescript
public readonly Ping: string;
```

- *Type:* string

[Read] private-networks:Ping.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartNetworkResourceUpdate`<sup>Required</sup> <a name="StartNetworkResourceUpdate" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.StartNetworkResourceUpdate"></a>

```typescript
public readonly StartNetworkResourceUpdate: string;
```

- *Type:* string

[Write] private-networks:StartNetworkResourceUpdate.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] private-networks:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] private-networks:UntagResource.

---

##### `UpdateNetworkSite`<sup>Required</sup> <a name="UpdateNetworkSite" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.UpdateNetworkSite"></a>

```typescript
public readonly UpdateNetworkSite: string;
```

- *Type:* string

[Write] private-networks:UpdateNetworkSite.

---

##### `UpdateNetworkSitePlan`<sup>Required</sup> <a name="UpdateNetworkSitePlan" id="@cdk_utils/iam.private_networks.PrivateNetworksActions.property.UpdateNetworkSitePlan"></a>

```typescript
public readonly UpdateNetworkSitePlan: string;
```

- *Type:* string

[Write] private-networks:UpdateNetworkSitePlan.

---

### PrivateNetworksConditions <a name="PrivateNetworksConditions" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions"></a>

Condition key constants and builders for private-networks.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

new private_networks.PrivateNetworksConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.requestTag"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.resourceTag"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.tagKeys"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetDeviceIdentifierConditionKeys">actionGetDeviceIdentifierConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDeviceIdentifier action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetNetworkConditionKeys">actionGetNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetNetwork action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetNetworkResourceConditionKeys">actionGetNetworkResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetNetworkResource action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetNetworkSiteConditionKeys">actionGetNetworkSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetNetworkSite action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetOrderConditionKeys">actionGetOrderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetOrder action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.ActivateDeviceIdentifierConditionKeys">ActivateDeviceIdentifierConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ActivateDeviceIdentifier action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.ActivateNetworkSiteConditionKeys">ActivateNetworkSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ActivateNetworkSite action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.CreateNetworkConditionKeys">CreateNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetwork action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.CreateNetworkSiteConditionKeys">CreateNetworkSiteConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetworkSite action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.StartNetworkResourceUpdateConditionKeys">StartNetworkResourceUpdateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartNetworkResourceUpdate action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetDeviceIdentifierConditionKeys`<sup>Required</sup> <a name="actionGetDeviceIdentifierConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetDeviceIdentifierConditionKeys"></a>

```typescript
public readonly actionGetDeviceIdentifierConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDeviceIdentifier action.

---

##### `actionGetNetworkConditionKeys`<sup>Required</sup> <a name="actionGetNetworkConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetNetworkConditionKeys"></a>

```typescript
public readonly actionGetNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetNetwork action.

---

##### `actionGetNetworkResourceConditionKeys`<sup>Required</sup> <a name="actionGetNetworkResourceConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetNetworkResourceConditionKeys"></a>

```typescript
public readonly actionGetNetworkResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetNetworkResource action.

---

##### `actionGetNetworkSiteConditionKeys`<sup>Required</sup> <a name="actionGetNetworkSiteConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetNetworkSiteConditionKeys"></a>

```typescript
public readonly actionGetNetworkSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetNetworkSite action.

---

##### `actionGetOrderConditionKeys`<sup>Required</sup> <a name="actionGetOrderConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.actionGetOrderConditionKeys"></a>

```typescript
public readonly actionGetOrderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetOrder action.

---

##### `ActivateDeviceIdentifierConditionKeys`<sup>Required</sup> <a name="ActivateDeviceIdentifierConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.ActivateDeviceIdentifierConditionKeys"></a>

```typescript
public readonly ActivateDeviceIdentifierConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ActivateDeviceIdentifier action.

---

##### `ActivateNetworkSiteConditionKeys`<sup>Required</sup> <a name="ActivateNetworkSiteConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.ActivateNetworkSiteConditionKeys"></a>

```typescript
public readonly ActivateNetworkSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ActivateNetworkSite action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateNetworkConditionKeys`<sup>Required</sup> <a name="CreateNetworkConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.CreateNetworkConditionKeys"></a>

```typescript
public readonly CreateNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetwork action.

---

##### `CreateNetworkSiteConditionKeys`<sup>Required</sup> <a name="CreateNetworkSiteConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.CreateNetworkSiteConditionKeys"></a>

```typescript
public readonly CreateNetworkSiteConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetworkSite action.

---

##### `StartNetworkResourceUpdateConditionKeys`<sup>Required</sup> <a name="StartNetworkResourceUpdateConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.StartNetworkResourceUpdateConditionKeys"></a>

```typescript
public readonly StartNetworkResourceUpdateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartNetworkResourceUpdate action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.private_networks.PrivateNetworksConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PrivateNetworksResources <a name="PrivateNetworksResources" id="@cdk_utils/iam.private_networks.PrivateNetworksResources"></a>

ARN builders, validators, and parsers for private-networks resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.Initializer"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

new private_networks.PrivateNetworksResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.deviceIdentifier">deviceIdentifier</a></code> | Builds an ARN for the device-identifier resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidDeviceIdentifierArn">isValidDeviceIdentifierArn</a></code> | Validates whether a string is a valid ARN for the device-identifier resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkArn">isValidNetworkArn</a></code> | Validates whether a string is a valid ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkResourceArn">isValidNetworkResourceArn</a></code> | Validates whether a string is a valid ARN for the network-resource resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkSiteArn">isValidNetworkSiteArn</a></code> | Validates whether a string is a valid ARN for the network-site resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidOrderArn">isValidOrderArn</a></code> | Validates whether a string is a valid ARN for the order resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.network">network</a></code> | Builds an ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.networkResource">networkResource</a></code> | Builds an ARN for the network-resource resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.networkSite">networkSite</a></code> | Builds an ARN for the network-site resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.order">order</a></code> | Builds an ARN for the order resource. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.parseDeviceIdentifierArn">parseDeviceIdentifierArn</a></code> | Parses a device-identifier ARN into its components. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkArn">parseNetworkArn</a></code> | Parses a network ARN into its components. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkResourceArn">parseNetworkResourceArn</a></code> | Parses a network-resource ARN into its components. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkSiteArn">parseNetworkSiteArn</a></code> | Parses a network-site ARN into its components. |
| <code><a href="#@cdk_utils/iam.private_networks.PrivateNetworksResources.parseOrderArn">parseOrderArn</a></code> | Parses a order ARN into its components. |

---

##### `deviceIdentifier` <a name="deviceIdentifier" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.deviceIdentifier"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.deviceIdentifier(props: PrivateNetworksDeviceIdentifierArnProps)
```

Builds an ARN for the device-identifier resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.deviceIdentifier.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.private_networks.PrivateNetworksDeviceIdentifierArnProps">PrivateNetworksDeviceIdentifierArnProps</a>

---

##### `isValidDeviceIdentifierArn` <a name="isValidDeviceIdentifierArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidDeviceIdentifierArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.isValidDeviceIdentifierArn(arn: string)
```

Validates whether a string is a valid ARN for the device-identifier resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidDeviceIdentifierArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkArn` <a name="isValidNetworkArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.isValidNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkResourceArn` <a name="isValidNetworkResourceArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkResourceArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.isValidNetworkResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the network-resource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkSiteArn` <a name="isValidNetworkSiteArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkSiteArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.isValidNetworkSiteArn(arn: string)
```

Validates whether a string is a valid ARN for the network-site resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidNetworkSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOrderArn` <a name="isValidOrderArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidOrderArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.isValidOrderArn(arn: string)
```

Validates whether a string is a valid ARN for the order resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.isValidOrderArn.parameter.arn"></a>

- *Type:* string

---

##### `network` <a name="network" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.network"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.network(props: PrivateNetworksNetworkArnProps)
```

Builds an ARN for the network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.network.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkArnProps">PrivateNetworksNetworkArnProps</a>

---

##### `networkResource` <a name="networkResource" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.networkResource"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.networkResource(props: PrivateNetworksNetworkResourceArnProps)
```

Builds an ARN for the network-resource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.networkResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkResourceArnProps">PrivateNetworksNetworkResourceArnProps</a>

---

##### `networkSite` <a name="networkSite" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.networkSite"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.networkSite(props: PrivateNetworksNetworkSiteArnProps)
```

Builds an ARN for the network-site resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.networkSite.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.private_networks.PrivateNetworksNetworkSiteArnProps">PrivateNetworksNetworkSiteArnProps</a>

---

##### `order` <a name="order" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.order"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.order(props: PrivateNetworksOrderArnProps)
```

Builds an ARN for the order resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.order.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.private_networks.PrivateNetworksOrderArnProps">PrivateNetworksOrderArnProps</a>

---

##### `parseDeviceIdentifierArn` <a name="parseDeviceIdentifierArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseDeviceIdentifierArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.parseDeviceIdentifierArn(arn: string)
```

Parses a device-identifier ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseDeviceIdentifierArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkArn` <a name="parseNetworkArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.parseNetworkArn(arn: string)
```

Parses a network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkResourceArn` <a name="parseNetworkResourceArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkResourceArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.parseNetworkResourceArn(arn: string)
```

Parses a network-resource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkSiteArn` <a name="parseNetworkSiteArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkSiteArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.parseNetworkSiteArn(arn: string)
```

Parses a network-site ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseNetworkSiteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOrderArn` <a name="parseOrderArn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseOrderArn"></a>

```typescript
import { private_networks } from '@cdk_utils/iam'

private_networks.PrivateNetworksResources.parseOrderArn(arn: string)
```

Parses a order ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.private_networks.PrivateNetworksResources.parseOrderArn.parameter.arn"></a>

- *Type:* string

---




