# `codestar_notifications` Submodule <a name="`codestar_notifications` Submodule" id="@cdk_utils/iam.codestar_notifications"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodestarNotificationsNotificationruleArnComponents <a name="CodestarNotificationsNotificationruleArnComponents" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents"></a>

Parsed components of a notificationrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.Initializer"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

const codestarNotificationsNotificationruleArnComponents: codestar_notifications.CodestarNotificationsNotificationruleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.notificationRuleId">notificationRuleId</a></code> | <code>string</code> | The NotificationRuleId component. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `notificationRuleId`<sup>Required</sup> <a name="notificationRuleId" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.notificationRuleId"></a>

```typescript
public readonly notificationRuleId: string;
```

- *Type:* string

The NotificationRuleId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CodestarNotificationsNotificationruleArnProps <a name="CodestarNotificationsNotificationruleArnProps" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps"></a>

Properties for building a notificationrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.Initializer"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

const codestarNotificationsNotificationruleArnProps: codestar_notifications.CodestarNotificationsNotificationruleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.notificationRuleId">notificationRuleId</a></code> | <code>string</code> | The NotificationRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `notificationRuleId`<sup>Required</sup> <a name="notificationRuleId" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.notificationRuleId"></a>

```typescript
public readonly notificationRuleId: string;
```

- *Type:* string

The NotificationRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodestarNotificationsActions <a name="CodestarNotificationsActions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions"></a>

IAM action constants for the codestar-notifications service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.Initializer"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

new codestar_notifications.CodestarNotificationsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.CreateNotificationRule">CreateNotificationRule</a></code> | <code>string</code> | [Write] codestar-notifications:CreateNotificationRule. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.DeleteNotificationRule">DeleteNotificationRule</a></code> | <code>string</code> | [Write] codestar-notifications:DeleteNotificationRule. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.DeleteTarget">DeleteTarget</a></code> | <code>string</code> | [Write] codestar-notifications:DeleteTarget. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.DescribeNotificationRule">DescribeNotificationRule</a></code> | <code>string</code> | [Read] codestar-notifications:DescribeNotificationRule. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListEventTypes">ListEventTypes</a></code> | <code>string</code> | [List] codestar-notifications:ListEventTypes. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListNotificationRules">ListNotificationRules</a></code> | <code>string</code> | [List] codestar-notifications:ListNotificationRules. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] codestar-notifications:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListTargets">ListTargets</a></code> | <code>string</code> | [List] codestar-notifications:ListTargets. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.Subscribe">Subscribe</a></code> | <code>string</code> | [Write] codestar-notifications:Subscribe. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codestar-notifications:TagResource. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.Unsubscribe">Unsubscribe</a></code> | <code>string</code> | [Write] codestar-notifications:Unsubscribe. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codestar-notifications:UntagResource. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.UpdateNotificationRule">UpdateNotificationRule</a></code> | <code>string</code> | [Write] codestar-notifications:UpdateNotificationRule. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateNotificationRule`<sup>Required</sup> <a name="CreateNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.CreateNotificationRule"></a>

```typescript
public readonly CreateNotificationRule: string;
```

- *Type:* string

[Write] codestar-notifications:CreateNotificationRule.

---

##### `DeleteNotificationRule`<sup>Required</sup> <a name="DeleteNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.DeleteNotificationRule"></a>

```typescript
public readonly DeleteNotificationRule: string;
```

- *Type:* string

[Write] codestar-notifications:DeleteNotificationRule.

---

##### `DeleteTarget`<sup>Required</sup> <a name="DeleteTarget" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.DeleteTarget"></a>

```typescript
public readonly DeleteTarget: string;
```

- *Type:* string

[Write] codestar-notifications:DeleteTarget.

---

##### `DescribeNotificationRule`<sup>Required</sup> <a name="DescribeNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.DescribeNotificationRule"></a>

```typescript
public readonly DescribeNotificationRule: string;
```

- *Type:* string

[Read] codestar-notifications:DescribeNotificationRule.

---

##### `ListEventTypes`<sup>Required</sup> <a name="ListEventTypes" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListEventTypes"></a>

```typescript
public readonly ListEventTypes: string;
```

- *Type:* string

[List] codestar-notifications:ListEventTypes.

---

##### `ListNotificationRules`<sup>Required</sup> <a name="ListNotificationRules" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListNotificationRules"></a>

```typescript
public readonly ListNotificationRules: string;
```

- *Type:* string

[List] codestar-notifications:ListNotificationRules.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] codestar-notifications:ListTagsForResource.

---

##### `ListTargets`<sup>Required</sup> <a name="ListTargets" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.ListTargets"></a>

```typescript
public readonly ListTargets: string;
```

- *Type:* string

[List] codestar-notifications:ListTargets.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.Subscribe"></a>

```typescript
public readonly Subscribe: string;
```

- *Type:* string

[Write] codestar-notifications:Subscribe.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codestar-notifications:TagResource.

---

##### `Unsubscribe`<sup>Required</sup> <a name="Unsubscribe" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.Unsubscribe"></a>

```typescript
public readonly Unsubscribe: string;
```

- *Type:* string

[Write] codestar-notifications:Unsubscribe.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codestar-notifications:UntagResource.

---

##### `UpdateNotificationRule`<sup>Required</sup> <a name="UpdateNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsActions.property.UpdateNotificationRule"></a>

```typescript
public readonly UpdateNotificationRule: string;
```

- *Type:* string

[Write] codestar-notifications:UpdateNotificationRule.

---

### CodestarNotificationsConditions <a name="CodestarNotificationsConditions" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions"></a>

Condition key constants and builders for codestar-notifications.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.Initializer"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

new codestar_notifications.CodestarNotificationsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.notificationsForResource">notificationsForResource</a></code> | Generates a condition block for `codestar-notifications:NotificationsForResource`. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `notificationsForResource` <a name="notificationsForResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.notificationsForResource"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsConditions.notificationsForResource(value: string)
```

Generates a condition block for `codestar-notifications:NotificationsForResource`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.notificationsForResource.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.requestTag"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.resourceTag"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.tagKeys"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.CreateNotificationRuleConditionKeys">CreateNotificationRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotificationRule action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.DeleteNotificationRuleConditionKeys">DeleteNotificationRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteNotificationRule action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.DeleteTargetConditionKeys">DeleteTargetConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteTarget action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.DescribeNotificationRuleConditionKeys">DescribeNotificationRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeNotificationRule action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.ListTargetsConditionKeys">ListTargetsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTargets action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.NOTIFICATIONS_FOR_RESOURCE">NOTIFICATIONS_FOR_RESOURCE</a></code> | <code>string</code> | Condition key: codestar-notifications:NotificationsForResource (ARN). |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.SubscribeConditionKeys">SubscribeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Subscribe action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.UnsubscribeConditionKeys">UnsubscribeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Unsubscribe action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.UpdateNotificationRuleConditionKeys">UpdateNotificationRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateNotificationRule action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateNotificationRuleConditionKeys`<sup>Required</sup> <a name="CreateNotificationRuleConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.CreateNotificationRuleConditionKeys"></a>

```typescript
public readonly CreateNotificationRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotificationRule action.

---

##### `DeleteNotificationRuleConditionKeys`<sup>Required</sup> <a name="DeleteNotificationRuleConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.DeleteNotificationRuleConditionKeys"></a>

```typescript
public readonly DeleteNotificationRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteNotificationRule action.

---

##### `DeleteTargetConditionKeys`<sup>Required</sup> <a name="DeleteTargetConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.DeleteTargetConditionKeys"></a>

```typescript
public readonly DeleteTargetConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteTarget action.

---

##### `DescribeNotificationRuleConditionKeys`<sup>Required</sup> <a name="DescribeNotificationRuleConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.DescribeNotificationRuleConditionKeys"></a>

```typescript
public readonly DescribeNotificationRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeNotificationRule action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ListTargetsConditionKeys`<sup>Required</sup> <a name="ListTargetsConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.ListTargetsConditionKeys"></a>

```typescript
public readonly ListTargetsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTargets action.

---

##### `NOTIFICATIONS_FOR_RESOURCE`<sup>Required</sup> <a name="NOTIFICATIONS_FOR_RESOURCE" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.NOTIFICATIONS_FOR_RESOURCE"></a>

```typescript
public readonly NOTIFICATIONS_FOR_RESOURCE: string;
```

- *Type:* string

Condition key: codestar-notifications:NotificationsForResource (ARN).

---

##### `SubscribeConditionKeys`<sup>Required</sup> <a name="SubscribeConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.SubscribeConditionKeys"></a>

```typescript
public readonly SubscribeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Subscribe action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnsubscribeConditionKeys`<sup>Required</sup> <a name="UnsubscribeConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.UnsubscribeConditionKeys"></a>

```typescript
public readonly UnsubscribeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Unsubscribe action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateNotificationRuleConditionKeys`<sup>Required</sup> <a name="UpdateNotificationRuleConditionKeys" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsConditions.property.UpdateNotificationRuleConditionKeys"></a>

```typescript
public readonly UpdateNotificationRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateNotificationRule action.

---

### CodestarNotificationsOperations <a name="CodestarNotificationsOperations" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations"></a>

API operation to required IAM actions mapping for codestar-notifications.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.Initializer"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

new codestar_notifications.CodestarNotificationsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.CreateNotificationRule">CreateNotificationRule</a></code> | <code>string[]</code> | IAM actions required for the CreateNotificationRule API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.DeleteNotificationRule">DeleteNotificationRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotificationRule API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.DeleteTarget">DeleteTarget</a></code> | <code>string[]</code> | IAM actions required for the DeleteTarget API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.DescribeNotificationRule">DescribeNotificationRule</a></code> | <code>string[]</code> | IAM actions required for the DescribeNotificationRule API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListEventTypes">ListEventTypes</a></code> | <code>string[]</code> | IAM actions required for the ListEventTypes API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListNotificationRules">ListNotificationRules</a></code> | <code>string[]</code> | IAM actions required for the ListNotificationRules API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListTargets">ListTargets</a></code> | <code>string[]</code> | IAM actions required for the ListTargets API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.Subscribe">Subscribe</a></code> | <code>string[]</code> | IAM actions required for the Subscribe API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.Unsubscribe">Unsubscribe</a></code> | <code>string[]</code> | IAM actions required for the Unsubscribe API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.UpdateNotificationRule">UpdateNotificationRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotificationRule API call. |

---

##### `CreateNotificationRule`<sup>Required</sup> <a name="CreateNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.CreateNotificationRule"></a>

```typescript
public readonly CreateNotificationRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotificationRule API call.

---

##### `DeleteNotificationRule`<sup>Required</sup> <a name="DeleteNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.DeleteNotificationRule"></a>

```typescript
public readonly DeleteNotificationRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotificationRule API call.

---

##### `DeleteTarget`<sup>Required</sup> <a name="DeleteTarget" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.DeleteTarget"></a>

```typescript
public readonly DeleteTarget: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTarget API call.

---

##### `DescribeNotificationRule`<sup>Required</sup> <a name="DescribeNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.DescribeNotificationRule"></a>

```typescript
public readonly DescribeNotificationRule: string[];
```

- *Type:* string[]

IAM actions required for the DescribeNotificationRule API call.

---

##### `ListEventTypes`<sup>Required</sup> <a name="ListEventTypes" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListEventTypes"></a>

```typescript
public readonly ListEventTypes: string[];
```

- *Type:* string[]

IAM actions required for the ListEventTypes API call.

---

##### `ListNotificationRules`<sup>Required</sup> <a name="ListNotificationRules" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListNotificationRules"></a>

```typescript
public readonly ListNotificationRules: string[];
```

- *Type:* string[]

IAM actions required for the ListNotificationRules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTargets`<sup>Required</sup> <a name="ListTargets" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.ListTargets"></a>

```typescript
public readonly ListTargets: string[];
```

- *Type:* string[]

IAM actions required for the ListTargets API call.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.Subscribe"></a>

```typescript
public readonly Subscribe: string[];
```

- *Type:* string[]

IAM actions required for the Subscribe API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `Unsubscribe`<sup>Required</sup> <a name="Unsubscribe" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.Unsubscribe"></a>

```typescript
public readonly Unsubscribe: string[];
```

- *Type:* string[]

IAM actions required for the Unsubscribe API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateNotificationRule`<sup>Required</sup> <a name="UpdateNotificationRule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsOperations.property.UpdateNotificationRule"></a>

```typescript
public readonly UpdateNotificationRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotificationRule API call.

---

### CodestarNotificationsResources <a name="CodestarNotificationsResources" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources"></a>

ARN builders, validators, and parsers for codestar-notifications resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.Initializer"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

new codestar_notifications.CodestarNotificationsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.isValidNotificationruleArn">isValidNotificationruleArn</a></code> | Validates whether a string is a valid ARN for the notificationrule resource. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.notificationrule">notificationrule</a></code> | Builds an ARN for the notificationrule resource. |
| <code><a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.parseNotificationruleArn">parseNotificationruleArn</a></code> | Parses a notificationrule ARN into its components. |

---

##### `isValidNotificationruleArn` <a name="isValidNotificationruleArn" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.isValidNotificationruleArn"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsResources.isValidNotificationruleArn(arn: string)
```

Validates whether a string is a valid ARN for the notificationrule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.isValidNotificationruleArn.parameter.arn"></a>

- *Type:* string

---

##### `notificationrule` <a name="notificationrule" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.notificationrule"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsResources.notificationrule(props: CodestarNotificationsNotificationruleArnProps)
```

Builds an ARN for the notificationrule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.notificationrule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codestar_notifications.CodestarNotificationsNotificationruleArnProps">CodestarNotificationsNotificationruleArnProps</a>

---

##### `parseNotificationruleArn` <a name="parseNotificationruleArn" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.parseNotificationruleArn"></a>

```typescript
import { codestar_notifications } from '@cdk_utils/iam'

codestar_notifications.CodestarNotificationsResources.parseNotificationruleArn(arn: string)
```

Parses a notificationrule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codestar_notifications.CodestarNotificationsResources.parseNotificationruleArn.parameter.arn"></a>

- *Type:* string

---




