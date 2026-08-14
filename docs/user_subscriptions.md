# `user_subscriptions` Submodule <a name="`user_subscriptions` Submodule" id="@cdk_utils/iam.user_subscriptions"></a>



## Classes <a name="Classes" id="Classes"></a>

### UserSubscriptionsActions <a name="UserSubscriptionsActions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions"></a>

IAM action constants for the user-subscriptions service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.Initializer"></a>

```typescript
import { user_subscriptions } from '@cdk_utils/iam'

new user_subscriptions.UserSubscriptionsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionGetAutoTopUpRule">actionGetAutoTopUpRule</a></code> | <code>string</code> | [Read] user-subscriptions:GetAutoTopUpRule. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionGetEffectiveUsageLimit">actionGetEffectiveUsageLimit</a></code> | <code>string</code> | [Read] user-subscriptions:GetEffectiveUsageLimit. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionGetUsageLimitHistory">actionGetUsageLimitHistory</a></code> | <code>string</code> | [Read] user-subscriptions:GetUsageLimitHistory. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionSetAutoTopUpRule">actionSetAutoTopUpRule</a></code> | <code>string</code> | [Write] user-subscriptions:SetAutoTopUpRule. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionSetOverageConfig">actionSetOverageConfig</a></code> | <code>string</code> | [Write] user-subscriptions:SetOverageConfig. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionSetUsageLimit">actionSetUsageLimit</a></code> | <code>string</code> | [Write] user-subscriptions:SetUsageLimit. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.CreateClaim">CreateClaim</a></code> | <code>string</code> | [Write] user-subscriptions:CreateClaim. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.CreateClaimAddOn">CreateClaimAddOn</a></code> | <code>string</code> | [Write] user-subscriptions:CreateClaimAddOn. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.DeleteAutoTopUpRule">DeleteAutoTopUpRule</a></code> | <code>string</code> | [Write] user-subscriptions:DeleteAutoTopUpRule. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.DeleteClaim">DeleteClaim</a></code> | <code>string</code> | [Write] user-subscriptions:DeleteClaim. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListApplicationClaims">ListApplicationClaims</a></code> | <code>string</code> | [List] user-subscriptions:ListApplicationClaims. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListClaimAddOns">ListClaimAddOns</a></code> | <code>string</code> | [List] user-subscriptions:ListClaimAddOns. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListClaims">ListClaims</a></code> | <code>string</code> | [List] user-subscriptions:ListClaims. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListEntitlements">ListEntitlements</a></code> | <code>string</code> | [List] user-subscriptions:ListEntitlements. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListUsageLimits">ListUsageLimits</a></code> | <code>string</code> | [List] user-subscriptions:ListUsageLimits. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListUserSubscriptions">ListUserSubscriptions</a></code> | <code>string</code> | [List] user-subscriptions:ListUserSubscriptions. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.UpdateClaim">UpdateClaim</a></code> | <code>string</code> | [Write] user-subscriptions:UpdateClaim. |

---

##### `actionGetAutoTopUpRule`<sup>Required</sup> <a name="actionGetAutoTopUpRule" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionGetAutoTopUpRule"></a>

```typescript
public readonly actionGetAutoTopUpRule: string;
```

- *Type:* string

[Read] user-subscriptions:GetAutoTopUpRule.

---

##### `actionGetEffectiveUsageLimit`<sup>Required</sup> <a name="actionGetEffectiveUsageLimit" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionGetEffectiveUsageLimit"></a>

```typescript
public readonly actionGetEffectiveUsageLimit: string;
```

- *Type:* string

[Read] user-subscriptions:GetEffectiveUsageLimit.

---

##### `actionGetUsageLimitHistory`<sup>Required</sup> <a name="actionGetUsageLimitHistory" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionGetUsageLimitHistory"></a>

```typescript
public readonly actionGetUsageLimitHistory: string;
```

- *Type:* string

[Read] user-subscriptions:GetUsageLimitHistory.

---

##### `actionSetAutoTopUpRule`<sup>Required</sup> <a name="actionSetAutoTopUpRule" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionSetAutoTopUpRule"></a>

```typescript
public readonly actionSetAutoTopUpRule: string;
```

- *Type:* string

[Write] user-subscriptions:SetAutoTopUpRule.

---

##### `actionSetOverageConfig`<sup>Required</sup> <a name="actionSetOverageConfig" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionSetOverageConfig"></a>

```typescript
public readonly actionSetOverageConfig: string;
```

- *Type:* string

[Write] user-subscriptions:SetOverageConfig.

---

##### `actionSetUsageLimit`<sup>Required</sup> <a name="actionSetUsageLimit" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.actionSetUsageLimit"></a>

```typescript
public readonly actionSetUsageLimit: string;
```

- *Type:* string

[Write] user-subscriptions:SetUsageLimit.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateClaim`<sup>Required</sup> <a name="CreateClaim" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.CreateClaim"></a>

```typescript
public readonly CreateClaim: string;
```

- *Type:* string

[Write] user-subscriptions:CreateClaim.

---

##### `CreateClaimAddOn`<sup>Required</sup> <a name="CreateClaimAddOn" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.CreateClaimAddOn"></a>

```typescript
public readonly CreateClaimAddOn: string;
```

- *Type:* string

[Write] user-subscriptions:CreateClaimAddOn.

---

##### `DeleteAutoTopUpRule`<sup>Required</sup> <a name="DeleteAutoTopUpRule" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.DeleteAutoTopUpRule"></a>

```typescript
public readonly DeleteAutoTopUpRule: string;
```

- *Type:* string

[Write] user-subscriptions:DeleteAutoTopUpRule.

---

##### `DeleteClaim`<sup>Required</sup> <a name="DeleteClaim" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.DeleteClaim"></a>

```typescript
public readonly DeleteClaim: string;
```

- *Type:* string

[Write] user-subscriptions:DeleteClaim.

---

##### `ListApplicationClaims`<sup>Required</sup> <a name="ListApplicationClaims" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListApplicationClaims"></a>

```typescript
public readonly ListApplicationClaims: string;
```

- *Type:* string

[List] user-subscriptions:ListApplicationClaims.

---

##### `ListClaimAddOns`<sup>Required</sup> <a name="ListClaimAddOns" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListClaimAddOns"></a>

```typescript
public readonly ListClaimAddOns: string;
```

- *Type:* string

[List] user-subscriptions:ListClaimAddOns.

---

##### `ListClaims`<sup>Required</sup> <a name="ListClaims" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListClaims"></a>

```typescript
public readonly ListClaims: string;
```

- *Type:* string

[List] user-subscriptions:ListClaims.

---

##### `ListEntitlements`<sup>Required</sup> <a name="ListEntitlements" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListEntitlements"></a>

```typescript
public readonly ListEntitlements: string;
```

- *Type:* string

[List] user-subscriptions:ListEntitlements.

---

##### `ListUsageLimits`<sup>Required</sup> <a name="ListUsageLimits" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListUsageLimits"></a>

```typescript
public readonly ListUsageLimits: string;
```

- *Type:* string

[List] user-subscriptions:ListUsageLimits.

---

##### `ListUserSubscriptions`<sup>Required</sup> <a name="ListUserSubscriptions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.ListUserSubscriptions"></a>

```typescript
public readonly ListUserSubscriptions: string;
```

- *Type:* string

[List] user-subscriptions:ListUserSubscriptions.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateClaim`<sup>Required</sup> <a name="UpdateClaim" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsActions.property.UpdateClaim"></a>

```typescript
public readonly UpdateClaim: string;
```

- *Type:* string

[Write] user-subscriptions:UpdateClaim.

---

### UserSubscriptionsConditions <a name="UserSubscriptionsConditions" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions"></a>

Condition key constants and builders for user-subscriptions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.Initializer"></a>

```typescript
import { user_subscriptions } from '@cdk_utils/iam'

new user_subscriptions.UserSubscriptionsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.createForSelf">createForSelf</a></code> | Generates a condition block for `user-subscriptions:CreateForSelf`. |

---

##### `createForSelf` <a name="createForSelf" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.createForSelf"></a>

```typescript
import { user_subscriptions } from '@cdk_utils/iam'

user_subscriptions.UserSubscriptionsConditions.createForSelf(value: boolean)
```

Generates a condition block for `user-subscriptions:CreateForSelf`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.createForSelf.parameter.value"></a>

- *Type:* boolean

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.property.CREATE_FOR_SELF">CREATE_FOR_SELF</a></code> | <code>string</code> | Condition key: user-subscriptions:CreateForSelf (Bool). |
| <code><a href="#@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.property.CreateClaimConditionKeys">CreateClaimConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateClaim action. |

---

##### `CREATE_FOR_SELF`<sup>Required</sup> <a name="CREATE_FOR_SELF" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.property.CREATE_FOR_SELF"></a>

```typescript
public readonly CREATE_FOR_SELF: string;
```

- *Type:* string

Condition key: user-subscriptions:CreateForSelf (Bool).

---

##### `CreateClaimConditionKeys`<sup>Required</sup> <a name="CreateClaimConditionKeys" id="@cdk_utils/iam.user_subscriptions.UserSubscriptionsConditions.property.CreateClaimConditionKeys"></a>

```typescript
public readonly CreateClaimConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateClaim action.

---


