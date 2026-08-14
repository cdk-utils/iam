# `artifact` Submodule <a name="`artifact` Submodule" id="@cdk_utils/iam.artifact"></a>


## Structs <a name="Structs" id="Structs"></a>

### ArtifactAgreementArnComponents <a name="ArtifactAgreementArnComponents" id="@cdk_utils/iam.artifact.ArtifactAgreementArnComponents"></a>

Parsed components of a agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactAgreementArnComponents: artifact.ArtifactAgreementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.artifact.ArtifactAgreementArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ArtifactAgreementArnProps <a name="ArtifactAgreementArnProps" id="@cdk_utils/iam.artifact.ArtifactAgreementArnProps"></a>

Properties for building a agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactAgreementArnProps.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactAgreementArnProps: artifact.ArtifactAgreementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactAgreementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactAgreementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.artifact.ArtifactAgreementArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ArtifactComplianceInquiryArnComponents <a name="ArtifactComplianceInquiryArnComponents" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents"></a>

Parsed components of a compliance-inquiry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactComplianceInquiryArnComponents: artifact.ArtifactComplianceInquiryArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### ArtifactComplianceInquiryArnProps <a name="ArtifactComplianceInquiryArnProps" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps"></a>

Properties for building a compliance-inquiry ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactComplianceInquiryArnProps: artifact.ArtifactComplianceInquiryArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### ArtifactCustomerAgreementArnComponents <a name="ArtifactCustomerAgreementArnComponents" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnComponents"></a>

Parsed components of a customer-agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnComponents.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactCustomerAgreementArnComponents: artifact.ArtifactCustomerAgreementArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ArtifactCustomerAgreementArnProps <a name="ArtifactCustomerAgreementArnProps" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps"></a>

Properties for building a customer-agreement ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactCustomerAgreementArnProps: artifact.ArtifactCustomerAgreementArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### ArtifactReportArnComponents <a name="ArtifactReportArnComponents" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents"></a>

Parsed components of a report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactReportArnComponents: artifact.ArtifactReportArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.version">version</a></code> | <code>string</code> | The Version component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.artifact.ArtifactReportArnComponents.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component.

---

### ArtifactReportArnProps <a name="ArtifactReportArnProps" id="@cdk_utils/iam.artifact.ArtifactReportArnProps"></a>

Properties for building a report ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.artifact.ArtifactReportArnProps.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

const artifactReportArnProps: artifact.ArtifactReportArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnProps.property.reportId">reportId</a></code> | <code>string</code> | The ReportId component of the ARN. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnProps.property.version">version</a></code> | <code>string</code> | The Version component of the ARN. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactReportArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportId`<sup>Required</sup> <a name="reportId" id="@cdk_utils/iam.artifact.ArtifactReportArnProps.property.reportId"></a>

```typescript
public readonly reportId: string;
```

- *Type:* string

The ReportId component of the ARN.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdk_utils/iam.artifact.ArtifactReportArnProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Version component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.artifact.ArtifactReportArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.artifact.ArtifactReportArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.artifact.ArtifactReportArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### ArtifactActions <a name="ArtifactActions" id="@cdk_utils/iam.artifact.ArtifactActions"></a>

IAM action constants for the artifact service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.artifact.ArtifactActions.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

new artifact.ArtifactActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AcceptAgreement">AcceptAgreement</a></code> | <code>string</code> | [Write] artifact:AcceptAgreement. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AcceptNdaForAgreement">AcceptNdaForAgreement</a></code> | <code>string</code> | [Write] artifact:AcceptNdaForAgreement. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetAccountSettings">actionGetAccountSettings</a></code> | <code>string</code> | [Read] artifact:GetAccountSettings. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetAgreement">actionGetAgreement</a></code> | <code>string</code> | [Read] artifact:GetAgreement. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetComplianceInquiryMetadata">actionGetComplianceInquiryMetadata</a></code> | <code>string</code> | [Read] artifact:GetComplianceInquiryMetadata. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetCustomerAgreement">actionGetCustomerAgreement</a></code> | <code>string</code> | [Read] artifact:GetCustomerAgreement. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetNdaForAgreement">actionGetNdaForAgreement</a></code> | <code>string</code> | [Read] artifact:GetNdaForAgreement. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetReport">actionGetReport</a></code> | <code>string</code> | [Read] artifact:GetReport. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetReportMetadata">actionGetReportMetadata</a></code> | <code>string</code> | [Read] artifact:GetReportMetadata. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.actionGetTermForReport">actionGetTermForReport</a></code> | <code>string</code> | [Read] artifact:GetTermForReport. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.CreateComplianceInquiry">CreateComplianceInquiry</a></code> | <code>string</code> | [Write] artifact:CreateComplianceInquiry. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ExportComplianceInquiry">ExportComplianceInquiry</a></code> | <code>string</code> | [Read] artifact:ExportComplianceInquiry. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListAgreements">ListAgreements</a></code> | <code>string</code> | [List] artifact:ListAgreements. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListComplianceInquiries">ListComplianceInquiries</a></code> | <code>string</code> | [List] artifact:ListComplianceInquiries. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListComplianceInquiryQueries">ListComplianceInquiryQueries</a></code> | <code>string</code> | [List] artifact:ListComplianceInquiryQueries. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListCustomerAgreements">ListCustomerAgreements</a></code> | <code>string</code> | [List] artifact:ListCustomerAgreements. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListReports">ListReports</a></code> | <code>string</code> | [List] artifact:ListReports. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListReportVersions">ListReportVersions</a></code> | <code>string</code> | [List] artifact:ListReportVersions. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] artifact:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.PutAccountSettings">PutAccountSettings</a></code> | <code>string</code> | [Write] artifact:PutAccountSettings. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.PutComplianceInquiryFeedback">PutComplianceInquiryFeedback</a></code> | <code>string</code> | [Write] artifact:PutComplianceInquiryFeedback. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] artifact:TagResource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.TerminateAgreement">TerminateAgreement</a></code> | <code>string</code> | [Write] artifact:TerminateAgreement. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] artifact:UntagResource. |

---

##### `AcceptAgreement`<sup>Required</sup> <a name="AcceptAgreement" id="@cdk_utils/iam.artifact.ArtifactActions.property.AcceptAgreement"></a>

```typescript
public readonly AcceptAgreement: string;
```

- *Type:* string

[Write] artifact:AcceptAgreement.

---

##### `AcceptNdaForAgreement`<sup>Required</sup> <a name="AcceptNdaForAgreement" id="@cdk_utils/iam.artifact.ArtifactActions.property.AcceptNdaForAgreement"></a>

```typescript
public readonly AcceptNdaForAgreement: string;
```

- *Type:* string

[Write] artifact:AcceptNdaForAgreement.

---

##### `actionGetAccountSettings`<sup>Required</sup> <a name="actionGetAccountSettings" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetAccountSettings"></a>

```typescript
public readonly actionGetAccountSettings: string;
```

- *Type:* string

[Read] artifact:GetAccountSettings.

---

##### `actionGetAgreement`<sup>Required</sup> <a name="actionGetAgreement" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetAgreement"></a>

```typescript
public readonly actionGetAgreement: string;
```

- *Type:* string

[Read] artifact:GetAgreement.

---

##### `actionGetComplianceInquiryMetadata`<sup>Required</sup> <a name="actionGetComplianceInquiryMetadata" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetComplianceInquiryMetadata"></a>

```typescript
public readonly actionGetComplianceInquiryMetadata: string;
```

- *Type:* string

[Read] artifact:GetComplianceInquiryMetadata.

---

##### `actionGetCustomerAgreement`<sup>Required</sup> <a name="actionGetCustomerAgreement" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetCustomerAgreement"></a>

```typescript
public readonly actionGetCustomerAgreement: string;
```

- *Type:* string

[Read] artifact:GetCustomerAgreement.

---

##### `actionGetNdaForAgreement`<sup>Required</sup> <a name="actionGetNdaForAgreement" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetNdaForAgreement"></a>

```typescript
public readonly actionGetNdaForAgreement: string;
```

- *Type:* string

[Read] artifact:GetNdaForAgreement.

---

##### `actionGetReport`<sup>Required</sup> <a name="actionGetReport" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetReport"></a>

```typescript
public readonly actionGetReport: string;
```

- *Type:* string

[Read] artifact:GetReport.

---

##### `actionGetReportMetadata`<sup>Required</sup> <a name="actionGetReportMetadata" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetReportMetadata"></a>

```typescript
public readonly actionGetReportMetadata: string;
```

- *Type:* string

[Read] artifact:GetReportMetadata.

---

##### `actionGetTermForReport`<sup>Required</sup> <a name="actionGetTermForReport" id="@cdk_utils/iam.artifact.ArtifactActions.property.actionGetTermForReport"></a>

```typescript
public readonly actionGetTermForReport: string;
```

- *Type:* string

[Read] artifact:GetTermForReport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.artifact.ArtifactActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.artifact.ArtifactActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.artifact.ArtifactActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.artifact.ArtifactActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.artifact.ArtifactActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateComplianceInquiry`<sup>Required</sup> <a name="CreateComplianceInquiry" id="@cdk_utils/iam.artifact.ArtifactActions.property.CreateComplianceInquiry"></a>

```typescript
public readonly CreateComplianceInquiry: string;
```

- *Type:* string

[Write] artifact:CreateComplianceInquiry.

---

##### `ExportComplianceInquiry`<sup>Required</sup> <a name="ExportComplianceInquiry" id="@cdk_utils/iam.artifact.ArtifactActions.property.ExportComplianceInquiry"></a>

```typescript
public readonly ExportComplianceInquiry: string;
```

- *Type:* string

[Read] artifact:ExportComplianceInquiry.

---

##### `ListAgreements`<sup>Required</sup> <a name="ListAgreements" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListAgreements"></a>

```typescript
public readonly ListAgreements: string;
```

- *Type:* string

[List] artifact:ListAgreements.

---

##### `ListComplianceInquiries`<sup>Required</sup> <a name="ListComplianceInquiries" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListComplianceInquiries"></a>

```typescript
public readonly ListComplianceInquiries: string;
```

- *Type:* string

[List] artifact:ListComplianceInquiries.

---

##### `ListComplianceInquiryQueries`<sup>Required</sup> <a name="ListComplianceInquiryQueries" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListComplianceInquiryQueries"></a>

```typescript
public readonly ListComplianceInquiryQueries: string;
```

- *Type:* string

[List] artifact:ListComplianceInquiryQueries.

---

##### `ListCustomerAgreements`<sup>Required</sup> <a name="ListCustomerAgreements" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListCustomerAgreements"></a>

```typescript
public readonly ListCustomerAgreements: string;
```

- *Type:* string

[List] artifact:ListCustomerAgreements.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListReports"></a>

```typescript
public readonly ListReports: string;
```

- *Type:* string

[List] artifact:ListReports.

---

##### `ListReportVersions`<sup>Required</sup> <a name="ListReportVersions" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListReportVersions"></a>

```typescript
public readonly ListReportVersions: string;
```

- *Type:* string

[List] artifact:ListReportVersions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.artifact.ArtifactActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] artifact:ListTagsForResource.

---

##### `PutAccountSettings`<sup>Required</sup> <a name="PutAccountSettings" id="@cdk_utils/iam.artifact.ArtifactActions.property.PutAccountSettings"></a>

```typescript
public readonly PutAccountSettings: string;
```

- *Type:* string

[Write] artifact:PutAccountSettings.

---

##### `PutComplianceInquiryFeedback`<sup>Required</sup> <a name="PutComplianceInquiryFeedback" id="@cdk_utils/iam.artifact.ArtifactActions.property.PutComplianceInquiryFeedback"></a>

```typescript
public readonly PutComplianceInquiryFeedback: string;
```

- *Type:* string

[Write] artifact:PutComplianceInquiryFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.artifact.ArtifactActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.artifact.ArtifactActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] artifact:TagResource.

---

##### `TerminateAgreement`<sup>Required</sup> <a name="TerminateAgreement" id="@cdk_utils/iam.artifact.ArtifactActions.property.TerminateAgreement"></a>

```typescript
public readonly TerminateAgreement: string;
```

- *Type:* string

[Write] artifact:TerminateAgreement.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.artifact.ArtifactActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] artifact:UntagResource.

---

### ArtifactConditions <a name="ArtifactConditions" id="@cdk_utils/iam.artifact.ArtifactConditions"></a>

Condition key constants and builders for artifact.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.artifact.ArtifactConditions.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

new artifact.ArtifactConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.reportCategory">reportCategory</a></code> | Generates a condition block for `artifact:ReportCategory`. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.reportSeries">reportSeries</a></code> | Generates a condition block for `artifact:ReportSeries`. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `reportCategory` <a name="reportCategory" id="@cdk_utils/iam.artifact.ArtifactConditions.reportCategory"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactConditions.reportCategory(value: string)
```

Generates a condition block for `artifact:ReportCategory`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.artifact.ArtifactConditions.reportCategory.parameter.value"></a>

- *Type:* string

---

##### `reportSeries` <a name="reportSeries" id="@cdk_utils/iam.artifact.ArtifactConditions.reportSeries"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactConditions.reportSeries(value: string)
```

Generates a condition block for `artifact:ReportSeries`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.artifact.ArtifactConditions.reportSeries.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.artifact.ArtifactConditions.requestTag"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.artifact.ArtifactConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.artifact.ArtifactConditions.resourceTag"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.artifact.ArtifactConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.artifact.ArtifactConditions.tagKeys"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.artifact.ArtifactConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.CreateComplianceInquiryConditionKeys">CreateComplianceInquiryConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateComplianceInquiry action. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.REPORT_CATEGORY">REPORT_CATEGORY</a></code> | <code>string</code> | Condition key: artifact:ReportCategory (String). |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.REPORT_SERIES">REPORT_SERIES</a></code> | <code>string</code> | Condition key: artifact:ReportSeries (String). |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.artifact.ArtifactConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.artifact.ArtifactConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.artifact.ArtifactConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateComplianceInquiryConditionKeys`<sup>Required</sup> <a name="CreateComplianceInquiryConditionKeys" id="@cdk_utils/iam.artifact.ArtifactConditions.property.CreateComplianceInquiryConditionKeys"></a>

```typescript
public readonly CreateComplianceInquiryConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateComplianceInquiry action.

---

##### `REPORT_CATEGORY`<sup>Required</sup> <a name="REPORT_CATEGORY" id="@cdk_utils/iam.artifact.ArtifactConditions.property.REPORT_CATEGORY"></a>

```typescript
public readonly REPORT_CATEGORY: string;
```

- *Type:* string

Condition key: artifact:ReportCategory (String).

---

##### `REPORT_SERIES`<sup>Required</sup> <a name="REPORT_SERIES" id="@cdk_utils/iam.artifact.ArtifactConditions.property.REPORT_SERIES"></a>

```typescript
public readonly REPORT_SERIES: string;
```

- *Type:* string

Condition key: artifact:ReportSeries (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.artifact.ArtifactConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.artifact.ArtifactConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ArtifactOperations <a name="ArtifactOperations" id="@cdk_utils/iam.artifact.ArtifactOperations"></a>

API operation to required IAM actions mapping for artifact.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.artifact.ArtifactOperations.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

new artifact.ArtifactOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.CreateComplianceInquiry">CreateComplianceInquiry</a></code> | <code>string[]</code> | IAM actions required for the CreateComplianceInquiry API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ExportComplianceInquiry">ExportComplianceInquiry</a></code> | <code>string[]</code> | IAM actions required for the ExportComplianceInquiry API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ListComplianceInquiries">ListComplianceInquiries</a></code> | <code>string[]</code> | IAM actions required for the ListComplianceInquiries API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ListComplianceInquiryQueries">ListComplianceInquiryQueries</a></code> | <code>string[]</code> | IAM actions required for the ListComplianceInquiryQueries API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ListCustomerAgreements">ListCustomerAgreements</a></code> | <code>string[]</code> | IAM actions required for the ListCustomerAgreements API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ListReports">ListReports</a></code> | <code>string[]</code> | IAM actions required for the ListReports API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ListReportVersions">ListReportVersions</a></code> | <code>string[]</code> | IAM actions required for the ListReportVersions API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.opGetAccountSettings">opGetAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the GetAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.opGetComplianceInquiryMetadata">opGetComplianceInquiryMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetComplianceInquiryMetadata API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.opGetReport">opGetReport</a></code> | <code>string[]</code> | IAM actions required for the GetReport API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.opGetReportMetadata">opGetReportMetadata</a></code> | <code>string[]</code> | IAM actions required for the GetReportMetadata API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.opGetTermForReport">opGetTermForReport</a></code> | <code>string[]</code> | IAM actions required for the GetTermForReport API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.PutAccountSettings">PutAccountSettings</a></code> | <code>string[]</code> | IAM actions required for the PutAccountSettings API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.PutComplianceInquiryFeedback">PutComplianceInquiryFeedback</a></code> | <code>string[]</code> | IAM actions required for the PutComplianceInquiryFeedback API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateComplianceInquiry`<sup>Required</sup> <a name="CreateComplianceInquiry" id="@cdk_utils/iam.artifact.ArtifactOperations.property.CreateComplianceInquiry"></a>

```typescript
public readonly CreateComplianceInquiry: string[];
```

- *Type:* string[]

IAM actions required for the CreateComplianceInquiry API call.

---

##### `ExportComplianceInquiry`<sup>Required</sup> <a name="ExportComplianceInquiry" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ExportComplianceInquiry"></a>

```typescript
public readonly ExportComplianceInquiry: string[];
```

- *Type:* string[]

IAM actions required for the ExportComplianceInquiry API call.

---

##### `ListComplianceInquiries`<sup>Required</sup> <a name="ListComplianceInquiries" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ListComplianceInquiries"></a>

```typescript
public readonly ListComplianceInquiries: string[];
```

- *Type:* string[]

IAM actions required for the ListComplianceInquiries API call.

---

##### `ListComplianceInquiryQueries`<sup>Required</sup> <a name="ListComplianceInquiryQueries" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ListComplianceInquiryQueries"></a>

```typescript
public readonly ListComplianceInquiryQueries: string[];
```

- *Type:* string[]

IAM actions required for the ListComplianceInquiryQueries API call.

---

##### `ListCustomerAgreements`<sup>Required</sup> <a name="ListCustomerAgreements" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ListCustomerAgreements"></a>

```typescript
public readonly ListCustomerAgreements: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomerAgreements API call.

---

##### `ListReports`<sup>Required</sup> <a name="ListReports" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ListReports"></a>

```typescript
public readonly ListReports: string[];
```

- *Type:* string[]

IAM actions required for the ListReports API call.

---

##### `ListReportVersions`<sup>Required</sup> <a name="ListReportVersions" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ListReportVersions"></a>

```typescript
public readonly ListReportVersions: string[];
```

- *Type:* string[]

IAM actions required for the ListReportVersions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.artifact.ArtifactOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountSettings`<sup>Required</sup> <a name="opGetAccountSettings" id="@cdk_utils/iam.artifact.ArtifactOperations.property.opGetAccountSettings"></a>

```typescript
public readonly opGetAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountSettings API call.

---

##### `opGetComplianceInquiryMetadata`<sup>Required</sup> <a name="opGetComplianceInquiryMetadata" id="@cdk_utils/iam.artifact.ArtifactOperations.property.opGetComplianceInquiryMetadata"></a>

```typescript
public readonly opGetComplianceInquiryMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetComplianceInquiryMetadata API call.

---

##### `opGetReport`<sup>Required</sup> <a name="opGetReport" id="@cdk_utils/iam.artifact.ArtifactOperations.property.opGetReport"></a>

```typescript
public readonly opGetReport: string[];
```

- *Type:* string[]

IAM actions required for the GetReport API call.

---

##### `opGetReportMetadata`<sup>Required</sup> <a name="opGetReportMetadata" id="@cdk_utils/iam.artifact.ArtifactOperations.property.opGetReportMetadata"></a>

```typescript
public readonly opGetReportMetadata: string[];
```

- *Type:* string[]

IAM actions required for the GetReportMetadata API call.

---

##### `opGetTermForReport`<sup>Required</sup> <a name="opGetTermForReport" id="@cdk_utils/iam.artifact.ArtifactOperations.property.opGetTermForReport"></a>

```typescript
public readonly opGetTermForReport: string[];
```

- *Type:* string[]

IAM actions required for the GetTermForReport API call.

---

##### `PutAccountSettings`<sup>Required</sup> <a name="PutAccountSettings" id="@cdk_utils/iam.artifact.ArtifactOperations.property.PutAccountSettings"></a>

```typescript
public readonly PutAccountSettings: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountSettings API call.

---

##### `PutComplianceInquiryFeedback`<sup>Required</sup> <a name="PutComplianceInquiryFeedback" id="@cdk_utils/iam.artifact.ArtifactOperations.property.PutComplianceInquiryFeedback"></a>

```typescript
public readonly PutComplianceInquiryFeedback: string[];
```

- *Type:* string[]

IAM actions required for the PutComplianceInquiryFeedback API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.artifact.ArtifactOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.artifact.ArtifactOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### ArtifactResources <a name="ArtifactResources" id="@cdk_utils/iam.artifact.ArtifactResources"></a>

ARN builders, validators, and parsers for artifact resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.artifact.ArtifactResources.Initializer"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

new artifact.ArtifactResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.agreement">agreement</a></code> | Builds an ARN for the agreement resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.complianceInquiry">complianceInquiry</a></code> | Builds an ARN for the compliance-inquiry resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.customerAgreement">customerAgreement</a></code> | Builds an ARN for the customer-agreement resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.isValidAgreementArn">isValidAgreementArn</a></code> | Validates whether a string is a valid ARN for the agreement resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.isValidComplianceInquiryArn">isValidComplianceInquiryArn</a></code> | Validates whether a string is a valid ARN for the compliance-inquiry resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.isValidCustomerAgreementArn">isValidCustomerAgreementArn</a></code> | Validates whether a string is a valid ARN for the customer-agreement resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.isValidReportArn">isValidReportArn</a></code> | Validates whether a string is a valid ARN for the report resource. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.parseAgreementArn">parseAgreementArn</a></code> | Parses a agreement ARN into its components. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.parseComplianceInquiryArn">parseComplianceInquiryArn</a></code> | Parses a compliance-inquiry ARN into its components. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.parseCustomerAgreementArn">parseCustomerAgreementArn</a></code> | Parses a customer-agreement ARN into its components. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.parseReportArn">parseReportArn</a></code> | Parses a report ARN into its components. |
| <code><a href="#@cdk_utils/iam.artifact.ArtifactResources.report">report</a></code> | Builds an ARN for the report resource. |

---

##### `agreement` <a name="agreement" id="@cdk_utils/iam.artifact.ArtifactResources.agreement"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.agreement(props: ArtifactAgreementArnProps)
```

Builds an ARN for the agreement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.artifact.ArtifactResources.agreement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.artifact.ArtifactAgreementArnProps">ArtifactAgreementArnProps</a>

---

##### `complianceInquiry` <a name="complianceInquiry" id="@cdk_utils/iam.artifact.ArtifactResources.complianceInquiry"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.complianceInquiry(props: ArtifactComplianceInquiryArnProps)
```

Builds an ARN for the compliance-inquiry resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.artifact.ArtifactResources.complianceInquiry.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.artifact.ArtifactComplianceInquiryArnProps">ArtifactComplianceInquiryArnProps</a>

---

##### `customerAgreement` <a name="customerAgreement" id="@cdk_utils/iam.artifact.ArtifactResources.customerAgreement"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.customerAgreement(props: ArtifactCustomerAgreementArnProps)
```

Builds an ARN for the customer-agreement resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.artifact.ArtifactResources.customerAgreement.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.artifact.ArtifactCustomerAgreementArnProps">ArtifactCustomerAgreementArnProps</a>

---

##### `isValidAgreementArn` <a name="isValidAgreementArn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidAgreementArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.isValidAgreementArn(arn: string)
```

Validates whether a string is a valid ARN for the agreement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidComplianceInquiryArn` <a name="isValidComplianceInquiryArn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidComplianceInquiryArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.isValidComplianceInquiryArn(arn: string)
```

Validates whether a string is a valid ARN for the compliance-inquiry resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidComplianceInquiryArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomerAgreementArn` <a name="isValidCustomerAgreementArn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidCustomerAgreementArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.isValidCustomerAgreementArn(arn: string)
```

Validates whether a string is a valid ARN for the customer-agreement resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidCustomerAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidReportArn` <a name="isValidReportArn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidReportArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.isValidReportArn(arn: string)
```

Validates whether a string is a valid ARN for the report resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.isValidReportArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAgreementArn` <a name="parseAgreementArn" id="@cdk_utils/iam.artifact.ArtifactResources.parseAgreementArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.parseAgreementArn(arn: string)
```

Parses a agreement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.parseAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `parseComplianceInquiryArn` <a name="parseComplianceInquiryArn" id="@cdk_utils/iam.artifact.ArtifactResources.parseComplianceInquiryArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.parseComplianceInquiryArn(arn: string)
```

Parses a compliance-inquiry ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.parseComplianceInquiryArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomerAgreementArn` <a name="parseCustomerAgreementArn" id="@cdk_utils/iam.artifact.ArtifactResources.parseCustomerAgreementArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.parseCustomerAgreementArn(arn: string)
```

Parses a customer-agreement ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.parseCustomerAgreementArn.parameter.arn"></a>

- *Type:* string

---

##### `parseReportArn` <a name="parseReportArn" id="@cdk_utils/iam.artifact.ArtifactResources.parseReportArn"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.parseReportArn(arn: string)
```

Parses a report ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.artifact.ArtifactResources.parseReportArn.parameter.arn"></a>

- *Type:* string

---

##### `report` <a name="report" id="@cdk_utils/iam.artifact.ArtifactResources.report"></a>

```typescript
import { artifact } from '@cdk_utils/iam'

artifact.ArtifactResources.report(props: ArtifactReportArnProps)
```

Builds an ARN for the report resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.artifact.ArtifactResources.report.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.artifact.ArtifactReportArnProps">ArtifactReportArnProps</a>

---




