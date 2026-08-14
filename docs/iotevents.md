# `iotevents` Submodule <a name="`iotevents` Submodule" id="@cdk_utils/iam.iotevents"></a>


## Structs <a name="Structs" id="Structs"></a>

### IoteventsAlarmModelArnComponents <a name="IoteventsAlarmModelArnComponents" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents"></a>

Parsed components of a alarmModel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

const ioteventsAlarmModelArnComponents: iotevents.IoteventsAlarmModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.alarmModelName">alarmModelName</a></code> | <code>string</code> | The AlarmModelName component. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `alarmModelName`<sup>Required</sup> <a name="alarmModelName" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.alarmModelName"></a>

```typescript
public readonly alarmModelName: string;
```

- *Type:* string

The AlarmModelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IoteventsAlarmModelArnProps <a name="IoteventsAlarmModelArnProps" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps"></a>

Properties for building a alarmModel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

const ioteventsAlarmModelArnProps: iotevents.IoteventsAlarmModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.alarmModelName">alarmModelName</a></code> | <code>string</code> | The AlarmModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `alarmModelName`<sup>Required</sup> <a name="alarmModelName" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.alarmModelName"></a>

```typescript
public readonly alarmModelName: string;
```

- *Type:* string

The AlarmModelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IoteventsDetectorModelArnComponents <a name="IoteventsDetectorModelArnComponents" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents"></a>

Parsed components of a detectorModel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

const ioteventsDetectorModelArnComponents: iotevents.IoteventsDetectorModelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.detectorModelName">detectorModelName</a></code> | <code>string</code> | The DetectorModelName component. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `detectorModelName`<sup>Required</sup> <a name="detectorModelName" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.detectorModelName"></a>

```typescript
public readonly detectorModelName: string;
```

- *Type:* string

The DetectorModelName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IoteventsDetectorModelArnProps <a name="IoteventsDetectorModelArnProps" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps"></a>

Properties for building a detectorModel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

const ioteventsDetectorModelArnProps: iotevents.IoteventsDetectorModelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.detectorModelName">detectorModelName</a></code> | <code>string</code> | The DetectorModelName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `detectorModelName`<sup>Required</sup> <a name="detectorModelName" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.detectorModelName"></a>

```typescript
public readonly detectorModelName: string;
```

- *Type:* string

The DetectorModelName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IoteventsInputArnComponents <a name="IoteventsInputArnComponents" id="@cdk_utils/iam.iotevents.IoteventsInputArnComponents"></a>

Parsed components of a input ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotevents.IoteventsInputArnComponents.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

const ioteventsInputArnComponents: iotevents.IoteventsInputArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.inputName">inputName</a></code> | <code>string</code> | The InputName component. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

The InputName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.iotevents.IoteventsInputArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### IoteventsInputArnProps <a name="IoteventsInputArnProps" id="@cdk_utils/iam.iotevents.IoteventsInputArnProps"></a>

Properties for building a input ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.iotevents.IoteventsInputArnProps.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

const ioteventsInputArnProps: iotevents.IoteventsInputArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.inputName">inputName</a></code> | <code>string</code> | The InputName component of the ARN. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

The InputName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.iotevents.IoteventsInputArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IoteventsActions <a name="IoteventsActions" id="@cdk_utils/iam.iotevents.IoteventsActions"></a>

IAM action constants for the iotevents service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotevents.IoteventsActions.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

new iotevents.IoteventsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.actionGetDetectorModelAnalysisResults">actionGetDetectorModelAnalysisResults</a></code> | <code>string</code> | [Read] iotevents:GetDetectorModelAnalysisResults. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchAcknowledgeAlarm">BatchAcknowledgeAlarm</a></code> | <code>string</code> | [Write] iotevents:BatchAcknowledgeAlarm. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchDeleteDetector">BatchDeleteDetector</a></code> | <code>string</code> | [Write] iotevents:BatchDeleteDetector. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchDisableAlarm">BatchDisableAlarm</a></code> | <code>string</code> | [Write] iotevents:BatchDisableAlarm. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchEnableAlarm">BatchEnableAlarm</a></code> | <code>string</code> | [Write] iotevents:BatchEnableAlarm. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchPutMessage">BatchPutMessage</a></code> | <code>string</code> | [Write] iotevents:BatchPutMessage. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchResetAlarm">BatchResetAlarm</a></code> | <code>string</code> | [Write] iotevents:BatchResetAlarm. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchSnoozeAlarm">BatchSnoozeAlarm</a></code> | <code>string</code> | [Write] iotevents:BatchSnoozeAlarm. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.BatchUpdateDetector">BatchUpdateDetector</a></code> | <code>string</code> | [Write] iotevents:BatchUpdateDetector. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.CreateAlarmModel">CreateAlarmModel</a></code> | <code>string</code> | [Write] iotevents:CreateAlarmModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.CreateDetectorModel">CreateDetectorModel</a></code> | <code>string</code> | [Write] iotevents:CreateDetectorModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.CreateInput">CreateInput</a></code> | <code>string</code> | [Write] iotevents:CreateInput. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DeleteAlarmModel">DeleteAlarmModel</a></code> | <code>string</code> | [Write] iotevents:DeleteAlarmModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DeleteDetectorModel">DeleteDetectorModel</a></code> | <code>string</code> | [Write] iotevents:DeleteDetectorModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DeleteInput">DeleteInput</a></code> | <code>string</code> | [Write] iotevents:DeleteInput. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeAlarm">DescribeAlarm</a></code> | <code>string</code> | [Read] iotevents:DescribeAlarm. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeAlarmModel">DescribeAlarmModel</a></code> | <code>string</code> | [Read] iotevents:DescribeAlarmModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeDetector">DescribeDetector</a></code> | <code>string</code> | [Read] iotevents:DescribeDetector. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeDetectorModel">DescribeDetectorModel</a></code> | <code>string</code> | [Read] iotevents:DescribeDetectorModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeDetectorModelAnalysis">DescribeDetectorModelAnalysis</a></code> | <code>string</code> | [Read] iotevents:DescribeDetectorModelAnalysis. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeInput">DescribeInput</a></code> | <code>string</code> | [Read] iotevents:DescribeInput. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeLoggingOptions">DescribeLoggingOptions</a></code> | <code>string</code> | [Read] iotevents:DescribeLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListAlarmModels">ListAlarmModels</a></code> | <code>string</code> | [List] iotevents:ListAlarmModels. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListAlarmModelVersions">ListAlarmModelVersions</a></code> | <code>string</code> | [List] iotevents:ListAlarmModelVersions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListAlarms">ListAlarms</a></code> | <code>string</code> | [List] iotevents:ListAlarms. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListDetectorModels">ListDetectorModels</a></code> | <code>string</code> | [List] iotevents:ListDetectorModels. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListDetectorModelVersions">ListDetectorModelVersions</a></code> | <code>string</code> | [List] iotevents:ListDetectorModelVersions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListDetectors">ListDetectors</a></code> | <code>string</code> | [List] iotevents:ListDetectors. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListInputRoutings">ListInputRoutings</a></code> | <code>string</code> | [List] iotevents:ListInputRoutings. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListInputs">ListInputs</a></code> | <code>string</code> | [List] iotevents:ListInputs. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] iotevents:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.PutLoggingOptions">PutLoggingOptions</a></code> | <code>string</code> | [Write] iotevents:PutLoggingOptions. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.StartDetectorModelAnalysis">StartDetectorModelAnalysis</a></code> | <code>string</code> | [Write] iotevents:StartDetectorModelAnalysis. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] iotevents:TagResource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] iotevents:UntagResource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateAlarmModel">UpdateAlarmModel</a></code> | <code>string</code> | [Write] iotevents:UpdateAlarmModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateDetectorModel">UpdateDetectorModel</a></code> | <code>string</code> | [Write] iotevents:UpdateDetectorModel. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateInput">UpdateInput</a></code> | <code>string</code> | [Write] iotevents:UpdateInput. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateInputRouting">UpdateInputRouting</a></code> | <code>string</code> | [Write] iotevents:UpdateInputRouting. |

---

##### `actionGetDetectorModelAnalysisResults`<sup>Required</sup> <a name="actionGetDetectorModelAnalysisResults" id="@cdk_utils/iam.iotevents.IoteventsActions.property.actionGetDetectorModelAnalysisResults"></a>

```typescript
public readonly actionGetDetectorModelAnalysisResults: string;
```

- *Type:* string

[Read] iotevents:GetDetectorModelAnalysisResults.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchAcknowledgeAlarm`<sup>Required</sup> <a name="BatchAcknowledgeAlarm" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchAcknowledgeAlarm"></a>

```typescript
public readonly BatchAcknowledgeAlarm: string;
```

- *Type:* string

[Write] iotevents:BatchAcknowledgeAlarm.

---

##### `BatchDeleteDetector`<sup>Required</sup> <a name="BatchDeleteDetector" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchDeleteDetector"></a>

```typescript
public readonly BatchDeleteDetector: string;
```

- *Type:* string

[Write] iotevents:BatchDeleteDetector.

---

##### `BatchDisableAlarm`<sup>Required</sup> <a name="BatchDisableAlarm" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchDisableAlarm"></a>

```typescript
public readonly BatchDisableAlarm: string;
```

- *Type:* string

[Write] iotevents:BatchDisableAlarm.

---

##### `BatchEnableAlarm`<sup>Required</sup> <a name="BatchEnableAlarm" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchEnableAlarm"></a>

```typescript
public readonly BatchEnableAlarm: string;
```

- *Type:* string

[Write] iotevents:BatchEnableAlarm.

---

##### `BatchPutMessage`<sup>Required</sup> <a name="BatchPutMessage" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchPutMessage"></a>

```typescript
public readonly BatchPutMessage: string;
```

- *Type:* string

[Write] iotevents:BatchPutMessage.

---

##### `BatchResetAlarm`<sup>Required</sup> <a name="BatchResetAlarm" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchResetAlarm"></a>

```typescript
public readonly BatchResetAlarm: string;
```

- *Type:* string

[Write] iotevents:BatchResetAlarm.

---

##### `BatchSnoozeAlarm`<sup>Required</sup> <a name="BatchSnoozeAlarm" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchSnoozeAlarm"></a>

```typescript
public readonly BatchSnoozeAlarm: string;
```

- *Type:* string

[Write] iotevents:BatchSnoozeAlarm.

---

##### `BatchUpdateDetector`<sup>Required</sup> <a name="BatchUpdateDetector" id="@cdk_utils/iam.iotevents.IoteventsActions.property.BatchUpdateDetector"></a>

```typescript
public readonly BatchUpdateDetector: string;
```

- *Type:* string

[Write] iotevents:BatchUpdateDetector.

---

##### `CreateAlarmModel`<sup>Required</sup> <a name="CreateAlarmModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.CreateAlarmModel"></a>

```typescript
public readonly CreateAlarmModel: string;
```

- *Type:* string

[Write] iotevents:CreateAlarmModel.

---

##### `CreateDetectorModel`<sup>Required</sup> <a name="CreateDetectorModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.CreateDetectorModel"></a>

```typescript
public readonly CreateDetectorModel: string;
```

- *Type:* string

[Write] iotevents:CreateDetectorModel.

---

##### `CreateInput`<sup>Required</sup> <a name="CreateInput" id="@cdk_utils/iam.iotevents.IoteventsActions.property.CreateInput"></a>

```typescript
public readonly CreateInput: string;
```

- *Type:* string

[Write] iotevents:CreateInput.

---

##### `DeleteAlarmModel`<sup>Required</sup> <a name="DeleteAlarmModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DeleteAlarmModel"></a>

```typescript
public readonly DeleteAlarmModel: string;
```

- *Type:* string

[Write] iotevents:DeleteAlarmModel.

---

##### `DeleteDetectorModel`<sup>Required</sup> <a name="DeleteDetectorModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DeleteDetectorModel"></a>

```typescript
public readonly DeleteDetectorModel: string;
```

- *Type:* string

[Write] iotevents:DeleteDetectorModel.

---

##### `DeleteInput`<sup>Required</sup> <a name="DeleteInput" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DeleteInput"></a>

```typescript
public readonly DeleteInput: string;
```

- *Type:* string

[Write] iotevents:DeleteInput.

---

##### `DescribeAlarm`<sup>Required</sup> <a name="DescribeAlarm" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeAlarm"></a>

```typescript
public readonly DescribeAlarm: string;
```

- *Type:* string

[Read] iotevents:DescribeAlarm.

---

##### `DescribeAlarmModel`<sup>Required</sup> <a name="DescribeAlarmModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeAlarmModel"></a>

```typescript
public readonly DescribeAlarmModel: string;
```

- *Type:* string

[Read] iotevents:DescribeAlarmModel.

---

##### `DescribeDetector`<sup>Required</sup> <a name="DescribeDetector" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeDetector"></a>

```typescript
public readonly DescribeDetector: string;
```

- *Type:* string

[Read] iotevents:DescribeDetector.

---

##### `DescribeDetectorModel`<sup>Required</sup> <a name="DescribeDetectorModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeDetectorModel"></a>

```typescript
public readonly DescribeDetectorModel: string;
```

- *Type:* string

[Read] iotevents:DescribeDetectorModel.

---

##### `DescribeDetectorModelAnalysis`<sup>Required</sup> <a name="DescribeDetectorModelAnalysis" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeDetectorModelAnalysis"></a>

```typescript
public readonly DescribeDetectorModelAnalysis: string;
```

- *Type:* string

[Read] iotevents:DescribeDetectorModelAnalysis.

---

##### `DescribeInput`<sup>Required</sup> <a name="DescribeInput" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeInput"></a>

```typescript
public readonly DescribeInput: string;
```

- *Type:* string

[Read] iotevents:DescribeInput.

---

##### `DescribeLoggingOptions`<sup>Required</sup> <a name="DescribeLoggingOptions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.DescribeLoggingOptions"></a>

```typescript
public readonly DescribeLoggingOptions: string;
```

- *Type:* string

[Read] iotevents:DescribeLoggingOptions.

---

##### `ListAlarmModels`<sup>Required</sup> <a name="ListAlarmModels" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListAlarmModels"></a>

```typescript
public readonly ListAlarmModels: string;
```

- *Type:* string

[List] iotevents:ListAlarmModels.

---

##### `ListAlarmModelVersions`<sup>Required</sup> <a name="ListAlarmModelVersions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListAlarmModelVersions"></a>

```typescript
public readonly ListAlarmModelVersions: string;
```

- *Type:* string

[List] iotevents:ListAlarmModelVersions.

---

##### `ListAlarms`<sup>Required</sup> <a name="ListAlarms" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListAlarms"></a>

```typescript
public readonly ListAlarms: string;
```

- *Type:* string

[List] iotevents:ListAlarms.

---

##### `ListDetectorModels`<sup>Required</sup> <a name="ListDetectorModels" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListDetectorModels"></a>

```typescript
public readonly ListDetectorModels: string;
```

- *Type:* string

[List] iotevents:ListDetectorModels.

---

##### `ListDetectorModelVersions`<sup>Required</sup> <a name="ListDetectorModelVersions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListDetectorModelVersions"></a>

```typescript
public readonly ListDetectorModelVersions: string;
```

- *Type:* string

[List] iotevents:ListDetectorModelVersions.

---

##### `ListDetectors`<sup>Required</sup> <a name="ListDetectors" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListDetectors"></a>

```typescript
public readonly ListDetectors: string;
```

- *Type:* string

[List] iotevents:ListDetectors.

---

##### `ListInputRoutings`<sup>Required</sup> <a name="ListInputRoutings" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListInputRoutings"></a>

```typescript
public readonly ListInputRoutings: string;
```

- *Type:* string

[List] iotevents:ListInputRoutings.

---

##### `ListInputs`<sup>Required</sup> <a name="ListInputs" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListInputs"></a>

```typescript
public readonly ListInputs: string;
```

- *Type:* string

[List] iotevents:ListInputs.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.iotevents.IoteventsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] iotevents:ListTagsForResource.

---

##### `PutLoggingOptions`<sup>Required</sup> <a name="PutLoggingOptions" id="@cdk_utils/iam.iotevents.IoteventsActions.property.PutLoggingOptions"></a>

```typescript
public readonly PutLoggingOptions: string;
```

- *Type:* string

[Write] iotevents:PutLoggingOptions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.iotevents.IoteventsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDetectorModelAnalysis`<sup>Required</sup> <a name="StartDetectorModelAnalysis" id="@cdk_utils/iam.iotevents.IoteventsActions.property.StartDetectorModelAnalysis"></a>

```typescript
public readonly StartDetectorModelAnalysis: string;
```

- *Type:* string

[Write] iotevents:StartDetectorModelAnalysis.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.iotevents.IoteventsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] iotevents:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.iotevents.IoteventsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] iotevents:UntagResource.

---

##### `UpdateAlarmModel`<sup>Required</sup> <a name="UpdateAlarmModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateAlarmModel"></a>

```typescript
public readonly UpdateAlarmModel: string;
```

- *Type:* string

[Write] iotevents:UpdateAlarmModel.

---

##### `UpdateDetectorModel`<sup>Required</sup> <a name="UpdateDetectorModel" id="@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateDetectorModel"></a>

```typescript
public readonly UpdateDetectorModel: string;
```

- *Type:* string

[Write] iotevents:UpdateDetectorModel.

---

##### `UpdateInput`<sup>Required</sup> <a name="UpdateInput" id="@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateInput"></a>

```typescript
public readonly UpdateInput: string;
```

- *Type:* string

[Write] iotevents:UpdateInput.

---

##### `UpdateInputRouting`<sup>Required</sup> <a name="UpdateInputRouting" id="@cdk_utils/iam.iotevents.IoteventsActions.property.UpdateInputRouting"></a>

```typescript
public readonly UpdateInputRouting: string;
```

- *Type:* string

[Write] iotevents:UpdateInputRouting.

---

### IoteventsConditions <a name="IoteventsConditions" id="@cdk_utils/iam.iotevents.IoteventsConditions"></a>

Condition key constants and builders for iotevents.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotevents.IoteventsConditions.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

new iotevents.IoteventsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.keyValue">keyValue</a></code> | Generates a condition block for `iotevents:keyValue`. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `keyValue` <a name="keyValue" id="@cdk_utils/iam.iotevents.IoteventsConditions.keyValue"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsConditions.keyValue(value: string)
```

Generates a condition block for `iotevents:keyValue`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotevents.IoteventsConditions.keyValue.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.iotevents.IoteventsConditions.requestTag"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotevents.IoteventsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.iotevents.IoteventsConditions.resourceTag"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.iotevents.IoteventsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.iotevents.IoteventsConditions.tagKeys"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.iotevents.IoteventsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.CreateAlarmModelConditionKeys">CreateAlarmModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAlarmModel action. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.CreateDetectorModelConditionKeys">CreateDetectorModelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDetectorModel action. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.CreateInputConditionKeys">CreateInputConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInput action. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.KEY_VALUE">KEY_VALUE</a></code> | <code>string</code> | Condition key: iotevents:keyValue (String). |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAlarmModelConditionKeys`<sup>Required</sup> <a name="CreateAlarmModelConditionKeys" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.CreateAlarmModelConditionKeys"></a>

```typescript
public readonly CreateAlarmModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAlarmModel action.

---

##### `CreateDetectorModelConditionKeys`<sup>Required</sup> <a name="CreateDetectorModelConditionKeys" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.CreateDetectorModelConditionKeys"></a>

```typescript
public readonly CreateDetectorModelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDetectorModel action.

---

##### `CreateInputConditionKeys`<sup>Required</sup> <a name="CreateInputConditionKeys" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.CreateInputConditionKeys"></a>

```typescript
public readonly CreateInputConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInput action.

---

##### `KEY_VALUE`<sup>Required</sup> <a name="KEY_VALUE" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.KEY_VALUE"></a>

```typescript
public readonly KEY_VALUE: string;
```

- *Type:* string

Condition key: iotevents:keyValue (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.iotevents.IoteventsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IoteventsResources <a name="IoteventsResources" id="@cdk_utils/iam.iotevents.IoteventsResources"></a>

ARN builders, validators, and parsers for iotevents resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.iotevents.IoteventsResources.Initializer"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

new iotevents.IoteventsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.alarmModel">alarmModel</a></code> | Builds an ARN for the alarmModel resource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.detectorModel">detectorModel</a></code> | Builds an ARN for the detectorModel resource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.input">input</a></code> | Builds an ARN for the input resource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.isValidAlarmModelArn">isValidAlarmModelArn</a></code> | Validates whether a string is a valid ARN for the alarmModel resource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.isValidDetectorModelArn">isValidDetectorModelArn</a></code> | Validates whether a string is a valid ARN for the detectorModel resource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.isValidInputArn">isValidInputArn</a></code> | Validates whether a string is a valid ARN for the input resource. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.parseAlarmModelArn">parseAlarmModelArn</a></code> | Parses a alarmModel ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.parseDetectorModelArn">parseDetectorModelArn</a></code> | Parses a detectorModel ARN into its components. |
| <code><a href="#@cdk_utils/iam.iotevents.IoteventsResources.parseInputArn">parseInputArn</a></code> | Parses a input ARN into its components. |

---

##### `alarmModel` <a name="alarmModel" id="@cdk_utils/iam.iotevents.IoteventsResources.alarmModel"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.alarmModel(props: IoteventsAlarmModelArnProps)
```

Builds an ARN for the alarmModel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotevents.IoteventsResources.alarmModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotevents.IoteventsAlarmModelArnProps">IoteventsAlarmModelArnProps</a>

---

##### `detectorModel` <a name="detectorModel" id="@cdk_utils/iam.iotevents.IoteventsResources.detectorModel"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.detectorModel(props: IoteventsDetectorModelArnProps)
```

Builds an ARN for the detectorModel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotevents.IoteventsResources.detectorModel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotevents.IoteventsDetectorModelArnProps">IoteventsDetectorModelArnProps</a>

---

##### `input` <a name="input" id="@cdk_utils/iam.iotevents.IoteventsResources.input"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.input(props: IoteventsInputArnProps)
```

Builds an ARN for the input resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.iotevents.IoteventsResources.input.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.iotevents.IoteventsInputArnProps">IoteventsInputArnProps</a>

---

##### `isValidAlarmModelArn` <a name="isValidAlarmModelArn" id="@cdk_utils/iam.iotevents.IoteventsResources.isValidAlarmModelArn"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.isValidAlarmModelArn(arn: string)
```

Validates whether a string is a valid ARN for the alarmModel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotevents.IoteventsResources.isValidAlarmModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidDetectorModelArn` <a name="isValidDetectorModelArn" id="@cdk_utils/iam.iotevents.IoteventsResources.isValidDetectorModelArn"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.isValidDetectorModelArn(arn: string)
```

Validates whether a string is a valid ARN for the detectorModel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotevents.IoteventsResources.isValidDetectorModelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInputArn` <a name="isValidInputArn" id="@cdk_utils/iam.iotevents.IoteventsResources.isValidInputArn"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.isValidInputArn(arn: string)
```

Validates whether a string is a valid ARN for the input resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotevents.IoteventsResources.isValidInputArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAlarmModelArn` <a name="parseAlarmModelArn" id="@cdk_utils/iam.iotevents.IoteventsResources.parseAlarmModelArn"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.parseAlarmModelArn(arn: string)
```

Parses a alarmModel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotevents.IoteventsResources.parseAlarmModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDetectorModelArn` <a name="parseDetectorModelArn" id="@cdk_utils/iam.iotevents.IoteventsResources.parseDetectorModelArn"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.parseDetectorModelArn(arn: string)
```

Parses a detectorModel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotevents.IoteventsResources.parseDetectorModelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInputArn` <a name="parseInputArn" id="@cdk_utils/iam.iotevents.IoteventsResources.parseInputArn"></a>

```typescript
import { iotevents } from '@cdk_utils/iam'

iotevents.IoteventsResources.parseInputArn(arn: string)
```

Parses a input ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.iotevents.IoteventsResources.parseInputArn.parameter.arn"></a>

- *Type:* string

---




