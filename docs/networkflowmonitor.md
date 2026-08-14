# `networkflowmonitor` Submodule <a name="`networkflowmonitor` Submodule" id="@cdk_utils/iam.networkflowmonitor"></a>


## Structs <a name="Structs" id="Structs"></a>

### NetworkflowmonitorMonitorArnComponents <a name="NetworkflowmonitorMonitorArnComponents" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents"></a>

Parsed components of a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

const networkflowmonitorMonitorArnComponents: networkflowmonitor.NetworkflowmonitorMonitorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### NetworkflowmonitorMonitorArnProps <a name="NetworkflowmonitorMonitorArnProps" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps"></a>

Properties for building a monitor ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

const networkflowmonitorMonitorArnProps: networkflowmonitor.NetworkflowmonitorMonitorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.monitorName">monitorName</a></code> | <code>string</code> | The MonitorName component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `monitorName`<sup>Required</sup> <a name="monitorName" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.monitorName"></a>

```typescript
public readonly monitorName: string;
```

- *Type:* string

The MonitorName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### NetworkflowmonitorScopeArnComponents <a name="NetworkflowmonitorScopeArnComponents" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents"></a>

Parsed components of a scope ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

const networkflowmonitorScopeArnComponents: networkflowmonitor.NetworkflowmonitorScopeArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.scopeId">scopeId</a></code> | <code>string</code> | The ScopeId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnComponents.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The ScopeId component.

---

### NetworkflowmonitorScopeArnProps <a name="NetworkflowmonitorScopeArnProps" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps"></a>

Properties for building a scope ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

const networkflowmonitorScopeArnProps: networkflowmonitor.NetworkflowmonitorScopeArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.scopeId">scopeId</a></code> | <code>string</code> | The ScopeId component of the ARN. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scopeId`<sup>Required</sup> <a name="scopeId" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.scopeId"></a>

```typescript
public readonly scopeId: string;
```

- *Type:* string

The ScopeId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkflowmonitorActions <a name="NetworkflowmonitorActions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions"></a>

IAM action constants for the networkflowmonitor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

new networkflowmonitor.NetworkflowmonitorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetMonitor">actionGetMonitor</a></code> | <code>string</code> | [Read] networkflowmonitor:GetMonitor. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryResultsMonitorTopContributors">actionGetQueryResultsMonitorTopContributors</a></code> | <code>string</code> | [Read] networkflowmonitor:GetQueryResultsMonitorTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryResultsWorkloadInsightsTopContributors">actionGetQueryResultsWorkloadInsightsTopContributors</a></code> | <code>string</code> | [Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryResultsWorkloadInsightsTopContributorsData">actionGetQueryResultsWorkloadInsightsTopContributorsData</a></code> | <code>string</code> | [Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryStatusMonitorTopContributors">actionGetQueryStatusMonitorTopContributors</a></code> | <code>string</code> | [Read] networkflowmonitor:GetQueryStatusMonitorTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryStatusWorkloadInsightsTopContributors">actionGetQueryStatusWorkloadInsightsTopContributors</a></code> | <code>string</code> | [Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryStatusWorkloadInsightsTopContributorsData">actionGetQueryStatusWorkloadInsightsTopContributorsData</a></code> | <code>string</code> | [Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetScope">actionGetScope</a></code> | <code>string</code> | [Read] networkflowmonitor:GetScope. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.CreateMonitor">CreateMonitor</a></code> | <code>string</code> | [Write] networkflowmonitor:CreateMonitor. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.CreateScope">CreateScope</a></code> | <code>string</code> | [Write] networkflowmonitor:CreateScope. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string</code> | [Write] networkflowmonitor:DeleteMonitor. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.DeleteScope">DeleteScope</a></code> | <code>string</code> | [Write] networkflowmonitor:DeleteScope. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.ListMonitors">ListMonitors</a></code> | <code>string</code> | [List] networkflowmonitor:ListMonitors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.ListScopes">ListScopes</a></code> | <code>string</code> | [List] networkflowmonitor:ListScopes. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] networkflowmonitor:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.Publish">Publish</a></code> | <code>string</code> | [Write] networkflowmonitor:Publish. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StartQueryMonitorTopContributors">StartQueryMonitorTopContributors</a></code> | <code>string</code> | [Write] networkflowmonitor:StartQueryMonitorTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StartQueryWorkloadInsightsTopContributors">StartQueryWorkloadInsightsTopContributors</a></code> | <code>string</code> | [Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StartQueryWorkloadInsightsTopContributorsData">StartQueryWorkloadInsightsTopContributorsData</a></code> | <code>string</code> | [Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StopQueryMonitorTopContributors">StopQueryMonitorTopContributors</a></code> | <code>string</code> | [Write] networkflowmonitor:StopQueryMonitorTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StopQueryWorkloadInsightsTopContributors">StopQueryWorkloadInsightsTopContributors</a></code> | <code>string</code> | [Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributors. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StopQueryWorkloadInsightsTopContributorsData">StopQueryWorkloadInsightsTopContributorsData</a></code> | <code>string</code> | [Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] networkflowmonitor:TagResource. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] networkflowmonitor:UntagResource. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string</code> | [Write] networkflowmonitor:UpdateMonitor. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.UpdateScope">UpdateScope</a></code> | <code>string</code> | [Write] networkflowmonitor:UpdateScope. |

---

##### `actionGetMonitor`<sup>Required</sup> <a name="actionGetMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetMonitor"></a>

```typescript
public readonly actionGetMonitor: string;
```

- *Type:* string

[Read] networkflowmonitor:GetMonitor.

---

##### `actionGetQueryResultsMonitorTopContributors`<sup>Required</sup> <a name="actionGetQueryResultsMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryResultsMonitorTopContributors"></a>

```typescript
public readonly actionGetQueryResultsMonitorTopContributors: string;
```

- *Type:* string

[Read] networkflowmonitor:GetQueryResultsMonitorTopContributors.

---

##### `actionGetQueryResultsWorkloadInsightsTopContributors`<sup>Required</sup> <a name="actionGetQueryResultsWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryResultsWorkloadInsightsTopContributors"></a>

```typescript
public readonly actionGetQueryResultsWorkloadInsightsTopContributors: string;
```

- *Type:* string

[Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributors.

---

##### `actionGetQueryResultsWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="actionGetQueryResultsWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryResultsWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly actionGetQueryResultsWorkloadInsightsTopContributorsData: string;
```

- *Type:* string

[Read] networkflowmonitor:GetQueryResultsWorkloadInsightsTopContributorsData.

---

##### `actionGetQueryStatusMonitorTopContributors`<sup>Required</sup> <a name="actionGetQueryStatusMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryStatusMonitorTopContributors"></a>

```typescript
public readonly actionGetQueryStatusMonitorTopContributors: string;
```

- *Type:* string

[Read] networkflowmonitor:GetQueryStatusMonitorTopContributors.

---

##### `actionGetQueryStatusWorkloadInsightsTopContributors`<sup>Required</sup> <a name="actionGetQueryStatusWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryStatusWorkloadInsightsTopContributors"></a>

```typescript
public readonly actionGetQueryStatusWorkloadInsightsTopContributors: string;
```

- *Type:* string

[Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributors.

---

##### `actionGetQueryStatusWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="actionGetQueryStatusWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetQueryStatusWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly actionGetQueryStatusWorkloadInsightsTopContributorsData: string;
```

- *Type:* string

[Read] networkflowmonitor:GetQueryStatusWorkloadInsightsTopContributorsData.

---

##### `actionGetScope`<sup>Required</sup> <a name="actionGetScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.actionGetScope"></a>

```typescript
public readonly actionGetScope: string;
```

- *Type:* string

[Read] networkflowmonitor:GetScope.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string;
```

- *Type:* string

[Write] networkflowmonitor:CreateMonitor.

---

##### `CreateScope`<sup>Required</sup> <a name="CreateScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.CreateScope"></a>

```typescript
public readonly CreateScope: string;
```

- *Type:* string

[Write] networkflowmonitor:CreateScope.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string;
```

- *Type:* string

[Write] networkflowmonitor:DeleteMonitor.

---

##### `DeleteScope`<sup>Required</sup> <a name="DeleteScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.DeleteScope"></a>

```typescript
public readonly DeleteScope: string;
```

- *Type:* string

[Write] networkflowmonitor:DeleteScope.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string;
```

- *Type:* string

[List] networkflowmonitor:ListMonitors.

---

##### `ListScopes`<sup>Required</sup> <a name="ListScopes" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.ListScopes"></a>

```typescript
public readonly ListScopes: string;
```

- *Type:* string

[List] networkflowmonitor:ListScopes.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] networkflowmonitor:ListTagsForResource.

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.Publish"></a>

```typescript
public readonly Publish: string;
```

- *Type:* string

[Write] networkflowmonitor:Publish.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartQueryMonitorTopContributors`<sup>Required</sup> <a name="StartQueryMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StartQueryMonitorTopContributors"></a>

```typescript
public readonly StartQueryMonitorTopContributors: string;
```

- *Type:* string

[Write] networkflowmonitor:StartQueryMonitorTopContributors.

---

##### `StartQueryWorkloadInsightsTopContributors`<sup>Required</sup> <a name="StartQueryWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StartQueryWorkloadInsightsTopContributors"></a>

```typescript
public readonly StartQueryWorkloadInsightsTopContributors: string;
```

- *Type:* string

[Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributors.

---

##### `StartQueryWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="StartQueryWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StartQueryWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly StartQueryWorkloadInsightsTopContributorsData: string;
```

- *Type:* string

[Write] networkflowmonitor:StartQueryWorkloadInsightsTopContributorsData.

---

##### `StopQueryMonitorTopContributors`<sup>Required</sup> <a name="StopQueryMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StopQueryMonitorTopContributors"></a>

```typescript
public readonly StopQueryMonitorTopContributors: string;
```

- *Type:* string

[Write] networkflowmonitor:StopQueryMonitorTopContributors.

---

##### `StopQueryWorkloadInsightsTopContributors`<sup>Required</sup> <a name="StopQueryWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StopQueryWorkloadInsightsTopContributors"></a>

```typescript
public readonly StopQueryWorkloadInsightsTopContributors: string;
```

- *Type:* string

[Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributors.

---

##### `StopQueryWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="StopQueryWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.StopQueryWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly StopQueryWorkloadInsightsTopContributorsData: string;
```

- *Type:* string

[Write] networkflowmonitor:StopQueryWorkloadInsightsTopContributorsData.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] networkflowmonitor:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] networkflowmonitor:UntagResource.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string;
```

- *Type:* string

[Write] networkflowmonitor:UpdateMonitor.

---

##### `UpdateScope`<sup>Required</sup> <a name="UpdateScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorActions.property.UpdateScope"></a>

```typescript
public readonly UpdateScope: string;
```

- *Type:* string

[Write] networkflowmonitor:UpdateScope.

---

### NetworkflowmonitorConditions <a name="NetworkflowmonitorConditions" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions"></a>

Condition key constants and builders for networkflowmonitor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

new networkflowmonitor.NetworkflowmonitorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.requestTag"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.resourceTag"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.tagKeys"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.CreateMonitorConditionKeys">CreateMonitorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMonitor action. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.CreateScopeConditionKeys">CreateScopeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScope action. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateMonitorConditionKeys`<sup>Required</sup> <a name="CreateMonitorConditionKeys" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.CreateMonitorConditionKeys"></a>

```typescript
public readonly CreateMonitorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMonitor action.

---

##### `CreateScopeConditionKeys`<sup>Required</sup> <a name="CreateScopeConditionKeys" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.CreateScopeConditionKeys"></a>

```typescript
public readonly CreateScopeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScope action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NetworkflowmonitorOperations <a name="NetworkflowmonitorOperations" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations"></a>

API operation to required IAM actions mapping for networkflowmonitor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

new networkflowmonitor.NetworkflowmonitorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.CreateMonitor">CreateMonitor</a></code> | <code>string[]</code> | IAM actions required for the CreateMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.CreateScope">CreateScope</a></code> | <code>string[]</code> | IAM actions required for the CreateScope API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.DeleteMonitor">DeleteMonitor</a></code> | <code>string[]</code> | IAM actions required for the DeleteMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.DeleteScope">DeleteScope</a></code> | <code>string[]</code> | IAM actions required for the DeleteScope API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.ListMonitors">ListMonitors</a></code> | <code>string[]</code> | IAM actions required for the ListMonitors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.ListScopes">ListScopes</a></code> | <code>string[]</code> | IAM actions required for the ListScopes API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetMonitor">opGetMonitor</a></code> | <code>string[]</code> | IAM actions required for the GetMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryResultsMonitorTopContributors">opGetQueryResultsMonitorTopContributors</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResultsMonitorTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryResultsWorkloadInsightsTopContributors">opGetQueryResultsWorkloadInsightsTopContributors</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResultsWorkloadInsightsTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryResultsWorkloadInsightsTopContributorsData">opGetQueryResultsWorkloadInsightsTopContributorsData</a></code> | <code>string[]</code> | IAM actions required for the GetQueryResultsWorkloadInsightsTopContributorsData API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryStatusMonitorTopContributors">opGetQueryStatusMonitorTopContributors</a></code> | <code>string[]</code> | IAM actions required for the GetQueryStatusMonitorTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryStatusWorkloadInsightsTopContributors">opGetQueryStatusWorkloadInsightsTopContributors</a></code> | <code>string[]</code> | IAM actions required for the GetQueryStatusWorkloadInsightsTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryStatusWorkloadInsightsTopContributorsData">opGetQueryStatusWorkloadInsightsTopContributorsData</a></code> | <code>string[]</code> | IAM actions required for the GetQueryStatusWorkloadInsightsTopContributorsData API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetScope">opGetScope</a></code> | <code>string[]</code> | IAM actions required for the GetScope API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StartQueryMonitorTopContributors">StartQueryMonitorTopContributors</a></code> | <code>string[]</code> | IAM actions required for the StartQueryMonitorTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StartQueryWorkloadInsightsTopContributors">StartQueryWorkloadInsightsTopContributors</a></code> | <code>string[]</code> | IAM actions required for the StartQueryWorkloadInsightsTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StartQueryWorkloadInsightsTopContributorsData">StartQueryWorkloadInsightsTopContributorsData</a></code> | <code>string[]</code> | IAM actions required for the StartQueryWorkloadInsightsTopContributorsData API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StopQueryMonitorTopContributors">StopQueryMonitorTopContributors</a></code> | <code>string[]</code> | IAM actions required for the StopQueryMonitorTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StopQueryWorkloadInsightsTopContributors">StopQueryWorkloadInsightsTopContributors</a></code> | <code>string[]</code> | IAM actions required for the StopQueryWorkloadInsightsTopContributors API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StopQueryWorkloadInsightsTopContributorsData">StopQueryWorkloadInsightsTopContributorsData</a></code> | <code>string[]</code> | IAM actions required for the StopQueryWorkloadInsightsTopContributorsData API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.UpdateMonitor">UpdateMonitor</a></code> | <code>string[]</code> | IAM actions required for the UpdateMonitor API call. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.UpdateScope">UpdateScope</a></code> | <code>string[]</code> | IAM actions required for the UpdateScope API call. |

---

##### `CreateMonitor`<sup>Required</sup> <a name="CreateMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.CreateMonitor"></a>

```typescript
public readonly CreateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the CreateMonitor API call.

---

##### `CreateScope`<sup>Required</sup> <a name="CreateScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.CreateScope"></a>

```typescript
public readonly CreateScope: string[];
```

- *Type:* string[]

IAM actions required for the CreateScope API call.

---

##### `DeleteMonitor`<sup>Required</sup> <a name="DeleteMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.DeleteMonitor"></a>

```typescript
public readonly DeleteMonitor: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMonitor API call.

---

##### `DeleteScope`<sup>Required</sup> <a name="DeleteScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.DeleteScope"></a>

```typescript
public readonly DeleteScope: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScope API call.

---

##### `ListMonitors`<sup>Required</sup> <a name="ListMonitors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.ListMonitors"></a>

```typescript
public readonly ListMonitors: string[];
```

- *Type:* string[]

IAM actions required for the ListMonitors API call.

---

##### `ListScopes`<sup>Required</sup> <a name="ListScopes" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.ListScopes"></a>

```typescript
public readonly ListScopes: string[];
```

- *Type:* string[]

IAM actions required for the ListScopes API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetMonitor`<sup>Required</sup> <a name="opGetMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetMonitor"></a>

```typescript
public readonly opGetMonitor: string[];
```

- *Type:* string[]

IAM actions required for the GetMonitor API call.

---

##### `opGetQueryResultsMonitorTopContributors`<sup>Required</sup> <a name="opGetQueryResultsMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryResultsMonitorTopContributors"></a>

```typescript
public readonly opGetQueryResultsMonitorTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResultsMonitorTopContributors API call.

---

##### `opGetQueryResultsWorkloadInsightsTopContributors`<sup>Required</sup> <a name="opGetQueryResultsWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryResultsWorkloadInsightsTopContributors"></a>

```typescript
public readonly opGetQueryResultsWorkloadInsightsTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResultsWorkloadInsightsTopContributors API call.

---

##### `opGetQueryResultsWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="opGetQueryResultsWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryResultsWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly opGetQueryResultsWorkloadInsightsTopContributorsData: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryResultsWorkloadInsightsTopContributorsData API call.

---

##### `opGetQueryStatusMonitorTopContributors`<sup>Required</sup> <a name="opGetQueryStatusMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryStatusMonitorTopContributors"></a>

```typescript
public readonly opGetQueryStatusMonitorTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryStatusMonitorTopContributors API call.

---

##### `opGetQueryStatusWorkloadInsightsTopContributors`<sup>Required</sup> <a name="opGetQueryStatusWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryStatusWorkloadInsightsTopContributors"></a>

```typescript
public readonly opGetQueryStatusWorkloadInsightsTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryStatusWorkloadInsightsTopContributors API call.

---

##### `opGetQueryStatusWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="opGetQueryStatusWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetQueryStatusWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly opGetQueryStatusWorkloadInsightsTopContributorsData: string[];
```

- *Type:* string[]

IAM actions required for the GetQueryStatusWorkloadInsightsTopContributorsData API call.

---

##### `opGetScope`<sup>Required</sup> <a name="opGetScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.opGetScope"></a>

```typescript
public readonly opGetScope: string[];
```

- *Type:* string[]

IAM actions required for the GetScope API call.

---

##### `StartQueryMonitorTopContributors`<sup>Required</sup> <a name="StartQueryMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StartQueryMonitorTopContributors"></a>

```typescript
public readonly StartQueryMonitorTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the StartQueryMonitorTopContributors API call.

---

##### `StartQueryWorkloadInsightsTopContributors`<sup>Required</sup> <a name="StartQueryWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StartQueryWorkloadInsightsTopContributors"></a>

```typescript
public readonly StartQueryWorkloadInsightsTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the StartQueryWorkloadInsightsTopContributors API call.

---

##### `StartQueryWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="StartQueryWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StartQueryWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly StartQueryWorkloadInsightsTopContributorsData: string[];
```

- *Type:* string[]

IAM actions required for the StartQueryWorkloadInsightsTopContributorsData API call.

---

##### `StopQueryMonitorTopContributors`<sup>Required</sup> <a name="StopQueryMonitorTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StopQueryMonitorTopContributors"></a>

```typescript
public readonly StopQueryMonitorTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the StopQueryMonitorTopContributors API call.

---

##### `StopQueryWorkloadInsightsTopContributors`<sup>Required</sup> <a name="StopQueryWorkloadInsightsTopContributors" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StopQueryWorkloadInsightsTopContributors"></a>

```typescript
public readonly StopQueryWorkloadInsightsTopContributors: string[];
```

- *Type:* string[]

IAM actions required for the StopQueryWorkloadInsightsTopContributors API call.

---

##### `StopQueryWorkloadInsightsTopContributorsData`<sup>Required</sup> <a name="StopQueryWorkloadInsightsTopContributorsData" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.StopQueryWorkloadInsightsTopContributorsData"></a>

```typescript
public readonly StopQueryWorkloadInsightsTopContributorsData: string[];
```

- *Type:* string[]

IAM actions required for the StopQueryWorkloadInsightsTopContributorsData API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateMonitor`<sup>Required</sup> <a name="UpdateMonitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.UpdateMonitor"></a>

```typescript
public readonly UpdateMonitor: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMonitor API call.

---

##### `UpdateScope`<sup>Required</sup> <a name="UpdateScope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorOperations.property.UpdateScope"></a>

```typescript
public readonly UpdateScope: string[];
```

- *Type:* string[]

IAM actions required for the UpdateScope API call.

---

### NetworkflowmonitorResources <a name="NetworkflowmonitorResources" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources"></a>

ARN builders, validators, and parsers for networkflowmonitor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.Initializer"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

new networkflowmonitor.NetworkflowmonitorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.isValidMonitorArn">isValidMonitorArn</a></code> | Validates whether a string is a valid ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.isValidScopeArn">isValidScopeArn</a></code> | Validates whether a string is a valid ARN for the scope resource. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.monitor">monitor</a></code> | Builds an ARN for the monitor resource. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.parseMonitorArn">parseMonitorArn</a></code> | Parses a monitor ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.parseScopeArn">parseScopeArn</a></code> | Parses a scope ARN into its components. |
| <code><a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.scope">scope</a></code> | Builds an ARN for the scope resource. |

---

##### `isValidMonitorArn` <a name="isValidMonitorArn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.isValidMonitorArn"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorResources.isValidMonitorArn(arn: string)
```

Validates whether a string is a valid ARN for the monitor resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.isValidMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidScopeArn` <a name="isValidScopeArn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.isValidScopeArn"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorResources.isValidScopeArn(arn: string)
```

Validates whether a string is a valid ARN for the scope resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.isValidScopeArn.parameter.arn"></a>

- *Type:* string

---

##### `monitor` <a name="monitor" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.monitor"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorResources.monitor(props: NetworkflowmonitorMonitorArnProps)
```

Builds an ARN for the monitor resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.monitor.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorMonitorArnProps">NetworkflowmonitorMonitorArnProps</a>

---

##### `parseMonitorArn` <a name="parseMonitorArn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.parseMonitorArn"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorResources.parseMonitorArn(arn: string)
```

Parses a monitor ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.parseMonitorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScopeArn` <a name="parseScopeArn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.parseScopeArn"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorResources.parseScopeArn(arn: string)
```

Parses a scope ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.parseScopeArn.parameter.arn"></a>

- *Type:* string

---

##### `scope` <a name="scope" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.scope"></a>

```typescript
import { networkflowmonitor } from '@cdk_utils/iam'

networkflowmonitor.NetworkflowmonitorResources.scope(props: NetworkflowmonitorScopeArnProps)
```

Builds an ARN for the scope resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorResources.scope.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.networkflowmonitor.NetworkflowmonitorScopeArnProps">NetworkflowmonitorScopeArnProps</a>

---




