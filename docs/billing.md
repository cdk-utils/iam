# `billing` Submodule <a name="`billing` Submodule" id="@cdk_utils/iam.billing"></a>


## Structs <a name="Structs" id="Structs"></a>

### BillingBillingviewArnComponents <a name="BillingBillingviewArnComponents" id="@cdk_utils/iam.billing.BillingBillingviewArnComponents"></a>

Parsed components of a billingview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billing.BillingBillingviewArnComponents.Initializer"></a>

```typescript
import { billing } from '@cdk_utils/iam'

const billingBillingviewArnComponents: billing.BillingBillingviewArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingBillingviewArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billing.BillingBillingviewArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.billing.BillingBillingviewArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.billing.BillingBillingviewArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.billing.BillingBillingviewArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.billing.BillingBillingviewArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### BillingBillingviewArnProps <a name="BillingBillingviewArnProps" id="@cdk_utils/iam.billing.BillingBillingviewArnProps"></a>

Properties for building a billingview ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billing.BillingBillingviewArnProps.Initializer"></a>

```typescript
import { billing } from '@cdk_utils/iam'

const billingBillingviewArnProps: billing.BillingBillingviewArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingBillingviewArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.billing.BillingBillingviewArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billing.BillingBillingviewArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.billing.BillingBillingviewArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.billing.BillingBillingviewArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.billing.BillingBillingviewArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### BillingActions <a name="BillingActions" id="@cdk_utils/iam.billing.BillingActions"></a>

IAM action constants for the billing service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billing.BillingActions.Initializer"></a>

```typescript
import { billing } from '@cdk_utils/iam'

new billing.BillingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetBillingData">actionGetBillingData</a></code> | <code>string</code> | [Read] billing:GetBillingData. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetBillingDetails">actionGetBillingDetails</a></code> | <code>string</code> | [Read] billing:GetBillingDetails. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetBillingNotifications">actionGetBillingNotifications</a></code> | <code>string</code> | [Read] billing:GetBillingNotifications. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetBillingPreferences">actionGetBillingPreferences</a></code> | <code>string</code> | [Read] billing:GetBillingPreferences. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetBillingView">actionGetBillingView</a></code> | <code>string</code> | [Read] billing:GetBillingView. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetBillingViewData">actionGetBillingViewData</a></code> | <code>string</code> | [Read] billing:GetBillingViewData. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetContractInformation">actionGetContractInformation</a></code> | <code>string</code> | [Read] billing:GetContractInformation. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetCreditAllocationHistory">actionGetCreditAllocationHistory</a></code> | <code>string</code> | [Read] billing:GetCreditAllocationHistory. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetCredits">actionGetCredits</a></code> | <code>string</code> | [Read] billing:GetCredits. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetEnterpriseSupportChargeSummary">actionGetEnterpriseSupportChargeSummary</a></code> | <code>string</code> | [Read] billing:GetEnterpriseSupportChargeSummary. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetEnterpriseSupportContractDetails">actionGetEnterpriseSupportContractDetails</a></code> | <code>string</code> | [Read] billing:GetEnterpriseSupportContractDetails. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetIAMAccessPreference">actionGetIAMAccessPreference</a></code> | <code>string</code> | [Read] billing:GetIAMAccessPreference. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] billing:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.actionGetSellerOfRecord">actionGetSellerOfRecord</a></code> | <code>string</code> | [Read] billing:GetSellerOfRecord. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.AssociateSourceViews">AssociateSourceViews</a></code> | <code>string</code> | [Write] billing:AssociateSourceViews. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.CreateBillingView">CreateBillingView</a></code> | <code>string</code> | [Write] billing:CreateBillingView. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.DeleteBillingView">DeleteBillingView</a></code> | <code>string</code> | [Write] billing:DeleteBillingView. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.DeleteResourcePolicy">DeleteResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] billing:DeleteResourcePolicy. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.DisassociateSourceViews">DisassociateSourceViews</a></code> | <code>string</code> | [Write] billing:DisassociateSourceViews. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.ListBillingViews">ListBillingViews</a></code> | <code>string</code> | [Read] billing:ListBillingViews. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.ListEnterpriseSupportLinkedAccountCharges">ListEnterpriseSupportLinkedAccountCharges</a></code> | <code>string</code> | [List] billing:ListEnterpriseSupportLinkedAccountCharges. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.ListSourceViewsForBillingView">ListSourceViewsForBillingView</a></code> | <code>string</code> | [List] billing:ListSourceViewsForBillingView. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] billing:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.PutContractInformation">PutContractInformation</a></code> | <code>string</code> | [Write] billing:PutContractInformation. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.PutResourcePolicy">PutResourcePolicy</a></code> | <code>string</code> | [PermissionManagement] billing:PutResourcePolicy. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.RedeemCredits">RedeemCredits</a></code> | <code>string</code> | [Write] billing:RedeemCredits. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] billing:TagResource. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] billing:UntagResource. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.UpdateBillingPreferences">UpdateBillingPreferences</a></code> | <code>string</code> | [Write] billing:UpdateBillingPreferences. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.UpdateBillingView">UpdateBillingView</a></code> | <code>string</code> | [Write] billing:UpdateBillingView. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.UpdateIAMAccessPreference">UpdateIAMAccessPreference</a></code> | <code>string</code> | [Write] billing:UpdateIAMAccessPreference. |
| <code><a href="#@cdk_utils/iam.billing.BillingActions.property.UseSourceView">UseSourceView</a></code> | <code>string</code> | [Read] billing:UseSourceView. |

---

##### `actionGetBillingData`<sup>Required</sup> <a name="actionGetBillingData" id="@cdk_utils/iam.billing.BillingActions.property.actionGetBillingData"></a>

```typescript
public readonly actionGetBillingData: string;
```

- *Type:* string

[Read] billing:GetBillingData.

---

##### `actionGetBillingDetails`<sup>Required</sup> <a name="actionGetBillingDetails" id="@cdk_utils/iam.billing.BillingActions.property.actionGetBillingDetails"></a>

```typescript
public readonly actionGetBillingDetails: string;
```

- *Type:* string

[Read] billing:GetBillingDetails.

---

##### `actionGetBillingNotifications`<sup>Required</sup> <a name="actionGetBillingNotifications" id="@cdk_utils/iam.billing.BillingActions.property.actionGetBillingNotifications"></a>

```typescript
public readonly actionGetBillingNotifications: string;
```

- *Type:* string

[Read] billing:GetBillingNotifications.

---

##### `actionGetBillingPreferences`<sup>Required</sup> <a name="actionGetBillingPreferences" id="@cdk_utils/iam.billing.BillingActions.property.actionGetBillingPreferences"></a>

```typescript
public readonly actionGetBillingPreferences: string;
```

- *Type:* string

[Read] billing:GetBillingPreferences.

---

##### `actionGetBillingView`<sup>Required</sup> <a name="actionGetBillingView" id="@cdk_utils/iam.billing.BillingActions.property.actionGetBillingView"></a>

```typescript
public readonly actionGetBillingView: string;
```

- *Type:* string

[Read] billing:GetBillingView.

---

##### `actionGetBillingViewData`<sup>Required</sup> <a name="actionGetBillingViewData" id="@cdk_utils/iam.billing.BillingActions.property.actionGetBillingViewData"></a>

```typescript
public readonly actionGetBillingViewData: string;
```

- *Type:* string

[Read] billing:GetBillingViewData.

---

##### `actionGetContractInformation`<sup>Required</sup> <a name="actionGetContractInformation" id="@cdk_utils/iam.billing.BillingActions.property.actionGetContractInformation"></a>

```typescript
public readonly actionGetContractInformation: string;
```

- *Type:* string

[Read] billing:GetContractInformation.

---

##### `actionGetCreditAllocationHistory`<sup>Required</sup> <a name="actionGetCreditAllocationHistory" id="@cdk_utils/iam.billing.BillingActions.property.actionGetCreditAllocationHistory"></a>

```typescript
public readonly actionGetCreditAllocationHistory: string;
```

- *Type:* string

[Read] billing:GetCreditAllocationHistory.

---

##### `actionGetCredits`<sup>Required</sup> <a name="actionGetCredits" id="@cdk_utils/iam.billing.BillingActions.property.actionGetCredits"></a>

```typescript
public readonly actionGetCredits: string;
```

- *Type:* string

[Read] billing:GetCredits.

---

##### `actionGetEnterpriseSupportChargeSummary`<sup>Required</sup> <a name="actionGetEnterpriseSupportChargeSummary" id="@cdk_utils/iam.billing.BillingActions.property.actionGetEnterpriseSupportChargeSummary"></a>

```typescript
public readonly actionGetEnterpriseSupportChargeSummary: string;
```

- *Type:* string

[Read] billing:GetEnterpriseSupportChargeSummary.

---

##### `actionGetEnterpriseSupportContractDetails`<sup>Required</sup> <a name="actionGetEnterpriseSupportContractDetails" id="@cdk_utils/iam.billing.BillingActions.property.actionGetEnterpriseSupportContractDetails"></a>

```typescript
public readonly actionGetEnterpriseSupportContractDetails: string;
```

- *Type:* string

[Read] billing:GetEnterpriseSupportContractDetails.

---

##### `actionGetIAMAccessPreference`<sup>Required</sup> <a name="actionGetIAMAccessPreference" id="@cdk_utils/iam.billing.BillingActions.property.actionGetIAMAccessPreference"></a>

```typescript
public readonly actionGetIAMAccessPreference: string;
```

- *Type:* string

[Read] billing:GetIAMAccessPreference.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.billing.BillingActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] billing:GetResourcePolicy.

---

##### `actionGetSellerOfRecord`<sup>Required</sup> <a name="actionGetSellerOfRecord" id="@cdk_utils/iam.billing.BillingActions.property.actionGetSellerOfRecord"></a>

```typescript
public readonly actionGetSellerOfRecord: string;
```

- *Type:* string

[Read] billing:GetSellerOfRecord.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.billing.BillingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.billing.BillingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.billing.BillingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.billing.BillingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.billing.BillingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateSourceViews`<sup>Required</sup> <a name="AssociateSourceViews" id="@cdk_utils/iam.billing.BillingActions.property.AssociateSourceViews"></a>

```typescript
public readonly AssociateSourceViews: string;
```

- *Type:* string

[Write] billing:AssociateSourceViews.

---

##### `CreateBillingView`<sup>Required</sup> <a name="CreateBillingView" id="@cdk_utils/iam.billing.BillingActions.property.CreateBillingView"></a>

```typescript
public readonly CreateBillingView: string;
```

- *Type:* string

[Write] billing:CreateBillingView.

---

##### `DeleteBillingView`<sup>Required</sup> <a name="DeleteBillingView" id="@cdk_utils/iam.billing.BillingActions.property.DeleteBillingView"></a>

```typescript
public readonly DeleteBillingView: string;
```

- *Type:* string

[Write] billing:DeleteBillingView.

---

##### `DeleteResourcePolicy`<sup>Required</sup> <a name="DeleteResourcePolicy" id="@cdk_utils/iam.billing.BillingActions.property.DeleteResourcePolicy"></a>

```typescript
public readonly DeleteResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] billing:DeleteResourcePolicy.

---

##### `DisassociateSourceViews`<sup>Required</sup> <a name="DisassociateSourceViews" id="@cdk_utils/iam.billing.BillingActions.property.DisassociateSourceViews"></a>

```typescript
public readonly DisassociateSourceViews: string;
```

- *Type:* string

[Write] billing:DisassociateSourceViews.

---

##### `ListBillingViews`<sup>Required</sup> <a name="ListBillingViews" id="@cdk_utils/iam.billing.BillingActions.property.ListBillingViews"></a>

```typescript
public readonly ListBillingViews: string;
```

- *Type:* string

[Read] billing:ListBillingViews.

---

##### `ListEnterpriseSupportLinkedAccountCharges`<sup>Required</sup> <a name="ListEnterpriseSupportLinkedAccountCharges" id="@cdk_utils/iam.billing.BillingActions.property.ListEnterpriseSupportLinkedAccountCharges"></a>

```typescript
public readonly ListEnterpriseSupportLinkedAccountCharges: string;
```

- *Type:* string

[List] billing:ListEnterpriseSupportLinkedAccountCharges.

---

##### `ListSourceViewsForBillingView`<sup>Required</sup> <a name="ListSourceViewsForBillingView" id="@cdk_utils/iam.billing.BillingActions.property.ListSourceViewsForBillingView"></a>

```typescript
public readonly ListSourceViewsForBillingView: string;
```

- *Type:* string

[List] billing:ListSourceViewsForBillingView.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.billing.BillingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] billing:ListTagsForResource.

---

##### `PutContractInformation`<sup>Required</sup> <a name="PutContractInformation" id="@cdk_utils/iam.billing.BillingActions.property.PutContractInformation"></a>

```typescript
public readonly PutContractInformation: string;
```

- *Type:* string

[Write] billing:PutContractInformation.

---

##### `PutResourcePolicy`<sup>Required</sup> <a name="PutResourcePolicy" id="@cdk_utils/iam.billing.BillingActions.property.PutResourcePolicy"></a>

```typescript
public readonly PutResourcePolicy: string;
```

- *Type:* string

[PermissionManagement] billing:PutResourcePolicy.

---

##### `RedeemCredits`<sup>Required</sup> <a name="RedeemCredits" id="@cdk_utils/iam.billing.BillingActions.property.RedeemCredits"></a>

```typescript
public readonly RedeemCredits: string;
```

- *Type:* string

[Write] billing:RedeemCredits.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.billing.BillingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.billing.BillingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] billing:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.billing.BillingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] billing:UntagResource.

---

##### `UpdateBillingPreferences`<sup>Required</sup> <a name="UpdateBillingPreferences" id="@cdk_utils/iam.billing.BillingActions.property.UpdateBillingPreferences"></a>

```typescript
public readonly UpdateBillingPreferences: string;
```

- *Type:* string

[Write] billing:UpdateBillingPreferences.

---

##### `UpdateBillingView`<sup>Required</sup> <a name="UpdateBillingView" id="@cdk_utils/iam.billing.BillingActions.property.UpdateBillingView"></a>

```typescript
public readonly UpdateBillingView: string;
```

- *Type:* string

[Write] billing:UpdateBillingView.

---

##### `UpdateIAMAccessPreference`<sup>Required</sup> <a name="UpdateIAMAccessPreference" id="@cdk_utils/iam.billing.BillingActions.property.UpdateIAMAccessPreference"></a>

```typescript
public readonly UpdateIAMAccessPreference: string;
```

- *Type:* string

[Write] billing:UpdateIAMAccessPreference.

---

##### `UseSourceView`<sup>Required</sup> <a name="UseSourceView" id="@cdk_utils/iam.billing.BillingActions.property.UseSourceView"></a>

```typescript
public readonly UseSourceView: string;
```

- *Type:* string

[Read] billing:UseSourceView.

---

### BillingConditions <a name="BillingConditions" id="@cdk_utils/iam.billing.BillingConditions"></a>

Condition key constants and builders for billing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billing.BillingConditions.Initializer"></a>

```typescript
import { billing } from '@cdk_utils/iam'

new billing.BillingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.billing.BillingConditions.requestTag"></a>

```typescript
import { billing } from '@cdk_utils/iam'

billing.BillingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.billing.BillingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.billing.BillingConditions.resourceTag"></a>

```typescript
import { billing } from '@cdk_utils/iam'

billing.BillingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.billing.BillingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.billing.BillingConditions.tagKeys"></a>

```typescript
import { billing } from '@cdk_utils/iam'

billing.BillingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.billing.BillingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.actionGetBillingDataConditionKeys">actionGetBillingDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBillingData action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.actionGetBillingDetailsConditionKeys">actionGetBillingDetailsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBillingDetails action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.actionGetBillingViewConditionKeys">actionGetBillingViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetBillingView action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.actionGetResourcePolicyConditionKeys">actionGetResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.AssociateSourceViewsConditionKeys">AssociateSourceViewsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateSourceViews action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.CreateBillingViewConditionKeys">CreateBillingViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBillingView action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.DeleteBillingViewConditionKeys">DeleteBillingViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteBillingView action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.DeleteResourcePolicyConditionKeys">DeleteResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.DisassociateSourceViewsConditionKeys">DisassociateSourceViewsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateSourceViews action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.ListSourceViewsForBillingViewConditionKeys">ListSourceViewsForBillingViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListSourceViewsForBillingView action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.PutResourcePolicyConditionKeys">PutResourcePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutResourcePolicy action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.billing.BillingConditions.property.UpdateBillingViewConditionKeys">UpdateBillingViewConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateBillingView action. |

---

##### `actionGetBillingDataConditionKeys`<sup>Required</sup> <a name="actionGetBillingDataConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.actionGetBillingDataConditionKeys"></a>

```typescript
public readonly actionGetBillingDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBillingData action.

---

##### `actionGetBillingDetailsConditionKeys`<sup>Required</sup> <a name="actionGetBillingDetailsConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.actionGetBillingDetailsConditionKeys"></a>

```typescript
public readonly actionGetBillingDetailsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBillingDetails action.

---

##### `actionGetBillingViewConditionKeys`<sup>Required</sup> <a name="actionGetBillingViewConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.actionGetBillingViewConditionKeys"></a>

```typescript
public readonly actionGetBillingViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetBillingView action.

---

##### `actionGetResourcePolicyConditionKeys`<sup>Required</sup> <a name="actionGetResourcePolicyConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.actionGetResourcePolicyConditionKeys"></a>

```typescript
public readonly actionGetResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetResourcePolicy action.

---

##### `AssociateSourceViewsConditionKeys`<sup>Required</sup> <a name="AssociateSourceViewsConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.AssociateSourceViewsConditionKeys"></a>

```typescript
public readonly AssociateSourceViewsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateSourceViews action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.billing.BillingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.billing.BillingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.billing.BillingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBillingViewConditionKeys`<sup>Required</sup> <a name="CreateBillingViewConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.CreateBillingViewConditionKeys"></a>

```typescript
public readonly CreateBillingViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBillingView action.

---

##### `DeleteBillingViewConditionKeys`<sup>Required</sup> <a name="DeleteBillingViewConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.DeleteBillingViewConditionKeys"></a>

```typescript
public readonly DeleteBillingViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteBillingView action.

---

##### `DeleteResourcePolicyConditionKeys`<sup>Required</sup> <a name="DeleteResourcePolicyConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.DeleteResourcePolicyConditionKeys"></a>

```typescript
public readonly DeleteResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteResourcePolicy action.

---

##### `DisassociateSourceViewsConditionKeys`<sup>Required</sup> <a name="DisassociateSourceViewsConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.DisassociateSourceViewsConditionKeys"></a>

```typescript
public readonly DisassociateSourceViewsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateSourceViews action.

---

##### `ListSourceViewsForBillingViewConditionKeys`<sup>Required</sup> <a name="ListSourceViewsForBillingViewConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.ListSourceViewsForBillingViewConditionKeys"></a>

```typescript
public readonly ListSourceViewsForBillingViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListSourceViewsForBillingView action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PutResourcePolicyConditionKeys`<sup>Required</sup> <a name="PutResourcePolicyConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.PutResourcePolicyConditionKeys"></a>

```typescript
public readonly PutResourcePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutResourcePolicy action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateBillingViewConditionKeys`<sup>Required</sup> <a name="UpdateBillingViewConditionKeys" id="@cdk_utils/iam.billing.BillingConditions.property.UpdateBillingViewConditionKeys"></a>

```typescript
public readonly UpdateBillingViewConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateBillingView action.

---

### BillingOperations <a name="BillingOperations" id="@cdk_utils/iam.billing.BillingOperations"></a>

API operation to required IAM actions mapping for billing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billing.BillingOperations.Initializer"></a>

```typescript
import { billing } from '@cdk_utils/iam'

new billing.BillingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.AssociateSourceViews">AssociateSourceViews</a></code> | <code>string[]</code> | IAM actions required for the AssociateSourceViews API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.CreateBillingView">CreateBillingView</a></code> | <code>string[]</code> | IAM actions required for the CreateBillingView API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.DeleteBillingView">DeleteBillingView</a></code> | <code>string[]</code> | IAM actions required for the DeleteBillingView API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.DisassociateSourceViews">DisassociateSourceViews</a></code> | <code>string[]</code> | IAM actions required for the DisassociateSourceViews API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.ListBillingViews">ListBillingViews</a></code> | <code>string[]</code> | IAM actions required for the ListBillingViews API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.ListEnterpriseSupportLinkedAccountCharges">ListEnterpriseSupportLinkedAccountCharges</a></code> | <code>string[]</code> | IAM actions required for the ListEnterpriseSupportLinkedAccountCharges API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.ListSourceViewsForBillingView">ListSourceViewsForBillingView</a></code> | <code>string[]</code> | IAM actions required for the ListSourceViewsForBillingView API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetBillingPreferences">opGetBillingPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetBillingPreferences API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetBillingView">opGetBillingView</a></code> | <code>string[]</code> | IAM actions required for the GetBillingView API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetCreditAllocationHistory">opGetCreditAllocationHistory</a></code> | <code>string[]</code> | IAM actions required for the GetCreditAllocationHistory API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetCredits">opGetCredits</a></code> | <code>string[]</code> | IAM actions required for the GetCredits API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetEnterpriseSupportChargeSummary">opGetEnterpriseSupportChargeSummary</a></code> | <code>string[]</code> | IAM actions required for the GetEnterpriseSupportChargeSummary API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetEnterpriseSupportContractDetails">opGetEnterpriseSupportContractDetails</a></code> | <code>string[]</code> | IAM actions required for the GetEnterpriseSupportContractDetails API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.RedeemCredits">RedeemCredits</a></code> | <code>string[]</code> | IAM actions required for the RedeemCredits API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.UpdateBillingPreferences">UpdateBillingPreferences</a></code> | <code>string[]</code> | IAM actions required for the UpdateBillingPreferences API call. |
| <code><a href="#@cdk_utils/iam.billing.BillingOperations.property.UpdateBillingView">UpdateBillingView</a></code> | <code>string[]</code> | IAM actions required for the UpdateBillingView API call. |

---

##### `AssociateSourceViews`<sup>Required</sup> <a name="AssociateSourceViews" id="@cdk_utils/iam.billing.BillingOperations.property.AssociateSourceViews"></a>

```typescript
public readonly AssociateSourceViews: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSourceViews API call.

---

##### `CreateBillingView`<sup>Required</sup> <a name="CreateBillingView" id="@cdk_utils/iam.billing.BillingOperations.property.CreateBillingView"></a>

```typescript
public readonly CreateBillingView: string[];
```

- *Type:* string[]

IAM actions required for the CreateBillingView API call.

---

##### `DeleteBillingView`<sup>Required</sup> <a name="DeleteBillingView" id="@cdk_utils/iam.billing.BillingOperations.property.DeleteBillingView"></a>

```typescript
public readonly DeleteBillingView: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBillingView API call.

---

##### `DisassociateSourceViews`<sup>Required</sup> <a name="DisassociateSourceViews" id="@cdk_utils/iam.billing.BillingOperations.property.DisassociateSourceViews"></a>

```typescript
public readonly DisassociateSourceViews: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateSourceViews API call.

---

##### `ListBillingViews`<sup>Required</sup> <a name="ListBillingViews" id="@cdk_utils/iam.billing.BillingOperations.property.ListBillingViews"></a>

```typescript
public readonly ListBillingViews: string[];
```

- *Type:* string[]

IAM actions required for the ListBillingViews API call.

---

##### `ListEnterpriseSupportLinkedAccountCharges`<sup>Required</sup> <a name="ListEnterpriseSupportLinkedAccountCharges" id="@cdk_utils/iam.billing.BillingOperations.property.ListEnterpriseSupportLinkedAccountCharges"></a>

```typescript
public readonly ListEnterpriseSupportLinkedAccountCharges: string[];
```

- *Type:* string[]

IAM actions required for the ListEnterpriseSupportLinkedAccountCharges API call.

---

##### `ListSourceViewsForBillingView`<sup>Required</sup> <a name="ListSourceViewsForBillingView" id="@cdk_utils/iam.billing.BillingOperations.property.ListSourceViewsForBillingView"></a>

```typescript
public readonly ListSourceViewsForBillingView: string[];
```

- *Type:* string[]

IAM actions required for the ListSourceViewsForBillingView API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.billing.BillingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetBillingPreferences`<sup>Required</sup> <a name="opGetBillingPreferences" id="@cdk_utils/iam.billing.BillingOperations.property.opGetBillingPreferences"></a>

```typescript
public readonly opGetBillingPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetBillingPreferences API call.

---

##### `opGetBillingView`<sup>Required</sup> <a name="opGetBillingView" id="@cdk_utils/iam.billing.BillingOperations.property.opGetBillingView"></a>

```typescript
public readonly opGetBillingView: string[];
```

- *Type:* string[]

IAM actions required for the GetBillingView API call.

---

##### `opGetCreditAllocationHistory`<sup>Required</sup> <a name="opGetCreditAllocationHistory" id="@cdk_utils/iam.billing.BillingOperations.property.opGetCreditAllocationHistory"></a>

```typescript
public readonly opGetCreditAllocationHistory: string[];
```

- *Type:* string[]

IAM actions required for the GetCreditAllocationHistory API call.

---

##### `opGetCredits`<sup>Required</sup> <a name="opGetCredits" id="@cdk_utils/iam.billing.BillingOperations.property.opGetCredits"></a>

```typescript
public readonly opGetCredits: string[];
```

- *Type:* string[]

IAM actions required for the GetCredits API call.

---

##### `opGetEnterpriseSupportChargeSummary`<sup>Required</sup> <a name="opGetEnterpriseSupportChargeSummary" id="@cdk_utils/iam.billing.BillingOperations.property.opGetEnterpriseSupportChargeSummary"></a>

```typescript
public readonly opGetEnterpriseSupportChargeSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetEnterpriseSupportChargeSummary API call.

---

##### `opGetEnterpriseSupportContractDetails`<sup>Required</sup> <a name="opGetEnterpriseSupportContractDetails" id="@cdk_utils/iam.billing.BillingOperations.property.opGetEnterpriseSupportContractDetails"></a>

```typescript
public readonly opGetEnterpriseSupportContractDetails: string[];
```

- *Type:* string[]

IAM actions required for the GetEnterpriseSupportContractDetails API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.billing.BillingOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `RedeemCredits`<sup>Required</sup> <a name="RedeemCredits" id="@cdk_utils/iam.billing.BillingOperations.property.RedeemCredits"></a>

```typescript
public readonly RedeemCredits: string[];
```

- *Type:* string[]

IAM actions required for the RedeemCredits API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.billing.BillingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.billing.BillingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBillingPreferences`<sup>Required</sup> <a name="UpdateBillingPreferences" id="@cdk_utils/iam.billing.BillingOperations.property.UpdateBillingPreferences"></a>

```typescript
public readonly UpdateBillingPreferences: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBillingPreferences API call.

---

##### `UpdateBillingView`<sup>Required</sup> <a name="UpdateBillingView" id="@cdk_utils/iam.billing.BillingOperations.property.UpdateBillingView"></a>

```typescript
public readonly UpdateBillingView: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBillingView API call.

---

### BillingResources <a name="BillingResources" id="@cdk_utils/iam.billing.BillingResources"></a>

ARN builders, validators, and parsers for billing resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billing.BillingResources.Initializer"></a>

```typescript
import { billing } from '@cdk_utils/iam'

new billing.BillingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.billing.BillingResources.billingview">billingview</a></code> | Builds an ARN for the billingview resource. |
| <code><a href="#@cdk_utils/iam.billing.BillingResources.isValidBillingviewArn">isValidBillingviewArn</a></code> | Validates whether a string is a valid ARN for the billingview resource. |
| <code><a href="#@cdk_utils/iam.billing.BillingResources.parseBillingviewArn">parseBillingviewArn</a></code> | Parses a billingview ARN into its components. |

---

##### `billingview` <a name="billingview" id="@cdk_utils/iam.billing.BillingResources.billingview"></a>

```typescript
import { billing } from '@cdk_utils/iam'

billing.BillingResources.billingview(props: BillingBillingviewArnProps)
```

Builds an ARN for the billingview resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.billing.BillingResources.billingview.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.billing.BillingBillingviewArnProps">BillingBillingviewArnProps</a>

---

##### `isValidBillingviewArn` <a name="isValidBillingviewArn" id="@cdk_utils/iam.billing.BillingResources.isValidBillingviewArn"></a>

```typescript
import { billing } from '@cdk_utils/iam'

billing.BillingResources.isValidBillingviewArn(arn: string)
```

Validates whether a string is a valid ARN for the billingview resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billing.BillingResources.isValidBillingviewArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillingviewArn` <a name="parseBillingviewArn" id="@cdk_utils/iam.billing.BillingResources.parseBillingviewArn"></a>

```typescript
import { billing } from '@cdk_utils/iam'

billing.BillingResources.parseBillingviewArn(arn: string)
```

Parses a billingview ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billing.BillingResources.parseBillingviewArn.parameter.arn"></a>

- *Type:* string

---




