# `bcm_pricing_calculator` Submodule <a name="`bcm_pricing_calculator` Submodule" id="@cdk_utils/iam.bcm_pricing_calculator"></a>


## Structs <a name="Structs" id="Structs"></a>

### BcmPricingCalculatorBillEstimateArnComponents <a name="BcmPricingCalculatorBillEstimateArnComponents" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents"></a>

Parsed components of a bill-estimate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

const bcmPricingCalculatorBillEstimateArnComponents: bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.property.billEstimateId">billEstimateId</a></code> | <code>string</code> | The BillEstimateId component. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `billEstimateId`<sup>Required</sup> <a name="billEstimateId" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.property.billEstimateId"></a>

```typescript
public readonly billEstimateId: string;
```

- *Type:* string

The BillEstimateId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BcmPricingCalculatorBillEstimateArnProps <a name="BcmPricingCalculatorBillEstimateArnProps" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps"></a>

Properties for building a bill-estimate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

const bcmPricingCalculatorBillEstimateArnProps: bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.property.billEstimateId">billEstimateId</a></code> | <code>string</code> | The BillEstimateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `billEstimateId`<sup>Required</sup> <a name="billEstimateId" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.property.billEstimateId"></a>

```typescript
public readonly billEstimateId: string;
```

- *Type:* string

The BillEstimateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BcmPricingCalculatorBillScenarioArnComponents <a name="BcmPricingCalculatorBillScenarioArnComponents" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents"></a>

Parsed components of a bill-scenario ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

const bcmPricingCalculatorBillScenarioArnComponents: bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.property.billScenarioId">billScenarioId</a></code> | <code>string</code> | The BillScenarioId component. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `billScenarioId`<sup>Required</sup> <a name="billScenarioId" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.property.billScenarioId"></a>

```typescript
public readonly billScenarioId: string;
```

- *Type:* string

The BillScenarioId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### BcmPricingCalculatorBillScenarioArnProps <a name="BcmPricingCalculatorBillScenarioArnProps" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps"></a>

Properties for building a bill-scenario ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

const bcmPricingCalculatorBillScenarioArnProps: bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.property.billScenarioId">billScenarioId</a></code> | <code>string</code> | The BillScenarioId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `billScenarioId`<sup>Required</sup> <a name="billScenarioId" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.property.billScenarioId"></a>

```typescript
public readonly billScenarioId: string;
```

- *Type:* string

The BillScenarioId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### BcmPricingCalculatorWorkloadEstimateArnComponents <a name="BcmPricingCalculatorWorkloadEstimateArnComponents" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents"></a>

Parsed components of a workload-estimate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

const bcmPricingCalculatorWorkloadEstimateArnComponents: bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.property.workloadEstimateId">workloadEstimateId</a></code> | <code>string</code> | The WorkloadEstimateId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `workloadEstimateId`<sup>Required</sup> <a name="workloadEstimateId" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnComponents.property.workloadEstimateId"></a>

```typescript
public readonly workloadEstimateId: string;
```

- *Type:* string

The WorkloadEstimateId component.

---

### BcmPricingCalculatorWorkloadEstimateArnProps <a name="BcmPricingCalculatorWorkloadEstimateArnProps" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps"></a>

Properties for building a workload-estimate ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

const bcmPricingCalculatorWorkloadEstimateArnProps: bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.property.workloadEstimateId">workloadEstimateId</a></code> | <code>string</code> | The WorkloadEstimateId component of the ARN. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `workloadEstimateId`<sup>Required</sup> <a name="workloadEstimateId" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.property.workloadEstimateId"></a>

```typescript
public readonly workloadEstimateId: string;
```

- *Type:* string

The WorkloadEstimateId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### BcmPricingCalculatorActions <a name="BcmPricingCalculatorActions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions"></a>

IAM action constants for the bcm-pricing-calculator service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

new bcm_pricing_calculator.BcmPricingCalculatorActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetBillEstimate">actionGetBillEstimate</a></code> | <code>string</code> | [Read] bcm-pricing-calculator:GetBillEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetBillScenario">actionGetBillScenario</a></code> | <code>string</code> | [Read] bcm-pricing-calculator:GetBillScenario. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetPreferences">actionGetPreferences</a></code> | <code>string</code> | [Read] bcm-pricing-calculator:GetPreferences. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetWorkloadEstimate">actionGetWorkloadEstimate</a></code> | <code>string</code> | [Read] bcm-pricing-calculator:GetWorkloadEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillEstimate">CreateBillEstimate</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:CreateBillEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillScenario">CreateBillScenario</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:CreateBillScenario. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillScenarioCommitmentModification">CreateBillScenarioCommitmentModification</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:CreateBillScenarioCommitmentModification. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillScenarioUsageModification">CreateBillScenarioUsageModification</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:CreateBillScenarioUsageModification. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateWorkloadEstimate">CreateWorkloadEstimate</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:CreateWorkloadEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateWorkloadEstimateUsage">CreateWorkloadEstimateUsage</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:CreateWorkloadEstimateUsage. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillEstimate">DeleteBillEstimate</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:DeleteBillEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillScenario">DeleteBillScenario</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:DeleteBillScenario. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillScenarioCommitmentModification">DeleteBillScenarioCommitmentModification</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:DeleteBillScenarioCommitmentModification. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillScenarioUsageModification">DeleteBillScenarioUsageModification</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:DeleteBillScenarioUsageModification. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteWorkloadEstimate">DeleteWorkloadEstimate</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:DeleteWorkloadEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteWorkloadEstimateUsage">DeleteWorkloadEstimateUsage</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:DeleteWorkloadEstimateUsage. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateCommitments">ListBillEstimateCommitments</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillEstimateCommitments. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateInputCommitmentModifications">ListBillEstimateInputCommitmentModifications</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillEstimateInputCommitmentModifications. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateInputUsageModifications">ListBillEstimateInputUsageModifications</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillEstimateInputUsageModifications. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateLineItems">ListBillEstimateLineItems</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillEstimateLineItems. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimates">ListBillEstimates</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillEstimates. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillScenarioCommitmentModifications">ListBillScenarioCommitmentModifications</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillScenarioCommitmentModifications. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillScenarios">ListBillScenarios</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillScenarios. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillScenarioUsageModifications">ListBillScenarioUsageModifications</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListBillScenarioUsageModifications. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Tagging] bcm-pricing-calculator:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListWorkloadEstimates">ListWorkloadEstimates</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListWorkloadEstimates. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListWorkloadEstimateUsage">ListWorkloadEstimateUsage</a></code> | <code>string</code> | [List] bcm-pricing-calculator:ListWorkloadEstimateUsage. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] bcm-pricing-calculator:TagResource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] bcm-pricing-calculator:UntagResource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillEstimate">UpdateBillEstimate</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdateBillEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillScenario">UpdateBillScenario</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdateBillScenario. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillScenarioCommitmentModification">UpdateBillScenarioCommitmentModification</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdateBillScenarioCommitmentModification. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillScenarioUsageModification">UpdateBillScenarioUsageModification</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdateBillScenarioUsageModification. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdatePreferences">UpdatePreferences</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdatePreferences. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateWorkloadEstimate">UpdateWorkloadEstimate</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdateWorkloadEstimate. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateWorkloadEstimateUsage">UpdateWorkloadEstimateUsage</a></code> | <code>string</code> | [Write] bcm-pricing-calculator:UpdateWorkloadEstimateUsage. |

---

##### `actionGetBillEstimate`<sup>Required</sup> <a name="actionGetBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetBillEstimate"></a>

```typescript
public readonly actionGetBillEstimate: string;
```

- *Type:* string

[Read] bcm-pricing-calculator:GetBillEstimate.

---

##### `actionGetBillScenario`<sup>Required</sup> <a name="actionGetBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetBillScenario"></a>

```typescript
public readonly actionGetBillScenario: string;
```

- *Type:* string

[Read] bcm-pricing-calculator:GetBillScenario.

---

##### `actionGetPreferences`<sup>Required</sup> <a name="actionGetPreferences" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetPreferences"></a>

```typescript
public readonly actionGetPreferences: string;
```

- *Type:* string

[Read] bcm-pricing-calculator:GetPreferences.

---

##### `actionGetWorkloadEstimate`<sup>Required</sup> <a name="actionGetWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.actionGetWorkloadEstimate"></a>

```typescript
public readonly actionGetWorkloadEstimate: string;
```

- *Type:* string

[Read] bcm-pricing-calculator:GetWorkloadEstimate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateBillEstimate`<sup>Required</sup> <a name="CreateBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillEstimate"></a>

```typescript
public readonly CreateBillEstimate: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:CreateBillEstimate.

---

##### `CreateBillScenario`<sup>Required</sup> <a name="CreateBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillScenario"></a>

```typescript
public readonly CreateBillScenario: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:CreateBillScenario.

---

##### `CreateBillScenarioCommitmentModification`<sup>Required</sup> <a name="CreateBillScenarioCommitmentModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillScenarioCommitmentModification"></a>

```typescript
public readonly CreateBillScenarioCommitmentModification: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:CreateBillScenarioCommitmentModification.

---

##### `CreateBillScenarioUsageModification`<sup>Required</sup> <a name="CreateBillScenarioUsageModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateBillScenarioUsageModification"></a>

```typescript
public readonly CreateBillScenarioUsageModification: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:CreateBillScenarioUsageModification.

---

##### `CreateWorkloadEstimate`<sup>Required</sup> <a name="CreateWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateWorkloadEstimate"></a>

```typescript
public readonly CreateWorkloadEstimate: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:CreateWorkloadEstimate.

---

##### `CreateWorkloadEstimateUsage`<sup>Required</sup> <a name="CreateWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.CreateWorkloadEstimateUsage"></a>

```typescript
public readonly CreateWorkloadEstimateUsage: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:CreateWorkloadEstimateUsage.

---

##### `DeleteBillEstimate`<sup>Required</sup> <a name="DeleteBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillEstimate"></a>

```typescript
public readonly DeleteBillEstimate: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:DeleteBillEstimate.

---

##### `DeleteBillScenario`<sup>Required</sup> <a name="DeleteBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillScenario"></a>

```typescript
public readonly DeleteBillScenario: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:DeleteBillScenario.

---

##### `DeleteBillScenarioCommitmentModification`<sup>Required</sup> <a name="DeleteBillScenarioCommitmentModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillScenarioCommitmentModification"></a>

```typescript
public readonly DeleteBillScenarioCommitmentModification: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:DeleteBillScenarioCommitmentModification.

---

##### `DeleteBillScenarioUsageModification`<sup>Required</sup> <a name="DeleteBillScenarioUsageModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteBillScenarioUsageModification"></a>

```typescript
public readonly DeleteBillScenarioUsageModification: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:DeleteBillScenarioUsageModification.

---

##### `DeleteWorkloadEstimate`<sup>Required</sup> <a name="DeleteWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteWorkloadEstimate"></a>

```typescript
public readonly DeleteWorkloadEstimate: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:DeleteWorkloadEstimate.

---

##### `DeleteWorkloadEstimateUsage`<sup>Required</sup> <a name="DeleteWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.DeleteWorkloadEstimateUsage"></a>

```typescript
public readonly DeleteWorkloadEstimateUsage: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:DeleteWorkloadEstimateUsage.

---

##### `ListBillEstimateCommitments`<sup>Required</sup> <a name="ListBillEstimateCommitments" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateCommitments"></a>

```typescript
public readonly ListBillEstimateCommitments: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillEstimateCommitments.

---

##### `ListBillEstimateInputCommitmentModifications`<sup>Required</sup> <a name="ListBillEstimateInputCommitmentModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateInputCommitmentModifications"></a>

```typescript
public readonly ListBillEstimateInputCommitmentModifications: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillEstimateInputCommitmentModifications.

---

##### `ListBillEstimateInputUsageModifications`<sup>Required</sup> <a name="ListBillEstimateInputUsageModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateInputUsageModifications"></a>

```typescript
public readonly ListBillEstimateInputUsageModifications: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillEstimateInputUsageModifications.

---

##### `ListBillEstimateLineItems`<sup>Required</sup> <a name="ListBillEstimateLineItems" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimateLineItems"></a>

```typescript
public readonly ListBillEstimateLineItems: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillEstimateLineItems.

---

##### `ListBillEstimates`<sup>Required</sup> <a name="ListBillEstimates" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillEstimates"></a>

```typescript
public readonly ListBillEstimates: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillEstimates.

---

##### `ListBillScenarioCommitmentModifications`<sup>Required</sup> <a name="ListBillScenarioCommitmentModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillScenarioCommitmentModifications"></a>

```typescript
public readonly ListBillScenarioCommitmentModifications: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillScenarioCommitmentModifications.

---

##### `ListBillScenarios`<sup>Required</sup> <a name="ListBillScenarios" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillScenarios"></a>

```typescript
public readonly ListBillScenarios: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillScenarios.

---

##### `ListBillScenarioUsageModifications`<sup>Required</sup> <a name="ListBillScenarioUsageModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListBillScenarioUsageModifications"></a>

```typescript
public readonly ListBillScenarioUsageModifications: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListBillScenarioUsageModifications.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Tagging] bcm-pricing-calculator:ListTagsForResource.

---

##### `ListWorkloadEstimates`<sup>Required</sup> <a name="ListWorkloadEstimates" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListWorkloadEstimates"></a>

```typescript
public readonly ListWorkloadEstimates: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListWorkloadEstimates.

---

##### `ListWorkloadEstimateUsage`<sup>Required</sup> <a name="ListWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.ListWorkloadEstimateUsage"></a>

```typescript
public readonly ListWorkloadEstimateUsage: string;
```

- *Type:* string

[List] bcm-pricing-calculator:ListWorkloadEstimateUsage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] bcm-pricing-calculator:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] bcm-pricing-calculator:UntagResource.

---

##### `UpdateBillEstimate`<sup>Required</sup> <a name="UpdateBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillEstimate"></a>

```typescript
public readonly UpdateBillEstimate: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdateBillEstimate.

---

##### `UpdateBillScenario`<sup>Required</sup> <a name="UpdateBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillScenario"></a>

```typescript
public readonly UpdateBillScenario: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdateBillScenario.

---

##### `UpdateBillScenarioCommitmentModification`<sup>Required</sup> <a name="UpdateBillScenarioCommitmentModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillScenarioCommitmentModification"></a>

```typescript
public readonly UpdateBillScenarioCommitmentModification: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdateBillScenarioCommitmentModification.

---

##### `UpdateBillScenarioUsageModification`<sup>Required</sup> <a name="UpdateBillScenarioUsageModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateBillScenarioUsageModification"></a>

```typescript
public readonly UpdateBillScenarioUsageModification: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdateBillScenarioUsageModification.

---

##### `UpdatePreferences`<sup>Required</sup> <a name="UpdatePreferences" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdatePreferences"></a>

```typescript
public readonly UpdatePreferences: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdatePreferences.

---

##### `UpdateWorkloadEstimate`<sup>Required</sup> <a name="UpdateWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateWorkloadEstimate"></a>

```typescript
public readonly UpdateWorkloadEstimate: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdateWorkloadEstimate.

---

##### `UpdateWorkloadEstimateUsage`<sup>Required</sup> <a name="UpdateWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorActions.property.UpdateWorkloadEstimateUsage"></a>

```typescript
public readonly UpdateWorkloadEstimateUsage: string;
```

- *Type:* string

[Write] bcm-pricing-calculator:UpdateWorkloadEstimateUsage.

---

### BcmPricingCalculatorConditions <a name="BcmPricingCalculatorConditions" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions"></a>

Condition key constants and builders for bcm-pricing-calculator.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

new bcm_pricing_calculator.BcmPricingCalculatorConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.requestTag"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.resourceTag"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.tagKeys"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.CreateBillScenarioConditionKeys">CreateBillScenarioConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBillScenario action. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.CreateWorkloadEstimateConditionKeys">CreateWorkloadEstimateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateWorkloadEstimate action. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBillScenarioConditionKeys`<sup>Required</sup> <a name="CreateBillScenarioConditionKeys" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.CreateBillScenarioConditionKeys"></a>

```typescript
public readonly CreateBillScenarioConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBillScenario action.

---

##### `CreateWorkloadEstimateConditionKeys`<sup>Required</sup> <a name="CreateWorkloadEstimateConditionKeys" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.CreateWorkloadEstimateConditionKeys"></a>

```typescript
public readonly CreateWorkloadEstimateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateWorkloadEstimate action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### BcmPricingCalculatorOperations <a name="BcmPricingCalculatorOperations" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations"></a>

API operation to required IAM actions mapping for bcm-pricing-calculator.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

new bcm_pricing_calculator.BcmPricingCalculatorOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchCreateBillScenarioCommitmentModification">BatchCreateBillScenarioCommitmentModification</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateBillScenarioCommitmentModification API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchCreateBillScenarioUsageModification">BatchCreateBillScenarioUsageModification</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateBillScenarioUsageModification API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchCreateWorkloadEstimateUsage">BatchCreateWorkloadEstimateUsage</a></code> | <code>string[]</code> | IAM actions required for the BatchCreateWorkloadEstimateUsage API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchDeleteBillScenarioCommitmentModification">BatchDeleteBillScenarioCommitmentModification</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteBillScenarioCommitmentModification API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchDeleteBillScenarioUsageModification">BatchDeleteBillScenarioUsageModification</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteBillScenarioUsageModification API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchDeleteWorkloadEstimateUsage">BatchDeleteWorkloadEstimateUsage</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteWorkloadEstimateUsage API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchUpdateBillScenarioCommitmentModification">BatchUpdateBillScenarioCommitmentModification</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateBillScenarioCommitmentModification API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchUpdateBillScenarioUsageModification">BatchUpdateBillScenarioUsageModification</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateBillScenarioUsageModification API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchUpdateWorkloadEstimateUsage">BatchUpdateWorkloadEstimateUsage</a></code> | <code>string[]</code> | IAM actions required for the BatchUpdateWorkloadEstimateUsage API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.CreateBillEstimate">CreateBillEstimate</a></code> | <code>string[]</code> | IAM actions required for the CreateBillEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.CreateBillScenario">CreateBillScenario</a></code> | <code>string[]</code> | IAM actions required for the CreateBillScenario API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.CreateWorkloadEstimate">CreateWorkloadEstimate</a></code> | <code>string[]</code> | IAM actions required for the CreateWorkloadEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.DeleteBillEstimate">DeleteBillEstimate</a></code> | <code>string[]</code> | IAM actions required for the DeleteBillEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.DeleteBillScenario">DeleteBillScenario</a></code> | <code>string[]</code> | IAM actions required for the DeleteBillScenario API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.DeleteWorkloadEstimate">DeleteWorkloadEstimate</a></code> | <code>string[]</code> | IAM actions required for the DeleteWorkloadEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateCommitments">ListBillEstimateCommitments</a></code> | <code>string[]</code> | IAM actions required for the ListBillEstimateCommitments API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateInputCommitmentModifications">ListBillEstimateInputCommitmentModifications</a></code> | <code>string[]</code> | IAM actions required for the ListBillEstimateInputCommitmentModifications API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateInputUsageModifications">ListBillEstimateInputUsageModifications</a></code> | <code>string[]</code> | IAM actions required for the ListBillEstimateInputUsageModifications API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateLineItems">ListBillEstimateLineItems</a></code> | <code>string[]</code> | IAM actions required for the ListBillEstimateLineItems API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimates">ListBillEstimates</a></code> | <code>string[]</code> | IAM actions required for the ListBillEstimates API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillScenarioCommitmentModifications">ListBillScenarioCommitmentModifications</a></code> | <code>string[]</code> | IAM actions required for the ListBillScenarioCommitmentModifications API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillScenarios">ListBillScenarios</a></code> | <code>string[]</code> | IAM actions required for the ListBillScenarios API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillScenarioUsageModifications">ListBillScenarioUsageModifications</a></code> | <code>string[]</code> | IAM actions required for the ListBillScenarioUsageModifications API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListWorkloadEstimates">ListWorkloadEstimates</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloadEstimates API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListWorkloadEstimateUsage">ListWorkloadEstimateUsage</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloadEstimateUsage API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetBillEstimate">opGetBillEstimate</a></code> | <code>string[]</code> | IAM actions required for the GetBillEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetBillScenario">opGetBillScenario</a></code> | <code>string[]</code> | IAM actions required for the GetBillScenario API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetPreferences">opGetPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetPreferences API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetWorkloadEstimate">opGetWorkloadEstimate</a></code> | <code>string[]</code> | IAM actions required for the GetWorkloadEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdateBillEstimate">UpdateBillEstimate</a></code> | <code>string[]</code> | IAM actions required for the UpdateBillEstimate API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdateBillScenario">UpdateBillScenario</a></code> | <code>string[]</code> | IAM actions required for the UpdateBillScenario API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdatePreferences">UpdatePreferences</a></code> | <code>string[]</code> | IAM actions required for the UpdatePreferences API call. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdateWorkloadEstimate">UpdateWorkloadEstimate</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkloadEstimate API call. |

---

##### `BatchCreateBillScenarioCommitmentModification`<sup>Required</sup> <a name="BatchCreateBillScenarioCommitmentModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchCreateBillScenarioCommitmentModification"></a>

```typescript
public readonly BatchCreateBillScenarioCommitmentModification: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateBillScenarioCommitmentModification API call.

---

##### `BatchCreateBillScenarioUsageModification`<sup>Required</sup> <a name="BatchCreateBillScenarioUsageModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchCreateBillScenarioUsageModification"></a>

```typescript
public readonly BatchCreateBillScenarioUsageModification: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateBillScenarioUsageModification API call.

---

##### `BatchCreateWorkloadEstimateUsage`<sup>Required</sup> <a name="BatchCreateWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchCreateWorkloadEstimateUsage"></a>

```typescript
public readonly BatchCreateWorkloadEstimateUsage: string[];
```

- *Type:* string[]

IAM actions required for the BatchCreateWorkloadEstimateUsage API call.

---

##### `BatchDeleteBillScenarioCommitmentModification`<sup>Required</sup> <a name="BatchDeleteBillScenarioCommitmentModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchDeleteBillScenarioCommitmentModification"></a>

```typescript
public readonly BatchDeleteBillScenarioCommitmentModification: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteBillScenarioCommitmentModification API call.

---

##### `BatchDeleteBillScenarioUsageModification`<sup>Required</sup> <a name="BatchDeleteBillScenarioUsageModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchDeleteBillScenarioUsageModification"></a>

```typescript
public readonly BatchDeleteBillScenarioUsageModification: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteBillScenarioUsageModification API call.

---

##### `BatchDeleteWorkloadEstimateUsage`<sup>Required</sup> <a name="BatchDeleteWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchDeleteWorkloadEstimateUsage"></a>

```typescript
public readonly BatchDeleteWorkloadEstimateUsage: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteWorkloadEstimateUsage API call.

---

##### `BatchUpdateBillScenarioCommitmentModification`<sup>Required</sup> <a name="BatchUpdateBillScenarioCommitmentModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchUpdateBillScenarioCommitmentModification"></a>

```typescript
public readonly BatchUpdateBillScenarioCommitmentModification: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateBillScenarioCommitmentModification API call.

---

##### `BatchUpdateBillScenarioUsageModification`<sup>Required</sup> <a name="BatchUpdateBillScenarioUsageModification" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchUpdateBillScenarioUsageModification"></a>

```typescript
public readonly BatchUpdateBillScenarioUsageModification: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateBillScenarioUsageModification API call.

---

##### `BatchUpdateWorkloadEstimateUsage`<sup>Required</sup> <a name="BatchUpdateWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.BatchUpdateWorkloadEstimateUsage"></a>

```typescript
public readonly BatchUpdateWorkloadEstimateUsage: string[];
```

- *Type:* string[]

IAM actions required for the BatchUpdateWorkloadEstimateUsage API call.

---

##### `CreateBillEstimate`<sup>Required</sup> <a name="CreateBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.CreateBillEstimate"></a>

```typescript
public readonly CreateBillEstimate: string[];
```

- *Type:* string[]

IAM actions required for the CreateBillEstimate API call.

---

##### `CreateBillScenario`<sup>Required</sup> <a name="CreateBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.CreateBillScenario"></a>

```typescript
public readonly CreateBillScenario: string[];
```

- *Type:* string[]

IAM actions required for the CreateBillScenario API call.

---

##### `CreateWorkloadEstimate`<sup>Required</sup> <a name="CreateWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.CreateWorkloadEstimate"></a>

```typescript
public readonly CreateWorkloadEstimate: string[];
```

- *Type:* string[]

IAM actions required for the CreateWorkloadEstimate API call.

---

##### `DeleteBillEstimate`<sup>Required</sup> <a name="DeleteBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.DeleteBillEstimate"></a>

```typescript
public readonly DeleteBillEstimate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBillEstimate API call.

---

##### `DeleteBillScenario`<sup>Required</sup> <a name="DeleteBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.DeleteBillScenario"></a>

```typescript
public readonly DeleteBillScenario: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBillScenario API call.

---

##### `DeleteWorkloadEstimate`<sup>Required</sup> <a name="DeleteWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.DeleteWorkloadEstimate"></a>

```typescript
public readonly DeleteWorkloadEstimate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWorkloadEstimate API call.

---

##### `ListBillEstimateCommitments`<sup>Required</sup> <a name="ListBillEstimateCommitments" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateCommitments"></a>

```typescript
public readonly ListBillEstimateCommitments: string[];
```

- *Type:* string[]

IAM actions required for the ListBillEstimateCommitments API call.

---

##### `ListBillEstimateInputCommitmentModifications`<sup>Required</sup> <a name="ListBillEstimateInputCommitmentModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateInputCommitmentModifications"></a>

```typescript
public readonly ListBillEstimateInputCommitmentModifications: string[];
```

- *Type:* string[]

IAM actions required for the ListBillEstimateInputCommitmentModifications API call.

---

##### `ListBillEstimateInputUsageModifications`<sup>Required</sup> <a name="ListBillEstimateInputUsageModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateInputUsageModifications"></a>

```typescript
public readonly ListBillEstimateInputUsageModifications: string[];
```

- *Type:* string[]

IAM actions required for the ListBillEstimateInputUsageModifications API call.

---

##### `ListBillEstimateLineItems`<sup>Required</sup> <a name="ListBillEstimateLineItems" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimateLineItems"></a>

```typescript
public readonly ListBillEstimateLineItems: string[];
```

- *Type:* string[]

IAM actions required for the ListBillEstimateLineItems API call.

---

##### `ListBillEstimates`<sup>Required</sup> <a name="ListBillEstimates" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillEstimates"></a>

```typescript
public readonly ListBillEstimates: string[];
```

- *Type:* string[]

IAM actions required for the ListBillEstimates API call.

---

##### `ListBillScenarioCommitmentModifications`<sup>Required</sup> <a name="ListBillScenarioCommitmentModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillScenarioCommitmentModifications"></a>

```typescript
public readonly ListBillScenarioCommitmentModifications: string[];
```

- *Type:* string[]

IAM actions required for the ListBillScenarioCommitmentModifications API call.

---

##### `ListBillScenarios`<sup>Required</sup> <a name="ListBillScenarios" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillScenarios"></a>

```typescript
public readonly ListBillScenarios: string[];
```

- *Type:* string[]

IAM actions required for the ListBillScenarios API call.

---

##### `ListBillScenarioUsageModifications`<sup>Required</sup> <a name="ListBillScenarioUsageModifications" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListBillScenarioUsageModifications"></a>

```typescript
public readonly ListBillScenarioUsageModifications: string[];
```

- *Type:* string[]

IAM actions required for the ListBillScenarioUsageModifications API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkloadEstimates`<sup>Required</sup> <a name="ListWorkloadEstimates" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListWorkloadEstimates"></a>

```typescript
public readonly ListWorkloadEstimates: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloadEstimates API call.

---

##### `ListWorkloadEstimateUsage`<sup>Required</sup> <a name="ListWorkloadEstimateUsage" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.ListWorkloadEstimateUsage"></a>

```typescript
public readonly ListWorkloadEstimateUsage: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloadEstimateUsage API call.

---

##### `opGetBillEstimate`<sup>Required</sup> <a name="opGetBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetBillEstimate"></a>

```typescript
public readonly opGetBillEstimate: string[];
```

- *Type:* string[]

IAM actions required for the GetBillEstimate API call.

---

##### `opGetBillScenario`<sup>Required</sup> <a name="opGetBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetBillScenario"></a>

```typescript
public readonly opGetBillScenario: string[];
```

- *Type:* string[]

IAM actions required for the GetBillScenario API call.

---

##### `opGetPreferences`<sup>Required</sup> <a name="opGetPreferences" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetPreferences"></a>

```typescript
public readonly opGetPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetPreferences API call.

---

##### `opGetWorkloadEstimate`<sup>Required</sup> <a name="opGetWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.opGetWorkloadEstimate"></a>

```typescript
public readonly opGetWorkloadEstimate: string[];
```

- *Type:* string[]

IAM actions required for the GetWorkloadEstimate API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBillEstimate`<sup>Required</sup> <a name="UpdateBillEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdateBillEstimate"></a>

```typescript
public readonly UpdateBillEstimate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBillEstimate API call.

---

##### `UpdateBillScenario`<sup>Required</sup> <a name="UpdateBillScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdateBillScenario"></a>

```typescript
public readonly UpdateBillScenario: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBillScenario API call.

---

##### `UpdatePreferences`<sup>Required</sup> <a name="UpdatePreferences" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdatePreferences"></a>

```typescript
public readonly UpdatePreferences: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePreferences API call.

---

##### `UpdateWorkloadEstimate`<sup>Required</sup> <a name="UpdateWorkloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorOperations.property.UpdateWorkloadEstimate"></a>

```typescript
public readonly UpdateWorkloadEstimate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkloadEstimate API call.

---

### BcmPricingCalculatorResources <a name="BcmPricingCalculatorResources" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources"></a>

ARN builders, validators, and parsers for bcm-pricing-calculator resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.Initializer"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

new bcm_pricing_calculator.BcmPricingCalculatorResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.billEstimate">billEstimate</a></code> | Builds an ARN for the bill-estimate resource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.billScenario">billScenario</a></code> | Builds an ARN for the bill-scenario resource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillEstimateArn">isValidBillEstimateArn</a></code> | Validates whether a string is a valid ARN for the bill-estimate resource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillScenarioArn">isValidBillScenarioArn</a></code> | Validates whether a string is a valid ARN for the bill-scenario resource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidWorkloadEstimateArn">isValidWorkloadEstimateArn</a></code> | Validates whether a string is a valid ARN for the workload-estimate resource. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillEstimateArn">parseBillEstimateArn</a></code> | Parses a bill-estimate ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillScenarioArn">parseBillScenarioArn</a></code> | Parses a bill-scenario ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseWorkloadEstimateArn">parseWorkloadEstimateArn</a></code> | Parses a workload-estimate ARN into its components. |
| <code><a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.workloadEstimate">workloadEstimate</a></code> | Builds an ARN for the workload-estimate resource. |

---

##### `billEstimate` <a name="billEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.billEstimate"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.billEstimate(props: BcmPricingCalculatorBillEstimateArnProps)
```

Builds an ARN for the bill-estimate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.billEstimate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillEstimateArnProps">BcmPricingCalculatorBillEstimateArnProps</a>

---

##### `billScenario` <a name="billScenario" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.billScenario"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.billScenario(props: BcmPricingCalculatorBillScenarioArnProps)
```

Builds an ARN for the bill-scenario resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.billScenario.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorBillScenarioArnProps">BcmPricingCalculatorBillScenarioArnProps</a>

---

##### `isValidBillEstimateArn` <a name="isValidBillEstimateArn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillEstimateArn"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillEstimateArn(arn: string)
```

Validates whether a string is a valid ARN for the bill-estimate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillEstimateArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidBillScenarioArn` <a name="isValidBillScenarioArn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillScenarioArn"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillScenarioArn(arn: string)
```

Validates whether a string is a valid ARN for the bill-scenario resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidBillScenarioArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWorkloadEstimateArn` <a name="isValidWorkloadEstimateArn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidWorkloadEstimateArn"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.isValidWorkloadEstimateArn(arn: string)
```

Validates whether a string is a valid ARN for the workload-estimate resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.isValidWorkloadEstimateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillEstimateArn` <a name="parseBillEstimateArn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillEstimateArn"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillEstimateArn(arn: string)
```

Parses a bill-estimate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillEstimateArn.parameter.arn"></a>

- *Type:* string

---

##### `parseBillScenarioArn` <a name="parseBillScenarioArn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillScenarioArn"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillScenarioArn(arn: string)
```

Parses a bill-scenario ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseBillScenarioArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWorkloadEstimateArn` <a name="parseWorkloadEstimateArn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseWorkloadEstimateArn"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.parseWorkloadEstimateArn(arn: string)
```

Parses a workload-estimate ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.parseWorkloadEstimateArn.parameter.arn"></a>

- *Type:* string

---

##### `workloadEstimate` <a name="workloadEstimate" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.workloadEstimate"></a>

```typescript
import { bcm_pricing_calculator } from '@cdk_utils/iam'

bcm_pricing_calculator.BcmPricingCalculatorResources.workloadEstimate(props: BcmPricingCalculatorWorkloadEstimateArnProps)
```

Builds an ARN for the workload-estimate resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorResources.workloadEstimate.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.bcm_pricing_calculator.BcmPricingCalculatorWorkloadEstimateArnProps">BcmPricingCalculatorWorkloadEstimateArnProps</a>

---




