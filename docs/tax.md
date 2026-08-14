# `tax` Submodule <a name="`tax` Submodule" id="@cdk_utils/iam.tax"></a>



## Classes <a name="Classes" id="Classes"></a>

### TaxActions <a name="TaxActions" id="@cdk_utils/iam.tax.TaxActions"></a>

IAM action constants for the tax service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tax.TaxActions.Initializer"></a>

```typescript
import { tax } from '@cdk_utils/iam'

new tax.TaxActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetDocument">actionGetDocument</a></code> | <code>string</code> | [Read] tax:GetDocument. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetDocumentUploadUrl">actionGetDocumentUploadUrl</a></code> | <code>string</code> | [Read] tax:GetDocumentUploadUrl. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetExemptions">actionGetExemptions</a></code> | <code>string</code> | [Read] tax:GetExemptions. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetTaxInfoReportingDocument">actionGetTaxInfoReportingDocument</a></code> | <code>string</code> | [Read] tax:GetTaxInfoReportingDocument. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetTaxInheritance">actionGetTaxInheritance</a></code> | <code>string</code> | [Read] tax:GetTaxInheritance. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetTaxInterview">actionGetTaxInterview</a></code> | <code>string</code> | [Read] tax:GetTaxInterview. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetTaxRegistration">actionGetTaxRegistration</a></code> | <code>string</code> | [Read] tax:GetTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.actionGetTaxRegistrationDocument">actionGetTaxRegistrationDocument</a></code> | <code>string</code> | [Read] tax:GetTaxRegistrationDocument. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.BatchDeleteTaxRegistration">BatchDeleteTaxRegistration</a></code> | <code>string</code> | [Write] tax:BatchDeleteTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.BatchPutTaxRegistration">BatchPutTaxRegistration</a></code> | <code>string</code> | [Write] tax:BatchPutTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.CancelDocument">CancelDocument</a></code> | <code>string</code> | [Write] tax:CancelDocument. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.CreateDocument">CreateDocument</a></code> | <code>string</code> | [Write] tax:CreateDocument. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.DeleteSupplementalTaxRegistration">DeleteSupplementalTaxRegistration</a></code> | <code>string</code> | [Write] tax:DeleteSupplementalTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.DeleteTaxRegistration">DeleteTaxRegistration</a></code> | <code>string</code> | [Write] tax:DeleteTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.ListDocuments">ListDocuments</a></code> | <code>string</code> | [Read] tax:ListDocuments. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.ListSupplementalTaxRegistrations">ListSupplementalTaxRegistrations</a></code> | <code>string</code> | [Read] tax:ListSupplementalTaxRegistrations. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.ListTaxRegistrations">ListTaxRegistrations</a></code> | <code>string</code> | [Read] tax:ListTaxRegistrations. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.ListWithholdingEligibleInvoices">ListWithholdingEligibleInvoices</a></code> | <code>string</code> | [Read] tax:ListWithholdingEligibleInvoices. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.PutSupplementalTaxRegistration">PutSupplementalTaxRegistration</a></code> | <code>string</code> | [Write] tax:PutSupplementalTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.PutTaxInheritance">PutTaxInheritance</a></code> | <code>string</code> | [Write] tax:PutTaxInheritance. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.PutTaxInterview">PutTaxInterview</a></code> | <code>string</code> | [Write] tax:PutTaxInterview. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.PutTaxRegistration">PutTaxRegistration</a></code> | <code>string</code> | [Write] tax:PutTaxRegistration. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.tax.TaxActions.property.UpdateExemptions">UpdateExemptions</a></code> | <code>string</code> | [Write] tax:UpdateExemptions. |

---

##### `actionGetDocument`<sup>Required</sup> <a name="actionGetDocument" id="@cdk_utils/iam.tax.TaxActions.property.actionGetDocument"></a>

```typescript
public readonly actionGetDocument: string;
```

- *Type:* string

[Read] tax:GetDocument.

---

##### `actionGetDocumentUploadUrl`<sup>Required</sup> <a name="actionGetDocumentUploadUrl" id="@cdk_utils/iam.tax.TaxActions.property.actionGetDocumentUploadUrl"></a>

```typescript
public readonly actionGetDocumentUploadUrl: string;
```

- *Type:* string

[Read] tax:GetDocumentUploadUrl.

---

##### `actionGetExemptions`<sup>Required</sup> <a name="actionGetExemptions" id="@cdk_utils/iam.tax.TaxActions.property.actionGetExemptions"></a>

```typescript
public readonly actionGetExemptions: string;
```

- *Type:* string

[Read] tax:GetExemptions.

---

##### `actionGetTaxInfoReportingDocument`<sup>Required</sup> <a name="actionGetTaxInfoReportingDocument" id="@cdk_utils/iam.tax.TaxActions.property.actionGetTaxInfoReportingDocument"></a>

```typescript
public readonly actionGetTaxInfoReportingDocument: string;
```

- *Type:* string

[Read] tax:GetTaxInfoReportingDocument.

---

##### `actionGetTaxInheritance`<sup>Required</sup> <a name="actionGetTaxInheritance" id="@cdk_utils/iam.tax.TaxActions.property.actionGetTaxInheritance"></a>

```typescript
public readonly actionGetTaxInheritance: string;
```

- *Type:* string

[Read] tax:GetTaxInheritance.

---

##### `actionGetTaxInterview`<sup>Required</sup> <a name="actionGetTaxInterview" id="@cdk_utils/iam.tax.TaxActions.property.actionGetTaxInterview"></a>

```typescript
public readonly actionGetTaxInterview: string;
```

- *Type:* string

[Read] tax:GetTaxInterview.

---

##### `actionGetTaxRegistration`<sup>Required</sup> <a name="actionGetTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.actionGetTaxRegistration"></a>

```typescript
public readonly actionGetTaxRegistration: string;
```

- *Type:* string

[Read] tax:GetTaxRegistration.

---

##### `actionGetTaxRegistrationDocument`<sup>Required</sup> <a name="actionGetTaxRegistrationDocument" id="@cdk_utils/iam.tax.TaxActions.property.actionGetTaxRegistrationDocument"></a>

```typescript
public readonly actionGetTaxRegistrationDocument: string;
```

- *Type:* string

[Read] tax:GetTaxRegistrationDocument.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.tax.TaxActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.tax.TaxActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.tax.TaxActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.tax.TaxActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.tax.TaxActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchDeleteTaxRegistration`<sup>Required</sup> <a name="BatchDeleteTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.BatchDeleteTaxRegistration"></a>

```typescript
public readonly BatchDeleteTaxRegistration: string;
```

- *Type:* string

[Write] tax:BatchDeleteTaxRegistration.

---

##### `BatchPutTaxRegistration`<sup>Required</sup> <a name="BatchPutTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.BatchPutTaxRegistration"></a>

```typescript
public readonly BatchPutTaxRegistration: string;
```

- *Type:* string

[Write] tax:BatchPutTaxRegistration.

---

##### `CancelDocument`<sup>Required</sup> <a name="CancelDocument" id="@cdk_utils/iam.tax.TaxActions.property.CancelDocument"></a>

```typescript
public readonly CancelDocument: string;
```

- *Type:* string

[Write] tax:CancelDocument.

---

##### `CreateDocument`<sup>Required</sup> <a name="CreateDocument" id="@cdk_utils/iam.tax.TaxActions.property.CreateDocument"></a>

```typescript
public readonly CreateDocument: string;
```

- *Type:* string

[Write] tax:CreateDocument.

---

##### `DeleteSupplementalTaxRegistration`<sup>Required</sup> <a name="DeleteSupplementalTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.DeleteSupplementalTaxRegistration"></a>

```typescript
public readonly DeleteSupplementalTaxRegistration: string;
```

- *Type:* string

[Write] tax:DeleteSupplementalTaxRegistration.

---

##### `DeleteTaxRegistration`<sup>Required</sup> <a name="DeleteTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.DeleteTaxRegistration"></a>

```typescript
public readonly DeleteTaxRegistration: string;
```

- *Type:* string

[Write] tax:DeleteTaxRegistration.

---

##### `ListDocuments`<sup>Required</sup> <a name="ListDocuments" id="@cdk_utils/iam.tax.TaxActions.property.ListDocuments"></a>

```typescript
public readonly ListDocuments: string;
```

- *Type:* string

[Read] tax:ListDocuments.

---

##### `ListSupplementalTaxRegistrations`<sup>Required</sup> <a name="ListSupplementalTaxRegistrations" id="@cdk_utils/iam.tax.TaxActions.property.ListSupplementalTaxRegistrations"></a>

```typescript
public readonly ListSupplementalTaxRegistrations: string;
```

- *Type:* string

[Read] tax:ListSupplementalTaxRegistrations.

---

##### `ListTaxRegistrations`<sup>Required</sup> <a name="ListTaxRegistrations" id="@cdk_utils/iam.tax.TaxActions.property.ListTaxRegistrations"></a>

```typescript
public readonly ListTaxRegistrations: string;
```

- *Type:* string

[Read] tax:ListTaxRegistrations.

---

##### `ListWithholdingEligibleInvoices`<sup>Required</sup> <a name="ListWithholdingEligibleInvoices" id="@cdk_utils/iam.tax.TaxActions.property.ListWithholdingEligibleInvoices"></a>

```typescript
public readonly ListWithholdingEligibleInvoices: string;
```

- *Type:* string

[Read] tax:ListWithholdingEligibleInvoices.

---

##### `PutSupplementalTaxRegistration`<sup>Required</sup> <a name="PutSupplementalTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.PutSupplementalTaxRegistration"></a>

```typescript
public readonly PutSupplementalTaxRegistration: string;
```

- *Type:* string

[Write] tax:PutSupplementalTaxRegistration.

---

##### `PutTaxInheritance`<sup>Required</sup> <a name="PutTaxInheritance" id="@cdk_utils/iam.tax.TaxActions.property.PutTaxInheritance"></a>

```typescript
public readonly PutTaxInheritance: string;
```

- *Type:* string

[Write] tax:PutTaxInheritance.

---

##### `PutTaxInterview`<sup>Required</sup> <a name="PutTaxInterview" id="@cdk_utils/iam.tax.TaxActions.property.PutTaxInterview"></a>

```typescript
public readonly PutTaxInterview: string;
```

- *Type:* string

[Write] tax:PutTaxInterview.

---

##### `PutTaxRegistration`<sup>Required</sup> <a name="PutTaxRegistration" id="@cdk_utils/iam.tax.TaxActions.property.PutTaxRegistration"></a>

```typescript
public readonly PutTaxRegistration: string;
```

- *Type:* string

[Write] tax:PutTaxRegistration.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.tax.TaxActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `UpdateExemptions`<sup>Required</sup> <a name="UpdateExemptions" id="@cdk_utils/iam.tax.TaxActions.property.UpdateExemptions"></a>

```typescript
public readonly UpdateExemptions: string;
```

- *Type:* string

[Write] tax:UpdateExemptions.

---

### TaxOperations <a name="TaxOperations" id="@cdk_utils/iam.tax.TaxOperations"></a>

API operation to required IAM actions mapping for tax.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.tax.TaxOperations.Initializer"></a>

```typescript
import { tax } from '@cdk_utils/iam'

new tax.TaxOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.BatchDeleteTaxRegistration">BatchDeleteTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the BatchDeleteTaxRegistration API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.BatchGetTaxExemptions">BatchGetTaxExemptions</a></code> | <code>string[]</code> | IAM actions required for the BatchGetTaxExemptions API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.BatchPutTaxRegistration">BatchPutTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the BatchPutTaxRegistration API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.DeleteSupplementalTaxRegistration">DeleteSupplementalTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSupplementalTaxRegistration API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.DeleteTaxRegistration">DeleteTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the DeleteTaxRegistration API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.ListSupplementalTaxRegistrations">ListSupplementalTaxRegistrations</a></code> | <code>string[]</code> | IAM actions required for the ListSupplementalTaxRegistrations API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.ListTaxExemptions">ListTaxExemptions</a></code> | <code>string[]</code> | IAM actions required for the ListTaxExemptions API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.ListTaxRegistrations">ListTaxRegistrations</a></code> | <code>string[]</code> | IAM actions required for the ListTaxRegistrations API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.opGetTaxExemptionTypes">opGetTaxExemptionTypes</a></code> | <code>string[]</code> | IAM actions required for the GetTaxExemptionTypes API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.opGetTaxInheritance">opGetTaxInheritance</a></code> | <code>string[]</code> | IAM actions required for the GetTaxInheritance API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.opGetTaxRegistration">opGetTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the GetTaxRegistration API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.opGetTaxRegistrationDocument">opGetTaxRegistrationDocument</a></code> | <code>string[]</code> | IAM actions required for the GetTaxRegistrationDocument API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.PutSupplementalTaxRegistration">PutSupplementalTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the PutSupplementalTaxRegistration API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.PutTaxExemption">PutTaxExemption</a></code> | <code>string[]</code> | IAM actions required for the PutTaxExemption API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.PutTaxInheritance">PutTaxInheritance</a></code> | <code>string[]</code> | IAM actions required for the PutTaxInheritance API call. |
| <code><a href="#@cdk_utils/iam.tax.TaxOperations.property.PutTaxRegistration">PutTaxRegistration</a></code> | <code>string[]</code> | IAM actions required for the PutTaxRegistration API call. |

---

##### `BatchDeleteTaxRegistration`<sup>Required</sup> <a name="BatchDeleteTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.BatchDeleteTaxRegistration"></a>

```typescript
public readonly BatchDeleteTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the BatchDeleteTaxRegistration API call.

---

##### `BatchGetTaxExemptions`<sup>Required</sup> <a name="BatchGetTaxExemptions" id="@cdk_utils/iam.tax.TaxOperations.property.BatchGetTaxExemptions"></a>

```typescript
public readonly BatchGetTaxExemptions: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetTaxExemptions API call.

---

##### `BatchPutTaxRegistration`<sup>Required</sup> <a name="BatchPutTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.BatchPutTaxRegistration"></a>

```typescript
public readonly BatchPutTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the BatchPutTaxRegistration API call.

---

##### `DeleteSupplementalTaxRegistration`<sup>Required</sup> <a name="DeleteSupplementalTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.DeleteSupplementalTaxRegistration"></a>

```typescript
public readonly DeleteSupplementalTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSupplementalTaxRegistration API call.

---

##### `DeleteTaxRegistration`<sup>Required</sup> <a name="DeleteTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.DeleteTaxRegistration"></a>

```typescript
public readonly DeleteTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTaxRegistration API call.

---

##### `ListSupplementalTaxRegistrations`<sup>Required</sup> <a name="ListSupplementalTaxRegistrations" id="@cdk_utils/iam.tax.TaxOperations.property.ListSupplementalTaxRegistrations"></a>

```typescript
public readonly ListSupplementalTaxRegistrations: string[];
```

- *Type:* string[]

IAM actions required for the ListSupplementalTaxRegistrations API call.

---

##### `ListTaxExemptions`<sup>Required</sup> <a name="ListTaxExemptions" id="@cdk_utils/iam.tax.TaxOperations.property.ListTaxExemptions"></a>

```typescript
public readonly ListTaxExemptions: string[];
```

- *Type:* string[]

IAM actions required for the ListTaxExemptions API call.

---

##### `ListTaxRegistrations`<sup>Required</sup> <a name="ListTaxRegistrations" id="@cdk_utils/iam.tax.TaxOperations.property.ListTaxRegistrations"></a>

```typescript
public readonly ListTaxRegistrations: string[];
```

- *Type:* string[]

IAM actions required for the ListTaxRegistrations API call.

---

##### `opGetTaxExemptionTypes`<sup>Required</sup> <a name="opGetTaxExemptionTypes" id="@cdk_utils/iam.tax.TaxOperations.property.opGetTaxExemptionTypes"></a>

```typescript
public readonly opGetTaxExemptionTypes: string[];
```

- *Type:* string[]

IAM actions required for the GetTaxExemptionTypes API call.

---

##### `opGetTaxInheritance`<sup>Required</sup> <a name="opGetTaxInheritance" id="@cdk_utils/iam.tax.TaxOperations.property.opGetTaxInheritance"></a>

```typescript
public readonly opGetTaxInheritance: string[];
```

- *Type:* string[]

IAM actions required for the GetTaxInheritance API call.

---

##### `opGetTaxRegistration`<sup>Required</sup> <a name="opGetTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.opGetTaxRegistration"></a>

```typescript
public readonly opGetTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the GetTaxRegistration API call.

---

##### `opGetTaxRegistrationDocument`<sup>Required</sup> <a name="opGetTaxRegistrationDocument" id="@cdk_utils/iam.tax.TaxOperations.property.opGetTaxRegistrationDocument"></a>

```typescript
public readonly opGetTaxRegistrationDocument: string[];
```

- *Type:* string[]

IAM actions required for the GetTaxRegistrationDocument API call.

---

##### `PutSupplementalTaxRegistration`<sup>Required</sup> <a name="PutSupplementalTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.PutSupplementalTaxRegistration"></a>

```typescript
public readonly PutSupplementalTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the PutSupplementalTaxRegistration API call.

---

##### `PutTaxExemption`<sup>Required</sup> <a name="PutTaxExemption" id="@cdk_utils/iam.tax.TaxOperations.property.PutTaxExemption"></a>

```typescript
public readonly PutTaxExemption: string[];
```

- *Type:* string[]

IAM actions required for the PutTaxExemption API call.

---

##### `PutTaxInheritance`<sup>Required</sup> <a name="PutTaxInheritance" id="@cdk_utils/iam.tax.TaxOperations.property.PutTaxInheritance"></a>

```typescript
public readonly PutTaxInheritance: string[];
```

- *Type:* string[]

IAM actions required for the PutTaxInheritance API call.

---

##### `PutTaxRegistration`<sup>Required</sup> <a name="PutTaxRegistration" id="@cdk_utils/iam.tax.TaxOperations.property.PutTaxRegistration"></a>

```typescript
public readonly PutTaxRegistration: string[];
```

- *Type:* string[]

IAM actions required for the PutTaxRegistration API call.

---


