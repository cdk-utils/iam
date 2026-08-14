# `devops_guru` Submodule <a name="`devops_guru` Submodule" id="@cdk_utils/iam.devops_guru"></a>


## Structs <a name="Structs" id="Structs"></a>

### DevopsGuruTopicArnComponents <a name="DevopsGuruTopicArnComponents" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents"></a>

Parsed components of a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.Initializer"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

const devopsGuruTopicArnComponents: devops_guru.DevopsGuruTopicArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnComponents.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component.

---

### DevopsGuruTopicArnProps <a name="DevopsGuruTopicArnProps" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps"></a>

Properties for building a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.Initializer"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

const devopsGuruTopicArnProps: devops_guru.DevopsGuruTopicArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component of the ARN. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsGuruActions <a name="DevopsGuruActions" id="@cdk_utils/iam.devops_guru.DevopsGuruActions"></a>

IAM action constants for the devops-guru service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.Initializer"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

new devops_guru.DevopsGuruActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.actionGetCostEstimation">actionGetCostEstimation</a></code> | <code>string</code> | [Read] devops-guru:GetCostEstimation. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.actionGetResourceCollection">actionGetResourceCollection</a></code> | <code>string</code> | [Read] devops-guru:GetResourceCollection. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AddNotificationChannel">AddNotificationChannel</a></code> | <code>string</code> | [Write] devops-guru:AddNotificationChannel. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DeleteInsight">DeleteInsight</a></code> | <code>string</code> | [Write] devops-guru:DeleteInsight. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeAccountHealth">DescribeAccountHealth</a></code> | <code>string</code> | [Read] devops-guru:DescribeAccountHealth. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeAccountOverview">DescribeAccountOverview</a></code> | <code>string</code> | [Read] devops-guru:DescribeAccountOverview. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeAnomaly">DescribeAnomaly</a></code> | <code>string</code> | [Read] devops-guru:DescribeAnomaly. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeEventSourcesConfig">DescribeEventSourcesConfig</a></code> | <code>string</code> | [Read] devops-guru:DescribeEventSourcesConfig. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeFeedback">DescribeFeedback</a></code> | <code>string</code> | [Read] devops-guru:DescribeFeedback. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeInsight">DescribeInsight</a></code> | <code>string</code> | [Read] devops-guru:DescribeInsight. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeOrganizationHealth">DescribeOrganizationHealth</a></code> | <code>string</code> | [Read] devops-guru:DescribeOrganizationHealth. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeOrganizationOverview">DescribeOrganizationOverview</a></code> | <code>string</code> | [Read] devops-guru:DescribeOrganizationOverview. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeOrganizationResourceCollectionHealth">DescribeOrganizationResourceCollectionHealth</a></code> | <code>string</code> | [Read] devops-guru:DescribeOrganizationResourceCollectionHealth. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeResourceCollectionHealth">DescribeResourceCollectionHealth</a></code> | <code>string</code> | [Read] devops-guru:DescribeResourceCollectionHealth. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeServiceIntegration">DescribeServiceIntegration</a></code> | <code>string</code> | [Read] devops-guru:DescribeServiceIntegration. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListAnomaliesForInsight">ListAnomaliesForInsight</a></code> | <code>string</code> | [List] devops-guru:ListAnomaliesForInsight. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListAnomalousLogGroups">ListAnomalousLogGroups</a></code> | <code>string</code> | [List] devops-guru:ListAnomalousLogGroups. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListEvents">ListEvents</a></code> | <code>string</code> | [List] devops-guru:ListEvents. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListInsights">ListInsights</a></code> | <code>string</code> | [List] devops-guru:ListInsights. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListMonitoredResources">ListMonitoredResources</a></code> | <code>string</code> | [List] devops-guru:ListMonitoredResources. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListNotificationChannels">ListNotificationChannels</a></code> | <code>string</code> | [List] devops-guru:ListNotificationChannels. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListOrganizationInsights">ListOrganizationInsights</a></code> | <code>string</code> | [List] devops-guru:ListOrganizationInsights. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListRecommendations">ListRecommendations</a></code> | <code>string</code> | [List] devops-guru:ListRecommendations. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.PutFeedback">PutFeedback</a></code> | <code>string</code> | [Write] devops-guru:PutFeedback. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.RemoveNotificationChannel">RemoveNotificationChannel</a></code> | <code>string</code> | [Write] devops-guru:RemoveNotificationChannel. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.SearchInsights">SearchInsights</a></code> | <code>string</code> | [List] devops-guru:SearchInsights. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.SearchOrganizationInsights">SearchOrganizationInsights</a></code> | <code>string</code> | [List] devops-guru:SearchOrganizationInsights. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.StartCostEstimation">StartCostEstimation</a></code> | <code>string</code> | [Read] devops-guru:StartCostEstimation. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.UpdateEventSourcesConfig">UpdateEventSourcesConfig</a></code> | <code>string</code> | [Write] devops-guru:UpdateEventSourcesConfig. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.UpdateResourceCollection">UpdateResourceCollection</a></code> | <code>string</code> | [Write] devops-guru:UpdateResourceCollection. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruActions.property.UpdateServiceIntegration">UpdateServiceIntegration</a></code> | <code>string</code> | [Write] devops-guru:UpdateServiceIntegration. |

---

##### `actionGetCostEstimation`<sup>Required</sup> <a name="actionGetCostEstimation" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.actionGetCostEstimation"></a>

```typescript
public readonly actionGetCostEstimation: string;
```

- *Type:* string

[Read] devops-guru:GetCostEstimation.

---

##### `actionGetResourceCollection`<sup>Required</sup> <a name="actionGetResourceCollection" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.actionGetResourceCollection"></a>

```typescript
public readonly actionGetResourceCollection: string;
```

- *Type:* string

[Read] devops-guru:GetResourceCollection.

---

##### `AddNotificationChannel`<sup>Required</sup> <a name="AddNotificationChannel" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AddNotificationChannel"></a>

```typescript
public readonly AddNotificationChannel: string;
```

- *Type:* string

[Write] devops-guru:AddNotificationChannel.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteInsight`<sup>Required</sup> <a name="DeleteInsight" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DeleteInsight"></a>

```typescript
public readonly DeleteInsight: string;
```

- *Type:* string

[Write] devops-guru:DeleteInsight.

---

##### `DescribeAccountHealth`<sup>Required</sup> <a name="DescribeAccountHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeAccountHealth"></a>

```typescript
public readonly DescribeAccountHealth: string;
```

- *Type:* string

[Read] devops-guru:DescribeAccountHealth.

---

##### `DescribeAccountOverview`<sup>Required</sup> <a name="DescribeAccountOverview" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeAccountOverview"></a>

```typescript
public readonly DescribeAccountOverview: string;
```

- *Type:* string

[Read] devops-guru:DescribeAccountOverview.

---

##### `DescribeAnomaly`<sup>Required</sup> <a name="DescribeAnomaly" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeAnomaly"></a>

```typescript
public readonly DescribeAnomaly: string;
```

- *Type:* string

[Read] devops-guru:DescribeAnomaly.

---

##### `DescribeEventSourcesConfig`<sup>Required</sup> <a name="DescribeEventSourcesConfig" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeEventSourcesConfig"></a>

```typescript
public readonly DescribeEventSourcesConfig: string;
```

- *Type:* string

[Read] devops-guru:DescribeEventSourcesConfig.

---

##### `DescribeFeedback`<sup>Required</sup> <a name="DescribeFeedback" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeFeedback"></a>

```typescript
public readonly DescribeFeedback: string;
```

- *Type:* string

[Read] devops-guru:DescribeFeedback.

---

##### `DescribeInsight`<sup>Required</sup> <a name="DescribeInsight" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeInsight"></a>

```typescript
public readonly DescribeInsight: string;
```

- *Type:* string

[Read] devops-guru:DescribeInsight.

---

##### `DescribeOrganizationHealth`<sup>Required</sup> <a name="DescribeOrganizationHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeOrganizationHealth"></a>

```typescript
public readonly DescribeOrganizationHealth: string;
```

- *Type:* string

[Read] devops-guru:DescribeOrganizationHealth.

---

##### `DescribeOrganizationOverview`<sup>Required</sup> <a name="DescribeOrganizationOverview" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeOrganizationOverview"></a>

```typescript
public readonly DescribeOrganizationOverview: string;
```

- *Type:* string

[Read] devops-guru:DescribeOrganizationOverview.

---

##### `DescribeOrganizationResourceCollectionHealth`<sup>Required</sup> <a name="DescribeOrganizationResourceCollectionHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeOrganizationResourceCollectionHealth"></a>

```typescript
public readonly DescribeOrganizationResourceCollectionHealth: string;
```

- *Type:* string

[Read] devops-guru:DescribeOrganizationResourceCollectionHealth.

---

##### `DescribeResourceCollectionHealth`<sup>Required</sup> <a name="DescribeResourceCollectionHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeResourceCollectionHealth"></a>

```typescript
public readonly DescribeResourceCollectionHealth: string;
```

- *Type:* string

[Read] devops-guru:DescribeResourceCollectionHealth.

---

##### `DescribeServiceIntegration`<sup>Required</sup> <a name="DescribeServiceIntegration" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.DescribeServiceIntegration"></a>

```typescript
public readonly DescribeServiceIntegration: string;
```

- *Type:* string

[Read] devops-guru:DescribeServiceIntegration.

---

##### `ListAnomaliesForInsight`<sup>Required</sup> <a name="ListAnomaliesForInsight" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListAnomaliesForInsight"></a>

```typescript
public readonly ListAnomaliesForInsight: string;
```

- *Type:* string

[List] devops-guru:ListAnomaliesForInsight.

---

##### `ListAnomalousLogGroups`<sup>Required</sup> <a name="ListAnomalousLogGroups" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListAnomalousLogGroups"></a>

```typescript
public readonly ListAnomalousLogGroups: string;
```

- *Type:* string

[List] devops-guru:ListAnomalousLogGroups.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListEvents"></a>

```typescript
public readonly ListEvents: string;
```

- *Type:* string

[List] devops-guru:ListEvents.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListInsights"></a>

```typescript
public readonly ListInsights: string;
```

- *Type:* string

[List] devops-guru:ListInsights.

---

##### `ListMonitoredResources`<sup>Required</sup> <a name="ListMonitoredResources" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListMonitoredResources"></a>

```typescript
public readonly ListMonitoredResources: string;
```

- *Type:* string

[List] devops-guru:ListMonitoredResources.

---

##### `ListNotificationChannels`<sup>Required</sup> <a name="ListNotificationChannels" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListNotificationChannels"></a>

```typescript
public readonly ListNotificationChannels: string;
```

- *Type:* string

[List] devops-guru:ListNotificationChannels.

---

##### `ListOrganizationInsights`<sup>Required</sup> <a name="ListOrganizationInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListOrganizationInsights"></a>

```typescript
public readonly ListOrganizationInsights: string;
```

- *Type:* string

[List] devops-guru:ListOrganizationInsights.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string;
```

- *Type:* string

[List] devops-guru:ListRecommendations.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string;
```

- *Type:* string

[Write] devops-guru:PutFeedback.

---

##### `RemoveNotificationChannel`<sup>Required</sup> <a name="RemoveNotificationChannel" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.RemoveNotificationChannel"></a>

```typescript
public readonly RemoveNotificationChannel: string;
```

- *Type:* string

[Write] devops-guru:RemoveNotificationChannel.

---

##### `SearchInsights`<sup>Required</sup> <a name="SearchInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.SearchInsights"></a>

```typescript
public readonly SearchInsights: string;
```

- *Type:* string

[List] devops-guru:SearchInsights.

---

##### `SearchOrganizationInsights`<sup>Required</sup> <a name="SearchOrganizationInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.SearchOrganizationInsights"></a>

```typescript
public readonly SearchOrganizationInsights: string;
```

- *Type:* string

[List] devops-guru:SearchOrganizationInsights.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartCostEstimation`<sup>Required</sup> <a name="StartCostEstimation" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.StartCostEstimation"></a>

```typescript
public readonly StartCostEstimation: string;
```

- *Type:* string

[Read] devops-guru:StartCostEstimation.

---

##### `UpdateEventSourcesConfig`<sup>Required</sup> <a name="UpdateEventSourcesConfig" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.UpdateEventSourcesConfig"></a>

```typescript
public readonly UpdateEventSourcesConfig: string;
```

- *Type:* string

[Write] devops-guru:UpdateEventSourcesConfig.

---

##### `UpdateResourceCollection`<sup>Required</sup> <a name="UpdateResourceCollection" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.UpdateResourceCollection"></a>

```typescript
public readonly UpdateResourceCollection: string;
```

- *Type:* string

[Write] devops-guru:UpdateResourceCollection.

---

##### `UpdateServiceIntegration`<sup>Required</sup> <a name="UpdateServiceIntegration" id="@cdk_utils/iam.devops_guru.DevopsGuruActions.property.UpdateServiceIntegration"></a>

```typescript
public readonly UpdateServiceIntegration: string;
```

- *Type:* string

[Write] devops-guru:UpdateServiceIntegration.

---

### DevopsGuruConditions <a name="DevopsGuruConditions" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions"></a>

Condition key constants and builders for devops-guru.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions.Initializer"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

new devops_guru.DevopsGuruConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruConditions.serviceNames">serviceNames</a></code> | Generates a condition block for `devops-guru:ServiceNames`. |

---

##### `serviceNames` <a name="serviceNames" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions.serviceNames"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

devops_guru.DevopsGuruConditions.serviceNames(values: string[])
```

Generates a condition block for `devops-guru:ServiceNames`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions.serviceNames.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruConditions.property.ListAnomaliesForInsightConditionKeys">ListAnomaliesForInsightConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListAnomaliesForInsight action. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruConditions.property.SearchInsightsConditionKeys">SearchInsightsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SearchInsights action. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruConditions.property.SERVICE_NAMES">SERVICE_NAMES</a></code> | <code>string</code> | Condition key: devops-guru:ServiceNames (ArrayOfString). |

---

##### `ListAnomaliesForInsightConditionKeys`<sup>Required</sup> <a name="ListAnomaliesForInsightConditionKeys" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions.property.ListAnomaliesForInsightConditionKeys"></a>

```typescript
public readonly ListAnomaliesForInsightConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListAnomaliesForInsight action.

---

##### `SearchInsightsConditionKeys`<sup>Required</sup> <a name="SearchInsightsConditionKeys" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions.property.SearchInsightsConditionKeys"></a>

```typescript
public readonly SearchInsightsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SearchInsights action.

---

##### `SERVICE_NAMES`<sup>Required</sup> <a name="SERVICE_NAMES" id="@cdk_utils/iam.devops_guru.DevopsGuruConditions.property.SERVICE_NAMES"></a>

```typescript
public readonly SERVICE_NAMES: string;
```

- *Type:* string

Condition key: devops-guru:ServiceNames (ArrayOfString).

---

### DevopsGuruOperations <a name="DevopsGuruOperations" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations"></a>

API operation to required IAM actions mapping for devops-guru.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.Initializer"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

new devops_guru.DevopsGuruOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.AddNotificationChannel">AddNotificationChannel</a></code> | <code>string[]</code> | IAM actions required for the AddNotificationChannel API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DeleteInsight">DeleteInsight</a></code> | <code>string[]</code> | IAM actions required for the DeleteInsight API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeAccountHealth">DescribeAccountHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountHealth API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeAccountOverview">DescribeAccountOverview</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountOverview API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeAnomaly">DescribeAnomaly</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnomaly API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeEventSourcesConfig">DescribeEventSourcesConfig</a></code> | <code>string[]</code> | IAM actions required for the DescribeEventSourcesConfig API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeFeedback">DescribeFeedback</a></code> | <code>string[]</code> | IAM actions required for the DescribeFeedback API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeInsight">DescribeInsight</a></code> | <code>string[]</code> | IAM actions required for the DescribeInsight API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeOrganizationHealth">DescribeOrganizationHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationHealth API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeOrganizationOverview">DescribeOrganizationOverview</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationOverview API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeOrganizationResourceCollectionHealth">DescribeOrganizationResourceCollectionHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeOrganizationResourceCollectionHealth API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeResourceCollectionHealth">DescribeResourceCollectionHealth</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourceCollectionHealth API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeServiceIntegration">DescribeServiceIntegration</a></code> | <code>string[]</code> | IAM actions required for the DescribeServiceIntegration API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListAnomaliesForInsight">ListAnomaliesForInsight</a></code> | <code>string[]</code> | IAM actions required for the ListAnomaliesForInsight API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListAnomalousLogGroups">ListAnomalousLogGroups</a></code> | <code>string[]</code> | IAM actions required for the ListAnomalousLogGroups API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListEvents">ListEvents</a></code> | <code>string[]</code> | IAM actions required for the ListEvents API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListInsights">ListInsights</a></code> | <code>string[]</code> | IAM actions required for the ListInsights API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListMonitoredResources">ListMonitoredResources</a></code> | <code>string[]</code> | IAM actions required for the ListMonitoredResources API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListNotificationChannels">ListNotificationChannels</a></code> | <code>string[]</code> | IAM actions required for the ListNotificationChannels API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListOrganizationInsights">ListOrganizationInsights</a></code> | <code>string[]</code> | IAM actions required for the ListOrganizationInsights API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListRecommendations">ListRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListRecommendations API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.opGetCostEstimation">opGetCostEstimation</a></code> | <code>string[]</code> | IAM actions required for the GetCostEstimation API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.opGetResourceCollection">opGetResourceCollection</a></code> | <code>string[]</code> | IAM actions required for the GetResourceCollection API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.PutFeedback">PutFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutFeedback API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.RemoveNotificationChannel">RemoveNotificationChannel</a></code> | <code>string[]</code> | IAM actions required for the RemoveNotificationChannel API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.SearchInsights">SearchInsights</a></code> | <code>string[]</code> | IAM actions required for the SearchInsights API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.SearchOrganizationInsights">SearchOrganizationInsights</a></code> | <code>string[]</code> | IAM actions required for the SearchOrganizationInsights API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.StartCostEstimation">StartCostEstimation</a></code> | <code>string[]</code> | IAM actions required for the StartCostEstimation API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.UpdateEventSourcesConfig">UpdateEventSourcesConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateEventSourcesConfig API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.UpdateResourceCollection">UpdateResourceCollection</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceCollection API call. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.UpdateServiceIntegration">UpdateServiceIntegration</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceIntegration API call. |

---

##### `AddNotificationChannel`<sup>Required</sup> <a name="AddNotificationChannel" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.AddNotificationChannel"></a>

```typescript
public readonly AddNotificationChannel: string[];
```

- *Type:* string[]

IAM actions required for the AddNotificationChannel API call.

---

##### `DeleteInsight`<sup>Required</sup> <a name="DeleteInsight" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DeleteInsight"></a>

```typescript
public readonly DeleteInsight: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInsight API call.

---

##### `DescribeAccountHealth`<sup>Required</sup> <a name="DescribeAccountHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeAccountHealth"></a>

```typescript
public readonly DescribeAccountHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountHealth API call.

---

##### `DescribeAccountOverview`<sup>Required</sup> <a name="DescribeAccountOverview" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeAccountOverview"></a>

```typescript
public readonly DescribeAccountOverview: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountOverview API call.

---

##### `DescribeAnomaly`<sup>Required</sup> <a name="DescribeAnomaly" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeAnomaly"></a>

```typescript
public readonly DescribeAnomaly: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnomaly API call.

---

##### `DescribeEventSourcesConfig`<sup>Required</sup> <a name="DescribeEventSourcesConfig" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeEventSourcesConfig"></a>

```typescript
public readonly DescribeEventSourcesConfig: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEventSourcesConfig API call.

---

##### `DescribeFeedback`<sup>Required</sup> <a name="DescribeFeedback" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeFeedback"></a>

```typescript
public readonly DescribeFeedback: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFeedback API call.

---

##### `DescribeInsight`<sup>Required</sup> <a name="DescribeInsight" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeInsight"></a>

```typescript
public readonly DescribeInsight: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInsight API call.

---

##### `DescribeOrganizationHealth`<sup>Required</sup> <a name="DescribeOrganizationHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeOrganizationHealth"></a>

```typescript
public readonly DescribeOrganizationHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationHealth API call.

---

##### `DescribeOrganizationOverview`<sup>Required</sup> <a name="DescribeOrganizationOverview" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeOrganizationOverview"></a>

```typescript
public readonly DescribeOrganizationOverview: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationOverview API call.

---

##### `DescribeOrganizationResourceCollectionHealth`<sup>Required</sup> <a name="DescribeOrganizationResourceCollectionHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeOrganizationResourceCollectionHealth"></a>

```typescript
public readonly DescribeOrganizationResourceCollectionHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeOrganizationResourceCollectionHealth API call.

---

##### `DescribeResourceCollectionHealth`<sup>Required</sup> <a name="DescribeResourceCollectionHealth" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeResourceCollectionHealth"></a>

```typescript
public readonly DescribeResourceCollectionHealth: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourceCollectionHealth API call.

---

##### `DescribeServiceIntegration`<sup>Required</sup> <a name="DescribeServiceIntegration" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.DescribeServiceIntegration"></a>

```typescript
public readonly DescribeServiceIntegration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeServiceIntegration API call.

---

##### `ListAnomaliesForInsight`<sup>Required</sup> <a name="ListAnomaliesForInsight" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListAnomaliesForInsight"></a>

```typescript
public readonly ListAnomaliesForInsight: string[];
```

- *Type:* string[]

IAM actions required for the ListAnomaliesForInsight API call.

---

##### `ListAnomalousLogGroups`<sup>Required</sup> <a name="ListAnomalousLogGroups" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListAnomalousLogGroups"></a>

```typescript
public readonly ListAnomalousLogGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListAnomalousLogGroups API call.

---

##### `ListEvents`<sup>Required</sup> <a name="ListEvents" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListEvents"></a>

```typescript
public readonly ListEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListEvents API call.

---

##### `ListInsights`<sup>Required</sup> <a name="ListInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListInsights"></a>

```typescript
public readonly ListInsights: string[];
```

- *Type:* string[]

IAM actions required for the ListInsights API call.

---

##### `ListMonitoredResources`<sup>Required</sup> <a name="ListMonitoredResources" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListMonitoredResources"></a>

```typescript
public readonly ListMonitoredResources: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitoredResources API call.

---

##### `ListNotificationChannels`<sup>Required</sup> <a name="ListNotificationChannels" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListNotificationChannels"></a>

```typescript
public readonly ListNotificationChannels: string[];
```

- *Type:* string[]

IAM actions required for the ListNotificationChannels API call.

---

##### `ListOrganizationInsights`<sup>Required</sup> <a name="ListOrganizationInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListOrganizationInsights"></a>

```typescript
public readonly ListOrganizationInsights: string[];
```

- *Type:* string[]

IAM actions required for the ListOrganizationInsights API call.

---

##### `ListRecommendations`<sup>Required</sup> <a name="ListRecommendations" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.ListRecommendations"></a>

```typescript
public readonly ListRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListRecommendations API call.

---

##### `opGetCostEstimation`<sup>Required</sup> <a name="opGetCostEstimation" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.opGetCostEstimation"></a>

```typescript
public readonly opGetCostEstimation: string[];
```

- *Type:* string[]

IAM actions required for the GetCostEstimation API call.

---

##### `opGetResourceCollection`<sup>Required</sup> <a name="opGetResourceCollection" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.opGetResourceCollection"></a>

```typescript
public readonly opGetResourceCollection: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceCollection API call.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutFeedback API call.

---

##### `RemoveNotificationChannel`<sup>Required</sup> <a name="RemoveNotificationChannel" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.RemoveNotificationChannel"></a>

```typescript
public readonly RemoveNotificationChannel: string[];
```

- *Type:* string[]

IAM actions required for the RemoveNotificationChannel API call.

---

##### `SearchInsights`<sup>Required</sup> <a name="SearchInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.SearchInsights"></a>

```typescript
public readonly SearchInsights: string[];
```

- *Type:* string[]

IAM actions required for the SearchInsights API call.

---

##### `SearchOrganizationInsights`<sup>Required</sup> <a name="SearchOrganizationInsights" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.SearchOrganizationInsights"></a>

```typescript
public readonly SearchOrganizationInsights: string[];
```

- *Type:* string[]

IAM actions required for the SearchOrganizationInsights API call.

---

##### `StartCostEstimation`<sup>Required</sup> <a name="StartCostEstimation" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.StartCostEstimation"></a>

```typescript
public readonly StartCostEstimation: string[];
```

- *Type:* string[]

IAM actions required for the StartCostEstimation API call.

---

##### `UpdateEventSourcesConfig`<sup>Required</sup> <a name="UpdateEventSourcesConfig" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.UpdateEventSourcesConfig"></a>

```typescript
public readonly UpdateEventSourcesConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEventSourcesConfig API call.

---

##### `UpdateResourceCollection`<sup>Required</sup> <a name="UpdateResourceCollection" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.UpdateResourceCollection"></a>

```typescript
public readonly UpdateResourceCollection: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceCollection API call.

---

##### `UpdateServiceIntegration`<sup>Required</sup> <a name="UpdateServiceIntegration" id="@cdk_utils/iam.devops_guru.DevopsGuruOperations.property.UpdateServiceIntegration"></a>

```typescript
public readonly UpdateServiceIntegration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceIntegration API call.

---

### DevopsGuruResources <a name="DevopsGuruResources" id="@cdk_utils/iam.devops_guru.DevopsGuruResources"></a>

ARN builders, validators, and parsers for devops-guru resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.Initializer"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

new devops_guru.DevopsGuruResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruResources.isValidTopicArn">isValidTopicArn</a></code> | Validates whether a string is a valid ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruResources.parseTopicArn">parseTopicArn</a></code> | Parses a topic ARN into its components. |
| <code><a href="#@cdk_utils/iam.devops_guru.DevopsGuruResources.topic">topic</a></code> | Builds an ARN for the topic resource. |

---

##### `isValidTopicArn` <a name="isValidTopicArn" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.isValidTopicArn"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

devops_guru.DevopsGuruResources.isValidTopicArn(arn: string)
```

Validates whether a string is a valid ARN for the topic resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.isValidTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicArn` <a name="parseTopicArn" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.parseTopicArn"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

devops_guru.DevopsGuruResources.parseTopicArn(arn: string)
```

Parses a topic ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.parseTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `topic` <a name="topic" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.topic"></a>

```typescript
import { devops_guru } from '@cdk_utils/iam'

devops_guru.DevopsGuruResources.topic(props: DevopsGuruTopicArnProps)
```

Builds an ARN for the topic resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.devops_guru.DevopsGuruResources.topic.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.devops_guru.DevopsGuruTopicArnProps">DevopsGuruTopicArnProps</a>

---




