# `textract` Submodule <a name="`textract` Submodule" id="@cdk_utils/iam.textract"></a>


## Structs <a name="Structs" id="Structs"></a>

### TextractAdapterArnComponents <a name="TextractAdapterArnComponents" id="@cdk_utils/iam.textract.TextractAdapterArnComponents"></a>

Parsed components of a adapter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.textract.TextractAdapterArnComponents.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

const textractAdapterArnComponents: textract.TextractAdapterArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnComponents.property.adapterId">adapterId</a></code> | <code>string</code> | The AdapterId component. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.textract.TextractAdapterArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `adapterId`<sup>Required</sup> <a name="adapterId" id="@cdk_utils/iam.textract.TextractAdapterArnComponents.property.adapterId"></a>

```typescript
public readonly adapterId: string;
```

- *Type:* string

The AdapterId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.textract.TextractAdapterArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.textract.TextractAdapterArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TextractAdapterArnProps <a name="TextractAdapterArnProps" id="@cdk_utils/iam.textract.TextractAdapterArnProps"></a>

Properties for building a adapter ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.textract.TextractAdapterArnProps.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

const textractAdapterArnProps: textract.TextractAdapterArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnProps.property.adapterId">adapterId</a></code> | <code>string</code> | The AdapterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `adapterId`<sup>Required</sup> <a name="adapterId" id="@cdk_utils/iam.textract.TextractAdapterArnProps.property.adapterId"></a>

```typescript
public readonly adapterId: string;
```

- *Type:* string

The AdapterId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.textract.TextractAdapterArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.textract.TextractAdapterArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.textract.TextractAdapterArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TextractAdapterversionArnComponents <a name="TextractAdapterversionArnComponents" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents"></a>

Parsed components of a adapterversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

const textractAdapterversionArnComponents: textract.TextractAdapterversionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.adapterId">adapterId</a></code> | <code>string</code> | The AdapterId component. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.adapterVersion">adapterVersion</a></code> | <code>string</code> | The AdapterVersion component. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `adapterId`<sup>Required</sup> <a name="adapterId" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.adapterId"></a>

```typescript
public readonly adapterId: string;
```

- *Type:* string

The AdapterId component.

---

##### `adapterVersion`<sup>Required</sup> <a name="adapterVersion" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.adapterVersion"></a>

```typescript
public readonly adapterVersion: string;
```

- *Type:* string

The AdapterVersion component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.textract.TextractAdapterversionArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### TextractAdapterversionArnProps <a name="TextractAdapterversionArnProps" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps"></a>

Properties for building a adapterversion ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

const textractAdapterversionArnProps: textract.TextractAdapterversionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.adapterId">adapterId</a></code> | <code>string</code> | The AdapterId component of the ARN. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.adapterVersion">adapterVersion</a></code> | <code>string</code> | The AdapterVersion component of the ARN. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `adapterId`<sup>Required</sup> <a name="adapterId" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.adapterId"></a>

```typescript
public readonly adapterId: string;
```

- *Type:* string

The AdapterId component of the ARN.

---

##### `adapterVersion`<sup>Required</sup> <a name="adapterVersion" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.adapterVersion"></a>

```typescript
public readonly adapterVersion: string;
```

- *Type:* string

The AdapterVersion component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.textract.TextractAdapterversionArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TextractActions <a name="TextractActions" id="@cdk_utils/iam.textract.TextractActions"></a>

IAM action constants for the textract service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.textract.TextractActions.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

new textract.TextractActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetAdapter">actionGetAdapter</a></code> | <code>string</code> | [Read] textract:GetAdapter. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetAdapterVersion">actionGetAdapterVersion</a></code> | <code>string</code> | [Read] textract:GetAdapterVersion. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetDocumentAnalysis">actionGetDocumentAnalysis</a></code> | <code>string</code> | [Read] textract:GetDocumentAnalysis. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetDocumentTextDetection">actionGetDocumentTextDetection</a></code> | <code>string</code> | [Read] textract:GetDocumentTextDetection. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetExpenseAnalysis">actionGetExpenseAnalysis</a></code> | <code>string</code> | [Read] textract:GetExpenseAnalysis. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetLendingAnalysis">actionGetLendingAnalysis</a></code> | <code>string</code> | [Read] textract:GetLendingAnalysis. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.actionGetLendingAnalysisSummary">actionGetLendingAnalysisSummary</a></code> | <code>string</code> | [Read] textract:GetLendingAnalysisSummary. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AnalyzeDocument">AnalyzeDocument</a></code> | <code>string</code> | [Read] textract:AnalyzeDocument. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AnalyzeExpense">AnalyzeExpense</a></code> | <code>string</code> | [Read] textract:AnalyzeExpense. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.AnalyzeID">AnalyzeID</a></code> | <code>string</code> | [Read] textract:AnalyzeID. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.CreateAdapter">CreateAdapter</a></code> | <code>string</code> | [Write] textract:CreateAdapter. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.CreateAdapterVersion">CreateAdapterVersion</a></code> | <code>string</code> | [Write] textract:CreateAdapterVersion. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.DeleteAdapter">DeleteAdapter</a></code> | <code>string</code> | [Write] textract:DeleteAdapter. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.DeleteAdapterVersion">DeleteAdapterVersion</a></code> | <code>string</code> | [Write] textract:DeleteAdapterVersion. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.DetectDocumentText">DetectDocumentText</a></code> | <code>string</code> | [Read] textract:DetectDocumentText. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.ListAdapters">ListAdapters</a></code> | <code>string</code> | [Read] textract:ListAdapters. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.ListAdapterVersions">ListAdapterVersions</a></code> | <code>string</code> | [Read] textract:ListAdapterVersions. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] textract:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.StartDocumentAnalysis">StartDocumentAnalysis</a></code> | <code>string</code> | [Write] textract:StartDocumentAnalysis. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.StartDocumentTextDetection">StartDocumentTextDetection</a></code> | <code>string</code> | [Write] textract:StartDocumentTextDetection. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.StartExpenseAnalysis">StartExpenseAnalysis</a></code> | <code>string</code> | [Write] textract:StartExpenseAnalysis. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.StartLendingAnalysis">StartLendingAnalysis</a></code> | <code>string</code> | [Write] textract:StartLendingAnalysis. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] textract:TagResource. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] textract:UntagResource. |
| <code><a href="#@cdk_utils/iam.textract.TextractActions.property.UpdateAdapter">UpdateAdapter</a></code> | <code>string</code> | [Write] textract:UpdateAdapter. |

---

##### `actionGetAdapter`<sup>Required</sup> <a name="actionGetAdapter" id="@cdk_utils/iam.textract.TextractActions.property.actionGetAdapter"></a>

```typescript
public readonly actionGetAdapter: string;
```

- *Type:* string

[Read] textract:GetAdapter.

---

##### `actionGetAdapterVersion`<sup>Required</sup> <a name="actionGetAdapterVersion" id="@cdk_utils/iam.textract.TextractActions.property.actionGetAdapterVersion"></a>

```typescript
public readonly actionGetAdapterVersion: string;
```

- *Type:* string

[Read] textract:GetAdapterVersion.

---

##### `actionGetDocumentAnalysis`<sup>Required</sup> <a name="actionGetDocumentAnalysis" id="@cdk_utils/iam.textract.TextractActions.property.actionGetDocumentAnalysis"></a>

```typescript
public readonly actionGetDocumentAnalysis: string;
```

- *Type:* string

[Read] textract:GetDocumentAnalysis.

---

##### `actionGetDocumentTextDetection`<sup>Required</sup> <a name="actionGetDocumentTextDetection" id="@cdk_utils/iam.textract.TextractActions.property.actionGetDocumentTextDetection"></a>

```typescript
public readonly actionGetDocumentTextDetection: string;
```

- *Type:* string

[Read] textract:GetDocumentTextDetection.

---

##### `actionGetExpenseAnalysis`<sup>Required</sup> <a name="actionGetExpenseAnalysis" id="@cdk_utils/iam.textract.TextractActions.property.actionGetExpenseAnalysis"></a>

```typescript
public readonly actionGetExpenseAnalysis: string;
```

- *Type:* string

[Read] textract:GetExpenseAnalysis.

---

##### `actionGetLendingAnalysis`<sup>Required</sup> <a name="actionGetLendingAnalysis" id="@cdk_utils/iam.textract.TextractActions.property.actionGetLendingAnalysis"></a>

```typescript
public readonly actionGetLendingAnalysis: string;
```

- *Type:* string

[Read] textract:GetLendingAnalysis.

---

##### `actionGetLendingAnalysisSummary`<sup>Required</sup> <a name="actionGetLendingAnalysisSummary" id="@cdk_utils/iam.textract.TextractActions.property.actionGetLendingAnalysisSummary"></a>

```typescript
public readonly actionGetLendingAnalysisSummary: string;
```

- *Type:* string

[Read] textract:GetLendingAnalysisSummary.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.textract.TextractActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.textract.TextractActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.textract.TextractActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.textract.TextractActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.textract.TextractActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AnalyzeDocument`<sup>Required</sup> <a name="AnalyzeDocument" id="@cdk_utils/iam.textract.TextractActions.property.AnalyzeDocument"></a>

```typescript
public readonly AnalyzeDocument: string;
```

- *Type:* string

[Read] textract:AnalyzeDocument.

---

##### `AnalyzeExpense`<sup>Required</sup> <a name="AnalyzeExpense" id="@cdk_utils/iam.textract.TextractActions.property.AnalyzeExpense"></a>

```typescript
public readonly AnalyzeExpense: string;
```

- *Type:* string

[Read] textract:AnalyzeExpense.

---

##### `AnalyzeID`<sup>Required</sup> <a name="AnalyzeID" id="@cdk_utils/iam.textract.TextractActions.property.AnalyzeID"></a>

```typescript
public readonly AnalyzeID: string;
```

- *Type:* string

[Read] textract:AnalyzeID.

---

##### `CreateAdapter`<sup>Required</sup> <a name="CreateAdapter" id="@cdk_utils/iam.textract.TextractActions.property.CreateAdapter"></a>

```typescript
public readonly CreateAdapter: string;
```

- *Type:* string

[Write] textract:CreateAdapter.

---

##### `CreateAdapterVersion`<sup>Required</sup> <a name="CreateAdapterVersion" id="@cdk_utils/iam.textract.TextractActions.property.CreateAdapterVersion"></a>

```typescript
public readonly CreateAdapterVersion: string;
```

- *Type:* string

[Write] textract:CreateAdapterVersion.

---

##### `DeleteAdapter`<sup>Required</sup> <a name="DeleteAdapter" id="@cdk_utils/iam.textract.TextractActions.property.DeleteAdapter"></a>

```typescript
public readonly DeleteAdapter: string;
```

- *Type:* string

[Write] textract:DeleteAdapter.

---

##### `DeleteAdapterVersion`<sup>Required</sup> <a name="DeleteAdapterVersion" id="@cdk_utils/iam.textract.TextractActions.property.DeleteAdapterVersion"></a>

```typescript
public readonly DeleteAdapterVersion: string;
```

- *Type:* string

[Write] textract:DeleteAdapterVersion.

---

##### `DetectDocumentText`<sup>Required</sup> <a name="DetectDocumentText" id="@cdk_utils/iam.textract.TextractActions.property.DetectDocumentText"></a>

```typescript
public readonly DetectDocumentText: string;
```

- *Type:* string

[Read] textract:DetectDocumentText.

---

##### `ListAdapters`<sup>Required</sup> <a name="ListAdapters" id="@cdk_utils/iam.textract.TextractActions.property.ListAdapters"></a>

```typescript
public readonly ListAdapters: string;
```

- *Type:* string

[Read] textract:ListAdapters.

---

##### `ListAdapterVersions`<sup>Required</sup> <a name="ListAdapterVersions" id="@cdk_utils/iam.textract.TextractActions.property.ListAdapterVersions"></a>

```typescript
public readonly ListAdapterVersions: string;
```

- *Type:* string

[Read] textract:ListAdapterVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.textract.TextractActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] textract:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.textract.TextractActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartDocumentAnalysis`<sup>Required</sup> <a name="StartDocumentAnalysis" id="@cdk_utils/iam.textract.TextractActions.property.StartDocumentAnalysis"></a>

```typescript
public readonly StartDocumentAnalysis: string;
```

- *Type:* string

[Write] textract:StartDocumentAnalysis.

---

##### `StartDocumentTextDetection`<sup>Required</sup> <a name="StartDocumentTextDetection" id="@cdk_utils/iam.textract.TextractActions.property.StartDocumentTextDetection"></a>

```typescript
public readonly StartDocumentTextDetection: string;
```

- *Type:* string

[Write] textract:StartDocumentTextDetection.

---

##### `StartExpenseAnalysis`<sup>Required</sup> <a name="StartExpenseAnalysis" id="@cdk_utils/iam.textract.TextractActions.property.StartExpenseAnalysis"></a>

```typescript
public readonly StartExpenseAnalysis: string;
```

- *Type:* string

[Write] textract:StartExpenseAnalysis.

---

##### `StartLendingAnalysis`<sup>Required</sup> <a name="StartLendingAnalysis" id="@cdk_utils/iam.textract.TextractActions.property.StartLendingAnalysis"></a>

```typescript
public readonly StartLendingAnalysis: string;
```

- *Type:* string

[Write] textract:StartLendingAnalysis.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.textract.TextractActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] textract:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.textract.TextractActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] textract:UntagResource.

---

##### `UpdateAdapter`<sup>Required</sup> <a name="UpdateAdapter" id="@cdk_utils/iam.textract.TextractActions.property.UpdateAdapter"></a>

```typescript
public readonly UpdateAdapter: string;
```

- *Type:* string

[Write] textract:UpdateAdapter.

---

### TextractConditions <a name="TextractConditions" id="@cdk_utils/iam.textract.TextractConditions"></a>

Condition key constants and builders for textract.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.textract.TextractConditions.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

new textract.TextractConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.textract.TextractConditions.requestTag"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.textract.TextractConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.textract.TextractConditions.resourceTag"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.textract.TextractConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.textract.TextractConditions.tagKeys"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.textract.TextractConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.CreateAdapterConditionKeys">CreateAdapterConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAdapter action. |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.CreateAdapterVersionConditionKeys">CreateAdapterVersionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateAdapterVersion action. |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.textract.TextractConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.textract.TextractConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.textract.TextractConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.textract.TextractConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateAdapterConditionKeys`<sup>Required</sup> <a name="CreateAdapterConditionKeys" id="@cdk_utils/iam.textract.TextractConditions.property.CreateAdapterConditionKeys"></a>

```typescript
public readonly CreateAdapterConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAdapter action.

---

##### `CreateAdapterVersionConditionKeys`<sup>Required</sup> <a name="CreateAdapterVersionConditionKeys" id="@cdk_utils/iam.textract.TextractConditions.property.CreateAdapterVersionConditionKeys"></a>

```typescript
public readonly CreateAdapterVersionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateAdapterVersion action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.textract.TextractConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.textract.TextractConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TextractOperations <a name="TextractOperations" id="@cdk_utils/iam.textract.TextractOperations"></a>

API operation to required IAM actions mapping for textract.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.textract.TextractOperations.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

new textract.TextractOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.AnalyzeDocument">AnalyzeDocument</a></code> | <code>string[]</code> | IAM actions required for the AnalyzeDocument API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.AnalyzeExpense">AnalyzeExpense</a></code> | <code>string[]</code> | IAM actions required for the AnalyzeExpense API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.AnalyzeID">AnalyzeID</a></code> | <code>string[]</code> | IAM actions required for the AnalyzeID API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.CreateAdapter">CreateAdapter</a></code> | <code>string[]</code> | IAM actions required for the CreateAdapter API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.CreateAdapterVersion">CreateAdapterVersion</a></code> | <code>string[]</code> | IAM actions required for the CreateAdapterVersion API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.DeleteAdapter">DeleteAdapter</a></code> | <code>string[]</code> | IAM actions required for the DeleteAdapter API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.DeleteAdapterVersion">DeleteAdapterVersion</a></code> | <code>string[]</code> | IAM actions required for the DeleteAdapterVersion API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.DetectDocumentText">DetectDocumentText</a></code> | <code>string[]</code> | IAM actions required for the DetectDocumentText API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.ListAdapters">ListAdapters</a></code> | <code>string[]</code> | IAM actions required for the ListAdapters API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.ListAdapterVersions">ListAdapterVersions</a></code> | <code>string[]</code> | IAM actions required for the ListAdapterVersions API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetAdapter">opGetAdapter</a></code> | <code>string[]</code> | IAM actions required for the GetAdapter API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetAdapterVersion">opGetAdapterVersion</a></code> | <code>string[]</code> | IAM actions required for the GetAdapterVersion API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetDocumentAnalysis">opGetDocumentAnalysis</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentAnalysis API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetDocumentTextDetection">opGetDocumentTextDetection</a></code> | <code>string[]</code> | IAM actions required for the GetDocumentTextDetection API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetExpenseAnalysis">opGetExpenseAnalysis</a></code> | <code>string[]</code> | IAM actions required for the GetExpenseAnalysis API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetLendingAnalysis">opGetLendingAnalysis</a></code> | <code>string[]</code> | IAM actions required for the GetLendingAnalysis API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.opGetLendingAnalysisSummary">opGetLendingAnalysisSummary</a></code> | <code>string[]</code> | IAM actions required for the GetLendingAnalysisSummary API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.StartDocumentAnalysis">StartDocumentAnalysis</a></code> | <code>string[]</code> | IAM actions required for the StartDocumentAnalysis API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.StartDocumentTextDetection">StartDocumentTextDetection</a></code> | <code>string[]</code> | IAM actions required for the StartDocumentTextDetection API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.StartExpenseAnalysis">StartExpenseAnalysis</a></code> | <code>string[]</code> | IAM actions required for the StartExpenseAnalysis API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.StartLendingAnalysis">StartLendingAnalysis</a></code> | <code>string[]</code> | IAM actions required for the StartLendingAnalysis API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.textract.TextractOperations.property.UpdateAdapter">UpdateAdapter</a></code> | <code>string[]</code> | IAM actions required for the UpdateAdapter API call. |

---

##### `AnalyzeDocument`<sup>Required</sup> <a name="AnalyzeDocument" id="@cdk_utils/iam.textract.TextractOperations.property.AnalyzeDocument"></a>

```typescript
public readonly AnalyzeDocument: string[];
```

- *Type:* string[]

IAM actions required for the AnalyzeDocument API call.

---

##### `AnalyzeExpense`<sup>Required</sup> <a name="AnalyzeExpense" id="@cdk_utils/iam.textract.TextractOperations.property.AnalyzeExpense"></a>

```typescript
public readonly AnalyzeExpense: string[];
```

- *Type:* string[]

IAM actions required for the AnalyzeExpense API call.

---

##### `AnalyzeID`<sup>Required</sup> <a name="AnalyzeID" id="@cdk_utils/iam.textract.TextractOperations.property.AnalyzeID"></a>

```typescript
public readonly AnalyzeID: string[];
```

- *Type:* string[]

IAM actions required for the AnalyzeID API call.

---

##### `CreateAdapter`<sup>Required</sup> <a name="CreateAdapter" id="@cdk_utils/iam.textract.TextractOperations.property.CreateAdapter"></a>

```typescript
public readonly CreateAdapter: string[];
```

- *Type:* string[]

IAM actions required for the CreateAdapter API call.

---

##### `CreateAdapterVersion`<sup>Required</sup> <a name="CreateAdapterVersion" id="@cdk_utils/iam.textract.TextractOperations.property.CreateAdapterVersion"></a>

```typescript
public readonly CreateAdapterVersion: string[];
```

- *Type:* string[]

IAM actions required for the CreateAdapterVersion API call.

---

##### `DeleteAdapter`<sup>Required</sup> <a name="DeleteAdapter" id="@cdk_utils/iam.textract.TextractOperations.property.DeleteAdapter"></a>

```typescript
public readonly DeleteAdapter: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAdapter API call.

---

##### `DeleteAdapterVersion`<sup>Required</sup> <a name="DeleteAdapterVersion" id="@cdk_utils/iam.textract.TextractOperations.property.DeleteAdapterVersion"></a>

```typescript
public readonly DeleteAdapterVersion: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAdapterVersion API call.

---

##### `DetectDocumentText`<sup>Required</sup> <a name="DetectDocumentText" id="@cdk_utils/iam.textract.TextractOperations.property.DetectDocumentText"></a>

```typescript
public readonly DetectDocumentText: string[];
```

- *Type:* string[]

IAM actions required for the DetectDocumentText API call.

---

##### `ListAdapters`<sup>Required</sup> <a name="ListAdapters" id="@cdk_utils/iam.textract.TextractOperations.property.ListAdapters"></a>

```typescript
public readonly ListAdapters: string[];
```

- *Type:* string[]

IAM actions required for the ListAdapters API call.

---

##### `ListAdapterVersions`<sup>Required</sup> <a name="ListAdapterVersions" id="@cdk_utils/iam.textract.TextractOperations.property.ListAdapterVersions"></a>

```typescript
public readonly ListAdapterVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListAdapterVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.textract.TextractOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAdapter`<sup>Required</sup> <a name="opGetAdapter" id="@cdk_utils/iam.textract.TextractOperations.property.opGetAdapter"></a>

```typescript
public readonly opGetAdapter: string[];
```

- *Type:* string[]

IAM actions required for the GetAdapter API call.

---

##### `opGetAdapterVersion`<sup>Required</sup> <a name="opGetAdapterVersion" id="@cdk_utils/iam.textract.TextractOperations.property.opGetAdapterVersion"></a>

```typescript
public readonly opGetAdapterVersion: string[];
```

- *Type:* string[]

IAM actions required for the GetAdapterVersion API call.

---

##### `opGetDocumentAnalysis`<sup>Required</sup> <a name="opGetDocumentAnalysis" id="@cdk_utils/iam.textract.TextractOperations.property.opGetDocumentAnalysis"></a>

```typescript
public readonly opGetDocumentAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentAnalysis API call.

---

##### `opGetDocumentTextDetection`<sup>Required</sup> <a name="opGetDocumentTextDetection" id="@cdk_utils/iam.textract.TextractOperations.property.opGetDocumentTextDetection"></a>

```typescript
public readonly opGetDocumentTextDetection: string[];
```

- *Type:* string[]

IAM actions required for the GetDocumentTextDetection API call.

---

##### `opGetExpenseAnalysis`<sup>Required</sup> <a name="opGetExpenseAnalysis" id="@cdk_utils/iam.textract.TextractOperations.property.opGetExpenseAnalysis"></a>

```typescript
public readonly opGetExpenseAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the GetExpenseAnalysis API call.

---

##### `opGetLendingAnalysis`<sup>Required</sup> <a name="opGetLendingAnalysis" id="@cdk_utils/iam.textract.TextractOperations.property.opGetLendingAnalysis"></a>

```typescript
public readonly opGetLendingAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the GetLendingAnalysis API call.

---

##### `opGetLendingAnalysisSummary`<sup>Required</sup> <a name="opGetLendingAnalysisSummary" id="@cdk_utils/iam.textract.TextractOperations.property.opGetLendingAnalysisSummary"></a>

```typescript
public readonly opGetLendingAnalysisSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetLendingAnalysisSummary API call.

---

##### `StartDocumentAnalysis`<sup>Required</sup> <a name="StartDocumentAnalysis" id="@cdk_utils/iam.textract.TextractOperations.property.StartDocumentAnalysis"></a>

```typescript
public readonly StartDocumentAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the StartDocumentAnalysis API call.

---

##### `StartDocumentTextDetection`<sup>Required</sup> <a name="StartDocumentTextDetection" id="@cdk_utils/iam.textract.TextractOperations.property.StartDocumentTextDetection"></a>

```typescript
public readonly StartDocumentTextDetection: string[];
```

- *Type:* string[]

IAM actions required for the StartDocumentTextDetection API call.

---

##### `StartExpenseAnalysis`<sup>Required</sup> <a name="StartExpenseAnalysis" id="@cdk_utils/iam.textract.TextractOperations.property.StartExpenseAnalysis"></a>

```typescript
public readonly StartExpenseAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the StartExpenseAnalysis API call.

---

##### `StartLendingAnalysis`<sup>Required</sup> <a name="StartLendingAnalysis" id="@cdk_utils/iam.textract.TextractOperations.property.StartLendingAnalysis"></a>

```typescript
public readonly StartLendingAnalysis: string[];
```

- *Type:* string[]

IAM actions required for the StartLendingAnalysis API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.textract.TextractOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.textract.TextractOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAdapter`<sup>Required</sup> <a name="UpdateAdapter" id="@cdk_utils/iam.textract.TextractOperations.property.UpdateAdapter"></a>

```typescript
public readonly UpdateAdapter: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAdapter API call.

---

### TextractResources <a name="TextractResources" id="@cdk_utils/iam.textract.TextractResources"></a>

ARN builders, validators, and parsers for textract resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.textract.TextractResources.Initializer"></a>

```typescript
import { textract } from '@cdk_utils/iam'

new textract.TextractResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.textract.TextractResources.adapter">adapter</a></code> | Builds an ARN for the adapter resource. |
| <code><a href="#@cdk_utils/iam.textract.TextractResources.adapterversion">adapterversion</a></code> | Builds an ARN for the adapterversion resource. |
| <code><a href="#@cdk_utils/iam.textract.TextractResources.isValidAdapterArn">isValidAdapterArn</a></code> | Validates whether a string is a valid ARN for the adapter resource. |
| <code><a href="#@cdk_utils/iam.textract.TextractResources.isValidAdapterversionArn">isValidAdapterversionArn</a></code> | Validates whether a string is a valid ARN for the adapterversion resource. |
| <code><a href="#@cdk_utils/iam.textract.TextractResources.parseAdapterArn">parseAdapterArn</a></code> | Parses a adapter ARN into its components. |
| <code><a href="#@cdk_utils/iam.textract.TextractResources.parseAdapterversionArn">parseAdapterversionArn</a></code> | Parses a adapterversion ARN into its components. |

---

##### `adapter` <a name="adapter" id="@cdk_utils/iam.textract.TextractResources.adapter"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractResources.adapter(props: TextractAdapterArnProps)
```

Builds an ARN for the adapter resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.textract.TextractResources.adapter.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.textract.TextractAdapterArnProps">TextractAdapterArnProps</a>

---

##### `adapterversion` <a name="adapterversion" id="@cdk_utils/iam.textract.TextractResources.adapterversion"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractResources.adapterversion(props: TextractAdapterversionArnProps)
```

Builds an ARN for the adapterversion resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.textract.TextractResources.adapterversion.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.textract.TextractAdapterversionArnProps">TextractAdapterversionArnProps</a>

---

##### `isValidAdapterArn` <a name="isValidAdapterArn" id="@cdk_utils/iam.textract.TextractResources.isValidAdapterArn"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractResources.isValidAdapterArn(arn: string)
```

Validates whether a string is a valid ARN for the adapter resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.textract.TextractResources.isValidAdapterArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAdapterversionArn` <a name="isValidAdapterversionArn" id="@cdk_utils/iam.textract.TextractResources.isValidAdapterversionArn"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractResources.isValidAdapterversionArn(arn: string)
```

Validates whether a string is a valid ARN for the adapterversion resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.textract.TextractResources.isValidAdapterversionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAdapterArn` <a name="parseAdapterArn" id="@cdk_utils/iam.textract.TextractResources.parseAdapterArn"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractResources.parseAdapterArn(arn: string)
```

Parses a adapter ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.textract.TextractResources.parseAdapterArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAdapterversionArn` <a name="parseAdapterversionArn" id="@cdk_utils/iam.textract.TextractResources.parseAdapterversionArn"></a>

```typescript
import { textract } from '@cdk_utils/iam'

textract.TextractResources.parseAdapterversionArn(arn: string)
```

Parses a adapterversion ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.textract.TextractResources.parseAdapterversionArn.parameter.arn"></a>

- *Type:* string

---




