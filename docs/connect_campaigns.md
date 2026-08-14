# `connect_campaigns` Submodule <a name="`connect_campaigns` Submodule" id="@cdk_utils/iam.connect_campaigns"></a>


## Structs <a name="Structs" id="Structs"></a>

### ConnectCampaignsCampaignArnComponents <a name="ConnectCampaignsCampaignArnComponents" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents"></a>

Parsed components of a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.Initializer"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

const connectCampaignsCampaignArnComponents: connect_campaigns.ConnectCampaignsCampaignArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.campaignId">campaignId</a></code> | <code>string</code> | The CampaignId component. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `campaignId`<sup>Required</sup> <a name="campaignId" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.campaignId"></a>

```typescript
public readonly campaignId: string;
```

- *Type:* string

The CampaignId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ConnectCampaignsCampaignArnProps <a name="ConnectCampaignsCampaignArnProps" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps"></a>

Properties for building a campaign ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.Initializer"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

const connectCampaignsCampaignArnProps: connect_campaigns.ConnectCampaignsCampaignArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.campaignId">campaignId</a></code> | <code>string</code> | The CampaignId component of the ARN. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `campaignId`<sup>Required</sup> <a name="campaignId" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.campaignId"></a>

```typescript
public readonly campaignId: string;
```

- *Type:* string

The CampaignId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectCampaignsActions <a name="ConnectCampaignsActions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions"></a>

IAM action constants for the connect-campaigns service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.Initializer"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

new connect_campaigns.ConnectCampaignsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetCampaignState">actionGetCampaignState</a></code> | <code>string</code> | [Read] connect-campaigns:GetCampaignState. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetCampaignStateBatch">actionGetCampaignStateBatch</a></code> | <code>string</code> | [Read] connect-campaigns:GetCampaignStateBatch. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetConnectInstanceConfig">actionGetConnectInstanceConfig</a></code> | <code>string</code> | [Read] connect-campaigns:GetConnectInstanceConfig. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetInstanceCommunicationLimits">actionGetInstanceCommunicationLimits</a></code> | <code>string</code> | [Read] connect-campaigns:GetInstanceCommunicationLimits. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetInstanceOnboardingJobStatus">actionGetInstanceOnboardingJobStatus</a></code> | <code>string</code> | [Read] connect-campaigns:GetInstanceOnboardingJobStatus. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.CreateCampaign">CreateCampaign</a></code> | <code>string</code> | [Write] connect-campaigns:CreateCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignChannelSubtypeConfig">DeleteCampaignChannelSubtypeConfig</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteCampaignChannelSubtypeConfig. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignCommunicationLimits">DeleteCampaignCommunicationLimits</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteCampaignCommunicationLimits. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignCommunicationTime">DeleteCampaignCommunicationTime</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteCampaignCommunicationTime. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignEntryLimits">DeleteCampaignEntryLimits</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteCampaignEntryLimits. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteConnectInstanceConfig">DeleteConnectInstanceConfig</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteConnectInstanceConfig. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteConnectInstanceIntegration">DeleteConnectInstanceIntegration</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteConnectInstanceIntegration. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteInstanceOnboardingJob">DeleteInstanceOnboardingJob</a></code> | <code>string</code> | [Write] connect-campaigns:DeleteInstanceOnboardingJob. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DescribeCampaign">DescribeCampaign</a></code> | <code>string</code> | [Read] connect-campaigns:DescribeCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ListCampaigns">ListCampaigns</a></code> | <code>string</code> | [List] connect-campaigns:ListCampaigns. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ListConnectInstanceIntegrations">ListConnectInstanceIntegrations</a></code> | <code>string</code> | [List] connect-campaigns:ListConnectInstanceIntegrations. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] connect-campaigns:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PauseCampaign">PauseCampaign</a></code> | <code>string</code> | [Write] connect-campaigns:PauseCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutConnectInstanceIntegration">PutConnectInstanceIntegration</a></code> | <code>string</code> | [Write] connect-campaigns:PutConnectInstanceIntegration. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutDialRequestBatch">PutDialRequestBatch</a></code> | <code>string</code> | [Write] connect-campaigns:PutDialRequestBatch. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutInstanceCommunicationLimits">PutInstanceCommunicationLimits</a></code> | <code>string</code> | [Write] connect-campaigns:PutInstanceCommunicationLimits. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutOutboundRequestBatch">PutOutboundRequestBatch</a></code> | <code>string</code> | [Write] connect-campaigns:PutOutboundRequestBatch. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutProfileOutboundRequestBatch">PutProfileOutboundRequestBatch</a></code> | <code>string</code> | [Write] connect-campaigns:PutProfileOutboundRequestBatch. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ResumeCampaign">ResumeCampaign</a></code> | <code>string</code> | [Write] connect-campaigns:ResumeCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.StartCampaign">StartCampaign</a></code> | <code>string</code> | [Write] connect-campaigns:StartCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.StartInstanceOnboardingJob">StartInstanceOnboardingJob</a></code> | <code>string</code> | [Write] connect-campaigns:StartInstanceOnboardingJob. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.StopCampaign">StopCampaign</a></code> | <code>string</code> | [Write] connect-campaigns:StopCampaign. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] connect-campaigns:TagResource. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] connect-campaigns:UntagResource. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignChannelSubtypeConfig">UpdateCampaignChannelSubtypeConfig</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignChannelSubtypeConfig. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignCommunicationLimits">UpdateCampaignCommunicationLimits</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignCommunicationLimits. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignCommunicationTime">UpdateCampaignCommunicationTime</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignCommunicationTime. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignDialerConfig">UpdateCampaignDialerConfig</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignDialerConfig. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignEntryLimits">UpdateCampaignEntryLimits</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignEntryLimits. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignFlowAssociation">UpdateCampaignFlowAssociation</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignFlowAssociation. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignName">UpdateCampaignName</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignName. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignOutboundCallConfig">UpdateCampaignOutboundCallConfig</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignOutboundCallConfig. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignSchedule">UpdateCampaignSchedule</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignSchedule. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignSource">UpdateCampaignSource</a></code> | <code>string</code> | [Write] connect-campaigns:UpdateCampaignSource. |

---

##### `actionGetCampaignState`<sup>Required</sup> <a name="actionGetCampaignState" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetCampaignState"></a>

```typescript
public readonly actionGetCampaignState: string;
```

- *Type:* string

[Read] connect-campaigns:GetCampaignState.

---

##### `actionGetCampaignStateBatch`<sup>Required</sup> <a name="actionGetCampaignStateBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetCampaignStateBatch"></a>

```typescript
public readonly actionGetCampaignStateBatch: string;
```

- *Type:* string

[Read] connect-campaigns:GetCampaignStateBatch.

---

##### `actionGetConnectInstanceConfig`<sup>Required</sup> <a name="actionGetConnectInstanceConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetConnectInstanceConfig"></a>

```typescript
public readonly actionGetConnectInstanceConfig: string;
```

- *Type:* string

[Read] connect-campaigns:GetConnectInstanceConfig.

---

##### `actionGetInstanceCommunicationLimits`<sup>Required</sup> <a name="actionGetInstanceCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetInstanceCommunicationLimits"></a>

```typescript
public readonly actionGetInstanceCommunicationLimits: string;
```

- *Type:* string

[Read] connect-campaigns:GetInstanceCommunicationLimits.

---

##### `actionGetInstanceOnboardingJobStatus`<sup>Required</sup> <a name="actionGetInstanceOnboardingJobStatus" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.actionGetInstanceOnboardingJobStatus"></a>

```typescript
public readonly actionGetInstanceOnboardingJobStatus: string;
```

- *Type:* string

[Read] connect-campaigns:GetInstanceOnboardingJobStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string;
```

- *Type:* string

[Write] connect-campaigns:CreateCampaign.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteCampaign.

---

##### `DeleteCampaignChannelSubtypeConfig`<sup>Required</sup> <a name="DeleteCampaignChannelSubtypeConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignChannelSubtypeConfig"></a>

```typescript
public readonly DeleteCampaignChannelSubtypeConfig: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteCampaignChannelSubtypeConfig.

---

##### `DeleteCampaignCommunicationLimits`<sup>Required</sup> <a name="DeleteCampaignCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignCommunicationLimits"></a>

```typescript
public readonly DeleteCampaignCommunicationLimits: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteCampaignCommunicationLimits.

---

##### `DeleteCampaignCommunicationTime`<sup>Required</sup> <a name="DeleteCampaignCommunicationTime" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignCommunicationTime"></a>

```typescript
public readonly DeleteCampaignCommunicationTime: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteCampaignCommunicationTime.

---

##### `DeleteCampaignEntryLimits`<sup>Required</sup> <a name="DeleteCampaignEntryLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteCampaignEntryLimits"></a>

```typescript
public readonly DeleteCampaignEntryLimits: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteCampaignEntryLimits.

---

##### `DeleteConnectInstanceConfig`<sup>Required</sup> <a name="DeleteConnectInstanceConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteConnectInstanceConfig"></a>

```typescript
public readonly DeleteConnectInstanceConfig: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteConnectInstanceConfig.

---

##### `DeleteConnectInstanceIntegration`<sup>Required</sup> <a name="DeleteConnectInstanceIntegration" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteConnectInstanceIntegration"></a>

```typescript
public readonly DeleteConnectInstanceIntegration: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteConnectInstanceIntegration.

---

##### `DeleteInstanceOnboardingJob`<sup>Required</sup> <a name="DeleteInstanceOnboardingJob" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DeleteInstanceOnboardingJob"></a>

```typescript
public readonly DeleteInstanceOnboardingJob: string;
```

- *Type:* string

[Write] connect-campaigns:DeleteInstanceOnboardingJob.

---

##### `DescribeCampaign`<sup>Required</sup> <a name="DescribeCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.DescribeCampaign"></a>

```typescript
public readonly DescribeCampaign: string;
```

- *Type:* string

[Read] connect-campaigns:DescribeCampaign.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string;
```

- *Type:* string

[List] connect-campaigns:ListCampaigns.

---

##### `ListConnectInstanceIntegrations`<sup>Required</sup> <a name="ListConnectInstanceIntegrations" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ListConnectInstanceIntegrations"></a>

```typescript
public readonly ListConnectInstanceIntegrations: string;
```

- *Type:* string

[List] connect-campaigns:ListConnectInstanceIntegrations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] connect-campaigns:ListTagsForResource.

---

##### `PauseCampaign`<sup>Required</sup> <a name="PauseCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PauseCampaign"></a>

```typescript
public readonly PauseCampaign: string;
```

- *Type:* string

[Write] connect-campaigns:PauseCampaign.

---

##### `PutConnectInstanceIntegration`<sup>Required</sup> <a name="PutConnectInstanceIntegration" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutConnectInstanceIntegration"></a>

```typescript
public readonly PutConnectInstanceIntegration: string;
```

- *Type:* string

[Write] connect-campaigns:PutConnectInstanceIntegration.

---

##### `PutDialRequestBatch`<sup>Required</sup> <a name="PutDialRequestBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutDialRequestBatch"></a>

```typescript
public readonly PutDialRequestBatch: string;
```

- *Type:* string

[Write] connect-campaigns:PutDialRequestBatch.

---

##### `PutInstanceCommunicationLimits`<sup>Required</sup> <a name="PutInstanceCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutInstanceCommunicationLimits"></a>

```typescript
public readonly PutInstanceCommunicationLimits: string;
```

- *Type:* string

[Write] connect-campaigns:PutInstanceCommunicationLimits.

---

##### `PutOutboundRequestBatch`<sup>Required</sup> <a name="PutOutboundRequestBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutOutboundRequestBatch"></a>

```typescript
public readonly PutOutboundRequestBatch: string;
```

- *Type:* string

[Write] connect-campaigns:PutOutboundRequestBatch.

---

##### `PutProfileOutboundRequestBatch`<sup>Required</sup> <a name="PutProfileOutboundRequestBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.PutProfileOutboundRequestBatch"></a>

```typescript
public readonly PutProfileOutboundRequestBatch: string;
```

- *Type:* string

[Write] connect-campaigns:PutProfileOutboundRequestBatch.

---

##### `ResumeCampaign`<sup>Required</sup> <a name="ResumeCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.ResumeCampaign"></a>

```typescript
public readonly ResumeCampaign: string;
```

- *Type:* string

[Write] connect-campaigns:ResumeCampaign.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCampaign`<sup>Required</sup> <a name="StartCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.StartCampaign"></a>

```typescript
public readonly StartCampaign: string;
```

- *Type:* string

[Write] connect-campaigns:StartCampaign.

---

##### `StartInstanceOnboardingJob`<sup>Required</sup> <a name="StartInstanceOnboardingJob" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.StartInstanceOnboardingJob"></a>

```typescript
public readonly StartInstanceOnboardingJob: string;
```

- *Type:* string

[Write] connect-campaigns:StartInstanceOnboardingJob.

---

##### `StopCampaign`<sup>Required</sup> <a name="StopCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.StopCampaign"></a>

```typescript
public readonly StopCampaign: string;
```

- *Type:* string

[Write] connect-campaigns:StopCampaign.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] connect-campaigns:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] connect-campaigns:UntagResource.

---

##### `UpdateCampaignChannelSubtypeConfig`<sup>Required</sup> <a name="UpdateCampaignChannelSubtypeConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignChannelSubtypeConfig"></a>

```typescript
public readonly UpdateCampaignChannelSubtypeConfig: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignChannelSubtypeConfig.

---

##### `UpdateCampaignCommunicationLimits`<sup>Required</sup> <a name="UpdateCampaignCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignCommunicationLimits"></a>

```typescript
public readonly UpdateCampaignCommunicationLimits: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignCommunicationLimits.

---

##### `UpdateCampaignCommunicationTime`<sup>Required</sup> <a name="UpdateCampaignCommunicationTime" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignCommunicationTime"></a>

```typescript
public readonly UpdateCampaignCommunicationTime: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignCommunicationTime.

---

##### `UpdateCampaignDialerConfig`<sup>Required</sup> <a name="UpdateCampaignDialerConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignDialerConfig"></a>

```typescript
public readonly UpdateCampaignDialerConfig: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignDialerConfig.

---

##### `UpdateCampaignEntryLimits`<sup>Required</sup> <a name="UpdateCampaignEntryLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignEntryLimits"></a>

```typescript
public readonly UpdateCampaignEntryLimits: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignEntryLimits.

---

##### `UpdateCampaignFlowAssociation`<sup>Required</sup> <a name="UpdateCampaignFlowAssociation" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignFlowAssociation"></a>

```typescript
public readonly UpdateCampaignFlowAssociation: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignFlowAssociation.

---

##### `UpdateCampaignName`<sup>Required</sup> <a name="UpdateCampaignName" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignName"></a>

```typescript
public readonly UpdateCampaignName: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignName.

---

##### `UpdateCampaignOutboundCallConfig`<sup>Required</sup> <a name="UpdateCampaignOutboundCallConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignOutboundCallConfig"></a>

```typescript
public readonly UpdateCampaignOutboundCallConfig: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignOutboundCallConfig.

---

##### `UpdateCampaignSchedule`<sup>Required</sup> <a name="UpdateCampaignSchedule" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignSchedule"></a>

```typescript
public readonly UpdateCampaignSchedule: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignSchedule.

---

##### `UpdateCampaignSource`<sup>Required</sup> <a name="UpdateCampaignSource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsActions.property.UpdateCampaignSource"></a>

```typescript
public readonly UpdateCampaignSource: string;
```

- *Type:* string

[Write] connect-campaigns:UpdateCampaignSource.

---

### ConnectCampaignsConditions <a name="ConnectCampaignsConditions" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions"></a>

Condition key constants and builders for connect-campaigns.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.Initializer"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

new connect_campaigns.ConnectCampaignsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.requestTag"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

connect_campaigns.ConnectCampaignsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.resourceTag"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

connect_campaigns.ConnectCampaignsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.tagKeys"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

connect_campaigns.ConnectCampaignsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.actionGetCampaignStateBatchConditionKeys">actionGetCampaignStateBatchConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCampaignStateBatch action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.actionGetCampaignStateConditionKeys">actionGetCampaignStateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCampaignState action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.CreateCampaignConditionKeys">CreateCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCampaign action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.DescribeCampaignConditionKeys">DescribeCampaignConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeCampaign action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.ListCampaignsConditionKeys">ListCampaignsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListCampaigns action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetCampaignStateBatchConditionKeys`<sup>Required</sup> <a name="actionGetCampaignStateBatchConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.actionGetCampaignStateBatchConditionKeys"></a>

```typescript
public readonly actionGetCampaignStateBatchConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCampaignStateBatch action.

---

##### `actionGetCampaignStateConditionKeys`<sup>Required</sup> <a name="actionGetCampaignStateConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.actionGetCampaignStateConditionKeys"></a>

```typescript
public readonly actionGetCampaignStateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCampaignState action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCampaignConditionKeys`<sup>Required</sup> <a name="CreateCampaignConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.CreateCampaignConditionKeys"></a>

```typescript
public readonly CreateCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCampaign action.

---

##### `DescribeCampaignConditionKeys`<sup>Required</sup> <a name="DescribeCampaignConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.DescribeCampaignConditionKeys"></a>

```typescript
public readonly DescribeCampaignConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeCampaign action.

---

##### `ListCampaignsConditionKeys`<sup>Required</sup> <a name="ListCampaignsConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.ListCampaignsConditionKeys"></a>

```typescript
public readonly ListCampaignsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListCampaigns action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ConnectCampaignsOperations <a name="ConnectCampaignsOperations" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations"></a>

API operation to required IAM actions mapping for connect-campaigns.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.Initializer"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

new connect_campaigns.ConnectCampaignsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.CreateCampaign">CreateCampaign</a></code> | <code>string[]</code> | IAM actions required for the CreateCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaign">DeleteCampaign</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignChannelSubtypeConfig">DeleteCampaignChannelSubtypeConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaignChannelSubtypeConfig API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignCommunicationLimits">DeleteCampaignCommunicationLimits</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaignCommunicationLimits API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignCommunicationTime">DeleteCampaignCommunicationTime</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaignCommunicationTime API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignEntryLimits">DeleteCampaignEntryLimits</a></code> | <code>string[]</code> | IAM actions required for the DeleteCampaignEntryLimits API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteConnectInstanceConfig">DeleteConnectInstanceConfig</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectInstanceConfig API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteConnectInstanceIntegration">DeleteConnectInstanceIntegration</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectInstanceIntegration API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteInstanceOnboardingJob">DeleteInstanceOnboardingJob</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstanceOnboardingJob API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DescribeCampaign">DescribeCampaign</a></code> | <code>string[]</code> | IAM actions required for the DescribeCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ListCampaigns">ListCampaigns</a></code> | <code>string[]</code> | IAM actions required for the ListCampaigns API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ListConnectInstanceIntegrations">ListConnectInstanceIntegrations</a></code> | <code>string[]</code> | IAM actions required for the ListConnectInstanceIntegrations API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetCampaignState">opGetCampaignState</a></code> | <code>string[]</code> | IAM actions required for the GetCampaignState API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetCampaignStateBatch">opGetCampaignStateBatch</a></code> | <code>string[]</code> | IAM actions required for the GetCampaignStateBatch API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetConnectInstanceConfig">opGetConnectInstanceConfig</a></code> | <code>string[]</code> | IAM actions required for the GetConnectInstanceConfig API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetInstanceCommunicationLimits">opGetInstanceCommunicationLimits</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceCommunicationLimits API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetInstanceOnboardingJobStatus">opGetInstanceOnboardingJobStatus</a></code> | <code>string[]</code> | IAM actions required for the GetInstanceOnboardingJobStatus API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PauseCampaign">PauseCampaign</a></code> | <code>string[]</code> | IAM actions required for the PauseCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutConnectInstanceIntegration">PutConnectInstanceIntegration</a></code> | <code>string[]</code> | IAM actions required for the PutConnectInstanceIntegration API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutDialRequestBatch">PutDialRequestBatch</a></code> | <code>string[]</code> | IAM actions required for the PutDialRequestBatch API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutInstanceCommunicationLimits">PutInstanceCommunicationLimits</a></code> | <code>string[]</code> | IAM actions required for the PutInstanceCommunicationLimits API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutOutboundRequestBatch">PutOutboundRequestBatch</a></code> | <code>string[]</code> | IAM actions required for the PutOutboundRequestBatch API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutProfileOutboundRequestBatch">PutProfileOutboundRequestBatch</a></code> | <code>string[]</code> | IAM actions required for the PutProfileOutboundRequestBatch API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ResumeCampaign">ResumeCampaign</a></code> | <code>string[]</code> | IAM actions required for the ResumeCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.StartCampaign">StartCampaign</a></code> | <code>string[]</code> | IAM actions required for the StartCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.StartInstanceOnboardingJob">StartInstanceOnboardingJob</a></code> | <code>string[]</code> | IAM actions required for the StartInstanceOnboardingJob API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.StopCampaign">StopCampaign</a></code> | <code>string[]</code> | IAM actions required for the StopCampaign API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignChannelSubtypeConfig">UpdateCampaignChannelSubtypeConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignChannelSubtypeConfig API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignCommunicationLimits">UpdateCampaignCommunicationLimits</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignCommunicationLimits API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignCommunicationTime">UpdateCampaignCommunicationTime</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignCommunicationTime API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignDialerConfig">UpdateCampaignDialerConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignDialerConfig API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignEntryLimits">UpdateCampaignEntryLimits</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignEntryLimits API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignFlowAssociation">UpdateCampaignFlowAssociation</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignFlowAssociation API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignName">UpdateCampaignName</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignName API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignOutboundCallConfig">UpdateCampaignOutboundCallConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignOutboundCallConfig API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignSchedule">UpdateCampaignSchedule</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignSchedule API call. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignSource">UpdateCampaignSource</a></code> | <code>string[]</code> | IAM actions required for the UpdateCampaignSource API call. |

---

##### `CreateCampaign`<sup>Required</sup> <a name="CreateCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.CreateCampaign"></a>

```typescript
public readonly CreateCampaign: string[];
```

- *Type:* string[]

IAM actions required for the CreateCampaign API call.

---

##### `DeleteCampaign`<sup>Required</sup> <a name="DeleteCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaign"></a>

```typescript
public readonly DeleteCampaign: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaign API call.

---

##### `DeleteCampaignChannelSubtypeConfig`<sup>Required</sup> <a name="DeleteCampaignChannelSubtypeConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignChannelSubtypeConfig"></a>

```typescript
public readonly DeleteCampaignChannelSubtypeConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaignChannelSubtypeConfig API call.

---

##### `DeleteCampaignCommunicationLimits`<sup>Required</sup> <a name="DeleteCampaignCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignCommunicationLimits"></a>

```typescript
public readonly DeleteCampaignCommunicationLimits: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaignCommunicationLimits API call.

---

##### `DeleteCampaignCommunicationTime`<sup>Required</sup> <a name="DeleteCampaignCommunicationTime" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignCommunicationTime"></a>

```typescript
public readonly DeleteCampaignCommunicationTime: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaignCommunicationTime API call.

---

##### `DeleteCampaignEntryLimits`<sup>Required</sup> <a name="DeleteCampaignEntryLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteCampaignEntryLimits"></a>

```typescript
public readonly DeleteCampaignEntryLimits: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCampaignEntryLimits API call.

---

##### `DeleteConnectInstanceConfig`<sup>Required</sup> <a name="DeleteConnectInstanceConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteConnectInstanceConfig"></a>

```typescript
public readonly DeleteConnectInstanceConfig: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectInstanceConfig API call.

---

##### `DeleteConnectInstanceIntegration`<sup>Required</sup> <a name="DeleteConnectInstanceIntegration" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteConnectInstanceIntegration"></a>

```typescript
public readonly DeleteConnectInstanceIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectInstanceIntegration API call.

---

##### `DeleteInstanceOnboardingJob`<sup>Required</sup> <a name="DeleteInstanceOnboardingJob" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DeleteInstanceOnboardingJob"></a>

```typescript
public readonly DeleteInstanceOnboardingJob: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstanceOnboardingJob API call.

---

##### `DescribeCampaign`<sup>Required</sup> <a name="DescribeCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.DescribeCampaign"></a>

```typescript
public readonly DescribeCampaign: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCampaign API call.

---

##### `ListCampaigns`<sup>Required</sup> <a name="ListCampaigns" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ListCampaigns"></a>

```typescript
public readonly ListCampaigns: string[];
```

- *Type:* string[]

IAM actions required for the ListCampaigns API call.

---

##### `ListConnectInstanceIntegrations`<sup>Required</sup> <a name="ListConnectInstanceIntegrations" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ListConnectInstanceIntegrations"></a>

```typescript
public readonly ListConnectInstanceIntegrations: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectInstanceIntegrations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCampaignState`<sup>Required</sup> <a name="opGetCampaignState" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetCampaignState"></a>

```typescript
public readonly opGetCampaignState: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaignState API call.

---

##### `opGetCampaignStateBatch`<sup>Required</sup> <a name="opGetCampaignStateBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetCampaignStateBatch"></a>

```typescript
public readonly opGetCampaignStateBatch: string[];
```

- *Type:* string[]

IAM actions required for the GetCampaignStateBatch API call.

---

##### `opGetConnectInstanceConfig`<sup>Required</sup> <a name="opGetConnectInstanceConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetConnectInstanceConfig"></a>

```typescript
public readonly opGetConnectInstanceConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetConnectInstanceConfig API call.

---

##### `opGetInstanceCommunicationLimits`<sup>Required</sup> <a name="opGetInstanceCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetInstanceCommunicationLimits"></a>

```typescript
public readonly opGetInstanceCommunicationLimits: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceCommunicationLimits API call.

---

##### `opGetInstanceOnboardingJobStatus`<sup>Required</sup> <a name="opGetInstanceOnboardingJobStatus" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.opGetInstanceOnboardingJobStatus"></a>

```typescript
public readonly opGetInstanceOnboardingJobStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetInstanceOnboardingJobStatus API call.

---

##### `PauseCampaign`<sup>Required</sup> <a name="PauseCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PauseCampaign"></a>

```typescript
public readonly PauseCampaign: string[];
```

- *Type:* string[]

IAM actions required for the PauseCampaign API call.

---

##### `PutConnectInstanceIntegration`<sup>Required</sup> <a name="PutConnectInstanceIntegration" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutConnectInstanceIntegration"></a>

```typescript
public readonly PutConnectInstanceIntegration: string[];
```

- *Type:* string[]

IAM actions required for the PutConnectInstanceIntegration API call.

---

##### `PutDialRequestBatch`<sup>Required</sup> <a name="PutDialRequestBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutDialRequestBatch"></a>

```typescript
public readonly PutDialRequestBatch: string[];
```

- *Type:* string[]

IAM actions required for the PutDialRequestBatch API call.

---

##### `PutInstanceCommunicationLimits`<sup>Required</sup> <a name="PutInstanceCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutInstanceCommunicationLimits"></a>

```typescript
public readonly PutInstanceCommunicationLimits: string[];
```

- *Type:* string[]

IAM actions required for the PutInstanceCommunicationLimits API call.

---

##### `PutOutboundRequestBatch`<sup>Required</sup> <a name="PutOutboundRequestBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutOutboundRequestBatch"></a>

```typescript
public readonly PutOutboundRequestBatch: string[];
```

- *Type:* string[]

IAM actions required for the PutOutboundRequestBatch API call.

---

##### `PutProfileOutboundRequestBatch`<sup>Required</sup> <a name="PutProfileOutboundRequestBatch" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.PutProfileOutboundRequestBatch"></a>

```typescript
public readonly PutProfileOutboundRequestBatch: string[];
```

- *Type:* string[]

IAM actions required for the PutProfileOutboundRequestBatch API call.

---

##### `ResumeCampaign`<sup>Required</sup> <a name="ResumeCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.ResumeCampaign"></a>

```typescript
public readonly ResumeCampaign: string[];
```

- *Type:* string[]

IAM actions required for the ResumeCampaign API call.

---

##### `StartCampaign`<sup>Required</sup> <a name="StartCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.StartCampaign"></a>

```typescript
public readonly StartCampaign: string[];
```

- *Type:* string[]

IAM actions required for the StartCampaign API call.

---

##### `StartInstanceOnboardingJob`<sup>Required</sup> <a name="StartInstanceOnboardingJob" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.StartInstanceOnboardingJob"></a>

```typescript
public readonly StartInstanceOnboardingJob: string[];
```

- *Type:* string[]

IAM actions required for the StartInstanceOnboardingJob API call.

---

##### `StopCampaign`<sup>Required</sup> <a name="StopCampaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.StopCampaign"></a>

```typescript
public readonly StopCampaign: string[];
```

- *Type:* string[]

IAM actions required for the StopCampaign API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCampaignChannelSubtypeConfig`<sup>Required</sup> <a name="UpdateCampaignChannelSubtypeConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignChannelSubtypeConfig"></a>

```typescript
public readonly UpdateCampaignChannelSubtypeConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignChannelSubtypeConfig API call.

---

##### `UpdateCampaignCommunicationLimits`<sup>Required</sup> <a name="UpdateCampaignCommunicationLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignCommunicationLimits"></a>

```typescript
public readonly UpdateCampaignCommunicationLimits: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignCommunicationLimits API call.

---

##### `UpdateCampaignCommunicationTime`<sup>Required</sup> <a name="UpdateCampaignCommunicationTime" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignCommunicationTime"></a>

```typescript
public readonly UpdateCampaignCommunicationTime: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignCommunicationTime API call.

---

##### `UpdateCampaignDialerConfig`<sup>Required</sup> <a name="UpdateCampaignDialerConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignDialerConfig"></a>

```typescript
public readonly UpdateCampaignDialerConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignDialerConfig API call.

---

##### `UpdateCampaignEntryLimits`<sup>Required</sup> <a name="UpdateCampaignEntryLimits" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignEntryLimits"></a>

```typescript
public readonly UpdateCampaignEntryLimits: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignEntryLimits API call.

---

##### `UpdateCampaignFlowAssociation`<sup>Required</sup> <a name="UpdateCampaignFlowAssociation" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignFlowAssociation"></a>

```typescript
public readonly UpdateCampaignFlowAssociation: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignFlowAssociation API call.

---

##### `UpdateCampaignName`<sup>Required</sup> <a name="UpdateCampaignName" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignName"></a>

```typescript
public readonly UpdateCampaignName: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignName API call.

---

##### `UpdateCampaignOutboundCallConfig`<sup>Required</sup> <a name="UpdateCampaignOutboundCallConfig" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignOutboundCallConfig"></a>

```typescript
public readonly UpdateCampaignOutboundCallConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignOutboundCallConfig API call.

---

##### `UpdateCampaignSchedule`<sup>Required</sup> <a name="UpdateCampaignSchedule" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignSchedule"></a>

```typescript
public readonly UpdateCampaignSchedule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignSchedule API call.

---

##### `UpdateCampaignSource`<sup>Required</sup> <a name="UpdateCampaignSource" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsOperations.property.UpdateCampaignSource"></a>

```typescript
public readonly UpdateCampaignSource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCampaignSource API call.

---

### ConnectCampaignsResources <a name="ConnectCampaignsResources" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources"></a>

ARN builders, validators, and parsers for connect-campaigns resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.Initializer"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

new connect_campaigns.ConnectCampaignsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.campaign">campaign</a></code> | Builds an ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.isValidCampaignArn">isValidCampaignArn</a></code> | Validates whether a string is a valid ARN for the campaign resource. |
| <code><a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.parseCampaignArn">parseCampaignArn</a></code> | Parses a campaign ARN into its components. |

---

##### `campaign` <a name="campaign" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.campaign"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

connect_campaigns.ConnectCampaignsResources.campaign(props: ConnectCampaignsCampaignArnProps)
```

Builds an ARN for the campaign resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.campaign.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.connect_campaigns.ConnectCampaignsCampaignArnProps">ConnectCampaignsCampaignArnProps</a>

---

##### `isValidCampaignArn` <a name="isValidCampaignArn" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.isValidCampaignArn"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

connect_campaigns.ConnectCampaignsResources.isValidCampaignArn(arn: string)
```

Validates whether a string is a valid ARN for the campaign resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.isValidCampaignArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCampaignArn` <a name="parseCampaignArn" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.parseCampaignArn"></a>

```typescript
import { connect_campaigns } from '@cdk_utils/iam'

connect_campaigns.ConnectCampaignsResources.parseCampaignArn(arn: string)
```

Parses a campaign ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.connect_campaigns.ConnectCampaignsResources.parseCampaignArn.parameter.arn"></a>

- *Type:* string

---




