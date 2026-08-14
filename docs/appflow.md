# `appflow` Submodule <a name="`appflow` Submodule" id="@cdk_utils/iam.appflow"></a>


## Structs <a name="Structs" id="Structs"></a>

### AppflowConnectorArnComponents <a name="AppflowConnectorArnComponents" id="@cdk_utils/iam.appflow.AppflowConnectorArnComponents"></a>

Parsed components of a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appflow.AppflowConnectorArnComponents.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

const appflowConnectorArnComponents: appflow.AppflowConnectorArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.connectorLabel">connectorLabel</a></code> | <code>string</code> | The ConnectorLabel component. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `connectorLabel`<sup>Required</sup> <a name="connectorLabel" id="@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.connectorLabel"></a>

```typescript
public readonly connectorLabel: string;
```

- *Type:* string

The ConnectorLabel component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appflow.AppflowConnectorArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppflowConnectorArnProps <a name="AppflowConnectorArnProps" id="@cdk_utils/iam.appflow.AppflowConnectorArnProps"></a>

Properties for building a connector ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appflow.AppflowConnectorArnProps.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

const appflowConnectorArnProps: appflow.AppflowConnectorArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.connectorLabel">connectorLabel</a></code> | <code>string</code> | The ConnectorLabel component of the ARN. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `connectorLabel`<sup>Required</sup> <a name="connectorLabel" id="@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.connectorLabel"></a>

```typescript
public readonly connectorLabel: string;
```

- *Type:* string

The ConnectorLabel component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appflow.AppflowConnectorArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppflowConnectorprofileArnComponents <a name="AppflowConnectorprofileArnComponents" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents"></a>

Parsed components of a connectorprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

const appflowConnectorprofileArnComponents: appflow.AppflowConnectorprofileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.profileName">profileName</a></code> | <code>string</code> | The ProfileName component. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The ProfileName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppflowConnectorprofileArnProps <a name="AppflowConnectorprofileArnProps" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps"></a>

Properties for building a connectorprofile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

const appflowConnectorprofileArnProps: appflow.AppflowConnectorprofileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.profileName">profileName</a></code> | <code>string</code> | The ProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The ProfileName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AppflowFlowArnComponents <a name="AppflowFlowArnComponents" id="@cdk_utils/iam.appflow.AppflowFlowArnComponents"></a>

Parsed components of a flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appflow.AppflowFlowArnComponents.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

const appflowFlowArnComponents: appflow.AppflowFlowArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.appflow.AppflowFlowArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AppflowFlowArnProps <a name="AppflowFlowArnProps" id="@cdk_utils/iam.appflow.AppflowFlowArnProps"></a>

Properties for building a flow ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.appflow.AppflowFlowArnProps.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

const appflowFlowArnProps: appflow.AppflowFlowArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnProps.property.flowName">flowName</a></code> | <code>string</code> | The FlowName component of the ARN. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowFlowArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `flowName`<sup>Required</sup> <a name="flowName" id="@cdk_utils/iam.appflow.AppflowFlowArnProps.property.flowName"></a>

```typescript
public readonly flowName: string;
```

- *Type:* string

The FlowName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.appflow.AppflowFlowArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.appflow.AppflowFlowArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.appflow.AppflowFlowArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AppflowActions <a name="AppflowActions" id="@cdk_utils/iam.appflow.AppflowActions"></a>

IAM action constants for the appflow service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appflow.AppflowActions.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

new appflow.AppflowActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.CancelFlowExecutions">CancelFlowExecutions</a></code> | <code>string</code> | [Write] appflow:CancelFlowExecutions. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.CreateConnectorProfile">CreateConnectorProfile</a></code> | <code>string</code> | [Write] appflow:CreateConnectorProfile. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.CreateFlow">CreateFlow</a></code> | <code>string</code> | [Write] appflow:CreateFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DeleteConnectorProfile">DeleteConnectorProfile</a></code> | <code>string</code> | [Write] appflow:DeleteConnectorProfile. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DeleteFlow">DeleteFlow</a></code> | <code>string</code> | [Write] appflow:DeleteFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnector">DescribeConnector</a></code> | <code>string</code> | [Read] appflow:DescribeConnector. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectorEntity">DescribeConnectorEntity</a></code> | <code>string</code> | [Read] appflow:DescribeConnectorEntity. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectorFields">DescribeConnectorFields</a></code> | <code>string</code> | [Read] appflow:DescribeConnectorFields. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectorProfiles">DescribeConnectorProfiles</a></code> | <code>string</code> | [Read] appflow:DescribeConnectorProfiles. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectors">DescribeConnectors</a></code> | <code>string</code> | [Read] appflow:DescribeConnectors. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlow">DescribeFlow</a></code> | <code>string</code> | [Read] appflow:DescribeFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlowExecution">DescribeFlowExecution</a></code> | <code>string</code> | [Read] appflow:DescribeFlowExecution. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlowExecutionRecords">DescribeFlowExecutionRecords</a></code> | <code>string</code> | [Read] appflow:DescribeFlowExecutionRecords. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlows">DescribeFlows</a></code> | <code>string</code> | [Read] appflow:DescribeFlows. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.ListConnectorEntities">ListConnectorEntities</a></code> | <code>string</code> | [List] appflow:ListConnectorEntities. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.ListConnectorFields">ListConnectorFields</a></code> | <code>string</code> | [Read] appflow:ListConnectorFields. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.ListConnectors">ListConnectors</a></code> | <code>string</code> | [List] appflow:ListConnectors. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.ListFlows">ListFlows</a></code> | <code>string</code> | [List] appflow:ListFlows. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] appflow:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.RegisterConnector">RegisterConnector</a></code> | <code>string</code> | [Write] appflow:RegisterConnector. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.ResetConnectorMetadataCache">ResetConnectorMetadataCache</a></code> | <code>string</code> | [Write] appflow:ResetConnectorMetadataCache. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.RunFlow">RunFlow</a></code> | <code>string</code> | [Write] appflow:RunFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.StartFlow">StartFlow</a></code> | <code>string</code> | [Write] appflow:StartFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.StopFlow">StopFlow</a></code> | <code>string</code> | [Write] appflow:StopFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] appflow:TagResource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.UnRegisterConnector">UnRegisterConnector</a></code> | <code>string</code> | [Write] appflow:UnRegisterConnector. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] appflow:UntagResource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.UpdateConnectorProfile">UpdateConnectorProfile</a></code> | <code>string</code> | [Write] appflow:UpdateConnectorProfile. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.UpdateConnectorRegistration">UpdateConnectorRegistration</a></code> | <code>string</code> | [Write] appflow:UpdateConnectorRegistration. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.UpdateFlow">UpdateFlow</a></code> | <code>string</code> | [Write] appflow:UpdateFlow. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowActions.property.UseConnectorProfile">UseConnectorProfile</a></code> | <code>string</code> | [Write] appflow:UseConnectorProfile. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.appflow.AppflowActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.appflow.AppflowActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.appflow.AppflowActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.appflow.AppflowActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.appflow.AppflowActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelFlowExecutions`<sup>Required</sup> <a name="CancelFlowExecutions" id="@cdk_utils/iam.appflow.AppflowActions.property.CancelFlowExecutions"></a>

```typescript
public readonly CancelFlowExecutions: string;
```

- *Type:* string

[Write] appflow:CancelFlowExecutions.

---

##### `CreateConnectorProfile`<sup>Required</sup> <a name="CreateConnectorProfile" id="@cdk_utils/iam.appflow.AppflowActions.property.CreateConnectorProfile"></a>

```typescript
public readonly CreateConnectorProfile: string;
```

- *Type:* string

[Write] appflow:CreateConnectorProfile.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string;
```

- *Type:* string

[Write] appflow:CreateFlow.

---

##### `DeleteConnectorProfile`<sup>Required</sup> <a name="DeleteConnectorProfile" id="@cdk_utils/iam.appflow.AppflowActions.property.DeleteConnectorProfile"></a>

```typescript
public readonly DeleteConnectorProfile: string;
```

- *Type:* string

[Write] appflow:DeleteConnectorProfile.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string;
```

- *Type:* string

[Write] appflow:DeleteFlow.

---

##### `DescribeConnector`<sup>Required</sup> <a name="DescribeConnector" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnector"></a>

```typescript
public readonly DescribeConnector: string;
```

- *Type:* string

[Read] appflow:DescribeConnector.

---

##### `DescribeConnectorEntity`<sup>Required</sup> <a name="DescribeConnectorEntity" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectorEntity"></a>

```typescript
public readonly DescribeConnectorEntity: string;
```

- *Type:* string

[Read] appflow:DescribeConnectorEntity.

---

##### `DescribeConnectorFields`<sup>Required</sup> <a name="DescribeConnectorFields" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectorFields"></a>

```typescript
public readonly DescribeConnectorFields: string;
```

- *Type:* string

[Read] appflow:DescribeConnectorFields.

---

##### `DescribeConnectorProfiles`<sup>Required</sup> <a name="DescribeConnectorProfiles" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectorProfiles"></a>

```typescript
public readonly DescribeConnectorProfiles: string;
```

- *Type:* string

[Read] appflow:DescribeConnectorProfiles.

---

##### `DescribeConnectors`<sup>Required</sup> <a name="DescribeConnectors" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeConnectors"></a>

```typescript
public readonly DescribeConnectors: string;
```

- *Type:* string

[Read] appflow:DescribeConnectors.

---

##### `DescribeFlow`<sup>Required</sup> <a name="DescribeFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlow"></a>

```typescript
public readonly DescribeFlow: string;
```

- *Type:* string

[Read] appflow:DescribeFlow.

---

##### `DescribeFlowExecution`<sup>Required</sup> <a name="DescribeFlowExecution" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlowExecution"></a>

```typescript
public readonly DescribeFlowExecution: string;
```

- *Type:* string

[Read] appflow:DescribeFlowExecution.

---

##### `DescribeFlowExecutionRecords`<sup>Required</sup> <a name="DescribeFlowExecutionRecords" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlowExecutionRecords"></a>

```typescript
public readonly DescribeFlowExecutionRecords: string;
```

- *Type:* string

[Read] appflow:DescribeFlowExecutionRecords.

---

##### `DescribeFlows`<sup>Required</sup> <a name="DescribeFlows" id="@cdk_utils/iam.appflow.AppflowActions.property.DescribeFlows"></a>

```typescript
public readonly DescribeFlows: string;
```

- *Type:* string

[Read] appflow:DescribeFlows.

---

##### `ListConnectorEntities`<sup>Required</sup> <a name="ListConnectorEntities" id="@cdk_utils/iam.appflow.AppflowActions.property.ListConnectorEntities"></a>

```typescript
public readonly ListConnectorEntities: string;
```

- *Type:* string

[List] appflow:ListConnectorEntities.

---

##### `ListConnectorFields`<sup>Required</sup> <a name="ListConnectorFields" id="@cdk_utils/iam.appflow.AppflowActions.property.ListConnectorFields"></a>

```typescript
public readonly ListConnectorFields: string;
```

- *Type:* string

[Read] appflow:ListConnectorFields.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.appflow.AppflowActions.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string;
```

- *Type:* string

[List] appflow:ListConnectors.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.appflow.AppflowActions.property.ListFlows"></a>

```typescript
public readonly ListFlows: string;
```

- *Type:* string

[List] appflow:ListFlows.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appflow.AppflowActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] appflow:ListTagsForResource.

---

##### `RegisterConnector`<sup>Required</sup> <a name="RegisterConnector" id="@cdk_utils/iam.appflow.AppflowActions.property.RegisterConnector"></a>

```typescript
public readonly RegisterConnector: string;
```

- *Type:* string

[Write] appflow:RegisterConnector.

---

##### `ResetConnectorMetadataCache`<sup>Required</sup> <a name="ResetConnectorMetadataCache" id="@cdk_utils/iam.appflow.AppflowActions.property.ResetConnectorMetadataCache"></a>

```typescript
public readonly ResetConnectorMetadataCache: string;
```

- *Type:* string

[Write] appflow:ResetConnectorMetadataCache.

---

##### `RunFlow`<sup>Required</sup> <a name="RunFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.RunFlow"></a>

```typescript
public readonly RunFlow: string;
```

- *Type:* string

[Write] appflow:RunFlow.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.appflow.AppflowActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.StartFlow"></a>

```typescript
public readonly StartFlow: string;
```

- *Type:* string

[Write] appflow:StartFlow.

---

##### `StopFlow`<sup>Required</sup> <a name="StopFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.StopFlow"></a>

```typescript
public readonly StopFlow: string;
```

- *Type:* string

[Write] appflow:StopFlow.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appflow.AppflowActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] appflow:TagResource.

---

##### `UnRegisterConnector`<sup>Required</sup> <a name="UnRegisterConnector" id="@cdk_utils/iam.appflow.AppflowActions.property.UnRegisterConnector"></a>

```typescript
public readonly UnRegisterConnector: string;
```

- *Type:* string

[Write] appflow:UnRegisterConnector.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appflow.AppflowActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] appflow:UntagResource.

---

##### `UpdateConnectorProfile`<sup>Required</sup> <a name="UpdateConnectorProfile" id="@cdk_utils/iam.appflow.AppflowActions.property.UpdateConnectorProfile"></a>

```typescript
public readonly UpdateConnectorProfile: string;
```

- *Type:* string

[Write] appflow:UpdateConnectorProfile.

---

##### `UpdateConnectorRegistration`<sup>Required</sup> <a name="UpdateConnectorRegistration" id="@cdk_utils/iam.appflow.AppflowActions.property.UpdateConnectorRegistration"></a>

```typescript
public readonly UpdateConnectorRegistration: string;
```

- *Type:* string

[Write] appflow:UpdateConnectorRegistration.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.appflow.AppflowActions.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string;
```

- *Type:* string

[Write] appflow:UpdateFlow.

---

##### `UseConnectorProfile`<sup>Required</sup> <a name="UseConnectorProfile" id="@cdk_utils/iam.appflow.AppflowActions.property.UseConnectorProfile"></a>

```typescript
public readonly UseConnectorProfile: string;
```

- *Type:* string

[Write] appflow:UseConnectorProfile.

---

### AppflowConditions <a name="AppflowConditions" id="@cdk_utils/iam.appflow.AppflowConditions"></a>

Condition key constants and builders for appflow.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appflow.AppflowConditions.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

new appflow.AppflowConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.appflow.AppflowConditions.requestTag"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appflow.AppflowConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.appflow.AppflowConditions.resourceTag"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.appflow.AppflowConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.appflow.AppflowConditions.tagKeys"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.appflow.AppflowConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.CreateFlowConditionKeys">CreateFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateFlow action. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.DeleteFlowConditionKeys">DeleteFlowConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteFlow action. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.RegisterConnectorConditionKeys">RegisterConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterConnector action. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.UnRegisterConnectorConditionKeys">UnRegisterConnectorConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnRegisterConnector action. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.appflow.AppflowConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.appflow.AppflowConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.appflow.AppflowConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateFlowConditionKeys`<sup>Required</sup> <a name="CreateFlowConditionKeys" id="@cdk_utils/iam.appflow.AppflowConditions.property.CreateFlowConditionKeys"></a>

```typescript
public readonly CreateFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateFlow action.

---

##### `DeleteFlowConditionKeys`<sup>Required</sup> <a name="DeleteFlowConditionKeys" id="@cdk_utils/iam.appflow.AppflowConditions.property.DeleteFlowConditionKeys"></a>

```typescript
public readonly DeleteFlowConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteFlow action.

---

##### `RegisterConnectorConditionKeys`<sup>Required</sup> <a name="RegisterConnectorConditionKeys" id="@cdk_utils/iam.appflow.AppflowConditions.property.RegisterConnectorConditionKeys"></a>

```typescript
public readonly RegisterConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterConnector action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.appflow.AppflowConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnRegisterConnectorConditionKeys`<sup>Required</sup> <a name="UnRegisterConnectorConditionKeys" id="@cdk_utils/iam.appflow.AppflowConditions.property.UnRegisterConnectorConditionKeys"></a>

```typescript
public readonly UnRegisterConnectorConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnRegisterConnector action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.appflow.AppflowConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AppflowOperations <a name="AppflowOperations" id="@cdk_utils/iam.appflow.AppflowOperations"></a>

API operation to required IAM actions mapping for appflow.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appflow.AppflowOperations.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

new appflow.AppflowOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.CancelFlowExecutions">CancelFlowExecutions</a></code> | <code>string[]</code> | IAM actions required for the CancelFlowExecutions API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.CreateConnectorProfile">CreateConnectorProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateConnectorProfile API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.CreateFlow">CreateFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateFlow API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DeleteConnectorProfile">DeleteConnectorProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteConnectorProfile API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DeleteFlow">DeleteFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteFlow API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnector">DescribeConnector</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnector API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnectorEntity">DescribeConnectorEntity</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectorEntity API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnectorProfiles">DescribeConnectorProfiles</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectorProfiles API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnectors">DescribeConnectors</a></code> | <code>string[]</code> | IAM actions required for the DescribeConnectors API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DescribeFlow">DescribeFlow</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlow API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.DescribeFlowExecutionRecords">DescribeFlowExecutionRecords</a></code> | <code>string[]</code> | IAM actions required for the DescribeFlowExecutionRecords API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.ListConnectorEntities">ListConnectorEntities</a></code> | <code>string[]</code> | IAM actions required for the ListConnectorEntities API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.ListConnectors">ListConnectors</a></code> | <code>string[]</code> | IAM actions required for the ListConnectors API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.ListFlows">ListFlows</a></code> | <code>string[]</code> | IAM actions required for the ListFlows API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.RegisterConnector">RegisterConnector</a></code> | <code>string[]</code> | IAM actions required for the RegisterConnector API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.ResetConnectorMetadataCache">ResetConnectorMetadataCache</a></code> | <code>string[]</code> | IAM actions required for the ResetConnectorMetadataCache API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.StartFlow">StartFlow</a></code> | <code>string[]</code> | IAM actions required for the StartFlow API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.StopFlow">StopFlow</a></code> | <code>string[]</code> | IAM actions required for the StopFlow API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.UnregisterConnector">UnregisterConnector</a></code> | <code>string[]</code> | IAM actions required for the UnregisterConnector API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.UpdateConnectorProfile">UpdateConnectorProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectorProfile API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.UpdateConnectorRegistration">UpdateConnectorRegistration</a></code> | <code>string[]</code> | IAM actions required for the UpdateConnectorRegistration API call. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowOperations.property.UpdateFlow">UpdateFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateFlow API call. |

---

##### `CancelFlowExecutions`<sup>Required</sup> <a name="CancelFlowExecutions" id="@cdk_utils/iam.appflow.AppflowOperations.property.CancelFlowExecutions"></a>

```typescript
public readonly CancelFlowExecutions: string[];
```

- *Type:* string[]

IAM actions required for the CancelFlowExecutions API call.

---

##### `CreateConnectorProfile`<sup>Required</sup> <a name="CreateConnectorProfile" id="@cdk_utils/iam.appflow.AppflowOperations.property.CreateConnectorProfile"></a>

```typescript
public readonly CreateConnectorProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateConnectorProfile API call.

---

##### `CreateFlow`<sup>Required</sup> <a name="CreateFlow" id="@cdk_utils/iam.appflow.AppflowOperations.property.CreateFlow"></a>

```typescript
public readonly CreateFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateFlow API call.

---

##### `DeleteConnectorProfile`<sup>Required</sup> <a name="DeleteConnectorProfile" id="@cdk_utils/iam.appflow.AppflowOperations.property.DeleteConnectorProfile"></a>

```typescript
public readonly DeleteConnectorProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConnectorProfile API call.

---

##### `DeleteFlow`<sup>Required</sup> <a name="DeleteFlow" id="@cdk_utils/iam.appflow.AppflowOperations.property.DeleteFlow"></a>

```typescript
public readonly DeleteFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFlow API call.

---

##### `DescribeConnector`<sup>Required</sup> <a name="DescribeConnector" id="@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnector"></a>

```typescript
public readonly DescribeConnector: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnector API call.

---

##### `DescribeConnectorEntity`<sup>Required</sup> <a name="DescribeConnectorEntity" id="@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnectorEntity"></a>

```typescript
public readonly DescribeConnectorEntity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectorEntity API call.

---

##### `DescribeConnectorProfiles`<sup>Required</sup> <a name="DescribeConnectorProfiles" id="@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnectorProfiles"></a>

```typescript
public readonly DescribeConnectorProfiles: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectorProfiles API call.

---

##### `DescribeConnectors`<sup>Required</sup> <a name="DescribeConnectors" id="@cdk_utils/iam.appflow.AppflowOperations.property.DescribeConnectors"></a>

```typescript
public readonly DescribeConnectors: string[];
```

- *Type:* string[]

IAM actions required for the DescribeConnectors API call.

---

##### `DescribeFlow`<sup>Required</sup> <a name="DescribeFlow" id="@cdk_utils/iam.appflow.AppflowOperations.property.DescribeFlow"></a>

```typescript
public readonly DescribeFlow: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlow API call.

---

##### `DescribeFlowExecutionRecords`<sup>Required</sup> <a name="DescribeFlowExecutionRecords" id="@cdk_utils/iam.appflow.AppflowOperations.property.DescribeFlowExecutionRecords"></a>

```typescript
public readonly DescribeFlowExecutionRecords: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFlowExecutionRecords API call.

---

##### `ListConnectorEntities`<sup>Required</sup> <a name="ListConnectorEntities" id="@cdk_utils/iam.appflow.AppflowOperations.property.ListConnectorEntities"></a>

```typescript
public readonly ListConnectorEntities: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectorEntities API call.

---

##### `ListConnectors`<sup>Required</sup> <a name="ListConnectors" id="@cdk_utils/iam.appflow.AppflowOperations.property.ListConnectors"></a>

```typescript
public readonly ListConnectors: string[];
```

- *Type:* string[]

IAM actions required for the ListConnectors API call.

---

##### `ListFlows`<sup>Required</sup> <a name="ListFlows" id="@cdk_utils/iam.appflow.AppflowOperations.property.ListFlows"></a>

```typescript
public readonly ListFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListFlows API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.appflow.AppflowOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `RegisterConnector`<sup>Required</sup> <a name="RegisterConnector" id="@cdk_utils/iam.appflow.AppflowOperations.property.RegisterConnector"></a>

```typescript
public readonly RegisterConnector: string[];
```

- *Type:* string[]

IAM actions required for the RegisterConnector API call.

---

##### `ResetConnectorMetadataCache`<sup>Required</sup> <a name="ResetConnectorMetadataCache" id="@cdk_utils/iam.appflow.AppflowOperations.property.ResetConnectorMetadataCache"></a>

```typescript
public readonly ResetConnectorMetadataCache: string[];
```

- *Type:* string[]

IAM actions required for the ResetConnectorMetadataCache API call.

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdk_utils/iam.appflow.AppflowOperations.property.StartFlow"></a>

```typescript
public readonly StartFlow: string[];
```

- *Type:* string[]

IAM actions required for the StartFlow API call.

---

##### `StopFlow`<sup>Required</sup> <a name="StopFlow" id="@cdk_utils/iam.appflow.AppflowOperations.property.StopFlow"></a>

```typescript
public readonly StopFlow: string[];
```

- *Type:* string[]

IAM actions required for the StopFlow API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.appflow.AppflowOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UnregisterConnector`<sup>Required</sup> <a name="UnregisterConnector" id="@cdk_utils/iam.appflow.AppflowOperations.property.UnregisterConnector"></a>

```typescript
public readonly UnregisterConnector: string[];
```

- *Type:* string[]

IAM actions required for the UnregisterConnector API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.appflow.AppflowOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateConnectorProfile`<sup>Required</sup> <a name="UpdateConnectorProfile" id="@cdk_utils/iam.appflow.AppflowOperations.property.UpdateConnectorProfile"></a>

```typescript
public readonly UpdateConnectorProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectorProfile API call.

---

##### `UpdateConnectorRegistration`<sup>Required</sup> <a name="UpdateConnectorRegistration" id="@cdk_utils/iam.appflow.AppflowOperations.property.UpdateConnectorRegistration"></a>

```typescript
public readonly UpdateConnectorRegistration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateConnectorRegistration API call.

---

##### `UpdateFlow`<sup>Required</sup> <a name="UpdateFlow" id="@cdk_utils/iam.appflow.AppflowOperations.property.UpdateFlow"></a>

```typescript
public readonly UpdateFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateFlow API call.

---

### AppflowResources <a name="AppflowResources" id="@cdk_utils/iam.appflow.AppflowResources"></a>

ARN builders, validators, and parsers for appflow resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.appflow.AppflowResources.Initializer"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

new appflow.AppflowResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.connector">connector</a></code> | Builds an ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.connectorprofile">connectorprofile</a></code> | Builds an ARN for the connectorprofile resource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.flow">flow</a></code> | Builds an ARN for the flow resource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.isValidConnectorArn">isValidConnectorArn</a></code> | Validates whether a string is a valid ARN for the connector resource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.isValidConnectorprofileArn">isValidConnectorprofileArn</a></code> | Validates whether a string is a valid ARN for the connectorprofile resource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.isValidFlowArn">isValidFlowArn</a></code> | Validates whether a string is a valid ARN for the flow resource. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.parseConnectorArn">parseConnectorArn</a></code> | Parses a connector ARN into its components. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.parseConnectorprofileArn">parseConnectorprofileArn</a></code> | Parses a connectorprofile ARN into its components. |
| <code><a href="#@cdk_utils/iam.appflow.AppflowResources.parseFlowArn">parseFlowArn</a></code> | Parses a flow ARN into its components. |

---

##### `connector` <a name="connector" id="@cdk_utils/iam.appflow.AppflowResources.connector"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.connector(props: AppflowConnectorArnProps)
```

Builds an ARN for the connector resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appflow.AppflowResources.connector.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appflow.AppflowConnectorArnProps">AppflowConnectorArnProps</a>

---

##### `connectorprofile` <a name="connectorprofile" id="@cdk_utils/iam.appflow.AppflowResources.connectorprofile"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.connectorprofile(props: AppflowConnectorprofileArnProps)
```

Builds an ARN for the connectorprofile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appflow.AppflowResources.connectorprofile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appflow.AppflowConnectorprofileArnProps">AppflowConnectorprofileArnProps</a>

---

##### `flow` <a name="flow" id="@cdk_utils/iam.appflow.AppflowResources.flow"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.flow(props: AppflowFlowArnProps)
```

Builds an ARN for the flow resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.appflow.AppflowResources.flow.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.appflow.AppflowFlowArnProps">AppflowFlowArnProps</a>

---

##### `isValidConnectorArn` <a name="isValidConnectorArn" id="@cdk_utils/iam.appflow.AppflowResources.isValidConnectorArn"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.isValidConnectorArn(arn: string)
```

Validates whether a string is a valid ARN for the connector resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appflow.AppflowResources.isValidConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidConnectorprofileArn` <a name="isValidConnectorprofileArn" id="@cdk_utils/iam.appflow.AppflowResources.isValidConnectorprofileArn"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.isValidConnectorprofileArn(arn: string)
```

Validates whether a string is a valid ARN for the connectorprofile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appflow.AppflowResources.isValidConnectorprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFlowArn` <a name="isValidFlowArn" id="@cdk_utils/iam.appflow.AppflowResources.isValidFlowArn"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.isValidFlowArn(arn: string)
```

Validates whether a string is a valid ARN for the flow resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appflow.AppflowResources.isValidFlowArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorArn` <a name="parseConnectorArn" id="@cdk_utils/iam.appflow.AppflowResources.parseConnectorArn"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.parseConnectorArn(arn: string)
```

Parses a connector ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appflow.AppflowResources.parseConnectorArn.parameter.arn"></a>

- *Type:* string

---

##### `parseConnectorprofileArn` <a name="parseConnectorprofileArn" id="@cdk_utils/iam.appflow.AppflowResources.parseConnectorprofileArn"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.parseConnectorprofileArn(arn: string)
```

Parses a connectorprofile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appflow.AppflowResources.parseConnectorprofileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFlowArn` <a name="parseFlowArn" id="@cdk_utils/iam.appflow.AppflowResources.parseFlowArn"></a>

```typescript
import { appflow } from '@cdk_utils/iam'

appflow.AppflowResources.parseFlowArn(arn: string)
```

Parses a flow ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.appflow.AppflowResources.parseFlowArn.parameter.arn"></a>

- *Type:* string

---




