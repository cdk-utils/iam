# `bcm_dashboards` Submodule <a name="`bcm_dashboards` Submodule" id="@cdk_utils/iam.bcm_dashboards"></a>


## Structs <a name="Structs" id="Structs"></a>

### BcmDashboardsDashboardArnComponents <a name="BcmDashboardsDashboardArnComponents" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents"></a>

Parsed components of a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

const bcmDashboardsDashboardArnComponents: bcm_dashboards.BcmDashboardsDashboardArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BcmDashboardsDashboardArnProps <a name="BcmDashboardsDashboardArnProps" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps"></a>

Properties for building a dashboard ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

const bcmDashboardsDashboardArnProps: bcm_dashboards.BcmDashboardsDashboardArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.property.dashboardName">dashboardName</a></code> | <code>string</code> | The DashboardName component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.property.dashboardName"></a>

```typescript
public readonly dashboardName: string;
```

- *Type:* string

The DashboardName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BcmDashboardsScheduledReportArnComponents <a name="BcmDashboardsScheduledReportArnComponents" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents"></a>

Parsed components of a scheduled-report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

const bcmDashboardsScheduledReportArnComponents: bcm_dashboards.BcmDashboardsScheduledReportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.property.scheduledReportName">scheduledReportName</a></code> | <code>string</code> | The ScheduledReportName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `scheduledReportName`<sup>Required</sup> <a name="scheduledReportName" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnComponents.property.scheduledReportName"></a>

```typescript
public readonly scheduledReportName: string;
```

- *Type:* string

The ScheduledReportName component.

---

### BcmDashboardsScheduledReportArnProps <a name="BcmDashboardsScheduledReportArnProps" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps"></a>

Properties for building a scheduled-report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

const bcmDashboardsScheduledReportArnProps: bcm_dashboards.BcmDashboardsScheduledReportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.property.scheduledReportName">scheduledReportName</a></code> | <code>string</code> | The ScheduledReportName component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `scheduledReportName`<sup>Required</sup> <a name="scheduledReportName" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.property.scheduledReportName"></a>

```typescript
public readonly scheduledReportName: string;
```

- *Type:* string

The ScheduledReportName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### BcmDashboardsActions <a name="BcmDashboardsActions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions"></a>

IAM action constants for the bcm-dashboards service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

new bcm_dashboards.BcmDashboardsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.actionGetDashboard">actionGetDashboard</a></code> | <code>string</code> | [Read] bcm-dashboards:GetDashboard. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] bcm-dashboards:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.actionGetScheduledReport">actionGetScheduledReport</a></code> | <code>string</code> | [Read] bcm-dashboards:GetScheduledReport. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.CreateDashboard">CreateDashboard</a></code> | <code>string</code> | [Write] bcm-dashboards:CreateDashboard. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.CreateScheduledReport">CreateScheduledReport</a></code> | <code>string</code> | [Write] bcm-dashboards:CreateScheduledReport. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string</code> | [Write] bcm-dashboards:DeleteDashboard. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.DeleteScheduledReport">DeleteScheduledReport</a></code> | <code>string</code> | [Write] bcm-dashboards:DeleteScheduledReport. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ExecuteScheduledReport">ExecuteScheduledReport</a></code> | <code>string</code> | [Write] bcm-dashboards:ExecuteScheduledReport. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ListDashboards">ListDashboards</a></code> | <code>string</code> | [Read] bcm-dashboards:ListDashboards. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ListScheduledReports">ListScheduledReports</a></code> | <code>string</code> | [List] bcm-dashboards:ListScheduledReports. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] bcm-dashboards:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bcm-dashboards:TagResource. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bcm-dashboards:UntagResource. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string</code> | [Write] bcm-dashboards:UpdateDashboard. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.UpdateScheduledReport">UpdateScheduledReport</a></code> | <code>string</code> | [Write] bcm-dashboards:UpdateScheduledReport. |

---

##### `actionGetDashboard`<sup>Required</sup> <a name="actionGetDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.actionGetDashboard"></a>

```typescript
public readonly actionGetDashboard: string;
```

- *Type:* string

[Read] bcm-dashboards:GetDashboard.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] bcm-dashboards:GetResourcePolicy.

---

##### `actionGetScheduledReport`<sup>Required</sup> <a name="actionGetScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.actionGetScheduledReport"></a>

```typescript
public readonly actionGetScheduledReport: string;
```

- *Type:* string

[Read] bcm-dashboards:GetScheduledReport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string;
```

- *Type:* string

[Write] bcm-dashboards:CreateDashboard.

---

##### `CreateScheduledReport`<sup>Required</sup> <a name="CreateScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.CreateScheduledReport"></a>

```typescript
public readonly CreateScheduledReport: string;
```

- *Type:* string

[Write] bcm-dashboards:CreateScheduledReport.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string;
```

- *Type:* string

[Write] bcm-dashboards:DeleteDashboard.

---

##### `DeleteScheduledReport`<sup>Required</sup> <a name="DeleteScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.DeleteScheduledReport"></a>

```typescript
public readonly DeleteScheduledReport: string;
```

- *Type:* string

[Write] bcm-dashboards:DeleteScheduledReport.

---

##### `ExecuteScheduledReport`<sup>Required</sup> <a name="ExecuteScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ExecuteScheduledReport"></a>

```typescript
public readonly ExecuteScheduledReport: string;
```

- *Type:* string

[Write] bcm-dashboards:ExecuteScheduledReport.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string;
```

- *Type:* string

[Read] bcm-dashboards:ListDashboards.

---

##### `ListScheduledReports`<sup>Required</sup> <a name="ListScheduledReports" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ListScheduledReports"></a>

```typescript
public readonly ListScheduledReports: string;
```

- *Type:* string

[List] bcm-dashboards:ListScheduledReports.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] bcm-dashboards:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bcm-dashboards:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bcm-dashboards:UntagResource.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string;
```

- *Type:* string

[Write] bcm-dashboards:UpdateDashboard.

---

##### `UpdateScheduledReport`<sup>Required</sup> <a name="UpdateScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsActions.property.UpdateScheduledReport"></a>

```typescript
public readonly UpdateScheduledReport: string;
```

- *Type:* string

[Write] bcm-dashboards:UpdateScheduledReport.

---

### BcmDashboardsConditions <a name="BcmDashboardsConditions" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions"></a>

Condition key constants and builders for bcm-dashboards.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

new bcm_dashboards.BcmDashboardsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.requestTag"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.resourceTag"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.tagKeys"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.CreateScheduledReportConditionKeys">CreateScheduledReportConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScheduledReport action. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateScheduledReportConditionKeys`<sup>Required</sup> <a name="CreateScheduledReportConditionKeys" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.CreateScheduledReportConditionKeys"></a>

```typescript
public readonly CreateScheduledReportConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScheduledReport action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BcmDashboardsOperations <a name="BcmDashboardsOperations" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations"></a>

API operation to required IAM actions mapping for bcm-dashboards.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

new bcm_dashboards.BcmDashboardsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.CreateDashboard">CreateDashboard</a></code> | <code>string[]</code> | IAM actions required for the CreateDashboard API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.CreateScheduledReport">CreateScheduledReport</a></code> | <code>string[]</code> | IAM actions required for the CreateScheduledReport API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.DeleteDashboard">DeleteDashboard</a></code> | <code>string[]</code> | IAM actions required for the DeleteDashboard API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.DeleteScheduledReport">DeleteScheduledReport</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledReport API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ExecuteScheduledReport">ExecuteScheduledReport</a></code> | <code>string[]</code> | IAM actions required for the ExecuteScheduledReport API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ListDashboards">ListDashboards</a></code> | <code>string[]</code> | IAM actions required for the ListDashboards API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ListScheduledReports">ListScheduledReports</a></code> | <code>string[]</code> | IAM actions required for the ListScheduledReports API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.opGetDashboard">opGetDashboard</a></code> | <code>string[]</code> | IAM actions required for the GetDashboard API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.opGetScheduledReport">opGetScheduledReport</a></code> | <code>string[]</code> | IAM actions required for the GetScheduledReport API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.UpdateDashboard">UpdateDashboard</a></code> | <code>string[]</code> | IAM actions required for the UpdateDashboard API call. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.UpdateScheduledReport">UpdateScheduledReport</a></code> | <code>string[]</code> | IAM actions required for the UpdateScheduledReport API call. |

---

##### `CreateDashboard`<sup>Required</sup> <a name="CreateDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.CreateDashboard"></a>

```typescript
public readonly CreateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the CreateDashboard API call.

---

##### `CreateScheduledReport`<sup>Required</sup> <a name="CreateScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.CreateScheduledReport"></a>

```typescript
public readonly CreateScheduledReport: string[];
```

- *Type:* string[]

IAM actions required for the CreateScheduledReport API call.

---

##### `DeleteDashboard`<sup>Required</sup> <a name="DeleteDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.DeleteDashboard"></a>

```typescript
public readonly DeleteDashboard: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDashboard API call.

---

##### `DeleteScheduledReport`<sup>Required</sup> <a name="DeleteScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.DeleteScheduledReport"></a>

```typescript
public readonly DeleteScheduledReport: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledReport API call.

---

##### `ExecuteScheduledReport`<sup>Required</sup> <a name="ExecuteScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ExecuteScheduledReport"></a>

```typescript
public readonly ExecuteScheduledReport: string[];
```

- *Type:* string[]

IAM actions required for the ExecuteScheduledReport API call.

---

##### `ListDashboards`<sup>Required</sup> <a name="ListDashboards" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ListDashboards"></a>

```typescript
public readonly ListDashboards: string[];
```

- *Type:* string[]

IAM actions required for the ListDashboards API call.

---

##### `ListScheduledReports`<sup>Required</sup> <a name="ListScheduledReports" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ListScheduledReports"></a>

```typescript
public readonly ListScheduledReports: string[];
```

- *Type:* string[]

IAM actions required for the ListScheduledReports API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetDashboard`<sup>Required</sup> <a name="opGetDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.opGetDashboard"></a>

```typescript
public readonly opGetDashboard: string[];
```

- *Type:* string[]

IAM actions required for the GetDashboard API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `opGetScheduledReport`<sup>Required</sup> <a name="opGetScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.opGetScheduledReport"></a>

```typescript
public readonly opGetScheduledReport: string[];
```

- *Type:* string[]

IAM actions required for the GetScheduledReport API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDashboard`<sup>Required</sup> <a name="UpdateDashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.UpdateDashboard"></a>

```typescript
public readonly UpdateDashboard: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDashboard API call.

---

##### `UpdateScheduledReport`<sup>Required</sup> <a name="UpdateScheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsOperations.property.UpdateScheduledReport"></a>

```typescript
public readonly UpdateScheduledReport: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScheduledReport API call.

---

### BcmDashboardsResources <a name="BcmDashboardsResources" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources"></a>

ARN builders, validators, and parsers for bcm-dashboards resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.Initializer"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

new bcm_dashboards.BcmDashboardsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.dashboard">dashboard</a></code> | Builds an ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.isValidDashboardArn">isValidDashboardArn</a></code> | Validates whether a string is a valid ARN for the dashboard resource. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.isValidScheduledReportArn">isValidScheduledReportArn</a></code> | Validates whether a string is a valid ARN for the scheduled-report resource. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.parseDashboardArn">parseDashboardArn</a></code> | Parses a dashboard ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.parseScheduledReportArn">parseScheduledReportArn</a></code> | Parses a scheduled-report ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.scheduledReport">scheduledReport</a></code> | Builds an ARN for the scheduled-report resource. |

---

##### `dashboard` <a name="dashboard" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.dashboard"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsResources.dashboard(props: BcmDashboardsDashboardArnProps)
```

Builds an ARN for the dashboard resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.dashboard.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsDashboardArnProps">BcmDashboardsDashboardArnProps</a>

---

##### `isValidDashboardArn` <a name="isValidDashboardArn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.isValidDashboardArn"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsResources.isValidDashboardArn(arn: string)
```

Validates whether a string is a valid ARN for the dashboard resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.isValidDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScheduledReportArn` <a name="isValidScheduledReportArn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.isValidScheduledReportArn"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsResources.isValidScheduledReportArn(arn: string)
```

Validates whether a string is a valid ARN for the scheduled-report resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.isValidScheduledReportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDashboardArn` <a name="parseDashboardArn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.parseDashboardArn"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsResources.parseDashboardArn(arn: string)
```

Parses a dashboard ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.parseDashboardArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScheduledReportArn` <a name="parseScheduledReportArn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.parseScheduledReportArn"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsResources.parseScheduledReportArn(arn: string)
```

Parses a scheduled-report ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.parseScheduledReportArn.parameter.arn"></a>

- *Type:* string

---

##### `scheduledReport` <a name="scheduledReport" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.scheduledReport"></a>

```typescript
import { bcm_dashboards } from '@cdk_utils/iam'

bcm_dashboards.BcmDashboardsResources.scheduledReport(props: BcmDashboardsScheduledReportArnProps)
```

Builds an ARN for the scheduled-report resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_dashboards.BcmDashboardsResources.scheduledReport.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_dashboards.BcmDashboardsScheduledReportArnProps">BcmDashboardsScheduledReportArnProps</a>

---




