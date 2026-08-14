# `application_autoscaling` Submodule <a name="`application_autoscaling` Submodule" id="@cdk_utils/iam.application_autoscaling"></a>


## Structs <a name="Structs" id="Structs"></a>

### ApplicationAutoscalingScalableTargetArnComponents <a name="ApplicationAutoscalingScalableTargetArnComponents" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents"></a>

Parsed components of a ScalableTarget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.Initializer"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

const applicationAutoscalingScalableTargetArnComponents: application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ApplicationAutoscalingScalableTargetArnProps <a name="ApplicationAutoscalingScalableTargetArnProps" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps"></a>

Properties for building a ScalableTarget ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.Initializer"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

const applicationAutoscalingScalableTargetArnProps: application_autoscaling.ApplicationAutoscalingScalableTargetArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationAutoscalingActions <a name="ApplicationAutoscalingActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions"></a>

IAM action constants for the application-autoscaling service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.Initializer"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

new application_autoscaling.ApplicationAutoscalingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.actionGetPredictiveScalingForecast">actionGetPredictiveScalingForecast</a></code> | <code>string</code> | [List] application-autoscaling:GetPredictiveScalingForecast. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DeleteScalingPolicy">DeleteScalingPolicy</a></code> | <code>string</code> | [Write] application-autoscaling:DeleteScalingPolicy. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string</code> | [Write] application-autoscaling:DeleteScheduledAction. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DeregisterScalableTarget">DeregisterScalableTarget</a></code> | <code>string</code> | [Write] application-autoscaling:DeregisterScalableTarget. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScalableTargets">DescribeScalableTargets</a></code> | <code>string</code> | [Read] application-autoscaling:DescribeScalableTargets. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScalingActivities">DescribeScalingActivities</a></code> | <code>string</code> | [Read] application-autoscaling:DescribeScalingActivities. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScalingPolicies">DescribeScalingPolicies</a></code> | <code>string</code> | [Read] application-autoscaling:DescribeScalingPolicies. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScheduledActions">DescribeScheduledActions</a></code> | <code>string</code> | [Read] application-autoscaling:DescribeScheduledActions. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] application-autoscaling:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.PutScalingPolicy">PutScalingPolicy</a></code> | <code>string</code> | [Write] application-autoscaling:PutScalingPolicy. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.PutScheduledAction">PutScheduledAction</a></code> | <code>string</code> | [Write] application-autoscaling:PutScheduledAction. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.RegisterScalableTarget">RegisterScalableTarget</a></code> | <code>string</code> | [Write] application-autoscaling:RegisterScalableTarget. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] application-autoscaling:TagResource. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] application-autoscaling:UntagResource. |

---

##### `actionGetPredictiveScalingForecast`<sup>Required</sup> <a name="actionGetPredictiveScalingForecast" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.actionGetPredictiveScalingForecast"></a>

```typescript
public readonly actionGetPredictiveScalingForecast: string;
```

- *Type:* string

[List] application-autoscaling:GetPredictiveScalingForecast.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteScalingPolicy`<sup>Required</sup> <a name="DeleteScalingPolicy" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DeleteScalingPolicy"></a>

```typescript
public readonly DeleteScalingPolicy: string;
```

- *Type:* string

[Write] application-autoscaling:DeleteScalingPolicy.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string;
```

- *Type:* string

[Write] application-autoscaling:DeleteScheduledAction.

---

##### `DeregisterScalableTarget`<sup>Required</sup> <a name="DeregisterScalableTarget" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DeregisterScalableTarget"></a>

```typescript
public readonly DeregisterScalableTarget: string;
```

- *Type:* string

[Write] application-autoscaling:DeregisterScalableTarget.

---

##### `DescribeScalableTargets`<sup>Required</sup> <a name="DescribeScalableTargets" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScalableTargets"></a>

```typescript
public readonly DescribeScalableTargets: string;
```

- *Type:* string

[Read] application-autoscaling:DescribeScalableTargets.

---

##### `DescribeScalingActivities`<sup>Required</sup> <a name="DescribeScalingActivities" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScalingActivities"></a>

```typescript
public readonly DescribeScalingActivities: string;
```

- *Type:* string

[Read] application-autoscaling:DescribeScalingActivities.

---

##### `DescribeScalingPolicies`<sup>Required</sup> <a name="DescribeScalingPolicies" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScalingPolicies"></a>

```typescript
public readonly DescribeScalingPolicies: string;
```

- *Type:* string

[Read] application-autoscaling:DescribeScalingPolicies.

---

##### `DescribeScheduledActions`<sup>Required</sup> <a name="DescribeScheduledActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.DescribeScheduledActions"></a>

```typescript
public readonly DescribeScheduledActions: string;
```

- *Type:* string

[Read] application-autoscaling:DescribeScheduledActions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] application-autoscaling:ListTagsForResource.

---

##### `PutScalingPolicy`<sup>Required</sup> <a name="PutScalingPolicy" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.PutScalingPolicy"></a>

```typescript
public readonly PutScalingPolicy: string;
```

- *Type:* string

[Write] application-autoscaling:PutScalingPolicy.

---

##### `PutScheduledAction`<sup>Required</sup> <a name="PutScheduledAction" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.PutScheduledAction"></a>

```typescript
public readonly PutScheduledAction: string;
```

- *Type:* string

[Write] application-autoscaling:PutScheduledAction.

---

##### `RegisterScalableTarget`<sup>Required</sup> <a name="RegisterScalableTarget" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.RegisterScalableTarget"></a>

```typescript
public readonly RegisterScalableTarget: string;
```

- *Type:* string

[Write] application-autoscaling:RegisterScalableTarget.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] application-autoscaling:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] application-autoscaling:UntagResource.

---

### ApplicationAutoscalingConditions <a name="ApplicationAutoscalingConditions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions"></a>

Condition key constants and builders for application-autoscaling.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.Initializer"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

new application_autoscaling.ApplicationAutoscalingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.scalableDimension">scalableDimension</a></code> | Generates a condition block for `application-autoscaling:scalable-dimension`. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.serviceNamespace">serviceNamespace</a></code> | Generates a condition block for `application-autoscaling:service-namespace`. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.requestTag"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.resourceTag"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `scalableDimension` <a name="scalableDimension" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.scalableDimension"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingConditions.scalableDimension(value: string)
```

Generates a condition block for `application-autoscaling:scalable-dimension`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.scalableDimension.parameter.value"></a>

- *Type:* string

---

##### `serviceNamespace` <a name="serviceNamespace" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.serviceNamespace"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingConditions.serviceNamespace(value: string)
```

Generates a condition block for `application-autoscaling:service-namespace`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.serviceNamespace.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.tagKeys"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.DeleteScalingPolicyConditionKeys">DeleteScalingPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteScalingPolicy action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.DeleteScheduledActionConditionKeys">DeleteScheduledActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteScheduledAction action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.DeregisterScalableTargetConditionKeys">DeregisterScalableTargetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeregisterScalableTarget action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.PutScalingPolicyConditionKeys">PutScalingPolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutScalingPolicy action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.PutScheduledActionConditionKeys">PutScheduledActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutScheduledAction action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.RegisterScalableTargetConditionKeys">RegisterScalableTargetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RegisterScalableTarget action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.SCALABLE_DIMENSION">SCALABLE_DIMENSION</a></code> | <code>string</code> | Condition key: application-autoscaling:scalable-dimension (String). |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.SERVICE_NAMESPACE">SERVICE_NAMESPACE</a></code> | <code>string</code> | Condition key: application-autoscaling:service-namespace (String). |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `DeleteScalingPolicyConditionKeys`<sup>Required</sup> <a name="DeleteScalingPolicyConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.DeleteScalingPolicyConditionKeys"></a>

```typescript
public readonly DeleteScalingPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteScalingPolicy action.

---

##### `DeleteScheduledActionConditionKeys`<sup>Required</sup> <a name="DeleteScheduledActionConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.DeleteScheduledActionConditionKeys"></a>

```typescript
public readonly DeleteScheduledActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteScheduledAction action.

---

##### `DeregisterScalableTargetConditionKeys`<sup>Required</sup> <a name="DeregisterScalableTargetConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.DeregisterScalableTargetConditionKeys"></a>

```typescript
public readonly DeregisterScalableTargetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeregisterScalableTarget action.

---

##### `PutScalingPolicyConditionKeys`<sup>Required</sup> <a name="PutScalingPolicyConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.PutScalingPolicyConditionKeys"></a>

```typescript
public readonly PutScalingPolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutScalingPolicy action.

---

##### `PutScheduledActionConditionKeys`<sup>Required</sup> <a name="PutScheduledActionConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.PutScheduledActionConditionKeys"></a>

```typescript
public readonly PutScheduledActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutScheduledAction action.

---

##### `RegisterScalableTargetConditionKeys`<sup>Required</sup> <a name="RegisterScalableTargetConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.RegisterScalableTargetConditionKeys"></a>

```typescript
public readonly RegisterScalableTargetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RegisterScalableTarget action.

---

##### `SCALABLE_DIMENSION`<sup>Required</sup> <a name="SCALABLE_DIMENSION" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.SCALABLE_DIMENSION"></a>

```typescript
public readonly SCALABLE_DIMENSION: string;
```

- *Type:* string

Condition key: application-autoscaling:scalable-dimension (String).

---

##### `SERVICE_NAMESPACE`<sup>Required</sup> <a name="SERVICE_NAMESPACE" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.SERVICE_NAMESPACE"></a>

```typescript
public readonly SERVICE_NAMESPACE: string;
```

- *Type:* string

Condition key: application-autoscaling:service-namespace (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ApplicationAutoscalingOperations <a name="ApplicationAutoscalingOperations" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations"></a>

API operation to required IAM actions mapping for application-autoscaling.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.Initializer"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

new application_autoscaling.ApplicationAutoscalingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DeleteScalingPolicy">DeleteScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DeleteScheduledAction">DeleteScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DeregisterScalableTarget">DeregisterScalableTarget</a></code> | <code>string[]</code> | IAM actions required for the DeregisterScalableTarget API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScalableTargets">DescribeScalableTargets</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalableTargets API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScalingActivities">DescribeScalingActivities</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalingActivities API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScalingPolicies">DescribeScalingPolicies</a></code> | <code>string[]</code> | IAM actions required for the DescribeScalingPolicies API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScheduledActions">DescribeScheduledActions</a></code> | <code>string[]</code> | IAM actions required for the DescribeScheduledActions API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.opGetPredictiveScalingForecast">opGetPredictiveScalingForecast</a></code> | <code>string[]</code> | IAM actions required for the GetPredictiveScalingForecast API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.PutScalingPolicy">PutScalingPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutScalingPolicy API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.PutScheduledAction">PutScheduledAction</a></code> | <code>string[]</code> | IAM actions required for the PutScheduledAction API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.RegisterScalableTarget">RegisterScalableTarget</a></code> | <code>string[]</code> | IAM actions required for the RegisterScalableTarget API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `DeleteScalingPolicy`<sup>Required</sup> <a name="DeleteScalingPolicy" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DeleteScalingPolicy"></a>

```typescript
public readonly DeleteScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScalingPolicy API call.

---

##### `DeleteScheduledAction`<sup>Required</sup> <a name="DeleteScheduledAction" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DeleteScheduledAction"></a>

```typescript
public readonly DeleteScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteScheduledAction API call.

---

##### `DeregisterScalableTarget`<sup>Required</sup> <a name="DeregisterScalableTarget" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DeregisterScalableTarget"></a>

```typescript
public readonly DeregisterScalableTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeregisterScalableTarget API call.

---

##### `DescribeScalableTargets`<sup>Required</sup> <a name="DescribeScalableTargets" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScalableTargets"></a>

```typescript
public readonly DescribeScalableTargets: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalableTargets API call.

---

##### `DescribeScalingActivities`<sup>Required</sup> <a name="DescribeScalingActivities" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScalingActivities"></a>

```typescript
public readonly DescribeScalingActivities: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalingActivities API call.

---

##### `DescribeScalingPolicies`<sup>Required</sup> <a name="DescribeScalingPolicies" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScalingPolicies"></a>

```typescript
public readonly DescribeScalingPolicies: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScalingPolicies API call.

---

##### `DescribeScheduledActions`<sup>Required</sup> <a name="DescribeScheduledActions" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.DescribeScheduledActions"></a>

```typescript
public readonly DescribeScheduledActions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeScheduledActions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetPredictiveScalingForecast`<sup>Required</sup> <a name="opGetPredictiveScalingForecast" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.opGetPredictiveScalingForecast"></a>

```typescript
public readonly opGetPredictiveScalingForecast: string[];
```

- *Type:* string[]

IAM actions required for the GetPredictiveScalingForecast API call.

---

##### `PutScalingPolicy`<sup>Required</sup> <a name="PutScalingPolicy" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.PutScalingPolicy"></a>

```typescript
public readonly PutScalingPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutScalingPolicy API call.

---

##### `PutScheduledAction`<sup>Required</sup> <a name="PutScheduledAction" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.PutScheduledAction"></a>

```typescript
public readonly PutScheduledAction: string[];
```

- *Type:* string[]

IAM actions required for the PutScheduledAction API call.

---

##### `RegisterScalableTarget`<sup>Required</sup> <a name="RegisterScalableTarget" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.RegisterScalableTarget"></a>

```typescript
public readonly RegisterScalableTarget: string[];
```

- *Type:* string[]

IAM actions required for the RegisterScalableTarget API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### ApplicationAutoscalingResources <a name="ApplicationAutoscalingResources" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources"></a>

ARN builders, validators, and parsers for application-autoscaling resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.Initializer"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

new application_autoscaling.ApplicationAutoscalingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.isValidScalableTargetArn">isValidScalableTargetArn</a></code> | Validates whether a string is a valid ARN for the ScalableTarget resource. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.parseScalableTargetArn">parseScalableTargetArn</a></code> | Parses a ScalableTarget ARN into its components. |
| <code><a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.scalableTarget">scalableTarget</a></code> | Builds an ARN for the ScalableTarget resource. |

---

##### `isValidScalableTargetArn` <a name="isValidScalableTargetArn" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.isValidScalableTargetArn"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingResources.isValidScalableTargetArn(arn: string)
```

Validates whether a string is a valid ARN for the ScalableTarget resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.isValidScalableTargetArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScalableTargetArn` <a name="parseScalableTargetArn" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.parseScalableTargetArn"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingResources.parseScalableTargetArn(arn: string)
```

Parses a ScalableTarget ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.parseScalableTargetArn.parameter.arn"></a>

- *Type:* string

---

##### `scalableTarget` <a name="scalableTarget" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.scalableTarget"></a>

```typescript
import { application_autoscaling } from '@cdk_utils/iam'

application_autoscaling.ApplicationAutoscalingResources.scalableTarget(props: ApplicationAutoscalingScalableTargetArnProps)
```

Builds an ARN for the ScalableTarget resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingResources.scalableTarget.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.application_autoscaling.ApplicationAutoscalingScalableTargetArnProps">ApplicationAutoscalingScalableTargetArnProps</a>

---




