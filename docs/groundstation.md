# `groundstation` Submodule <a name="`groundstation` Submodule" id="@cdk_utils/iam.groundstation"></a>


## Structs <a name="Structs" id="Structs"></a>

### GroundStationAgentArnComponents <a name="GroundStationAgentArnComponents" id="@cdk_utils/iam.groundstation.GroundStationAgentArnComponents"></a>

Parsed components of a Agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationAgentArnComponents: groundstation.GroundStationAgentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationAgentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationAgentArnProps <a name="GroundStationAgentArnProps" id="@cdk_utils/iam.groundstation.GroundStationAgentArnProps"></a>

Properties for building a Agent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationAgentArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationAgentArnProps: groundstation.GroundStationAgentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.agentId">agentId</a></code> | <code>string</code> | The AgentId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The AgentId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationAgentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationConfigArnComponents <a name="GroundStationConfigArnComponents" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents"></a>

Parsed components of a Config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationConfigArnComponents: groundstation.GroundStationConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.configId">configId</a></code> | <code>string</code> | The ConfigId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.configType">configType</a></code> | <code>string</code> | The ConfigType component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

The ConfigId component.

---

##### `configType`<sup>Required</sup> <a name="configType" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

The ConfigType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationConfigArnProps <a name="GroundStationConfigArnProps" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps"></a>

Properties for building a Config ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationConfigArnProps: groundstation.GroundStationConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.configId">configId</a></code> | <code>string</code> | The ConfigId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.configType">configType</a></code> | <code>string</code> | The ConfigType component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

The ConfigId component of the ARN.

---

##### `configType`<sup>Required</sup> <a name="configType" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.configType"></a>

```typescript
public readonly configType: string;
```

- *Type:* string

The ConfigType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationContactArnComponents <a name="GroundStationContactArnComponents" id="@cdk_utils/iam.groundstation.GroundStationContactArnComponents"></a>

Parsed components of a Contact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationContactArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationContactArnComponents: groundstation.GroundStationContactArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.contactId">contactId</a></code> | <code>string</code> | The ContactId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

The ContactId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationContactArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationContactArnProps <a name="GroundStationContactArnProps" id="@cdk_utils/iam.groundstation.GroundStationContactArnProps"></a>

Properties for building a Contact ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationContactArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationContactArnProps: groundstation.GroundStationContactArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.contactId">contactId</a></code> | <code>string</code> | The ContactId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contactId`<sup>Required</sup> <a name="contactId" id="@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.contactId"></a>

```typescript
public readonly contactId: string;
```

- *Type:* string

The ContactId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationContactArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationDataflowEndpointGroupArnComponents <a name="GroundStationDataflowEndpointGroupArnComponents" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents"></a>

Parsed components of a DataflowEndpointGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationDataflowEndpointGroupArnComponents: groundstation.GroundStationDataflowEndpointGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.dataflowEndpointGroupId">dataflowEndpointGroupId</a></code> | <code>string</code> | The DataflowEndpointGroupId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="dataflowEndpointGroupId" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.dataflowEndpointGroupId"></a>

```typescript
public readonly dataflowEndpointGroupId: string;
```

- *Type:* string

The DataflowEndpointGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationDataflowEndpointGroupArnProps <a name="GroundStationDataflowEndpointGroupArnProps" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps"></a>

Properties for building a DataflowEndpointGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationDataflowEndpointGroupArnProps: groundstation.GroundStationDataflowEndpointGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.dataflowEndpointGroupId">dataflowEndpointGroupId</a></code> | <code>string</code> | The DataflowEndpointGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `dataflowEndpointGroupId`<sup>Required</sup> <a name="dataflowEndpointGroupId" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.dataflowEndpointGroupId"></a>

```typescript
public readonly dataflowEndpointGroupId: string;
```

- *Type:* string

The DataflowEndpointGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationEphemerisItemArnComponents <a name="GroundStationEphemerisItemArnComponents" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents"></a>

Parsed components of a EphemerisItem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationEphemerisItemArnComponents: groundstation.GroundStationEphemerisItemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.ephemerisId">ephemerisId</a></code> | <code>string</code> | The EphemerisId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `ephemerisId`<sup>Required</sup> <a name="ephemerisId" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.ephemerisId"></a>

```typescript
public readonly ephemerisId: string;
```

- *Type:* string

The EphemerisId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationEphemerisItemArnProps <a name="GroundStationEphemerisItemArnProps" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps"></a>

Properties for building a EphemerisItem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationEphemerisItemArnProps: groundstation.GroundStationEphemerisItemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.ephemerisId">ephemerisId</a></code> | <code>string</code> | The EphemerisId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `ephemerisId`<sup>Required</sup> <a name="ephemerisId" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.ephemerisId"></a>

```typescript
public readonly ephemerisId: string;
```

- *Type:* string

The EphemerisId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationGroundStationResourceArnComponents <a name="GroundStationGroundStationResourceArnComponents" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents"></a>

Parsed components of a GroundStationResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationGroundStationResourceArnComponents: groundstation.GroundStationGroundStationResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.groundStationId">groundStationId</a></code> | <code>string</code> | The GroundStationId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groundStationId`<sup>Required</sup> <a name="groundStationId" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.groundStationId"></a>

```typescript
public readonly groundStationId: string;
```

- *Type:* string

The GroundStationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationGroundStationResourceArnProps <a name="GroundStationGroundStationResourceArnProps" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps"></a>

Properties for building a GroundStationResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationGroundStationResourceArnProps: groundstation.GroundStationGroundStationResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.groundStationId">groundStationId</a></code> | <code>string</code> | The GroundStationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groundStationId`<sup>Required</sup> <a name="groundStationId" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.groundStationId"></a>

```typescript
public readonly groundStationId: string;
```

- *Type:* string

The GroundStationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationMissionProfileArnComponents <a name="GroundStationMissionProfileArnComponents" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents"></a>

Parsed components of a MissionProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationMissionProfileArnComponents: groundstation.GroundStationMissionProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.missionProfileId">missionProfileId</a></code> | <code>string</code> | The MissionProfileId component. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `missionProfileId`<sup>Required</sup> <a name="missionProfileId" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.missionProfileId"></a>

```typescript
public readonly missionProfileId: string;
```

- *Type:* string

The MissionProfileId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### GroundStationMissionProfileArnProps <a name="GroundStationMissionProfileArnProps" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps"></a>

Properties for building a MissionProfile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationMissionProfileArnProps: groundstation.GroundStationMissionProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.missionProfileId">missionProfileId</a></code> | <code>string</code> | The MissionProfileId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `missionProfileId`<sup>Required</sup> <a name="missionProfileId" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.missionProfileId"></a>

```typescript
public readonly missionProfileId: string;
```

- *Type:* string

The MissionProfileId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### GroundStationSatelliteArnComponents <a name="GroundStationSatelliteArnComponents" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents"></a>

Parsed components of a Satellite ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationSatelliteArnComponents: groundstation.GroundStationSatelliteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.satelliteId">satelliteId</a></code> | <code>string</code> | The SatelliteId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `satelliteId`<sup>Required</sup> <a name="satelliteId" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnComponents.property.satelliteId"></a>

```typescript
public readonly satelliteId: string;
```

- *Type:* string

The SatelliteId component.

---

### GroundStationSatelliteArnProps <a name="GroundStationSatelliteArnProps" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps"></a>

Properties for building a Satellite ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

const groundStationSatelliteArnProps: groundstation.GroundStationSatelliteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.satelliteId">satelliteId</a></code> | <code>string</code> | The SatelliteId component of the ARN. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `satelliteId`<sup>Required</sup> <a name="satelliteId" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.satelliteId"></a>

```typescript
public readonly satelliteId: string;
```

- *Type:* string

The SatelliteId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### GroundStationActions <a name="GroundStationActions" id="@cdk_utils/iam.groundstation.GroundStationActions"></a>

IAM action constants for the groundstation service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.groundstation.GroundStationActions.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

new groundstation.GroundStationActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetAgentConfiguration">actionGetAgentConfiguration</a></code> | <code>string</code> | [Read] groundstation:GetAgentConfiguration. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetAgentTaskResponseUrl">actionGetAgentTaskResponseUrl</a></code> | <code>string</code> | [Read] groundstation:GetAgentTaskResponseUrl. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetConfig">actionGetConfig</a></code> | <code>string</code> | [Read] groundstation:GetConfig. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetDataflowEndpointGroup">actionGetDataflowEndpointGroup</a></code> | <code>string</code> | [Read] groundstation:GetDataflowEndpointGroup. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetMinuteUsage">actionGetMinuteUsage</a></code> | <code>string</code> | [Read] groundstation:GetMinuteUsage. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetMissionProfile">actionGetMissionProfile</a></code> | <code>string</code> | [Read] groundstation:GetMissionProfile. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetSatellite">actionGetSatellite</a></code> | <code>string</code> | [Read] groundstation:GetSatellite. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.CancelContact">CancelContact</a></code> | <code>string</code> | [Write] groundstation:CancelContact. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.CreateConfig">CreateConfig</a></code> | <code>string</code> | [Write] groundstation:CreateConfig. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.CreateDataflowEndpointGroup">CreateDataflowEndpointGroup</a></code> | <code>string</code> | [Write] groundstation:CreateDataflowEndpointGroup. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.CreateDataflowEndpointGroupV2">CreateDataflowEndpointGroupV2</a></code> | <code>string</code> | [Write] groundstation:CreateDataflowEndpointGroupV2. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.CreateEphemeris">CreateEphemeris</a></code> | <code>string</code> | [Write] groundstation:CreateEphemeris. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.CreateMissionProfile">CreateMissionProfile</a></code> | <code>string</code> | [Write] groundstation:CreateMissionProfile. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteConfig">DeleteConfig</a></code> | <code>string</code> | [Write] groundstation:DeleteConfig. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteDataflowEndpointGroup">DeleteDataflowEndpointGroup</a></code> | <code>string</code> | [Write] groundstation:DeleteDataflowEndpointGroup. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteEphemeris">DeleteEphemeris</a></code> | <code>string</code> | [Write] groundstation:DeleteEphemeris. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteMissionProfile">DeleteMissionProfile</a></code> | <code>string</code> | [Write] groundstation:DeleteMissionProfile. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DescribeContact">DescribeContact</a></code> | <code>string</code> | [Read] groundstation:DescribeContact. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DescribeContactVersion">DescribeContactVersion</a></code> | <code>string</code> | [Read] groundstation:DescribeContactVersion. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.DescribeEphemeris">DescribeEphemeris</a></code> | <code>string</code> | [Read] groundstation:DescribeEphemeris. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListAntennas">ListAntennas</a></code> | <code>string</code> | [List] groundstation:ListAntennas. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListConfigs">ListConfigs</a></code> | <code>string</code> | [List] groundstation:ListConfigs. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListContacts">ListContacts</a></code> | <code>string</code> | [List] groundstation:ListContacts. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListContactVersions">ListContactVersions</a></code> | <code>string</code> | [List] groundstation:ListContactVersions. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListDataflowEndpointGroups">ListDataflowEndpointGroups</a></code> | <code>string</code> | [List] groundstation:ListDataflowEndpointGroups. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListEphemerides">ListEphemerides</a></code> | <code>string</code> | [List] groundstation:ListEphemerides. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListGroundStationReservations">ListGroundStationReservations</a></code> | <code>string</code> | [List] groundstation:ListGroundStationReservations. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListGroundStations">ListGroundStations</a></code> | <code>string</code> | [List] groundstation:ListGroundStations. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListMissionProfiles">ListMissionProfiles</a></code> | <code>string</code> | [List] groundstation:ListMissionProfiles. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListSatellites">ListSatellites</a></code> | <code>string</code> | [List] groundstation:ListSatellites. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] groundstation:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.RegisterAgent">RegisterAgent</a></code> | <code>string</code> | [Write] groundstation:RegisterAgent. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.ReserveContact">ReserveContact</a></code> | <code>string</code> | [Write] groundstation:ReserveContact. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] groundstation:TagResource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] groundstation:UntagResource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateAgentStatus">UpdateAgentStatus</a></code> | <code>string</code> | [Write] groundstation:UpdateAgentStatus. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateConfig">UpdateConfig</a></code> | <code>string</code> | [Write] groundstation:UpdateConfig. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateContact">UpdateContact</a></code> | <code>string</code> | [Write] groundstation:UpdateContact. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateEphemeris">UpdateEphemeris</a></code> | <code>string</code> | [Write] groundstation:UpdateEphemeris. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateMissionProfile">UpdateMissionProfile</a></code> | <code>string</code> | [Write] groundstation:UpdateMissionProfile. |

---

##### `actionGetAgentConfiguration`<sup>Required</sup> <a name="actionGetAgentConfiguration" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetAgentConfiguration"></a>

```typescript
public readonly actionGetAgentConfiguration: string;
```

- *Type:* string

[Read] groundstation:GetAgentConfiguration.

---

##### `actionGetAgentTaskResponseUrl`<sup>Required</sup> <a name="actionGetAgentTaskResponseUrl" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetAgentTaskResponseUrl"></a>

```typescript
public readonly actionGetAgentTaskResponseUrl: string;
```

- *Type:* string

[Read] groundstation:GetAgentTaskResponseUrl.

---

##### `actionGetConfig`<sup>Required</sup> <a name="actionGetConfig" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetConfig"></a>

```typescript
public readonly actionGetConfig: string;
```

- *Type:* string

[Read] groundstation:GetConfig.

---

##### `actionGetDataflowEndpointGroup`<sup>Required</sup> <a name="actionGetDataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetDataflowEndpointGroup"></a>

```typescript
public readonly actionGetDataflowEndpointGroup: string;
```

- *Type:* string

[Read] groundstation:GetDataflowEndpointGroup.

---

##### `actionGetMinuteUsage`<sup>Required</sup> <a name="actionGetMinuteUsage" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetMinuteUsage"></a>

```typescript
public readonly actionGetMinuteUsage: string;
```

- *Type:* string

[Read] groundstation:GetMinuteUsage.

---

##### `actionGetMissionProfile`<sup>Required</sup> <a name="actionGetMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetMissionProfile"></a>

```typescript
public readonly actionGetMissionProfile: string;
```

- *Type:* string

[Read] groundstation:GetMissionProfile.

---

##### `actionGetSatellite`<sup>Required</sup> <a name="actionGetSatellite" id="@cdk_utils/iam.groundstation.GroundStationActions.property.actionGetSatellite"></a>

```typescript
public readonly actionGetSatellite: string;
```

- *Type:* string

[Read] groundstation:GetSatellite.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.groundstation.GroundStationActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.groundstation.GroundStationActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.groundstation.GroundStationActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.groundstation.GroundStationActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.groundstation.GroundStationActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelContact`<sup>Required</sup> <a name="CancelContact" id="@cdk_utils/iam.groundstation.GroundStationActions.property.CancelContact"></a>

```typescript
public readonly CancelContact: string;
```

- *Type:* string

[Write] groundstation:CancelContact.

---

##### `CreateConfig`<sup>Required</sup> <a name="CreateConfig" id="@cdk_utils/iam.groundstation.GroundStationActions.property.CreateConfig"></a>

```typescript
public readonly CreateConfig: string;
```

- *Type:* string

[Write] groundstation:CreateConfig.

---

##### `CreateDataflowEndpointGroup`<sup>Required</sup> <a name="CreateDataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationActions.property.CreateDataflowEndpointGroup"></a>

```typescript
public readonly CreateDataflowEndpointGroup: string;
```

- *Type:* string

[Write] groundstation:CreateDataflowEndpointGroup.

---

##### `CreateDataflowEndpointGroupV2`<sup>Required</sup> <a name="CreateDataflowEndpointGroupV2" id="@cdk_utils/iam.groundstation.GroundStationActions.property.CreateDataflowEndpointGroupV2"></a>

```typescript
public readonly CreateDataflowEndpointGroupV2: string;
```

- *Type:* string

[Write] groundstation:CreateDataflowEndpointGroupV2.

---

##### `CreateEphemeris`<sup>Required</sup> <a name="CreateEphemeris" id="@cdk_utils/iam.groundstation.GroundStationActions.property.CreateEphemeris"></a>

```typescript
public readonly CreateEphemeris: string;
```

- *Type:* string

[Write] groundstation:CreateEphemeris.

---

##### `CreateMissionProfile`<sup>Required</sup> <a name="CreateMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationActions.property.CreateMissionProfile"></a>

```typescript
public readonly CreateMissionProfile: string;
```

- *Type:* string

[Write] groundstation:CreateMissionProfile.

---

##### `DeleteConfig`<sup>Required</sup> <a name="DeleteConfig" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteConfig"></a>

```typescript
public readonly DeleteConfig: string;
```

- *Type:* string

[Write] groundstation:DeleteConfig.

---

##### `DeleteDataflowEndpointGroup`<sup>Required</sup> <a name="DeleteDataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteDataflowEndpointGroup"></a>

```typescript
public readonly DeleteDataflowEndpointGroup: string;
```

- *Type:* string

[Write] groundstation:DeleteDataflowEndpointGroup.

---

##### `DeleteEphemeris`<sup>Required</sup> <a name="DeleteEphemeris" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteEphemeris"></a>

```typescript
public readonly DeleteEphemeris: string;
```

- *Type:* string

[Write] groundstation:DeleteEphemeris.

---

##### `DeleteMissionProfile`<sup>Required</sup> <a name="DeleteMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DeleteMissionProfile"></a>

```typescript
public readonly DeleteMissionProfile: string;
```

- *Type:* string

[Write] groundstation:DeleteMissionProfile.

---

##### `DescribeContact`<sup>Required</sup> <a name="DescribeContact" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DescribeContact"></a>

```typescript
public readonly DescribeContact: string;
```

- *Type:* string

[Read] groundstation:DescribeContact.

---

##### `DescribeContactVersion`<sup>Required</sup> <a name="DescribeContactVersion" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DescribeContactVersion"></a>

```typescript
public readonly DescribeContactVersion: string;
```

- *Type:* string

[Read] groundstation:DescribeContactVersion.

---

##### `DescribeEphemeris`<sup>Required</sup> <a name="DescribeEphemeris" id="@cdk_utils/iam.groundstation.GroundStationActions.property.DescribeEphemeris"></a>

```typescript
public readonly DescribeEphemeris: string;
```

- *Type:* string

[Read] groundstation:DescribeEphemeris.

---

##### `ListAntennas`<sup>Required</sup> <a name="ListAntennas" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListAntennas"></a>

```typescript
public readonly ListAntennas: string;
```

- *Type:* string

[List] groundstation:ListAntennas.

---

##### `ListConfigs`<sup>Required</sup> <a name="ListConfigs" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListConfigs"></a>

```typescript
public readonly ListConfigs: string;
```

- *Type:* string

[List] groundstation:ListConfigs.

---

##### `ListContacts`<sup>Required</sup> <a name="ListContacts" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListContacts"></a>

```typescript
public readonly ListContacts: string;
```

- *Type:* string

[List] groundstation:ListContacts.

---

##### `ListContactVersions`<sup>Required</sup> <a name="ListContactVersions" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListContactVersions"></a>

```typescript
public readonly ListContactVersions: string;
```

- *Type:* string

[List] groundstation:ListContactVersions.

---

##### `ListDataflowEndpointGroups`<sup>Required</sup> <a name="ListDataflowEndpointGroups" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListDataflowEndpointGroups"></a>

```typescript
public readonly ListDataflowEndpointGroups: string;
```

- *Type:* string

[List] groundstation:ListDataflowEndpointGroups.

---

##### `ListEphemerides`<sup>Required</sup> <a name="ListEphemerides" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListEphemerides"></a>

```typescript
public readonly ListEphemerides: string;
```

- *Type:* string

[List] groundstation:ListEphemerides.

---

##### `ListGroundStationReservations`<sup>Required</sup> <a name="ListGroundStationReservations" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListGroundStationReservations"></a>

```typescript
public readonly ListGroundStationReservations: string;
```

- *Type:* string

[List] groundstation:ListGroundStationReservations.

---

##### `ListGroundStations`<sup>Required</sup> <a name="ListGroundStations" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListGroundStations"></a>

```typescript
public readonly ListGroundStations: string;
```

- *Type:* string

[List] groundstation:ListGroundStations.

---

##### `ListMissionProfiles`<sup>Required</sup> <a name="ListMissionProfiles" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListMissionProfiles"></a>

```typescript
public readonly ListMissionProfiles: string;
```

- *Type:* string

[List] groundstation:ListMissionProfiles.

---

##### `ListSatellites`<sup>Required</sup> <a name="ListSatellites" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListSatellites"></a>

```typescript
public readonly ListSatellites: string;
```

- *Type:* string

[List] groundstation:ListSatellites.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] groundstation:ListTagsForResource.

---

##### `RegisterAgent`<sup>Required</sup> <a name="RegisterAgent" id="@cdk_utils/iam.groundstation.GroundStationActions.property.RegisterAgent"></a>

```typescript
public readonly RegisterAgent: string;
```

- *Type:* string

[Write] groundstation:RegisterAgent.

---

##### `ReserveContact`<sup>Required</sup> <a name="ReserveContact" id="@cdk_utils/iam.groundstation.GroundStationActions.property.ReserveContact"></a>

```typescript
public readonly ReserveContact: string;
```

- *Type:* string

[Write] groundstation:ReserveContact.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.groundstation.GroundStationActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.groundstation.GroundStationActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] groundstation:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.groundstation.GroundStationActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] groundstation:UntagResource.

---

##### `UpdateAgentStatus`<sup>Required</sup> <a name="UpdateAgentStatus" id="@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateAgentStatus"></a>

```typescript
public readonly UpdateAgentStatus: string;
```

- *Type:* string

[Write] groundstation:UpdateAgentStatus.

---

##### `UpdateConfig`<sup>Required</sup> <a name="UpdateConfig" id="@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateConfig"></a>

```typescript
public readonly UpdateConfig: string;
```

- *Type:* string

[Write] groundstation:UpdateConfig.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string;
```

- *Type:* string

[Write] groundstation:UpdateContact.

---

##### `UpdateEphemeris`<sup>Required</sup> <a name="UpdateEphemeris" id="@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateEphemeris"></a>

```typescript
public readonly UpdateEphemeris: string;
```

- *Type:* string

[Write] groundstation:UpdateEphemeris.

---

##### `UpdateMissionProfile`<sup>Required</sup> <a name="UpdateMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationActions.property.UpdateMissionProfile"></a>

```typescript
public readonly UpdateMissionProfile: string;
```

- *Type:* string

[Write] groundstation:UpdateMissionProfile.

---

### GroundStationConditions <a name="GroundStationConditions" id="@cdk_utils/iam.groundstation.GroundStationConditions"></a>

Condition key constants and builders for groundstation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.groundstation.GroundStationConditions.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

new groundstation.GroundStationConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.agentId">agentId</a></code> | Generates a condition block for `groundstation:AgentId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.configId">configId</a></code> | Generates a condition block for `groundstation:ConfigId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.configType">configType</a></code> | Generates a condition block for `groundstation:ConfigType`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.contactId">contactId</a></code> | Generates a condition block for `groundstation:ContactId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.dataflowEndpointGroupId">dataflowEndpointGroupId</a></code> | Generates a condition block for `groundstation:DataflowEndpointGroupId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.ephemerisId">ephemerisId</a></code> | Generates a condition block for `groundstation:EphemerisId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.groundStationId">groundStationId</a></code> | Generates a condition block for `groundstation:GroundStationId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.missionProfileId">missionProfileId</a></code> | Generates a condition block for `groundstation:MissionProfileId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.satelliteId">satelliteId</a></code> | Generates a condition block for `groundstation:SatelliteId`. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `agentId` <a name="agentId" id="@cdk_utils/iam.groundstation.GroundStationConditions.agentId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.agentId(value: string)
```

Generates a condition block for `groundstation:AgentId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.agentId.parameter.value"></a>

- *Type:* string

---

##### `configId` <a name="configId" id="@cdk_utils/iam.groundstation.GroundStationConditions.configId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.configId(value: string)
```

Generates a condition block for `groundstation:ConfigId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.configId.parameter.value"></a>

- *Type:* string

---

##### `configType` <a name="configType" id="@cdk_utils/iam.groundstation.GroundStationConditions.configType"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.configType(value: string)
```

Generates a condition block for `groundstation:ConfigType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.configType.parameter.value"></a>

- *Type:* string

---

##### `contactId` <a name="contactId" id="@cdk_utils/iam.groundstation.GroundStationConditions.contactId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.contactId(value: string)
```

Generates a condition block for `groundstation:ContactId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.contactId.parameter.value"></a>

- *Type:* string

---

##### `dataflowEndpointGroupId` <a name="dataflowEndpointGroupId" id="@cdk_utils/iam.groundstation.GroundStationConditions.dataflowEndpointGroupId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.dataflowEndpointGroupId(value: string)
```

Generates a condition block for `groundstation:DataflowEndpointGroupId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.dataflowEndpointGroupId.parameter.value"></a>

- *Type:* string

---

##### `ephemerisId` <a name="ephemerisId" id="@cdk_utils/iam.groundstation.GroundStationConditions.ephemerisId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.ephemerisId(value: string)
```

Generates a condition block for `groundstation:EphemerisId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.ephemerisId.parameter.value"></a>

- *Type:* string

---

##### `groundStationId` <a name="groundStationId" id="@cdk_utils/iam.groundstation.GroundStationConditions.groundStationId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.groundStationId(value: string)
```

Generates a condition block for `groundstation:GroundStationId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.groundStationId.parameter.value"></a>

- *Type:* string

---

##### `missionProfileId` <a name="missionProfileId" id="@cdk_utils/iam.groundstation.GroundStationConditions.missionProfileId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.missionProfileId(value: string)
```

Generates a condition block for `groundstation:MissionProfileId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.missionProfileId.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.groundstation.GroundStationConditions.requestTag"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.groundstation.GroundStationConditions.resourceTag"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `satelliteId` <a name="satelliteId" id="@cdk_utils/iam.groundstation.GroundStationConditions.satelliteId"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.satelliteId(value: string)
```

Generates a condition block for `groundstation:SatelliteId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.groundstation.GroundStationConditions.satelliteId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.tagKeys"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.groundstation.GroundStationConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.AGENT_ID">AGENT_ID</a></code> | <code>string</code> | Condition key: groundstation:AgentId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CONFIG_ID">CONFIG_ID</a></code> | <code>string</code> | Condition key: groundstation:ConfigId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CONFIG_TYPE">CONFIG_TYPE</a></code> | <code>string</code> | Condition key: groundstation:ConfigType (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CONTACT_ID">CONTACT_ID</a></code> | <code>string</code> | Condition key: groundstation:ContactId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateConfigConditionKeys">CreateConfigConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateConfig action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateDataflowEndpointGroupConditionKeys">CreateDataflowEndpointGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataflowEndpointGroup action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateDataflowEndpointGroupV2ConditionKeys">CreateDataflowEndpointGroupV2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDataflowEndpointGroupV2 action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateEphemerisConditionKeys">CreateEphemerisConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEphemeris action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateMissionProfileConditionKeys">CreateMissionProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMissionProfile action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.DATAFLOW_ENDPOINT_GROUP_ID">DATAFLOW_ENDPOINT_GROUP_ID</a></code> | <code>string</code> | Condition key: groundstation:DataflowEndpointGroupId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.EPHEMERIS_ID">EPHEMERIS_ID</a></code> | <code>string</code> | Condition key: groundstation:EphemerisId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.GROUND_STATION_ID">GROUND_STATION_ID</a></code> | <code>string</code> | Condition key: groundstation:GroundStationId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.MISSION_PROFILE_ID">MISSION_PROFILE_ID</a></code> | <code>string</code> | Condition key: groundstation:MissionProfileId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.ReserveContactConditionKeys">ReserveContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ReserveContact action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.SATELLITE_ID">SATELLITE_ID</a></code> | <code>string</code> | Condition key: groundstation:SatelliteId (String). |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AGENT_ID`<sup>Required</sup> <a name="AGENT_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.AGENT_ID"></a>

```typescript
public readonly AGENT_ID: string;
```

- *Type:* string

Condition key: groundstation:AgentId (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CONFIG_ID`<sup>Required</sup> <a name="CONFIG_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CONFIG_ID"></a>

```typescript
public readonly CONFIG_ID: string;
```

- *Type:* string

Condition key: groundstation:ConfigId (String).

---

##### `CONFIG_TYPE`<sup>Required</sup> <a name="CONFIG_TYPE" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CONFIG_TYPE"></a>

```typescript
public readonly CONFIG_TYPE: string;
```

- *Type:* string

Condition key: groundstation:ConfigType (String).

---

##### `CONTACT_ID`<sup>Required</sup> <a name="CONTACT_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CONTACT_ID"></a>

```typescript
public readonly CONTACT_ID: string;
```

- *Type:* string

Condition key: groundstation:ContactId (String).

---

##### `CreateConfigConditionKeys`<sup>Required</sup> <a name="CreateConfigConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateConfigConditionKeys"></a>

```typescript
public readonly CreateConfigConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateConfig action.

---

##### `CreateDataflowEndpointGroupConditionKeys`<sup>Required</sup> <a name="CreateDataflowEndpointGroupConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateDataflowEndpointGroupConditionKeys"></a>

```typescript
public readonly CreateDataflowEndpointGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataflowEndpointGroup action.

---

##### `CreateDataflowEndpointGroupV2ConditionKeys`<sup>Required</sup> <a name="CreateDataflowEndpointGroupV2ConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateDataflowEndpointGroupV2ConditionKeys"></a>

```typescript
public readonly CreateDataflowEndpointGroupV2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDataflowEndpointGroupV2 action.

---

##### `CreateEphemerisConditionKeys`<sup>Required</sup> <a name="CreateEphemerisConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateEphemerisConditionKeys"></a>

```typescript
public readonly CreateEphemerisConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEphemeris action.

---

##### `CreateMissionProfileConditionKeys`<sup>Required</sup> <a name="CreateMissionProfileConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.CreateMissionProfileConditionKeys"></a>

```typescript
public readonly CreateMissionProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMissionProfile action.

---

##### `DATAFLOW_ENDPOINT_GROUP_ID`<sup>Required</sup> <a name="DATAFLOW_ENDPOINT_GROUP_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.DATAFLOW_ENDPOINT_GROUP_ID"></a>

```typescript
public readonly DATAFLOW_ENDPOINT_GROUP_ID: string;
```

- *Type:* string

Condition key: groundstation:DataflowEndpointGroupId (String).

---

##### `EPHEMERIS_ID`<sup>Required</sup> <a name="EPHEMERIS_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.EPHEMERIS_ID"></a>

```typescript
public readonly EPHEMERIS_ID: string;
```

- *Type:* string

Condition key: groundstation:EphemerisId (String).

---

##### `GROUND_STATION_ID`<sup>Required</sup> <a name="GROUND_STATION_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.GROUND_STATION_ID"></a>

```typescript
public readonly GROUND_STATION_ID: string;
```

- *Type:* string

Condition key: groundstation:GroundStationId (String).

---

##### `MISSION_PROFILE_ID`<sup>Required</sup> <a name="MISSION_PROFILE_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.MISSION_PROFILE_ID"></a>

```typescript
public readonly MISSION_PROFILE_ID: string;
```

- *Type:* string

Condition key: groundstation:MissionProfileId (String).

---

##### `ReserveContactConditionKeys`<sup>Required</sup> <a name="ReserveContactConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.ReserveContactConditionKeys"></a>

```typescript
public readonly ReserveContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ReserveContact action.

---

##### `SATELLITE_ID`<sup>Required</sup> <a name="SATELLITE_ID" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.SATELLITE_ID"></a>

```typescript
public readonly SATELLITE_ID: string;
```

- *Type:* string

Condition key: groundstation:SatelliteId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.groundstation.GroundStationConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### GroundStationOperations <a name="GroundStationOperations" id="@cdk_utils/iam.groundstation.GroundStationOperations"></a>

API operation to required IAM actions mapping for groundstation.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.groundstation.GroundStationOperations.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

new groundstation.GroundStationOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.CancelContact">CancelContact</a></code> | <code>string[]</code> | IAM actions required for the CancelContact API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateConfig">CreateConfig</a></code> | <code>string[]</code> | IAM actions required for the CreateConfig API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateDataflowEndpointGroup">CreateDataflowEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateDataflowEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateDataflowEndpointGroupV2">CreateDataflowEndpointGroupV2</a></code> | <code>string[]</code> | IAM actions required for the CreateDataflowEndpointGroupV2 API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateEphemeris">CreateEphemeris</a></code> | <code>string[]</code> | IAM actions required for the CreateEphemeris API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateMissionProfile">CreateMissionProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateMissionProfile API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteConfig">DeleteConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteConfig API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteDataflowEndpointGroup">DeleteDataflowEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteDataflowEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteEphemeris">DeleteEphemeris</a></code> | <code>string[]</code> | IAM actions required for the DeleteEphemeris API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteMissionProfile">DeleteMissionProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteMissionProfile API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DescribeContact">DescribeContact</a></code> | <code>string[]</code> | IAM actions required for the DescribeContact API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DescribeContactVersion">DescribeContactVersion</a></code> | <code>string[]</code> | IAM actions required for the DescribeContactVersion API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.DescribeEphemeris">DescribeEphemeris</a></code> | <code>string[]</code> | IAM actions required for the DescribeEphemeris API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListAntennas">ListAntennas</a></code> | <code>string[]</code> | IAM actions required for the ListAntennas API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListConfigs">ListConfigs</a></code> | <code>string[]</code> | IAM actions required for the ListConfigs API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListContacts">ListContacts</a></code> | <code>string[]</code> | IAM actions required for the ListContacts API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListContactVersions">ListContactVersions</a></code> | <code>string[]</code> | IAM actions required for the ListContactVersions API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListDataflowEndpointGroups">ListDataflowEndpointGroups</a></code> | <code>string[]</code> | IAM actions required for the ListDataflowEndpointGroups API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListEphemerides">ListEphemerides</a></code> | <code>string[]</code> | IAM actions required for the ListEphemerides API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListGroundStationReservations">ListGroundStationReservations</a></code> | <code>string[]</code> | IAM actions required for the ListGroundStationReservations API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListGroundStations">ListGroundStations</a></code> | <code>string[]</code> | IAM actions required for the ListGroundStations API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListMissionProfiles">ListMissionProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListMissionProfiles API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListSatellites">ListSatellites</a></code> | <code>string[]</code> | IAM actions required for the ListSatellites API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetAgentConfiguration">opGetAgentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAgentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetAgentTaskResponseUrl">opGetAgentTaskResponseUrl</a></code> | <code>string[]</code> | IAM actions required for the GetAgentTaskResponseUrl API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetConfig">opGetConfig</a></code> | <code>string[]</code> | IAM actions required for the GetConfig API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetDataflowEndpointGroup">opGetDataflowEndpointGroup</a></code> | <code>string[]</code> | IAM actions required for the GetDataflowEndpointGroup API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetMinuteUsage">opGetMinuteUsage</a></code> | <code>string[]</code> | IAM actions required for the GetMinuteUsage API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetMissionProfile">opGetMissionProfile</a></code> | <code>string[]</code> | IAM actions required for the GetMissionProfile API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetSatellite">opGetSatellite</a></code> | <code>string[]</code> | IAM actions required for the GetSatellite API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.RegisterAgent">RegisterAgent</a></code> | <code>string[]</code> | IAM actions required for the RegisterAgent API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.ReserveContact">ReserveContact</a></code> | <code>string[]</code> | IAM actions required for the ReserveContact API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateAgentStatus">UpdateAgentStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateAgentStatus API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateConfig">UpdateConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateConfig API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateContact">UpdateContact</a></code> | <code>string[]</code> | IAM actions required for the UpdateContact API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateEphemeris">UpdateEphemeris</a></code> | <code>string[]</code> | IAM actions required for the UpdateEphemeris API call. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateMissionProfile">UpdateMissionProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateMissionProfile API call. |

---

##### `CancelContact`<sup>Required</sup> <a name="CancelContact" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.CancelContact"></a>

```typescript
public readonly CancelContact: string[];
```

- *Type:* string[]

IAM actions required for the CancelContact API call.

---

##### `CreateConfig`<sup>Required</sup> <a name="CreateConfig" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateConfig"></a>

```typescript
public readonly CreateConfig: string[];
```

- *Type:* string[]

IAM actions required for the CreateConfig API call.

---

##### `CreateDataflowEndpointGroup`<sup>Required</sup> <a name="CreateDataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateDataflowEndpointGroup"></a>

```typescript
public readonly CreateDataflowEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataflowEndpointGroup API call.

---

##### `CreateDataflowEndpointGroupV2`<sup>Required</sup> <a name="CreateDataflowEndpointGroupV2" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateDataflowEndpointGroupV2"></a>

```typescript
public readonly CreateDataflowEndpointGroupV2: string[];
```

- *Type:* string[]

IAM actions required for the CreateDataflowEndpointGroupV2 API call.

---

##### `CreateEphemeris`<sup>Required</sup> <a name="CreateEphemeris" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateEphemeris"></a>

```typescript
public readonly CreateEphemeris: string[];
```

- *Type:* string[]

IAM actions required for the CreateEphemeris API call.

---

##### `CreateMissionProfile`<sup>Required</sup> <a name="CreateMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.CreateMissionProfile"></a>

```typescript
public readonly CreateMissionProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateMissionProfile API call.

---

##### `DeleteConfig`<sup>Required</sup> <a name="DeleteConfig" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteConfig"></a>

```typescript
public readonly DeleteConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConfig API call.

---

##### `DeleteDataflowEndpointGroup`<sup>Required</sup> <a name="DeleteDataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteDataflowEndpointGroup"></a>

```typescript
public readonly DeleteDataflowEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDataflowEndpointGroup API call.

---

##### `DeleteEphemeris`<sup>Required</sup> <a name="DeleteEphemeris" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteEphemeris"></a>

```typescript
public readonly DeleteEphemeris: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEphemeris API call.

---

##### `DeleteMissionProfile`<sup>Required</sup> <a name="DeleteMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DeleteMissionProfile"></a>

```typescript
public readonly DeleteMissionProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMissionProfile API call.

---

##### `DescribeContact`<sup>Required</sup> <a name="DescribeContact" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DescribeContact"></a>

```typescript
public readonly DescribeContact: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContact API call.

---

##### `DescribeContactVersion`<sup>Required</sup> <a name="DescribeContactVersion" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DescribeContactVersion"></a>

```typescript
public readonly DescribeContactVersion: string[];
```

- *Type:* string[]

IAM actions required for the DescribeContactVersion API call.

---

##### `DescribeEphemeris`<sup>Required</sup> <a name="DescribeEphemeris" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.DescribeEphemeris"></a>

```typescript
public readonly DescribeEphemeris: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEphemeris API call.

---

##### `ListAntennas`<sup>Required</sup> <a name="ListAntennas" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListAntennas"></a>

```typescript
public readonly ListAntennas: string[];
```

- *Type:* string[]

IAM actions required for the ListAntennas API call.

---

##### `ListConfigs`<sup>Required</sup> <a name="ListConfigs" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListConfigs"></a>

```typescript
public readonly ListConfigs: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigs API call.

---

##### `ListContacts`<sup>Required</sup> <a name="ListContacts" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListContacts"></a>

```typescript
public readonly ListContacts: string[];
```

- *Type:* string[]

IAM actions required for the ListContacts API call.

---

##### `ListContactVersions`<sup>Required</sup> <a name="ListContactVersions" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListContactVersions"></a>

```typescript
public readonly ListContactVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListContactVersions API call.

---

##### `ListDataflowEndpointGroups`<sup>Required</sup> <a name="ListDataflowEndpointGroups" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListDataflowEndpointGroups"></a>

```typescript
public readonly ListDataflowEndpointGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListDataflowEndpointGroups API call.

---

##### `ListEphemerides`<sup>Required</sup> <a name="ListEphemerides" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListEphemerides"></a>

```typescript
public readonly ListEphemerides: string[];
```

- *Type:* string[]

IAM actions required for the ListEphemerides API call.

---

##### `ListGroundStationReservations`<sup>Required</sup> <a name="ListGroundStationReservations" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListGroundStationReservations"></a>

```typescript
public readonly ListGroundStationReservations: string[];
```

- *Type:* string[]

IAM actions required for the ListGroundStationReservations API call.

---

##### `ListGroundStations`<sup>Required</sup> <a name="ListGroundStations" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListGroundStations"></a>

```typescript
public readonly ListGroundStations: string[];
```

- *Type:* string[]

IAM actions required for the ListGroundStations API call.

---

##### `ListMissionProfiles`<sup>Required</sup> <a name="ListMissionProfiles" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListMissionProfiles"></a>

```typescript
public readonly ListMissionProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListMissionProfiles API call.

---

##### `ListSatellites`<sup>Required</sup> <a name="ListSatellites" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListSatellites"></a>

```typescript
public readonly ListSatellites: string[];
```

- *Type:* string[]

IAM actions required for the ListSatellites API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAgentConfiguration`<sup>Required</sup> <a name="opGetAgentConfiguration" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetAgentConfiguration"></a>

```typescript
public readonly opGetAgentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentConfiguration API call.

---

##### `opGetAgentTaskResponseUrl`<sup>Required</sup> <a name="opGetAgentTaskResponseUrl" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetAgentTaskResponseUrl"></a>

```typescript
public readonly opGetAgentTaskResponseUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetAgentTaskResponseUrl API call.

---

##### `opGetConfig`<sup>Required</sup> <a name="opGetConfig" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetConfig"></a>

```typescript
public readonly opGetConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetConfig API call.

---

##### `opGetDataflowEndpointGroup`<sup>Required</sup> <a name="opGetDataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetDataflowEndpointGroup"></a>

```typescript
public readonly opGetDataflowEndpointGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetDataflowEndpointGroup API call.

---

##### `opGetMinuteUsage`<sup>Required</sup> <a name="opGetMinuteUsage" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetMinuteUsage"></a>

```typescript
public readonly opGetMinuteUsage: string[];
```

- *Type:* string[]

IAM actions required for the GetMinuteUsage API call.

---

##### `opGetMissionProfile`<sup>Required</sup> <a name="opGetMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetMissionProfile"></a>

```typescript
public readonly opGetMissionProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetMissionProfile API call.

---

##### `opGetSatellite`<sup>Required</sup> <a name="opGetSatellite" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.opGetSatellite"></a>

```typescript
public readonly opGetSatellite: string[];
```

- *Type:* string[]

IAM actions required for the GetSatellite API call.

---

##### `RegisterAgent`<sup>Required</sup> <a name="RegisterAgent" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.RegisterAgent"></a>

```typescript
public readonly RegisterAgent: string[];
```

- *Type:* string[]

IAM actions required for the RegisterAgent API call.

---

##### `ReserveContact`<sup>Required</sup> <a name="ReserveContact" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.ReserveContact"></a>

```typescript
public readonly ReserveContact: string[];
```

- *Type:* string[]

IAM actions required for the ReserveContact API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAgentStatus`<sup>Required</sup> <a name="UpdateAgentStatus" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateAgentStatus"></a>

```typescript
public readonly UpdateAgentStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAgentStatus API call.

---

##### `UpdateConfig`<sup>Required</sup> <a name="UpdateConfig" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateConfig"></a>

```typescript
public readonly UpdateConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConfig API call.

---

##### `UpdateContact`<sup>Required</sup> <a name="UpdateContact" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateContact"></a>

```typescript
public readonly UpdateContact: string[];
```

- *Type:* string[]

IAM actions required for the UpdateContact API call.

---

##### `UpdateEphemeris`<sup>Required</sup> <a name="UpdateEphemeris" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateEphemeris"></a>

```typescript
public readonly UpdateEphemeris: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEphemeris API call.

---

##### `UpdateMissionProfile`<sup>Required</sup> <a name="UpdateMissionProfile" id="@cdk_utils/iam.groundstation.GroundStationOperations.property.UpdateMissionProfile"></a>

```typescript
public readonly UpdateMissionProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMissionProfile API call.

---

### GroundStationResources <a name="GroundStationResources" id="@cdk_utils/iam.groundstation.GroundStationResources"></a>

ARN builders, validators, and parsers for groundstation resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.groundstation.GroundStationResources.Initializer"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

new groundstation.GroundStationResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.agent">agent</a></code> | Builds an ARN for the Agent resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.config">config</a></code> | Builds an ARN for the Config resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.contact">contact</a></code> | Builds an ARN for the Contact resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.dataflowEndpointGroup">dataflowEndpointGroup</a></code> | Builds an ARN for the DataflowEndpointGroup resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.ephemerisItem">ephemerisItem</a></code> | Builds an ARN for the EphemerisItem resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.groundStationResource">groundStationResource</a></code> | Builds an ARN for the GroundStationResource resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidAgentArn">isValidAgentArn</a></code> | Validates whether a string is a valid ARN for the Agent resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidConfigArn">isValidConfigArn</a></code> | Validates whether a string is a valid ARN for the Config resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidContactArn">isValidContactArn</a></code> | Validates whether a string is a valid ARN for the Contact resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidDataflowEndpointGroupArn">isValidDataflowEndpointGroupArn</a></code> | Validates whether a string is a valid ARN for the DataflowEndpointGroup resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidEphemerisItemArn">isValidEphemerisItemArn</a></code> | Validates whether a string is a valid ARN for the EphemerisItem resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidGroundStationResourceArn">isValidGroundStationResourceArn</a></code> | Validates whether a string is a valid ARN for the GroundStationResource resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidMissionProfileArn">isValidMissionProfileArn</a></code> | Validates whether a string is a valid ARN for the MissionProfile resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.isValidSatelliteArn">isValidSatelliteArn</a></code> | Validates whether a string is a valid ARN for the Satellite resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.missionProfile">missionProfile</a></code> | Builds an ARN for the MissionProfile resource. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseAgentArn">parseAgentArn</a></code> | Parses a Agent ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseConfigArn">parseConfigArn</a></code> | Parses a Config ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseContactArn">parseContactArn</a></code> | Parses a Contact ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseDataflowEndpointGroupArn">parseDataflowEndpointGroupArn</a></code> | Parses a DataflowEndpointGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseEphemerisItemArn">parseEphemerisItemArn</a></code> | Parses a EphemerisItem ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseGroundStationResourceArn">parseGroundStationResourceArn</a></code> | Parses a GroundStationResource ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseMissionProfileArn">parseMissionProfileArn</a></code> | Parses a MissionProfile ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.parseSatelliteArn">parseSatelliteArn</a></code> | Parses a Satellite ARN into its components. |
| <code><a href="#@cdk_utils/iam.groundstation.GroundStationResources.satellite">satellite</a></code> | Builds an ARN for the Satellite resource. |

---

##### `agent` <a name="agent" id="@cdk_utils/iam.groundstation.GroundStationResources.agent"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.agent(props: GroundStationAgentArnProps)
```

Builds an ARN for the Agent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.agent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationAgentArnProps">GroundStationAgentArnProps</a>

---

##### `config` <a name="config" id="@cdk_utils/iam.groundstation.GroundStationResources.config"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.config(props: GroundStationConfigArnProps)
```

Builds an ARN for the Config resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.config.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationConfigArnProps">GroundStationConfigArnProps</a>

---

##### `contact` <a name="contact" id="@cdk_utils/iam.groundstation.GroundStationResources.contact"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.contact(props: GroundStationContactArnProps)
```

Builds an ARN for the Contact resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.contact.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationContactArnProps">GroundStationContactArnProps</a>

---

##### `dataflowEndpointGroup` <a name="dataflowEndpointGroup" id="@cdk_utils/iam.groundstation.GroundStationResources.dataflowEndpointGroup"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.dataflowEndpointGroup(props: GroundStationDataflowEndpointGroupArnProps)
```

Builds an ARN for the DataflowEndpointGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.dataflowEndpointGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationDataflowEndpointGroupArnProps">GroundStationDataflowEndpointGroupArnProps</a>

---

##### `ephemerisItem` <a name="ephemerisItem" id="@cdk_utils/iam.groundstation.GroundStationResources.ephemerisItem"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.ephemerisItem(props: GroundStationEphemerisItemArnProps)
```

Builds an ARN for the EphemerisItem resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.ephemerisItem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationEphemerisItemArnProps">GroundStationEphemerisItemArnProps</a>

---

##### `groundStationResource` <a name="groundStationResource" id="@cdk_utils/iam.groundstation.GroundStationResources.groundStationResource"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.groundStationResource(props: GroundStationGroundStationResourceArnProps)
```

Builds an ARN for the GroundStationResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.groundStationResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationGroundStationResourceArnProps">GroundStationGroundStationResourceArnProps</a>

---

##### `isValidAgentArn` <a name="isValidAgentArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidAgentArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidAgentArn(arn: string)
```

Validates whether a string is a valid ARN for the Agent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConfigArn` <a name="isValidConfigArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidConfigArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the Config resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidContactArn` <a name="isValidContactArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidContactArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidContactArn(arn: string)
```

Validates whether a string is a valid ARN for the Contact resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidContactArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDataflowEndpointGroupArn` <a name="isValidDataflowEndpointGroupArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidDataflowEndpointGroupArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidDataflowEndpointGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the DataflowEndpointGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidDataflowEndpointGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEphemerisItemArn` <a name="isValidEphemerisItemArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidEphemerisItemArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidEphemerisItemArn(arn: string)
```

Validates whether a string is a valid ARN for the EphemerisItem resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidEphemerisItemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidGroundStationResourceArn` <a name="isValidGroundStationResourceArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidGroundStationResourceArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidGroundStationResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the GroundStationResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidGroundStationResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMissionProfileArn` <a name="isValidMissionProfileArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidMissionProfileArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidMissionProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the MissionProfile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidMissionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSatelliteArn` <a name="isValidSatelliteArn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidSatelliteArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.isValidSatelliteArn(arn: string)
```

Validates whether a string is a valid ARN for the Satellite resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.isValidSatelliteArn.parameter.arn"></a>

- *Type:* string

---

##### `missionProfile` <a name="missionProfile" id="@cdk_utils/iam.groundstation.GroundStationResources.missionProfile"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.missionProfile(props: GroundStationMissionProfileArnProps)
```

Builds an ARN for the MissionProfile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.missionProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationMissionProfileArnProps">GroundStationMissionProfileArnProps</a>

---

##### `parseAgentArn` <a name="parseAgentArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseAgentArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseAgentArn(arn: string)
```

Parses a Agent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseAgentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConfigArn` <a name="parseConfigArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseConfigArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseConfigArn(arn: string)
```

Parses a Config ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContactArn` <a name="parseContactArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseContactArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseContactArn(arn: string)
```

Parses a Contact ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseContactArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDataflowEndpointGroupArn` <a name="parseDataflowEndpointGroupArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseDataflowEndpointGroupArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseDataflowEndpointGroupArn(arn: string)
```

Parses a DataflowEndpointGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseDataflowEndpointGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEphemerisItemArn` <a name="parseEphemerisItemArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseEphemerisItemArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseEphemerisItemArn(arn: string)
```

Parses a EphemerisItem ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseEphemerisItemArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroundStationResourceArn` <a name="parseGroundStationResourceArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseGroundStationResourceArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseGroundStationResourceArn(arn: string)
```

Parses a GroundStationResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseGroundStationResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMissionProfileArn` <a name="parseMissionProfileArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseMissionProfileArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseMissionProfileArn(arn: string)
```

Parses a MissionProfile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseMissionProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSatelliteArn` <a name="parseSatelliteArn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseSatelliteArn"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.parseSatelliteArn(arn: string)
```

Parses a Satellite ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.groundstation.GroundStationResources.parseSatelliteArn.parameter.arn"></a>

- *Type:* string

---

##### `satellite` <a name="satellite" id="@cdk_utils/iam.groundstation.GroundStationResources.satellite"></a>

```typescript
import { groundstation } from '@cdk_utils/iam'

groundstation.GroundStationResources.satellite(props: GroundStationSatelliteArnProps)
```

Builds an ARN for the Satellite resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.groundstation.GroundStationResources.satellite.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.groundstation.GroundStationSatelliteArnProps">GroundStationSatelliteArnProps</a>

---




