# `internetmonitor` Submodule <a name="`internetmonitor` Submodule" id="@cdk_utils/iam.internetmonitor"></a>


## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorHealthEventArnComponents <a name="InternetmonitorHealthEventArnComponents" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents"></a>

Parsed components of a HealthEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

const internetmonitorHealthEventArnComponents: internetmonitor.InternetmonitorHealthEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.eventId">eventId</a></code> | <code>string</code> | The EventId component. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.eventId"></a>

```typescript
public readonly eventId: string;
```

- *Type:* string

The EventId component.

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### InternetmonitorHealthEventArnProps <a name="InternetmonitorHealthEventArnProps" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps"></a>

Properties for building a HealthEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

const internetmonitorHealthEventArnProps: internetmonitor.InternetmonitorHealthEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.eventId">eventId</a></code> | <code>string</code> | The EventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `eventId`<sup>Required</sup> <a name="eventId" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.eventId"></a>

```typescript
public readonly eventId: string;
```

- *Type:* string

The EventId component of the ARN.

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### InternetmonitorInternetEventArnComponents <a name="InternetmonitorInternetEventArnComponents" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents"></a>

Parsed components of a InternetEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

const internetmonitorInternetEventArnComponents: internetmonitor.InternetmonitorInternetEventArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.property.internetEventId">internetEventId</a></code> | <code>string</code> | The InternetEventId component. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `internetEventId`<sup>Required</sup> <a name="internetEventId" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.property.internetEventId"></a>

```typescript
public readonly internetEventId: string;
```

- *Type:* string

The InternetEventId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### InternetmonitorInternetEventArnProps <a name="InternetmonitorInternetEventArnProps" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps"></a>

Properties for building a InternetEvent ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

const internetmonitorInternetEventArnProps: internetmonitor.InternetmonitorInternetEventArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.property.internetEventId">internetEventId</a></code> | <code>string</code> | The InternetEventId component of the ARN. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `internetEventId`<sup>Required</sup> <a name="internetEventId" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.property.internetEventId"></a>

```typescript
public readonly internetEventId: string;
```

- *Type:* string

The InternetEventId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### InternetmonitorMonitorArnComponents <a name="InternetmonitorMonitorArnComponents" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents"></a>

Parsed components of a Monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

const internetmonitorMonitorArnComponents: internetmonitor.InternetmonitorMonitorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### InternetmonitorMonitorArnProps <a name="InternetmonitorMonitorArnProps" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps"></a>

Properties for building a Monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

const internetmonitorMonitorArnProps: internetmonitor.InternetmonitorMonitorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorActions <a name="InternetmonitorActions" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions"></a>

IAM action constants for the internetmonitor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

new internetmonitor.InternetmonitorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetHealthEvent">actionGetHealthEvent</a></code> | <code>string</code> | [Read] internetmonitor:GetHealthEvent. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetInternetEvent">actionGetInternetEvent</a></code> | <code>string</code> | [Read] internetmonitor:GetInternetEvent. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetMonitor">actionGetMonitor</a></code> | <code>string</code> | [Read] internetmonitor:GetMonitor. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetQueryResults">actionGetQueryResults</a></code> | <code>string</code> | [Read] internetmonitor:GetQueryResults. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetQueryStatus">actionGetQueryStatus</a></code> | <code>string</code> | [Read] internetmonitor:GetQueryStatus. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.CreateMonitor">CreateMonitor</a></code> | <code>string</code> | [Write] internetmonitor:CreateMonitor. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string</code> | [Write] internetmonitor:DeleteMonitor. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.Link">Link</a></code> | <code>string</code> | [Write] internetmonitor:Link. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListHealthEvents">ListHealthEvents</a></code> | <code>string</code> | [List] internetmonitor:ListHealthEvents. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListInternetEvents">ListInternetEvents</a></code> | <code>string</code> | [List] internetmonitor:ListInternetEvents. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListMonitors">ListMonitors</a></code> | <code>string</code> | [List] internetmonitor:ListMonitors. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] internetmonitor:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.StartQuery">StartQuery</a></code> | <code>string</code> | [Read] internetmonitor:StartQuery. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.StopQuery">StopQuery</a></code> | <code>string</code> | [Read] internetmonitor:StopQuery. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] internetmonitor:TagResource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] internetmonitor:UntagResource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string</code> | [Write] internetmonitor:UpdateMonitor. |

---

##### `actionGetHealthEvent`<sup>Required</sup> <a name="actionGetHealthEvent" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetHealthEvent"></a>

```typescript
public readonly actionGetHealthEvent: string;
```

- *Type:* string

[Read] internetmonitor:GetHealthEvent.

---

##### `actionGetInternetEvent`<sup>Required</sup> <a name="actionGetInternetEvent" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetInternetEvent"></a>

```typescript
public readonly actionGetInternetEvent: string;
```

- *Type:* string

[Read] internetmonitor:GetInternetEvent.

---

##### `actionGetMonitor`<sup>Required</sup> <a name="actionGetMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetMonitor"></a>

```typescript
public readonly actionGetMonitor: string;
```

- *Type:* string

[Read] internetmonitor:GetMonitor.

---

##### `actionGetQueryResults`<sup>Required</sup> <a name="actionGetQueryResults" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetQueryResults"></a>

```typescript
public readonly actionGetQueryResults: string;
```

- *Type:* string

[Read] internetmonitor:GetQueryResults.

---

##### `actionGetQueryStatus`<sup>Required</sup> <a name="actionGetQueryStatus" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.actionGetQueryStatus"></a>

```typescript
public readonly actionGetQueryStatus: string;
```

- *Type:* string

[Read] internetmonitor:GetQueryStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string;
```

- *Type:* string

[Write] internetmonitor:CreateMonitor.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string;
```

- *Type:* string

[Write] internetmonitor:DeleteMonitor.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] internetmonitor:Link.

---

##### `ListHealthEvents`<sup>Required</sup> <a name="ListHealthEvents" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListHealthEvents"></a>

```typescript
public readonly ListHealthEvents: string;
```

- *Type:* string

[List] internetmonitor:ListHealthEvents.

---

##### `ListInternetEvents`<sup>Required</sup> <a name="ListInternetEvents" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListInternetEvents"></a>

```typescript
public readonly ListInternetEvents: string;
```

- *Type:* string

[List] internetmonitor:ListInternetEvents.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string;
```

- *Type:* string

[List] internetmonitor:ListMonitors.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] internetmonitor:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.StartQuery"></a>

```typescript
public readonly StartQuery: string;
```

- *Type:* string

[Read] internetmonitor:StartQuery.

---

##### `StopQuery`<sup>Required</sup> <a name="StopQuery" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.StopQuery"></a>

```typescript
public readonly StopQuery: string;
```

- *Type:* string

[Read] internetmonitor:StopQuery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] internetmonitor:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] internetmonitor:UntagResource.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorActions.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string;
```

- *Type:* string

[Write] internetmonitor:UpdateMonitor.

---

### InternetmonitorConditions <a name="InternetmonitorConditions" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions"></a>

Condition key constants and builders for internetmonitor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

new internetmonitor.InternetmonitorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.requestTag"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.resourceTag"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.tagKeys"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.CreateMonitorConditionKeys">CreateMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMonitor action. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateMonitorConditionKeys`<sup>Required</sup> <a name="CreateMonitorConditionKeys" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.CreateMonitorConditionKeys"></a>

```typescript
public readonly CreateMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMonitor action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.internetmonitor.InternetmonitorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### InternetmonitorOperations <a name="InternetmonitorOperations" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations"></a>

API operation to required IAM actions mapping for internetmonitor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

new internetmonitor.InternetmonitorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.CreateMonitor">CreateMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateMonitor API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteMonitor API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListHealthEvents">ListHealthEvents</a></code> | <code>string[]</code> | IAM actions required for the ListHealthEvents API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListInternetEvents">ListInternetEvents</a></code> | <code>string[]</code> | IAM actions required for the ListInternetEvents API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListMonitors">ListMonitors</a></code> | <code>string[]</code> | IAM actions required for the ListMonitors API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetHealthEvent">opGetHealthEvent</a></code> | <code>string[]</code> | IAM actions required for the GetHealthEvent API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetInternetEvent">opGetInternetEvent</a></code> | <code>string[]</code> | IAM actions required for the GetInternetEvent API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetMonitor">opGetMonitor</a></code> | <code>string[]</code> | IAM actions required for the GetMonitor API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetQueryResults">opGetQueryResults</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResults API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetQueryStatus">opGetQueryStatus</a></code> | <code>string[]</code> | IAM actions required for the GetQueryStatus API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.StartQuery">StartQuery</a></code> | <code>string[]</code> | IAM actions required for the StartQuery API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.StopQuery">StopQuery</a></code> | <code>string[]</code> | IAM actions required for the StopQuery API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string[]</code> | IAM actions required for the UpdateMonitor API call. |

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateMonitor API call.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMonitor API call.

---

##### `ListHealthEvents`<sup>Required</sup> <a name="ListHealthEvents" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListHealthEvents"></a>

```typescript
public readonly ListHealthEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListHealthEvents API call.

---

##### `ListInternetEvents`<sup>Required</sup> <a name="ListInternetEvents" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListInternetEvents"></a>

```typescript
public readonly ListInternetEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListInternetEvents API call.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitors API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetHealthEvent`<sup>Required</sup> <a name="opGetHealthEvent" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetHealthEvent"></a>

```typescript
public readonly opGetHealthEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetHealthEvent API call.

---

##### `opGetInternetEvent`<sup>Required</sup> <a name="opGetInternetEvent" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetInternetEvent"></a>

```typescript
public readonly opGetInternetEvent: string[];
```

- *Type:* string[]

IAM actions required for the GetInternetEvent API call.

---

##### `opGetMonitor`<sup>Required</sup> <a name="opGetMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetMonitor"></a>

```typescript
public readonly opGetMonitor: string[];
```

- *Type:* string[]

IAM actions required for the GetMonitor API call.

---

##### `opGetQueryResults`<sup>Required</sup> <a name="opGetQueryResults" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetQueryResults"></a>

```typescript
public readonly opGetQueryResults: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResults API call.

---

##### `opGetQueryStatus`<sup>Required</sup> <a name="opGetQueryStatus" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.opGetQueryStatus"></a>

```typescript
public readonly opGetQueryStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryStatus API call.

---

##### `StartQuery`<sup>Required</sup> <a name="StartQuery" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.StartQuery"></a>

```typescript
public readonly StartQuery: string[];
```

- *Type:* string[]

IAM actions required for the StartQuery API call.

---

##### `StopQuery`<sup>Required</sup> <a name="StopQuery" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.StopQuery"></a>

```typescript
public readonly StopQuery: string[];
```

- *Type:* string[]

IAM actions required for the StopQuery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorOperations.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMonitor API call.

---

### InternetmonitorResources <a name="InternetmonitorResources" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources"></a>

ARN builders, validators, and parsers for internetmonitor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.Initializer"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

new internetmonitor.InternetmonitorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.healthEvent">healthEvent</a></code> | Builds an ARN for the HealthEvent resource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.internetEvent">internetEvent</a></code> | Builds an ARN for the InternetEvent resource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidHealthEventArn">isValidHealthEventArn</a></code> | Validates whether a string is a valid ARN for the HealthEvent resource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidInternetEventArn">isValidInternetEventArn</a></code> | Validates whether a string is a valid ARN for the InternetEvent resource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidMonitorArn">isValidMonitorArn</a></code> | Validates whether a string is a valid ARN for the Monitor resource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.monitor">monitor</a></code> | Builds an ARN for the Monitor resource. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseHealthEventArn">parseHealthEventArn</a></code> | Parses a HealthEvent ARN into its components. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseInternetEventArn">parseInternetEventArn</a></code> | Parses a InternetEvent ARN into its components. |
| <code><a href="#@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseMonitorArn">parseMonitorArn</a></code> | Parses a Monitor ARN into its components. |

---

##### `healthEvent` <a name="healthEvent" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.healthEvent"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.healthEvent(props: InternetmonitorHealthEventArnProps)
```

Builds an ARN for the HealthEvent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.healthEvent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.internetmonitor.InternetmonitorHealthEventArnProps">InternetmonitorHealthEventArnProps</a>

---

##### `internetEvent` <a name="internetEvent" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.internetEvent"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.internetEvent(props: InternetmonitorInternetEventArnProps)
```

Builds an ARN for the InternetEvent resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.internetEvent.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.internetmonitor.InternetmonitorInternetEventArnProps">InternetmonitorInternetEventArnProps</a>

---

##### `isValidHealthEventArn` <a name="isValidHealthEventArn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidHealthEventArn"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.isValidHealthEventArn(arn: string)
```

Validates whether a string is a valid ARN for the HealthEvent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidHealthEventArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidInternetEventArn` <a name="isValidInternetEventArn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidInternetEventArn"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.isValidInternetEventArn(arn: string)
```

Validates whether a string is a valid ARN for the InternetEvent resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidInternetEventArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMonitorArn` <a name="isValidMonitorArn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidMonitorArn"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.isValidMonitorArn(arn: string)
```

Validates whether a string is a valid ARN for the Monitor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.isValidMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `monitor` <a name="monitor" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.monitor"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.monitor(props: InternetmonitorMonitorArnProps)
```

Builds an ARN for the Monitor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.monitor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.internetmonitor.InternetmonitorMonitorArnProps">InternetmonitorMonitorArnProps</a>

---

##### `parseHealthEventArn` <a name="parseHealthEventArn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseHealthEventArn"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.parseHealthEventArn(arn: string)
```

Parses a HealthEvent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseHealthEventArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInternetEventArn` <a name="parseInternetEventArn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseInternetEventArn"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.parseInternetEventArn(arn: string)
```

Parses a InternetEvent ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseInternetEventArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMonitorArn` <a name="parseMonitorArn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseMonitorArn"></a>

```typescript
import { internetmonitor } from '@cdk_utils/iam'

internetmonitor.InternetmonitorResources.parseMonitorArn(arn: string)
```

Parses a Monitor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.internetmonitor.InternetmonitorResources.parseMonitorArn.parameter.arn"></a>

- *Type:* string

---




