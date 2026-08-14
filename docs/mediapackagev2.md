# `mediapackagev2` Submodule <a name="`mediapackagev2` Submodule" id="@cdk_utils/iam.mediapackagev2"></a>


## Structs <a name="Structs" id="Structs"></a>

### Mediapackagev2ChannelArnComponents <a name="Mediapackagev2ChannelArnComponents" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents"></a>

Parsed components of a Channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2ChannelArnComponents: mediapackagev2.Mediapackagev2ChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Mediapackagev2ChannelArnProps <a name="Mediapackagev2ChannelArnProps" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps"></a>

Properties for building a Channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2ChannelArnProps: mediapackagev2.Mediapackagev2ChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component of the ARN.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Mediapackagev2ChannelGroupArnComponents <a name="Mediapackagev2ChannelGroupArnComponents" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents"></a>

Parsed components of a ChannelGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2ChannelGroupArnComponents: mediapackagev2.Mediapackagev2ChannelGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Mediapackagev2ChannelGroupArnProps <a name="Mediapackagev2ChannelGroupArnProps" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps"></a>

Properties for building a ChannelGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2ChannelGroupArnProps: mediapackagev2.Mediapackagev2ChannelGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Mediapackagev2ChannelPolicyArnComponents <a name="Mediapackagev2ChannelPolicyArnComponents" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents"></a>

Parsed components of a ChannelPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2ChannelPolicyArnComponents: mediapackagev2.Mediapackagev2ChannelPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Mediapackagev2ChannelPolicyArnProps <a name="Mediapackagev2ChannelPolicyArnProps" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps"></a>

Properties for building a ChannelPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2ChannelPolicyArnProps: mediapackagev2.Mediapackagev2ChannelPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component of the ARN.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Mediapackagev2HarvestJobArnComponents <a name="Mediapackagev2HarvestJobArnComponents" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents"></a>

Parsed components of a HarvestJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2HarvestJobArnComponents: mediapackagev2.Mediapackagev2HarvestJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.harvestJobName">harvestJobName</a></code> | <code>string</code> | The HarvestJobName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | The OriginEndpointName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `harvestJobName`<sup>Required</sup> <a name="harvestJobName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.harvestJobName"></a>

```typescript
public readonly harvestJobName: string;
```

- *Type:* string

The HarvestJobName component.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

The OriginEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Mediapackagev2HarvestJobArnProps <a name="Mediapackagev2HarvestJobArnProps" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps"></a>

Properties for building a HarvestJob ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2HarvestJobArnProps: mediapackagev2.Mediapackagev2HarvestJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.harvestJobName">harvestJobName</a></code> | <code>string</code> | The HarvestJobName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | The OriginEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component of the ARN.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `harvestJobName`<sup>Required</sup> <a name="harvestJobName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.harvestJobName"></a>

```typescript
public readonly harvestJobName: string;
```

- *Type:* string

The HarvestJobName component of the ARN.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

The OriginEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Mediapackagev2OriginEndpointArnComponents <a name="Mediapackagev2OriginEndpointArnComponents" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents"></a>

Parsed components of a OriginEndpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2OriginEndpointArnComponents: mediapackagev2.Mediapackagev2OriginEndpointArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | The OriginEndpointName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

The OriginEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Mediapackagev2OriginEndpointArnProps <a name="Mediapackagev2OriginEndpointArnProps" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps"></a>

Properties for building a OriginEndpoint ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2OriginEndpointArnProps: mediapackagev2.Mediapackagev2OriginEndpointArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | The OriginEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component of the ARN.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

The OriginEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### Mediapackagev2OriginEndpointPolicyArnComponents <a name="Mediapackagev2OriginEndpointPolicyArnComponents" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents"></a>

Parsed components of a OriginEndpointPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2OriginEndpointPolicyArnComponents: mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | The OriginEndpointName component. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

The OriginEndpointName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### Mediapackagev2OriginEndpointPolicyArnProps <a name="Mediapackagev2OriginEndpointPolicyArnProps" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps"></a>

Properties for building a OriginEndpointPolicy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

const mediapackagev2OriginEndpointPolicyArnProps: mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.channelGroupName">channelGroupName</a></code> | <code>string</code> | The ChannelGroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.originEndpointName">originEndpointName</a></code> | <code>string</code> | The OriginEndpointName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelGroupName`<sup>Required</sup> <a name="channelGroupName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.channelGroupName"></a>

```typescript
public readonly channelGroupName: string;
```

- *Type:* string

The ChannelGroupName component of the ARN.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `originEndpointName`<sup>Required</sup> <a name="originEndpointName" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.originEndpointName"></a>

```typescript
public readonly originEndpointName: string;
```

- *Type:* string

The OriginEndpointName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Mediapackagev2Actions <a name="Mediapackagev2Actions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions"></a>

IAM action constants for the mediapackagev2 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

new mediapackagev2.Mediapackagev2Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetChannel">actionGetChannel</a></code> | <code>string</code> | [Read] mediapackagev2:GetChannel. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetChannelGroup">actionGetChannelGroup</a></code> | <code>string</code> | [Read] mediapackagev2:GetChannelGroup. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetChannelPolicy">actionGetChannelPolicy</a></code> | <code>string</code> | [Read] mediapackagev2:GetChannelPolicy. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetHarvestJob">actionGetHarvestJob</a></code> | <code>string</code> | [Read] mediapackagev2:GetHarvestJob. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetHeadObject">actionGetHeadObject</a></code> | <code>string</code> | [Read] mediapackagev2:GetHeadObject. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetObject">actionGetObject</a></code> | <code>string</code> | [Read] mediapackagev2:GetObject. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetOriginEndpoint">actionGetOriginEndpoint</a></code> | <code>string</code> | [Read] mediapackagev2:GetOriginEndpoint. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetOriginEndpointPolicy">actionGetOriginEndpointPolicy</a></code> | <code>string</code> | [Read] mediapackagev2:GetOriginEndpointPolicy. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CancelHarvestJob">CancelHarvestJob</a></code> | <code>string</code> | [Write] mediapackagev2:CancelHarvestJob. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] mediapackagev2:CreateChannel. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateChannelGroup">CreateChannelGroup</a></code> | <code>string</code> | [Write] mediapackagev2:CreateChannelGroup. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateHarvestJob">CreateHarvestJob</a></code> | <code>string</code> | [Write] mediapackagev2:CreateHarvestJob. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateOriginEndpoint">CreateOriginEndpoint</a></code> | <code>string</code> | [Write] mediapackagev2:CreateOriginEndpoint. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] mediapackagev2:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteChannelGroup">DeleteChannelGroup</a></code> | <code>string</code> | [Write] mediapackagev2:DeleteChannelGroup. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteChannelPolicy">DeleteChannelPolicy</a></code> | <code>string</code> | [Write] mediapackagev2:DeleteChannelPolicy. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteOriginEndpoint">DeleteOriginEndpoint</a></code> | <code>string</code> | [Write] mediapackagev2:DeleteOriginEndpoint. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteOriginEndpointPolicy">DeleteOriginEndpointPolicy</a></code> | <code>string</code> | [Write] mediapackagev2:DeleteOriginEndpointPolicy. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.HarvestObject">HarvestObject</a></code> | <code>string</code> | [Read] mediapackagev2:HarvestObject. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListChannelGroups">ListChannelGroups</a></code> | <code>string</code> | [List] mediapackagev2:ListChannelGroups. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] mediapackagev2:ListChannels. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListHarvestJobs">ListHarvestJobs</a></code> | <code>string</code> | [List] mediapackagev2:ListHarvestJobs. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListOriginEndpoints">ListOriginEndpoints</a></code> | <code>string</code> | [List] mediapackagev2:ListOriginEndpoints. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediapackagev2:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.PutChannelPolicy">PutChannelPolicy</a></code> | <code>string</code> | [Write] mediapackagev2:PutChannelPolicy. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.PutObject">PutObject</a></code> | <code>string</code> | [Write] mediapackagev2:PutObject. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.PutOriginEndpointPolicy">PutOriginEndpointPolicy</a></code> | <code>string</code> | [Write] mediapackagev2:PutOriginEndpointPolicy. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ResetChannelState">ResetChannelState</a></code> | <code>string</code> | [Write] mediapackagev2:ResetChannelState. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ResetOriginEndpointState">ResetOriginEndpointState</a></code> | <code>string</code> | [Write] mediapackagev2:ResetOriginEndpointState. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediapackagev2:TagResource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediapackagev2:UntagResource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] mediapackagev2:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UpdateChannelGroup">UpdateChannelGroup</a></code> | <code>string</code> | [Write] mediapackagev2:UpdateChannelGroup. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UpdateOriginEndpoint">UpdateOriginEndpoint</a></code> | <code>string</code> | [Write] mediapackagev2:UpdateOriginEndpoint. |

---

##### `actionGetChannel`<sup>Required</sup> <a name="actionGetChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetChannel"></a>

```typescript
public readonly actionGetChannel: string;
```

- *Type:* string

[Read] mediapackagev2:GetChannel.

---

##### `actionGetChannelGroup`<sup>Required</sup> <a name="actionGetChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetChannelGroup"></a>

```typescript
public readonly actionGetChannelGroup: string;
```

- *Type:* string

[Read] mediapackagev2:GetChannelGroup.

---

##### `actionGetChannelPolicy`<sup>Required</sup> <a name="actionGetChannelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetChannelPolicy"></a>

```typescript
public readonly actionGetChannelPolicy: string;
```

- *Type:* string

[Read] mediapackagev2:GetChannelPolicy.

---

##### `actionGetHarvestJob`<sup>Required</sup> <a name="actionGetHarvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetHarvestJob"></a>

```typescript
public readonly actionGetHarvestJob: string;
```

- *Type:* string

[Read] mediapackagev2:GetHarvestJob.

---

##### `actionGetHeadObject`<sup>Required</sup> <a name="actionGetHeadObject" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetHeadObject"></a>

```typescript
public readonly actionGetHeadObject: string;
```

- *Type:* string

[Read] mediapackagev2:GetHeadObject.

---

##### `actionGetObject`<sup>Required</sup> <a name="actionGetObject" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetObject"></a>

```typescript
public readonly actionGetObject: string;
```

- *Type:* string

[Read] mediapackagev2:GetObject.

---

##### `actionGetOriginEndpoint`<sup>Required</sup> <a name="actionGetOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetOriginEndpoint"></a>

```typescript
public readonly actionGetOriginEndpoint: string;
```

- *Type:* string

[Read] mediapackagev2:GetOriginEndpoint.

---

##### `actionGetOriginEndpointPolicy`<sup>Required</sup> <a name="actionGetOriginEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.actionGetOriginEndpointPolicy"></a>

```typescript
public readonly actionGetOriginEndpointPolicy: string;
```

- *Type:* string

[Read] mediapackagev2:GetOriginEndpointPolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelHarvestJob`<sup>Required</sup> <a name="CancelHarvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CancelHarvestJob"></a>

```typescript
public readonly CancelHarvestJob: string;
```

- *Type:* string

[Write] mediapackagev2:CancelHarvestJob.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] mediapackagev2:CreateChannel.

---

##### `CreateChannelGroup`<sup>Required</sup> <a name="CreateChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateChannelGroup"></a>

```typescript
public readonly CreateChannelGroup: string;
```

- *Type:* string

[Write] mediapackagev2:CreateChannelGroup.

---

##### `CreateHarvestJob`<sup>Required</sup> <a name="CreateHarvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateHarvestJob"></a>

```typescript
public readonly CreateHarvestJob: string;
```

- *Type:* string

[Write] mediapackagev2:CreateHarvestJob.

---

##### `CreateOriginEndpoint`<sup>Required</sup> <a name="CreateOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.CreateOriginEndpoint"></a>

```typescript
public readonly CreateOriginEndpoint: string;
```

- *Type:* string

[Write] mediapackagev2:CreateOriginEndpoint.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] mediapackagev2:DeleteChannel.

---

##### `DeleteChannelGroup`<sup>Required</sup> <a name="DeleteChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteChannelGroup"></a>

```typescript
public readonly DeleteChannelGroup: string;
```

- *Type:* string

[Write] mediapackagev2:DeleteChannelGroup.

---

##### `DeleteChannelPolicy`<sup>Required</sup> <a name="DeleteChannelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteChannelPolicy"></a>

```typescript
public readonly DeleteChannelPolicy: string;
```

- *Type:* string

[Write] mediapackagev2:DeleteChannelPolicy.

---

##### `DeleteOriginEndpoint`<sup>Required</sup> <a name="DeleteOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteOriginEndpoint"></a>

```typescript
public readonly DeleteOriginEndpoint: string;
```

- *Type:* string

[Write] mediapackagev2:DeleteOriginEndpoint.

---

##### `DeleteOriginEndpointPolicy`<sup>Required</sup> <a name="DeleteOriginEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.DeleteOriginEndpointPolicy"></a>

```typescript
public readonly DeleteOriginEndpointPolicy: string;
```

- *Type:* string

[Write] mediapackagev2:DeleteOriginEndpointPolicy.

---

##### `HarvestObject`<sup>Required</sup> <a name="HarvestObject" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.HarvestObject"></a>

```typescript
public readonly HarvestObject: string;
```

- *Type:* string

[Read] mediapackagev2:HarvestObject.

---

##### `ListChannelGroups`<sup>Required</sup> <a name="ListChannelGroups" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListChannelGroups"></a>

```typescript
public readonly ListChannelGroups: string;
```

- *Type:* string

[List] mediapackagev2:ListChannelGroups.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] mediapackagev2:ListChannels.

---

##### `ListHarvestJobs`<sup>Required</sup> <a name="ListHarvestJobs" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListHarvestJobs"></a>

```typescript
public readonly ListHarvestJobs: string;
```

- *Type:* string

[List] mediapackagev2:ListHarvestJobs.

---

##### `ListOriginEndpoints`<sup>Required</sup> <a name="ListOriginEndpoints" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListOriginEndpoints"></a>

```typescript
public readonly ListOriginEndpoints: string;
```

- *Type:* string

[List] mediapackagev2:ListOriginEndpoints.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediapackagev2:ListTagsForResource.

---

##### `PutChannelPolicy`<sup>Required</sup> <a name="PutChannelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.PutChannelPolicy"></a>

```typescript
public readonly PutChannelPolicy: string;
```

- *Type:* string

[Write] mediapackagev2:PutChannelPolicy.

---

##### `PutObject`<sup>Required</sup> <a name="PutObject" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.PutObject"></a>

```typescript
public readonly PutObject: string;
```

- *Type:* string

[Write] mediapackagev2:PutObject.

---

##### `PutOriginEndpointPolicy`<sup>Required</sup> <a name="PutOriginEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.PutOriginEndpointPolicy"></a>

```typescript
public readonly PutOriginEndpointPolicy: string;
```

- *Type:* string

[Write] mediapackagev2:PutOriginEndpointPolicy.

---

##### `ResetChannelState`<sup>Required</sup> <a name="ResetChannelState" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ResetChannelState"></a>

```typescript
public readonly ResetChannelState: string;
```

- *Type:* string

[Write] mediapackagev2:ResetChannelState.

---

##### `ResetOriginEndpointState`<sup>Required</sup> <a name="ResetOriginEndpointState" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.ResetOriginEndpointState"></a>

```typescript
public readonly ResetOriginEndpointState: string;
```

- *Type:* string

[Write] mediapackagev2:ResetOriginEndpointState.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediapackagev2:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediapackagev2:UntagResource.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] mediapackagev2:UpdateChannel.

---

##### `UpdateChannelGroup`<sup>Required</sup> <a name="UpdateChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UpdateChannelGroup"></a>

```typescript
public readonly UpdateChannelGroup: string;
```

- *Type:* string

[Write] mediapackagev2:UpdateChannelGroup.

---

##### `UpdateOriginEndpoint`<sup>Required</sup> <a name="UpdateOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Actions.property.UpdateOriginEndpoint"></a>

```typescript
public readonly UpdateOriginEndpoint: string;
```

- *Type:* string

[Write] mediapackagev2:UpdateOriginEndpoint.

---

### Mediapackagev2Conditions <a name="Mediapackagev2Conditions" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions"></a>

Condition key constants and builders for mediapackagev2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

new mediapackagev2.Mediapackagev2Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.requestTag"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.resourceTag"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.tagKeys"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateChannelGroupConditionKeys">CreateChannelGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannelGroup action. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateHarvestJobConditionKeys">CreateHarvestJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHarvestJob action. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateOriginEndpointConditionKeys">CreateOriginEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOriginEndpoint action. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateChannelGroupConditionKeys`<sup>Required</sup> <a name="CreateChannelGroupConditionKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateChannelGroupConditionKeys"></a>

```typescript
public readonly CreateChannelGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannelGroup action.

---

##### `CreateHarvestJobConditionKeys`<sup>Required</sup> <a name="CreateHarvestJobConditionKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateHarvestJobConditionKeys"></a>

```typescript
public readonly CreateHarvestJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHarvestJob action.

---

##### `CreateOriginEndpointConditionKeys`<sup>Required</sup> <a name="CreateOriginEndpointConditionKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.CreateOriginEndpointConditionKeys"></a>

```typescript
public readonly CreateOriginEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOriginEndpoint action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### Mediapackagev2Operations <a name="Mediapackagev2Operations" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations"></a>

API operation to required IAM actions mapping for mediapackagev2.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

new mediapackagev2.Mediapackagev2Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CancelHarvestJob">CancelHarvestJob</a></code> | <code>string[]</code> | IAM actions required for the CancelHarvestJob API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateChannelGroup">CreateChannelGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateHarvestJob">CreateHarvestJob</a></code> | <code>string[]</code> | IAM actions required for the CreateHarvestJob API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateOriginEndpoint">CreateOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateOriginEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteChannelGroup">DeleteChannelGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteChannelPolicy">DeleteChannelPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteOriginEndpoint">DeleteOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteOriginEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteOriginEndpointPolicy">DeleteOriginEndpointPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteOriginEndpointPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListChannelGroups">ListChannelGroups</a></code> | <code>string[]</code> | IAM actions required for the ListChannelGroups API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListHarvestJobs">ListHarvestJobs</a></code> | <code>string[]</code> | IAM actions required for the ListHarvestJobs API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListOriginEndpoints">ListOriginEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListOriginEndpoints API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetChannel">opGetChannel</a></code> | <code>string[]</code> | IAM actions required for the GetChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetChannelGroup">opGetChannelGroup</a></code> | <code>string[]</code> | IAM actions required for the GetChannelGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetChannelPolicy">opGetChannelPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetChannelPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetHarvestJob">opGetHarvestJob</a></code> | <code>string[]</code> | IAM actions required for the GetHarvestJob API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetOriginEndpoint">opGetOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetOriginEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetOriginEndpointPolicy">opGetOriginEndpointPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetOriginEndpointPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.PutChannelPolicy">PutChannelPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutChannelPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.PutOriginEndpointPolicy">PutOriginEndpointPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutOriginEndpointPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ResetChannelState">ResetChannelState</a></code> | <code>string[]</code> | IAM actions required for the ResetChannelState API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ResetOriginEndpointState">ResetOriginEndpointState</a></code> | <code>string[]</code> | IAM actions required for the ResetOriginEndpointState API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UpdateChannelGroup">UpdateChannelGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelGroup API call. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UpdateOriginEndpoint">UpdateOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateOriginEndpoint API call. |

---

##### `CancelHarvestJob`<sup>Required</sup> <a name="CancelHarvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CancelHarvestJob"></a>

```typescript
public readonly CancelHarvestJob: string[];
```

- *Type:* string[]

IAM actions required for the CancelHarvestJob API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateChannelGroup`<sup>Required</sup> <a name="CreateChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateChannelGroup"></a>

```typescript
public readonly CreateChannelGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelGroup API call.

---

##### `CreateHarvestJob`<sup>Required</sup> <a name="CreateHarvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateHarvestJob"></a>

```typescript
public readonly CreateHarvestJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateHarvestJob API call.

---

##### `CreateOriginEndpoint`<sup>Required</sup> <a name="CreateOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.CreateOriginEndpoint"></a>

```typescript
public readonly CreateOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateOriginEndpoint API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteChannelGroup`<sup>Required</sup> <a name="DeleteChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteChannelGroup"></a>

```typescript
public readonly DeleteChannelGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelGroup API call.

---

##### `DeleteChannelPolicy`<sup>Required</sup> <a name="DeleteChannelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteChannelPolicy"></a>

```typescript
public readonly DeleteChannelPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelPolicy API call.

---

##### `DeleteOriginEndpoint`<sup>Required</sup> <a name="DeleteOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteOriginEndpoint"></a>

```typescript
public readonly DeleteOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOriginEndpoint API call.

---

##### `DeleteOriginEndpointPolicy`<sup>Required</sup> <a name="DeleteOriginEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.DeleteOriginEndpointPolicy"></a>

```typescript
public readonly DeleteOriginEndpointPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOriginEndpointPolicy API call.

---

##### `ListChannelGroups`<sup>Required</sup> <a name="ListChannelGroups" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListChannelGroups"></a>

```typescript
public readonly ListChannelGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelGroups API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListHarvestJobs`<sup>Required</sup> <a name="ListHarvestJobs" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListHarvestJobs"></a>

```typescript
public readonly ListHarvestJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListHarvestJobs API call.

---

##### `ListOriginEndpoints`<sup>Required</sup> <a name="ListOriginEndpoints" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListOriginEndpoints"></a>

```typescript
public readonly ListOriginEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListOriginEndpoints API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetChannel`<sup>Required</sup> <a name="opGetChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetChannel"></a>

```typescript
public readonly opGetChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetChannel API call.

---

##### `opGetChannelGroup`<sup>Required</sup> <a name="opGetChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetChannelGroup"></a>

```typescript
public readonly opGetChannelGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelGroup API call.

---

##### `opGetChannelPolicy`<sup>Required</sup> <a name="opGetChannelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetChannelPolicy"></a>

```typescript
public readonly opGetChannelPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelPolicy API call.

---

##### `opGetHarvestJob`<sup>Required</sup> <a name="opGetHarvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetHarvestJob"></a>

```typescript
public readonly opGetHarvestJob: string[];
```

- *Type:* string[]

IAM actions required for the GetHarvestJob API call.

---

##### `opGetOriginEndpoint`<sup>Required</sup> <a name="opGetOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetOriginEndpoint"></a>

```typescript
public readonly opGetOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetOriginEndpoint API call.

---

##### `opGetOriginEndpointPolicy`<sup>Required</sup> <a name="opGetOriginEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.opGetOriginEndpointPolicy"></a>

```typescript
public readonly opGetOriginEndpointPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetOriginEndpointPolicy API call.

---

##### `PutChannelPolicy`<sup>Required</sup> <a name="PutChannelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.PutChannelPolicy"></a>

```typescript
public readonly PutChannelPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutChannelPolicy API call.

---

##### `PutOriginEndpointPolicy`<sup>Required</sup> <a name="PutOriginEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.PutOriginEndpointPolicy"></a>

```typescript
public readonly PutOriginEndpointPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutOriginEndpointPolicy API call.

---

##### `ResetChannelState`<sup>Required</sup> <a name="ResetChannelState" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ResetChannelState"></a>

```typescript
public readonly ResetChannelState: string[];
```

- *Type:* string[]

IAM actions required for the ResetChannelState API call.

---

##### `ResetOriginEndpointState`<sup>Required</sup> <a name="ResetOriginEndpointState" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.ResetOriginEndpointState"></a>

```typescript
public readonly ResetOriginEndpointState: string[];
```

- *Type:* string[]

IAM actions required for the ResetOriginEndpointState API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateChannelGroup`<sup>Required</sup> <a name="UpdateChannelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UpdateChannelGroup"></a>

```typescript
public readonly UpdateChannelGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelGroup API call.

---

##### `UpdateOriginEndpoint`<sup>Required</sup> <a name="UpdateOriginEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Operations.property.UpdateOriginEndpoint"></a>

```typescript
public readonly UpdateOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOriginEndpoint API call.

---

### Mediapackagev2Resources <a name="Mediapackagev2Resources" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources"></a>

ARN builders, validators, and parsers for mediapackagev2 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.Initializer"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

new mediapackagev2.Mediapackagev2Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channel">channel</a></code> | Builds an ARN for the Channel resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channelGroup">channelGroup</a></code> | Builds an ARN for the ChannelGroup resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channelPolicy">channelPolicy</a></code> | Builds an ARN for the ChannelPolicy resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.harvestJob">harvestJob</a></code> | Builds an ARN for the HarvestJob resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the Channel resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelGroupArn">isValidChannelGroupArn</a></code> | Validates whether a string is a valid ARN for the ChannelGroup resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelPolicyArn">isValidChannelPolicyArn</a></code> | Validates whether a string is a valid ARN for the ChannelPolicy resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidHarvestJobArn">isValidHarvestJobArn</a></code> | Validates whether a string is a valid ARN for the HarvestJob resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointArn">isValidOriginEndpointArn</a></code> | Validates whether a string is a valid ARN for the OriginEndpoint resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointPolicyArn">isValidOriginEndpointPolicyArn</a></code> | Validates whether a string is a valid ARN for the OriginEndpointPolicy resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.originEndpoint">originEndpoint</a></code> | Builds an ARN for the OriginEndpoint resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.originEndpointPolicy">originEndpointPolicy</a></code> | Builds an ARN for the OriginEndpointPolicy resource. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelArn">parseChannelArn</a></code> | Parses a Channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelGroupArn">parseChannelGroupArn</a></code> | Parses a ChannelGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelPolicyArn">parseChannelPolicyArn</a></code> | Parses a ChannelPolicy ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseHarvestJobArn">parseHarvestJobArn</a></code> | Parses a HarvestJob ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseOriginEndpointArn">parseOriginEndpointArn</a></code> | Parses a OriginEndpoint ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseOriginEndpointPolicyArn">parseOriginEndpointPolicyArn</a></code> | Parses a OriginEndpointPolicy ARN into its components. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channel"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.channel(props: Mediapackagev2ChannelArnProps)
```

Builds an ARN for the Channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelArnProps">Mediapackagev2ChannelArnProps</a>

---

##### `channelGroup` <a name="channelGroup" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channelGroup"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.channelGroup(props: Mediapackagev2ChannelGroupArnProps)
```

Builds an ARN for the ChannelGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channelGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelGroupArnProps">Mediapackagev2ChannelGroupArnProps</a>

---

##### `channelPolicy` <a name="channelPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channelPolicy"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.channelPolicy(props: Mediapackagev2ChannelPolicyArnProps)
```

Builds an ARN for the ChannelPolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.channelPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2ChannelPolicyArnProps">Mediapackagev2ChannelPolicyArnProps</a>

---

##### `harvestJob` <a name="harvestJob" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.harvestJob"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.harvestJob(props: Mediapackagev2HarvestJobArnProps)
```

Builds an ARN for the HarvestJob resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.harvestJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2HarvestJobArnProps">Mediapackagev2HarvestJobArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the Channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelGroupArn` <a name="isValidChannelGroupArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelGroupArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.isValidChannelGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the ChannelGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelPolicyArn` <a name="isValidChannelPolicyArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelPolicyArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.isValidChannelPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the ChannelPolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidChannelPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHarvestJobArn` <a name="isValidHarvestJobArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidHarvestJobArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.isValidHarvestJobArn(arn: string)
```

Validates whether a string is a valid ARN for the HarvestJob resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidHarvestJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOriginEndpointArn` <a name="isValidOriginEndpointArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointArn(arn: string)
```

Validates whether a string is a valid ARN for the OriginEndpoint resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOriginEndpointPolicyArn` <a name="isValidOriginEndpointPolicyArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointPolicyArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the OriginEndpointPolicy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.isValidOriginEndpointPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `originEndpoint` <a name="originEndpoint" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.originEndpoint"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.originEndpoint(props: Mediapackagev2OriginEndpointArnProps)
```

Builds an ARN for the OriginEndpoint resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.originEndpoint.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointArnProps">Mediapackagev2OriginEndpointArnProps</a>

---

##### `originEndpointPolicy` <a name="originEndpointPolicy" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.originEndpointPolicy"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.originEndpointPolicy(props: Mediapackagev2OriginEndpointPolicyArnProps)
```

Builds an ARN for the OriginEndpointPolicy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.originEndpointPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackagev2.Mediapackagev2OriginEndpointPolicyArnProps">Mediapackagev2OriginEndpointPolicyArnProps</a>

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.parseChannelArn(arn: string)
```

Parses a Channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelGroupArn` <a name="parseChannelGroupArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelGroupArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.parseChannelGroupArn(arn: string)
```

Parses a ChannelGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelPolicyArn` <a name="parseChannelPolicyArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelPolicyArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.parseChannelPolicyArn(arn: string)
```

Parses a ChannelPolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseChannelPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHarvestJobArn` <a name="parseHarvestJobArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseHarvestJobArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.parseHarvestJobArn(arn: string)
```

Parses a HarvestJob ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseHarvestJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOriginEndpointArn` <a name="parseOriginEndpointArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseOriginEndpointArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.parseOriginEndpointArn(arn: string)
```

Parses a OriginEndpoint ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseOriginEndpointArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOriginEndpointPolicyArn` <a name="parseOriginEndpointPolicyArn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseOriginEndpointPolicyArn"></a>

```typescript
import { mediapackagev2 } from '@cdk_utils/iam'

mediapackagev2.Mediapackagev2Resources.parseOriginEndpointPolicyArn(arn: string)
```

Parses a OriginEndpointPolicy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackagev2.Mediapackagev2Resources.parseOriginEndpointPolicyArn.parameter.arn"></a>

- *Type:* string

---




