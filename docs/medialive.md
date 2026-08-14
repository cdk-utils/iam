# `medialive` Submodule <a name="`medialive` Submodule" id="@cdk_utils/iam.medialive"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediaLiveChannelArnComponents <a name="MediaLiveChannelArnComponents" id="@cdk_utils/iam.medialive.MediaLiveChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveChannelArnComponents: medialive.MediaLiveChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveChannelArnProps <a name="MediaLiveChannelArnProps" id="@cdk_utils/iam.medialive.MediaLiveChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveChannelArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveChannelArnProps: medialive.MediaLiveChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.channelId">channelId</a></code> | <code>string</code> | The ChannelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelId`<sup>Required</sup> <a name="channelId" id="@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.channelId"></a>

```typescript
public readonly channelId: string;
```

- *Type:* string

The ChannelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveChannelPlacementGroupArnComponents <a name="MediaLiveChannelPlacementGroupArnComponents" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents"></a>

Parsed components of a channel-placement-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveChannelPlacementGroupArnComponents: medialive.MediaLiveChannelPlacementGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.channelPlacementGroupId">channelPlacementGroupId</a></code> | <code>string</code> | The ChannelPlacementGroupId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelPlacementGroupId`<sup>Required</sup> <a name="channelPlacementGroupId" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.channelPlacementGroupId"></a>

```typescript
public readonly channelPlacementGroupId: string;
```

- *Type:* string

The ChannelPlacementGroupId component.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveChannelPlacementGroupArnProps <a name="MediaLiveChannelPlacementGroupArnProps" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps"></a>

Properties for building a channel-placement-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveChannelPlacementGroupArnProps: medialive.MediaLiveChannelPlacementGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.channelPlacementGroupId">channelPlacementGroupId</a></code> | <code>string</code> | The ChannelPlacementGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelPlacementGroupId`<sup>Required</sup> <a name="channelPlacementGroupId" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.channelPlacementGroupId"></a>

```typescript
public readonly channelPlacementGroupId: string;
```

- *Type:* string

The ChannelPlacementGroupId component of the ARN.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveCloudwatchAlarmTemplateArnComponents <a name="MediaLiveCloudwatchAlarmTemplateArnComponents" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents"></a>

Parsed components of a cloudwatch-alarm-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveCloudwatchAlarmTemplateArnComponents: medialive.MediaLiveCloudwatchAlarmTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.cloudWatchAlarmTemplateId">cloudWatchAlarmTemplateId</a></code> | <code>string</code> | The CloudWatchAlarmTemplateId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudWatchAlarmTemplateId`<sup>Required</sup> <a name="cloudWatchAlarmTemplateId" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.cloudWatchAlarmTemplateId"></a>

```typescript
public readonly cloudWatchAlarmTemplateId: string;
```

- *Type:* string

The CloudWatchAlarmTemplateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveCloudwatchAlarmTemplateArnProps <a name="MediaLiveCloudwatchAlarmTemplateArnProps" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps"></a>

Properties for building a cloudwatch-alarm-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveCloudwatchAlarmTemplateArnProps: medialive.MediaLiveCloudwatchAlarmTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.cloudWatchAlarmTemplateId">cloudWatchAlarmTemplateId</a></code> | <code>string</code> | The CloudWatchAlarmTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudWatchAlarmTemplateId`<sup>Required</sup> <a name="cloudWatchAlarmTemplateId" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.cloudWatchAlarmTemplateId"></a>

```typescript
public readonly cloudWatchAlarmTemplateId: string;
```

- *Type:* string

The CloudWatchAlarmTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveCloudwatchAlarmTemplateGroupArnComponents <a name="MediaLiveCloudwatchAlarmTemplateGroupArnComponents" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents"></a>

Parsed components of a cloudwatch-alarm-template-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveCloudwatchAlarmTemplateGroupArnComponents: medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.cloudWatchAlarmTemplateGroupId">cloudWatchAlarmTemplateGroupId</a></code> | <code>string</code> | The CloudWatchAlarmTemplateGroupId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `cloudWatchAlarmTemplateGroupId`<sup>Required</sup> <a name="cloudWatchAlarmTemplateGroupId" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.cloudWatchAlarmTemplateGroupId"></a>

```typescript
public readonly cloudWatchAlarmTemplateGroupId: string;
```

- *Type:* string

The CloudWatchAlarmTemplateGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveCloudwatchAlarmTemplateGroupArnProps <a name="MediaLiveCloudwatchAlarmTemplateGroupArnProps" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps"></a>

Properties for building a cloudwatch-alarm-template-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveCloudwatchAlarmTemplateGroupArnProps: medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.cloudWatchAlarmTemplateGroupId">cloudWatchAlarmTemplateGroupId</a></code> | <code>string</code> | The CloudWatchAlarmTemplateGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `cloudWatchAlarmTemplateGroupId`<sup>Required</sup> <a name="cloudWatchAlarmTemplateGroupId" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.cloudWatchAlarmTemplateGroupId"></a>

```typescript
public readonly cloudWatchAlarmTemplateGroupId: string;
```

- *Type:* string

The CloudWatchAlarmTemplateGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveClusterArnComponents <a name="MediaLiveClusterArnComponents" id="@cdk_utils/iam.medialive.MediaLiveClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveClusterArnComponents: medialive.MediaLiveClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveClusterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveClusterArnProps <a name="MediaLiveClusterArnProps" id="@cdk_utils/iam.medialive.MediaLiveClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveClusterArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveClusterArnProps: medialive.MediaLiveClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveClusterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveEventbridgeRuleTemplateArnComponents <a name="MediaLiveEventbridgeRuleTemplateArnComponents" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents"></a>

Parsed components of a eventbridge-rule-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveEventbridgeRuleTemplateArnComponents: medialive.MediaLiveEventbridgeRuleTemplateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.eventBridgeRuleTemplateId">eventBridgeRuleTemplateId</a></code> | <code>string</code> | The EventBridgeRuleTemplateId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventBridgeRuleTemplateId`<sup>Required</sup> <a name="eventBridgeRuleTemplateId" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.eventBridgeRuleTemplateId"></a>

```typescript
public readonly eventBridgeRuleTemplateId: string;
```

- *Type:* string

The EventBridgeRuleTemplateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveEventbridgeRuleTemplateArnProps <a name="MediaLiveEventbridgeRuleTemplateArnProps" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps"></a>

Properties for building a eventbridge-rule-template ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveEventbridgeRuleTemplateArnProps: medialive.MediaLiveEventbridgeRuleTemplateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.eventBridgeRuleTemplateId">eventBridgeRuleTemplateId</a></code> | <code>string</code> | The EventBridgeRuleTemplateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventBridgeRuleTemplateId`<sup>Required</sup> <a name="eventBridgeRuleTemplateId" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.eventBridgeRuleTemplateId"></a>

```typescript
public readonly eventBridgeRuleTemplateId: string;
```

- *Type:* string

The EventBridgeRuleTemplateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveEventbridgeRuleTemplateGroupArnComponents <a name="MediaLiveEventbridgeRuleTemplateGroupArnComponents" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents"></a>

Parsed components of a eventbridge-rule-template-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveEventbridgeRuleTemplateGroupArnComponents: medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.eventBridgeRuleTemplateGroupId">eventBridgeRuleTemplateGroupId</a></code> | <code>string</code> | The EventBridgeRuleTemplateGroupId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventBridgeRuleTemplateGroupId`<sup>Required</sup> <a name="eventBridgeRuleTemplateGroupId" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.eventBridgeRuleTemplateGroupId"></a>

```typescript
public readonly eventBridgeRuleTemplateGroupId: string;
```

- *Type:* string

The EventBridgeRuleTemplateGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveEventbridgeRuleTemplateGroupArnProps <a name="MediaLiveEventbridgeRuleTemplateGroupArnProps" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps"></a>

Properties for building a eventbridge-rule-template-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveEventbridgeRuleTemplateGroupArnProps: medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.eventBridgeRuleTemplateGroupId">eventBridgeRuleTemplateGroupId</a></code> | <code>string</code> | The EventBridgeRuleTemplateGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventBridgeRuleTemplateGroupId`<sup>Required</sup> <a name="eventBridgeRuleTemplateGroupId" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.eventBridgeRuleTemplateGroupId"></a>

```typescript
public readonly eventBridgeRuleTemplateGroupId: string;
```

- *Type:* string

The EventBridgeRuleTemplateGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveInputArnComponents <a name="MediaLiveInputArnComponents" id="@cdk_utils/iam.medialive.MediaLiveInputArnComponents"></a>

Parsed components of a input ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveInputArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveInputArnComponents: medialive.MediaLiveInputArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.inputId">inputId</a></code> | <code>string</code> | The InputId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.inputId"></a>

```typescript
public readonly inputId: string;
```

- *Type:* string

The InputId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveInputArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveInputArnProps <a name="MediaLiveInputArnProps" id="@cdk_utils/iam.medialive.MediaLiveInputArnProps"></a>

Properties for building a input ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveInputArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveInputArnProps: medialive.MediaLiveInputArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.inputId">inputId</a></code> | <code>string</code> | The InputId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `inputId`<sup>Required</sup> <a name="inputId" id="@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.inputId"></a>

```typescript
public readonly inputId: string;
```

- *Type:* string

The InputId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveInputArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveInputDeviceArnComponents <a name="MediaLiveInputDeviceArnComponents" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents"></a>

Parsed components of a input-device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveInputDeviceArnComponents: medialive.MediaLiveInputDeviceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveInputDeviceArnProps <a name="MediaLiveInputDeviceArnProps" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps"></a>

Properties for building a input-device ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveInputDeviceArnProps: medialive.MediaLiveInputDeviceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.deviceId">deviceId</a></code> | <code>string</code> | The DeviceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The DeviceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveInputSecurityGroupArnComponents <a name="MediaLiveInputSecurityGroupArnComponents" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents"></a>

Parsed components of a input-security-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveInputSecurityGroupArnComponents: medialive.MediaLiveInputSecurityGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.inputSecurityGroupId">inputSecurityGroupId</a></code> | <code>string</code> | The InputSecurityGroupId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `inputSecurityGroupId`<sup>Required</sup> <a name="inputSecurityGroupId" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.inputSecurityGroupId"></a>

```typescript
public readonly inputSecurityGroupId: string;
```

- *Type:* string

The InputSecurityGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveInputSecurityGroupArnProps <a name="MediaLiveInputSecurityGroupArnProps" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps"></a>

Properties for building a input-security-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveInputSecurityGroupArnProps: medialive.MediaLiveInputSecurityGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.inputSecurityGroupId">inputSecurityGroupId</a></code> | <code>string</code> | The InputSecurityGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `inputSecurityGroupId`<sup>Required</sup> <a name="inputSecurityGroupId" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.inputSecurityGroupId"></a>

```typescript
public readonly inputSecurityGroupId: string;
```

- *Type:* string

The InputSecurityGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveMultiplexArnComponents <a name="MediaLiveMultiplexArnComponents" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents"></a>

Parsed components of a multiplex ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveMultiplexArnComponents: medialive.MediaLiveMultiplexArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.multiplexId">multiplexId</a></code> | <code>string</code> | The MultiplexId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

The MultiplexId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveMultiplexArnProps <a name="MediaLiveMultiplexArnProps" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps"></a>

Properties for building a multiplex ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveMultiplexArnProps: medialive.MediaLiveMultiplexArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.multiplexId">multiplexId</a></code> | <code>string</code> | The MultiplexId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `multiplexId`<sup>Required</sup> <a name="multiplexId" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.multiplexId"></a>

```typescript
public readonly multiplexId: string;
```

- *Type:* string

The MultiplexId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveNetworkArnComponents <a name="MediaLiveNetworkArnComponents" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents"></a>

Parsed components of a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveNetworkArnComponents: medialive.MediaLiveNetworkArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.networkId">networkId</a></code> | <code>string</code> | The NetworkId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The NetworkId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveNetworkArnProps <a name="MediaLiveNetworkArnProps" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnProps"></a>

Properties for building a network ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveNetworkArnProps: medialive.MediaLiveNetworkArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.networkId">networkId</a></code> | <code>string</code> | The NetworkId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

The NetworkId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveNetworkArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveNodeArnComponents <a name="MediaLiveNodeArnComponents" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents"></a>

Parsed components of a node ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveNodeArnComponents: medialive.MediaLiveNodeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.nodeId">nodeId</a></code> | <code>string</code> | The NodeId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component.

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

The NodeId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveNodeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveNodeArnProps <a name="MediaLiveNodeArnProps" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps"></a>

Properties for building a node ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveNodeArnProps: medialive.MediaLiveNodeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.clusterId">clusterId</a></code> | <code>string</code> | The ClusterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.nodeId">nodeId</a></code> | <code>string</code> | The NodeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The ClusterId component of the ARN.

---

##### `nodeId`<sup>Required</sup> <a name="nodeId" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.nodeId"></a>

```typescript
public readonly nodeId: string;
```

- *Type:* string

The NodeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveNodeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveOfferingArnComponents <a name="MediaLiveOfferingArnComponents" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents"></a>

Parsed components of a offering ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveOfferingArnComponents: medialive.MediaLiveOfferingArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.offeringId">offeringId</a></code> | <code>string</code> | The OfferingId component. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

The OfferingId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaLiveOfferingArnProps <a name="MediaLiveOfferingArnProps" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnProps"></a>

Properties for building a offering ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveOfferingArnProps: medialive.MediaLiveOfferingArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.offeringId">offeringId</a></code> | <code>string</code> | The OfferingId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `offeringId`<sup>Required</sup> <a name="offeringId" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.offeringId"></a>

```typescript
public readonly offeringId: string;
```

- *Type:* string

The OfferingId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveOfferingArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveReservationArnComponents <a name="MediaLiveReservationArnComponents" id="@cdk_utils/iam.medialive.MediaLiveReservationArnComponents"></a>

Parsed components of a reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveReservationArnComponents: medialive.MediaLiveReservationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.reservationId">reservationId</a></code> | <code>string</code> | The ReservationId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdk_utils/iam.medialive.MediaLiveReservationArnComponents.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

The ReservationId component.

---

### MediaLiveReservationArnProps <a name="MediaLiveReservationArnProps" id="@cdk_utils/iam.medialive.MediaLiveReservationArnProps"></a>

Properties for building a reservation ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveReservationArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveReservationArnProps: medialive.MediaLiveReservationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.reservationId">reservationId</a></code> | <code>string</code> | The ReservationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reservationId`<sup>Required</sup> <a name="reservationId" id="@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.reservationId"></a>

```typescript
public readonly reservationId: string;
```

- *Type:* string

The ReservationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveReservationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveSdiSourceArnComponents <a name="MediaLiveSdiSourceArnComponents" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents"></a>

Parsed components of a sdi-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveSdiSourceArnComponents: medialive.MediaLiveSdiSourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.sdiSourceId">sdiSourceId</a></code> | <code>string</code> | The SdiSourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sdiSourceId`<sup>Required</sup> <a name="sdiSourceId" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnComponents.property.sdiSourceId"></a>

```typescript
public readonly sdiSourceId: string;
```

- *Type:* string

The SdiSourceId component.

---

### MediaLiveSdiSourceArnProps <a name="MediaLiveSdiSourceArnProps" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps"></a>

Properties for building a sdi-source ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveSdiSourceArnProps: medialive.MediaLiveSdiSourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.sdiSourceId">sdiSourceId</a></code> | <code>string</code> | The SdiSourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sdiSourceId`<sup>Required</sup> <a name="sdiSourceId" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.sdiSourceId"></a>

```typescript
public readonly sdiSourceId: string;
```

- *Type:* string

The SdiSourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaLiveSignalMapArnComponents <a name="MediaLiveSignalMapArnComponents" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents"></a>

Parsed components of a signal-map ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveSignalMapArnComponents: medialive.MediaLiveSignalMapArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.signalMapId">signalMapId</a></code> | <code>string</code> | The SignalMapId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `signalMapId`<sup>Required</sup> <a name="signalMapId" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnComponents.property.signalMapId"></a>

```typescript
public readonly signalMapId: string;
```

- *Type:* string

The SignalMapId component.

---

### MediaLiveSignalMapArnProps <a name="MediaLiveSignalMapArnProps" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps"></a>

Properties for building a signal-map ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

const mediaLiveSignalMapArnProps: medialive.MediaLiveSignalMapArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.signalMapId">signalMapId</a></code> | <code>string</code> | The SignalMapId component of the ARN. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `signalMapId`<sup>Required</sup> <a name="signalMapId" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.signalMapId"></a>

```typescript
public readonly signalMapId: string;
```

- *Type:* string

The SignalMapId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediaLiveActions <a name="MediaLiveActions" id="@cdk_utils/iam.medialive.MediaLiveActions"></a>

IAM action constants for the medialive service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medialive.MediaLiveActions.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

new medialive.MediaLiveActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.AcceptInputDeviceTransfer">AcceptInputDeviceTransfer</a></code> | <code>string</code> | [Write] medialive:AcceptInputDeviceTransfer. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetCloudWatchAlarmTemplate">actionGetCloudWatchAlarmTemplate</a></code> | <code>string</code> | [Read] medialive:GetCloudWatchAlarmTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetCloudWatchAlarmTemplateGroup">actionGetCloudWatchAlarmTemplateGroup</a></code> | <code>string</code> | [Read] medialive:GetCloudWatchAlarmTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetEventBridgeRuleTemplate">actionGetEventBridgeRuleTemplate</a></code> | <code>string</code> | [Read] medialive:GetEventBridgeRuleTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetEventBridgeRuleTemplateGroup">actionGetEventBridgeRuleTemplateGroup</a></code> | <code>string</code> | [Read] medialive:GetEventBridgeRuleTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetSignalMap">actionGetSignalMap</a></code> | <code>string</code> | [Read] medialive:GetSignalMap. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.BatchDelete">BatchDelete</a></code> | <code>string</code> | [Write] medialive:BatchDelete. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.BatchStart">BatchStart</a></code> | <code>string</code> | [Write] medialive:BatchStart. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.BatchStop">BatchStop</a></code> | <code>string</code> | [Write] medialive:BatchStop. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.BatchUpdateSchedule">BatchUpdateSchedule</a></code> | <code>string</code> | [Write] medialive:BatchUpdateSchedule. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CancelInputDeviceTransfer">CancelInputDeviceTransfer</a></code> | <code>string</code> | [Write] medialive:CancelInputDeviceTransfer. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ClaimDevice">ClaimDevice</a></code> | <code>string</code> | [Write] medialive:ClaimDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] medialive:CreateChannel. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateChannelPlacementGroup">CreateChannelPlacementGroup</a></code> | <code>string</code> | [Write] medialive:CreateChannelPlacementGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateCloudWatchAlarmTemplate">CreateCloudWatchAlarmTemplate</a></code> | <code>string</code> | [Write] medialive:CreateCloudWatchAlarmTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateCloudWatchAlarmTemplateGroup">CreateCloudWatchAlarmTemplateGroup</a></code> | <code>string</code> | [Write] medialive:CreateCloudWatchAlarmTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] medialive:CreateCluster. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateEventBridgeRuleTemplate">CreateEventBridgeRuleTemplate</a></code> | <code>string</code> | [Write] medialive:CreateEventBridgeRuleTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateEventBridgeRuleTemplateGroup">CreateEventBridgeRuleTemplateGroup</a></code> | <code>string</code> | [Write] medialive:CreateEventBridgeRuleTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateInput">CreateInput</a></code> | <code>string</code> | [Write] medialive:CreateInput. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateInputSecurityGroup">CreateInputSecurityGroup</a></code> | <code>string</code> | [Write] medialive:CreateInputSecurityGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateMultiplex">CreateMultiplex</a></code> | <code>string</code> | [Write] medialive:CreateMultiplex. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateMultiplexProgram">CreateMultiplexProgram</a></code> | <code>string</code> | [Write] medialive:CreateMultiplexProgram. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateNetwork">CreateNetwork</a></code> | <code>string</code> | [Write] medialive:CreateNetwork. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateNode">CreateNode</a></code> | <code>string</code> | [Write] medialive:CreateNode. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateNodeRegistrationScript">CreateNodeRegistrationScript</a></code> | <code>string</code> | [Write] medialive:CreateNodeRegistrationScript. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreatePartnerInput">CreatePartnerInput</a></code> | <code>string</code> | [Write] medialive:CreatePartnerInput. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateSdiSource">CreateSdiSource</a></code> | <code>string</code> | [Write] medialive:CreateSdiSource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateSignalMap">CreateSignalMap</a></code> | <code>string</code> | [Write] medialive:CreateSignalMap. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.CreateTags">CreateTags</a></code> | <code>string</code> | [Tagging] medialive:CreateTags. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] medialive:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteChannelPlacementGroup">DeleteChannelPlacementGroup</a></code> | <code>string</code> | [Write] medialive:DeleteChannelPlacementGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteCloudWatchAlarmTemplate">DeleteCloudWatchAlarmTemplate</a></code> | <code>string</code> | [Write] medialive:DeleteCloudWatchAlarmTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteCloudWatchAlarmTemplateGroup">DeleteCloudWatchAlarmTemplateGroup</a></code> | <code>string</code> | [Write] medialive:DeleteCloudWatchAlarmTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] medialive:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteEventBridgeRuleTemplate">DeleteEventBridgeRuleTemplate</a></code> | <code>string</code> | [Write] medialive:DeleteEventBridgeRuleTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteEventBridgeRuleTemplateGroup">DeleteEventBridgeRuleTemplateGroup</a></code> | <code>string</code> | [Write] medialive:DeleteEventBridgeRuleTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteInput">DeleteInput</a></code> | <code>string</code> | [Write] medialive:DeleteInput. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteInputSecurityGroup">DeleteInputSecurityGroup</a></code> | <code>string</code> | [Write] medialive:DeleteInputSecurityGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteMultiplex">DeleteMultiplex</a></code> | <code>string</code> | [Write] medialive:DeleteMultiplex. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteMultiplexProgram">DeleteMultiplexProgram</a></code> | <code>string</code> | [Write] medialive:DeleteMultiplexProgram. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteNetwork">DeleteNetwork</a></code> | <code>string</code> | [Write] medialive:DeleteNetwork. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteNode">DeleteNode</a></code> | <code>string</code> | [Write] medialive:DeleteNode. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteReservation">DeleteReservation</a></code> | <code>string</code> | [Write] medialive:DeleteReservation. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteSchedule">DeleteSchedule</a></code> | <code>string</code> | [Write] medialive:DeleteSchedule. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteSdiSource">DeleteSdiSource</a></code> | <code>string</code> | [Write] medialive:DeleteSdiSource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteSignalMap">DeleteSignalMap</a></code> | <code>string</code> | [Write] medialive:DeleteSignalMap. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] medialive:DeleteTags. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeAccountConfiguration">DescribeAccountConfiguration</a></code> | <code>string</code> | [Read] medialive:DescribeAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeChannel">DescribeChannel</a></code> | <code>string</code> | [Read] medialive:DescribeChannel. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeChannelPlacementGroup">DescribeChannelPlacementGroup</a></code> | <code>string</code> | [Read] medialive:DescribeChannelPlacementGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [Read] medialive:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInput">DescribeInput</a></code> | <code>string</code> | [Read] medialive:DescribeInput. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInputDevice">DescribeInputDevice</a></code> | <code>string</code> | [Read] medialive:DescribeInputDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInputDeviceThumbnail">DescribeInputDeviceThumbnail</a></code> | <code>string</code> | [Read] medialive:DescribeInputDeviceThumbnail. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInputSecurityGroup">DescribeInputSecurityGroup</a></code> | <code>string</code> | [Read] medialive:DescribeInputSecurityGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeMultiplex">DescribeMultiplex</a></code> | <code>string</code> | [Read] medialive:DescribeMultiplex. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeMultiplexProgram">DescribeMultiplexProgram</a></code> | <code>string</code> | [Read] medialive:DescribeMultiplexProgram. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeNetwork">DescribeNetwork</a></code> | <code>string</code> | [Read] medialive:DescribeNetwork. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeNode">DescribeNode</a></code> | <code>string</code> | [Read] medialive:DescribeNode. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeOffering">DescribeOffering</a></code> | <code>string</code> | [Read] medialive:DescribeOffering. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeReservation">DescribeReservation</a></code> | <code>string</code> | [Read] medialive:DescribeReservation. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeSchedule">DescribeSchedule</a></code> | <code>string</code> | [Read] medialive:DescribeSchedule. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeSdiSource">DescribeSdiSource</a></code> | <code>string</code> | [Read] medialive:DescribeSdiSource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeThumbnails">DescribeThumbnails</a></code> | <code>string</code> | [Read] medialive:DescribeThumbnails. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListAlerts">ListAlerts</a></code> | <code>string</code> | [List] medialive:ListAlerts. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListChannelPlacementGroups">ListChannelPlacementGroups</a></code> | <code>string</code> | [List] medialive:ListChannelPlacementGroups. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [List] medialive:ListChannels. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListCloudWatchAlarmTemplateGroups">ListCloudWatchAlarmTemplateGroups</a></code> | <code>string</code> | [List] medialive:ListCloudWatchAlarmTemplateGroups. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListCloudWatchAlarmTemplates">ListCloudWatchAlarmTemplates</a></code> | <code>string</code> | [List] medialive:ListCloudWatchAlarmTemplates. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListClusterAlerts">ListClusterAlerts</a></code> | <code>string</code> | [List] medialive:ListClusterAlerts. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [List] medialive:ListClusters. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListEventBridgeRuleTemplateGroups">ListEventBridgeRuleTemplateGroups</a></code> | <code>string</code> | [List] medialive:ListEventBridgeRuleTemplateGroups. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListEventBridgeRuleTemplates">ListEventBridgeRuleTemplates</a></code> | <code>string</code> | [List] medialive:ListEventBridgeRuleTemplates. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputDevices">ListInputDevices</a></code> | <code>string</code> | [List] medialive:ListInputDevices. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputDeviceTransfers">ListInputDeviceTransfers</a></code> | <code>string</code> | [List] medialive:ListInputDeviceTransfers. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputs">ListInputs</a></code> | <code>string</code> | [List] medialive:ListInputs. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputSecurityGroups">ListInputSecurityGroups</a></code> | <code>string</code> | [List] medialive:ListInputSecurityGroups. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListMultiplexAlerts">ListMultiplexAlerts</a></code> | <code>string</code> | [List] medialive:ListMultiplexAlerts. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListMultiplexes">ListMultiplexes</a></code> | <code>string</code> | [List] medialive:ListMultiplexes. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListMultiplexPrograms">ListMultiplexPrograms</a></code> | <code>string</code> | [List] medialive:ListMultiplexPrograms. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListNetworks">ListNetworks</a></code> | <code>string</code> | [List] medialive:ListNetworks. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListNodes">ListNodes</a></code> | <code>string</code> | [List] medialive:ListNodes. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListOfferings">ListOfferings</a></code> | <code>string</code> | [List] medialive:ListOfferings. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListReservations">ListReservations</a></code> | <code>string</code> | [List] medialive:ListReservations. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListSdiSources">ListSdiSources</a></code> | <code>string</code> | [List] medialive:ListSdiSources. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListSignalMaps">ListSignalMaps</a></code> | <code>string</code> | [List] medialive:ListSignalMaps. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] medialive:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.ListVersions">ListVersions</a></code> | <code>string</code> | [List] medialive:ListVersions. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.PollAnywhere">PollAnywhere</a></code> | <code>string</code> | [Write] medialive:PollAnywhere. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.PurchaseOffering">PurchaseOffering</a></code> | <code>string</code> | [Write] medialive:PurchaseOffering. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.RebootInputDevice">RebootInputDevice</a></code> | <code>string</code> | [Write] medialive:RebootInputDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.RejectInputDeviceTransfer">RejectInputDeviceTransfer</a></code> | <code>string</code> | [Write] medialive:RejectInputDeviceTransfer. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.RestartChannelPipelines">RestartChannelPipelines</a></code> | <code>string</code> | [Write] medialive:RestartChannelPipelines. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartChannel">StartChannel</a></code> | <code>string</code> | [Write] medialive:StartChannel. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartDeleteMonitorDeployment">StartDeleteMonitorDeployment</a></code> | <code>string</code> | [Write] medialive:StartDeleteMonitorDeployment. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartInputDevice">StartInputDevice</a></code> | <code>string</code> | [Write] medialive:StartInputDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartInputDeviceMaintenanceWindow">StartInputDeviceMaintenanceWindow</a></code> | <code>string</code> | [Write] medialive:StartInputDeviceMaintenanceWindow. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartMonitorDeployment">StartMonitorDeployment</a></code> | <code>string</code> | [Write] medialive:StartMonitorDeployment. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartMultiplex">StartMultiplex</a></code> | <code>string</code> | [Write] medialive:StartMultiplex. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StartUpdateSignalMap">StartUpdateSignalMap</a></code> | <code>string</code> | [Write] medialive:StartUpdateSignalMap. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StopChannel">StopChannel</a></code> | <code>string</code> | [Write] medialive:StopChannel. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StopInputDevice">StopInputDevice</a></code> | <code>string</code> | [Write] medialive:StopInputDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.StopMultiplex">StopMultiplex</a></code> | <code>string</code> | [Write] medialive:StopMultiplex. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.SubmitAnywhereStateChange">SubmitAnywhereStateChange</a></code> | <code>string</code> | [Write] medialive:SubmitAnywhereStateChange. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.TransferInputDevice">TransferInputDevice</a></code> | <code>string</code> | [Write] medialive:TransferInputDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateAccountConfiguration">UpdateAccountConfiguration</a></code> | <code>string</code> | [Write] medialive:UpdateAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] medialive:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateChannelClass">UpdateChannelClass</a></code> | <code>string</code> | [Write] medialive:UpdateChannelClass. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateChannelPlacementGroup">UpdateChannelPlacementGroup</a></code> | <code>string</code> | [Write] medialive:UpdateChannelPlacementGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateCloudWatchAlarmTemplate">UpdateCloudWatchAlarmTemplate</a></code> | <code>string</code> | [Write] medialive:UpdateCloudWatchAlarmTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateCloudWatchAlarmTemplateGroup">UpdateCloudWatchAlarmTemplateGroup</a></code> | <code>string</code> | [Write] medialive:UpdateCloudWatchAlarmTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] medialive:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateEventBridgeRuleTemplate">UpdateEventBridgeRuleTemplate</a></code> | <code>string</code> | [Write] medialive:UpdateEventBridgeRuleTemplate. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateEventBridgeRuleTemplateGroup">UpdateEventBridgeRuleTemplateGroup</a></code> | <code>string</code> | [Write] medialive:UpdateEventBridgeRuleTemplateGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateInput">UpdateInput</a></code> | <code>string</code> | [Write] medialive:UpdateInput. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateInputDevice">UpdateInputDevice</a></code> | <code>string</code> | [Write] medialive:UpdateInputDevice. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateInputSecurityGroup">UpdateInputSecurityGroup</a></code> | <code>string</code> | [Write] medialive:UpdateInputSecurityGroup. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateMultiplex">UpdateMultiplex</a></code> | <code>string</code> | [Write] medialive:UpdateMultiplex. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateMultiplexProgram">UpdateMultiplexProgram</a></code> | <code>string</code> | [Write] medialive:UpdateMultiplexProgram. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateNetwork">UpdateNetwork</a></code> | <code>string</code> | [Write] medialive:UpdateNetwork. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateNode">UpdateNode</a></code> | <code>string</code> | [Write] medialive:UpdateNode. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateNodeState">UpdateNodeState</a></code> | <code>string</code> | [Write] medialive:UpdateNodeState. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateReservation">UpdateReservation</a></code> | <code>string</code> | [Write] medialive:UpdateReservation. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateSdiSource">UpdateSdiSource</a></code> | <code>string</code> | [Write] medialive:UpdateSdiSource. |

---

##### `AcceptInputDeviceTransfer`<sup>Required</sup> <a name="AcceptInputDeviceTransfer" id="@cdk_utils/iam.medialive.MediaLiveActions.property.AcceptInputDeviceTransfer"></a>

```typescript
public readonly AcceptInputDeviceTransfer: string;
```

- *Type:* string

[Write] medialive:AcceptInputDeviceTransfer.

---

##### `actionGetCloudWatchAlarmTemplate`<sup>Required</sup> <a name="actionGetCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetCloudWatchAlarmTemplate"></a>

```typescript
public readonly actionGetCloudWatchAlarmTemplate: string;
```

- *Type:* string

[Read] medialive:GetCloudWatchAlarmTemplate.

---

##### `actionGetCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="actionGetCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly actionGetCloudWatchAlarmTemplateGroup: string;
```

- *Type:* string

[Read] medialive:GetCloudWatchAlarmTemplateGroup.

---

##### `actionGetEventBridgeRuleTemplate`<sup>Required</sup> <a name="actionGetEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetEventBridgeRuleTemplate"></a>

```typescript
public readonly actionGetEventBridgeRuleTemplate: string;
```

- *Type:* string

[Read] medialive:GetEventBridgeRuleTemplate.

---

##### `actionGetEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="actionGetEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly actionGetEventBridgeRuleTemplateGroup: string;
```

- *Type:* string

[Read] medialive:GetEventBridgeRuleTemplateGroup.

---

##### `actionGetSignalMap`<sup>Required</sup> <a name="actionGetSignalMap" id="@cdk_utils/iam.medialive.MediaLiveActions.property.actionGetSignalMap"></a>

```typescript
public readonly actionGetSignalMap: string;
```

- *Type:* string

[Read] medialive:GetSignalMap.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.medialive.MediaLiveActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.medialive.MediaLiveActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.medialive.MediaLiveActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.medialive.MediaLiveActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.medialive.MediaLiveActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDelete`<sup>Required</sup> <a name="BatchDelete" id="@cdk_utils/iam.medialive.MediaLiveActions.property.BatchDelete"></a>

```typescript
public readonly BatchDelete: string;
```

- *Type:* string

[Write] medialive:BatchDelete.

---

##### `BatchStart`<sup>Required</sup> <a name="BatchStart" id="@cdk_utils/iam.medialive.MediaLiveActions.property.BatchStart"></a>

```typescript
public readonly BatchStart: string;
```

- *Type:* string

[Write] medialive:BatchStart.

---

##### `BatchStop`<sup>Required</sup> <a name="BatchStop" id="@cdk_utils/iam.medialive.MediaLiveActions.property.BatchStop"></a>

```typescript
public readonly BatchStop: string;
```

- *Type:* string

[Write] medialive:BatchStop.

---

##### `BatchUpdateSchedule`<sup>Required</sup> <a name="BatchUpdateSchedule" id="@cdk_utils/iam.medialive.MediaLiveActions.property.BatchUpdateSchedule"></a>

```typescript
public readonly BatchUpdateSchedule: string;
```

- *Type:* string

[Write] medialive:BatchUpdateSchedule.

---

##### `CancelInputDeviceTransfer`<sup>Required</sup> <a name="CancelInputDeviceTransfer" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CancelInputDeviceTransfer"></a>

```typescript
public readonly CancelInputDeviceTransfer: string;
```

- *Type:* string

[Write] medialive:CancelInputDeviceTransfer.

---

##### `ClaimDevice`<sup>Required</sup> <a name="ClaimDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ClaimDevice"></a>

```typescript
public readonly ClaimDevice: string;
```

- *Type:* string

[Write] medialive:ClaimDevice.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] medialive:CreateChannel.

---

##### `CreateChannelPlacementGroup`<sup>Required</sup> <a name="CreateChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateChannelPlacementGroup"></a>

```typescript
public readonly CreateChannelPlacementGroup: string;
```

- *Type:* string

[Write] medialive:CreateChannelPlacementGroup.

---

##### `CreateCloudWatchAlarmTemplate`<sup>Required</sup> <a name="CreateCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateCloudWatchAlarmTemplate"></a>

```typescript
public readonly CreateCloudWatchAlarmTemplate: string;
```

- *Type:* string

[Write] medialive:CreateCloudWatchAlarmTemplate.

---

##### `CreateCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="CreateCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly CreateCloudWatchAlarmTemplateGroup: string;
```

- *Type:* string

[Write] medialive:CreateCloudWatchAlarmTemplateGroup.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] medialive:CreateCluster.

---

##### `CreateEventBridgeRuleTemplate`<sup>Required</sup> <a name="CreateEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateEventBridgeRuleTemplate"></a>

```typescript
public readonly CreateEventBridgeRuleTemplate: string;
```

- *Type:* string

[Write] medialive:CreateEventBridgeRuleTemplate.

---

##### `CreateEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="CreateEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly CreateEventBridgeRuleTemplateGroup: string;
```

- *Type:* string

[Write] medialive:CreateEventBridgeRuleTemplateGroup.

---

##### `CreateInput`<sup>Required</sup> <a name="CreateInput" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateInput"></a>

```typescript
public readonly CreateInput: string;
```

- *Type:* string

[Write] medialive:CreateInput.

---

##### `CreateInputSecurityGroup`<sup>Required</sup> <a name="CreateInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateInputSecurityGroup"></a>

```typescript
public readonly CreateInputSecurityGroup: string;
```

- *Type:* string

[Write] medialive:CreateInputSecurityGroup.

---

##### `CreateMultiplex`<sup>Required</sup> <a name="CreateMultiplex" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateMultiplex"></a>

```typescript
public readonly CreateMultiplex: string;
```

- *Type:* string

[Write] medialive:CreateMultiplex.

---

##### `CreateMultiplexProgram`<sup>Required</sup> <a name="CreateMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateMultiplexProgram"></a>

```typescript
public readonly CreateMultiplexProgram: string;
```

- *Type:* string

[Write] medialive:CreateMultiplexProgram.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string;
```

- *Type:* string

[Write] medialive:CreateNetwork.

---

##### `CreateNode`<sup>Required</sup> <a name="CreateNode" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateNode"></a>

```typescript
public readonly CreateNode: string;
```

- *Type:* string

[Write] medialive:CreateNode.

---

##### `CreateNodeRegistrationScript`<sup>Required</sup> <a name="CreateNodeRegistrationScript" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateNodeRegistrationScript"></a>

```typescript
public readonly CreateNodeRegistrationScript: string;
```

- *Type:* string

[Write] medialive:CreateNodeRegistrationScript.

---

##### `CreatePartnerInput`<sup>Required</sup> <a name="CreatePartnerInput" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreatePartnerInput"></a>

```typescript
public readonly CreatePartnerInput: string;
```

- *Type:* string

[Write] medialive:CreatePartnerInput.

---

##### `CreateSdiSource`<sup>Required</sup> <a name="CreateSdiSource" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateSdiSource"></a>

```typescript
public readonly CreateSdiSource: string;
```

- *Type:* string

[Write] medialive:CreateSdiSource.

---

##### `CreateSignalMap`<sup>Required</sup> <a name="CreateSignalMap" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateSignalMap"></a>

```typescript
public readonly CreateSignalMap: string;
```

- *Type:* string

[Write] medialive:CreateSignalMap.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.medialive.MediaLiveActions.property.CreateTags"></a>

```typescript
public readonly CreateTags: string;
```

- *Type:* string

[Tagging] medialive:CreateTags.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] medialive:DeleteChannel.

---

##### `DeleteChannelPlacementGroup`<sup>Required</sup> <a name="DeleteChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteChannelPlacementGroup"></a>

```typescript
public readonly DeleteChannelPlacementGroup: string;
```

- *Type:* string

[Write] medialive:DeleteChannelPlacementGroup.

---

##### `DeleteCloudWatchAlarmTemplate`<sup>Required</sup> <a name="DeleteCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteCloudWatchAlarmTemplate"></a>

```typescript
public readonly DeleteCloudWatchAlarmTemplate: string;
```

- *Type:* string

[Write] medialive:DeleteCloudWatchAlarmTemplate.

---

##### `DeleteCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="DeleteCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly DeleteCloudWatchAlarmTemplateGroup: string;
```

- *Type:* string

[Write] medialive:DeleteCloudWatchAlarmTemplateGroup.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] medialive:DeleteCluster.

---

##### `DeleteEventBridgeRuleTemplate`<sup>Required</sup> <a name="DeleteEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteEventBridgeRuleTemplate"></a>

```typescript
public readonly DeleteEventBridgeRuleTemplate: string;
```

- *Type:* string

[Write] medialive:DeleteEventBridgeRuleTemplate.

---

##### `DeleteEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="DeleteEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly DeleteEventBridgeRuleTemplateGroup: string;
```

- *Type:* string

[Write] medialive:DeleteEventBridgeRuleTemplateGroup.

---

##### `DeleteInput`<sup>Required</sup> <a name="DeleteInput" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteInput"></a>

```typescript
public readonly DeleteInput: string;
```

- *Type:* string

[Write] medialive:DeleteInput.

---

##### `DeleteInputSecurityGroup`<sup>Required</sup> <a name="DeleteInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteInputSecurityGroup"></a>

```typescript
public readonly DeleteInputSecurityGroup: string;
```

- *Type:* string

[Write] medialive:DeleteInputSecurityGroup.

---

##### `DeleteMultiplex`<sup>Required</sup> <a name="DeleteMultiplex" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteMultiplex"></a>

```typescript
public readonly DeleteMultiplex: string;
```

- *Type:* string

[Write] medialive:DeleteMultiplex.

---

##### `DeleteMultiplexProgram`<sup>Required</sup> <a name="DeleteMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteMultiplexProgram"></a>

```typescript
public readonly DeleteMultiplexProgram: string;
```

- *Type:* string

[Write] medialive:DeleteMultiplexProgram.

---

##### `DeleteNetwork`<sup>Required</sup> <a name="DeleteNetwork" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteNetwork"></a>

```typescript
public readonly DeleteNetwork: string;
```

- *Type:* string

[Write] medialive:DeleteNetwork.

---

##### `DeleteNode`<sup>Required</sup> <a name="DeleteNode" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteNode"></a>

```typescript
public readonly DeleteNode: string;
```

- *Type:* string

[Write] medialive:DeleteNode.

---

##### `DeleteReservation`<sup>Required</sup> <a name="DeleteReservation" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteReservation"></a>

```typescript
public readonly DeleteReservation: string;
```

- *Type:* string

[Write] medialive:DeleteReservation.

---

##### `DeleteSchedule`<sup>Required</sup> <a name="DeleteSchedule" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteSchedule"></a>

```typescript
public readonly DeleteSchedule: string;
```

- *Type:* string

[Write] medialive:DeleteSchedule.

---

##### `DeleteSdiSource`<sup>Required</sup> <a name="DeleteSdiSource" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteSdiSource"></a>

```typescript
public readonly DeleteSdiSource: string;
```

- *Type:* string

[Write] medialive:DeleteSdiSource.

---

##### `DeleteSignalMap`<sup>Required</sup> <a name="DeleteSignalMap" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteSignalMap"></a>

```typescript
public readonly DeleteSignalMap: string;
```

- *Type:* string

[Write] medialive:DeleteSignalMap.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] medialive:DeleteTags.

---

##### `DescribeAccountConfiguration`<sup>Required</sup> <a name="DescribeAccountConfiguration" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeAccountConfiguration"></a>

```typescript
public readonly DescribeAccountConfiguration: string;
```

- *Type:* string

[Read] medialive:DescribeAccountConfiguration.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string;
```

- *Type:* string

[Read] medialive:DescribeChannel.

---

##### `DescribeChannelPlacementGroup`<sup>Required</sup> <a name="DescribeChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeChannelPlacementGroup"></a>

```typescript
public readonly DescribeChannelPlacementGroup: string;
```

- *Type:* string

[Read] medialive:DescribeChannelPlacementGroup.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[Read] medialive:DescribeCluster.

---

##### `DescribeInput`<sup>Required</sup> <a name="DescribeInput" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInput"></a>

```typescript
public readonly DescribeInput: string;
```

- *Type:* string

[Read] medialive:DescribeInput.

---

##### `DescribeInputDevice`<sup>Required</sup> <a name="DescribeInputDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInputDevice"></a>

```typescript
public readonly DescribeInputDevice: string;
```

- *Type:* string

[Read] medialive:DescribeInputDevice.

---

##### `DescribeInputDeviceThumbnail`<sup>Required</sup> <a name="DescribeInputDeviceThumbnail" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInputDeviceThumbnail"></a>

```typescript
public readonly DescribeInputDeviceThumbnail: string;
```

- *Type:* string

[Read] medialive:DescribeInputDeviceThumbnail.

---

##### `DescribeInputSecurityGroup`<sup>Required</sup> <a name="DescribeInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeInputSecurityGroup"></a>

```typescript
public readonly DescribeInputSecurityGroup: string;
```

- *Type:* string

[Read] medialive:DescribeInputSecurityGroup.

---

##### `DescribeMultiplex`<sup>Required</sup> <a name="DescribeMultiplex" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeMultiplex"></a>

```typescript
public readonly DescribeMultiplex: string;
```

- *Type:* string

[Read] medialive:DescribeMultiplex.

---

##### `DescribeMultiplexProgram`<sup>Required</sup> <a name="DescribeMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeMultiplexProgram"></a>

```typescript
public readonly DescribeMultiplexProgram: string;
```

- *Type:* string

[Read] medialive:DescribeMultiplexProgram.

---

##### `DescribeNetwork`<sup>Required</sup> <a name="DescribeNetwork" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeNetwork"></a>

```typescript
public readonly DescribeNetwork: string;
```

- *Type:* string

[Read] medialive:DescribeNetwork.

---

##### `DescribeNode`<sup>Required</sup> <a name="DescribeNode" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeNode"></a>

```typescript
public readonly DescribeNode: string;
```

- *Type:* string

[Read] medialive:DescribeNode.

---

##### `DescribeOffering`<sup>Required</sup> <a name="DescribeOffering" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeOffering"></a>

```typescript
public readonly DescribeOffering: string;
```

- *Type:* string

[Read] medialive:DescribeOffering.

---

##### `DescribeReservation`<sup>Required</sup> <a name="DescribeReservation" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeReservation"></a>

```typescript
public readonly DescribeReservation: string;
```

- *Type:* string

[Read] medialive:DescribeReservation.

---

##### `DescribeSchedule`<sup>Required</sup> <a name="DescribeSchedule" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeSchedule"></a>

```typescript
public readonly DescribeSchedule: string;
```

- *Type:* string

[Read] medialive:DescribeSchedule.

---

##### `DescribeSdiSource`<sup>Required</sup> <a name="DescribeSdiSource" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeSdiSource"></a>

```typescript
public readonly DescribeSdiSource: string;
```

- *Type:* string

[Read] medialive:DescribeSdiSource.

---

##### `DescribeThumbnails`<sup>Required</sup> <a name="DescribeThumbnails" id="@cdk_utils/iam.medialive.MediaLiveActions.property.DescribeThumbnails"></a>

```typescript
public readonly DescribeThumbnails: string;
```

- *Type:* string

[Read] medialive:DescribeThumbnails.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string;
```

- *Type:* string

[List] medialive:ListAlerts.

---

##### `ListChannelPlacementGroups`<sup>Required</sup> <a name="ListChannelPlacementGroups" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListChannelPlacementGroups"></a>

```typescript
public readonly ListChannelPlacementGroups: string;
```

- *Type:* string

[List] medialive:ListChannelPlacementGroups.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[List] medialive:ListChannels.

---

##### `ListCloudWatchAlarmTemplateGroups`<sup>Required</sup> <a name="ListCloudWatchAlarmTemplateGroups" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListCloudWatchAlarmTemplateGroups"></a>

```typescript
public readonly ListCloudWatchAlarmTemplateGroups: string;
```

- *Type:* string

[List] medialive:ListCloudWatchAlarmTemplateGroups.

---

##### `ListCloudWatchAlarmTemplates`<sup>Required</sup> <a name="ListCloudWatchAlarmTemplates" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListCloudWatchAlarmTemplates"></a>

```typescript
public readonly ListCloudWatchAlarmTemplates: string;
```

- *Type:* string

[List] medialive:ListCloudWatchAlarmTemplates.

---

##### `ListClusterAlerts`<sup>Required</sup> <a name="ListClusterAlerts" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListClusterAlerts"></a>

```typescript
public readonly ListClusterAlerts: string;
```

- *Type:* string

[List] medialive:ListClusterAlerts.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[List] medialive:ListClusters.

---

##### `ListEventBridgeRuleTemplateGroups`<sup>Required</sup> <a name="ListEventBridgeRuleTemplateGroups" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListEventBridgeRuleTemplateGroups"></a>

```typescript
public readonly ListEventBridgeRuleTemplateGroups: string;
```

- *Type:* string

[List] medialive:ListEventBridgeRuleTemplateGroups.

---

##### `ListEventBridgeRuleTemplates`<sup>Required</sup> <a name="ListEventBridgeRuleTemplates" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListEventBridgeRuleTemplates"></a>

```typescript
public readonly ListEventBridgeRuleTemplates: string;
```

- *Type:* string

[List] medialive:ListEventBridgeRuleTemplates.

---

##### `ListInputDevices`<sup>Required</sup> <a name="ListInputDevices" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputDevices"></a>

```typescript
public readonly ListInputDevices: string;
```

- *Type:* string

[List] medialive:ListInputDevices.

---

##### `ListInputDeviceTransfers`<sup>Required</sup> <a name="ListInputDeviceTransfers" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputDeviceTransfers"></a>

```typescript
public readonly ListInputDeviceTransfers: string;
```

- *Type:* string

[List] medialive:ListInputDeviceTransfers.

---

##### `ListInputs`<sup>Required</sup> <a name="ListInputs" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputs"></a>

```typescript
public readonly ListInputs: string;
```

- *Type:* string

[List] medialive:ListInputs.

---

##### `ListInputSecurityGroups`<sup>Required</sup> <a name="ListInputSecurityGroups" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListInputSecurityGroups"></a>

```typescript
public readonly ListInputSecurityGroups: string;
```

- *Type:* string

[List] medialive:ListInputSecurityGroups.

---

##### `ListMultiplexAlerts`<sup>Required</sup> <a name="ListMultiplexAlerts" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListMultiplexAlerts"></a>

```typescript
public readonly ListMultiplexAlerts: string;
```

- *Type:* string

[List] medialive:ListMultiplexAlerts.

---

##### `ListMultiplexes`<sup>Required</sup> <a name="ListMultiplexes" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListMultiplexes"></a>

```typescript
public readonly ListMultiplexes: string;
```

- *Type:* string

[List] medialive:ListMultiplexes.

---

##### `ListMultiplexPrograms`<sup>Required</sup> <a name="ListMultiplexPrograms" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListMultiplexPrograms"></a>

```typescript
public readonly ListMultiplexPrograms: string;
```

- *Type:* string

[List] medialive:ListMultiplexPrograms.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string;
```

- *Type:* string

[List] medialive:ListNetworks.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListNodes"></a>

```typescript
public readonly ListNodes: string;
```

- *Type:* string

[List] medialive:ListNodes.

---

##### `ListOfferings`<sup>Required</sup> <a name="ListOfferings" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListOfferings"></a>

```typescript
public readonly ListOfferings: string;
```

- *Type:* string

[List] medialive:ListOfferings.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListReservations"></a>

```typescript
public readonly ListReservations: string;
```

- *Type:* string

[List] medialive:ListReservations.

---

##### `ListSdiSources`<sup>Required</sup> <a name="ListSdiSources" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListSdiSources"></a>

```typescript
public readonly ListSdiSources: string;
```

- *Type:* string

[List] medialive:ListSdiSources.

---

##### `ListSignalMaps`<sup>Required</sup> <a name="ListSignalMaps" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListSignalMaps"></a>

```typescript
public readonly ListSignalMaps: string;
```

- *Type:* string

[List] medialive:ListSignalMaps.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] medialive:ListTagsForResource.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.medialive.MediaLiveActions.property.ListVersions"></a>

```typescript
public readonly ListVersions: string;
```

- *Type:* string

[List] medialive:ListVersions.

---

##### `PollAnywhere`<sup>Required</sup> <a name="PollAnywhere" id="@cdk_utils/iam.medialive.MediaLiveActions.property.PollAnywhere"></a>

```typescript
public readonly PollAnywhere: string;
```

- *Type:* string

[Write] medialive:PollAnywhere.

---

##### `PurchaseOffering`<sup>Required</sup> <a name="PurchaseOffering" id="@cdk_utils/iam.medialive.MediaLiveActions.property.PurchaseOffering"></a>

```typescript
public readonly PurchaseOffering: string;
```

- *Type:* string

[Write] medialive:PurchaseOffering.

---

##### `RebootInputDevice`<sup>Required</sup> <a name="RebootInputDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.RebootInputDevice"></a>

```typescript
public readonly RebootInputDevice: string;
```

- *Type:* string

[Write] medialive:RebootInputDevice.

---

##### `RejectInputDeviceTransfer`<sup>Required</sup> <a name="RejectInputDeviceTransfer" id="@cdk_utils/iam.medialive.MediaLiveActions.property.RejectInputDeviceTransfer"></a>

```typescript
public readonly RejectInputDeviceTransfer: string;
```

- *Type:* string

[Write] medialive:RejectInputDeviceTransfer.

---

##### `RestartChannelPipelines`<sup>Required</sup> <a name="RestartChannelPipelines" id="@cdk_utils/iam.medialive.MediaLiveActions.property.RestartChannelPipelines"></a>

```typescript
public readonly RestartChannelPipelines: string;
```

- *Type:* string

[Write] medialive:RestartChannelPipelines.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.medialive.MediaLiveActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartChannel`<sup>Required</sup> <a name="StartChannel" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartChannel"></a>

```typescript
public readonly StartChannel: string;
```

- *Type:* string

[Write] medialive:StartChannel.

---

##### `StartDeleteMonitorDeployment`<sup>Required</sup> <a name="StartDeleteMonitorDeployment" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartDeleteMonitorDeployment"></a>

```typescript
public readonly StartDeleteMonitorDeployment: string;
```

- *Type:* string

[Write] medialive:StartDeleteMonitorDeployment.

---

##### `StartInputDevice`<sup>Required</sup> <a name="StartInputDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartInputDevice"></a>

```typescript
public readonly StartInputDevice: string;
```

- *Type:* string

[Write] medialive:StartInputDevice.

---

##### `StartInputDeviceMaintenanceWindow`<sup>Required</sup> <a name="StartInputDeviceMaintenanceWindow" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartInputDeviceMaintenanceWindow"></a>

```typescript
public readonly StartInputDeviceMaintenanceWindow: string;
```

- *Type:* string

[Write] medialive:StartInputDeviceMaintenanceWindow.

---

##### `StartMonitorDeployment`<sup>Required</sup> <a name="StartMonitorDeployment" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartMonitorDeployment"></a>

```typescript
public readonly StartMonitorDeployment: string;
```

- *Type:* string

[Write] medialive:StartMonitorDeployment.

---

##### `StartMultiplex`<sup>Required</sup> <a name="StartMultiplex" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartMultiplex"></a>

```typescript
public readonly StartMultiplex: string;
```

- *Type:* string

[Write] medialive:StartMultiplex.

---

##### `StartUpdateSignalMap`<sup>Required</sup> <a name="StartUpdateSignalMap" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StartUpdateSignalMap"></a>

```typescript
public readonly StartUpdateSignalMap: string;
```

- *Type:* string

[Write] medialive:StartUpdateSignalMap.

---

##### `StopChannel`<sup>Required</sup> <a name="StopChannel" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StopChannel"></a>

```typescript
public readonly StopChannel: string;
```

- *Type:* string

[Write] medialive:StopChannel.

---

##### `StopInputDevice`<sup>Required</sup> <a name="StopInputDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StopInputDevice"></a>

```typescript
public readonly StopInputDevice: string;
```

- *Type:* string

[Write] medialive:StopInputDevice.

---

##### `StopMultiplex`<sup>Required</sup> <a name="StopMultiplex" id="@cdk_utils/iam.medialive.MediaLiveActions.property.StopMultiplex"></a>

```typescript
public readonly StopMultiplex: string;
```

- *Type:* string

[Write] medialive:StopMultiplex.

---

##### `SubmitAnywhereStateChange`<sup>Required</sup> <a name="SubmitAnywhereStateChange" id="@cdk_utils/iam.medialive.MediaLiveActions.property.SubmitAnywhereStateChange"></a>

```typescript
public readonly SubmitAnywhereStateChange: string;
```

- *Type:* string

[Write] medialive:SubmitAnywhereStateChange.

---

##### `TransferInputDevice`<sup>Required</sup> <a name="TransferInputDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.TransferInputDevice"></a>

```typescript
public readonly TransferInputDevice: string;
```

- *Type:* string

[Write] medialive:TransferInputDevice.

---

##### `UpdateAccountConfiguration`<sup>Required</sup> <a name="UpdateAccountConfiguration" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateAccountConfiguration"></a>

```typescript
public readonly UpdateAccountConfiguration: string;
```

- *Type:* string

[Write] medialive:UpdateAccountConfiguration.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] medialive:UpdateChannel.

---

##### `UpdateChannelClass`<sup>Required</sup> <a name="UpdateChannelClass" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateChannelClass"></a>

```typescript
public readonly UpdateChannelClass: string;
```

- *Type:* string

[Write] medialive:UpdateChannelClass.

---

##### `UpdateChannelPlacementGroup`<sup>Required</sup> <a name="UpdateChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateChannelPlacementGroup"></a>

```typescript
public readonly UpdateChannelPlacementGroup: string;
```

- *Type:* string

[Write] medialive:UpdateChannelPlacementGroup.

---

##### `UpdateCloudWatchAlarmTemplate`<sup>Required</sup> <a name="UpdateCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateCloudWatchAlarmTemplate"></a>

```typescript
public readonly UpdateCloudWatchAlarmTemplate: string;
```

- *Type:* string

[Write] medialive:UpdateCloudWatchAlarmTemplate.

---

##### `UpdateCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="UpdateCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly UpdateCloudWatchAlarmTemplateGroup: string;
```

- *Type:* string

[Write] medialive:UpdateCloudWatchAlarmTemplateGroup.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] medialive:UpdateCluster.

---

##### `UpdateEventBridgeRuleTemplate`<sup>Required</sup> <a name="UpdateEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateEventBridgeRuleTemplate"></a>

```typescript
public readonly UpdateEventBridgeRuleTemplate: string;
```

- *Type:* string

[Write] medialive:UpdateEventBridgeRuleTemplate.

---

##### `UpdateEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="UpdateEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly UpdateEventBridgeRuleTemplateGroup: string;
```

- *Type:* string

[Write] medialive:UpdateEventBridgeRuleTemplateGroup.

---

##### `UpdateInput`<sup>Required</sup> <a name="UpdateInput" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateInput"></a>

```typescript
public readonly UpdateInput: string;
```

- *Type:* string

[Write] medialive:UpdateInput.

---

##### `UpdateInputDevice`<sup>Required</sup> <a name="UpdateInputDevice" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateInputDevice"></a>

```typescript
public readonly UpdateInputDevice: string;
```

- *Type:* string

[Write] medialive:UpdateInputDevice.

---

##### `UpdateInputSecurityGroup`<sup>Required</sup> <a name="UpdateInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateInputSecurityGroup"></a>

```typescript
public readonly UpdateInputSecurityGroup: string;
```

- *Type:* string

[Write] medialive:UpdateInputSecurityGroup.

---

##### `UpdateMultiplex`<sup>Required</sup> <a name="UpdateMultiplex" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateMultiplex"></a>

```typescript
public readonly UpdateMultiplex: string;
```

- *Type:* string

[Write] medialive:UpdateMultiplex.

---

##### `UpdateMultiplexProgram`<sup>Required</sup> <a name="UpdateMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateMultiplexProgram"></a>

```typescript
public readonly UpdateMultiplexProgram: string;
```

- *Type:* string

[Write] medialive:UpdateMultiplexProgram.

---

##### `UpdateNetwork`<sup>Required</sup> <a name="UpdateNetwork" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateNetwork"></a>

```typescript
public readonly UpdateNetwork: string;
```

- *Type:* string

[Write] medialive:UpdateNetwork.

---

##### `UpdateNode`<sup>Required</sup> <a name="UpdateNode" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateNode"></a>

```typescript
public readonly UpdateNode: string;
```

- *Type:* string

[Write] medialive:UpdateNode.

---

##### `UpdateNodeState`<sup>Required</sup> <a name="UpdateNodeState" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateNodeState"></a>

```typescript
public readonly UpdateNodeState: string;
```

- *Type:* string

[Write] medialive:UpdateNodeState.

---

##### `UpdateReservation`<sup>Required</sup> <a name="UpdateReservation" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateReservation"></a>

```typescript
public readonly UpdateReservation: string;
```

- *Type:* string

[Write] medialive:UpdateReservation.

---

##### `UpdateSdiSource`<sup>Required</sup> <a name="UpdateSdiSource" id="@cdk_utils/iam.medialive.MediaLiveActions.property.UpdateSdiSource"></a>

```typescript
public readonly UpdateSdiSource: string;
```

- *Type:* string

[Write] medialive:UpdateSdiSource.

---

### MediaLiveConditions <a name="MediaLiveConditions" id="@cdk_utils/iam.medialive.MediaLiveConditions"></a>

Condition key constants and builders for medialive.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medialive.MediaLiveConditions.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

new medialive.MediaLiveConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.medialive.MediaLiveConditions.requestTag"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.medialive.MediaLiveConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.medialive.MediaLiveConditions.resourceTag"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.medialive.MediaLiveConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.tagKeys"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.medialive.MediaLiveConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateChannelPlacementGroupConditionKeys">CreateChannelPlacementGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannelPlacementGroup action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateCloudWatchAlarmTemplateConditionKeys">CreateCloudWatchAlarmTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudWatchAlarmTemplate action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateCloudWatchAlarmTemplateGroupConditionKeys">CreateCloudWatchAlarmTemplateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCloudWatchAlarmTemplateGroup action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateEventBridgeRuleTemplateConditionKeys">CreateEventBridgeRuleTemplateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventBridgeRuleTemplate action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateEventBridgeRuleTemplateGroupConditionKeys">CreateEventBridgeRuleTemplateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEventBridgeRuleTemplateGroup action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateInputConditionKeys">CreateInputConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInput action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateInputSecurityGroupConditionKeys">CreateInputSecurityGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInputSecurityGroup action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateMultiplexConditionKeys">CreateMultiplexConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMultiplex action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateNetworkConditionKeys">CreateNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNetwork action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateNodeConditionKeys">CreateNodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNode action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreatePartnerInputConditionKeys">CreatePartnerInputConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePartnerInput action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateSdiSourceConditionKeys">CreateSdiSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSdiSource action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateSignalMapConditionKeys">CreateSignalMapConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSignalMap action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateTagsConditionKeys">CreateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTags action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.PurchaseOfferingConditionKeys">PurchaseOfferingConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PurchaseOffering action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateChannelPlacementGroupConditionKeys">UpdateChannelPlacementGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateChannelPlacementGroup action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateClusterConditionKeys">UpdateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCluster action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateInputSecurityGroupConditionKeys">UpdateInputSecurityGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInputSecurityGroup action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateNetworkConditionKeys">UpdateNetworkConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNetwork action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateNodeConditionKeys">UpdateNodeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNode action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateNodeStateConditionKeys">UpdateNodeStateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNodeState action. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateSdiSourceConditionKeys">UpdateSdiSourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSdiSource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateChannelPlacementGroupConditionKeys`<sup>Required</sup> <a name="CreateChannelPlacementGroupConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateChannelPlacementGroupConditionKeys"></a>

```typescript
public readonly CreateChannelPlacementGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannelPlacementGroup action.

---

##### `CreateCloudWatchAlarmTemplateConditionKeys`<sup>Required</sup> <a name="CreateCloudWatchAlarmTemplateConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateCloudWatchAlarmTemplateConditionKeys"></a>

```typescript
public readonly CreateCloudWatchAlarmTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudWatchAlarmTemplate action.

---

##### `CreateCloudWatchAlarmTemplateGroupConditionKeys`<sup>Required</sup> <a name="CreateCloudWatchAlarmTemplateGroupConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateCloudWatchAlarmTemplateGroupConditionKeys"></a>

```typescript
public readonly CreateCloudWatchAlarmTemplateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCloudWatchAlarmTemplateGroup action.

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateEventBridgeRuleTemplateConditionKeys`<sup>Required</sup> <a name="CreateEventBridgeRuleTemplateConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateEventBridgeRuleTemplateConditionKeys"></a>

```typescript
public readonly CreateEventBridgeRuleTemplateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventBridgeRuleTemplate action.

---

##### `CreateEventBridgeRuleTemplateGroupConditionKeys`<sup>Required</sup> <a name="CreateEventBridgeRuleTemplateGroupConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateEventBridgeRuleTemplateGroupConditionKeys"></a>

```typescript
public readonly CreateEventBridgeRuleTemplateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEventBridgeRuleTemplateGroup action.

---

##### `CreateInputConditionKeys`<sup>Required</sup> <a name="CreateInputConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateInputConditionKeys"></a>

```typescript
public readonly CreateInputConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInput action.

---

##### `CreateInputSecurityGroupConditionKeys`<sup>Required</sup> <a name="CreateInputSecurityGroupConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateInputSecurityGroupConditionKeys"></a>

```typescript
public readonly CreateInputSecurityGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInputSecurityGroup action.

---

##### `CreateMultiplexConditionKeys`<sup>Required</sup> <a name="CreateMultiplexConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateMultiplexConditionKeys"></a>

```typescript
public readonly CreateMultiplexConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMultiplex action.

---

##### `CreateNetworkConditionKeys`<sup>Required</sup> <a name="CreateNetworkConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateNetworkConditionKeys"></a>

```typescript
public readonly CreateNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNetwork action.

---

##### `CreateNodeConditionKeys`<sup>Required</sup> <a name="CreateNodeConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateNodeConditionKeys"></a>

```typescript
public readonly CreateNodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNode action.

---

##### `CreatePartnerInputConditionKeys`<sup>Required</sup> <a name="CreatePartnerInputConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreatePartnerInputConditionKeys"></a>

```typescript
public readonly CreatePartnerInputConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePartnerInput action.

---

##### `CreateSdiSourceConditionKeys`<sup>Required</sup> <a name="CreateSdiSourceConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateSdiSourceConditionKeys"></a>

```typescript
public readonly CreateSdiSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSdiSource action.

---

##### `CreateSignalMapConditionKeys`<sup>Required</sup> <a name="CreateSignalMapConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateSignalMapConditionKeys"></a>

```typescript
public readonly CreateSignalMapConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSignalMap action.

---

##### `CreateTagsConditionKeys`<sup>Required</sup> <a name="CreateTagsConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.CreateTagsConditionKeys"></a>

```typescript
public readonly CreateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTags action.

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

##### `PurchaseOfferingConditionKeys`<sup>Required</sup> <a name="PurchaseOfferingConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.PurchaseOfferingConditionKeys"></a>

```typescript
public readonly PurchaseOfferingConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PurchaseOffering action.

---

##### `UpdateChannelPlacementGroupConditionKeys`<sup>Required</sup> <a name="UpdateChannelPlacementGroupConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateChannelPlacementGroupConditionKeys"></a>

```typescript
public readonly UpdateChannelPlacementGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateChannelPlacementGroup action.

---

##### `UpdateClusterConditionKeys`<sup>Required</sup> <a name="UpdateClusterConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateClusterConditionKeys"></a>

```typescript
public readonly UpdateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCluster action.

---

##### `UpdateInputSecurityGroupConditionKeys`<sup>Required</sup> <a name="UpdateInputSecurityGroupConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateInputSecurityGroupConditionKeys"></a>

```typescript
public readonly UpdateInputSecurityGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInputSecurityGroup action.

---

##### `UpdateNetworkConditionKeys`<sup>Required</sup> <a name="UpdateNetworkConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateNetworkConditionKeys"></a>

```typescript
public readonly UpdateNetworkConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNetwork action.

---

##### `UpdateNodeConditionKeys`<sup>Required</sup> <a name="UpdateNodeConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateNodeConditionKeys"></a>

```typescript
public readonly UpdateNodeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNode action.

---

##### `UpdateNodeStateConditionKeys`<sup>Required</sup> <a name="UpdateNodeStateConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateNodeStateConditionKeys"></a>

```typescript
public readonly UpdateNodeStateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNodeState action.

---

##### `UpdateSdiSourceConditionKeys`<sup>Required</sup> <a name="UpdateSdiSourceConditionKeys" id="@cdk_utils/iam.medialive.MediaLiveConditions.property.UpdateSdiSourceConditionKeys"></a>

```typescript
public readonly UpdateSdiSourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSdiSource action.

---

### MediaLiveOperations <a name="MediaLiveOperations" id="@cdk_utils/iam.medialive.MediaLiveOperations"></a>

API operation to required IAM actions mapping for medialive.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medialive.MediaLiveOperations.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

new medialive.MediaLiveOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.AcceptInputDeviceTransfer">AcceptInputDeviceTransfer</a></code> | <code>string[]</code> | IAM actions required for the AcceptInputDeviceTransfer API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchDelete">BatchDelete</a></code> | <code>string[]</code> | IAM actions required for the BatchDelete API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchStart">BatchStart</a></code> | <code>string[]</code> | IAM actions required for the BatchStart API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchStop">BatchStop</a></code> | <code>string[]</code> | IAM actions required for the BatchStop API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchUpdateSchedule">BatchUpdateSchedule</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateSchedule API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CancelInputDeviceTransfer">CancelInputDeviceTransfer</a></code> | <code>string[]</code> | IAM actions required for the CancelInputDeviceTransfer API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ClaimDevice">ClaimDevice</a></code> | <code>string[]</code> | IAM actions required for the ClaimDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateChannelPlacementGroup">CreateChannelPlacementGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateChannelPlacementGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateCloudWatchAlarmTemplate">CreateCloudWatchAlarmTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudWatchAlarmTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateCloudWatchAlarmTemplateGroup">CreateCloudWatchAlarmTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateCloudWatchAlarmTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateEventBridgeRuleTemplate">CreateEventBridgeRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateEventBridgeRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateEventBridgeRuleTemplateGroup">CreateEventBridgeRuleTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateEventBridgeRuleTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateInput">CreateInput</a></code> | <code>string[]</code> | IAM actions required for the CreateInput API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateInputSecurityGroup">CreateInputSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateInputSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateMultiplex">CreateMultiplex</a></code> | <code>string[]</code> | IAM actions required for the CreateMultiplex API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateMultiplexProgram">CreateMultiplexProgram</a></code> | <code>string[]</code> | IAM actions required for the CreateMultiplexProgram API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateNetwork">CreateNetwork</a></code> | <code>string[]</code> | IAM actions required for the CreateNetwork API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateNode">CreateNode</a></code> | <code>string[]</code> | IAM actions required for the CreateNode API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateNodeRegistrationScript">CreateNodeRegistrationScript</a></code> | <code>string[]</code> | IAM actions required for the CreateNodeRegistrationScript API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreatePartnerInput">CreatePartnerInput</a></code> | <code>string[]</code> | IAM actions required for the CreatePartnerInput API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateSdiSource">CreateSdiSource</a></code> | <code>string[]</code> | IAM actions required for the CreateSdiSource API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateSignalMap">CreateSignalMap</a></code> | <code>string[]</code> | IAM actions required for the CreateSignalMap API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateTags">CreateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateTags API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteChannelPlacementGroup">DeleteChannelPlacementGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannelPlacementGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteCloudWatchAlarmTemplate">DeleteCloudWatchAlarmTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudWatchAlarmTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteCloudWatchAlarmTemplateGroup">DeleteCloudWatchAlarmTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteCloudWatchAlarmTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteEventBridgeRuleTemplate">DeleteEventBridgeRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventBridgeRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteEventBridgeRuleTemplateGroup">DeleteEventBridgeRuleTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteEventBridgeRuleTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteInput">DeleteInput</a></code> | <code>string[]</code> | IAM actions required for the DeleteInput API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteInputSecurityGroup">DeleteInputSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteInputSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteMultiplex">DeleteMultiplex</a></code> | <code>string[]</code> | IAM actions required for the DeleteMultiplex API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteMultiplexProgram">DeleteMultiplexProgram</a></code> | <code>string[]</code> | IAM actions required for the DeleteMultiplexProgram API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteNetwork">DeleteNetwork</a></code> | <code>string[]</code> | IAM actions required for the DeleteNetwork API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteNode">DeleteNode</a></code> | <code>string[]</code> | IAM actions required for the DeleteNode API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteReservation">DeleteReservation</a></code> | <code>string[]</code> | IAM actions required for the DeleteReservation API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteSchedule">DeleteSchedule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSchedule API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteSdiSource">DeleteSdiSource</a></code> | <code>string[]</code> | IAM actions required for the DeleteSdiSource API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteSignalMap">DeleteSignalMap</a></code> | <code>string[]</code> | IAM actions required for the DeleteSignalMap API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeAccountConfiguration">DescribeAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeChannel">DescribeChannel</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannel API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeChannelPlacementGroup">DescribeChannelPlacementGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannelPlacementGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeCluster">DescribeCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeCluster API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInput">DescribeInput</a></code> | <code>string[]</code> | IAM actions required for the DescribeInput API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInputDevice">DescribeInputDevice</a></code> | <code>string[]</code> | IAM actions required for the DescribeInputDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInputDeviceThumbnail">DescribeInputDeviceThumbnail</a></code> | <code>string[]</code> | IAM actions required for the DescribeInputDeviceThumbnail API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInputSecurityGroup">DescribeInputSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeInputSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeMultiplex">DescribeMultiplex</a></code> | <code>string[]</code> | IAM actions required for the DescribeMultiplex API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeMultiplexProgram">DescribeMultiplexProgram</a></code> | <code>string[]</code> | IAM actions required for the DescribeMultiplexProgram API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeNetwork">DescribeNetwork</a></code> | <code>string[]</code> | IAM actions required for the DescribeNetwork API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeNode">DescribeNode</a></code> | <code>string[]</code> | IAM actions required for the DescribeNode API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeOffering">DescribeOffering</a></code> | <code>string[]</code> | IAM actions required for the DescribeOffering API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeReservation">DescribeReservation</a></code> | <code>string[]</code> | IAM actions required for the DescribeReservation API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeSchedule">DescribeSchedule</a></code> | <code>string[]</code> | IAM actions required for the DescribeSchedule API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeSdiSource">DescribeSdiSource</a></code> | <code>string[]</code> | IAM actions required for the DescribeSdiSource API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeThumbnails">DescribeThumbnails</a></code> | <code>string[]</code> | IAM actions required for the DescribeThumbnails API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListAlerts">ListAlerts</a></code> | <code>string[]</code> | IAM actions required for the ListAlerts API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListChannelPlacementGroups">ListChannelPlacementGroups</a></code> | <code>string[]</code> | IAM actions required for the ListChannelPlacementGroups API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListCloudWatchAlarmTemplateGroups">ListCloudWatchAlarmTemplateGroups</a></code> | <code>string[]</code> | IAM actions required for the ListCloudWatchAlarmTemplateGroups API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListCloudWatchAlarmTemplates">ListCloudWatchAlarmTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListCloudWatchAlarmTemplates API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListClusterAlerts">ListClusterAlerts</a></code> | <code>string[]</code> | IAM actions required for the ListClusterAlerts API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListEventBridgeRuleTemplateGroups">ListEventBridgeRuleTemplateGroups</a></code> | <code>string[]</code> | IAM actions required for the ListEventBridgeRuleTemplateGroups API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListEventBridgeRuleTemplates">ListEventBridgeRuleTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListEventBridgeRuleTemplates API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputDevices">ListInputDevices</a></code> | <code>string[]</code> | IAM actions required for the ListInputDevices API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputDeviceTransfers">ListInputDeviceTransfers</a></code> | <code>string[]</code> | IAM actions required for the ListInputDeviceTransfers API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputs">ListInputs</a></code> | <code>string[]</code> | IAM actions required for the ListInputs API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputSecurityGroups">ListInputSecurityGroups</a></code> | <code>string[]</code> | IAM actions required for the ListInputSecurityGroups API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListMultiplexAlerts">ListMultiplexAlerts</a></code> | <code>string[]</code> | IAM actions required for the ListMultiplexAlerts API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListMultiplexes">ListMultiplexes</a></code> | <code>string[]</code> | IAM actions required for the ListMultiplexes API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListMultiplexPrograms">ListMultiplexPrograms</a></code> | <code>string[]</code> | IAM actions required for the ListMultiplexPrograms API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListNetworks">ListNetworks</a></code> | <code>string[]</code> | IAM actions required for the ListNetworks API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListNodes">ListNodes</a></code> | <code>string[]</code> | IAM actions required for the ListNodes API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListOfferings">ListOfferings</a></code> | <code>string[]</code> | IAM actions required for the ListOfferings API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListReservations">ListReservations</a></code> | <code>string[]</code> | IAM actions required for the ListReservations API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListSdiSources">ListSdiSources</a></code> | <code>string[]</code> | IAM actions required for the ListSdiSources API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListSignalMaps">ListSignalMaps</a></code> | <code>string[]</code> | IAM actions required for the ListSignalMaps API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.ListVersions">ListVersions</a></code> | <code>string[]</code> | IAM actions required for the ListVersions API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetCloudWatchAlarmTemplate">opGetCloudWatchAlarmTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetCloudWatchAlarmTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetCloudWatchAlarmTemplateGroup">opGetCloudWatchAlarmTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the GetCloudWatchAlarmTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetEventBridgeRuleTemplate">opGetEventBridgeRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetEventBridgeRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetEventBridgeRuleTemplateGroup">opGetEventBridgeRuleTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the GetEventBridgeRuleTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetSignalMap">opGetSignalMap</a></code> | <code>string[]</code> | IAM actions required for the GetSignalMap API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.PurchaseOffering">PurchaseOffering</a></code> | <code>string[]</code> | IAM actions required for the PurchaseOffering API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.RebootInputDevice">RebootInputDevice</a></code> | <code>string[]</code> | IAM actions required for the RebootInputDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.RejectInputDeviceTransfer">RejectInputDeviceTransfer</a></code> | <code>string[]</code> | IAM actions required for the RejectInputDeviceTransfer API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.RestartChannelPipelines">RestartChannelPipelines</a></code> | <code>string[]</code> | IAM actions required for the RestartChannelPipelines API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartChannel">StartChannel</a></code> | <code>string[]</code> | IAM actions required for the StartChannel API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartDeleteMonitorDeployment">StartDeleteMonitorDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartDeleteMonitorDeployment API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartInputDevice">StartInputDevice</a></code> | <code>string[]</code> | IAM actions required for the StartInputDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartInputDeviceMaintenanceWindow">StartInputDeviceMaintenanceWindow</a></code> | <code>string[]</code> | IAM actions required for the StartInputDeviceMaintenanceWindow API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartMonitorDeployment">StartMonitorDeployment</a></code> | <code>string[]</code> | IAM actions required for the StartMonitorDeployment API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartMultiplex">StartMultiplex</a></code> | <code>string[]</code> | IAM actions required for the StartMultiplex API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StartUpdateSignalMap">StartUpdateSignalMap</a></code> | <code>string[]</code> | IAM actions required for the StartUpdateSignalMap API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StopChannel">StopChannel</a></code> | <code>string[]</code> | IAM actions required for the StopChannel API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StopInputDevice">StopInputDevice</a></code> | <code>string[]</code> | IAM actions required for the StopInputDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.StopMultiplex">StopMultiplex</a></code> | <code>string[]</code> | IAM actions required for the StopMultiplex API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.TransferInputDevice">TransferInputDevice</a></code> | <code>string[]</code> | IAM actions required for the TransferInputDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateAccountConfiguration">UpdateAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateChannelClass">UpdateChannelClass</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelClass API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateChannelPlacementGroup">UpdateChannelPlacementGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannelPlacementGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateCloudWatchAlarmTemplate">UpdateCloudWatchAlarmTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateCloudWatchAlarmTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateCloudWatchAlarmTemplateGroup">UpdateCloudWatchAlarmTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateCloudWatchAlarmTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateEventBridgeRuleTemplate">UpdateEventBridgeRuleTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventBridgeRuleTemplate API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateEventBridgeRuleTemplateGroup">UpdateEventBridgeRuleTemplateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventBridgeRuleTemplateGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateInput">UpdateInput</a></code> | <code>string[]</code> | IAM actions required for the UpdateInput API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateInputDevice">UpdateInputDevice</a></code> | <code>string[]</code> | IAM actions required for the UpdateInputDevice API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateInputSecurityGroup">UpdateInputSecurityGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateInputSecurityGroup API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateMultiplex">UpdateMultiplex</a></code> | <code>string[]</code> | IAM actions required for the UpdateMultiplex API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateMultiplexProgram">UpdateMultiplexProgram</a></code> | <code>string[]</code> | IAM actions required for the UpdateMultiplexProgram API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateNetwork">UpdateNetwork</a></code> | <code>string[]</code> | IAM actions required for the UpdateNetwork API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateNode">UpdateNode</a></code> | <code>string[]</code> | IAM actions required for the UpdateNode API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateNodeState">UpdateNodeState</a></code> | <code>string[]</code> | IAM actions required for the UpdateNodeState API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateReservation">UpdateReservation</a></code> | <code>string[]</code> | IAM actions required for the UpdateReservation API call. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateSdiSource">UpdateSdiSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateSdiSource API call. |

---

##### `AcceptInputDeviceTransfer`<sup>Required</sup> <a name="AcceptInputDeviceTransfer" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.AcceptInputDeviceTransfer"></a>

```typescript
public readonly AcceptInputDeviceTransfer: string[];
```

- *Type:* string[]

IAM actions required for the AcceptInputDeviceTransfer API call.

---

##### `BatchDelete`<sup>Required</sup> <a name="BatchDelete" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchDelete"></a>

```typescript
public readonly BatchDelete: string[];
```

- *Type:* string[]

IAM actions required for the BatchDelete API call.

---

##### `BatchStart`<sup>Required</sup> <a name="BatchStart" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchStart"></a>

```typescript
public readonly BatchStart: string[];
```

- *Type:* string[]

IAM actions required for the BatchStart API call.

---

##### `BatchStop`<sup>Required</sup> <a name="BatchStop" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchStop"></a>

```typescript
public readonly BatchStop: string[];
```

- *Type:* string[]

IAM actions required for the BatchStop API call.

---

##### `BatchUpdateSchedule`<sup>Required</sup> <a name="BatchUpdateSchedule" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.BatchUpdateSchedule"></a>

```typescript
public readonly BatchUpdateSchedule: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateSchedule API call.

---

##### `CancelInputDeviceTransfer`<sup>Required</sup> <a name="CancelInputDeviceTransfer" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CancelInputDeviceTransfer"></a>

```typescript
public readonly CancelInputDeviceTransfer: string[];
```

- *Type:* string[]

IAM actions required for the CancelInputDeviceTransfer API call.

---

##### `ClaimDevice`<sup>Required</sup> <a name="ClaimDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ClaimDevice"></a>

```typescript
public readonly ClaimDevice: string[];
```

- *Type:* string[]

IAM actions required for the ClaimDevice API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateChannelPlacementGroup`<sup>Required</sup> <a name="CreateChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateChannelPlacementGroup"></a>

```typescript
public readonly CreateChannelPlacementGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannelPlacementGroup API call.

---

##### `CreateCloudWatchAlarmTemplate`<sup>Required</sup> <a name="CreateCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateCloudWatchAlarmTemplate"></a>

```typescript
public readonly CreateCloudWatchAlarmTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudWatchAlarmTemplate API call.

---

##### `CreateCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="CreateCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly CreateCloudWatchAlarmTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateCloudWatchAlarmTemplateGroup API call.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateEventBridgeRuleTemplate`<sup>Required</sup> <a name="CreateEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateEventBridgeRuleTemplate"></a>

```typescript
public readonly CreateEventBridgeRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventBridgeRuleTemplate API call.

---

##### `CreateEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="CreateEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly CreateEventBridgeRuleTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateEventBridgeRuleTemplateGroup API call.

---

##### `CreateInput`<sup>Required</sup> <a name="CreateInput" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateInput"></a>

```typescript
public readonly CreateInput: string[];
```

- *Type:* string[]

IAM actions required for the CreateInput API call.

---

##### `CreateInputSecurityGroup`<sup>Required</sup> <a name="CreateInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateInputSecurityGroup"></a>

```typescript
public readonly CreateInputSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateInputSecurityGroup API call.

---

##### `CreateMultiplex`<sup>Required</sup> <a name="CreateMultiplex" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateMultiplex"></a>

```typescript
public readonly CreateMultiplex: string[];
```

- *Type:* string[]

IAM actions required for the CreateMultiplex API call.

---

##### `CreateMultiplexProgram`<sup>Required</sup> <a name="CreateMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateMultiplexProgram"></a>

```typescript
public readonly CreateMultiplexProgram: string[];
```

- *Type:* string[]

IAM actions required for the CreateMultiplexProgram API call.

---

##### `CreateNetwork`<sup>Required</sup> <a name="CreateNetwork" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateNetwork"></a>

```typescript
public readonly CreateNetwork: string[];
```

- *Type:* string[]

IAM actions required for the CreateNetwork API call.

---

##### `CreateNode`<sup>Required</sup> <a name="CreateNode" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateNode"></a>

```typescript
public readonly CreateNode: string[];
```

- *Type:* string[]

IAM actions required for the CreateNode API call.

---

##### `CreateNodeRegistrationScript`<sup>Required</sup> <a name="CreateNodeRegistrationScript" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateNodeRegistrationScript"></a>

```typescript
public readonly CreateNodeRegistrationScript: string[];
```

- *Type:* string[]

IAM actions required for the CreateNodeRegistrationScript API call.

---

##### `CreatePartnerInput`<sup>Required</sup> <a name="CreatePartnerInput" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreatePartnerInput"></a>

```typescript
public readonly CreatePartnerInput: string[];
```

- *Type:* string[]

IAM actions required for the CreatePartnerInput API call.

---

##### `CreateSdiSource`<sup>Required</sup> <a name="CreateSdiSource" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateSdiSource"></a>

```typescript
public readonly CreateSdiSource: string[];
```

- *Type:* string[]

IAM actions required for the CreateSdiSource API call.

---

##### `CreateSignalMap`<sup>Required</sup> <a name="CreateSignalMap" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateSignalMap"></a>

```typescript
public readonly CreateSignalMap: string[];
```

- *Type:* string[]

IAM actions required for the CreateSignalMap API call.

---

##### `CreateTags`<sup>Required</sup> <a name="CreateTags" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.CreateTags"></a>

```typescript
public readonly CreateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateTags API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteChannelPlacementGroup`<sup>Required</sup> <a name="DeleteChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteChannelPlacementGroup"></a>

```typescript
public readonly DeleteChannelPlacementGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannelPlacementGroup API call.

---

##### `DeleteCloudWatchAlarmTemplate`<sup>Required</sup> <a name="DeleteCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteCloudWatchAlarmTemplate"></a>

```typescript
public readonly DeleteCloudWatchAlarmTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudWatchAlarmTemplate API call.

---

##### `DeleteCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="DeleteCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly DeleteCloudWatchAlarmTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCloudWatchAlarmTemplateGroup API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteEventBridgeRuleTemplate`<sup>Required</sup> <a name="DeleteEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteEventBridgeRuleTemplate"></a>

```typescript
public readonly DeleteEventBridgeRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventBridgeRuleTemplate API call.

---

##### `DeleteEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="DeleteEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly DeleteEventBridgeRuleTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEventBridgeRuleTemplateGroup API call.

---

##### `DeleteInput`<sup>Required</sup> <a name="DeleteInput" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteInput"></a>

```typescript
public readonly DeleteInput: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInput API call.

---

##### `DeleteInputSecurityGroup`<sup>Required</sup> <a name="DeleteInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteInputSecurityGroup"></a>

```typescript
public readonly DeleteInputSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInputSecurityGroup API call.

---

##### `DeleteMultiplex`<sup>Required</sup> <a name="DeleteMultiplex" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteMultiplex"></a>

```typescript
public readonly DeleteMultiplex: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMultiplex API call.

---

##### `DeleteMultiplexProgram`<sup>Required</sup> <a name="DeleteMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteMultiplexProgram"></a>

```typescript
public readonly DeleteMultiplexProgram: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMultiplexProgram API call.

---

##### `DeleteNetwork`<sup>Required</sup> <a name="DeleteNetwork" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteNetwork"></a>

```typescript
public readonly DeleteNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNetwork API call.

---

##### `DeleteNode`<sup>Required</sup> <a name="DeleteNode" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteNode"></a>

```typescript
public readonly DeleteNode: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNode API call.

---

##### `DeleteReservation`<sup>Required</sup> <a name="DeleteReservation" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteReservation"></a>

```typescript
public readonly DeleteReservation: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReservation API call.

---

##### `DeleteSchedule`<sup>Required</sup> <a name="DeleteSchedule" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteSchedule"></a>

```typescript
public readonly DeleteSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSchedule API call.

---

##### `DeleteSdiSource`<sup>Required</sup> <a name="DeleteSdiSource" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteSdiSource"></a>

```typescript
public readonly DeleteSdiSource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSdiSource API call.

---

##### `DeleteSignalMap`<sup>Required</sup> <a name="DeleteSignalMap" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteSignalMap"></a>

```typescript
public readonly DeleteSignalMap: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSignalMap API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DescribeAccountConfiguration`<sup>Required</sup> <a name="DescribeAccountConfiguration" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeAccountConfiguration"></a>

```typescript
public readonly DescribeAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountConfiguration API call.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannel API call.

---

##### `DescribeChannelPlacementGroup`<sup>Required</sup> <a name="DescribeChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeChannelPlacementGroup"></a>

```typescript
public readonly DescribeChannelPlacementGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannelPlacementGroup API call.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCluster API call.

---

##### `DescribeInput`<sup>Required</sup> <a name="DescribeInput" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInput"></a>

```typescript
public readonly DescribeInput: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInput API call.

---

##### `DescribeInputDevice`<sup>Required</sup> <a name="DescribeInputDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInputDevice"></a>

```typescript
public readonly DescribeInputDevice: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInputDevice API call.

---

##### `DescribeInputDeviceThumbnail`<sup>Required</sup> <a name="DescribeInputDeviceThumbnail" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInputDeviceThumbnail"></a>

```typescript
public readonly DescribeInputDeviceThumbnail: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInputDeviceThumbnail API call.

---

##### `DescribeInputSecurityGroup`<sup>Required</sup> <a name="DescribeInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeInputSecurityGroup"></a>

```typescript
public readonly DescribeInputSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInputSecurityGroup API call.

---

##### `DescribeMultiplex`<sup>Required</sup> <a name="DescribeMultiplex" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeMultiplex"></a>

```typescript
public readonly DescribeMultiplex: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMultiplex API call.

---

##### `DescribeMultiplexProgram`<sup>Required</sup> <a name="DescribeMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeMultiplexProgram"></a>

```typescript
public readonly DescribeMultiplexProgram: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMultiplexProgram API call.

---

##### `DescribeNetwork`<sup>Required</sup> <a name="DescribeNetwork" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeNetwork"></a>

```typescript
public readonly DescribeNetwork: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNetwork API call.

---

##### `DescribeNode`<sup>Required</sup> <a name="DescribeNode" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeNode"></a>

```typescript
public readonly DescribeNode: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNode API call.

---

##### `DescribeOffering`<sup>Required</sup> <a name="DescribeOffering" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeOffering"></a>

```typescript
public readonly DescribeOffering: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOffering API call.

---

##### `DescribeReservation`<sup>Required</sup> <a name="DescribeReservation" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeReservation"></a>

```typescript
public readonly DescribeReservation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReservation API call.

---

##### `DescribeSchedule`<sup>Required</sup> <a name="DescribeSchedule" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeSchedule"></a>

```typescript
public readonly DescribeSchedule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSchedule API call.

---

##### `DescribeSdiSource`<sup>Required</sup> <a name="DescribeSdiSource" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeSdiSource"></a>

```typescript
public readonly DescribeSdiSource: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSdiSource API call.

---

##### `DescribeThumbnails`<sup>Required</sup> <a name="DescribeThumbnails" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.DescribeThumbnails"></a>

```typescript
public readonly DescribeThumbnails: string[];
```

- *Type:* string[]

IAM actions required for the DescribeThumbnails API call.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string[];
```

- *Type:* string[]

IAM actions required for the ListAlerts API call.

---

##### `ListChannelPlacementGroups`<sup>Required</sup> <a name="ListChannelPlacementGroups" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListChannelPlacementGroups"></a>

```typescript
public readonly ListChannelPlacementGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListChannelPlacementGroups API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListCloudWatchAlarmTemplateGroups`<sup>Required</sup> <a name="ListCloudWatchAlarmTemplateGroups" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListCloudWatchAlarmTemplateGroups"></a>

```typescript
public readonly ListCloudWatchAlarmTemplateGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudWatchAlarmTemplateGroups API call.

---

##### `ListCloudWatchAlarmTemplates`<sup>Required</sup> <a name="ListCloudWatchAlarmTemplates" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListCloudWatchAlarmTemplates"></a>

```typescript
public readonly ListCloudWatchAlarmTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListCloudWatchAlarmTemplates API call.

---

##### `ListClusterAlerts`<sup>Required</sup> <a name="ListClusterAlerts" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListClusterAlerts"></a>

```typescript
public readonly ListClusterAlerts: string[];
```

- *Type:* string[]

IAM actions required for the ListClusterAlerts API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListEventBridgeRuleTemplateGroups`<sup>Required</sup> <a name="ListEventBridgeRuleTemplateGroups" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListEventBridgeRuleTemplateGroups"></a>

```typescript
public readonly ListEventBridgeRuleTemplateGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListEventBridgeRuleTemplateGroups API call.

---

##### `ListEventBridgeRuleTemplates`<sup>Required</sup> <a name="ListEventBridgeRuleTemplates" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListEventBridgeRuleTemplates"></a>

```typescript
public readonly ListEventBridgeRuleTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListEventBridgeRuleTemplates API call.

---

##### `ListInputDevices`<sup>Required</sup> <a name="ListInputDevices" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputDevices"></a>

```typescript
public readonly ListInputDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListInputDevices API call.

---

##### `ListInputDeviceTransfers`<sup>Required</sup> <a name="ListInputDeviceTransfers" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputDeviceTransfers"></a>

```typescript
public readonly ListInputDeviceTransfers: string[];
```

- *Type:* string[]

IAM actions required for the ListInputDeviceTransfers API call.

---

##### `ListInputs`<sup>Required</sup> <a name="ListInputs" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputs"></a>

```typescript
public readonly ListInputs: string[];
```

- *Type:* string[]

IAM actions required for the ListInputs API call.

---

##### `ListInputSecurityGroups`<sup>Required</sup> <a name="ListInputSecurityGroups" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListInputSecurityGroups"></a>

```typescript
public readonly ListInputSecurityGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListInputSecurityGroups API call.

---

##### `ListMultiplexAlerts`<sup>Required</sup> <a name="ListMultiplexAlerts" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListMultiplexAlerts"></a>

```typescript
public readonly ListMultiplexAlerts: string[];
```

- *Type:* string[]

IAM actions required for the ListMultiplexAlerts API call.

---

##### `ListMultiplexes`<sup>Required</sup> <a name="ListMultiplexes" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListMultiplexes"></a>

```typescript
public readonly ListMultiplexes: string[];
```

- *Type:* string[]

IAM actions required for the ListMultiplexes API call.

---

##### `ListMultiplexPrograms`<sup>Required</sup> <a name="ListMultiplexPrograms" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListMultiplexPrograms"></a>

```typescript
public readonly ListMultiplexPrograms: string[];
```

- *Type:* string[]

IAM actions required for the ListMultiplexPrograms API call.

---

##### `ListNetworks`<sup>Required</sup> <a name="ListNetworks" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListNetworks"></a>

```typescript
public readonly ListNetworks: string[];
```

- *Type:* string[]

IAM actions required for the ListNetworks API call.

---

##### `ListNodes`<sup>Required</sup> <a name="ListNodes" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListNodes"></a>

```typescript
public readonly ListNodes: string[];
```

- *Type:* string[]

IAM actions required for the ListNodes API call.

---

##### `ListOfferings`<sup>Required</sup> <a name="ListOfferings" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListOfferings"></a>

```typescript
public readonly ListOfferings: string[];
```

- *Type:* string[]

IAM actions required for the ListOfferings API call.

---

##### `ListReservations`<sup>Required</sup> <a name="ListReservations" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListReservations"></a>

```typescript
public readonly ListReservations: string[];
```

- *Type:* string[]

IAM actions required for the ListReservations API call.

---

##### `ListSdiSources`<sup>Required</sup> <a name="ListSdiSources" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListSdiSources"></a>

```typescript
public readonly ListSdiSources: string[];
```

- *Type:* string[]

IAM actions required for the ListSdiSources API call.

---

##### `ListSignalMaps`<sup>Required</sup> <a name="ListSignalMaps" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListSignalMaps"></a>

```typescript
public readonly ListSignalMaps: string[];
```

- *Type:* string[]

IAM actions required for the ListSignalMaps API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListVersions`<sup>Required</sup> <a name="ListVersions" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.ListVersions"></a>

```typescript
public readonly ListVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListVersions API call.

---

##### `opGetCloudWatchAlarmTemplate`<sup>Required</sup> <a name="opGetCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetCloudWatchAlarmTemplate"></a>

```typescript
public readonly opGetCloudWatchAlarmTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudWatchAlarmTemplate API call.

---

##### `opGetCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="opGetCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly opGetCloudWatchAlarmTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetCloudWatchAlarmTemplateGroup API call.

---

##### `opGetEventBridgeRuleTemplate`<sup>Required</sup> <a name="opGetEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetEventBridgeRuleTemplate"></a>

```typescript
public readonly opGetEventBridgeRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetEventBridgeRuleTemplate API call.

---

##### `opGetEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="opGetEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly opGetEventBridgeRuleTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetEventBridgeRuleTemplateGroup API call.

---

##### `opGetSignalMap`<sup>Required</sup> <a name="opGetSignalMap" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.opGetSignalMap"></a>

```typescript
public readonly opGetSignalMap: string[];
```

- *Type:* string[]

IAM actions required for the GetSignalMap API call.

---

##### `PurchaseOffering`<sup>Required</sup> <a name="PurchaseOffering" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.PurchaseOffering"></a>

```typescript
public readonly PurchaseOffering: string[];
```

- *Type:* string[]

IAM actions required for the PurchaseOffering API call.

---

##### `RebootInputDevice`<sup>Required</sup> <a name="RebootInputDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.RebootInputDevice"></a>

```typescript
public readonly RebootInputDevice: string[];
```

- *Type:* string[]

IAM actions required for the RebootInputDevice API call.

---

##### `RejectInputDeviceTransfer`<sup>Required</sup> <a name="RejectInputDeviceTransfer" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.RejectInputDeviceTransfer"></a>

```typescript
public readonly RejectInputDeviceTransfer: string[];
```

- *Type:* string[]

IAM actions required for the RejectInputDeviceTransfer API call.

---

##### `RestartChannelPipelines`<sup>Required</sup> <a name="RestartChannelPipelines" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.RestartChannelPipelines"></a>

```typescript
public readonly RestartChannelPipelines: string[];
```

- *Type:* string[]

IAM actions required for the RestartChannelPipelines API call.

---

##### `StartChannel`<sup>Required</sup> <a name="StartChannel" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartChannel"></a>

```typescript
public readonly StartChannel: string[];
```

- *Type:* string[]

IAM actions required for the StartChannel API call.

---

##### `StartDeleteMonitorDeployment`<sup>Required</sup> <a name="StartDeleteMonitorDeployment" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartDeleteMonitorDeployment"></a>

```typescript
public readonly StartDeleteMonitorDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartDeleteMonitorDeployment API call.

---

##### `StartInputDevice`<sup>Required</sup> <a name="StartInputDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartInputDevice"></a>

```typescript
public readonly StartInputDevice: string[];
```

- *Type:* string[]

IAM actions required for the StartInputDevice API call.

---

##### `StartInputDeviceMaintenanceWindow`<sup>Required</sup> <a name="StartInputDeviceMaintenanceWindow" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartInputDeviceMaintenanceWindow"></a>

```typescript
public readonly StartInputDeviceMaintenanceWindow: string[];
```

- *Type:* string[]

IAM actions required for the StartInputDeviceMaintenanceWindow API call.

---

##### `StartMonitorDeployment`<sup>Required</sup> <a name="StartMonitorDeployment" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartMonitorDeployment"></a>

```typescript
public readonly StartMonitorDeployment: string[];
```

- *Type:* string[]

IAM actions required for the StartMonitorDeployment API call.

---

##### `StartMultiplex`<sup>Required</sup> <a name="StartMultiplex" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartMultiplex"></a>

```typescript
public readonly StartMultiplex: string[];
```

- *Type:* string[]

IAM actions required for the StartMultiplex API call.

---

##### `StartUpdateSignalMap`<sup>Required</sup> <a name="StartUpdateSignalMap" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StartUpdateSignalMap"></a>

```typescript
public readonly StartUpdateSignalMap: string[];
```

- *Type:* string[]

IAM actions required for the StartUpdateSignalMap API call.

---

##### `StopChannel`<sup>Required</sup> <a name="StopChannel" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StopChannel"></a>

```typescript
public readonly StopChannel: string[];
```

- *Type:* string[]

IAM actions required for the StopChannel API call.

---

##### `StopInputDevice`<sup>Required</sup> <a name="StopInputDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StopInputDevice"></a>

```typescript
public readonly StopInputDevice: string[];
```

- *Type:* string[]

IAM actions required for the StopInputDevice API call.

---

##### `StopMultiplex`<sup>Required</sup> <a name="StopMultiplex" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.StopMultiplex"></a>

```typescript
public readonly StopMultiplex: string[];
```

- *Type:* string[]

IAM actions required for the StopMultiplex API call.

---

##### `TransferInputDevice`<sup>Required</sup> <a name="TransferInputDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.TransferInputDevice"></a>

```typescript
public readonly TransferInputDevice: string[];
```

- *Type:* string[]

IAM actions required for the TransferInputDevice API call.

---

##### `UpdateAccountConfiguration`<sup>Required</sup> <a name="UpdateAccountConfiguration" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateAccountConfiguration"></a>

```typescript
public readonly UpdateAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountConfiguration API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateChannelClass`<sup>Required</sup> <a name="UpdateChannelClass" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateChannelClass"></a>

```typescript
public readonly UpdateChannelClass: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelClass API call.

---

##### `UpdateChannelPlacementGroup`<sup>Required</sup> <a name="UpdateChannelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateChannelPlacementGroup"></a>

```typescript
public readonly UpdateChannelPlacementGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannelPlacementGroup API call.

---

##### `UpdateCloudWatchAlarmTemplate`<sup>Required</sup> <a name="UpdateCloudWatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateCloudWatchAlarmTemplate"></a>

```typescript
public readonly UpdateCloudWatchAlarmTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCloudWatchAlarmTemplate API call.

---

##### `UpdateCloudWatchAlarmTemplateGroup`<sup>Required</sup> <a name="UpdateCloudWatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateCloudWatchAlarmTemplateGroup"></a>

```typescript
public readonly UpdateCloudWatchAlarmTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCloudWatchAlarmTemplateGroup API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateEventBridgeRuleTemplate`<sup>Required</sup> <a name="UpdateEventBridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateEventBridgeRuleTemplate"></a>

```typescript
public readonly UpdateEventBridgeRuleTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventBridgeRuleTemplate API call.

---

##### `UpdateEventBridgeRuleTemplateGroup`<sup>Required</sup> <a name="UpdateEventBridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateEventBridgeRuleTemplateGroup"></a>

```typescript
public readonly UpdateEventBridgeRuleTemplateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventBridgeRuleTemplateGroup API call.

---

##### `UpdateInput`<sup>Required</sup> <a name="UpdateInput" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateInput"></a>

```typescript
public readonly UpdateInput: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInput API call.

---

##### `UpdateInputDevice`<sup>Required</sup> <a name="UpdateInputDevice" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateInputDevice"></a>

```typescript
public readonly UpdateInputDevice: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInputDevice API call.

---

##### `UpdateInputSecurityGroup`<sup>Required</sup> <a name="UpdateInputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateInputSecurityGroup"></a>

```typescript
public readonly UpdateInputSecurityGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInputSecurityGroup API call.

---

##### `UpdateMultiplex`<sup>Required</sup> <a name="UpdateMultiplex" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateMultiplex"></a>

```typescript
public readonly UpdateMultiplex: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMultiplex API call.

---

##### `UpdateMultiplexProgram`<sup>Required</sup> <a name="UpdateMultiplexProgram" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateMultiplexProgram"></a>

```typescript
public readonly UpdateMultiplexProgram: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMultiplexProgram API call.

---

##### `UpdateNetwork`<sup>Required</sup> <a name="UpdateNetwork" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateNetwork"></a>

```typescript
public readonly UpdateNetwork: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNetwork API call.

---

##### `UpdateNode`<sup>Required</sup> <a name="UpdateNode" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateNode"></a>

```typescript
public readonly UpdateNode: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNode API call.

---

##### `UpdateNodeState`<sup>Required</sup> <a name="UpdateNodeState" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateNodeState"></a>

```typescript
public readonly UpdateNodeState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNodeState API call.

---

##### `UpdateReservation`<sup>Required</sup> <a name="UpdateReservation" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateReservation"></a>

```typescript
public readonly UpdateReservation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateReservation API call.

---

##### `UpdateSdiSource`<sup>Required</sup> <a name="UpdateSdiSource" id="@cdk_utils/iam.medialive.MediaLiveOperations.property.UpdateSdiSource"></a>

```typescript
public readonly UpdateSdiSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSdiSource API call.

---

### MediaLiveResources <a name="MediaLiveResources" id="@cdk_utils/iam.medialive.MediaLiveResources"></a>

ARN builders, validators, and parsers for medialive resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.medialive.MediaLiveResources.Initializer"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

new medialive.MediaLiveResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.channelPlacementGroup">channelPlacementGroup</a></code> | Builds an ARN for the channel-placement-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.cloudwatchAlarmTemplate">cloudwatchAlarmTemplate</a></code> | Builds an ARN for the cloudwatch-alarm-template resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.cloudwatchAlarmTemplateGroup">cloudwatchAlarmTemplateGroup</a></code> | Builds an ARN for the cloudwatch-alarm-template-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.eventbridgeRuleTemplate">eventbridgeRuleTemplate</a></code> | Builds an ARN for the eventbridge-rule-template resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.eventbridgeRuleTemplateGroup">eventbridgeRuleTemplateGroup</a></code> | Builds an ARN for the eventbridge-rule-template-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.input">input</a></code> | Builds an ARN for the input resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.inputDevice">inputDevice</a></code> | Builds an ARN for the input-device resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.inputSecurityGroup">inputSecurityGroup</a></code> | Builds an ARN for the input-security-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidChannelPlacementGroupArn">isValidChannelPlacementGroupArn</a></code> | Validates whether a string is a valid ARN for the channel-placement-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateArn">isValidCloudwatchAlarmTemplateArn</a></code> | Validates whether a string is a valid ARN for the cloudwatch-alarm-template resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateGroupArn">isValidCloudwatchAlarmTemplateGroupArn</a></code> | Validates whether a string is a valid ARN for the cloudwatch-alarm-template-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidEventbridgeRuleTemplateArn">isValidEventbridgeRuleTemplateArn</a></code> | Validates whether a string is a valid ARN for the eventbridge-rule-template resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidEventbridgeRuleTemplateGroupArn">isValidEventbridgeRuleTemplateGroupArn</a></code> | Validates whether a string is a valid ARN for the eventbridge-rule-template-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidInputArn">isValidInputArn</a></code> | Validates whether a string is a valid ARN for the input resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidInputDeviceArn">isValidInputDeviceArn</a></code> | Validates whether a string is a valid ARN for the input-device resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidInputSecurityGroupArn">isValidInputSecurityGroupArn</a></code> | Validates whether a string is a valid ARN for the input-security-group resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidMultiplexArn">isValidMultiplexArn</a></code> | Validates whether a string is a valid ARN for the multiplex resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidNetworkArn">isValidNetworkArn</a></code> | Validates whether a string is a valid ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidNodeArn">isValidNodeArn</a></code> | Validates whether a string is a valid ARN for the node resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidOfferingArn">isValidOfferingArn</a></code> | Validates whether a string is a valid ARN for the offering resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidReservationArn">isValidReservationArn</a></code> | Validates whether a string is a valid ARN for the reservation resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidSdiSourceArn">isValidSdiSourceArn</a></code> | Validates whether a string is a valid ARN for the sdi-source resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.isValidSignalMapArn">isValidSignalMapArn</a></code> | Validates whether a string is a valid ARN for the signal-map resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.multiplex">multiplex</a></code> | Builds an ARN for the multiplex resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.network">network</a></code> | Builds an ARN for the network resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.node">node</a></code> | Builds an ARN for the node resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.offering">offering</a></code> | Builds an ARN for the offering resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseChannelPlacementGroupArn">parseChannelPlacementGroupArn</a></code> | Parses a channel-placement-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseCloudwatchAlarmTemplateArn">parseCloudwatchAlarmTemplateArn</a></code> | Parses a cloudwatch-alarm-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseCloudwatchAlarmTemplateGroupArn">parseCloudwatchAlarmTemplateGroupArn</a></code> | Parses a cloudwatch-alarm-template-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseEventbridgeRuleTemplateArn">parseEventbridgeRuleTemplateArn</a></code> | Parses a eventbridge-rule-template ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseEventbridgeRuleTemplateGroupArn">parseEventbridgeRuleTemplateGroupArn</a></code> | Parses a eventbridge-rule-template-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseInputArn">parseInputArn</a></code> | Parses a input ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseInputDeviceArn">parseInputDeviceArn</a></code> | Parses a input-device ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseInputSecurityGroupArn">parseInputSecurityGroupArn</a></code> | Parses a input-security-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseMultiplexArn">parseMultiplexArn</a></code> | Parses a multiplex ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseNetworkArn">parseNetworkArn</a></code> | Parses a network ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseNodeArn">parseNodeArn</a></code> | Parses a node ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseOfferingArn">parseOfferingArn</a></code> | Parses a offering ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseReservationArn">parseReservationArn</a></code> | Parses a reservation ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseSdiSourceArn">parseSdiSourceArn</a></code> | Parses a sdi-source ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.parseSignalMapArn">parseSignalMapArn</a></code> | Parses a signal-map ARN into its components. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.reservation">reservation</a></code> | Builds an ARN for the reservation resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.sdiSource">sdiSource</a></code> | Builds an ARN for the sdi-source resource. |
| <code><a href="#@cdk_utils/iam.medialive.MediaLiveResources.signalMap">signalMap</a></code> | Builds an ARN for the signal-map resource. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.medialive.MediaLiveResources.channel"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.channel(props: MediaLiveChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveChannelArnProps">MediaLiveChannelArnProps</a>

---

##### `channelPlacementGroup` <a name="channelPlacementGroup" id="@cdk_utils/iam.medialive.MediaLiveResources.channelPlacementGroup"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.channelPlacementGroup(props: MediaLiveChannelPlacementGroupArnProps)
```

Builds an ARN for the channel-placement-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.channelPlacementGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveChannelPlacementGroupArnProps">MediaLiveChannelPlacementGroupArnProps</a>

---

##### `cloudwatchAlarmTemplate` <a name="cloudwatchAlarmTemplate" id="@cdk_utils/iam.medialive.MediaLiveResources.cloudwatchAlarmTemplate"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.cloudwatchAlarmTemplate(props: MediaLiveCloudwatchAlarmTemplateArnProps)
```

Builds an ARN for the cloudwatch-alarm-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.cloudwatchAlarmTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateArnProps">MediaLiveCloudwatchAlarmTemplateArnProps</a>

---

##### `cloudwatchAlarmTemplateGroup` <a name="cloudwatchAlarmTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveResources.cloudwatchAlarmTemplateGroup"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.cloudwatchAlarmTemplateGroup(props: MediaLiveCloudwatchAlarmTemplateGroupArnProps)
```

Builds an ARN for the cloudwatch-alarm-template-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.cloudwatchAlarmTemplateGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveCloudwatchAlarmTemplateGroupArnProps">MediaLiveCloudwatchAlarmTemplateGroupArnProps</a>

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.medialive.MediaLiveResources.cluster"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.cluster(props: MediaLiveClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveClusterArnProps">MediaLiveClusterArnProps</a>

---

##### `eventbridgeRuleTemplate` <a name="eventbridgeRuleTemplate" id="@cdk_utils/iam.medialive.MediaLiveResources.eventbridgeRuleTemplate"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.eventbridgeRuleTemplate(props: MediaLiveEventbridgeRuleTemplateArnProps)
```

Builds an ARN for the eventbridge-rule-template resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.eventbridgeRuleTemplate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateArnProps">MediaLiveEventbridgeRuleTemplateArnProps</a>

---

##### `eventbridgeRuleTemplateGroup` <a name="eventbridgeRuleTemplateGroup" id="@cdk_utils/iam.medialive.MediaLiveResources.eventbridgeRuleTemplateGroup"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.eventbridgeRuleTemplateGroup(props: MediaLiveEventbridgeRuleTemplateGroupArnProps)
```

Builds an ARN for the eventbridge-rule-template-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.eventbridgeRuleTemplateGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveEventbridgeRuleTemplateGroupArnProps">MediaLiveEventbridgeRuleTemplateGroupArnProps</a>

---

##### `input` <a name="input" id="@cdk_utils/iam.medialive.MediaLiveResources.input"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.input(props: MediaLiveInputArnProps)
```

Builds an ARN for the input resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.input.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveInputArnProps">MediaLiveInputArnProps</a>

---

##### `inputDevice` <a name="inputDevice" id="@cdk_utils/iam.medialive.MediaLiveResources.inputDevice"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.inputDevice(props: MediaLiveInputDeviceArnProps)
```

Builds an ARN for the input-device resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.inputDevice.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveInputDeviceArnProps">MediaLiveInputDeviceArnProps</a>

---

##### `inputSecurityGroup` <a name="inputSecurityGroup" id="@cdk_utils/iam.medialive.MediaLiveResources.inputSecurityGroup"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.inputSecurityGroup(props: MediaLiveInputSecurityGroupArnProps)
```

Builds an ARN for the input-security-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.inputSecurityGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveInputSecurityGroupArnProps">MediaLiveInputSecurityGroupArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidChannelArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidChannelPlacementGroupArn` <a name="isValidChannelPlacementGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidChannelPlacementGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidChannelPlacementGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the channel-placement-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidChannelPlacementGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudwatchAlarmTemplateArn` <a name="isValidCloudwatchAlarmTemplateArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the cloudwatch-alarm-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCloudwatchAlarmTemplateGroupArn` <a name="isValidCloudwatchAlarmTemplateGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the cloudwatch-alarm-template-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidCloudwatchAlarmTemplateGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidClusterArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventbridgeRuleTemplateArn` <a name="isValidEventbridgeRuleTemplateArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidEventbridgeRuleTemplateArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidEventbridgeRuleTemplateArn(arn: string)
```

Validates whether a string is a valid ARN for the eventbridge-rule-template resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidEventbridgeRuleTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidEventbridgeRuleTemplateGroupArn` <a name="isValidEventbridgeRuleTemplateGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidEventbridgeRuleTemplateGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidEventbridgeRuleTemplateGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the eventbridge-rule-template-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidEventbridgeRuleTemplateGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInputArn` <a name="isValidInputArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidInputArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidInputArn(arn: string)
```

Validates whether a string is a valid ARN for the input resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidInputArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInputDeviceArn` <a name="isValidInputDeviceArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidInputDeviceArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidInputDeviceArn(arn: string)
```

Validates whether a string is a valid ARN for the input-device resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidInputDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInputSecurityGroupArn` <a name="isValidInputSecurityGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidInputSecurityGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidInputSecurityGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the input-security-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidInputSecurityGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMultiplexArn` <a name="isValidMultiplexArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidMultiplexArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidMultiplexArn(arn: string)
```

Validates whether a string is a valid ARN for the multiplex resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidMultiplexArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNetworkArn` <a name="isValidNetworkArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidNetworkArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidNetworkArn(arn: string)
```

Validates whether a string is a valid ARN for the network resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNodeArn` <a name="isValidNodeArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidNodeArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidNodeArn(arn: string)
```

Validates whether a string is a valid ARN for the node resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOfferingArn` <a name="isValidOfferingArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidOfferingArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidOfferingArn(arn: string)
```

Validates whether a string is a valid ARN for the offering resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidOfferingArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReservationArn` <a name="isValidReservationArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidReservationArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidReservationArn(arn: string)
```

Validates whether a string is a valid ARN for the reservation resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSdiSourceArn` <a name="isValidSdiSourceArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidSdiSourceArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidSdiSourceArn(arn: string)
```

Validates whether a string is a valid ARN for the sdi-source resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidSdiSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSignalMapArn` <a name="isValidSignalMapArn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidSignalMapArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.isValidSignalMapArn(arn: string)
```

Validates whether a string is a valid ARN for the signal-map resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.isValidSignalMapArn.parameter.arn"></a>

- *Type:* string

---

##### `multiplex` <a name="multiplex" id="@cdk_utils/iam.medialive.MediaLiveResources.multiplex"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.multiplex(props: MediaLiveMultiplexArnProps)
```

Builds an ARN for the multiplex resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.multiplex.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveMultiplexArnProps">MediaLiveMultiplexArnProps</a>

---

##### `network` <a name="network" id="@cdk_utils/iam.medialive.MediaLiveResources.network"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.network(props: MediaLiveNetworkArnProps)
```

Builds an ARN for the network resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.network.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveNetworkArnProps">MediaLiveNetworkArnProps</a>

---

##### `node` <a name="node" id="@cdk_utils/iam.medialive.MediaLiveResources.node"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.node(props: MediaLiveNodeArnProps)
```

Builds an ARN for the node resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.node.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveNodeArnProps">MediaLiveNodeArnProps</a>

---

##### `offering` <a name="offering" id="@cdk_utils/iam.medialive.MediaLiveResources.offering"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.offering(props: MediaLiveOfferingArnProps)
```

Builds an ARN for the offering resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.offering.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveOfferingArnProps">MediaLiveOfferingArnProps</a>

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseChannelArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelPlacementGroupArn` <a name="parseChannelPlacementGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseChannelPlacementGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseChannelPlacementGroupArn(arn: string)
```

Parses a channel-placement-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseChannelPlacementGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudwatchAlarmTemplateArn` <a name="parseCloudwatchAlarmTemplateArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseCloudwatchAlarmTemplateArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseCloudwatchAlarmTemplateArn(arn: string)
```

Parses a cloudwatch-alarm-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseCloudwatchAlarmTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCloudwatchAlarmTemplateGroupArn` <a name="parseCloudwatchAlarmTemplateGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseCloudwatchAlarmTemplateGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseCloudwatchAlarmTemplateGroupArn(arn: string)
```

Parses a cloudwatch-alarm-template-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseCloudwatchAlarmTemplateGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseClusterArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventbridgeRuleTemplateArn` <a name="parseEventbridgeRuleTemplateArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseEventbridgeRuleTemplateArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseEventbridgeRuleTemplateArn(arn: string)
```

Parses a eventbridge-rule-template ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseEventbridgeRuleTemplateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEventbridgeRuleTemplateGroupArn` <a name="parseEventbridgeRuleTemplateGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseEventbridgeRuleTemplateGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseEventbridgeRuleTemplateGroupArn(arn: string)
```

Parses a eventbridge-rule-template-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseEventbridgeRuleTemplateGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInputArn` <a name="parseInputArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseInputArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseInputArn(arn: string)
```

Parses a input ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseInputArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInputDeviceArn` <a name="parseInputDeviceArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseInputDeviceArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseInputDeviceArn(arn: string)
```

Parses a input-device ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseInputDeviceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInputSecurityGroupArn` <a name="parseInputSecurityGroupArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseInputSecurityGroupArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseInputSecurityGroupArn(arn: string)
```

Parses a input-security-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseInputSecurityGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMultiplexArn` <a name="parseMultiplexArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseMultiplexArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseMultiplexArn(arn: string)
```

Parses a multiplex ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseMultiplexArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNetworkArn` <a name="parseNetworkArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseNetworkArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseNetworkArn(arn: string)
```

Parses a network ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseNetworkArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNodeArn` <a name="parseNodeArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseNodeArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseNodeArn(arn: string)
```

Parses a node ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseNodeArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOfferingArn` <a name="parseOfferingArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseOfferingArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseOfferingArn(arn: string)
```

Parses a offering ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseOfferingArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReservationArn` <a name="parseReservationArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseReservationArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseReservationArn(arn: string)
```

Parses a reservation ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseReservationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSdiSourceArn` <a name="parseSdiSourceArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseSdiSourceArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseSdiSourceArn(arn: string)
```

Parses a sdi-source ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseSdiSourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSignalMapArn` <a name="parseSignalMapArn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseSignalMapArn"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.parseSignalMapArn(arn: string)
```

Parses a signal-map ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.medialive.MediaLiveResources.parseSignalMapArn.parameter.arn"></a>

- *Type:* string

---

##### `reservation` <a name="reservation" id="@cdk_utils/iam.medialive.MediaLiveResources.reservation"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.reservation(props: MediaLiveReservationArnProps)
```

Builds an ARN for the reservation resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.reservation.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveReservationArnProps">MediaLiveReservationArnProps</a>

---

##### `sdiSource` <a name="sdiSource" id="@cdk_utils/iam.medialive.MediaLiveResources.sdiSource"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.sdiSource(props: MediaLiveSdiSourceArnProps)
```

Builds an ARN for the sdi-source resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.sdiSource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveSdiSourceArnProps">MediaLiveSdiSourceArnProps</a>

---

##### `signalMap` <a name="signalMap" id="@cdk_utils/iam.medialive.MediaLiveResources.signalMap"></a>

```typescript
import { medialive } from '@cdk_utils/iam'

medialive.MediaLiveResources.signalMap(props: MediaLiveSignalMapArnProps)
```

Builds an ARN for the signal-map resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.medialive.MediaLiveResources.signalMap.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.medialive.MediaLiveSignalMapArnProps">MediaLiveSignalMapArnProps</a>

---




