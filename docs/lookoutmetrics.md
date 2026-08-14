# `lookoutmetrics` Submodule <a name="`lookoutmetrics` Submodule" id="@cdk_utils/iam.lookoutmetrics"></a>


## Structs <a name="Structs" id="Structs"></a>

### LookoutMetricsAlertArnComponents <a name="LookoutMetricsAlertArnComponents" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents"></a>

Parsed components of a Alert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

const lookoutMetricsAlertArnComponents: lookoutmetrics.LookoutMetricsAlertArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.alertName">alertName</a></code> | <code>string</code> | The AlertName component. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alertName`<sup>Required</sup> <a name="alertName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

The AlertName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutMetricsAlertArnProps <a name="LookoutMetricsAlertArnProps" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps"></a>

Properties for building a Alert ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

const lookoutMetricsAlertArnProps: lookoutmetrics.LookoutMetricsAlertArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.alertName">alertName</a></code> | <code>string</code> | The AlertName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alertName`<sup>Required</sup> <a name="alertName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.alertName"></a>

```typescript
public readonly alertName: string;
```

- *Type:* string

The AlertName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutMetricsAnomalyDetectorArnComponents <a name="LookoutMetricsAnomalyDetectorArnComponents" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents"></a>

Parsed components of a AnomalyDetector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

const lookoutMetricsAnomalyDetectorArnComponents: lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | The AnomalyDetectorName component. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `anomalyDetectorName`<sup>Required</sup> <a name="anomalyDetectorName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

The AnomalyDetectorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutMetricsAnomalyDetectorArnProps <a name="LookoutMetricsAnomalyDetectorArnProps" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps"></a>

Properties for building a AnomalyDetector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

const lookoutMetricsAnomalyDetectorArnProps: lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | The AnomalyDetectorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `anomalyDetectorName`<sup>Required</sup> <a name="anomalyDetectorName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

The AnomalyDetectorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### LookoutMetricsMetricSetArnComponents <a name="LookoutMetricsMetricSetArnComponents" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents"></a>

Parsed components of a MetricSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

const lookoutMetricsMetricSetArnComponents: lookoutmetrics.LookoutMetricsMetricSetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | The AnomalyDetectorName component. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.metricSetName">metricSetName</a></code> | <code>string</code> | The MetricSetName component. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `anomalyDetectorName`<sup>Required</sup> <a name="anomalyDetectorName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

The AnomalyDetectorName component.

---

##### `metricSetName`<sup>Required</sup> <a name="metricSetName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.metricSetName"></a>

```typescript
public readonly metricSetName: string;
```

- *Type:* string

The MetricSetName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### LookoutMetricsMetricSetArnProps <a name="LookoutMetricsMetricSetArnProps" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps"></a>

Properties for building a MetricSet ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

const lookoutMetricsMetricSetArnProps: lookoutmetrics.LookoutMetricsMetricSetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.anomalyDetectorName">anomalyDetectorName</a></code> | <code>string</code> | The AnomalyDetectorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.metricSetName">metricSetName</a></code> | <code>string</code> | The MetricSetName component of the ARN. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `anomalyDetectorName`<sup>Required</sup> <a name="anomalyDetectorName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.anomalyDetectorName"></a>

```typescript
public readonly anomalyDetectorName: string;
```

- *Type:* string

The AnomalyDetectorName component of the ARN.

---

##### `metricSetName`<sup>Required</sup> <a name="metricSetName" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.metricSetName"></a>

```typescript
public readonly metricSetName: string;
```

- *Type:* string

The MetricSetName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### LookoutMetricsActions <a name="LookoutMetricsActions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions"></a>

IAM action constants for the lookoutmetrics service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

new lookoutmetrics.LookoutMetricsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetAnomalyGroup">actionGetAnomalyGroup</a></code> | <code>string</code> | [Read] lookoutmetrics:GetAnomalyGroup. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetDataQualityMetrics">actionGetDataQualityMetrics</a></code> | <code>string</code> | [Read] lookoutmetrics:GetDataQualityMetrics. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetFeedback">actionGetFeedback</a></code> | <code>string</code> | [Read] lookoutmetrics:GetFeedback. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetSampleData">actionGetSampleData</a></code> | <code>string</code> | [Read] lookoutmetrics:GetSampleData. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ActivateAnomalyDetector">ActivateAnomalyDetector</a></code> | <code>string</code> | [Write] lookoutmetrics:ActivateAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.BackTestAnomalyDetector">BackTestAnomalyDetector</a></code> | <code>string</code> | [Write] lookoutmetrics:BackTestAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.CreateAlert">CreateAlert</a></code> | <code>string</code> | [Write] lookoutmetrics:CreateAlert. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.CreateAnomalyDetector">CreateAnomalyDetector</a></code> | <code>string</code> | [Write] lookoutmetrics:CreateAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.CreateMetricSet">CreateMetricSet</a></code> | <code>string</code> | [Write] lookoutmetrics:CreateMetricSet. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DeactivateAnomalyDetector">DeactivateAnomalyDetector</a></code> | <code>string</code> | [Write] lookoutmetrics:DeactivateAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DeleteAlert">DeleteAlert</a></code> | <code>string</code> | [Write] lookoutmetrics:DeleteAlert. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string</code> | [Write] lookoutmetrics:DeleteAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeAlert">DescribeAlert</a></code> | <code>string</code> | [Read] lookoutmetrics:DescribeAlert. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeAnomalyDetectionExecutions">DescribeAnomalyDetectionExecutions</a></code> | <code>string</code> | [Read] lookoutmetrics:DescribeAnomalyDetectionExecutions. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeAnomalyDetector">DescribeAnomalyDetector</a></code> | <code>string</code> | [Read] lookoutmetrics:DescribeAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeMetricSet">DescribeMetricSet</a></code> | <code>string</code> | [Read] lookoutmetrics:DescribeMetricSet. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DetectMetricSetConfig">DetectMetricSetConfig</a></code> | <code>string</code> | [Write] lookoutmetrics:DetectMetricSetConfig. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAlerts">ListAlerts</a></code> | <code>string</code> | [List] lookoutmetrics:ListAlerts. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyDetectors">ListAnomalyDetectors</a></code> | <code>string</code> | [List] lookoutmetrics:ListAnomalyDetectors. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyGroupRelatedMetrics">ListAnomalyGroupRelatedMetrics</a></code> | <code>string</code> | [List] lookoutmetrics:ListAnomalyGroupRelatedMetrics. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyGroupSummaries">ListAnomalyGroupSummaries</a></code> | <code>string</code> | [List] lookoutmetrics:ListAnomalyGroupSummaries. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyGroupTimeSeries">ListAnomalyGroupTimeSeries</a></code> | <code>string</code> | [List] lookoutmetrics:ListAnomalyGroupTimeSeries. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListMetricSets">ListMetricSets</a></code> | <code>string</code> | [List] lookoutmetrics:ListMetricSets. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] lookoutmetrics:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.PutFeedback">PutFeedback</a></code> | <code>string</code> | [Write] lookoutmetrics:PutFeedback. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] lookoutmetrics:TagResource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] lookoutmetrics:UntagResource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UpdateAlert">UpdateAlert</a></code> | <code>string</code> | [Write] lookoutmetrics:UpdateAlert. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UpdateAnomalyDetector">UpdateAnomalyDetector</a></code> | <code>string</code> | [Write] lookoutmetrics:UpdateAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UpdateMetricSet">UpdateMetricSet</a></code> | <code>string</code> | [Write] lookoutmetrics:UpdateMetricSet. |

---

##### `actionGetAnomalyGroup`<sup>Required</sup> <a name="actionGetAnomalyGroup" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetAnomalyGroup"></a>

```typescript
public readonly actionGetAnomalyGroup: string;
```

- *Type:* string

[Read] lookoutmetrics:GetAnomalyGroup.

---

##### `actionGetDataQualityMetrics`<sup>Required</sup> <a name="actionGetDataQualityMetrics" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetDataQualityMetrics"></a>

```typescript
public readonly actionGetDataQualityMetrics: string;
```

- *Type:* string

[Read] lookoutmetrics:GetDataQualityMetrics.

---

##### `actionGetFeedback`<sup>Required</sup> <a name="actionGetFeedback" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetFeedback"></a>

```typescript
public readonly actionGetFeedback: string;
```

- *Type:* string

[Read] lookoutmetrics:GetFeedback.

---

##### `actionGetSampleData`<sup>Required</sup> <a name="actionGetSampleData" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.actionGetSampleData"></a>

```typescript
public readonly actionGetSampleData: string;
```

- *Type:* string

[Read] lookoutmetrics:GetSampleData.

---

##### `ActivateAnomalyDetector`<sup>Required</sup> <a name="ActivateAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ActivateAnomalyDetector"></a>

```typescript
public readonly ActivateAnomalyDetector: string;
```

- *Type:* string

[Write] lookoutmetrics:ActivateAnomalyDetector.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BackTestAnomalyDetector`<sup>Required</sup> <a name="BackTestAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.BackTestAnomalyDetector"></a>

```typescript
public readonly BackTestAnomalyDetector: string;
```

- *Type:* string

[Write] lookoutmetrics:BackTestAnomalyDetector.

---

##### `CreateAlert`<sup>Required</sup> <a name="CreateAlert" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.CreateAlert"></a>

```typescript
public readonly CreateAlert: string;
```

- *Type:* string

[Write] lookoutmetrics:CreateAlert.

---

##### `CreateAnomalyDetector`<sup>Required</sup> <a name="CreateAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.CreateAnomalyDetector"></a>

```typescript
public readonly CreateAnomalyDetector: string;
```

- *Type:* string

[Write] lookoutmetrics:CreateAnomalyDetector.

---

##### `CreateMetricSet`<sup>Required</sup> <a name="CreateMetricSet" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.CreateMetricSet"></a>

```typescript
public readonly CreateMetricSet: string;
```

- *Type:* string

[Write] lookoutmetrics:CreateMetricSet.

---

##### `DeactivateAnomalyDetector`<sup>Required</sup> <a name="DeactivateAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DeactivateAnomalyDetector"></a>

```typescript
public readonly DeactivateAnomalyDetector: string;
```

- *Type:* string

[Write] lookoutmetrics:DeactivateAnomalyDetector.

---

##### `DeleteAlert`<sup>Required</sup> <a name="DeleteAlert" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DeleteAlert"></a>

```typescript
public readonly DeleteAlert: string;
```

- *Type:* string

[Write] lookoutmetrics:DeleteAlert.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string;
```

- *Type:* string

[Write] lookoutmetrics:DeleteAnomalyDetector.

---

##### `DescribeAlert`<sup>Required</sup> <a name="DescribeAlert" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeAlert"></a>

```typescript
public readonly DescribeAlert: string;
```

- *Type:* string

[Read] lookoutmetrics:DescribeAlert.

---

##### `DescribeAnomalyDetectionExecutions`<sup>Required</sup> <a name="DescribeAnomalyDetectionExecutions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeAnomalyDetectionExecutions"></a>

```typescript
public readonly DescribeAnomalyDetectionExecutions: string;
```

- *Type:* string

[Read] lookoutmetrics:DescribeAnomalyDetectionExecutions.

---

##### `DescribeAnomalyDetector`<sup>Required</sup> <a name="DescribeAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeAnomalyDetector"></a>

```typescript
public readonly DescribeAnomalyDetector: string;
```

- *Type:* string

[Read] lookoutmetrics:DescribeAnomalyDetector.

---

##### `DescribeMetricSet`<sup>Required</sup> <a name="DescribeMetricSet" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DescribeMetricSet"></a>

```typescript
public readonly DescribeMetricSet: string;
```

- *Type:* string

[Read] lookoutmetrics:DescribeMetricSet.

---

##### `DetectMetricSetConfig`<sup>Required</sup> <a name="DetectMetricSetConfig" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.DetectMetricSetConfig"></a>

```typescript
public readonly DetectMetricSetConfig: string;
```

- *Type:* string

[Write] lookoutmetrics:DetectMetricSetConfig.

---

##### `ListAlerts`<sup>Required</sup> <a name="ListAlerts" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAlerts"></a>

```typescript
public readonly ListAlerts: string;
```

- *Type:* string

[List] lookoutmetrics:ListAlerts.

---

##### `ListAnomalyDetectors`<sup>Required</sup> <a name="ListAnomalyDetectors" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyDetectors"></a>

```typescript
public readonly ListAnomalyDetectors: string;
```

- *Type:* string

[List] lookoutmetrics:ListAnomalyDetectors.

---

##### `ListAnomalyGroupRelatedMetrics`<sup>Required</sup> <a name="ListAnomalyGroupRelatedMetrics" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyGroupRelatedMetrics"></a>

```typescript
public readonly ListAnomalyGroupRelatedMetrics: string;
```

- *Type:* string

[List] lookoutmetrics:ListAnomalyGroupRelatedMetrics.

---

##### `ListAnomalyGroupSummaries`<sup>Required</sup> <a name="ListAnomalyGroupSummaries" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyGroupSummaries"></a>

```typescript
public readonly ListAnomalyGroupSummaries: string;
```

- *Type:* string

[List] lookoutmetrics:ListAnomalyGroupSummaries.

---

##### `ListAnomalyGroupTimeSeries`<sup>Required</sup> <a name="ListAnomalyGroupTimeSeries" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListAnomalyGroupTimeSeries"></a>

```typescript
public readonly ListAnomalyGroupTimeSeries: string;
```

- *Type:* string

[List] lookoutmetrics:ListAnomalyGroupTimeSeries.

---

##### `ListMetricSets`<sup>Required</sup> <a name="ListMetricSets" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListMetricSets"></a>

```typescript
public readonly ListMetricSets: string;
```

- *Type:* string

[List] lookoutmetrics:ListMetricSets.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] lookoutmetrics:ListTagsForResource.

---

##### `PutFeedback`<sup>Required</sup> <a name="PutFeedback" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.PutFeedback"></a>

```typescript
public readonly PutFeedback: string;
```

- *Type:* string

[Write] lookoutmetrics:PutFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] lookoutmetrics:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] lookoutmetrics:UntagResource.

---

##### `UpdateAlert`<sup>Required</sup> <a name="UpdateAlert" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UpdateAlert"></a>

```typescript
public readonly UpdateAlert: string;
```

- *Type:* string

[Write] lookoutmetrics:UpdateAlert.

---

##### `UpdateAnomalyDetector`<sup>Required</sup> <a name="UpdateAnomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UpdateAnomalyDetector"></a>

```typescript
public readonly UpdateAnomalyDetector: string;
```

- *Type:* string

[Write] lookoutmetrics:UpdateAnomalyDetector.

---

##### `UpdateMetricSet`<sup>Required</sup> <a name="UpdateMetricSet" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsActions.property.UpdateMetricSet"></a>

```typescript
public readonly UpdateMetricSet: string;
```

- *Type:* string

[Write] lookoutmetrics:UpdateMetricSet.

---

### LookoutMetricsConditions <a name="LookoutMetricsConditions" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions"></a>

Condition key constants and builders for lookoutmetrics.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

new lookoutmetrics.LookoutMetricsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.requestTag"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.resourceTag"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.tagKeys"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.CreateAlertConditionKeys">CreateAlertConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlert action. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.CreateAnomalyDetectorConditionKeys">CreateAnomalyDetectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAnomalyDetector action. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.CreateMetricSetConditionKeys">CreateMetricSetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMetricSet action. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAlertConditionKeys`<sup>Required</sup> <a name="CreateAlertConditionKeys" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.CreateAlertConditionKeys"></a>

```typescript
public readonly CreateAlertConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlert action.

---

##### `CreateAnomalyDetectorConditionKeys`<sup>Required</sup> <a name="CreateAnomalyDetectorConditionKeys" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.CreateAnomalyDetectorConditionKeys"></a>

```typescript
public readonly CreateAnomalyDetectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAnomalyDetector action.

---

##### `CreateMetricSetConditionKeys`<sup>Required</sup> <a name="CreateMetricSetConditionKeys" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.CreateMetricSetConditionKeys"></a>

```typescript
public readonly CreateMetricSetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMetricSet action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### LookoutMetricsResources <a name="LookoutMetricsResources" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources"></a>

ARN builders, validators, and parsers for lookoutmetrics resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.Initializer"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

new lookoutmetrics.LookoutMetricsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.alert">alert</a></code> | Builds an ARN for the Alert resource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.anomalyDetector">anomalyDetector</a></code> | Builds an ARN for the AnomalyDetector resource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidAlertArn">isValidAlertArn</a></code> | Validates whether a string is a valid ARN for the Alert resource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidAnomalyDetectorArn">isValidAnomalyDetectorArn</a></code> | Validates whether a string is a valid ARN for the AnomalyDetector resource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidMetricSetArn">isValidMetricSetArn</a></code> | Validates whether a string is a valid ARN for the MetricSet resource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.metricSet">metricSet</a></code> | Builds an ARN for the MetricSet resource. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseAlertArn">parseAlertArn</a></code> | Parses a Alert ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseAnomalyDetectorArn">parseAnomalyDetectorArn</a></code> | Parses a AnomalyDetector ARN into its components. |
| <code><a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseMetricSetArn">parseMetricSetArn</a></code> | Parses a MetricSet ARN into its components. |

---

##### `alert` <a name="alert" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.alert"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.alert(props: LookoutMetricsAlertArnProps)
```

Builds an ARN for the Alert resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.alert.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAlertArnProps">LookoutMetricsAlertArnProps</a>

---

##### `anomalyDetector` <a name="anomalyDetector" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.anomalyDetector"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.anomalyDetector(props: LookoutMetricsAnomalyDetectorArnProps)
```

Builds an ARN for the AnomalyDetector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.anomalyDetector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsAnomalyDetectorArnProps">LookoutMetricsAnomalyDetectorArnProps</a>

---

##### `isValidAlertArn` <a name="isValidAlertArn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidAlertArn"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.isValidAlertArn(arn: string)
```

Validates whether a string is a valid ARN for the Alert resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidAlertArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAnomalyDetectorArn` <a name="isValidAnomalyDetectorArn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidAnomalyDetectorArn"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.isValidAnomalyDetectorArn(arn: string)
```

Validates whether a string is a valid ARN for the AnomalyDetector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidAnomalyDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMetricSetArn` <a name="isValidMetricSetArn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidMetricSetArn"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.isValidMetricSetArn(arn: string)
```

Validates whether a string is a valid ARN for the MetricSet resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.isValidMetricSetArn.parameter.arn"></a>

- *Type:* string

---

##### `metricSet` <a name="metricSet" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.metricSet"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.metricSet(props: LookoutMetricsMetricSetArnProps)
```

Builds an ARN for the MetricSet resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.metricSet.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.lookoutmetrics.LookoutMetricsMetricSetArnProps">LookoutMetricsMetricSetArnProps</a>

---

##### `parseAlertArn` <a name="parseAlertArn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseAlertArn"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.parseAlertArn(arn: string)
```

Parses a Alert ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseAlertArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAnomalyDetectorArn` <a name="parseAnomalyDetectorArn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseAnomalyDetectorArn"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.parseAnomalyDetectorArn(arn: string)
```

Parses a AnomalyDetector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseAnomalyDetectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMetricSetArn` <a name="parseMetricSetArn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseMetricSetArn"></a>

```typescript
import { lookoutmetrics } from '@cdk_utils/iam'

lookoutmetrics.LookoutMetricsResources.parseMetricSetArn(arn: string)
```

Parses a MetricSet ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.lookoutmetrics.LookoutMetricsResources.parseMetricSetArn.parameter.arn"></a>

- *Type:* string

---




