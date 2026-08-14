# `pi` Submodule <a name="`pi` Submodule" id="@cdk_utils/iam.pi"></a>


## Structs <a name="Structs" id="Structs"></a>

### PiMetricResourceArnComponents <a name="PiMetricResourceArnComponents" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents"></a>

Parsed components of a metric-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

const piMetricResourceArnComponents: pi.PiMetricResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.serviceType">serviceType</a></code> | <code>string</code> | The ServiceType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdk_utils/iam.pi.PiMetricResourceArnComponents.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

The ServiceType component.

---

### PiMetricResourceArnProps <a name="PiMetricResourceArnProps" id="@cdk_utils/iam.pi.PiMetricResourceArnProps"></a>

Properties for building a metric-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pi.PiMetricResourceArnProps.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

const piMetricResourceArnProps: pi.PiMetricResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnProps.property.serviceType">serviceType</a></code> | <code>string</code> | The ServiceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pi.PiMetricResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.pi.PiMetricResourceArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdk_utils/iam.pi.PiMetricResourceArnProps.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

The ServiceType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pi.PiMetricResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pi.PiMetricResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pi.PiMetricResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### PiPerfReportsResourceArnComponents <a name="PiPerfReportsResourceArnComponents" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents"></a>

Parsed components of a perf-reports-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

const piPerfReportsResourceArnComponents: pi.PiPerfReportsResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.serviceType">serviceType</a></code> | <code>string</code> | The ServiceType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnComponents.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

The ServiceType component.

---

### PiPerfReportsResourceArnProps <a name="PiPerfReportsResourceArnProps" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps"></a>

Properties for building a perf-reports-resource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

const piPerfReportsResourceArnProps: pi.PiPerfReportsResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component of the ARN. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.serviceType">serviceType</a></code> | <code>string</code> | The ServiceType component of the ARN. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component of the ARN.

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

The ServiceType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.pi.PiPerfReportsResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### PiActions <a name="PiActions" id="@cdk_utils/iam.pi.PiActions"></a>

IAM action constants for the pi service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pi.PiActions.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

new pi.PiActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.actionGetDimensionKeyDetails">actionGetDimensionKeyDetails</a></code> | <code>string</code> | [Read] pi:GetDimensionKeyDetails. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.actionGetPerformanceAnalysisReport">actionGetPerformanceAnalysisReport</a></code> | <code>string</code> | [Read] pi:GetPerformanceAnalysisReport. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.actionGetResourceMetadata">actionGetResourceMetadata</a></code> | <code>string</code> | [Read] pi:GetResourceMetadata. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.actionGetResourceMetrics">actionGetResourceMetrics</a></code> | <code>string</code> | [Read] pi:GetResourceMetrics. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.CreatePerformanceAnalysisReport">CreatePerformanceAnalysisReport</a></code> | <code>string</code> | [Write] pi:CreatePerformanceAnalysisReport. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.DeletePerformanceAnalysisReport">DeletePerformanceAnalysisReport</a></code> | <code>string</code> | [Write] pi:DeletePerformanceAnalysisReport. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.DescribeDimensionKeys">DescribeDimensionKeys</a></code> | <code>string</code> | [Read] pi:DescribeDimensionKeys. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.ListAvailableResourceDimensions">ListAvailableResourceDimensions</a></code> | <code>string</code> | [Read] pi:ListAvailableResourceDimensions. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.ListAvailableResourceMetrics">ListAvailableResourceMetrics</a></code> | <code>string</code> | [Read] pi:ListAvailableResourceMetrics. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.ListPerformanceAnalysisReportRecommendations">ListPerformanceAnalysisReportRecommendations</a></code> | <code>string</code> | [List] pi:ListPerformanceAnalysisReportRecommendations. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.ListPerformanceAnalysisReports">ListPerformanceAnalysisReports</a></code> | <code>string</code> | [List] pi:ListPerformanceAnalysisReports. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] pi:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] pi:TagResource. |
| <code><a href="#@cdk_utils/iam.pi.PiActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] pi:UntagResource. |

---

##### `actionGetDimensionKeyDetails`<sup>Required</sup> <a name="actionGetDimensionKeyDetails" id="@cdk_utils/iam.pi.PiActions.property.actionGetDimensionKeyDetails"></a>

```typescript
public readonly actionGetDimensionKeyDetails: string;
```

- *Type:* string

[Read] pi:GetDimensionKeyDetails.

---

##### `actionGetPerformanceAnalysisReport`<sup>Required</sup> <a name="actionGetPerformanceAnalysisReport" id="@cdk_utils/iam.pi.PiActions.property.actionGetPerformanceAnalysisReport"></a>

```typescript
public readonly actionGetPerformanceAnalysisReport: string;
```

- *Type:* string

[Read] pi:GetPerformanceAnalysisReport.

---

##### `actionGetResourceMetadata`<sup>Required</sup> <a name="actionGetResourceMetadata" id="@cdk_utils/iam.pi.PiActions.property.actionGetResourceMetadata"></a>

```typescript
public readonly actionGetResourceMetadata: string;
```

- *Type:* string

[Read] pi:GetResourceMetadata.

---

##### `actionGetResourceMetrics`<sup>Required</sup> <a name="actionGetResourceMetrics" id="@cdk_utils/iam.pi.PiActions.property.actionGetResourceMetrics"></a>

```typescript
public readonly actionGetResourceMetrics: string;
```

- *Type:* string

[Read] pi:GetResourceMetrics.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.pi.PiActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.pi.PiActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.pi.PiActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.pi.PiActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.pi.PiActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreatePerformanceAnalysisReport`<sup>Required</sup> <a name="CreatePerformanceAnalysisReport" id="@cdk_utils/iam.pi.PiActions.property.CreatePerformanceAnalysisReport"></a>

```typescript
public readonly CreatePerformanceAnalysisReport: string;
```

- *Type:* string

[Write] pi:CreatePerformanceAnalysisReport.

---

##### `DeletePerformanceAnalysisReport`<sup>Required</sup> <a name="DeletePerformanceAnalysisReport" id="@cdk_utils/iam.pi.PiActions.property.DeletePerformanceAnalysisReport"></a>

```typescript
public readonly DeletePerformanceAnalysisReport: string;
```

- *Type:* string

[Write] pi:DeletePerformanceAnalysisReport.

---

##### `DescribeDimensionKeys`<sup>Required</sup> <a name="DescribeDimensionKeys" id="@cdk_utils/iam.pi.PiActions.property.DescribeDimensionKeys"></a>

```typescript
public readonly DescribeDimensionKeys: string;
```

- *Type:* string

[Read] pi:DescribeDimensionKeys.

---

##### `ListAvailableResourceDimensions`<sup>Required</sup> <a name="ListAvailableResourceDimensions" id="@cdk_utils/iam.pi.PiActions.property.ListAvailableResourceDimensions"></a>

```typescript
public readonly ListAvailableResourceDimensions: string;
```

- *Type:* string

[Read] pi:ListAvailableResourceDimensions.

---

##### `ListAvailableResourceMetrics`<sup>Required</sup> <a name="ListAvailableResourceMetrics" id="@cdk_utils/iam.pi.PiActions.property.ListAvailableResourceMetrics"></a>

```typescript
public readonly ListAvailableResourceMetrics: string;
```

- *Type:* string

[Read] pi:ListAvailableResourceMetrics.

---

##### `ListPerformanceAnalysisReportRecommendations`<sup>Required</sup> <a name="ListPerformanceAnalysisReportRecommendations" id="@cdk_utils/iam.pi.PiActions.property.ListPerformanceAnalysisReportRecommendations"></a>

```typescript
public readonly ListPerformanceAnalysisReportRecommendations: string;
```

- *Type:* string

[List] pi:ListPerformanceAnalysisReportRecommendations.

---

##### `ListPerformanceAnalysisReports`<sup>Required</sup> <a name="ListPerformanceAnalysisReports" id="@cdk_utils/iam.pi.PiActions.property.ListPerformanceAnalysisReports"></a>

```typescript
public readonly ListPerformanceAnalysisReports: string;
```

- *Type:* string

[List] pi:ListPerformanceAnalysisReports.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pi.PiActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] pi:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.pi.PiActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pi.PiActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] pi:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pi.PiActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] pi:UntagResource.

---

### PiConditions <a name="PiConditions" id="@cdk_utils/iam.pi.PiConditions"></a>

Condition key constants and builders for pi.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pi.PiConditions.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

new pi.PiConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.dimensions">dimensions</a></code> | Generates a condition block for `pi:Dimensions`. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `dimensions` <a name="dimensions" id="@cdk_utils/iam.pi.PiConditions.dimensions"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiConditions.dimensions(values: string[])
```

Generates a condition block for `pi:Dimensions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.pi.PiConditions.dimensions.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.pi.PiConditions.requestTag"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pi.PiConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.pi.PiConditions.resourceTag"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.pi.PiConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.pi.PiConditions.tagKeys"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.pi.PiConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.actionGetDimensionKeyDetailsConditionKeys">actionGetDimensionKeyDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDimensionKeyDetails action. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.actionGetResourceMetricsConditionKeys">actionGetResourceMetricsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourceMetrics action. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.CreatePerformanceAnalysisReportConditionKeys">CreatePerformanceAnalysisReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePerformanceAnalysisReport action. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.DescribeDimensionKeysConditionKeys">DescribeDimensionKeysConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeDimensionKeys action. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.DIMENSIONS">DIMENSIONS</a></code> | <code>string</code> | Condition key: pi:Dimensions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.pi.PiConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetDimensionKeyDetailsConditionKeys`<sup>Required</sup> <a name="actionGetDimensionKeyDetailsConditionKeys" id="@cdk_utils/iam.pi.PiConditions.property.actionGetDimensionKeyDetailsConditionKeys"></a>

```typescript
public readonly actionGetDimensionKeyDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDimensionKeyDetails action.

---

##### `actionGetResourceMetricsConditionKeys`<sup>Required</sup> <a name="actionGetResourceMetricsConditionKeys" id="@cdk_utils/iam.pi.PiConditions.property.actionGetResourceMetricsConditionKeys"></a>

```typescript
public readonly actionGetResourceMetricsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourceMetrics action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.pi.PiConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.pi.PiConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.pi.PiConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePerformanceAnalysisReportConditionKeys`<sup>Required</sup> <a name="CreatePerformanceAnalysisReportConditionKeys" id="@cdk_utils/iam.pi.PiConditions.property.CreatePerformanceAnalysisReportConditionKeys"></a>

```typescript
public readonly CreatePerformanceAnalysisReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePerformanceAnalysisReport action.

---

##### `DescribeDimensionKeysConditionKeys`<sup>Required</sup> <a name="DescribeDimensionKeysConditionKeys" id="@cdk_utils/iam.pi.PiConditions.property.DescribeDimensionKeysConditionKeys"></a>

```typescript
public readonly DescribeDimensionKeysConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeDimensionKeys action.

---

##### `DIMENSIONS`<sup>Required</sup> <a name="DIMENSIONS" id="@cdk_utils/iam.pi.PiConditions.property.DIMENSIONS"></a>

```typescript
public readonly DIMENSIONS: string;
```

- *Type:* string

Condition key: pi:Dimensions (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.pi.PiConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.pi.PiConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PiOperations <a name="PiOperations" id="@cdk_utils/iam.pi.PiOperations"></a>

API operation to required IAM actions mapping for pi.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pi.PiOperations.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

new pi.PiOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.CreatePerformanceAnalysisReport">CreatePerformanceAnalysisReport</a></code> | <code>string[]</code> | IAM actions required for the CreatePerformanceAnalysisReport API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.DeletePerformanceAnalysisReport">DeletePerformanceAnalysisReport</a></code> | <code>string[]</code> | IAM actions required for the DeletePerformanceAnalysisReport API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.DescribeDimensionKeys">DescribeDimensionKeys</a></code> | <code>string[]</code> | IAM actions required for the DescribeDimensionKeys API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.ListAvailableResourceDimensions">ListAvailableResourceDimensions</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableResourceDimensions API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.ListAvailableResourceMetrics">ListAvailableResourceMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListAvailableResourceMetrics API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.ListPerformanceAnalysisReportRecommendations">ListPerformanceAnalysisReportRecommendations</a></code> | <code>string[]</code> | IAM actions required for the ListPerformanceAnalysisReportRecommendations API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.ListPerformanceAnalysisReports">ListPerformanceAnalysisReports</a></code> | <code>string[]</code> | IAM actions required for the ListPerformanceAnalysisReports API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.opGetDimensionKeyDetails">opGetDimensionKeyDetails</a></code> | <code>string[]</code> | IAM actions required for the GetDimensionKeyDetails API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.opGetPerformanceAnalysisReport">opGetPerformanceAnalysisReport</a></code> | <code>string[]</code> | IAM actions required for the GetPerformanceAnalysisReport API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.opGetResourceMetadata">opGetResourceMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetResourceMetadata API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.opGetResourceMetrics">opGetResourceMetrics</a></code> | <code>string[]</code> | IAM actions required for the GetResourceMetrics API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.pi.PiOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreatePerformanceAnalysisReport`<sup>Required</sup> <a name="CreatePerformanceAnalysisReport" id="@cdk_utils/iam.pi.PiOperations.property.CreatePerformanceAnalysisReport"></a>

```typescript
public readonly CreatePerformanceAnalysisReport: string[];
```

- *Type:* string[]

IAM actions required for the CreatePerformanceAnalysisReport API call.

---

##### `DeletePerformanceAnalysisReport`<sup>Required</sup> <a name="DeletePerformanceAnalysisReport" id="@cdk_utils/iam.pi.PiOperations.property.DeletePerformanceAnalysisReport"></a>

```typescript
public readonly DeletePerformanceAnalysisReport: string[];
```

- *Type:* string[]

IAM actions required for the DeletePerformanceAnalysisReport API call.

---

##### `DescribeDimensionKeys`<sup>Required</sup> <a name="DescribeDimensionKeys" id="@cdk_utils/iam.pi.PiOperations.property.DescribeDimensionKeys"></a>

```typescript
public readonly DescribeDimensionKeys: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDimensionKeys API call.

---

##### `ListAvailableResourceDimensions`<sup>Required</sup> <a name="ListAvailableResourceDimensions" id="@cdk_utils/iam.pi.PiOperations.property.ListAvailableResourceDimensions"></a>

```typescript
public readonly ListAvailableResourceDimensions: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableResourceDimensions API call.

---

##### `ListAvailableResourceMetrics`<sup>Required</sup> <a name="ListAvailableResourceMetrics" id="@cdk_utils/iam.pi.PiOperations.property.ListAvailableResourceMetrics"></a>

```typescript
public readonly ListAvailableResourceMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListAvailableResourceMetrics API call.

---

##### `ListPerformanceAnalysisReportRecommendations`<sup>Required</sup> <a name="ListPerformanceAnalysisReportRecommendations" id="@cdk_utils/iam.pi.PiOperations.property.ListPerformanceAnalysisReportRecommendations"></a>

```typescript
public readonly ListPerformanceAnalysisReportRecommendations: string[];
```

- *Type:* string[]

IAM actions required for the ListPerformanceAnalysisReportRecommendations API call.

---

##### `ListPerformanceAnalysisReports`<sup>Required</sup> <a name="ListPerformanceAnalysisReports" id="@cdk_utils/iam.pi.PiOperations.property.ListPerformanceAnalysisReports"></a>

```typescript
public readonly ListPerformanceAnalysisReports: string[];
```

- *Type:* string[]

IAM actions required for the ListPerformanceAnalysisReports API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.pi.PiOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDimensionKeyDetails`<sup>Required</sup> <a name="opGetDimensionKeyDetails" id="@cdk_utils/iam.pi.PiOperations.property.opGetDimensionKeyDetails"></a>

```typescript
public readonly opGetDimensionKeyDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetDimensionKeyDetails API call.

---

##### `opGetPerformanceAnalysisReport`<sup>Required</sup> <a name="opGetPerformanceAnalysisReport" id="@cdk_utils/iam.pi.PiOperations.property.opGetPerformanceAnalysisReport"></a>

```typescript
public readonly opGetPerformanceAnalysisReport: string[];
```

- *Type:* string[]

IAM actions required for the GetPerformanceAnalysisReport API call.

---

##### `opGetResourceMetadata`<sup>Required</sup> <a name="opGetResourceMetadata" id="@cdk_utils/iam.pi.PiOperations.property.opGetResourceMetadata"></a>

```typescript
public readonly opGetResourceMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceMetadata API call.

---

##### `opGetResourceMetrics`<sup>Required</sup> <a name="opGetResourceMetrics" id="@cdk_utils/iam.pi.PiOperations.property.opGetResourceMetrics"></a>

```typescript
public readonly opGetResourceMetrics: string[];
```

- *Type:* string[]

IAM actions required for the GetResourceMetrics API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.pi.PiOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.pi.PiOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### PiResources <a name="PiResources" id="@cdk_utils/iam.pi.PiResources"></a>

ARN builders, validators, and parsers for pi resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.pi.PiResources.Initializer"></a>

```typescript
import { pi } from '@cdk_utils/iam'

new pi.PiResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.pi.PiResources.isValidMetricResourceArn">isValidMetricResourceArn</a></code> | Validates whether a string is a valid ARN for the metric-resource resource. |
| <code><a href="#@cdk_utils/iam.pi.PiResources.isValidPerfReportsResourceArn">isValidPerfReportsResourceArn</a></code> | Validates whether a string is a valid ARN for the perf-reports-resource resource. |
| <code><a href="#@cdk_utils/iam.pi.PiResources.metricResource">metricResource</a></code> | Builds an ARN for the metric-resource resource. |
| <code><a href="#@cdk_utils/iam.pi.PiResources.parseMetricResourceArn">parseMetricResourceArn</a></code> | Parses a metric-resource ARN into its components. |
| <code><a href="#@cdk_utils/iam.pi.PiResources.parsePerfReportsResourceArn">parsePerfReportsResourceArn</a></code> | Parses a perf-reports-resource ARN into its components. |
| <code><a href="#@cdk_utils/iam.pi.PiResources.perfReportsResource">perfReportsResource</a></code> | Builds an ARN for the perf-reports-resource resource. |

---

##### `isValidMetricResourceArn` <a name="isValidMetricResourceArn" id="@cdk_utils/iam.pi.PiResources.isValidMetricResourceArn"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiResources.isValidMetricResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the metric-resource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pi.PiResources.isValidMetricResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPerfReportsResourceArn` <a name="isValidPerfReportsResourceArn" id="@cdk_utils/iam.pi.PiResources.isValidPerfReportsResourceArn"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiResources.isValidPerfReportsResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the perf-reports-resource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pi.PiResources.isValidPerfReportsResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `metricResource` <a name="metricResource" id="@cdk_utils/iam.pi.PiResources.metricResource"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiResources.metricResource(props: PiMetricResourceArnProps)
```

Builds an ARN for the metric-resource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pi.PiResources.metricResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pi.PiMetricResourceArnProps">PiMetricResourceArnProps</a>

---

##### `parseMetricResourceArn` <a name="parseMetricResourceArn" id="@cdk_utils/iam.pi.PiResources.parseMetricResourceArn"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiResources.parseMetricResourceArn(arn: string)
```

Parses a metric-resource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pi.PiResources.parseMetricResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePerfReportsResourceArn` <a name="parsePerfReportsResourceArn" id="@cdk_utils/iam.pi.PiResources.parsePerfReportsResourceArn"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiResources.parsePerfReportsResourceArn(arn: string)
```

Parses a perf-reports-resource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.pi.PiResources.parsePerfReportsResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `perfReportsResource` <a name="perfReportsResource" id="@cdk_utils/iam.pi.PiResources.perfReportsResource"></a>

```typescript
import { pi } from '@cdk_utils/iam'

pi.PiResources.perfReportsResource(props: PiPerfReportsResourceArnProps)
```

Builds an ARN for the perf-reports-resource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.pi.PiResources.perfReportsResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.pi.PiPerfReportsResourceArnProps">PiPerfReportsResourceArnProps</a>

---




