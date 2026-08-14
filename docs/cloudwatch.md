# `cloudwatch` Submodule <a name="`cloudwatch` Submodule" id="@cdk_utils/iam.cloudwatch"></a>


## Structs <a name="Structs" id="Structs"></a>

### CloudWatchAlarmArnComponents <a name="CloudWatchAlarmArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents"></a>

Parsed components of a alarm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmArnComponents: cloudwatch.CloudWatchAlarmArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.alarmName">alarmName</a></code> | <code>string</code> | The AlarmName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The AlarmName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAlarmArnProps <a name="CloudWatchAlarmArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps"></a>

Properties for building a alarm ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmArnProps: cloudwatch.CloudWatchAlarmArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.alarmName">alarmName</a></code> | <code>string</code> | The AlarmName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

The AlarmName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchAlarmMuteRuleArnComponents <a name="CloudWatchAlarmMuteRuleArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents"></a>

Parsed components of a alarm-mute-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmMuteRuleArnComponents: cloudwatch.CloudWatchAlarmMuteRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.alarmMuteRuleName">alarmMuteRuleName</a></code> | <code>string</code> | The AlarmMuteRuleName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alarmMuteRuleName`<sup>Required</sup> <a name="alarmMuteRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.alarmMuteRuleName"></a>

```typescript
public readonly alarmMuteRuleName: string;
```

- *Type:* string

The AlarmMuteRuleName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchAlarmMuteRuleArnProps <a name="CloudWatchAlarmMuteRuleArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps"></a>

Properties for building a alarm-mute-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchAlarmMuteRuleArnProps: cloudwatch.CloudWatchAlarmMuteRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.alarmMuteRuleName">alarmMuteRuleName</a></code> | <code>string</code> | The AlarmMuteRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alarmMuteRuleName`<sup>Required</sup> <a name="alarmMuteRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.alarmMuteRuleName"></a>

```typescript
public readonly alarmMuteRuleName: string;
```

- *Type:* string

The AlarmMuteRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchDashboardArnComponents <a name="CloudWatchDashboardArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDashboardArnComponents: cloudwatch.CloudWatchDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### CloudWatchDashboardArnProps <a name="CloudWatchDashboardArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDashboardArnProps: cloudwatch.CloudWatchDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### CloudWatchDatasetArnComponents <a name="CloudWatchDatasetArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents"></a>

Parsed components of a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDatasetArnComponents: cloudwatch.CloudWatchDatasetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchDatasetArnProps <a name="CloudWatchDatasetArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps"></a>

Properties for building a dataset ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchDatasetArnProps: cloudwatch.CloudWatchDatasetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.datasetId">datasetId</a></code> | <code>string</code> | The DatasetId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.datasetId"></a>

```typescript
public readonly datasetId: string;
```

- *Type:* string

The DatasetId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchInsightRuleArnComponents <a name="CloudWatchInsightRuleArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents"></a>

Parsed components of a insight-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchInsightRuleArnComponents: cloudwatch.CloudWatchInsightRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.insightRuleName">insightRuleName</a></code> | <code>string</code> | The InsightRuleName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `insightRuleName`<sup>Required</sup> <a name="insightRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.insightRuleName"></a>

```typescript
public readonly insightRuleName: string;
```

- *Type:* string

The InsightRuleName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchInsightRuleArnProps <a name="CloudWatchInsightRuleArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps"></a>

Properties for building a insight-rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchInsightRuleArnProps: cloudwatch.CloudWatchInsightRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.insightRuleName">insightRuleName</a></code> | <code>string</code> | The InsightRuleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `insightRuleName`<sup>Required</sup> <a name="insightRuleName" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.insightRuleName"></a>

```typescript
public readonly insightRuleName: string;
```

- *Type:* string

The InsightRuleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchMetricStreamArnComponents <a name="CloudWatchMetricStreamArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents"></a>

Parsed components of a metric-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchMetricStreamArnComponents: cloudwatch.CloudWatchMetricStreamArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.metricStreamName">metricStreamName</a></code> | <code>string</code> | The MetricStreamName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `metricStreamName`<sup>Required</sup> <a name="metricStreamName" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.metricStreamName"></a>

```typescript
public readonly metricStreamName: string;
```

- *Type:* string

The MetricStreamName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CloudWatchMetricStreamArnProps <a name="CloudWatchMetricStreamArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps"></a>

Properties for building a metric-stream ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchMetricStreamArnProps: cloudwatch.CloudWatchMetricStreamArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.metricStreamName">metricStreamName</a></code> | <code>string</code> | The MetricStreamName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `metricStreamName`<sup>Required</sup> <a name="metricStreamName" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.metricStreamName"></a>

```typescript
public readonly metricStreamName: string;
```

- *Type:* string

The MetricStreamName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchServiceArnComponents <a name="CloudWatchServiceArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents"></a>

Parsed components of a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchServiceArnComponents: cloudwatch.CloudWatchServiceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.uniqueAttributesHex">uniqueAttributesHex</a></code> | <code>string</code> | The UniqueAttributesHex component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component.

---

##### `uniqueAttributesHex`<sup>Required</sup> <a name="uniqueAttributesHex" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnComponents.property.uniqueAttributesHex"></a>

```typescript
public readonly uniqueAttributesHex: string;
```

- *Type:* string

The UniqueAttributesHex component.

---

### CloudWatchServiceArnProps <a name="CloudWatchServiceArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps"></a>

Properties for building a service ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchServiceArnProps: cloudwatch.CloudWatchServiceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.serviceName">serviceName</a></code> | <code>string</code> | The ServiceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.uniqueAttributesHex">uniqueAttributesHex</a></code> | <code>string</code> | The UniqueAttributesHex component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The ServiceName component of the ARN.

---

##### `uniqueAttributesHex`<sup>Required</sup> <a name="uniqueAttributesHex" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.uniqueAttributesHex"></a>

```typescript
public readonly uniqueAttributesHex: string;
```

- *Type:* string

The UniqueAttributesHex component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CloudWatchSloArnComponents <a name="CloudWatchSloArnComponents" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents"></a>

Parsed components of a slo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchSloArnComponents: cloudwatch.CloudWatchSloArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.sloName">sloName</a></code> | <code>string</code> | The SloName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sloName`<sup>Required</sup> <a name="sloName" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnComponents.property.sloName"></a>

```typescript
public readonly sloName: string;
```

- *Type:* string

The SloName component.

---

### CloudWatchSloArnProps <a name="CloudWatchSloArnProps" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps"></a>

Properties for building a slo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

const cloudWatchSloArnProps: cloudwatch.CloudWatchSloArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.sloName">sloName</a></code> | <code>string</code> | The SloName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sloName`<sup>Required</sup> <a name="sloName" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.sloName"></a>

```typescript
public readonly sloName: string;
```

- *Type:* string

The SloName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CloudWatchActions <a name="CloudWatchActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions"></a>

IAM action constants for the cloudwatch service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAlarmMuteRule">actionGetAlarmMuteRule</a></code> | <code>string</code> | [Read] cloudwatch:GetAlarmMuteRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDashboard">actionGetDashboard</a></code> | <code>string</code> | [Read] cloudwatch:GetDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDataset">actionGetDataset</a></code> | <code>string</code> | [Read] cloudwatch:GetDataset. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetInsightRuleReport">actionGetInsightRuleReport</a></code> | <code>string</code> | [Read] cloudwatch:GetInsightRuleReport. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricData">actionGetMetricData</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricData. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStatistics">actionGetMetricStatistics</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricStatistics. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStream">actionGetMetricStream</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricStream. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricWidgetImage">actionGetMetricWidgetImage</a></code> | <code>string</code> | [Read] cloudwatch:GetMetricWidgetImage. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOTelEnrichment">actionGetOTelEnrichment</a></code> | <code>string</code> | [Read] cloudwatch:GetOTelEnrichment. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] cloudwatch:GetService. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceData">actionGetServiceData</a></code> | <code>string</code> | [Read] cloudwatch:GetServiceData. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceLevelObjective">actionGetServiceLevelObjective</a></code> | <code>string</code> | [Read] cloudwatch:GetServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyDiscoveryStatus">actionGetTopologyDiscoveryStatus</a></code> | <code>string</code> | [Read] cloudwatch:GetTopologyDiscoveryStatus. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyMap">actionGetTopologyMap</a></code> | <code>string</code> | [Read] cloudwatch:GetTopologyMap. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionSetAlarmState">actionSetAlarmState</a></code> | <code>string</code> | [Write] cloudwatch:SetAlarmState. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelIndicatorReport">BatchGetServiceLevelIndicatorReport</a></code> | <code>string</code> | [Read] cloudwatch:BatchGetServiceLevelIndicatorReport. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelObjectiveBudgetReport">BatchGetServiceLevelObjectiveBudgetReport</a></code> | <code>string</code> | [Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CallWithBearerToken">CallWithBearerToken</a></code> | <code>string</code> | [Write] cloudwatch:CallWithBearerToken. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateServiceLevelObjective">CreateServiceLevelObjective</a></code> | <code>string</code> | [Write] cloudwatch:CreateServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarmMuteRule">DeleteAlarmMuteRule</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAlarmMuteRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarms">DeleteAlarms</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAlarms. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string</code> | [Write] cloudwatch:DeleteAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDashboards">DeleteDashboards</a></code> | <code>string</code> | [Write] cloudwatch:DeleteDashboards. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteInsightRules">DeleteInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:DeleteInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteMetricStream">DeleteMetricStream</a></code> | <code>string</code> | [Write] cloudwatch:DeleteMetricStream. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeletePipelineRule">DeletePipelineRule</a></code> | <code>string</code> | [Write] cloudwatch:DeletePipelineRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteServiceLevelObjective">DeleteServiceLevelObjective</a></code> | <code>string</code> | [Write] cloudwatch:DeleteServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmHistory">DescribeAlarmHistory</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAlarmHistory. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarms">DescribeAlarms</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAlarms. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmsForMetric">DescribeAlarmsForMetric</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAlarmsForMetric. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAnomalyDetectors">DescribeAnomalyDetectors</a></code> | <code>string</code> | [Read] cloudwatch:DescribeAnomalyDetectors. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeInsightRules">DescribeInsightRules</a></code> | <code>string</code> | [Read] cloudwatch:DescribeInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableAlarmActions">DisableAlarmActions</a></code> | <code>string</code> | [Write] cloudwatch:DisableAlarmActions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableInsightRules">DisableInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:DisableInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableAlarmActions">EnableAlarmActions</a></code> | <code>string</code> | [Write] cloudwatch:EnableAlarmActions. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableInsightRules">EnableInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:EnableInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableTopologyDiscovery">EnableTopologyDiscovery</a></code> | <code>string</code> | [Write] cloudwatch:EnableTopologyDiscovery. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQuery">GenerateQuery</a></code> | <code>string</code> | [Read] cloudwatch:GenerateQuery. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQueryResultsSummary">GenerateQueryResultsSummary</a></code> | <code>string</code> | [Read] cloudwatch:GenerateQueryResultsSummary. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.Link">Link</a></code> | <code>string</code> | [Write] cloudwatch:Link. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlarmMuteRules">ListAlarmMuteRules</a></code> | <code>string</code> | [List] cloudwatch:ListAlarmMuteRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDashboards">ListDashboards</a></code> | <code>string</code> | [List] cloudwatch:ListDashboards. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListEntitiesForMetric">ListEntitiesForMetric</a></code> | <code>string</code> | [List] cloudwatch:ListEntitiesForMetric. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListManagedInsightRules">ListManagedInsightRules</a></code> | <code>string</code> | [Read] cloudwatch:ListManagedInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetrics">ListMetrics</a></code> | <code>string</code> | [List] cloudwatch:ListMetrics. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetricStreams">ListMetricStreams</a></code> | <code>string</code> | [List] cloudwatch:ListMetricStreams. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServiceLevelObjectives">ListServiceLevelObjectives</a></code> | <code>string</code> | [List] cloudwatch:ListServiceLevelObjectives. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] cloudwatch:ListServices. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] cloudwatch:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAlarmMuteRule">PutAlarmMuteRule</a></code> | <code>string</code> | [Write] cloudwatch:PutAlarmMuteRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAnomalyDetector">PutAnomalyDetector</a></code> | <code>string</code> | [Write] cloudwatch:PutAnomalyDetector. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutCompositeAlarm">PutCompositeAlarm</a></code> | <code>string</code> | [Write] cloudwatch:PutCompositeAlarm. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutDashboard">PutDashboard</a></code> | <code>string</code> | [Write] cloudwatch:PutDashboard. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutInsightRule">PutInsightRule</a></code> | <code>string</code> | [Write] cloudwatch:PutInsightRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutLogAlarm">PutLogAlarm</a></code> | <code>string</code> | [Write] cloudwatch:PutLogAlarm. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutManagedInsightRules">PutManagedInsightRules</a></code> | <code>string</code> | [Write] cloudwatch:PutManagedInsightRules. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricAlarm">PutMetricAlarm</a></code> | <code>string</code> | [Write] cloudwatch:PutMetricAlarm. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricData">PutMetricData</a></code> | <code>string</code> | [Write] cloudwatch:PutMetricData. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricStream">PutMetricStream</a></code> | <code>string</code> | [Write] cloudwatch:PutMetricStream. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutPipelineRule">PutPipelineRule</a></code> | <code>string</code> | [Write] cloudwatch:PutPipelineRule. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartMetricStreams">StartMetricStreams</a></code> | <code>string</code> | [Write] cloudwatch:StartMetricStreams. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartOTelEnrichment">StartOTelEnrichment</a></code> | <code>string</code> | [Write] cloudwatch:StartOTelEnrichment. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopMetricStreams">StopMetricStreams</a></code> | <code>string</code> | [Write] cloudwatch:StopMetricStreams. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopOTelEnrichment">StopOTelEnrichment</a></code> | <code>string</code> | [Write] cloudwatch:StopOTelEnrichment. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cloudwatch:TagResource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cloudwatch:UntagResource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateServiceLevelObjective">UpdateServiceLevelObjective</a></code> | <code>string</code> | [Write] cloudwatch:UpdateServiceLevelObjective. |

---

##### `actionGetAlarmMuteRule`<sup>Required</sup> <a name="actionGetAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetAlarmMuteRule"></a>

```typescript
public readonly actionGetAlarmMuteRule: string;
```

- *Type:* string

[Read] cloudwatch:GetAlarmMuteRule.

---

##### `actionGetDashboard`<sup>Required</sup> <a name="actionGetDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDashboard"></a>

```typescript
public readonly actionGetDashboard: string;
```

- *Type:* string

[Read] cloudwatch:GetDashboard.

---

##### `actionGetDataset`<sup>Required</sup> <a name="actionGetDataset" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetDataset"></a>

```typescript
public readonly actionGetDataset: string;
```

- *Type:* string

[Read] cloudwatch:GetDataset.

---

##### `actionGetInsightRuleReport`<sup>Required</sup> <a name="actionGetInsightRuleReport" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetInsightRuleReport"></a>

```typescript
public readonly actionGetInsightRuleReport: string;
```

- *Type:* string

[Read] cloudwatch:GetInsightRuleReport.

---

##### `actionGetMetricData`<sup>Required</sup> <a name="actionGetMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricData"></a>

```typescript
public readonly actionGetMetricData: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricData.

---

##### `actionGetMetricStatistics`<sup>Required</sup> <a name="actionGetMetricStatistics" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStatistics"></a>

```typescript
public readonly actionGetMetricStatistics: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricStatistics.

---

##### `actionGetMetricStream`<sup>Required</sup> <a name="actionGetMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricStream"></a>

```typescript
public readonly actionGetMetricStream: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricStream.

---

##### `actionGetMetricWidgetImage`<sup>Required</sup> <a name="actionGetMetricWidgetImage" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetMetricWidgetImage"></a>

```typescript
public readonly actionGetMetricWidgetImage: string;
```

- *Type:* string

[Read] cloudwatch:GetMetricWidgetImage.

---

##### `actionGetOTelEnrichment`<sup>Required</sup> <a name="actionGetOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetOTelEnrichment"></a>

```typescript
public readonly actionGetOTelEnrichment: string;
```

- *Type:* string

[Read] cloudwatch:GetOTelEnrichment.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] cloudwatch:GetService.

---

##### `actionGetServiceData`<sup>Required</sup> <a name="actionGetServiceData" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceData"></a>

```typescript
public readonly actionGetServiceData: string;
```

- *Type:* string

[Read] cloudwatch:GetServiceData.

---

##### `actionGetServiceLevelObjective`<sup>Required</sup> <a name="actionGetServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetServiceLevelObjective"></a>

```typescript
public readonly actionGetServiceLevelObjective: string;
```

- *Type:* string

[Read] cloudwatch:GetServiceLevelObjective.

---

##### `actionGetTopologyDiscoveryStatus`<sup>Required</sup> <a name="actionGetTopologyDiscoveryStatus" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyDiscoveryStatus"></a>

```typescript
public readonly actionGetTopologyDiscoveryStatus: string;
```

- *Type:* string

[Read] cloudwatch:GetTopologyDiscoveryStatus.

---

##### `actionGetTopologyMap`<sup>Required</sup> <a name="actionGetTopologyMap" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionGetTopologyMap"></a>

```typescript
public readonly actionGetTopologyMap: string;
```

- *Type:* string

[Read] cloudwatch:GetTopologyMap.

---

##### `actionSetAlarmState`<sup>Required</sup> <a name="actionSetAlarmState" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.actionSetAlarmState"></a>

```typescript
public readonly actionSetAlarmState: string;
```

- *Type:* string

[Write] cloudwatch:SetAlarmState.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetServiceLevelIndicatorReport`<sup>Required</sup> <a name="BatchGetServiceLevelIndicatorReport" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelIndicatorReport"></a>

```typescript
public readonly BatchGetServiceLevelIndicatorReport: string;
```

- *Type:* string

[Read] cloudwatch:BatchGetServiceLevelIndicatorReport.

---

##### `BatchGetServiceLevelObjectiveBudgetReport`<sup>Required</sup> <a name="BatchGetServiceLevelObjectiveBudgetReport" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.BatchGetServiceLevelObjectiveBudgetReport"></a>

```typescript
public readonly BatchGetServiceLevelObjectiveBudgetReport: string;
```

- *Type:* string

[Read] cloudwatch:BatchGetServiceLevelObjectiveBudgetReport.

---

##### `CallWithBearerToken`<sup>Required</sup> <a name="CallWithBearerToken" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CallWithBearerToken"></a>

```typescript
public readonly CallWithBearerToken: string;
```

- *Type:* string

[Write] cloudwatch:CallWithBearerToken.

---

##### `CreateServiceLevelObjective`<sup>Required</sup> <a name="CreateServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.CreateServiceLevelObjective"></a>

```typescript
public readonly CreateServiceLevelObjective: string;
```

- *Type:* string

[Write] cloudwatch:CreateServiceLevelObjective.

---

##### `DeleteAlarmMuteRule`<sup>Required</sup> <a name="DeleteAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarmMuteRule"></a>

```typescript
public readonly DeleteAlarmMuteRule: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAlarmMuteRule.

---

##### `DeleteAlarms`<sup>Required</sup> <a name="DeleteAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAlarms"></a>

```typescript
public readonly DeleteAlarms: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAlarms.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string;
```

- *Type:* string

[Write] cloudwatch:DeleteAnomalyDetector.

---

##### `DeleteDashboards`<sup>Required</sup> <a name="DeleteDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteDashboards"></a>

```typescript
public readonly DeleteDashboards: string;
```

- *Type:* string

[Write] cloudwatch:DeleteDashboards.

---

##### `DeleteInsightRules`<sup>Required</sup> <a name="DeleteInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteInsightRules"></a>

```typescript
public readonly DeleteInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:DeleteInsightRules.

---

##### `DeleteMetricStream`<sup>Required</sup> <a name="DeleteMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteMetricStream"></a>

```typescript
public readonly DeleteMetricStream: string;
```

- *Type:* string

[Write] cloudwatch:DeleteMetricStream.

---

##### `DeletePipelineRule`<sup>Required</sup> <a name="DeletePipelineRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeletePipelineRule"></a>

```typescript
public readonly DeletePipelineRule: string;
```

- *Type:* string

[Write] cloudwatch:DeletePipelineRule.

---

##### `DeleteServiceLevelObjective`<sup>Required</sup> <a name="DeleteServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DeleteServiceLevelObjective"></a>

```typescript
public readonly DeleteServiceLevelObjective: string;
```

- *Type:* string

[Write] cloudwatch:DeleteServiceLevelObjective.

---

##### `DescribeAlarmHistory`<sup>Required</sup> <a name="DescribeAlarmHistory" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmHistory"></a>

```typescript
public readonly DescribeAlarmHistory: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAlarmHistory.

---

##### `DescribeAlarms`<sup>Required</sup> <a name="DescribeAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarms"></a>

```typescript
public readonly DescribeAlarms: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAlarms.

---

##### `DescribeAlarmsForMetric`<sup>Required</sup> <a name="DescribeAlarmsForMetric" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAlarmsForMetric"></a>

```typescript
public readonly DescribeAlarmsForMetric: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAlarmsForMetric.

---

##### `DescribeAnomalyDetectors`<sup>Required</sup> <a name="DescribeAnomalyDetectors" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeAnomalyDetectors"></a>

```typescript
public readonly DescribeAnomalyDetectors: string;
```

- *Type:* string

[Read] cloudwatch:DescribeAnomalyDetectors.

---

##### `DescribeInsightRules`<sup>Required</sup> <a name="DescribeInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DescribeInsightRules"></a>

```typescript
public readonly DescribeInsightRules: string;
```

- *Type:* string

[Read] cloudwatch:DescribeInsightRules.

---

##### `DisableAlarmActions`<sup>Required</sup> <a name="DisableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableAlarmActions"></a>

```typescript
public readonly DisableAlarmActions: string;
```

- *Type:* string

[Write] cloudwatch:DisableAlarmActions.

---

##### `DisableInsightRules`<sup>Required</sup> <a name="DisableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.DisableInsightRules"></a>

```typescript
public readonly DisableInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:DisableInsightRules.

---

##### `EnableAlarmActions`<sup>Required</sup> <a name="EnableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableAlarmActions"></a>

```typescript
public readonly EnableAlarmActions: string;
```

- *Type:* string

[Write] cloudwatch:EnableAlarmActions.

---

##### `EnableInsightRules`<sup>Required</sup> <a name="EnableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableInsightRules"></a>

```typescript
public readonly EnableInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:EnableInsightRules.

---

##### `EnableTopologyDiscovery`<sup>Required</sup> <a name="EnableTopologyDiscovery" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.EnableTopologyDiscovery"></a>

```typescript
public readonly EnableTopologyDiscovery: string;
```

- *Type:* string

[Write] cloudwatch:EnableTopologyDiscovery.

---

##### `GenerateQuery`<sup>Required</sup> <a name="GenerateQuery" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQuery"></a>

```typescript
public readonly GenerateQuery: string;
```

- *Type:* string

[Read] cloudwatch:GenerateQuery.

---

##### `GenerateQueryResultsSummary`<sup>Required</sup> <a name="GenerateQueryResultsSummary" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.GenerateQueryResultsSummary"></a>

```typescript
public readonly GenerateQueryResultsSummary: string;
```

- *Type:* string

[Read] cloudwatch:GenerateQueryResultsSummary.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] cloudwatch:Link.

---

##### `ListAlarmMuteRules`<sup>Required</sup> <a name="ListAlarmMuteRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListAlarmMuteRules"></a>

```typescript
public readonly ListAlarmMuteRules: string;
```

- *Type:* string

[List] cloudwatch:ListAlarmMuteRules.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string;
```

- *Type:* string

[List] cloudwatch:ListDashboards.

---

##### `ListEntitiesForMetric`<sup>Required</sup> <a name="ListEntitiesForMetric" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListEntitiesForMetric"></a>

```typescript
public readonly ListEntitiesForMetric: string;
```

- *Type:* string

[List] cloudwatch:ListEntitiesForMetric.

---

##### `ListManagedInsightRules`<sup>Required</sup> <a name="ListManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListManagedInsightRules"></a>

```typescript
public readonly ListManagedInsightRules: string;
```

- *Type:* string

[Read] cloudwatch:ListManagedInsightRules.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string;
```

- *Type:* string

[List] cloudwatch:ListMetrics.

---

##### `ListMetricStreams`<sup>Required</sup> <a name="ListMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListMetricStreams"></a>

```typescript
public readonly ListMetricStreams: string;
```

- *Type:* string

[List] cloudwatch:ListMetricStreams.

---

##### `ListServiceLevelObjectives`<sup>Required</sup> <a name="ListServiceLevelObjectives" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServiceLevelObjectives"></a>

```typescript
public readonly ListServiceLevelObjectives: string;
```

- *Type:* string

[List] cloudwatch:ListServiceLevelObjectives.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] cloudwatch:ListServices.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] cloudwatch:ListTagsForResource.

---

##### `PutAlarmMuteRule`<sup>Required</sup> <a name="PutAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAlarmMuteRule"></a>

```typescript
public readonly PutAlarmMuteRule: string;
```

- *Type:* string

[Write] cloudwatch:PutAlarmMuteRule.

---

##### `PutAnomalyDetector`<sup>Required</sup> <a name="PutAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutAnomalyDetector"></a>

```typescript
public readonly PutAnomalyDetector: string;
```

- *Type:* string

[Write] cloudwatch:PutAnomalyDetector.

---

##### `PutCompositeAlarm`<sup>Required</sup> <a name="PutCompositeAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutCompositeAlarm"></a>

```typescript
public readonly PutCompositeAlarm: string;
```

- *Type:* string

[Write] cloudwatch:PutCompositeAlarm.

---

##### `PutDashboard`<sup>Required</sup> <a name="PutDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutDashboard"></a>

```typescript
public readonly PutDashboard: string;
```

- *Type:* string

[Write] cloudwatch:PutDashboard.

---

##### `PutInsightRule`<sup>Required</sup> <a name="PutInsightRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutInsightRule"></a>

```typescript
public readonly PutInsightRule: string;
```

- *Type:* string

[Write] cloudwatch:PutInsightRule.

---

##### `PutLogAlarm`<sup>Required</sup> <a name="PutLogAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutLogAlarm"></a>

```typescript
public readonly PutLogAlarm: string;
```

- *Type:* string

[Write] cloudwatch:PutLogAlarm.

---

##### `PutManagedInsightRules`<sup>Required</sup> <a name="PutManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutManagedInsightRules"></a>

```typescript
public readonly PutManagedInsightRules: string;
```

- *Type:* string

[Write] cloudwatch:PutManagedInsightRules.

---

##### `PutMetricAlarm`<sup>Required</sup> <a name="PutMetricAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricAlarm"></a>

```typescript
public readonly PutMetricAlarm: string;
```

- *Type:* string

[Write] cloudwatch:PutMetricAlarm.

---

##### `PutMetricData`<sup>Required</sup> <a name="PutMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricData"></a>

```typescript
public readonly PutMetricData: string;
```

- *Type:* string

[Write] cloudwatch:PutMetricData.

---

##### `PutMetricStream`<sup>Required</sup> <a name="PutMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutMetricStream"></a>

```typescript
public readonly PutMetricStream: string;
```

- *Type:* string

[Write] cloudwatch:PutMetricStream.

---

##### `PutPipelineRule`<sup>Required</sup> <a name="PutPipelineRule" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.PutPipelineRule"></a>

```typescript
public readonly PutPipelineRule: string;
```

- *Type:* string

[Write] cloudwatch:PutPipelineRule.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMetricStreams`<sup>Required</sup> <a name="StartMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartMetricStreams"></a>

```typescript
public readonly StartMetricStreams: string;
```

- *Type:* string

[Write] cloudwatch:StartMetricStreams.

---

##### `StartOTelEnrichment`<sup>Required</sup> <a name="StartOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StartOTelEnrichment"></a>

```typescript
public readonly StartOTelEnrichment: string;
```

- *Type:* string

[Write] cloudwatch:StartOTelEnrichment.

---

##### `StopMetricStreams`<sup>Required</sup> <a name="StopMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopMetricStreams"></a>

```typescript
public readonly StopMetricStreams: string;
```

- *Type:* string

[Write] cloudwatch:StopMetricStreams.

---

##### `StopOTelEnrichment`<sup>Required</sup> <a name="StopOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.StopOTelEnrichment"></a>

```typescript
public readonly StopOTelEnrichment: string;
```

- *Type:* string

[Write] cloudwatch:StopOTelEnrichment.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cloudwatch:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cloudwatch:UntagResource.

---

##### `UpdateServiceLevelObjective`<sup>Required</sup> <a name="UpdateServiceLevelObjective" id="@cdk_utils/iam.cloudwatch.CloudWatchActions.property.UpdateServiceLevelObjective"></a>

```typescript
public readonly UpdateServiceLevelObjective: string;
```

- *Type:* string

[Write] cloudwatch:UpdateServiceLevelObjective.

---

### CloudWatchConditions <a name="CloudWatchConditions" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions"></a>

Condition key constants and builders for cloudwatch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.alarmActions">alarmActions</a></code> | Generates a condition block for `cloudwatch:AlarmActions`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.namespace">namespace</a></code> | Generates a condition block for `cloudwatch:namespace`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups">requestInsightRuleLogGroups</a></code> | Generates a condition block for `cloudwatch:requestInsightRuleLogGroups`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestManagedResourceArNs">requestManagedResourceArNs</a></code> | Generates a condition block for `cloudwatch:requestManagedResourceARNs`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `alarmActions` <a name="alarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.alarmActions"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.alarmActions(values: string[])
```

Generates a condition block for `cloudwatch:AlarmActions`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.alarmActions.parameter.values"></a>

- *Type:* string[]

---

##### `namespace` <a name="namespace" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.namespace"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.namespace(value: string)
```

Generates a condition block for `cloudwatch:namespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.namespace.parameter.value"></a>

- *Type:* string

---

##### `requestInsightRuleLogGroups` <a name="requestInsightRuleLogGroups" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups(values: string[])
```

Generates a condition block for `cloudwatch:requestInsightRuleLogGroups`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestInsightRuleLogGroups.parameter.values"></a>

- *Type:* string[]

---

##### `requestManagedResourceArNs` <a name="requestManagedResourceArNs" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestManagedResourceArNs"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.requestManagedResourceArNs(values: string[])
```

Generates a condition block for `cloudwatch:requestManagedResourceARNs`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestManagedResourceArNs.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestTag"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.resourceTag"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.tagKeys"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDatasetConditionKeys">actionGetDatasetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetDataset action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ALARM_ACTIONS">ALARM_ACTIONS</a></code> | <code>string</code> | Condition key: cloudwatch:AlarmActions (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateServiceLevelObjectiveConditionKeys">CreateServiceLevelObjectiveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceLevelObjective action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListManagedInsightRulesConditionKeys">ListManagedInsightRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListManagedInsightRules action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.NAMESPACE">NAMESPACE</a></code> | <code>string</code> | Condition key: cloudwatch:namespace (String). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutAlarmMuteRuleConditionKeys">PutAlarmMuteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAlarmMuteRule action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutCompositeAlarmConditionKeys">PutCompositeAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutCompositeAlarm action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutDashboardConditionKeys">PutDashboardConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutDashboard action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutInsightRuleConditionKeys">PutInsightRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutInsightRule action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutLogAlarmConditionKeys">PutLogAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutLogAlarm action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutManagedInsightRulesConditionKeys">PutManagedInsightRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutManagedInsightRules action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricAlarmConditionKeys">PutMetricAlarmConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricAlarm action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricDataConditionKeys">PutMetricDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricData action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricStreamConditionKeys">PutMetricStreamConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutMetricStream action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_INSIGHT_RULE_LOG_GROUPS">REQUEST_INSIGHT_RULE_LOG_GROUPS</a></code> | <code>string</code> | Condition key: cloudwatch:requestInsightRuleLogGroups (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_MANAGED_RESOURCE_AR_NS">REQUEST_MANAGED_RESOURCE_AR_NS</a></code> | <code>string</code> | Condition key: cloudwatch:requestManagedResourceARNs (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetDatasetConditionKeys`<sup>Required</sup> <a name="actionGetDatasetConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.actionGetDatasetConditionKeys"></a>

```typescript
public readonly actionGetDatasetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetDataset action.

---

##### `ALARM_ACTIONS`<sup>Required</sup> <a name="ALARM_ACTIONS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ALARM_ACTIONS"></a>

```typescript
public readonly ALARM_ACTIONS: string;
```

- *Type:* string

Condition key: cloudwatch:AlarmActions (ArrayOfString).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateServiceLevelObjectiveConditionKeys`<sup>Required</sup> <a name="CreateServiceLevelObjectiveConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.CreateServiceLevelObjectiveConditionKeys"></a>

```typescript
public readonly CreateServiceLevelObjectiveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceLevelObjective action.

---

##### `ListManagedInsightRulesConditionKeys`<sup>Required</sup> <a name="ListManagedInsightRulesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.ListManagedInsightRulesConditionKeys"></a>

```typescript
public readonly ListManagedInsightRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListManagedInsightRules action.

---

##### `NAMESPACE`<sup>Required</sup> <a name="NAMESPACE" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.NAMESPACE"></a>

```typescript
public readonly NAMESPACE: string;
```

- *Type:* string

Condition key: cloudwatch:namespace (String).

---

##### `PutAlarmMuteRuleConditionKeys`<sup>Required</sup> <a name="PutAlarmMuteRuleConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutAlarmMuteRuleConditionKeys"></a>

```typescript
public readonly PutAlarmMuteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAlarmMuteRule action.

---

##### `PutCompositeAlarmConditionKeys`<sup>Required</sup> <a name="PutCompositeAlarmConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutCompositeAlarmConditionKeys"></a>

```typescript
public readonly PutCompositeAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutCompositeAlarm action.

---

##### `PutDashboardConditionKeys`<sup>Required</sup> <a name="PutDashboardConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutDashboardConditionKeys"></a>

```typescript
public readonly PutDashboardConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutDashboard action.

---

##### `PutInsightRuleConditionKeys`<sup>Required</sup> <a name="PutInsightRuleConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutInsightRuleConditionKeys"></a>

```typescript
public readonly PutInsightRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutInsightRule action.

---

##### `PutLogAlarmConditionKeys`<sup>Required</sup> <a name="PutLogAlarmConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutLogAlarmConditionKeys"></a>

```typescript
public readonly PutLogAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutLogAlarm action.

---

##### `PutManagedInsightRulesConditionKeys`<sup>Required</sup> <a name="PutManagedInsightRulesConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutManagedInsightRulesConditionKeys"></a>

```typescript
public readonly PutManagedInsightRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutManagedInsightRules action.

---

##### `PutMetricAlarmConditionKeys`<sup>Required</sup> <a name="PutMetricAlarmConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricAlarmConditionKeys"></a>

```typescript
public readonly PutMetricAlarmConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricAlarm action.

---

##### `PutMetricDataConditionKeys`<sup>Required</sup> <a name="PutMetricDataConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricDataConditionKeys"></a>

```typescript
public readonly PutMetricDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricData action.

---

##### `PutMetricStreamConditionKeys`<sup>Required</sup> <a name="PutMetricStreamConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.PutMetricStreamConditionKeys"></a>

```typescript
public readonly PutMetricStreamConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutMetricStream action.

---

##### `REQUEST_INSIGHT_RULE_LOG_GROUPS`<sup>Required</sup> <a name="REQUEST_INSIGHT_RULE_LOG_GROUPS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_INSIGHT_RULE_LOG_GROUPS"></a>

```typescript
public readonly REQUEST_INSIGHT_RULE_LOG_GROUPS: string;
```

- *Type:* string

Condition key: cloudwatch:requestInsightRuleLogGroups (ArrayOfString).

---

##### `REQUEST_MANAGED_RESOURCE_AR_NS`<sup>Required</sup> <a name="REQUEST_MANAGED_RESOURCE_AR_NS" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.REQUEST_MANAGED_RESOURCE_AR_NS"></a>

```typescript
public readonly REQUEST_MANAGED_RESOURCE_AR_NS: string;
```

- *Type:* string

Condition key: cloudwatch:requestManagedResourceARNs (ArrayOfARN).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cloudwatch.CloudWatchConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CloudWatchOperations <a name="CloudWatchOperations" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations"></a>

API operation to required IAM actions mapping for cloudwatch.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.AssociateDatasetKmsKey">AssociateDatasetKmsKey</a></code> | <code>string[]</code> | IAM actions required for the AssociateDatasetKmsKey API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarmMuteRule">DeleteAlarmMuteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlarmMuteRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarms">DeleteAlarms</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlarms API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAnomalyDetector">DeleteAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the DeleteAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteDashboards">DeleteDashboards</a></code> | <code>string[]</code> | IAM actions required for the DeleteDashboards API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteInsightRules">DeleteInsightRules</a></code> | <code>string[]</code> | IAM actions required for the DeleteInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteMetricStream">DeleteMetricStream</a></code> | <code>string[]</code> | IAM actions required for the DeleteMetricStream API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmContributors">DescribeAlarmContributors</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarmContributors API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmHistory">DescribeAlarmHistory</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarmHistory API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarms">DescribeAlarms</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarms API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmsForMetric">DescribeAlarmsForMetric</a></code> | <code>string[]</code> | IAM actions required for the DescribeAlarmsForMetric API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAnomalyDetectors">DescribeAnomalyDetectors</a></code> | <code>string[]</code> | IAM actions required for the DescribeAnomalyDetectors API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeInsightRules">DescribeInsightRules</a></code> | <code>string[]</code> | IAM actions required for the DescribeInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableAlarmActions">DisableAlarmActions</a></code> | <code>string[]</code> | IAM actions required for the DisableAlarmActions API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableInsightRules">DisableInsightRules</a></code> | <code>string[]</code> | IAM actions required for the DisableInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisassociateDatasetKmsKey">DisassociateDatasetKmsKey</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDatasetKmsKey API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableAlarmActions">EnableAlarmActions</a></code> | <code>string[]</code> | IAM actions required for the EnableAlarmActions API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableInsightRules">EnableInsightRules</a></code> | <code>string[]</code> | IAM actions required for the EnableInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListAlarmMuteRules">ListAlarmMuteRules</a></code> | <code>string[]</code> | IAM actions required for the ListAlarmMuteRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListDashboards">ListDashboards</a></code> | <code>string[]</code> | IAM actions required for the ListDashboards API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListManagedInsightRules">ListManagedInsightRules</a></code> | <code>string[]</code> | IAM actions required for the ListManagedInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetrics">ListMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListMetrics API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetricStreams">ListMetricStreams</a></code> | <code>string[]</code> | IAM actions required for the ListMetricStreams API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetAlarmMuteRule">opGetAlarmMuteRule</a></code> | <code>string[]</code> | IAM actions required for the GetAlarmMuteRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDashboard">opGetDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDataset">opGetDataset</a></code> | <code>string[]</code> | IAM actions required for the GetDataset API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetInsightRuleReport">opGetInsightRuleReport</a></code> | <code>string[]</code> | IAM actions required for the GetInsightRuleReport API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricData">opGetMetricData</a></code> | <code>string[]</code> | IAM actions required for the GetMetricData API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStatistics">opGetMetricStatistics</a></code> | <code>string[]</code> | IAM actions required for the GetMetricStatistics API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStream">opGetMetricStream</a></code> | <code>string[]</code> | IAM actions required for the GetMetricStream API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricWidgetImage">opGetMetricWidgetImage</a></code> | <code>string[]</code> | IAM actions required for the GetMetricWidgetImage API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetOTelEnrichment">opGetOTelEnrichment</a></code> | <code>string[]</code> | IAM actions required for the GetOTelEnrichment API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opSetAlarmState">opSetAlarmState</a></code> | <code>string[]</code> | IAM actions required for the SetAlarmState API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAlarmMuteRule">PutAlarmMuteRule</a></code> | <code>string[]</code> | IAM actions required for the PutAlarmMuteRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAnomalyDetector">PutAnomalyDetector</a></code> | <code>string[]</code> | IAM actions required for the PutAnomalyDetector API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutCompositeAlarm">PutCompositeAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutCompositeAlarm API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutDashboard">PutDashboard</a></code> | <code>string[]</code> | IAM actions required for the PutDashboard API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutInsightRule">PutInsightRule</a></code> | <code>string[]</code> | IAM actions required for the PutInsightRule API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutLogAlarm">PutLogAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutLogAlarm API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutManagedInsightRules">PutManagedInsightRules</a></code> | <code>string[]</code> | IAM actions required for the PutManagedInsightRules API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricAlarm">PutMetricAlarm</a></code> | <code>string[]</code> | IAM actions required for the PutMetricAlarm API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricData">PutMetricData</a></code> | <code>string[]</code> | IAM actions required for the PutMetricData API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricStream">PutMetricStream</a></code> | <code>string[]</code> | IAM actions required for the PutMetricStream API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartMetricStreams">StartMetricStreams</a></code> | <code>string[]</code> | IAM actions required for the StartMetricStreams API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartOTelEnrichment">StartOTelEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StartOTelEnrichment API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopMetricStreams">StopMetricStreams</a></code> | <code>string[]</code> | IAM actions required for the StopMetricStreams API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopOTelEnrichment">StopOTelEnrichment</a></code> | <code>string[]</code> | IAM actions required for the StopOTelEnrichment API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AssociateDatasetKmsKey`<sup>Required</sup> <a name="AssociateDatasetKmsKey" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.AssociateDatasetKmsKey"></a>

```typescript
public readonly AssociateDatasetKmsKey: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDatasetKmsKey API call.

---

##### `DeleteAlarmMuteRule`<sup>Required</sup> <a name="DeleteAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarmMuteRule"></a>

```typescript
public readonly DeleteAlarmMuteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlarmMuteRule API call.

---

##### `DeleteAlarms`<sup>Required</sup> <a name="DeleteAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAlarms"></a>

```typescript
public readonly DeleteAlarms: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlarms API call.

---

##### `DeleteAnomalyDetector`<sup>Required</sup> <a name="DeleteAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteAnomalyDetector"></a>

```typescript
public readonly DeleteAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAnomalyDetector API call.

---

##### `DeleteDashboards`<sup>Required</sup> <a name="DeleteDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteDashboards"></a>

```typescript
public readonly DeleteDashboards: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDashboards API call.

---

##### `DeleteInsightRules`<sup>Required</sup> <a name="DeleteInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteInsightRules"></a>

```typescript
public readonly DeleteInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInsightRules API call.

---

##### `DeleteMetricStream`<sup>Required</sup> <a name="DeleteMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DeleteMetricStream"></a>

```typescript
public readonly DeleteMetricStream: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMetricStream API call.

---

##### `DescribeAlarmContributors`<sup>Required</sup> <a name="DescribeAlarmContributors" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmContributors"></a>

```typescript
public readonly DescribeAlarmContributors: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarmContributors API call.

---

##### `DescribeAlarmHistory`<sup>Required</sup> <a name="DescribeAlarmHistory" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmHistory"></a>

```typescript
public readonly DescribeAlarmHistory: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarmHistory API call.

---

##### `DescribeAlarms`<sup>Required</sup> <a name="DescribeAlarms" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarms"></a>

```typescript
public readonly DescribeAlarms: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarms API call.

---

##### `DescribeAlarmsForMetric`<sup>Required</sup> <a name="DescribeAlarmsForMetric" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAlarmsForMetric"></a>

```typescript
public readonly DescribeAlarmsForMetric: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAlarmsForMetric API call.

---

##### `DescribeAnomalyDetectors`<sup>Required</sup> <a name="DescribeAnomalyDetectors" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeAnomalyDetectors"></a>

```typescript
public readonly DescribeAnomalyDetectors: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAnomalyDetectors API call.

---

##### `DescribeInsightRules`<sup>Required</sup> <a name="DescribeInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DescribeInsightRules"></a>

```typescript
public readonly DescribeInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInsightRules API call.

---

##### `DisableAlarmActions`<sup>Required</sup> <a name="DisableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableAlarmActions"></a>

```typescript
public readonly DisableAlarmActions: string[];
```

- *Type:* string[]

IAM actions required for the DisableAlarmActions API call.

---

##### `DisableInsightRules`<sup>Required</sup> <a name="DisableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisableInsightRules"></a>

```typescript
public readonly DisableInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the DisableInsightRules API call.

---

##### `DisassociateDatasetKmsKey`<sup>Required</sup> <a name="DisassociateDatasetKmsKey" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.DisassociateDatasetKmsKey"></a>

```typescript
public readonly DisassociateDatasetKmsKey: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDatasetKmsKey API call.

---

##### `EnableAlarmActions`<sup>Required</sup> <a name="EnableAlarmActions" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableAlarmActions"></a>

```typescript
public readonly EnableAlarmActions: string[];
```

- *Type:* string[]

IAM actions required for the EnableAlarmActions API call.

---

##### `EnableInsightRules`<sup>Required</sup> <a name="EnableInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.EnableInsightRules"></a>

```typescript
public readonly EnableInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the EnableInsightRules API call.

---

##### `ListAlarmMuteRules`<sup>Required</sup> <a name="ListAlarmMuteRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListAlarmMuteRules"></a>

```typescript
public readonly ListAlarmMuteRules: string[];
```

- *Type:* string[]

IAM actions required for the ListAlarmMuteRules API call.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboards API call.

---

##### `ListManagedInsightRules`<sup>Required</sup> <a name="ListManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListManagedInsightRules"></a>

```typescript
public readonly ListManagedInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the ListManagedInsightRules API call.

---

##### `ListMetrics`<sup>Required</sup> <a name="ListMetrics" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetrics"></a>

```typescript
public readonly ListMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListMetrics API call.

---

##### `ListMetricStreams`<sup>Required</sup> <a name="ListMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListMetricStreams"></a>

```typescript
public readonly ListMetricStreams: string[];
```

- *Type:* string[]

IAM actions required for the ListMetricStreams API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAlarmMuteRule`<sup>Required</sup> <a name="opGetAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetAlarmMuteRule"></a>

```typescript
public readonly opGetAlarmMuteRule: string[];
```

- *Type:* string[]

IAM actions required for the GetAlarmMuteRule API call.

---

##### `opGetDashboard`<sup>Required</sup> <a name="opGetDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDashboard"></a>

```typescript
public readonly opGetDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboard API call.

---

##### `opGetDataset`<sup>Required</sup> <a name="opGetDataset" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetDataset"></a>

```typescript
public readonly opGetDataset: string[];
```

- *Type:* string[]

IAM actions required for the GetDataset API call.

---

##### `opGetInsightRuleReport`<sup>Required</sup> <a name="opGetInsightRuleReport" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetInsightRuleReport"></a>

```typescript
public readonly opGetInsightRuleReport: string[];
```

- *Type:* string[]

IAM actions required for the GetInsightRuleReport API call.

---

##### `opGetMetricData`<sup>Required</sup> <a name="opGetMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricData"></a>

```typescript
public readonly opGetMetricData: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricData API call.

---

##### `opGetMetricStatistics`<sup>Required</sup> <a name="opGetMetricStatistics" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStatistics"></a>

```typescript
public readonly opGetMetricStatistics: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricStatistics API call.

---

##### `opGetMetricStream`<sup>Required</sup> <a name="opGetMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricStream"></a>

```typescript
public readonly opGetMetricStream: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricStream API call.

---

##### `opGetMetricWidgetImage`<sup>Required</sup> <a name="opGetMetricWidgetImage" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetMetricWidgetImage"></a>

```typescript
public readonly opGetMetricWidgetImage: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricWidgetImage API call.

---

##### `opGetOTelEnrichment`<sup>Required</sup> <a name="opGetOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opGetOTelEnrichment"></a>

```typescript
public readonly opGetOTelEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the GetOTelEnrichment API call.

---

##### `opSetAlarmState`<sup>Required</sup> <a name="opSetAlarmState" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.opSetAlarmState"></a>

```typescript
public readonly opSetAlarmState: string[];
```

- *Type:* string[]

IAM actions required for the SetAlarmState API call.

---

##### `PutAlarmMuteRule`<sup>Required</sup> <a name="PutAlarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAlarmMuteRule"></a>

```typescript
public readonly PutAlarmMuteRule: string[];
```

- *Type:* string[]

IAM actions required for the PutAlarmMuteRule API call.

---

##### `PutAnomalyDetector`<sup>Required</sup> <a name="PutAnomalyDetector" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutAnomalyDetector"></a>

```typescript
public readonly PutAnomalyDetector: string[];
```

- *Type:* string[]

IAM actions required for the PutAnomalyDetector API call.

---

##### `PutCompositeAlarm`<sup>Required</sup> <a name="PutCompositeAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutCompositeAlarm"></a>

```typescript
public readonly PutCompositeAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutCompositeAlarm API call.

---

##### `PutDashboard`<sup>Required</sup> <a name="PutDashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutDashboard"></a>

```typescript
public readonly PutDashboard: string[];
```

- *Type:* string[]

IAM actions required for the PutDashboard API call.

---

##### `PutInsightRule`<sup>Required</sup> <a name="PutInsightRule" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutInsightRule"></a>

```typescript
public readonly PutInsightRule: string[];
```

- *Type:* string[]

IAM actions required for the PutInsightRule API call.

---

##### `PutLogAlarm`<sup>Required</sup> <a name="PutLogAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutLogAlarm"></a>

```typescript
public readonly PutLogAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutLogAlarm API call.

---

##### `PutManagedInsightRules`<sup>Required</sup> <a name="PutManagedInsightRules" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutManagedInsightRules"></a>

```typescript
public readonly PutManagedInsightRules: string[];
```

- *Type:* string[]

IAM actions required for the PutManagedInsightRules API call.

---

##### `PutMetricAlarm`<sup>Required</sup> <a name="PutMetricAlarm" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricAlarm"></a>

```typescript
public readonly PutMetricAlarm: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricAlarm API call.

---

##### `PutMetricData`<sup>Required</sup> <a name="PutMetricData" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricData"></a>

```typescript
public readonly PutMetricData: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricData API call.

---

##### `PutMetricStream`<sup>Required</sup> <a name="PutMetricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.PutMetricStream"></a>

```typescript
public readonly PutMetricStream: string[];
```

- *Type:* string[]

IAM actions required for the PutMetricStream API call.

---

##### `StartMetricStreams`<sup>Required</sup> <a name="StartMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartMetricStreams"></a>

```typescript
public readonly StartMetricStreams: string[];
```

- *Type:* string[]

IAM actions required for the StartMetricStreams API call.

---

##### `StartOTelEnrichment`<sup>Required</sup> <a name="StartOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StartOTelEnrichment"></a>

```typescript
public readonly StartOTelEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StartOTelEnrichment API call.

---

##### `StopMetricStreams`<sup>Required</sup> <a name="StopMetricStreams" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopMetricStreams"></a>

```typescript
public readonly StopMetricStreams: string[];
```

- *Type:* string[]

IAM actions required for the StopMetricStreams API call.

---

##### `StopOTelEnrichment`<sup>Required</sup> <a name="StopOTelEnrichment" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.StopOTelEnrichment"></a>

```typescript
public readonly StopOTelEnrichment: string[];
```

- *Type:* string[]

IAM actions required for the StopOTelEnrichment API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloudwatch.CloudWatchOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### CloudWatchResources <a name="CloudWatchResources" id="@cdk_utils/iam.cloudwatch.CloudWatchResources"></a>

ARN builders, validators, and parsers for cloudwatch resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.Initializer"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

new cloudwatch.CloudWatchResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.alarm">alarm</a></code> | Builds an ARN for the alarm resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.alarmMuteRule">alarmMuteRule</a></code> | Builds an ARN for the alarm-mute-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.dataset">dataset</a></code> | Builds an ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.insightRule">insightRule</a></code> | Builds an ARN for the insight-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmArn">isValidAlarmArn</a></code> | Validates whether a string is a valid ARN for the alarm resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn">isValidAlarmMuteRuleArn</a></code> | Validates whether a string is a valid ARN for the alarm-mute-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDatasetArn">isValidDatasetArn</a></code> | Validates whether a string is a valid ARN for the dataset resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidInsightRuleArn">isValidInsightRuleArn</a></code> | Validates whether a string is a valid ARN for the insight-rule resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidMetricStreamArn">isValidMetricStreamArn</a></code> | Validates whether a string is a valid ARN for the metric-stream resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidServiceArn">isValidServiceArn</a></code> | Validates whether a string is a valid ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSloArn">isValidSloArn</a></code> | Validates whether a string is a valid ARN for the slo resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.metricStream">metricStream</a></code> | Builds an ARN for the metric-stream resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmArn">parseAlarmArn</a></code> | Parses a alarm ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn">parseAlarmMuteRuleArn</a></code> | Parses a alarm-mute-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDatasetArn">parseDatasetArn</a></code> | Parses a dataset ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseInsightRuleArn">parseInsightRuleArn</a></code> | Parses a insight-rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseMetricStreamArn">parseMetricStreamArn</a></code> | Parses a metric-stream ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseServiceArn">parseServiceArn</a></code> | Parses a service ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSloArn">parseSloArn</a></code> | Parses a slo ARN into its components. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.service">service</a></code> | Builds an ARN for the service resource. |
| <code><a href="#@cdk_utils/iam.cloudwatch.CloudWatchResources.slo">slo</a></code> | Builds an ARN for the slo resource. |

---

##### `alarm` <a name="alarm" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarm"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.alarm(props: CloudWatchAlarmArnProps)
```

Builds an ARN for the alarm resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarm.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmArnProps">CloudWatchAlarmArnProps</a>

---

##### `alarmMuteRule` <a name="alarmMuteRule" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarmMuteRule"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.alarmMuteRule(props: CloudWatchAlarmMuteRuleArnProps)
```

Builds an ARN for the alarm-mute-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.alarmMuteRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchAlarmMuteRuleArnProps">CloudWatchAlarmMuteRuleArnProps</a>

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dashboard"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.dashboard(props: CloudWatchDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchDashboardArnProps">CloudWatchDashboardArnProps</a>

---

##### `dataset` <a name="dataset" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dataset"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.dataset(props: CloudWatchDatasetArnProps)
```

Builds an ARN for the dataset resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.dataset.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchDatasetArnProps">CloudWatchDatasetArnProps</a>

---

##### `insightRule` <a name="insightRule" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.insightRule"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.insightRule(props: CloudWatchInsightRuleArnProps)
```

Builds an ARN for the insight-rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.insightRule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchInsightRuleArnProps">CloudWatchInsightRuleArnProps</a>

---

##### `isValidAlarmArn` <a name="isValidAlarmArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAlarmArn(arn: string)
```

Validates whether a string is a valid ARN for the alarm resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAlarmMuteRuleArn` <a name="isValidAlarmMuteRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the alarm-mute-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidAlarmMuteRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDashboardArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDatasetArn` <a name="isValidDatasetArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDatasetArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidDatasetArn(arn: string)
```

Validates whether a string is a valid ARN for the dataset resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInsightRuleArn` <a name="isValidInsightRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidInsightRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidInsightRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the insight-rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidInsightRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMetricStreamArn` <a name="isValidMetricStreamArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidMetricStreamArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidMetricStreamArn(arn: string)
```

Validates whether a string is a valid ARN for the metric-stream resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidMetricStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidServiceArn` <a name="isValidServiceArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidServiceArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidServiceArn(arn: string)
```

Validates whether a string is a valid ARN for the service resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSloArn` <a name="isValidSloArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSloArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.isValidSloArn(arn: string)
```

Validates whether a string is a valid ARN for the slo resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.isValidSloArn.parameter.arn"></a>

- *Type:* string

---

##### `metricStream` <a name="metricStream" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.metricStream"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.metricStream(props: CloudWatchMetricStreamArnProps)
```

Builds an ARN for the metric-stream resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.metricStream.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchMetricStreamArnProps">CloudWatchMetricStreamArnProps</a>

---

##### `parseAlarmArn` <a name="parseAlarmArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAlarmArn(arn: string)
```

Parses a alarm ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAlarmMuteRuleArn` <a name="parseAlarmMuteRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn(arn: string)
```

Parses a alarm-mute-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseAlarmMuteRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDashboardArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDatasetArn` <a name="parseDatasetArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDatasetArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseDatasetArn(arn: string)
```

Parses a dataset ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseDatasetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInsightRuleArn` <a name="parseInsightRuleArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseInsightRuleArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseInsightRuleArn(arn: string)
```

Parses a insight-rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseInsightRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMetricStreamArn` <a name="parseMetricStreamArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseMetricStreamArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseMetricStreamArn(arn: string)
```

Parses a metric-stream ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseMetricStreamArn.parameter.arn"></a>

- *Type:* string

---

##### `parseServiceArn` <a name="parseServiceArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseServiceArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseServiceArn(arn: string)
```

Parses a service ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseServiceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSloArn` <a name="parseSloArn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSloArn"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.parseSloArn(arn: string)
```

Parses a slo ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.parseSloArn.parameter.arn"></a>

- *Type:* string

---

##### `service` <a name="service" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.service"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.service(props: CloudWatchServiceArnProps)
```

Builds an ARN for the service resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.service.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchServiceArnProps">CloudWatchServiceArnProps</a>

---

##### `slo` <a name="slo" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.slo"></a>

```typescript
import { cloudwatch } from '@cdk_utils/iam'

cloudwatch.CloudWatchResources.slo(props: CloudWatchSloArnProps)
```

Builds an ARN for the slo resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloudwatch.CloudWatchResources.slo.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloudwatch.CloudWatchSloArnProps">CloudWatchSloArnProps</a>

---




