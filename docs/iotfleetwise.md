# `iotfleetwise` Submodule <a name="`iotfleetwise` Submodule" id="@cdk_utils/iam.iotfleetwise"></a>


## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseCampaignArnComponents <a name="IotfleetwiseCampaignArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents"></a>

Parsed components of a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseCampaignArnComponents: iotfleetwise.IotfleetwiseCampaignArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.campaignName">campaignName</a></code> | <code>string</code> | The CampaignName component. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `campaignName`<sup>Required</sup> <a name="campaignName" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.campaignName"></a>

```typescript
public readonly campaignName: string;
```

- *Type:* string

The CampaignName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotfleetwiseCampaignArnProps <a name="IotfleetwiseCampaignArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps"></a>

Properties for building a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseCampaignArnProps: iotfleetwise.IotfleetwiseCampaignArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.campaignName">campaignName</a></code> | <code>string</code> | The CampaignName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `campaignName`<sup>Required</sup> <a name="campaignName" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.campaignName"></a>

```typescript
public readonly campaignName: string;
```

- *Type:* string

The CampaignName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotfleetwiseDecodermanifestArnComponents <a name="IotfleetwiseDecodermanifestArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents"></a>

Parsed components of a decodermanifest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseDecodermanifestArnComponents: iotfleetwise.IotfleetwiseDecodermanifestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotfleetwiseDecodermanifestArnProps <a name="IotfleetwiseDecodermanifestArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps"></a>

Properties for building a decodermanifest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseDecodermanifestArnProps: iotfleetwise.IotfleetwiseDecodermanifestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotfleetwiseFleetArnComponents <a name="IotfleetwiseFleetArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents"></a>

Parsed components of a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseFleetArnComponents: iotfleetwise.IotfleetwiseFleetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotfleetwiseFleetArnProps <a name="IotfleetwiseFleetArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps"></a>

Properties for building a fleet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseFleetArnProps: iotfleetwise.IotfleetwiseFleetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.fleetId">fleetId</a></code> | <code>string</code> | The FleetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `fleetId`<sup>Required</sup> <a name="fleetId" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.fleetId"></a>

```typescript
public readonly fleetId: string;
```

- *Type:* string

The FleetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotfleetwiseModelmanifestArnComponents <a name="IotfleetwiseModelmanifestArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents"></a>

Parsed components of a modelmanifest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseModelmanifestArnComponents: iotfleetwise.IotfleetwiseModelmanifestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotfleetwiseModelmanifestArnProps <a name="IotfleetwiseModelmanifestArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps"></a>

Properties for building a modelmanifest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseModelmanifestArnProps: iotfleetwise.IotfleetwiseModelmanifestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotfleetwiseSignalcatalogArnComponents <a name="IotfleetwiseSignalcatalogArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents"></a>

Parsed components of a signalcatalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseSignalcatalogArnComponents: iotfleetwise.IotfleetwiseSignalcatalogArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IotfleetwiseSignalcatalogArnProps <a name="IotfleetwiseSignalcatalogArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps"></a>

Properties for building a signalcatalog ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseSignalcatalogArnProps: iotfleetwise.IotfleetwiseSignalcatalogArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotfleetwiseStatetemplateArnComponents <a name="IotfleetwiseStatetemplateArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents"></a>

Parsed components of a statetemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseStatetemplateArnComponents: iotfleetwise.IotfleetwiseStatetemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.stateTemplateId">stateTemplateId</a></code> | <code>string</code> | The StateTemplateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `stateTemplateId`<sup>Required</sup> <a name="stateTemplateId" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnComponents.property.stateTemplateId"></a>

```typescript
public readonly stateTemplateId: string;
```

- *Type:* string

The StateTemplateId component.

---

### IotfleetwiseStatetemplateArnProps <a name="IotfleetwiseStatetemplateArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps"></a>

Properties for building a statetemplate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseStatetemplateArnProps: iotfleetwise.IotfleetwiseStatetemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.stateTemplateId">stateTemplateId</a></code> | <code>string</code> | The StateTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `stateTemplateId`<sup>Required</sup> <a name="stateTemplateId" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.stateTemplateId"></a>

```typescript
public readonly stateTemplateId: string;
```

- *Type:* string

The StateTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IotfleetwiseVehicleArnComponents <a name="IotfleetwiseVehicleArnComponents" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents"></a>

Parsed components of a vehicle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseVehicleArnComponents: iotfleetwise.IotfleetwiseVehicleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.vehicleId">vehicleId</a></code> | <code>string</code> | The VehicleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `vehicleId`<sup>Required</sup> <a name="vehicleId" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnComponents.property.vehicleId"></a>

```typescript
public readonly vehicleId: string;
```

- *Type:* string

The VehicleId component.

---

### IotfleetwiseVehicleArnProps <a name="IotfleetwiseVehicleArnProps" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps"></a>

Properties for building a vehicle ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

const iotfleetwiseVehicleArnProps: iotfleetwise.IotfleetwiseVehicleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.vehicleId">vehicleId</a></code> | <code>string</code> | The VehicleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `vehicleId`<sup>Required</sup> <a name="vehicleId" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.vehicleId"></a>

```typescript
public readonly vehicleId: string;
```

- *Type:* string

The VehicleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseActions <a name="IotfleetwiseActions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions"></a>

IAM action constants for the iotfleetwise service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

new iotfleetwise.IotfleetwiseActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetCampaign">actionGetCampaign</a></code> | <code>string</code> | [Read] iotfleetwise:GetCampaign. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetDecoderManifest">actionGetDecoderManifest</a></code> | <code>string</code> | [Read] iotfleetwise:GetDecoderManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetEncryptionConfiguration">actionGetEncryptionConfiguration</a></code> | <code>string</code> | [Read] iotfleetwise:GetEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetFleet">actionGetFleet</a></code> | <code>string</code> | [Read] iotfleetwise:GetFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetLoggingOptions">actionGetLoggingOptions</a></code> | <code>string</code> | [Read] iotfleetwise:GetLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetModelManifest">actionGetModelManifest</a></code> | <code>string</code> | [Read] iotfleetwise:GetModelManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetRegisterAccountStatus">actionGetRegisterAccountStatus</a></code> | <code>string</code> | [Read] iotfleetwise:GetRegisterAccountStatus. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetSignalCatalog">actionGetSignalCatalog</a></code> | <code>string</code> | [Read] iotfleetwise:GetSignalCatalog. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetStateTemplate">actionGetStateTemplate</a></code> | <code>string</code> | [Read] iotfleetwise:GetStateTemplate. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetVehicle">actionGetVehicle</a></code> | <code>string</code> | [Read] iotfleetwise:GetVehicle. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetVehicleStatus">actionGetVehicleStatus</a></code> | <code>string</code> | [Read] iotfleetwise:GetVehicleStatus. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AssociateVehicleFleet">AssociateVehicleFleet</a></code> | <code>string</code> | [Write] iotfleetwise:AssociateVehicleFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateCampaign">CreateCampaign</a></code> | <code>string</code> | [Write] iotfleetwise:CreateCampaign. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateDecoderManifest">CreateDecoderManifest</a></code> | <code>string</code> | [Write] iotfleetwise:CreateDecoderManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateFleet">CreateFleet</a></code> | <code>string</code> | [Write] iotfleetwise:CreateFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateModelManifest">CreateModelManifest</a></code> | <code>string</code> | [Write] iotfleetwise:CreateModelManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateSignalCatalog">CreateSignalCatalog</a></code> | <code>string</code> | [Write] iotfleetwise:CreateSignalCatalog. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateStateTemplate">CreateStateTemplate</a></code> | <code>string</code> | [Write] iotfleetwise:CreateStateTemplate. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateVehicle">CreateVehicle</a></code> | <code>string</code> | [Write] iotfleetwise:CreateVehicle. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteCampaign. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteDecoderManifest">DeleteDecoderManifest</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteDecoderManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteFleet">DeleteFleet</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteModelManifest">DeleteModelManifest</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteModelManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteSignalCatalog">DeleteSignalCatalog</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteSignalCatalog. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteStateTemplate">DeleteStateTemplate</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteStateTemplate. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteVehicle">DeleteVehicle</a></code> | <code>string</code> | [Write] iotfleetwise:DeleteVehicle. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DisassociateVehicleFleet">DisassociateVehicleFleet</a></code> | <code>string</code> | [Write] iotfleetwise:DisassociateVehicleFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.GenerateCommandPayload">GenerateCommandPayload</a></code> | <code>string</code> | [PermissionManagement] iotfleetwise:GenerateCommandPayload. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ImportDecoderManifest">ImportDecoderManifest</a></code> | <code>string</code> | [Write] iotfleetwise:ImportDecoderManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ImportSignalCatalog">ImportSignalCatalog</a></code> | <code>string</code> | [Write] iotfleetwise:ImportSignalCatalog. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListCampaigns">ListCampaigns</a></code> | <code>string</code> | [Read] iotfleetwise:ListCampaigns. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListDecoderManifestNetworkInterfaces">ListDecoderManifestNetworkInterfaces</a></code> | <code>string</code> | [List] iotfleetwise:ListDecoderManifestNetworkInterfaces. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListDecoderManifests">ListDecoderManifests</a></code> | <code>string</code> | [Read] iotfleetwise:ListDecoderManifests. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListDecoderManifestSignals">ListDecoderManifestSignals</a></code> | <code>string</code> | [List] iotfleetwise:ListDecoderManifestSignals. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListFleets">ListFleets</a></code> | <code>string</code> | [Read] iotfleetwise:ListFleets. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListFleetsForVehicle">ListFleetsForVehicle</a></code> | <code>string</code> | [Read] iotfleetwise:ListFleetsForVehicle. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListModelManifestNodes">ListModelManifestNodes</a></code> | <code>string</code> | [List] iotfleetwise:ListModelManifestNodes. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListModelManifests">ListModelManifests</a></code> | <code>string</code> | [Read] iotfleetwise:ListModelManifests. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListSignalCatalogNodes">ListSignalCatalogNodes</a></code> | <code>string</code> | [Read] iotfleetwise:ListSignalCatalogNodes. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListSignalCatalogs">ListSignalCatalogs</a></code> | <code>string</code> | [Read] iotfleetwise:ListSignalCatalogs. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListStateTemplates">ListStateTemplates</a></code> | <code>string</code> | [Read] iotfleetwise:ListStateTemplates. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotfleetwise:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListVehicles">ListVehicles</a></code> | <code>string</code> | [Read] iotfleetwise:ListVehicles. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListVehiclesInFleet">ListVehiclesInFleet</a></code> | <code>string</code> | [Read] iotfleetwise:ListVehiclesInFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.PutEncryptionConfiguration">PutEncryptionConfiguration</a></code> | <code>string</code> | [Write] iotfleetwise:PutEncryptionConfiguration. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.PutLoggingOptions">PutLoggingOptions</a></code> | <code>string</code> | [Write] iotfleetwise:PutLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.RegisterAccount">RegisterAccount</a></code> | <code>string</code> | [Write] iotfleetwise:RegisterAccount. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotfleetwise:TagResource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotfleetwise:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateCampaign. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateDecoderManifest">UpdateDecoderManifest</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateDecoderManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateFleet">UpdateFleet</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateFleet. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateModelManifest">UpdateModelManifest</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateModelManifest. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateSignalCatalog">UpdateSignalCatalog</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateSignalCatalog. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateStateTemplate">UpdateStateTemplate</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateStateTemplate. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateVehicle">UpdateVehicle</a></code> | <code>string</code> | [Write] iotfleetwise:UpdateVehicle. |

---

##### `actionGetCampaign`<sup>Required</sup> <a name="actionGetCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetCampaign"></a>

```typescript
public readonly actionGetCampaign: string;
```

- *Type:* string

[Read] iotfleetwise:GetCampaign.

---

##### `actionGetDecoderManifest`<sup>Required</sup> <a name="actionGetDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetDecoderManifest"></a>

```typescript
public readonly actionGetDecoderManifest: string;
```

- *Type:* string

[Read] iotfleetwise:GetDecoderManifest.

---

##### `actionGetEncryptionConfiguration`<sup>Required</sup> <a name="actionGetEncryptionConfiguration" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetEncryptionConfiguration"></a>

```typescript
public readonly actionGetEncryptionConfiguration: string;
```

- *Type:* string

[Read] iotfleetwise:GetEncryptionConfiguration.

---

##### `actionGetFleet`<sup>Required</sup> <a name="actionGetFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetFleet"></a>

```typescript
public readonly actionGetFleet: string;
```

- *Type:* string

[Read] iotfleetwise:GetFleet.

---

##### `actionGetLoggingOptions`<sup>Required</sup> <a name="actionGetLoggingOptions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetLoggingOptions"></a>

```typescript
public readonly actionGetLoggingOptions: string;
```

- *Type:* string

[Read] iotfleetwise:GetLoggingOptions.

---

##### `actionGetModelManifest`<sup>Required</sup> <a name="actionGetModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetModelManifest"></a>

```typescript
public readonly actionGetModelManifest: string;
```

- *Type:* string

[Read] iotfleetwise:GetModelManifest.

---

##### `actionGetRegisterAccountStatus`<sup>Required</sup> <a name="actionGetRegisterAccountStatus" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetRegisterAccountStatus"></a>

```typescript
public readonly actionGetRegisterAccountStatus: string;
```

- *Type:* string

[Read] iotfleetwise:GetRegisterAccountStatus.

---

##### `actionGetSignalCatalog`<sup>Required</sup> <a name="actionGetSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetSignalCatalog"></a>

```typescript
public readonly actionGetSignalCatalog: string;
```

- *Type:* string

[Read] iotfleetwise:GetSignalCatalog.

---

##### `actionGetStateTemplate`<sup>Required</sup> <a name="actionGetStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetStateTemplate"></a>

```typescript
public readonly actionGetStateTemplate: string;
```

- *Type:* string

[Read] iotfleetwise:GetStateTemplate.

---

##### `actionGetVehicle`<sup>Required</sup> <a name="actionGetVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetVehicle"></a>

```typescript
public readonly actionGetVehicle: string;
```

- *Type:* string

[Read] iotfleetwise:GetVehicle.

---

##### `actionGetVehicleStatus`<sup>Required</sup> <a name="actionGetVehicleStatus" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.actionGetVehicleStatus"></a>

```typescript
public readonly actionGetVehicleStatus: string;
```

- *Type:* string

[Read] iotfleetwise:GetVehicleStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateVehicleFleet`<sup>Required</sup> <a name="AssociateVehicleFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.AssociateVehicleFleet"></a>

```typescript
public readonly AssociateVehicleFleet: string;
```

- *Type:* string

[Write] iotfleetwise:AssociateVehicleFleet.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string;
```

- *Type:* string

[Write] iotfleetwise:CreateCampaign.

---

##### `CreateDecoderManifest`<sup>Required</sup> <a name="CreateDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateDecoderManifest"></a>

```typescript
public readonly CreateDecoderManifest: string;
```

- *Type:* string

[Write] iotfleetwise:CreateDecoderManifest.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string;
```

- *Type:* string

[Write] iotfleetwise:CreateFleet.

---

##### `CreateModelManifest`<sup>Required</sup> <a name="CreateModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateModelManifest"></a>

```typescript
public readonly CreateModelManifest: string;
```

- *Type:* string

[Write] iotfleetwise:CreateModelManifest.

---

##### `CreateSignalCatalog`<sup>Required</sup> <a name="CreateSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateSignalCatalog"></a>

```typescript
public readonly CreateSignalCatalog: string;
```

- *Type:* string

[Write] iotfleetwise:CreateSignalCatalog.

---

##### `CreateStateTemplate`<sup>Required</sup> <a name="CreateStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateStateTemplate"></a>

```typescript
public readonly CreateStateTemplate: string;
```

- *Type:* string

[Write] iotfleetwise:CreateStateTemplate.

---

##### `CreateVehicle`<sup>Required</sup> <a name="CreateVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.CreateVehicle"></a>

```typescript
public readonly CreateVehicle: string;
```

- *Type:* string

[Write] iotfleetwise:CreateVehicle.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteCampaign.

---

##### `DeleteDecoderManifest`<sup>Required</sup> <a name="DeleteDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteDecoderManifest"></a>

```typescript
public readonly DeleteDecoderManifest: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteDecoderManifest.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteFleet.

---

##### `DeleteModelManifest`<sup>Required</sup> <a name="DeleteModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteModelManifest"></a>

```typescript
public readonly DeleteModelManifest: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteModelManifest.

---

##### `DeleteSignalCatalog`<sup>Required</sup> <a name="DeleteSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteSignalCatalog"></a>

```typescript
public readonly DeleteSignalCatalog: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteSignalCatalog.

---

##### `DeleteStateTemplate`<sup>Required</sup> <a name="DeleteStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteStateTemplate"></a>

```typescript
public readonly DeleteStateTemplate: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteStateTemplate.

---

##### `DeleteVehicle`<sup>Required</sup> <a name="DeleteVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DeleteVehicle"></a>

```typescript
public readonly DeleteVehicle: string;
```

- *Type:* string

[Write] iotfleetwise:DeleteVehicle.

---

##### `DisassociateVehicleFleet`<sup>Required</sup> <a name="DisassociateVehicleFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.DisassociateVehicleFleet"></a>

```typescript
public readonly DisassociateVehicleFleet: string;
```

- *Type:* string

[Write] iotfleetwise:DisassociateVehicleFleet.

---

##### `GenerateCommandPayload`<sup>Required</sup> <a name="GenerateCommandPayload" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.GenerateCommandPayload"></a>

```typescript
public readonly GenerateCommandPayload: string;
```

- *Type:* string

[PermissionManagement] iotfleetwise:GenerateCommandPayload.

---

##### `ImportDecoderManifest`<sup>Required</sup> <a name="ImportDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ImportDecoderManifest"></a>

```typescript
public readonly ImportDecoderManifest: string;
```

- *Type:* string

[Write] iotfleetwise:ImportDecoderManifest.

---

##### `ImportSignalCatalog`<sup>Required</sup> <a name="ImportSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ImportSignalCatalog"></a>

```typescript
public readonly ImportSignalCatalog: string;
```

- *Type:* string

[Write] iotfleetwise:ImportSignalCatalog.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string;
```

- *Type:* string

[Read] iotfleetwise:ListCampaigns.

---

##### `ListDecoderManifestNetworkInterfaces`<sup>Required</sup> <a name="ListDecoderManifestNetworkInterfaces" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListDecoderManifestNetworkInterfaces"></a>

```typescript
public readonly ListDecoderManifestNetworkInterfaces: string;
```

- *Type:* string

[List] iotfleetwise:ListDecoderManifestNetworkInterfaces.

---

##### `ListDecoderManifests`<sup>Required</sup> <a name="ListDecoderManifests" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListDecoderManifests"></a>

```typescript
public readonly ListDecoderManifests: string;
```

- *Type:* string

[Read] iotfleetwise:ListDecoderManifests.

---

##### `ListDecoderManifestSignals`<sup>Required</sup> <a name="ListDecoderManifestSignals" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListDecoderManifestSignals"></a>

```typescript
public readonly ListDecoderManifestSignals: string;
```

- *Type:* string

[List] iotfleetwise:ListDecoderManifestSignals.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListFleets"></a>

```typescript
public readonly ListFleets: string;
```

- *Type:* string

[Read] iotfleetwise:ListFleets.

---

##### `ListFleetsForVehicle`<sup>Required</sup> <a name="ListFleetsForVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListFleetsForVehicle"></a>

```typescript
public readonly ListFleetsForVehicle: string;
```

- *Type:* string

[Read] iotfleetwise:ListFleetsForVehicle.

---

##### `ListModelManifestNodes`<sup>Required</sup> <a name="ListModelManifestNodes" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListModelManifestNodes"></a>

```typescript
public readonly ListModelManifestNodes: string;
```

- *Type:* string

[List] iotfleetwise:ListModelManifestNodes.

---

##### `ListModelManifests`<sup>Required</sup> <a name="ListModelManifests" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListModelManifests"></a>

```typescript
public readonly ListModelManifests: string;
```

- *Type:* string

[Read] iotfleetwise:ListModelManifests.

---

##### `ListSignalCatalogNodes`<sup>Required</sup> <a name="ListSignalCatalogNodes" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListSignalCatalogNodes"></a>

```typescript
public readonly ListSignalCatalogNodes: string;
```

- *Type:* string

[Read] iotfleetwise:ListSignalCatalogNodes.

---

##### `ListSignalCatalogs`<sup>Required</sup> <a name="ListSignalCatalogs" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListSignalCatalogs"></a>

```typescript
public readonly ListSignalCatalogs: string;
```

- *Type:* string

[Read] iotfleetwise:ListSignalCatalogs.

---

##### `ListStateTemplates`<sup>Required</sup> <a name="ListStateTemplates" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListStateTemplates"></a>

```typescript
public readonly ListStateTemplates: string;
```

- *Type:* string

[Read] iotfleetwise:ListStateTemplates.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotfleetwise:ListTagsForResource.

---

##### `ListVehicles`<sup>Required</sup> <a name="ListVehicles" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListVehicles"></a>

```typescript
public readonly ListVehicles: string;
```

- *Type:* string

[Read] iotfleetwise:ListVehicles.

---

##### `ListVehiclesInFleet`<sup>Required</sup> <a name="ListVehiclesInFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.ListVehiclesInFleet"></a>

```typescript
public readonly ListVehiclesInFleet: string;
```

- *Type:* string

[Read] iotfleetwise:ListVehiclesInFleet.

---

##### `PutEncryptionConfiguration`<sup>Required</sup> <a name="PutEncryptionConfiguration" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.PutEncryptionConfiguration"></a>

```typescript
public readonly PutEncryptionConfiguration: string;
```

- *Type:* string

[Write] iotfleetwise:PutEncryptionConfiguration.

---

##### `PutLoggingOptions`<sup>Required</sup> <a name="PutLoggingOptions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.PutLoggingOptions"></a>

```typescript
public readonly PutLoggingOptions: string;
```

- *Type:* string

[Write] iotfleetwise:PutLoggingOptions.

---

##### `RegisterAccount`<sup>Required</sup> <a name="RegisterAccount" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.RegisterAccount"></a>

```typescript
public readonly RegisterAccount: string;
```

- *Type:* string

[Write] iotfleetwise:RegisterAccount.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotfleetwise:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotfleetwise:UntagResource.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateCampaign.

---

##### `UpdateDecoderManifest`<sup>Required</sup> <a name="UpdateDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateDecoderManifest"></a>

```typescript
public readonly UpdateDecoderManifest: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateDecoderManifest.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateFleet.

---

##### `UpdateModelManifest`<sup>Required</sup> <a name="UpdateModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateModelManifest"></a>

```typescript
public readonly UpdateModelManifest: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateModelManifest.

---

##### `UpdateSignalCatalog`<sup>Required</sup> <a name="UpdateSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateSignalCatalog"></a>

```typescript
public readonly UpdateSignalCatalog: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateSignalCatalog.

---

##### `UpdateStateTemplate`<sup>Required</sup> <a name="UpdateStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateStateTemplate"></a>

```typescript
public readonly UpdateStateTemplate: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateStateTemplate.

---

##### `UpdateVehicle`<sup>Required</sup> <a name="UpdateVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseActions.property.UpdateVehicle"></a>

```typescript
public readonly UpdateVehicle: string;
```

- *Type:* string

[Write] iotfleetwise:UpdateVehicle.

---

### IotfleetwiseConditions <a name="IotfleetwiseConditions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions"></a>

Condition key constants and builders for iotfleetwise.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

new iotfleetwise.IotfleetwiseConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.destinationARN">destinationARN</a></code> | Generates a condition block for `iotfleetwise:DestinationArn`. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.signals">signals</a></code> | Generates a condition block for `iotfleetwise:Signals`. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.updateToDecoderManifestARN">updateToDecoderManifestARN</a></code> | Generates a condition block for `iotfleetwise:UpdateToDecoderManifestArn`. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.updateToModelManifestARN">updateToModelManifestARN</a></code> | Generates a condition block for `iotfleetwise:UpdateToModelManifestArn`. |

---

##### `destinationARN` <a name="destinationARN" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.destinationARN"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.destinationARN(value: string)
```

Generates a condition block for `iotfleetwise:DestinationArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.destinationARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.requestTag"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.resourceTag"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `signals` <a name="signals" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.signals"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.signals(values: string[])
```

Generates a condition block for `iotfleetwise:Signals`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.signals.parameter.values"></a>

- *Type:* string[]

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.tagKeys"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `updateToDecoderManifestARN` <a name="updateToDecoderManifestARN" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.updateToDecoderManifestARN"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.updateToDecoderManifestARN(value: string)
```

Generates a condition block for `iotfleetwise:UpdateToDecoderManifestArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.updateToDecoderManifestARN.parameter.value"></a>

- *Type:* string

---

##### `updateToModelManifestARN` <a name="updateToModelManifestARN" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.updateToModelManifestARN"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseConditions.updateToModelManifestARN(value: string)
```

Generates a condition block for `iotfleetwise:UpdateToModelManifestArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.updateToModelManifestARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateCampaignConditionKeys">CreateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCampaign action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateDecoderManifestConditionKeys">CreateDecoderManifestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDecoderManifest action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateFleetConditionKeys">CreateFleetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFleet action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateModelManifestConditionKeys">CreateModelManifestConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateModelManifest action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateSignalCatalogConditionKeys">CreateSignalCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSignalCatalog action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateStateTemplateConditionKeys">CreateStateTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStateTemplate action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateVehicleConditionKeys">CreateVehicleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVehicle action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.DESTINATION_ARN">DESTINATION_ARN</a></code> | <code>string</code> | Condition key: iotfleetwise:DestinationArn (ARN). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.GenerateCommandPayloadConditionKeys">GenerateCommandPayloadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GenerateCommandPayload action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.ImportSignalCatalogConditionKeys">ImportSignalCatalogConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportSignalCatalog action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.SIGNALS">SIGNALS</a></code> | <code>string</code> | Condition key: iotfleetwise:Signals (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UPDATE_TO_DECODER_MANIFEST_ARN">UPDATE_TO_DECODER_MANIFEST_ARN</a></code> | <code>string</code> | Condition key: iotfleetwise:UpdateToDecoderManifestArn (ARN). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UPDATE_TO_MODEL_MANIFEST_ARN">UPDATE_TO_MODEL_MANIFEST_ARN</a></code> | <code>string</code> | Condition key: iotfleetwise:UpdateToModelManifestArn (ARN). |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UpdateVehicleConditionKeys">UpdateVehicleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateVehicle action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCampaignConditionKeys`<sup>Required</sup> <a name="CreateCampaignConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateCampaignConditionKeys"></a>

```typescript
public readonly CreateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCampaign action.

---

##### `CreateDecoderManifestConditionKeys`<sup>Required</sup> <a name="CreateDecoderManifestConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateDecoderManifestConditionKeys"></a>

```typescript
public readonly CreateDecoderManifestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDecoderManifest action.

---

##### `CreateFleetConditionKeys`<sup>Required</sup> <a name="CreateFleetConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateFleetConditionKeys"></a>

```typescript
public readonly CreateFleetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFleet action.

---

##### `CreateModelManifestConditionKeys`<sup>Required</sup> <a name="CreateModelManifestConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateModelManifestConditionKeys"></a>

```typescript
public readonly CreateModelManifestConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateModelManifest action.

---

##### `CreateSignalCatalogConditionKeys`<sup>Required</sup> <a name="CreateSignalCatalogConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateSignalCatalogConditionKeys"></a>

```typescript
public readonly CreateSignalCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSignalCatalog action.

---

##### `CreateStateTemplateConditionKeys`<sup>Required</sup> <a name="CreateStateTemplateConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateStateTemplateConditionKeys"></a>

```typescript
public readonly CreateStateTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStateTemplate action.

---

##### `CreateVehicleConditionKeys`<sup>Required</sup> <a name="CreateVehicleConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.CreateVehicleConditionKeys"></a>

```typescript
public readonly CreateVehicleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVehicle action.

---

##### `DESTINATION_ARN`<sup>Required</sup> <a name="DESTINATION_ARN" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.DESTINATION_ARN"></a>

```typescript
public readonly DESTINATION_ARN: string;
```

- *Type:* string

Condition key: iotfleetwise:DestinationArn (ARN).

---

##### `GenerateCommandPayloadConditionKeys`<sup>Required</sup> <a name="GenerateCommandPayloadConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.GenerateCommandPayloadConditionKeys"></a>

```typescript
public readonly GenerateCommandPayloadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GenerateCommandPayload action.

---

##### `ImportSignalCatalogConditionKeys`<sup>Required</sup> <a name="ImportSignalCatalogConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.ImportSignalCatalogConditionKeys"></a>

```typescript
public readonly ImportSignalCatalogConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportSignalCatalog action.

---

##### `SIGNALS`<sup>Required</sup> <a name="SIGNALS" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.SIGNALS"></a>

```typescript
public readonly SIGNALS: string;
```

- *Type:* string

Condition key: iotfleetwise:Signals (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UPDATE_TO_DECODER_MANIFEST_ARN`<sup>Required</sup> <a name="UPDATE_TO_DECODER_MANIFEST_ARN" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UPDATE_TO_DECODER_MANIFEST_ARN"></a>

```typescript
public readonly UPDATE_TO_DECODER_MANIFEST_ARN: string;
```

- *Type:* string

Condition key: iotfleetwise:UpdateToDecoderManifestArn (ARN).

---

##### `UPDATE_TO_MODEL_MANIFEST_ARN`<sup>Required</sup> <a name="UPDATE_TO_MODEL_MANIFEST_ARN" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UPDATE_TO_MODEL_MANIFEST_ARN"></a>

```typescript
public readonly UPDATE_TO_MODEL_MANIFEST_ARN: string;
```

- *Type:* string

Condition key: iotfleetwise:UpdateToModelManifestArn (ARN).

---

##### `UpdateVehicleConditionKeys`<sup>Required</sup> <a name="UpdateVehicleConditionKeys" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseConditions.property.UpdateVehicleConditionKeys"></a>

```typescript
public readonly UpdateVehicleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateVehicle action.

---

### IotfleetwiseOperations <a name="IotfleetwiseOperations" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations"></a>

API operation to required IAM actions mapping for iotfleetwise.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

new iotfleetwise.IotfleetwiseOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.AssociateVehicleFleet">AssociateVehicleFleet</a></code> | <code>string[]</code> | IAM actions required for the AssociateVehicleFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.BatchCreateVehicle">BatchCreateVehicle</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateVehicle API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.BatchUpdateVehicle">BatchUpdateVehicle</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateVehicle API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateCampaign">CreateCampaign</a></code> | <code>string[]</code> | IAM actions required for the CreateCampaign API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateDecoderManifest">CreateDecoderManifest</a></code> | <code>string[]</code> | IAM actions required for the CreateDecoderManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateFleet">CreateFleet</a></code> | <code>string[]</code> | IAM actions required for the CreateFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateModelManifest">CreateModelManifest</a></code> | <code>string[]</code> | IAM actions required for the CreateModelManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateSignalCatalog">CreateSignalCatalog</a></code> | <code>string[]</code> | IAM actions required for the CreateSignalCatalog API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateStateTemplate">CreateStateTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateStateTemplate API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateVehicle">CreateVehicle</a></code> | <code>string[]</code> | IAM actions required for the CreateVehicle API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaign API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteDecoderManifest">DeleteDecoderManifest</a></code> | <code>string[]</code> | IAM actions required for the DeleteDecoderManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteFleet">DeleteFleet</a></code> | <code>string[]</code> | IAM actions required for the DeleteFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteModelManifest">DeleteModelManifest</a></code> | <code>string[]</code> | IAM actions required for the DeleteModelManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteSignalCatalog">DeleteSignalCatalog</a></code> | <code>string[]</code> | IAM actions required for the DeleteSignalCatalog API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteStateTemplate">DeleteStateTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteStateTemplate API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteVehicle">DeleteVehicle</a></code> | <code>string[]</code> | IAM actions required for the DeleteVehicle API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DisassociateVehicleFleet">DisassociateVehicleFleet</a></code> | <code>string[]</code> | IAM actions required for the DisassociateVehicleFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ImportDecoderManifest">ImportDecoderManifest</a></code> | <code>string[]</code> | IAM actions required for the ImportDecoderManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ImportSignalCatalog">ImportSignalCatalog</a></code> | <code>string[]</code> | IAM actions required for the ImportSignalCatalog API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListCampaigns">ListCampaigns</a></code> | <code>string[]</code> | IAM actions required for the ListCampaigns API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListDecoderManifestNetworkInterfaces">ListDecoderManifestNetworkInterfaces</a></code> | <code>string[]</code> | IAM actions required for the ListDecoderManifestNetworkInterfaces API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListDecoderManifests">ListDecoderManifests</a></code> | <code>string[]</code> | IAM actions required for the ListDecoderManifests API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListDecoderManifestSignals">ListDecoderManifestSignals</a></code> | <code>string[]</code> | IAM actions required for the ListDecoderManifestSignals API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListFleets">ListFleets</a></code> | <code>string[]</code> | IAM actions required for the ListFleets API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListFleetsForVehicle">ListFleetsForVehicle</a></code> | <code>string[]</code> | IAM actions required for the ListFleetsForVehicle API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListModelManifestNodes">ListModelManifestNodes</a></code> | <code>string[]</code> | IAM actions required for the ListModelManifestNodes API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListModelManifests">ListModelManifests</a></code> | <code>string[]</code> | IAM actions required for the ListModelManifests API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListSignalCatalogNodes">ListSignalCatalogNodes</a></code> | <code>string[]</code> | IAM actions required for the ListSignalCatalogNodes API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListSignalCatalogs">ListSignalCatalogs</a></code> | <code>string[]</code> | IAM actions required for the ListSignalCatalogs API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListStateTemplates">ListStateTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListStateTemplates API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListVehicles">ListVehicles</a></code> | <code>string[]</code> | IAM actions required for the ListVehicles API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListVehiclesInFleet">ListVehiclesInFleet</a></code> | <code>string[]</code> | IAM actions required for the ListVehiclesInFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetCampaign">opGetCampaign</a></code> | <code>string[]</code> | IAM actions required for the GetCampaign API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetDecoderManifest">opGetDecoderManifest</a></code> | <code>string[]</code> | IAM actions required for the GetDecoderManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetEncryptionConfiguration">opGetEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetFleet">opGetFleet</a></code> | <code>string[]</code> | IAM actions required for the GetFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetLoggingOptions">opGetLoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the GetLoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetModelManifest">opGetModelManifest</a></code> | <code>string[]</code> | IAM actions required for the GetModelManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetRegisterAccountStatus">opGetRegisterAccountStatus</a></code> | <code>string[]</code> | IAM actions required for the GetRegisterAccountStatus API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetSignalCatalog">opGetSignalCatalog</a></code> | <code>string[]</code> | IAM actions required for the GetSignalCatalog API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetStateTemplate">opGetStateTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetStateTemplate API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetVehicle">opGetVehicle</a></code> | <code>string[]</code> | IAM actions required for the GetVehicle API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetVehicleStatus">opGetVehicleStatus</a></code> | <code>string[]</code> | IAM actions required for the GetVehicleStatus API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.PutEncryptionConfiguration">PutEncryptionConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutEncryptionConfiguration API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.PutLoggingOptions">PutLoggingOptions</a></code> | <code>string[]</code> | IAM actions required for the PutLoggingOptions API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.RegisterAccount">RegisterAccount</a></code> | <code>string[]</code> | IAM actions required for the RegisterAccount API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateCampaign">UpdateCampaign</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaign API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateDecoderManifest">UpdateDecoderManifest</a></code> | <code>string[]</code> | IAM actions required for the UpdateDecoderManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateFleet">UpdateFleet</a></code> | <code>string[]</code> | IAM actions required for the UpdateFleet API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateModelManifest">UpdateModelManifest</a></code> | <code>string[]</code> | IAM actions required for the UpdateModelManifest API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateSignalCatalog">UpdateSignalCatalog</a></code> | <code>string[]</code> | IAM actions required for the UpdateSignalCatalog API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateStateTemplate">UpdateStateTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateStateTemplate API call. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateVehicle">UpdateVehicle</a></code> | <code>string[]</code> | IAM actions required for the UpdateVehicle API call. |

---

##### `AssociateVehicleFleet`<sup>Required</sup> <a name="AssociateVehicleFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.AssociateVehicleFleet"></a>

```typescript
public readonly AssociateVehicleFleet: string[];
```

- *Type:* string[]

IAM actions required for the AssociateVehicleFleet API call.

---

##### `BatchCreateVehicle`<sup>Required</sup> <a name="BatchCreateVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.BatchCreateVehicle"></a>

```typescript
public readonly BatchCreateVehicle: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateVehicle API call.

---

##### `BatchUpdateVehicle`<sup>Required</sup> <a name="BatchUpdateVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.BatchUpdateVehicle"></a>

```typescript
public readonly BatchUpdateVehicle: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateVehicle API call.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the CreateCampaign API call.

---

##### `CreateDecoderManifest`<sup>Required</sup> <a name="CreateDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateDecoderManifest"></a>

```typescript
public readonly CreateDecoderManifest: string[];
```

- *Type:* string[]

IAM actions required for the CreateDecoderManifest API call.

---

##### `CreateFleet`<sup>Required</sup> <a name="CreateFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateFleet"></a>

```typescript
public readonly CreateFleet: string[];
```

- *Type:* string[]

IAM actions required for the CreateFleet API call.

---

##### `CreateModelManifest`<sup>Required</sup> <a name="CreateModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateModelManifest"></a>

```typescript
public readonly CreateModelManifest: string[];
```

- *Type:* string[]

IAM actions required for the CreateModelManifest API call.

---

##### `CreateSignalCatalog`<sup>Required</sup> <a name="CreateSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateSignalCatalog"></a>

```typescript
public readonly CreateSignalCatalog: string[];
```

- *Type:* string[]

IAM actions required for the CreateSignalCatalog API call.

---

##### `CreateStateTemplate`<sup>Required</sup> <a name="CreateStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateStateTemplate"></a>

```typescript
public readonly CreateStateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateStateTemplate API call.

---

##### `CreateVehicle`<sup>Required</sup> <a name="CreateVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.CreateVehicle"></a>

```typescript
public readonly CreateVehicle: string[];
```

- *Type:* string[]

IAM actions required for the CreateVehicle API call.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaign API call.

---

##### `DeleteDecoderManifest`<sup>Required</sup> <a name="DeleteDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteDecoderManifest"></a>

```typescript
public readonly DeleteDecoderManifest: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDecoderManifest API call.

---

##### `DeleteFleet`<sup>Required</sup> <a name="DeleteFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteFleet"></a>

```typescript
public readonly DeleteFleet: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFleet API call.

---

##### `DeleteModelManifest`<sup>Required</sup> <a name="DeleteModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteModelManifest"></a>

```typescript
public readonly DeleteModelManifest: string[];
```

- *Type:* string[]

IAM actions required for the DeleteModelManifest API call.

---

##### `DeleteSignalCatalog`<sup>Required</sup> <a name="DeleteSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteSignalCatalog"></a>

```typescript
public readonly DeleteSignalCatalog: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSignalCatalog API call.

---

##### `DeleteStateTemplate`<sup>Required</sup> <a name="DeleteStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteStateTemplate"></a>

```typescript
public readonly DeleteStateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStateTemplate API call.

---

##### `DeleteVehicle`<sup>Required</sup> <a name="DeleteVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DeleteVehicle"></a>

```typescript
public readonly DeleteVehicle: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVehicle API call.

---

##### `DisassociateVehicleFleet`<sup>Required</sup> <a name="DisassociateVehicleFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.DisassociateVehicleFleet"></a>

```typescript
public readonly DisassociateVehicleFleet: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateVehicleFleet API call.

---

##### `ImportDecoderManifest`<sup>Required</sup> <a name="ImportDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ImportDecoderManifest"></a>

```typescript
public readonly ImportDecoderManifest: string[];
```

- *Type:* string[]

IAM actions required for the ImportDecoderManifest API call.

---

##### `ImportSignalCatalog`<sup>Required</sup> <a name="ImportSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ImportSignalCatalog"></a>

```typescript
public readonly ImportSignalCatalog: string[];
```

- *Type:* string[]

IAM actions required for the ImportSignalCatalog API call.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string[];
```

- *Type:* string[]

IAM actions required for the ListCampaigns API call.

---

##### `ListDecoderManifestNetworkInterfaces`<sup>Required</sup> <a name="ListDecoderManifestNetworkInterfaces" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListDecoderManifestNetworkInterfaces"></a>

```typescript
public readonly ListDecoderManifestNetworkInterfaces: string[];
```

- *Type:* string[]

IAM actions required for the ListDecoderManifestNetworkInterfaces API call.

---

##### `ListDecoderManifests`<sup>Required</sup> <a name="ListDecoderManifests" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListDecoderManifests"></a>

```typescript
public readonly ListDecoderManifests: string[];
```

- *Type:* string[]

IAM actions required for the ListDecoderManifests API call.

---

##### `ListDecoderManifestSignals`<sup>Required</sup> <a name="ListDecoderManifestSignals" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListDecoderManifestSignals"></a>

```typescript
public readonly ListDecoderManifestSignals: string[];
```

- *Type:* string[]

IAM actions required for the ListDecoderManifestSignals API call.

---

##### `ListFleets`<sup>Required</sup> <a name="ListFleets" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListFleets"></a>

```typescript
public readonly ListFleets: string[];
```

- *Type:* string[]

IAM actions required for the ListFleets API call.

---

##### `ListFleetsForVehicle`<sup>Required</sup> <a name="ListFleetsForVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListFleetsForVehicle"></a>

```typescript
public readonly ListFleetsForVehicle: string[];
```

- *Type:* string[]

IAM actions required for the ListFleetsForVehicle API call.

---

##### `ListModelManifestNodes`<sup>Required</sup> <a name="ListModelManifestNodes" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListModelManifestNodes"></a>

```typescript
public readonly ListModelManifestNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListModelManifestNodes API call.

---

##### `ListModelManifests`<sup>Required</sup> <a name="ListModelManifests" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListModelManifests"></a>

```typescript
public readonly ListModelManifests: string[];
```

- *Type:* string[]

IAM actions required for the ListModelManifests API call.

---

##### `ListSignalCatalogNodes`<sup>Required</sup> <a name="ListSignalCatalogNodes" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListSignalCatalogNodes"></a>

```typescript
public readonly ListSignalCatalogNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListSignalCatalogNodes API call.

---

##### `ListSignalCatalogs`<sup>Required</sup> <a name="ListSignalCatalogs" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListSignalCatalogs"></a>

```typescript
public readonly ListSignalCatalogs: string[];
```

- *Type:* string[]

IAM actions required for the ListSignalCatalogs API call.

---

##### `ListStateTemplates`<sup>Required</sup> <a name="ListStateTemplates" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListStateTemplates"></a>

```typescript
public readonly ListStateTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListStateTemplates API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVehicles`<sup>Required</sup> <a name="ListVehicles" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListVehicles"></a>

```typescript
public readonly ListVehicles: string[];
```

- *Type:* string[]

IAM actions required for the ListVehicles API call.

---

##### `ListVehiclesInFleet`<sup>Required</sup> <a name="ListVehiclesInFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.ListVehiclesInFleet"></a>

```typescript
public readonly ListVehiclesInFleet: string[];
```

- *Type:* string[]

IAM actions required for the ListVehiclesInFleet API call.

---

##### `opGetCampaign`<sup>Required</sup> <a name="opGetCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetCampaign"></a>

```typescript
public readonly opGetCampaign: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaign API call.

---

##### `opGetDecoderManifest`<sup>Required</sup> <a name="opGetDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetDecoderManifest"></a>

```typescript
public readonly opGetDecoderManifest: string[];
```

- *Type:* string[]

IAM actions required for the GetDecoderManifest API call.

---

##### `opGetEncryptionConfiguration`<sup>Required</sup> <a name="opGetEncryptionConfiguration" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetEncryptionConfiguration"></a>

```typescript
public readonly opGetEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEncryptionConfiguration API call.

---

##### `opGetFleet`<sup>Required</sup> <a name="opGetFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetFleet"></a>

```typescript
public readonly opGetFleet: string[];
```

- *Type:* string[]

IAM actions required for the GetFleet API call.

---

##### `opGetLoggingOptions`<sup>Required</sup> <a name="opGetLoggingOptions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetLoggingOptions"></a>

```typescript
public readonly opGetLoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggingOptions API call.

---

##### `opGetModelManifest`<sup>Required</sup> <a name="opGetModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetModelManifest"></a>

```typescript
public readonly opGetModelManifest: string[];
```

- *Type:* string[]

IAM actions required for the GetModelManifest API call.

---

##### `opGetRegisterAccountStatus`<sup>Required</sup> <a name="opGetRegisterAccountStatus" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetRegisterAccountStatus"></a>

```typescript
public readonly opGetRegisterAccountStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetRegisterAccountStatus API call.

---

##### `opGetSignalCatalog`<sup>Required</sup> <a name="opGetSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetSignalCatalog"></a>

```typescript
public readonly opGetSignalCatalog: string[];
```

- *Type:* string[]

IAM actions required for the GetSignalCatalog API call.

---

##### `opGetStateTemplate`<sup>Required</sup> <a name="opGetStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetStateTemplate"></a>

```typescript
public readonly opGetStateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetStateTemplate API call.

---

##### `opGetVehicle`<sup>Required</sup> <a name="opGetVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetVehicle"></a>

```typescript
public readonly opGetVehicle: string[];
```

- *Type:* string[]

IAM actions required for the GetVehicle API call.

---

##### `opGetVehicleStatus`<sup>Required</sup> <a name="opGetVehicleStatus" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.opGetVehicleStatus"></a>

```typescript
public readonly opGetVehicleStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetVehicleStatus API call.

---

##### `PutEncryptionConfiguration`<sup>Required</sup> <a name="PutEncryptionConfiguration" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.PutEncryptionConfiguration"></a>

```typescript
public readonly PutEncryptionConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutEncryptionConfiguration API call.

---

##### `PutLoggingOptions`<sup>Required</sup> <a name="PutLoggingOptions" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.PutLoggingOptions"></a>

```typescript
public readonly PutLoggingOptions: string[];
```

- *Type:* string[]

IAM actions required for the PutLoggingOptions API call.

---

##### `RegisterAccount`<sup>Required</sup> <a name="RegisterAccount" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.RegisterAccount"></a>

```typescript
public readonly RegisterAccount: string[];
```

- *Type:* string[]

IAM actions required for the RegisterAccount API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCampaign`<sup>Required</sup> <a name="UpdateCampaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateCampaign"></a>

```typescript
public readonly UpdateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaign API call.

---

##### `UpdateDecoderManifest`<sup>Required</sup> <a name="UpdateDecoderManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateDecoderManifest"></a>

```typescript
public readonly UpdateDecoderManifest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDecoderManifest API call.

---

##### `UpdateFleet`<sup>Required</sup> <a name="UpdateFleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateFleet"></a>

```typescript
public readonly UpdateFleet: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFleet API call.

---

##### `UpdateModelManifest`<sup>Required</sup> <a name="UpdateModelManifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateModelManifest"></a>

```typescript
public readonly UpdateModelManifest: string[];
```

- *Type:* string[]

IAM actions required for the UpdateModelManifest API call.

---

##### `UpdateSignalCatalog`<sup>Required</sup> <a name="UpdateSignalCatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateSignalCatalog"></a>

```typescript
public readonly UpdateSignalCatalog: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSignalCatalog API call.

---

##### `UpdateStateTemplate`<sup>Required</sup> <a name="UpdateStateTemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateStateTemplate"></a>

```typescript
public readonly UpdateStateTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStateTemplate API call.

---

##### `UpdateVehicle`<sup>Required</sup> <a name="UpdateVehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseOperations.property.UpdateVehicle"></a>

```typescript
public readonly UpdateVehicle: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVehicle API call.

---

### IotfleetwiseResources <a name="IotfleetwiseResources" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources"></a>

ARN builders, validators, and parsers for iotfleetwise resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.Initializer"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

new iotfleetwise.IotfleetwiseResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.campaign">campaign</a></code> | Builds an ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.decodermanifest">decodermanifest</a></code> | Builds an ARN for the decodermanifest resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.fleet">fleet</a></code> | Builds an ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidCampaignArn">isValidCampaignArn</a></code> | Validates whether a string is a valid ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidDecodermanifestArn">isValidDecodermanifestArn</a></code> | Validates whether a string is a valid ARN for the decodermanifest resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidFleetArn">isValidFleetArn</a></code> | Validates whether a string is a valid ARN for the fleet resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidModelmanifestArn">isValidModelmanifestArn</a></code> | Validates whether a string is a valid ARN for the modelmanifest resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidSignalcatalogArn">isValidSignalcatalogArn</a></code> | Validates whether a string is a valid ARN for the signalcatalog resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidStatetemplateArn">isValidStatetemplateArn</a></code> | Validates whether a string is a valid ARN for the statetemplate resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidVehicleArn">isValidVehicleArn</a></code> | Validates whether a string is a valid ARN for the vehicle resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.modelmanifest">modelmanifest</a></code> | Builds an ARN for the modelmanifest resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseCampaignArn">parseCampaignArn</a></code> | Parses a campaign ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseDecodermanifestArn">parseDecodermanifestArn</a></code> | Parses a decodermanifest ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseFleetArn">parseFleetArn</a></code> | Parses a fleet ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseModelmanifestArn">parseModelmanifestArn</a></code> | Parses a modelmanifest ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseSignalcatalogArn">parseSignalcatalogArn</a></code> | Parses a signalcatalog ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseStatetemplateArn">parseStatetemplateArn</a></code> | Parses a statetemplate ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseVehicleArn">parseVehicleArn</a></code> | Parses a vehicle ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.signalcatalog">signalcatalog</a></code> | Builds an ARN for the signalcatalog resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.statetemplate">statetemplate</a></code> | Builds an ARN for the statetemplate resource. |
| <code><a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.vehicle">vehicle</a></code> | Builds an ARN for the vehicle resource. |

---

##### `campaign` <a name="campaign" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.campaign"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.campaign(props: IotfleetwiseCampaignArnProps)
```

Builds an ARN for the campaign resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.campaign.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseCampaignArnProps">IotfleetwiseCampaignArnProps</a>

---

##### `decodermanifest` <a name="decodermanifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.decodermanifest"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.decodermanifest(props: IotfleetwiseDecodermanifestArnProps)
```

Builds an ARN for the decodermanifest resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.decodermanifest.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseDecodermanifestArnProps">IotfleetwiseDecodermanifestArnProps</a>

---

##### `fleet` <a name="fleet" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.fleet"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.fleet(props: IotfleetwiseFleetArnProps)
```

Builds an ARN for the fleet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.fleet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseFleetArnProps">IotfleetwiseFleetArnProps</a>

---

##### `isValidCampaignArn` <a name="isValidCampaignArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidCampaignArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidCampaignArn(arn: string)
```

Validates whether a string is a valid ARN for the campaign resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDecodermanifestArn` <a name="isValidDecodermanifestArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidDecodermanifestArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidDecodermanifestArn(arn: string)
```

Validates whether a string is a valid ARN for the decodermanifest resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidDecodermanifestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFleetArn` <a name="isValidFleetArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidFleetArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidFleetArn(arn: string)
```

Validates whether a string is a valid ARN for the fleet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidModelmanifestArn` <a name="isValidModelmanifestArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidModelmanifestArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidModelmanifestArn(arn: string)
```

Validates whether a string is a valid ARN for the modelmanifest resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidModelmanifestArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSignalcatalogArn` <a name="isValidSignalcatalogArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidSignalcatalogArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidSignalcatalogArn(arn: string)
```

Validates whether a string is a valid ARN for the signalcatalog resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidSignalcatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStatetemplateArn` <a name="isValidStatetemplateArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidStatetemplateArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidStatetemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the statetemplate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidStatetemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVehicleArn` <a name="isValidVehicleArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidVehicleArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.isValidVehicleArn(arn: string)
```

Validates whether a string is a valid ARN for the vehicle resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.isValidVehicleArn.parameter.arn"></a>

- *Type:* string

---

##### `modelmanifest` <a name="modelmanifest" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.modelmanifest"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.modelmanifest(props: IotfleetwiseModelmanifestArnProps)
```

Builds an ARN for the modelmanifest resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.modelmanifest.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseModelmanifestArnProps">IotfleetwiseModelmanifestArnProps</a>

---

##### `parseCampaignArn` <a name="parseCampaignArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseCampaignArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseCampaignArn(arn: string)
```

Parses a campaign ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDecodermanifestArn` <a name="parseDecodermanifestArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseDecodermanifestArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseDecodermanifestArn(arn: string)
```

Parses a decodermanifest ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseDecodermanifestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFleetArn` <a name="parseFleetArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseFleetArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseFleetArn(arn: string)
```

Parses a fleet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseFleetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseModelmanifestArn` <a name="parseModelmanifestArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseModelmanifestArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseModelmanifestArn(arn: string)
```

Parses a modelmanifest ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseModelmanifestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSignalcatalogArn` <a name="parseSignalcatalogArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseSignalcatalogArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseSignalcatalogArn(arn: string)
```

Parses a signalcatalog ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseSignalcatalogArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStatetemplateArn` <a name="parseStatetemplateArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseStatetemplateArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseStatetemplateArn(arn: string)
```

Parses a statetemplate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseStatetemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVehicleArn` <a name="parseVehicleArn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseVehicleArn"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.parseVehicleArn(arn: string)
```

Parses a vehicle ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.parseVehicleArn.parameter.arn"></a>

- *Type:* string

---

##### `signalcatalog` <a name="signalcatalog" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.signalcatalog"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.signalcatalog(props: IotfleetwiseSignalcatalogArnProps)
```

Builds an ARN for the signalcatalog resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.signalcatalog.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseSignalcatalogArnProps">IotfleetwiseSignalcatalogArnProps</a>

---

##### `statetemplate` <a name="statetemplate" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.statetemplate"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.statetemplate(props: IotfleetwiseStatetemplateArnProps)
```

Builds an ARN for the statetemplate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.statetemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseStatetemplateArnProps">IotfleetwiseStatetemplateArnProps</a>

---

##### `vehicle` <a name="vehicle" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.vehicle"></a>

```typescript
import { iotfleetwise } from '@cdk_utils/iam'

iotfleetwise.IotfleetwiseResources.vehicle(props: IotfleetwiseVehicleArnProps)
```

Builds an ARN for the vehicle resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotfleetwise.IotfleetwiseResources.vehicle.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotfleetwise.IotfleetwiseVehicleArnProps">IotfleetwiseVehicleArnProps</a>

---




