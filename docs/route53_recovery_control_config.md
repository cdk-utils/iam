# `route53_recovery_control_config` Submodule <a name="`route53_recovery_control_config` Submodule" id="@cdk_utils/iam.route53_recovery_control_config"></a>


## Structs <a name="Structs" id="Structs"></a>

### Route53RecoveryControlConfigClusterArnComponents <a name="Route53RecoveryControlConfigClusterArnComponents" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents"></a>

Parsed components of a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigClusterArnComponents: route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Route53RecoveryControlConfigClusterArnProps <a name="Route53RecoveryControlConfigClusterArnProps" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps"></a>

Properties for building a cluster ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigClusterArnProps: route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53RecoveryControlConfigControlpanelArnComponents <a name="Route53RecoveryControlConfigControlpanelArnComponents" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents"></a>

Parsed components of a controlpanel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigControlpanelArnComponents: route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### Route53RecoveryControlConfigControlpanelArnProps <a name="Route53RecoveryControlConfigControlpanelArnProps" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps"></a>

Properties for building a controlpanel ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigControlpanelArnProps: route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53RecoveryControlConfigRoutingcontrolArnComponents <a name="Route53RecoveryControlConfigRoutingcontrolArnComponents" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents"></a>

Parsed components of a routingcontrol ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigRoutingcontrolArnComponents: route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.routingControlId">routingControlId</a></code> | <code>string</code> | The RoutingControlId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `routingControlId`<sup>Required</sup> <a name="routingControlId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnComponents.property.routingControlId"></a>

```typescript
public readonly routingControlId: string;
```

- *Type:* string

The RoutingControlId component.

---

### Route53RecoveryControlConfigRoutingcontrolArnProps <a name="Route53RecoveryControlConfigRoutingcontrolArnProps" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps"></a>

Properties for building a routingcontrol ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigRoutingcontrolArnProps: route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.routingControlId">routingControlId</a></code> | <code>string</code> | The RoutingControlId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component of the ARN.

---

##### `routingControlId`<sup>Required</sup> <a name="routingControlId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.routingControlId"></a>

```typescript
public readonly routingControlId: string;
```

- *Type:* string

The RoutingControlId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### Route53RecoveryControlConfigSafetyruleArnComponents <a name="Route53RecoveryControlConfigSafetyruleArnComponents" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents"></a>

Parsed components of a safetyrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigSafetyruleArnComponents: route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.safetyRuleId">safetyRuleId</a></code> | <code>string</code> | The SafetyRuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `safetyRuleId`<sup>Required</sup> <a name="safetyRuleId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnComponents.property.safetyRuleId"></a>

```typescript
public readonly safetyRuleId: string;
```

- *Type:* string

The SafetyRuleId component.

---

### Route53RecoveryControlConfigSafetyruleArnProps <a name="Route53RecoveryControlConfigSafetyruleArnProps" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps"></a>

Properties for building a safetyrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

const route53RecoveryControlConfigSafetyruleArnProps: route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.controlPanelId">controlPanelId</a></code> | <code>string</code> | The ControlPanelId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.safetyRuleId">safetyRuleId</a></code> | <code>string</code> | The SafetyRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `controlPanelId`<sup>Required</sup> <a name="controlPanelId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.controlPanelId"></a>

```typescript
public readonly controlPanelId: string;
```

- *Type:* string

The ControlPanelId component of the ARN.

---

##### `safetyRuleId`<sup>Required</sup> <a name="safetyRuleId" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.safetyRuleId"></a>

```typescript
public readonly safetyRuleId: string;
```

- *Type:* string

The SafetyRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecoveryControlConfigActions <a name="Route53RecoveryControlConfigActions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions"></a>

IAM action constants for the route53-recovery-control-config service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

new route53_recovery_control_config.Route53RecoveryControlConfigActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] route53-recovery-control-config:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateCluster">CreateCluster</a></code> | <code>string</code> | [Write] route53-recovery-control-config:CreateCluster. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateControlPanel">CreateControlPanel</a></code> | <code>string</code> | [Write] route53-recovery-control-config:CreateControlPanel. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateRoutingControl">CreateRoutingControl</a></code> | <code>string</code> | [Write] route53-recovery-control-config:CreateRoutingControl. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateSafetyRule">CreateSafetyRule</a></code> | <code>string</code> | [Write] route53-recovery-control-config:CreateSafetyRule. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteCluster">DeleteCluster</a></code> | <code>string</code> | [Write] route53-recovery-control-config:DeleteCluster. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteControlPanel">DeleteControlPanel</a></code> | <code>string</code> | [Write] route53-recovery-control-config:DeleteControlPanel. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] route53-recovery-control-config:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteRoutingControl">DeleteRoutingControl</a></code> | <code>string</code> | [Write] route53-recovery-control-config:DeleteRoutingControl. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteSafetyRule">DeleteSafetyRule</a></code> | <code>string</code> | [Write] route53-recovery-control-config:DeleteSafetyRule. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeCluster">DescribeCluster</a></code> | <code>string</code> | [Read] route53-recovery-control-config:DescribeCluster. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeControlPanel">DescribeControlPanel</a></code> | <code>string</code> | [Read] route53-recovery-control-config:DescribeControlPanel. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeRoutingControl">DescribeRoutingControl</a></code> | <code>string</code> | [Read] route53-recovery-control-config:DescribeRoutingControl. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeSafetyRule">DescribeSafetyRule</a></code> | <code>string</code> | [Read] route53-recovery-control-config:DescribeSafetyRule. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListAssociatedRoute53HealthChecks">ListAssociatedRoute53HealthChecks</a></code> | <code>string</code> | [List] route53-recovery-control-config:ListAssociatedRoute53HealthChecks. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListClusters">ListClusters</a></code> | <code>string</code> | [Read] route53-recovery-control-config:ListClusters. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListControlPanels">ListControlPanels</a></code> | <code>string</code> | [Read] route53-recovery-control-config:ListControlPanels. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListRoutingControls">ListRoutingControls</a></code> | <code>string</code> | [Read] route53-recovery-control-config:ListRoutingControls. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListSafetyRules">ListSafetyRules</a></code> | <code>string</code> | [Read] route53-recovery-control-config:ListSafetyRules. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] route53-recovery-control-config:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] route53-recovery-control-config:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] route53-recovery-control-config:TagResource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] route53-recovery-control-config:UntagResource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateCluster">UpdateCluster</a></code> | <code>string</code> | [Write] route53-recovery-control-config:UpdateCluster. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateControlPanel">UpdateControlPanel</a></code> | <code>string</code> | [Write] route53-recovery-control-config:UpdateControlPanel. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateRoutingControl">UpdateRoutingControl</a></code> | <code>string</code> | [Write] route53-recovery-control-config:UpdateRoutingControl. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateSafetyRule">UpdateSafetyRule</a></code> | <code>string</code> | [Write] route53-recovery-control-config:UpdateSafetyRule. |

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] route53-recovery-control-config:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string;
```

- *Type:* string

[Write] route53-recovery-control-config:CreateCluster.

---

##### `CreateControlPanel`<sup>Required</sup> <a name="CreateControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateControlPanel"></a>

```typescript
public readonly CreateControlPanel: string;
```

- *Type:* string

[Write] route53-recovery-control-config:CreateControlPanel.

---

##### `CreateRoutingControl`<sup>Required</sup> <a name="CreateRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateRoutingControl"></a>

```typescript
public readonly CreateRoutingControl: string;
```

- *Type:* string

[Write] route53-recovery-control-config:CreateRoutingControl.

---

##### `CreateSafetyRule`<sup>Required</sup> <a name="CreateSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.CreateSafetyRule"></a>

```typescript
public readonly CreateSafetyRule: string;
```

- *Type:* string

[Write] route53-recovery-control-config:CreateSafetyRule.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string;
```

- *Type:* string

[Write] route53-recovery-control-config:DeleteCluster.

---

##### `DeleteControlPanel`<sup>Required</sup> <a name="DeleteControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteControlPanel"></a>

```typescript
public readonly DeleteControlPanel: string;
```

- *Type:* string

[Write] route53-recovery-control-config:DeleteControlPanel.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] route53-recovery-control-config:DeleteResourcePolicy.

---

##### `DeleteRoutingControl`<sup>Required</sup> <a name="DeleteRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteRoutingControl"></a>

```typescript
public readonly DeleteRoutingControl: string;
```

- *Type:* string

[Write] route53-recovery-control-config:DeleteRoutingControl.

---

##### `DeleteSafetyRule`<sup>Required</sup> <a name="DeleteSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DeleteSafetyRule"></a>

```typescript
public readonly DeleteSafetyRule: string;
```

- *Type:* string

[Write] route53-recovery-control-config:DeleteSafetyRule.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string;
```

- *Type:* string

[Read] route53-recovery-control-config:DescribeCluster.

---

##### `DescribeControlPanel`<sup>Required</sup> <a name="DescribeControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeControlPanel"></a>

```typescript
public readonly DescribeControlPanel: string;
```

- *Type:* string

[Read] route53-recovery-control-config:DescribeControlPanel.

---

##### `DescribeRoutingControl`<sup>Required</sup> <a name="DescribeRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeRoutingControl"></a>

```typescript
public readonly DescribeRoutingControl: string;
```

- *Type:* string

[Read] route53-recovery-control-config:DescribeRoutingControl.

---

##### `DescribeSafetyRule`<sup>Required</sup> <a name="DescribeSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.DescribeSafetyRule"></a>

```typescript
public readonly DescribeSafetyRule: string;
```

- *Type:* string

[Read] route53-recovery-control-config:DescribeSafetyRule.

---

##### `ListAssociatedRoute53HealthChecks`<sup>Required</sup> <a name="ListAssociatedRoute53HealthChecks" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListAssociatedRoute53HealthChecks"></a>

```typescript
public readonly ListAssociatedRoute53HealthChecks: string;
```

- *Type:* string

[List] route53-recovery-control-config:ListAssociatedRoute53HealthChecks.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListClusters"></a>

```typescript
public readonly ListClusters: string;
```

- *Type:* string

[Read] route53-recovery-control-config:ListClusters.

---

##### `ListControlPanels`<sup>Required</sup> <a name="ListControlPanels" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListControlPanels"></a>

```typescript
public readonly ListControlPanels: string;
```

- *Type:* string

[Read] route53-recovery-control-config:ListControlPanels.

---

##### `ListRoutingControls`<sup>Required</sup> <a name="ListRoutingControls" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListRoutingControls"></a>

```typescript
public readonly ListRoutingControls: string;
```

- *Type:* string

[Read] route53-recovery-control-config:ListRoutingControls.

---

##### `ListSafetyRules`<sup>Required</sup> <a name="ListSafetyRules" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListSafetyRules"></a>

```typescript
public readonly ListSafetyRules: string;
```

- *Type:* string

[Read] route53-recovery-control-config:ListSafetyRules.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] route53-recovery-control-config:ListTagsForResource.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] route53-recovery-control-config:PutResourcePolicy.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] route53-recovery-control-config:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] route53-recovery-control-config:UntagResource.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string;
```

- *Type:* string

[Write] route53-recovery-control-config:UpdateCluster.

---

##### `UpdateControlPanel`<sup>Required</sup> <a name="UpdateControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateControlPanel"></a>

```typescript
public readonly UpdateControlPanel: string;
```

- *Type:* string

[Write] route53-recovery-control-config:UpdateControlPanel.

---

##### `UpdateRoutingControl`<sup>Required</sup> <a name="UpdateRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateRoutingControl"></a>

```typescript
public readonly UpdateRoutingControl: string;
```

- *Type:* string

[Write] route53-recovery-control-config:UpdateRoutingControl.

---

##### `UpdateSafetyRule`<sup>Required</sup> <a name="UpdateSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigActions.property.UpdateSafetyRule"></a>

```typescript
public readonly UpdateSafetyRule: string;
```

- *Type:* string

[Write] route53-recovery-control-config:UpdateSafetyRule.

---

### Route53RecoveryControlConfigConditions <a name="Route53RecoveryControlConfigConditions" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions"></a>

Condition key constants and builders for route53-recovery-control-config.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

new route53_recovery_control_config.Route53RecoveryControlConfigConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.requestTag"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.resourceTag"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.tagKeys"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.CreateClusterConditionKeys">CreateClusterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCluster action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.CreateControlPanelConditionKeys">CreateControlPanelConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateControlPanel action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.CreateSafetyRuleConditionKeys">CreateSafetyRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSafetyRule action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateClusterConditionKeys`<sup>Required</sup> <a name="CreateClusterConditionKeys" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.CreateClusterConditionKeys"></a>

```typescript
public readonly CreateClusterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCluster action.

---

##### `CreateControlPanelConditionKeys`<sup>Required</sup> <a name="CreateControlPanelConditionKeys" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.CreateControlPanelConditionKeys"></a>

```typescript
public readonly CreateControlPanelConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateControlPanel action.

---

##### `CreateSafetyRuleConditionKeys`<sup>Required</sup> <a name="CreateSafetyRuleConditionKeys" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.CreateSafetyRuleConditionKeys"></a>

```typescript
public readonly CreateSafetyRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSafetyRule action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### Route53RecoveryControlConfigOperations <a name="Route53RecoveryControlConfigOperations" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations"></a>

API operation to required IAM actions mapping for route53-recovery-control-config.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

new route53_recovery_control_config.Route53RecoveryControlConfigOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateCluster">CreateCluster</a></code> | <code>string[]</code> | IAM actions required for the CreateCluster API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateControlPanel">CreateControlPanel</a></code> | <code>string[]</code> | IAM actions required for the CreateControlPanel API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateRoutingControl">CreateRoutingControl</a></code> | <code>string[]</code> | IAM actions required for the CreateRoutingControl API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateSafetyRule">CreateSafetyRule</a></code> | <code>string[]</code> | IAM actions required for the CreateSafetyRule API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteCluster">DeleteCluster</a></code> | <code>string[]</code> | IAM actions required for the DeleteCluster API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteControlPanel">DeleteControlPanel</a></code> | <code>string[]</code> | IAM actions required for the DeleteControlPanel API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteRoutingControl">DeleteRoutingControl</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoutingControl API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteSafetyRule">DeleteSafetyRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteSafetyRule API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeCluster">DescribeCluster</a></code> | <code>string[]</code> | IAM actions required for the DescribeCluster API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeControlPanel">DescribeControlPanel</a></code> | <code>string[]</code> | IAM actions required for the DescribeControlPanel API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeRoutingControl">DescribeRoutingControl</a></code> | <code>string[]</code> | IAM actions required for the DescribeRoutingControl API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeSafetyRule">DescribeSafetyRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeSafetyRule API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListAssociatedRoute53HealthChecks">ListAssociatedRoute53HealthChecks</a></code> | <code>string[]</code> | IAM actions required for the ListAssociatedRoute53HealthChecks API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListClusters">ListClusters</a></code> | <code>string[]</code> | IAM actions required for the ListClusters API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListControlPanels">ListControlPanels</a></code> | <code>string[]</code> | IAM actions required for the ListControlPanels API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListRoutingControls">ListRoutingControls</a></code> | <code>string[]</code> | IAM actions required for the ListRoutingControls API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListSafetyRules">ListSafetyRules</a></code> | <code>string[]</code> | IAM actions required for the ListSafetyRules API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateCluster">UpdateCluster</a></code> | <code>string[]</code> | IAM actions required for the UpdateCluster API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateControlPanel">UpdateControlPanel</a></code> | <code>string[]</code> | IAM actions required for the UpdateControlPanel API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateRoutingControl">UpdateRoutingControl</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoutingControl API call. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateSafetyRule">UpdateSafetyRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateSafetyRule API call. |

---

##### `CreateCluster`<sup>Required</sup> <a name="CreateCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateCluster"></a>

```typescript
public readonly CreateCluster: string[];
```

- *Type:* string[]

IAM actions required for the CreateCluster API call.

---

##### `CreateControlPanel`<sup>Required</sup> <a name="CreateControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateControlPanel"></a>

```typescript
public readonly CreateControlPanel: string[];
```

- *Type:* string[]

IAM actions required for the CreateControlPanel API call.

---

##### `CreateRoutingControl`<sup>Required</sup> <a name="CreateRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateRoutingControl"></a>

```typescript
public readonly CreateRoutingControl: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoutingControl API call.

---

##### `CreateSafetyRule`<sup>Required</sup> <a name="CreateSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.CreateSafetyRule"></a>

```typescript
public readonly CreateSafetyRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateSafetyRule API call.

---

##### `DeleteCluster`<sup>Required</sup> <a name="DeleteCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteCluster"></a>

```typescript
public readonly DeleteCluster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCluster API call.

---

##### `DeleteControlPanel`<sup>Required</sup> <a name="DeleteControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteControlPanel"></a>

```typescript
public readonly DeleteControlPanel: string[];
```

- *Type:* string[]

IAM actions required for the DeleteControlPanel API call.

---

##### `DeleteRoutingControl`<sup>Required</sup> <a name="DeleteRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteRoutingControl"></a>

```typescript
public readonly DeleteRoutingControl: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoutingControl API call.

---

##### `DeleteSafetyRule`<sup>Required</sup> <a name="DeleteSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DeleteSafetyRule"></a>

```typescript
public readonly DeleteSafetyRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSafetyRule API call.

---

##### `DescribeCluster`<sup>Required</sup> <a name="DescribeCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeCluster"></a>

```typescript
public readonly DescribeCluster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeCluster API call.

---

##### `DescribeControlPanel`<sup>Required</sup> <a name="DescribeControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeControlPanel"></a>

```typescript
public readonly DescribeControlPanel: string[];
```

- *Type:* string[]

IAM actions required for the DescribeControlPanel API call.

---

##### `DescribeRoutingControl`<sup>Required</sup> <a name="DescribeRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeRoutingControl"></a>

```typescript
public readonly DescribeRoutingControl: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRoutingControl API call.

---

##### `DescribeSafetyRule`<sup>Required</sup> <a name="DescribeSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.DescribeSafetyRule"></a>

```typescript
public readonly DescribeSafetyRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSafetyRule API call.

---

##### `ListAssociatedRoute53HealthChecks`<sup>Required</sup> <a name="ListAssociatedRoute53HealthChecks" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListAssociatedRoute53HealthChecks"></a>

```typescript
public readonly ListAssociatedRoute53HealthChecks: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociatedRoute53HealthChecks API call.

---

##### `ListClusters`<sup>Required</sup> <a name="ListClusters" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListClusters"></a>

```typescript
public readonly ListClusters: string[];
```

- *Type:* string[]

IAM actions required for the ListClusters API call.

---

##### `ListControlPanels`<sup>Required</sup> <a name="ListControlPanels" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListControlPanels"></a>

```typescript
public readonly ListControlPanels: string[];
```

- *Type:* string[]

IAM actions required for the ListControlPanels API call.

---

##### `ListRoutingControls`<sup>Required</sup> <a name="ListRoutingControls" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListRoutingControls"></a>

```typescript
public readonly ListRoutingControls: string[];
```

- *Type:* string[]

IAM actions required for the ListRoutingControls API call.

---

##### `ListSafetyRules`<sup>Required</sup> <a name="ListSafetyRules" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListSafetyRules"></a>

```typescript
public readonly ListSafetyRules: string[];
```

- *Type:* string[]

IAM actions required for the ListSafetyRules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCluster`<sup>Required</sup> <a name="UpdateCluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateCluster"></a>

```typescript
public readonly UpdateCluster: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCluster API call.

---

##### `UpdateControlPanel`<sup>Required</sup> <a name="UpdateControlPanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateControlPanel"></a>

```typescript
public readonly UpdateControlPanel: string[];
```

- *Type:* string[]

IAM actions required for the UpdateControlPanel API call.

---

##### `UpdateRoutingControl`<sup>Required</sup> <a name="UpdateRoutingControl" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateRoutingControl"></a>

```typescript
public readonly UpdateRoutingControl: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoutingControl API call.

---

##### `UpdateSafetyRule`<sup>Required</sup> <a name="UpdateSafetyRule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigOperations.property.UpdateSafetyRule"></a>

```typescript
public readonly UpdateSafetyRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSafetyRule API call.

---

### Route53RecoveryControlConfigResources <a name="Route53RecoveryControlConfigResources" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources"></a>

ARN builders, validators, and parsers for route53-recovery-control-config resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.Initializer"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

new route53_recovery_control_config.Route53RecoveryControlConfigResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.cluster">cluster</a></code> | Builds an ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.controlpanel">controlpanel</a></code> | Builds an ARN for the controlpanel resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidClusterArn">isValidClusterArn</a></code> | Validates whether a string is a valid ARN for the cluster resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidControlpanelArn">isValidControlpanelArn</a></code> | Validates whether a string is a valid ARN for the controlpanel resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidRoutingcontrolArn">isValidRoutingcontrolArn</a></code> | Validates whether a string is a valid ARN for the routingcontrol resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidSafetyruleArn">isValidSafetyruleArn</a></code> | Validates whether a string is a valid ARN for the safetyrule resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseClusterArn">parseClusterArn</a></code> | Parses a cluster ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseControlpanelArn">parseControlpanelArn</a></code> | Parses a controlpanel ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseRoutingcontrolArn">parseRoutingcontrolArn</a></code> | Parses a routingcontrol ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseSafetyruleArn">parseSafetyruleArn</a></code> | Parses a safetyrule ARN into its components. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.routingcontrol">routingcontrol</a></code> | Builds an ARN for the routingcontrol resource. |
| <code><a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.safetyrule">safetyrule</a></code> | Builds an ARN for the safetyrule resource. |

---

##### `cluster` <a name="cluster" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.cluster"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.cluster(props: Route53RecoveryControlConfigClusterArnProps)
```

Builds an ARN for the cluster resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.cluster.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigClusterArnProps">Route53RecoveryControlConfigClusterArnProps</a>

---

##### `controlpanel` <a name="controlpanel" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.controlpanel"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.controlpanel(props: Route53RecoveryControlConfigControlpanelArnProps)
```

Builds an ARN for the controlpanel resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.controlpanel.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigControlpanelArnProps">Route53RecoveryControlConfigControlpanelArnProps</a>

---

##### `isValidClusterArn` <a name="isValidClusterArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidClusterArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidClusterArn(arn: string)
```

Validates whether a string is a valid ARN for the cluster resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidControlpanelArn` <a name="isValidControlpanelArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidControlpanelArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidControlpanelArn(arn: string)
```

Validates whether a string is a valid ARN for the controlpanel resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidControlpanelArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoutingcontrolArn` <a name="isValidRoutingcontrolArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidRoutingcontrolArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidRoutingcontrolArn(arn: string)
```

Validates whether a string is a valid ARN for the routingcontrol resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidRoutingcontrolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSafetyruleArn` <a name="isValidSafetyruleArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidSafetyruleArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidSafetyruleArn(arn: string)
```

Validates whether a string is a valid ARN for the safetyrule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.isValidSafetyruleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseClusterArn` <a name="parseClusterArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseClusterArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.parseClusterArn(arn: string)
```

Parses a cluster ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseClusterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseControlpanelArn` <a name="parseControlpanelArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseControlpanelArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.parseControlpanelArn(arn: string)
```

Parses a controlpanel ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseControlpanelArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoutingcontrolArn` <a name="parseRoutingcontrolArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseRoutingcontrolArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.parseRoutingcontrolArn(arn: string)
```

Parses a routingcontrol ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseRoutingcontrolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSafetyruleArn` <a name="parseSafetyruleArn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseSafetyruleArn"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.parseSafetyruleArn(arn: string)
```

Parses a safetyrule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.parseSafetyruleArn.parameter.arn"></a>

- *Type:* string

---

##### `routingcontrol` <a name="routingcontrol" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.routingcontrol"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.routingcontrol(props: Route53RecoveryControlConfigRoutingcontrolArnProps)
```

Builds an ARN for the routingcontrol resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.routingcontrol.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigRoutingcontrolArnProps">Route53RecoveryControlConfigRoutingcontrolArnProps</a>

---

##### `safetyrule` <a name="safetyrule" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.safetyrule"></a>

```typescript
import { route53_recovery_control_config } from '@cdk_utils/iam'

route53_recovery_control_config.Route53RecoveryControlConfigResources.safetyrule(props: Route53RecoveryControlConfigSafetyruleArnProps)
```

Builds an ARN for the safetyrule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigResources.safetyrule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.route53_recovery_control_config.Route53RecoveryControlConfigSafetyruleArnProps">Route53RecoveryControlConfigSafetyruleArnProps</a>

---




