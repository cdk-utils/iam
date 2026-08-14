# `ivs` Submodule <a name="`ivs` Submodule" id="@cdk_utils/iam.ivs"></a>


## Structs <a name="Structs" id="Structs"></a>

### IvsAdConfigurationArnComponents <a name="IvsAdConfigurationArnComponents" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents"></a>

Parsed components of a Ad-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsAdConfigurationArnComponents: ivs.IvsAdConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsAdConfigurationArnProps <a name="IvsAdConfigurationArnProps" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnProps"></a>

Properties for building a Ad-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsAdConfigurationArnProps: ivs.IvsAdConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsAdConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsChannelArnComponents <a name="IvsChannelArnComponents" id="@cdk_utils/iam.ivs.IvsChannelArnComponents"></a>

Parsed components of a Channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsChannelArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsChannelArnComponents: ivs.IvsChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsChannelArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsChannelArnProps <a name="IvsChannelArnProps" id="@cdk_utils/iam.ivs.IvsChannelArnProps"></a>

Properties for building a Channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsChannelArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsChannelArnProps: ivs.IvsChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsChannelArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsCompositionArnComponents <a name="IvsCompositionArnComponents" id="@cdk_utils/iam.ivs.IvsCompositionArnComponents"></a>

Parsed components of a Composition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsCompositionArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsCompositionArnComponents: ivs.IvsCompositionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsCompositionArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsCompositionArnProps <a name="IvsCompositionArnProps" id="@cdk_utils/iam.ivs.IvsCompositionArnProps"></a>

Properties for building a Composition ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsCompositionArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsCompositionArnProps: ivs.IvsCompositionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsCompositionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsCompositionArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsCompositionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsCompositionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsCompositionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsEncoderConfigurationArnComponents <a name="IvsEncoderConfigurationArnComponents" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents"></a>

Parsed components of a Encoder-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsEncoderConfigurationArnComponents: ivs.IvsEncoderConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsEncoderConfigurationArnProps <a name="IvsEncoderConfigurationArnProps" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps"></a>

Properties for building a Encoder-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsEncoderConfigurationArnProps: ivs.IvsEncoderConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsIngestConfigurationArnComponents <a name="IvsIngestConfigurationArnComponents" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents"></a>

Parsed components of a Ingest-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsIngestConfigurationArnComponents: ivs.IvsIngestConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsIngestConfigurationArnProps <a name="IvsIngestConfigurationArnProps" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps"></a>

Properties for building a Ingest-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsIngestConfigurationArnProps: ivs.IvsIngestConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsPlaybackKeyPairArnComponents <a name="IvsPlaybackKeyPairArnComponents" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents"></a>

Parsed components of a Playback-Key-Pair ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsPlaybackKeyPairArnComponents: ivs.IvsPlaybackKeyPairArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsPlaybackKeyPairArnProps <a name="IvsPlaybackKeyPairArnProps" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps"></a>

Properties for building a Playback-Key-Pair ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsPlaybackKeyPairArnProps: ivs.IvsPlaybackKeyPairArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsPlaybackRestrictionPolicyArnComponents <a name="IvsPlaybackRestrictionPolicyArnComponents" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents"></a>

Parsed components of a Playback-Restriction-Policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsPlaybackRestrictionPolicyArnComponents: ivs.IvsPlaybackRestrictionPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsPlaybackRestrictionPolicyArnProps <a name="IvsPlaybackRestrictionPolicyArnProps" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps"></a>

Properties for building a Playback-Restriction-Policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsPlaybackRestrictionPolicyArnProps: ivs.IvsPlaybackRestrictionPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsPublicKeyArnComponents <a name="IvsPublicKeyArnComponents" id="@cdk_utils/iam.ivs.IvsPublicKeyArnComponents"></a>

Parsed components of a Public-Key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsPublicKeyArnComponents: ivs.IvsPublicKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsPublicKeyArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsPublicKeyArnProps <a name="IvsPublicKeyArnProps" id="@cdk_utils/iam.ivs.IvsPublicKeyArnProps"></a>

Properties for building a Public-Key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsPublicKeyArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsPublicKeyArnProps: ivs.IvsPublicKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsPublicKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsRecordingConfigurationArnComponents <a name="IvsRecordingConfigurationArnComponents" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents"></a>

Parsed components of a Recording-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsRecordingConfigurationArnComponents: ivs.IvsRecordingConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsRecordingConfigurationArnProps <a name="IvsRecordingConfigurationArnProps" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps"></a>

Properties for building a Recording-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsRecordingConfigurationArnProps: ivs.IvsRecordingConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsStageArnComponents <a name="IvsStageArnComponents" id="@cdk_utils/iam.ivs.IvsStageArnComponents"></a>

Parsed components of a Stage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsStageArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsStageArnComponents: ivs.IvsStageArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsStageArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsStageArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsStageArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsStageArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsStageArnProps <a name="IvsStageArnProps" id="@cdk_utils/iam.ivs.IvsStageArnProps"></a>

Properties for building a Stage ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsStageArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsStageArnProps: ivs.IvsStageArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStageArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsStageArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsStageArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsStageArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsStageArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsStorageConfigurationArnComponents <a name="IvsStorageConfigurationArnComponents" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents"></a>

Parsed components of a Storage-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsStorageConfigurationArnComponents: ivs.IvsStorageConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsStorageConfigurationArnProps <a name="IvsStorageConfigurationArnProps" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps"></a>

Properties for building a Storage-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsStorageConfigurationArnProps: ivs.IvsStorageConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvsStreamKeyArnComponents <a name="IvsStreamKeyArnComponents" id="@cdk_utils/iam.ivs.IvsStreamKeyArnComponents"></a>

Parsed components of a Stream-Key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsStreamKeyArnComponents: ivs.IvsStreamKeyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsStreamKeyArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvsStreamKeyArnProps <a name="IvsStreamKeyArnProps" id="@cdk_utils/iam.ivs.IvsStreamKeyArnProps"></a>

Properties for building a Stream-Key ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivs.IvsStreamKeyArnProps.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

const ivsStreamKeyArnProps: ivs.IvsStreamKeyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivs.IvsStreamKeyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IvsActions <a name="IvsActions" id="@cdk_utils/iam.ivs.IvsActions"></a>

IAM action constants for the ivs service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivs.IvsActions.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

new ivs.IvsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetAdConfiguration">actionGetAdConfiguration</a></code> | <code>string</code> | [Read] ivs:GetAdConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetChannel">actionGetChannel</a></code> | <code>string</code> | [Read] ivs:GetChannel. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetComposition">actionGetComposition</a></code> | <code>string</code> | [Read] ivs:GetComposition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetEncoderConfiguration">actionGetEncoderConfiguration</a></code> | <code>string</code> | [Read] ivs:GetEncoderConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetIngestConfiguration">actionGetIngestConfiguration</a></code> | <code>string</code> | [Read] ivs:GetIngestConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetParticipant">actionGetParticipant</a></code> | <code>string</code> | [Read] ivs:GetParticipant. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetPlaybackKeyPair">actionGetPlaybackKeyPair</a></code> | <code>string</code> | [Read] ivs:GetPlaybackKeyPair. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetPlaybackRestrictionPolicy">actionGetPlaybackRestrictionPolicy</a></code> | <code>string</code> | [Read] ivs:GetPlaybackRestrictionPolicy. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetPublicKey">actionGetPublicKey</a></code> | <code>string</code> | [Read] ivs:GetPublicKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetRecordingConfiguration">actionGetRecordingConfiguration</a></code> | <code>string</code> | [Read] ivs:GetRecordingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetStage">actionGetStage</a></code> | <code>string</code> | [Read] ivs:GetStage. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetStageSession">actionGetStageSession</a></code> | <code>string</code> | [Read] ivs:GetStageSession. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetStorageConfiguration">actionGetStorageConfiguration</a></code> | <code>string</code> | [Read] ivs:GetStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetStream">actionGetStream</a></code> | <code>string</code> | [Read] ivs:GetStream. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetStreamKey">actionGetStreamKey</a></code> | <code>string</code> | [Read] ivs:GetStreamKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.actionGetStreamSession">actionGetStreamSession</a></code> | <code>string</code> | [Read] ivs:GetStreamSession. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.BatchGetChannel">BatchGetChannel</a></code> | <code>string</code> | [Read] ivs:BatchGetChannel. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.BatchGetStreamKey">BatchGetStreamKey</a></code> | <code>string</code> | [Read] ivs:BatchGetStreamKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.BatchStartViewerSessionRevocation">BatchStartViewerSessionRevocation</a></code> | <code>string</code> | [Write] ivs:BatchStartViewerSessionRevocation. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateAdConfiguration">CreateAdConfiguration</a></code> | <code>string</code> | [Write] ivs:CreateAdConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] ivs:CreateChannel. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateEncoderConfiguration">CreateEncoderConfiguration</a></code> | <code>string</code> | [Write] ivs:CreateEncoderConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateIngestConfiguration">CreateIngestConfiguration</a></code> | <code>string</code> | [Write] ivs:CreateIngestConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateParticipantToken">CreateParticipantToken</a></code> | <code>string</code> | [Write] ivs:CreateParticipantToken. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreatePlaybackRestrictionPolicy">CreatePlaybackRestrictionPolicy</a></code> | <code>string</code> | [Write] ivs:CreatePlaybackRestrictionPolicy. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateRecordingConfiguration">CreateRecordingConfiguration</a></code> | <code>string</code> | [Write] ivs:CreateRecordingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateStage">CreateStage</a></code> | <code>string</code> | [Write] ivs:CreateStage. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateStorageConfiguration">CreateStorageConfiguration</a></code> | <code>string</code> | [Write] ivs:CreateStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.CreateStreamKey">CreateStreamKey</a></code> | <code>string</code> | [Write] ivs:CreateStreamKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteAdConfiguration">DeleteAdConfiguration</a></code> | <code>string</code> | [Write] ivs:DeleteAdConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] ivs:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteEncoderConfiguration">DeleteEncoderConfiguration</a></code> | <code>string</code> | [Write] ivs:DeleteEncoderConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteIngestConfiguration">DeleteIngestConfiguration</a></code> | <code>string</code> | [Write] ivs:DeleteIngestConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeletePlaybackKeyPair">DeletePlaybackKeyPair</a></code> | <code>string</code> | [Write] ivs:DeletePlaybackKeyPair. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeletePlaybackRestrictionPolicy">DeletePlaybackRestrictionPolicy</a></code> | <code>string</code> | [Write] ivs:DeletePlaybackRestrictionPolicy. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeletePublicKey">DeletePublicKey</a></code> | <code>string</code> | [Write] ivs:DeletePublicKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteRecordingConfiguration">DeleteRecordingConfiguration</a></code> | <code>string</code> | [Write] ivs:DeleteRecordingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteStage">DeleteStage</a></code> | <code>string</code> | [Write] ivs:DeleteStage. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteStorageConfiguration">DeleteStorageConfiguration</a></code> | <code>string</code> | [Write] ivs:DeleteStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DeleteStreamKey">DeleteStreamKey</a></code> | <code>string</code> | [Write] ivs:DeleteStreamKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.DisconnectParticipant">DisconnectParticipant</a></code> | <code>string</code> | [Write] ivs:DisconnectParticipant. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ImportPlaybackKeyPair">ImportPlaybackKeyPair</a></code> | <code>string</code> | [Write] ivs:ImportPlaybackKeyPair. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ImportPublicKey">ImportPublicKey</a></code> | <code>string</code> | [Write] ivs:ImportPublicKey. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.InsertAdBreak">InsertAdBreak</a></code> | <code>string</code> | [Write] ivs:InsertAdBreak. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListAdConfigurations">ListAdConfigurations</a></code> | <code>string</code> | [List] ivs:ListAdConfigurations. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] ivs:ListChannels. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListCompositions">ListCompositions</a></code> | <code>string</code> | [List] ivs:ListCompositions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListEncoderConfigurations">ListEncoderConfigurations</a></code> | <code>string</code> | [List] ivs:ListEncoderConfigurations. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListIngestConfigurations">ListIngestConfigurations</a></code> | <code>string</code> | [List] ivs:ListIngestConfigurations. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListParticipantEvents">ListParticipantEvents</a></code> | <code>string</code> | [List] ivs:ListParticipantEvents. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListParticipantReplicas">ListParticipantReplicas</a></code> | <code>string</code> | [List] ivs:ListParticipantReplicas. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListParticipants">ListParticipants</a></code> | <code>string</code> | [List] ivs:ListParticipants. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListPlaybackKeyPairs">ListPlaybackKeyPairs</a></code> | <code>string</code> | [List] ivs:ListPlaybackKeyPairs. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListPlaybackRestrictionPolicies">ListPlaybackRestrictionPolicies</a></code> | <code>string</code> | [List] ivs:ListPlaybackRestrictionPolicies. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListPublicKeys">ListPublicKeys</a></code> | <code>string</code> | [List] ivs:ListPublicKeys. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListRecordingConfigurations">ListRecordingConfigurations</a></code> | <code>string</code> | [List] ivs:ListRecordingConfigurations. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListStages">ListStages</a></code> | <code>string</code> | [List] ivs:ListStages. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListStageSessions">ListStageSessions</a></code> | <code>string</code> | [List] ivs:ListStageSessions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListStorageConfigurations">ListStorageConfigurations</a></code> | <code>string</code> | [List] ivs:ListStorageConfigurations. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListStreamKeys">ListStreamKeys</a></code> | <code>string</code> | [List] ivs:ListStreamKeys. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [List] ivs:ListStreams. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListStreamSessions">ListStreamSessions</a></code> | <code>string</code> | [List] ivs:ListStreamSessions. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ivs:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.PutMetadata">PutMetadata</a></code> | <code>string</code> | [Write] ivs:PutMetadata. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.StartComposition">StartComposition</a></code> | <code>string</code> | [Write] ivs:StartComposition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.StartParticipantReplication">StartParticipantReplication</a></code> | <code>string</code> | [Write] ivs:StartParticipantReplication. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.StartViewerSessionRevocation">StartViewerSessionRevocation</a></code> | <code>string</code> | [Write] ivs:StartViewerSessionRevocation. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.StopComposition">StopComposition</a></code> | <code>string</code> | [Write] ivs:StopComposition. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.StopParticipantReplication">StopParticipantReplication</a></code> | <code>string</code> | [Write] ivs:StopParticipantReplication. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.StopStream">StopStream</a></code> | <code>string</code> | [Write] ivs:StopStream. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ivs:TagResource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ivs:UntagResource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.UpdateAdConfiguration">UpdateAdConfiguration</a></code> | <code>string</code> | [Write] ivs:UpdateAdConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] ivs:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.UpdateIngestConfiguration">UpdateIngestConfiguration</a></code> | <code>string</code> | [Write] ivs:UpdateIngestConfiguration. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.UpdatePlaybackRestrictionPolicy">UpdatePlaybackRestrictionPolicy</a></code> | <code>string</code> | [Write] ivs:UpdatePlaybackRestrictionPolicy. |
| <code><a href="#@cdk_utils/iam.ivs.IvsActions.property.UpdateStage">UpdateStage</a></code> | <code>string</code> | [Write] ivs:UpdateStage. |

---

##### `actionGetAdConfiguration`<sup>Required</sup> <a name="actionGetAdConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetAdConfiguration"></a>

```typescript
public readonly actionGetAdConfiguration: string;
```

- *Type:* string

[Read] ivs:GetAdConfiguration.

---

##### `actionGetChannel`<sup>Required</sup> <a name="actionGetChannel" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetChannel"></a>

```typescript
public readonly actionGetChannel: string;
```

- *Type:* string

[Read] ivs:GetChannel.

---

##### `actionGetComposition`<sup>Required</sup> <a name="actionGetComposition" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetComposition"></a>

```typescript
public readonly actionGetComposition: string;
```

- *Type:* string

[Read] ivs:GetComposition.

---

##### `actionGetEncoderConfiguration`<sup>Required</sup> <a name="actionGetEncoderConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetEncoderConfiguration"></a>

```typescript
public readonly actionGetEncoderConfiguration: string;
```

- *Type:* string

[Read] ivs:GetEncoderConfiguration.

---

##### `actionGetIngestConfiguration`<sup>Required</sup> <a name="actionGetIngestConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetIngestConfiguration"></a>

```typescript
public readonly actionGetIngestConfiguration: string;
```

- *Type:* string

[Read] ivs:GetIngestConfiguration.

---

##### `actionGetParticipant`<sup>Required</sup> <a name="actionGetParticipant" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetParticipant"></a>

```typescript
public readonly actionGetParticipant: string;
```

- *Type:* string

[Read] ivs:GetParticipant.

---

##### `actionGetPlaybackKeyPair`<sup>Required</sup> <a name="actionGetPlaybackKeyPair" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetPlaybackKeyPair"></a>

```typescript
public readonly actionGetPlaybackKeyPair: string;
```

- *Type:* string

[Read] ivs:GetPlaybackKeyPair.

---

##### `actionGetPlaybackRestrictionPolicy`<sup>Required</sup> <a name="actionGetPlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetPlaybackRestrictionPolicy"></a>

```typescript
public readonly actionGetPlaybackRestrictionPolicy: string;
```

- *Type:* string

[Read] ivs:GetPlaybackRestrictionPolicy.

---

##### `actionGetPublicKey`<sup>Required</sup> <a name="actionGetPublicKey" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetPublicKey"></a>

```typescript
public readonly actionGetPublicKey: string;
```

- *Type:* string

[Read] ivs:GetPublicKey.

---

##### `actionGetRecordingConfiguration`<sup>Required</sup> <a name="actionGetRecordingConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetRecordingConfiguration"></a>

```typescript
public readonly actionGetRecordingConfiguration: string;
```

- *Type:* string

[Read] ivs:GetRecordingConfiguration.

---

##### `actionGetStage`<sup>Required</sup> <a name="actionGetStage" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetStage"></a>

```typescript
public readonly actionGetStage: string;
```

- *Type:* string

[Read] ivs:GetStage.

---

##### `actionGetStageSession`<sup>Required</sup> <a name="actionGetStageSession" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetStageSession"></a>

```typescript
public readonly actionGetStageSession: string;
```

- *Type:* string

[Read] ivs:GetStageSession.

---

##### `actionGetStorageConfiguration`<sup>Required</sup> <a name="actionGetStorageConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetStorageConfiguration"></a>

```typescript
public readonly actionGetStorageConfiguration: string;
```

- *Type:* string

[Read] ivs:GetStorageConfiguration.

---

##### `actionGetStream`<sup>Required</sup> <a name="actionGetStream" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetStream"></a>

```typescript
public readonly actionGetStream: string;
```

- *Type:* string

[Read] ivs:GetStream.

---

##### `actionGetStreamKey`<sup>Required</sup> <a name="actionGetStreamKey" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetStreamKey"></a>

```typescript
public readonly actionGetStreamKey: string;
```

- *Type:* string

[Read] ivs:GetStreamKey.

---

##### `actionGetStreamSession`<sup>Required</sup> <a name="actionGetStreamSession" id="@cdk_utils/iam.ivs.IvsActions.property.actionGetStreamSession"></a>

```typescript
public readonly actionGetStreamSession: string;
```

- *Type:* string

[Read] ivs:GetStreamSession.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ivs.IvsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ivs.IvsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ivs.IvsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ivs.IvsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ivs.IvsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetChannel`<sup>Required</sup> <a name="BatchGetChannel" id="@cdk_utils/iam.ivs.IvsActions.property.BatchGetChannel"></a>

```typescript
public readonly BatchGetChannel: string;
```

- *Type:* string

[Read] ivs:BatchGetChannel.

---

##### `BatchGetStreamKey`<sup>Required</sup> <a name="BatchGetStreamKey" id="@cdk_utils/iam.ivs.IvsActions.property.BatchGetStreamKey"></a>

```typescript
public readonly BatchGetStreamKey: string;
```

- *Type:* string

[Read] ivs:BatchGetStreamKey.

---

##### `BatchStartViewerSessionRevocation`<sup>Required</sup> <a name="BatchStartViewerSessionRevocation" id="@cdk_utils/iam.ivs.IvsActions.property.BatchStartViewerSessionRevocation"></a>

```typescript
public readonly BatchStartViewerSessionRevocation: string;
```

- *Type:* string

[Write] ivs:BatchStartViewerSessionRevocation.

---

##### `CreateAdConfiguration`<sup>Required</sup> <a name="CreateAdConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.CreateAdConfiguration"></a>

```typescript
public readonly CreateAdConfiguration: string;
```

- *Type:* string

[Write] ivs:CreateAdConfiguration.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.ivs.IvsActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] ivs:CreateChannel.

---

##### `CreateEncoderConfiguration`<sup>Required</sup> <a name="CreateEncoderConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.CreateEncoderConfiguration"></a>

```typescript
public readonly CreateEncoderConfiguration: string;
```

- *Type:* string

[Write] ivs:CreateEncoderConfiguration.

---

##### `CreateIngestConfiguration`<sup>Required</sup> <a name="CreateIngestConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.CreateIngestConfiguration"></a>

```typescript
public readonly CreateIngestConfiguration: string;
```

- *Type:* string

[Write] ivs:CreateIngestConfiguration.

---

##### `CreateParticipantToken`<sup>Required</sup> <a name="CreateParticipantToken" id="@cdk_utils/iam.ivs.IvsActions.property.CreateParticipantToken"></a>

```typescript
public readonly CreateParticipantToken: string;
```

- *Type:* string

[Write] ivs:CreateParticipantToken.

---

##### `CreatePlaybackRestrictionPolicy`<sup>Required</sup> <a name="CreatePlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsActions.property.CreatePlaybackRestrictionPolicy"></a>

```typescript
public readonly CreatePlaybackRestrictionPolicy: string;
```

- *Type:* string

[Write] ivs:CreatePlaybackRestrictionPolicy.

---

##### `CreateRecordingConfiguration`<sup>Required</sup> <a name="CreateRecordingConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.CreateRecordingConfiguration"></a>

```typescript
public readonly CreateRecordingConfiguration: string;
```

- *Type:* string

[Write] ivs:CreateRecordingConfiguration.

---

##### `CreateStage`<sup>Required</sup> <a name="CreateStage" id="@cdk_utils/iam.ivs.IvsActions.property.CreateStage"></a>

```typescript
public readonly CreateStage: string;
```

- *Type:* string

[Write] ivs:CreateStage.

---

##### `CreateStorageConfiguration`<sup>Required</sup> <a name="CreateStorageConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.CreateStorageConfiguration"></a>

```typescript
public readonly CreateStorageConfiguration: string;
```

- *Type:* string

[Write] ivs:CreateStorageConfiguration.

---

##### `CreateStreamKey`<sup>Required</sup> <a name="CreateStreamKey" id="@cdk_utils/iam.ivs.IvsActions.property.CreateStreamKey"></a>

```typescript
public readonly CreateStreamKey: string;
```

- *Type:* string

[Write] ivs:CreateStreamKey.

---

##### `DeleteAdConfiguration`<sup>Required</sup> <a name="DeleteAdConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteAdConfiguration"></a>

```typescript
public readonly DeleteAdConfiguration: string;
```

- *Type:* string

[Write] ivs:DeleteAdConfiguration.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] ivs:DeleteChannel.

---

##### `DeleteEncoderConfiguration`<sup>Required</sup> <a name="DeleteEncoderConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteEncoderConfiguration"></a>

```typescript
public readonly DeleteEncoderConfiguration: string;
```

- *Type:* string

[Write] ivs:DeleteEncoderConfiguration.

---

##### `DeleteIngestConfiguration`<sup>Required</sup> <a name="DeleteIngestConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteIngestConfiguration"></a>

```typescript
public readonly DeleteIngestConfiguration: string;
```

- *Type:* string

[Write] ivs:DeleteIngestConfiguration.

---

##### `DeletePlaybackKeyPair`<sup>Required</sup> <a name="DeletePlaybackKeyPair" id="@cdk_utils/iam.ivs.IvsActions.property.DeletePlaybackKeyPair"></a>

```typescript
public readonly DeletePlaybackKeyPair: string;
```

- *Type:* string

[Write] ivs:DeletePlaybackKeyPair.

---

##### `DeletePlaybackRestrictionPolicy`<sup>Required</sup> <a name="DeletePlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsActions.property.DeletePlaybackRestrictionPolicy"></a>

```typescript
public readonly DeletePlaybackRestrictionPolicy: string;
```

- *Type:* string

[Write] ivs:DeletePlaybackRestrictionPolicy.

---

##### `DeletePublicKey`<sup>Required</sup> <a name="DeletePublicKey" id="@cdk_utils/iam.ivs.IvsActions.property.DeletePublicKey"></a>

```typescript
public readonly DeletePublicKey: string;
```

- *Type:* string

[Write] ivs:DeletePublicKey.

---

##### `DeleteRecordingConfiguration`<sup>Required</sup> <a name="DeleteRecordingConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteRecordingConfiguration"></a>

```typescript
public readonly DeleteRecordingConfiguration: string;
```

- *Type:* string

[Write] ivs:DeleteRecordingConfiguration.

---

##### `DeleteStage`<sup>Required</sup> <a name="DeleteStage" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteStage"></a>

```typescript
public readonly DeleteStage: string;
```

- *Type:* string

[Write] ivs:DeleteStage.

---

##### `DeleteStorageConfiguration`<sup>Required</sup> <a name="DeleteStorageConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteStorageConfiguration"></a>

```typescript
public readonly DeleteStorageConfiguration: string;
```

- *Type:* string

[Write] ivs:DeleteStorageConfiguration.

---

##### `DeleteStreamKey`<sup>Required</sup> <a name="DeleteStreamKey" id="@cdk_utils/iam.ivs.IvsActions.property.DeleteStreamKey"></a>

```typescript
public readonly DeleteStreamKey: string;
```

- *Type:* string

[Write] ivs:DeleteStreamKey.

---

##### `DisconnectParticipant`<sup>Required</sup> <a name="DisconnectParticipant" id="@cdk_utils/iam.ivs.IvsActions.property.DisconnectParticipant"></a>

```typescript
public readonly DisconnectParticipant: string;
```

- *Type:* string

[Write] ivs:DisconnectParticipant.

---

##### `ImportPlaybackKeyPair`<sup>Required</sup> <a name="ImportPlaybackKeyPair" id="@cdk_utils/iam.ivs.IvsActions.property.ImportPlaybackKeyPair"></a>

```typescript
public readonly ImportPlaybackKeyPair: string;
```

- *Type:* string

[Write] ivs:ImportPlaybackKeyPair.

---

##### `ImportPublicKey`<sup>Required</sup> <a name="ImportPublicKey" id="@cdk_utils/iam.ivs.IvsActions.property.ImportPublicKey"></a>

```typescript
public readonly ImportPublicKey: string;
```

- *Type:* string

[Write] ivs:ImportPublicKey.

---

##### `InsertAdBreak`<sup>Required</sup> <a name="InsertAdBreak" id="@cdk_utils/iam.ivs.IvsActions.property.InsertAdBreak"></a>

```typescript
public readonly InsertAdBreak: string;
```

- *Type:* string

[Write] ivs:InsertAdBreak.

---

##### `ListAdConfigurations`<sup>Required</sup> <a name="ListAdConfigurations" id="@cdk_utils/iam.ivs.IvsActions.property.ListAdConfigurations"></a>

```typescript
public readonly ListAdConfigurations: string;
```

- *Type:* string

[List] ivs:ListAdConfigurations.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.ivs.IvsActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] ivs:ListChannels.

---

##### `ListCompositions`<sup>Required</sup> <a name="ListCompositions" id="@cdk_utils/iam.ivs.IvsActions.property.ListCompositions"></a>

```typescript
public readonly ListCompositions: string;
```

- *Type:* string

[List] ivs:ListCompositions.

---

##### `ListEncoderConfigurations`<sup>Required</sup> <a name="ListEncoderConfigurations" id="@cdk_utils/iam.ivs.IvsActions.property.ListEncoderConfigurations"></a>

```typescript
public readonly ListEncoderConfigurations: string;
```

- *Type:* string

[List] ivs:ListEncoderConfigurations.

---

##### `ListIngestConfigurations`<sup>Required</sup> <a name="ListIngestConfigurations" id="@cdk_utils/iam.ivs.IvsActions.property.ListIngestConfigurations"></a>

```typescript
public readonly ListIngestConfigurations: string;
```

- *Type:* string

[List] ivs:ListIngestConfigurations.

---

##### `ListParticipantEvents`<sup>Required</sup> <a name="ListParticipantEvents" id="@cdk_utils/iam.ivs.IvsActions.property.ListParticipantEvents"></a>

```typescript
public readonly ListParticipantEvents: string;
```

- *Type:* string

[List] ivs:ListParticipantEvents.

---

##### `ListParticipantReplicas`<sup>Required</sup> <a name="ListParticipantReplicas" id="@cdk_utils/iam.ivs.IvsActions.property.ListParticipantReplicas"></a>

```typescript
public readonly ListParticipantReplicas: string;
```

- *Type:* string

[List] ivs:ListParticipantReplicas.

---

##### `ListParticipants`<sup>Required</sup> <a name="ListParticipants" id="@cdk_utils/iam.ivs.IvsActions.property.ListParticipants"></a>

```typescript
public readonly ListParticipants: string;
```

- *Type:* string

[List] ivs:ListParticipants.

---

##### `ListPlaybackKeyPairs`<sup>Required</sup> <a name="ListPlaybackKeyPairs" id="@cdk_utils/iam.ivs.IvsActions.property.ListPlaybackKeyPairs"></a>

```typescript
public readonly ListPlaybackKeyPairs: string;
```

- *Type:* string

[List] ivs:ListPlaybackKeyPairs.

---

##### `ListPlaybackRestrictionPolicies`<sup>Required</sup> <a name="ListPlaybackRestrictionPolicies" id="@cdk_utils/iam.ivs.IvsActions.property.ListPlaybackRestrictionPolicies"></a>

```typescript
public readonly ListPlaybackRestrictionPolicies: string;
```

- *Type:* string

[List] ivs:ListPlaybackRestrictionPolicies.

---

##### `ListPublicKeys`<sup>Required</sup> <a name="ListPublicKeys" id="@cdk_utils/iam.ivs.IvsActions.property.ListPublicKeys"></a>

```typescript
public readonly ListPublicKeys: string;
```

- *Type:* string

[List] ivs:ListPublicKeys.

---

##### `ListRecordingConfigurations`<sup>Required</sup> <a name="ListRecordingConfigurations" id="@cdk_utils/iam.ivs.IvsActions.property.ListRecordingConfigurations"></a>

```typescript
public readonly ListRecordingConfigurations: string;
```

- *Type:* string

[List] ivs:ListRecordingConfigurations.

---

##### `ListStages`<sup>Required</sup> <a name="ListStages" id="@cdk_utils/iam.ivs.IvsActions.property.ListStages"></a>

```typescript
public readonly ListStages: string;
```

- *Type:* string

[List] ivs:ListStages.

---

##### `ListStageSessions`<sup>Required</sup> <a name="ListStageSessions" id="@cdk_utils/iam.ivs.IvsActions.property.ListStageSessions"></a>

```typescript
public readonly ListStageSessions: string;
```

- *Type:* string

[List] ivs:ListStageSessions.

---

##### `ListStorageConfigurations`<sup>Required</sup> <a name="ListStorageConfigurations" id="@cdk_utils/iam.ivs.IvsActions.property.ListStorageConfigurations"></a>

```typescript
public readonly ListStorageConfigurations: string;
```

- *Type:* string

[List] ivs:ListStorageConfigurations.

---

##### `ListStreamKeys`<sup>Required</sup> <a name="ListStreamKeys" id="@cdk_utils/iam.ivs.IvsActions.property.ListStreamKeys"></a>

```typescript
public readonly ListStreamKeys: string;
```

- *Type:* string

[List] ivs:ListStreamKeys.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.ivs.IvsActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[List] ivs:ListStreams.

---

##### `ListStreamSessions`<sup>Required</sup> <a name="ListStreamSessions" id="@cdk_utils/iam.ivs.IvsActions.property.ListStreamSessions"></a>

```typescript
public readonly ListStreamSessions: string;
```

- *Type:* string

[List] ivs:ListStreamSessions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ivs.IvsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ivs:ListTagsForResource.

---

##### `PutMetadata`<sup>Required</sup> <a name="PutMetadata" id="@cdk_utils/iam.ivs.IvsActions.property.PutMetadata"></a>

```typescript
public readonly PutMetadata: string;
```

- *Type:* string

[Write] ivs:PutMetadata.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ivs.IvsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartComposition`<sup>Required</sup> <a name="StartComposition" id="@cdk_utils/iam.ivs.IvsActions.property.StartComposition"></a>

```typescript
public readonly StartComposition: string;
```

- *Type:* string

[Write] ivs:StartComposition.

---

##### `StartParticipantReplication`<sup>Required</sup> <a name="StartParticipantReplication" id="@cdk_utils/iam.ivs.IvsActions.property.StartParticipantReplication"></a>

```typescript
public readonly StartParticipantReplication: string;
```

- *Type:* string

[Write] ivs:StartParticipantReplication.

---

##### `StartViewerSessionRevocation`<sup>Required</sup> <a name="StartViewerSessionRevocation" id="@cdk_utils/iam.ivs.IvsActions.property.StartViewerSessionRevocation"></a>

```typescript
public readonly StartViewerSessionRevocation: string;
```

- *Type:* string

[Write] ivs:StartViewerSessionRevocation.

---

##### `StopComposition`<sup>Required</sup> <a name="StopComposition" id="@cdk_utils/iam.ivs.IvsActions.property.StopComposition"></a>

```typescript
public readonly StopComposition: string;
```

- *Type:* string

[Write] ivs:StopComposition.

---

##### `StopParticipantReplication`<sup>Required</sup> <a name="StopParticipantReplication" id="@cdk_utils/iam.ivs.IvsActions.property.StopParticipantReplication"></a>

```typescript
public readonly StopParticipantReplication: string;
```

- *Type:* string

[Write] ivs:StopParticipantReplication.

---

##### `StopStream`<sup>Required</sup> <a name="StopStream" id="@cdk_utils/iam.ivs.IvsActions.property.StopStream"></a>

```typescript
public readonly StopStream: string;
```

- *Type:* string

[Write] ivs:StopStream.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ivs.IvsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ivs:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ivs.IvsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ivs:UntagResource.

---

##### `UpdateAdConfiguration`<sup>Required</sup> <a name="UpdateAdConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.UpdateAdConfiguration"></a>

```typescript
public readonly UpdateAdConfiguration: string;
```

- *Type:* string

[Write] ivs:UpdateAdConfiguration.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.ivs.IvsActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] ivs:UpdateChannel.

---

##### `UpdateIngestConfiguration`<sup>Required</sup> <a name="UpdateIngestConfiguration" id="@cdk_utils/iam.ivs.IvsActions.property.UpdateIngestConfiguration"></a>

```typescript
public readonly UpdateIngestConfiguration: string;
```

- *Type:* string

[Write] ivs:UpdateIngestConfiguration.

---

##### `UpdatePlaybackRestrictionPolicy`<sup>Required</sup> <a name="UpdatePlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsActions.property.UpdatePlaybackRestrictionPolicy"></a>

```typescript
public readonly UpdatePlaybackRestrictionPolicy: string;
```

- *Type:* string

[Write] ivs:UpdatePlaybackRestrictionPolicy.

---

##### `UpdateStage`<sup>Required</sup> <a name="UpdateStage" id="@cdk_utils/iam.ivs.IvsActions.property.UpdateStage"></a>

```typescript
public readonly UpdateStage: string;
```

- *Type:* string

[Write] ivs:UpdateStage.

---

### IvsConditions <a name="IvsConditions" id="@cdk_utils/iam.ivs.IvsConditions"></a>

Condition key constants and builders for ivs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivs.IvsConditions.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

new ivs.IvsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ivs.IvsConditions.requestTag"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ivs.IvsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ivs.IvsConditions.resourceTag"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ivs.IvsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ivs.IvsConditions.tagKeys"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ivs.IvsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateAdConfigurationConditionKeys">CreateAdConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAdConfiguration action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateEncoderConfigurationConditionKeys">CreateEncoderConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEncoderConfiguration action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateIngestConfigurationConditionKeys">CreateIngestConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIngestConfiguration action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateParticipantTokenConditionKeys">CreateParticipantTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateParticipantToken action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreatePlaybackRestrictionPolicyConditionKeys">CreatePlaybackRestrictionPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePlaybackRestrictionPolicy action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateRecordingConfigurationConditionKeys">CreateRecordingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRecordingConfiguration action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateStageConditionKeys">CreateStageConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStage action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateStorageConfigurationConditionKeys">CreateStorageConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStorageConfiguration action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.CreateStreamKeyConditionKeys">CreateStreamKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStreamKey action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.ImportPlaybackKeyPairConditionKeys">ImportPlaybackKeyPairConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportPlaybackKeyPair action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.ImportPublicKeyConditionKeys">ImportPublicKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportPublicKey action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.StartCompositionConditionKeys">StartCompositionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartComposition action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.StartParticipantReplicationConditionKeys">StartParticipantReplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartParticipantReplication action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ivs.IvsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ivs.IvsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ivs.IvsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ivs.IvsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAdConfigurationConditionKeys`<sup>Required</sup> <a name="CreateAdConfigurationConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateAdConfigurationConditionKeys"></a>

```typescript
public readonly CreateAdConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAdConfiguration action.

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateEncoderConfigurationConditionKeys`<sup>Required</sup> <a name="CreateEncoderConfigurationConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateEncoderConfigurationConditionKeys"></a>

```typescript
public readonly CreateEncoderConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEncoderConfiguration action.

---

##### `CreateIngestConfigurationConditionKeys`<sup>Required</sup> <a name="CreateIngestConfigurationConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateIngestConfigurationConditionKeys"></a>

```typescript
public readonly CreateIngestConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIngestConfiguration action.

---

##### `CreateParticipantTokenConditionKeys`<sup>Required</sup> <a name="CreateParticipantTokenConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateParticipantTokenConditionKeys"></a>

```typescript
public readonly CreateParticipantTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateParticipantToken action.

---

##### `CreatePlaybackRestrictionPolicyConditionKeys`<sup>Required</sup> <a name="CreatePlaybackRestrictionPolicyConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreatePlaybackRestrictionPolicyConditionKeys"></a>

```typescript
public readonly CreatePlaybackRestrictionPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePlaybackRestrictionPolicy action.

---

##### `CreateRecordingConfigurationConditionKeys`<sup>Required</sup> <a name="CreateRecordingConfigurationConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateRecordingConfigurationConditionKeys"></a>

```typescript
public readonly CreateRecordingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRecordingConfiguration action.

---

##### `CreateStageConditionKeys`<sup>Required</sup> <a name="CreateStageConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateStageConditionKeys"></a>

```typescript
public readonly CreateStageConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStage action.

---

##### `CreateStorageConfigurationConditionKeys`<sup>Required</sup> <a name="CreateStorageConfigurationConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateStorageConfigurationConditionKeys"></a>

```typescript
public readonly CreateStorageConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStorageConfiguration action.

---

##### `CreateStreamKeyConditionKeys`<sup>Required</sup> <a name="CreateStreamKeyConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.CreateStreamKeyConditionKeys"></a>

```typescript
public readonly CreateStreamKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStreamKey action.

---

##### `ImportPlaybackKeyPairConditionKeys`<sup>Required</sup> <a name="ImportPlaybackKeyPairConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.ImportPlaybackKeyPairConditionKeys"></a>

```typescript
public readonly ImportPlaybackKeyPairConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportPlaybackKeyPair action.

---

##### `ImportPublicKeyConditionKeys`<sup>Required</sup> <a name="ImportPublicKeyConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.ImportPublicKeyConditionKeys"></a>

```typescript
public readonly ImportPublicKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportPublicKey action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `StartCompositionConditionKeys`<sup>Required</sup> <a name="StartCompositionConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.StartCompositionConditionKeys"></a>

```typescript
public readonly StartCompositionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartComposition action.

---

##### `StartParticipantReplicationConditionKeys`<sup>Required</sup> <a name="StartParticipantReplicationConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.StartParticipantReplicationConditionKeys"></a>

```typescript
public readonly StartParticipantReplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartParticipantReplication action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ivs.IvsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IvsOperations <a name="IvsOperations" id="@cdk_utils/iam.ivs.IvsOperations"></a>

API operation to required IAM actions mapping for ivs.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivs.IvsOperations.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

new ivs.IvsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.BatchGetChannel">BatchGetChannel</a></code> | <code>string[]</code> | IAM actions required for the BatchGetChannel API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.BatchGetStreamKey">BatchGetStreamKey</a></code> | <code>string[]</code> | IAM actions required for the BatchGetStreamKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.BatchStartViewerSessionRevocation">BatchStartViewerSessionRevocation</a></code> | <code>string[]</code> | IAM actions required for the BatchStartViewerSessionRevocation API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateAdConfiguration">CreateAdConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateAdConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateEncoderConfiguration">CreateEncoderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateEncoderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateIngestConfiguration">CreateIngestConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateIngestConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateParticipantToken">CreateParticipantToken</a></code> | <code>string[]</code> | IAM actions required for the CreateParticipantToken API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreatePlaybackRestrictionPolicy">CreatePlaybackRestrictionPolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePlaybackRestrictionPolicy API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateRecordingConfiguration">CreateRecordingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateRecordingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateStage">CreateStage</a></code> | <code>string[]</code> | IAM actions required for the CreateStage API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateStorageConfiguration">CreateStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.CreateStreamKey">CreateStreamKey</a></code> | <code>string[]</code> | IAM actions required for the CreateStreamKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteAdConfiguration">DeleteAdConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteAdConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteEncoderConfiguration">DeleteEncoderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEncoderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteIngestConfiguration">DeleteIngestConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteIngestConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeletePlaybackKeyPair">DeletePlaybackKeyPair</a></code> | <code>string[]</code> | IAM actions required for the DeletePlaybackKeyPair API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeletePlaybackRestrictionPolicy">DeletePlaybackRestrictionPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePlaybackRestrictionPolicy API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeletePublicKey">DeletePublicKey</a></code> | <code>string[]</code> | IAM actions required for the DeletePublicKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteRecordingConfiguration">DeleteRecordingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteRecordingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteStage">DeleteStage</a></code> | <code>string[]</code> | IAM actions required for the DeleteStage API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteStorageConfiguration">DeleteStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DeleteStreamKey">DeleteStreamKey</a></code> | <code>string[]</code> | IAM actions required for the DeleteStreamKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.DisconnectParticipant">DisconnectParticipant</a></code> | <code>string[]</code> | IAM actions required for the DisconnectParticipant API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ImportPlaybackKeyPair">ImportPlaybackKeyPair</a></code> | <code>string[]</code> | IAM actions required for the ImportPlaybackKeyPair API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ImportPublicKey">ImportPublicKey</a></code> | <code>string[]</code> | IAM actions required for the ImportPublicKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.InsertAdBreak">InsertAdBreak</a></code> | <code>string[]</code> | IAM actions required for the InsertAdBreak API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListAdConfigurations">ListAdConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListAdConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListCompositions">ListCompositions</a></code> | <code>string[]</code> | IAM actions required for the ListCompositions API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListEncoderConfigurations">ListEncoderConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListEncoderConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListIngestConfigurations">ListIngestConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListIngestConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListParticipantEvents">ListParticipantEvents</a></code> | <code>string[]</code> | IAM actions required for the ListParticipantEvents API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListParticipantReplicas">ListParticipantReplicas</a></code> | <code>string[]</code> | IAM actions required for the ListParticipantReplicas API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListParticipants">ListParticipants</a></code> | <code>string[]</code> | IAM actions required for the ListParticipants API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListPlaybackKeyPairs">ListPlaybackKeyPairs</a></code> | <code>string[]</code> | IAM actions required for the ListPlaybackKeyPairs API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListPlaybackRestrictionPolicies">ListPlaybackRestrictionPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPlaybackRestrictionPolicies API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListPublicKeys">ListPublicKeys</a></code> | <code>string[]</code> | IAM actions required for the ListPublicKeys API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListRecordingConfigurations">ListRecordingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListRecordingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListStages">ListStages</a></code> | <code>string[]</code> | IAM actions required for the ListStages API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListStageSessions">ListStageSessions</a></code> | <code>string[]</code> | IAM actions required for the ListStageSessions API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListStorageConfigurations">ListStorageConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListStorageConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListStreamKeys">ListStreamKeys</a></code> | <code>string[]</code> | IAM actions required for the ListStreamKeys API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListStreamSessions">ListStreamSessions</a></code> | <code>string[]</code> | IAM actions required for the ListStreamSessions API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetAdConfiguration">opGetAdConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAdConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetChannel">opGetChannel</a></code> | <code>string[]</code> | IAM actions required for the GetChannel API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetComposition">opGetComposition</a></code> | <code>string[]</code> | IAM actions required for the GetComposition API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetEncoderConfiguration">opGetEncoderConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetEncoderConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetIngestConfiguration">opGetIngestConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetIngestConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetParticipant">opGetParticipant</a></code> | <code>string[]</code> | IAM actions required for the GetParticipant API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetPlaybackKeyPair">opGetPlaybackKeyPair</a></code> | <code>string[]</code> | IAM actions required for the GetPlaybackKeyPair API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetPlaybackRestrictionPolicy">opGetPlaybackRestrictionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPlaybackRestrictionPolicy API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetPublicKey">opGetPublicKey</a></code> | <code>string[]</code> | IAM actions required for the GetPublicKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetRecordingConfiguration">opGetRecordingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetRecordingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetStage">opGetStage</a></code> | <code>string[]</code> | IAM actions required for the GetStage API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetStageSession">opGetStageSession</a></code> | <code>string[]</code> | IAM actions required for the GetStageSession API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetStorageConfiguration">opGetStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetStream">opGetStream</a></code> | <code>string[]</code> | IAM actions required for the GetStream API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetStreamKey">opGetStreamKey</a></code> | <code>string[]</code> | IAM actions required for the GetStreamKey API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.opGetStreamSession">opGetStreamSession</a></code> | <code>string[]</code> | IAM actions required for the GetStreamSession API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.PutMetadata">PutMetadata</a></code> | <code>string[]</code> | IAM actions required for the PutMetadata API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.StartComposition">StartComposition</a></code> | <code>string[]</code> | IAM actions required for the StartComposition API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.StartParticipantReplication">StartParticipantReplication</a></code> | <code>string[]</code> | IAM actions required for the StartParticipantReplication API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.StartViewerSessionRevocation">StartViewerSessionRevocation</a></code> | <code>string[]</code> | IAM actions required for the StartViewerSessionRevocation API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.StopComposition">StopComposition</a></code> | <code>string[]</code> | IAM actions required for the StopComposition API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.StopParticipantReplication">StopParticipantReplication</a></code> | <code>string[]</code> | IAM actions required for the StopParticipantReplication API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.StopStream">StopStream</a></code> | <code>string[]</code> | IAM actions required for the StopStream API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.UpdateAdConfiguration">UpdateAdConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAdConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.UpdateIngestConfiguration">UpdateIngestConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateIngestConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.UpdatePlaybackRestrictionPolicy">UpdatePlaybackRestrictionPolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdatePlaybackRestrictionPolicy API call. |
| <code><a href="#@cdk_utils/iam.ivs.IvsOperations.property.UpdateStage">UpdateStage</a></code> | <code>string[]</code> | IAM actions required for the UpdateStage API call. |

---

##### `BatchGetChannel`<sup>Required</sup> <a name="BatchGetChannel" id="@cdk_utils/iam.ivs.IvsOperations.property.BatchGetChannel"></a>

```typescript
public readonly BatchGetChannel: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetChannel API call.

---

##### `BatchGetStreamKey`<sup>Required</sup> <a name="BatchGetStreamKey" id="@cdk_utils/iam.ivs.IvsOperations.property.BatchGetStreamKey"></a>

```typescript
public readonly BatchGetStreamKey: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetStreamKey API call.

---

##### `BatchStartViewerSessionRevocation`<sup>Required</sup> <a name="BatchStartViewerSessionRevocation" id="@cdk_utils/iam.ivs.IvsOperations.property.BatchStartViewerSessionRevocation"></a>

```typescript
public readonly BatchStartViewerSessionRevocation: string[];
```

- *Type:* string[]

IAM actions required for the BatchStartViewerSessionRevocation API call.

---

##### `CreateAdConfiguration`<sup>Required</sup> <a name="CreateAdConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateAdConfiguration"></a>

```typescript
public readonly CreateAdConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateAdConfiguration API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateEncoderConfiguration`<sup>Required</sup> <a name="CreateEncoderConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateEncoderConfiguration"></a>

```typescript
public readonly CreateEncoderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateEncoderConfiguration API call.

---

##### `CreateIngestConfiguration`<sup>Required</sup> <a name="CreateIngestConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateIngestConfiguration"></a>

```typescript
public readonly CreateIngestConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateIngestConfiguration API call.

---

##### `CreateParticipantToken`<sup>Required</sup> <a name="CreateParticipantToken" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateParticipantToken"></a>

```typescript
public readonly CreateParticipantToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateParticipantToken API call.

---

##### `CreatePlaybackRestrictionPolicy`<sup>Required</sup> <a name="CreatePlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsOperations.property.CreatePlaybackRestrictionPolicy"></a>

```typescript
public readonly CreatePlaybackRestrictionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlaybackRestrictionPolicy API call.

---

##### `CreateRecordingConfiguration`<sup>Required</sup> <a name="CreateRecordingConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateRecordingConfiguration"></a>

```typescript
public readonly CreateRecordingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateRecordingConfiguration API call.

---

##### `CreateStage`<sup>Required</sup> <a name="CreateStage" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateStage"></a>

```typescript
public readonly CreateStage: string[];
```

- *Type:* string[]

IAM actions required for the CreateStage API call.

---

##### `CreateStorageConfiguration`<sup>Required</sup> <a name="CreateStorageConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateStorageConfiguration"></a>

```typescript
public readonly CreateStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateStorageConfiguration API call.

---

##### `CreateStreamKey`<sup>Required</sup> <a name="CreateStreamKey" id="@cdk_utils/iam.ivs.IvsOperations.property.CreateStreamKey"></a>

```typescript
public readonly CreateStreamKey: string[];
```

- *Type:* string[]

IAM actions required for the CreateStreamKey API call.

---

##### `DeleteAdConfiguration`<sup>Required</sup> <a name="DeleteAdConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteAdConfiguration"></a>

```typescript
public readonly DeleteAdConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAdConfiguration API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteEncoderConfiguration`<sup>Required</sup> <a name="DeleteEncoderConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteEncoderConfiguration"></a>

```typescript
public readonly DeleteEncoderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEncoderConfiguration API call.

---

##### `DeleteIngestConfiguration`<sup>Required</sup> <a name="DeleteIngestConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteIngestConfiguration"></a>

```typescript
public readonly DeleteIngestConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIngestConfiguration API call.

---

##### `DeletePlaybackKeyPair`<sup>Required</sup> <a name="DeletePlaybackKeyPair" id="@cdk_utils/iam.ivs.IvsOperations.property.DeletePlaybackKeyPair"></a>

```typescript
public readonly DeletePlaybackKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlaybackKeyPair API call.

---

##### `DeletePlaybackRestrictionPolicy`<sup>Required</sup> <a name="DeletePlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsOperations.property.DeletePlaybackRestrictionPolicy"></a>

```typescript
public readonly DeletePlaybackRestrictionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlaybackRestrictionPolicy API call.

---

##### `DeletePublicKey`<sup>Required</sup> <a name="DeletePublicKey" id="@cdk_utils/iam.ivs.IvsOperations.property.DeletePublicKey"></a>

```typescript
public readonly DeletePublicKey: string[];
```

- *Type:* string[]

IAM actions required for the DeletePublicKey API call.

---

##### `DeleteRecordingConfiguration`<sup>Required</sup> <a name="DeleteRecordingConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteRecordingConfiguration"></a>

```typescript
public readonly DeleteRecordingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRecordingConfiguration API call.

---

##### `DeleteStage`<sup>Required</sup> <a name="DeleteStage" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteStage"></a>

```typescript
public readonly DeleteStage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStage API call.

---

##### `DeleteStorageConfiguration`<sup>Required</sup> <a name="DeleteStorageConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteStorageConfiguration"></a>

```typescript
public readonly DeleteStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStorageConfiguration API call.

---

##### `DeleteStreamKey`<sup>Required</sup> <a name="DeleteStreamKey" id="@cdk_utils/iam.ivs.IvsOperations.property.DeleteStreamKey"></a>

```typescript
public readonly DeleteStreamKey: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStreamKey API call.

---

##### `DisconnectParticipant`<sup>Required</sup> <a name="DisconnectParticipant" id="@cdk_utils/iam.ivs.IvsOperations.property.DisconnectParticipant"></a>

```typescript
public readonly DisconnectParticipant: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectParticipant API call.

---

##### `ImportPlaybackKeyPair`<sup>Required</sup> <a name="ImportPlaybackKeyPair" id="@cdk_utils/iam.ivs.IvsOperations.property.ImportPlaybackKeyPair"></a>

```typescript
public readonly ImportPlaybackKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the ImportPlaybackKeyPair API call.

---

##### `ImportPublicKey`<sup>Required</sup> <a name="ImportPublicKey" id="@cdk_utils/iam.ivs.IvsOperations.property.ImportPublicKey"></a>

```typescript
public readonly ImportPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the ImportPublicKey API call.

---

##### `InsertAdBreak`<sup>Required</sup> <a name="InsertAdBreak" id="@cdk_utils/iam.ivs.IvsOperations.property.InsertAdBreak"></a>

```typescript
public readonly InsertAdBreak: string[];
```

- *Type:* string[]

IAM actions required for the InsertAdBreak API call.

---

##### `ListAdConfigurations`<sup>Required</sup> <a name="ListAdConfigurations" id="@cdk_utils/iam.ivs.IvsOperations.property.ListAdConfigurations"></a>

```typescript
public readonly ListAdConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListAdConfigurations API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.ivs.IvsOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListCompositions`<sup>Required</sup> <a name="ListCompositions" id="@cdk_utils/iam.ivs.IvsOperations.property.ListCompositions"></a>

```typescript
public readonly ListCompositions: string[];
```

- *Type:* string[]

IAM actions required for the ListCompositions API call.

---

##### `ListEncoderConfigurations`<sup>Required</sup> <a name="ListEncoderConfigurations" id="@cdk_utils/iam.ivs.IvsOperations.property.ListEncoderConfigurations"></a>

```typescript
public readonly ListEncoderConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListEncoderConfigurations API call.

---

##### `ListIngestConfigurations`<sup>Required</sup> <a name="ListIngestConfigurations" id="@cdk_utils/iam.ivs.IvsOperations.property.ListIngestConfigurations"></a>

```typescript
public readonly ListIngestConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListIngestConfigurations API call.

---

##### `ListParticipantEvents`<sup>Required</sup> <a name="ListParticipantEvents" id="@cdk_utils/iam.ivs.IvsOperations.property.ListParticipantEvents"></a>

```typescript
public readonly ListParticipantEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListParticipantEvents API call.

---

##### `ListParticipantReplicas`<sup>Required</sup> <a name="ListParticipantReplicas" id="@cdk_utils/iam.ivs.IvsOperations.property.ListParticipantReplicas"></a>

```typescript
public readonly ListParticipantReplicas: string[];
```

- *Type:* string[]

IAM actions required for the ListParticipantReplicas API call.

---

##### `ListParticipants`<sup>Required</sup> <a name="ListParticipants" id="@cdk_utils/iam.ivs.IvsOperations.property.ListParticipants"></a>

```typescript
public readonly ListParticipants: string[];
```

- *Type:* string[]

IAM actions required for the ListParticipants API call.

---

##### `ListPlaybackKeyPairs`<sup>Required</sup> <a name="ListPlaybackKeyPairs" id="@cdk_utils/iam.ivs.IvsOperations.property.ListPlaybackKeyPairs"></a>

```typescript
public readonly ListPlaybackKeyPairs: string[];
```

- *Type:* string[]

IAM actions required for the ListPlaybackKeyPairs API call.

---

##### `ListPlaybackRestrictionPolicies`<sup>Required</sup> <a name="ListPlaybackRestrictionPolicies" id="@cdk_utils/iam.ivs.IvsOperations.property.ListPlaybackRestrictionPolicies"></a>

```typescript
public readonly ListPlaybackRestrictionPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPlaybackRestrictionPolicies API call.

---

##### `ListPublicKeys`<sup>Required</sup> <a name="ListPublicKeys" id="@cdk_utils/iam.ivs.IvsOperations.property.ListPublicKeys"></a>

```typescript
public readonly ListPublicKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListPublicKeys API call.

---

##### `ListRecordingConfigurations`<sup>Required</sup> <a name="ListRecordingConfigurations" id="@cdk_utils/iam.ivs.IvsOperations.property.ListRecordingConfigurations"></a>

```typescript
public readonly ListRecordingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecordingConfigurations API call.

---

##### `ListStages`<sup>Required</sup> <a name="ListStages" id="@cdk_utils/iam.ivs.IvsOperations.property.ListStages"></a>

```typescript
public readonly ListStages: string[];
```

- *Type:* string[]

IAM actions required for the ListStages API call.

---

##### `ListStageSessions`<sup>Required</sup> <a name="ListStageSessions" id="@cdk_utils/iam.ivs.IvsOperations.property.ListStageSessions"></a>

```typescript
public readonly ListStageSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListStageSessions API call.

---

##### `ListStorageConfigurations`<sup>Required</sup> <a name="ListStorageConfigurations" id="@cdk_utils/iam.ivs.IvsOperations.property.ListStorageConfigurations"></a>

```typescript
public readonly ListStorageConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListStorageConfigurations API call.

---

##### `ListStreamKeys`<sup>Required</sup> <a name="ListStreamKeys" id="@cdk_utils/iam.ivs.IvsOperations.property.ListStreamKeys"></a>

```typescript
public readonly ListStreamKeys: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamKeys API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.ivs.IvsOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListStreamSessions`<sup>Required</sup> <a name="ListStreamSessions" id="@cdk_utils/iam.ivs.IvsOperations.property.ListStreamSessions"></a>

```typescript
public readonly ListStreamSessions: string[];
```

- *Type:* string[]

IAM actions required for the ListStreamSessions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ivs.IvsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAdConfiguration`<sup>Required</sup> <a name="opGetAdConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetAdConfiguration"></a>

```typescript
public readonly opGetAdConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAdConfiguration API call.

---

##### `opGetChannel`<sup>Required</sup> <a name="opGetChannel" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetChannel"></a>

```typescript
public readonly opGetChannel: string[];
```

- *Type:* string[]

IAM actions required for the GetChannel API call.

---

##### `opGetComposition`<sup>Required</sup> <a name="opGetComposition" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetComposition"></a>

```typescript
public readonly opGetComposition: string[];
```

- *Type:* string[]

IAM actions required for the GetComposition API call.

---

##### `opGetEncoderConfiguration`<sup>Required</sup> <a name="opGetEncoderConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetEncoderConfiguration"></a>

```typescript
public readonly opGetEncoderConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetEncoderConfiguration API call.

---

##### `opGetIngestConfiguration`<sup>Required</sup> <a name="opGetIngestConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetIngestConfiguration"></a>

```typescript
public readonly opGetIngestConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetIngestConfiguration API call.

---

##### `opGetParticipant`<sup>Required</sup> <a name="opGetParticipant" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetParticipant"></a>

```typescript
public readonly opGetParticipant: string[];
```

- *Type:* string[]

IAM actions required for the GetParticipant API call.

---

##### `opGetPlaybackKeyPair`<sup>Required</sup> <a name="opGetPlaybackKeyPair" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetPlaybackKeyPair"></a>

```typescript
public readonly opGetPlaybackKeyPair: string[];
```

- *Type:* string[]

IAM actions required for the GetPlaybackKeyPair API call.

---

##### `opGetPlaybackRestrictionPolicy`<sup>Required</sup> <a name="opGetPlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetPlaybackRestrictionPolicy"></a>

```typescript
public readonly opGetPlaybackRestrictionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPlaybackRestrictionPolicy API call.

---

##### `opGetPublicKey`<sup>Required</sup> <a name="opGetPublicKey" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetPublicKey"></a>

```typescript
public readonly opGetPublicKey: string[];
```

- *Type:* string[]

IAM actions required for the GetPublicKey API call.

---

##### `opGetRecordingConfiguration`<sup>Required</sup> <a name="opGetRecordingConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetRecordingConfiguration"></a>

```typescript
public readonly opGetRecordingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetRecordingConfiguration API call.

---

##### `opGetStage`<sup>Required</sup> <a name="opGetStage" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetStage"></a>

```typescript
public readonly opGetStage: string[];
```

- *Type:* string[]

IAM actions required for the GetStage API call.

---

##### `opGetStageSession`<sup>Required</sup> <a name="opGetStageSession" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetStageSession"></a>

```typescript
public readonly opGetStageSession: string[];
```

- *Type:* string[]

IAM actions required for the GetStageSession API call.

---

##### `opGetStorageConfiguration`<sup>Required</sup> <a name="opGetStorageConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetStorageConfiguration"></a>

```typescript
public readonly opGetStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetStorageConfiguration API call.

---

##### `opGetStream`<sup>Required</sup> <a name="opGetStream" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetStream"></a>

```typescript
public readonly opGetStream: string[];
```

- *Type:* string[]

IAM actions required for the GetStream API call.

---

##### `opGetStreamKey`<sup>Required</sup> <a name="opGetStreamKey" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetStreamKey"></a>

```typescript
public readonly opGetStreamKey: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamKey API call.

---

##### `opGetStreamSession`<sup>Required</sup> <a name="opGetStreamSession" id="@cdk_utils/iam.ivs.IvsOperations.property.opGetStreamSession"></a>

```typescript
public readonly opGetStreamSession: string[];
```

- *Type:* string[]

IAM actions required for the GetStreamSession API call.

---

##### `PutMetadata`<sup>Required</sup> <a name="PutMetadata" id="@cdk_utils/iam.ivs.IvsOperations.property.PutMetadata"></a>

```typescript
public readonly PutMetadata: string[];
```

- *Type:* string[]

IAM actions required for the PutMetadata API call.

---

##### `StartComposition`<sup>Required</sup> <a name="StartComposition" id="@cdk_utils/iam.ivs.IvsOperations.property.StartComposition"></a>

```typescript
public readonly StartComposition: string[];
```

- *Type:* string[]

IAM actions required for the StartComposition API call.

---

##### `StartParticipantReplication`<sup>Required</sup> <a name="StartParticipantReplication" id="@cdk_utils/iam.ivs.IvsOperations.property.StartParticipantReplication"></a>

```typescript
public readonly StartParticipantReplication: string[];
```

- *Type:* string[]

IAM actions required for the StartParticipantReplication API call.

---

##### `StartViewerSessionRevocation`<sup>Required</sup> <a name="StartViewerSessionRevocation" id="@cdk_utils/iam.ivs.IvsOperations.property.StartViewerSessionRevocation"></a>

```typescript
public readonly StartViewerSessionRevocation: string[];
```

- *Type:* string[]

IAM actions required for the StartViewerSessionRevocation API call.

---

##### `StopComposition`<sup>Required</sup> <a name="StopComposition" id="@cdk_utils/iam.ivs.IvsOperations.property.StopComposition"></a>

```typescript
public readonly StopComposition: string[];
```

- *Type:* string[]

IAM actions required for the StopComposition API call.

---

##### `StopParticipantReplication`<sup>Required</sup> <a name="StopParticipantReplication" id="@cdk_utils/iam.ivs.IvsOperations.property.StopParticipantReplication"></a>

```typescript
public readonly StopParticipantReplication: string[];
```

- *Type:* string[]

IAM actions required for the StopParticipantReplication API call.

---

##### `StopStream`<sup>Required</sup> <a name="StopStream" id="@cdk_utils/iam.ivs.IvsOperations.property.StopStream"></a>

```typescript
public readonly StopStream: string[];
```

- *Type:* string[]

IAM actions required for the StopStream API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ivs.IvsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ivs.IvsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAdConfiguration`<sup>Required</sup> <a name="UpdateAdConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.UpdateAdConfiguration"></a>

```typescript
public readonly UpdateAdConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAdConfiguration API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.ivs.IvsOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateIngestConfiguration`<sup>Required</sup> <a name="UpdateIngestConfiguration" id="@cdk_utils/iam.ivs.IvsOperations.property.UpdateIngestConfiguration"></a>

```typescript
public readonly UpdateIngestConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIngestConfiguration API call.

---

##### `UpdatePlaybackRestrictionPolicy`<sup>Required</sup> <a name="UpdatePlaybackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsOperations.property.UpdatePlaybackRestrictionPolicy"></a>

```typescript
public readonly UpdatePlaybackRestrictionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePlaybackRestrictionPolicy API call.

---

##### `UpdateStage`<sup>Required</sup> <a name="UpdateStage" id="@cdk_utils/iam.ivs.IvsOperations.property.UpdateStage"></a>

```typescript
public readonly UpdateStage: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStage API call.

---

### IvsResources <a name="IvsResources" id="@cdk_utils/iam.ivs.IvsResources"></a>

ARN builders, validators, and parsers for ivs resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivs.IvsResources.Initializer"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

new ivs.IvsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.adConfiguration">adConfiguration</a></code> | Builds an ARN for the Ad-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.channel">channel</a></code> | Builds an ARN for the Channel resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.composition">composition</a></code> | Builds an ARN for the Composition resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.encoderConfiguration">encoderConfiguration</a></code> | Builds an ARN for the Encoder-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.ingestConfiguration">ingestConfiguration</a></code> | Builds an ARN for the Ingest-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidAdConfigurationArn">isValidAdConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Ad-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the Channel resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidCompositionArn">isValidCompositionArn</a></code> | Validates whether a string is a valid ARN for the Composition resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidEncoderConfigurationArn">isValidEncoderConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Encoder-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidIngestConfigurationArn">isValidIngestConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Ingest-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidPlaybackKeyPairArn">isValidPlaybackKeyPairArn</a></code> | Validates whether a string is a valid ARN for the Playback-Key-Pair resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidPlaybackRestrictionPolicyArn">isValidPlaybackRestrictionPolicyArn</a></code> | Validates whether a string is a valid ARN for the Playback-Restriction-Policy resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidPublicKeyArn">isValidPublicKeyArn</a></code> | Validates whether a string is a valid ARN for the Public-Key resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidRecordingConfigurationArn">isValidRecordingConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Recording-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidStageArn">isValidStageArn</a></code> | Validates whether a string is a valid ARN for the Stage resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidStorageConfigurationArn">isValidStorageConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Storage-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.isValidStreamKeyArn">isValidStreamKeyArn</a></code> | Validates whether a string is a valid ARN for the Stream-Key resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseAdConfigurationArn">parseAdConfigurationArn</a></code> | Parses a Ad-Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseChannelArn">parseChannelArn</a></code> | Parses a Channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseCompositionArn">parseCompositionArn</a></code> | Parses a Composition ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseEncoderConfigurationArn">parseEncoderConfigurationArn</a></code> | Parses a Encoder-Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseIngestConfigurationArn">parseIngestConfigurationArn</a></code> | Parses a Ingest-Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parsePlaybackKeyPairArn">parsePlaybackKeyPairArn</a></code> | Parses a Playback-Key-Pair ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parsePlaybackRestrictionPolicyArn">parsePlaybackRestrictionPolicyArn</a></code> | Parses a Playback-Restriction-Policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parsePublicKeyArn">parsePublicKeyArn</a></code> | Parses a Public-Key ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseRecordingConfigurationArn">parseRecordingConfigurationArn</a></code> | Parses a Recording-Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseStageArn">parseStageArn</a></code> | Parses a Stage ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseStorageConfigurationArn">parseStorageConfigurationArn</a></code> | Parses a Storage-Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.parseStreamKeyArn">parseStreamKeyArn</a></code> | Parses a Stream-Key ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.playbackKeyPair">playbackKeyPair</a></code> | Builds an ARN for the Playback-Key-Pair resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.playbackRestrictionPolicy">playbackRestrictionPolicy</a></code> | Builds an ARN for the Playback-Restriction-Policy resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.publicKey">publicKey</a></code> | Builds an ARN for the Public-Key resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.recordingConfiguration">recordingConfiguration</a></code> | Builds an ARN for the Recording-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.stage">stage</a></code> | Builds an ARN for the Stage resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.storageConfiguration">storageConfiguration</a></code> | Builds an ARN for the Storage-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivs.IvsResources.streamKey">streamKey</a></code> | Builds an ARN for the Stream-Key resource. |

---

##### `adConfiguration` <a name="adConfiguration" id="@cdk_utils/iam.ivs.IvsResources.adConfiguration"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.adConfiguration(props: IvsAdConfigurationArnProps)
```

Builds an ARN for the Ad-Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.adConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsAdConfigurationArnProps">IvsAdConfigurationArnProps</a>

---

##### `channel` <a name="channel" id="@cdk_utils/iam.ivs.IvsResources.channel"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.channel(props: IvsChannelArnProps)
```

Builds an ARN for the Channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsChannelArnProps">IvsChannelArnProps</a>

---

##### `composition` <a name="composition" id="@cdk_utils/iam.ivs.IvsResources.composition"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.composition(props: IvsCompositionArnProps)
```

Builds an ARN for the Composition resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.composition.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsCompositionArnProps">IvsCompositionArnProps</a>

---

##### `encoderConfiguration` <a name="encoderConfiguration" id="@cdk_utils/iam.ivs.IvsResources.encoderConfiguration"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.encoderConfiguration(props: IvsEncoderConfigurationArnProps)
```

Builds an ARN for the Encoder-Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.encoderConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsEncoderConfigurationArnProps">IvsEncoderConfigurationArnProps</a>

---

##### `ingestConfiguration` <a name="ingestConfiguration" id="@cdk_utils/iam.ivs.IvsResources.ingestConfiguration"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.ingestConfiguration(props: IvsIngestConfigurationArnProps)
```

Builds an ARN for the Ingest-Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.ingestConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsIngestConfigurationArnProps">IvsIngestConfigurationArnProps</a>

---

##### `isValidAdConfigurationArn` <a name="isValidAdConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.isValidAdConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidAdConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Ad-Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidAdConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.ivs.IvsResources.isValidChannelArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the Channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCompositionArn` <a name="isValidCompositionArn" id="@cdk_utils/iam.ivs.IvsResources.isValidCompositionArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidCompositionArn(arn: string)
```

Validates whether a string is a valid ARN for the Composition resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidCompositionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEncoderConfigurationArn` <a name="isValidEncoderConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.isValidEncoderConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidEncoderConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Encoder-Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidEncoderConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidIngestConfigurationArn` <a name="isValidIngestConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.isValidIngestConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidIngestConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Ingest-Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidIngestConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPlaybackKeyPairArn` <a name="isValidPlaybackKeyPairArn" id="@cdk_utils/iam.ivs.IvsResources.isValidPlaybackKeyPairArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidPlaybackKeyPairArn(arn: string)
```

Validates whether a string is a valid ARN for the Playback-Key-Pair resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidPlaybackKeyPairArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPlaybackRestrictionPolicyArn` <a name="isValidPlaybackRestrictionPolicyArn" id="@cdk_utils/iam.ivs.IvsResources.isValidPlaybackRestrictionPolicyArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidPlaybackRestrictionPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the Playback-Restriction-Policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidPlaybackRestrictionPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPublicKeyArn` <a name="isValidPublicKeyArn" id="@cdk_utils/iam.ivs.IvsResources.isValidPublicKeyArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidPublicKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the Public-Key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidPublicKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRecordingConfigurationArn` <a name="isValidRecordingConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.isValidRecordingConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidRecordingConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Recording-Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidRecordingConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStageArn` <a name="isValidStageArn" id="@cdk_utils/iam.ivs.IvsResources.isValidStageArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidStageArn(arn: string)
```

Validates whether a string is a valid ARN for the Stage resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidStageArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStorageConfigurationArn` <a name="isValidStorageConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.isValidStorageConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidStorageConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Storage-Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidStorageConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamKeyArn` <a name="isValidStreamKeyArn" id="@cdk_utils/iam.ivs.IvsResources.isValidStreamKeyArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.isValidStreamKeyArn(arn: string)
```

Validates whether a string is a valid ARN for the Stream-Key resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.isValidStreamKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAdConfigurationArn` <a name="parseAdConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.parseAdConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseAdConfigurationArn(arn: string)
```

Parses a Ad-Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseAdConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.ivs.IvsResources.parseChannelArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseChannelArn(arn: string)
```

Parses a Channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCompositionArn` <a name="parseCompositionArn" id="@cdk_utils/iam.ivs.IvsResources.parseCompositionArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseCompositionArn(arn: string)
```

Parses a Composition ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseCompositionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEncoderConfigurationArn` <a name="parseEncoderConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.parseEncoderConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseEncoderConfigurationArn(arn: string)
```

Parses a Encoder-Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseEncoderConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIngestConfigurationArn` <a name="parseIngestConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.parseIngestConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseIngestConfigurationArn(arn: string)
```

Parses a Ingest-Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseIngestConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePlaybackKeyPairArn` <a name="parsePlaybackKeyPairArn" id="@cdk_utils/iam.ivs.IvsResources.parsePlaybackKeyPairArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parsePlaybackKeyPairArn(arn: string)
```

Parses a Playback-Key-Pair ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parsePlaybackKeyPairArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePlaybackRestrictionPolicyArn` <a name="parsePlaybackRestrictionPolicyArn" id="@cdk_utils/iam.ivs.IvsResources.parsePlaybackRestrictionPolicyArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parsePlaybackRestrictionPolicyArn(arn: string)
```

Parses a Playback-Restriction-Policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parsePlaybackRestrictionPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePublicKeyArn` <a name="parsePublicKeyArn" id="@cdk_utils/iam.ivs.IvsResources.parsePublicKeyArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parsePublicKeyArn(arn: string)
```

Parses a Public-Key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parsePublicKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRecordingConfigurationArn` <a name="parseRecordingConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.parseRecordingConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseRecordingConfigurationArn(arn: string)
```

Parses a Recording-Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseRecordingConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStageArn` <a name="parseStageArn" id="@cdk_utils/iam.ivs.IvsResources.parseStageArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseStageArn(arn: string)
```

Parses a Stage ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseStageArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStorageConfigurationArn` <a name="parseStorageConfigurationArn" id="@cdk_utils/iam.ivs.IvsResources.parseStorageConfigurationArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseStorageConfigurationArn(arn: string)
```

Parses a Storage-Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseStorageConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamKeyArn` <a name="parseStreamKeyArn" id="@cdk_utils/iam.ivs.IvsResources.parseStreamKeyArn"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.parseStreamKeyArn(arn: string)
```

Parses a Stream-Key ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivs.IvsResources.parseStreamKeyArn.parameter.arn"></a>

- *Type:* string

---

##### `playbackKeyPair` <a name="playbackKeyPair" id="@cdk_utils/iam.ivs.IvsResources.playbackKeyPair"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.playbackKeyPair(props: IvsPlaybackKeyPairArnProps)
```

Builds an ARN for the Playback-Key-Pair resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.playbackKeyPair.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsPlaybackKeyPairArnProps">IvsPlaybackKeyPairArnProps</a>

---

##### `playbackRestrictionPolicy` <a name="playbackRestrictionPolicy" id="@cdk_utils/iam.ivs.IvsResources.playbackRestrictionPolicy"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.playbackRestrictionPolicy(props: IvsPlaybackRestrictionPolicyArnProps)
```

Builds an ARN for the Playback-Restriction-Policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.playbackRestrictionPolicy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsPlaybackRestrictionPolicyArnProps">IvsPlaybackRestrictionPolicyArnProps</a>

---

##### `publicKey` <a name="publicKey" id="@cdk_utils/iam.ivs.IvsResources.publicKey"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.publicKey(props: IvsPublicKeyArnProps)
```

Builds an ARN for the Public-Key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.publicKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsPublicKeyArnProps">IvsPublicKeyArnProps</a>

---

##### `recordingConfiguration` <a name="recordingConfiguration" id="@cdk_utils/iam.ivs.IvsResources.recordingConfiguration"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.recordingConfiguration(props: IvsRecordingConfigurationArnProps)
```

Builds an ARN for the Recording-Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.recordingConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsRecordingConfigurationArnProps">IvsRecordingConfigurationArnProps</a>

---

##### `stage` <a name="stage" id="@cdk_utils/iam.ivs.IvsResources.stage"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.stage(props: IvsStageArnProps)
```

Builds an ARN for the Stage resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.stage.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsStageArnProps">IvsStageArnProps</a>

---

##### `storageConfiguration` <a name="storageConfiguration" id="@cdk_utils/iam.ivs.IvsResources.storageConfiguration"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.storageConfiguration(props: IvsStorageConfigurationArnProps)
```

Builds an ARN for the Storage-Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.storageConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsStorageConfigurationArnProps">IvsStorageConfigurationArnProps</a>

---

##### `streamKey` <a name="streamKey" id="@cdk_utils/iam.ivs.IvsResources.streamKey"></a>

```typescript
import { ivs } from '@cdk_utils/iam'

ivs.IvsResources.streamKey(props: IvsStreamKeyArnProps)
```

Builds an ARN for the Stream-Key resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivs.IvsResources.streamKey.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivs.IvsStreamKeyArnProps">IvsStreamKeyArnProps</a>

---




