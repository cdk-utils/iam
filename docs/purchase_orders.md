# `purchase_orders` Submodule <a name="`purchase_orders` Submodule" id="@cdk_utils/iam.purchase_orders"></a>


## Structs <a name="Structs" id="Structs"></a>

### PurchaseOrdersPurchaseOrderArnComponents <a name="PurchaseOrdersPurchaseOrderArnComponents" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents"></a>

Parsed components of a purchase-order ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.Initializer"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

const purchaseOrdersPurchaseOrderArnComponents: purchase_orders.PurchaseOrdersPurchaseOrderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnComponents.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component.

---

### PurchaseOrdersPurchaseOrderArnProps <a name="PurchaseOrdersPurchaseOrderArnProps" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps"></a>

Properties for building a purchase-order ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.Initializer"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

const purchaseOrdersPurchaseOrderArnProps: purchase_orders.PurchaseOrdersPurchaseOrderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### PurchaseOrdersActions <a name="PurchaseOrdersActions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions"></a>

IAM action constants for the purchase-orders service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.Initializer"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

new purchase_orders.PurchaseOrdersActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.actionGetConsoleActionSetEnforced">actionGetConsoleActionSetEnforced</a></code> | <code>string</code> | [Read] purchase-orders:GetConsoleActionSetEnforced. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.actionGetPurchaseOrder">actionGetPurchaseOrder</a></code> | <code>string</code> | [Read] purchase-orders:GetPurchaseOrder. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AddPurchaseOrder">AddPurchaseOrder</a></code> | <code>string</code> | [Write] purchase-orders:AddPurchaseOrder. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.DeletePurchaseOrder">DeletePurchaseOrder</a></code> | <code>string</code> | [Write] purchase-orders:DeletePurchaseOrder. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ListPurchaseOrderInvoices">ListPurchaseOrderInvoices</a></code> | <code>string</code> | [List] purchase-orders:ListPurchaseOrderInvoices. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ListPurchaseOrders">ListPurchaseOrders</a></code> | <code>string</code> | [List] purchase-orders:ListPurchaseOrders. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] purchase-orders:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ModifyPurchaseOrders">ModifyPurchaseOrders</a></code> | <code>string</code> | [Write] purchase-orders:ModifyPurchaseOrders. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] purchase-orders:TagResource. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] purchase-orders:UntagResource. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UpdateConsoleActionSetEnforced">UpdateConsoleActionSetEnforced</a></code> | <code>string</code> | [Write] purchase-orders:UpdateConsoleActionSetEnforced. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UpdatePurchaseOrder">UpdatePurchaseOrder</a></code> | <code>string</code> | [Write] purchase-orders:UpdatePurchaseOrder. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UpdatePurchaseOrderStatus">UpdatePurchaseOrderStatus</a></code> | <code>string</code> | [Write] purchase-orders:UpdatePurchaseOrderStatus. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ViewPurchaseOrders">ViewPurchaseOrders</a></code> | <code>string</code> | [Read] purchase-orders:ViewPurchaseOrders. |

---

##### `actionGetConsoleActionSetEnforced`<sup>Required</sup> <a name="actionGetConsoleActionSetEnforced" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.actionGetConsoleActionSetEnforced"></a>

```typescript
public readonly actionGetConsoleActionSetEnforced: string;
```

- *Type:* string

[Read] purchase-orders:GetConsoleActionSetEnforced.

---

##### `actionGetPurchaseOrder`<sup>Required</sup> <a name="actionGetPurchaseOrder" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.actionGetPurchaseOrder"></a>

```typescript
public readonly actionGetPurchaseOrder: string;
```

- *Type:* string

[Read] purchase-orders:GetPurchaseOrder.

---

##### `AddPurchaseOrder`<sup>Required</sup> <a name="AddPurchaseOrder" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AddPurchaseOrder"></a>

```typescript
public readonly AddPurchaseOrder: string;
```

- *Type:* string

[Write] purchase-orders:AddPurchaseOrder.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeletePurchaseOrder`<sup>Required</sup> <a name="DeletePurchaseOrder" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.DeletePurchaseOrder"></a>

```typescript
public readonly DeletePurchaseOrder: string;
```

- *Type:* string

[Write] purchase-orders:DeletePurchaseOrder.

---

##### `ListPurchaseOrderInvoices`<sup>Required</sup> <a name="ListPurchaseOrderInvoices" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ListPurchaseOrderInvoices"></a>

```typescript
public readonly ListPurchaseOrderInvoices: string;
```

- *Type:* string

[List] purchase-orders:ListPurchaseOrderInvoices.

---

##### `ListPurchaseOrders`<sup>Required</sup> <a name="ListPurchaseOrders" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ListPurchaseOrders"></a>

```typescript
public readonly ListPurchaseOrders: string;
```

- *Type:* string

[List] purchase-orders:ListPurchaseOrders.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] purchase-orders:ListTagsForResource.

---

##### `ModifyPurchaseOrders`<sup>Required</sup> <a name="ModifyPurchaseOrders" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ModifyPurchaseOrders"></a>

```typescript
public readonly ModifyPurchaseOrders: string;
```

- *Type:* string

[Write] purchase-orders:ModifyPurchaseOrders.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] purchase-orders:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] purchase-orders:UntagResource.

---

##### `UpdateConsoleActionSetEnforced`<sup>Required</sup> <a name="UpdateConsoleActionSetEnforced" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UpdateConsoleActionSetEnforced"></a>

```typescript
public readonly UpdateConsoleActionSetEnforced: string;
```

- *Type:* string

[Write] purchase-orders:UpdateConsoleActionSetEnforced.

---

##### `UpdatePurchaseOrder`<sup>Required</sup> <a name="UpdatePurchaseOrder" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UpdatePurchaseOrder"></a>

```typescript
public readonly UpdatePurchaseOrder: string;
```

- *Type:* string

[Write] purchase-orders:UpdatePurchaseOrder.

---

##### `UpdatePurchaseOrderStatus`<sup>Required</sup> <a name="UpdatePurchaseOrderStatus" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.UpdatePurchaseOrderStatus"></a>

```typescript
public readonly UpdatePurchaseOrderStatus: string;
```

- *Type:* string

[Write] purchase-orders:UpdatePurchaseOrderStatus.

---

##### `ViewPurchaseOrders`<sup>Required</sup> <a name="ViewPurchaseOrders" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersActions.property.ViewPurchaseOrders"></a>

```typescript
public readonly ViewPurchaseOrders: string;
```

- *Type:* string

[Read] purchase-orders:ViewPurchaseOrders.

---

### PurchaseOrdersConditions <a name="PurchaseOrdersConditions" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions"></a>

Condition key constants and builders for purchase-orders.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.Initializer"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

new purchase_orders.PurchaseOrdersConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.requestTag"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

purchase_orders.PurchaseOrdersConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.resourceTag"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

purchase_orders.PurchaseOrdersConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.tagKeys"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

purchase_orders.PurchaseOrdersConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.actionGetPurchaseOrderConditionKeys">actionGetPurchaseOrderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetPurchaseOrder action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AddPurchaseOrderConditionKeys">AddPurchaseOrderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AddPurchaseOrder action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.DeletePurchaseOrderConditionKeys">DeletePurchaseOrderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeletePurchaseOrder action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ListPurchaseOrderInvoicesConditionKeys">ListPurchaseOrderInvoicesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListPurchaseOrderInvoices action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ModifyPurchaseOrdersConditionKeys">ModifyPurchaseOrdersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ModifyPurchaseOrders action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.UpdatePurchaseOrderConditionKeys">UpdatePurchaseOrderConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePurchaseOrder action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.UpdatePurchaseOrderStatusConditionKeys">UpdatePurchaseOrderStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdatePurchaseOrderStatus action. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ViewPurchaseOrdersConditionKeys">ViewPurchaseOrdersConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ViewPurchaseOrders action. |

---

##### `actionGetPurchaseOrderConditionKeys`<sup>Required</sup> <a name="actionGetPurchaseOrderConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.actionGetPurchaseOrderConditionKeys"></a>

```typescript
public readonly actionGetPurchaseOrderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetPurchaseOrder action.

---

##### `AddPurchaseOrderConditionKeys`<sup>Required</sup> <a name="AddPurchaseOrderConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AddPurchaseOrderConditionKeys"></a>

```typescript
public readonly AddPurchaseOrderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AddPurchaseOrder action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `DeletePurchaseOrderConditionKeys`<sup>Required</sup> <a name="DeletePurchaseOrderConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.DeletePurchaseOrderConditionKeys"></a>

```typescript
public readonly DeletePurchaseOrderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeletePurchaseOrder action.

---

##### `ListPurchaseOrderInvoicesConditionKeys`<sup>Required</sup> <a name="ListPurchaseOrderInvoicesConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ListPurchaseOrderInvoicesConditionKeys"></a>

```typescript
public readonly ListPurchaseOrderInvoicesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListPurchaseOrderInvoices action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `ModifyPurchaseOrdersConditionKeys`<sup>Required</sup> <a name="ModifyPurchaseOrdersConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ModifyPurchaseOrdersConditionKeys"></a>

```typescript
public readonly ModifyPurchaseOrdersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ModifyPurchaseOrders action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdatePurchaseOrderConditionKeys`<sup>Required</sup> <a name="UpdatePurchaseOrderConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.UpdatePurchaseOrderConditionKeys"></a>

```typescript
public readonly UpdatePurchaseOrderConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePurchaseOrder action.

---

##### `UpdatePurchaseOrderStatusConditionKeys`<sup>Required</sup> <a name="UpdatePurchaseOrderStatusConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.UpdatePurchaseOrderStatusConditionKeys"></a>

```typescript
public readonly UpdatePurchaseOrderStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdatePurchaseOrderStatus action.

---

##### `ViewPurchaseOrdersConditionKeys`<sup>Required</sup> <a name="ViewPurchaseOrdersConditionKeys" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersConditions.property.ViewPurchaseOrdersConditionKeys"></a>

```typescript
public readonly ViewPurchaseOrdersConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ViewPurchaseOrders action.

---

### PurchaseOrdersResources <a name="PurchaseOrdersResources" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources"></a>

ARN builders, validators, and parsers for purchase-orders resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.Initializer"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

new purchase_orders.PurchaseOrdersResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.isValidPurchaseOrderArn">isValidPurchaseOrderArn</a></code> | Validates whether a string is a valid ARN for the purchase-order resource. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.parsePurchaseOrderArn">parsePurchaseOrderArn</a></code> | Parses a purchase-order ARN into its components. |
| <code><a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.purchaseOrder">purchaseOrder</a></code> | Builds an ARN for the purchase-order resource. |

---

##### `isValidPurchaseOrderArn` <a name="isValidPurchaseOrderArn" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.isValidPurchaseOrderArn"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

purchase_orders.PurchaseOrdersResources.isValidPurchaseOrderArn(arn: string)
```

Validates whether a string is a valid ARN for the purchase-order resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.isValidPurchaseOrderArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePurchaseOrderArn` <a name="parsePurchaseOrderArn" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.parsePurchaseOrderArn"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

purchase_orders.PurchaseOrdersResources.parsePurchaseOrderArn(arn: string)
```

Parses a purchase-order ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.parsePurchaseOrderArn.parameter.arn"></a>

- *Type:* string

---

##### `purchaseOrder` <a name="purchaseOrder" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.purchaseOrder"></a>

```typescript
import { purchase_orders } from '@cdk_utils/iam'

purchase_orders.PurchaseOrdersResources.purchaseOrder(props: PurchaseOrdersPurchaseOrderArnProps)
```

Builds an ARN for the purchase-order resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.purchase_orders.PurchaseOrdersResources.purchaseOrder.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.purchase_orders.PurchaseOrdersPurchaseOrderArnProps">PurchaseOrdersPurchaseOrderArnProps</a>

---




