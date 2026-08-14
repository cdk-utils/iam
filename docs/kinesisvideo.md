# `kinesisvideo` Submodule <a name="`kinesisvideo` Submodule" id="@cdk_utils/iam.kinesisvideo"></a>


## Structs <a name="Structs" id="Structs"></a>

### KinesisvideoChannelArnComponents <a name="KinesisvideoChannelArnComponents" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents"></a>

Parsed components of a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

const kinesisvideoChannelArnComponents: kinesisvideo.KinesisvideoChannelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.creationTime">creationTime</a></code> | <code>string</code> | The CreationTime component. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component.

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

The CreationTime component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### KinesisvideoChannelArnProps <a name="KinesisvideoChannelArnProps" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps"></a>

Properties for building a channel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

const kinesisvideoChannelArnProps: kinesisvideo.KinesisvideoChannelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.channelName">channelName</a></code> | <code>string</code> | The ChannelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.creationTime">creationTime</a></code> | <code>string</code> | The CreationTime component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

The ChannelName component of the ARN.

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

The CreationTime component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### KinesisvideoStreamArnComponents <a name="KinesisvideoStreamArnComponents" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents"></a>

Parsed components of a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

const kinesisvideoStreamArnComponents: kinesisvideo.KinesisvideoStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.creationTime">creationTime</a></code> | <code>string</code> | The CreationTime component. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.streamName">streamName</a></code> | <code>string</code> | The StreamName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

The CreationTime component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnComponents.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The StreamName component.

---

### KinesisvideoStreamArnProps <a name="KinesisvideoStreamArnProps" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps"></a>

Properties for building a stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

const kinesisvideoStreamArnProps: kinesisvideo.KinesisvideoStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.creationTime">creationTime</a></code> | <code>string</code> | The CreationTime component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.streamName">streamName</a></code> | <code>string</code> | The StreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

The CreationTime component of the ARN.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

The StreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### KinesisvideoActions <a name="KinesisvideoActions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions"></a>

IAM action constants for the kinesisvideo service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

new kinesisvideo.KinesisvideoActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetClip">actionGetClip</a></code> | <code>string</code> | [Read] kinesisvideo:GetClip. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetDASHStreamingSessionURL">actionGetDASHStreamingSessionURL</a></code> | <code>string</code> | [Read] kinesisvideo:GetDASHStreamingSessionURL. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetDataEndpoint">actionGetDataEndpoint</a></code> | <code>string</code> | [Read] kinesisvideo:GetDataEndpoint. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetHLSStreamingSessionURL">actionGetHLSStreamingSessionURL</a></code> | <code>string</code> | [Read] kinesisvideo:GetHLSStreamingSessionURL. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetIceServerConfig">actionGetIceServerConfig</a></code> | <code>string</code> | [Read] kinesisvideo:GetIceServerConfig. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetImages">actionGetImages</a></code> | <code>string</code> | [Read] kinesisvideo:GetImages. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetMedia">actionGetMedia</a></code> | <code>string</code> | [Read] kinesisvideo:GetMedia. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetMediaForFragmentList">actionGetMediaForFragmentList</a></code> | <code>string</code> | [Read] kinesisvideo:GetMediaForFragmentList. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetSignalingChannelEndpoint">actionGetSignalingChannelEndpoint</a></code> | <code>string</code> | [Read] kinesisvideo:GetSignalingChannelEndpoint. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ConnectAsMaster">ConnectAsMaster</a></code> | <code>string</code> | [Write] kinesisvideo:ConnectAsMaster. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ConnectAsViewer">ConnectAsViewer</a></code> | <code>string</code> | [Write] kinesisvideo:ConnectAsViewer. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.CreateSignalingChannel">CreateSignalingChannel</a></code> | <code>string</code> | [Write] kinesisvideo:CreateSignalingChannel. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.CreateStream">CreateStream</a></code> | <code>string</code> | [Write] kinesisvideo:CreateStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DeleteEdgeConfiguration">DeleteEdgeConfiguration</a></code> | <code>string</code> | [Write] kinesisvideo:DeleteEdgeConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DeleteSignalingChannel">DeleteSignalingChannel</a></code> | <code>string</code> | [Write] kinesisvideo:DeleteSignalingChannel. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DeleteStream">DeleteStream</a></code> | <code>string</code> | [Write] kinesisvideo:DeleteStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeEdgeConfiguration">DescribeEdgeConfiguration</a></code> | <code>string</code> | [Read] kinesisvideo:DescribeEdgeConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeImageGenerationConfiguration">DescribeImageGenerationConfiguration</a></code> | <code>string</code> | [Read] kinesisvideo:DescribeImageGenerationConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeMappedResourceConfiguration">DescribeMappedResourceConfiguration</a></code> | <code>string</code> | [List] kinesisvideo:DescribeMappedResourceConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeMediaStorageConfiguration">DescribeMediaStorageConfiguration</a></code> | <code>string</code> | [Read] kinesisvideo:DescribeMediaStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeNotificationConfiguration">DescribeNotificationConfiguration</a></code> | <code>string</code> | [Read] kinesisvideo:DescribeNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeSignalingChannel">DescribeSignalingChannel</a></code> | <code>string</code> | [List] kinesisvideo:DescribeSignalingChannel. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeStream">DescribeStream</a></code> | <code>string</code> | [List] kinesisvideo:DescribeStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeStreamStorageConfiguration">DescribeStreamStorageConfiguration</a></code> | <code>string</code> | [Read] kinesisvideo:DescribeStreamStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.JoinStorageSession">JoinStorageSession</a></code> | <code>string</code> | [Write] kinesisvideo:JoinStorageSession. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.JoinStorageSessionAsViewer">JoinStorageSessionAsViewer</a></code> | <code>string</code> | [Write] kinesisvideo:JoinStorageSessionAsViewer. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListEdgeAgentConfigurations">ListEdgeAgentConfigurations</a></code> | <code>string</code> | [List] kinesisvideo:ListEdgeAgentConfigurations. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListFragments">ListFragments</a></code> | <code>string</code> | [List] kinesisvideo:ListFragments. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListSignalingChannels">ListSignalingChannels</a></code> | <code>string</code> | [List] kinesisvideo:ListSignalingChannels. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListStreams">ListStreams</a></code> | <code>string</code> | [List] kinesisvideo:ListStreams. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] kinesisvideo:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListTagsForStream">ListTagsForStream</a></code> | <code>string</code> | [Read] kinesisvideo:ListTagsForStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.PutMedia">PutMedia</a></code> | <code>string</code> | [Write] kinesisvideo:PutMedia. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.SendAlexaOfferToMaster">SendAlexaOfferToMaster</a></code> | <code>string</code> | [Write] kinesisvideo:SendAlexaOfferToMaster. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.StartEdgeConfigurationUpdate">StartEdgeConfigurationUpdate</a></code> | <code>string</code> | [Write] kinesisvideo:StartEdgeConfigurationUpdate. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] kinesisvideo:TagResource. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.TagStream">TagStream</a></code> | <code>string</code> | [Tagging] kinesisvideo:TagStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] kinesisvideo:UntagResource. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UntagStream">UntagStream</a></code> | <code>string</code> | [Tagging] kinesisvideo:UntagStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateDataRetention">UpdateDataRetention</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateDataRetention. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateImageGenerationConfiguration">UpdateImageGenerationConfiguration</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateImageGenerationConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateMediaStorageConfiguration">UpdateMediaStorageConfiguration</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateMediaStorageConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateNotificationConfiguration">UpdateNotificationConfiguration</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateSignalingChannel">UpdateSignalingChannel</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateSignalingChannel. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateStream">UpdateStream</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateStream. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateStreamStorageConfiguration">UpdateStreamStorageConfiguration</a></code> | <code>string</code> | [Write] kinesisvideo:UpdateStreamStorageConfiguration. |

---

##### `actionGetClip`<sup>Required</sup> <a name="actionGetClip" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetClip"></a>

```typescript
public readonly actionGetClip: string;
```

- *Type:* string

[Read] kinesisvideo:GetClip.

---

##### `actionGetDASHStreamingSessionURL`<sup>Required</sup> <a name="actionGetDASHStreamingSessionURL" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetDASHStreamingSessionURL"></a>

```typescript
public readonly actionGetDASHStreamingSessionURL: string;
```

- *Type:* string

[Read] kinesisvideo:GetDASHStreamingSessionURL.

---

##### `actionGetDataEndpoint`<sup>Required</sup> <a name="actionGetDataEndpoint" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetDataEndpoint"></a>

```typescript
public readonly actionGetDataEndpoint: string;
```

- *Type:* string

[Read] kinesisvideo:GetDataEndpoint.

---

##### `actionGetHLSStreamingSessionURL`<sup>Required</sup> <a name="actionGetHLSStreamingSessionURL" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetHLSStreamingSessionURL"></a>

```typescript
public readonly actionGetHLSStreamingSessionURL: string;
```

- *Type:* string

[Read] kinesisvideo:GetHLSStreamingSessionURL.

---

##### `actionGetIceServerConfig`<sup>Required</sup> <a name="actionGetIceServerConfig" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetIceServerConfig"></a>

```typescript
public readonly actionGetIceServerConfig: string;
```

- *Type:* string

[Read] kinesisvideo:GetIceServerConfig.

---

##### `actionGetImages`<sup>Required</sup> <a name="actionGetImages" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetImages"></a>

```typescript
public readonly actionGetImages: string;
```

- *Type:* string

[Read] kinesisvideo:GetImages.

---

##### `actionGetMedia`<sup>Required</sup> <a name="actionGetMedia" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetMedia"></a>

```typescript
public readonly actionGetMedia: string;
```

- *Type:* string

[Read] kinesisvideo:GetMedia.

---

##### `actionGetMediaForFragmentList`<sup>Required</sup> <a name="actionGetMediaForFragmentList" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetMediaForFragmentList"></a>

```typescript
public readonly actionGetMediaForFragmentList: string;
```

- *Type:* string

[Read] kinesisvideo:GetMediaForFragmentList.

---

##### `actionGetSignalingChannelEndpoint`<sup>Required</sup> <a name="actionGetSignalingChannelEndpoint" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.actionGetSignalingChannelEndpoint"></a>

```typescript
public readonly actionGetSignalingChannelEndpoint: string;
```

- *Type:* string

[Read] kinesisvideo:GetSignalingChannelEndpoint.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConnectAsMaster`<sup>Required</sup> <a name="ConnectAsMaster" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ConnectAsMaster"></a>

```typescript
public readonly ConnectAsMaster: string;
```

- *Type:* string

[Write] kinesisvideo:ConnectAsMaster.

---

##### `ConnectAsViewer`<sup>Required</sup> <a name="ConnectAsViewer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ConnectAsViewer"></a>

```typescript
public readonly ConnectAsViewer: string;
```

- *Type:* string

[Write] kinesisvideo:ConnectAsViewer.

---

##### `CreateSignalingChannel`<sup>Required</sup> <a name="CreateSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.CreateSignalingChannel"></a>

```typescript
public readonly CreateSignalingChannel: string;
```

- *Type:* string

[Write] kinesisvideo:CreateSignalingChannel.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.CreateStream"></a>

```typescript
public readonly CreateStream: string;
```

- *Type:* string

[Write] kinesisvideo:CreateStream.

---

##### `DeleteEdgeConfiguration`<sup>Required</sup> <a name="DeleteEdgeConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DeleteEdgeConfiguration"></a>

```typescript
public readonly DeleteEdgeConfiguration: string;
```

- *Type:* string

[Write] kinesisvideo:DeleteEdgeConfiguration.

---

##### `DeleteSignalingChannel`<sup>Required</sup> <a name="DeleteSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DeleteSignalingChannel"></a>

```typescript
public readonly DeleteSignalingChannel: string;
```

- *Type:* string

[Write] kinesisvideo:DeleteSignalingChannel.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string;
```

- *Type:* string

[Write] kinesisvideo:DeleteStream.

---

##### `DescribeEdgeConfiguration`<sup>Required</sup> <a name="DescribeEdgeConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeEdgeConfiguration"></a>

```typescript
public readonly DescribeEdgeConfiguration: string;
```

- *Type:* string

[Read] kinesisvideo:DescribeEdgeConfiguration.

---

##### `DescribeImageGenerationConfiguration`<sup>Required</sup> <a name="DescribeImageGenerationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeImageGenerationConfiguration"></a>

```typescript
public readonly DescribeImageGenerationConfiguration: string;
```

- *Type:* string

[Read] kinesisvideo:DescribeImageGenerationConfiguration.

---

##### `DescribeMappedResourceConfiguration`<sup>Required</sup> <a name="DescribeMappedResourceConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeMappedResourceConfiguration"></a>

```typescript
public readonly DescribeMappedResourceConfiguration: string;
```

- *Type:* string

[List] kinesisvideo:DescribeMappedResourceConfiguration.

---

##### `DescribeMediaStorageConfiguration`<sup>Required</sup> <a name="DescribeMediaStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeMediaStorageConfiguration"></a>

```typescript
public readonly DescribeMediaStorageConfiguration: string;
```

- *Type:* string

[Read] kinesisvideo:DescribeMediaStorageConfiguration.

---

##### `DescribeNotificationConfiguration`<sup>Required</sup> <a name="DescribeNotificationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeNotificationConfiguration"></a>

```typescript
public readonly DescribeNotificationConfiguration: string;
```

- *Type:* string

[Read] kinesisvideo:DescribeNotificationConfiguration.

---

##### `DescribeSignalingChannel`<sup>Required</sup> <a name="DescribeSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeSignalingChannel"></a>

```typescript
public readonly DescribeSignalingChannel: string;
```

- *Type:* string

[List] kinesisvideo:DescribeSignalingChannel.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string;
```

- *Type:* string

[List] kinesisvideo:DescribeStream.

---

##### `DescribeStreamStorageConfiguration`<sup>Required</sup> <a name="DescribeStreamStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.DescribeStreamStorageConfiguration"></a>

```typescript
public readonly DescribeStreamStorageConfiguration: string;
```

- *Type:* string

[Read] kinesisvideo:DescribeStreamStorageConfiguration.

---

##### `JoinStorageSession`<sup>Required</sup> <a name="JoinStorageSession" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.JoinStorageSession"></a>

```typescript
public readonly JoinStorageSession: string;
```

- *Type:* string

[Write] kinesisvideo:JoinStorageSession.

---

##### `JoinStorageSessionAsViewer`<sup>Required</sup> <a name="JoinStorageSessionAsViewer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.JoinStorageSessionAsViewer"></a>

```typescript
public readonly JoinStorageSessionAsViewer: string;
```

- *Type:* string

[Write] kinesisvideo:JoinStorageSessionAsViewer.

---

##### `ListEdgeAgentConfigurations`<sup>Required</sup> <a name="ListEdgeAgentConfigurations" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListEdgeAgentConfigurations"></a>

```typescript
public readonly ListEdgeAgentConfigurations: string;
```

- *Type:* string

[List] kinesisvideo:ListEdgeAgentConfigurations.

---

##### `ListFragments`<sup>Required</sup> <a name="ListFragments" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListFragments"></a>

```typescript
public readonly ListFragments: string;
```

- *Type:* string

[List] kinesisvideo:ListFragments.

---

##### `ListSignalingChannels`<sup>Required</sup> <a name="ListSignalingChannels" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListSignalingChannels"></a>

```typescript
public readonly ListSignalingChannels: string;
```

- *Type:* string

[List] kinesisvideo:ListSignalingChannels.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListStreams"></a>

```typescript
public readonly ListStreams: string;
```

- *Type:* string

[List] kinesisvideo:ListStreams.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] kinesisvideo:ListTagsForResource.

---

##### `ListTagsForStream`<sup>Required</sup> <a name="ListTagsForStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.ListTagsForStream"></a>

```typescript
public readonly ListTagsForStream: string;
```

- *Type:* string

[Read] kinesisvideo:ListTagsForStream.

---

##### `PutMedia`<sup>Required</sup> <a name="PutMedia" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.PutMedia"></a>

```typescript
public readonly PutMedia: string;
```

- *Type:* string

[Write] kinesisvideo:PutMedia.

---

##### `SendAlexaOfferToMaster`<sup>Required</sup> <a name="SendAlexaOfferToMaster" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.SendAlexaOfferToMaster"></a>

```typescript
public readonly SendAlexaOfferToMaster: string;
```

- *Type:* string

[Write] kinesisvideo:SendAlexaOfferToMaster.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartEdgeConfigurationUpdate`<sup>Required</sup> <a name="StartEdgeConfigurationUpdate" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.StartEdgeConfigurationUpdate"></a>

```typescript
public readonly StartEdgeConfigurationUpdate: string;
```

- *Type:* string

[Write] kinesisvideo:StartEdgeConfigurationUpdate.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] kinesisvideo:TagResource.

---

##### `TagStream`<sup>Required</sup> <a name="TagStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.TagStream"></a>

```typescript
public readonly TagStream: string;
```

- *Type:* string

[Tagging] kinesisvideo:TagStream.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] kinesisvideo:UntagResource.

---

##### `UntagStream`<sup>Required</sup> <a name="UntagStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UntagStream"></a>

```typescript
public readonly UntagStream: string;
```

- *Type:* string

[Tagging] kinesisvideo:UntagStream.

---

##### `UpdateDataRetention`<sup>Required</sup> <a name="UpdateDataRetention" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateDataRetention"></a>

```typescript
public readonly UpdateDataRetention: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateDataRetention.

---

##### `UpdateImageGenerationConfiguration`<sup>Required</sup> <a name="UpdateImageGenerationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateImageGenerationConfiguration"></a>

```typescript
public readonly UpdateImageGenerationConfiguration: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateImageGenerationConfiguration.

---

##### `UpdateMediaStorageConfiguration`<sup>Required</sup> <a name="UpdateMediaStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateMediaStorageConfiguration"></a>

```typescript
public readonly UpdateMediaStorageConfiguration: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateMediaStorageConfiguration.

---

##### `UpdateNotificationConfiguration`<sup>Required</sup> <a name="UpdateNotificationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateNotificationConfiguration"></a>

```typescript
public readonly UpdateNotificationConfiguration: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateNotificationConfiguration.

---

##### `UpdateSignalingChannel`<sup>Required</sup> <a name="UpdateSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateSignalingChannel"></a>

```typescript
public readonly UpdateSignalingChannel: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateSignalingChannel.

---

##### `UpdateStream`<sup>Required</sup> <a name="UpdateStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateStream"></a>

```typescript
public readonly UpdateStream: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateStream.

---

##### `UpdateStreamStorageConfiguration`<sup>Required</sup> <a name="UpdateStreamStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoActions.property.UpdateStreamStorageConfiguration"></a>

```typescript
public readonly UpdateStreamStorageConfiguration: string;
```

- *Type:* string

[Write] kinesisvideo:UpdateStreamStorageConfiguration.

---

### KinesisvideoConditions <a name="KinesisvideoConditions" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions"></a>

Condition key constants and builders for kinesisvideo.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

new kinesisvideo.KinesisvideoConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.requestTag"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.resourceTag"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.tagKeys"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.CreateSignalingChannelConditionKeys">CreateSignalingChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSignalingChannel action. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.CreateStreamConditionKeys">CreateStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateStream action. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.TagStreamConditionKeys">TagStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagStream action. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.UntagStreamConditionKeys">UntagStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagStream action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSignalingChannelConditionKeys`<sup>Required</sup> <a name="CreateSignalingChannelConditionKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.CreateSignalingChannelConditionKeys"></a>

```typescript
public readonly CreateSignalingChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSignalingChannel action.

---

##### `CreateStreamConditionKeys`<sup>Required</sup> <a name="CreateStreamConditionKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.CreateStreamConditionKeys"></a>

```typescript
public readonly CreateStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateStream action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TagStreamConditionKeys`<sup>Required</sup> <a name="TagStreamConditionKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.TagStreamConditionKeys"></a>

```typescript
public readonly TagStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagStream action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UntagStreamConditionKeys`<sup>Required</sup> <a name="UntagStreamConditionKeys" id="@cdk_utils/iam.kinesisvideo.KinesisvideoConditions.property.UntagStreamConditionKeys"></a>

```typescript
public readonly UntagStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagStream action.

---

### KinesisvideoOperations <a name="KinesisvideoOperations" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations"></a>

API operation to required IAM actions mapping for kinesisvideo.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

new kinesisvideo.KinesisvideoOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.CreateSignalingChannel">CreateSignalingChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateSignalingChannel API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.CreateStream">CreateStream</a></code> | <code>string[]</code> | IAM actions required for the CreateStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DeleteEdgeConfiguration">DeleteEdgeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteEdgeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DeleteSignalingChannel">DeleteSignalingChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteSignalingChannel API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DeleteStream">DeleteStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeEdgeConfiguration">DescribeEdgeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeEdgeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeImageGenerationConfiguration">DescribeImageGenerationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeImageGenerationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeMappedResourceConfiguration">DescribeMappedResourceConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeMappedResourceConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeMediaStorageConfiguration">DescribeMediaStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeMediaStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeNotificationConfiguration">DescribeNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeSignalingChannel">DescribeSignalingChannel</a></code> | <code>string[]</code> | IAM actions required for the DescribeSignalingChannel API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeStream">DescribeStream</a></code> | <code>string[]</code> | IAM actions required for the DescribeStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeStreamStorageConfiguration">DescribeStreamStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeStreamStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.JoinStorageSession">JoinStorageSession</a></code> | <code>string[]</code> | IAM actions required for the JoinStorageSession API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.JoinStorageSessionAsViewer">JoinStorageSessionAsViewer</a></code> | <code>string[]</code> | IAM actions required for the JoinStorageSessionAsViewer API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListEdgeAgentConfigurations">ListEdgeAgentConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListEdgeAgentConfigurations API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListFragments">ListFragments</a></code> | <code>string[]</code> | IAM actions required for the ListFragments API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListSignalingChannels">ListSignalingChannels</a></code> | <code>string[]</code> | IAM actions required for the ListSignalingChannels API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListStreams">ListStreams</a></code> | <code>string[]</code> | IAM actions required for the ListStreams API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListTagsForStream">ListTagsForStream</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetClip">opGetClip</a></code> | <code>string[]</code> | IAM actions required for the GetClip API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetDASHStreamingSessionURL">opGetDASHStreamingSessionURL</a></code> | <code>string[]</code> | IAM actions required for the GetDASHStreamingSessionURL API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetDataEndpoint">opGetDataEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetDataEndpoint API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetHLSStreamingSessionURL">opGetHLSStreamingSessionURL</a></code> | <code>string[]</code> | IAM actions required for the GetHLSStreamingSessionURL API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetIceServerConfig">opGetIceServerConfig</a></code> | <code>string[]</code> | IAM actions required for the GetIceServerConfig API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetImages">opGetImages</a></code> | <code>string[]</code> | IAM actions required for the GetImages API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetMedia">opGetMedia</a></code> | <code>string[]</code> | IAM actions required for the GetMedia API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetMediaForFragmentList">opGetMediaForFragmentList</a></code> | <code>string[]</code> | IAM actions required for the GetMediaForFragmentList API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetSignalingChannelEndpoint">opGetSignalingChannelEndpoint</a></code> | <code>string[]</code> | IAM actions required for the GetSignalingChannelEndpoint API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.SendAlexaOfferToMaster">SendAlexaOfferToMaster</a></code> | <code>string[]</code> | IAM actions required for the SendAlexaOfferToMaster API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.StartEdgeConfigurationUpdate">StartEdgeConfigurationUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartEdgeConfigurationUpdate API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.TagStream">TagStream</a></code> | <code>string[]</code> | IAM actions required for the TagStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UntagStream">UntagStream</a></code> | <code>string[]</code> | IAM actions required for the UntagStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateDataRetention">UpdateDataRetention</a></code> | <code>string[]</code> | IAM actions required for the UpdateDataRetention API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateImageGenerationConfiguration">UpdateImageGenerationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateImageGenerationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateMediaStorageConfiguration">UpdateMediaStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateMediaStorageConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateNotificationConfiguration">UpdateNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateSignalingChannel">UpdateSignalingChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateSignalingChannel API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateStream">UpdateStream</a></code> | <code>string[]</code> | IAM actions required for the UpdateStream API call. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateStreamStorageConfiguration">UpdateStreamStorageConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateStreamStorageConfiguration API call. |

---

##### `CreateSignalingChannel`<sup>Required</sup> <a name="CreateSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.CreateSignalingChannel"></a>

```typescript
public readonly CreateSignalingChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateSignalingChannel API call.

---

##### `CreateStream`<sup>Required</sup> <a name="CreateStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.CreateStream"></a>

```typescript
public readonly CreateStream: string[];
```

- *Type:* string[]

IAM actions required for the CreateStream API call.

---

##### `DeleteEdgeConfiguration`<sup>Required</sup> <a name="DeleteEdgeConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DeleteEdgeConfiguration"></a>

```typescript
public readonly DeleteEdgeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEdgeConfiguration API call.

---

##### `DeleteSignalingChannel`<sup>Required</sup> <a name="DeleteSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DeleteSignalingChannel"></a>

```typescript
public readonly DeleteSignalingChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSignalingChannel API call.

---

##### `DeleteStream`<sup>Required</sup> <a name="DeleteStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DeleteStream"></a>

```typescript
public readonly DeleteStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteStream API call.

---

##### `DescribeEdgeConfiguration`<sup>Required</sup> <a name="DescribeEdgeConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeEdgeConfiguration"></a>

```typescript
public readonly DescribeEdgeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEdgeConfiguration API call.

---

##### `DescribeImageGenerationConfiguration`<sup>Required</sup> <a name="DescribeImageGenerationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeImageGenerationConfiguration"></a>

```typescript
public readonly DescribeImageGenerationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeImageGenerationConfiguration API call.

---

##### `DescribeMappedResourceConfiguration`<sup>Required</sup> <a name="DescribeMappedResourceConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeMappedResourceConfiguration"></a>

```typescript
public readonly DescribeMappedResourceConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMappedResourceConfiguration API call.

---

##### `DescribeMediaStorageConfiguration`<sup>Required</sup> <a name="DescribeMediaStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeMediaStorageConfiguration"></a>

```typescript
public readonly DescribeMediaStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMediaStorageConfiguration API call.

---

##### `DescribeNotificationConfiguration`<sup>Required</sup> <a name="DescribeNotificationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeNotificationConfiguration"></a>

```typescript
public readonly DescribeNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotificationConfiguration API call.

---

##### `DescribeSignalingChannel`<sup>Required</sup> <a name="DescribeSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeSignalingChannel"></a>

```typescript
public readonly DescribeSignalingChannel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSignalingChannel API call.

---

##### `DescribeStream`<sup>Required</sup> <a name="DescribeStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeStream"></a>

```typescript
public readonly DescribeStream: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStream API call.

---

##### `DescribeStreamStorageConfiguration`<sup>Required</sup> <a name="DescribeStreamStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.DescribeStreamStorageConfiguration"></a>

```typescript
public readonly DescribeStreamStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeStreamStorageConfiguration API call.

---

##### `JoinStorageSession`<sup>Required</sup> <a name="JoinStorageSession" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.JoinStorageSession"></a>

```typescript
public readonly JoinStorageSession: string[];
```

- *Type:* string[]

IAM actions required for the JoinStorageSession API call.

---

##### `JoinStorageSessionAsViewer`<sup>Required</sup> <a name="JoinStorageSessionAsViewer" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.JoinStorageSessionAsViewer"></a>

```typescript
public readonly JoinStorageSessionAsViewer: string[];
```

- *Type:* string[]

IAM actions required for the JoinStorageSessionAsViewer API call.

---

##### `ListEdgeAgentConfigurations`<sup>Required</sup> <a name="ListEdgeAgentConfigurations" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListEdgeAgentConfigurations"></a>

```typescript
public readonly ListEdgeAgentConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListEdgeAgentConfigurations API call.

---

##### `ListFragments`<sup>Required</sup> <a name="ListFragments" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListFragments"></a>

```typescript
public readonly ListFragments: string[];
```

- *Type:* string[]

IAM actions required for the ListFragments API call.

---

##### `ListSignalingChannels`<sup>Required</sup> <a name="ListSignalingChannels" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListSignalingChannels"></a>

```typescript
public readonly ListSignalingChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListSignalingChannels API call.

---

##### `ListStreams`<sup>Required</sup> <a name="ListStreams" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListStreams"></a>

```typescript
public readonly ListStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListStreams API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTagsForStream`<sup>Required</sup> <a name="ListTagsForStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.ListTagsForStream"></a>

```typescript
public readonly ListTagsForStream: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForStream API call.

---

##### `opGetClip`<sup>Required</sup> <a name="opGetClip" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetClip"></a>

```typescript
public readonly opGetClip: string[];
```

- *Type:* string[]

IAM actions required for the GetClip API call.

---

##### `opGetDASHStreamingSessionURL`<sup>Required</sup> <a name="opGetDASHStreamingSessionURL" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetDASHStreamingSessionURL"></a>

```typescript
public readonly opGetDASHStreamingSessionURL: string[];
```

- *Type:* string[]

IAM actions required for the GetDASHStreamingSessionURL API call.

---

##### `opGetDataEndpoint`<sup>Required</sup> <a name="opGetDataEndpoint" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetDataEndpoint"></a>

```typescript
public readonly opGetDataEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetDataEndpoint API call.

---

##### `opGetHLSStreamingSessionURL`<sup>Required</sup> <a name="opGetHLSStreamingSessionURL" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetHLSStreamingSessionURL"></a>

```typescript
public readonly opGetHLSStreamingSessionURL: string[];
```

- *Type:* string[]

IAM actions required for the GetHLSStreamingSessionURL API call.

---

##### `opGetIceServerConfig`<sup>Required</sup> <a name="opGetIceServerConfig" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetIceServerConfig"></a>

```typescript
public readonly opGetIceServerConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetIceServerConfig API call.

---

##### `opGetImages`<sup>Required</sup> <a name="opGetImages" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetImages"></a>

```typescript
public readonly opGetImages: string[];
```

- *Type:* string[]

IAM actions required for the GetImages API call.

---

##### `opGetMedia`<sup>Required</sup> <a name="opGetMedia" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetMedia"></a>

```typescript
public readonly opGetMedia: string[];
```

- *Type:* string[]

IAM actions required for the GetMedia API call.

---

##### `opGetMediaForFragmentList`<sup>Required</sup> <a name="opGetMediaForFragmentList" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetMediaForFragmentList"></a>

```typescript
public readonly opGetMediaForFragmentList: string[];
```

- *Type:* string[]

IAM actions required for the GetMediaForFragmentList API call.

---

##### `opGetSignalingChannelEndpoint`<sup>Required</sup> <a name="opGetSignalingChannelEndpoint" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.opGetSignalingChannelEndpoint"></a>

```typescript
public readonly opGetSignalingChannelEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the GetSignalingChannelEndpoint API call.

---

##### `SendAlexaOfferToMaster`<sup>Required</sup> <a name="SendAlexaOfferToMaster" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.SendAlexaOfferToMaster"></a>

```typescript
public readonly SendAlexaOfferToMaster: string[];
```

- *Type:* string[]

IAM actions required for the SendAlexaOfferToMaster API call.

---

##### `StartEdgeConfigurationUpdate`<sup>Required</sup> <a name="StartEdgeConfigurationUpdate" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.StartEdgeConfigurationUpdate"></a>

```typescript
public readonly StartEdgeConfigurationUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartEdgeConfigurationUpdate API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TagStream`<sup>Required</sup> <a name="TagStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.TagStream"></a>

```typescript
public readonly TagStream: string[];
```

- *Type:* string[]

IAM actions required for the TagStream API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UntagStream`<sup>Required</sup> <a name="UntagStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UntagStream"></a>

```typescript
public readonly UntagStream: string[];
```

- *Type:* string[]

IAM actions required for the UntagStream API call.

---

##### `UpdateDataRetention`<sup>Required</sup> <a name="UpdateDataRetention" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateDataRetention"></a>

```typescript
public readonly UpdateDataRetention: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDataRetention API call.

---

##### `UpdateImageGenerationConfiguration`<sup>Required</sup> <a name="UpdateImageGenerationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateImageGenerationConfiguration"></a>

```typescript
public readonly UpdateImageGenerationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateImageGenerationConfiguration API call.

---

##### `UpdateMediaStorageConfiguration`<sup>Required</sup> <a name="UpdateMediaStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateMediaStorageConfiguration"></a>

```typescript
public readonly UpdateMediaStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMediaStorageConfiguration API call.

---

##### `UpdateNotificationConfiguration`<sup>Required</sup> <a name="UpdateNotificationConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateNotificationConfiguration"></a>

```typescript
public readonly UpdateNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotificationConfiguration API call.

---

##### `UpdateSignalingChannel`<sup>Required</sup> <a name="UpdateSignalingChannel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateSignalingChannel"></a>

```typescript
public readonly UpdateSignalingChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSignalingChannel API call.

---

##### `UpdateStream`<sup>Required</sup> <a name="UpdateStream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateStream"></a>

```typescript
public readonly UpdateStream: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStream API call.

---

##### `UpdateStreamStorageConfiguration`<sup>Required</sup> <a name="UpdateStreamStorageConfiguration" id="@cdk_utils/iam.kinesisvideo.KinesisvideoOperations.property.UpdateStreamStorageConfiguration"></a>

```typescript
public readonly UpdateStreamStorageConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateStreamStorageConfiguration API call.

---

### KinesisvideoResources <a name="KinesisvideoResources" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources"></a>

ARN builders, validators, and parsers for kinesisvideo resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.Initializer"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

new kinesisvideo.KinesisvideoResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoResources.channel">channel</a></code> | Builds an ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoResources.isValidChannelArn">isValidChannelArn</a></code> | Validates whether a string is a valid ARN for the channel resource. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoResources.isValidStreamArn">isValidStreamArn</a></code> | Validates whether a string is a valid ARN for the stream resource. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoResources.parseChannelArn">parseChannelArn</a></code> | Parses a channel ARN into its components. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoResources.parseStreamArn">parseStreamArn</a></code> | Parses a stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoResources.stream">stream</a></code> | Builds an ARN for the stream resource. |

---

##### `channel` <a name="channel" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.channel"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoResources.channel(props: KinesisvideoChannelArnProps)
```

Builds an ARN for the channel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.channel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoChannelArnProps">KinesisvideoChannelArnProps</a>

---

##### `isValidChannelArn` <a name="isValidChannelArn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.isValidChannelArn"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoResources.isValidChannelArn(arn: string)
```

Validates whether a string is a valid ARN for the channel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.isValidChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidStreamArn` <a name="isValidStreamArn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.isValidStreamArn"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoResources.isValidStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.isValidStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChannelArn` <a name="parseChannelArn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.parseChannelArn"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoResources.parseChannelArn(arn: string)
```

Parses a channel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.parseChannelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseStreamArn` <a name="parseStreamArn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.parseStreamArn"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoResources.parseStreamArn(arn: string)
```

Parses a stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.parseStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `stream` <a name="stream" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.stream"></a>

```typescript
import { kinesisvideo } from '@cdk_utils/iam'

kinesisvideo.KinesisvideoResources.stream(props: KinesisvideoStreamArnProps)
```

Builds an ARN for the stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.kinesisvideo.KinesisvideoResources.stream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.kinesisvideo.KinesisvideoStreamArnProps">KinesisvideoStreamArnProps</a>

---




