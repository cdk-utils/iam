# `codeguru_security` Submodule <a name="`codeguru_security` Submodule" id="@cdk_utils/iam.codeguru_security"></a>


## Structs <a name="Structs" id="Structs"></a>

### CodeguruSecurityScanNameArnComponents <a name="CodeguruSecurityScanNameArnComponents" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents"></a>

Parsed components of a ScanName ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.Initializer"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

const codeguruSecurityScanNameArnComponents: codeguru_security.CodeguruSecurityScanNameArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.scanName">scanName</a></code> | <code>string</code> | The ScanName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnComponents.property.scanName"></a>

```typescript
public readonly scanName: string;
```

- *Type:* string

The ScanName component.

---

### CodeguruSecurityScanNameArnProps <a name="CodeguruSecurityScanNameArnProps" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps"></a>

Properties for building a ScanName ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.Initializer"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

const codeguruSecurityScanNameArnProps: codeguru_security.CodeguruSecurityScanNameArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.scanName">scanName</a></code> | <code>string</code> | The ScanName component of the ARN. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `scanName`<sup>Required</sup> <a name="scanName" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.scanName"></a>

```typescript
public readonly scanName: string;
```

- *Type:* string

The ScanName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruSecurityActions <a name="CodeguruSecurityActions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions"></a>

IAM action constants for the codeguru-security service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.Initializer"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

new codeguru_security.CodeguruSecurityActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetAccountConfiguration">actionGetAccountConfiguration</a></code> | <code>string</code> | [Read] codeguru-security:GetAccountConfiguration. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetFindings">actionGetFindings</a></code> | <code>string</code> | [List] codeguru-security:GetFindings. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetMetricsSummary">actionGetMetricsSummary</a></code> | <code>string</code> | [Read] codeguru-security:GetMetricsSummary. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetScan">actionGetScan</a></code> | <code>string</code> | [Read] codeguru-security:GetScan. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.BatchGetFindings">BatchGetFindings</a></code> | <code>string</code> | [Read] codeguru-security:BatchGetFindings. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.CreateScan">CreateScan</a></code> | <code>string</code> | [Write] codeguru-security:CreateScan. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.CreateUploadUrl">CreateUploadUrl</a></code> | <code>string</code> | [Write] codeguru-security:CreateUploadUrl. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.DeleteScansByCategory">DeleteScansByCategory</a></code> | <code>string</code> | [Write] codeguru-security:DeleteScansByCategory. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListFindings">ListFindings</a></code> | <code>string</code> | [List] codeguru-security:ListFindings. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListFindingsMetrics">ListFindingsMetrics</a></code> | <code>string</code> | [List] codeguru-security:ListFindingsMetrics. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListScans">ListScans</a></code> | <code>string</code> | [List] codeguru-security:ListScans. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] codeguru-security:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] codeguru-security:TagResource. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] codeguru-security:UntagResource. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.UpdateAccountConfiguration">UpdateAccountConfiguration</a></code> | <code>string</code> | [Write] codeguru-security:UpdateAccountConfiguration. |

---

##### `actionGetAccountConfiguration`<sup>Required</sup> <a name="actionGetAccountConfiguration" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetAccountConfiguration"></a>

```typescript
public readonly actionGetAccountConfiguration: string;
```

- *Type:* string

[Read] codeguru-security:GetAccountConfiguration.

---

##### `actionGetFindings`<sup>Required</sup> <a name="actionGetFindings" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetFindings"></a>

```typescript
public readonly actionGetFindings: string;
```

- *Type:* string

[List] codeguru-security:GetFindings.

---

##### `actionGetMetricsSummary`<sup>Required</sup> <a name="actionGetMetricsSummary" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetMetricsSummary"></a>

```typescript
public readonly actionGetMetricsSummary: string;
```

- *Type:* string

[Read] codeguru-security:GetMetricsSummary.

---

##### `actionGetScan`<sup>Required</sup> <a name="actionGetScan" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.actionGetScan"></a>

```typescript
public readonly actionGetScan: string;
```

- *Type:* string

[Read] codeguru-security:GetScan.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `BatchGetFindings`<sup>Required</sup> <a name="BatchGetFindings" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.BatchGetFindings"></a>

```typescript
public readonly BatchGetFindings: string;
```

- *Type:* string

[Read] codeguru-security:BatchGetFindings.

---

##### `CreateScan`<sup>Required</sup> <a name="CreateScan" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.CreateScan"></a>

```typescript
public readonly CreateScan: string;
```

- *Type:* string

[Write] codeguru-security:CreateScan.

---

##### `CreateUploadUrl`<sup>Required</sup> <a name="CreateUploadUrl" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.CreateUploadUrl"></a>

```typescript
public readonly CreateUploadUrl: string;
```

- *Type:* string

[Write] codeguru-security:CreateUploadUrl.

---

##### `DeleteScansByCategory`<sup>Required</sup> <a name="DeleteScansByCategory" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.DeleteScansByCategory"></a>

```typescript
public readonly DeleteScansByCategory: string;
```

- *Type:* string

[Write] codeguru-security:DeleteScansByCategory.

---

##### `ListFindings`<sup>Required</sup> <a name="ListFindings" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListFindings"></a>

```typescript
public readonly ListFindings: string;
```

- *Type:* string

[List] codeguru-security:ListFindings.

---

##### `ListFindingsMetrics`<sup>Required</sup> <a name="ListFindingsMetrics" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListFindingsMetrics"></a>

```typescript
public readonly ListFindingsMetrics: string;
```

- *Type:* string

[List] codeguru-security:ListFindingsMetrics.

---

##### `ListScans`<sup>Required</sup> <a name="ListScans" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListScans"></a>

```typescript
public readonly ListScans: string;
```

- *Type:* string

[List] codeguru-security:ListScans.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] codeguru-security:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] codeguru-security:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] codeguru-security:UntagResource.

---

##### `UpdateAccountConfiguration`<sup>Required</sup> <a name="UpdateAccountConfiguration" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityActions.property.UpdateAccountConfiguration"></a>

```typescript
public readonly UpdateAccountConfiguration: string;
```

- *Type:* string

[Write] codeguru-security:UpdateAccountConfiguration.

---

### CodeguruSecurityConditions <a name="CodeguruSecurityConditions" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions"></a>

Condition key constants and builders for codeguru-security.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.Initializer"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

new codeguru_security.CodeguruSecurityConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.requestTag"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

codeguru_security.CodeguruSecurityConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.resourceTag"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

codeguru_security.CodeguruSecurityConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.tagKeys"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

codeguru_security.CodeguruSecurityConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.actionGetScanConditionKeys">actionGetScanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetScan action. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.CreateScanConditionKeys">CreateScanConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateScan action. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetScanConditionKeys`<sup>Required</sup> <a name="actionGetScanConditionKeys" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.actionGetScanConditionKeys"></a>

```typescript
public readonly actionGetScanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetScan action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateScanConditionKeys`<sup>Required</sup> <a name="CreateScanConditionKeys" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.CreateScanConditionKeys"></a>

```typescript
public readonly CreateScanConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateScan action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CodeguruSecurityOperations <a name="CodeguruSecurityOperations" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations"></a>

API operation to required IAM actions mapping for codeguru-security.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.Initializer"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

new codeguru_security.CodeguruSecurityOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.BatchGetFindings">BatchGetFindings</a></code> | <code>string[]</code> | IAM actions required for the BatchGetFindings API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.CreateScan">CreateScan</a></code> | <code>string[]</code> | IAM actions required for the CreateScan API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.CreateUploadUrl">CreateUploadUrl</a></code> | <code>string[]</code> | IAM actions required for the CreateUploadUrl API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.ListFindingsMetrics">ListFindingsMetrics</a></code> | <code>string[]</code> | IAM actions required for the ListFindingsMetrics API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.ListScans">ListScans</a></code> | <code>string[]</code> | IAM actions required for the ListScans API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetAccountConfiguration">opGetAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetAccountConfiguration API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetFindings">opGetFindings</a></code> | <code>string[]</code> | IAM actions required for the GetFindings API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetMetricsSummary">opGetMetricsSummary</a></code> | <code>string[]</code> | IAM actions required for the GetMetricsSummary API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetScan">opGetScan</a></code> | <code>string[]</code> | IAM actions required for the GetScan API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.UpdateAccountConfiguration">UpdateAccountConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountConfiguration API call. |

---

##### `BatchGetFindings`<sup>Required</sup> <a name="BatchGetFindings" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.BatchGetFindings"></a>

```typescript
public readonly BatchGetFindings: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetFindings API call.

---

##### `CreateScan`<sup>Required</sup> <a name="CreateScan" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.CreateScan"></a>

```typescript
public readonly CreateScan: string[];
```

- *Type:* string[]

IAM actions required for the CreateScan API call.

---

##### `CreateUploadUrl`<sup>Required</sup> <a name="CreateUploadUrl" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.CreateUploadUrl"></a>

```typescript
public readonly CreateUploadUrl: string[];
```

- *Type:* string[]

IAM actions required for the CreateUploadUrl API call.

---

##### `ListFindingsMetrics`<sup>Required</sup> <a name="ListFindingsMetrics" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.ListFindingsMetrics"></a>

```typescript
public readonly ListFindingsMetrics: string[];
```

- *Type:* string[]

IAM actions required for the ListFindingsMetrics API call.

---

##### `ListScans`<sup>Required</sup> <a name="ListScans" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.ListScans"></a>

```typescript
public readonly ListScans: string[];
```

- *Type:* string[]

IAM actions required for the ListScans API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountConfiguration`<sup>Required</sup> <a name="opGetAccountConfiguration" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetAccountConfiguration"></a>

```typescript
public readonly opGetAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountConfiguration API call.

---

##### `opGetFindings`<sup>Required</sup> <a name="opGetFindings" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetFindings"></a>

```typescript
public readonly opGetFindings: string[];
```

- *Type:* string[]

IAM actions required for the GetFindings API call.

---

##### `opGetMetricsSummary`<sup>Required</sup> <a name="opGetMetricsSummary" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetMetricsSummary"></a>

```typescript
public readonly opGetMetricsSummary: string[];
```

- *Type:* string[]

IAM actions required for the GetMetricsSummary API call.

---

##### `opGetScan`<sup>Required</sup> <a name="opGetScan" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.opGetScan"></a>

```typescript
public readonly opGetScan: string[];
```

- *Type:* string[]

IAM actions required for the GetScan API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountConfiguration`<sup>Required</sup> <a name="UpdateAccountConfiguration" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityOperations.property.UpdateAccountConfiguration"></a>

```typescript
public readonly UpdateAccountConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountConfiguration API call.

---

### CodeguruSecurityResources <a name="CodeguruSecurityResources" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources"></a>

ARN builders, validators, and parsers for codeguru-security resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.Initializer"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

new codeguru_security.CodeguruSecurityResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.isValidScanNameArn">isValidScanNameArn</a></code> | Validates whether a string is a valid ARN for the ScanName resource. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.parseScanNameArn">parseScanNameArn</a></code> | Parses a ScanName ARN into its components. |
| <code><a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.scanName">scanName</a></code> | Builds an ARN for the ScanName resource. |

---

##### `isValidScanNameArn` <a name="isValidScanNameArn" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.isValidScanNameArn"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

codeguru_security.CodeguruSecurityResources.isValidScanNameArn(arn: string)
```

Validates whether a string is a valid ARN for the ScanName resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.isValidScanNameArn.parameter.arn"></a>

- *Type:* string

---

##### `parseScanNameArn` <a name="parseScanNameArn" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.parseScanNameArn"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

codeguru_security.CodeguruSecurityResources.parseScanNameArn(arn: string)
```

Parses a ScanName ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.parseScanNameArn.parameter.arn"></a>

- *Type:* string

---

##### `scanName` <a name="scanName" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.scanName"></a>

```typescript
import { codeguru_security } from '@cdk_utils/iam'

codeguru_security.CodeguruSecurityResources.scanName(props: CodeguruSecurityScanNameArnProps)
```

Builds an ARN for the ScanName resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.codeguru_security.CodeguruSecurityResources.scanName.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.codeguru_security.CodeguruSecurityScanNameArnProps">CodeguruSecurityScanNameArnProps</a>

---




