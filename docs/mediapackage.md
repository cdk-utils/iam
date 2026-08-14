# `mediapackage` Submodule <a name="`mediapackage` Submodule" id="@cdk_utils/iam.mediapackage"></a>


## Structs <a name="Structs" id="Structs"></a>

### MediaPackageChannelsArnComponents <a name="MediaPackageChannelsArnComponents" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents"></a>

Parsed components of a channels ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

const mediaPackageChannelsArnComponents: mediapackage.MediaPackageChannelsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.channelIdentifier">channelIdentifier</a></code> | <code>string</code> | The ChannelIdentifier component. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `channelIdentifier`<sup>Required</sup> <a name="channelIdentifier" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.channelIdentifier"></a>

```typescript
public readonly channelIdentifier: string;
```

- *Type:* string

The ChannelIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaPackageChannelsArnProps <a name="MediaPackageChannelsArnProps" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps"></a>

Properties for building a channels ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

const mediaPackageChannelsArnProps: mediapackage.MediaPackageChannelsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.channelIdentifier">channelIdentifier</a></code> | <code>string</code> | The ChannelIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `channelIdentifier`<sup>Required</sup> <a name="channelIdentifier" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.channelIdentifier"></a>

```typescript
public readonly channelIdentifier: string;
```

- *Type:* string

The ChannelIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaPackageHarvestJobsArnComponents <a name="MediaPackageHarvestJobsArnComponents" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents"></a>

Parsed components of a harvest_jobs ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

const mediaPackageHarvestJobsArnComponents: mediapackage.MediaPackageHarvestJobsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.harvestJobIdentifier">harvestJobIdentifier</a></code> | <code>string</code> | The HarvestJobIdentifier component. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `harvestJobIdentifier`<sup>Required</sup> <a name="harvestJobIdentifier" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.harvestJobIdentifier"></a>

```typescript
public readonly harvestJobIdentifier: string;
```

- *Type:* string

The HarvestJobIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaPackageHarvestJobsArnProps <a name="MediaPackageHarvestJobsArnProps" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps"></a>

Properties for building a harvest_jobs ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

const mediaPackageHarvestJobsArnProps: mediapackage.MediaPackageHarvestJobsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.harvestJobIdentifier">harvestJobIdentifier</a></code> | <code>string</code> | The HarvestJobIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `harvestJobIdentifier`<sup>Required</sup> <a name="harvestJobIdentifier" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.harvestJobIdentifier"></a>

```typescript
public readonly harvestJobIdentifier: string;
```

- *Type:* string

The HarvestJobIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### MediaPackageOriginEndpointsArnComponents <a name="MediaPackageOriginEndpointsArnComponents" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents"></a>

Parsed components of a origin_endpoints ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

const mediaPackageOriginEndpointsArnComponents: mediapackage.MediaPackageOriginEndpointsArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.originEndpointIdentifier">originEndpointIdentifier</a></code> | <code>string</code> | The OriginEndpointIdentifier component. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `originEndpointIdentifier`<sup>Required</sup> <a name="originEndpointIdentifier" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.originEndpointIdentifier"></a>

```typescript
public readonly originEndpointIdentifier: string;
```

- *Type:* string

The OriginEndpointIdentifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### MediaPackageOriginEndpointsArnProps <a name="MediaPackageOriginEndpointsArnProps" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps"></a>

Properties for building a origin_endpoints ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

const mediaPackageOriginEndpointsArnProps: mediapackage.MediaPackageOriginEndpointsArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.originEndpointIdentifier">originEndpointIdentifier</a></code> | <code>string</code> | The OriginEndpointIdentifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `originEndpointIdentifier`<sup>Required</sup> <a name="originEndpointIdentifier" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.originEndpointIdentifier"></a>

```typescript
public readonly originEndpointIdentifier: string;
```

- *Type:* string

The OriginEndpointIdentifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### MediaPackageActions <a name="MediaPackageActions" id="@cdk_utils/iam.mediapackage.MediaPackageActions"></a>

IAM action constants for the mediapackage service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage.MediaPackageActions.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

new mediapackage.MediaPackageActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.ConfigureLogs">ConfigureLogs</a></code> | <code>string</code> | [Write] mediapackage:ConfigureLogs. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.CreateChannel">CreateChannel</a></code> | <code>string</code> | [Write] mediapackage:CreateChannel. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.CreateHarvestJob">CreateHarvestJob</a></code> | <code>string</code> | [Write] mediapackage:CreateHarvestJob. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.CreateOriginEndpoint">CreateOriginEndpoint</a></code> | <code>string</code> | [Write] mediapackage:CreateOriginEndpoint. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.DeleteChannel">DeleteChannel</a></code> | <code>string</code> | [Write] mediapackage:DeleteChannel. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.DeleteOriginEndpoint">DeleteOriginEndpoint</a></code> | <code>string</code> | [Write] mediapackage:DeleteOriginEndpoint. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.DescribeChannel">DescribeChannel</a></code> | <code>string</code> | [Read] mediapackage:DescribeChannel. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.DescribeHarvestJob">DescribeHarvestJob</a></code> | <code>string</code> | [Read] mediapackage:DescribeHarvestJob. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.DescribeOriginEndpoint">DescribeOriginEndpoint</a></code> | <code>string</code> | [Read] mediapackage:DescribeOriginEndpoint. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListChannels">ListChannels</a></code> | <code>string</code> | [Read] mediapackage:ListChannels. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListHarvestJobs">ListHarvestJobs</a></code> | <code>string</code> | [Read] mediapackage:ListHarvestJobs. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListOriginEndpoints">ListOriginEndpoints</a></code> | <code>string</code> | [Read] mediapackage:ListOriginEndpoints. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] mediapackage:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.RotateChannelCredentials">RotateChannelCredentials</a></code> | <code>string</code> | [Write] mediapackage:RotateChannelCredentials. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.RotateIngestEndpointCredentials">RotateIngestEndpointCredentials</a></code> | <code>string</code> | [Write] mediapackage:RotateIngestEndpointCredentials. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] mediapackage:TagResource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] mediapackage:UntagResource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.UpdateChannel">UpdateChannel</a></code> | <code>string</code> | [Write] mediapackage:UpdateChannel. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageActions.property.UpdateOriginEndpoint">UpdateOriginEndpoint</a></code> | <code>string</code> | [Write] mediapackage:UpdateOriginEndpoint. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ConfigureLogs`<sup>Required</sup> <a name="ConfigureLogs" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.ConfigureLogs"></a>

```typescript
public readonly ConfigureLogs: string;
```

- *Type:* string

[Write] mediapackage:ConfigureLogs.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string;
```

- *Type:* string

[Write] mediapackage:CreateChannel.

---

##### `CreateHarvestJob`<sup>Required</sup> <a name="CreateHarvestJob" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.CreateHarvestJob"></a>

```typescript
public readonly CreateHarvestJob: string;
```

- *Type:* string

[Write] mediapackage:CreateHarvestJob.

---

##### `CreateOriginEndpoint`<sup>Required</sup> <a name="CreateOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.CreateOriginEndpoint"></a>

```typescript
public readonly CreateOriginEndpoint: string;
```

- *Type:* string

[Write] mediapackage:CreateOriginEndpoint.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string;
```

- *Type:* string

[Write] mediapackage:DeleteChannel.

---

##### `DeleteOriginEndpoint`<sup>Required</sup> <a name="DeleteOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.DeleteOriginEndpoint"></a>

```typescript
public readonly DeleteOriginEndpoint: string;
```

- *Type:* string

[Write] mediapackage:DeleteOriginEndpoint.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string;
```

- *Type:* string

[Read] mediapackage:DescribeChannel.

---

##### `DescribeHarvestJob`<sup>Required</sup> <a name="DescribeHarvestJob" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.DescribeHarvestJob"></a>

```typescript
public readonly DescribeHarvestJob: string;
```

- *Type:* string

[Read] mediapackage:DescribeHarvestJob.

---

##### `DescribeOriginEndpoint`<sup>Required</sup> <a name="DescribeOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.DescribeOriginEndpoint"></a>

```typescript
public readonly DescribeOriginEndpoint: string;
```

- *Type:* string

[Read] mediapackage:DescribeOriginEndpoint.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListChannels"></a>

```typescript
public readonly ListChannels: string;
```

- *Type:* string

[Read] mediapackage:ListChannels.

---

##### `ListHarvestJobs`<sup>Required</sup> <a name="ListHarvestJobs" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListHarvestJobs"></a>

```typescript
public readonly ListHarvestJobs: string;
```

- *Type:* string

[Read] mediapackage:ListHarvestJobs.

---

##### `ListOriginEndpoints`<sup>Required</sup> <a name="ListOriginEndpoints" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListOriginEndpoints"></a>

```typescript
public readonly ListOriginEndpoints: string;
```

- *Type:* string

[Read] mediapackage:ListOriginEndpoints.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] mediapackage:ListTagsForResource.

---

##### `RotateChannelCredentials`<sup>Required</sup> <a name="RotateChannelCredentials" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.RotateChannelCredentials"></a>

```typescript
public readonly RotateChannelCredentials: string;
```

- *Type:* string

[Write] mediapackage:RotateChannelCredentials.

---

##### `RotateIngestEndpointCredentials`<sup>Required</sup> <a name="RotateIngestEndpointCredentials" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.RotateIngestEndpointCredentials"></a>

```typescript
public readonly RotateIngestEndpointCredentials: string;
```

- *Type:* string

[Write] mediapackage:RotateIngestEndpointCredentials.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] mediapackage:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] mediapackage:UntagResource.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string;
```

- *Type:* string

[Write] mediapackage:UpdateChannel.

---

##### `UpdateOriginEndpoint`<sup>Required</sup> <a name="UpdateOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageActions.property.UpdateOriginEndpoint"></a>

```typescript
public readonly UpdateOriginEndpoint: string;
```

- *Type:* string

[Write] mediapackage:UpdateOriginEndpoint.

---

### MediaPackageConditions <a name="MediaPackageConditions" id="@cdk_utils/iam.mediapackage.MediaPackageConditions"></a>

Condition key constants and builders for mediapackage.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

new mediapackage.MediaPackageConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.requestTag"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.resourceTag"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.tagKeys"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.CreateChannelConditionKeys">CreateChannelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChannel action. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.CreateHarvestJobConditionKeys">CreateHarvestJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateHarvestJob action. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.CreateOriginEndpointConditionKeys">CreateOriginEndpointConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOriginEndpoint action. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChannelConditionKeys`<sup>Required</sup> <a name="CreateChannelConditionKeys" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.CreateChannelConditionKeys"></a>

```typescript
public readonly CreateChannelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChannel action.

---

##### `CreateHarvestJobConditionKeys`<sup>Required</sup> <a name="CreateHarvestJobConditionKeys" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.CreateHarvestJobConditionKeys"></a>

```typescript
public readonly CreateHarvestJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateHarvestJob action.

---

##### `CreateOriginEndpointConditionKeys`<sup>Required</sup> <a name="CreateOriginEndpointConditionKeys" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.CreateOriginEndpointConditionKeys"></a>

```typescript
public readonly CreateOriginEndpointConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOriginEndpoint action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.mediapackage.MediaPackageConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### MediaPackageOperations <a name="MediaPackageOperations" id="@cdk_utils/iam.mediapackage.MediaPackageOperations"></a>

API operation to required IAM actions mapping for mediapackage.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

new mediapackage.MediaPackageOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ConfigureLogs">ConfigureLogs</a></code> | <code>string[]</code> | IAM actions required for the ConfigureLogs API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.CreateChannel">CreateChannel</a></code> | <code>string[]</code> | IAM actions required for the CreateChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.CreateHarvestJob">CreateHarvestJob</a></code> | <code>string[]</code> | IAM actions required for the CreateHarvestJob API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.CreateOriginEndpoint">CreateOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreateOriginEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DeleteChannel">DeleteChannel</a></code> | <code>string[]</code> | IAM actions required for the DeleteChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DeleteOriginEndpoint">DeleteOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteOriginEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DescribeChannel">DescribeChannel</a></code> | <code>string[]</code> | IAM actions required for the DescribeChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DescribeHarvestJob">DescribeHarvestJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeHarvestJob API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DescribeOriginEndpoint">DescribeOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DescribeOriginEndpoint API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListChannels">ListChannels</a></code> | <code>string[]</code> | IAM actions required for the ListChannels API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListHarvestJobs">ListHarvestJobs</a></code> | <code>string[]</code> | IAM actions required for the ListHarvestJobs API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListOriginEndpoints">ListOriginEndpoints</a></code> | <code>string[]</code> | IAM actions required for the ListOriginEndpoints API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.RotateChannelCredentials">RotateChannelCredentials</a></code> | <code>string[]</code> | IAM actions required for the RotateChannelCredentials API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.RotateIngestEndpointCredentials">RotateIngestEndpointCredentials</a></code> | <code>string[]</code> | IAM actions required for the RotateIngestEndpointCredentials API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.UpdateChannel">UpdateChannel</a></code> | <code>string[]</code> | IAM actions required for the UpdateChannel API call. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageOperations.property.UpdateOriginEndpoint">UpdateOriginEndpoint</a></code> | <code>string[]</code> | IAM actions required for the UpdateOriginEndpoint API call. |

---

##### `ConfigureLogs`<sup>Required</sup> <a name="ConfigureLogs" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ConfigureLogs"></a>

```typescript
public readonly ConfigureLogs: string[];
```

- *Type:* string[]

IAM actions required for the ConfigureLogs API call.

---

##### `CreateChannel`<sup>Required</sup> <a name="CreateChannel" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.CreateChannel"></a>

```typescript
public readonly CreateChannel: string[];
```

- *Type:* string[]

IAM actions required for the CreateChannel API call.

---

##### `CreateHarvestJob`<sup>Required</sup> <a name="CreateHarvestJob" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.CreateHarvestJob"></a>

```typescript
public readonly CreateHarvestJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateHarvestJob API call.

---

##### `CreateOriginEndpoint`<sup>Required</sup> <a name="CreateOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.CreateOriginEndpoint"></a>

```typescript
public readonly CreateOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreateOriginEndpoint API call.

---

##### `DeleteChannel`<sup>Required</sup> <a name="DeleteChannel" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DeleteChannel"></a>

```typescript
public readonly DeleteChannel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChannel API call.

---

##### `DeleteOriginEndpoint`<sup>Required</sup> <a name="DeleteOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DeleteOriginEndpoint"></a>

```typescript
public readonly DeleteOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteOriginEndpoint API call.

---

##### `DescribeChannel`<sup>Required</sup> <a name="DescribeChannel" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DescribeChannel"></a>

```typescript
public readonly DescribeChannel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChannel API call.

---

##### `DescribeHarvestJob`<sup>Required</sup> <a name="DescribeHarvestJob" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DescribeHarvestJob"></a>

```typescript
public readonly DescribeHarvestJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeHarvestJob API call.

---

##### `DescribeOriginEndpoint`<sup>Required</sup> <a name="DescribeOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.DescribeOriginEndpoint"></a>

```typescript
public readonly DescribeOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOriginEndpoint API call.

---

##### `ListChannels`<sup>Required</sup> <a name="ListChannels" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListChannels"></a>

```typescript
public readonly ListChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListChannels API call.

---

##### `ListHarvestJobs`<sup>Required</sup> <a name="ListHarvestJobs" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListHarvestJobs"></a>

```typescript
public readonly ListHarvestJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListHarvestJobs API call.

---

##### `ListOriginEndpoints`<sup>Required</sup> <a name="ListOriginEndpoints" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListOriginEndpoints"></a>

```typescript
public readonly ListOriginEndpoints: string[];
```

- *Type:* string[]

IAM actions required for the ListOriginEndpoints API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `RotateChannelCredentials`<sup>Required</sup> <a name="RotateChannelCredentials" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.RotateChannelCredentials"></a>

```typescript
public readonly RotateChannelCredentials: string[];
```

- *Type:* string[]

IAM actions required for the RotateChannelCredentials API call.

---

##### `RotateIngestEndpointCredentials`<sup>Required</sup> <a name="RotateIngestEndpointCredentials" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.RotateIngestEndpointCredentials"></a>

```typescript
public readonly RotateIngestEndpointCredentials: string[];
```

- *Type:* string[]

IAM actions required for the RotateIngestEndpointCredentials API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateChannel`<sup>Required</sup> <a name="UpdateChannel" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.UpdateChannel"></a>

```typescript
public readonly UpdateChannel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChannel API call.

---

##### `UpdateOriginEndpoint`<sup>Required</sup> <a name="UpdateOriginEndpoint" id="@cdk_utils/iam.mediapackage.MediaPackageOperations.property.UpdateOriginEndpoint"></a>

```typescript
public readonly UpdateOriginEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the UpdateOriginEndpoint API call.

---

### MediaPackageResources <a name="MediaPackageResources" id="@cdk_utils/iam.mediapackage.MediaPackageResources"></a>

ARN builders, validators, and parsers for mediapackage resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.mediapackage.MediaPackageResources.Initializer"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

new mediapackage.MediaPackageResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.channels">channels</a></code> | Builds an ARN for the channels resource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.harvestJobs">harvestJobs</a></code> | Builds an ARN for the harvest_jobs resource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.isValidChannelsArn">isValidChannelsArn</a></code> | Validates whether a string is a valid ARN for the channels resource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.isValidHarvestJobsArn">isValidHarvestJobsArn</a></code> | Validates whether a string is a valid ARN for the harvest_jobs resource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.isValidOriginEndpointsArn">isValidOriginEndpointsArn</a></code> | Validates whether a string is a valid ARN for the origin_endpoints resource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.originEndpoints">originEndpoints</a></code> | Builds an ARN for the origin_endpoints resource. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.parseChannelsArn">parseChannelsArn</a></code> | Parses a channels ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.parseHarvestJobsArn">parseHarvestJobsArn</a></code> | Parses a harvest_jobs ARN into its components. |
| <code><a href="#@cdk_utils/iam.mediapackage.MediaPackageResources.parseOriginEndpointsArn">parseOriginEndpointsArn</a></code> | Parses a origin_endpoints ARN into its components. |

---

##### `channels` <a name="channels" id="@cdk_utils/iam.mediapackage.MediaPackageResources.channels"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.channels(props: MediaPackageChannelsArnProps)
```

Builds an ARN for the channels resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackage.MediaPackageResources.channels.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackage.MediaPackageChannelsArnProps">MediaPackageChannelsArnProps</a>

---

##### `harvestJobs` <a name="harvestJobs" id="@cdk_utils/iam.mediapackage.MediaPackageResources.harvestJobs"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.harvestJobs(props: MediaPackageHarvestJobsArnProps)
```

Builds an ARN for the harvest_jobs resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackage.MediaPackageResources.harvestJobs.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackage.MediaPackageHarvestJobsArnProps">MediaPackageHarvestJobsArnProps</a>

---

##### `isValidChannelsArn` <a name="isValidChannelsArn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.isValidChannelsArn"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.isValidChannelsArn(arn: string)
```

Validates whether a string is a valid ARN for the channels resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.isValidChannelsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidHarvestJobsArn` <a name="isValidHarvestJobsArn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.isValidHarvestJobsArn"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.isValidHarvestJobsArn(arn: string)
```

Validates whether a string is a valid ARN for the harvest_jobs resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.isValidHarvestJobsArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOriginEndpointsArn` <a name="isValidOriginEndpointsArn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.isValidOriginEndpointsArn"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.isValidOriginEndpointsArn(arn: string)
```

Validates whether a string is a valid ARN for the origin_endpoints resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.isValidOriginEndpointsArn.parameter.arn"></a>

- *Type:* string

---

##### `originEndpoints` <a name="originEndpoints" id="@cdk_utils/iam.mediapackage.MediaPackageResources.originEndpoints"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.originEndpoints(props: MediaPackageOriginEndpointsArnProps)
```

Builds an ARN for the origin_endpoints resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.mediapackage.MediaPackageResources.originEndpoints.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.mediapackage.MediaPackageOriginEndpointsArnProps">MediaPackageOriginEndpointsArnProps</a>

---

##### `parseChannelsArn` <a name="parseChannelsArn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.parseChannelsArn"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.parseChannelsArn(arn: string)
```

Parses a channels ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.parseChannelsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseHarvestJobsArn` <a name="parseHarvestJobsArn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.parseHarvestJobsArn"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.parseHarvestJobsArn(arn: string)
```

Parses a harvest_jobs ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.parseHarvestJobsArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOriginEndpointsArn` <a name="parseOriginEndpointsArn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.parseOriginEndpointsArn"></a>

```typescript
import { mediapackage } from '@cdk_utils/iam'

mediapackage.MediaPackageResources.parseOriginEndpointsArn(arn: string)
```

Parses a origin_endpoints ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.mediapackage.MediaPackageResources.parseOriginEndpointsArn.parameter.arn"></a>

- *Type:* string

---




