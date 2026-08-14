# `elemental_support_cases` Submodule <a name="`elemental_support_cases` Submodule" id="@cdk_utils/iam.elemental_support_cases"></a>


## Structs <a name="Structs" id="Structs"></a>

### ElementalSupportCasesCaseArnComponents <a name="ElementalSupportCasesCaseArnComponents" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents"></a>

Parsed components of a case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.Initializer"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

const elementalSupportCasesCaseArnComponents: elemental_support_cases.ElementalSupportCasesCaseArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### ElementalSupportCasesCaseArnProps <a name="ElementalSupportCasesCaseArnProps" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps"></a>

Properties for building a case ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.Initializer"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

const elementalSupportCasesCaseArnProps: elemental_support_cases.ElementalSupportCasesCaseArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalSupportCasesActions <a name="ElementalSupportCasesActions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions"></a>

IAM action constants for the elemental-support-cases service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.Initializer"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

new elemental_support_cases.ElementalSupportCasesActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetCase">actionGetCase</a></code> | <code>string</code> | [Read] elemental-support-cases:GetCase. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetCasePermission">actionGetCasePermission</a></code> | <code>string</code> | [Read] elemental-support-cases:GetCasePermission. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetCases">actionGetCases</a></code> | <code>string</code> | [Read] elemental-support-cases:GetCases. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetUICache">actionGetUICache</a></code> | <code>string</code> | [Read] elemental-support-cases:GetUICache. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AddCaseComment">AddCaseComment</a></code> | <code>string</code> | [Write] elemental-support-cases:AddCaseComment. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CheckCasePermission">CheckCasePermission</a></code> | <code>string</code> | [Write] elemental-support-cases:CheckCasePermission. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CompleteMultipartUpload">CompleteMultipartUpload</a></code> | <code>string</code> | [Write] elemental-support-cases:CompleteMultipartUpload. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CreateCase">CreateCase</a></code> | <code>string</code> | [Write] elemental-support-cases:CreateCase. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CreateS3CLIUploadCommand">CreateS3CLIUploadCommand</a></code> | <code>string</code> | [Write] elemental-support-cases:CreateS3CLIUploadCommand. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CreateS3DownloadUrl">CreateS3DownloadUrl</a></code> | <code>string</code> | [Write] elemental-support-cases:CreateS3DownloadUrl. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.ListTagsForCase">ListTagsForCase</a></code> | <code>string</code> | [Read] elemental-support-cases:ListTagsForCase. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.StartMultipartUpload">StartMultipartUpload</a></code> | <code>string</code> | [Write] elemental-support-cases:StartMultipartUpload. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.TagCase">TagCase</a></code> | <code>string</code> | [Tagging] elemental-support-cases:TagCase. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UntagCase">UntagCase</a></code> | <code>string</code> | [Tagging] elemental-support-cases:UntagCase. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UpdateCase">UpdateCase</a></code> | <code>string</code> | [Write] elemental-support-cases:UpdateCase. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UpdateCaseStatus">UpdateCaseStatus</a></code> | <code>string</code> | [Write] elemental-support-cases:UpdateCaseStatus. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UpdateMultipartUpload">UpdateMultipartUpload</a></code> | <code>string</code> | [Write] elemental-support-cases:UpdateMultipartUpload. |

---

##### `actionGetCase`<sup>Required</sup> <a name="actionGetCase" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetCase"></a>

```typescript
public readonly actionGetCase: string;
```

- *Type:* string

[Read] elemental-support-cases:GetCase.

---

##### `actionGetCasePermission`<sup>Required</sup> <a name="actionGetCasePermission" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetCasePermission"></a>

```typescript
public readonly actionGetCasePermission: string;
```

- *Type:* string

[Read] elemental-support-cases:GetCasePermission.

---

##### `actionGetCases`<sup>Required</sup> <a name="actionGetCases" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetCases"></a>

```typescript
public readonly actionGetCases: string;
```

- *Type:* string

[Read] elemental-support-cases:GetCases.

---

##### `actionGetUICache`<sup>Required</sup> <a name="actionGetUICache" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.actionGetUICache"></a>

```typescript
public readonly actionGetUICache: string;
```

- *Type:* string

[Read] elemental-support-cases:GetUICache.

---

##### `AddCaseComment`<sup>Required</sup> <a name="AddCaseComment" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AddCaseComment"></a>

```typescript
public readonly AddCaseComment: string;
```

- *Type:* string

[Write] elemental-support-cases:AddCaseComment.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CheckCasePermission`<sup>Required</sup> <a name="CheckCasePermission" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CheckCasePermission"></a>

```typescript
public readonly CheckCasePermission: string;
```

- *Type:* string

[Write] elemental-support-cases:CheckCasePermission.

---

##### `CompleteMultipartUpload`<sup>Required</sup> <a name="CompleteMultipartUpload" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CompleteMultipartUpload"></a>

```typescript
public readonly CompleteMultipartUpload: string;
```

- *Type:* string

[Write] elemental-support-cases:CompleteMultipartUpload.

---

##### `CreateCase`<sup>Required</sup> <a name="CreateCase" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CreateCase"></a>

```typescript
public readonly CreateCase: string;
```

- *Type:* string

[Write] elemental-support-cases:CreateCase.

---

##### `CreateS3CLIUploadCommand`<sup>Required</sup> <a name="CreateS3CLIUploadCommand" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CreateS3CLIUploadCommand"></a>

```typescript
public readonly CreateS3CLIUploadCommand: string;
```

- *Type:* string

[Write] elemental-support-cases:CreateS3CLIUploadCommand.

---

##### `CreateS3DownloadUrl`<sup>Required</sup> <a name="CreateS3DownloadUrl" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.CreateS3DownloadUrl"></a>

```typescript
public readonly CreateS3DownloadUrl: string;
```

- *Type:* string

[Write] elemental-support-cases:CreateS3DownloadUrl.

---

##### `ListTagsForCase`<sup>Required</sup> <a name="ListTagsForCase" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.ListTagsForCase"></a>

```typescript
public readonly ListTagsForCase: string;
```

- *Type:* string

[Read] elemental-support-cases:ListTagsForCase.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartMultipartUpload`<sup>Required</sup> <a name="StartMultipartUpload" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.StartMultipartUpload"></a>

```typescript
public readonly StartMultipartUpload: string;
```

- *Type:* string

[Write] elemental-support-cases:StartMultipartUpload.

---

##### `TagCase`<sup>Required</sup> <a name="TagCase" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.TagCase"></a>

```typescript
public readonly TagCase: string;
```

- *Type:* string

[Tagging] elemental-support-cases:TagCase.

---

##### `UntagCase`<sup>Required</sup> <a name="UntagCase" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UntagCase"></a>

```typescript
public readonly UntagCase: string;
```

- *Type:* string

[Tagging] elemental-support-cases:UntagCase.

---

##### `UpdateCase`<sup>Required</sup> <a name="UpdateCase" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UpdateCase"></a>

```typescript
public readonly UpdateCase: string;
```

- *Type:* string

[Write] elemental-support-cases:UpdateCase.

---

##### `UpdateCaseStatus`<sup>Required</sup> <a name="UpdateCaseStatus" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UpdateCaseStatus"></a>

```typescript
public readonly UpdateCaseStatus: string;
```

- *Type:* string

[Write] elemental-support-cases:UpdateCaseStatus.

---

##### `UpdateMultipartUpload`<sup>Required</sup> <a name="UpdateMultipartUpload" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesActions.property.UpdateMultipartUpload"></a>

```typescript
public readonly UpdateMultipartUpload: string;
```

- *Type:* string

[Write] elemental-support-cases:UpdateMultipartUpload.

---

### ElementalSupportCasesConditions <a name="ElementalSupportCasesConditions" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions"></a>

Condition key constants and builders for elemental-support-cases.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.Initializer"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

new elemental_support_cases.ElementalSupportCasesConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.requestTag"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

elemental_support_cases.ElementalSupportCasesConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.resourceTag"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

elemental_support_cases.ElementalSupportCasesConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.tagKeys"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

elemental_support_cases.ElementalSupportCasesConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.CreateCaseConditionKeys">CreateCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCase action. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.TagCaseConditionKeys">TagCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagCase action. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.UntagCaseConditionKeys">UntagCaseConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagCase action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateCaseConditionKeys`<sup>Required</sup> <a name="CreateCaseConditionKeys" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.CreateCaseConditionKeys"></a>

```typescript
public readonly CreateCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCase action.

---

##### `TagCaseConditionKeys`<sup>Required</sup> <a name="TagCaseConditionKeys" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.TagCaseConditionKeys"></a>

```typescript
public readonly TagCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagCase action.

---

##### `UntagCaseConditionKeys`<sup>Required</sup> <a name="UntagCaseConditionKeys" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesConditions.property.UntagCaseConditionKeys"></a>

```typescript
public readonly UntagCaseConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagCase action.

---

### ElementalSupportCasesResources <a name="ElementalSupportCasesResources" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources"></a>

ARN builders, validators, and parsers for elemental-support-cases resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.Initializer"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

new elemental_support_cases.ElementalSupportCasesResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.case">case</a></code> | Builds an ARN for the case resource. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.isValidCaseArn">isValidCaseArn</a></code> | Validates whether a string is a valid ARN for the case resource. |
| <code><a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.parseCaseArn">parseCaseArn</a></code> | Parses a case ARN into its components. |

---

##### `case` <a name="case" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.case"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

elemental_support_cases.ElementalSupportCasesResources.case(props: ElementalSupportCasesCaseArnProps)
```

Builds an ARN for the case resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.case.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesCaseArnProps">ElementalSupportCasesCaseArnProps</a>

---

##### `isValidCaseArn` <a name="isValidCaseArn" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.isValidCaseArn"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

elemental_support_cases.ElementalSupportCasesResources.isValidCaseArn(arn: string)
```

Validates whether a string is a valid ARN for the case resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.isValidCaseArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCaseArn` <a name="parseCaseArn" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.parseCaseArn"></a>

```typescript
import { elemental_support_cases } from '@cdk_utils/iam'

elemental_support_cases.ElementalSupportCasesResources.parseCaseArn(arn: string)
```

Parses a case ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.elemental_support_cases.ElementalSupportCasesResources.parseCaseArn.parameter.arn"></a>

- *Type:* string

---




