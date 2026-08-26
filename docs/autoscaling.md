# `autoscaling` Submodule <a name="`autoscaling` Submodule" id="@cdk_utils/iam.autoscaling"></a>


## Structs <a name="Structs" id="Structs"></a>

### AutoscalingAutoScalingGroupArnComponents <a name="AutoscalingAutoScalingGroupArnComponents" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents"></a>

Parsed components of a autoScalingGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

const autoscalingAutoScalingGroupArnComponents: autoscaling.AutoscalingAutoScalingGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.groupFriendlyName">groupFriendlyName</a></code> | <code>string</code> | The GroupFriendlyName component. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `groupFriendlyName`<sup>Required</sup> <a name="groupFriendlyName" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.groupFriendlyName"></a>

```typescript
public readonly groupFriendlyName: string;
```

- *Type:* string

The GroupFriendlyName component.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AutoscalingAutoScalingGroupArnProps <a name="AutoscalingAutoScalingGroupArnProps" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps"></a>

Properties for building a autoScalingGroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

const autoscalingAutoScalingGroupArnProps: autoscaling.AutoscalingAutoScalingGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.groupFriendlyName">groupFriendlyName</a></code> | <code>string</code> | The GroupFriendlyName component of the ARN. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.groupId">groupId</a></code> | <code>string</code> | The GroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `groupFriendlyName`<sup>Required</sup> <a name="groupFriendlyName" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.groupFriendlyName"></a>

```typescript
public readonly groupFriendlyName: string;
```

- *Type:* string

The GroupFriendlyName component of the ARN.

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

The GroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### AutoscalingLaunchConfigurationArnComponents <a name="AutoscalingLaunchConfigurationArnComponents" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents"></a>

Parsed components of a launchConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

const autoscalingLaunchConfigurationArnComponents: autoscaling.AutoscalingLaunchConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.launchConfigurationName">launchConfigurationName</a></code> | <code>string</code> | The LaunchConfigurationName component. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `launchConfigurationName`<sup>Required</sup> <a name="launchConfigurationName" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.launchConfigurationName"></a>

```typescript
public readonly launchConfigurationName: string;
```

- *Type:* string

The LaunchConfigurationName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AutoscalingLaunchConfigurationArnProps <a name="AutoscalingLaunchConfigurationArnProps" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps"></a>

Properties for building a launchConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

const autoscalingLaunchConfigurationArnProps: autoscaling.AutoscalingLaunchConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.launchConfigurationName">launchConfigurationName</a></code> | <code>string</code> | The LaunchConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `launchConfigurationName`<sup>Required</sup> <a name="launchConfigurationName" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.launchConfigurationName"></a>

```typescript
public readonly launchConfigurationName: string;
```

- *Type:* string

The LaunchConfigurationName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingActions <a name="AutoscalingActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions"></a>

IAM action constants for the autoscaling service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.autoscaling.AutoscalingActions.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

new autoscaling.AutoscalingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionGetPredictiveScalingForecast">actionGetPredictiveScalingForecast</a></code> | <code>string</code> | [List] autoscaling:GetPredictiveScalingForecast. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionSetDesiredCapacity">actionSetDesiredCapacity</a></code> | <code>string</code> | [Write] autoscaling:SetDesiredCapacity. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionSetInstanceHealth">actionSetInstanceHealth</a></code> | <code>string</code> | [Write] autoscaling:SetInstanceHealth. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionSetInstanceProtection">actionSetInstanceProtection</a></code> | <code>string</code> | [Write] autoscaling:SetInstanceProtection. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachInstances">AttachInstances</a></code> | <code>string</code> | [Write] autoscaling:AttachInstances. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachLoadBalancers">AttachLoadBalancers</a></code> | <code>string</code> | [Write] autoscaling:AttachLoadBalancers. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachLoadBalancerTargetGroups">AttachLoadBalancerTargetGroups</a></code> | <code>string</code> | [Write] autoscaling:AttachLoadBalancerTargetGroups. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachTrafficSources">AttachTrafficSources</a></code> | <code>string</code> | [Write] autoscaling:AttachTrafficSources. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.BatchDeleteScheduledAction">BatchDeleteScheduledAction</a></code> | <code>string</code> | [Write] autoscaling:BatchDeleteScheduledAction. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.BatchPutScheduledUpdateGroupAction">BatchPutScheduledUpdateGroupAction</a></code> | <code>string</code> | [Write] autoscaling:BatchPutScheduledUpdateGroupAction. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.CancelInstanceRefresh">CancelInstanceRefresh</a></code> | <code>string</code> | [Write] autoscaling:CancelInstanceRefresh. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.CompleteLifecycleAction">CompleteLifecycleAction</a></code> | <code>string</code> | [Write] autoscaling:CompleteLifecycleAction. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.CreateAutoScalingGroup">CreateAutoScalingGroup</a></code> | <code>string</code> | [Write] autoscaling:CreateAutoScalingGroup. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.CreateLaunchConfiguration">CreateLaunchConfiguration</a></code> | <code>string</code> | [Write] autoscaling:CreateLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.CreateOrUpdateTags">CreateOrUpdateTags</a></code> | <code>string</code> | [Tagging] autoscaling:CreateOrUpdateTags. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteAutoScalingGroup">DeleteAutoScalingGroup</a></code> | <code>string</code> | [Write] autoscaling:DeleteAutoScalingGroup. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteLaunchConfiguration">DeleteLaunchConfiguration</a></code> | <code>string</code> | [Write] autoscaling:DeleteLaunchConfiguration. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteLifecycleHook">DeleteLifecycleHook</a></code> | <code>string</code> | [Write] autoscaling:DeleteLifecycleHook. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteNotificationConfiguration">DeleteNotificationConfiguration</a></code> | <code>string</code> | [Write] autoscaling:DeleteNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] autoscaling:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string</code> | [Write] autoscaling:DeleteScheduledAction. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteTags">DeleteTags</a></code> | <code>string</code> | [Tagging] autoscaling:DeleteTags. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteWarmPool">DeleteWarmPool</a></code> | <code>string</code> | [Write] autoscaling:DeleteWarmPool. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string</code> | [List] autoscaling:DescribeAccountLimits. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAccountSettings">DescribeAccountSettings</a></code> | <code>string</code> | [List] autoscaling:DescribeAccountSettings. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAdjustmentTypes">DescribeAdjustmentTypes</a></code> | <code>string</code> | [List] autoscaling:DescribeAdjustmentTypes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAutoScalingGroups">DescribeAutoScalingGroups</a></code> | <code>string</code> | [List] autoscaling:DescribeAutoScalingGroups. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAutoScalingInstances">DescribeAutoScalingInstances</a></code> | <code>string</code> | [List] autoscaling:DescribeAutoScalingInstances. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAutoScalingNotificationTypes">DescribeAutoScalingNotificationTypes</a></code> | <code>string</code> | [List] autoscaling:DescribeAutoScalingNotificationTypes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeInstanceRefreshes">DescribeInstanceRefreshes</a></code> | <code>string</code> | [List] autoscaling:DescribeInstanceRefreshes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLaunchConfigurations">DescribeLaunchConfigurations</a></code> | <code>string</code> | [List] autoscaling:DescribeLaunchConfigurations. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLifecycleHooks">DescribeLifecycleHooks</a></code> | <code>string</code> | [List] autoscaling:DescribeLifecycleHooks. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLifecycleHookTypes">DescribeLifecycleHookTypes</a></code> | <code>string</code> | [List] autoscaling:DescribeLifecycleHookTypes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLoadBalancers">DescribeLoadBalancers</a></code> | <code>string</code> | [List] autoscaling:DescribeLoadBalancers. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLoadBalancerTargetGroups">DescribeLoadBalancerTargetGroups</a></code> | <code>string</code> | [List] autoscaling:DescribeLoadBalancerTargetGroups. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeMetricCollectionTypes">DescribeMetricCollectionTypes</a></code> | <code>string</code> | [List] autoscaling:DescribeMetricCollectionTypes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeNotificationConfigurations">DescribeNotificationConfigurations</a></code> | <code>string</code> | [List] autoscaling:DescribeNotificationConfigurations. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribePolicies">DescribePolicies</a></code> | <code>string</code> | [List] autoscaling:DescribePolicies. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeScalingActivities">DescribeScalingActivities</a></code> | <code>string</code> | [List] autoscaling:DescribeScalingActivities. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeScalingProcessTypes">DescribeScalingProcessTypes</a></code> | <code>string</code> | [List] autoscaling:DescribeScalingProcessTypes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeScheduledActions">DescribeScheduledActions</a></code> | <code>string</code> | [List] autoscaling:DescribeScheduledActions. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeTags">DescribeTags</a></code> | <code>string</code> | [Read] autoscaling:DescribeTags. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeTerminationPolicyTypes">DescribeTerminationPolicyTypes</a></code> | <code>string</code> | [List] autoscaling:DescribeTerminationPolicyTypes. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeTrafficSources">DescribeTrafficSources</a></code> | <code>string</code> | [List] autoscaling:DescribeTrafficSources. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeWarmPool">DescribeWarmPool</a></code> | <code>string</code> | [List] autoscaling:DescribeWarmPool. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachInstances">DetachInstances</a></code> | <code>string</code> | [Write] autoscaling:DetachInstances. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachLoadBalancers">DetachLoadBalancers</a></code> | <code>string</code> | [Write] autoscaling:DetachLoadBalancers. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachLoadBalancerTargetGroups">DetachLoadBalancerTargetGroups</a></code> | <code>string</code> | [Write] autoscaling:DetachLoadBalancerTargetGroups. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachTrafficSources">DetachTrafficSources</a></code> | <code>string</code> | [Write] autoscaling:DetachTrafficSources. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.DisableMetricsCollection">DisableMetricsCollection</a></code> | <code>string</code> | [Write] autoscaling:DisableMetricsCollection. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.EnableMetricsCollection">EnableMetricsCollection</a></code> | <code>string</code> | [Write] autoscaling:EnableMetricsCollection. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.EnterStandby">EnterStandby</a></code> | <code>string</code> | [Write] autoscaling:EnterStandby. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.ExecutePolicy">ExecutePolicy</a></code> | <code>string</code> | [Write] autoscaling:ExecutePolicy. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.ExitStandby">ExitStandby</a></code> | <code>string</code> | [Write] autoscaling:ExitStandby. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.LaunchInstances">LaunchInstances</a></code> | <code>string</code> | [Write] autoscaling:LaunchInstances. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutAccountSetting">PutAccountSetting</a></code> | <code>string</code> | [Write] autoscaling:PutAccountSetting. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutLifecycleHook">PutLifecycleHook</a></code> | <code>string</code> | [Write] autoscaling:PutLifecycleHook. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutNotificationConfiguration">PutNotificationConfiguration</a></code> | <code>string</code> | [Write] autoscaling:PutNotificationConfiguration. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutScalingPolicy">PutScalingPolicy</a></code> | <code>string</code> | [Write] autoscaling:PutScalingPolicy. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutScheduledUpdateGroupAction">PutScheduledUpdateGroupAction</a></code> | <code>string</code> | [Write] autoscaling:PutScheduledUpdateGroupAction. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutWarmPool">PutWarmPool</a></code> | <code>string</code> | [Write] autoscaling:PutWarmPool. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.RecordLifecycleActionHeartbeat">RecordLifecycleActionHeartbeat</a></code> | <code>string</code> | [Write] autoscaling:RecordLifecycleActionHeartbeat. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.ResumeProcesses">ResumeProcesses</a></code> | <code>string</code> | [Write] autoscaling:ResumeProcesses. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.RollbackInstanceRefresh">RollbackInstanceRefresh</a></code> | <code>string</code> | [Write] autoscaling:RollbackInstanceRefresh. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.StartInstanceRefresh">StartInstanceRefresh</a></code> | <code>string</code> | [Write] autoscaling:StartInstanceRefresh. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.SuspendProcesses">SuspendProcesses</a></code> | <code>string</code> | [Write] autoscaling:SuspendProcesses. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.TerminateInstanceInAutoScalingGroup">TerminateInstanceInAutoScalingGroup</a></code> | <code>string</code> | [Write] autoscaling:TerminateInstanceInAutoScalingGroup. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingActions.property.UpdateAutoScalingGroup">UpdateAutoScalingGroup</a></code> | <code>string</code> | [Write] autoscaling:UpdateAutoScalingGroup. |

---

##### `actionGetPredictiveScalingForecast`<sup>Required</sup> <a name="actionGetPredictiveScalingForecast" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionGetPredictiveScalingForecast"></a>

```typescript
public readonly actionGetPredictiveScalingForecast: string;
```

- *Type:* string

[List] autoscaling:GetPredictiveScalingForecast.

---

##### `actionSetDesiredCapacity`<sup>Required</sup> <a name="actionSetDesiredCapacity" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionSetDesiredCapacity"></a>

```typescript
public readonly actionSetDesiredCapacity: string;
```

- *Type:* string

[Write] autoscaling:SetDesiredCapacity.

---

##### `actionSetInstanceHealth`<sup>Required</sup> <a name="actionSetInstanceHealth" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionSetInstanceHealth"></a>

```typescript
public readonly actionSetInstanceHealth: string;
```

- *Type:* string

[Write] autoscaling:SetInstanceHealth.

---

##### `actionSetInstanceProtection`<sup>Required</sup> <a name="actionSetInstanceProtection" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.actionSetInstanceProtection"></a>

```typescript
public readonly actionSetInstanceProtection: string;
```

- *Type:* string

[Write] autoscaling:SetInstanceProtection.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AttachInstances`<sup>Required</sup> <a name="AttachInstances" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachInstances"></a>

```typescript
public readonly AttachInstances: string;
```

- *Type:* string

[Write] autoscaling:AttachInstances.

---

##### `AttachLoadBalancers`<sup>Required</sup> <a name="AttachLoadBalancers" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachLoadBalancers"></a>

```typescript
public readonly AttachLoadBalancers: string;
```

- *Type:* string

[Write] autoscaling:AttachLoadBalancers.

---

##### `AttachLoadBalancerTargetGroups`<sup>Required</sup> <a name="AttachLoadBalancerTargetGroups" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachLoadBalancerTargetGroups"></a>

```typescript
public readonly AttachLoadBalancerTargetGroups: string;
```

- *Type:* string

[Write] autoscaling:AttachLoadBalancerTargetGroups.

---

##### `AttachTrafficSources`<sup>Required</sup> <a name="AttachTrafficSources" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.AttachTrafficSources"></a>

```typescript
public readonly AttachTrafficSources: string;
```

- *Type:* string

[Write] autoscaling:AttachTrafficSources.

---

##### `BatchDeleteScheduledAction`<sup>Required</sup> <a name="BatchDeleteScheduledAction" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.BatchDeleteScheduledAction"></a>

```typescript
public readonly BatchDeleteScheduledAction: string;
```

- *Type:* string

[Write] autoscaling:BatchDeleteScheduledAction.

---

##### `BatchPutScheduledUpdateGroupAction`<sup>Required</sup> <a name="BatchPutScheduledUpdateGroupAction" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.BatchPutScheduledUpdateGroupAction"></a>

```typescript
public readonly BatchPutScheduledUpdateGroupAction: string;
```

- *Type:* string

[Write] autoscaling:BatchPutScheduledUpdateGroupAction.

---

##### `CancelInstanceRefresh`<sup>Required</sup> <a name="CancelInstanceRefresh" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.CancelInstanceRefresh"></a>

```typescript
public readonly CancelInstanceRefresh: string;
```

- *Type:* string

[Write] autoscaling:CancelInstanceRefresh.

---

##### `CompleteLifecycleAction`<sup>Required</sup> <a name="CompleteLifecycleAction" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.CompleteLifecycleAction"></a>

```typescript
public readonly CompleteLifecycleAction: string;
```

- *Type:* string

[Write] autoscaling:CompleteLifecycleAction.

---

##### `CreateAutoScalingGroup`<sup>Required</sup> <a name="CreateAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.CreateAutoScalingGroup"></a>

```typescript
public readonly CreateAutoScalingGroup: string;
```

- *Type:* string

[Write] autoscaling:CreateAutoScalingGroup.

---

##### `CreateLaunchConfiguration`<sup>Required</sup> <a name="CreateLaunchConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.CreateLaunchConfiguration"></a>

```typescript
public readonly CreateLaunchConfiguration: string;
```

- *Type:* string

[Write] autoscaling:CreateLaunchConfiguration.

---

##### `CreateOrUpdateTags`<sup>Required</sup> <a name="CreateOrUpdateTags" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.CreateOrUpdateTags"></a>

```typescript
public readonly CreateOrUpdateTags: string;
```

- *Type:* string

[Tagging] autoscaling:CreateOrUpdateTags.

---

##### `DeleteAutoScalingGroup`<sup>Required</sup> <a name="DeleteAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteAutoScalingGroup"></a>

```typescript
public readonly DeleteAutoScalingGroup: string;
```

- *Type:* string

[Write] autoscaling:DeleteAutoScalingGroup.

---

##### `DeleteLaunchConfiguration`<sup>Required</sup> <a name="DeleteLaunchConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteLaunchConfiguration"></a>

```typescript
public readonly DeleteLaunchConfiguration: string;
```

- *Type:* string

[Write] autoscaling:DeleteLaunchConfiguration.

---

##### `DeleteLifecycleHook`<sup>Required</sup> <a name="DeleteLifecycleHook" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteLifecycleHook"></a>

```typescript
public readonly DeleteLifecycleHook: string;
```

- *Type:* string

[Write] autoscaling:DeleteLifecycleHook.

---

##### `DeleteNotificationConfiguration`<sup>Required</sup> <a name="DeleteNotificationConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteNotificationConfiguration"></a>

```typescript
public readonly DeleteNotificationConfiguration: string;
```

- *Type:* string

[Write] autoscaling:DeleteNotificationConfiguration.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] autoscaling:DeletePolicy.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string;
```

- *Type:* string

[Write] autoscaling:DeleteScheduledAction.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string;
```

- *Type:* string

[Tagging] autoscaling:DeleteTags.

---

##### `DeleteWarmPool`<sup>Required</sup> <a name="DeleteWarmPool" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DeleteWarmPool"></a>

```typescript
public readonly DeleteWarmPool: string;
```

- *Type:* string

[Write] autoscaling:DeleteWarmPool.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string;
```

- *Type:* string

[List] autoscaling:DescribeAccountLimits.

---

##### `DescribeAccountSettings`<sup>Required</sup> <a name="DescribeAccountSettings" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAccountSettings"></a>

```typescript
public readonly DescribeAccountSettings: string;
```

- *Type:* string

[List] autoscaling:DescribeAccountSettings.

---

##### `DescribeAdjustmentTypes`<sup>Required</sup> <a name="DescribeAdjustmentTypes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAdjustmentTypes"></a>

```typescript
public readonly DescribeAdjustmentTypes: string;
```

- *Type:* string

[List] autoscaling:DescribeAdjustmentTypes.

---

##### `DescribeAutoScalingGroups`<sup>Required</sup> <a name="DescribeAutoScalingGroups" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAutoScalingGroups"></a>

```typescript
public readonly DescribeAutoScalingGroups: string;
```

- *Type:* string

[List] autoscaling:DescribeAutoScalingGroups.

---

##### `DescribeAutoScalingInstances`<sup>Required</sup> <a name="DescribeAutoScalingInstances" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAutoScalingInstances"></a>

```typescript
public readonly DescribeAutoScalingInstances: string;
```

- *Type:* string

[List] autoscaling:DescribeAutoScalingInstances.

---

##### `DescribeAutoScalingNotificationTypes`<sup>Required</sup> <a name="DescribeAutoScalingNotificationTypes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeAutoScalingNotificationTypes"></a>

```typescript
public readonly DescribeAutoScalingNotificationTypes: string;
```

- *Type:* string

[List] autoscaling:DescribeAutoScalingNotificationTypes.

---

##### `DescribeInstanceRefreshes`<sup>Required</sup> <a name="DescribeInstanceRefreshes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeInstanceRefreshes"></a>

```typescript
public readonly DescribeInstanceRefreshes: string;
```

- *Type:* string

[List] autoscaling:DescribeInstanceRefreshes.

---

##### `DescribeLaunchConfigurations`<sup>Required</sup> <a name="DescribeLaunchConfigurations" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLaunchConfigurations"></a>

```typescript
public readonly DescribeLaunchConfigurations: string;
```

- *Type:* string

[List] autoscaling:DescribeLaunchConfigurations.

---

##### `DescribeLifecycleHooks`<sup>Required</sup> <a name="DescribeLifecycleHooks" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLifecycleHooks"></a>

```typescript
public readonly DescribeLifecycleHooks: string;
```

- *Type:* string

[List] autoscaling:DescribeLifecycleHooks.

---

##### `DescribeLifecycleHookTypes`<sup>Required</sup> <a name="DescribeLifecycleHookTypes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLifecycleHookTypes"></a>

```typescript
public readonly DescribeLifecycleHookTypes: string;
```

- *Type:* string

[List] autoscaling:DescribeLifecycleHookTypes.

---

##### `DescribeLoadBalancers`<sup>Required</sup> <a name="DescribeLoadBalancers" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLoadBalancers"></a>

```typescript
public readonly DescribeLoadBalancers: string;
```

- *Type:* string

[List] autoscaling:DescribeLoadBalancers.

---

##### `DescribeLoadBalancerTargetGroups`<sup>Required</sup> <a name="DescribeLoadBalancerTargetGroups" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeLoadBalancerTargetGroups"></a>

```typescript
public readonly DescribeLoadBalancerTargetGroups: string;
```

- *Type:* string

[List] autoscaling:DescribeLoadBalancerTargetGroups.

---

##### `DescribeMetricCollectionTypes`<sup>Required</sup> <a name="DescribeMetricCollectionTypes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeMetricCollectionTypes"></a>

```typescript
public readonly DescribeMetricCollectionTypes: string;
```

- *Type:* string

[List] autoscaling:DescribeMetricCollectionTypes.

---

##### `DescribeNotificationConfigurations`<sup>Required</sup> <a name="DescribeNotificationConfigurations" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeNotificationConfigurations"></a>

```typescript
public readonly DescribeNotificationConfigurations: string;
```

- *Type:* string

[List] autoscaling:DescribeNotificationConfigurations.

---

##### `DescribePolicies`<sup>Required</sup> <a name="DescribePolicies" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribePolicies"></a>

```typescript
public readonly DescribePolicies: string;
```

- *Type:* string

[List] autoscaling:DescribePolicies.

---

##### `DescribeScalingActivities`<sup>Required</sup> <a name="DescribeScalingActivities" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeScalingActivities"></a>

```typescript
public readonly DescribeScalingActivities: string;
```

- *Type:* string

[List] autoscaling:DescribeScalingActivities.

---

##### `DescribeScalingProcessTypes`<sup>Required</sup> <a name="DescribeScalingProcessTypes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeScalingProcessTypes"></a>

```typescript
public readonly DescribeScalingProcessTypes: string;
```

- *Type:* string

[List] autoscaling:DescribeScalingProcessTypes.

---

##### `DescribeScheduledActions`<sup>Required</sup> <a name="DescribeScheduledActions" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeScheduledActions"></a>

```typescript
public readonly DescribeScheduledActions: string;
```

- *Type:* string

[List] autoscaling:DescribeScheduledActions.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string;
```

- *Type:* string

[Read] autoscaling:DescribeTags.

---

##### `DescribeTerminationPolicyTypes`<sup>Required</sup> <a name="DescribeTerminationPolicyTypes" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeTerminationPolicyTypes"></a>

```typescript
public readonly DescribeTerminationPolicyTypes: string;
```

- *Type:* string

[List] autoscaling:DescribeTerminationPolicyTypes.

---

##### `DescribeTrafficSources`<sup>Required</sup> <a name="DescribeTrafficSources" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeTrafficSources"></a>

```typescript
public readonly DescribeTrafficSources: string;
```

- *Type:* string

[List] autoscaling:DescribeTrafficSources.

---

##### `DescribeWarmPool`<sup>Required</sup> <a name="DescribeWarmPool" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DescribeWarmPool"></a>

```typescript
public readonly DescribeWarmPool: string;
```

- *Type:* string

[List] autoscaling:DescribeWarmPool.

---

##### `DetachInstances`<sup>Required</sup> <a name="DetachInstances" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachInstances"></a>

```typescript
public readonly DetachInstances: string;
```

- *Type:* string

[Write] autoscaling:DetachInstances.

---

##### `DetachLoadBalancers`<sup>Required</sup> <a name="DetachLoadBalancers" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachLoadBalancers"></a>

```typescript
public readonly DetachLoadBalancers: string;
```

- *Type:* string

[Write] autoscaling:DetachLoadBalancers.

---

##### `DetachLoadBalancerTargetGroups`<sup>Required</sup> <a name="DetachLoadBalancerTargetGroups" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachLoadBalancerTargetGroups"></a>

```typescript
public readonly DetachLoadBalancerTargetGroups: string;
```

- *Type:* string

[Write] autoscaling:DetachLoadBalancerTargetGroups.

---

##### `DetachTrafficSources`<sup>Required</sup> <a name="DetachTrafficSources" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DetachTrafficSources"></a>

```typescript
public readonly DetachTrafficSources: string;
```

- *Type:* string

[Write] autoscaling:DetachTrafficSources.

---

##### `DisableMetricsCollection`<sup>Required</sup> <a name="DisableMetricsCollection" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.DisableMetricsCollection"></a>

```typescript
public readonly DisableMetricsCollection: string;
```

- *Type:* string

[Write] autoscaling:DisableMetricsCollection.

---

##### `EnableMetricsCollection`<sup>Required</sup> <a name="EnableMetricsCollection" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.EnableMetricsCollection"></a>

```typescript
public readonly EnableMetricsCollection: string;
```

- *Type:* string

[Write] autoscaling:EnableMetricsCollection.

---

##### `EnterStandby`<sup>Required</sup> <a name="EnterStandby" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.EnterStandby"></a>

```typescript
public readonly EnterStandby: string;
```

- *Type:* string

[Write] autoscaling:EnterStandby.

---

##### `ExecutePolicy`<sup>Required</sup> <a name="ExecutePolicy" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.ExecutePolicy"></a>

```typescript
public readonly ExecutePolicy: string;
```

- *Type:* string

[Write] autoscaling:ExecutePolicy.

---

##### `ExitStandby`<sup>Required</sup> <a name="ExitStandby" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.ExitStandby"></a>

```typescript
public readonly ExitStandby: string;
```

- *Type:* string

[Write] autoscaling:ExitStandby.

---

##### `LaunchInstances`<sup>Required</sup> <a name="LaunchInstances" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.LaunchInstances"></a>

```typescript
public readonly LaunchInstances: string;
```

- *Type:* string

[Write] autoscaling:LaunchInstances.

---

##### `PutAccountSetting`<sup>Required</sup> <a name="PutAccountSetting" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutAccountSetting"></a>

```typescript
public readonly PutAccountSetting: string;
```

- *Type:* string

[Write] autoscaling:PutAccountSetting.

---

##### `PutLifecycleHook`<sup>Required</sup> <a name="PutLifecycleHook" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutLifecycleHook"></a>

```typescript
public readonly PutLifecycleHook: string;
```

- *Type:* string

[Write] autoscaling:PutLifecycleHook.

---

##### `PutNotificationConfiguration`<sup>Required</sup> <a name="PutNotificationConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutNotificationConfiguration"></a>

```typescript
public readonly PutNotificationConfiguration: string;
```

- *Type:* string

[Write] autoscaling:PutNotificationConfiguration.

---

##### `PutScalingPolicy`<sup>Required</sup> <a name="PutScalingPolicy" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutScalingPolicy"></a>

```typescript
public readonly PutScalingPolicy: string;
```

- *Type:* string

[Write] autoscaling:PutScalingPolicy.

---

##### `PutScheduledUpdateGroupAction`<sup>Required</sup> <a name="PutScheduledUpdateGroupAction" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutScheduledUpdateGroupAction"></a>

```typescript
public readonly PutScheduledUpdateGroupAction: string;
```

- *Type:* string

[Write] autoscaling:PutScheduledUpdateGroupAction.

---

##### `PutWarmPool`<sup>Required</sup> <a name="PutWarmPool" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.PutWarmPool"></a>

```typescript
public readonly PutWarmPool: string;
```

- *Type:* string

[Write] autoscaling:PutWarmPool.

---

##### `RecordLifecycleActionHeartbeat`<sup>Required</sup> <a name="RecordLifecycleActionHeartbeat" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.RecordLifecycleActionHeartbeat"></a>

```typescript
public readonly RecordLifecycleActionHeartbeat: string;
```

- *Type:* string

[Write] autoscaling:RecordLifecycleActionHeartbeat.

---

##### `ResumeProcesses`<sup>Required</sup> <a name="ResumeProcesses" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.ResumeProcesses"></a>

```typescript
public readonly ResumeProcesses: string;
```

- *Type:* string

[Write] autoscaling:ResumeProcesses.

---

##### `RollbackInstanceRefresh`<sup>Required</sup> <a name="RollbackInstanceRefresh" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.RollbackInstanceRefresh"></a>

```typescript
public readonly RollbackInstanceRefresh: string;
```

- *Type:* string

[Write] autoscaling:RollbackInstanceRefresh.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInstanceRefresh`<sup>Required</sup> <a name="StartInstanceRefresh" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.StartInstanceRefresh"></a>

```typescript
public readonly StartInstanceRefresh: string;
```

- *Type:* string

[Write] autoscaling:StartInstanceRefresh.

---

##### `SuspendProcesses`<sup>Required</sup> <a name="SuspendProcesses" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.SuspendProcesses"></a>

```typescript
public readonly SuspendProcesses: string;
```

- *Type:* string

[Write] autoscaling:SuspendProcesses.

---

##### `TerminateInstanceInAutoScalingGroup`<sup>Required</sup> <a name="TerminateInstanceInAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.TerminateInstanceInAutoScalingGroup"></a>

```typescript
public readonly TerminateInstanceInAutoScalingGroup: string;
```

- *Type:* string

[Write] autoscaling:TerminateInstanceInAutoScalingGroup.

---

##### `UpdateAutoScalingGroup`<sup>Required</sup> <a name="UpdateAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingActions.property.UpdateAutoScalingGroup"></a>

```typescript
public readonly UpdateAutoScalingGroup: string;
```

- *Type:* string

[Write] autoscaling:UpdateAutoScalingGroup.

---

### AutoscalingConditions <a name="AutoscalingConditions" id="@cdk_utils/iam.autoscaling.AutoscalingConditions"></a>

Condition key constants and builders for autoscaling.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

new autoscaling.AutoscalingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.capacityReservationIds">capacityReservationIds</a></code> | Generates a condition block for `autoscaling:CapacityReservationIds`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.capacityReservationResourceGroupArns">capacityReservationResourceGroupArns</a></code> | Generates a condition block for `autoscaling:CapacityReservationResourceGroupArns`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.forceDelete">forceDelete</a></code> | Generates a condition block for `autoscaling:ForceDelete`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.imageId">imageId</a></code> | Generates a condition block for `autoscaling:ImageId`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.instanceType">instanceType</a></code> | Generates a condition block for `autoscaling:InstanceType`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.instanceTypes">instanceTypes</a></code> | Generates a condition block for `autoscaling:InstanceTypes`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.launchConfigurationName">launchConfigurationName</a></code> | Generates a condition block for `autoscaling:LaunchConfigurationName`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.launchTemplateVersionSpecified">launchTemplateVersionSpecified</a></code> | Generates a condition block for `autoscaling:LaunchTemplateVersionSpecified`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.loadBalancerNames">loadBalancerNames</a></code> | Generates a condition block for `autoscaling:LoadBalancerNames`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.maxSize">maxSize</a></code> | Generates a condition block for `autoscaling:MaxSize`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpEndpoint">metadataHttpEndpoint</a></code> | Generates a condition block for `autoscaling:MetadataHttpEndpoint`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpPutResponseHopLimit">metadataHttpPutResponseHopLimit</a></code> | Generates a condition block for `autoscaling:MetadataHttpPutResponseHopLimit`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpTokens">metadataHttpTokens</a></code> | Generates a condition block for `autoscaling:MetadataHttpTokens`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.minSize">minSize</a></code> | Generates a condition block for `autoscaling:MinSize`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.operatorPrincipal">operatorPrincipal</a></code> | Generates a condition block for `autoscaling:OperatorPrincipal`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `autoscaling:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.spotPrice">spotPrice</a></code> | Generates a condition block for `autoscaling:SpotPrice`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.targetCapacityTypes">targetCapacityTypes</a></code> | Generates a condition block for `autoscaling:TargetCapacityTypes`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.targetGroupArNs">targetGroupArNs</a></code> | Generates a condition block for `autoscaling:TargetGroupARNs`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.trafficSourceIdentifiers">trafficSourceIdentifiers</a></code> | Generates a condition block for `autoscaling:TrafficSourceIdentifiers`. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.vpcZoneIdentifiers">vpcZoneIdentifiers</a></code> | Generates a condition block for `autoscaling:VPCZoneIdentifiers`. |

---

##### `capacityReservationIds` <a name="capacityReservationIds" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.capacityReservationIds"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.capacityReservationIds(values: string[])
```

Generates a condition block for `autoscaling:CapacityReservationIds`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.capacityReservationIds.parameter.values"></a>

- *Type:* string[]

---

##### `capacityReservationResourceGroupArns` <a name="capacityReservationResourceGroupArns" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.capacityReservationResourceGroupArns"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.capacityReservationResourceGroupArns(values: string[])
```

Generates a condition block for `autoscaling:CapacityReservationResourceGroupArns`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.capacityReservationResourceGroupArns.parameter.values"></a>

- *Type:* string[]

---

##### `forceDelete` <a name="forceDelete" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.forceDelete"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.forceDelete(value: boolean)
```

Generates a condition block for `autoscaling:ForceDelete`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.forceDelete.parameter.value"></a>

- *Type:* boolean

---

##### `imageId` <a name="imageId" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.imageId"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.imageId(value: string)
```

Generates a condition block for `autoscaling:ImageId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.imageId.parameter.value"></a>

- *Type:* string

---

##### `instanceType` <a name="instanceType" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.instanceType"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.instanceType(value: string)
```

Generates a condition block for `autoscaling:InstanceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.instanceType.parameter.value"></a>

- *Type:* string

---

##### `instanceTypes` <a name="instanceTypes" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.instanceTypes"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.instanceTypes(value: string)
```

Generates a condition block for `autoscaling:InstanceTypes`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.instanceTypes.parameter.value"></a>

- *Type:* string

---

##### `launchConfigurationName` <a name="launchConfigurationName" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.launchConfigurationName"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.launchConfigurationName(value: string)
```

Generates a condition block for `autoscaling:LaunchConfigurationName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.launchConfigurationName.parameter.value"></a>

- *Type:* string

---

##### `launchTemplateVersionSpecified` <a name="launchTemplateVersionSpecified" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.launchTemplateVersionSpecified"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.launchTemplateVersionSpecified(value: boolean)
```

Generates a condition block for `autoscaling:LaunchTemplateVersionSpecified`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.launchTemplateVersionSpecified.parameter.value"></a>

- *Type:* boolean

---

##### `loadBalancerNames` <a name="loadBalancerNames" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.loadBalancerNames"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.loadBalancerNames(values: string[])
```

Generates a condition block for `autoscaling:LoadBalancerNames`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.loadBalancerNames.parameter.values"></a>

- *Type:* string[]

---

##### `maxSize` <a name="maxSize" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.maxSize"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.maxSize(value: number)
```

Generates a condition block for `autoscaling:MaxSize`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.maxSize.parameter.value"></a>

- *Type:* number

---

##### `metadataHttpEndpoint` <a name="metadataHttpEndpoint" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpEndpoint"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.metadataHttpEndpoint(value: string)
```

Generates a condition block for `autoscaling:MetadataHttpEndpoint`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpEndpoint.parameter.value"></a>

- *Type:* string

---

##### `metadataHttpPutResponseHopLimit` <a name="metadataHttpPutResponseHopLimit" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpPutResponseHopLimit"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.metadataHttpPutResponseHopLimit(value: number)
```

Generates a condition block for `autoscaling:MetadataHttpPutResponseHopLimit`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpPutResponseHopLimit.parameter.value"></a>

- *Type:* number

---

##### `metadataHttpTokens` <a name="metadataHttpTokens" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpTokens"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.metadataHttpTokens(value: string)
```

Generates a condition block for `autoscaling:MetadataHttpTokens`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.metadataHttpTokens.parameter.value"></a>

- *Type:* string

---

##### `minSize` <a name="minSize" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.minSize"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.minSize(value: number)
```

Generates a condition block for `autoscaling:MinSize`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.minSize.parameter.value"></a>

- *Type:* number

---

##### `operatorPrincipal` <a name="operatorPrincipal" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.operatorPrincipal"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.operatorPrincipal(value: string)
```

Generates a condition block for `autoscaling:OperatorPrincipal`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.operatorPrincipal.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.requestTag"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.resourceTag"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.resourceTag(value: string)
```

Generates a condition block for `autoscaling:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `spotPrice` <a name="spotPrice" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.spotPrice"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.spotPrice(value: number)
```

Generates a condition block for `autoscaling:SpotPrice`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.spotPrice.parameter.value"></a>

- *Type:* number

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.tagKeys"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `targetCapacityTypes` <a name="targetCapacityTypes" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.targetCapacityTypes"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.targetCapacityTypes(values: string[])
```

Generates a condition block for `autoscaling:TargetCapacityTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.targetCapacityTypes.parameter.values"></a>

- *Type:* string[]

---

##### `targetGroupArNs` <a name="targetGroupArNs" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.targetGroupArNs"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.targetGroupArNs(values: string[])
```

Generates a condition block for `autoscaling:TargetGroupARNs`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.targetGroupArNs.parameter.values"></a>

- *Type:* string[]

---

##### `trafficSourceIdentifiers` <a name="trafficSourceIdentifiers" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.trafficSourceIdentifiers"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.trafficSourceIdentifiers(values: string[])
```

Generates a condition block for `autoscaling:TrafficSourceIdentifiers`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.trafficSourceIdentifiers.parameter.values"></a>

- *Type:* string[]

---

##### `vpcZoneIdentifiers` <a name="vpcZoneIdentifiers" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.vpcZoneIdentifiers"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingConditions.vpcZoneIdentifiers(values: string[])
```

Generates a condition block for `autoscaling:VPCZoneIdentifiers`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.vpcZoneIdentifiers.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AttachLoadBalancersConditionKeys">AttachLoadBalancersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachLoadBalancers action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AttachLoadBalancerTargetGroupsConditionKeys">AttachLoadBalancerTargetGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachLoadBalancerTargetGroups action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AttachTrafficSourcesConditionKeys">AttachTrafficSourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AttachTrafficSources action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CAPACITY_RESERVATION_IDS">CAPACITY_RESERVATION_IDS</a></code> | <code>string</code> | Condition key: autoscaling:CapacityReservationIds (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS">CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS</a></code> | <code>string</code> | Condition key: autoscaling:CapacityReservationResourceGroupArns (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CreateAutoScalingGroupConditionKeys">CreateAutoScalingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAutoScalingGroup action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CreateLaunchConfigurationConditionKeys">CreateLaunchConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLaunchConfiguration action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CreateOrUpdateTagsConditionKeys">CreateOrUpdateTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOrUpdateTags action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DeleteTagsConditionKeys">DeleteTagsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTags action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DetachLoadBalancersConditionKeys">DetachLoadBalancersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachLoadBalancers action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DetachLoadBalancerTargetGroupsConditionKeys">DetachLoadBalancerTargetGroupsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachLoadBalancerTargetGroups action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DetachTrafficSourcesConditionKeys">DetachTrafficSourcesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DetachTrafficSources action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.FORCE_DELETE">FORCE_DELETE</a></code> | <code>string</code> | Condition key: autoscaling:ForceDelete (Bool). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.IMAGE_ID">IMAGE_ID</a></code> | <code>string</code> | Condition key: autoscaling:ImageId (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.INSTANCE_TYPE">INSTANCE_TYPE</a></code> | <code>string</code> | Condition key: autoscaling:InstanceType (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.INSTANCE_TYPES">INSTANCE_TYPES</a></code> | <code>string</code> | Condition key: autoscaling:InstanceTypes (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.LAUNCH_CONFIGURATION_NAME">LAUNCH_CONFIGURATION_NAME</a></code> | <code>string</code> | Condition key: autoscaling:LaunchConfigurationName (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.LAUNCH_TEMPLATE_VERSION_SPECIFIED">LAUNCH_TEMPLATE_VERSION_SPECIFIED</a></code> | <code>string</code> | Condition key: autoscaling:LaunchTemplateVersionSpecified (Bool). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.LOAD_BALANCER_NAMES">LOAD_BALANCER_NAMES</a></code> | <code>string</code> | Condition key: autoscaling:LoadBalancerNames (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.MAX_SIZE">MAX_SIZE</a></code> | <code>string</code> | Condition key: autoscaling:MaxSize (Numeric). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.METADATA_HTTP_ENDPOINT">METADATA_HTTP_ENDPOINT</a></code> | <code>string</code> | Condition key: autoscaling:MetadataHttpEndpoint (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT">METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT</a></code> | <code>string</code> | Condition key: autoscaling:MetadataHttpPutResponseHopLimit (Numeric). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.METADATA_HTTP_TOKENS">METADATA_HTTP_TOKENS</a></code> | <code>string</code> | Condition key: autoscaling:MetadataHttpTokens (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.MIN_SIZE">MIN_SIZE</a></code> | <code>string</code> | Condition key: autoscaling:MinSize (Numeric). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.OPERATOR_PRINCIPAL">OPERATOR_PRINCIPAL</a></code> | <code>string</code> | Condition key: autoscaling:OperatorPrincipal (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.PutScheduledUpdateGroupActionConditionKeys">PutScheduledUpdateGroupActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutScheduledUpdateGroupAction action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: autoscaling:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.SPOT_PRICE">SPOT_PRICE</a></code> | <code>string</code> | Condition key: autoscaling:SpotPrice (Numeric). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.StartInstanceRefreshConditionKeys">StartInstanceRefreshConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartInstanceRefresh action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.TARGET_CAPACITY_TYPES">TARGET_CAPACITY_TYPES</a></code> | <code>string</code> | Condition key: autoscaling:TargetCapacityTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.TARGET_GROUP_AR_NS">TARGET_GROUP_AR_NS</a></code> | <code>string</code> | Condition key: autoscaling:TargetGroupARNs (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.TRAFFIC_SOURCE_IDENTIFIERS">TRAFFIC_SOURCE_IDENTIFIERS</a></code> | <code>string</code> | Condition key: autoscaling:TrafficSourceIdentifiers (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.UpdateAutoScalingGroupConditionKeys">UpdateAutoScalingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateAutoScalingGroup action. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingConditions.property.VPC_ZONE_IDENTIFIERS">VPC_ZONE_IDENTIFIERS</a></code> | <code>string</code> | Condition key: autoscaling:VPCZoneIdentifiers (ArrayOfString). |

---

##### `AttachLoadBalancersConditionKeys`<sup>Required</sup> <a name="AttachLoadBalancersConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AttachLoadBalancersConditionKeys"></a>

```typescript
public readonly AttachLoadBalancersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachLoadBalancers action.

---

##### `AttachLoadBalancerTargetGroupsConditionKeys`<sup>Required</sup> <a name="AttachLoadBalancerTargetGroupsConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AttachLoadBalancerTargetGroupsConditionKeys"></a>

```typescript
public readonly AttachLoadBalancerTargetGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachLoadBalancerTargetGroups action.

---

##### `AttachTrafficSourcesConditionKeys`<sup>Required</sup> <a name="AttachTrafficSourcesConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AttachTrafficSourcesConditionKeys"></a>

```typescript
public readonly AttachTrafficSourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AttachTrafficSources action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CAPACITY_RESERVATION_IDS`<sup>Required</sup> <a name="CAPACITY_RESERVATION_IDS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CAPACITY_RESERVATION_IDS"></a>

```typescript
public readonly CAPACITY_RESERVATION_IDS: string;
```

- *Type:* string

Condition key: autoscaling:CapacityReservationIds (ArrayOfString).

---

##### `CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS`<sup>Required</sup> <a name="CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS"></a>

```typescript
public readonly CAPACITY_RESERVATION_RESOURCE_GROUP_ARNS: string;
```

- *Type:* string

Condition key: autoscaling:CapacityReservationResourceGroupArns (ArrayOfString).

---

##### `CreateAutoScalingGroupConditionKeys`<sup>Required</sup> <a name="CreateAutoScalingGroupConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CreateAutoScalingGroupConditionKeys"></a>

```typescript
public readonly CreateAutoScalingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAutoScalingGroup action.

---

##### `CreateLaunchConfigurationConditionKeys`<sup>Required</sup> <a name="CreateLaunchConfigurationConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CreateLaunchConfigurationConditionKeys"></a>

```typescript
public readonly CreateLaunchConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLaunchConfiguration action.

---

##### `CreateOrUpdateTagsConditionKeys`<sup>Required</sup> <a name="CreateOrUpdateTagsConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.CreateOrUpdateTagsConditionKeys"></a>

```typescript
public readonly CreateOrUpdateTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOrUpdateTags action.

---

##### `DeleteTagsConditionKeys`<sup>Required</sup> <a name="DeleteTagsConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DeleteTagsConditionKeys"></a>

```typescript
public readonly DeleteTagsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTags action.

---

##### `DetachLoadBalancersConditionKeys`<sup>Required</sup> <a name="DetachLoadBalancersConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DetachLoadBalancersConditionKeys"></a>

```typescript
public readonly DetachLoadBalancersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachLoadBalancers action.

---

##### `DetachLoadBalancerTargetGroupsConditionKeys`<sup>Required</sup> <a name="DetachLoadBalancerTargetGroupsConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DetachLoadBalancerTargetGroupsConditionKeys"></a>

```typescript
public readonly DetachLoadBalancerTargetGroupsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachLoadBalancerTargetGroups action.

---

##### `DetachTrafficSourcesConditionKeys`<sup>Required</sup> <a name="DetachTrafficSourcesConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.DetachTrafficSourcesConditionKeys"></a>

```typescript
public readonly DetachTrafficSourcesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DetachTrafficSources action.

---

##### `FORCE_DELETE`<sup>Required</sup> <a name="FORCE_DELETE" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.FORCE_DELETE"></a>

```typescript
public readonly FORCE_DELETE: string;
```

- *Type:* string

Condition key: autoscaling:ForceDelete (Bool).

---

##### `IMAGE_ID`<sup>Required</sup> <a name="IMAGE_ID" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.IMAGE_ID"></a>

```typescript
public readonly IMAGE_ID: string;
```

- *Type:* string

Condition key: autoscaling:ImageId (String).

---

##### `INSTANCE_TYPE`<sup>Required</sup> <a name="INSTANCE_TYPE" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.INSTANCE_TYPE"></a>

```typescript
public readonly INSTANCE_TYPE: string;
```

- *Type:* string

Condition key: autoscaling:InstanceType (String).

---

##### `INSTANCE_TYPES`<sup>Required</sup> <a name="INSTANCE_TYPES" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.INSTANCE_TYPES"></a>

```typescript
public readonly INSTANCE_TYPES: string;
```

- *Type:* string

Condition key: autoscaling:InstanceTypes (String).

---

##### `LAUNCH_CONFIGURATION_NAME`<sup>Required</sup> <a name="LAUNCH_CONFIGURATION_NAME" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.LAUNCH_CONFIGURATION_NAME"></a>

```typescript
public readonly LAUNCH_CONFIGURATION_NAME: string;
```

- *Type:* string

Condition key: autoscaling:LaunchConfigurationName (String).

---

##### `LAUNCH_TEMPLATE_VERSION_SPECIFIED`<sup>Required</sup> <a name="LAUNCH_TEMPLATE_VERSION_SPECIFIED" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.LAUNCH_TEMPLATE_VERSION_SPECIFIED"></a>

```typescript
public readonly LAUNCH_TEMPLATE_VERSION_SPECIFIED: string;
```

- *Type:* string

Condition key: autoscaling:LaunchTemplateVersionSpecified (Bool).

---

##### `LOAD_BALANCER_NAMES`<sup>Required</sup> <a name="LOAD_BALANCER_NAMES" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.LOAD_BALANCER_NAMES"></a>

```typescript
public readonly LOAD_BALANCER_NAMES: string;
```

- *Type:* string

Condition key: autoscaling:LoadBalancerNames (ArrayOfString).

---

##### `MAX_SIZE`<sup>Required</sup> <a name="MAX_SIZE" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.MAX_SIZE"></a>

```typescript
public readonly MAX_SIZE: string;
```

- *Type:* string

Condition key: autoscaling:MaxSize (Numeric).

---

##### `METADATA_HTTP_ENDPOINT`<sup>Required</sup> <a name="METADATA_HTTP_ENDPOINT" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.METADATA_HTTP_ENDPOINT"></a>

```typescript
public readonly METADATA_HTTP_ENDPOINT: string;
```

- *Type:* string

Condition key: autoscaling:MetadataHttpEndpoint (String).

---

##### `METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT`<sup>Required</sup> <a name="METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT"></a>

```typescript
public readonly METADATA_HTTP_PUT_RESPONSE_HOP_LIMIT: string;
```

- *Type:* string

Condition key: autoscaling:MetadataHttpPutResponseHopLimit (Numeric).

---

##### `METADATA_HTTP_TOKENS`<sup>Required</sup> <a name="METADATA_HTTP_TOKENS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.METADATA_HTTP_TOKENS"></a>

```typescript
public readonly METADATA_HTTP_TOKENS: string;
```

- *Type:* string

Condition key: autoscaling:MetadataHttpTokens (String).

---

##### `MIN_SIZE`<sup>Required</sup> <a name="MIN_SIZE" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.MIN_SIZE"></a>

```typescript
public readonly MIN_SIZE: string;
```

- *Type:* string

Condition key: autoscaling:MinSize (Numeric).

---

##### `OPERATOR_PRINCIPAL`<sup>Required</sup> <a name="OPERATOR_PRINCIPAL" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.OPERATOR_PRINCIPAL"></a>

```typescript
public readonly OPERATOR_PRINCIPAL: string;
```

- *Type:* string

Condition key: autoscaling:OperatorPrincipal (String).

---

##### `PutScheduledUpdateGroupActionConditionKeys`<sup>Required</sup> <a name="PutScheduledUpdateGroupActionConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.PutScheduledUpdateGroupActionConditionKeys"></a>

```typescript
public readonly PutScheduledUpdateGroupActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutScheduledUpdateGroupAction action.

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: autoscaling:ResourceTag/${TagKey} (String).

---

##### `SPOT_PRICE`<sup>Required</sup> <a name="SPOT_PRICE" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.SPOT_PRICE"></a>

```typescript
public readonly SPOT_PRICE: string;
```

- *Type:* string

Condition key: autoscaling:SpotPrice (Numeric).

---

##### `StartInstanceRefreshConditionKeys`<sup>Required</sup> <a name="StartInstanceRefreshConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.StartInstanceRefreshConditionKeys"></a>

```typescript
public readonly StartInstanceRefreshConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartInstanceRefresh action.

---

##### `TARGET_CAPACITY_TYPES`<sup>Required</sup> <a name="TARGET_CAPACITY_TYPES" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.TARGET_CAPACITY_TYPES"></a>

```typescript
public readonly TARGET_CAPACITY_TYPES: string;
```

- *Type:* string

Condition key: autoscaling:TargetCapacityTypes (ArrayOfString).

---

##### `TARGET_GROUP_AR_NS`<sup>Required</sup> <a name="TARGET_GROUP_AR_NS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.TARGET_GROUP_AR_NS"></a>

```typescript
public readonly TARGET_GROUP_AR_NS: string;
```

- *Type:* string

Condition key: autoscaling:TargetGroupARNs (ArrayOfARN).

---

##### `TRAFFIC_SOURCE_IDENTIFIERS`<sup>Required</sup> <a name="TRAFFIC_SOURCE_IDENTIFIERS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.TRAFFIC_SOURCE_IDENTIFIERS"></a>

```typescript
public readonly TRAFFIC_SOURCE_IDENTIFIERS: string;
```

- *Type:* string

Condition key: autoscaling:TrafficSourceIdentifiers (ArrayOfString).

---

##### `UpdateAutoScalingGroupConditionKeys`<sup>Required</sup> <a name="UpdateAutoScalingGroupConditionKeys" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.UpdateAutoScalingGroupConditionKeys"></a>

```typescript
public readonly UpdateAutoScalingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateAutoScalingGroup action.

---

##### `VPC_ZONE_IDENTIFIERS`<sup>Required</sup> <a name="VPC_ZONE_IDENTIFIERS" id="@cdk_utils/iam.autoscaling.AutoscalingConditions.property.VPC_ZONE_IDENTIFIERS"></a>

```typescript
public readonly VPC_ZONE_IDENTIFIERS: string;
```

- *Type:* string

Condition key: autoscaling:VPCZoneIdentifiers (ArrayOfString).

---

### AutoscalingOperations <a name="AutoscalingOperations" id="@cdk_utils/iam.autoscaling.AutoscalingOperations"></a>

API operation to required IAM actions mapping for autoscaling.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

new autoscaling.AutoscalingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachInstances">AttachInstances</a></code> | <code>string[]</code> | IAM actions required for the AttachInstances API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachLoadBalancers">AttachLoadBalancers</a></code> | <code>string[]</code> | IAM actions required for the AttachLoadBalancers API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachLoadBalancerTargetGroups">AttachLoadBalancerTargetGroups</a></code> | <code>string[]</code> | IAM actions required for the AttachLoadBalancerTargetGroups API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachTrafficSources">AttachTrafficSources</a></code> | <code>string[]</code> | IAM actions required for the AttachTrafficSources API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.BatchDeleteScheduledAction">BatchDeleteScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.BatchPutScheduledUpdateGroupAction">BatchPutScheduledUpdateGroupAction</a></code> | <code>string[]</code> | IAM actions required for the BatchPutScheduledUpdateGroupAction API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CancelInstanceRefresh">CancelInstanceRefresh</a></code> | <code>string[]</code> | IAM actions required for the CancelInstanceRefresh API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CompleteLifecycleAction">CompleteLifecycleAction</a></code> | <code>string[]</code> | IAM actions required for the CompleteLifecycleAction API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CreateAutoScalingGroup">CreateAutoScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateAutoScalingGroup API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CreateLaunchConfiguration">CreateLaunchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateLaunchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CreateOrUpdateTags">CreateOrUpdateTags</a></code> | <code>string[]</code> | IAM actions required for the CreateOrUpdateTags API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteAutoScalingGroup">DeleteAutoScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteAutoScalingGroup API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteLaunchConfiguration">DeleteLaunchConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLaunchConfiguration API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteLifecycleHook">DeleteLifecycleHook</a></code> | <code>string[]</code> | IAM actions required for the DeleteLifecycleHook API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteNotificationConfiguration">DeleteNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteTags">DeleteTags</a></code> | <code>string[]</code> | IAM actions required for the DeleteTags API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteWarmPool">DeleteWarmPool</a></code> | <code>string[]</code> | IAM actions required for the DeleteWarmPool API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAccountLimits">DescribeAccountLimits</a></code> | <code>string[]</code> | IAM actions required for the DescribeAccountLimits API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAdjustmentTypes">DescribeAdjustmentTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAdjustmentTypes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAutoScalingGroups">DescribeAutoScalingGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutoScalingGroups API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAutoScalingInstances">DescribeAutoScalingInstances</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutoScalingInstances API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAutoScalingNotificationTypes">DescribeAutoScalingNotificationTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeAutoScalingNotificationTypes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeInstanceRefreshes">DescribeInstanceRefreshes</a></code> | <code>string[]</code> | IAM actions required for the DescribeInstanceRefreshes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLaunchConfigurations">DescribeLaunchConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeLaunchConfigurations API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLifecycleHooks">DescribeLifecycleHooks</a></code> | <code>string[]</code> | IAM actions required for the DescribeLifecycleHooks API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLifecycleHookTypes">DescribeLifecycleHookTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeLifecycleHookTypes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLoadBalancers">DescribeLoadBalancers</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoadBalancers API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLoadBalancerTargetGroups">DescribeLoadBalancerTargetGroups</a></code> | <code>string[]</code> | IAM actions required for the DescribeLoadBalancerTargetGroups API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeMetricCollectionTypes">DescribeMetricCollectionTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeMetricCollectionTypes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeNotificationConfigurations">DescribeNotificationConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotificationConfigurations API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribePolicies">DescribePolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribePolicies API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeScalingActivities">DescribeScalingActivities</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalingActivities API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeScalingProcessTypes">DescribeScalingProcessTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalingProcessTypes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeScheduledActions">DescribeScheduledActions</a></code> | <code>string[]</code> | IAM actions required for the DescribeScheduledActions API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeTags">DescribeTags</a></code> | <code>string[]</code> | IAM actions required for the DescribeTags API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeTerminationPolicyTypes">DescribeTerminationPolicyTypes</a></code> | <code>string[]</code> | IAM actions required for the DescribeTerminationPolicyTypes API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeTrafficSources">DescribeTrafficSources</a></code> | <code>string[]</code> | IAM actions required for the DescribeTrafficSources API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeWarmPool">DescribeWarmPool</a></code> | <code>string[]</code> | IAM actions required for the DescribeWarmPool API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachInstances">DetachInstances</a></code> | <code>string[]</code> | IAM actions required for the DetachInstances API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachLoadBalancers">DetachLoadBalancers</a></code> | <code>string[]</code> | IAM actions required for the DetachLoadBalancers API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachLoadBalancerTargetGroups">DetachLoadBalancerTargetGroups</a></code> | <code>string[]</code> | IAM actions required for the DetachLoadBalancerTargetGroups API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachTrafficSources">DetachTrafficSources</a></code> | <code>string[]</code> | IAM actions required for the DetachTrafficSources API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DisableMetricsCollection">DisableMetricsCollection</a></code> | <code>string[]</code> | IAM actions required for the DisableMetricsCollection API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.EnableMetricsCollection">EnableMetricsCollection</a></code> | <code>string[]</code> | IAM actions required for the EnableMetricsCollection API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.EnterStandby">EnterStandby</a></code> | <code>string[]</code> | IAM actions required for the EnterStandby API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.ExecutePolicy">ExecutePolicy</a></code> | <code>string[]</code> | IAM actions required for the ExecutePolicy API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.ExitStandby">ExitStandby</a></code> | <code>string[]</code> | IAM actions required for the ExitStandby API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.LaunchInstances">LaunchInstances</a></code> | <code>string[]</code> | IAM actions required for the LaunchInstances API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opGetPredictiveScalingForecast">opGetPredictiveScalingForecast</a></code> | <code>string[]</code> | IAM actions required for the GetPredictiveScalingForecast API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opSetDesiredCapacity">opSetDesiredCapacity</a></code> | <code>string[]</code> | IAM actions required for the SetDesiredCapacity API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opSetInstanceHealth">opSetInstanceHealth</a></code> | <code>string[]</code> | IAM actions required for the SetInstanceHealth API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opSetInstanceProtection">opSetInstanceProtection</a></code> | <code>string[]</code> | IAM actions required for the SetInstanceProtection API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutLifecycleHook">PutLifecycleHook</a></code> | <code>string[]</code> | IAM actions required for the PutLifecycleHook API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutNotificationConfiguration">PutNotificationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutNotificationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutScalingPolicy">PutScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutScheduledUpdateGroupAction">PutScheduledUpdateGroupAction</a></code> | <code>string[]</code> | IAM actions required for the PutScheduledUpdateGroupAction API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutWarmPool">PutWarmPool</a></code> | <code>string[]</code> | IAM actions required for the PutWarmPool API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.RecordLifecycleActionHeartbeat">RecordLifecycleActionHeartbeat</a></code> | <code>string[]</code> | IAM actions required for the RecordLifecycleActionHeartbeat API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.ResumeProcesses">ResumeProcesses</a></code> | <code>string[]</code> | IAM actions required for the ResumeProcesses API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.RollbackInstanceRefresh">RollbackInstanceRefresh</a></code> | <code>string[]</code> | IAM actions required for the RollbackInstanceRefresh API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.StartInstanceRefresh">StartInstanceRefresh</a></code> | <code>string[]</code> | IAM actions required for the StartInstanceRefresh API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.SuspendProcesses">SuspendProcesses</a></code> | <code>string[]</code> | IAM actions required for the SuspendProcesses API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.TerminateInstanceInAutoScalingGroup">TerminateInstanceInAutoScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the TerminateInstanceInAutoScalingGroup API call. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingOperations.property.UpdateAutoScalingGroup">UpdateAutoScalingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateAutoScalingGroup API call. |

---

##### `AttachInstances`<sup>Required</sup> <a name="AttachInstances" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachInstances"></a>

```typescript
public readonly AttachInstances: string[];
```

- *Type:* string[]

IAM actions required for the AttachInstances API call.

---

##### `AttachLoadBalancers`<sup>Required</sup> <a name="AttachLoadBalancers" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachLoadBalancers"></a>

```typescript
public readonly AttachLoadBalancers: string[];
```

- *Type:* string[]

IAM actions required for the AttachLoadBalancers API call.

---

##### `AttachLoadBalancerTargetGroups`<sup>Required</sup> <a name="AttachLoadBalancerTargetGroups" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachLoadBalancerTargetGroups"></a>

```typescript
public readonly AttachLoadBalancerTargetGroups: string[];
```

- *Type:* string[]

IAM actions required for the AttachLoadBalancerTargetGroups API call.

---

##### `AttachTrafficSources`<sup>Required</sup> <a name="AttachTrafficSources" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.AttachTrafficSources"></a>

```typescript
public readonly AttachTrafficSources: string[];
```

- *Type:* string[]

IAM actions required for the AttachTrafficSources API call.

---

##### `BatchDeleteScheduledAction`<sup>Required</sup> <a name="BatchDeleteScheduledAction" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.BatchDeleteScheduledAction"></a>

```typescript
public readonly BatchDeleteScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteScheduledAction API call.

---

##### `BatchPutScheduledUpdateGroupAction`<sup>Required</sup> <a name="BatchPutScheduledUpdateGroupAction" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.BatchPutScheduledUpdateGroupAction"></a>

```typescript
public readonly BatchPutScheduledUpdateGroupAction: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutScheduledUpdateGroupAction API call.

---

##### `CancelInstanceRefresh`<sup>Required</sup> <a name="CancelInstanceRefresh" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CancelInstanceRefresh"></a>

```typescript
public readonly CancelInstanceRefresh: string[];
```

- *Type:* string[]

IAM actions required for the CancelInstanceRefresh API call.

---

##### `CompleteLifecycleAction`<sup>Required</sup> <a name="CompleteLifecycleAction" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CompleteLifecycleAction"></a>

```typescript
public readonly CompleteLifecycleAction: string[];
```

- *Type:* string[]

IAM actions required for the CompleteLifecycleAction API call.

---

##### `CreateAutoScalingGroup`<sup>Required</sup> <a name="CreateAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CreateAutoScalingGroup"></a>

```typescript
public readonly CreateAutoScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateAutoScalingGroup API call.

---

##### `CreateLaunchConfiguration`<sup>Required</sup> <a name="CreateLaunchConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CreateLaunchConfiguration"></a>

```typescript
public readonly CreateLaunchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateLaunchConfiguration API call.

---

##### `CreateOrUpdateTags`<sup>Required</sup> <a name="CreateOrUpdateTags" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.CreateOrUpdateTags"></a>

```typescript
public readonly CreateOrUpdateTags: string[];
```

- *Type:* string[]

IAM actions required for the CreateOrUpdateTags API call.

---

##### `DeleteAutoScalingGroup`<sup>Required</sup> <a name="DeleteAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteAutoScalingGroup"></a>

```typescript
public readonly DeleteAutoScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAutoScalingGroup API call.

---

##### `DeleteLaunchConfiguration`<sup>Required</sup> <a name="DeleteLaunchConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteLaunchConfiguration"></a>

```typescript
public readonly DeleteLaunchConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLaunchConfiguration API call.

---

##### `DeleteLifecycleHook`<sup>Required</sup> <a name="DeleteLifecycleHook" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteLifecycleHook"></a>

```typescript
public readonly DeleteLifecycleHook: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLifecycleHook API call.

---

##### `DeleteNotificationConfiguration`<sup>Required</sup> <a name="DeleteNotificationConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteNotificationConfiguration"></a>

```typescript
public readonly DeleteNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotificationConfiguration API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledAction API call.

---

##### `DeleteTags`<sup>Required</sup> <a name="DeleteTags" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteTags"></a>

```typescript
public readonly DeleteTags: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTags API call.

---

##### `DeleteWarmPool`<sup>Required</sup> <a name="DeleteWarmPool" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DeleteWarmPool"></a>

```typescript
public readonly DeleteWarmPool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWarmPool API call.

---

##### `DescribeAccountLimits`<sup>Required</sup> <a name="DescribeAccountLimits" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAccountLimits"></a>

```typescript
public readonly DescribeAccountLimits: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAccountLimits API call.

---

##### `DescribeAdjustmentTypes`<sup>Required</sup> <a name="DescribeAdjustmentTypes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAdjustmentTypes"></a>

```typescript
public readonly DescribeAdjustmentTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAdjustmentTypes API call.

---

##### `DescribeAutoScalingGroups`<sup>Required</sup> <a name="DescribeAutoScalingGroups" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAutoScalingGroups"></a>

```typescript
public readonly DescribeAutoScalingGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutoScalingGroups API call.

---

##### `DescribeAutoScalingInstances`<sup>Required</sup> <a name="DescribeAutoScalingInstances" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAutoScalingInstances"></a>

```typescript
public readonly DescribeAutoScalingInstances: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutoScalingInstances API call.

---

##### `DescribeAutoScalingNotificationTypes`<sup>Required</sup> <a name="DescribeAutoScalingNotificationTypes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeAutoScalingNotificationTypes"></a>

```typescript
public readonly DescribeAutoScalingNotificationTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAutoScalingNotificationTypes API call.

---

##### `DescribeInstanceRefreshes`<sup>Required</sup> <a name="DescribeInstanceRefreshes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeInstanceRefreshes"></a>

```typescript
public readonly DescribeInstanceRefreshes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeInstanceRefreshes API call.

---

##### `DescribeLaunchConfigurations`<sup>Required</sup> <a name="DescribeLaunchConfigurations" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLaunchConfigurations"></a>

```typescript
public readonly DescribeLaunchConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLaunchConfigurations API call.

---

##### `DescribeLifecycleHooks`<sup>Required</sup> <a name="DescribeLifecycleHooks" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLifecycleHooks"></a>

```typescript
public readonly DescribeLifecycleHooks: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLifecycleHooks API call.

---

##### `DescribeLifecycleHookTypes`<sup>Required</sup> <a name="DescribeLifecycleHookTypes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLifecycleHookTypes"></a>

```typescript
public readonly DescribeLifecycleHookTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLifecycleHookTypes API call.

---

##### `DescribeLoadBalancers`<sup>Required</sup> <a name="DescribeLoadBalancers" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLoadBalancers"></a>

```typescript
public readonly DescribeLoadBalancers: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoadBalancers API call.

---

##### `DescribeLoadBalancerTargetGroups`<sup>Required</sup> <a name="DescribeLoadBalancerTargetGroups" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeLoadBalancerTargetGroups"></a>

```typescript
public readonly DescribeLoadBalancerTargetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLoadBalancerTargetGroups API call.

---

##### `DescribeMetricCollectionTypes`<sup>Required</sup> <a name="DescribeMetricCollectionTypes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeMetricCollectionTypes"></a>

```typescript
public readonly DescribeMetricCollectionTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeMetricCollectionTypes API call.

---

##### `DescribeNotificationConfigurations`<sup>Required</sup> <a name="DescribeNotificationConfigurations" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeNotificationConfigurations"></a>

```typescript
public readonly DescribeNotificationConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotificationConfigurations API call.

---

##### `DescribePolicies`<sup>Required</sup> <a name="DescribePolicies" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribePolicies"></a>

```typescript
public readonly DescribePolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribePolicies API call.

---

##### `DescribeScalingActivities`<sup>Required</sup> <a name="DescribeScalingActivities" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeScalingActivities"></a>

```typescript
public readonly DescribeScalingActivities: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalingActivities API call.

---

##### `DescribeScalingProcessTypes`<sup>Required</sup> <a name="DescribeScalingProcessTypes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeScalingProcessTypes"></a>

```typescript
public readonly DescribeScalingProcessTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalingProcessTypes API call.

---

##### `DescribeScheduledActions`<sup>Required</sup> <a name="DescribeScheduledActions" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeScheduledActions"></a>

```typescript
public readonly DescribeScheduledActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScheduledActions API call.

---

##### `DescribeTags`<sup>Required</sup> <a name="DescribeTags" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeTags"></a>

```typescript
public readonly DescribeTags: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTags API call.

---

##### `DescribeTerminationPolicyTypes`<sup>Required</sup> <a name="DescribeTerminationPolicyTypes" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeTerminationPolicyTypes"></a>

```typescript
public readonly DescribeTerminationPolicyTypes: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTerminationPolicyTypes API call.

---

##### `DescribeTrafficSources`<sup>Required</sup> <a name="DescribeTrafficSources" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeTrafficSources"></a>

```typescript
public readonly DescribeTrafficSources: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTrafficSources API call.

---

##### `DescribeWarmPool`<sup>Required</sup> <a name="DescribeWarmPool" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DescribeWarmPool"></a>

```typescript
public readonly DescribeWarmPool: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWarmPool API call.

---

##### `DetachInstances`<sup>Required</sup> <a name="DetachInstances" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachInstances"></a>

```typescript
public readonly DetachInstances: string[];
```

- *Type:* string[]

IAM actions required for the DetachInstances API call.

---

##### `DetachLoadBalancers`<sup>Required</sup> <a name="DetachLoadBalancers" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachLoadBalancers"></a>

```typescript
public readonly DetachLoadBalancers: string[];
```

- *Type:* string[]

IAM actions required for the DetachLoadBalancers API call.

---

##### `DetachLoadBalancerTargetGroups`<sup>Required</sup> <a name="DetachLoadBalancerTargetGroups" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachLoadBalancerTargetGroups"></a>

```typescript
public readonly DetachLoadBalancerTargetGroups: string[];
```

- *Type:* string[]

IAM actions required for the DetachLoadBalancerTargetGroups API call.

---

##### `DetachTrafficSources`<sup>Required</sup> <a name="DetachTrafficSources" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DetachTrafficSources"></a>

```typescript
public readonly DetachTrafficSources: string[];
```

- *Type:* string[]

IAM actions required for the DetachTrafficSources API call.

---

##### `DisableMetricsCollection`<sup>Required</sup> <a name="DisableMetricsCollection" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.DisableMetricsCollection"></a>

```typescript
public readonly DisableMetricsCollection: string[];
```

- *Type:* string[]

IAM actions required for the DisableMetricsCollection API call.

---

##### `EnableMetricsCollection`<sup>Required</sup> <a name="EnableMetricsCollection" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.EnableMetricsCollection"></a>

```typescript
public readonly EnableMetricsCollection: string[];
```

- *Type:* string[]

IAM actions required for the EnableMetricsCollection API call.

---

##### `EnterStandby`<sup>Required</sup> <a name="EnterStandby" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.EnterStandby"></a>

```typescript
public readonly EnterStandby: string[];
```

- *Type:* string[]

IAM actions required for the EnterStandby API call.

---

##### `ExecutePolicy`<sup>Required</sup> <a name="ExecutePolicy" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.ExecutePolicy"></a>

```typescript
public readonly ExecutePolicy: string[];
```

- *Type:* string[]

IAM actions required for the ExecutePolicy API call.

---

##### `ExitStandby`<sup>Required</sup> <a name="ExitStandby" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.ExitStandby"></a>

```typescript
public readonly ExitStandby: string[];
```

- *Type:* string[]

IAM actions required for the ExitStandby API call.

---

##### `LaunchInstances`<sup>Required</sup> <a name="LaunchInstances" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.LaunchInstances"></a>

```typescript
public readonly LaunchInstances: string[];
```

- *Type:* string[]

IAM actions required for the LaunchInstances API call.

---

##### `opGetPredictiveScalingForecast`<sup>Required</sup> <a name="opGetPredictiveScalingForecast" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opGetPredictiveScalingForecast"></a>

```typescript
public readonly opGetPredictiveScalingForecast: string[];
```

- *Type:* string[]

IAM actions required for the GetPredictiveScalingForecast API call.

---

##### `opSetDesiredCapacity`<sup>Required</sup> <a name="opSetDesiredCapacity" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opSetDesiredCapacity"></a>

```typescript
public readonly opSetDesiredCapacity: string[];
```

- *Type:* string[]

IAM actions required for the SetDesiredCapacity API call.

---

##### `opSetInstanceHealth`<sup>Required</sup> <a name="opSetInstanceHealth" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opSetInstanceHealth"></a>

```typescript
public readonly opSetInstanceHealth: string[];
```

- *Type:* string[]

IAM actions required for the SetInstanceHealth API call.

---

##### `opSetInstanceProtection`<sup>Required</sup> <a name="opSetInstanceProtection" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.opSetInstanceProtection"></a>

```typescript
public readonly opSetInstanceProtection: string[];
```

- *Type:* string[]

IAM actions required for the SetInstanceProtection API call.

---

##### `PutLifecycleHook`<sup>Required</sup> <a name="PutLifecycleHook" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutLifecycleHook"></a>

```typescript
public readonly PutLifecycleHook: string[];
```

- *Type:* string[]

IAM actions required for the PutLifecycleHook API call.

---

##### `PutNotificationConfiguration`<sup>Required</sup> <a name="PutNotificationConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutNotificationConfiguration"></a>

```typescript
public readonly PutNotificationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutNotificationConfiguration API call.

---

##### `PutScalingPolicy`<sup>Required</sup> <a name="PutScalingPolicy" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutScalingPolicy"></a>

```typescript
public readonly PutScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutScalingPolicy API call.

---

##### `PutScheduledUpdateGroupAction`<sup>Required</sup> <a name="PutScheduledUpdateGroupAction" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutScheduledUpdateGroupAction"></a>

```typescript
public readonly PutScheduledUpdateGroupAction: string[];
```

- *Type:* string[]

IAM actions required for the PutScheduledUpdateGroupAction API call.

---

##### `PutWarmPool`<sup>Required</sup> <a name="PutWarmPool" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.PutWarmPool"></a>

```typescript
public readonly PutWarmPool: string[];
```

- *Type:* string[]

IAM actions required for the PutWarmPool API call.

---

##### `RecordLifecycleActionHeartbeat`<sup>Required</sup> <a name="RecordLifecycleActionHeartbeat" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.RecordLifecycleActionHeartbeat"></a>

```typescript
public readonly RecordLifecycleActionHeartbeat: string[];
```

- *Type:* string[]

IAM actions required for the RecordLifecycleActionHeartbeat API call.

---

##### `ResumeProcesses`<sup>Required</sup> <a name="ResumeProcesses" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.ResumeProcesses"></a>

```typescript
public readonly ResumeProcesses: string[];
```

- *Type:* string[]

IAM actions required for the ResumeProcesses API call.

---

##### `RollbackInstanceRefresh`<sup>Required</sup> <a name="RollbackInstanceRefresh" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.RollbackInstanceRefresh"></a>

```typescript
public readonly RollbackInstanceRefresh: string[];
```

- *Type:* string[]

IAM actions required for the RollbackInstanceRefresh API call.

---

##### `StartInstanceRefresh`<sup>Required</sup> <a name="StartInstanceRefresh" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.StartInstanceRefresh"></a>

```typescript
public readonly StartInstanceRefresh: string[];
```

- *Type:* string[]

IAM actions required for the StartInstanceRefresh API call.

---

##### `SuspendProcesses`<sup>Required</sup> <a name="SuspendProcesses" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.SuspendProcesses"></a>

```typescript
public readonly SuspendProcesses: string[];
```

- *Type:* string[]

IAM actions required for the SuspendProcesses API call.

---

##### `TerminateInstanceInAutoScalingGroup`<sup>Required</sup> <a name="TerminateInstanceInAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.TerminateInstanceInAutoScalingGroup"></a>

```typescript
public readonly TerminateInstanceInAutoScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the TerminateInstanceInAutoScalingGroup API call.

---

##### `UpdateAutoScalingGroup`<sup>Required</sup> <a name="UpdateAutoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingOperations.property.UpdateAutoScalingGroup"></a>

```typescript
public readonly UpdateAutoScalingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAutoScalingGroup API call.

---

### AutoscalingResources <a name="AutoscalingResources" id="@cdk_utils/iam.autoscaling.AutoscalingResources"></a>

ARN builders, validators, and parsers for autoscaling resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.autoscaling.AutoscalingResources.Initializer"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

new autoscaling.AutoscalingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingResources.autoScalingGroup">autoScalingGroup</a></code> | Builds an ARN for the autoScalingGroup resource. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingResources.isValidAutoScalingGroupArn">isValidAutoScalingGroupArn</a></code> | Validates whether a string is a valid ARN for the autoScalingGroup resource. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingResources.isValidLaunchConfigurationArn">isValidLaunchConfigurationArn</a></code> | Validates whether a string is a valid ARN for the launchConfiguration resource. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingResources.launchConfiguration">launchConfiguration</a></code> | Builds an ARN for the launchConfiguration resource. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingResources.parseAutoScalingGroupArn">parseAutoScalingGroupArn</a></code> | Parses a autoScalingGroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.autoscaling.AutoscalingResources.parseLaunchConfigurationArn">parseLaunchConfigurationArn</a></code> | Parses a launchConfiguration ARN into its components. |

---

##### `autoScalingGroup` <a name="autoScalingGroup" id="@cdk_utils/iam.autoscaling.AutoscalingResources.autoScalingGroup"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingResources.autoScalingGroup(props: AutoscalingAutoScalingGroupArnProps)
```

Builds an ARN for the autoScalingGroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.autoscaling.AutoscalingResources.autoScalingGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.autoscaling.AutoscalingAutoScalingGroupArnProps">AutoscalingAutoScalingGroupArnProps</a>

---

##### `isValidAutoScalingGroupArn` <a name="isValidAutoScalingGroupArn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.isValidAutoScalingGroupArn"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingResources.isValidAutoScalingGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the autoScalingGroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.isValidAutoScalingGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidLaunchConfigurationArn` <a name="isValidLaunchConfigurationArn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.isValidLaunchConfigurationArn"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingResources.isValidLaunchConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the launchConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.isValidLaunchConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `launchConfiguration` <a name="launchConfiguration" id="@cdk_utils/iam.autoscaling.AutoscalingResources.launchConfiguration"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingResources.launchConfiguration(props: AutoscalingLaunchConfigurationArnProps)
```

Builds an ARN for the launchConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.autoscaling.AutoscalingResources.launchConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.autoscaling.AutoscalingLaunchConfigurationArnProps">AutoscalingLaunchConfigurationArnProps</a>

---

##### `parseAutoScalingGroupArn` <a name="parseAutoScalingGroupArn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.parseAutoScalingGroupArn"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingResources.parseAutoScalingGroupArn(arn: string)
```

Parses a autoScalingGroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.parseAutoScalingGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseLaunchConfigurationArn` <a name="parseLaunchConfigurationArn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.parseLaunchConfigurationArn"></a>

```typescript
import { autoscaling } from '@cdk_utils/iam'

autoscaling.AutoscalingResources.parseLaunchConfigurationArn(arn: string)
```

Parses a launchConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.autoscaling.AutoscalingResources.parseLaunchConfigurationArn.parameter.arn"></a>

- *Type:* string

---




