# `networkmonitor` Submodule <a name="`networkmonitor` Submodule" id="@cdk_utils/iam.networkmonitor"></a>


## Structs <a name="Structs" id="Structs"></a>

### NetworkmonitorMonitorArnComponents <a name="NetworkmonitorMonitorArnComponents" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents"></a>

Parsed components of a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

const networkmonitorMonitorArnComponents: networkmonitor.NetworkmonitorMonitorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkmonitorMonitorArnProps <a name="NetworkmonitorMonitorArnProps" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps"></a>

Properties for building a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

const networkmonitorMonitorArnProps: networkmonitor.NetworkmonitorMonitorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkmonitorProbeArnComponents <a name="NetworkmonitorProbeArnComponents" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents"></a>

Parsed components of a probe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

const networkmonitorProbeArnComponents: networkmonitor.NetworkmonitorProbeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.probeId">probeId</a></code> | <code>string</code> | The ProbeId component. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `probeId`<sup>Required</sup> <a name="probeId" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.probeId"></a>

```typescript
public readonly probeId: string;
```

- *Type:* string

The ProbeId component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkmonitorProbeArnProps <a name="NetworkmonitorProbeArnProps" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps"></a>

Properties for building a probe ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

const networkmonitorProbeArnProps: networkmonitor.NetworkmonitorProbeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.probeId">probeId</a></code> | <code>string</code> | The ProbeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `probeId`<sup>Required</sup> <a name="probeId" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.probeId"></a>

```typescript
public readonly probeId: string;
```

- *Type:* string

The ProbeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmonitorActions <a name="NetworkmonitorActions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions"></a>

IAM action constants for the networkmonitor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

new networkmonitor.NetworkmonitorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.actionGetMonitor">actionGetMonitor</a></code> | <code>string</code> | [Read] networkmonitor:GetMonitor. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.actionGetProbe">actionGetProbe</a></code> | <code>string</code> | [Read] networkmonitor:GetProbe. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.CreateMonitor">CreateMonitor</a></code> | <code>string</code> | [Write] networkmonitor:CreateMonitor. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.CreateProbe">CreateProbe</a></code> | <code>string</code> | [Write] networkmonitor:CreateProbe. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string</code> | [Write] networkmonitor:DeleteMonitor. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.DeleteProbe">DeleteProbe</a></code> | <code>string</code> | [Write] networkmonitor:DeleteProbe. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.ListMonitors">ListMonitors</a></code> | <code>string</code> | [List] networkmonitor:ListMonitors. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] networkmonitor:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] networkmonitor:TagResource. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] networkmonitor:UntagResource. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string</code> | [Write] networkmonitor:UpdateMonitor. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.UpdateProbe">UpdateProbe</a></code> | <code>string</code> | [Write] networkmonitor:UpdateProbe. |

---

##### `actionGetMonitor`<sup>Required</sup> <a name="actionGetMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.actionGetMonitor"></a>

```typescript
public readonly actionGetMonitor: string;
```

- *Type:* string

[Read] networkmonitor:GetMonitor.

---

##### `actionGetProbe`<sup>Required</sup> <a name="actionGetProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.actionGetProbe"></a>

```typescript
public readonly actionGetProbe: string;
```

- *Type:* string

[Read] networkmonitor:GetProbe.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string;
```

- *Type:* string

[Write] networkmonitor:CreateMonitor.

---

##### `CreateProbe`<sup>Required</sup> <a name="CreateProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.CreateProbe"></a>

```typescript
public readonly CreateProbe: string;
```

- *Type:* string

[Write] networkmonitor:CreateProbe.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string;
```

- *Type:* string

[Write] networkmonitor:DeleteMonitor.

---

##### `DeleteProbe`<sup>Required</sup> <a name="DeleteProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.DeleteProbe"></a>

```typescript
public readonly DeleteProbe: string;
```

- *Type:* string

[Write] networkmonitor:DeleteProbe.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string;
```

- *Type:* string

[List] networkmonitor:ListMonitors.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] networkmonitor:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] networkmonitor:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] networkmonitor:UntagResource.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string;
```

- *Type:* string

[Write] networkmonitor:UpdateMonitor.

---

##### `UpdateProbe`<sup>Required</sup> <a name="UpdateProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorActions.property.UpdateProbe"></a>

```typescript
public readonly UpdateProbe: string;
```

- *Type:* string

[Write] networkmonitor:UpdateProbe.

---

### NetworkmonitorConditions <a name="NetworkmonitorConditions" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions"></a>

Condition key constants and builders for networkmonitor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

new networkmonitor.NetworkmonitorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.requestTag"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.resourceTag"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.tagKeys"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.CreateMonitorConditionKeys">CreateMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMonitor action. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.CreateProbeConditionKeys">CreateProbeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProbe action. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateMonitorConditionKeys`<sup>Required</sup> <a name="CreateMonitorConditionKeys" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.CreateMonitorConditionKeys"></a>

```typescript
public readonly CreateMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMonitor action.

---

##### `CreateProbeConditionKeys`<sup>Required</sup> <a name="CreateProbeConditionKeys" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.CreateProbeConditionKeys"></a>

```typescript
public readonly CreateProbeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProbe action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.networkmonitor.NetworkmonitorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NetworkmonitorOperations <a name="NetworkmonitorOperations" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations"></a>

API operation to required IAM actions mapping for networkmonitor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

new networkmonitor.NetworkmonitorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.CreateMonitor">CreateMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.CreateProbe">CreateProbe</a></code> | <code>string[]</code> | IAM actions required for the CreateProbe API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.DeleteProbe">DeleteProbe</a></code> | <code>string[]</code> | IAM actions required for the DeleteProbe API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.ListMonitors">ListMonitors</a></code> | <code>string[]</code> | IAM actions required for the ListMonitors API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.opGetMonitor">opGetMonitor</a></code> | <code>string[]</code> | IAM actions required for the GetMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.opGetProbe">opGetProbe</a></code> | <code>string[]</code> | IAM actions required for the GetProbe API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string[]</code> | IAM actions required for the UpdateMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.UpdateProbe">UpdateProbe</a></code> | <code>string[]</code> | IAM actions required for the UpdateProbe API call. |

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateMonitor API call.

---

##### `CreateProbe`<sup>Required</sup> <a name="CreateProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.CreateProbe"></a>

```typescript
public readonly CreateProbe: string[];
```

- *Type:* string[]

IAM actions required for the CreateProbe API call.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMonitor API call.

---

##### `DeleteProbe`<sup>Required</sup> <a name="DeleteProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.DeleteProbe"></a>

```typescript
public readonly DeleteProbe: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProbe API call.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitors API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetMonitor`<sup>Required</sup> <a name="opGetMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.opGetMonitor"></a>

```typescript
public readonly opGetMonitor: string[];
```

- *Type:* string[]

IAM actions required for the GetMonitor API call.

---

##### `opGetProbe`<sup>Required</sup> <a name="opGetProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.opGetProbe"></a>

```typescript
public readonly opGetProbe: string[];
```

- *Type:* string[]

IAM actions required for the GetProbe API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMonitor API call.

---

##### `UpdateProbe`<sup>Required</sup> <a name="UpdateProbe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorOperations.property.UpdateProbe"></a>

```typescript
public readonly UpdateProbe: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProbe API call.

---

### NetworkmonitorResources <a name="NetworkmonitorResources" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources"></a>

ARN builders, validators, and parsers for networkmonitor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.Initializer"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

new networkmonitor.NetworkmonitorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorResources.isValidMonitorArn">isValidMonitorArn</a></code> | Validates whether a string is a valid ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorResources.isValidProbeArn">isValidProbeArn</a></code> | Validates whether a string is a valid ARN for the probe resource. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorResources.monitor">monitor</a></code> | Builds an ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorResources.parseMonitorArn">parseMonitorArn</a></code> | Parses a monitor ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorResources.parseProbeArn">parseProbeArn</a></code> | Parses a probe ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorResources.probe">probe</a></code> | Builds an ARN for the probe resource. |

---

##### `isValidMonitorArn` <a name="isValidMonitorArn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.isValidMonitorArn"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorResources.isValidMonitorArn(arn: string)
```

Validates whether a string is a valid ARN for the monitor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.isValidMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProbeArn` <a name="isValidProbeArn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.isValidProbeArn"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorResources.isValidProbeArn(arn: string)
```

Validates whether a string is a valid ARN for the probe resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.isValidProbeArn.parameter.arn"></a>

- *Type:* string

---

##### `monitor` <a name="monitor" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.monitor"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorResources.monitor(props: NetworkmonitorMonitorArnProps)
```

Builds an ARN for the monitor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.monitor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorMonitorArnProps">NetworkmonitorMonitorArnProps</a>

---

##### `parseMonitorArn` <a name="parseMonitorArn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.parseMonitorArn"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorResources.parseMonitorArn(arn: string)
```

Parses a monitor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.parseMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProbeArn` <a name="parseProbeArn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.parseProbeArn"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorResources.parseProbeArn(arn: string)
```

Parses a probe ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.parseProbeArn.parameter.arn"></a>

- *Type:* string

---

##### `probe` <a name="probe" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.probe"></a>

```typescript
import { networkmonitor } from '@cdk_utils/iam'

networkmonitor.NetworkmonitorResources.probe(props: NetworkmonitorProbeArnProps)
```

Builds an ARN for the probe resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkmonitor.NetworkmonitorResources.probe.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkmonitor.NetworkmonitorProbeArnProps">NetworkmonitorProbeArnProps</a>

---




