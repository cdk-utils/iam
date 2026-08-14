# `translate` Submodule <a name="`translate` Submodule" id="@cdk_utils/iam.translate"></a>


## Structs <a name="Structs" id="Structs"></a>

### TranslateParallelDataArnComponents <a name="TranslateParallelDataArnComponents" id="@cdk_utils/iam.translate.TranslateParallelDataArnComponents"></a>

Parsed components of a parallel-data ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.translate.TranslateParallelDataArnComponents.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

const translateParallelDataArnComponents: translate.TranslateParallelDataArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.translate.TranslateParallelDataArnComponents.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component.

---

### TranslateParallelDataArnProps <a name="TranslateParallelDataArnProps" id="@cdk_utils/iam.translate.TranslateParallelDataArnProps"></a>

Properties for building a parallel-data ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.translate.TranslateParallelDataArnProps.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

const translateParallelDataArnProps: translate.TranslateParallelDataArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.translate.TranslateParallelDataArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### TranslateTerminologyArnComponents <a name="TranslateTerminologyArnComponents" id="@cdk_utils/iam.translate.TranslateTerminologyArnComponents"></a>

Parsed components of a terminology ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.translate.TranslateTerminologyArnComponents.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

const translateTerminologyArnComponents: translate.TranslateTerminologyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.translate.TranslateTerminologyArnComponents.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component.

---

### TranslateTerminologyArnProps <a name="TranslateTerminologyArnProps" id="@cdk_utils/iam.translate.TranslateTerminologyArnProps"></a>

Properties for building a terminology ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.translate.TranslateTerminologyArnProps.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

const translateTerminologyArnProps: translate.TranslateTerminologyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.translate.TranslateTerminologyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### TranslateActions <a name="TranslateActions" id="@cdk_utils/iam.translate.TranslateActions"></a>

IAM action constants for the translate service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.translate.TranslateActions.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

new translate.TranslateActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.actionGetParallelData">actionGetParallelData</a></code> | <code>string</code> | [Read] translate:GetParallelData. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.actionGetTerminology">actionGetTerminology</a></code> | <code>string</code> | [Read] translate:GetTerminology. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.CreateParallelData">CreateParallelData</a></code> | <code>string</code> | [Write] translate:CreateParallelData. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.DeleteParallelData">DeleteParallelData</a></code> | <code>string</code> | [Write] translate:DeleteParallelData. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.DeleteTerminology">DeleteTerminology</a></code> | <code>string</code> | [Write] translate:DeleteTerminology. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.DescribeTextTranslationJob">DescribeTextTranslationJob</a></code> | <code>string</code> | [Read] translate:DescribeTextTranslationJob. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.ImportTerminology">ImportTerminology</a></code> | <code>string</code> | [Write] translate:ImportTerminology. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.ListLanguages">ListLanguages</a></code> | <code>string</code> | [List] translate:ListLanguages. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.ListParallelData">ListParallelData</a></code> | <code>string</code> | [List] translate:ListParallelData. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] translate:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.ListTerminologies">ListTerminologies</a></code> | <code>string</code> | [List] translate:ListTerminologies. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.ListTextTranslationJobs">ListTextTranslationJobs</a></code> | <code>string</code> | [List] translate:ListTextTranslationJobs. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.StartTextTranslationJob">StartTextTranslationJob</a></code> | <code>string</code> | [Write] translate:StartTextTranslationJob. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.StopTextTranslationJob">StopTextTranslationJob</a></code> | <code>string</code> | [Write] translate:StopTextTranslationJob. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] translate:TagResource. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.TranslateDocument">TranslateDocument</a></code> | <code>string</code> | [Read] translate:TranslateDocument. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.TranslateText">TranslateText</a></code> | <code>string</code> | [Read] translate:TranslateText. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] translate:UntagResource. |
| <code><a href="#@cdk_utils/iam.translate.TranslateActions.property.UpdateParallelData">UpdateParallelData</a></code> | <code>string</code> | [Write] translate:UpdateParallelData. |

---

##### `actionGetParallelData`<sup>Required</sup> <a name="actionGetParallelData" id="@cdk_utils/iam.translate.TranslateActions.property.actionGetParallelData"></a>

```typescript
public readonly actionGetParallelData: string;
```

- *Type:* string

[Read] translate:GetParallelData.

---

##### `actionGetTerminology`<sup>Required</sup> <a name="actionGetTerminology" id="@cdk_utils/iam.translate.TranslateActions.property.actionGetTerminology"></a>

```typescript
public readonly actionGetTerminology: string;
```

- *Type:* string

[Read] translate:GetTerminology.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.translate.TranslateActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.translate.TranslateActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.translate.TranslateActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.translate.TranslateActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.translate.TranslateActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateParallelData`<sup>Required</sup> <a name="CreateParallelData" id="@cdk_utils/iam.translate.TranslateActions.property.CreateParallelData"></a>

```typescript
public readonly CreateParallelData: string;
```

- *Type:* string

[Write] translate:CreateParallelData.

---

##### `DeleteParallelData`<sup>Required</sup> <a name="DeleteParallelData" id="@cdk_utils/iam.translate.TranslateActions.property.DeleteParallelData"></a>

```typescript
public readonly DeleteParallelData: string;
```

- *Type:* string

[Write] translate:DeleteParallelData.

---

##### `DeleteTerminology`<sup>Required</sup> <a name="DeleteTerminology" id="@cdk_utils/iam.translate.TranslateActions.property.DeleteTerminology"></a>

```typescript
public readonly DeleteTerminology: string;
```

- *Type:* string

[Write] translate:DeleteTerminology.

---

##### `DescribeTextTranslationJob`<sup>Required</sup> <a name="DescribeTextTranslationJob" id="@cdk_utils/iam.translate.TranslateActions.property.DescribeTextTranslationJob"></a>

```typescript
public readonly DescribeTextTranslationJob: string;
```

- *Type:* string

[Read] translate:DescribeTextTranslationJob.

---

##### `ImportTerminology`<sup>Required</sup> <a name="ImportTerminology" id="@cdk_utils/iam.translate.TranslateActions.property.ImportTerminology"></a>

```typescript
public readonly ImportTerminology: string;
```

- *Type:* string

[Write] translate:ImportTerminology.

---

##### `ListLanguages`<sup>Required</sup> <a name="ListLanguages" id="@cdk_utils/iam.translate.TranslateActions.property.ListLanguages"></a>

```typescript
public readonly ListLanguages: string;
```

- *Type:* string

[List] translate:ListLanguages.

---

##### `ListParallelData`<sup>Required</sup> <a name="ListParallelData" id="@cdk_utils/iam.translate.TranslateActions.property.ListParallelData"></a>

```typescript
public readonly ListParallelData: string;
```

- *Type:* string

[List] translate:ListParallelData.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.translate.TranslateActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] translate:ListTagsForResource.

---

##### `ListTerminologies`<sup>Required</sup> <a name="ListTerminologies" id="@cdk_utils/iam.translate.TranslateActions.property.ListTerminologies"></a>

```typescript
public readonly ListTerminologies: string;
```

- *Type:* string

[List] translate:ListTerminologies.

---

##### `ListTextTranslationJobs`<sup>Required</sup> <a name="ListTextTranslationJobs" id="@cdk_utils/iam.translate.TranslateActions.property.ListTextTranslationJobs"></a>

```typescript
public readonly ListTextTranslationJobs: string;
```

- *Type:* string

[List] translate:ListTextTranslationJobs.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.translate.TranslateActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartTextTranslationJob`<sup>Required</sup> <a name="StartTextTranslationJob" id="@cdk_utils/iam.translate.TranslateActions.property.StartTextTranslationJob"></a>

```typescript
public readonly StartTextTranslationJob: string;
```

- *Type:* string

[Write] translate:StartTextTranslationJob.

---

##### `StopTextTranslationJob`<sup>Required</sup> <a name="StopTextTranslationJob" id="@cdk_utils/iam.translate.TranslateActions.property.StopTextTranslationJob"></a>

```typescript
public readonly StopTextTranslationJob: string;
```

- *Type:* string

[Write] translate:StopTextTranslationJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.translate.TranslateActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] translate:TagResource.

---

##### `TranslateDocument`<sup>Required</sup> <a name="TranslateDocument" id="@cdk_utils/iam.translate.TranslateActions.property.TranslateDocument"></a>

```typescript
public readonly TranslateDocument: string;
```

- *Type:* string

[Read] translate:TranslateDocument.

---

##### `TranslateText`<sup>Required</sup> <a name="TranslateText" id="@cdk_utils/iam.translate.TranslateActions.property.TranslateText"></a>

```typescript
public readonly TranslateText: string;
```

- *Type:* string

[Read] translate:TranslateText.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.translate.TranslateActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] translate:UntagResource.

---

##### `UpdateParallelData`<sup>Required</sup> <a name="UpdateParallelData" id="@cdk_utils/iam.translate.TranslateActions.property.UpdateParallelData"></a>

```typescript
public readonly UpdateParallelData: string;
```

- *Type:* string

[Write] translate:UpdateParallelData.

---

### TranslateConditions <a name="TranslateConditions" id="@cdk_utils/iam.translate.TranslateConditions"></a>

Condition key constants and builders for translate.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.translate.TranslateConditions.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

new translate.TranslateConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.translate.TranslateConditions.requestTag"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.translate.TranslateConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.translate.TranslateConditions.resourceTag"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.translate.TranslateConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.translate.TranslateConditions.tagKeys"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.translate.TranslateConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.CreateParallelDataConditionKeys">CreateParallelDataConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateParallelData action. |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.ImportTerminologyConditionKeys">ImportTerminologyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ImportTerminology action. |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.translate.TranslateConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.translate.TranslateConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.translate.TranslateConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.translate.TranslateConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateParallelDataConditionKeys`<sup>Required</sup> <a name="CreateParallelDataConditionKeys" id="@cdk_utils/iam.translate.TranslateConditions.property.CreateParallelDataConditionKeys"></a>

```typescript
public readonly CreateParallelDataConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateParallelData action.

---

##### `ImportTerminologyConditionKeys`<sup>Required</sup> <a name="ImportTerminologyConditionKeys" id="@cdk_utils/iam.translate.TranslateConditions.property.ImportTerminologyConditionKeys"></a>

```typescript
public readonly ImportTerminologyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ImportTerminology action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.translate.TranslateConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.translate.TranslateConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### TranslateOperations <a name="TranslateOperations" id="@cdk_utils/iam.translate.TranslateOperations"></a>

API operation to required IAM actions mapping for translate.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.translate.TranslateOperations.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

new translate.TranslateOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.CreateParallelData">CreateParallelData</a></code> | <code>string[]</code> | IAM actions required for the CreateParallelData API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.DeleteParallelData">DeleteParallelData</a></code> | <code>string[]</code> | IAM actions required for the DeleteParallelData API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.DeleteTerminology">DeleteTerminology</a></code> | <code>string[]</code> | IAM actions required for the DeleteTerminology API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.DescribeTextTranslationJob">DescribeTextTranslationJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeTextTranslationJob API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.ImportTerminology">ImportTerminology</a></code> | <code>string[]</code> | IAM actions required for the ImportTerminology API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.ListLanguages">ListLanguages</a></code> | <code>string[]</code> | IAM actions required for the ListLanguages API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.ListParallelData">ListParallelData</a></code> | <code>string[]</code> | IAM actions required for the ListParallelData API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.ListTerminologies">ListTerminologies</a></code> | <code>string[]</code> | IAM actions required for the ListTerminologies API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.ListTextTranslationJobs">ListTextTranslationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListTextTranslationJobs API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.opGetParallelData">opGetParallelData</a></code> | <code>string[]</code> | IAM actions required for the GetParallelData API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.opGetTerminology">opGetTerminology</a></code> | <code>string[]</code> | IAM actions required for the GetTerminology API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.StartTextTranslationJob">StartTextTranslationJob</a></code> | <code>string[]</code> | IAM actions required for the StartTextTranslationJob API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.StopTextTranslationJob">StopTextTranslationJob</a></code> | <code>string[]</code> | IAM actions required for the StopTextTranslationJob API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.TranslateDocument">TranslateDocument</a></code> | <code>string[]</code> | IAM actions required for the TranslateDocument API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.TranslateText">TranslateText</a></code> | <code>string[]</code> | IAM actions required for the TranslateText API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.translate.TranslateOperations.property.UpdateParallelData">UpdateParallelData</a></code> | <code>string[]</code> | IAM actions required for the UpdateParallelData API call. |

---

##### `CreateParallelData`<sup>Required</sup> <a name="CreateParallelData" id="@cdk_utils/iam.translate.TranslateOperations.property.CreateParallelData"></a>

```typescript
public readonly CreateParallelData: string[];
```

- *Type:* string[]

IAM actions required for the CreateParallelData API call.

---

##### `DeleteParallelData`<sup>Required</sup> <a name="DeleteParallelData" id="@cdk_utils/iam.translate.TranslateOperations.property.DeleteParallelData"></a>

```typescript
public readonly DeleteParallelData: string[];
```

- *Type:* string[]

IAM actions required for the DeleteParallelData API call.

---

##### `DeleteTerminology`<sup>Required</sup> <a name="DeleteTerminology" id="@cdk_utils/iam.translate.TranslateOperations.property.DeleteTerminology"></a>

```typescript
public readonly DeleteTerminology: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTerminology API call.

---

##### `DescribeTextTranslationJob`<sup>Required</sup> <a name="DescribeTextTranslationJob" id="@cdk_utils/iam.translate.TranslateOperations.property.DescribeTextTranslationJob"></a>

```typescript
public readonly DescribeTextTranslationJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTextTranslationJob API call.

---

##### `ImportTerminology`<sup>Required</sup> <a name="ImportTerminology" id="@cdk_utils/iam.translate.TranslateOperations.property.ImportTerminology"></a>

```typescript
public readonly ImportTerminology: string[];
```

- *Type:* string[]

IAM actions required for the ImportTerminology API call.

---

##### `ListLanguages`<sup>Required</sup> <a name="ListLanguages" id="@cdk_utils/iam.translate.TranslateOperations.property.ListLanguages"></a>

```typescript
public readonly ListLanguages: string[];
```

- *Type:* string[]

IAM actions required for the ListLanguages API call.

---

##### `ListParallelData`<sup>Required</sup> <a name="ListParallelData" id="@cdk_utils/iam.translate.TranslateOperations.property.ListParallelData"></a>

```typescript
public readonly ListParallelData: string[];
```

- *Type:* string[]

IAM actions required for the ListParallelData API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.translate.TranslateOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTerminologies`<sup>Required</sup> <a name="ListTerminologies" id="@cdk_utils/iam.translate.TranslateOperations.property.ListTerminologies"></a>

```typescript
public readonly ListTerminologies: string[];
```

- *Type:* string[]

IAM actions required for the ListTerminologies API call.

---

##### `ListTextTranslationJobs`<sup>Required</sup> <a name="ListTextTranslationJobs" id="@cdk_utils/iam.translate.TranslateOperations.property.ListTextTranslationJobs"></a>

```typescript
public readonly ListTextTranslationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListTextTranslationJobs API call.

---

##### `opGetParallelData`<sup>Required</sup> <a name="opGetParallelData" id="@cdk_utils/iam.translate.TranslateOperations.property.opGetParallelData"></a>

```typescript
public readonly opGetParallelData: string[];
```

- *Type:* string[]

IAM actions required for the GetParallelData API call.

---

##### `opGetTerminology`<sup>Required</sup> <a name="opGetTerminology" id="@cdk_utils/iam.translate.TranslateOperations.property.opGetTerminology"></a>

```typescript
public readonly opGetTerminology: string[];
```

- *Type:* string[]

IAM actions required for the GetTerminology API call.

---

##### `StartTextTranslationJob`<sup>Required</sup> <a name="StartTextTranslationJob" id="@cdk_utils/iam.translate.TranslateOperations.property.StartTextTranslationJob"></a>

```typescript
public readonly StartTextTranslationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartTextTranslationJob API call.

---

##### `StopTextTranslationJob`<sup>Required</sup> <a name="StopTextTranslationJob" id="@cdk_utils/iam.translate.TranslateOperations.property.StopTextTranslationJob"></a>

```typescript
public readonly StopTextTranslationJob: string[];
```

- *Type:* string[]

IAM actions required for the StopTextTranslationJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.translate.TranslateOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `TranslateDocument`<sup>Required</sup> <a name="TranslateDocument" id="@cdk_utils/iam.translate.TranslateOperations.property.TranslateDocument"></a>

```typescript
public readonly TranslateDocument: string[];
```

- *Type:* string[]

IAM actions required for the TranslateDocument API call.

---

##### `TranslateText`<sup>Required</sup> <a name="TranslateText" id="@cdk_utils/iam.translate.TranslateOperations.property.TranslateText"></a>

```typescript
public readonly TranslateText: string[];
```

- *Type:* string[]

IAM actions required for the TranslateText API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.translate.TranslateOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateParallelData`<sup>Required</sup> <a name="UpdateParallelData" id="@cdk_utils/iam.translate.TranslateOperations.property.UpdateParallelData"></a>

```typescript
public readonly UpdateParallelData: string[];
```

- *Type:* string[]

IAM actions required for the UpdateParallelData API call.

---

### TranslateResources <a name="TranslateResources" id="@cdk_utils/iam.translate.TranslateResources"></a>

ARN builders, validators, and parsers for translate resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.translate.TranslateResources.Initializer"></a>

```typescript
import { translate } from '@cdk_utils/iam'

new translate.TranslateResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.translate.TranslateResources.isValidParallelDataArn">isValidParallelDataArn</a></code> | Validates whether a string is a valid ARN for the parallel-data resource. |
| <code><a href="#@cdk_utils/iam.translate.TranslateResources.isValidTerminologyArn">isValidTerminologyArn</a></code> | Validates whether a string is a valid ARN for the terminology resource. |
| <code><a href="#@cdk_utils/iam.translate.TranslateResources.parallelData">parallelData</a></code> | Builds an ARN for the parallel-data resource. |
| <code><a href="#@cdk_utils/iam.translate.TranslateResources.parseParallelDataArn">parseParallelDataArn</a></code> | Parses a parallel-data ARN into its components. |
| <code><a href="#@cdk_utils/iam.translate.TranslateResources.parseTerminologyArn">parseTerminologyArn</a></code> | Parses a terminology ARN into its components. |
| <code><a href="#@cdk_utils/iam.translate.TranslateResources.terminology">terminology</a></code> | Builds an ARN for the terminology resource. |

---

##### `isValidParallelDataArn` <a name="isValidParallelDataArn" id="@cdk_utils/iam.translate.TranslateResources.isValidParallelDataArn"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateResources.isValidParallelDataArn(arn: string)
```

Validates whether a string is a valid ARN for the parallel-data resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.translate.TranslateResources.isValidParallelDataArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidTerminologyArn` <a name="isValidTerminologyArn" id="@cdk_utils/iam.translate.TranslateResources.isValidTerminologyArn"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateResources.isValidTerminologyArn(arn: string)
```

Validates whether a string is a valid ARN for the terminology resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.translate.TranslateResources.isValidTerminologyArn.parameter.arn"></a>

- *Type:* string

---

##### `parallelData` <a name="parallelData" id="@cdk_utils/iam.translate.TranslateResources.parallelData"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateResources.parallelData(props: TranslateParallelDataArnProps)
```

Builds an ARN for the parallel-data resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.translate.TranslateResources.parallelData.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.translate.TranslateParallelDataArnProps">TranslateParallelDataArnProps</a>

---

##### `parseParallelDataArn` <a name="parseParallelDataArn" id="@cdk_utils/iam.translate.TranslateResources.parseParallelDataArn"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateResources.parseParallelDataArn(arn: string)
```

Parses a parallel-data ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.translate.TranslateResources.parseParallelDataArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTerminologyArn` <a name="parseTerminologyArn" id="@cdk_utils/iam.translate.TranslateResources.parseTerminologyArn"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateResources.parseTerminologyArn(arn: string)
```

Parses a terminology ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.translate.TranslateResources.parseTerminologyArn.parameter.arn"></a>

- *Type:* string

---

##### `terminology` <a name="terminology" id="@cdk_utils/iam.translate.TranslateResources.terminology"></a>

```typescript
import { translate } from '@cdk_utils/iam'

translate.TranslateResources.terminology(props: TranslateTerminologyArnProps)
```

Builds an ARN for the terminology resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.translate.TranslateResources.terminology.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.translate.TranslateTerminologyArnProps">TranslateTerminologyArnProps</a>

---




