# `cur` Submodule <a name="`cur` Submodule" id="@cdk_utils/iam.cur"></a>


## Structs <a name="Structs" id="Structs"></a>

### CurCurArnComponents <a name="CurCurArnComponents" id="@cdk_utils/iam.cur.CurCurArnComponents"></a>

Parsed components of a cur ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cur.CurCurArnComponents.Initializer"></a>

```typescript
import { cur } from '@cdk_utils/iam'

const curCurArnComponents: cur.CurCurArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnComponents.property.reportName">reportName</a></code> | <code>string</code> | The ReportName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cur.CurCurArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cur.CurCurArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cur.CurCurArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdk_utils/iam.cur.CurCurArnComponents.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The ReportName component.

---

### CurCurArnProps <a name="CurCurArnProps" id="@cdk_utils/iam.cur.CurCurArnProps"></a>

Properties for building a cur ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cur.CurCurArnProps.Initializer"></a>

```typescript
import { cur } from '@cdk_utils/iam'

const curCurArnProps: cur.CurCurArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnProps.property.reportName">reportName</a></code> | <code>string</code> | The ReportName component of the ARN. |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cur.CurCurArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdk_utils/iam.cur.CurCurArnProps.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The ReportName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cur.CurCurArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cur.CurCurArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cur.CurCurArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CurActions <a name="CurActions" id="@cdk_utils/iam.cur.CurActions"></a>

IAM action constants for the cur service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cur.CurActions.Initializer"></a>

```typescript
import { cur } from '@cdk_utils/iam'

new cur.CurActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.actionGetClassicReport">actionGetClassicReport</a></code> | <code>string</code> | [Read] cur:GetClassicReport. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.actionGetClassicReportPreferences">actionGetClassicReportPreferences</a></code> | <code>string</code> | [Read] cur:GetClassicReportPreferences. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.actionGetUsageReport">actionGetUsageReport</a></code> | <code>string</code> | [Read] cur:GetUsageReport. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.DeleteReportDefinition">DeleteReportDefinition</a></code> | <code>string</code> | [Write] cur:DeleteReportDefinition. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.DescribeReportDefinitions">DescribeReportDefinitions</a></code> | <code>string</code> | [Read] cur:DescribeReportDefinitions. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] cur:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.ModifyReportDefinition">ModifyReportDefinition</a></code> | <code>string</code> | [Write] cur:ModifyReportDefinition. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.PutClassicReportPreferences">PutClassicReportPreferences</a></code> | <code>string</code> | [Write] cur:PutClassicReportPreferences. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.PutReportDefinition">PutReportDefinition</a></code> | <code>string</code> | [Write] cur:PutReportDefinition. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cur:TagResource. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cur:UntagResource. |
| <code><a href="#@cdk_utils/iam.cur.CurActions.property.ValidateReportDestination">ValidateReportDestination</a></code> | <code>string</code> | [Read] cur:ValidateReportDestination. |

---

##### `actionGetClassicReport`<sup>Required</sup> <a name="actionGetClassicReport" id="@cdk_utils/iam.cur.CurActions.property.actionGetClassicReport"></a>

```typescript
public readonly actionGetClassicReport: string;
```

- *Type:* string

[Read] cur:GetClassicReport.

---

##### `actionGetClassicReportPreferences`<sup>Required</sup> <a name="actionGetClassicReportPreferences" id="@cdk_utils/iam.cur.CurActions.property.actionGetClassicReportPreferences"></a>

```typescript
public readonly actionGetClassicReportPreferences: string;
```

- *Type:* string

[Read] cur:GetClassicReportPreferences.

---

##### `actionGetUsageReport`<sup>Required</sup> <a name="actionGetUsageReport" id="@cdk_utils/iam.cur.CurActions.property.actionGetUsageReport"></a>

```typescript
public readonly actionGetUsageReport: string;
```

- *Type:* string

[Read] cur:GetUsageReport.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cur.CurActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cur.CurActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cur.CurActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cur.CurActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cur.CurActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `DeleteReportDefinition`<sup>Required</sup> <a name="DeleteReportDefinition" id="@cdk_utils/iam.cur.CurActions.property.DeleteReportDefinition"></a>

```typescript
public readonly DeleteReportDefinition: string;
```

- *Type:* string

[Write] cur:DeleteReportDefinition.

---

##### `DescribeReportDefinitions`<sup>Required</sup> <a name="DescribeReportDefinitions" id="@cdk_utils/iam.cur.CurActions.property.DescribeReportDefinitions"></a>

```typescript
public readonly DescribeReportDefinitions: string;
```

- *Type:* string

[Read] cur:DescribeReportDefinitions.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cur.CurActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] cur:ListTagsForResource.

---

##### `ModifyReportDefinition`<sup>Required</sup> <a name="ModifyReportDefinition" id="@cdk_utils/iam.cur.CurActions.property.ModifyReportDefinition"></a>

```typescript
public readonly ModifyReportDefinition: string;
```

- *Type:* string

[Write] cur:ModifyReportDefinition.

---

##### `PutClassicReportPreferences`<sup>Required</sup> <a name="PutClassicReportPreferences" id="@cdk_utils/iam.cur.CurActions.property.PutClassicReportPreferences"></a>

```typescript
public readonly PutClassicReportPreferences: string;
```

- *Type:* string

[Write] cur:PutClassicReportPreferences.

---

##### `PutReportDefinition`<sup>Required</sup> <a name="PutReportDefinition" id="@cdk_utils/iam.cur.CurActions.property.PutReportDefinition"></a>

```typescript
public readonly PutReportDefinition: string;
```

- *Type:* string

[Write] cur:PutReportDefinition.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cur.CurActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cur.CurActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cur:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cur.CurActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cur:UntagResource.

---

##### `ValidateReportDestination`<sup>Required</sup> <a name="ValidateReportDestination" id="@cdk_utils/iam.cur.CurActions.property.ValidateReportDestination"></a>

```typescript
public readonly ValidateReportDestination: string;
```

- *Type:* string

[Read] cur:ValidateReportDestination.

---

### CurConditions <a name="CurConditions" id="@cdk_utils/iam.cur.CurConditions"></a>

Condition key constants and builders for cur.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cur.CurConditions.Initializer"></a>

```typescript
import { cur } from '@cdk_utils/iam'

new cur.CurConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cur.CurConditions.requestTag"></a>

```typescript
import { cur } from '@cdk_utils/iam'

cur.CurConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cur.CurConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cur.CurConditions.resourceTag"></a>

```typescript
import { cur } from '@cdk_utils/iam'

cur.CurConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cur.CurConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cur.CurConditions.tagKeys"></a>

```typescript
import { cur } from '@cdk_utils/iam'

cur.CurConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cur.CurConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cur.CurConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cur.CurConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cur.CurConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cur.CurConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.cur.CurConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cur.CurConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cur.CurConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CurOperations <a name="CurOperations" id="@cdk_utils/iam.cur.CurOperations"></a>

API operation to required IAM actions mapping for cur.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cur.CurOperations.Initializer"></a>

```typescript
import { cur } from '@cdk_utils/iam'

new cur.CurOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.DeleteReportDefinition">DeleteReportDefinition</a></code> | <code>string[]</code> | IAM actions required for the DeleteReportDefinition API call. |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.DescribeReportDefinitions">DescribeReportDefinitions</a></code> | <code>string[]</code> | IAM actions required for the DescribeReportDefinitions API call. |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.ModifyReportDefinition">ModifyReportDefinition</a></code> | <code>string[]</code> | IAM actions required for the ModifyReportDefinition API call. |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.PutReportDefinition">PutReportDefinition</a></code> | <code>string[]</code> | IAM actions required for the PutReportDefinition API call. |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cur.CurOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `DeleteReportDefinition`<sup>Required</sup> <a name="DeleteReportDefinition" id="@cdk_utils/iam.cur.CurOperations.property.DeleteReportDefinition"></a>

```typescript
public readonly DeleteReportDefinition: string[];
```

- *Type:* string[]

IAM actions required for the DeleteReportDefinition API call.

---

##### `DescribeReportDefinitions`<sup>Required</sup> <a name="DescribeReportDefinitions" id="@cdk_utils/iam.cur.CurOperations.property.DescribeReportDefinitions"></a>

```typescript
public readonly DescribeReportDefinitions: string[];
```

- *Type:* string[]

IAM actions required for the DescribeReportDefinitions API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cur.CurOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ModifyReportDefinition`<sup>Required</sup> <a name="ModifyReportDefinition" id="@cdk_utils/iam.cur.CurOperations.property.ModifyReportDefinition"></a>

```typescript
public readonly ModifyReportDefinition: string[];
```

- *Type:* string[]

IAM actions required for the ModifyReportDefinition API call.

---

##### `PutReportDefinition`<sup>Required</sup> <a name="PutReportDefinition" id="@cdk_utils/iam.cur.CurOperations.property.PutReportDefinition"></a>

```typescript
public readonly PutReportDefinition: string[];
```

- *Type:* string[]

IAM actions required for the PutReportDefinition API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cur.CurOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cur.CurOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### CurResources <a name="CurResources" id="@cdk_utils/iam.cur.CurResources"></a>

ARN builders, validators, and parsers for cur resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cur.CurResources.Initializer"></a>

```typescript
import { cur } from '@cdk_utils/iam'

new cur.CurResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cur.CurResources.cur">cur</a></code> | Builds an ARN for the cur resource. |
| <code><a href="#@cdk_utils/iam.cur.CurResources.isValidCurArn">isValidCurArn</a></code> | Validates whether a string is a valid ARN for the cur resource. |
| <code><a href="#@cdk_utils/iam.cur.CurResources.parseCurArn">parseCurArn</a></code> | Parses a cur ARN into its components. |

---

##### `cur` <a name="cur" id="@cdk_utils/iam.cur.CurResources.cur"></a>

```typescript
import { cur } from '@cdk_utils/iam'

cur.CurResources.cur(props: CurCurArnProps)
```

Builds an ARN for the cur resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cur.CurResources.cur.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cur.CurCurArnProps">CurCurArnProps</a>

---

##### `isValidCurArn` <a name="isValidCurArn" id="@cdk_utils/iam.cur.CurResources.isValidCurArn"></a>

```typescript
import { cur } from '@cdk_utils/iam'

cur.CurResources.isValidCurArn(arn: string)
```

Validates whether a string is a valid ARN for the cur resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cur.CurResources.isValidCurArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCurArn` <a name="parseCurArn" id="@cdk_utils/iam.cur.CurResources.parseCurArn"></a>

```typescript
import { cur } from '@cdk_utils/iam'

cur.CurResources.parseCurArn(arn: string)
```

Parses a cur ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cur.CurResources.parseCurArn.parameter.arn"></a>

- *Type:* string

---




