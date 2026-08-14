# `invoicing` Submodule <a name="`invoicing` Submodule" id="@cdk_utils/iam.invoicing"></a>


## Structs <a name="Structs" id="Structs"></a>

### InvoicingInvoiceUnitArnComponents <a name="InvoicingInvoiceUnitArnComponents" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents"></a>

Parsed components of a invoice-unit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

const invoicingInvoiceUnitArnComponents: invoicing.InvoicingInvoiceUnitArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### InvoicingInvoiceUnitArnProps <a name="InvoicingInvoiceUnitArnProps" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps"></a>

Properties for building a invoice-unit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

const invoicingInvoiceUnitArnProps: invoicing.InvoicingInvoiceUnitArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### InvoicingProcurementPortalPreferenceArnComponents <a name="InvoicingProcurementPortalPreferenceArnComponents" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents"></a>

Parsed components of a procurement-portal-preference ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

const invoicingProcurementPortalPreferenceArnComponents: invoicing.InvoicingProcurementPortalPreferenceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### InvoicingProcurementPortalPreferenceArnProps <a name="InvoicingProcurementPortalPreferenceArnProps" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps"></a>

Properties for building a procurement-portal-preference ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

const invoicingProcurementPortalPreferenceArnProps: invoicing.InvoicingProcurementPortalPreferenceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.property.identifier">identifier</a></code> | <code>string</code> | The Identifier component of the ARN. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The Identifier component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### InvoicingActions <a name="InvoicingActions" id="@cdk_utils/iam.invoicing.InvoicingActions"></a>

IAM action constants for the invoicing service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.invoicing.InvoicingActions.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

new invoicing.InvoicingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoiceCorrection">actionGetInvoiceCorrection</a></code> | <code>string</code> | [Read] invoicing:GetInvoiceCorrection. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoiceEmailDeliveryPreferences">actionGetInvoiceEmailDeliveryPreferences</a></code> | <code>string</code> | [Read] invoicing:GetInvoiceEmailDeliveryPreferences. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoicePDF">actionGetInvoicePDF</a></code> | <code>string</code> | [Read] invoicing:GetInvoicePDF. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoiceUnit">actionGetInvoiceUnit</a></code> | <code>string</code> | [Read] invoicing:GetInvoiceUnit. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetProcurementPortalPreference">actionGetProcurementPortalPreference</a></code> | <code>string</code> | [Read] invoicing:GetProcurementPortalPreference. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.BatchGetInvoiceProfile">BatchGetInvoiceProfile</a></code> | <code>string</code> | [Read] invoicing:BatchGetInvoiceProfile. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.CreateInvoiceUnit">CreateInvoiceUnit</a></code> | <code>string</code> | [Write] invoicing:CreateInvoiceUnit. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.CreateProcurementPortalPreference">CreateProcurementPortalPreference</a></code> | <code>string</code> | [Write] invoicing:CreateProcurementPortalPreference. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.DeleteInvoiceUnit">DeleteInvoiceUnit</a></code> | <code>string</code> | [Write] invoicing:DeleteInvoiceUnit. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.DeleteProcurementPortalPreference">DeleteProcurementPortalPreference</a></code> | <code>string</code> | [Write] invoicing:DeleteProcurementPortalPreference. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListInvoiceCorrections">ListInvoiceCorrections</a></code> | <code>string</code> | [List] invoicing:ListInvoiceCorrections. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListInvoiceSummaries">ListInvoiceSummaries</a></code> | <code>string</code> | [Read] invoicing:ListInvoiceSummaries. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListInvoiceUnits">ListInvoiceUnits</a></code> | <code>string</code> | [List] invoicing:ListInvoiceUnits. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListProcurementPortalPreferences">ListProcurementPortalPreferences</a></code> | <code>string</code> | [List] invoicing:ListProcurementPortalPreferences. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListProcurementPortals">ListProcurementPortals</a></code> | <code>string</code> | [List] invoicing:ListProcurementPortals. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListProcurementPortalSuppliers">ListProcurementPortalSuppliers</a></code> | <code>string</code> | [List] invoicing:ListProcurementPortalSuppliers. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] invoicing:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.PutInvoiceEmailDeliveryPreferences">PutInvoiceEmailDeliveryPreferences</a></code> | <code>string</code> | [Write] invoicing:PutInvoiceEmailDeliveryPreferences. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.PutProcurementPortalPreference">PutProcurementPortalPreference</a></code> | <code>string</code> | [Write] invoicing:PutProcurementPortalPreference. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.SendProcurementPortalValidation">SendProcurementPortalValidation</a></code> | <code>string</code> | [Write] invoicing:SendProcurementPortalValidation. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.StartInvoiceCorrection">StartInvoiceCorrection</a></code> | <code>string</code> | [Write] invoicing:StartInvoiceCorrection. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] invoicing:TagResource. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] invoicing:UntagResource. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.UpdateInvoiceUnit">UpdateInvoiceUnit</a></code> | <code>string</code> | [Write] invoicing:UpdateInvoiceUnit. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.UpdateProcurementPortalPreferenceStatus">UpdateProcurementPortalPreferenceStatus</a></code> | <code>string</code> | [Write] invoicing:UpdateProcurementPortalPreferenceStatus. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingActions.property.VerifyProcurementPortalValidation">VerifyProcurementPortalValidation</a></code> | <code>string</code> | [Write] invoicing:VerifyProcurementPortalValidation. |

---

##### `actionGetInvoiceCorrection`<sup>Required</sup> <a name="actionGetInvoiceCorrection" id="@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoiceCorrection"></a>

```typescript
public readonly actionGetInvoiceCorrection: string;
```

- *Type:* string

[Read] invoicing:GetInvoiceCorrection.

---

##### `actionGetInvoiceEmailDeliveryPreferences`<sup>Required</sup> <a name="actionGetInvoiceEmailDeliveryPreferences" id="@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoiceEmailDeliveryPreferences"></a>

```typescript
public readonly actionGetInvoiceEmailDeliveryPreferences: string;
```

- *Type:* string

[Read] invoicing:GetInvoiceEmailDeliveryPreferences.

---

##### `actionGetInvoicePDF`<sup>Required</sup> <a name="actionGetInvoicePDF" id="@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoicePDF"></a>

```typescript
public readonly actionGetInvoicePDF: string;
```

- *Type:* string

[Read] invoicing:GetInvoicePDF.

---

##### `actionGetInvoiceUnit`<sup>Required</sup> <a name="actionGetInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetInvoiceUnit"></a>

```typescript
public readonly actionGetInvoiceUnit: string;
```

- *Type:* string

[Read] invoicing:GetInvoiceUnit.

---

##### `actionGetProcurementPortalPreference`<sup>Required</sup> <a name="actionGetProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingActions.property.actionGetProcurementPortalPreference"></a>

```typescript
public readonly actionGetProcurementPortalPreference: string;
```

- *Type:* string

[Read] invoicing:GetProcurementPortalPreference.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.invoicing.InvoicingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.invoicing.InvoicingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.invoicing.InvoicingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.invoicing.InvoicingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.invoicing.InvoicingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetInvoiceProfile`<sup>Required</sup> <a name="BatchGetInvoiceProfile" id="@cdk_utils/iam.invoicing.InvoicingActions.property.BatchGetInvoiceProfile"></a>

```typescript
public readonly BatchGetInvoiceProfile: string;
```

- *Type:* string

[Read] invoicing:BatchGetInvoiceProfile.

---

##### `CreateInvoiceUnit`<sup>Required</sup> <a name="CreateInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingActions.property.CreateInvoiceUnit"></a>

```typescript
public readonly CreateInvoiceUnit: string;
```

- *Type:* string

[Write] invoicing:CreateInvoiceUnit.

---

##### `CreateProcurementPortalPreference`<sup>Required</sup> <a name="CreateProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingActions.property.CreateProcurementPortalPreference"></a>

```typescript
public readonly CreateProcurementPortalPreference: string;
```

- *Type:* string

[Write] invoicing:CreateProcurementPortalPreference.

---

##### `DeleteInvoiceUnit`<sup>Required</sup> <a name="DeleteInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingActions.property.DeleteInvoiceUnit"></a>

```typescript
public readonly DeleteInvoiceUnit: string;
```

- *Type:* string

[Write] invoicing:DeleteInvoiceUnit.

---

##### `DeleteProcurementPortalPreference`<sup>Required</sup> <a name="DeleteProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingActions.property.DeleteProcurementPortalPreference"></a>

```typescript
public readonly DeleteProcurementPortalPreference: string;
```

- *Type:* string

[Write] invoicing:DeleteProcurementPortalPreference.

---

##### `ListInvoiceCorrections`<sup>Required</sup> <a name="ListInvoiceCorrections" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListInvoiceCorrections"></a>

```typescript
public readonly ListInvoiceCorrections: string;
```

- *Type:* string

[List] invoicing:ListInvoiceCorrections.

---

##### `ListInvoiceSummaries`<sup>Required</sup> <a name="ListInvoiceSummaries" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListInvoiceSummaries"></a>

```typescript
public readonly ListInvoiceSummaries: string;
```

- *Type:* string

[Read] invoicing:ListInvoiceSummaries.

---

##### `ListInvoiceUnits`<sup>Required</sup> <a name="ListInvoiceUnits" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListInvoiceUnits"></a>

```typescript
public readonly ListInvoiceUnits: string;
```

- *Type:* string

[List] invoicing:ListInvoiceUnits.

---

##### `ListProcurementPortalPreferences`<sup>Required</sup> <a name="ListProcurementPortalPreferences" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListProcurementPortalPreferences"></a>

```typescript
public readonly ListProcurementPortalPreferences: string;
```

- *Type:* string

[List] invoicing:ListProcurementPortalPreferences.

---

##### `ListProcurementPortals`<sup>Required</sup> <a name="ListProcurementPortals" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListProcurementPortals"></a>

```typescript
public readonly ListProcurementPortals: string;
```

- *Type:* string

[List] invoicing:ListProcurementPortals.

---

##### `ListProcurementPortalSuppliers`<sup>Required</sup> <a name="ListProcurementPortalSuppliers" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListProcurementPortalSuppliers"></a>

```typescript
public readonly ListProcurementPortalSuppliers: string;
```

- *Type:* string

[List] invoicing:ListProcurementPortalSuppliers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.invoicing.InvoicingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] invoicing:ListTagsForResource.

---

##### `PutInvoiceEmailDeliveryPreferences`<sup>Required</sup> <a name="PutInvoiceEmailDeliveryPreferences" id="@cdk_utils/iam.invoicing.InvoicingActions.property.PutInvoiceEmailDeliveryPreferences"></a>

```typescript
public readonly PutInvoiceEmailDeliveryPreferences: string;
```

- *Type:* string

[Write] invoicing:PutInvoiceEmailDeliveryPreferences.

---

##### `PutProcurementPortalPreference`<sup>Required</sup> <a name="PutProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingActions.property.PutProcurementPortalPreference"></a>

```typescript
public readonly PutProcurementPortalPreference: string;
```

- *Type:* string

[Write] invoicing:PutProcurementPortalPreference.

---

##### `SendProcurementPortalValidation`<sup>Required</sup> <a name="SendProcurementPortalValidation" id="@cdk_utils/iam.invoicing.InvoicingActions.property.SendProcurementPortalValidation"></a>

```typescript
public readonly SendProcurementPortalValidation: string;
```

- *Type:* string

[Write] invoicing:SendProcurementPortalValidation.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.invoicing.InvoicingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartInvoiceCorrection`<sup>Required</sup> <a name="StartInvoiceCorrection" id="@cdk_utils/iam.invoicing.InvoicingActions.property.StartInvoiceCorrection"></a>

```typescript
public readonly StartInvoiceCorrection: string;
```

- *Type:* string

[Write] invoicing:StartInvoiceCorrection.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.invoicing.InvoicingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] invoicing:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.invoicing.InvoicingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] invoicing:UntagResource.

---

##### `UpdateInvoiceUnit`<sup>Required</sup> <a name="UpdateInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingActions.property.UpdateInvoiceUnit"></a>

```typescript
public readonly UpdateInvoiceUnit: string;
```

- *Type:* string

[Write] invoicing:UpdateInvoiceUnit.

---

##### `UpdateProcurementPortalPreferenceStatus`<sup>Required</sup> <a name="UpdateProcurementPortalPreferenceStatus" id="@cdk_utils/iam.invoicing.InvoicingActions.property.UpdateProcurementPortalPreferenceStatus"></a>

```typescript
public readonly UpdateProcurementPortalPreferenceStatus: string;
```

- *Type:* string

[Write] invoicing:UpdateProcurementPortalPreferenceStatus.

---

##### `VerifyProcurementPortalValidation`<sup>Required</sup> <a name="VerifyProcurementPortalValidation" id="@cdk_utils/iam.invoicing.InvoicingActions.property.VerifyProcurementPortalValidation"></a>

```typescript
public readonly VerifyProcurementPortalValidation: string;
```

- *Type:* string

[Write] invoicing:VerifyProcurementPortalValidation.

---

### InvoicingConditions <a name="InvoicingConditions" id="@cdk_utils/iam.invoicing.InvoicingConditions"></a>

Condition key constants and builders for invoicing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.invoicing.InvoicingConditions.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

new invoicing.InvoicingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.invoicing.InvoicingConditions.requestTag"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.invoicing.InvoicingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.invoicing.InvoicingConditions.resourceTag"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.invoicing.InvoicingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.tagKeys"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.invoicing.InvoicingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.CreateInvoiceUnitConditionKeys">CreateInvoiceUnitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateInvoiceUnit action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.CreateProcurementPortalPreferenceConditionKeys">CreateProcurementPortalPreferenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateProcurementPortalPreference action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.DeleteInvoiceUnitConditionKeys">DeleteInvoiceUnitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteInvoiceUnit action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.DeleteProcurementPortalPreferenceConditionKeys">DeleteProcurementPortalPreferenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteProcurementPortalPreference action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.PutProcurementPortalPreferenceConditionKeys">PutProcurementPortalPreferenceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutProcurementPortalPreference action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.SendProcurementPortalValidationConditionKeys">SendProcurementPortalValidationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SendProcurementPortalValidation action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.UpdateInvoiceUnitConditionKeys">UpdateInvoiceUnitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateInvoiceUnit action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.UpdateProcurementPortalPreferenceStatusConditionKeys">UpdateProcurementPortalPreferenceStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateProcurementPortalPreferenceStatus action. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingConditions.property.VerifyProcurementPortalValidationConditionKeys">VerifyProcurementPortalValidationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the VerifyProcurementPortalValidation action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateInvoiceUnitConditionKeys`<sup>Required</sup> <a name="CreateInvoiceUnitConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.CreateInvoiceUnitConditionKeys"></a>

```typescript
public readonly CreateInvoiceUnitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateInvoiceUnit action.

---

##### `CreateProcurementPortalPreferenceConditionKeys`<sup>Required</sup> <a name="CreateProcurementPortalPreferenceConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.CreateProcurementPortalPreferenceConditionKeys"></a>

```typescript
public readonly CreateProcurementPortalPreferenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateProcurementPortalPreference action.

---

##### `DeleteInvoiceUnitConditionKeys`<sup>Required</sup> <a name="DeleteInvoiceUnitConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.DeleteInvoiceUnitConditionKeys"></a>

```typescript
public readonly DeleteInvoiceUnitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteInvoiceUnit action.

---

##### `DeleteProcurementPortalPreferenceConditionKeys`<sup>Required</sup> <a name="DeleteProcurementPortalPreferenceConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.DeleteProcurementPortalPreferenceConditionKeys"></a>

```typescript
public readonly DeleteProcurementPortalPreferenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteProcurementPortalPreference action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `PutProcurementPortalPreferenceConditionKeys`<sup>Required</sup> <a name="PutProcurementPortalPreferenceConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.PutProcurementPortalPreferenceConditionKeys"></a>

```typescript
public readonly PutProcurementPortalPreferenceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutProcurementPortalPreference action.

---

##### `SendProcurementPortalValidationConditionKeys`<sup>Required</sup> <a name="SendProcurementPortalValidationConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.SendProcurementPortalValidationConditionKeys"></a>

```typescript
public readonly SendProcurementPortalValidationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SendProcurementPortalValidation action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateInvoiceUnitConditionKeys`<sup>Required</sup> <a name="UpdateInvoiceUnitConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.UpdateInvoiceUnitConditionKeys"></a>

```typescript
public readonly UpdateInvoiceUnitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateInvoiceUnit action.

---

##### `UpdateProcurementPortalPreferenceStatusConditionKeys`<sup>Required</sup> <a name="UpdateProcurementPortalPreferenceStatusConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.UpdateProcurementPortalPreferenceStatusConditionKeys"></a>

```typescript
public readonly UpdateProcurementPortalPreferenceStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateProcurementPortalPreferenceStatus action.

---

##### `VerifyProcurementPortalValidationConditionKeys`<sup>Required</sup> <a name="VerifyProcurementPortalValidationConditionKeys" id="@cdk_utils/iam.invoicing.InvoicingConditions.property.VerifyProcurementPortalValidationConditionKeys"></a>

```typescript
public readonly VerifyProcurementPortalValidationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the VerifyProcurementPortalValidation action.

---

### InvoicingOperations <a name="InvoicingOperations" id="@cdk_utils/iam.invoicing.InvoicingOperations"></a>

API operation to required IAM actions mapping for invoicing.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.invoicing.InvoicingOperations.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

new invoicing.InvoicingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.BatchGetInvoiceProfile">BatchGetInvoiceProfile</a></code> | <code>string[]</code> | IAM actions required for the BatchGetInvoiceProfile API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.CreateInvoiceUnit">CreateInvoiceUnit</a></code> | <code>string[]</code> | IAM actions required for the CreateInvoiceUnit API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.CreateProcurementPortalPreference">CreateProcurementPortalPreference</a></code> | <code>string[]</code> | IAM actions required for the CreateProcurementPortalPreference API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.DeleteInvoiceUnit">DeleteInvoiceUnit</a></code> | <code>string[]</code> | IAM actions required for the DeleteInvoiceUnit API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.DeleteProcurementPortalPreference">DeleteProcurementPortalPreference</a></code> | <code>string[]</code> | IAM actions required for the DeleteProcurementPortalPreference API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.ListInvoiceSummaries">ListInvoiceSummaries</a></code> | <code>string[]</code> | IAM actions required for the ListInvoiceSummaries API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.ListInvoiceUnits">ListInvoiceUnits</a></code> | <code>string[]</code> | IAM actions required for the ListInvoiceUnits API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.ListProcurementPortalPreferences">ListProcurementPortalPreferences</a></code> | <code>string[]</code> | IAM actions required for the ListProcurementPortalPreferences API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.opGetInvoicePDF">opGetInvoicePDF</a></code> | <code>string[]</code> | IAM actions required for the GetInvoicePDF API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.opGetInvoiceUnit">opGetInvoiceUnit</a></code> | <code>string[]</code> | IAM actions required for the GetInvoiceUnit API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.opGetProcurementPortalPreference">opGetProcurementPortalPreference</a></code> | <code>string[]</code> | IAM actions required for the GetProcurementPortalPreference API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.PutProcurementPortalPreference">PutProcurementPortalPreference</a></code> | <code>string[]</code> | IAM actions required for the PutProcurementPortalPreference API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.SendProcurementPortalValidation">SendProcurementPortalValidation</a></code> | <code>string[]</code> | IAM actions required for the SendProcurementPortalValidation API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.UpdateInvoiceUnit">UpdateInvoiceUnit</a></code> | <code>string[]</code> | IAM actions required for the UpdateInvoiceUnit API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.UpdateProcurementPortalPreferenceStatus">UpdateProcurementPortalPreferenceStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateProcurementPortalPreferenceStatus API call. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingOperations.property.VerifyProcurementPortalValidation">VerifyProcurementPortalValidation</a></code> | <code>string[]</code> | IAM actions required for the VerifyProcurementPortalValidation API call. |

---

##### `BatchGetInvoiceProfile`<sup>Required</sup> <a name="BatchGetInvoiceProfile" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.BatchGetInvoiceProfile"></a>

```typescript
public readonly BatchGetInvoiceProfile: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetInvoiceProfile API call.

---

##### `CreateInvoiceUnit`<sup>Required</sup> <a name="CreateInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.CreateInvoiceUnit"></a>

```typescript
public readonly CreateInvoiceUnit: string[];
```

- *Type:* string[]

IAM actions required for the CreateInvoiceUnit API call.

---

##### `CreateProcurementPortalPreference`<sup>Required</sup> <a name="CreateProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.CreateProcurementPortalPreference"></a>

```typescript
public readonly CreateProcurementPortalPreference: string[];
```

- *Type:* string[]

IAM actions required for the CreateProcurementPortalPreference API call.

---

##### `DeleteInvoiceUnit`<sup>Required</sup> <a name="DeleteInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.DeleteInvoiceUnit"></a>

```typescript
public readonly DeleteInvoiceUnit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteInvoiceUnit API call.

---

##### `DeleteProcurementPortalPreference`<sup>Required</sup> <a name="DeleteProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.DeleteProcurementPortalPreference"></a>

```typescript
public readonly DeleteProcurementPortalPreference: string[];
```

- *Type:* string[]

IAM actions required for the DeleteProcurementPortalPreference API call.

---

##### `ListInvoiceSummaries`<sup>Required</sup> <a name="ListInvoiceSummaries" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.ListInvoiceSummaries"></a>

```typescript
public readonly ListInvoiceSummaries: string[];
```

- *Type:* string[]

IAM actions required for the ListInvoiceSummaries API call.

---

##### `ListInvoiceUnits`<sup>Required</sup> <a name="ListInvoiceUnits" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.ListInvoiceUnits"></a>

```typescript
public readonly ListInvoiceUnits: string[];
```

- *Type:* string[]

IAM actions required for the ListInvoiceUnits API call.

---

##### `ListProcurementPortalPreferences`<sup>Required</sup> <a name="ListProcurementPortalPreferences" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.ListProcurementPortalPreferences"></a>

```typescript
public readonly ListProcurementPortalPreferences: string[];
```

- *Type:* string[]

IAM actions required for the ListProcurementPortalPreferences API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetInvoicePDF`<sup>Required</sup> <a name="opGetInvoicePDF" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.opGetInvoicePDF"></a>

```typescript
public readonly opGetInvoicePDF: string[];
```

- *Type:* string[]

IAM actions required for the GetInvoicePDF API call.

---

##### `opGetInvoiceUnit`<sup>Required</sup> <a name="opGetInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.opGetInvoiceUnit"></a>

```typescript
public readonly opGetInvoiceUnit: string[];
```

- *Type:* string[]

IAM actions required for the GetInvoiceUnit API call.

---

##### `opGetProcurementPortalPreference`<sup>Required</sup> <a name="opGetProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.opGetProcurementPortalPreference"></a>

```typescript
public readonly opGetProcurementPortalPreference: string[];
```

- *Type:* string[]

IAM actions required for the GetProcurementPortalPreference API call.

---

##### `PutProcurementPortalPreference`<sup>Required</sup> <a name="PutProcurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.PutProcurementPortalPreference"></a>

```typescript
public readonly PutProcurementPortalPreference: string[];
```

- *Type:* string[]

IAM actions required for the PutProcurementPortalPreference API call.

---

##### `SendProcurementPortalValidation`<sup>Required</sup> <a name="SendProcurementPortalValidation" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.SendProcurementPortalValidation"></a>

```typescript
public readonly SendProcurementPortalValidation: string[];
```

- *Type:* string[]

IAM actions required for the SendProcurementPortalValidation API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateInvoiceUnit`<sup>Required</sup> <a name="UpdateInvoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.UpdateInvoiceUnit"></a>

```typescript
public readonly UpdateInvoiceUnit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateInvoiceUnit API call.

---

##### `UpdateProcurementPortalPreferenceStatus`<sup>Required</sup> <a name="UpdateProcurementPortalPreferenceStatus" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.UpdateProcurementPortalPreferenceStatus"></a>

```typescript
public readonly UpdateProcurementPortalPreferenceStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProcurementPortalPreferenceStatus API call.

---

##### `VerifyProcurementPortalValidation`<sup>Required</sup> <a name="VerifyProcurementPortalValidation" id="@cdk_utils/iam.invoicing.InvoicingOperations.property.VerifyProcurementPortalValidation"></a>

```typescript
public readonly VerifyProcurementPortalValidation: string[];
```

- *Type:* string[]

IAM actions required for the VerifyProcurementPortalValidation API call.

---

### InvoicingResources <a name="InvoicingResources" id="@cdk_utils/iam.invoicing.InvoicingResources"></a>

ARN builders, validators, and parsers for invoicing resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.invoicing.InvoicingResources.Initializer"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

new invoicing.InvoicingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingResources.invoiceUnit">invoiceUnit</a></code> | Builds an ARN for the invoice-unit resource. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingResources.isValidInvoiceUnitArn">isValidInvoiceUnitArn</a></code> | Validates whether a string is a valid ARN for the invoice-unit resource. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingResources.isValidProcurementPortalPreferenceArn">isValidProcurementPortalPreferenceArn</a></code> | Validates whether a string is a valid ARN for the procurement-portal-preference resource. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingResources.parseInvoiceUnitArn">parseInvoiceUnitArn</a></code> | Parses a invoice-unit ARN into its components. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingResources.parseProcurementPortalPreferenceArn">parseProcurementPortalPreferenceArn</a></code> | Parses a procurement-portal-preference ARN into its components. |
| <code><a href="#@cdk_utils/iam.invoicing.InvoicingResources.procurementPortalPreference">procurementPortalPreference</a></code> | Builds an ARN for the procurement-portal-preference resource. |

---

##### `invoiceUnit` <a name="invoiceUnit" id="@cdk_utils/iam.invoicing.InvoicingResources.invoiceUnit"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingResources.invoiceUnit(props: InvoicingInvoiceUnitArnProps)
```

Builds an ARN for the invoice-unit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.invoicing.InvoicingResources.invoiceUnit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.invoicing.InvoicingInvoiceUnitArnProps">InvoicingInvoiceUnitArnProps</a>

---

##### `isValidInvoiceUnitArn` <a name="isValidInvoiceUnitArn" id="@cdk_utils/iam.invoicing.InvoicingResources.isValidInvoiceUnitArn"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingResources.isValidInvoiceUnitArn(arn: string)
```

Validates whether a string is a valid ARN for the invoice-unit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.invoicing.InvoicingResources.isValidInvoiceUnitArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidProcurementPortalPreferenceArn` <a name="isValidProcurementPortalPreferenceArn" id="@cdk_utils/iam.invoicing.InvoicingResources.isValidProcurementPortalPreferenceArn"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingResources.isValidProcurementPortalPreferenceArn(arn: string)
```

Validates whether a string is a valid ARN for the procurement-portal-preference resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.invoicing.InvoicingResources.isValidProcurementPortalPreferenceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseInvoiceUnitArn` <a name="parseInvoiceUnitArn" id="@cdk_utils/iam.invoicing.InvoicingResources.parseInvoiceUnitArn"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingResources.parseInvoiceUnitArn(arn: string)
```

Parses a invoice-unit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.invoicing.InvoicingResources.parseInvoiceUnitArn.parameter.arn"></a>

- *Type:* string

---

##### `parseProcurementPortalPreferenceArn` <a name="parseProcurementPortalPreferenceArn" id="@cdk_utils/iam.invoicing.InvoicingResources.parseProcurementPortalPreferenceArn"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingResources.parseProcurementPortalPreferenceArn(arn: string)
```

Parses a procurement-portal-preference ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.invoicing.InvoicingResources.parseProcurementPortalPreferenceArn.parameter.arn"></a>

- *Type:* string

---

##### `procurementPortalPreference` <a name="procurementPortalPreference" id="@cdk_utils/iam.invoicing.InvoicingResources.procurementPortalPreference"></a>

```typescript
import { invoicing } from '@cdk_utils/iam'

invoicing.InvoicingResources.procurementPortalPreference(props: InvoicingProcurementPortalPreferenceArnProps)
```

Builds an ARN for the procurement-portal-preference resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.invoicing.InvoicingResources.procurementPortalPreference.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.invoicing.InvoicingProcurementPortalPreferenceArnProps">InvoicingProcurementPortalPreferenceArnProps</a>

---




