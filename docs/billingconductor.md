# `billingconductor` Submodule <a name="`billingconductor` Submodule" id="@cdk_utils/iam.billingconductor"></a>


## Structs <a name="Structs" id="Structs"></a>

### BillingconductorBillinggroupArnComponents <a name="BillingconductorBillinggroupArnComponents" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents"></a>

Parsed components of a billinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorBillinggroupArnComponents: billingconductor.BillingconductorBillinggroupArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.property.billingGroupId">billingGroupId</a></code> | <code>string</code> | The BillingGroupId component. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `billingGroupId`<sup>Required</sup> <a name="billingGroupId" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.property.billingGroupId"></a>

```typescript
public readonly billingGroupId: string;
```

- *Type:* string

The BillingGroupId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BillingconductorBillinggroupArnProps <a name="BillingconductorBillinggroupArnProps" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps"></a>

Properties for building a billinggroup ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorBillinggroupArnProps: billingconductor.BillingconductorBillinggroupArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.property.billingGroupId">billingGroupId</a></code> | <code>string</code> | The BillingGroupId component of the ARN. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `billingGroupId`<sup>Required</sup> <a name="billingGroupId" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.property.billingGroupId"></a>

```typescript
public readonly billingGroupId: string;
```

- *Type:* string

The BillingGroupId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BillingconductorCustomlineitemArnComponents <a name="BillingconductorCustomlineitemArnComponents" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents"></a>

Parsed components of a customlineitem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorCustomlineitemArnComponents: billingconductor.BillingconductorCustomlineitemArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.property.customLineItemId">customLineItemId</a></code> | <code>string</code> | The CustomLineItemId component. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `customLineItemId`<sup>Required</sup> <a name="customLineItemId" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.property.customLineItemId"></a>

```typescript
public readonly customLineItemId: string;
```

- *Type:* string

The CustomLineItemId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BillingconductorCustomlineitemArnProps <a name="BillingconductorCustomlineitemArnProps" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps"></a>

Properties for building a customlineitem ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorCustomlineitemArnProps: billingconductor.BillingconductorCustomlineitemArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.property.customLineItemId">customLineItemId</a></code> | <code>string</code> | The CustomLineItemId component of the ARN. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `customLineItemId`<sup>Required</sup> <a name="customLineItemId" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.property.customLineItemId"></a>

```typescript
public readonly customLineItemId: string;
```

- *Type:* string

The CustomLineItemId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BillingconductorPricingplanArnComponents <a name="BillingconductorPricingplanArnComponents" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents"></a>

Parsed components of a pricingplan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorPricingplanArnComponents: billingconductor.BillingconductorPricingplanArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.property.pricingPlanId">pricingPlanId</a></code> | <code>string</code> | The PricingPlanId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pricingPlanId`<sup>Required</sup> <a name="pricingPlanId" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnComponents.property.pricingPlanId"></a>

```typescript
public readonly pricingPlanId: string;
```

- *Type:* string

The PricingPlanId component.

---

### BillingconductorPricingplanArnProps <a name="BillingconductorPricingplanArnProps" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps"></a>

Properties for building a pricingplan ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorPricingplanArnProps: billingconductor.BillingconductorPricingplanArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.property.pricingPlanId">pricingPlanId</a></code> | <code>string</code> | The PricingPlanId component of the ARN. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `pricingPlanId`<sup>Required</sup> <a name="pricingPlanId" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.property.pricingPlanId"></a>

```typescript
public readonly pricingPlanId: string;
```

- *Type:* string

The PricingPlanId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BillingconductorPricingruleArnComponents <a name="BillingconductorPricingruleArnComponents" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents"></a>

Parsed components of a pricingrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorPricingruleArnComponents: billingconductor.BillingconductorPricingruleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.property.pricingRuleId">pricingRuleId</a></code> | <code>string</code> | The PricingRuleId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `pricingRuleId`<sup>Required</sup> <a name="pricingRuleId" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnComponents.property.pricingRuleId"></a>

```typescript
public readonly pricingRuleId: string;
```

- *Type:* string

The PricingRuleId component.

---

### BillingconductorPricingruleArnProps <a name="BillingconductorPricingruleArnProps" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps"></a>

Properties for building a pricingrule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

const billingconductorPricingruleArnProps: billingconductor.BillingconductorPricingruleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.property.pricingRuleId">pricingRuleId</a></code> | <code>string</code> | The PricingRuleId component of the ARN. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `pricingRuleId`<sup>Required</sup> <a name="pricingRuleId" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.property.pricingRuleId"></a>

```typescript
public readonly pricingRuleId: string;
```

- *Type:* string

The PricingRuleId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorActions <a name="BillingconductorActions" id="@cdk_utils/iam.billingconductor.BillingconductorActions"></a>

IAM action constants for the billingconductor service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billingconductor.BillingconductorActions.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

new billingconductor.BillingconductorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.actionGetBillingGroupCostReport">actionGetBillingGroupCostReport</a></code> | <code>string</code> | [Read] billingconductor:GetBillingGroupCostReport. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AssociateAccounts">AssociateAccounts</a></code> | <code>string</code> | [Write] billingconductor:AssociateAccounts. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.AssociatePricingRules">AssociatePricingRules</a></code> | <code>string</code> | [Write] billingconductor:AssociatePricingRules. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.BatchAssociateResourcesToCustomLineItem">BatchAssociateResourcesToCustomLineItem</a></code> | <code>string</code> | [Write] billingconductor:BatchAssociateResourcesToCustomLineItem. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.BatchDisassociateResourcesFromCustomLineItem">BatchDisassociateResourcesFromCustomLineItem</a></code> | <code>string</code> | [Write] billingconductor:BatchDisassociateResourcesFromCustomLineItem. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreateBillingGroup">CreateBillingGroup</a></code> | <code>string</code> | [Write] billingconductor:CreateBillingGroup. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreateCustomLineItem">CreateCustomLineItem</a></code> | <code>string</code> | [Write] billingconductor:CreateCustomLineItem. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreatePricingPlan">CreatePricingPlan</a></code> | <code>string</code> | [Write] billingconductor:CreatePricingPlan. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreatePricingRule">CreatePricingRule</a></code> | <code>string</code> | [Write] billingconductor:CreatePricingRule. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeleteBillingGroup">DeleteBillingGroup</a></code> | <code>string</code> | [Write] billingconductor:DeleteBillingGroup. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeleteCustomLineItem">DeleteCustomLineItem</a></code> | <code>string</code> | [Write] billingconductor:DeleteCustomLineItem. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeletePricingPlan">DeletePricingPlan</a></code> | <code>string</code> | [Write] billingconductor:DeletePricingPlan. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeletePricingRule">DeletePricingRule</a></code> | <code>string</code> | [Write] billingconductor:DeletePricingRule. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.DisassociateAccounts">DisassociateAccounts</a></code> | <code>string</code> | [Write] billingconductor:DisassociateAccounts. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.DisassociatePricingRules">DisassociatePricingRules</a></code> | <code>string</code> | [Write] billingconductor:DisassociatePricingRules. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListAccountAssociations">ListAccountAssociations</a></code> | <code>string</code> | [List] billingconductor:ListAccountAssociations. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListBillingGroupCostReports">ListBillingGroupCostReports</a></code> | <code>string</code> | [Read] billingconductor:ListBillingGroupCostReports. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListBillingGroups">ListBillingGroups</a></code> | <code>string</code> | [Read] billingconductor:ListBillingGroups. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListCustomLineItems">ListCustomLineItems</a></code> | <code>string</code> | [Read] billingconductor:ListCustomLineItems. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListCustomLineItemVersions">ListCustomLineItemVersions</a></code> | <code>string</code> | [Read] billingconductor:ListCustomLineItemVersions. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingPlans">ListPricingPlans</a></code> | <code>string</code> | [Read] billingconductor:ListPricingPlans. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingPlansAssociatedWithPricingRule">ListPricingPlansAssociatedWithPricingRule</a></code> | <code>string</code> | [List] billingconductor:ListPricingPlansAssociatedWithPricingRule. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingRules">ListPricingRules</a></code> | <code>string</code> | [Read] billingconductor:ListPricingRules. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingRulesAssociatedToPricingPlan">ListPricingRulesAssociatedToPricingPlan</a></code> | <code>string</code> | [List] billingconductor:ListPricingRulesAssociatedToPricingPlan. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListResourcesAssociatedToCustomLineItem">ListResourcesAssociatedToCustomLineItem</a></code> | <code>string</code> | [List] billingconductor:ListResourcesAssociatedToCustomLineItem. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] billingconductor:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] billingconductor:TagResource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] billingconductor:UntagResource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdateBillingGroup">UpdateBillingGroup</a></code> | <code>string</code> | [Write] billingconductor:UpdateBillingGroup. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdateCustomLineItem">UpdateCustomLineItem</a></code> | <code>string</code> | [Write] billingconductor:UpdateCustomLineItem. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdatePricingPlan">UpdatePricingPlan</a></code> | <code>string</code> | [Write] billingconductor:UpdatePricingPlan. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdatePricingRule">UpdatePricingRule</a></code> | <code>string</code> | [Write] billingconductor:UpdatePricingRule. |

---

##### `actionGetBillingGroupCostReport`<sup>Required</sup> <a name="actionGetBillingGroupCostReport" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.actionGetBillingGroupCostReport"></a>

```typescript
public readonly actionGetBillingGroupCostReport: string;
```

- *Type:* string

[Read] billingconductor:GetBillingGroupCostReport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateAccounts`<sup>Required</sup> <a name="AssociateAccounts" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AssociateAccounts"></a>

```typescript
public readonly AssociateAccounts: string;
```

- *Type:* string

[Write] billingconductor:AssociateAccounts.

---

##### `AssociatePricingRules`<sup>Required</sup> <a name="AssociatePricingRules" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.AssociatePricingRules"></a>

```typescript
public readonly AssociatePricingRules: string;
```

- *Type:* string

[Write] billingconductor:AssociatePricingRules.

---

##### `BatchAssociateResourcesToCustomLineItem`<sup>Required</sup> <a name="BatchAssociateResourcesToCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.BatchAssociateResourcesToCustomLineItem"></a>

```typescript
public readonly BatchAssociateResourcesToCustomLineItem: string;
```

- *Type:* string

[Write] billingconductor:BatchAssociateResourcesToCustomLineItem.

---

##### `BatchDisassociateResourcesFromCustomLineItem`<sup>Required</sup> <a name="BatchDisassociateResourcesFromCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.BatchDisassociateResourcesFromCustomLineItem"></a>

```typescript
public readonly BatchDisassociateResourcesFromCustomLineItem: string;
```

- *Type:* string

[Write] billingconductor:BatchDisassociateResourcesFromCustomLineItem.

---

##### `CreateBillingGroup`<sup>Required</sup> <a name="CreateBillingGroup" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreateBillingGroup"></a>

```typescript
public readonly CreateBillingGroup: string;
```

- *Type:* string

[Write] billingconductor:CreateBillingGroup.

---

##### `CreateCustomLineItem`<sup>Required</sup> <a name="CreateCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreateCustomLineItem"></a>

```typescript
public readonly CreateCustomLineItem: string;
```

- *Type:* string

[Write] billingconductor:CreateCustomLineItem.

---

##### `CreatePricingPlan`<sup>Required</sup> <a name="CreatePricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreatePricingPlan"></a>

```typescript
public readonly CreatePricingPlan: string;
```

- *Type:* string

[Write] billingconductor:CreatePricingPlan.

---

##### `CreatePricingRule`<sup>Required</sup> <a name="CreatePricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.CreatePricingRule"></a>

```typescript
public readonly CreatePricingRule: string;
```

- *Type:* string

[Write] billingconductor:CreatePricingRule.

---

##### `DeleteBillingGroup`<sup>Required</sup> <a name="DeleteBillingGroup" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeleteBillingGroup"></a>

```typescript
public readonly DeleteBillingGroup: string;
```

- *Type:* string

[Write] billingconductor:DeleteBillingGroup.

---

##### `DeleteCustomLineItem`<sup>Required</sup> <a name="DeleteCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeleteCustomLineItem"></a>

```typescript
public readonly DeleteCustomLineItem: string;
```

- *Type:* string

[Write] billingconductor:DeleteCustomLineItem.

---

##### `DeletePricingPlan`<sup>Required</sup> <a name="DeletePricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeletePricingPlan"></a>

```typescript
public readonly DeletePricingPlan: string;
```

- *Type:* string

[Write] billingconductor:DeletePricingPlan.

---

##### `DeletePricingRule`<sup>Required</sup> <a name="DeletePricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.DeletePricingRule"></a>

```typescript
public readonly DeletePricingRule: string;
```

- *Type:* string

[Write] billingconductor:DeletePricingRule.

---

##### `DisassociateAccounts`<sup>Required</sup> <a name="DisassociateAccounts" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.DisassociateAccounts"></a>

```typescript
public readonly DisassociateAccounts: string;
```

- *Type:* string

[Write] billingconductor:DisassociateAccounts.

---

##### `DisassociatePricingRules`<sup>Required</sup> <a name="DisassociatePricingRules" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.DisassociatePricingRules"></a>

```typescript
public readonly DisassociatePricingRules: string;
```

- *Type:* string

[Write] billingconductor:DisassociatePricingRules.

---

##### `ListAccountAssociations`<sup>Required</sup> <a name="ListAccountAssociations" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListAccountAssociations"></a>

```typescript
public readonly ListAccountAssociations: string;
```

- *Type:* string

[List] billingconductor:ListAccountAssociations.

---

##### `ListBillingGroupCostReports`<sup>Required</sup> <a name="ListBillingGroupCostReports" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListBillingGroupCostReports"></a>

```typescript
public readonly ListBillingGroupCostReports: string;
```

- *Type:* string

[Read] billingconductor:ListBillingGroupCostReports.

---

##### `ListBillingGroups`<sup>Required</sup> <a name="ListBillingGroups" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListBillingGroups"></a>

```typescript
public readonly ListBillingGroups: string;
```

- *Type:* string

[Read] billingconductor:ListBillingGroups.

---

##### `ListCustomLineItems`<sup>Required</sup> <a name="ListCustomLineItems" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListCustomLineItems"></a>

```typescript
public readonly ListCustomLineItems: string;
```

- *Type:* string

[Read] billingconductor:ListCustomLineItems.

---

##### `ListCustomLineItemVersions`<sup>Required</sup> <a name="ListCustomLineItemVersions" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListCustomLineItemVersions"></a>

```typescript
public readonly ListCustomLineItemVersions: string;
```

- *Type:* string

[Read] billingconductor:ListCustomLineItemVersions.

---

##### `ListPricingPlans`<sup>Required</sup> <a name="ListPricingPlans" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingPlans"></a>

```typescript
public readonly ListPricingPlans: string;
```

- *Type:* string

[Read] billingconductor:ListPricingPlans.

---

##### `ListPricingPlansAssociatedWithPricingRule`<sup>Required</sup> <a name="ListPricingPlansAssociatedWithPricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingPlansAssociatedWithPricingRule"></a>

```typescript
public readonly ListPricingPlansAssociatedWithPricingRule: string;
```

- *Type:* string

[List] billingconductor:ListPricingPlansAssociatedWithPricingRule.

---

##### `ListPricingRules`<sup>Required</sup> <a name="ListPricingRules" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingRules"></a>

```typescript
public readonly ListPricingRules: string;
```

- *Type:* string

[Read] billingconductor:ListPricingRules.

---

##### `ListPricingRulesAssociatedToPricingPlan`<sup>Required</sup> <a name="ListPricingRulesAssociatedToPricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListPricingRulesAssociatedToPricingPlan"></a>

```typescript
public readonly ListPricingRulesAssociatedToPricingPlan: string;
```

- *Type:* string

[List] billingconductor:ListPricingRulesAssociatedToPricingPlan.

---

##### `ListResourcesAssociatedToCustomLineItem`<sup>Required</sup> <a name="ListResourcesAssociatedToCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListResourcesAssociatedToCustomLineItem"></a>

```typescript
public readonly ListResourcesAssociatedToCustomLineItem: string;
```

- *Type:* string

[List] billingconductor:ListResourcesAssociatedToCustomLineItem.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] billingconductor:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] billingconductor:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] billingconductor:UntagResource.

---

##### `UpdateBillingGroup`<sup>Required</sup> <a name="UpdateBillingGroup" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdateBillingGroup"></a>

```typescript
public readonly UpdateBillingGroup: string;
```

- *Type:* string

[Write] billingconductor:UpdateBillingGroup.

---

##### `UpdateCustomLineItem`<sup>Required</sup> <a name="UpdateCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdateCustomLineItem"></a>

```typescript
public readonly UpdateCustomLineItem: string;
```

- *Type:* string

[Write] billingconductor:UpdateCustomLineItem.

---

##### `UpdatePricingPlan`<sup>Required</sup> <a name="UpdatePricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdatePricingPlan"></a>

```typescript
public readonly UpdatePricingPlan: string;
```

- *Type:* string

[Write] billingconductor:UpdatePricingPlan.

---

##### `UpdatePricingRule`<sup>Required</sup> <a name="UpdatePricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorActions.property.UpdatePricingRule"></a>

```typescript
public readonly UpdatePricingRule: string;
```

- *Type:* string

[Write] billingconductor:UpdatePricingRule.

---

### BillingconductorConditions <a name="BillingconductorConditions" id="@cdk_utils/iam.billingconductor.BillingconductorConditions"></a>

Condition key constants and builders for billingconductor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

new billingconductor.BillingconductorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.requestTag"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.resourceTag"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.tagKeys"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreateBillingGroupConditionKeys">CreateBillingGroupConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBillingGroup action. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreateCustomLineItemConditionKeys">CreateCustomLineItemConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomLineItem action. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreatePricingPlanConditionKeys">CreatePricingPlanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePricingPlan action. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreatePricingRuleConditionKeys">CreatePricingRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePricingRule action. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBillingGroupConditionKeys`<sup>Required</sup> <a name="CreateBillingGroupConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreateBillingGroupConditionKeys"></a>

```typescript
public readonly CreateBillingGroupConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBillingGroup action.

---

##### `CreateCustomLineItemConditionKeys`<sup>Required</sup> <a name="CreateCustomLineItemConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreateCustomLineItemConditionKeys"></a>

```typescript
public readonly CreateCustomLineItemConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomLineItem action.

---

##### `CreatePricingPlanConditionKeys`<sup>Required</sup> <a name="CreatePricingPlanConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreatePricingPlanConditionKeys"></a>

```typescript
public readonly CreatePricingPlanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePricingPlan action.

---

##### `CreatePricingRuleConditionKeys`<sup>Required</sup> <a name="CreatePricingRuleConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.CreatePricingRuleConditionKeys"></a>

```typescript
public readonly CreatePricingRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePricingRule action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.billingconductor.BillingconductorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BillingconductorOperations <a name="BillingconductorOperations" id="@cdk_utils/iam.billingconductor.BillingconductorOperations"></a>

API operation to required IAM actions mapping for billingconductor.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

new billingconductor.BillingconductorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.AssociateAccounts">AssociateAccounts</a></code> | <code>string[]</code> | IAM actions required for the AssociateAccounts API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.AssociatePricingRules">AssociatePricingRules</a></code> | <code>string[]</code> | IAM actions required for the AssociatePricingRules API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.BatchAssociateResourcesToCustomLineItem">BatchAssociateResourcesToCustomLineItem</a></code> | <code>string[]</code> | IAM actions required for the BatchAssociateResourcesToCustomLineItem API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.BatchDisassociateResourcesFromCustomLineItem">BatchDisassociateResourcesFromCustomLineItem</a></code> | <code>string[]</code> | IAM actions required for the BatchDisassociateResourcesFromCustomLineItem API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreateBillingGroup">CreateBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreateCustomLineItem">CreateCustomLineItem</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomLineItem API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreatePricingPlan">CreatePricingPlan</a></code> | <code>string[]</code> | IAM actions required for the CreatePricingPlan API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreatePricingRule">CreatePricingRule</a></code> | <code>string[]</code> | IAM actions required for the CreatePricingRule API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeleteBillingGroup">DeleteBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeleteCustomLineItem">DeleteCustomLineItem</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomLineItem API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeletePricingPlan">DeletePricingPlan</a></code> | <code>string[]</code> | IAM actions required for the DeletePricingPlan API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeletePricingRule">DeletePricingRule</a></code> | <code>string[]</code> | IAM actions required for the DeletePricingRule API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DisassociateAccounts">DisassociateAccounts</a></code> | <code>string[]</code> | IAM actions required for the DisassociateAccounts API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DisassociatePricingRules">DisassociatePricingRules</a></code> | <code>string[]</code> | IAM actions required for the DisassociatePricingRules API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListAccountAssociations">ListAccountAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAccountAssociations API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListBillingGroupCostReports">ListBillingGroupCostReports</a></code> | <code>string[]</code> | IAM actions required for the ListBillingGroupCostReports API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListBillingGroups">ListBillingGroups</a></code> | <code>string[]</code> | IAM actions required for the ListBillingGroups API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListCustomLineItems">ListCustomLineItems</a></code> | <code>string[]</code> | IAM actions required for the ListCustomLineItems API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListCustomLineItemVersions">ListCustomLineItemVersions</a></code> | <code>string[]</code> | IAM actions required for the ListCustomLineItemVersions API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingPlans">ListPricingPlans</a></code> | <code>string[]</code> | IAM actions required for the ListPricingPlans API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingPlansAssociatedWithPricingRule">ListPricingPlansAssociatedWithPricingRule</a></code> | <code>string[]</code> | IAM actions required for the ListPricingPlansAssociatedWithPricingRule API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingRules">ListPricingRules</a></code> | <code>string[]</code> | IAM actions required for the ListPricingRules API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingRulesAssociatedToPricingPlan">ListPricingRulesAssociatedToPricingPlan</a></code> | <code>string[]</code> | IAM actions required for the ListPricingRulesAssociatedToPricingPlan API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListResourcesAssociatedToCustomLineItem">ListResourcesAssociatedToCustomLineItem</a></code> | <code>string[]</code> | IAM actions required for the ListResourcesAssociatedToCustomLineItem API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.opGetBillingGroupCostReport">opGetBillingGroupCostReport</a></code> | <code>string[]</code> | IAM actions required for the GetBillingGroupCostReport API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdateBillingGroup">UpdateBillingGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateBillingGroup API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdateCustomLineItem">UpdateCustomLineItem</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomLineItem API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdatePricingPlan">UpdatePricingPlan</a></code> | <code>string[]</code> | IAM actions required for the UpdatePricingPlan API call. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdatePricingRule">UpdatePricingRule</a></code> | <code>string[]</code> | IAM actions required for the UpdatePricingRule API call. |

---

##### `AssociateAccounts`<sup>Required</sup> <a name="AssociateAccounts" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.AssociateAccounts"></a>

```typescript
public readonly AssociateAccounts: string[];
```

- *Type:* string[]

IAM actions required for the AssociateAccounts API call.

---

##### `AssociatePricingRules`<sup>Required</sup> <a name="AssociatePricingRules" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.AssociatePricingRules"></a>

```typescript
public readonly AssociatePricingRules: string[];
```

- *Type:* string[]

IAM actions required for the AssociatePricingRules API call.

---

##### `BatchAssociateResourcesToCustomLineItem`<sup>Required</sup> <a name="BatchAssociateResourcesToCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.BatchAssociateResourcesToCustomLineItem"></a>

```typescript
public readonly BatchAssociateResourcesToCustomLineItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchAssociateResourcesToCustomLineItem API call.

---

##### `BatchDisassociateResourcesFromCustomLineItem`<sup>Required</sup> <a name="BatchDisassociateResourcesFromCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.BatchDisassociateResourcesFromCustomLineItem"></a>

```typescript
public readonly BatchDisassociateResourcesFromCustomLineItem: string[];
```

- *Type:* string[]

IAM actions required for the BatchDisassociateResourcesFromCustomLineItem API call.

---

##### `CreateBillingGroup`<sup>Required</sup> <a name="CreateBillingGroup" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreateBillingGroup"></a>

```typescript
public readonly CreateBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateBillingGroup API call.

---

##### `CreateCustomLineItem`<sup>Required</sup> <a name="CreateCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreateCustomLineItem"></a>

```typescript
public readonly CreateCustomLineItem: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomLineItem API call.

---

##### `CreatePricingPlan`<sup>Required</sup> <a name="CreatePricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreatePricingPlan"></a>

```typescript
public readonly CreatePricingPlan: string[];
```

- *Type:* string[]

IAM actions required for the CreatePricingPlan API call.

---

##### `CreatePricingRule`<sup>Required</sup> <a name="CreatePricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.CreatePricingRule"></a>

```typescript
public readonly CreatePricingRule: string[];
```

- *Type:* string[]

IAM actions required for the CreatePricingRule API call.

---

##### `DeleteBillingGroup`<sup>Required</sup> <a name="DeleteBillingGroup" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeleteBillingGroup"></a>

```typescript
public readonly DeleteBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBillingGroup API call.

---

##### `DeleteCustomLineItem`<sup>Required</sup> <a name="DeleteCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeleteCustomLineItem"></a>

```typescript
public readonly DeleteCustomLineItem: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomLineItem API call.

---

##### `DeletePricingPlan`<sup>Required</sup> <a name="DeletePricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeletePricingPlan"></a>

```typescript
public readonly DeletePricingPlan: string[];
```

- *Type:* string[]

IAM actions required for the DeletePricingPlan API call.

---

##### `DeletePricingRule`<sup>Required</sup> <a name="DeletePricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DeletePricingRule"></a>

```typescript
public readonly DeletePricingRule: string[];
```

- *Type:* string[]

IAM actions required for the DeletePricingRule API call.

---

##### `DisassociateAccounts`<sup>Required</sup> <a name="DisassociateAccounts" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DisassociateAccounts"></a>

```typescript
public readonly DisassociateAccounts: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateAccounts API call.

---

##### `DisassociatePricingRules`<sup>Required</sup> <a name="DisassociatePricingRules" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.DisassociatePricingRules"></a>

```typescript
public readonly DisassociatePricingRules: string[];
```

- *Type:* string[]

IAM actions required for the DisassociatePricingRules API call.

---

##### `ListAccountAssociations`<sup>Required</sup> <a name="ListAccountAssociations" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListAccountAssociations"></a>

```typescript
public readonly ListAccountAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAccountAssociations API call.

---

##### `ListBillingGroupCostReports`<sup>Required</sup> <a name="ListBillingGroupCostReports" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListBillingGroupCostReports"></a>

```typescript
public readonly ListBillingGroupCostReports: string[];
```

- *Type:* string[]

IAM actions required for the ListBillingGroupCostReports API call.

---

##### `ListBillingGroups`<sup>Required</sup> <a name="ListBillingGroups" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListBillingGroups"></a>

```typescript
public readonly ListBillingGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListBillingGroups API call.

---

##### `ListCustomLineItems`<sup>Required</sup> <a name="ListCustomLineItems" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListCustomLineItems"></a>

```typescript
public readonly ListCustomLineItems: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomLineItems API call.

---

##### `ListCustomLineItemVersions`<sup>Required</sup> <a name="ListCustomLineItemVersions" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListCustomLineItemVersions"></a>

```typescript
public readonly ListCustomLineItemVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomLineItemVersions API call.

---

##### `ListPricingPlans`<sup>Required</sup> <a name="ListPricingPlans" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingPlans"></a>

```typescript
public readonly ListPricingPlans: string[];
```

- *Type:* string[]

IAM actions required for the ListPricingPlans API call.

---

##### `ListPricingPlansAssociatedWithPricingRule`<sup>Required</sup> <a name="ListPricingPlansAssociatedWithPricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingPlansAssociatedWithPricingRule"></a>

```typescript
public readonly ListPricingPlansAssociatedWithPricingRule: string[];
```

- *Type:* string[]

IAM actions required for the ListPricingPlansAssociatedWithPricingRule API call.

---

##### `ListPricingRules`<sup>Required</sup> <a name="ListPricingRules" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingRules"></a>

```typescript
public readonly ListPricingRules: string[];
```

- *Type:* string[]

IAM actions required for the ListPricingRules API call.

---

##### `ListPricingRulesAssociatedToPricingPlan`<sup>Required</sup> <a name="ListPricingRulesAssociatedToPricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListPricingRulesAssociatedToPricingPlan"></a>

```typescript
public readonly ListPricingRulesAssociatedToPricingPlan: string[];
```

- *Type:* string[]

IAM actions required for the ListPricingRulesAssociatedToPricingPlan API call.

---

##### `ListResourcesAssociatedToCustomLineItem`<sup>Required</sup> <a name="ListResourcesAssociatedToCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListResourcesAssociatedToCustomLineItem"></a>

```typescript
public readonly ListResourcesAssociatedToCustomLineItem: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcesAssociatedToCustomLineItem API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetBillingGroupCostReport`<sup>Required</sup> <a name="opGetBillingGroupCostReport" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.opGetBillingGroupCostReport"></a>

```typescript
public readonly opGetBillingGroupCostReport: string[];
```

- *Type:* string[]

IAM actions required for the GetBillingGroupCostReport API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBillingGroup`<sup>Required</sup> <a name="UpdateBillingGroup" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdateBillingGroup"></a>

```typescript
public readonly UpdateBillingGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBillingGroup API call.

---

##### `UpdateCustomLineItem`<sup>Required</sup> <a name="UpdateCustomLineItem" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdateCustomLineItem"></a>

```typescript
public readonly UpdateCustomLineItem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomLineItem API call.

---

##### `UpdatePricingPlan`<sup>Required</sup> <a name="UpdatePricingPlan" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdatePricingPlan"></a>

```typescript
public readonly UpdatePricingPlan: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePricingPlan API call.

---

##### `UpdatePricingRule`<sup>Required</sup> <a name="UpdatePricingRule" id="@cdk_utils/iam.billingconductor.BillingconductorOperations.property.UpdatePricingRule"></a>

```typescript
public readonly UpdatePricingRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePricingRule API call.

---

### BillingconductorResources <a name="BillingconductorResources" id="@cdk_utils/iam.billingconductor.BillingconductorResources"></a>

ARN builders, validators, and parsers for billingconductor resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.billingconductor.BillingconductorResources.Initializer"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

new billingconductor.BillingconductorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.billinggroup">billinggroup</a></code> | Builds an ARN for the billinggroup resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.customlineitem">customlineitem</a></code> | Builds an ARN for the customlineitem resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.isValidBillinggroupArn">isValidBillinggroupArn</a></code> | Validates whether a string is a valid ARN for the billinggroup resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.isValidCustomlineitemArn">isValidCustomlineitemArn</a></code> | Validates whether a string is a valid ARN for the customlineitem resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.isValidPricingplanArn">isValidPricingplanArn</a></code> | Validates whether a string is a valid ARN for the pricingplan resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.isValidPricingruleArn">isValidPricingruleArn</a></code> | Validates whether a string is a valid ARN for the pricingrule resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.parseBillinggroupArn">parseBillinggroupArn</a></code> | Parses a billinggroup ARN into its components. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.parseCustomlineitemArn">parseCustomlineitemArn</a></code> | Parses a customlineitem ARN into its components. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.parsePricingplanArn">parsePricingplanArn</a></code> | Parses a pricingplan ARN into its components. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.parsePricingruleArn">parsePricingruleArn</a></code> | Parses a pricingrule ARN into its components. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.pricingplan">pricingplan</a></code> | Builds an ARN for the pricingplan resource. |
| <code><a href="#@cdk_utils/iam.billingconductor.BillingconductorResources.pricingrule">pricingrule</a></code> | Builds an ARN for the pricingrule resource. |

---

##### `billinggroup` <a name="billinggroup" id="@cdk_utils/iam.billingconductor.BillingconductorResources.billinggroup"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.billinggroup(props: BillingconductorBillinggroupArnProps)
```

Builds an ARN for the billinggroup resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.billingconductor.BillingconductorResources.billinggroup.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.billingconductor.BillingconductorBillinggroupArnProps">BillingconductorBillinggroupArnProps</a>

---

##### `customlineitem` <a name="customlineitem" id="@cdk_utils/iam.billingconductor.BillingconductorResources.customlineitem"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.customlineitem(props: BillingconductorCustomlineitemArnProps)
```

Builds an ARN for the customlineitem resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.billingconductor.BillingconductorResources.customlineitem.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.billingconductor.BillingconductorCustomlineitemArnProps">BillingconductorCustomlineitemArnProps</a>

---

##### `isValidBillinggroupArn` <a name="isValidBillinggroupArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidBillinggroupArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.isValidBillinggroupArn(arn: string)
```

Validates whether a string is a valid ARN for the billinggroup resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidBillinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomlineitemArn` <a name="isValidCustomlineitemArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidCustomlineitemArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.isValidCustomlineitemArn(arn: string)
```

Validates whether a string is a valid ARN for the customlineitem resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidCustomlineitemArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPricingplanArn` <a name="isValidPricingplanArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidPricingplanArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.isValidPricingplanArn(arn: string)
```

Validates whether a string is a valid ARN for the pricingplan resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidPricingplanArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPricingruleArn` <a name="isValidPricingruleArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidPricingruleArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.isValidPricingruleArn(arn: string)
```

Validates whether a string is a valid ARN for the pricingrule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.isValidPricingruleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillinggroupArn` <a name="parseBillinggroupArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parseBillinggroupArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.parseBillinggroupArn(arn: string)
```

Parses a billinggroup ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parseBillinggroupArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomlineitemArn` <a name="parseCustomlineitemArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parseCustomlineitemArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.parseCustomlineitemArn(arn: string)
```

Parses a customlineitem ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parseCustomlineitemArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePricingplanArn` <a name="parsePricingplanArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parsePricingplanArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.parsePricingplanArn(arn: string)
```

Parses a pricingplan ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parsePricingplanArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePricingruleArn` <a name="parsePricingruleArn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parsePricingruleArn"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.parsePricingruleArn(arn: string)
```

Parses a pricingrule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.billingconductor.BillingconductorResources.parsePricingruleArn.parameter.arn"></a>

- *Type:* string

---

##### `pricingplan` <a name="pricingplan" id="@cdk_utils/iam.billingconductor.BillingconductorResources.pricingplan"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.pricingplan(props: BillingconductorPricingplanArnProps)
```

Builds an ARN for the pricingplan resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.billingconductor.BillingconductorResources.pricingplan.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingplanArnProps">BillingconductorPricingplanArnProps</a>

---

##### `pricingrule` <a name="pricingrule" id="@cdk_utils/iam.billingconductor.BillingconductorResources.pricingrule"></a>

```typescript
import { billingconductor } from '@cdk_utils/iam'

billingconductor.BillingconductorResources.pricingrule(props: BillingconductorPricingruleArnProps)
```

Builds an ARN for the pricingrule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.billingconductor.BillingconductorResources.pricingrule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.billingconductor.BillingconductorPricingruleArnProps">BillingconductorPricingruleArnProps</a>

---




