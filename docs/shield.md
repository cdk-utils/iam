# `shield` Submodule <a name="`shield` Submodule" id="@cdk_utils/iam.shield"></a>


## Structs <a name="Structs" id="Structs"></a>

### ShieldAttackArnComponents <a name="ShieldAttackArnComponents" id="@cdk_utils/iam.shield.ShieldAttackArnComponents"></a>

Parsed components of a attack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.shield.ShieldAttackArnComponents.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

const shieldAttackArnComponents: shield.ShieldAttackArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldAttackArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.shield.ShieldAttackArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.shield.ShieldAttackArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.shield.ShieldAttackArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.shield.ShieldAttackArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.shield.ShieldAttackArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ShieldAttackArnProps <a name="ShieldAttackArnProps" id="@cdk_utils/iam.shield.ShieldAttackArnProps"></a>

Properties for building a attack ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.shield.ShieldAttackArnProps.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

const shieldAttackArnProps: shield.ShieldAttackArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldAttackArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.shield.ShieldAttackArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.shield.ShieldAttackArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.shield.ShieldAttackArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.shield.ShieldAttackArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.shield.ShieldAttackArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### ShieldProtectionArnComponents <a name="ShieldProtectionArnComponents" id="@cdk_utils/iam.shield.ShieldProtectionArnComponents"></a>

Parsed components of a protection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.shield.ShieldProtectionArnComponents.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

const shieldProtectionArnComponents: shield.ShieldProtectionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.shield.ShieldProtectionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.shield.ShieldProtectionArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.shield.ShieldProtectionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ShieldProtectionArnProps <a name="ShieldProtectionArnProps" id="@cdk_utils/iam.shield.ShieldProtectionArnProps"></a>

Properties for building a protection ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.shield.ShieldProtectionArnProps.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

const shieldProtectionArnProps: shield.ShieldProtectionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.shield.ShieldProtectionArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.shield.ShieldProtectionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.shield.ShieldProtectionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### ShieldProtectionGroupArnComponents <a name="ShieldProtectionGroupArnComponents" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents"></a>

Parsed components of a protection-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

const shieldProtectionGroupArnComponents: shield.ShieldProtectionGroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ShieldProtectionGroupArnProps <a name="ShieldProtectionGroupArnProps" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnProps"></a>

Properties for building a protection-group ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

const shieldProtectionGroupArnProps: shield.ShieldProtectionGroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.shield.ShieldProtectionGroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldActions <a name="ShieldActions" id="@cdk_utils/iam.shield.ShieldActions"></a>

IAM action constants for the shield service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.shield.ShieldActions.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

new shield.ShieldActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.actionGetGlobalThreatData">actionGetGlobalThreatData</a></code> | <code>string</code> | [Read] shield:GetGlobalThreatData. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.actionGetSubscriptionState">actionGetSubscriptionState</a></code> | <code>string</code> | [Read] shield:GetSubscriptionState. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AssociateDRTLogBucket">AssociateDRTLogBucket</a></code> | <code>string</code> | [Write] shield:AssociateDRTLogBucket. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AssociateDRTRole">AssociateDRTRole</a></code> | <code>string</code> | [Write] shield:AssociateDRTRole. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AssociateHealthCheck">AssociateHealthCheck</a></code> | <code>string</code> | [Write] shield:AssociateHealthCheck. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.AssociateProactiveEngagementDetails">AssociateProactiveEngagementDetails</a></code> | <code>string</code> | [Write] shield:AssociateProactiveEngagementDetails. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.CreateProtection">CreateProtection</a></code> | <code>string</code> | [Write] shield:CreateProtection. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.CreateProtectionGroup">CreateProtectionGroup</a></code> | <code>string</code> | [Write] shield:CreateProtectionGroup. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.CreateSubscription">CreateSubscription</a></code> | <code>string</code> | [Write] shield:CreateSubscription. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DeleteProtection">DeleteProtection</a></code> | <code>string</code> | [Write] shield:DeleteProtection. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DeleteProtectionGroup">DeleteProtectionGroup</a></code> | <code>string</code> | [Write] shield:DeleteProtectionGroup. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DeleteSubscription">DeleteSubscription</a></code> | <code>string</code> | [Write] shield:DeleteSubscription. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeAttack">DescribeAttack</a></code> | <code>string</code> | [Read] shield:DescribeAttack. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeAttackContributors">DescribeAttackContributors</a></code> | <code>string</code> | [Read] shield:DescribeAttackContributors. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeAttackStatistics">DescribeAttackStatistics</a></code> | <code>string</code> | [Read] shield:DescribeAttackStatistics. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeDRTAccess">DescribeDRTAccess</a></code> | <code>string</code> | [Read] shield:DescribeDRTAccess. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeEmergencyContactSettings">DescribeEmergencyContactSettings</a></code> | <code>string</code> | [Read] shield:DescribeEmergencyContactSettings. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeProtection">DescribeProtection</a></code> | <code>string</code> | [Read] shield:DescribeProtection. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeProtectionGroup">DescribeProtectionGroup</a></code> | <code>string</code> | [Read] shield:DescribeProtectionGroup. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DescribeSubscription">DescribeSubscription</a></code> | <code>string</code> | [Read] shield:DescribeSubscription. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DisableApplicationLayerAutomaticResponse">DisableApplicationLayerAutomaticResponse</a></code> | <code>string</code> | [Write] shield:DisableApplicationLayerAutomaticResponse. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DisableProactiveEngagement">DisableProactiveEngagement</a></code> | <code>string</code> | [Write] shield:DisableProactiveEngagement. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DisassociateDRTLogBucket">DisassociateDRTLogBucket</a></code> | <code>string</code> | [Write] shield:DisassociateDRTLogBucket. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DisassociateDRTRole">DisassociateDRTRole</a></code> | <code>string</code> | [Write] shield:DisassociateDRTRole. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.DisassociateHealthCheck">DisassociateHealthCheck</a></code> | <code>string</code> | [Write] shield:DisassociateHealthCheck. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.EnableApplicationLayerAutomaticResponse">EnableApplicationLayerAutomaticResponse</a></code> | <code>string</code> | [Write] shield:EnableApplicationLayerAutomaticResponse. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.EnableProactiveEngagement">EnableProactiveEngagement</a></code> | <code>string</code> | [Write] shield:EnableProactiveEngagement. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.ListAttacks">ListAttacks</a></code> | <code>string</code> | [List] shield:ListAttacks. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.ListMitigations">ListMitigations</a></code> | <code>string</code> | [List] shield:ListMitigations. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.ListProtectionGroups">ListProtectionGroups</a></code> | <code>string</code> | [List] shield:ListProtectionGroups. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.ListProtections">ListProtections</a></code> | <code>string</code> | [List] shield:ListProtections. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.ListResourcesInProtectionGroup">ListResourcesInProtectionGroup</a></code> | <code>string</code> | [List] shield:ListResourcesInProtectionGroup. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] shield:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] shield:TagResource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] shield:UntagResource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.UpdateApplicationLayerAutomaticResponse">UpdateApplicationLayerAutomaticResponse</a></code> | <code>string</code> | [Write] shield:UpdateApplicationLayerAutomaticResponse. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.UpdateEmergencyContactSettings">UpdateEmergencyContactSettings</a></code> | <code>string</code> | [Write] shield:UpdateEmergencyContactSettings. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.UpdateProtectionGroup">UpdateProtectionGroup</a></code> | <code>string</code> | [Write] shield:UpdateProtectionGroup. |
| <code><a href="#@cdk_utils/iam.shield.ShieldActions.property.UpdateSubscription">UpdateSubscription</a></code> | <code>string</code> | [Write] shield:UpdateSubscription. |

---

##### `actionGetGlobalThreatData`<sup>Required</sup> <a name="actionGetGlobalThreatData" id="@cdk_utils/iam.shield.ShieldActions.property.actionGetGlobalThreatData"></a>

```typescript
public readonly actionGetGlobalThreatData: string;
```

- *Type:* string

[Read] shield:GetGlobalThreatData.

---

##### `actionGetSubscriptionState`<sup>Required</sup> <a name="actionGetSubscriptionState" id="@cdk_utils/iam.shield.ShieldActions.property.actionGetSubscriptionState"></a>

```typescript
public readonly actionGetSubscriptionState: string;
```

- *Type:* string

[Read] shield:GetSubscriptionState.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.shield.ShieldActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.shield.ShieldActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.shield.ShieldActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.shield.ShieldActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.shield.ShieldActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateDRTLogBucket`<sup>Required</sup> <a name="AssociateDRTLogBucket" id="@cdk_utils/iam.shield.ShieldActions.property.AssociateDRTLogBucket"></a>

```typescript
public readonly AssociateDRTLogBucket: string;
```

- *Type:* string

[Write] shield:AssociateDRTLogBucket.

---

##### `AssociateDRTRole`<sup>Required</sup> <a name="AssociateDRTRole" id="@cdk_utils/iam.shield.ShieldActions.property.AssociateDRTRole"></a>

```typescript
public readonly AssociateDRTRole: string;
```

- *Type:* string

[Write] shield:AssociateDRTRole.

---

##### `AssociateHealthCheck`<sup>Required</sup> <a name="AssociateHealthCheck" id="@cdk_utils/iam.shield.ShieldActions.property.AssociateHealthCheck"></a>

```typescript
public readonly AssociateHealthCheck: string;
```

- *Type:* string

[Write] shield:AssociateHealthCheck.

---

##### `AssociateProactiveEngagementDetails`<sup>Required</sup> <a name="AssociateProactiveEngagementDetails" id="@cdk_utils/iam.shield.ShieldActions.property.AssociateProactiveEngagementDetails"></a>

```typescript
public readonly AssociateProactiveEngagementDetails: string;
```

- *Type:* string

[Write] shield:AssociateProactiveEngagementDetails.

---

##### `CreateProtection`<sup>Required</sup> <a name="CreateProtection" id="@cdk_utils/iam.shield.ShieldActions.property.CreateProtection"></a>

```typescript
public readonly CreateProtection: string;
```

- *Type:* string

[Write] shield:CreateProtection.

---

##### `CreateProtectionGroup`<sup>Required</sup> <a name="CreateProtectionGroup" id="@cdk_utils/iam.shield.ShieldActions.property.CreateProtectionGroup"></a>

```typescript
public readonly CreateProtectionGroup: string;
```

- *Type:* string

[Write] shield:CreateProtectionGroup.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.shield.ShieldActions.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string;
```

- *Type:* string

[Write] shield:CreateSubscription.

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdk_utils/iam.shield.ShieldActions.property.DeleteProtection"></a>

```typescript
public readonly DeleteProtection: string;
```

- *Type:* string

[Write] shield:DeleteProtection.

---

##### `DeleteProtectionGroup`<sup>Required</sup> <a name="DeleteProtectionGroup" id="@cdk_utils/iam.shield.ShieldActions.property.DeleteProtectionGroup"></a>

```typescript
public readonly DeleteProtectionGroup: string;
```

- *Type:* string

[Write] shield:DeleteProtectionGroup.

---

##### `DeleteSubscription`<sup>Required</sup> <a name="DeleteSubscription" id="@cdk_utils/iam.shield.ShieldActions.property.DeleteSubscription"></a>

```typescript
public readonly DeleteSubscription: string;
```

- *Type:* string

[Write] shield:DeleteSubscription.

---

##### `DescribeAttack`<sup>Required</sup> <a name="DescribeAttack" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeAttack"></a>

```typescript
public readonly DescribeAttack: string;
```

- *Type:* string

[Read] shield:DescribeAttack.

---

##### `DescribeAttackContributors`<sup>Required</sup> <a name="DescribeAttackContributors" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeAttackContributors"></a>

```typescript
public readonly DescribeAttackContributors: string;
```

- *Type:* string

[Read] shield:DescribeAttackContributors.

---

##### `DescribeAttackStatistics`<sup>Required</sup> <a name="DescribeAttackStatistics" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeAttackStatistics"></a>

```typescript
public readonly DescribeAttackStatistics: string;
```

- *Type:* string

[Read] shield:DescribeAttackStatistics.

---

##### `DescribeDRTAccess`<sup>Required</sup> <a name="DescribeDRTAccess" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeDRTAccess"></a>

```typescript
public readonly DescribeDRTAccess: string;
```

- *Type:* string

[Read] shield:DescribeDRTAccess.

---

##### `DescribeEmergencyContactSettings`<sup>Required</sup> <a name="DescribeEmergencyContactSettings" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeEmergencyContactSettings"></a>

```typescript
public readonly DescribeEmergencyContactSettings: string;
```

- *Type:* string

[Read] shield:DescribeEmergencyContactSettings.

---

##### `DescribeProtection`<sup>Required</sup> <a name="DescribeProtection" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeProtection"></a>

```typescript
public readonly DescribeProtection: string;
```

- *Type:* string

[Read] shield:DescribeProtection.

---

##### `DescribeProtectionGroup`<sup>Required</sup> <a name="DescribeProtectionGroup" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeProtectionGroup"></a>

```typescript
public readonly DescribeProtectionGroup: string;
```

- *Type:* string

[Read] shield:DescribeProtectionGroup.

---

##### `DescribeSubscription`<sup>Required</sup> <a name="DescribeSubscription" id="@cdk_utils/iam.shield.ShieldActions.property.DescribeSubscription"></a>

```typescript
public readonly DescribeSubscription: string;
```

- *Type:* string

[Read] shield:DescribeSubscription.

---

##### `DisableApplicationLayerAutomaticResponse`<sup>Required</sup> <a name="DisableApplicationLayerAutomaticResponse" id="@cdk_utils/iam.shield.ShieldActions.property.DisableApplicationLayerAutomaticResponse"></a>

```typescript
public readonly DisableApplicationLayerAutomaticResponse: string;
```

- *Type:* string

[Write] shield:DisableApplicationLayerAutomaticResponse.

---

##### `DisableProactiveEngagement`<sup>Required</sup> <a name="DisableProactiveEngagement" id="@cdk_utils/iam.shield.ShieldActions.property.DisableProactiveEngagement"></a>

```typescript
public readonly DisableProactiveEngagement: string;
```

- *Type:* string

[Write] shield:DisableProactiveEngagement.

---

##### `DisassociateDRTLogBucket`<sup>Required</sup> <a name="DisassociateDRTLogBucket" id="@cdk_utils/iam.shield.ShieldActions.property.DisassociateDRTLogBucket"></a>

```typescript
public readonly DisassociateDRTLogBucket: string;
```

- *Type:* string

[Write] shield:DisassociateDRTLogBucket.

---

##### `DisassociateDRTRole`<sup>Required</sup> <a name="DisassociateDRTRole" id="@cdk_utils/iam.shield.ShieldActions.property.DisassociateDRTRole"></a>

```typescript
public readonly DisassociateDRTRole: string;
```

- *Type:* string

[Write] shield:DisassociateDRTRole.

---

##### `DisassociateHealthCheck`<sup>Required</sup> <a name="DisassociateHealthCheck" id="@cdk_utils/iam.shield.ShieldActions.property.DisassociateHealthCheck"></a>

```typescript
public readonly DisassociateHealthCheck: string;
```

- *Type:* string

[Write] shield:DisassociateHealthCheck.

---

##### `EnableApplicationLayerAutomaticResponse`<sup>Required</sup> <a name="EnableApplicationLayerAutomaticResponse" id="@cdk_utils/iam.shield.ShieldActions.property.EnableApplicationLayerAutomaticResponse"></a>

```typescript
public readonly EnableApplicationLayerAutomaticResponse: string;
```

- *Type:* string

[Write] shield:EnableApplicationLayerAutomaticResponse.

---

##### `EnableProactiveEngagement`<sup>Required</sup> <a name="EnableProactiveEngagement" id="@cdk_utils/iam.shield.ShieldActions.property.EnableProactiveEngagement"></a>

```typescript
public readonly EnableProactiveEngagement: string;
```

- *Type:* string

[Write] shield:EnableProactiveEngagement.

---

##### `ListAttacks`<sup>Required</sup> <a name="ListAttacks" id="@cdk_utils/iam.shield.ShieldActions.property.ListAttacks"></a>

```typescript
public readonly ListAttacks: string;
```

- *Type:* string

[List] shield:ListAttacks.

---

##### `ListMitigations`<sup>Required</sup> <a name="ListMitigations" id="@cdk_utils/iam.shield.ShieldActions.property.ListMitigations"></a>

```typescript
public readonly ListMitigations: string;
```

- *Type:* string

[List] shield:ListMitigations.

---

##### `ListProtectionGroups`<sup>Required</sup> <a name="ListProtectionGroups" id="@cdk_utils/iam.shield.ShieldActions.property.ListProtectionGroups"></a>

```typescript
public readonly ListProtectionGroups: string;
```

- *Type:* string

[List] shield:ListProtectionGroups.

---

##### `ListProtections`<sup>Required</sup> <a name="ListProtections" id="@cdk_utils/iam.shield.ShieldActions.property.ListProtections"></a>

```typescript
public readonly ListProtections: string;
```

- *Type:* string

[List] shield:ListProtections.

---

##### `ListResourcesInProtectionGroup`<sup>Required</sup> <a name="ListResourcesInProtectionGroup" id="@cdk_utils/iam.shield.ShieldActions.property.ListResourcesInProtectionGroup"></a>

```typescript
public readonly ListResourcesInProtectionGroup: string;
```

- *Type:* string

[List] shield:ListResourcesInProtectionGroup.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.shield.ShieldActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] shield:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.shield.ShieldActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.shield.ShieldActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] shield:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.shield.ShieldActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] shield:UntagResource.

---

##### `UpdateApplicationLayerAutomaticResponse`<sup>Required</sup> <a name="UpdateApplicationLayerAutomaticResponse" id="@cdk_utils/iam.shield.ShieldActions.property.UpdateApplicationLayerAutomaticResponse"></a>

```typescript
public readonly UpdateApplicationLayerAutomaticResponse: string;
```

- *Type:* string

[Write] shield:UpdateApplicationLayerAutomaticResponse.

---

##### `UpdateEmergencyContactSettings`<sup>Required</sup> <a name="UpdateEmergencyContactSettings" id="@cdk_utils/iam.shield.ShieldActions.property.UpdateEmergencyContactSettings"></a>

```typescript
public readonly UpdateEmergencyContactSettings: string;
```

- *Type:* string

[Write] shield:UpdateEmergencyContactSettings.

---

##### `UpdateProtectionGroup`<sup>Required</sup> <a name="UpdateProtectionGroup" id="@cdk_utils/iam.shield.ShieldActions.property.UpdateProtectionGroup"></a>

```typescript
public readonly UpdateProtectionGroup: string;
```

- *Type:* string

[Write] shield:UpdateProtectionGroup.

---

##### `UpdateSubscription`<sup>Required</sup> <a name="UpdateSubscription" id="@cdk_utils/iam.shield.ShieldActions.property.UpdateSubscription"></a>

```typescript
public readonly UpdateSubscription: string;
```

- *Type:* string

[Write] shield:UpdateSubscription.

---

### ShieldConditions <a name="ShieldConditions" id="@cdk_utils/iam.shield.ShieldConditions"></a>

Condition key constants and builders for shield.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.shield.ShieldConditions.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

new shield.ShieldConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.shield.ShieldConditions.requestTag"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.shield.ShieldConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.shield.ShieldConditions.resourceTag"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.shield.ShieldConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.shield.ShieldConditions.tagKeys"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.shield.ShieldConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.AssociateHealthCheckConditionKeys">AssociateHealthCheckConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateHealthCheck action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.CreateProtectionConditionKeys">CreateProtectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProtection action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.CreateProtectionGroupConditionKeys">CreateProtectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProtectionGroup action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.DeleteProtectionConditionKeys">DeleteProtectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProtection action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.DeleteProtectionGroupConditionKeys">DeleteProtectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProtectionGroup action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.DescribeProtectionConditionKeys">DescribeProtectionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeProtection action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.DescribeProtectionGroupConditionKeys">DescribeProtectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeProtectionGroup action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.DisassociateHealthCheckConditionKeys">DisassociateHealthCheckConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateHealthCheck action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.shield.ShieldConditions.property.UpdateProtectionGroupConditionKeys">UpdateProtectionGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProtectionGroup action. |

---

##### `AssociateHealthCheckConditionKeys`<sup>Required</sup> <a name="AssociateHealthCheckConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.AssociateHealthCheckConditionKeys"></a>

```typescript
public readonly AssociateHealthCheckConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateHealthCheck action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.shield.ShieldConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.shield.ShieldConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.shield.ShieldConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateProtectionConditionKeys`<sup>Required</sup> <a name="CreateProtectionConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.CreateProtectionConditionKeys"></a>

```typescript
public readonly CreateProtectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProtection action.

---

##### `CreateProtectionGroupConditionKeys`<sup>Required</sup> <a name="CreateProtectionGroupConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.CreateProtectionGroupConditionKeys"></a>

```typescript
public readonly CreateProtectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProtectionGroup action.

---

##### `DeleteProtectionConditionKeys`<sup>Required</sup> <a name="DeleteProtectionConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.DeleteProtectionConditionKeys"></a>

```typescript
public readonly DeleteProtectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProtection action.

---

##### `DeleteProtectionGroupConditionKeys`<sup>Required</sup> <a name="DeleteProtectionGroupConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.DeleteProtectionGroupConditionKeys"></a>

```typescript
public readonly DeleteProtectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProtectionGroup action.

---

##### `DescribeProtectionConditionKeys`<sup>Required</sup> <a name="DescribeProtectionConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.DescribeProtectionConditionKeys"></a>

```typescript
public readonly DescribeProtectionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeProtection action.

---

##### `DescribeProtectionGroupConditionKeys`<sup>Required</sup> <a name="DescribeProtectionGroupConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.DescribeProtectionGroupConditionKeys"></a>

```typescript
public readonly DescribeProtectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeProtectionGroup action.

---

##### `DisassociateHealthCheckConditionKeys`<sup>Required</sup> <a name="DisassociateHealthCheckConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.DisassociateHealthCheckConditionKeys"></a>

```typescript
public readonly DisassociateHealthCheckConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateHealthCheck action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateProtectionGroupConditionKeys`<sup>Required</sup> <a name="UpdateProtectionGroupConditionKeys" id="@cdk_utils/iam.shield.ShieldConditions.property.UpdateProtectionGroupConditionKeys"></a>

```typescript
public readonly UpdateProtectionGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProtectionGroup action.

---

### ShieldOperations <a name="ShieldOperations" id="@cdk_utils/iam.shield.ShieldOperations"></a>

API operation to required IAM actions mapping for shield.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.shield.ShieldOperations.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

new shield.ShieldOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.AssociateDRTLogBucket">AssociateDRTLogBucket</a></code> | <code>string[]</code> | IAM actions required for the AssociateDRTLogBucket API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.AssociateDRTRole">AssociateDRTRole</a></code> | <code>string[]</code> | IAM actions required for the AssociateDRTRole API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.AssociateHealthCheck">AssociateHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the AssociateHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.AssociateProactiveEngagementDetails">AssociateProactiveEngagementDetails</a></code> | <code>string[]</code> | IAM actions required for the AssociateProactiveEngagementDetails API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.CreateProtection">CreateProtection</a></code> | <code>string[]</code> | IAM actions required for the CreateProtection API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.CreateProtectionGroup">CreateProtectionGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateProtectionGroup API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.CreateSubscription">CreateSubscription</a></code> | <code>string[]</code> | IAM actions required for the CreateSubscription API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DeleteProtection">DeleteProtection</a></code> | <code>string[]</code> | IAM actions required for the DeleteProtection API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DeleteProtectionGroup">DeleteProtectionGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteProtectionGroup API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DeleteSubscription">DeleteSubscription</a></code> | <code>string[]</code> | IAM actions required for the DeleteSubscription API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeAttack">DescribeAttack</a></code> | <code>string[]</code> | IAM actions required for the DescribeAttack API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeAttackStatistics">DescribeAttackStatistics</a></code> | <code>string[]</code> | IAM actions required for the DescribeAttackStatistics API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeDRTAccess">DescribeDRTAccess</a></code> | <code>string[]</code> | IAM actions required for the DescribeDRTAccess API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeEmergencyContactSettings">DescribeEmergencyContactSettings</a></code> | <code>string[]</code> | IAM actions required for the DescribeEmergencyContactSettings API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeProtection">DescribeProtection</a></code> | <code>string[]</code> | IAM actions required for the DescribeProtection API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeProtectionGroup">DescribeProtectionGroup</a></code> | <code>string[]</code> | IAM actions required for the DescribeProtectionGroup API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DescribeSubscription">DescribeSubscription</a></code> | <code>string[]</code> | IAM actions required for the DescribeSubscription API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DisableApplicationLayerAutomaticResponse">DisableApplicationLayerAutomaticResponse</a></code> | <code>string[]</code> | IAM actions required for the DisableApplicationLayerAutomaticResponse API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DisableProactiveEngagement">DisableProactiveEngagement</a></code> | <code>string[]</code> | IAM actions required for the DisableProactiveEngagement API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DisassociateDRTLogBucket">DisassociateDRTLogBucket</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDRTLogBucket API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DisassociateDRTRole">DisassociateDRTRole</a></code> | <code>string[]</code> | IAM actions required for the DisassociateDRTRole API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.DisassociateHealthCheck">DisassociateHealthCheck</a></code> | <code>string[]</code> | IAM actions required for the DisassociateHealthCheck API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.EnableApplicationLayerAutomaticResponse">EnableApplicationLayerAutomaticResponse</a></code> | <code>string[]</code> | IAM actions required for the EnableApplicationLayerAutomaticResponse API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.EnableProactiveEngagement">EnableProactiveEngagement</a></code> | <code>string[]</code> | IAM actions required for the EnableProactiveEngagement API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.ListAttacks">ListAttacks</a></code> | <code>string[]</code> | IAM actions required for the ListAttacks API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.ListProtectionGroups">ListProtectionGroups</a></code> | <code>string[]</code> | IAM actions required for the ListProtectionGroups API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.ListProtections">ListProtections</a></code> | <code>string[]</code> | IAM actions required for the ListProtections API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.ListResourcesInProtectionGroup">ListResourcesInProtectionGroup</a></code> | <code>string[]</code> | IAM actions required for the ListResourcesInProtectionGroup API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.opGetSubscriptionState">opGetSubscriptionState</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionState API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.UpdateApplicationLayerAutomaticResponse">UpdateApplicationLayerAutomaticResponse</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplicationLayerAutomaticResponse API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.UpdateEmergencyContactSettings">UpdateEmergencyContactSettings</a></code> | <code>string[]</code> | IAM actions required for the UpdateEmergencyContactSettings API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.UpdateProtectionGroup">UpdateProtectionGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateProtectionGroup API call. |
| <code><a href="#@cdk_utils/iam.shield.ShieldOperations.property.UpdateSubscription">UpdateSubscription</a></code> | <code>string[]</code> | IAM actions required for the UpdateSubscription API call. |

---

##### `AssociateDRTLogBucket`<sup>Required</sup> <a name="AssociateDRTLogBucket" id="@cdk_utils/iam.shield.ShieldOperations.property.AssociateDRTLogBucket"></a>

```typescript
public readonly AssociateDRTLogBucket: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDRTLogBucket API call.

---

##### `AssociateDRTRole`<sup>Required</sup> <a name="AssociateDRTRole" id="@cdk_utils/iam.shield.ShieldOperations.property.AssociateDRTRole"></a>

```typescript
public readonly AssociateDRTRole: string[];
```

- *Type:* string[]

IAM actions required for the AssociateDRTRole API call.

---

##### `AssociateHealthCheck`<sup>Required</sup> <a name="AssociateHealthCheck" id="@cdk_utils/iam.shield.ShieldOperations.property.AssociateHealthCheck"></a>

```typescript
public readonly AssociateHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the AssociateHealthCheck API call.

---

##### `AssociateProactiveEngagementDetails`<sup>Required</sup> <a name="AssociateProactiveEngagementDetails" id="@cdk_utils/iam.shield.ShieldOperations.property.AssociateProactiveEngagementDetails"></a>

```typescript
public readonly AssociateProactiveEngagementDetails: string[];
```

- *Type:* string[]

IAM actions required for the AssociateProactiveEngagementDetails API call.

---

##### `CreateProtection`<sup>Required</sup> <a name="CreateProtection" id="@cdk_utils/iam.shield.ShieldOperations.property.CreateProtection"></a>

```typescript
public readonly CreateProtection: string[];
```

- *Type:* string[]

IAM actions required for the CreateProtection API call.

---

##### `CreateProtectionGroup`<sup>Required</sup> <a name="CreateProtectionGroup" id="@cdk_utils/iam.shield.ShieldOperations.property.CreateProtectionGroup"></a>

```typescript
public readonly CreateProtectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateProtectionGroup API call.

---

##### `CreateSubscription`<sup>Required</sup> <a name="CreateSubscription" id="@cdk_utils/iam.shield.ShieldOperations.property.CreateSubscription"></a>

```typescript
public readonly CreateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the CreateSubscription API call.

---

##### `DeleteProtection`<sup>Required</sup> <a name="DeleteProtection" id="@cdk_utils/iam.shield.ShieldOperations.property.DeleteProtection"></a>

```typescript
public readonly DeleteProtection: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProtection API call.

---

##### `DeleteProtectionGroup`<sup>Required</sup> <a name="DeleteProtectionGroup" id="@cdk_utils/iam.shield.ShieldOperations.property.DeleteProtectionGroup"></a>

```typescript
public readonly DeleteProtectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProtectionGroup API call.

---

##### `DeleteSubscription`<sup>Required</sup> <a name="DeleteSubscription" id="@cdk_utils/iam.shield.ShieldOperations.property.DeleteSubscription"></a>

```typescript
public readonly DeleteSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSubscription API call.

---

##### `DescribeAttack`<sup>Required</sup> <a name="DescribeAttack" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeAttack"></a>

```typescript
public readonly DescribeAttack: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAttack API call.

---

##### `DescribeAttackStatistics`<sup>Required</sup> <a name="DescribeAttackStatistics" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeAttackStatistics"></a>

```typescript
public readonly DescribeAttackStatistics: string[];
```

- *Type:* string[]

IAM actions required for the DescribeAttackStatistics API call.

---

##### `DescribeDRTAccess`<sup>Required</sup> <a name="DescribeDRTAccess" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeDRTAccess"></a>

```typescript
public readonly DescribeDRTAccess: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDRTAccess API call.

---

##### `DescribeEmergencyContactSettings`<sup>Required</sup> <a name="DescribeEmergencyContactSettings" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeEmergencyContactSettings"></a>

```typescript
public readonly DescribeEmergencyContactSettings: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEmergencyContactSettings API call.

---

##### `DescribeProtection`<sup>Required</sup> <a name="DescribeProtection" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeProtection"></a>

```typescript
public readonly DescribeProtection: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProtection API call.

---

##### `DescribeProtectionGroup`<sup>Required</sup> <a name="DescribeProtectionGroup" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeProtectionGroup"></a>

```typescript
public readonly DescribeProtectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProtectionGroup API call.

---

##### `DescribeSubscription`<sup>Required</sup> <a name="DescribeSubscription" id="@cdk_utils/iam.shield.ShieldOperations.property.DescribeSubscription"></a>

```typescript
public readonly DescribeSubscription: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSubscription API call.

---

##### `DisableApplicationLayerAutomaticResponse`<sup>Required</sup> <a name="DisableApplicationLayerAutomaticResponse" id="@cdk_utils/iam.shield.ShieldOperations.property.DisableApplicationLayerAutomaticResponse"></a>

```typescript
public readonly DisableApplicationLayerAutomaticResponse: string[];
```

- *Type:* string[]

IAM actions required for the DisableApplicationLayerAutomaticResponse API call.

---

##### `DisableProactiveEngagement`<sup>Required</sup> <a name="DisableProactiveEngagement" id="@cdk_utils/iam.shield.ShieldOperations.property.DisableProactiveEngagement"></a>

```typescript
public readonly DisableProactiveEngagement: string[];
```

- *Type:* string[]

IAM actions required for the DisableProactiveEngagement API call.

---

##### `DisassociateDRTLogBucket`<sup>Required</sup> <a name="DisassociateDRTLogBucket" id="@cdk_utils/iam.shield.ShieldOperations.property.DisassociateDRTLogBucket"></a>

```typescript
public readonly DisassociateDRTLogBucket: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDRTLogBucket API call.

---

##### `DisassociateDRTRole`<sup>Required</sup> <a name="DisassociateDRTRole" id="@cdk_utils/iam.shield.ShieldOperations.property.DisassociateDRTRole"></a>

```typescript
public readonly DisassociateDRTRole: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateDRTRole API call.

---

##### `DisassociateHealthCheck`<sup>Required</sup> <a name="DisassociateHealthCheck" id="@cdk_utils/iam.shield.ShieldOperations.property.DisassociateHealthCheck"></a>

```typescript
public readonly DisassociateHealthCheck: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateHealthCheck API call.

---

##### `EnableApplicationLayerAutomaticResponse`<sup>Required</sup> <a name="EnableApplicationLayerAutomaticResponse" id="@cdk_utils/iam.shield.ShieldOperations.property.EnableApplicationLayerAutomaticResponse"></a>

```typescript
public readonly EnableApplicationLayerAutomaticResponse: string[];
```

- *Type:* string[]

IAM actions required for the EnableApplicationLayerAutomaticResponse API call.

---

##### `EnableProactiveEngagement`<sup>Required</sup> <a name="EnableProactiveEngagement" id="@cdk_utils/iam.shield.ShieldOperations.property.EnableProactiveEngagement"></a>

```typescript
public readonly EnableProactiveEngagement: string[];
```

- *Type:* string[]

IAM actions required for the EnableProactiveEngagement API call.

---

##### `ListAttacks`<sup>Required</sup> <a name="ListAttacks" id="@cdk_utils/iam.shield.ShieldOperations.property.ListAttacks"></a>

```typescript
public readonly ListAttacks: string[];
```

- *Type:* string[]

IAM actions required for the ListAttacks API call.

---

##### `ListProtectionGroups`<sup>Required</sup> <a name="ListProtectionGroups" id="@cdk_utils/iam.shield.ShieldOperations.property.ListProtectionGroups"></a>

```typescript
public readonly ListProtectionGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListProtectionGroups API call.

---

##### `ListProtections`<sup>Required</sup> <a name="ListProtections" id="@cdk_utils/iam.shield.ShieldOperations.property.ListProtections"></a>

```typescript
public readonly ListProtections: string[];
```

- *Type:* string[]

IAM actions required for the ListProtections API call.

---

##### `ListResourcesInProtectionGroup`<sup>Required</sup> <a name="ListResourcesInProtectionGroup" id="@cdk_utils/iam.shield.ShieldOperations.property.ListResourcesInProtectionGroup"></a>

```typescript
public readonly ListResourcesInProtectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcesInProtectionGroup API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.shield.ShieldOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetSubscriptionState`<sup>Required</sup> <a name="opGetSubscriptionState" id="@cdk_utils/iam.shield.ShieldOperations.property.opGetSubscriptionState"></a>

```typescript
public readonly opGetSubscriptionState: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionState API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.shield.ShieldOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.shield.ShieldOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplicationLayerAutomaticResponse`<sup>Required</sup> <a name="UpdateApplicationLayerAutomaticResponse" id="@cdk_utils/iam.shield.ShieldOperations.property.UpdateApplicationLayerAutomaticResponse"></a>

```typescript
public readonly UpdateApplicationLayerAutomaticResponse: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplicationLayerAutomaticResponse API call.

---

##### `UpdateEmergencyContactSettings`<sup>Required</sup> <a name="UpdateEmergencyContactSettings" id="@cdk_utils/iam.shield.ShieldOperations.property.UpdateEmergencyContactSettings"></a>

```typescript
public readonly UpdateEmergencyContactSettings: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEmergencyContactSettings API call.

---

##### `UpdateProtectionGroup`<sup>Required</sup> <a name="UpdateProtectionGroup" id="@cdk_utils/iam.shield.ShieldOperations.property.UpdateProtectionGroup"></a>

```typescript
public readonly UpdateProtectionGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProtectionGroup API call.

---

##### `UpdateSubscription`<sup>Required</sup> <a name="UpdateSubscription" id="@cdk_utils/iam.shield.ShieldOperations.property.UpdateSubscription"></a>

```typescript
public readonly UpdateSubscription: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSubscription API call.

---

### ShieldResources <a name="ShieldResources" id="@cdk_utils/iam.shield.ShieldResources"></a>

ARN builders, validators, and parsers for shield resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.shield.ShieldResources.Initializer"></a>

```typescript
import { shield } from '@cdk_utils/iam'

new shield.ShieldResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.attack">attack</a></code> | Builds an ARN for the attack resource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.isValidAttackArn">isValidAttackArn</a></code> | Validates whether a string is a valid ARN for the attack resource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.isValidProtectionArn">isValidProtectionArn</a></code> | Validates whether a string is a valid ARN for the protection resource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.isValidProtectionGroupArn">isValidProtectionGroupArn</a></code> | Validates whether a string is a valid ARN for the protection-group resource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.parseAttackArn">parseAttackArn</a></code> | Parses a attack ARN into its components. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.parseProtectionArn">parseProtectionArn</a></code> | Parses a protection ARN into its components. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.parseProtectionGroupArn">parseProtectionGroupArn</a></code> | Parses a protection-group ARN into its components. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.protection">protection</a></code> | Builds an ARN for the protection resource. |
| <code><a href="#@cdk_utils/iam.shield.ShieldResources.protectionGroup">protectionGroup</a></code> | Builds an ARN for the protection-group resource. |

---

##### `attack` <a name="attack" id="@cdk_utils/iam.shield.ShieldResources.attack"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.attack(props: ShieldAttackArnProps)
```

Builds an ARN for the attack resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.shield.ShieldResources.attack.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.shield.ShieldAttackArnProps">ShieldAttackArnProps</a>

---

##### `isValidAttackArn` <a name="isValidAttackArn" id="@cdk_utils/iam.shield.ShieldResources.isValidAttackArn"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.isValidAttackArn(arn: string)
```

Validates whether a string is a valid ARN for the attack resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.shield.ShieldResources.isValidAttackArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProtectionArn` <a name="isValidProtectionArn" id="@cdk_utils/iam.shield.ShieldResources.isValidProtectionArn"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.isValidProtectionArn(arn: string)
```

Validates whether a string is a valid ARN for the protection resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.shield.ShieldResources.isValidProtectionArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProtectionGroupArn` <a name="isValidProtectionGroupArn" id="@cdk_utils/iam.shield.ShieldResources.isValidProtectionGroupArn"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.isValidProtectionGroupArn(arn: string)
```

Validates whether a string is a valid ARN for the protection-group resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.shield.ShieldResources.isValidProtectionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAttackArn` <a name="parseAttackArn" id="@cdk_utils/iam.shield.ShieldResources.parseAttackArn"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.parseAttackArn(arn: string)
```

Parses a attack ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.shield.ShieldResources.parseAttackArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProtectionArn` <a name="parseProtectionArn" id="@cdk_utils/iam.shield.ShieldResources.parseProtectionArn"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.parseProtectionArn(arn: string)
```

Parses a protection ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.shield.ShieldResources.parseProtectionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProtectionGroupArn` <a name="parseProtectionGroupArn" id="@cdk_utils/iam.shield.ShieldResources.parseProtectionGroupArn"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.parseProtectionGroupArn(arn: string)
```

Parses a protection-group ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.shield.ShieldResources.parseProtectionGroupArn.parameter.arn"></a>

- *Type:* string

---

##### `protection` <a name="protection" id="@cdk_utils/iam.shield.ShieldResources.protection"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.protection(props: ShieldProtectionArnProps)
```

Builds an ARN for the protection resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.shield.ShieldResources.protection.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.shield.ShieldProtectionArnProps">ShieldProtectionArnProps</a>

---

##### `protectionGroup` <a name="protectionGroup" id="@cdk_utils/iam.shield.ShieldResources.protectionGroup"></a>

```typescript
import { shield } from '@cdk_utils/iam'

shield.ShieldResources.protectionGroup(props: ShieldProtectionGroupArnProps)
```

Builds an ARN for the protection-group resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.shield.ShieldResources.protectionGroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.shield.ShieldProtectionGroupArnProps">ShieldProtectionGroupArnProps</a>

---




