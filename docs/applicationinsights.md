# `applicationinsights` Submodule <a name="`applicationinsights` Submodule" id="@cdk_utils/iam.applicationinsights"></a>



## Classes <a name="Classes" id="Classes"></a>

### ApplicationinsightsActions <a name="ApplicationinsightsActions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions"></a>

IAM action constants for the applicationinsights service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.Initializer"></a>

```typescript
import { applicationinsights } from '@cdk_utils/iam'

new applicationinsights.ApplicationinsightsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AddWorkload">AddWorkload</a></code> | <code>string</code> | [Write] applicationinsights:AddWorkload. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] applicationinsights:CreateApplication. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.CreateComponent">CreateComponent</a></code> | <code>string</code> | [Write] applicationinsights:CreateComponent. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.CreateLogPattern">CreateLogPattern</a></code> | <code>string</code> | [Write] applicationinsights:CreateLogPattern. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] applicationinsights:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DeleteComponent">DeleteComponent</a></code> | <code>string</code> | [Write] applicationinsights:DeleteComponent. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DeleteLogPattern">DeleteLogPattern</a></code> | <code>string</code> | [Write] applicationinsights:DeleteLogPattern. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeApplication">DescribeApplication</a></code> | <code>string</code> | [Read] applicationinsights:DescribeApplication. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeComponent">DescribeComponent</a></code> | <code>string</code> | [Read] applicationinsights:DescribeComponent. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeComponentConfiguration">DescribeComponentConfiguration</a></code> | <code>string</code> | [Read] applicationinsights:DescribeComponentConfiguration. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeComponentConfigurationRecommendation">DescribeComponentConfigurationRecommendation</a></code> | <code>string</code> | [Read] applicationinsights:DescribeComponentConfigurationRecommendation. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeLogPattern">DescribeLogPattern</a></code> | <code>string</code> | [Read] applicationinsights:DescribeLogPattern. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeObservation">DescribeObservation</a></code> | <code>string</code> | [Read] applicationinsights:DescribeObservation. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeProblem">DescribeProblem</a></code> | <code>string</code> | [Read] applicationinsights:DescribeProblem. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeProblemObservations">DescribeProblemObservations</a></code> | <code>string</code> | [Read] applicationinsights:DescribeProblemObservations. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeWorkload">DescribeWorkload</a></code> | <code>string</code> | [Read] applicationinsights:DescribeWorkload. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.Link">Link</a></code> | <code>string</code> | [Write] applicationinsights:Link. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] applicationinsights:ListApplications. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListComponents">ListComponents</a></code> | <code>string</code> | [List] applicationinsights:ListComponents. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListConfigurationHistory">ListConfigurationHistory</a></code> | <code>string</code> | [List] applicationinsights:ListConfigurationHistory. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListLogPatterns">ListLogPatterns</a></code> | <code>string</code> | [List] applicationinsights:ListLogPatterns. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListLogPatternSets">ListLogPatternSets</a></code> | <code>string</code> | [List] applicationinsights:ListLogPatternSets. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListProblems">ListProblems</a></code> | <code>string</code> | [List] applicationinsights:ListProblems. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] applicationinsights:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListWorkloads">ListWorkloads</a></code> | <code>string</code> | [List] applicationinsights:ListWorkloads. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.RemoveWorkload">RemoveWorkload</a></code> | <code>string</code> | [Write] applicationinsights:RemoveWorkload. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] applicationinsights:TagResource. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] applicationinsights:UntagResource. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateApplication">UpdateApplication</a></code> | <code>string</code> | [Write] applicationinsights:UpdateApplication. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateComponent">UpdateComponent</a></code> | <code>string</code> | [Write] applicationinsights:UpdateComponent. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateComponentConfiguration">UpdateComponentConfiguration</a></code> | <code>string</code> | [Write] applicationinsights:UpdateComponentConfiguration. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateLogPattern">UpdateLogPattern</a></code> | <code>string</code> | [Write] applicationinsights:UpdateLogPattern. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateProblem">UpdateProblem</a></code> | <code>string</code> | [Write] applicationinsights:UpdateProblem. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateWorkload">UpdateWorkload</a></code> | <code>string</code> | [Write] applicationinsights:UpdateWorkload. |

---

##### `AddWorkload`<sup>Required</sup> <a name="AddWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AddWorkload"></a>

```typescript
public readonly AddWorkload: string;
```

- *Type:* string

[Write] applicationinsights:AddWorkload.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] applicationinsights:CreateApplication.

---

##### `CreateComponent`<sup>Required</sup> <a name="CreateComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.CreateComponent"></a>

```typescript
public readonly CreateComponent: string;
```

- *Type:* string

[Write] applicationinsights:CreateComponent.

---

##### `CreateLogPattern`<sup>Required</sup> <a name="CreateLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.CreateLogPattern"></a>

```typescript
public readonly CreateLogPattern: string;
```

- *Type:* string

[Write] applicationinsights:CreateLogPattern.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] applicationinsights:DeleteApplication.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string;
```

- *Type:* string

[Write] applicationinsights:DeleteComponent.

---

##### `DeleteLogPattern`<sup>Required</sup> <a name="DeleteLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DeleteLogPattern"></a>

```typescript
public readonly DeleteLogPattern: string;
```

- *Type:* string

[Write] applicationinsights:DeleteLogPattern.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string;
```

- *Type:* string

[Read] applicationinsights:DescribeApplication.

---

##### `DescribeComponent`<sup>Required</sup> <a name="DescribeComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeComponent"></a>

```typescript
public readonly DescribeComponent: string;
```

- *Type:* string

[Read] applicationinsights:DescribeComponent.

---

##### `DescribeComponentConfiguration`<sup>Required</sup> <a name="DescribeComponentConfiguration" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeComponentConfiguration"></a>

```typescript
public readonly DescribeComponentConfiguration: string;
```

- *Type:* string

[Read] applicationinsights:DescribeComponentConfiguration.

---

##### `DescribeComponentConfigurationRecommendation`<sup>Required</sup> <a name="DescribeComponentConfigurationRecommendation" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeComponentConfigurationRecommendation"></a>

```typescript
public readonly DescribeComponentConfigurationRecommendation: string;
```

- *Type:* string

[Read] applicationinsights:DescribeComponentConfigurationRecommendation.

---

##### `DescribeLogPattern`<sup>Required</sup> <a name="DescribeLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeLogPattern"></a>

```typescript
public readonly DescribeLogPattern: string;
```

- *Type:* string

[Read] applicationinsights:DescribeLogPattern.

---

##### `DescribeObservation`<sup>Required</sup> <a name="DescribeObservation" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeObservation"></a>

```typescript
public readonly DescribeObservation: string;
```

- *Type:* string

[Read] applicationinsights:DescribeObservation.

---

##### `DescribeProblem`<sup>Required</sup> <a name="DescribeProblem" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeProblem"></a>

```typescript
public readonly DescribeProblem: string;
```

- *Type:* string

[Read] applicationinsights:DescribeProblem.

---

##### `DescribeProblemObservations`<sup>Required</sup> <a name="DescribeProblemObservations" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeProblemObservations"></a>

```typescript
public readonly DescribeProblemObservations: string;
```

- *Type:* string

[Read] applicationinsights:DescribeProblemObservations.

---

##### `DescribeWorkload`<sup>Required</sup> <a name="DescribeWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.DescribeWorkload"></a>

```typescript
public readonly DescribeWorkload: string;
```

- *Type:* string

[Read] applicationinsights:DescribeWorkload.

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.Link"></a>

```typescript
public readonly Link: string;
```

- *Type:* string

[Write] applicationinsights:Link.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] applicationinsights:ListApplications.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListComponents"></a>

```typescript
public readonly ListComponents: string;
```

- *Type:* string

[List] applicationinsights:ListComponents.

---

##### `ListConfigurationHistory`<sup>Required</sup> <a name="ListConfigurationHistory" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListConfigurationHistory"></a>

```typescript
public readonly ListConfigurationHistory: string;
```

- *Type:* string

[List] applicationinsights:ListConfigurationHistory.

---

##### `ListLogPatterns`<sup>Required</sup> <a name="ListLogPatterns" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListLogPatterns"></a>

```typescript
public readonly ListLogPatterns: string;
```

- *Type:* string

[List] applicationinsights:ListLogPatterns.

---

##### `ListLogPatternSets`<sup>Required</sup> <a name="ListLogPatternSets" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListLogPatternSets"></a>

```typescript
public readonly ListLogPatternSets: string;
```

- *Type:* string

[List] applicationinsights:ListLogPatternSets.

---

##### `ListProblems`<sup>Required</sup> <a name="ListProblems" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListProblems"></a>

```typescript
public readonly ListProblems: string;
```

- *Type:* string

[List] applicationinsights:ListProblems.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] applicationinsights:ListTagsForResource.

---

##### `ListWorkloads`<sup>Required</sup> <a name="ListWorkloads" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.ListWorkloads"></a>

```typescript
public readonly ListWorkloads: string;
```

- *Type:* string

[List] applicationinsights:ListWorkloads.

---

##### `RemoveWorkload`<sup>Required</sup> <a name="RemoveWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.RemoveWorkload"></a>

```typescript
public readonly RemoveWorkload: string;
```

- *Type:* string

[Write] applicationinsights:RemoveWorkload.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] applicationinsights:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] applicationinsights:UntagResource.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string;
```

- *Type:* string

[Write] applicationinsights:UpdateApplication.

---

##### `UpdateComponent`<sup>Required</sup> <a name="UpdateComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateComponent"></a>

```typescript
public readonly UpdateComponent: string;
```

- *Type:* string

[Write] applicationinsights:UpdateComponent.

---

##### `UpdateComponentConfiguration`<sup>Required</sup> <a name="UpdateComponentConfiguration" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateComponentConfiguration"></a>

```typescript
public readonly UpdateComponentConfiguration: string;
```

- *Type:* string

[Write] applicationinsights:UpdateComponentConfiguration.

---

##### `UpdateLogPattern`<sup>Required</sup> <a name="UpdateLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateLogPattern"></a>

```typescript
public readonly UpdateLogPattern: string;
```

- *Type:* string

[Write] applicationinsights:UpdateLogPattern.

---

##### `UpdateProblem`<sup>Required</sup> <a name="UpdateProblem" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateProblem"></a>

```typescript
public readonly UpdateProblem: string;
```

- *Type:* string

[Write] applicationinsights:UpdateProblem.

---

##### `UpdateWorkload`<sup>Required</sup> <a name="UpdateWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsActions.property.UpdateWorkload"></a>

```typescript
public readonly UpdateWorkload: string;
```

- *Type:* string

[Write] applicationinsights:UpdateWorkload.

---

### ApplicationinsightsConditions <a name="ApplicationinsightsConditions" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions"></a>

Condition key constants and builders for applicationinsights.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.Initializer"></a>

```typescript
import { applicationinsights } from '@cdk_utils/iam'

new applicationinsights.ApplicationinsightsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.requestTag"></a>

```typescript
import { applicationinsights } from '@cdk_utils/iam'

applicationinsights.ApplicationinsightsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.resourceTag"></a>

```typescript
import { applicationinsights } from '@cdk_utils/iam'

applicationinsights.ApplicationinsightsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.tagKeys"></a>

```typescript
import { applicationinsights } from '@cdk_utils/iam'

applicationinsights.ApplicationinsightsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### ApplicationinsightsOperations <a name="ApplicationinsightsOperations" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations"></a>

API operation to required IAM actions mapping for applicationinsights.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.Initializer"></a>

```typescript
import { applicationinsights } from '@cdk_utils/iam'

new applicationinsights.ApplicationinsightsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.AddWorkload">AddWorkload</a></code> | <code>string[]</code> | IAM actions required for the AddWorkload API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.CreateComponent">CreateComponent</a></code> | <code>string[]</code> | IAM actions required for the CreateComponent API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.CreateLogPattern">CreateLogPattern</a></code> | <code>string[]</code> | IAM actions required for the CreateLogPattern API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DeleteComponent">DeleteComponent</a></code> | <code>string[]</code> | IAM actions required for the DeleteComponent API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DeleteLogPattern">DeleteLogPattern</a></code> | <code>string[]</code> | IAM actions required for the DeleteLogPattern API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeApplication">DescribeApplication</a></code> | <code>string[]</code> | IAM actions required for the DescribeApplication API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeComponent">DescribeComponent</a></code> | <code>string[]</code> | IAM actions required for the DescribeComponent API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeComponentConfiguration">DescribeComponentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeComponentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeComponentConfigurationRecommendation">DescribeComponentConfigurationRecommendation</a></code> | <code>string[]</code> | IAM actions required for the DescribeComponentConfigurationRecommendation API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeLogPattern">DescribeLogPattern</a></code> | <code>string[]</code> | IAM actions required for the DescribeLogPattern API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeObservation">DescribeObservation</a></code> | <code>string[]</code> | IAM actions required for the DescribeObservation API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeProblem">DescribeProblem</a></code> | <code>string[]</code> | IAM actions required for the DescribeProblem API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeProblemObservations">DescribeProblemObservations</a></code> | <code>string[]</code> | IAM actions required for the DescribeProblemObservations API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeWorkload">DescribeWorkload</a></code> | <code>string[]</code> | IAM actions required for the DescribeWorkload API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListComponents">ListComponents</a></code> | <code>string[]</code> | IAM actions required for the ListComponents API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListConfigurationHistory">ListConfigurationHistory</a></code> | <code>string[]</code> | IAM actions required for the ListConfigurationHistory API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListLogPatterns">ListLogPatterns</a></code> | <code>string[]</code> | IAM actions required for the ListLogPatterns API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListLogPatternSets">ListLogPatternSets</a></code> | <code>string[]</code> | IAM actions required for the ListLogPatternSets API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListProblems">ListProblems</a></code> | <code>string[]</code> | IAM actions required for the ListProblems API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListWorkloads">ListWorkloads</a></code> | <code>string[]</code> | IAM actions required for the ListWorkloads API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.RemoveWorkload">RemoveWorkload</a></code> | <code>string[]</code> | IAM actions required for the RemoveWorkload API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateApplication">UpdateApplication</a></code> | <code>string[]</code> | IAM actions required for the UpdateApplication API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateComponent">UpdateComponent</a></code> | <code>string[]</code> | IAM actions required for the UpdateComponent API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateComponentConfiguration">UpdateComponentConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateComponentConfiguration API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateLogPattern">UpdateLogPattern</a></code> | <code>string[]</code> | IAM actions required for the UpdateLogPattern API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateProblem">UpdateProblem</a></code> | <code>string[]</code> | IAM actions required for the UpdateProblem API call. |
| <code><a href="#@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateWorkload">UpdateWorkload</a></code> | <code>string[]</code> | IAM actions required for the UpdateWorkload API call. |

---

##### `AddWorkload`<sup>Required</sup> <a name="AddWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.AddWorkload"></a>

```typescript
public readonly AddWorkload: string[];
```

- *Type:* string[]

IAM actions required for the AddWorkload API call.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateComponent`<sup>Required</sup> <a name="CreateComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.CreateComponent"></a>

```typescript
public readonly CreateComponent: string[];
```

- *Type:* string[]

IAM actions required for the CreateComponent API call.

---

##### `CreateLogPattern`<sup>Required</sup> <a name="CreateLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.CreateLogPattern"></a>

```typescript
public readonly CreateLogPattern: string[];
```

- *Type:* string[]

IAM actions required for the CreateLogPattern API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteComponent`<sup>Required</sup> <a name="DeleteComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DeleteComponent"></a>

```typescript
public readonly DeleteComponent: string[];
```

- *Type:* string[]

IAM actions required for the DeleteComponent API call.

---

##### `DeleteLogPattern`<sup>Required</sup> <a name="DeleteLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DeleteLogPattern"></a>

```typescript
public readonly DeleteLogPattern: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLogPattern API call.

---

##### `DescribeApplication`<sup>Required</sup> <a name="DescribeApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeApplication"></a>

```typescript
public readonly DescribeApplication: string[];
```

- *Type:* string[]

IAM actions required for the DescribeApplication API call.

---

##### `DescribeComponent`<sup>Required</sup> <a name="DescribeComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeComponent"></a>

```typescript
public readonly DescribeComponent: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComponent API call.

---

##### `DescribeComponentConfiguration`<sup>Required</sup> <a name="DescribeComponentConfiguration" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeComponentConfiguration"></a>

```typescript
public readonly DescribeComponentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComponentConfiguration API call.

---

##### `DescribeComponentConfigurationRecommendation`<sup>Required</sup> <a name="DescribeComponentConfigurationRecommendation" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeComponentConfigurationRecommendation"></a>

```typescript
public readonly DescribeComponentConfigurationRecommendation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeComponentConfigurationRecommendation API call.

---

##### `DescribeLogPattern`<sup>Required</sup> <a name="DescribeLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeLogPattern"></a>

```typescript
public readonly DescribeLogPattern: string[];
```

- *Type:* string[]

IAM actions required for the DescribeLogPattern API call.

---

##### `DescribeObservation`<sup>Required</sup> <a name="DescribeObservation" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeObservation"></a>

```typescript
public readonly DescribeObservation: string[];
```

- *Type:* string[]

IAM actions required for the DescribeObservation API call.

---

##### `DescribeProblem`<sup>Required</sup> <a name="DescribeProblem" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeProblem"></a>

```typescript
public readonly DescribeProblem: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProblem API call.

---

##### `DescribeProblemObservations`<sup>Required</sup> <a name="DescribeProblemObservations" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeProblemObservations"></a>

```typescript
public readonly DescribeProblemObservations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeProblemObservations API call.

---

##### `DescribeWorkload`<sup>Required</sup> <a name="DescribeWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.DescribeWorkload"></a>

```typescript
public readonly DescribeWorkload: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWorkload API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListComponents`<sup>Required</sup> <a name="ListComponents" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListComponents"></a>

```typescript
public readonly ListComponents: string[];
```

- *Type:* string[]

IAM actions required for the ListComponents API call.

---

##### `ListConfigurationHistory`<sup>Required</sup> <a name="ListConfigurationHistory" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListConfigurationHistory"></a>

```typescript
public readonly ListConfigurationHistory: string[];
```

- *Type:* string[]

IAM actions required for the ListConfigurationHistory API call.

---

##### `ListLogPatterns`<sup>Required</sup> <a name="ListLogPatterns" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListLogPatterns"></a>

```typescript
public readonly ListLogPatterns: string[];
```

- *Type:* string[]

IAM actions required for the ListLogPatterns API call.

---

##### `ListLogPatternSets`<sup>Required</sup> <a name="ListLogPatternSets" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListLogPatternSets"></a>

```typescript
public readonly ListLogPatternSets: string[];
```

- *Type:* string[]

IAM actions required for the ListLogPatternSets API call.

---

##### `ListProblems`<sup>Required</sup> <a name="ListProblems" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListProblems"></a>

```typescript
public readonly ListProblems: string[];
```

- *Type:* string[]

IAM actions required for the ListProblems API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWorkloads`<sup>Required</sup> <a name="ListWorkloads" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.ListWorkloads"></a>

```typescript
public readonly ListWorkloads: string[];
```

- *Type:* string[]

IAM actions required for the ListWorkloads API call.

---

##### `RemoveWorkload`<sup>Required</sup> <a name="RemoveWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.RemoveWorkload"></a>

```typescript
public readonly RemoveWorkload: string[];
```

- *Type:* string[]

IAM actions required for the RemoveWorkload API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateApplication`<sup>Required</sup> <a name="UpdateApplication" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateApplication"></a>

```typescript
public readonly UpdateApplication: string[];
```

- *Type:* string[]

IAM actions required for the UpdateApplication API call.

---

##### `UpdateComponent`<sup>Required</sup> <a name="UpdateComponent" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateComponent"></a>

```typescript
public readonly UpdateComponent: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComponent API call.

---

##### `UpdateComponentConfiguration`<sup>Required</sup> <a name="UpdateComponentConfiguration" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateComponentConfiguration"></a>

```typescript
public readonly UpdateComponentConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateComponentConfiguration API call.

---

##### `UpdateLogPattern`<sup>Required</sup> <a name="UpdateLogPattern" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateLogPattern"></a>

```typescript
public readonly UpdateLogPattern: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLogPattern API call.

---

##### `UpdateProblem`<sup>Required</sup> <a name="UpdateProblem" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateProblem"></a>

```typescript
public readonly UpdateProblem: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProblem API call.

---

##### `UpdateWorkload`<sup>Required</sup> <a name="UpdateWorkload" id="@cdk_utils/iam.applicationinsights.ApplicationinsightsOperations.property.UpdateWorkload"></a>

```typescript
public readonly UpdateWorkload: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWorkload API call.

---


