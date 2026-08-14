# `dlm` Submodule <a name="`dlm` Submodule" id="@cdk_utils/iam.dlm"></a>


## Structs <a name="Structs" id="Structs"></a>

### DlmPolicyArnComponents <a name="DlmPolicyArnComponents" id="@cdk_utils/iam.dlm.DlmPolicyArnComponents"></a>

Parsed components of a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dlm.DlmPolicyArnComponents.Initializer"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

const dlmPolicyArnComponents: dlm.DlmPolicyArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.dlm.DlmPolicyArnComponents.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component.

---

### DlmPolicyArnProps <a name="DlmPolicyArnProps" id="@cdk_utils/iam.dlm.DlmPolicyArnProps"></a>

Properties for building a policy ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.dlm.DlmPolicyArnProps.Initializer"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

const dlmPolicyArnProps: dlm.DlmPolicyArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnProps.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.dlm.DlmPolicyArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.dlm.DlmPolicyArnProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.dlm.DlmPolicyArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.dlm.DlmPolicyArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.dlm.DlmPolicyArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### DlmActions <a name="DlmActions" id="@cdk_utils/iam.dlm.DlmActions"></a>

IAM action constants for the dlm service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dlm.DlmActions.Initializer"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

new dlm.DlmActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.actionGetLifecyclePolicies">actionGetLifecyclePolicies</a></code> | <code>string</code> | [List] dlm:GetLifecyclePolicies. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.actionGetLifecyclePolicy">actionGetLifecyclePolicy</a></code> | <code>string</code> | [Read] dlm:GetLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.CreateLifecyclePolicy">CreateLifecyclePolicy</a></code> | <code>string</code> | [Write] dlm:CreateLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string</code> | [Write] dlm:DeleteLifecyclePolicy. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] dlm:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] dlm:TagResource. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] dlm:UntagResource. |
| <code><a href="#@cdk_utils/iam.dlm.DlmActions.property.UpdateLifecyclePolicy">UpdateLifecyclePolicy</a></code> | <code>string</code> | [Write] dlm:UpdateLifecyclePolicy. |

---

##### `actionGetLifecyclePolicies`<sup>Required</sup> <a name="actionGetLifecyclePolicies" id="@cdk_utils/iam.dlm.DlmActions.property.actionGetLifecyclePolicies"></a>

```typescript
public readonly actionGetLifecyclePolicies: string;
```

- *Type:* string

[List] dlm:GetLifecyclePolicies.

---

##### `actionGetLifecyclePolicy`<sup>Required</sup> <a name="actionGetLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmActions.property.actionGetLifecyclePolicy"></a>

```typescript
public readonly actionGetLifecyclePolicy: string;
```

- *Type:* string

[Read] dlm:GetLifecyclePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.dlm.DlmActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.dlm.DlmActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.dlm.DlmActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.dlm.DlmActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.dlm.DlmActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateLifecyclePolicy`<sup>Required</sup> <a name="CreateLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmActions.property.CreateLifecyclePolicy"></a>

```typescript
public readonly CreateLifecyclePolicy: string;
```

- *Type:* string

[Write] dlm:CreateLifecyclePolicy.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmActions.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string;
```

- *Type:* string

[Write] dlm:DeleteLifecyclePolicy.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dlm.DlmActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] dlm:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.dlm.DlmActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dlm.DlmActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] dlm:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dlm.DlmActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] dlm:UntagResource.

---

##### `UpdateLifecyclePolicy`<sup>Required</sup> <a name="UpdateLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmActions.property.UpdateLifecyclePolicy"></a>

```typescript
public readonly UpdateLifecyclePolicy: string;
```

- *Type:* string

[Write] dlm:UpdateLifecyclePolicy.

---

### DlmConditions <a name="DlmConditions" id="@cdk_utils/iam.dlm.DlmConditions"></a>

Condition key constants and builders for dlm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dlm.DlmConditions.Initializer"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

new dlm.DlmConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.dlm.DlmConditions.requestTag"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

dlm.DlmConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dlm.DlmConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.dlm.DlmConditions.resourceTag"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

dlm.DlmConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.dlm.DlmConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.dlm.DlmConditions.tagKeys"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

dlm.DlmConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.dlm.DlmConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.property.CreateLifecyclePolicyConditionKeys">CreateLifecyclePolicyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLifecyclePolicy action. |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.dlm.DlmConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.dlm.DlmConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.dlm.DlmConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.dlm.DlmConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateLifecyclePolicyConditionKeys`<sup>Required</sup> <a name="CreateLifecyclePolicyConditionKeys" id="@cdk_utils/iam.dlm.DlmConditions.property.CreateLifecyclePolicyConditionKeys"></a>

```typescript
public readonly CreateLifecyclePolicyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLifecyclePolicy action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.dlm.DlmConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.dlm.DlmConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### DlmOperations <a name="DlmOperations" id="@cdk_utils/iam.dlm.DlmOperations"></a>

API operation to required IAM actions mapping for dlm.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dlm.DlmOperations.Initializer"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

new dlm.DlmOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.CreateLifecyclePolicy">CreateLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreateLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.DeleteLifecyclePolicy">DeleteLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeleteLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.opGetLifecyclePolicies">opGetLifecyclePolicies</a></code> | <code>string[]</code> | IAM actions required for the GetLifecyclePolicies API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.opGetLifecyclePolicy">opGetLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetLifecyclePolicy API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.dlm.DlmOperations.property.UpdateLifecyclePolicy">UpdateLifecyclePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdateLifecyclePolicy API call. |

---

##### `CreateLifecyclePolicy`<sup>Required</sup> <a name="CreateLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmOperations.property.CreateLifecyclePolicy"></a>

```typescript
public readonly CreateLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreateLifecyclePolicy API call.

---

##### `DeleteLifecyclePolicy`<sup>Required</sup> <a name="DeleteLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmOperations.property.DeleteLifecyclePolicy"></a>

```typescript
public readonly DeleteLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLifecyclePolicy API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.dlm.DlmOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetLifecyclePolicies`<sup>Required</sup> <a name="opGetLifecyclePolicies" id="@cdk_utils/iam.dlm.DlmOperations.property.opGetLifecyclePolicies"></a>

```typescript
public readonly opGetLifecyclePolicies: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecyclePolicies API call.

---

##### `opGetLifecyclePolicy`<sup>Required</sup> <a name="opGetLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmOperations.property.opGetLifecyclePolicy"></a>

```typescript
public readonly opGetLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetLifecyclePolicy API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.dlm.DlmOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.dlm.DlmOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLifecyclePolicy`<sup>Required</sup> <a name="UpdateLifecyclePolicy" id="@cdk_utils/iam.dlm.DlmOperations.property.UpdateLifecyclePolicy"></a>

```typescript
public readonly UpdateLifecyclePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLifecyclePolicy API call.

---

### DlmResources <a name="DlmResources" id="@cdk_utils/iam.dlm.DlmResources"></a>

ARN builders, validators, and parsers for dlm resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.dlm.DlmResources.Initializer"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

new dlm.DlmResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.dlm.DlmResources.isValidPolicyArn">isValidPolicyArn</a></code> | Validates whether a string is a valid ARN for the policy resource. |
| <code><a href="#@cdk_utils/iam.dlm.DlmResources.parsePolicyArn">parsePolicyArn</a></code> | Parses a policy ARN into its components. |
| <code><a href="#@cdk_utils/iam.dlm.DlmResources.policy">policy</a></code> | Builds an ARN for the policy resource. |

---

##### `isValidPolicyArn` <a name="isValidPolicyArn" id="@cdk_utils/iam.dlm.DlmResources.isValidPolicyArn"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

dlm.DlmResources.isValidPolicyArn(arn: string)
```

Validates whether a string is a valid ARN for the policy resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dlm.DlmResources.isValidPolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyArn` <a name="parsePolicyArn" id="@cdk_utils/iam.dlm.DlmResources.parsePolicyArn"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

dlm.DlmResources.parsePolicyArn(arn: string)
```

Parses a policy ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.dlm.DlmResources.parsePolicyArn.parameter.arn"></a>

- *Type:* string

---

##### `policy` <a name="policy" id="@cdk_utils/iam.dlm.DlmResources.policy"></a>

```typescript
import { dlm } from '@cdk_utils/iam'

dlm.DlmResources.policy(props: DlmPolicyArnProps)
```

Builds an ARN for the policy resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.dlm.DlmResources.policy.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.dlm.DlmPolicyArnProps">DlmPolicyArnProps</a>

---




