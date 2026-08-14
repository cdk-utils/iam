# `mediatailor` Submodule <a name="`mediatailor` Submodule" id="@cdk_utils/iam.mediatailor"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediaTailorChannelArnComponents <a name="MediaTailorChannelArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorChannelArnComponents: mediatailor.MediaTailorChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaTailorChannelArnProps <a name="MediaTailorChannelArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorChannelArnProps: mediatailor.MediaTailorChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaTailorLiveSourceArnComponents <a name="MediaTailorLiveSourceArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents"></a>

Parsed components of a liveSource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorLiveSourceArnComponents: mediatailor.MediaTailorLiveSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.liveSourceName">liveSourceName</a></code> | <code>string</code> | The LiveSourceName component. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The SourceLocationName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `liveSourceName`<sup>Required</sup> <a name="liveSourceName" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.liveSourceName"></a>

```typescript
public readonly liveSourceName: string;
```

- *Type:* string

The LiveSourceName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnComponents.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The SourceLocationName component.

---

### MediaTailorLiveSourceArnProps <a name="MediaTailorLiveSourceArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps"></a>

Properties for building a liveSource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorLiveSourceArnProps: mediatailor.MediaTailorLiveSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.liveSourceName">liveSourceName</a></code> | <code>string</code> | The LiveSourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The SourceLocationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `liveSourceName`<sup>Required</sup> <a name="liveSourceName" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.liveSourceName"></a>

```typescript
public readonly liveSourceName: string;
```

- *Type:* string

The LiveSourceName component of the ARN.

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The SourceLocationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaTailorPlaybackConfigurationArnComponents <a name="MediaTailorPlaybackConfigurationArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents"></a>

Parsed components of a playbackConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorPlaybackConfigurationArnComponents: mediatailor.MediaTailorPlaybackConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### MediaTailorPlaybackConfigurationArnProps <a name="MediaTailorPlaybackConfigurationArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps"></a>

Properties for building a playbackConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorPlaybackConfigurationArnProps: mediatailor.MediaTailorPlaybackConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaTailorPrefetchScheduleArnComponents <a name="MediaTailorPrefetchScheduleArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents"></a>

Parsed components of a prefetchSchedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorPrefetchScheduleArnComponents: mediatailor.MediaTailorPrefetchScheduleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### MediaTailorPrefetchScheduleArnProps <a name="MediaTailorPrefetchScheduleArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps"></a>

Properties for building a prefetchSchedule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorPrefetchScheduleArnProps: mediatailor.MediaTailorPrefetchScheduleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaTailorProgramArnComponents <a name="MediaTailorProgramArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents"></a>

Parsed components of a program ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorProgramArnComponents: mediatailor.MediaTailorProgramArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.programName">programName</a></code> | <code>string</code> | The ProgramName component. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

The ProgramName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaTailorProgramArnProps <a name="MediaTailorProgramArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps"></a>

Properties for building a program ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorProgramArnProps: mediatailor.MediaTailorProgramArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.programName">programName</a></code> | <code>string</code> | The ProgramName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `programName`<sup>Required</sup> <a name="programName" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.programName"></a>

```typescript
public readonly programName: string;
```

- *Type:* string

The ProgramName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaTailorSourceLocationArnComponents <a name="MediaTailorSourceLocationArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents"></a>

Parsed components of a sourceLocation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorSourceLocationArnComponents: mediatailor.MediaTailorSourceLocationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The SourceLocationName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnComponents.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The SourceLocationName component.

---

### MediaTailorSourceLocationArnProps <a name="MediaTailorSourceLocationArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps"></a>

Properties for building a sourceLocation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorSourceLocationArnProps: mediatailor.MediaTailorSourceLocationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The SourceLocationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The SourceLocationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaTailorVodSourceArnComponents <a name="MediaTailorVodSourceArnComponents" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents"></a>

Parsed components of a vodSource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorVodSourceArnComponents: mediatailor.MediaTailorVodSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The SourceLocationName component. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | The VodSourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The SourceLocationName component.

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnComponents.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

The VodSourceName component.

---

### MediaTailorVodSourceArnProps <a name="MediaTailorVodSourceArnProps" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps"></a>

Properties for building a vodSource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

const mediaTailorVodSourceArnProps: mediatailor.MediaTailorVodSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.sourceLocationName">sourceLocationName</a></code> | <code>string</code> | The SourceLocationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.vodSourceName">vodSourceName</a></code> | <code>string</code> | The VodSourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sourceLocationName`<sup>Required</sup> <a name="sourceLocationName" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.sourceLocationName"></a>

```typescript
public readonly sourceLocationName: string;
```

- *Type:* string

The SourceLocationName component of the ARN.

---

##### `vodSourceName`<sup>Required</sup> <a name="vodSourceName" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.vodSourceName"></a>

```typescript
public readonly vodSourceName: string;
```

- *Type:* string

The VodSourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediaTailorActions <a name="MediaTailorActions" id="@cdk_utils/iam.mediatailor.MediaTailorActions"></a>

IAM action constants for the mediatailor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediatailor.MediaTailorActions.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

new mediatailor.MediaTailorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetChannelPolicy">actionGetChannelPolicy</a></code> | <code>string</code> | [Read] mediatailor:GetChannelPolicy. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetChannelSchedule">actionGetChannelSchedule</a></code> | <code>string</code> | [Read] mediatailor:GetChannelSchedule. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetPlaybackConfiguration">actionGetPlaybackConfiguration</a></code> | <code>string</code> | [Read] mediatailor:GetPlaybackConfiguration. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetPrefetchSchedule">actionGetPrefetchSchedule</a></code> | <code>string</code> | [Read] mediatailor:GetPrefetchSchedule. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ConfigureLogsForChannel">ConfigureLogsForChannel</a></code> | <code>string</code> | [Write] mediatailor:ConfigureLogsForChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ConfigureLogsForPlaybackConfiguration">ConfigureLogsForPlaybackConfiguration</a></code> | <code>string</code> | [Write] mediatailor:ConfigureLogsForPlaybackConfiguration. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] mediatailor:CreateChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateLiveSource">CreateLiveSource</a></code> | <code>string</code> | [Write] mediatailor:CreateLiveSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreatePrefetchSchedule">CreatePrefetchSchedule</a></code> | <code>string</code> | [Write] mediatailor:CreatePrefetchSchedule. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateProgram">CreateProgram</a></code> | <code>string</code> | [Write] mediatailor:CreateProgram. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateSourceLocation">CreateSourceLocation</a></code> | <code>string</code> | [Write] mediatailor:CreateSourceLocation. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateVodSource">CreateVodSource</a></code> | <code>string</code> | [Write] mediatailor:CreateVodSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] mediatailor:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteChannelPolicy">DeleteChannelPolicy</a></code> | <code>string</code> | [PermissionManagement] mediatailor:DeleteChannelPolicy. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteLiveSource">DeleteLiveSource</a></code> | <code>string</code> | [Write] mediatailor:DeleteLiveSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeletePlaybackConfiguration">DeletePlaybackConfiguration</a></code> | <code>string</code> | [Write] mediatailor:DeletePlaybackConfiguration. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeletePrefetchSchedule">DeletePrefetchSchedule</a></code> | <code>string</code> | [Write] mediatailor:DeletePrefetchSchedule. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteProgram">DeleteProgram</a></code> | <code>string</code> | [Write] mediatailor:DeleteProgram. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteSourceLocation">DeleteSourceLocation</a></code> | <code>string</code> | [Write] mediatailor:DeleteSourceLocation. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteVodSource">DeleteVodSource</a></code> | <code>string</code> | [Write] mediatailor:DeleteVodSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeChannel">DescribeChannel</a></code> | <code>string</code> | [Read] mediatailor:DescribeChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeLiveSource">DescribeLiveSource</a></code> | <code>string</code> | [Read] mediatailor:DescribeLiveSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeProgram">DescribeProgram</a></code> | <code>string</code> | [Read] mediatailor:DescribeProgram. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeSourceLocation">DescribeSourceLocation</a></code> | <code>string</code> | [Read] mediatailor:DescribeSourceLocation. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeVodSource">DescribeVodSource</a></code> | <code>string</code> | [Read] mediatailor:DescribeVodSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListAlerts">ListAlerts</a></code> | <code>string</code> | [Read] mediatailor:ListAlerts. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [Read] mediatailor:ListChannels. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListLiveSources">ListLiveSources</a></code> | <code>string</code> | [Read] mediatailor:ListLiveSources. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListPlaybackConfigurations">ListPlaybackConfigurations</a></code> | <code>string</code> | [List] mediatailor:ListPlaybackConfigurations. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListPrefetchSchedules">ListPrefetchSchedules</a></code> | <code>string</code> | [List] mediatailor:ListPrefetchSchedules. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListSourceLocations">ListSourceLocations</a></code> | <code>string</code> | [Read] mediatailor:ListSourceLocations. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediatailor:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListVodSources">ListVodSources</a></code> | <code>string</code> | [Read] mediatailor:ListVodSources. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.PutChannelPolicy">PutChannelPolicy</a></code> | <code>string</code> | [PermissionManagement] mediatailor:PutChannelPolicy. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.PutPlaybackConfiguration">PutPlaybackConfiguration</a></code> | <code>string</code> | [Write] mediatailor:PutPlaybackConfiguration. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.StartChannel">StartChannel</a></code> | <code>string</code> | [Write] mediatailor:StartChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.StopChannel">StopChannel</a></code> | <code>string</code> | [Write] mediatailor:StopChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediatailor:TagResource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediatailor:UntagResource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] mediatailor:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateLiveSource">UpdateLiveSource</a></code> | <code>string</code> | [Write] mediatailor:UpdateLiveSource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateProgram">UpdateProgram</a></code> | <code>string</code> | [Write] mediatailor:UpdateProgram. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateSourceLocation">UpdateSourceLocation</a></code> | <code>string</code> | [Write] mediatailor:UpdateSourceLocation. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateVodSource">UpdateVodSource</a></code> | <code>string</code> | [Write] mediatailor:UpdateVodSource. |

---

##### `actionGetChannelPolicy`<sup>Required</sup> <a name="actionGetChannelPolicy" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetChannelPolicy"></a>

```typescript
public readonly actionGetChannelPolicy: string;
```

- *Type:* string

[Read] mediatailor:GetChannelPolicy.

---

##### `actionGetChannelSchedule`<sup>Required</sup> <a name="actionGetChannelSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetChannelSchedule"></a>

```typescript
public readonly actionGetChannelSchedule: string;
```

- *Type:* string

[Read] mediatailor:GetChannelSchedule.

---

##### `actionGetPlaybackConfiguration`<sup>Required</sup> <a name="actionGetPlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetPlaybackConfiguration"></a>

```typescript
public readonly actionGetPlaybackConfiguration: string;
```

- *Type:* string

[Read] mediatailor:GetPlaybackConfiguration.

---

##### `actionGetPrefetchSchedule`<sup>Required</sup> <a name="actionGetPrefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.actionGetPrefetchSchedule"></a>

```typescript
public readonly actionGetPrefetchSchedule: string;
```

- *Type:* string

[Read] mediatailor:GetPrefetchSchedule.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConfigureLogsForChannel`<sup>Required</sup> <a name="ConfigureLogsForChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ConfigureLogsForChannel"></a>

```typescript
public readonly ConfigureLogsForChannel: string;
```

- *Type:* string

[Write] mediatailor:ConfigureLogsForChannel.

---

##### `ConfigureLogsForPlaybackConfiguration`<sup>Required</sup> <a name="ConfigureLogsForPlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ConfigureLogsForPlaybackConfiguration"></a>

```typescript
public readonly ConfigureLogsForPlaybackConfiguration: string;
```

- *Type:* string

[Write] mediatailor:ConfigureLogsForPlaybackConfiguration.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] mediatailor:CreateChannel.

---

##### `CreateLiveSource`<sup>Required</sup> <a name="CreateLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateLiveSource"></a>

```typescript
public readonly CreateLiveSource: string;
```

- *Type:* string

[Write] mediatailor:CreateLiveSource.

---

##### `CreatePrefetchSchedule`<sup>Required</sup> <a name="CreatePrefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreatePrefetchSchedule"></a>

```typescript
public readonly CreatePrefetchSchedule: string;
```

- *Type:* string

[Write] mediatailor:CreatePrefetchSchedule.

---

##### `CreateProgram`<sup>Required</sup> <a name="CreateProgram" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateProgram"></a>

```typescript
public readonly CreateProgram: string;
```

- *Type:* string

[Write] mediatailor:CreateProgram.

---

##### `CreateSourceLocation`<sup>Required</sup> <a name="CreateSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateSourceLocation"></a>

```typescript
public readonly CreateSourceLocation: string;
```

- *Type:* string

[Write] mediatailor:CreateSourceLocation.

---

##### `CreateVodSource`<sup>Required</sup> <a name="CreateVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.CreateVodSource"></a>

```typescript
public readonly CreateVodSource: string;
```

- *Type:* string

[Write] mediatailor:CreateVodSource.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] mediatailor:DeleteChannel.

---

##### `DeleteChannelPolicy`<sup>Required</sup> <a name="DeleteChannelPolicy" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteChannelPolicy"></a>

```typescript
public readonly DeleteChannelPolicy: string;
```

- *Type:* string

[PermissionManagement] mediatailor:DeleteChannelPolicy.

---

##### `DeleteLiveSource`<sup>Required</sup> <a name="DeleteLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteLiveSource"></a>

```typescript
public readonly DeleteLiveSource: string;
```

- *Type:* string

[Write] mediatailor:DeleteLiveSource.

---

##### `DeletePlaybackConfiguration`<sup>Required</sup> <a name="DeletePlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeletePlaybackConfiguration"></a>

```typescript
public readonly DeletePlaybackConfiguration: string;
```

- *Type:* string

[Write] mediatailor:DeletePlaybackConfiguration.

---

##### `DeletePrefetchSchedule`<sup>Required</sup> <a name="DeletePrefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeletePrefetchSchedule"></a>

```typescript
public readonly DeletePrefetchSchedule: string;
```

- *Type:* string

[Write] mediatailor:DeletePrefetchSchedule.

---

##### `DeleteProgram`<sup>Required</sup> <a name="DeleteProgram" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteProgram"></a>

```typescript
public readonly DeleteProgram: string;
```

- *Type:* string

[Write] mediatailor:DeleteProgram.

---

##### `DeleteSourceLocation`<sup>Required</sup> <a name="DeleteSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteSourceLocation"></a>

```typescript
public readonly DeleteSourceLocation: string;
```

- *Type:* string

[Write] mediatailor:DeleteSourceLocation.

---

##### `DeleteVodSource`<sup>Required</sup> <a name="DeleteVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DeleteVodSource"></a>

```typescript
public readonly DeleteVodSource: string;
```

- *Type:* string

[Write] mediatailor:DeleteVodSource.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string;
```

- *Type:* string

[Read] mediatailor:DescribeChannel.

---

##### `DescribeLiveSource`<sup>Required</sup> <a name="DescribeLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeLiveSource"></a>

```typescript
public readonly DescribeLiveSource: string;
```

- *Type:* string

[Read] mediatailor:DescribeLiveSource.

---

##### `DescribeProgram`<sup>Required</sup> <a name="DescribeProgram" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeProgram"></a>

```typescript
public readonly DescribeProgram: string;
```

- *Type:* string

[Read] mediatailor:DescribeProgram.

---

##### `DescribeSourceLocation`<sup>Required</sup> <a name="DescribeSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeSourceLocation"></a>

```typescript
public readonly DescribeSourceLocation: string;
```

- *Type:* string

[Read] mediatailor:DescribeSourceLocation.

---

##### `DescribeVodSource`<sup>Required</sup> <a name="DescribeVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.DescribeVodSource"></a>

```typescript
public readonly DescribeVodSource: string;
```

- *Type:* string

[Read] mediatailor:DescribeVodSource.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string;
```

- *Type:* string

[Read] mediatailor:ListAlerts.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[Read] mediatailor:ListChannels.

---

##### `ListLiveSources`<sup>Required</sup> <a name="ListLiveSources" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListLiveSources"></a>

```typescript
public readonly ListLiveSources: string;
```

- *Type:* string

[Read] mediatailor:ListLiveSources.

---

##### `ListPlaybackConfigurations`<sup>Required</sup> <a name="ListPlaybackConfigurations" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListPlaybackConfigurations"></a>

```typescript
public readonly ListPlaybackConfigurations: string;
```

- *Type:* string

[List] mediatailor:ListPlaybackConfigurations.

---

##### `ListPrefetchSchedules`<sup>Required</sup> <a name="ListPrefetchSchedules" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListPrefetchSchedules"></a>

```typescript
public readonly ListPrefetchSchedules: string;
```

- *Type:* string

[List] mediatailor:ListPrefetchSchedules.

---

##### `ListSourceLocations`<sup>Required</sup> <a name="ListSourceLocations" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListSourceLocations"></a>

```typescript
public readonly ListSourceLocations: string;
```

- *Type:* string

[Read] mediatailor:ListSourceLocations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediatailor:ListTagsForResource.

---

##### `ListVodSources`<sup>Required</sup> <a name="ListVodSources" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.ListVodSources"></a>

```typescript
public readonly ListVodSources: string;
```

- *Type:* string

[Read] mediatailor:ListVodSources.

---

##### `PutChannelPolicy`<sup>Required</sup> <a name="PutChannelPolicy" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.PutChannelPolicy"></a>

```typescript
public readonly PutChannelPolicy: string;
```

- *Type:* string

[PermissionManagement] mediatailor:PutChannelPolicy.

---

##### `PutPlaybackConfiguration`<sup>Required</sup> <a name="PutPlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.PutPlaybackConfiguration"></a>

```typescript
public readonly PutPlaybackConfiguration: string;
```

- *Type:* string

[Write] mediatailor:PutPlaybackConfiguration.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartChannel`<sup>Required</sup> <a name="StartChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.StartChannel"></a>

```typescript
public readonly StartChannel: string;
```

- *Type:* string

[Write] mediatailor:StartChannel.

---

##### `StopChannel`<sup>Required</sup> <a name="StopChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.StopChannel"></a>

```typescript
public readonly StopChannel: string;
```

- *Type:* string

[Write] mediatailor:StopChannel.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediatailor:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediatailor:UntagResource.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] mediatailor:UpdateChannel.

---

##### `UpdateLiveSource`<sup>Required</sup> <a name="UpdateLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateLiveSource"></a>

```typescript
public readonly UpdateLiveSource: string;
```

- *Type:* string

[Write] mediatailor:UpdateLiveSource.

---

##### `UpdateProgram`<sup>Required</sup> <a name="UpdateProgram" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateProgram"></a>

```typescript
public readonly UpdateProgram: string;
```

- *Type:* string

[Write] mediatailor:UpdateProgram.

---

##### `UpdateSourceLocation`<sup>Required</sup> <a name="UpdateSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateSourceLocation"></a>

```typescript
public readonly UpdateSourceLocation: string;
```

- *Type:* string

[Write] mediatailor:UpdateSourceLocation.

---

##### `UpdateVodSource`<sup>Required</sup> <a name="UpdateVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorActions.property.UpdateVodSource"></a>

```typescript
public readonly UpdateVodSource: string;
```

- *Type:* string

[Write] mediatailor:UpdateVodSource.

---

### MediaTailorConditions <a name="MediaTailorConditions" id="@cdk_utils/iam.mediatailor.MediaTailorConditions"></a>

Condition key constants and builders for mediatailor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

new mediatailor.MediaTailorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.requestTag"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.resourceTag"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.tagKeys"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateLiveSourceConditionKeys">CreateLiveSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLiveSource action. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateSourceLocationConditionKeys">CreateSourceLocationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSourceLocation action. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateVodSourceConditionKeys">CreateVodSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateVodSource action. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.PutPlaybackConfigurationConditionKeys">PutPlaybackConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutPlaybackConfiguration action. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateLiveSourceConditionKeys`<sup>Required</sup> <a name="CreateLiveSourceConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateLiveSourceConditionKeys"></a>

```typescript
public readonly CreateLiveSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLiveSource action.

---

##### `CreateSourceLocationConditionKeys`<sup>Required</sup> <a name="CreateSourceLocationConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateSourceLocationConditionKeys"></a>

```typescript
public readonly CreateSourceLocationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSourceLocation action.

---

##### `CreateVodSourceConditionKeys`<sup>Required</sup> <a name="CreateVodSourceConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.CreateVodSourceConditionKeys"></a>

```typescript
public readonly CreateVodSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateVodSource action.

---

##### `PutPlaybackConfigurationConditionKeys`<sup>Required</sup> <a name="PutPlaybackConfigurationConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.PutPlaybackConfigurationConditionKeys"></a>

```typescript
public readonly PutPlaybackConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutPlaybackConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediatailor.MediaTailorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MediaTailorOperations <a name="MediaTailorOperations" id="@cdk_utils/iam.mediatailor.MediaTailorOperations"></a>

API operation to required IAM actions mapping for mediatailor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

new mediatailor.MediaTailorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ConfigureLogsForChannel">ConfigureLogsForChannel</a></code> | <code>string[]</code> | IAM actions required for the ConfigureLogsForChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ConfigureLogsForPlaybackConfiguration">ConfigureLogsForPlaybackConfiguration</a></code> | <code>string[]</code> | IAM actions required for the ConfigureLogsForPlaybackConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateLiveSource">CreateLiveSource</a></code> | <code>string[]</code> | IAM actions required for the CreateLiveSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreatePrefetchSchedule">CreatePrefetchSchedule</a></code> | <code>string[]</code> | IAM actions required for the CreatePrefetchSchedule API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateProgram">CreateProgram</a></code> | <code>string[]</code> | IAM actions required for the CreateProgram API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateSourceLocation">CreateSourceLocation</a></code> | <code>string[]</code> | IAM actions required for the CreateSourceLocation API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateVodSource">CreateVodSource</a></code> | <code>string[]</code> | IAM actions required for the CreateVodSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteChannelPolicy">DeleteChannelPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteFunction">DeleteFunction</a></code> | <code>string[]</code> | IAM actions required for the DeleteFunction API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteLiveSource">DeleteLiveSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteLiveSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeletePlaybackConfiguration">DeletePlaybackConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeletePlaybackConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeletePrefetchSchedule">DeletePrefetchSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeletePrefetchSchedule API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteProgram">DeleteProgram</a></code> | <code>string[]</code> | IAM actions required for the DeleteProgram API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteSourceLocation">DeleteSourceLocation</a></code> | <code>string[]</code> | IAM actions required for the DeleteSourceLocation API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteVodSource">DeleteVodSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteVodSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeChannel">DescribeChannel</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeLiveSource">DescribeLiveSource</a></code> | <code>string[]</code> | IAM actions required for the DescribeLiveSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeProgram">DescribeProgram</a></code> | <code>string[]</code> | IAM actions required for the DescribeProgram API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeSourceLocation">DescribeSourceLocation</a></code> | <code>string[]</code> | IAM actions required for the DescribeSourceLocation API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeVodSource">DescribeVodSource</a></code> | <code>string[]</code> | IAM actions required for the DescribeVodSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListAlerts">ListAlerts</a></code> | <code>string[]</code> | IAM actions required for the ListAlerts API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListFunctions">ListFunctions</a></code> | <code>string[]</code> | IAM actions required for the ListFunctions API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListLiveSources">ListLiveSources</a></code> | <code>string[]</code> | IAM actions required for the ListLiveSources API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListPlaybackConfigurations">ListPlaybackConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListPlaybackConfigurations API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListPrefetchSchedules">ListPrefetchSchedules</a></code> | <code>string[]</code> | IAM actions required for the ListPrefetchSchedules API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListSourceLocations">ListSourceLocations</a></code> | <code>string[]</code> | IAM actions required for the ListSourceLocations API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListVodSources">ListVodSources</a></code> | <code>string[]</code> | IAM actions required for the ListVodSources API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetChannelPolicy">opGetChannelPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetChannelPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetChannelSchedule">opGetChannelSchedule</a></code> | <code>string[]</code> | IAM actions required for the GetChannelSchedule API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetFunction">opGetFunction</a></code> | <code>string[]</code> | IAM actions required for the GetFunction API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetPlaybackConfiguration">opGetPlaybackConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetPlaybackConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetPrefetchSchedule">opGetPrefetchSchedule</a></code> | <code>string[]</code> | IAM actions required for the GetPrefetchSchedule API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.PutChannelPolicy">PutChannelPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutChannelPolicy API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.PutFunction">PutFunction</a></code> | <code>string[]</code> | IAM actions required for the PutFunction API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.PutPlaybackConfiguration">PutPlaybackConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutPlaybackConfiguration API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.StartChannel">StartChannel</a></code> | <code>string[]</code> | IAM actions required for the StartChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.StopChannel">StopChannel</a></code> | <code>string[]</code> | IAM actions required for the StopChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateLiveSource">UpdateLiveSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateLiveSource API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateProgram">UpdateProgram</a></code> | <code>string[]</code> | IAM actions required for the UpdateProgram API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateSourceLocation">UpdateSourceLocation</a></code> | <code>string[]</code> | IAM actions required for the UpdateSourceLocation API call. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateVodSource">UpdateVodSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateVodSource API call. |

---

##### `ConfigureLogsForChannel`<sup>Required</sup> <a name="ConfigureLogsForChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ConfigureLogsForChannel"></a>

```typescript
public readonly ConfigureLogsForChannel: string[];
```

- *Type:* string[]

IAM actions required for the ConfigureLogsForChannel API call.

---

##### `ConfigureLogsForPlaybackConfiguration`<sup>Required</sup> <a name="ConfigureLogsForPlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ConfigureLogsForPlaybackConfiguration"></a>

```typescript
public readonly ConfigureLogsForPlaybackConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the ConfigureLogsForPlaybackConfiguration API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateLiveSource`<sup>Required</sup> <a name="CreateLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateLiveSource"></a>

```typescript
public readonly CreateLiveSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateLiveSource API call.

---

##### `CreatePrefetchSchedule`<sup>Required</sup> <a name="CreatePrefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreatePrefetchSchedule"></a>

```typescript
public readonly CreatePrefetchSchedule: string[];
```

- *Type:* string[]

IAM actions required for the CreatePrefetchSchedule API call.

---

##### `CreateProgram`<sup>Required</sup> <a name="CreateProgram" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateProgram"></a>

```typescript
public readonly CreateProgram: string[];
```

- *Type:* string[]

IAM actions required for the CreateProgram API call.

---

##### `CreateSourceLocation`<sup>Required</sup> <a name="CreateSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateSourceLocation"></a>

```typescript
public readonly CreateSourceLocation: string[];
```

- *Type:* string[]

IAM actions required for the CreateSourceLocation API call.

---

##### `CreateVodSource`<sup>Required</sup> <a name="CreateVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.CreateVodSource"></a>

```typescript
public readonly CreateVodSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateVodSource API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteChannelPolicy`<sup>Required</sup> <a name="DeleteChannelPolicy" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteChannelPolicy"></a>

```typescript
public readonly DeleteChannelPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelPolicy API call.

---

##### `DeleteFunction`<sup>Required</sup> <a name="DeleteFunction" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteFunction"></a>

```typescript
public readonly DeleteFunction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFunction API call.

---

##### `DeleteLiveSource`<sup>Required</sup> <a name="DeleteLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteLiveSource"></a>

```typescript
public readonly DeleteLiveSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLiveSource API call.

---

##### `DeletePlaybackConfiguration`<sup>Required</sup> <a name="DeletePlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeletePlaybackConfiguration"></a>

```typescript
public readonly DeletePlaybackConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlaybackConfiguration API call.

---

##### `DeletePrefetchSchedule`<sup>Required</sup> <a name="DeletePrefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeletePrefetchSchedule"></a>

```typescript
public readonly DeletePrefetchSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeletePrefetchSchedule API call.

---

##### `DeleteProgram`<sup>Required</sup> <a name="DeleteProgram" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteProgram"></a>

```typescript
public readonly DeleteProgram: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProgram API call.

---

##### `DeleteSourceLocation`<sup>Required</sup> <a name="DeleteSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteSourceLocation"></a>

```typescript
public readonly DeleteSourceLocation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSourceLocation API call.

---

##### `DeleteVodSource`<sup>Required</sup> <a name="DeleteVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DeleteVodSource"></a>

```typescript
public readonly DeleteVodSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteVodSource API call.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannel API call.

---

##### `DescribeLiveSource`<sup>Required</sup> <a name="DescribeLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeLiveSource"></a>

```typescript
public readonly DescribeLiveSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLiveSource API call.

---

##### `DescribeProgram`<sup>Required</sup> <a name="DescribeProgram" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeProgram"></a>

```typescript
public readonly DescribeProgram: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProgram API call.

---

##### `DescribeSourceLocation`<sup>Required</sup> <a name="DescribeSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeSourceLocation"></a>

```typescript
public readonly DescribeSourceLocation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSourceLocation API call.

---

##### `DescribeVodSource`<sup>Required</sup> <a name="DescribeVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.DescribeVodSource"></a>

```typescript
public readonly DescribeVodSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeVodSource API call.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string[];
```

- *Type:* string[]

IAM actions required for the ListAlerts API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListFunctions`<sup>Required</sup> <a name="ListFunctions" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListFunctions"></a>

```typescript
public readonly ListFunctions: string[];
```

- *Type:* string[]

IAM actions required for the ListFunctions API call.

---

##### `ListLiveSources`<sup>Required</sup> <a name="ListLiveSources" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListLiveSources"></a>

```typescript
public readonly ListLiveSources: string[];
```

- *Type:* string[]

IAM actions required for the ListLiveSources API call.

---

##### `ListPlaybackConfigurations`<sup>Required</sup> <a name="ListPlaybackConfigurations" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListPlaybackConfigurations"></a>

```typescript
public readonly ListPlaybackConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListPlaybackConfigurations API call.

---

##### `ListPrefetchSchedules`<sup>Required</sup> <a name="ListPrefetchSchedules" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListPrefetchSchedules"></a>

```typescript
public readonly ListPrefetchSchedules: string[];
```

- *Type:* string[]

IAM actions required for the ListPrefetchSchedules API call.

---

##### `ListSourceLocations`<sup>Required</sup> <a name="ListSourceLocations" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListSourceLocations"></a>

```typescript
public readonly ListSourceLocations: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceLocations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVodSources`<sup>Required</sup> <a name="ListVodSources" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.ListVodSources"></a>

```typescript
public readonly ListVodSources: string[];
```

- *Type:* string[]

IAM actions required for the ListVodSources API call.

---

##### `opGetChannelPolicy`<sup>Required</sup> <a name="opGetChannelPolicy" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetChannelPolicy"></a>

```typescript
public readonly opGetChannelPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelPolicy API call.

---

##### `opGetChannelSchedule`<sup>Required</sup> <a name="opGetChannelSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetChannelSchedule"></a>

```typescript
public readonly opGetChannelSchedule: string[];
```

- *Type:* string[]

IAM actions required for the GetChannelSchedule API call.

---

##### `opGetFunction`<sup>Required</sup> <a name="opGetFunction" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetFunction"></a>

```typescript
public readonly opGetFunction: string[];
```

- *Type:* string[]

IAM actions required for the GetFunction API call.

---

##### `opGetPlaybackConfiguration`<sup>Required</sup> <a name="opGetPlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetPlaybackConfiguration"></a>

```typescript
public readonly opGetPlaybackConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetPlaybackConfiguration API call.

---

##### `opGetPrefetchSchedule`<sup>Required</sup> <a name="opGetPrefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.opGetPrefetchSchedule"></a>

```typescript
public readonly opGetPrefetchSchedule: string[];
```

- *Type:* string[]

IAM actions required for the GetPrefetchSchedule API call.

---

##### `PutChannelPolicy`<sup>Required</sup> <a name="PutChannelPolicy" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.PutChannelPolicy"></a>

```typescript
public readonly PutChannelPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutChannelPolicy API call.

---

##### `PutFunction`<sup>Required</sup> <a name="PutFunction" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.PutFunction"></a>

```typescript
public readonly PutFunction: string[];
```

- *Type:* string[]

IAM actions required for the PutFunction API call.

---

##### `PutPlaybackConfiguration`<sup>Required</sup> <a name="PutPlaybackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.PutPlaybackConfiguration"></a>

```typescript
public readonly PutPlaybackConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutPlaybackConfiguration API call.

---

##### `StartChannel`<sup>Required</sup> <a name="StartChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.StartChannel"></a>

```typescript
public readonly StartChannel: string[];
```

- *Type:* string[]

IAM actions required for the StartChannel API call.

---

##### `StopChannel`<sup>Required</sup> <a name="StopChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.StopChannel"></a>

```typescript
public readonly StopChannel: string[];
```

- *Type:* string[]

IAM actions required for the StopChannel API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateLiveSource`<sup>Required</sup> <a name="UpdateLiveSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateLiveSource"></a>

```typescript
public readonly UpdateLiveSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLiveSource API call.

---

##### `UpdateProgram`<sup>Required</sup> <a name="UpdateProgram" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateProgram"></a>

```typescript
public readonly UpdateProgram: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProgram API call.

---

##### `UpdateSourceLocation`<sup>Required</sup> <a name="UpdateSourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateSourceLocation"></a>

```typescript
public readonly UpdateSourceLocation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSourceLocation API call.

---

##### `UpdateVodSource`<sup>Required</sup> <a name="UpdateVodSource" id="@cdk_utils/iam.mediatailor.MediaTailorOperations.property.UpdateVodSource"></a>

```typescript
public readonly UpdateVodSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateVodSource API call.

---

### MediaTailorResources <a name="MediaTailorResources" id="@cdk_utils/iam.mediatailor.MediaTailorResources"></a>

ARN builders, validators, and parsers for mediatailor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediatailor.MediaTailorResources.Initializer"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

new mediatailor.MediaTailorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidLiveSourceArn">isValidLiveSourceArn</a></code> | Validates whether a string is a valid ARN for the liveSource resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidPlaybackConfigurationArn">isValidPlaybackConfigurationArn</a></code> | Validates whether a string is a valid ARN for the playbackConfiguration resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidPrefetchScheduleArn">isValidPrefetchScheduleArn</a></code> | Validates whether a string is a valid ARN for the prefetchSchedule resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidProgramArn">isValidProgramArn</a></code> | Validates whether a string is a valid ARN for the program resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidSourceLocationArn">isValidSourceLocationArn</a></code> | Validates whether a string is a valid ARN for the sourceLocation resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.isValidVodSourceArn">isValidVodSourceArn</a></code> | Validates whether a string is a valid ARN for the vodSource resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.liveSource">liveSource</a></code> | Builds an ARN for the liveSource resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parseLiveSourceArn">parseLiveSourceArn</a></code> | Parses a liveSource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parsePlaybackConfigurationArn">parsePlaybackConfigurationArn</a></code> | Parses a playbackConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parsePrefetchScheduleArn">parsePrefetchScheduleArn</a></code> | Parses a prefetchSchedule ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parseProgramArn">parseProgramArn</a></code> | Parses a program ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parseSourceLocationArn">parseSourceLocationArn</a></code> | Parses a sourceLocation ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.parseVodSourceArn">parseVodSourceArn</a></code> | Parses a vodSource ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.playbackConfiguration">playbackConfiguration</a></code> | Builds an ARN for the playbackConfiguration resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.prefetchSchedule">prefetchSchedule</a></code> | Builds an ARN for the prefetchSchedule resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.program">program</a></code> | Builds an ARN for the program resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.sourceLocation">sourceLocation</a></code> | Builds an ARN for the sourceLocation resource. |
| <code><a href="#@cdk_utils/iam.mediatailor.MediaTailorResources.vodSource">vodSource</a></code> | Builds an ARN for the vodSource resource. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.mediatailor.MediaTailorResources.channel"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.channel(props: MediaTailorChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorChannelArnProps">MediaTailorChannelArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidChannelArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLiveSourceArn` <a name="isValidLiveSourceArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidLiveSourceArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidLiveSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the liveSource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidLiveSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPlaybackConfigurationArn` <a name="isValidPlaybackConfigurationArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidPlaybackConfigurationArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidPlaybackConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the playbackConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidPlaybackConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPrefetchScheduleArn` <a name="isValidPrefetchScheduleArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidPrefetchScheduleArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidPrefetchScheduleArn(arn: string)
```

Validates whether a string is a valid ARN for the prefetchSchedule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidPrefetchScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProgramArn` <a name="isValidProgramArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidProgramArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidProgramArn(arn: string)
```

Validates whether a string is a valid ARN for the program resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidProgramArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSourceLocationArn` <a name="isValidSourceLocationArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidSourceLocationArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidSourceLocationArn(arn: string)
```

Validates whether a string is a valid ARN for the sourceLocation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidSourceLocationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidVodSourceArn` <a name="isValidVodSourceArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidVodSourceArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.isValidVodSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the vodSource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.isValidVodSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `liveSource` <a name="liveSource" id="@cdk_utils/iam.mediatailor.MediaTailorResources.liveSource"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.liveSource(props: MediaTailorLiveSourceArnProps)
```

Builds an ARN for the liveSource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.liveSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorLiveSourceArnProps">MediaTailorLiveSourceArnProps</a>

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseChannelArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLiveSourceArn` <a name="parseLiveSourceArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseLiveSourceArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parseLiveSourceArn(arn: string)
```

Parses a liveSource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseLiveSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePlaybackConfigurationArn` <a name="parsePlaybackConfigurationArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parsePlaybackConfigurationArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parsePlaybackConfigurationArn(arn: string)
```

Parses a playbackConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parsePlaybackConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePrefetchScheduleArn` <a name="parsePrefetchScheduleArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parsePrefetchScheduleArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parsePrefetchScheduleArn(arn: string)
```

Parses a prefetchSchedule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parsePrefetchScheduleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProgramArn` <a name="parseProgramArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseProgramArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parseProgramArn(arn: string)
```

Parses a program ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseProgramArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSourceLocationArn` <a name="parseSourceLocationArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseSourceLocationArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parseSourceLocationArn(arn: string)
```

Parses a sourceLocation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseSourceLocationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseVodSourceArn` <a name="parseVodSourceArn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseVodSourceArn"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.parseVodSourceArn(arn: string)
```

Parses a vodSource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediatailor.MediaTailorResources.parseVodSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `playbackConfiguration` <a name="playbackConfiguration" id="@cdk_utils/iam.mediatailor.MediaTailorResources.playbackConfiguration"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.playbackConfiguration(props: MediaTailorPlaybackConfigurationArnProps)
```

Builds an ARN for the playbackConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.playbackConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorPlaybackConfigurationArnProps">MediaTailorPlaybackConfigurationArnProps</a>

---

##### `prefetchSchedule` <a name="prefetchSchedule" id="@cdk_utils/iam.mediatailor.MediaTailorResources.prefetchSchedule"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.prefetchSchedule(props: MediaTailorPrefetchScheduleArnProps)
```

Builds an ARN for the prefetchSchedule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.prefetchSchedule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorPrefetchScheduleArnProps">MediaTailorPrefetchScheduleArnProps</a>

---

##### `program` <a name="program" id="@cdk_utils/iam.mediatailor.MediaTailorResources.program"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.program(props: MediaTailorProgramArnProps)
```

Builds an ARN for the program resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.program.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorProgramArnProps">MediaTailorProgramArnProps</a>

---

##### `sourceLocation` <a name="sourceLocation" id="@cdk_utils/iam.mediatailor.MediaTailorResources.sourceLocation"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.sourceLocation(props: MediaTailorSourceLocationArnProps)
```

Builds an ARN for the sourceLocation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.sourceLocation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorSourceLocationArnProps">MediaTailorSourceLocationArnProps</a>

---

##### `vodSource` <a name="vodSource" id="@cdk_utils/iam.mediatailor.MediaTailorResources.vodSource"></a>

```typescript
import { mediatailor } from '@cdk_utils/iam'

mediatailor.MediaTailorResources.vodSource(props: MediaTailorVodSourceArnProps)
```

Builds an ARN for the vodSource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediatailor.MediaTailorResources.vodSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediatailor.MediaTailorVodSourceArnProps">MediaTailorVodSourceArnProps</a>

---




