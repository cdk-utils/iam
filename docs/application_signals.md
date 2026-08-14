# `application_signals` Submodule <a name="`application_signals` Submodule" id="@cdk_utils/iam.application_signals"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApplicationSignalsInstrumentationConfigArnComponents <a name="ApplicationSignalsInstrumentationConfigArnComponents" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents"></a>

Parsed components of a instrumentationConfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

const applicationSignalsInstrumentationConfigArnComponents: application_signals.ApplicationSignalsInstrumentationConfigArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.environment">environment</a></code> | <code>string</code> | The Environment component. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.locationHash">locationHash</a></code> | <code>string</code> | The LocationHash component. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.service">service</a></code> | <code>string</code> | The Service component. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.signalType">signalType</a></code> | <code>string</code> | The SignalType component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Environment component.

---

##### `locationHash`<sup>Required</sup> <a name="locationHash" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.locationHash"></a>

```typescript
public readonly locationHash: string;
```

- *Type:* string

The LocationHash component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The Service component.

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnComponents.property.signalType"></a>

```typescript
public readonly signalType: string;
```

- *Type:* string

The SignalType component.

---

### ApplicationSignalsInstrumentationConfigArnProps <a name="ApplicationSignalsInstrumentationConfigArnProps" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps"></a>

Properties for building a instrumentationConfig ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

const applicationSignalsInstrumentationConfigArnProps: application_signals.ApplicationSignalsInstrumentationConfigArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.environment">environment</a></code> | <code>string</code> | The Environment component of the ARN. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.locationHash">locationHash</a></code> | <code>string</code> | The LocationHash component of the ARN. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.service">service</a></code> | <code>string</code> | The Service component of the ARN. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.signalType">signalType</a></code> | <code>string</code> | The SignalType component of the ARN. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

The Environment component of the ARN.

---

##### `locationHash`<sup>Required</sup> <a name="locationHash" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.locationHash"></a>

```typescript
public readonly locationHash: string;
```

- *Type:* string

The LocationHash component of the ARN.

---

##### `service`<sup>Required</sup> <a name="service" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The Service component of the ARN.

---

##### `signalType`<sup>Required</sup> <a name="signalType" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.signalType"></a>

```typescript
public readonly signalType: string;
```

- *Type:* string

The SignalType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ApplicationSignalsSloArnComponents <a name="ApplicationSignalsSloArnComponents" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents"></a>

Parsed components of a slo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

const applicationSignalsSloArnComponents: application_signals.ApplicationSignalsSloArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.sloName">sloName</a></code> | <code>string</code> | The SloName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `sloName`<sup>Required</sup> <a name="sloName" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnComponents.property.sloName"></a>

```typescript
public readonly sloName: string;
```

- *Type:* string

The SloName component.

---

### ApplicationSignalsSloArnProps <a name="ApplicationSignalsSloArnProps" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps"></a>

Properties for building a slo ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

const applicationSignalsSloArnProps: application_signals.ApplicationSignalsSloArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.sloName">sloName</a></code> | <code>string</code> | The SloName component of the ARN. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `sloName`<sup>Required</sup> <a name="sloName" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.sloName"></a>

```typescript
public readonly sloName: string;
```

- *Type:* string

The SloName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationSignalsActions <a name="ApplicationSignalsActions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions"></a>

IAM action constants for the application-signals service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

new application_signals.ApplicationSignalsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetInstrumentationConfiguration">actionGetInstrumentationConfiguration</a></code> | <code>string</code> | [Read] application-signals:GetInstrumentationConfiguration. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetInstrumentationConfigurationStatus">actionGetInstrumentationConfigurationStatus</a></code> | <code>string</code> | [Read] application-signals:GetInstrumentationConfigurationStatus. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetService">actionGetService</a></code> | <code>string</code> | [Read] application-signals:GetService. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetServiceLevelObjective">actionGetServiceLevelObjective</a></code> | <code>string</code> | [Read] application-signals:GetServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.BatchDeleteInstrumentationConfigurations">BatchDeleteInstrumentationConfigurations</a></code> | <code>string</code> | [Write] application-signals:BatchDeleteInstrumentationConfigurations. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.BatchGetServiceLevelObjectiveBudgetReport">BatchGetServiceLevelObjectiveBudgetReport</a></code> | <code>string</code> | [Read] application-signals:BatchGetServiceLevelObjectiveBudgetReport. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.BatchUpdateExclusionWindows">BatchUpdateExclusionWindows</a></code> | <code>string</code> | [Write] application-signals:BatchUpdateExclusionWindows. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.CreateInstrumentationConfiguration">CreateInstrumentationConfiguration</a></code> | <code>string</code> | [Write] application-signals:CreateInstrumentationConfiguration. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.CreateServiceLevelObjective">CreateServiceLevelObjective</a></code> | <code>string</code> | [Write] application-signals:CreateServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.DeleteGroupingConfiguration">DeleteGroupingConfiguration</a></code> | <code>string</code> | [Write] application-signals:DeleteGroupingConfiguration. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.DeleteInstrumentationConfiguration">DeleteInstrumentationConfiguration</a></code> | <code>string</code> | [Write] application-signals:DeleteInstrumentationConfiguration. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.DeleteServiceLevelObjective">DeleteServiceLevelObjective</a></code> | <code>string</code> | [Write] application-signals:DeleteServiceLevelObjective. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.Link">Link</a></code> | <code>string</code> | [Write] application-signals:Link. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListAuditFindings">ListAuditFindings</a></code> | <code>string</code> | [List] application-signals:ListAuditFindings. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListEntityEvents">ListEntityEvents</a></code> | <code>string</code> | [List] application-signals:ListEntityEvents. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListGroupingAttributeDefinitions">ListGroupingAttributeDefinitions</a></code> | <code>string</code> | [List] application-signals:ListGroupingAttributeDefinitions. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListInstrumentationConfigurations">ListInstrumentationConfigurations</a></code> | <code>string</code> | [List] application-signals:ListInstrumentationConfigurations. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListObservedEntities">ListObservedEntities</a></code> | <code>string</code> | [List] application-signals:ListObservedEntities. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceDependencies">ListServiceDependencies</a></code> | <code>string</code> | [Read] application-signals:ListServiceDependencies. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceDependents">ListServiceDependents</a></code> | <code>string</code> | [Read] application-signals:ListServiceDependents. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceLevelObjectiveExclusionWindows">ListServiceLevelObjectiveExclusionWindows</a></code> | <code>string</code> | [List] application-signals:ListServiceLevelObjectiveExclusionWindows. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceLevelObjectives">ListServiceLevelObjectives</a></code> | <code>string</code> | [List] application-signals:ListServiceLevelObjectives. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceOperations">ListServiceOperations</a></code> | <code>string</code> | [Read] application-signals:ListServiceOperations. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServices">ListServices</a></code> | <code>string</code> | [List] application-signals:ListServices. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceStates">ListServiceStates</a></code> | <code>string</code> | [List] application-signals:ListServiceStates. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] application-signals:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.PutGroupingConfiguration">PutGroupingConfiguration</a></code> | <code>string</code> | [Write] application-signals:PutGroupingConfiguration. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ReportInstrumentationConfigurationStatus">ReportInstrumentationConfigurationStatus</a></code> | <code>string</code> | [Write] application-signals:ReportInstrumentationConfigurationStatus. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.StartDiscovery">StartDiscovery</a></code> | <code>string</code> | [Write] application-signals:StartDiscovery. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] application-signals:TagResource. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] application-signals:UntagResource. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.UpdateServiceLevelObjective">UpdateServiceLevelObjective</a></code> | <code>string</code> | [Write] application-signals:UpdateServiceLevelObjective. |

---

##### `actionGetInstrumentationConfiguration`<sup>Required</sup> <a name="actionGetInstrumentationConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetInstrumentationConfiguration"></a>

```typescript
public readonly actionGetInstrumentationConfiguration: string;
```

- *Type:* string

[Read] application-signals:GetInstrumentationConfiguration.

---

##### `actionGetInstrumentationConfigurationStatus`<sup>Required</sup> <a name="actionGetInstrumentationConfigurationStatus" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetInstrumentationConfigurationStatus"></a>

```typescript
public readonly actionGetInstrumentationConfigurationStatus: string;
```

- *Type:* string

[Read] application-signals:GetInstrumentationConfigurationStatus.

---

##### `actionGetService`<sup>Required</sup> <a name="actionGetService" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetService"></a>

```typescript
public readonly actionGetService: string;
```

- *Type:* string

[Read] application-signals:GetService.

---

##### `actionGetServiceLevelObjective`<sup>Required</sup> <a name="actionGetServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.actionGetServiceLevelObjective"></a>

```typescript
public readonly actionGetServiceLevelObjective: string;
```

- *Type:* string

[Read] application-signals:GetServiceLevelObjective.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteInstrumentationConfigurations`<sup>Required</sup> <a name="BatchDeleteInstrumentationConfigurations" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.BatchDeleteInstrumentationConfigurations"></a>

```typescript
public readonly BatchDeleteInstrumentationConfigurations: string;
```

- *Type:* string

[Write] application-signals:BatchDeleteInstrumentationConfigurations.

---

##### `BatchGetServiceLevelObjectiveBudgetReport`<sup>Required</sup> <a name="BatchGetServiceLevelObjectiveBudgetReport" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.BatchGetServiceLevelObjectiveBudgetReport"></a>

```typescript
public readonly BatchGetServiceLevelObjectiveBudgetReport: string;
```

- *Type:* string

[Read] application-signals:BatchGetServiceLevelObjectiveBudgetReport.

---

##### `BatchUpdateExclusionWindows`<sup>Required</sup> <a name="BatchUpdateExclusionWindows" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.BatchUpdateExclusionWindows"></a>

```typescript
public readonly BatchUpdateExclusionWindows: string;
```

- *Type:* string

[Write] application-signals:BatchUpdateExclusionWindows.

---

##### `CreateInstrumentationConfiguration`<sup>Required</sup> <a name="CreateInstrumentationConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.CreateInstrumentationConfiguration"></a>

```typescript
public readonly CreateInstrumentationConfiguration: string;
```

- *Type:* string

[Write] application-signals:CreateInstrumentationConfiguration.

---

##### `CreateServiceLevelObjective`<sup>Required</sup> <a name="CreateServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.CreateServiceLevelObjective"></a>

```typescript
public readonly CreateServiceLevelObjective: string;
```

- *Type:* string

[Write] application-signals:CreateServiceLevelObjective.

---

##### `DeleteGroupingConfiguration`<sup>Required</sup> <a name="DeleteGroupingConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.DeleteGroupingConfiguration"></a>

```typescript
public readonly DeleteGroupingConfiguration: string;
```

- *Type:* string

[Write] application-signals:DeleteGroupingConfiguration.

---

##### `DeleteInstrumentationConfiguration`<sup>Required</sup> <a name="DeleteInstrumentationConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.DeleteInstrumentationConfiguration"></a>

```typescript
public readonly DeleteInstrumentationConfiguration: string;
```

- *Type:* string

[Write] application-signals:DeleteInstrumentationConfiguration.

---

##### `DeleteServiceLevelObjective`<sup>Required</sup> <a name="DeleteServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.DeleteServiceLevelObjective"></a>

```typescript
public readonly DeleteServiceLevelObjective: string;
```

- *Type:* string

[Write] application-signals:DeleteServiceLevelObjective.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] application-signals:Link.

---

##### `ListAuditFindings`<sup>Required</sup> <a name="ListAuditFindings" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListAuditFindings"></a>

```typescript
public readonly ListAuditFindings: string;
```

- *Type:* string

[List] application-signals:ListAuditFindings.

---

##### `ListEntityEvents`<sup>Required</sup> <a name="ListEntityEvents" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListEntityEvents"></a>

```typescript
public readonly ListEntityEvents: string;
```

- *Type:* string

[List] application-signals:ListEntityEvents.

---

##### `ListGroupingAttributeDefinitions`<sup>Required</sup> <a name="ListGroupingAttributeDefinitions" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListGroupingAttributeDefinitions"></a>

```typescript
public readonly ListGroupingAttributeDefinitions: string;
```

- *Type:* string

[List] application-signals:ListGroupingAttributeDefinitions.

---

##### `ListInstrumentationConfigurations`<sup>Required</sup> <a name="ListInstrumentationConfigurations" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListInstrumentationConfigurations"></a>

```typescript
public readonly ListInstrumentationConfigurations: string;
```

- *Type:* string

[List] application-signals:ListInstrumentationConfigurations.

---

##### `ListObservedEntities`<sup>Required</sup> <a name="ListObservedEntities" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListObservedEntities"></a>

```typescript
public readonly ListObservedEntities: string;
```

- *Type:* string

[List] application-signals:ListObservedEntities.

---

##### `ListServiceDependencies`<sup>Required</sup> <a name="ListServiceDependencies" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceDependencies"></a>

```typescript
public readonly ListServiceDependencies: string;
```

- *Type:* string

[Read] application-signals:ListServiceDependencies.

---

##### `ListServiceDependents`<sup>Required</sup> <a name="ListServiceDependents" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceDependents"></a>

```typescript
public readonly ListServiceDependents: string;
```

- *Type:* string

[Read] application-signals:ListServiceDependents.

---

##### `ListServiceLevelObjectiveExclusionWindows`<sup>Required</sup> <a name="ListServiceLevelObjectiveExclusionWindows" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceLevelObjectiveExclusionWindows"></a>

```typescript
public readonly ListServiceLevelObjectiveExclusionWindows: string;
```

- *Type:* string

[List] application-signals:ListServiceLevelObjectiveExclusionWindows.

---

##### `ListServiceLevelObjectives`<sup>Required</sup> <a name="ListServiceLevelObjectives" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceLevelObjectives"></a>

```typescript
public readonly ListServiceLevelObjectives: string;
```

- *Type:* string

[List] application-signals:ListServiceLevelObjectives.

---

##### `ListServiceOperations`<sup>Required</sup> <a name="ListServiceOperations" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceOperations"></a>

```typescript
public readonly ListServiceOperations: string;
```

- *Type:* string

[Read] application-signals:ListServiceOperations.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServices"></a>

```typescript
public readonly ListServices: string;
```

- *Type:* string

[List] application-signals:ListServices.

---

##### `ListServiceStates`<sup>Required</sup> <a name="ListServiceStates" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListServiceStates"></a>

```typescript
public readonly ListServiceStates: string;
```

- *Type:* string

[List] application-signals:ListServiceStates.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] application-signals:ListTagsForResource.

---

##### `PutGroupingConfiguration`<sup>Required</sup> <a name="PutGroupingConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.PutGroupingConfiguration"></a>

```typescript
public readonly PutGroupingConfiguration: string;
```

- *Type:* string

[Write] application-signals:PutGroupingConfiguration.

---

##### `ReportInstrumentationConfigurationStatus`<sup>Required</sup> <a name="ReportInstrumentationConfigurationStatus" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.ReportInstrumentationConfigurationStatus"></a>

```typescript
public readonly ReportInstrumentationConfigurationStatus: string;
```

- *Type:* string

[Write] application-signals:ReportInstrumentationConfigurationStatus.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDiscovery`<sup>Required</sup> <a name="StartDiscovery" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.StartDiscovery"></a>

```typescript
public readonly StartDiscovery: string;
```

- *Type:* string

[Write] application-signals:StartDiscovery.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] application-signals:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] application-signals:UntagResource.

---

##### `UpdateServiceLevelObjective`<sup>Required</sup> <a name="UpdateServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsActions.property.UpdateServiceLevelObjective"></a>

```typescript
public readonly UpdateServiceLevelObjective: string;
```

- *Type:* string

[Write] application-signals:UpdateServiceLevelObjective.

---

### ApplicationSignalsConditions <a name="ApplicationSignalsConditions" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions"></a>

Condition key constants and builders for application-signals.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

new application_signals.ApplicationSignalsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.requestTag"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.resourceTag"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.tagKeys"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.CreateInstrumentationConfigurationConditionKeys">CreateInstrumentationConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInstrumentationConfiguration action. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.CreateServiceLevelObjectiveConditionKeys">CreateServiceLevelObjectiveConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateServiceLevelObjective action. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateInstrumentationConfigurationConditionKeys`<sup>Required</sup> <a name="CreateInstrumentationConfigurationConditionKeys" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.CreateInstrumentationConfigurationConditionKeys"></a>

```typescript
public readonly CreateInstrumentationConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInstrumentationConfiguration action.

---

##### `CreateServiceLevelObjectiveConditionKeys`<sup>Required</sup> <a name="CreateServiceLevelObjectiveConditionKeys" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.CreateServiceLevelObjectiveConditionKeys"></a>

```typescript
public readonly CreateServiceLevelObjectiveConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateServiceLevelObjective action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.application_signals.ApplicationSignalsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ApplicationSignalsOperations <a name="ApplicationSignalsOperations" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations"></a>

API operation to required IAM actions mapping for application-signals.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

new application_signals.ApplicationSignalsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.BatchDeleteInstrumentationConfigurations">BatchDeleteInstrumentationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteInstrumentationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.BatchGetServiceLevelObjectiveBudgetReport">BatchGetServiceLevelObjectiveBudgetReport</a></code> | <code>string[]</code> | IAM actions required for the BatchGetServiceLevelObjectiveBudgetReport API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.BatchUpdateExclusionWindows">BatchUpdateExclusionWindows</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateExclusionWindows API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.CreateInstrumentationConfiguration">CreateInstrumentationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateInstrumentationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.CreateServiceLevelObjective">CreateServiceLevelObjective</a></code> | <code>string[]</code> | IAM actions required for the CreateServiceLevelObjective API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.DeleteGroupingConfiguration">DeleteGroupingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroupingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.DeleteInstrumentationConfiguration">DeleteInstrumentationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteInstrumentationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.DeleteServiceLevelObjective">DeleteServiceLevelObjective</a></code> | <code>string[]</code> | IAM actions required for the DeleteServiceLevelObjective API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListAuditFindings">ListAuditFindings</a></code> | <code>string[]</code> | IAM actions required for the ListAuditFindings API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListEntityEvents">ListEntityEvents</a></code> | <code>string[]</code> | IAM actions required for the ListEntityEvents API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListGroupingAttributeDefinitions">ListGroupingAttributeDefinitions</a></code> | <code>string[]</code> | IAM actions required for the ListGroupingAttributeDefinitions API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListInstrumentationConfigurations">ListInstrumentationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListInstrumentationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceDependencies">ListServiceDependencies</a></code> | <code>string[]</code> | IAM actions required for the ListServiceDependencies API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceDependents">ListServiceDependents</a></code> | <code>string[]</code> | IAM actions required for the ListServiceDependents API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceLevelObjectiveExclusionWindows">ListServiceLevelObjectiveExclusionWindows</a></code> | <code>string[]</code> | IAM actions required for the ListServiceLevelObjectiveExclusionWindows API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceLevelObjectives">ListServiceLevelObjectives</a></code> | <code>string[]</code> | IAM actions required for the ListServiceLevelObjectives API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceOperations">ListServiceOperations</a></code> | <code>string[]</code> | IAM actions required for the ListServiceOperations API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServices">ListServices</a></code> | <code>string[]</code> | IAM actions required for the ListServices API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceStates">ListServiceStates</a></code> | <code>string[]</code> | IAM actions required for the ListServiceStates API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetInstrumentationConfiguration">opGetInstrumentationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetInstrumentationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetInstrumentationConfigurationStatus">opGetInstrumentationConfigurationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetInstrumentationConfigurationStatus API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetService">opGetService</a></code> | <code>string[]</code> | IAM actions required for the GetService API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetServiceLevelObjective">opGetServiceLevelObjective</a></code> | <code>string[]</code> | IAM actions required for the GetServiceLevelObjective API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.PutGroupingConfiguration">PutGroupingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutGroupingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ReportInstrumentationConfigurationStatus">ReportInstrumentationConfigurationStatus</a></code> | <code>string[]</code> | IAM actions required for the ReportInstrumentationConfigurationStatus API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.StartDiscovery">StartDiscovery</a></code> | <code>string[]</code> | IAM actions required for the StartDiscovery API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.UpdateServiceLevelObjective">UpdateServiceLevelObjective</a></code> | <code>string[]</code> | IAM actions required for the UpdateServiceLevelObjective API call. |

---

##### `BatchDeleteInstrumentationConfigurations`<sup>Required</sup> <a name="BatchDeleteInstrumentationConfigurations" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.BatchDeleteInstrumentationConfigurations"></a>

```typescript
public readonly BatchDeleteInstrumentationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteInstrumentationConfigurations API call.

---

##### `BatchGetServiceLevelObjectiveBudgetReport`<sup>Required</sup> <a name="BatchGetServiceLevelObjectiveBudgetReport" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.BatchGetServiceLevelObjectiveBudgetReport"></a>

```typescript
public readonly BatchGetServiceLevelObjectiveBudgetReport: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetServiceLevelObjectiveBudgetReport API call.

---

##### `BatchUpdateExclusionWindows`<sup>Required</sup> <a name="BatchUpdateExclusionWindows" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.BatchUpdateExclusionWindows"></a>

```typescript
public readonly BatchUpdateExclusionWindows: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateExclusionWindows API call.

---

##### `CreateInstrumentationConfiguration`<sup>Required</sup> <a name="CreateInstrumentationConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.CreateInstrumentationConfiguration"></a>

```typescript
public readonly CreateInstrumentationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateInstrumentationConfiguration API call.

---

##### `CreateServiceLevelObjective`<sup>Required</sup> <a name="CreateServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.CreateServiceLevelObjective"></a>

```typescript
public readonly CreateServiceLevelObjective: string[];
```

- *Type:* string[]

IAM actions required for the CreateServiceLevelObjective API call.

---

##### `DeleteGroupingConfiguration`<sup>Required</sup> <a name="DeleteGroupingConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.DeleteGroupingConfiguration"></a>

```typescript
public readonly DeleteGroupingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroupingConfiguration API call.

---

##### `DeleteInstrumentationConfiguration`<sup>Required</sup> <a name="DeleteInstrumentationConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.DeleteInstrumentationConfiguration"></a>

```typescript
public readonly DeleteInstrumentationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInstrumentationConfiguration API call.

---

##### `DeleteServiceLevelObjective`<sup>Required</sup> <a name="DeleteServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.DeleteServiceLevelObjective"></a>

```typescript
public readonly DeleteServiceLevelObjective: string[];
```

- *Type:* string[]

IAM actions required for the DeleteServiceLevelObjective API call.

---

##### `ListAuditFindings`<sup>Required</sup> <a name="ListAuditFindings" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListAuditFindings"></a>

```typescript
public readonly ListAuditFindings: string[];
```

- *Type:* string[]

IAM actions required for the ListAuditFindings API call.

---

##### `ListEntityEvents`<sup>Required</sup> <a name="ListEntityEvents" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListEntityEvents"></a>

```typescript
public readonly ListEntityEvents: string[];
```

- *Type:* string[]

IAM actions required for the ListEntityEvents API call.

---

##### `ListGroupingAttributeDefinitions`<sup>Required</sup> <a name="ListGroupingAttributeDefinitions" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListGroupingAttributeDefinitions"></a>

```typescript
public readonly ListGroupingAttributeDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the ListGroupingAttributeDefinitions API call.

---

##### `ListInstrumentationConfigurations`<sup>Required</sup> <a name="ListInstrumentationConfigurations" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListInstrumentationConfigurations"></a>

```typescript
public readonly ListInstrumentationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListInstrumentationConfigurations API call.

---

##### `ListServiceDependencies`<sup>Required</sup> <a name="ListServiceDependencies" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceDependencies"></a>

```typescript
public readonly ListServiceDependencies: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceDependencies API call.

---

##### `ListServiceDependents`<sup>Required</sup> <a name="ListServiceDependents" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceDependents"></a>

```typescript
public readonly ListServiceDependents: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceDependents API call.

---

##### `ListServiceLevelObjectiveExclusionWindows`<sup>Required</sup> <a name="ListServiceLevelObjectiveExclusionWindows" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceLevelObjectiveExclusionWindows"></a>

```typescript
public readonly ListServiceLevelObjectiveExclusionWindows: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceLevelObjectiveExclusionWindows API call.

---

##### `ListServiceLevelObjectives`<sup>Required</sup> <a name="ListServiceLevelObjectives" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceLevelObjectives"></a>

```typescript
public readonly ListServiceLevelObjectives: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceLevelObjectives API call.

---

##### `ListServiceOperations`<sup>Required</sup> <a name="ListServiceOperations" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceOperations"></a>

```typescript
public readonly ListServiceOperations: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceOperations API call.

---

##### `ListServices`<sup>Required</sup> <a name="ListServices" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServices"></a>

```typescript
public readonly ListServices: string[];
```

- *Type:* string[]

IAM actions required for the ListServices API call.

---

##### `ListServiceStates`<sup>Required</sup> <a name="ListServiceStates" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListServiceStates"></a>

```typescript
public readonly ListServiceStates: string[];
```

- *Type:* string[]

IAM actions required for the ListServiceStates API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetInstrumentationConfiguration`<sup>Required</sup> <a name="opGetInstrumentationConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetInstrumentationConfiguration"></a>

```typescript
public readonly opGetInstrumentationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetInstrumentationConfiguration API call.

---

##### `opGetInstrumentationConfigurationStatus`<sup>Required</sup> <a name="opGetInstrumentationConfigurationStatus" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetInstrumentationConfigurationStatus"></a>

```typescript
public readonly opGetInstrumentationConfigurationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetInstrumentationConfigurationStatus API call.

---

##### `opGetService`<sup>Required</sup> <a name="opGetService" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetService"></a>

```typescript
public readonly opGetService: string[];
```

- *Type:* string[]

IAM actions required for the GetService API call.

---

##### `opGetServiceLevelObjective`<sup>Required</sup> <a name="opGetServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.opGetServiceLevelObjective"></a>

```typescript
public readonly opGetServiceLevelObjective: string[];
```

- *Type:* string[]

IAM actions required for the GetServiceLevelObjective API call.

---

##### `PutGroupingConfiguration`<sup>Required</sup> <a name="PutGroupingConfiguration" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.PutGroupingConfiguration"></a>

```typescript
public readonly PutGroupingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutGroupingConfiguration API call.

---

##### `ReportInstrumentationConfigurationStatus`<sup>Required</sup> <a name="ReportInstrumentationConfigurationStatus" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.ReportInstrumentationConfigurationStatus"></a>

```typescript
public readonly ReportInstrumentationConfigurationStatus: string[];
```

- *Type:* string[]

IAM actions required for the ReportInstrumentationConfigurationStatus API call.

---

##### `StartDiscovery`<sup>Required</sup> <a name="StartDiscovery" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.StartDiscovery"></a>

```typescript
public readonly StartDiscovery: string[];
```

- *Type:* string[]

IAM actions required for the StartDiscovery API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateServiceLevelObjective`<sup>Required</sup> <a name="UpdateServiceLevelObjective" id="@cdk_utils/iam.application_signals.ApplicationSignalsOperations.property.UpdateServiceLevelObjective"></a>

```typescript
public readonly UpdateServiceLevelObjective: string[];
```

- *Type:* string[]

IAM actions required for the UpdateServiceLevelObjective API call.

---

### ApplicationSignalsResources <a name="ApplicationSignalsResources" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources"></a>

ARN builders, validators, and parsers for application-signals resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.Initializer"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

new application_signals.ApplicationSignalsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsResources.instrumentationConfig">instrumentationConfig</a></code> | Builds an ARN for the instrumentationConfig resource. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsResources.isValidInstrumentationConfigArn">isValidInstrumentationConfigArn</a></code> | Validates whether a string is a valid ARN for the instrumentationConfig resource. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsResources.isValidSloArn">isValidSloArn</a></code> | Validates whether a string is a valid ARN for the slo resource. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsResources.parseInstrumentationConfigArn">parseInstrumentationConfigArn</a></code> | Parses a instrumentationConfig ARN into its components. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsResources.parseSloArn">parseSloArn</a></code> | Parses a slo ARN into its components. |
| <code><a href="#@cdk_utils/iam.application_signals.ApplicationSignalsResources.slo">slo</a></code> | Builds an ARN for the slo resource. |

---

##### `instrumentationConfig` <a name="instrumentationConfig" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.instrumentationConfig"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsResources.instrumentationConfig(props: ApplicationSignalsInstrumentationConfigArnProps)
```

Builds an ARN for the instrumentationConfig resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.instrumentationConfig.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.application_signals.ApplicationSignalsInstrumentationConfigArnProps">ApplicationSignalsInstrumentationConfigArnProps</a>

---

##### `isValidInstrumentationConfigArn` <a name="isValidInstrumentationConfigArn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.isValidInstrumentationConfigArn"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsResources.isValidInstrumentationConfigArn(arn: string)
```

Validates whether a string is a valid ARN for the instrumentationConfig resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.isValidInstrumentationConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSloArn` <a name="isValidSloArn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.isValidSloArn"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsResources.isValidSloArn(arn: string)
```

Validates whether a string is a valid ARN for the slo resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.isValidSloArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInstrumentationConfigArn` <a name="parseInstrumentationConfigArn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.parseInstrumentationConfigArn"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsResources.parseInstrumentationConfigArn(arn: string)
```

Parses a instrumentationConfig ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.parseInstrumentationConfigArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSloArn` <a name="parseSloArn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.parseSloArn"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsResources.parseSloArn(arn: string)
```

Parses a slo ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.parseSloArn.parameter.arn"></a>

- *Type:* string

---

##### `slo` <a name="slo" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.slo"></a>

```typescript
import { application_signals } from '@cdk_utils/iam'

application_signals.ApplicationSignalsResources.slo(props: ApplicationSignalsSloArnProps)
```

Builds an ARN for the slo resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.application_signals.ApplicationSignalsResources.slo.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.application_signals.ApplicationSignalsSloArnProps">ApplicationSignalsSloArnProps</a>

---




