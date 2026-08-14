# `migrationhub_strategy` Submodule <a name="`migrationhub_strategy` Submodule" id="@cdk_utils/iam.migrationhub_strategy"></a>



## Classes <a name="Classes" id="Classes"></a>

### MigrationhubStrategyActions <a name="MigrationhubStrategyActions" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions"></a>

IAM action constants for the migrationhub-strategy service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.Initializer"></a>

```typescript
import { migrationhub_strategy } from '@cdk_utils/iam'

new migrationhub_strategy.MigrationhubStrategyActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetAntiPattern">actionGetAntiPattern</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetAntiPattern. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetApplicationComponentDetails">actionGetApplicationComponentDetails</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetApplicationComponentDetails. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetApplicationComponentStrategies">actionGetApplicationComponentStrategies</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetApplicationComponentStrategies. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetAssessment">actionGetAssessment</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetAssessment. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetImportFileTask">actionGetImportFileTask</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetImportFileTask. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetLatestAssessmentId">actionGetLatestAssessmentId</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetLatestAssessmentId. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetMessage">actionGetMessage</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetMessage. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetPortfolioPreferences">actionGetPortfolioPreferences</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetPortfolioPreferences. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetPortfolioSummary">actionGetPortfolioSummary</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetPortfolioSummary. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetRecommendationReportDetails">actionGetRecommendationReportDetails</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetRecommendationReportDetails. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetServerDetails">actionGetServerDetails</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetServerDetails. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetServerStrategies">actionGetServerStrategies</a></code> | <code>string</code> | [Read] migrationhub-strategy:GetServerStrategies. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListAnalyzableServers">ListAnalyzableServers</a></code> | <code>string</code> | [List] migrationhub-strategy:ListAnalyzableServers. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListAntiPatterns">ListAntiPatterns</a></code> | <code>string</code> | [List] migrationhub-strategy:ListAntiPatterns. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListApplicationComponents">ListApplicationComponents</a></code> | <code>string</code> | [List] migrationhub-strategy:ListApplicationComponents. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListCollectors">ListCollectors</a></code> | <code>string</code> | [List] migrationhub-strategy:ListCollectors. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListImportFileTask">ListImportFileTask</a></code> | <code>string</code> | [List] migrationhub-strategy:ListImportFileTask. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListJarArtifacts">ListJarArtifacts</a></code> | <code>string</code> | [List] migrationhub-strategy:ListJarArtifacts. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListServers">ListServers</a></code> | <code>string</code> | [List] migrationhub-strategy:ListServers. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.PutLogData">PutLogData</a></code> | <code>string</code> | [Write] migrationhub-strategy:PutLogData. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.PutMetricData">PutMetricData</a></code> | <code>string</code> | [Write] migrationhub-strategy:PutMetricData. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.PutPortfolioPreferences">PutPortfolioPreferences</a></code> | <code>string</code> | [Write] migrationhub-strategy:PutPortfolioPreferences. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.RegisterCollector">RegisterCollector</a></code> | <code>string</code> | [Write] migrationhub-strategy:RegisterCollector. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.SendMessage">SendMessage</a></code> | <code>string</code> | [Write] migrationhub-strategy:SendMessage. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StartAssessment">StartAssessment</a></code> | <code>string</code> | [Write] migrationhub-strategy:StartAssessment. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StartImportFileTask">StartImportFileTask</a></code> | <code>string</code> | [Write] migrationhub-strategy:StartImportFileTask. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StartRecommendationReportGeneration">StartRecommendationReportGeneration</a></code> | <code>string</code> | [Write] migrationhub-strategy:StartRecommendationReportGeneration. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StopAssessment">StopAssessment</a></code> | <code>string</code> | [Write] migrationhub-strategy:StopAssessment. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.UpdateApplicationComponentConfig">UpdateApplicationComponentConfig</a></code> | <code>string</code> | [Write] migrationhub-strategy:UpdateApplicationComponentConfig. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.UpdateCollectorConfiguration">UpdateCollectorConfiguration</a></code> | <code>string</code> | [Write] migrationhub-strategy:UpdateCollectorConfiguration. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.UpdateServerConfig">UpdateServerConfig</a></code> | <code>string</code> | [Write] migrationhub-strategy:UpdateServerConfig. |

---

##### `actionGetAntiPattern`<sup>Required</sup> <a name="actionGetAntiPattern" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetAntiPattern"></a>

```typescript
public readonly actionGetAntiPattern: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetAntiPattern.

---

##### `actionGetApplicationComponentDetails`<sup>Required</sup> <a name="actionGetApplicationComponentDetails" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetApplicationComponentDetails"></a>

```typescript
public readonly actionGetApplicationComponentDetails: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetApplicationComponentDetails.

---

##### `actionGetApplicationComponentStrategies`<sup>Required</sup> <a name="actionGetApplicationComponentStrategies" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetApplicationComponentStrategies"></a>

```typescript
public readonly actionGetApplicationComponentStrategies: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetApplicationComponentStrategies.

---

##### `actionGetAssessment`<sup>Required</sup> <a name="actionGetAssessment" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetAssessment"></a>

```typescript
public readonly actionGetAssessment: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetAssessment.

---

##### `actionGetImportFileTask`<sup>Required</sup> <a name="actionGetImportFileTask" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetImportFileTask"></a>

```typescript
public readonly actionGetImportFileTask: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetImportFileTask.

---

##### `actionGetLatestAssessmentId`<sup>Required</sup> <a name="actionGetLatestAssessmentId" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetLatestAssessmentId"></a>

```typescript
public readonly actionGetLatestAssessmentId: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetLatestAssessmentId.

---

##### `actionGetMessage`<sup>Required</sup> <a name="actionGetMessage" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetMessage"></a>

```typescript
public readonly actionGetMessage: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetMessage.

---

##### `actionGetPortfolioPreferences`<sup>Required</sup> <a name="actionGetPortfolioPreferences" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetPortfolioPreferences"></a>

```typescript
public readonly actionGetPortfolioPreferences: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetPortfolioPreferences.

---

##### `actionGetPortfolioSummary`<sup>Required</sup> <a name="actionGetPortfolioSummary" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetPortfolioSummary"></a>

```typescript
public readonly actionGetPortfolioSummary: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetPortfolioSummary.

---

##### `actionGetRecommendationReportDetails`<sup>Required</sup> <a name="actionGetRecommendationReportDetails" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetRecommendationReportDetails"></a>

```typescript
public readonly actionGetRecommendationReportDetails: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetRecommendationReportDetails.

---

##### `actionGetServerDetails`<sup>Required</sup> <a name="actionGetServerDetails" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetServerDetails"></a>

```typescript
public readonly actionGetServerDetails: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetServerDetails.

---

##### `actionGetServerStrategies`<sup>Required</sup> <a name="actionGetServerStrategies" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.actionGetServerStrategies"></a>

```typescript
public readonly actionGetServerStrategies: string;
```

- *Type:* string

[Read] migrationhub-strategy:GetServerStrategies.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListAnalyzableServers`<sup>Required</sup> <a name="ListAnalyzableServers" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListAnalyzableServers"></a>

```typescript
public readonly ListAnalyzableServers: string;
```

- *Type:* string

[List] migrationhub-strategy:ListAnalyzableServers.

---

##### `ListAntiPatterns`<sup>Required</sup> <a name="ListAntiPatterns" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListAntiPatterns"></a>

```typescript
public readonly ListAntiPatterns: string;
```

- *Type:* string

[List] migrationhub-strategy:ListAntiPatterns.

---

##### `ListApplicationComponents`<sup>Required</sup> <a name="ListApplicationComponents" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListApplicationComponents"></a>

```typescript
public readonly ListApplicationComponents: string;
```

- *Type:* string

[List] migrationhub-strategy:ListApplicationComponents.

---

##### `ListCollectors`<sup>Required</sup> <a name="ListCollectors" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListCollectors"></a>

```typescript
public readonly ListCollectors: string;
```

- *Type:* string

[List] migrationhub-strategy:ListCollectors.

---

##### `ListImportFileTask`<sup>Required</sup> <a name="ListImportFileTask" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListImportFileTask"></a>

```typescript
public readonly ListImportFileTask: string;
```

- *Type:* string

[List] migrationhub-strategy:ListImportFileTask.

---

##### `ListJarArtifacts`<sup>Required</sup> <a name="ListJarArtifacts" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListJarArtifacts"></a>

```typescript
public readonly ListJarArtifacts: string;
```

- *Type:* string

[List] migrationhub-strategy:ListJarArtifacts.

---

##### `ListServers`<sup>Required</sup> <a name="ListServers" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.ListServers"></a>

```typescript
public readonly ListServers: string;
```

- *Type:* string

[List] migrationhub-strategy:ListServers.

---

##### `PutLogData`<sup>Required</sup> <a name="PutLogData" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.PutLogData"></a>

```typescript
public readonly PutLogData: string;
```

- *Type:* string

[Write] migrationhub-strategy:PutLogData.

---

##### `PutMetricData`<sup>Required</sup> <a name="PutMetricData" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.PutMetricData"></a>

```typescript
public readonly PutMetricData: string;
```

- *Type:* string

[Write] migrationhub-strategy:PutMetricData.

---

##### `PutPortfolioPreferences`<sup>Required</sup> <a name="PutPortfolioPreferences" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.PutPortfolioPreferences"></a>

```typescript
public readonly PutPortfolioPreferences: string;
```

- *Type:* string

[Write] migrationhub-strategy:PutPortfolioPreferences.

---

##### `RegisterCollector`<sup>Required</sup> <a name="RegisterCollector" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.RegisterCollector"></a>

```typescript
public readonly RegisterCollector: string;
```

- *Type:* string

[Write] migrationhub-strategy:RegisterCollector.

---

##### `SendMessage`<sup>Required</sup> <a name="SendMessage" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.SendMessage"></a>

```typescript
public readonly SendMessage: string;
```

- *Type:* string

[Write] migrationhub-strategy:SendMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartAssessment`<sup>Required</sup> <a name="StartAssessment" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StartAssessment"></a>

```typescript
public readonly StartAssessment: string;
```

- *Type:* string

[Write] migrationhub-strategy:StartAssessment.

---

##### `StartImportFileTask`<sup>Required</sup> <a name="StartImportFileTask" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StartImportFileTask"></a>

```typescript
public readonly StartImportFileTask: string;
```

- *Type:* string

[Write] migrationhub-strategy:StartImportFileTask.

---

##### `StartRecommendationReportGeneration`<sup>Required</sup> <a name="StartRecommendationReportGeneration" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StartRecommendationReportGeneration"></a>

```typescript
public readonly StartRecommendationReportGeneration: string;
```

- *Type:* string

[Write] migrationhub-strategy:StartRecommendationReportGeneration.

---

##### `StopAssessment`<sup>Required</sup> <a name="StopAssessment" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.StopAssessment"></a>

```typescript
public readonly StopAssessment: string;
```

- *Type:* string

[Write] migrationhub-strategy:StopAssessment.

---

##### `UpdateApplicationComponentConfig`<sup>Required</sup> <a name="UpdateApplicationComponentConfig" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.UpdateApplicationComponentConfig"></a>

```typescript
public readonly UpdateApplicationComponentConfig: string;
```

- *Type:* string

[Write] migrationhub-strategy:UpdateApplicationComponentConfig.

---

##### `UpdateCollectorConfiguration`<sup>Required</sup> <a name="UpdateCollectorConfiguration" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.UpdateCollectorConfiguration"></a>

```typescript
public readonly UpdateCollectorConfiguration: string;
```

- *Type:* string

[Write] migrationhub-strategy:UpdateCollectorConfiguration.

---

##### `UpdateServerConfig`<sup>Required</sup> <a name="UpdateServerConfig" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyActions.property.UpdateServerConfig"></a>

```typescript
public readonly UpdateServerConfig: string;
```

- *Type:* string

[Write] migrationhub-strategy:UpdateServerConfig.

---

### MigrationhubStrategyOperations <a name="MigrationhubStrategyOperations" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations"></a>

API operation to required IAM actions mapping for migrationhub-strategy.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.Initializer"></a>

```typescript
import { migrationhub_strategy } from '@cdk_utils/iam'

new migrationhub_strategy.MigrationhubStrategyOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListAnalyzableServers">ListAnalyzableServers</a></code> | <code>string[]</code> | IAM actions required for the ListAnalyzableServers API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListApplicationComponents">ListApplicationComponents</a></code> | <code>string[]</code> | IAM actions required for the ListApplicationComponents API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListCollectors">ListCollectors</a></code> | <code>string[]</code> | IAM actions required for the ListCollectors API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListImportFileTask">ListImportFileTask</a></code> | <code>string[]</code> | IAM actions required for the ListImportFileTask API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListServers">ListServers</a></code> | <code>string[]</code> | IAM actions required for the ListServers API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetApplicationComponentDetails">opGetApplicationComponentDetails</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationComponentDetails API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetApplicationComponentStrategies">opGetApplicationComponentStrategies</a></code> | <code>string[]</code> | IAM actions required for the GetApplicationComponentStrategies API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetAssessment">opGetAssessment</a></code> | <code>string[]</code> | IAM actions required for the GetAssessment API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetImportFileTask">opGetImportFileTask</a></code> | <code>string[]</code> | IAM actions required for the GetImportFileTask API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetLatestAssessmentId">opGetLatestAssessmentId</a></code> | <code>string[]</code> | IAM actions required for the GetLatestAssessmentId API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetPortfolioPreferences">opGetPortfolioPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetPortfolioPreferences API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetPortfolioSummary">opGetPortfolioSummary</a></code> | <code>string[]</code> | IAM actions required for the GetPortfolioSummary API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetRecommendationReportDetails">opGetRecommendationReportDetails</a></code> | <code>string[]</code> | IAM actions required for the GetRecommendationReportDetails API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetServerDetails">opGetServerDetails</a></code> | <code>string[]</code> | IAM actions required for the GetServerDetails API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetServerStrategies">opGetServerStrategies</a></code> | <code>string[]</code> | IAM actions required for the GetServerStrategies API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.PutPortfolioPreferences">PutPortfolioPreferences</a></code> | <code>string[]</code> | IAM actions required for the PutPortfolioPreferences API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StartAssessment">StartAssessment</a></code> | <code>string[]</code> | IAM actions required for the StartAssessment API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StartImportFileTask">StartImportFileTask</a></code> | <code>string[]</code> | IAM actions required for the StartImportFileTask API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StartRecommendationReportGeneration">StartRecommendationReportGeneration</a></code> | <code>string[]</code> | IAM actions required for the StartRecommendationReportGeneration API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StopAssessment">StopAssessment</a></code> | <code>string[]</code> | IAM actions required for the StopAssessment API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.UpdateApplicationComponentConfig">UpdateApplicationComponentConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationComponentConfig API call. |
| <code><a href="#@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.UpdateServerConfig">UpdateServerConfig</a></code> | <code>string[]</code> | IAM actions required for the UpdateServerConfig API call. |

---

##### `ListAnalyzableServers`<sup>Required</sup> <a name="ListAnalyzableServers" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListAnalyzableServers"></a>

```typescript
public readonly ListAnalyzableServers: string[];
```

- *Type:* string[]

IAM actions required for the ListAnalyzableServers API call.

---

##### `ListApplicationComponents`<sup>Required</sup> <a name="ListApplicationComponents" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListApplicationComponents"></a>

```typescript
public readonly ListApplicationComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListApplicationComponents API call.

---

##### `ListCollectors`<sup>Required</sup> <a name="ListCollectors" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListCollectors"></a>

```typescript
public readonly ListCollectors: string[];
```

- *Type:* string[]

IAM actions required for the ListCollectors API call.

---

##### `ListImportFileTask`<sup>Required</sup> <a name="ListImportFileTask" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListImportFileTask"></a>

```typescript
public readonly ListImportFileTask: string[];
```

- *Type:* string[]

IAM actions required for the ListImportFileTask API call.

---

##### `ListServers`<sup>Required</sup> <a name="ListServers" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.ListServers"></a>

```typescript
public readonly ListServers: string[];
```

- *Type:* string[]

IAM actions required for the ListServers API call.

---

##### `opGetApplicationComponentDetails`<sup>Required</sup> <a name="opGetApplicationComponentDetails" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetApplicationComponentDetails"></a>

```typescript
public readonly opGetApplicationComponentDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationComponentDetails API call.

---

##### `opGetApplicationComponentStrategies`<sup>Required</sup> <a name="opGetApplicationComponentStrategies" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetApplicationComponentStrategies"></a>

```typescript
public readonly opGetApplicationComponentStrategies: string[];
```

- *Type:* string[]

IAM actions required for the GetApplicationComponentStrategies API call.

---

##### `opGetAssessment`<sup>Required</sup> <a name="opGetAssessment" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetAssessment"></a>

```typescript
public readonly opGetAssessment: string[];
```

- *Type:* string[]

IAM actions required for the GetAssessment API call.

---

##### `opGetImportFileTask`<sup>Required</sup> <a name="opGetImportFileTask" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetImportFileTask"></a>

```typescript
public readonly opGetImportFileTask: string[];
```

- *Type:* string[]

IAM actions required for the GetImportFileTask API call.

---

##### `opGetLatestAssessmentId`<sup>Required</sup> <a name="opGetLatestAssessmentId" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetLatestAssessmentId"></a>

```typescript
public readonly opGetLatestAssessmentId: string[];
```

- *Type:* string[]

IAM actions required for the GetLatestAssessmentId API call.

---

##### `opGetPortfolioPreferences`<sup>Required</sup> <a name="opGetPortfolioPreferences" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetPortfolioPreferences"></a>

```typescript
public readonly opGetPortfolioPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetPortfolioPreferences API call.

---

##### `opGetPortfolioSummary`<sup>Required</sup> <a name="opGetPortfolioSummary" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetPortfolioSummary"></a>

```typescript
public readonly opGetPortfolioSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetPortfolioSummary API call.

---

##### `opGetRecommendationReportDetails`<sup>Required</sup> <a name="opGetRecommendationReportDetails" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetRecommendationReportDetails"></a>

```typescript
public readonly opGetRecommendationReportDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetRecommendationReportDetails API call.

---

##### `opGetServerDetails`<sup>Required</sup> <a name="opGetServerDetails" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetServerDetails"></a>

```typescript
public readonly opGetServerDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetServerDetails API call.

---

##### `opGetServerStrategies`<sup>Required</sup> <a name="opGetServerStrategies" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.opGetServerStrategies"></a>

```typescript
public readonly opGetServerStrategies: string[];
```

- *Type:* string[]

IAM actions required for the GetServerStrategies API call.

---

##### `PutPortfolioPreferences`<sup>Required</sup> <a name="PutPortfolioPreferences" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.PutPortfolioPreferences"></a>

```typescript
public readonly PutPortfolioPreferences: string[];
```

- *Type:* string[]

IAM actions required for the PutPortfolioPreferences API call.

---

##### `StartAssessment`<sup>Required</sup> <a name="StartAssessment" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StartAssessment"></a>

```typescript
public readonly StartAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StartAssessment API call.

---

##### `StartImportFileTask`<sup>Required</sup> <a name="StartImportFileTask" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StartImportFileTask"></a>

```typescript
public readonly StartImportFileTask: string[];
```

- *Type:* string[]

IAM actions required for the StartImportFileTask API call.

---

##### `StartRecommendationReportGeneration`<sup>Required</sup> <a name="StartRecommendationReportGeneration" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StartRecommendationReportGeneration"></a>

```typescript
public readonly StartRecommendationReportGeneration: string[];
```

- *Type:* string[]

IAM actions required for the StartRecommendationReportGeneration API call.

---

##### `StopAssessment`<sup>Required</sup> <a name="StopAssessment" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.StopAssessment"></a>

```typescript
public readonly StopAssessment: string[];
```

- *Type:* string[]

IAM actions required for the StopAssessment API call.

---

##### `UpdateApplicationComponentConfig`<sup>Required</sup> <a name="UpdateApplicationComponentConfig" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.UpdateApplicationComponentConfig"></a>

```typescript
public readonly UpdateApplicationComponentConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationComponentConfig API call.

---

##### `UpdateServerConfig`<sup>Required</sup> <a name="UpdateServerConfig" id="@cdk_utils/iam.migrationhub_strategy.MigrationhubStrategyOperations.property.UpdateServerConfig"></a>

```typescript
public readonly UpdateServerConfig: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServerConfig API call.

---


