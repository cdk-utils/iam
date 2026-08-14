# `payments` Submodule <a name="`payments` Submodule" id="@cdk_utils/iam.payments"></a>


## Structs <a name="Structs" id="Structs"></a>

### PaymentsPaymentInstrumentArnComponents <a name="PaymentsPaymentInstrumentArnComponents" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents"></a>

Parsed components of a payment-instrument ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.Initializer"></a>

```typescript
import { payments } from '@cdk_utils/iam'

const paymentsPaymentInstrumentArnComponents: payments.PaymentsPaymentInstrumentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### PaymentsPaymentInstrumentArnProps <a name="PaymentsPaymentInstrumentArnProps" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps"></a>

Properties for building a payment-instrument ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.Initializer"></a>

```typescript
import { payments } from '@cdk_utils/iam'

const paymentsPaymentInstrumentArnProps: payments.PaymentsPaymentInstrumentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### PaymentsActions <a name="PaymentsActions" id="@cdk_utils/iam.payments.PaymentsActions"></a>

IAM action constants for the payments service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payments.PaymentsActions.Initializer"></a>

```typescript
import { payments } from '@cdk_utils/iam'

new payments.PaymentsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.AcceptFinancingApplicationTerms">AcceptFinancingApplicationTerms</a></code> | <code>string</code> | [Write] payments:AcceptFinancingApplicationTerms. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingApplication">actionGetFinancingApplication</a></code> | <code>string</code> | [Read] payments:GetFinancingApplication. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingLine">actionGetFinancingLine</a></code> | <code>string</code> | [Read] payments:GetFinancingLine. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingLineWithdrawal">actionGetFinancingLineWithdrawal</a></code> | <code>string</code> | [Read] payments:GetFinancingLineWithdrawal. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingOption">actionGetFinancingOption</a></code> | <code>string</code> | [Read] payments:GetFinancingOption. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.actionGetPaymentInstrument">actionGetPaymentInstrument</a></code> | <code>string</code> | [List] payments:GetPaymentInstrument. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.actionGetPaymentStatus">actionGetPaymentStatus</a></code> | <code>string</code> | [Read] payments:GetPaymentStatus. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.CreateFinancingApplication">CreateFinancingApplication</a></code> | <code>string</code> | [Write] payments:CreateFinancingApplication. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.CreatePaymentInstrument">CreatePaymentInstrument</a></code> | <code>string</code> | [Write] payments:CreatePaymentInstrument. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.DeletePaymentInstrument">DeletePaymentInstrument</a></code> | <code>string</code> | [Write] payments:DeletePaymentInstrument. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListFinancingApplications">ListFinancingApplications</a></code> | <code>string</code> | [List] payments:ListFinancingApplications. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListFinancingLines">ListFinancingLines</a></code> | <code>string</code> | [List] payments:ListFinancingLines. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListFinancingLineWithdrawals">ListFinancingLineWithdrawals</a></code> | <code>string</code> | [List] payments:ListFinancingLineWithdrawals. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentInstruments">ListPaymentInstruments</a></code> | <code>string</code> | [List] payments:ListPaymentInstruments. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentPreferences">ListPaymentPreferences</a></code> | <code>string</code> | [List] payments:ListPaymentPreferences. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentProgramOptions">ListPaymentProgramOptions</a></code> | <code>string</code> | [List] payments:ListPaymentProgramOptions. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentProgramStatus">ListPaymentProgramStatus</a></code> | <code>string</code> | [List] payments:ListPaymentProgramStatus. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] payments:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.MakePayment">MakePayment</a></code> | <code>string</code> | [Write] payments:MakePayment. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] payments:TagResource. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] payments:UntagResource. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.UpdateFinancingApplication">UpdateFinancingApplication</a></code> | <code>string</code> | [Write] payments:UpdateFinancingApplication. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.UpdatePaymentInstrument">UpdatePaymentInstrument</a></code> | <code>string</code> | [Write] payments:UpdatePaymentInstrument. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsActions.property.UpdatePaymentPreferences">UpdatePaymentPreferences</a></code> | <code>string</code> | [Write] payments:UpdatePaymentPreferences. |

---

##### `AcceptFinancingApplicationTerms`<sup>Required</sup> <a name="AcceptFinancingApplicationTerms" id="@cdk_utils/iam.payments.PaymentsActions.property.AcceptFinancingApplicationTerms"></a>

```typescript
public readonly AcceptFinancingApplicationTerms: string;
```

- *Type:* string

[Write] payments:AcceptFinancingApplicationTerms.

---

##### `actionGetFinancingApplication`<sup>Required</sup> <a name="actionGetFinancingApplication" id="@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingApplication"></a>

```typescript
public readonly actionGetFinancingApplication: string;
```

- *Type:* string

[Read] payments:GetFinancingApplication.

---

##### `actionGetFinancingLine`<sup>Required</sup> <a name="actionGetFinancingLine" id="@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingLine"></a>

```typescript
public readonly actionGetFinancingLine: string;
```

- *Type:* string

[Read] payments:GetFinancingLine.

---

##### `actionGetFinancingLineWithdrawal`<sup>Required</sup> <a name="actionGetFinancingLineWithdrawal" id="@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingLineWithdrawal"></a>

```typescript
public readonly actionGetFinancingLineWithdrawal: string;
```

- *Type:* string

[Read] payments:GetFinancingLineWithdrawal.

---

##### `actionGetFinancingOption`<sup>Required</sup> <a name="actionGetFinancingOption" id="@cdk_utils/iam.payments.PaymentsActions.property.actionGetFinancingOption"></a>

```typescript
public readonly actionGetFinancingOption: string;
```

- *Type:* string

[Read] payments:GetFinancingOption.

---

##### `actionGetPaymentInstrument`<sup>Required</sup> <a name="actionGetPaymentInstrument" id="@cdk_utils/iam.payments.PaymentsActions.property.actionGetPaymentInstrument"></a>

```typescript
public readonly actionGetPaymentInstrument: string;
```

- *Type:* string

[List] payments:GetPaymentInstrument.

---

##### `actionGetPaymentStatus`<sup>Required</sup> <a name="actionGetPaymentStatus" id="@cdk_utils/iam.payments.PaymentsActions.property.actionGetPaymentStatus"></a>

```typescript
public readonly actionGetPaymentStatus: string;
```

- *Type:* string

[Read] payments:GetPaymentStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.payments.PaymentsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.payments.PaymentsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.payments.PaymentsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.payments.PaymentsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.payments.PaymentsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateFinancingApplication`<sup>Required</sup> <a name="CreateFinancingApplication" id="@cdk_utils/iam.payments.PaymentsActions.property.CreateFinancingApplication"></a>

```typescript
public readonly CreateFinancingApplication: string;
```

- *Type:* string

[Write] payments:CreateFinancingApplication.

---

##### `CreatePaymentInstrument`<sup>Required</sup> <a name="CreatePaymentInstrument" id="@cdk_utils/iam.payments.PaymentsActions.property.CreatePaymentInstrument"></a>

```typescript
public readonly CreatePaymentInstrument: string;
```

- *Type:* string

[Write] payments:CreatePaymentInstrument.

---

##### `DeletePaymentInstrument`<sup>Required</sup> <a name="DeletePaymentInstrument" id="@cdk_utils/iam.payments.PaymentsActions.property.DeletePaymentInstrument"></a>

```typescript
public readonly DeletePaymentInstrument: string;
```

- *Type:* string

[Write] payments:DeletePaymentInstrument.

---

##### `ListFinancingApplications`<sup>Required</sup> <a name="ListFinancingApplications" id="@cdk_utils/iam.payments.PaymentsActions.property.ListFinancingApplications"></a>

```typescript
public readonly ListFinancingApplications: string;
```

- *Type:* string

[List] payments:ListFinancingApplications.

---

##### `ListFinancingLines`<sup>Required</sup> <a name="ListFinancingLines" id="@cdk_utils/iam.payments.PaymentsActions.property.ListFinancingLines"></a>

```typescript
public readonly ListFinancingLines: string;
```

- *Type:* string

[List] payments:ListFinancingLines.

---

##### `ListFinancingLineWithdrawals`<sup>Required</sup> <a name="ListFinancingLineWithdrawals" id="@cdk_utils/iam.payments.PaymentsActions.property.ListFinancingLineWithdrawals"></a>

```typescript
public readonly ListFinancingLineWithdrawals: string;
```

- *Type:* string

[List] payments:ListFinancingLineWithdrawals.

---

##### `ListPaymentInstruments`<sup>Required</sup> <a name="ListPaymentInstruments" id="@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentInstruments"></a>

```typescript
public readonly ListPaymentInstruments: string;
```

- *Type:* string

[List] payments:ListPaymentInstruments.

---

##### `ListPaymentPreferences`<sup>Required</sup> <a name="ListPaymentPreferences" id="@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentPreferences"></a>

```typescript
public readonly ListPaymentPreferences: string;
```

- *Type:* string

[List] payments:ListPaymentPreferences.

---

##### `ListPaymentProgramOptions`<sup>Required</sup> <a name="ListPaymentProgramOptions" id="@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentProgramOptions"></a>

```typescript
public readonly ListPaymentProgramOptions: string;
```

- *Type:* string

[List] payments:ListPaymentProgramOptions.

---

##### `ListPaymentProgramStatus`<sup>Required</sup> <a name="ListPaymentProgramStatus" id="@cdk_utils/iam.payments.PaymentsActions.property.ListPaymentProgramStatus"></a>

```typescript
public readonly ListPaymentProgramStatus: string;
```

- *Type:* string

[List] payments:ListPaymentProgramStatus.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.payments.PaymentsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] payments:ListTagsForResource.

---

##### `MakePayment`<sup>Required</sup> <a name="MakePayment" id="@cdk_utils/iam.payments.PaymentsActions.property.MakePayment"></a>

```typescript
public readonly MakePayment: string;
```

- *Type:* string

[Write] payments:MakePayment.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.payments.PaymentsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.payments.PaymentsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] payments:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.payments.PaymentsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] payments:UntagResource.

---

##### `UpdateFinancingApplication`<sup>Required</sup> <a name="UpdateFinancingApplication" id="@cdk_utils/iam.payments.PaymentsActions.property.UpdateFinancingApplication"></a>

```typescript
public readonly UpdateFinancingApplication: string;
```

- *Type:* string

[Write] payments:UpdateFinancingApplication.

---

##### `UpdatePaymentInstrument`<sup>Required</sup> <a name="UpdatePaymentInstrument" id="@cdk_utils/iam.payments.PaymentsActions.property.UpdatePaymentInstrument"></a>

```typescript
public readonly UpdatePaymentInstrument: string;
```

- *Type:* string

[Write] payments:UpdatePaymentInstrument.

---

##### `UpdatePaymentPreferences`<sup>Required</sup> <a name="UpdatePaymentPreferences" id="@cdk_utils/iam.payments.PaymentsActions.property.UpdatePaymentPreferences"></a>

```typescript
public readonly UpdatePaymentPreferences: string;
```

- *Type:* string

[Write] payments:UpdatePaymentPreferences.

---

### PaymentsConditions <a name="PaymentsConditions" id="@cdk_utils/iam.payments.PaymentsConditions"></a>

Condition key constants and builders for payments.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payments.PaymentsConditions.Initializer"></a>

```typescript
import { payments } from '@cdk_utils/iam'

new payments.PaymentsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.payments.PaymentsConditions.requestTag"></a>

```typescript
import { payments } from '@cdk_utils/iam'

payments.PaymentsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payments.PaymentsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.payments.PaymentsConditions.resourceTag"></a>

```typescript
import { payments } from '@cdk_utils/iam'

payments.PaymentsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.payments.PaymentsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.payments.PaymentsConditions.tagKeys"></a>

```typescript
import { payments } from '@cdk_utils/iam'

payments.PaymentsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.payments.PaymentsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.property.CreatePaymentInstrumentConditionKeys">CreatePaymentInstrumentConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePaymentInstrument action. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.payments.PaymentsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.payments.PaymentsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.payments.PaymentsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePaymentInstrumentConditionKeys`<sup>Required</sup> <a name="CreatePaymentInstrumentConditionKeys" id="@cdk_utils/iam.payments.PaymentsConditions.property.CreatePaymentInstrumentConditionKeys"></a>

```typescript
public readonly CreatePaymentInstrumentConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePaymentInstrument action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.payments.PaymentsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.payments.PaymentsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### PaymentsResources <a name="PaymentsResources" id="@cdk_utils/iam.payments.PaymentsResources"></a>

ARN builders, validators, and parsers for payments resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.payments.PaymentsResources.Initializer"></a>

```typescript
import { payments } from '@cdk_utils/iam'

new payments.PaymentsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.payments.PaymentsResources.isValidPaymentInstrumentArn">isValidPaymentInstrumentArn</a></code> | Validates whether a string is a valid ARN for the payment-instrument resource. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsResources.parsePaymentInstrumentArn">parsePaymentInstrumentArn</a></code> | Parses a payment-instrument ARN into its components. |
| <code><a href="#@cdk_utils/iam.payments.PaymentsResources.paymentInstrument">paymentInstrument</a></code> | Builds an ARN for the payment-instrument resource. |

---

##### `isValidPaymentInstrumentArn` <a name="isValidPaymentInstrumentArn" id="@cdk_utils/iam.payments.PaymentsResources.isValidPaymentInstrumentArn"></a>

```typescript
import { payments } from '@cdk_utils/iam'

payments.PaymentsResources.isValidPaymentInstrumentArn(arn: string)
```

Validates whether a string is a valid ARN for the payment-instrument resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payments.PaymentsResources.isValidPaymentInstrumentArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePaymentInstrumentArn` <a name="parsePaymentInstrumentArn" id="@cdk_utils/iam.payments.PaymentsResources.parsePaymentInstrumentArn"></a>

```typescript
import { payments } from '@cdk_utils/iam'

payments.PaymentsResources.parsePaymentInstrumentArn(arn: string)
```

Parses a payment-instrument ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.payments.PaymentsResources.parsePaymentInstrumentArn.parameter.arn"></a>

- *Type:* string

---

##### `paymentInstrument` <a name="paymentInstrument" id="@cdk_utils/iam.payments.PaymentsResources.paymentInstrument"></a>

```typescript
import { payments } from '@cdk_utils/iam'

payments.PaymentsResources.paymentInstrument(props: PaymentsPaymentInstrumentArnProps)
```

Builds an ARN for the payment-instrument resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.payments.PaymentsResources.paymentInstrument.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.payments.PaymentsPaymentInstrumentArnProps">PaymentsPaymentInstrumentArnProps</a>

---




