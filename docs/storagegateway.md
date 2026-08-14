# `storagegateway` Submodule <a name="`storagegateway` Submodule" id="@cdk_utils/iam.storagegateway"></a>


## Structs <a name="Structs" id="Structs"></a>

### StorageGatewayCacheReportArnComponents <a name="StorageGatewayCacheReportArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents"></a>

Parsed components of a cache-report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayCacheReportArnComponents: storagegateway.StorageGatewayCacheReportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.cacheReportId">cacheReportId</a></code> | <code>string</code> | The CacheReportId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.shareId">shareId</a></code> | <code>string</code> | The ShareId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cacheReportId`<sup>Required</sup> <a name="cacheReportId" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.cacheReportId"></a>

```typescript
public readonly cacheReportId: string;
```

- *Type:* string

The CacheReportId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnComponents.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

The ShareId component.

---

### StorageGatewayCacheReportArnProps <a name="StorageGatewayCacheReportArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps"></a>

Properties for building a cache-report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayCacheReportArnProps: storagegateway.StorageGatewayCacheReportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.cacheReportId">cacheReportId</a></code> | <code>string</code> | The CacheReportId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.shareId">shareId</a></code> | <code>string</code> | The ShareId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cacheReportId`<sup>Required</sup> <a name="cacheReportId" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.cacheReportId"></a>

```typescript
public readonly cacheReportId: string;
```

- *Type:* string

The CacheReportId component of the ARN.

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

The ShareId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayDeviceArnComponents <a name="StorageGatewayDeviceArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents"></a>

Parsed components of a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayDeviceArnComponents: storagegateway.StorageGatewayDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.vtldevice">vtldevice</a></code> | <code>string</code> | The Vtldevice component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vtldevice`<sup>Required</sup> <a name="vtldevice" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnComponents.property.vtldevice"></a>

```typescript
public readonly vtldevice: string;
```

- *Type:* string

The Vtldevice component.

---

### StorageGatewayDeviceArnProps <a name="StorageGatewayDeviceArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps"></a>

Properties for building a device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayDeviceArnProps: storagegateway.StorageGatewayDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.vtldevice">vtldevice</a></code> | <code>string</code> | The Vtldevice component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `vtldevice`<sup>Required</sup> <a name="vtldevice" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.vtldevice"></a>

```typescript
public readonly vtldevice: string;
```

- *Type:* string

The Vtldevice component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayFsAssociationArnComponents <a name="StorageGatewayFsAssociationArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents"></a>

Parsed components of a fs-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayFsAssociationArnComponents: storagegateway.StorageGatewayFsAssociationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.fsaId">fsaId</a></code> | <code>string</code> | The FsaId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fsaId`<sup>Required</sup> <a name="fsaId" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.fsaId"></a>

```typescript
public readonly fsaId: string;
```

- *Type:* string

The FsaId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### StorageGatewayFsAssociationArnProps <a name="StorageGatewayFsAssociationArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps"></a>

Properties for building a fs-association ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayFsAssociationArnProps: storagegateway.StorageGatewayFsAssociationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.fsaId">fsaId</a></code> | <code>string</code> | The FsaId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fsaId`<sup>Required</sup> <a name="fsaId" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.fsaId"></a>

```typescript
public readonly fsaId: string;
```

- *Type:* string

The FsaId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayGatewayArnComponents <a name="StorageGatewayGatewayArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents"></a>

Parsed components of a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayGatewayArnComponents: storagegateway.StorageGatewayGatewayArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### StorageGatewayGatewayArnProps <a name="StorageGatewayGatewayArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps"></a>

Properties for building a gateway ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayGatewayArnProps: storagegateway.StorageGatewayGatewayArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayShareArnComponents <a name="StorageGatewayShareArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents"></a>

Parsed components of a share ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayShareArnComponents: storagegateway.StorageGatewayShareArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.shareId">shareId</a></code> | <code>string</code> | The ShareId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnComponents.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

The ShareId component.

---

### StorageGatewayShareArnProps <a name="StorageGatewayShareArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps"></a>

Properties for building a share ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayShareArnProps: storagegateway.StorageGatewayShareArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.shareId">shareId</a></code> | <code>string</code> | The ShareId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `shareId`<sup>Required</sup> <a name="shareId" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.shareId"></a>

```typescript
public readonly shareId: string;
```

- *Type:* string

The ShareId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayTapeArnComponents <a name="StorageGatewayTapeArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents"></a>

Parsed components of a tape ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayTapeArnComponents: storagegateway.StorageGatewayTapeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.tapeBarcode">tapeBarcode</a></code> | <code>string</code> | The TapeBarcode component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `tapeBarcode`<sup>Required</sup> <a name="tapeBarcode" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnComponents.property.tapeBarcode"></a>

```typescript
public readonly tapeBarcode: string;
```

- *Type:* string

The TapeBarcode component.

---

### StorageGatewayTapeArnProps <a name="StorageGatewayTapeArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps"></a>

Properties for building a tape ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayTapeArnProps: storagegateway.StorageGatewayTapeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.tapeBarcode">tapeBarcode</a></code> | <code>string</code> | The TapeBarcode component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `tapeBarcode`<sup>Required</sup> <a name="tapeBarcode" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.tapeBarcode"></a>

```typescript
public readonly tapeBarcode: string;
```

- *Type:* string

The TapeBarcode component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayTapepoolArnComponents <a name="StorageGatewayTapepoolArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents"></a>

Parsed components of a tapepool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayTapepoolArnComponents: storagegateway.StorageGatewayTapepoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.poolId">poolId</a></code> | <code>string</code> | The PoolId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The PoolId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### StorageGatewayTapepoolArnProps <a name="StorageGatewayTapepoolArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps"></a>

Properties for building a tapepool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayTapepoolArnProps: storagegateway.StorageGatewayTapepoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.poolId">poolId</a></code> | <code>string</code> | The PoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

The PoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayTargetArnComponents <a name="StorageGatewayTargetArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents"></a>

Parsed components of a target ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayTargetArnComponents: storagegateway.StorageGatewayTargetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.iscsiTarget">iscsiTarget</a></code> | <code>string</code> | The IscsiTarget component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `iscsiTarget`<sup>Required</sup> <a name="iscsiTarget" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.iscsiTarget"></a>

```typescript
public readonly iscsiTarget: string;
```

- *Type:* string

The IscsiTarget component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### StorageGatewayTargetArnProps <a name="StorageGatewayTargetArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps"></a>

Properties for building a target ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayTargetArnProps: storagegateway.StorageGatewayTargetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.iscsiTarget">iscsiTarget</a></code> | <code>string</code> | The IscsiTarget component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `iscsiTarget`<sup>Required</sup> <a name="iscsiTarget" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.iscsiTarget"></a>

```typescript
public readonly iscsiTarget: string;
```

- *Type:* string

The IscsiTarget component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### StorageGatewayVolumeArnComponents <a name="StorageGatewayVolumeArnComponents" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents"></a>

Parsed components of a volume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayVolumeArnComponents: storagegateway.StorageGatewayVolumeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnComponents.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component.

---

### StorageGatewayVolumeArnProps <a name="StorageGatewayVolumeArnProps" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps"></a>

Properties for building a volume ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

const storageGatewayVolumeArnProps: storagegateway.StorageGatewayVolumeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.gatewayId">gatewayId</a></code> | <code>string</code> | The GatewayId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.volumeId">volumeId</a></code> | <code>string</code> | The VolumeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

The GatewayId component of the ARN.

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.volumeId"></a>

```typescript
public readonly volumeId: string;
```

- *Type:* string

The VolumeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### StorageGatewayActions <a name="StorageGatewayActions" id="@cdk_utils/iam.storagegateway.StorageGatewayActions"></a>

IAM action constants for the storagegateway service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

new storagegateway.StorageGatewayActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.actionSetLocalConsolePassword">actionSetLocalConsolePassword</a></code> | <code>string</code> | [Write] storagegateway:SetLocalConsolePassword. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.actionSetSMBGuestPassword">actionSetSMBGuestPassword</a></code> | <code>string</code> | [Write] storagegateway:SetSMBGuestPassword. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ActivateGateway">ActivateGateway</a></code> | <code>string</code> | [Write] storagegateway:ActivateGateway. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddCache">AddCache</a></code> | <code>string</code> | [Write] storagegateway:AddCache. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string</code> | [Tagging] storagegateway:AddTagsToResource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddUploadBuffer">AddUploadBuffer</a></code> | <code>string</code> | [Write] storagegateway:AddUploadBuffer. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddWorkingStorage">AddWorkingStorage</a></code> | <code>string</code> | [Write] storagegateway:AddWorkingStorage. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AssignTapePool">AssignTapePool</a></code> | <code>string</code> | [Write] storagegateway:AssignTapePool. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AssociateFileSystem">AssociateFileSystem</a></code> | <code>string</code> | [Write] storagegateway:AssociateFileSystem. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AttachVolume">AttachVolume</a></code> | <code>string</code> | [Write] storagegateway:AttachVolume. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.BypassGovernanceRetention">BypassGovernanceRetention</a></code> | <code>string</code> | [Write] storagegateway:BypassGovernanceRetention. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CancelArchival">CancelArchival</a></code> | <code>string</code> | [Write] storagegateway:CancelArchival. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CancelCacheReport">CancelCacheReport</a></code> | <code>string</code> | [Write] storagegateway:CancelCacheReport. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CancelRetrieval">CancelRetrieval</a></code> | <code>string</code> | [Write] storagegateway:CancelRetrieval. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateCachediSCSIVolume">CreateCachediSCSIVolume</a></code> | <code>string</code> | [Write] storagegateway:CreateCachediSCSIVolume. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateNFSFileShare">CreateNFSFileShare</a></code> | <code>string</code> | [Write] storagegateway:CreateNFSFileShare. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateSMBFileShare">CreateSMBFileShare</a></code> | <code>string</code> | [Write] storagegateway:CreateSMBFileShare. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string</code> | [Write] storagegateway:CreateSnapshot. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateSnapshotFromVolumeRecoveryPoint">CreateSnapshotFromVolumeRecoveryPoint</a></code> | <code>string</code> | [Write] storagegateway:CreateSnapshotFromVolumeRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateStorediSCSIVolume">CreateStorediSCSIVolume</a></code> | <code>string</code> | [Write] storagegateway:CreateStorediSCSIVolume. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateTapePool">CreateTapePool</a></code> | <code>string</code> | [Write] storagegateway:CreateTapePool. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateTapes">CreateTapes</a></code> | <code>string</code> | [Write] storagegateway:CreateTapes. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateTapeWithBarcode">CreateTapeWithBarcode</a></code> | <code>string</code> | [Write] storagegateway:CreateTapeWithBarcode. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteAutomaticTapeCreationPolicy">DeleteAutomaticTapeCreationPolicy</a></code> | <code>string</code> | [Write] storagegateway:DeleteAutomaticTapeCreationPolicy. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteBandwidthRateLimit">DeleteBandwidthRateLimit</a></code> | <code>string</code> | [Write] storagegateway:DeleteBandwidthRateLimit. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteCacheReport">DeleteCacheReport</a></code> | <code>string</code> | [Write] storagegateway:DeleteCacheReport. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteChapCredentials">DeleteChapCredentials</a></code> | <code>string</code> | [Write] storagegateway:DeleteChapCredentials. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteFileShare">DeleteFileShare</a></code> | <code>string</code> | [Write] storagegateway:DeleteFileShare. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteGateway">DeleteGateway</a></code> | <code>string</code> | [Write] storagegateway:DeleteGateway. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteSnapshotSchedule">DeleteSnapshotSchedule</a></code> | <code>string</code> | [Write] storagegateway:DeleteSnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteTape">DeleteTape</a></code> | <code>string</code> | [Write] storagegateway:DeleteTape. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteTapeArchive">DeleteTapeArchive</a></code> | <code>string</code> | [Write] storagegateway:DeleteTapeArchive. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteTapePool">DeleteTapePool</a></code> | <code>string</code> | [Write] storagegateway:DeleteTapePool. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteVolume">DeleteVolume</a></code> | <code>string</code> | [Write] storagegateway:DeleteVolume. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeAvailabilityMonitorTest">DescribeAvailabilityMonitorTest</a></code> | <code>string</code> | [Read] storagegateway:DescribeAvailabilityMonitorTest. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeBandwidthRateLimit">DescribeBandwidthRateLimit</a></code> | <code>string</code> | [Read] storagegateway:DescribeBandwidthRateLimit. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeBandwidthRateLimitSchedule">DescribeBandwidthRateLimitSchedule</a></code> | <code>string</code> | [Read] storagegateway:DescribeBandwidthRateLimitSchedule. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeCache">DescribeCache</a></code> | <code>string</code> | [Read] storagegateway:DescribeCache. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeCachediSCSIVolumes">DescribeCachediSCSIVolumes</a></code> | <code>string</code> | [Read] storagegateway:DescribeCachediSCSIVolumes. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeCacheReport">DescribeCacheReport</a></code> | <code>string</code> | [Read] storagegateway:DescribeCacheReport. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeChapCredentials">DescribeChapCredentials</a></code> | <code>string</code> | [Read] storagegateway:DescribeChapCredentials. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeFileSystemAssociations">DescribeFileSystemAssociations</a></code> | <code>string</code> | [Read] storagegateway:DescribeFileSystemAssociations. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeGatewayInformation">DescribeGatewayInformation</a></code> | <code>string</code> | [Read] storagegateway:DescribeGatewayInformation. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeMaintenanceStartTime">DescribeMaintenanceStartTime</a></code> | <code>string</code> | [Read] storagegateway:DescribeMaintenanceStartTime. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeNFSFileShares">DescribeNFSFileShares</a></code> | <code>string</code> | [Read] storagegateway:DescribeNFSFileShares. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeSMBFileShares">DescribeSMBFileShares</a></code> | <code>string</code> | [Read] storagegateway:DescribeSMBFileShares. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeSMBSettings">DescribeSMBSettings</a></code> | <code>string</code> | [Read] storagegateway:DescribeSMBSettings. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeSnapshotSchedule">DescribeSnapshotSchedule</a></code> | <code>string</code> | [Read] storagegateway:DescribeSnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeStorediSCSIVolumes">DescribeStorediSCSIVolumes</a></code> | <code>string</code> | [Read] storagegateway:DescribeStorediSCSIVolumes. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeTapeArchives">DescribeTapeArchives</a></code> | <code>string</code> | [Read] storagegateway:DescribeTapeArchives. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeTapeRecoveryPoints">DescribeTapeRecoveryPoints</a></code> | <code>string</code> | [Read] storagegateway:DescribeTapeRecoveryPoints. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeTapes">DescribeTapes</a></code> | <code>string</code> | [Read] storagegateway:DescribeTapes. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeUploadBuffer">DescribeUploadBuffer</a></code> | <code>string</code> | [Read] storagegateway:DescribeUploadBuffer. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeVTLDevices">DescribeVTLDevices</a></code> | <code>string</code> | [Read] storagegateway:DescribeVTLDevices. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeWorkingStorage">DescribeWorkingStorage</a></code> | <code>string</code> | [Read] storagegateway:DescribeWorkingStorage. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DetachVolume">DetachVolume</a></code> | <code>string</code> | [Write] storagegateway:DetachVolume. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DisableGateway">DisableGateway</a></code> | <code>string</code> | [Write] storagegateway:DisableGateway. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DisassociateFileSystem">DisassociateFileSystem</a></code> | <code>string</code> | [Write] storagegateway:DisassociateFileSystem. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.EvictFilesFailingUpload">EvictFilesFailingUpload</a></code> | <code>string</code> | [Write] storagegateway:EvictFilesFailingUpload. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.JoinDomain">JoinDomain</a></code> | <code>string</code> | [Write] storagegateway:JoinDomain. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListAutomaticTapeCreationPolicies">ListAutomaticTapeCreationPolicies</a></code> | <code>string</code> | [List] storagegateway:ListAutomaticTapeCreationPolicies. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListCacheReports">ListCacheReports</a></code> | <code>string</code> | [List] storagegateway:ListCacheReports. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListFileShares">ListFileShares</a></code> | <code>string</code> | [List] storagegateway:ListFileShares. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListFileSystemAssociations">ListFileSystemAssociations</a></code> | <code>string</code> | [List] storagegateway:ListFileSystemAssociations. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListGateways">ListGateways</a></code> | <code>string</code> | [List] storagegateway:ListGateways. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListLocalDisks">ListLocalDisks</a></code> | <code>string</code> | [List] storagegateway:ListLocalDisks. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] storagegateway:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListTapePools">ListTapePools</a></code> | <code>string</code> | [List] storagegateway:ListTapePools. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListTapes">ListTapes</a></code> | <code>string</code> | [List] storagegateway:ListTapes. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListVolumeInitiators">ListVolumeInitiators</a></code> | <code>string</code> | [List] storagegateway:ListVolumeInitiators. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListVolumeRecoveryPoints">ListVolumeRecoveryPoints</a></code> | <code>string</code> | [List] storagegateway:ListVolumeRecoveryPoints. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListVolumes">ListVolumes</a></code> | <code>string</code> | [List] storagegateway:ListVolumes. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.NotifyWhenUploaded">NotifyWhenUploaded</a></code> | <code>string</code> | [Write] storagegateway:NotifyWhenUploaded. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RefreshCache">RefreshCache</a></code> | <code>string</code> | [Write] storagegateway:RefreshCache. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string</code> | [Tagging] storagegateway:RemoveTagsFromResource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ResetCache">ResetCache</a></code> | <code>string</code> | [Write] storagegateway:ResetCache. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RetrieveTapeArchive">RetrieveTapeArchive</a></code> | <code>string</code> | [Write] storagegateway:RetrieveTapeArchive. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RetrieveTapeRecoveryPoint">RetrieveTapeRecoveryPoint</a></code> | <code>string</code> | [Write] storagegateway:RetrieveTapeRecoveryPoint. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ShutdownGateway">ShutdownGateway</a></code> | <code>string</code> | [Write] storagegateway:ShutdownGateway. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.StartAvailabilityMonitorTest">StartAvailabilityMonitorTest</a></code> | <code>string</code> | [Write] storagegateway:StartAvailabilityMonitorTest. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.StartCacheReport">StartCacheReport</a></code> | <code>string</code> | [Write] storagegateway:StartCacheReport. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.StartGateway">StartGateway</a></code> | <code>string</code> | [Write] storagegateway:StartGateway. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateAutomaticTapeCreationPolicy">UpdateAutomaticTapeCreationPolicy</a></code> | <code>string</code> | [Write] storagegateway:UpdateAutomaticTapeCreationPolicy. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateBandwidthRateLimit">UpdateBandwidthRateLimit</a></code> | <code>string</code> | [Write] storagegateway:UpdateBandwidthRateLimit. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateBandwidthRateLimitSchedule">UpdateBandwidthRateLimitSchedule</a></code> | <code>string</code> | [Write] storagegateway:UpdateBandwidthRateLimitSchedule. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateChapCredentials">UpdateChapCredentials</a></code> | <code>string</code> | [Write] storagegateway:UpdateChapCredentials. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateFileSystemAssociation">UpdateFileSystemAssociation</a></code> | <code>string</code> | [Write] storagegateway:UpdateFileSystemAssociation. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateGatewayInformation">UpdateGatewayInformation</a></code> | <code>string</code> | [Write] storagegateway:UpdateGatewayInformation. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateGatewaySoftwareNow">UpdateGatewaySoftwareNow</a></code> | <code>string</code> | [Write] storagegateway:UpdateGatewaySoftwareNow. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateMaintenanceStartTime">UpdateMaintenanceStartTime</a></code> | <code>string</code> | [Write] storagegateway:UpdateMaintenanceStartTime. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateNFSFileShare">UpdateNFSFileShare</a></code> | <code>string</code> | [Write] storagegateway:UpdateNFSFileShare. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBFileShare">UpdateSMBFileShare</a></code> | <code>string</code> | [Write] storagegateway:UpdateSMBFileShare. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBFileShareVisibility">UpdateSMBFileShareVisibility</a></code> | <code>string</code> | [Write] storagegateway:UpdateSMBFileShareVisibility. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBLocalGroups">UpdateSMBLocalGroups</a></code> | <code>string</code> | [Write] storagegateway:UpdateSMBLocalGroups. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBSecurityStrategy">UpdateSMBSecurityStrategy</a></code> | <code>string</code> | [Write] storagegateway:UpdateSMBSecurityStrategy. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSnapshotSchedule">UpdateSnapshotSchedule</a></code> | <code>string</code> | [Write] storagegateway:UpdateSnapshotSchedule. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateVTLDeviceType">UpdateVTLDeviceType</a></code> | <code>string</code> | [Write] storagegateway:UpdateVTLDeviceType. |

---

##### `actionSetLocalConsolePassword`<sup>Required</sup> <a name="actionSetLocalConsolePassword" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.actionSetLocalConsolePassword"></a>

```typescript
public readonly actionSetLocalConsolePassword: string;
```

- *Type:* string

[Write] storagegateway:SetLocalConsolePassword.

---

##### `actionSetSMBGuestPassword`<sup>Required</sup> <a name="actionSetSMBGuestPassword" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.actionSetSMBGuestPassword"></a>

```typescript
public readonly actionSetSMBGuestPassword: string;
```

- *Type:* string

[Write] storagegateway:SetSMBGuestPassword.

---

##### `ActivateGateway`<sup>Required</sup> <a name="ActivateGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ActivateGateway"></a>

```typescript
public readonly ActivateGateway: string;
```

- *Type:* string

[Write] storagegateway:ActivateGateway.

---

##### `AddCache`<sup>Required</sup> <a name="AddCache" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddCache"></a>

```typescript
public readonly AddCache: string;
```

- *Type:* string

[Write] storagegateway:AddCache.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string;
```

- *Type:* string

[Tagging] storagegateway:AddTagsToResource.

---

##### `AddUploadBuffer`<sup>Required</sup> <a name="AddUploadBuffer" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddUploadBuffer"></a>

```typescript
public readonly AddUploadBuffer: string;
```

- *Type:* string

[Write] storagegateway:AddUploadBuffer.

---

##### `AddWorkingStorage`<sup>Required</sup> <a name="AddWorkingStorage" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AddWorkingStorage"></a>

```typescript
public readonly AddWorkingStorage: string;
```

- *Type:* string

[Write] storagegateway:AddWorkingStorage.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssignTapePool`<sup>Required</sup> <a name="AssignTapePool" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AssignTapePool"></a>

```typescript
public readonly AssignTapePool: string;
```

- *Type:* string

[Write] storagegateway:AssignTapePool.

---

##### `AssociateFileSystem`<sup>Required</sup> <a name="AssociateFileSystem" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AssociateFileSystem"></a>

```typescript
public readonly AssociateFileSystem: string;
```

- *Type:* string

[Write] storagegateway:AssociateFileSystem.

---

##### `AttachVolume`<sup>Required</sup> <a name="AttachVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.AttachVolume"></a>

```typescript
public readonly AttachVolume: string;
```

- *Type:* string

[Write] storagegateway:AttachVolume.

---

##### `BypassGovernanceRetention`<sup>Required</sup> <a name="BypassGovernanceRetention" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.BypassGovernanceRetention"></a>

```typescript
public readonly BypassGovernanceRetention: string;
```

- *Type:* string

[Write] storagegateway:BypassGovernanceRetention.

---

##### `CancelArchival`<sup>Required</sup> <a name="CancelArchival" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CancelArchival"></a>

```typescript
public readonly CancelArchival: string;
```

- *Type:* string

[Write] storagegateway:CancelArchival.

---

##### `CancelCacheReport`<sup>Required</sup> <a name="CancelCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CancelCacheReport"></a>

```typescript
public readonly CancelCacheReport: string;
```

- *Type:* string

[Write] storagegateway:CancelCacheReport.

---

##### `CancelRetrieval`<sup>Required</sup> <a name="CancelRetrieval" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CancelRetrieval"></a>

```typescript
public readonly CancelRetrieval: string;
```

- *Type:* string

[Write] storagegateway:CancelRetrieval.

---

##### `CreateCachediSCSIVolume`<sup>Required</sup> <a name="CreateCachediSCSIVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateCachediSCSIVolume"></a>

```typescript
public readonly CreateCachediSCSIVolume: string;
```

- *Type:* string

[Write] storagegateway:CreateCachediSCSIVolume.

---

##### `CreateNFSFileShare`<sup>Required</sup> <a name="CreateNFSFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateNFSFileShare"></a>

```typescript
public readonly CreateNFSFileShare: string;
```

- *Type:* string

[Write] storagegateway:CreateNFSFileShare.

---

##### `CreateSMBFileShare`<sup>Required</sup> <a name="CreateSMBFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateSMBFileShare"></a>

```typescript
public readonly CreateSMBFileShare: string;
```

- *Type:* string

[Write] storagegateway:CreateSMBFileShare.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string;
```

- *Type:* string

[Write] storagegateway:CreateSnapshot.

---

##### `CreateSnapshotFromVolumeRecoveryPoint`<sup>Required</sup> <a name="CreateSnapshotFromVolumeRecoveryPoint" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateSnapshotFromVolumeRecoveryPoint"></a>

```typescript
public readonly CreateSnapshotFromVolumeRecoveryPoint: string;
```

- *Type:* string

[Write] storagegateway:CreateSnapshotFromVolumeRecoveryPoint.

---

##### `CreateStorediSCSIVolume`<sup>Required</sup> <a name="CreateStorediSCSIVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateStorediSCSIVolume"></a>

```typescript
public readonly CreateStorediSCSIVolume: string;
```

- *Type:* string

[Write] storagegateway:CreateStorediSCSIVolume.

---

##### `CreateTapePool`<sup>Required</sup> <a name="CreateTapePool" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateTapePool"></a>

```typescript
public readonly CreateTapePool: string;
```

- *Type:* string

[Write] storagegateway:CreateTapePool.

---

##### `CreateTapes`<sup>Required</sup> <a name="CreateTapes" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateTapes"></a>

```typescript
public readonly CreateTapes: string;
```

- *Type:* string

[Write] storagegateway:CreateTapes.

---

##### `CreateTapeWithBarcode`<sup>Required</sup> <a name="CreateTapeWithBarcode" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.CreateTapeWithBarcode"></a>

```typescript
public readonly CreateTapeWithBarcode: string;
```

- *Type:* string

[Write] storagegateway:CreateTapeWithBarcode.

---

##### `DeleteAutomaticTapeCreationPolicy`<sup>Required</sup> <a name="DeleteAutomaticTapeCreationPolicy" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteAutomaticTapeCreationPolicy"></a>

```typescript
public readonly DeleteAutomaticTapeCreationPolicy: string;
```

- *Type:* string

[Write] storagegateway:DeleteAutomaticTapeCreationPolicy.

---

##### `DeleteBandwidthRateLimit`<sup>Required</sup> <a name="DeleteBandwidthRateLimit" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteBandwidthRateLimit"></a>

```typescript
public readonly DeleteBandwidthRateLimit: string;
```

- *Type:* string

[Write] storagegateway:DeleteBandwidthRateLimit.

---

##### `DeleteCacheReport`<sup>Required</sup> <a name="DeleteCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteCacheReport"></a>

```typescript
public readonly DeleteCacheReport: string;
```

- *Type:* string

[Write] storagegateway:DeleteCacheReport.

---

##### `DeleteChapCredentials`<sup>Required</sup> <a name="DeleteChapCredentials" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteChapCredentials"></a>

```typescript
public readonly DeleteChapCredentials: string;
```

- *Type:* string

[Write] storagegateway:DeleteChapCredentials.

---

##### `DeleteFileShare`<sup>Required</sup> <a name="DeleteFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteFileShare"></a>

```typescript
public readonly DeleteFileShare: string;
```

- *Type:* string

[Write] storagegateway:DeleteFileShare.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string;
```

- *Type:* string

[Write] storagegateway:DeleteGateway.

---

##### `DeleteSnapshotSchedule`<sup>Required</sup> <a name="DeleteSnapshotSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteSnapshotSchedule"></a>

```typescript
public readonly DeleteSnapshotSchedule: string;
```

- *Type:* string

[Write] storagegateway:DeleteSnapshotSchedule.

---

##### `DeleteTape`<sup>Required</sup> <a name="DeleteTape" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteTape"></a>

```typescript
public readonly DeleteTape: string;
```

- *Type:* string

[Write] storagegateway:DeleteTape.

---

##### `DeleteTapeArchive`<sup>Required</sup> <a name="DeleteTapeArchive" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteTapeArchive"></a>

```typescript
public readonly DeleteTapeArchive: string;
```

- *Type:* string

[Write] storagegateway:DeleteTapeArchive.

---

##### `DeleteTapePool`<sup>Required</sup> <a name="DeleteTapePool" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteTapePool"></a>

```typescript
public readonly DeleteTapePool: string;
```

- *Type:* string

[Write] storagegateway:DeleteTapePool.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string;
```

- *Type:* string

[Write] storagegateway:DeleteVolume.

---

##### `DescribeAvailabilityMonitorTest`<sup>Required</sup> <a name="DescribeAvailabilityMonitorTest" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeAvailabilityMonitorTest"></a>

```typescript
public readonly DescribeAvailabilityMonitorTest: string;
```

- *Type:* string

[Read] storagegateway:DescribeAvailabilityMonitorTest.

---

##### `DescribeBandwidthRateLimit`<sup>Required</sup> <a name="DescribeBandwidthRateLimit" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeBandwidthRateLimit"></a>

```typescript
public readonly DescribeBandwidthRateLimit: string;
```

- *Type:* string

[Read] storagegateway:DescribeBandwidthRateLimit.

---

##### `DescribeBandwidthRateLimitSchedule`<sup>Required</sup> <a name="DescribeBandwidthRateLimitSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeBandwidthRateLimitSchedule"></a>

```typescript
public readonly DescribeBandwidthRateLimitSchedule: string;
```

- *Type:* string

[Read] storagegateway:DescribeBandwidthRateLimitSchedule.

---

##### `DescribeCache`<sup>Required</sup> <a name="DescribeCache" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeCache"></a>

```typescript
public readonly DescribeCache: string;
```

- *Type:* string

[Read] storagegateway:DescribeCache.

---

##### `DescribeCachediSCSIVolumes`<sup>Required</sup> <a name="DescribeCachediSCSIVolumes" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeCachediSCSIVolumes"></a>

```typescript
public readonly DescribeCachediSCSIVolumes: string;
```

- *Type:* string

[Read] storagegateway:DescribeCachediSCSIVolumes.

---

##### `DescribeCacheReport`<sup>Required</sup> <a name="DescribeCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeCacheReport"></a>

```typescript
public readonly DescribeCacheReport: string;
```

- *Type:* string

[Read] storagegateway:DescribeCacheReport.

---

##### `DescribeChapCredentials`<sup>Required</sup> <a name="DescribeChapCredentials" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeChapCredentials"></a>

```typescript
public readonly DescribeChapCredentials: string;
```

- *Type:* string

[Read] storagegateway:DescribeChapCredentials.

---

##### `DescribeFileSystemAssociations`<sup>Required</sup> <a name="DescribeFileSystemAssociations" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeFileSystemAssociations"></a>

```typescript
public readonly DescribeFileSystemAssociations: string;
```

- *Type:* string

[Read] storagegateway:DescribeFileSystemAssociations.

---

##### `DescribeGatewayInformation`<sup>Required</sup> <a name="DescribeGatewayInformation" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeGatewayInformation"></a>

```typescript
public readonly DescribeGatewayInformation: string;
```

- *Type:* string

[Read] storagegateway:DescribeGatewayInformation.

---

##### `DescribeMaintenanceStartTime`<sup>Required</sup> <a name="DescribeMaintenanceStartTime" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeMaintenanceStartTime"></a>

```typescript
public readonly DescribeMaintenanceStartTime: string;
```

- *Type:* string

[Read] storagegateway:DescribeMaintenanceStartTime.

---

##### `DescribeNFSFileShares`<sup>Required</sup> <a name="DescribeNFSFileShares" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeNFSFileShares"></a>

```typescript
public readonly DescribeNFSFileShares: string;
```

- *Type:* string

[Read] storagegateway:DescribeNFSFileShares.

---

##### `DescribeSMBFileShares`<sup>Required</sup> <a name="DescribeSMBFileShares" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeSMBFileShares"></a>

```typescript
public readonly DescribeSMBFileShares: string;
```

- *Type:* string

[Read] storagegateway:DescribeSMBFileShares.

---

##### `DescribeSMBSettings`<sup>Required</sup> <a name="DescribeSMBSettings" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeSMBSettings"></a>

```typescript
public readonly DescribeSMBSettings: string;
```

- *Type:* string

[Read] storagegateway:DescribeSMBSettings.

---

##### `DescribeSnapshotSchedule`<sup>Required</sup> <a name="DescribeSnapshotSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeSnapshotSchedule"></a>

```typescript
public readonly DescribeSnapshotSchedule: string;
```

- *Type:* string

[Read] storagegateway:DescribeSnapshotSchedule.

---

##### `DescribeStorediSCSIVolumes`<sup>Required</sup> <a name="DescribeStorediSCSIVolumes" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeStorediSCSIVolumes"></a>

```typescript
public readonly DescribeStorediSCSIVolumes: string;
```

- *Type:* string

[Read] storagegateway:DescribeStorediSCSIVolumes.

---

##### `DescribeTapeArchives`<sup>Required</sup> <a name="DescribeTapeArchives" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeTapeArchives"></a>

```typescript
public readonly DescribeTapeArchives: string;
```

- *Type:* string

[Read] storagegateway:DescribeTapeArchives.

---

##### `DescribeTapeRecoveryPoints`<sup>Required</sup> <a name="DescribeTapeRecoveryPoints" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeTapeRecoveryPoints"></a>

```typescript
public readonly DescribeTapeRecoveryPoints: string;
```

- *Type:* string

[Read] storagegateway:DescribeTapeRecoveryPoints.

---

##### `DescribeTapes`<sup>Required</sup> <a name="DescribeTapes" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeTapes"></a>

```typescript
public readonly DescribeTapes: string;
```

- *Type:* string

[Read] storagegateway:DescribeTapes.

---

##### `DescribeUploadBuffer`<sup>Required</sup> <a name="DescribeUploadBuffer" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeUploadBuffer"></a>

```typescript
public readonly DescribeUploadBuffer: string;
```

- *Type:* string

[Read] storagegateway:DescribeUploadBuffer.

---

##### `DescribeVTLDevices`<sup>Required</sup> <a name="DescribeVTLDevices" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeVTLDevices"></a>

```typescript
public readonly DescribeVTLDevices: string;
```

- *Type:* string

[Read] storagegateway:DescribeVTLDevices.

---

##### `DescribeWorkingStorage`<sup>Required</sup> <a name="DescribeWorkingStorage" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DescribeWorkingStorage"></a>

```typescript
public readonly DescribeWorkingStorage: string;
```

- *Type:* string

[Read] storagegateway:DescribeWorkingStorage.

---

##### `DetachVolume`<sup>Required</sup> <a name="DetachVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DetachVolume"></a>

```typescript
public readonly DetachVolume: string;
```

- *Type:* string

[Write] storagegateway:DetachVolume.

---

##### `DisableGateway`<sup>Required</sup> <a name="DisableGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DisableGateway"></a>

```typescript
public readonly DisableGateway: string;
```

- *Type:* string

[Write] storagegateway:DisableGateway.

---

##### `DisassociateFileSystem`<sup>Required</sup> <a name="DisassociateFileSystem" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.DisassociateFileSystem"></a>

```typescript
public readonly DisassociateFileSystem: string;
```

- *Type:* string

[Write] storagegateway:DisassociateFileSystem.

---

##### `EvictFilesFailingUpload`<sup>Required</sup> <a name="EvictFilesFailingUpload" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.EvictFilesFailingUpload"></a>

```typescript
public readonly EvictFilesFailingUpload: string;
```

- *Type:* string

[Write] storagegateway:EvictFilesFailingUpload.

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.JoinDomain"></a>

```typescript
public readonly JoinDomain: string;
```

- *Type:* string

[Write] storagegateway:JoinDomain.

---

##### `ListAutomaticTapeCreationPolicies`<sup>Required</sup> <a name="ListAutomaticTapeCreationPolicies" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListAutomaticTapeCreationPolicies"></a>

```typescript
public readonly ListAutomaticTapeCreationPolicies: string;
```

- *Type:* string

[List] storagegateway:ListAutomaticTapeCreationPolicies.

---

##### `ListCacheReports`<sup>Required</sup> <a name="ListCacheReports" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListCacheReports"></a>

```typescript
public readonly ListCacheReports: string;
```

- *Type:* string

[List] storagegateway:ListCacheReports.

---

##### `ListFileShares`<sup>Required</sup> <a name="ListFileShares" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListFileShares"></a>

```typescript
public readonly ListFileShares: string;
```

- *Type:* string

[List] storagegateway:ListFileShares.

---

##### `ListFileSystemAssociations`<sup>Required</sup> <a name="ListFileSystemAssociations" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListFileSystemAssociations"></a>

```typescript
public readonly ListFileSystemAssociations: string;
```

- *Type:* string

[List] storagegateway:ListFileSystemAssociations.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListGateways"></a>

```typescript
public readonly ListGateways: string;
```

- *Type:* string

[List] storagegateway:ListGateways.

---

##### `ListLocalDisks`<sup>Required</sup> <a name="ListLocalDisks" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListLocalDisks"></a>

```typescript
public readonly ListLocalDisks: string;
```

- *Type:* string

[List] storagegateway:ListLocalDisks.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] storagegateway:ListTagsForResource.

---

##### `ListTapePools`<sup>Required</sup> <a name="ListTapePools" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListTapePools"></a>

```typescript
public readonly ListTapePools: string;
```

- *Type:* string

[List] storagegateway:ListTapePools.

---

##### `ListTapes`<sup>Required</sup> <a name="ListTapes" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListTapes"></a>

```typescript
public readonly ListTapes: string;
```

- *Type:* string

[List] storagegateway:ListTapes.

---

##### `ListVolumeInitiators`<sup>Required</sup> <a name="ListVolumeInitiators" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListVolumeInitiators"></a>

```typescript
public readonly ListVolumeInitiators: string;
```

- *Type:* string

[List] storagegateway:ListVolumeInitiators.

---

##### `ListVolumeRecoveryPoints`<sup>Required</sup> <a name="ListVolumeRecoveryPoints" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListVolumeRecoveryPoints"></a>

```typescript
public readonly ListVolumeRecoveryPoints: string;
```

- *Type:* string

[List] storagegateway:ListVolumeRecoveryPoints.

---

##### `ListVolumes`<sup>Required</sup> <a name="ListVolumes" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ListVolumes"></a>

```typescript
public readonly ListVolumes: string;
```

- *Type:* string

[List] storagegateway:ListVolumes.

---

##### `NotifyWhenUploaded`<sup>Required</sup> <a name="NotifyWhenUploaded" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.NotifyWhenUploaded"></a>

```typescript
public readonly NotifyWhenUploaded: string;
```

- *Type:* string

[Write] storagegateway:NotifyWhenUploaded.

---

##### `RefreshCache`<sup>Required</sup> <a name="RefreshCache" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RefreshCache"></a>

```typescript
public readonly RefreshCache: string;
```

- *Type:* string

[Write] storagegateway:RefreshCache.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string;
```

- *Type:* string

[Tagging] storagegateway:RemoveTagsFromResource.

---

##### `ResetCache`<sup>Required</sup> <a name="ResetCache" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ResetCache"></a>

```typescript
public readonly ResetCache: string;
```

- *Type:* string

[Write] storagegateway:ResetCache.

---

##### `RetrieveTapeArchive`<sup>Required</sup> <a name="RetrieveTapeArchive" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RetrieveTapeArchive"></a>

```typescript
public readonly RetrieveTapeArchive: string;
```

- *Type:* string

[Write] storagegateway:RetrieveTapeArchive.

---

##### `RetrieveTapeRecoveryPoint`<sup>Required</sup> <a name="RetrieveTapeRecoveryPoint" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.RetrieveTapeRecoveryPoint"></a>

```typescript
public readonly RetrieveTapeRecoveryPoint: string;
```

- *Type:* string

[Write] storagegateway:RetrieveTapeRecoveryPoint.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `ShutdownGateway`<sup>Required</sup> <a name="ShutdownGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.ShutdownGateway"></a>

```typescript
public readonly ShutdownGateway: string;
```

- *Type:* string

[Write] storagegateway:ShutdownGateway.

---

##### `StartAvailabilityMonitorTest`<sup>Required</sup> <a name="StartAvailabilityMonitorTest" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.StartAvailabilityMonitorTest"></a>

```typescript
public readonly StartAvailabilityMonitorTest: string;
```

- *Type:* string

[Write] storagegateway:StartAvailabilityMonitorTest.

---

##### `StartCacheReport`<sup>Required</sup> <a name="StartCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.StartCacheReport"></a>

```typescript
public readonly StartCacheReport: string;
```

- *Type:* string

[Write] storagegateway:StartCacheReport.

---

##### `StartGateway`<sup>Required</sup> <a name="StartGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.StartGateway"></a>

```typescript
public readonly StartGateway: string;
```

- *Type:* string

[Write] storagegateway:StartGateway.

---

##### `UpdateAutomaticTapeCreationPolicy`<sup>Required</sup> <a name="UpdateAutomaticTapeCreationPolicy" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateAutomaticTapeCreationPolicy"></a>

```typescript
public readonly UpdateAutomaticTapeCreationPolicy: string;
```

- *Type:* string

[Write] storagegateway:UpdateAutomaticTapeCreationPolicy.

---

##### `UpdateBandwidthRateLimit`<sup>Required</sup> <a name="UpdateBandwidthRateLimit" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateBandwidthRateLimit"></a>

```typescript
public readonly UpdateBandwidthRateLimit: string;
```

- *Type:* string

[Write] storagegateway:UpdateBandwidthRateLimit.

---

##### `UpdateBandwidthRateLimitSchedule`<sup>Required</sup> <a name="UpdateBandwidthRateLimitSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateBandwidthRateLimitSchedule"></a>

```typescript
public readonly UpdateBandwidthRateLimitSchedule: string;
```

- *Type:* string

[Write] storagegateway:UpdateBandwidthRateLimitSchedule.

---

##### `UpdateChapCredentials`<sup>Required</sup> <a name="UpdateChapCredentials" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateChapCredentials"></a>

```typescript
public readonly UpdateChapCredentials: string;
```

- *Type:* string

[Write] storagegateway:UpdateChapCredentials.

---

##### `UpdateFileSystemAssociation`<sup>Required</sup> <a name="UpdateFileSystemAssociation" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateFileSystemAssociation"></a>

```typescript
public readonly UpdateFileSystemAssociation: string;
```

- *Type:* string

[Write] storagegateway:UpdateFileSystemAssociation.

---

##### `UpdateGatewayInformation`<sup>Required</sup> <a name="UpdateGatewayInformation" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateGatewayInformation"></a>

```typescript
public readonly UpdateGatewayInformation: string;
```

- *Type:* string

[Write] storagegateway:UpdateGatewayInformation.

---

##### `UpdateGatewaySoftwareNow`<sup>Required</sup> <a name="UpdateGatewaySoftwareNow" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateGatewaySoftwareNow"></a>

```typescript
public readonly UpdateGatewaySoftwareNow: string;
```

- *Type:* string

[Write] storagegateway:UpdateGatewaySoftwareNow.

---

##### `UpdateMaintenanceStartTime`<sup>Required</sup> <a name="UpdateMaintenanceStartTime" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateMaintenanceStartTime"></a>

```typescript
public readonly UpdateMaintenanceStartTime: string;
```

- *Type:* string

[Write] storagegateway:UpdateMaintenanceStartTime.

---

##### `UpdateNFSFileShare`<sup>Required</sup> <a name="UpdateNFSFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateNFSFileShare"></a>

```typescript
public readonly UpdateNFSFileShare: string;
```

- *Type:* string

[Write] storagegateway:UpdateNFSFileShare.

---

##### `UpdateSMBFileShare`<sup>Required</sup> <a name="UpdateSMBFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBFileShare"></a>

```typescript
public readonly UpdateSMBFileShare: string;
```

- *Type:* string

[Write] storagegateway:UpdateSMBFileShare.

---

##### `UpdateSMBFileShareVisibility`<sup>Required</sup> <a name="UpdateSMBFileShareVisibility" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBFileShareVisibility"></a>

```typescript
public readonly UpdateSMBFileShareVisibility: string;
```

- *Type:* string

[Write] storagegateway:UpdateSMBFileShareVisibility.

---

##### `UpdateSMBLocalGroups`<sup>Required</sup> <a name="UpdateSMBLocalGroups" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBLocalGroups"></a>

```typescript
public readonly UpdateSMBLocalGroups: string;
```

- *Type:* string

[Write] storagegateway:UpdateSMBLocalGroups.

---

##### `UpdateSMBSecurityStrategy`<sup>Required</sup> <a name="UpdateSMBSecurityStrategy" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSMBSecurityStrategy"></a>

```typescript
public readonly UpdateSMBSecurityStrategy: string;
```

- *Type:* string

[Write] storagegateway:UpdateSMBSecurityStrategy.

---

##### `UpdateSnapshotSchedule`<sup>Required</sup> <a name="UpdateSnapshotSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateSnapshotSchedule"></a>

```typescript
public readonly UpdateSnapshotSchedule: string;
```

- *Type:* string

[Write] storagegateway:UpdateSnapshotSchedule.

---

##### `UpdateVTLDeviceType`<sup>Required</sup> <a name="UpdateVTLDeviceType" id="@cdk_utils/iam.storagegateway.StorageGatewayActions.property.UpdateVTLDeviceType"></a>

```typescript
public readonly UpdateVTLDeviceType: string;
```

- *Type:* string

[Write] storagegateway:UpdateVTLDeviceType.

---

### StorageGatewayConditions <a name="StorageGatewayConditions" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions"></a>

Condition key constants and builders for storagegateway.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

new storagegateway.StorageGatewayConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.requestTag"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.resourceTag"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.tagKeys"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.ActivateGatewayConditionKeys">ActivateGatewayConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ActivateGateway action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AddTagsToResourceConditionKeys">AddTagsToResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddTagsToResource action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AssociateFileSystemConditionKeys">AssociateFileSystemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateFileSystem action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateCachediSCSIVolumeConditionKeys">CreateCachediSCSIVolumeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCachediSCSIVolume action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateNFSFileShareConditionKeys">CreateNFSFileShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNFSFileShare action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateSMBFileShareConditionKeys">CreateSMBFileShareConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSMBFileShare action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateSnapshotConditionKeys">CreateSnapshotConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshot action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateSnapshotFromVolumeRecoveryPointConditionKeys">CreateSnapshotFromVolumeRecoveryPointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSnapshotFromVolumeRecoveryPoint action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateStorediSCSIVolumeConditionKeys">CreateStorediSCSIVolumeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStorediSCSIVolume action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateTapePoolConditionKeys">CreateTapePoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTapePool action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateTapesConditionKeys">CreateTapesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTapes action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateTapeWithBarcodeConditionKeys">CreateTapeWithBarcodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTapeWithBarcode action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.RemoveTagsFromResourceConditionKeys">RemoveTagsFromResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RemoveTagsFromResource action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.StartCacheReportConditionKeys">StartCacheReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartCacheReport action. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.UpdateSnapshotScheduleConditionKeys">UpdateSnapshotScheduleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSnapshotSchedule action. |

---

##### `ActivateGatewayConditionKeys`<sup>Required</sup> <a name="ActivateGatewayConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.ActivateGatewayConditionKeys"></a>

```typescript
public readonly ActivateGatewayConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ActivateGateway action.

---

##### `AddTagsToResourceConditionKeys`<sup>Required</sup> <a name="AddTagsToResourceConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AddTagsToResourceConditionKeys"></a>

```typescript
public readonly AddTagsToResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddTagsToResource action.

---

##### `AssociateFileSystemConditionKeys`<sup>Required</sup> <a name="AssociateFileSystemConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AssociateFileSystemConditionKeys"></a>

```typescript
public readonly AssociateFileSystemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateFileSystem action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCachediSCSIVolumeConditionKeys`<sup>Required</sup> <a name="CreateCachediSCSIVolumeConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateCachediSCSIVolumeConditionKeys"></a>

```typescript
public readonly CreateCachediSCSIVolumeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCachediSCSIVolume action.

---

##### `CreateNFSFileShareConditionKeys`<sup>Required</sup> <a name="CreateNFSFileShareConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateNFSFileShareConditionKeys"></a>

```typescript
public readonly CreateNFSFileShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNFSFileShare action.

---

##### `CreateSMBFileShareConditionKeys`<sup>Required</sup> <a name="CreateSMBFileShareConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateSMBFileShareConditionKeys"></a>

```typescript
public readonly CreateSMBFileShareConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSMBFileShare action.

---

##### `CreateSnapshotConditionKeys`<sup>Required</sup> <a name="CreateSnapshotConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateSnapshotConditionKeys"></a>

```typescript
public readonly CreateSnapshotConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshot action.

---

##### `CreateSnapshotFromVolumeRecoveryPointConditionKeys`<sup>Required</sup> <a name="CreateSnapshotFromVolumeRecoveryPointConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateSnapshotFromVolumeRecoveryPointConditionKeys"></a>

```typescript
public readonly CreateSnapshotFromVolumeRecoveryPointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSnapshotFromVolumeRecoveryPoint action.

---

##### `CreateStorediSCSIVolumeConditionKeys`<sup>Required</sup> <a name="CreateStorediSCSIVolumeConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateStorediSCSIVolumeConditionKeys"></a>

```typescript
public readonly CreateStorediSCSIVolumeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStorediSCSIVolume action.

---

##### `CreateTapePoolConditionKeys`<sup>Required</sup> <a name="CreateTapePoolConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateTapePoolConditionKeys"></a>

```typescript
public readonly CreateTapePoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTapePool action.

---

##### `CreateTapesConditionKeys`<sup>Required</sup> <a name="CreateTapesConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateTapesConditionKeys"></a>

```typescript
public readonly CreateTapesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTapes action.

---

##### `CreateTapeWithBarcodeConditionKeys`<sup>Required</sup> <a name="CreateTapeWithBarcodeConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.CreateTapeWithBarcodeConditionKeys"></a>

```typescript
public readonly CreateTapeWithBarcodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTapeWithBarcode action.

---

##### `RemoveTagsFromResourceConditionKeys`<sup>Required</sup> <a name="RemoveTagsFromResourceConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.RemoveTagsFromResourceConditionKeys"></a>

```typescript
public readonly RemoveTagsFromResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RemoveTagsFromResource action.

---

##### `StartCacheReportConditionKeys`<sup>Required</sup> <a name="StartCacheReportConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.StartCacheReportConditionKeys"></a>

```typescript
public readonly StartCacheReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartCacheReport action.

---

##### `UpdateSnapshotScheduleConditionKeys`<sup>Required</sup> <a name="UpdateSnapshotScheduleConditionKeys" id="@cdk_utils/iam.storagegateway.StorageGatewayConditions.property.UpdateSnapshotScheduleConditionKeys"></a>

```typescript
public readonly UpdateSnapshotScheduleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSnapshotSchedule action.

---

### StorageGatewayOperations <a name="StorageGatewayOperations" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations"></a>

API operation to required IAM actions mapping for storagegateway.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

new storagegateway.StorageGatewayOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ActivateGateway">ActivateGateway</a></code> | <code>string[]</code> | IAM actions required for the ActivateGateway API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddCache">AddCache</a></code> | <code>string[]</code> | IAM actions required for the AddCache API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddTagsToResource">AddTagsToResource</a></code> | <code>string[]</code> | IAM actions required for the AddTagsToResource API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddUploadBuffer">AddUploadBuffer</a></code> | <code>string[]</code> | IAM actions required for the AddUploadBuffer API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddWorkingStorage">AddWorkingStorage</a></code> | <code>string[]</code> | IAM actions required for the AddWorkingStorage API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AssignTapePool">AssignTapePool</a></code> | <code>string[]</code> | IAM actions required for the AssignTapePool API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AssociateFileSystem">AssociateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the AssociateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AttachVolume">AttachVolume</a></code> | <code>string[]</code> | IAM actions required for the AttachVolume API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CancelArchival">CancelArchival</a></code> | <code>string[]</code> | IAM actions required for the CancelArchival API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CancelCacheReport">CancelCacheReport</a></code> | <code>string[]</code> | IAM actions required for the CancelCacheReport API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CancelRetrieval">CancelRetrieval</a></code> | <code>string[]</code> | IAM actions required for the CancelRetrieval API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateCachediSCSIVolume">CreateCachediSCSIVolume</a></code> | <code>string[]</code> | IAM actions required for the CreateCachediSCSIVolume API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateNFSFileShare">CreateNFSFileShare</a></code> | <code>string[]</code> | IAM actions required for the CreateNFSFileShare API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateSMBFileShare">CreateSMBFileShare</a></code> | <code>string[]</code> | IAM actions required for the CreateSMBFileShare API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateSnapshot">CreateSnapshot</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshot API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateSnapshotFromVolumeRecoveryPoint">CreateSnapshotFromVolumeRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the CreateSnapshotFromVolumeRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateStorediSCSIVolume">CreateStorediSCSIVolume</a></code> | <code>string[]</code> | IAM actions required for the CreateStorediSCSIVolume API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateTapePool">CreateTapePool</a></code> | <code>string[]</code> | IAM actions required for the CreateTapePool API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateTapes">CreateTapes</a></code> | <code>string[]</code> | IAM actions required for the CreateTapes API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateTapeWithBarcode">CreateTapeWithBarcode</a></code> | <code>string[]</code> | IAM actions required for the CreateTapeWithBarcode API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteAutomaticTapeCreationPolicy">DeleteAutomaticTapeCreationPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutomaticTapeCreationPolicy API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteBandwidthRateLimit">DeleteBandwidthRateLimit</a></code> | <code>string[]</code> | IAM actions required for the DeleteBandwidthRateLimit API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteCacheReport">DeleteCacheReport</a></code> | <code>string[]</code> | IAM actions required for the DeleteCacheReport API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteChapCredentials">DeleteChapCredentials</a></code> | <code>string[]</code> | IAM actions required for the DeleteChapCredentials API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteFileShare">DeleteFileShare</a></code> | <code>string[]</code> | IAM actions required for the DeleteFileShare API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteGateway">DeleteGateway</a></code> | <code>string[]</code> | IAM actions required for the DeleteGateway API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteSnapshotSchedule">DeleteSnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteTape">DeleteTape</a></code> | <code>string[]</code> | IAM actions required for the DeleteTape API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteTapeArchive">DeleteTapeArchive</a></code> | <code>string[]</code> | IAM actions required for the DeleteTapeArchive API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteTapePool">DeleteTapePool</a></code> | <code>string[]</code> | IAM actions required for the DeleteTapePool API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteVolume">DeleteVolume</a></code> | <code>string[]</code> | IAM actions required for the DeleteVolume API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeAvailabilityMonitorTest">DescribeAvailabilityMonitorTest</a></code> | <code>string[]</code> | IAM actions required for the DescribeAvailabilityMonitorTest API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeBandwidthRateLimit">DescribeBandwidthRateLimit</a></code> | <code>string[]</code> | IAM actions required for the DescribeBandwidthRateLimit API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeBandwidthRateLimitSchedule">DescribeBandwidthRateLimitSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeBandwidthRateLimitSchedule API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeCache">DescribeCache</a></code> | <code>string[]</code> | IAM actions required for the DescribeCache API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeCachediSCSIVolumes">DescribeCachediSCSIVolumes</a></code> | <code>string[]</code> | IAM actions required for the DescribeCachediSCSIVolumes API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeCacheReport">DescribeCacheReport</a></code> | <code>string[]</code> | IAM actions required for the DescribeCacheReport API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeChapCredentials">DescribeChapCredentials</a></code> | <code>string[]</code> | IAM actions required for the DescribeChapCredentials API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeFileSystemAssociations">DescribeFileSystemAssociations</a></code> | <code>string[]</code> | IAM actions required for the DescribeFileSystemAssociations API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeGatewayInformation">DescribeGatewayInformation</a></code> | <code>string[]</code> | IAM actions required for the DescribeGatewayInformation API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeMaintenanceStartTime">DescribeMaintenanceStartTime</a></code> | <code>string[]</code> | IAM actions required for the DescribeMaintenanceStartTime API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeNFSFileShares">DescribeNFSFileShares</a></code> | <code>string[]</code> | IAM actions required for the DescribeNFSFileShares API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeSMBFileShares">DescribeSMBFileShares</a></code> | <code>string[]</code> | IAM actions required for the DescribeSMBFileShares API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeSMBSettings">DescribeSMBSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeSMBSettings API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeSnapshotSchedule">DescribeSnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeSnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeStorediSCSIVolumes">DescribeStorediSCSIVolumes</a></code> | <code>string[]</code> | IAM actions required for the DescribeStorediSCSIVolumes API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeTapeArchives">DescribeTapeArchives</a></code> | <code>string[]</code> | IAM actions required for the DescribeTapeArchives API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeTapeRecoveryPoints">DescribeTapeRecoveryPoints</a></code> | <code>string[]</code> | IAM actions required for the DescribeTapeRecoveryPoints API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeTapes">DescribeTapes</a></code> | <code>string[]</code> | IAM actions required for the DescribeTapes API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeUploadBuffer">DescribeUploadBuffer</a></code> | <code>string[]</code> | IAM actions required for the DescribeUploadBuffer API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeVTLDevices">DescribeVTLDevices</a></code> | <code>string[]</code> | IAM actions required for the DescribeVTLDevices API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeWorkingStorage">DescribeWorkingStorage</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkingStorage API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DetachVolume">DetachVolume</a></code> | <code>string[]</code> | IAM actions required for the DetachVolume API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DisableGateway">DisableGateway</a></code> | <code>string[]</code> | IAM actions required for the DisableGateway API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DisassociateFileSystem">DisassociateFileSystem</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFileSystem API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.EvictFilesFailingUpload">EvictFilesFailingUpload</a></code> | <code>string[]</code> | IAM actions required for the EvictFilesFailingUpload API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.JoinDomain">JoinDomain</a></code> | <code>string[]</code> | IAM actions required for the JoinDomain API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListAutomaticTapeCreationPolicies">ListAutomaticTapeCreationPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListAutomaticTapeCreationPolicies API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListCacheReports">ListCacheReports</a></code> | <code>string[]</code> | IAM actions required for the ListCacheReports API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListFileShares">ListFileShares</a></code> | <code>string[]</code> | IAM actions required for the ListFileShares API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListFileSystemAssociations">ListFileSystemAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListFileSystemAssociations API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListGateways">ListGateways</a></code> | <code>string[]</code> | IAM actions required for the ListGateways API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListLocalDisks">ListLocalDisks</a></code> | <code>string[]</code> | IAM actions required for the ListLocalDisks API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListTapePools">ListTapePools</a></code> | <code>string[]</code> | IAM actions required for the ListTapePools API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListTapes">ListTapes</a></code> | <code>string[]</code> | IAM actions required for the ListTapes API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListVolumeInitiators">ListVolumeInitiators</a></code> | <code>string[]</code> | IAM actions required for the ListVolumeInitiators API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListVolumeRecoveryPoints">ListVolumeRecoveryPoints</a></code> | <code>string[]</code> | IAM actions required for the ListVolumeRecoveryPoints API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListVolumes">ListVolumes</a></code> | <code>string[]</code> | IAM actions required for the ListVolumes API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.NotifyWhenUploaded">NotifyWhenUploaded</a></code> | <code>string[]</code> | IAM actions required for the NotifyWhenUploaded API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.opSetLocalConsolePassword">opSetLocalConsolePassword</a></code> | <code>string[]</code> | IAM actions required for the SetLocalConsolePassword API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.opSetSMBGuestPassword">opSetSMBGuestPassword</a></code> | <code>string[]</code> | IAM actions required for the SetSMBGuestPassword API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RefreshCache">RefreshCache</a></code> | <code>string[]</code> | IAM actions required for the RefreshCache API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RemoveTagsFromResource">RemoveTagsFromResource</a></code> | <code>string[]</code> | IAM actions required for the RemoveTagsFromResource API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ResetCache">ResetCache</a></code> | <code>string[]</code> | IAM actions required for the ResetCache API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RetrieveTapeArchive">RetrieveTapeArchive</a></code> | <code>string[]</code> | IAM actions required for the RetrieveTapeArchive API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RetrieveTapeRecoveryPoint">RetrieveTapeRecoveryPoint</a></code> | <code>string[]</code> | IAM actions required for the RetrieveTapeRecoveryPoint API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ShutdownGateway">ShutdownGateway</a></code> | <code>string[]</code> | IAM actions required for the ShutdownGateway API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.StartAvailabilityMonitorTest">StartAvailabilityMonitorTest</a></code> | <code>string[]</code> | IAM actions required for the StartAvailabilityMonitorTest API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.StartCacheReport">StartCacheReport</a></code> | <code>string[]</code> | IAM actions required for the StartCacheReport API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.StartGateway">StartGateway</a></code> | <code>string[]</code> | IAM actions required for the StartGateway API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateAutomaticTapeCreationPolicy">UpdateAutomaticTapeCreationPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutomaticTapeCreationPolicy API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateBandwidthRateLimit">UpdateBandwidthRateLimit</a></code> | <code>string[]</code> | IAM actions required for the UpdateBandwidthRateLimit API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateBandwidthRateLimitSchedule">UpdateBandwidthRateLimitSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateBandwidthRateLimitSchedule API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateChapCredentials">UpdateChapCredentials</a></code> | <code>string[]</code> | IAM actions required for the UpdateChapCredentials API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateFileSystemAssociation">UpdateFileSystemAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateFileSystemAssociation API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateGatewayInformation">UpdateGatewayInformation</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewayInformation API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateGatewaySoftwareNow">UpdateGatewaySoftwareNow</a></code> | <code>string[]</code> | IAM actions required for the UpdateGatewaySoftwareNow API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateMaintenanceStartTime">UpdateMaintenanceStartTime</a></code> | <code>string[]</code> | IAM actions required for the UpdateMaintenanceStartTime API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateNFSFileShare">UpdateNFSFileShare</a></code> | <code>string[]</code> | IAM actions required for the UpdateNFSFileShare API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBFileShare">UpdateSMBFileShare</a></code> | <code>string[]</code> | IAM actions required for the UpdateSMBFileShare API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBFileShareVisibility">UpdateSMBFileShareVisibility</a></code> | <code>string[]</code> | IAM actions required for the UpdateSMBFileShareVisibility API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBLocalGroups">UpdateSMBLocalGroups</a></code> | <code>string[]</code> | IAM actions required for the UpdateSMBLocalGroups API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBSecurityStrategy">UpdateSMBSecurityStrategy</a></code> | <code>string[]</code> | IAM actions required for the UpdateSMBSecurityStrategy API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSnapshotSchedule">UpdateSnapshotSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateSnapshotSchedule API call. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateVTLDeviceType">UpdateVTLDeviceType</a></code> | <code>string[]</code> | IAM actions required for the UpdateVTLDeviceType API call. |

---

##### `ActivateGateway`<sup>Required</sup> <a name="ActivateGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ActivateGateway"></a>

```typescript
public readonly ActivateGateway: string[];
```

- *Type:* string[]

IAM actions required for the ActivateGateway API call.

---

##### `AddCache`<sup>Required</sup> <a name="AddCache" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddCache"></a>

```typescript
public readonly AddCache: string[];
```

- *Type:* string[]

IAM actions required for the AddCache API call.

---

##### `AddTagsToResource`<sup>Required</sup> <a name="AddTagsToResource" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddTagsToResource"></a>

```typescript
public readonly AddTagsToResource: string[];
```

- *Type:* string[]

IAM actions required for the AddTagsToResource API call.

---

##### `AddUploadBuffer`<sup>Required</sup> <a name="AddUploadBuffer" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddUploadBuffer"></a>

```typescript
public readonly AddUploadBuffer: string[];
```

- *Type:* string[]

IAM actions required for the AddUploadBuffer API call.

---

##### `AddWorkingStorage`<sup>Required</sup> <a name="AddWorkingStorage" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AddWorkingStorage"></a>

```typescript
public readonly AddWorkingStorage: string[];
```

- *Type:* string[]

IAM actions required for the AddWorkingStorage API call.

---

##### `AssignTapePool`<sup>Required</sup> <a name="AssignTapePool" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AssignTapePool"></a>

```typescript
public readonly AssignTapePool: string[];
```

- *Type:* string[]

IAM actions required for the AssignTapePool API call.

---

##### `AssociateFileSystem`<sup>Required</sup> <a name="AssociateFileSystem" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AssociateFileSystem"></a>

```typescript
public readonly AssociateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFileSystem API call.

---

##### `AttachVolume`<sup>Required</sup> <a name="AttachVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.AttachVolume"></a>

```typescript
public readonly AttachVolume: string[];
```

- *Type:* string[]

IAM actions required for the AttachVolume API call.

---

##### `CancelArchival`<sup>Required</sup> <a name="CancelArchival" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CancelArchival"></a>

```typescript
public readonly CancelArchival: string[];
```

- *Type:* string[]

IAM actions required for the CancelArchival API call.

---

##### `CancelCacheReport`<sup>Required</sup> <a name="CancelCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CancelCacheReport"></a>

```typescript
public readonly CancelCacheReport: string[];
```

- *Type:* string[]

IAM actions required for the CancelCacheReport API call.

---

##### `CancelRetrieval`<sup>Required</sup> <a name="CancelRetrieval" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CancelRetrieval"></a>

```typescript
public readonly CancelRetrieval: string[];
```

- *Type:* string[]

IAM actions required for the CancelRetrieval API call.

---

##### `CreateCachediSCSIVolume`<sup>Required</sup> <a name="CreateCachediSCSIVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateCachediSCSIVolume"></a>

```typescript
public readonly CreateCachediSCSIVolume: string[];
```

- *Type:* string[]

IAM actions required for the CreateCachediSCSIVolume API call.

---

##### `CreateNFSFileShare`<sup>Required</sup> <a name="CreateNFSFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateNFSFileShare"></a>

```typescript
public readonly CreateNFSFileShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateNFSFileShare API call.

---

##### `CreateSMBFileShare`<sup>Required</sup> <a name="CreateSMBFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateSMBFileShare"></a>

```typescript
public readonly CreateSMBFileShare: string[];
```

- *Type:* string[]

IAM actions required for the CreateSMBFileShare API call.

---

##### `CreateSnapshot`<sup>Required</sup> <a name="CreateSnapshot" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateSnapshot"></a>

```typescript
public readonly CreateSnapshot: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshot API call.

---

##### `CreateSnapshotFromVolumeRecoveryPoint`<sup>Required</sup> <a name="CreateSnapshotFromVolumeRecoveryPoint" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateSnapshotFromVolumeRecoveryPoint"></a>

```typescript
public readonly CreateSnapshotFromVolumeRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateSnapshotFromVolumeRecoveryPoint API call.

---

##### `CreateStorediSCSIVolume`<sup>Required</sup> <a name="CreateStorediSCSIVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateStorediSCSIVolume"></a>

```typescript
public readonly CreateStorediSCSIVolume: string[];
```

- *Type:* string[]

IAM actions required for the CreateStorediSCSIVolume API call.

---

##### `CreateTapePool`<sup>Required</sup> <a name="CreateTapePool" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateTapePool"></a>

```typescript
public readonly CreateTapePool: string[];
```

- *Type:* string[]

IAM actions required for the CreateTapePool API call.

---

##### `CreateTapes`<sup>Required</sup> <a name="CreateTapes" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateTapes"></a>

```typescript
public readonly CreateTapes: string[];
```

- *Type:* string[]

IAM actions required for the CreateTapes API call.

---

##### `CreateTapeWithBarcode`<sup>Required</sup> <a name="CreateTapeWithBarcode" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.CreateTapeWithBarcode"></a>

```typescript
public readonly CreateTapeWithBarcode: string[];
```

- *Type:* string[]

IAM actions required for the CreateTapeWithBarcode API call.

---

##### `DeleteAutomaticTapeCreationPolicy`<sup>Required</sup> <a name="DeleteAutomaticTapeCreationPolicy" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteAutomaticTapeCreationPolicy"></a>

```typescript
public readonly DeleteAutomaticTapeCreationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutomaticTapeCreationPolicy API call.

---

##### `DeleteBandwidthRateLimit`<sup>Required</sup> <a name="DeleteBandwidthRateLimit" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteBandwidthRateLimit"></a>

```typescript
public readonly DeleteBandwidthRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBandwidthRateLimit API call.

---

##### `DeleteCacheReport`<sup>Required</sup> <a name="DeleteCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteCacheReport"></a>

```typescript
public readonly DeleteCacheReport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCacheReport API call.

---

##### `DeleteChapCredentials`<sup>Required</sup> <a name="DeleteChapCredentials" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteChapCredentials"></a>

```typescript
public readonly DeleteChapCredentials: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChapCredentials API call.

---

##### `DeleteFileShare`<sup>Required</sup> <a name="DeleteFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteFileShare"></a>

```typescript
public readonly DeleteFileShare: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFileShare API call.

---

##### `DeleteGateway`<sup>Required</sup> <a name="DeleteGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteGateway"></a>

```typescript
public readonly DeleteGateway: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGateway API call.

---

##### `DeleteSnapshotSchedule`<sup>Required</sup> <a name="DeleteSnapshotSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteSnapshotSchedule"></a>

```typescript
public readonly DeleteSnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSnapshotSchedule API call.

---

##### `DeleteTape`<sup>Required</sup> <a name="DeleteTape" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteTape"></a>

```typescript
public readonly DeleteTape: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTape API call.

---

##### `DeleteTapeArchive`<sup>Required</sup> <a name="DeleteTapeArchive" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteTapeArchive"></a>

```typescript
public readonly DeleteTapeArchive: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTapeArchive API call.

---

##### `DeleteTapePool`<sup>Required</sup> <a name="DeleteTapePool" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteTapePool"></a>

```typescript
public readonly DeleteTapePool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTapePool API call.

---

##### `DeleteVolume`<sup>Required</sup> <a name="DeleteVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DeleteVolume"></a>

```typescript
public readonly DeleteVolume: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVolume API call.

---

##### `DescribeAvailabilityMonitorTest`<sup>Required</sup> <a name="DescribeAvailabilityMonitorTest" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeAvailabilityMonitorTest"></a>

```typescript
public readonly DescribeAvailabilityMonitorTest: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAvailabilityMonitorTest API call.

---

##### `DescribeBandwidthRateLimit`<sup>Required</sup> <a name="DescribeBandwidthRateLimit" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeBandwidthRateLimit"></a>

```typescript
public readonly DescribeBandwidthRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBandwidthRateLimit API call.

---

##### `DescribeBandwidthRateLimitSchedule`<sup>Required</sup> <a name="DescribeBandwidthRateLimitSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeBandwidthRateLimitSchedule"></a>

```typescript
public readonly DescribeBandwidthRateLimitSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeBandwidthRateLimitSchedule API call.

---

##### `DescribeCache`<sup>Required</sup> <a name="DescribeCache" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeCache"></a>

```typescript
public readonly DescribeCache: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCache API call.

---

##### `DescribeCachediSCSIVolumes`<sup>Required</sup> <a name="DescribeCachediSCSIVolumes" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeCachediSCSIVolumes"></a>

```typescript
public readonly DescribeCachediSCSIVolumes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCachediSCSIVolumes API call.

---

##### `DescribeCacheReport`<sup>Required</sup> <a name="DescribeCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeCacheReport"></a>

```typescript
public readonly DescribeCacheReport: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCacheReport API call.

---

##### `DescribeChapCredentials`<sup>Required</sup> <a name="DescribeChapCredentials" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeChapCredentials"></a>

```typescript
public readonly DescribeChapCredentials: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChapCredentials API call.

---

##### `DescribeFileSystemAssociations`<sup>Required</sup> <a name="DescribeFileSystemAssociations" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeFileSystemAssociations"></a>

```typescript
public readonly DescribeFileSystemAssociations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFileSystemAssociations API call.

---

##### `DescribeGatewayInformation`<sup>Required</sup> <a name="DescribeGatewayInformation" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeGatewayInformation"></a>

```typescript
public readonly DescribeGatewayInformation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeGatewayInformation API call.

---

##### `DescribeMaintenanceStartTime`<sup>Required</sup> <a name="DescribeMaintenanceStartTime" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeMaintenanceStartTime"></a>

```typescript
public readonly DescribeMaintenanceStartTime: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMaintenanceStartTime API call.

---

##### `DescribeNFSFileShares`<sup>Required</sup> <a name="DescribeNFSFileShares" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeNFSFileShares"></a>

```typescript
public readonly DescribeNFSFileShares: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNFSFileShares API call.

---

##### `DescribeSMBFileShares`<sup>Required</sup> <a name="DescribeSMBFileShares" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeSMBFileShares"></a>

```typescript
public readonly DescribeSMBFileShares: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSMBFileShares API call.

---

##### `DescribeSMBSettings`<sup>Required</sup> <a name="DescribeSMBSettings" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeSMBSettings"></a>

```typescript
public readonly DescribeSMBSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSMBSettings API call.

---

##### `DescribeSnapshotSchedule`<sup>Required</sup> <a name="DescribeSnapshotSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeSnapshotSchedule"></a>

```typescript
public readonly DescribeSnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSnapshotSchedule API call.

---

##### `DescribeStorediSCSIVolumes`<sup>Required</sup> <a name="DescribeStorediSCSIVolumes" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeStorediSCSIVolumes"></a>

```typescript
public readonly DescribeStorediSCSIVolumes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStorediSCSIVolumes API call.

---

##### `DescribeTapeArchives`<sup>Required</sup> <a name="DescribeTapeArchives" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeTapeArchives"></a>

```typescript
public readonly DescribeTapeArchives: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTapeArchives API call.

---

##### `DescribeTapeRecoveryPoints`<sup>Required</sup> <a name="DescribeTapeRecoveryPoints" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeTapeRecoveryPoints"></a>

```typescript
public readonly DescribeTapeRecoveryPoints: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTapeRecoveryPoints API call.

---

##### `DescribeTapes`<sup>Required</sup> <a name="DescribeTapes" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeTapes"></a>

```typescript
public readonly DescribeTapes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTapes API call.

---

##### `DescribeUploadBuffer`<sup>Required</sup> <a name="DescribeUploadBuffer" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeUploadBuffer"></a>

```typescript
public readonly DescribeUploadBuffer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUploadBuffer API call.

---

##### `DescribeVTLDevices`<sup>Required</sup> <a name="DescribeVTLDevices" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeVTLDevices"></a>

```typescript
public readonly DescribeVTLDevices: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVTLDevices API call.

---

##### `DescribeWorkingStorage`<sup>Required</sup> <a name="DescribeWorkingStorage" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DescribeWorkingStorage"></a>

```typescript
public readonly DescribeWorkingStorage: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkingStorage API call.

---

##### `DetachVolume`<sup>Required</sup> <a name="DetachVolume" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DetachVolume"></a>

```typescript
public readonly DetachVolume: string[];
```

- *Type:* string[]

IAM actions required for the DetachVolume API call.

---

##### `DisableGateway`<sup>Required</sup> <a name="DisableGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DisableGateway"></a>

```typescript
public readonly DisableGateway: string[];
```

- *Type:* string[]

IAM actions required for the DisableGateway API call.

---

##### `DisassociateFileSystem`<sup>Required</sup> <a name="DisassociateFileSystem" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.DisassociateFileSystem"></a>

```typescript
public readonly DisassociateFileSystem: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFileSystem API call.

---

##### `EvictFilesFailingUpload`<sup>Required</sup> <a name="EvictFilesFailingUpload" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.EvictFilesFailingUpload"></a>

```typescript
public readonly EvictFilesFailingUpload: string[];
```

- *Type:* string[]

IAM actions required for the EvictFilesFailingUpload API call.

---

##### `JoinDomain`<sup>Required</sup> <a name="JoinDomain" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.JoinDomain"></a>

```typescript
public readonly JoinDomain: string[];
```

- *Type:* string[]

IAM actions required for the JoinDomain API call.

---

##### `ListAutomaticTapeCreationPolicies`<sup>Required</sup> <a name="ListAutomaticTapeCreationPolicies" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListAutomaticTapeCreationPolicies"></a>

```typescript
public readonly ListAutomaticTapeCreationPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListAutomaticTapeCreationPolicies API call.

---

##### `ListCacheReports`<sup>Required</sup> <a name="ListCacheReports" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListCacheReports"></a>

```typescript
public readonly ListCacheReports: string[];
```

- *Type:* string[]

IAM actions required for the ListCacheReports API call.

---

##### `ListFileShares`<sup>Required</sup> <a name="ListFileShares" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListFileShares"></a>

```typescript
public readonly ListFileShares: string[];
```

- *Type:* string[]

IAM actions required for the ListFileShares API call.

---

##### `ListFileSystemAssociations`<sup>Required</sup> <a name="ListFileSystemAssociations" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListFileSystemAssociations"></a>

```typescript
public readonly ListFileSystemAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListFileSystemAssociations API call.

---

##### `ListGateways`<sup>Required</sup> <a name="ListGateways" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListGateways"></a>

```typescript
public readonly ListGateways: string[];
```

- *Type:* string[]

IAM actions required for the ListGateways API call.

---

##### `ListLocalDisks`<sup>Required</sup> <a name="ListLocalDisks" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListLocalDisks"></a>

```typescript
public readonly ListLocalDisks: string[];
```

- *Type:* string[]

IAM actions required for the ListLocalDisks API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTapePools`<sup>Required</sup> <a name="ListTapePools" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListTapePools"></a>

```typescript
public readonly ListTapePools: string[];
```

- *Type:* string[]

IAM actions required for the ListTapePools API call.

---

##### `ListTapes`<sup>Required</sup> <a name="ListTapes" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListTapes"></a>

```typescript
public readonly ListTapes: string[];
```

- *Type:* string[]

IAM actions required for the ListTapes API call.

---

##### `ListVolumeInitiators`<sup>Required</sup> <a name="ListVolumeInitiators" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListVolumeInitiators"></a>

```typescript
public readonly ListVolumeInitiators: string[];
```

- *Type:* string[]

IAM actions required for the ListVolumeInitiators API call.

---

##### `ListVolumeRecoveryPoints`<sup>Required</sup> <a name="ListVolumeRecoveryPoints" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListVolumeRecoveryPoints"></a>

```typescript
public readonly ListVolumeRecoveryPoints: string[];
```

- *Type:* string[]

IAM actions required for the ListVolumeRecoveryPoints API call.

---

##### `ListVolumes`<sup>Required</sup> <a name="ListVolumes" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ListVolumes"></a>

```typescript
public readonly ListVolumes: string[];
```

- *Type:* string[]

IAM actions required for the ListVolumes API call.

---

##### `NotifyWhenUploaded`<sup>Required</sup> <a name="NotifyWhenUploaded" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.NotifyWhenUploaded"></a>

```typescript
public readonly NotifyWhenUploaded: string[];
```

- *Type:* string[]

IAM actions required for the NotifyWhenUploaded API call.

---

##### `opSetLocalConsolePassword`<sup>Required</sup> <a name="opSetLocalConsolePassword" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.opSetLocalConsolePassword"></a>

```typescript
public readonly opSetLocalConsolePassword: string[];
```

- *Type:* string[]

IAM actions required for the SetLocalConsolePassword API call.

---

##### `opSetSMBGuestPassword`<sup>Required</sup> <a name="opSetSMBGuestPassword" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.opSetSMBGuestPassword"></a>

```typescript
public readonly opSetSMBGuestPassword: string[];
```

- *Type:* string[]

IAM actions required for the SetSMBGuestPassword API call.

---

##### `RefreshCache`<sup>Required</sup> <a name="RefreshCache" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RefreshCache"></a>

```typescript
public readonly RefreshCache: string[];
```

- *Type:* string[]

IAM actions required for the RefreshCache API call.

---

##### `RemoveTagsFromResource`<sup>Required</sup> <a name="RemoveTagsFromResource" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RemoveTagsFromResource"></a>

```typescript
public readonly RemoveTagsFromResource: string[];
```

- *Type:* string[]

IAM actions required for the RemoveTagsFromResource API call.

---

##### `ResetCache`<sup>Required</sup> <a name="ResetCache" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ResetCache"></a>

```typescript
public readonly ResetCache: string[];
```

- *Type:* string[]

IAM actions required for the ResetCache API call.

---

##### `RetrieveTapeArchive`<sup>Required</sup> <a name="RetrieveTapeArchive" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RetrieveTapeArchive"></a>

```typescript
public readonly RetrieveTapeArchive: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveTapeArchive API call.

---

##### `RetrieveTapeRecoveryPoint`<sup>Required</sup> <a name="RetrieveTapeRecoveryPoint" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.RetrieveTapeRecoveryPoint"></a>

```typescript
public readonly RetrieveTapeRecoveryPoint: string[];
```

- *Type:* string[]

IAM actions required for the RetrieveTapeRecoveryPoint API call.

---

##### `ShutdownGateway`<sup>Required</sup> <a name="ShutdownGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.ShutdownGateway"></a>

```typescript
public readonly ShutdownGateway: string[];
```

- *Type:* string[]

IAM actions required for the ShutdownGateway API call.

---

##### `StartAvailabilityMonitorTest`<sup>Required</sup> <a name="StartAvailabilityMonitorTest" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.StartAvailabilityMonitorTest"></a>

```typescript
public readonly StartAvailabilityMonitorTest: string[];
```

- *Type:* string[]

IAM actions required for the StartAvailabilityMonitorTest API call.

---

##### `StartCacheReport`<sup>Required</sup> <a name="StartCacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.StartCacheReport"></a>

```typescript
public readonly StartCacheReport: string[];
```

- *Type:* string[]

IAM actions required for the StartCacheReport API call.

---

##### `StartGateway`<sup>Required</sup> <a name="StartGateway" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.StartGateway"></a>

```typescript
public readonly StartGateway: string[];
```

- *Type:* string[]

IAM actions required for the StartGateway API call.

---

##### `UpdateAutomaticTapeCreationPolicy`<sup>Required</sup> <a name="UpdateAutomaticTapeCreationPolicy" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateAutomaticTapeCreationPolicy"></a>

```typescript
public readonly UpdateAutomaticTapeCreationPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutomaticTapeCreationPolicy API call.

---

##### `UpdateBandwidthRateLimit`<sup>Required</sup> <a name="UpdateBandwidthRateLimit" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateBandwidthRateLimit"></a>

```typescript
public readonly UpdateBandwidthRateLimit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBandwidthRateLimit API call.

---

##### `UpdateBandwidthRateLimitSchedule`<sup>Required</sup> <a name="UpdateBandwidthRateLimitSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateBandwidthRateLimitSchedule"></a>

```typescript
public readonly UpdateBandwidthRateLimitSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBandwidthRateLimitSchedule API call.

---

##### `UpdateChapCredentials`<sup>Required</sup> <a name="UpdateChapCredentials" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateChapCredentials"></a>

```typescript
public readonly UpdateChapCredentials: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChapCredentials API call.

---

##### `UpdateFileSystemAssociation`<sup>Required</sup> <a name="UpdateFileSystemAssociation" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateFileSystemAssociation"></a>

```typescript
public readonly UpdateFileSystemAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFileSystemAssociation API call.

---

##### `UpdateGatewayInformation`<sup>Required</sup> <a name="UpdateGatewayInformation" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateGatewayInformation"></a>

```typescript
public readonly UpdateGatewayInformation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewayInformation API call.

---

##### `UpdateGatewaySoftwareNow`<sup>Required</sup> <a name="UpdateGatewaySoftwareNow" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateGatewaySoftwareNow"></a>

```typescript
public readonly UpdateGatewaySoftwareNow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGatewaySoftwareNow API call.

---

##### `UpdateMaintenanceStartTime`<sup>Required</sup> <a name="UpdateMaintenanceStartTime" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateMaintenanceStartTime"></a>

```typescript
public readonly UpdateMaintenanceStartTime: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMaintenanceStartTime API call.

---

##### `UpdateNFSFileShare`<sup>Required</sup> <a name="UpdateNFSFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateNFSFileShare"></a>

```typescript
public readonly UpdateNFSFileShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNFSFileShare API call.

---

##### `UpdateSMBFileShare`<sup>Required</sup> <a name="UpdateSMBFileShare" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBFileShare"></a>

```typescript
public readonly UpdateSMBFileShare: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSMBFileShare API call.

---

##### `UpdateSMBFileShareVisibility`<sup>Required</sup> <a name="UpdateSMBFileShareVisibility" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBFileShareVisibility"></a>

```typescript
public readonly UpdateSMBFileShareVisibility: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSMBFileShareVisibility API call.

---

##### `UpdateSMBLocalGroups`<sup>Required</sup> <a name="UpdateSMBLocalGroups" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBLocalGroups"></a>

```typescript
public readonly UpdateSMBLocalGroups: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSMBLocalGroups API call.

---

##### `UpdateSMBSecurityStrategy`<sup>Required</sup> <a name="UpdateSMBSecurityStrategy" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSMBSecurityStrategy"></a>

```typescript
public readonly UpdateSMBSecurityStrategy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSMBSecurityStrategy API call.

---

##### `UpdateSnapshotSchedule`<sup>Required</sup> <a name="UpdateSnapshotSchedule" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateSnapshotSchedule"></a>

```typescript
public readonly UpdateSnapshotSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSnapshotSchedule API call.

---

##### `UpdateVTLDeviceType`<sup>Required</sup> <a name="UpdateVTLDeviceType" id="@cdk_utils/iam.storagegateway.StorageGatewayOperations.property.UpdateVTLDeviceType"></a>

```typescript
public readonly UpdateVTLDeviceType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVTLDeviceType API call.

---

### StorageGatewayResources <a name="StorageGatewayResources" id="@cdk_utils/iam.storagegateway.StorageGatewayResources"></a>

ARN builders, validators, and parsers for storagegateway resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.Initializer"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

new storagegateway.StorageGatewayResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.cacheReport">cacheReport</a></code> | Builds an ARN for the cache-report resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.device">device</a></code> | Builds an ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.fsAssociation">fsAssociation</a></code> | Builds an ARN for the fs-association resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.gateway">gateway</a></code> | Builds an ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidCacheReportArn">isValidCacheReportArn</a></code> | Validates whether a string is a valid ARN for the cache-report resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidDeviceArn">isValidDeviceArn</a></code> | Validates whether a string is a valid ARN for the device resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidFsAssociationArn">isValidFsAssociationArn</a></code> | Validates whether a string is a valid ARN for the fs-association resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidGatewayArn">isValidGatewayArn</a></code> | Validates whether a string is a valid ARN for the gateway resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidShareArn">isValidShareArn</a></code> | Validates whether a string is a valid ARN for the share resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTapeArn">isValidTapeArn</a></code> | Validates whether a string is a valid ARN for the tape resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTapepoolArn">isValidTapepoolArn</a></code> | Validates whether a string is a valid ARN for the tapepool resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTargetArn">isValidTargetArn</a></code> | Validates whether a string is a valid ARN for the target resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidVolumeArn">isValidVolumeArn</a></code> | Validates whether a string is a valid ARN for the volume resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseCacheReportArn">parseCacheReportArn</a></code> | Parses a cache-report ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseDeviceArn">parseDeviceArn</a></code> | Parses a device ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseFsAssociationArn">parseFsAssociationArn</a></code> | Parses a fs-association ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseGatewayArn">parseGatewayArn</a></code> | Parses a gateway ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseShareArn">parseShareArn</a></code> | Parses a share ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTapeArn">parseTapeArn</a></code> | Parses a tape ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTapepoolArn">parseTapepoolArn</a></code> | Parses a tapepool ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTargetArn">parseTargetArn</a></code> | Parses a target ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.parseVolumeArn">parseVolumeArn</a></code> | Parses a volume ARN into its components. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.share">share</a></code> | Builds an ARN for the share resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.tape">tape</a></code> | Builds an ARN for the tape resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.tapepool">tapepool</a></code> | Builds an ARN for the tapepool resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.target">target</a></code> | Builds an ARN for the target resource. |
| <code><a href="#@cdk_utils/iam.storagegateway.StorageGatewayResources.volume">volume</a></code> | Builds an ARN for the volume resource. |

---

##### `cacheReport` <a name="cacheReport" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.cacheReport"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.cacheReport(props: StorageGatewayCacheReportArnProps)
```

Builds an ARN for the cache-report resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.cacheReport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayCacheReportArnProps">StorageGatewayCacheReportArnProps</a>

---

##### `device` <a name="device" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.device"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.device(props: StorageGatewayDeviceArnProps)
```

Builds an ARN for the device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.device.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayDeviceArnProps">StorageGatewayDeviceArnProps</a>

---

##### `fsAssociation` <a name="fsAssociation" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.fsAssociation"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.fsAssociation(props: StorageGatewayFsAssociationArnProps)
```

Builds an ARN for the fs-association resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.fsAssociation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayFsAssociationArnProps">StorageGatewayFsAssociationArnProps</a>

---

##### `gateway` <a name="gateway" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.gateway"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.gateway(props: StorageGatewayGatewayArnProps)
```

Builds an ARN for the gateway resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.gateway.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayGatewayArnProps">StorageGatewayGatewayArnProps</a>

---

##### `isValidCacheReportArn` <a name="isValidCacheReportArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidCacheReportArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidCacheReportArn(arn: string)
```

Validates whether a string is a valid ARN for the cache-report resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidCacheReportArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDeviceArn` <a name="isValidDeviceArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidDeviceArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFsAssociationArn` <a name="isValidFsAssociationArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidFsAssociationArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidFsAssociationArn(arn: string)
```

Validates whether a string is a valid ARN for the fs-association resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidFsAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGatewayArn` <a name="isValidGatewayArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidGatewayArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidGatewayArn(arn: string)
```

Validates whether a string is a valid ARN for the gateway resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidShareArn` <a name="isValidShareArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidShareArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidShareArn(arn: string)
```

Validates whether a string is a valid ARN for the share resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidShareArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTapeArn` <a name="isValidTapeArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTapeArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidTapeArn(arn: string)
```

Validates whether a string is a valid ARN for the tape resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTapeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTapepoolArn` <a name="isValidTapepoolArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTapepoolArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidTapepoolArn(arn: string)
```

Validates whether a string is a valid ARN for the tapepool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTapepoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTargetArn` <a name="isValidTargetArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTargetArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidTargetArn(arn: string)
```

Validates whether a string is a valid ARN for the target resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidTargetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVolumeArn` <a name="isValidVolumeArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidVolumeArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.isValidVolumeArn(arn: string)
```

Validates whether a string is a valid ARN for the volume resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.isValidVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCacheReportArn` <a name="parseCacheReportArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseCacheReportArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseCacheReportArn(arn: string)
```

Parses a cache-report ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseCacheReportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDeviceArn` <a name="parseDeviceArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseDeviceArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseDeviceArn(arn: string)
```

Parses a device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFsAssociationArn` <a name="parseFsAssociationArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseFsAssociationArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseFsAssociationArn(arn: string)
```

Parses a fs-association ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseFsAssociationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGatewayArn` <a name="parseGatewayArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseGatewayArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseGatewayArn(arn: string)
```

Parses a gateway ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseGatewayArn.parameter.arn"></a>

- *Type:* string

---

##### `parseShareArn` <a name="parseShareArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseShareArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseShareArn(arn: string)
```

Parses a share ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseShareArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTapeArn` <a name="parseTapeArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTapeArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseTapeArn(arn: string)
```

Parses a tape ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTapeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTapepoolArn` <a name="parseTapepoolArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTapepoolArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseTapepoolArn(arn: string)
```

Parses a tapepool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTapepoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTargetArn` <a name="parseTargetArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTargetArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseTargetArn(arn: string)
```

Parses a target ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseTargetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVolumeArn` <a name="parseVolumeArn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseVolumeArn"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.parseVolumeArn(arn: string)
```

Parses a volume ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.parseVolumeArn.parameter.arn"></a>

- *Type:* string

---

##### `share` <a name="share" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.share"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.share(props: StorageGatewayShareArnProps)
```

Builds an ARN for the share resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.share.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayShareArnProps">StorageGatewayShareArnProps</a>

---

##### `tape` <a name="tape" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.tape"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.tape(props: StorageGatewayTapeArnProps)
```

Builds an ARN for the tape resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.tape.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapeArnProps">StorageGatewayTapeArnProps</a>

---

##### `tapepool` <a name="tapepool" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.tapepool"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.tapepool(props: StorageGatewayTapepoolArnProps)
```

Builds an ARN for the tapepool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.tapepool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayTapepoolArnProps">StorageGatewayTapepoolArnProps</a>

---

##### `target` <a name="target" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.target"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.target(props: StorageGatewayTargetArnProps)
```

Builds an ARN for the target resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.target.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayTargetArnProps">StorageGatewayTargetArnProps</a>

---

##### `volume` <a name="volume" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.volume"></a>

```typescript
import { storagegateway } from '@cdk_utils/iam'

storagegateway.StorageGatewayResources.volume(props: StorageGatewayVolumeArnProps)
```

Builds an ARN for the volume resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.storagegateway.StorageGatewayResources.volume.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.storagegateway.StorageGatewayVolumeArnProps">StorageGatewayVolumeArnProps</a>

---




