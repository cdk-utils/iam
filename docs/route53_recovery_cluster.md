# `route53_recovery_cluster` Submodule <a name="`route53_recovery_cluster` Submodule" id="@cdk_utils/iam.route53_recovery_cluster"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryClusterRoutingcontrolArnComponents <a name="Route53RecoveryClusterRoutingcontrolArnComponents" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents"></a>

Parsed components of a routingcontrol ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.Initializer"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

const route53RecoveryClusterRoutingcontrolArnComponents: route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.routingControlId">routingControlId</a></code> | <code>string</code> | The RoutingControlId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `routingControlId`<sup>Required</sup> <a name="routingControlId" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnComponents.property.routingControlId"></a>

```typescript
public readonly routingControlId: string;
```

- *Type:* string

The RoutingControlId component.

---

### Route53RecoveryClusterRoutingcontrolArnProps <a name="Route53RecoveryClusterRoutingcontrolArnProps" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps"></a>

Properties for building a routingcontrol ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.Initializer"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

const route53RecoveryClusterRoutingcontrolArnProps: route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.routingControlId">routingControlId</a></code> | <code>string</code> | The RoutingControlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component of the ARN.

---

##### `routingControlId`<sup>Required</sup> <a name="routingControlId" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.routingControlId"></a>

```typescript
public readonly routingControlId: string;
```

- *Type:* string

The RoutingControlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryClusterActions <a name="Route53RecoveryClusterActions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions"></a>

IAM action constants for the route53-recovery-cluster service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.Initializer"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

new route53_recovery_cluster.Route53RecoveryClusterActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.actionGetRoutingControlState">actionGetRoutingControlState</a></code> | <code>string</code> | [Read] route53-recovery-cluster:GetRoutingControlState. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.ListRoutingControls">ListRoutingControls</a></code> | <code>string</code> | [Read] route53-recovery-cluster:ListRoutingControls. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.UpdateRoutingControlState">UpdateRoutingControlState</a></code> | <code>string</code> | [Write] route53-recovery-cluster:UpdateRoutingControlState. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.UpdateRoutingControlStates">UpdateRoutingControlStates</a></code> | <code>string</code> | [Write] route53-recovery-cluster:UpdateRoutingControlStates. |

---

##### `actionGetRoutingControlState`<sup>Required</sup> <a name="actionGetRoutingControlState" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.actionGetRoutingControlState"></a>

```typescript
public readonly actionGetRoutingControlState: string;
```

- *Type:* string

[Read] route53-recovery-cluster:GetRoutingControlState.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `ListRoutingControls`<sup>Required</sup> <a name="ListRoutingControls" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.ListRoutingControls"></a>

```typescript
public readonly ListRoutingControls: string;
```

- *Type:* string

[Read] route53-recovery-cluster:ListRoutingControls.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateRoutingControlState`<sup>Required</sup> <a name="UpdateRoutingControlState" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.UpdateRoutingControlState"></a>

```typescript
public readonly UpdateRoutingControlState: string;
```

- *Type:* string

[Write] route53-recovery-cluster:UpdateRoutingControlState.

---

##### `UpdateRoutingControlStates`<sup>Required</sup> <a name="UpdateRoutingControlStates" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterActions.property.UpdateRoutingControlStates"></a>

```typescript
public readonly UpdateRoutingControlStates: string;
```

- *Type:* string

[Write] route53-recovery-cluster:UpdateRoutingControlStates.

---

### Route53RecoveryClusterConditions <a name="Route53RecoveryClusterConditions" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions"></a>

Condition key constants and builders for route53-recovery-cluster.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.Initializer"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

new route53_recovery_cluster.Route53RecoveryClusterConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.allowSafetyRulesOverrides">allowSafetyRulesOverrides</a></code> | Generates a condition block for `route53-recovery-cluster:AllowSafetyRulesOverrides`. |

---

##### `allowSafetyRulesOverrides` <a name="allowSafetyRulesOverrides" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.allowSafetyRulesOverrides"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

route53_recovery_cluster.Route53RecoveryClusterConditions.allowSafetyRulesOverrides(value: boolean)
```

Generates a condition block for `route53-recovery-cluster:AllowSafetyRulesOverrides`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.allowSafetyRulesOverrides.parameter.value"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.property.ALLOW_SAFETY_RULES_OVERRIDES">ALLOW_SAFETY_RULES_OVERRIDES</a></code> | <code>string</code> | Condition key: route53-recovery-cluster:AllowSafetyRulesOverrides (Bool). |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.property.UpdateRoutingControlStateConditionKeys">UpdateRoutingControlStateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingControlState action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.property.UpdateRoutingControlStatesConditionKeys">UpdateRoutingControlStatesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRoutingControlStates action. |

---

##### `ALLOW_SAFETY_RULES_OVERRIDES`<sup>Required</sup> <a name="ALLOW_SAFETY_RULES_OVERRIDES" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.property.ALLOW_SAFETY_RULES_OVERRIDES"></a>

```typescript
public readonly ALLOW_SAFETY_RULES_OVERRIDES: string;
```

- *Type:* string

Condition key: route53-recovery-cluster:AllowSafetyRulesOverrides (Bool).

---

##### `UpdateRoutingControlStateConditionKeys`<sup>Required</sup> <a name="UpdateRoutingControlStateConditionKeys" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.property.UpdateRoutingControlStateConditionKeys"></a>

```typescript
public readonly UpdateRoutingControlStateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingControlState action.

---

##### `UpdateRoutingControlStatesConditionKeys`<sup>Required</sup> <a name="UpdateRoutingControlStatesConditionKeys" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterConditions.property.UpdateRoutingControlStatesConditionKeys"></a>

```typescript
public readonly UpdateRoutingControlStatesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRoutingControlStates action.

---

### Route53RecoveryClusterOperations <a name="Route53RecoveryClusterOperations" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations"></a>

API operation to required IAM actions mapping for route53-recovery-cluster.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.Initializer"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

new route53_recovery_cluster.Route53RecoveryClusterOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.ListRoutingControls">ListRoutingControls</a></code> | <code>string[]</code> | IAM actions required for the ListRoutingControls API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.opGetRoutingControlState">opGetRoutingControlState</a></code> | <code>string[]</code> | IAM actions required for the GetRoutingControlState API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.UpdateRoutingControlState">UpdateRoutingControlState</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingControlState API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.UpdateRoutingControlStates">UpdateRoutingControlStates</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingControlStates API call. |

---

##### `ListRoutingControls`<sup>Required</sup> <a name="ListRoutingControls" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.ListRoutingControls"></a>

```typescript
public readonly ListRoutingControls: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutingControls API call.

---

##### `opGetRoutingControlState`<sup>Required</sup> <a name="opGetRoutingControlState" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.opGetRoutingControlState"></a>

```typescript
public readonly opGetRoutingControlState: string[];
```

- *Type:* string[]

IAM actions required for the GetRoutingControlState API call.

---

##### `UpdateRoutingControlState`<sup>Required</sup> <a name="UpdateRoutingControlState" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.UpdateRoutingControlState"></a>

```typescript
public readonly UpdateRoutingControlState: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingControlState API call.

---

##### `UpdateRoutingControlStates`<sup>Required</sup> <a name="UpdateRoutingControlStates" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterOperations.property.UpdateRoutingControlStates"></a>

```typescript
public readonly UpdateRoutingControlStates: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingControlStates API call.

---

### Route53RecoveryClusterResources <a name="Route53RecoveryClusterResources" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources"></a>

ARN builders, validators, and parsers for route53-recovery-cluster resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.Initializer"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

new route53_recovery_cluster.Route53RecoveryClusterResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.isValidRoutingcontrolArn">isValidRoutingcontrolArn</a></code> | Validates whether a string is a valid ARN for the routingcontrol resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.parseRoutingcontrolArn">parseRoutingcontrolArn</a></code> | Parses a routingcontrol ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.routingcontrol">routingcontrol</a></code> | Builds an ARN for the routingcontrol resource. |

---

##### `isValidRoutingcontrolArn` <a name="isValidRoutingcontrolArn" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.isValidRoutingcontrolArn"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

route53_recovery_cluster.Route53RecoveryClusterResources.isValidRoutingcontrolArn(arn: string)
```

Validates whether a string is a valid ARN for the routingcontrol resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.isValidRoutingcontrolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoutingcontrolArn` <a name="parseRoutingcontrolArn" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.parseRoutingcontrolArn"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

route53_recovery_cluster.Route53RecoveryClusterResources.parseRoutingcontrolArn(arn: string)
```

Parses a routingcontrol ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.parseRoutingcontrolArn.parameter.arn"></a>

- *Type:* string

---

##### `routingcontrol` <a name="routingcontrol" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.routingcontrol"></a>

```typescript
import { route53_recovery_cluster } from '@cdk_utils/iam'

route53_recovery_cluster.Route53RecoveryClusterResources.routingcontrol(props: Route53RecoveryClusterRoutingcontrolArnProps)
```

Builds an ARN for the routingcontrol resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterResources.routingcontrol.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_cluster.Route53RecoveryClusterRoutingcontrolArnProps">Route53RecoveryClusterRoutingcontrolArnProps</a>

---




