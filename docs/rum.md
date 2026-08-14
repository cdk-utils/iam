# `rum` Submodule <a name="`rum` Submodule" id="@cdk_utils/iam.rum"></a>


## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorResourceArnComponents <a name="RumAppMonitorResourceArnComponents" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents"></a>

Parsed components of a AppMonitorResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.Initializer"></a>

```typescript
import { rum } from '@cdk_utils/iam'

const rumAppMonitorResourceArnComponents: rum.RumAppMonitorResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### RumAppMonitorResourceArnProps <a name="RumAppMonitorResourceArnProps" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnProps"></a>

Properties for building a AppMonitorResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.Initializer"></a>

```typescript
import { rum } from '@cdk_utils/iam'

const rumAppMonitorResourceArnProps: rum.RumAppMonitorResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rum.RumAppMonitorResourceArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RumActions <a name="RumActions" id="@cdk_utils/iam.rum.RumActions"></a>

IAM action constants for the rum service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rum.RumActions.Initializer"></a>

```typescript
import { rum } from '@cdk_utils/iam'

new rum.RumActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.actionGetAppMonitor">actionGetAppMonitor</a></code> | <code>string</code> | [Read] rum:GetAppMonitor. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.actionGetAppMonitorData">actionGetAppMonitorData</a></code> | <code>string</code> | [Read] rum:GetAppMonitorData. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] rum:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.BatchCreateRumMetricDefinitions">BatchCreateRumMetricDefinitions</a></code> | <code>string</code> | [Write] rum:BatchCreateRumMetricDefinitions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.BatchDeleteRumMetricDefinitions">BatchDeleteRumMetricDefinitions</a></code> | <code>string</code> | [Write] rum:BatchDeleteRumMetricDefinitions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.BatchGetRumMetricDefinitions">BatchGetRumMetricDefinitions</a></code> | <code>string</code> | [Read] rum:BatchGetRumMetricDefinitions. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.CreateAppMonitor">CreateAppMonitor</a></code> | <code>string</code> | [Write] rum:CreateAppMonitor. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.DeleteAppMonitor">DeleteAppMonitor</a></code> | <code>string</code> | [Write] rum:DeleteAppMonitor. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [Write] rum:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.DeleteRumMetricsDestination">DeleteRumMetricsDestination</a></code> | <code>string</code> | [Write] rum:DeleteRumMetricsDestination. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.ListAppMonitors">ListAppMonitors</a></code> | <code>string</code> | [List] rum:ListAppMonitors. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.ListRumMetricsDestinations">ListRumMetricsDestinations</a></code> | <code>string</code> | [Read] rum:ListRumMetricsDestinations. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] rum:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [Write] rum:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.PutRumEvents">PutRumEvents</a></code> | <code>string</code> | [Write] rum:PutRumEvents. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.PutRumMetricsDestination">PutRumMetricsDestination</a></code> | <code>string</code> | [Write] rum:PutRumMetricsDestination. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] rum:TagResource. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] rum:UntagResource. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.UpdateAppMonitor">UpdateAppMonitor</a></code> | <code>string</code> | [Write] rum:UpdateAppMonitor. |
| <code><a href="#@cdk_utils/iam.rum.RumActions.property.UpdateRumMetricDefinition">UpdateRumMetricDefinition</a></code> | <code>string</code> | [Write] rum:UpdateRumMetricDefinition. |

---

##### `actionGetAppMonitor`<sup>Required</sup> <a name="actionGetAppMonitor" id="@cdk_utils/iam.rum.RumActions.property.actionGetAppMonitor"></a>

```typescript
public readonly actionGetAppMonitor: string;
```

- *Type:* string

[Read] rum:GetAppMonitor.

---

##### `actionGetAppMonitorData`<sup>Required</sup> <a name="actionGetAppMonitorData" id="@cdk_utils/iam.rum.RumActions.property.actionGetAppMonitorData"></a>

```typescript
public readonly actionGetAppMonitorData: string;
```

- *Type:* string

[Read] rum:GetAppMonitorData.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.rum.RumActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] rum:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rum.RumActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rum.RumActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rum.RumActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rum.RumActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rum.RumActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchCreateRumMetricDefinitions`<sup>Required</sup> <a name="BatchCreateRumMetricDefinitions" id="@cdk_utils/iam.rum.RumActions.property.BatchCreateRumMetricDefinitions"></a>

```typescript
public readonly BatchCreateRumMetricDefinitions: string;
```

- *Type:* string

[Write] rum:BatchCreateRumMetricDefinitions.

---

##### `BatchDeleteRumMetricDefinitions`<sup>Required</sup> <a name="BatchDeleteRumMetricDefinitions" id="@cdk_utils/iam.rum.RumActions.property.BatchDeleteRumMetricDefinitions"></a>

```typescript
public readonly BatchDeleteRumMetricDefinitions: string;
```

- *Type:* string

[Write] rum:BatchDeleteRumMetricDefinitions.

---

##### `BatchGetRumMetricDefinitions`<sup>Required</sup> <a name="BatchGetRumMetricDefinitions" id="@cdk_utils/iam.rum.RumActions.property.BatchGetRumMetricDefinitions"></a>

```typescript
public readonly BatchGetRumMetricDefinitions: string;
```

- *Type:* string

[Read] rum:BatchGetRumMetricDefinitions.

---

##### `CreateAppMonitor`<sup>Required</sup> <a name="CreateAppMonitor" id="@cdk_utils/iam.rum.RumActions.property.CreateAppMonitor"></a>

```typescript
public readonly CreateAppMonitor: string;
```

- *Type:* string

[Write] rum:CreateAppMonitor.

---

##### `DeleteAppMonitor`<sup>Required</sup> <a name="DeleteAppMonitor" id="@cdk_utils/iam.rum.RumActions.property.DeleteAppMonitor"></a>

```typescript
public readonly DeleteAppMonitor: string;
```

- *Type:* string

[Write] rum:DeleteAppMonitor.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.rum.RumActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[Write] rum:DeleteResourcePolicy.

---

##### `DeleteRumMetricsDestination`<sup>Required</sup> <a name="DeleteRumMetricsDestination" id="@cdk_utils/iam.rum.RumActions.property.DeleteRumMetricsDestination"></a>

```typescript
public readonly DeleteRumMetricsDestination: string;
```

- *Type:* string

[Write] rum:DeleteRumMetricsDestination.

---

##### `ListAppMonitors`<sup>Required</sup> <a name="ListAppMonitors" id="@cdk_utils/iam.rum.RumActions.property.ListAppMonitors"></a>

```typescript
public readonly ListAppMonitors: string;
```

- *Type:* string

[List] rum:ListAppMonitors.

---

##### `ListRumMetricsDestinations`<sup>Required</sup> <a name="ListRumMetricsDestinations" id="@cdk_utils/iam.rum.RumActions.property.ListRumMetricsDestinations"></a>

```typescript
public readonly ListRumMetricsDestinations: string;
```

- *Type:* string

[Read] rum:ListRumMetricsDestinations.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rum.RumActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] rum:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.rum.RumActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[Write] rum:PutResourcePolicy.

---

##### `PutRumEvents`<sup>Required</sup> <a name="PutRumEvents" id="@cdk_utils/iam.rum.RumActions.property.PutRumEvents"></a>

```typescript
public readonly PutRumEvents: string;
```

- *Type:* string

[Write] rum:PutRumEvents.

---

##### `PutRumMetricsDestination`<sup>Required</sup> <a name="PutRumMetricsDestination" id="@cdk_utils/iam.rum.RumActions.property.PutRumMetricsDestination"></a>

```typescript
public readonly PutRumMetricsDestination: string;
```

- *Type:* string

[Write] rum:PutRumMetricsDestination.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rum.RumActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rum.RumActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] rum:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rum.RumActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] rum:UntagResource.

---

##### `UpdateAppMonitor`<sup>Required</sup> <a name="UpdateAppMonitor" id="@cdk_utils/iam.rum.RumActions.property.UpdateAppMonitor"></a>

```typescript
public readonly UpdateAppMonitor: string;
```

- *Type:* string

[Write] rum:UpdateAppMonitor.

---

##### `UpdateRumMetricDefinition`<sup>Required</sup> <a name="UpdateRumMetricDefinition" id="@cdk_utils/iam.rum.RumActions.property.UpdateRumMetricDefinition"></a>

```typescript
public readonly UpdateRumMetricDefinition: string;
```

- *Type:* string

[Write] rum:UpdateRumMetricDefinition.

---

### RumConditions <a name="RumConditions" id="@cdk_utils/iam.rum.RumConditions"></a>

Condition key constants and builders for rum.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rum.RumConditions.Initializer"></a>

```typescript
import { rum } from '@cdk_utils/iam'

new rum.RumConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.rum.RumConditions.requestTag"></a>

```typescript
import { rum } from '@cdk_utils/iam'

rum.RumConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rum.RumConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rum.RumConditions.resourceTag"></a>

```typescript
import { rum } from '@cdk_utils/iam'

rum.RumConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rum.RumConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rum.RumConditions.tagKeys"></a>

```typescript
import { rum } from '@cdk_utils/iam'

rum.RumConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rum.RumConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.property.CreateAppMonitorConditionKeys">CreateAppMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAppMonitor action. |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.rum.RumConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.rum.RumConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rum.RumConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rum.RumConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAppMonitorConditionKeys`<sup>Required</sup> <a name="CreateAppMonitorConditionKeys" id="@cdk_utils/iam.rum.RumConditions.property.CreateAppMonitorConditionKeys"></a>

```typescript
public readonly CreateAppMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAppMonitor action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.rum.RumConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.rum.RumConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### RumOperations <a name="RumOperations" id="@cdk_utils/iam.rum.RumOperations"></a>

API operation to required IAM actions mapping for rum.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rum.RumOperations.Initializer"></a>

```typescript
import { rum } from '@cdk_utils/iam'

new rum.RumOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.BatchCreateRumMetricDefinitions">BatchCreateRumMetricDefinitions</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateRumMetricDefinitions API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.BatchDeleteRumMetricDefinitions">BatchDeleteRumMetricDefinitions</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteRumMetricDefinitions API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.BatchGetRumMetricDefinitions">BatchGetRumMetricDefinitions</a></code> | <code>string[]</code> | IAM actions required for the BatchGetRumMetricDefinitions API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.CreateAppMonitor">CreateAppMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateAppMonitor API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.DeleteAppMonitor">DeleteAppMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteAppMonitor API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.DeleteRumMetricsDestination">DeleteRumMetricsDestination</a></code> | <code>string[]</code> | IAM actions required for the DeleteRumMetricsDestination API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.ListAppMonitors">ListAppMonitors</a></code> | <code>string[]</code> | IAM actions required for the ListAppMonitors API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.ListRumMetricsDestinations">ListRumMetricsDestinations</a></code> | <code>string[]</code> | IAM actions required for the ListRumMetricsDestinations API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.opGetAppMonitor">opGetAppMonitor</a></code> | <code>string[]</code> | IAM actions required for the GetAppMonitor API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.opGetAppMonitorData">opGetAppMonitorData</a></code> | <code>string[]</code> | IAM actions required for the GetAppMonitorData API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.PutRumEvents">PutRumEvents</a></code> | <code>string[]</code> | IAM actions required for the PutRumEvents API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.PutRumMetricsDestination">PutRumMetricsDestination</a></code> | <code>string[]</code> | IAM actions required for the PutRumMetricsDestination API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.UpdateAppMonitor">UpdateAppMonitor</a></code> | <code>string[]</code> | IAM actions required for the UpdateAppMonitor API call. |
| <code><a href="#@cdk_utils/iam.rum.RumOperations.property.UpdateRumMetricDefinition">UpdateRumMetricDefinition</a></code> | <code>string[]</code> | IAM actions required for the UpdateRumMetricDefinition API call. |

---

##### `BatchCreateRumMetricDefinitions`<sup>Required</sup> <a name="BatchCreateRumMetricDefinitions" id="@cdk_utils/iam.rum.RumOperations.property.BatchCreateRumMetricDefinitions"></a>

```typescript
public readonly BatchCreateRumMetricDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateRumMetricDefinitions API call.

---

##### `BatchDeleteRumMetricDefinitions`<sup>Required</sup> <a name="BatchDeleteRumMetricDefinitions" id="@cdk_utils/iam.rum.RumOperations.property.BatchDeleteRumMetricDefinitions"></a>

```typescript
public readonly BatchDeleteRumMetricDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteRumMetricDefinitions API call.

---

##### `BatchGetRumMetricDefinitions`<sup>Required</sup> <a name="BatchGetRumMetricDefinitions" id="@cdk_utils/iam.rum.RumOperations.property.BatchGetRumMetricDefinitions"></a>

```typescript
public readonly BatchGetRumMetricDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetRumMetricDefinitions API call.

---

##### `CreateAppMonitor`<sup>Required</sup> <a name="CreateAppMonitor" id="@cdk_utils/iam.rum.RumOperations.property.CreateAppMonitor"></a>

```typescript
public readonly CreateAppMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateAppMonitor API call.

---

##### `DeleteAppMonitor`<sup>Required</sup> <a name="DeleteAppMonitor" id="@cdk_utils/iam.rum.RumOperations.property.DeleteAppMonitor"></a>

```typescript
public readonly DeleteAppMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAppMonitor API call.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.rum.RumOperations.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePolicy API call.

---

##### `DeleteRumMetricsDestination`<sup>Required</sup> <a name="DeleteRumMetricsDestination" id="@cdk_utils/iam.rum.RumOperations.property.DeleteRumMetricsDestination"></a>

```typescript
public readonly DeleteRumMetricsDestination: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRumMetricsDestination API call.

---

##### `ListAppMonitors`<sup>Required</sup> <a name="ListAppMonitors" id="@cdk_utils/iam.rum.RumOperations.property.ListAppMonitors"></a>

```typescript
public readonly ListAppMonitors: string[];
```

- *Type:* string[]

IAM actions required for the ListAppMonitors API call.

---

##### `ListRumMetricsDestinations`<sup>Required</sup> <a name="ListRumMetricsDestinations" id="@cdk_utils/iam.rum.RumOperations.property.ListRumMetricsDestinations"></a>

```typescript
public readonly ListRumMetricsDestinations: string[];
```

- *Type:* string[]

IAM actions required for the ListRumMetricsDestinations API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rum.RumOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAppMonitor`<sup>Required</sup> <a name="opGetAppMonitor" id="@cdk_utils/iam.rum.RumOperations.property.opGetAppMonitor"></a>

```typescript
public readonly opGetAppMonitor: string[];
```

- *Type:* string[]

IAM actions required for the GetAppMonitor API call.

---

##### `opGetAppMonitorData`<sup>Required</sup> <a name="opGetAppMonitorData" id="@cdk_utils/iam.rum.RumOperations.property.opGetAppMonitorData"></a>

```typescript
public readonly opGetAppMonitorData: string[];
```

- *Type:* string[]

IAM actions required for the GetAppMonitorData API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.rum.RumOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.rum.RumOperations.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePolicy API call.

---

##### `PutRumEvents`<sup>Required</sup> <a name="PutRumEvents" id="@cdk_utils/iam.rum.RumOperations.property.PutRumEvents"></a>

```typescript
public readonly PutRumEvents: string[];
```

- *Type:* string[]

IAM actions required for the PutRumEvents API call.

---

##### `PutRumMetricsDestination`<sup>Required</sup> <a name="PutRumMetricsDestination" id="@cdk_utils/iam.rum.RumOperations.property.PutRumMetricsDestination"></a>

```typescript
public readonly PutRumMetricsDestination: string[];
```

- *Type:* string[]

IAM actions required for the PutRumMetricsDestination API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rum.RumOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rum.RumOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAppMonitor`<sup>Required</sup> <a name="UpdateAppMonitor" id="@cdk_utils/iam.rum.RumOperations.property.UpdateAppMonitor"></a>

```typescript
public readonly UpdateAppMonitor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAppMonitor API call.

---

##### `UpdateRumMetricDefinition`<sup>Required</sup> <a name="UpdateRumMetricDefinition" id="@cdk_utils/iam.rum.RumOperations.property.UpdateRumMetricDefinition"></a>

```typescript
public readonly UpdateRumMetricDefinition: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRumMetricDefinition API call.

---

### RumResources <a name="RumResources" id="@cdk_utils/iam.rum.RumResources"></a>

ARN builders, validators, and parsers for rum resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rum.RumResources.Initializer"></a>

```typescript
import { rum } from '@cdk_utils/iam'

new rum.RumResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rum.RumResources.appMonitorResource">appMonitorResource</a></code> | Builds an ARN for the AppMonitorResource resource. |
| <code><a href="#@cdk_utils/iam.rum.RumResources.isValidAppMonitorResourceArn">isValidAppMonitorResourceArn</a></code> | Validates whether a string is a valid ARN for the AppMonitorResource resource. |
| <code><a href="#@cdk_utils/iam.rum.RumResources.parseAppMonitorResourceArn">parseAppMonitorResourceArn</a></code> | Parses a AppMonitorResource ARN into its components. |

---

##### `appMonitorResource` <a name="appMonitorResource" id="@cdk_utils/iam.rum.RumResources.appMonitorResource"></a>

```typescript
import { rum } from '@cdk_utils/iam'

rum.RumResources.appMonitorResource(props: RumAppMonitorResourceArnProps)
```

Builds an ARN for the AppMonitorResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rum.RumResources.appMonitorResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rum.RumAppMonitorResourceArnProps">RumAppMonitorResourceArnProps</a>

---

##### `isValidAppMonitorResourceArn` <a name="isValidAppMonitorResourceArn" id="@cdk_utils/iam.rum.RumResources.isValidAppMonitorResourceArn"></a>

```typescript
import { rum } from '@cdk_utils/iam'

rum.RumResources.isValidAppMonitorResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the AppMonitorResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rum.RumResources.isValidAppMonitorResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAppMonitorResourceArn` <a name="parseAppMonitorResourceArn" id="@cdk_utils/iam.rum.RumResources.parseAppMonitorResourceArn"></a>

```typescript
import { rum } from '@cdk_utils/iam'

rum.RumResources.parseAppMonitorResourceArn(arn: string)
```

Parses a AppMonitorResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rum.RumResources.parseAppMonitorResourceArn.parameter.arn"></a>

- *Type:* string

---




