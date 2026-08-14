# `security_ir` Submodule <a name="`security_ir` Submodule" id="@cdk_utils/iam.security_ir"></a>


## Structs <a name="Structs" id="Structs"></a>

### SecurityIrCaseArnComponents <a name="SecurityIrCaseArnComponents" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents"></a>

Parsed components of a case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

const securityIrCaseArnComponents: security_ir.SecurityIrCaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.caseId">caseId</a></code> | <code>string</code> | The CaseId component. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

The CaseId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityIrCaseArnProps <a name="SecurityIrCaseArnProps" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnProps"></a>

Properties for building a case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

const securityIrCaseArnProps: security_ir.SecurityIrCaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.caseId">caseId</a></code> | <code>string</code> | The CaseId component of the ARN. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `caseId`<sup>Required</sup> <a name="caseId" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.caseId"></a>

```typescript
public readonly caseId: string;
```

- *Type:* string

The CaseId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.security_ir.SecurityIrCaseArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SecurityIrMembershipArnComponents <a name="SecurityIrMembershipArnComponents" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents"></a>

Parsed components of a membership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

const securityIrMembershipArnComponents: security_ir.SecurityIrMembershipArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SecurityIrMembershipArnProps <a name="SecurityIrMembershipArnProps" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps"></a>

Properties for building a membership ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

const securityIrMembershipArnProps: security_ir.SecurityIrMembershipArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.membershipId">membershipId</a></code> | <code>string</code> | The MembershipId component of the ARN. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `membershipId`<sup>Required</sup> <a name="membershipId" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.membershipId"></a>

```typescript
public readonly membershipId: string;
```

- *Type:* string

The MembershipId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityIrActions <a name="SecurityIrActions" id="@cdk_utils/iam.security_ir.SecurityIrActions"></a>

IAM action constants for the security-ir service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.security_ir.SecurityIrActions.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

new security_ir.SecurityIrActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetCase">actionGetCase</a></code> | <code>string</code> | [Read] security-ir:GetCase. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetCaseAttachmentDownloadUrl">actionGetCaseAttachmentDownloadUrl</a></code> | <code>string</code> | [Read] security-ir:GetCaseAttachmentDownloadUrl. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetCaseAttachmentUploadUrl">actionGetCaseAttachmentUploadUrl</a></code> | <code>string</code> | [Write] security-ir:GetCaseAttachmentUploadUrl. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetMembership">actionGetMembership</a></code> | <code>string</code> | [Read] security-ir:GetMembership. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.BatchGetMemberAccountDetails">BatchGetMemberAccountDetails</a></code> | <code>string</code> | [Read] security-ir:BatchGetMemberAccountDetails. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.CancelMembership">CancelMembership</a></code> | <code>string</code> | [Write] security-ir:CancelMembership. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.CloseCase">CloseCase</a></code> | <code>string</code> | [Write] security-ir:CloseCase. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.CreateCase">CreateCase</a></code> | <code>string</code> | [Write] security-ir:CreateCase. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.CreateCaseComment">CreateCaseComment</a></code> | <code>string</code> | [Write] security-ir:CreateCaseComment. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.CreateMembership">CreateMembership</a></code> | <code>string</code> | [Write] security-ir:CreateMembership. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.ListCaseEdits">ListCaseEdits</a></code> | <code>string</code> | [Read] security-ir:ListCaseEdits. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.ListCases">ListCases</a></code> | <code>string</code> | [List] security-ir:ListCases. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.ListComments">ListComments</a></code> | <code>string</code> | [Read] security-ir:ListComments. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.ListInvestigations">ListInvestigations</a></code> | <code>string</code> | [Read] security-ir:ListInvestigations. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.ListMemberships">ListMemberships</a></code> | <code>string</code> | [List] security-ir:ListMemberships. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] security-ir:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.SendFeedback">SendFeedback</a></code> | <code>string</code> | [Write] security-ir:SendFeedback. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] security-ir:TagResource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] security-ir:UntagResource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateCase">UpdateCase</a></code> | <code>string</code> | [Write] security-ir:UpdateCase. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateCaseComment">UpdateCaseComment</a></code> | <code>string</code> | [Write] security-ir:UpdateCaseComment. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateCaseStatus">UpdateCaseStatus</a></code> | <code>string</code> | [Write] security-ir:UpdateCaseStatus. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateMembership">UpdateMembership</a></code> | <code>string</code> | [Write] security-ir:UpdateMembership. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateResolverType">UpdateResolverType</a></code> | <code>string</code> | [Write] security-ir:UpdateResolverType. |

---

##### `actionGetCase`<sup>Required</sup> <a name="actionGetCase" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetCase"></a>

```typescript
public readonly actionGetCase: string;
```

- *Type:* string

[Read] security-ir:GetCase.

---

##### `actionGetCaseAttachmentDownloadUrl`<sup>Required</sup> <a name="actionGetCaseAttachmentDownloadUrl" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetCaseAttachmentDownloadUrl"></a>

```typescript
public readonly actionGetCaseAttachmentDownloadUrl: string;
```

- *Type:* string

[Read] security-ir:GetCaseAttachmentDownloadUrl.

---

##### `actionGetCaseAttachmentUploadUrl`<sup>Required</sup> <a name="actionGetCaseAttachmentUploadUrl" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetCaseAttachmentUploadUrl"></a>

```typescript
public readonly actionGetCaseAttachmentUploadUrl: string;
```

- *Type:* string

[Write] security-ir:GetCaseAttachmentUploadUrl.

---

##### `actionGetMembership`<sup>Required</sup> <a name="actionGetMembership" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.actionGetMembership"></a>

```typescript
public readonly actionGetMembership: string;
```

- *Type:* string

[Read] security-ir:GetMembership.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetMemberAccountDetails`<sup>Required</sup> <a name="BatchGetMemberAccountDetails" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.BatchGetMemberAccountDetails"></a>

```typescript
public readonly BatchGetMemberAccountDetails: string;
```

- *Type:* string

[Read] security-ir:BatchGetMemberAccountDetails.

---

##### `CancelMembership`<sup>Required</sup> <a name="CancelMembership" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.CancelMembership"></a>

```typescript
public readonly CancelMembership: string;
```

- *Type:* string

[Write] security-ir:CancelMembership.

---

##### `CloseCase`<sup>Required</sup> <a name="CloseCase" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.CloseCase"></a>

```typescript
public readonly CloseCase: string;
```

- *Type:* string

[Write] security-ir:CloseCase.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.CreateCase"></a>

```typescript
public readonly CreateCase: string;
```

- *Type:* string

[Write] security-ir:CreateCase.

---

##### `CreateCaseComment`<sup>Required</sup> <a name="CreateCaseComment" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.CreateCaseComment"></a>

```typescript
public readonly CreateCaseComment: string;
```

- *Type:* string

[Write] security-ir:CreateCaseComment.

---

##### `CreateMembership`<sup>Required</sup> <a name="CreateMembership" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.CreateMembership"></a>

```typescript
public readonly CreateMembership: string;
```

- *Type:* string

[Write] security-ir:CreateMembership.

---

##### `ListCaseEdits`<sup>Required</sup> <a name="ListCaseEdits" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.ListCaseEdits"></a>

```typescript
public readonly ListCaseEdits: string;
```

- *Type:* string

[Read] security-ir:ListCaseEdits.

---

##### `ListCases`<sup>Required</sup> <a name="ListCases" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.ListCases"></a>

```typescript
public readonly ListCases: string;
```

- *Type:* string

[List] security-ir:ListCases.

---

##### `ListComments`<sup>Required</sup> <a name="ListComments" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.ListComments"></a>

```typescript
public readonly ListComments: string;
```

- *Type:* string

[Read] security-ir:ListComments.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string;
```

- *Type:* string

[Read] security-ir:ListInvestigations.

---

##### `ListMemberships`<sup>Required</sup> <a name="ListMemberships" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.ListMemberships"></a>

```typescript
public readonly ListMemberships: string;
```

- *Type:* string

[List] security-ir:ListMemberships.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] security-ir:ListTagsForResource.

---

##### `SendFeedback`<sup>Required</sup> <a name="SendFeedback" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.SendFeedback"></a>

```typescript
public readonly SendFeedback: string;
```

- *Type:* string

[Write] security-ir:SendFeedback.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] security-ir:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] security-ir:UntagResource.

---

##### `UpdateCase`<sup>Required</sup> <a name="UpdateCase" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateCase"></a>

```typescript
public readonly UpdateCase: string;
```

- *Type:* string

[Write] security-ir:UpdateCase.

---

##### `UpdateCaseComment`<sup>Required</sup> <a name="UpdateCaseComment" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateCaseComment"></a>

```typescript
public readonly UpdateCaseComment: string;
```

- *Type:* string

[Write] security-ir:UpdateCaseComment.

---

##### `UpdateCaseStatus`<sup>Required</sup> <a name="UpdateCaseStatus" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateCaseStatus"></a>

```typescript
public readonly UpdateCaseStatus: string;
```

- *Type:* string

[Write] security-ir:UpdateCaseStatus.

---

##### `UpdateMembership`<sup>Required</sup> <a name="UpdateMembership" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateMembership"></a>

```typescript
public readonly UpdateMembership: string;
```

- *Type:* string

[Write] security-ir:UpdateMembership.

---

##### `UpdateResolverType`<sup>Required</sup> <a name="UpdateResolverType" id="@cdk_utils/iam.security_ir.SecurityIrActions.property.UpdateResolverType"></a>

```typescript
public readonly UpdateResolverType: string;
```

- *Type:* string

[Write] security-ir:UpdateResolverType.

---

### SecurityIrConditions <a name="SecurityIrConditions" id="@cdk_utils/iam.security_ir.SecurityIrConditions"></a>

Condition key constants and builders for security-ir.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.security_ir.SecurityIrConditions.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

new security_ir.SecurityIrConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.security_ir.SecurityIrConditions.requestTag"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.security_ir.SecurityIrConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.security_ir.SecurityIrConditions.resourceTag"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.security_ir.SecurityIrConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.security_ir.SecurityIrConditions.tagKeys"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.security_ir.SecurityIrConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.CreateCaseConditionKeys">CreateCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCase action. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.CreateMembershipConditionKeys">CreateMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMembership action. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCaseConditionKeys`<sup>Required</sup> <a name="CreateCaseConditionKeys" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.CreateCaseConditionKeys"></a>

```typescript
public readonly CreateCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCase action.

---

##### `CreateMembershipConditionKeys`<sup>Required</sup> <a name="CreateMembershipConditionKeys" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.CreateMembershipConditionKeys"></a>

```typescript
public readonly CreateMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMembership action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.security_ir.SecurityIrConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SecurityIrOperations <a name="SecurityIrOperations" id="@cdk_utils/iam.security_ir.SecurityIrOperations"></a>

API operation to required IAM actions mapping for security-ir.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.security_ir.SecurityIrOperations.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

new security_ir.SecurityIrOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.BatchGetMemberAccountDetails">BatchGetMemberAccountDetails</a></code> | <code>string[]</code> | IAM actions required for the BatchGetMemberAccountDetails API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.CancelMembership">CancelMembership</a></code> | <code>string[]</code> | IAM actions required for the CancelMembership API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.CloseCase">CloseCase</a></code> | <code>string[]</code> | IAM actions required for the CloseCase API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.CreateCase">CreateCase</a></code> | <code>string[]</code> | IAM actions required for the CreateCase API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.CreateCaseComment">CreateCaseComment</a></code> | <code>string[]</code> | IAM actions required for the CreateCaseComment API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.CreateMembership">CreateMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateMembership API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListCaseEdits">ListCaseEdits</a></code> | <code>string[]</code> | IAM actions required for the ListCaseEdits API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListCases">ListCases</a></code> | <code>string[]</code> | IAM actions required for the ListCases API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListComments">ListComments</a></code> | <code>string[]</code> | IAM actions required for the ListComments API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListInvestigations">ListInvestigations</a></code> | <code>string[]</code> | IAM actions required for the ListInvestigations API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListMemberships">ListMemberships</a></code> | <code>string[]</code> | IAM actions required for the ListMemberships API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetCase">opGetCase</a></code> | <code>string[]</code> | IAM actions required for the GetCase API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetCaseAttachmentDownloadUrl">opGetCaseAttachmentDownloadUrl</a></code> | <code>string[]</code> | IAM actions required for the GetCaseAttachmentDownloadUrl API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetCaseAttachmentUploadUrl">opGetCaseAttachmentUploadUrl</a></code> | <code>string[]</code> | IAM actions required for the GetCaseAttachmentUploadUrl API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetMembership">opGetMembership</a></code> | <code>string[]</code> | IAM actions required for the GetMembership API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.SendFeedback">SendFeedback</a></code> | <code>string[]</code> | IAM actions required for the SendFeedback API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateCase">UpdateCase</a></code> | <code>string[]</code> | IAM actions required for the UpdateCase API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateCaseComment">UpdateCaseComment</a></code> | <code>string[]</code> | IAM actions required for the UpdateCaseComment API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateCaseStatus">UpdateCaseStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateCaseStatus API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateMembership">UpdateMembership</a></code> | <code>string[]</code> | IAM actions required for the UpdateMembership API call. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateResolverType">UpdateResolverType</a></code> | <code>string[]</code> | IAM actions required for the UpdateResolverType API call. |

---

##### `BatchGetMemberAccountDetails`<sup>Required</sup> <a name="BatchGetMemberAccountDetails" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.BatchGetMemberAccountDetails"></a>

```typescript
public readonly BatchGetMemberAccountDetails: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetMemberAccountDetails API call.

---

##### `CancelMembership`<sup>Required</sup> <a name="CancelMembership" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.CancelMembership"></a>

```typescript
public readonly CancelMembership: string[];
```

- *Type:* string[]

IAM actions required for the CancelMembership API call.

---

##### `CloseCase`<sup>Required</sup> <a name="CloseCase" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.CloseCase"></a>

```typescript
public readonly CloseCase: string[];
```

- *Type:* string[]

IAM actions required for the CloseCase API call.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.CreateCase"></a>

```typescript
public readonly CreateCase: string[];
```

- *Type:* string[]

IAM actions required for the CreateCase API call.

---

##### `CreateCaseComment`<sup>Required</sup> <a name="CreateCaseComment" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.CreateCaseComment"></a>

```typescript
public readonly CreateCaseComment: string[];
```

- *Type:* string[]

IAM actions required for the CreateCaseComment API call.

---

##### `CreateMembership`<sup>Required</sup> <a name="CreateMembership" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.CreateMembership"></a>

```typescript
public readonly CreateMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateMembership API call.

---

##### `ListCaseEdits`<sup>Required</sup> <a name="ListCaseEdits" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListCaseEdits"></a>

```typescript
public readonly ListCaseEdits: string[];
```

- *Type:* string[]

IAM actions required for the ListCaseEdits API call.

---

##### `ListCases`<sup>Required</sup> <a name="ListCases" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListCases"></a>

```typescript
public readonly ListCases: string[];
```

- *Type:* string[]

IAM actions required for the ListCases API call.

---

##### `ListComments`<sup>Required</sup> <a name="ListComments" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListComments"></a>

```typescript
public readonly ListComments: string[];
```

- *Type:* string[]

IAM actions required for the ListComments API call.

---

##### `ListInvestigations`<sup>Required</sup> <a name="ListInvestigations" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListInvestigations"></a>

```typescript
public readonly ListInvestigations: string[];
```

- *Type:* string[]

IAM actions required for the ListInvestigations API call.

---

##### `ListMemberships`<sup>Required</sup> <a name="ListMemberships" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListMemberships"></a>

```typescript
public readonly ListMemberships: string[];
```

- *Type:* string[]

IAM actions required for the ListMemberships API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetCase`<sup>Required</sup> <a name="opGetCase" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetCase"></a>

```typescript
public readonly opGetCase: string[];
```

- *Type:* string[]

IAM actions required for the GetCase API call.

---

##### `opGetCaseAttachmentDownloadUrl`<sup>Required</sup> <a name="opGetCaseAttachmentDownloadUrl" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetCaseAttachmentDownloadUrl"></a>

```typescript
public readonly opGetCaseAttachmentDownloadUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetCaseAttachmentDownloadUrl API call.

---

##### `opGetCaseAttachmentUploadUrl`<sup>Required</sup> <a name="opGetCaseAttachmentUploadUrl" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetCaseAttachmentUploadUrl"></a>

```typescript
public readonly opGetCaseAttachmentUploadUrl: string[];
```

- *Type:* string[]

IAM actions required for the GetCaseAttachmentUploadUrl API call.

---

##### `opGetMembership`<sup>Required</sup> <a name="opGetMembership" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.opGetMembership"></a>

```typescript
public readonly opGetMembership: string[];
```

- *Type:* string[]

IAM actions required for the GetMembership API call.

---

##### `SendFeedback`<sup>Required</sup> <a name="SendFeedback" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.SendFeedback"></a>

```typescript
public readonly SendFeedback: string[];
```

- *Type:* string[]

IAM actions required for the SendFeedback API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateCase`<sup>Required</sup> <a name="UpdateCase" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateCase"></a>

```typescript
public readonly UpdateCase: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCase API call.

---

##### `UpdateCaseComment`<sup>Required</sup> <a name="UpdateCaseComment" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateCaseComment"></a>

```typescript
public readonly UpdateCaseComment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCaseComment API call.

---

##### `UpdateCaseStatus`<sup>Required</sup> <a name="UpdateCaseStatus" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateCaseStatus"></a>

```typescript
public readonly UpdateCaseStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCaseStatus API call.

---

##### `UpdateMembership`<sup>Required</sup> <a name="UpdateMembership" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateMembership"></a>

```typescript
public readonly UpdateMembership: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMembership API call.

---

##### `UpdateResolverType`<sup>Required</sup> <a name="UpdateResolverType" id="@cdk_utils/iam.security_ir.SecurityIrOperations.property.UpdateResolverType"></a>

```typescript
public readonly UpdateResolverType: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResolverType API call.

---

### SecurityIrResources <a name="SecurityIrResources" id="@cdk_utils/iam.security_ir.SecurityIrResources"></a>

ARN builders, validators, and parsers for security-ir resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.security_ir.SecurityIrResources.Initializer"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

new security_ir.SecurityIrResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrResources.case">case</a></code> | Builds an ARN for the case resource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrResources.isValidCaseArn">isValidCaseArn</a></code> | Validates whether a string is a valid ARN for the case resource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrResources.isValidMembershipArn">isValidMembershipArn</a></code> | Validates whether a string is a valid ARN for the membership resource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrResources.membership">membership</a></code> | Builds an ARN for the membership resource. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrResources.parseCaseArn">parseCaseArn</a></code> | Parses a case ARN into its components. |
| <code><a href="#@cdk_utils/iam.security_ir.SecurityIrResources.parseMembershipArn">parseMembershipArn</a></code> | Parses a membership ARN into its components. |

---

##### `case` <a name="case" id="@cdk_utils/iam.security_ir.SecurityIrResources.case"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrResources.case(props: SecurityIrCaseArnProps)
```

Builds an ARN for the case resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.security_ir.SecurityIrResources.case.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.security_ir.SecurityIrCaseArnProps">SecurityIrCaseArnProps</a>

---

##### `isValidCaseArn` <a name="isValidCaseArn" id="@cdk_utils/iam.security_ir.SecurityIrResources.isValidCaseArn"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrResources.isValidCaseArn(arn: string)
```

Validates whether a string is a valid ARN for the case resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.security_ir.SecurityIrResources.isValidCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidMembershipArn` <a name="isValidMembershipArn" id="@cdk_utils/iam.security_ir.SecurityIrResources.isValidMembershipArn"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrResources.isValidMembershipArn(arn: string)
```

Validates whether a string is a valid ARN for the membership resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.security_ir.SecurityIrResources.isValidMembershipArn.parameter.arn"></a>

- *Type:* string

---

##### `membership` <a name="membership" id="@cdk_utils/iam.security_ir.SecurityIrResources.membership"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrResources.membership(props: SecurityIrMembershipArnProps)
```

Builds an ARN for the membership resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.security_ir.SecurityIrResources.membership.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.security_ir.SecurityIrMembershipArnProps">SecurityIrMembershipArnProps</a>

---

##### `parseCaseArn` <a name="parseCaseArn" id="@cdk_utils/iam.security_ir.SecurityIrResources.parseCaseArn"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrResources.parseCaseArn(arn: string)
```

Parses a case ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.security_ir.SecurityIrResources.parseCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseMembershipArn` <a name="parseMembershipArn" id="@cdk_utils/iam.security_ir.SecurityIrResources.parseMembershipArn"></a>

```typescript
import { security_ir } from '@cdk_utils/iam'

security_ir.SecurityIrResources.parseMembershipArn(arn: string)
```

Parses a membership ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.security_ir.SecurityIrResources.parseMembershipArn.parameter.arn"></a>

- *Type:* string

---




