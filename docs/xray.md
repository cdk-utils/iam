# `xray` Submodule <a name="`xray` Submodule" id="@cdk_utils/iam.xray"></a>


## Structs <a name="Structs" id="Structs"></a>

### XrayGroupArnComponents <a name="XrayGroupArnComponents" id="@cdk_utils/iam.xray.XrayGroupArnComponents"></a>

Parsed components of a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.xray.XrayGroupArnComponents.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

const xrayGroupArnComponents: xray.XrayGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnComponents.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.xray.XrayGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.xray.XrayGroupArnComponents.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.xray.XrayGroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.xray.XrayGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.xray.XrayGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### XrayGroupArnProps <a name="XrayGroupArnProps" id="@cdk_utils/iam.xray.XrayGroupArnProps"></a>

Properties for building a group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.xray.XrayGroupArnProps.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

const xrayGroupArnProps: xray.XrayGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnProps.property.groupName">groupName</a></code> | <code>string</code> | The GroupName component of the ARN. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.xray.XrayGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdk_utils/iam.xray.XrayGroupArnProps.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

The GroupName component of the ARN.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.xray.XrayGroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.xray.XrayGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.xray.XrayGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.xray.XrayGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### XraySamplingRuleArnComponents <a name="XraySamplingRuleArnComponents" id="@cdk_utils/iam.xray.XraySamplingRuleArnComponents"></a>

Parsed components of a sampling-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.xray.XraySamplingRuleArnComponents.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

const xraySamplingRuleArnComponents: xray.XraySamplingRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.samplingRuleName">samplingRuleName</a></code> | <code>string</code> | The SamplingRuleName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `samplingRuleName`<sup>Required</sup> <a name="samplingRuleName" id="@cdk_utils/iam.xray.XraySamplingRuleArnComponents.property.samplingRuleName"></a>

```typescript
public readonly samplingRuleName: string;
```

- *Type:* string

The SamplingRuleName component.

---

### XraySamplingRuleArnProps <a name="XraySamplingRuleArnProps" id="@cdk_utils/iam.xray.XraySamplingRuleArnProps"></a>

Properties for building a sampling-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.xray.XraySamplingRuleArnProps.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

const xraySamplingRuleArnProps: xray.XraySamplingRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.samplingRuleName">samplingRuleName</a></code> | <code>string</code> | The SamplingRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `samplingRuleName`<sup>Required</sup> <a name="samplingRuleName" id="@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.samplingRuleName"></a>

```typescript
public readonly samplingRuleName: string;
```

- *Type:* string

The SamplingRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.xray.XraySamplingRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### XrayActions <a name="XrayActions" id="@cdk_utils/iam.xray.XrayActions"></a>

IAM action constants for the xray service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.xray.XrayActions.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

new xray.XrayActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetDistinctTraceGraphs">actionGetDistinctTraceGraphs</a></code> | <code>string</code> | [Read] xray:GetDistinctTraceGraphs. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetEncryptionConfig">actionGetEncryptionConfig</a></code> | <code>string</code> | [Read] xray:GetEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] xray:GetGroup. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetGroups">actionGetGroups</a></code> | <code>string</code> | [Read] xray:GetGroups. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetIndexingRules">actionGetIndexingRules</a></code> | <code>string</code> | [Read] xray:GetIndexingRules. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetInsight">actionGetInsight</a></code> | <code>string</code> | [Read] xray:GetInsight. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetInsightEvents">actionGetInsightEvents</a></code> | <code>string</code> | [Read] xray:GetInsightEvents. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetInsightImpactGraph">actionGetInsightImpactGraph</a></code> | <code>string</code> | [Read] xray:GetInsightImpactGraph. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetInsightSummaries">actionGetInsightSummaries</a></code> | <code>string</code> | [Read] xray:GetInsightSummaries. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetRetrievedTracesGraph">actionGetRetrievedTracesGraph</a></code> | <code>string</code> | [Read] xray:GetRetrievedTracesGraph. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetSamplingRules">actionGetSamplingRules</a></code> | <code>string</code> | [Read] xray:GetSamplingRules. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetSamplingStatisticSummaries">actionGetSamplingStatisticSummaries</a></code> | <code>string</code> | [Read] xray:GetSamplingStatisticSummaries. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetSamplingTargets">actionGetSamplingTargets</a></code> | <code>string</code> | [Read] xray:GetSamplingTargets. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetServiceGraph">actionGetServiceGraph</a></code> | <code>string</code> | [Read] xray:GetServiceGraph. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetTimeSeriesServiceStatistics">actionGetTimeSeriesServiceStatistics</a></code> | <code>string</code> | [Read] xray:GetTimeSeriesServiceStatistics. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetTraceGraph">actionGetTraceGraph</a></code> | <code>string</code> | [Read] xray:GetTraceGraph. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetTraceSegmentDestination">actionGetTraceSegmentDestination</a></code> | <code>string</code> | [Read] xray:GetTraceSegmentDestination. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.actionGetTraceSummaries">actionGetTraceSummaries</a></code> | <code>string</code> | [Read] xray:GetTraceSummaries. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.BatchGetTraces">BatchGetTraces</a></code> | <code>string</code> | [List] xray:BatchGetTraces. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.BatchGetTraceSummaryById">BatchGetTraceSummaryById</a></code> | <code>string</code> | [Read] xray:BatchGetTraceSummaryById. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.CancelTraceRetrieval">CancelTraceRetrieval</a></code> | <code>string</code> | [Read] xray:CancelTraceRetrieval. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] xray:CreateGroup. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.CreateSamplingRule">CreateSamplingRule</a></code> | <code>string</code> | [Write] xray:CreateSamplingRule. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] xray:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] xray:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.DeleteSamplingRule">DeleteSamplingRule</a></code> | <code>string</code> | [Write] xray:DeleteSamplingRule. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.Link">Link</a></code> | <code>string</code> | [Write] xray:Link. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.ListResourcePolicies">ListResourcePolicies</a></code> | <code>string</code> | [List] xray:ListResourcePolicies. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.ListRetrievedTraces">ListRetrievedTraces</a></code> | <code>string</code> | [List] xray:ListRetrievedTraces. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] xray:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.PutEncryptionConfig">PutEncryptionConfig</a></code> | <code>string</code> | [PermissionManagement] xray:PutEncryptionConfig. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] xray:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.PutSpans">PutSpans</a></code> | <code>string</code> | [Write] xray:PutSpans. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.PutSpansForIndexing">PutSpansForIndexing</a></code> | <code>string</code> | [Write] xray:PutSpansForIndexing. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.PutTelemetryRecords">PutTelemetryRecords</a></code> | <code>string</code> | [Write] xray:PutTelemetryRecords. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.PutTraceSegments">PutTraceSegments</a></code> | <code>string</code> | [Write] xray:PutTraceSegments. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.StartTraceRetrieval">StartTraceRetrieval</a></code> | <code>string</code> | [Read] xray:StartTraceRetrieval. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] xray:TagResource. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] xray:UntagResource. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] xray:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.UpdateIndexingRule">UpdateIndexingRule</a></code> | <code>string</code> | [Write] xray:UpdateIndexingRule. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.UpdateSamplingRule">UpdateSamplingRule</a></code> | <code>string</code> | [Write] xray:UpdateSamplingRule. |
| <code><a href="#@cdk_utils/iam.xray.XrayActions.property.UpdateTraceSegmentDestination">UpdateTraceSegmentDestination</a></code> | <code>string</code> | [Write] xray:UpdateTraceSegmentDestination. |

---

##### `actionGetDistinctTraceGraphs`<sup>Required</sup> <a name="actionGetDistinctTraceGraphs" id="@cdk_utils/iam.xray.XrayActions.property.actionGetDistinctTraceGraphs"></a>

```typescript
public readonly actionGetDistinctTraceGraphs: string;
```

- *Type:* string

[Read] xray:GetDistinctTraceGraphs.

---

##### `actionGetEncryptionConfig`<sup>Required</sup> <a name="actionGetEncryptionConfig" id="@cdk_utils/iam.xray.XrayActions.property.actionGetEncryptionConfig"></a>

```typescript
public readonly actionGetEncryptionConfig: string;
```

- *Type:* string

[Read] xray:GetEncryptionConfig.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.xray.XrayActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] xray:GetGroup.

---

##### `actionGetGroups`<sup>Required</sup> <a name="actionGetGroups" id="@cdk_utils/iam.xray.XrayActions.property.actionGetGroups"></a>

```typescript
public readonly actionGetGroups: string;
```

- *Type:* string

[Read] xray:GetGroups.

---

##### `actionGetIndexingRules`<sup>Required</sup> <a name="actionGetIndexingRules" id="@cdk_utils/iam.xray.XrayActions.property.actionGetIndexingRules"></a>

```typescript
public readonly actionGetIndexingRules: string;
```

- *Type:* string

[Read] xray:GetIndexingRules.

---

##### `actionGetInsight`<sup>Required</sup> <a name="actionGetInsight" id="@cdk_utils/iam.xray.XrayActions.property.actionGetInsight"></a>

```typescript
public readonly actionGetInsight: string;
```

- *Type:* string

[Read] xray:GetInsight.

---

##### `actionGetInsightEvents`<sup>Required</sup> <a name="actionGetInsightEvents" id="@cdk_utils/iam.xray.XrayActions.property.actionGetInsightEvents"></a>

```typescript
public readonly actionGetInsightEvents: string;
```

- *Type:* string

[Read] xray:GetInsightEvents.

---

##### `actionGetInsightImpactGraph`<sup>Required</sup> <a name="actionGetInsightImpactGraph" id="@cdk_utils/iam.xray.XrayActions.property.actionGetInsightImpactGraph"></a>

```typescript
public readonly actionGetInsightImpactGraph: string;
```

- *Type:* string

[Read] xray:GetInsightImpactGraph.

---

##### `actionGetInsightSummaries`<sup>Required</sup> <a name="actionGetInsightSummaries" id="@cdk_utils/iam.xray.XrayActions.property.actionGetInsightSummaries"></a>

```typescript
public readonly actionGetInsightSummaries: string;
```

- *Type:* string

[Read] xray:GetInsightSummaries.

---

##### `actionGetRetrievedTracesGraph`<sup>Required</sup> <a name="actionGetRetrievedTracesGraph" id="@cdk_utils/iam.xray.XrayActions.property.actionGetRetrievedTracesGraph"></a>

```typescript
public readonly actionGetRetrievedTracesGraph: string;
```

- *Type:* string

[Read] xray:GetRetrievedTracesGraph.

---

##### `actionGetSamplingRules`<sup>Required</sup> <a name="actionGetSamplingRules" id="@cdk_utils/iam.xray.XrayActions.property.actionGetSamplingRules"></a>

```typescript
public readonly actionGetSamplingRules: string;
```

- *Type:* string

[Read] xray:GetSamplingRules.

---

##### `actionGetSamplingStatisticSummaries`<sup>Required</sup> <a name="actionGetSamplingStatisticSummaries" id="@cdk_utils/iam.xray.XrayActions.property.actionGetSamplingStatisticSummaries"></a>

```typescript
public readonly actionGetSamplingStatisticSummaries: string;
```

- *Type:* string

[Read] xray:GetSamplingStatisticSummaries.

---

##### `actionGetSamplingTargets`<sup>Required</sup> <a name="actionGetSamplingTargets" id="@cdk_utils/iam.xray.XrayActions.property.actionGetSamplingTargets"></a>

```typescript
public readonly actionGetSamplingTargets: string;
```

- *Type:* string

[Read] xray:GetSamplingTargets.

---

##### `actionGetServiceGraph`<sup>Required</sup> <a name="actionGetServiceGraph" id="@cdk_utils/iam.xray.XrayActions.property.actionGetServiceGraph"></a>

```typescript
public readonly actionGetServiceGraph: string;
```

- *Type:* string

[Read] xray:GetServiceGraph.

---

##### `actionGetTimeSeriesServiceStatistics`<sup>Required</sup> <a name="actionGetTimeSeriesServiceStatistics" id="@cdk_utils/iam.xray.XrayActions.property.actionGetTimeSeriesServiceStatistics"></a>

```typescript
public readonly actionGetTimeSeriesServiceStatistics: string;
```

- *Type:* string

[Read] xray:GetTimeSeriesServiceStatistics.

---

##### `actionGetTraceGraph`<sup>Required</sup> <a name="actionGetTraceGraph" id="@cdk_utils/iam.xray.XrayActions.property.actionGetTraceGraph"></a>

```typescript
public readonly actionGetTraceGraph: string;
```

- *Type:* string

[Read] xray:GetTraceGraph.

---

##### `actionGetTraceSegmentDestination`<sup>Required</sup> <a name="actionGetTraceSegmentDestination" id="@cdk_utils/iam.xray.XrayActions.property.actionGetTraceSegmentDestination"></a>

```typescript
public readonly actionGetTraceSegmentDestination: string;
```

- *Type:* string

[Read] xray:GetTraceSegmentDestination.

---

##### `actionGetTraceSummaries`<sup>Required</sup> <a name="actionGetTraceSummaries" id="@cdk_utils/iam.xray.XrayActions.property.actionGetTraceSummaries"></a>

```typescript
public readonly actionGetTraceSummaries: string;
```

- *Type:* string

[Read] xray:GetTraceSummaries.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.xray.XrayActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.xray.XrayActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.xray.XrayActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.xray.XrayActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.xray.XrayActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetTraces`<sup>Required</sup> <a name="BatchGetTraces" id="@cdk_utils/iam.xray.XrayActions.property.BatchGetTraces"></a>

```typescript
public readonly BatchGetTraces: string;
```

- *Type:* string

[List] xray:BatchGetTraces.

---

##### `BatchGetTraceSummaryById`<sup>Required</sup> <a name="BatchGetTraceSummaryById" id="@cdk_utils/iam.xray.XrayActions.property.BatchGetTraceSummaryById"></a>

```typescript
public readonly BatchGetTraceSummaryById: string;
```

- *Type:* string

[Read] xray:BatchGetTraceSummaryById.

---

##### `CancelTraceRetrieval`<sup>Required</sup> <a name="CancelTraceRetrieval" id="@cdk_utils/iam.xray.XrayActions.property.CancelTraceRetrieval"></a>

```typescript
public readonly CancelTraceRetrieval: string;
```

- *Type:* string

[Read] xray:CancelTraceRetrieval.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.xray.XrayActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] xray:CreateGroup.

---

##### `CreateSamplingRule`<sup>Required</sup> <a name="CreateSamplingRule" id="@cdk_utils/iam.xray.XrayActions.property.CreateSamplingRule"></a>

```typescript
public readonly CreateSamplingRule: string;
```

- *Type:* string

[Write] xray:CreateSamplingRule.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.xray.XrayActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] xray:DeleteGroup.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.xray.XrayActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] xray:DeleteResourcePolicy.

---

##### `DeleteSamplingRule`<sup>Required</sup> <a name="DeleteSamplingRule" id="@cdk_utils/iam.xray.XrayActions.property.DeleteSamplingRule"></a>

```typescript
public readonly DeleteSamplingRule: string;
```

- *Type:* string

[Write] xray:DeleteSamplingRule.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.xray.XrayActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] xray:Link.

---

##### `ListResourcePolicies`<sup>Required</sup> <a name="ListResourcePolicies" id="@cdk_utils/iam.xray.XrayActions.property.ListResourcePolicies"></a>

```typescript
public readonly ListResourcePolicies: string;
```

- *Type:* string

[List] xray:ListResourcePolicies.

---

##### `ListRetrievedTraces`<sup>Required</sup> <a name="ListRetrievedTraces" id="@cdk_utils/iam.xray.XrayActions.property.ListRetrievedTraces"></a>

```typescript
public readonly ListRetrievedTraces: string;
```

- *Type:* string

[List] xray:ListRetrievedTraces.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.xray.XrayActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] xray:ListTagsForResource.

---

##### `PutEncryptionConfig`<sup>Required</sup> <a name="PutEncryptionConfig" id="@cdk_utils/iam.xray.XrayActions.property.PutEncryptionConfig"></a>

```typescript
public readonly PutEncryptionConfig: string;
```

- *Type:* string

[PermissionManagement] xray:PutEncryptionConfig.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.xray.XrayActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] xray:PutResourcePolicy.

---

##### `PutSpans`<sup>Required</sup> <a name="PutSpans" id="@cdk_utils/iam.xray.XrayActions.property.PutSpans"></a>

```typescript
public readonly PutSpans: string;
```

- *Type:* string

[Write] xray:PutSpans.

---

##### `PutSpansForIndexing`<sup>Required</sup> <a name="PutSpansForIndexing" id="@cdk_utils/iam.xray.XrayActions.property.PutSpansForIndexing"></a>

```typescript
public readonly PutSpansForIndexing: string;
```

- *Type:* string

[Write] xray:PutSpansForIndexing.

---

##### `PutTelemetryRecords`<sup>Required</sup> <a name="PutTelemetryRecords" id="@cdk_utils/iam.xray.XrayActions.property.PutTelemetryRecords"></a>

```typescript
public readonly PutTelemetryRecords: string;
```

- *Type:* string

[Write] xray:PutTelemetryRecords.

---

##### `PutTraceSegments`<sup>Required</sup> <a name="PutTraceSegments" id="@cdk_utils/iam.xray.XrayActions.property.PutTraceSegments"></a>

```typescript
public readonly PutTraceSegments: string;
```

- *Type:* string

[Write] xray:PutTraceSegments.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.xray.XrayActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTraceRetrieval`<sup>Required</sup> <a name="StartTraceRetrieval" id="@cdk_utils/iam.xray.XrayActions.property.StartTraceRetrieval"></a>

```typescript
public readonly StartTraceRetrieval: string;
```

- *Type:* string

[Read] xray:StartTraceRetrieval.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.xray.XrayActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] xray:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.xray.XrayActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] xray:UntagResource.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.xray.XrayActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] xray:UpdateGroup.

---

##### `UpdateIndexingRule`<sup>Required</sup> <a name="UpdateIndexingRule" id="@cdk_utils/iam.xray.XrayActions.property.UpdateIndexingRule"></a>

```typescript
public readonly UpdateIndexingRule: string;
```

- *Type:* string

[Write] xray:UpdateIndexingRule.

---

##### `UpdateSamplingRule`<sup>Required</sup> <a name="UpdateSamplingRule" id="@cdk_utils/iam.xray.XrayActions.property.UpdateSamplingRule"></a>

```typescript
public readonly UpdateSamplingRule: string;
```

- *Type:* string

[Write] xray:UpdateSamplingRule.

---

##### `UpdateTraceSegmentDestination`<sup>Required</sup> <a name="UpdateTraceSegmentDestination" id="@cdk_utils/iam.xray.XrayActions.property.UpdateTraceSegmentDestination"></a>

```typescript
public readonly UpdateTraceSegmentDestination: string;
```

- *Type:* string

[Write] xray:UpdateTraceSegmentDestination.

---

### XrayConditions <a name="XrayConditions" id="@cdk_utils/iam.xray.XrayConditions"></a>

Condition key constants and builders for xray.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.xray.XrayConditions.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

new xray.XrayConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.resourcePolicyName">resourcePolicyName</a></code> | Generates a condition block for `xray:ResourcePolicyName`. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.traceSegmentDestination">traceSegmentDestination</a></code> | Generates a condition block for `xray:TraceSegmentDestination`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.xray.XrayConditions.requestTag"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.xray.XrayConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourcePolicyName` <a name="resourcePolicyName" id="@cdk_utils/iam.xray.XrayConditions.resourcePolicyName"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayConditions.resourcePolicyName(value: string)
```

Generates a condition block for `xray:ResourcePolicyName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.xray.XrayConditions.resourcePolicyName.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.xray.XrayConditions.resourceTag"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.xray.XrayConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.xray.XrayConditions.tagKeys"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.xray.XrayConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `traceSegmentDestination` <a name="traceSegmentDestination" id="@cdk_utils/iam.xray.XrayConditions.traceSegmentDestination"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayConditions.traceSegmentDestination(value: string)
```

Generates a condition block for `xray:TraceSegmentDestination`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.xray.XrayConditions.traceSegmentDestination.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.actionGetGroupConditionKeys">actionGetGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetGroup action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.CreateGroupConditionKeys">CreateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateGroup action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.CreateSamplingRuleConditionKeys">CreateSamplingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSamplingRule action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.DeleteGroupConditionKeys">DeleteGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteGroup action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.DeleteResourcePolicyConditionKeys">DeleteResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.DeleteSamplingRuleConditionKeys">DeleteSamplingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSamplingRule action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.LOG_GENERATING_RESOURCE_ARNS">LOG_GENERATING_RESOURCE_ARNS</a></code> | <code>string</code> | Condition key: logs:LogGeneratingResourceArns (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.PutResourcePolicyConditionKeys">PutResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.PutSpansConditionKeys">PutSpansConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSpans action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.PutTraceSegmentsConditionKeys">PutTraceSegmentsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutTraceSegments action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.RESOURCE_POLICY_NAME">RESOURCE_POLICY_NAME</a></code> | <code>string</code> | Condition key: xray:ResourcePolicyName (String). |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.TRACE_SEGMENT_DESTINATION">TRACE_SEGMENT_DESTINATION</a></code> | <code>string</code> | Condition key: xray:TraceSegmentDestination (String). |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.UpdateGroupConditionKeys">UpdateGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateGroup action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.UpdateSamplingRuleConditionKeys">UpdateSamplingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSamplingRule action. |
| <code><a href="#@cdk_utils/iam.xray.XrayConditions.property.UpdateTraceSegmentDestinationConditionKeys">UpdateTraceSegmentDestinationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateTraceSegmentDestination action. |

---

##### `actionGetGroupConditionKeys`<sup>Required</sup> <a name="actionGetGroupConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.actionGetGroupConditionKeys"></a>

```typescript
public readonly actionGetGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetGroup action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.xray.XrayConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.xray.XrayConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.xray.XrayConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateGroupConditionKeys`<sup>Required</sup> <a name="CreateGroupConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.CreateGroupConditionKeys"></a>

```typescript
public readonly CreateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateGroup action.

---

##### `CreateSamplingRuleConditionKeys`<sup>Required</sup> <a name="CreateSamplingRuleConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.CreateSamplingRuleConditionKeys"></a>

```typescript
public readonly CreateSamplingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSamplingRule action.

---

##### `DeleteGroupConditionKeys`<sup>Required</sup> <a name="DeleteGroupConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.DeleteGroupConditionKeys"></a>

```typescript
public readonly DeleteGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteGroup action.

---

##### `DeleteResourcePolicyConditionKeys`<sup>Required</sup> <a name="DeleteResourcePolicyConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.DeleteResourcePolicyConditionKeys"></a>

```typescript
public readonly DeleteResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourcePolicy action.

---

##### `DeleteSamplingRuleConditionKeys`<sup>Required</sup> <a name="DeleteSamplingRuleConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.DeleteSamplingRuleConditionKeys"></a>

```typescript
public readonly DeleteSamplingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSamplingRule action.

---

##### `LOG_GENERATING_RESOURCE_ARNS`<sup>Required</sup> <a name="LOG_GENERATING_RESOURCE_ARNS" id="@cdk_utils/iam.xray.XrayConditions.property.LOG_GENERATING_RESOURCE_ARNS"></a>

```typescript
public readonly LOG_GENERATING_RESOURCE_ARNS: string;
```

- *Type:* string

Condition key: logs:LogGeneratingResourceArns (ArrayOfARN).

---

##### `PutResourcePolicyConditionKeys`<sup>Required</sup> <a name="PutResourcePolicyConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.PutResourcePolicyConditionKeys"></a>

```typescript
public readonly PutResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourcePolicy action.

---

##### `PutSpansConditionKeys`<sup>Required</sup> <a name="PutSpansConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.PutSpansConditionKeys"></a>

```typescript
public readonly PutSpansConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSpans action.

---

##### `PutTraceSegmentsConditionKeys`<sup>Required</sup> <a name="PutTraceSegmentsConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.PutTraceSegmentsConditionKeys"></a>

```typescript
public readonly PutTraceSegmentsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutTraceSegments action.

---

##### `RESOURCE_POLICY_NAME`<sup>Required</sup> <a name="RESOURCE_POLICY_NAME" id="@cdk_utils/iam.xray.XrayConditions.property.RESOURCE_POLICY_NAME"></a>

```typescript
public readonly RESOURCE_POLICY_NAME: string;
```

- *Type:* string

Condition key: xray:ResourcePolicyName (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `TRACE_SEGMENT_DESTINATION`<sup>Required</sup> <a name="TRACE_SEGMENT_DESTINATION" id="@cdk_utils/iam.xray.XrayConditions.property.TRACE_SEGMENT_DESTINATION"></a>

```typescript
public readonly TRACE_SEGMENT_DESTINATION: string;
```

- *Type:* string

Condition key: xray:TraceSegmentDestination (String).

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateGroupConditionKeys`<sup>Required</sup> <a name="UpdateGroupConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.UpdateGroupConditionKeys"></a>

```typescript
public readonly UpdateGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateGroup action.

---

##### `UpdateSamplingRuleConditionKeys`<sup>Required</sup> <a name="UpdateSamplingRuleConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.UpdateSamplingRuleConditionKeys"></a>

```typescript
public readonly UpdateSamplingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSamplingRule action.

---

##### `UpdateTraceSegmentDestinationConditionKeys`<sup>Required</sup> <a name="UpdateTraceSegmentDestinationConditionKeys" id="@cdk_utils/iam.xray.XrayConditions.property.UpdateTraceSegmentDestinationConditionKeys"></a>

```typescript
public readonly UpdateTraceSegmentDestinationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateTraceSegmentDestination action.

---

### XrayOperations <a name="XrayOperations" id="@cdk_utils/iam.xray.XrayOperations"></a>

API operation to required IAM actions mapping for xray.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.xray.XrayOperations.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

new xray.XrayOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.BatchGetTraces">BatchGetTraces</a></code> | <code>string[]</code> | IAM actions required for the BatchGetTraces API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.CancelTraceRetrieval">CancelTraceRetrieval</a></code> | <code>string[]</code> | IAM actions required for the CancelTraceRetrieval API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.CreateSamplingRule">CreateSamplingRule</a></code> | <code>string[]</code> | IAM actions required for the CreateSamplingRule API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.DeleteSamplingRule">DeleteSamplingRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSamplingRule API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.ListResourcePolicies">ListResourcePolicies</a></code> | <code>string[]</code> | IAM actions required for the ListResourcePolicies API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.ListRetrievedTraces">ListRetrievedTraces</a></code> | <code>string[]</code> | IAM actions required for the ListRetrievedTraces API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetEncryptionConfig">opGetEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the GetEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetGroups">opGetGroups</a></code> | <code>string[]</code> | IAM actions required for the GetGroups API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetIndexingRules">opGetIndexingRules</a></code> | <code>string[]</code> | IAM actions required for the GetIndexingRules API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetInsight">opGetInsight</a></code> | <code>string[]</code> | IAM actions required for the GetInsight API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetInsightEvents">opGetInsightEvents</a></code> | <code>string[]</code> | IAM actions required for the GetInsightEvents API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetInsightImpactGraph">opGetInsightImpactGraph</a></code> | <code>string[]</code> | IAM actions required for the GetInsightImpactGraph API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetInsightSummaries">opGetInsightSummaries</a></code> | <code>string[]</code> | IAM actions required for the GetInsightSummaries API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetRetrievedTracesGraph">opGetRetrievedTracesGraph</a></code> | <code>string[]</code> | IAM actions required for the GetRetrievedTracesGraph API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetSamplingRules">opGetSamplingRules</a></code> | <code>string[]</code> | IAM actions required for the GetSamplingRules API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetSamplingStatisticSummaries">opGetSamplingStatisticSummaries</a></code> | <code>string[]</code> | IAM actions required for the GetSamplingStatisticSummaries API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetSamplingTargets">opGetSamplingTargets</a></code> | <code>string[]</code> | IAM actions required for the GetSamplingTargets API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetServiceGraph">opGetServiceGraph</a></code> | <code>string[]</code> | IAM actions required for the GetServiceGraph API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetTimeSeriesServiceStatistics">opGetTimeSeriesServiceStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetTimeSeriesServiceStatistics API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetTraceGraph">opGetTraceGraph</a></code> | <code>string[]</code> | IAM actions required for the GetTraceGraph API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetTraceSegmentDestination">opGetTraceSegmentDestination</a></code> | <code>string[]</code> | IAM actions required for the GetTraceSegmentDestination API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.opGetTraceSummaries">opGetTraceSummaries</a></code> | <code>string[]</code> | IAM actions required for the GetTraceSummaries API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.PutEncryptionConfig">PutEncryptionConfig</a></code> | <code>string[]</code> | IAM actions required for the PutEncryptionConfig API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.PutTelemetryRecords">PutTelemetryRecords</a></code> | <code>string[]</code> | IAM actions required for the PutTelemetryRecords API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.PutTraceSegments">PutTraceSegments</a></code> | <code>string[]</code> | IAM actions required for the PutTraceSegments API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.StartTraceRetrieval">StartTraceRetrieval</a></code> | <code>string[]</code> | IAM actions required for the StartTraceRetrieval API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.UpdateIndexingRule">UpdateIndexingRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateIndexingRule API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.UpdateSamplingRule">UpdateSamplingRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateSamplingRule API call. |
| <code><a href="#@cdk_utils/iam.xray.XrayOperations.property.UpdateTraceSegmentDestination">UpdateTraceSegmentDestination</a></code> | <code>string[]</code> | IAM actions required for the UpdateTraceSegmentDestination API call. |

---

##### `BatchGetTraces`<sup>Required</sup> <a name="BatchGetTraces" id="@cdk_utils/iam.xray.XrayOperations.property.BatchGetTraces"></a>

```typescript
public readonly BatchGetTraces: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetTraces API call.

---

##### `CancelTraceRetrieval`<sup>Required</sup> <a name="CancelTraceRetrieval" id="@cdk_utils/iam.xray.XrayOperations.property.CancelTraceRetrieval"></a>

```typescript
public readonly CancelTraceRetrieval: string[];
```

- *Type:* string[]

IAM actions required for the CancelTraceRetrieval API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.xray.XrayOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateSamplingRule`<sup>Required</sup> <a name="CreateSamplingRule" id="@cdk_utils/iam.xray.XrayOperations.property.CreateSamplingRule"></a>

```typescript
public readonly CreateSamplingRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateSamplingRule API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.xray.XrayOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.xray.XrayOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteSamplingRule`<sup>Required</sup> <a name="DeleteSamplingRule" id="@cdk_utils/iam.xray.XrayOperations.property.DeleteSamplingRule"></a>

```typescript
public readonly DeleteSamplingRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSamplingRule API call.

---

##### `ListResourcePolicies`<sup>Required</sup> <a name="ListResourcePolicies" id="@cdk_utils/iam.xray.XrayOperations.property.ListResourcePolicies"></a>

```typescript
public readonly ListResourcePolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcePolicies API call.

---

##### `ListRetrievedTraces`<sup>Required</sup> <a name="ListRetrievedTraces" id="@cdk_utils/iam.xray.XrayOperations.property.ListRetrievedTraces"></a>

```typescript
public readonly ListRetrievedTraces: string[];
```

- *Type:* string[]

IAM actions required for the ListRetrievedTraces API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.xray.XrayOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEncryptionConfig`<sup>Required</sup> <a name="opGetEncryptionConfig" id="@cdk_utils/iam.xray.XrayOperations.property.opGetEncryptionConfig"></a>

```typescript
public readonly opGetEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetEncryptionConfig API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.xray.XrayOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `opGetGroups`<sup>Required</sup> <a name="opGetGroups" id="@cdk_utils/iam.xray.XrayOperations.property.opGetGroups"></a>

```typescript
public readonly opGetGroups: string[];
```

- *Type:* string[]

IAM actions required for the GetGroups API call.

---

##### `opGetIndexingRules`<sup>Required</sup> <a name="opGetIndexingRules" id="@cdk_utils/iam.xray.XrayOperations.property.opGetIndexingRules"></a>

```typescript
public readonly opGetIndexingRules: string[];
```

- *Type:* string[]

IAM actions required for the GetIndexingRules API call.

---

##### `opGetInsight`<sup>Required</sup> <a name="opGetInsight" id="@cdk_utils/iam.xray.XrayOperations.property.opGetInsight"></a>

```typescript
public readonly opGetInsight: string[];
```

- *Type:* string[]

IAM actions required for the GetInsight API call.

---

##### `opGetInsightEvents`<sup>Required</sup> <a name="opGetInsightEvents" id="@cdk_utils/iam.xray.XrayOperations.property.opGetInsightEvents"></a>

```typescript
public readonly opGetInsightEvents: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightEvents API call.

---

##### `opGetInsightImpactGraph`<sup>Required</sup> <a name="opGetInsightImpactGraph" id="@cdk_utils/iam.xray.XrayOperations.property.opGetInsightImpactGraph"></a>

```typescript
public readonly opGetInsightImpactGraph: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightImpactGraph API call.

---

##### `opGetInsightSummaries`<sup>Required</sup> <a name="opGetInsightSummaries" id="@cdk_utils/iam.xray.XrayOperations.property.opGetInsightSummaries"></a>

```typescript
public readonly opGetInsightSummaries: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightSummaries API call.

---

##### `opGetRetrievedTracesGraph`<sup>Required</sup> <a name="opGetRetrievedTracesGraph" id="@cdk_utils/iam.xray.XrayOperations.property.opGetRetrievedTracesGraph"></a>

```typescript
public readonly opGetRetrievedTracesGraph: string[];
```

- *Type:* string[]

IAM actions required for the GetRetrievedTracesGraph API call.

---

##### `opGetSamplingRules`<sup>Required</sup> <a name="opGetSamplingRules" id="@cdk_utils/iam.xray.XrayOperations.property.opGetSamplingRules"></a>

```typescript
public readonly opGetSamplingRules: string[];
```

- *Type:* string[]

IAM actions required for the GetSamplingRules API call.

---

##### `opGetSamplingStatisticSummaries`<sup>Required</sup> <a name="opGetSamplingStatisticSummaries" id="@cdk_utils/iam.xray.XrayOperations.property.opGetSamplingStatisticSummaries"></a>

```typescript
public readonly opGetSamplingStatisticSummaries: string[];
```

- *Type:* string[]

IAM actions required for the GetSamplingStatisticSummaries API call.

---

##### `opGetSamplingTargets`<sup>Required</sup> <a name="opGetSamplingTargets" id="@cdk_utils/iam.xray.XrayOperations.property.opGetSamplingTargets"></a>

```typescript
public readonly opGetSamplingTargets: string[];
```

- *Type:* string[]

IAM actions required for the GetSamplingTargets API call.

---

##### `opGetServiceGraph`<sup>Required</sup> <a name="opGetServiceGraph" id="@cdk_utils/iam.xray.XrayOperations.property.opGetServiceGraph"></a>

```typescript
public readonly opGetServiceGraph: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceGraph API call.

---

##### `opGetTimeSeriesServiceStatistics`<sup>Required</sup> <a name="opGetTimeSeriesServiceStatistics" id="@cdk_utils/iam.xray.XrayOperations.property.opGetTimeSeriesServiceStatistics"></a>

```typescript
public readonly opGetTimeSeriesServiceStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetTimeSeriesServiceStatistics API call.

---

##### `opGetTraceGraph`<sup>Required</sup> <a name="opGetTraceGraph" id="@cdk_utils/iam.xray.XrayOperations.property.opGetTraceGraph"></a>

```typescript
public readonly opGetTraceGraph: string[];
```

- *Type:* string[]

IAM actions required for the GetTraceGraph API call.

---

##### `opGetTraceSegmentDestination`<sup>Required</sup> <a name="opGetTraceSegmentDestination" id="@cdk_utils/iam.xray.XrayOperations.property.opGetTraceSegmentDestination"></a>

```typescript
public readonly opGetTraceSegmentDestination: string[];
```

- *Type:* string[]

IAM actions required for the GetTraceSegmentDestination API call.

---

##### `opGetTraceSummaries`<sup>Required</sup> <a name="opGetTraceSummaries" id="@cdk_utils/iam.xray.XrayOperations.property.opGetTraceSummaries"></a>

```typescript
public readonly opGetTraceSummaries: string[];
```

- *Type:* string[]

IAM actions required for the GetTraceSummaries API call.

---

##### `PutEncryptionConfig`<sup>Required</sup> <a name="PutEncryptionConfig" id="@cdk_utils/iam.xray.XrayOperations.property.PutEncryptionConfig"></a>

```typescript
public readonly PutEncryptionConfig: string[];
```

- *Type:* string[]

IAM actions required for the PutEncryptionConfig API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.xray.XrayOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutTelemetryRecords`<sup>Required</sup> <a name="PutTelemetryRecords" id="@cdk_utils/iam.xray.XrayOperations.property.PutTelemetryRecords"></a>

```typescript
public readonly PutTelemetryRecords: string[];
```

- *Type:* string[]

IAM actions required for the PutTelemetryRecords API call.

---

##### `PutTraceSegments`<sup>Required</sup> <a name="PutTraceSegments" id="@cdk_utils/iam.xray.XrayOperations.property.PutTraceSegments"></a>

```typescript
public readonly PutTraceSegments: string[];
```

- *Type:* string[]

IAM actions required for the PutTraceSegments API call.

---

##### `StartTraceRetrieval`<sup>Required</sup> <a name="StartTraceRetrieval" id="@cdk_utils/iam.xray.XrayOperations.property.StartTraceRetrieval"></a>

```typescript
public readonly StartTraceRetrieval: string[];
```

- *Type:* string[]

IAM actions required for the StartTraceRetrieval API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.xray.XrayOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.xray.XrayOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.xray.XrayOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateIndexingRule`<sup>Required</sup> <a name="UpdateIndexingRule" id="@cdk_utils/iam.xray.XrayOperations.property.UpdateIndexingRule"></a>

```typescript
public readonly UpdateIndexingRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIndexingRule API call.

---

##### `UpdateSamplingRule`<sup>Required</sup> <a name="UpdateSamplingRule" id="@cdk_utils/iam.xray.XrayOperations.property.UpdateSamplingRule"></a>

```typescript
public readonly UpdateSamplingRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSamplingRule API call.

---

##### `UpdateTraceSegmentDestination`<sup>Required</sup> <a name="UpdateTraceSegmentDestination" id="@cdk_utils/iam.xray.XrayOperations.property.UpdateTraceSegmentDestination"></a>

```typescript
public readonly UpdateTraceSegmentDestination: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTraceSegmentDestination API call.

---

### XrayResources <a name="XrayResources" id="@cdk_utils/iam.xray.XrayResources"></a>

ARN builders, validators, and parsers for xray resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.xray.XrayResources.Initializer"></a>

```typescript
import { xray } from '@cdk_utils/iam'

new xray.XrayResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.xray.XrayResources.group">group</a></code> | Builds an ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.xray.XrayResources.isValidGroupArn">isValidGroupArn</a></code> | Validates whether a string is a valid ARN for the group resource. |
| <code><a href="#@cdk_utils/iam.xray.XrayResources.isValidSamplingRuleArn">isValidSamplingRuleArn</a></code> | Validates whether a string is a valid ARN for the sampling-rule resource. |
| <code><a href="#@cdk_utils/iam.xray.XrayResources.parseGroupArn">parseGroupArn</a></code> | Parses a group ARN into its components. |
| <code><a href="#@cdk_utils/iam.xray.XrayResources.parseSamplingRuleArn">parseSamplingRuleArn</a></code> | Parses a sampling-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.xray.XrayResources.samplingRule">samplingRule</a></code> | Builds an ARN for the sampling-rule resource. |

---

##### `group` <a name="group" id="@cdk_utils/iam.xray.XrayResources.group"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayResources.group(props: XrayGroupArnProps)
```

Builds an ARN for the group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.xray.XrayResources.group.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.xray.XrayGroupArnProps">XrayGroupArnProps</a>

---

##### `isValidGroupArn` <a name="isValidGroupArn" id="@cdk_utils/iam.xray.XrayResources.isValidGroupArn"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayResources.isValidGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.xray.XrayResources.isValidGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSamplingRuleArn` <a name="isValidSamplingRuleArn" id="@cdk_utils/iam.xray.XrayResources.isValidSamplingRuleArn"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayResources.isValidSamplingRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the sampling-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.xray.XrayResources.isValidSamplingRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseGroupArn` <a name="parseGroupArn" id="@cdk_utils/iam.xray.XrayResources.parseGroupArn"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayResources.parseGroupArn(arn: string)
```

Parses a group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.xray.XrayResources.parseGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSamplingRuleArn` <a name="parseSamplingRuleArn" id="@cdk_utils/iam.xray.XrayResources.parseSamplingRuleArn"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayResources.parseSamplingRuleArn(arn: string)
```

Parses a sampling-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.xray.XrayResources.parseSamplingRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `samplingRule` <a name="samplingRule" id="@cdk_utils/iam.xray.XrayResources.samplingRule"></a>

```typescript
import { xray } from '@cdk_utils/iam'

xray.XrayResources.samplingRule(props: XraySamplingRuleArnProps)
```

Builds an ARN for the sampling-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.xray.XrayResources.samplingRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.xray.XraySamplingRuleArnProps">XraySamplingRuleArnProps</a>

---




