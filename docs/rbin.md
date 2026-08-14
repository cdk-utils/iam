# `rbin` Submodule <a name="`rbin` Submodule" id="@cdk_utils/iam.rbin"></a>


## Structs <a name="Structs" id="Structs"></a>

### RbinRuleArnComponents <a name="RbinRuleArnComponents" id="@cdk_utils/iam.rbin.RbinRuleArnComponents"></a>

Parsed components of a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rbin.RbinRuleArnComponents.Initializer"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

const rbinRuleArnComponents: rbin.RbinRuleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnComponents.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.rbin.RbinRuleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.rbin.RbinRuleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.rbin.RbinRuleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.rbin.RbinRuleArnComponents.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component.

---

### RbinRuleArnProps <a name="RbinRuleArnProps" id="@cdk_utils/iam.rbin.RbinRuleArnProps"></a>

Properties for building a rule ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.rbin.RbinRuleArnProps.Initializer"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

const rbinRuleArnProps: rbin.RbinRuleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnProps.property.resourceName">resourceName</a></code> | <code>string</code> | The ResourceName component of the ARN. |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.rbin.RbinRuleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdk_utils/iam.rbin.RbinRuleArnProps.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

The ResourceName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.rbin.RbinRuleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.rbin.RbinRuleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.rbin.RbinRuleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### RbinActions <a name="RbinActions" id="@cdk_utils/iam.rbin.RbinActions"></a>

IAM action constants for the rbin service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rbin.RbinActions.Initializer"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

new rbin.RbinActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.actionGetRule">actionGetRule</a></code> | <code>string</code> | [Read] rbin:GetRule. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.CreateRule">CreateRule</a></code> | <code>string</code> | [Write] rbin:CreateRule. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.DeleteRule">DeleteRule</a></code> | <code>string</code> | [Write] rbin:DeleteRule. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.ListRules">ListRules</a></code> | <code>string</code> | [Read] rbin:ListRules. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] rbin:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.LockRule">LockRule</a></code> | <code>string</code> | [Write] rbin:LockRule. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] rbin:TagResource. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.UnlockRule">UnlockRule</a></code> | <code>string</code> | [Write] rbin:UnlockRule. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] rbin:UntagResource. |
| <code><a href="#@cdk_utils/iam.rbin.RbinActions.property.UpdateRule">UpdateRule</a></code> | <code>string</code> | [Write] rbin:UpdateRule. |

---

##### `actionGetRule`<sup>Required</sup> <a name="actionGetRule" id="@cdk_utils/iam.rbin.RbinActions.property.actionGetRule"></a>

```typescript
public readonly actionGetRule: string;
```

- *Type:* string

[Read] rbin:GetRule.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.rbin.RbinActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.rbin.RbinActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.rbin.RbinActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.rbin.RbinActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.rbin.RbinActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.rbin.RbinActions.property.CreateRule"></a>

```typescript
public readonly CreateRule: string;
```

- *Type:* string

[Write] rbin:CreateRule.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.rbin.RbinActions.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string;
```

- *Type:* string

[Write] rbin:DeleteRule.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.rbin.RbinActions.property.ListRules"></a>

```typescript
public readonly ListRules: string;
```

- *Type:* string

[Read] rbin:ListRules.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rbin.RbinActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] rbin:ListTagsForResource.

---

##### `LockRule`<sup>Required</sup> <a name="LockRule" id="@cdk_utils/iam.rbin.RbinActions.property.LockRule"></a>

```typescript
public readonly LockRule: string;
```

- *Type:* string

[Write] rbin:LockRule.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.rbin.RbinActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rbin.RbinActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] rbin:TagResource.

---

##### `UnlockRule`<sup>Required</sup> <a name="UnlockRule" id="@cdk_utils/iam.rbin.RbinActions.property.UnlockRule"></a>

```typescript
public readonly UnlockRule: string;
```

- *Type:* string

[Write] rbin:UnlockRule.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rbin.RbinActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] rbin:UntagResource.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.rbin.RbinActions.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string;
```

- *Type:* string

[Write] rbin:UpdateRule.

---

### RbinConditions <a name="RbinConditions" id="@cdk_utils/iam.rbin.RbinConditions"></a>

Condition key constants and builders for rbin.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rbin.RbinConditions.Initializer"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

new rbin.RbinConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.attributeResourceType">attributeResourceType</a></code> | Generates a condition block for `rbin:Attribute/ResourceType`. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.requestResourceType">requestResourceType</a></code> | Generates a condition block for `rbin:Request/ResourceType`. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `attributeResourceType` <a name="attributeResourceType" id="@cdk_utils/iam.rbin.RbinConditions.attributeResourceType"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinConditions.attributeResourceType(value: string)
```

Generates a condition block for `rbin:Attribute/ResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rbin.RbinConditions.attributeResourceType.parameter.value"></a>

- *Type:* string

---

##### `requestResourceType` <a name="requestResourceType" id="@cdk_utils/iam.rbin.RbinConditions.requestResourceType"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinConditions.requestResourceType(value: string)
```

Generates a condition block for `rbin:Request/ResourceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rbin.RbinConditions.requestResourceType.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.rbin.RbinConditions.requestTag"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rbin.RbinConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.rbin.RbinConditions.resourceTag"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.rbin.RbinConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.rbin.RbinConditions.tagKeys"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.rbin.RbinConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.actionGetRuleConditionKeys">actionGetRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRule action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.ATTRIBUTE_RESOURCE_TYPE">ATTRIBUTE_RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: rbin:Attribute/ResourceType (String). |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.CreateRuleConditionKeys">CreateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRule action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.DeleteRuleConditionKeys">DeleteRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteRule action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.ListRulesConditionKeys">ListRulesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListRules action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.LockRuleConditionKeys">LockRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the LockRule action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.REQUEST_RESOURCE_TYPE">REQUEST_RESOURCE_TYPE</a></code> | <code>string</code> | Condition key: rbin:Request/ResourceType (String). |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.UnlockRuleConditionKeys">UnlockRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnlockRule action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.rbin.RbinConditions.property.UpdateRuleConditionKeys">UpdateRuleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateRule action. |

---

##### `actionGetRuleConditionKeys`<sup>Required</sup> <a name="actionGetRuleConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.actionGetRuleConditionKeys"></a>

```typescript
public readonly actionGetRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRule action.

---

##### `ATTRIBUTE_RESOURCE_TYPE`<sup>Required</sup> <a name="ATTRIBUTE_RESOURCE_TYPE" id="@cdk_utils/iam.rbin.RbinConditions.property.ATTRIBUTE_RESOURCE_TYPE"></a>

```typescript
public readonly ATTRIBUTE_RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: rbin:Attribute/ResourceType (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.rbin.RbinConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.rbin.RbinConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.rbin.RbinConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateRuleConditionKeys`<sup>Required</sup> <a name="CreateRuleConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.CreateRuleConditionKeys"></a>

```typescript
public readonly CreateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRule action.

---

##### `DeleteRuleConditionKeys`<sup>Required</sup> <a name="DeleteRuleConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.DeleteRuleConditionKeys"></a>

```typescript
public readonly DeleteRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteRule action.

---

##### `ListRulesConditionKeys`<sup>Required</sup> <a name="ListRulesConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.ListRulesConditionKeys"></a>

```typescript
public readonly ListRulesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListRules action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `LockRuleConditionKeys`<sup>Required</sup> <a name="LockRuleConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.LockRuleConditionKeys"></a>

```typescript
public readonly LockRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the LockRule action.

---

##### `REQUEST_RESOURCE_TYPE`<sup>Required</sup> <a name="REQUEST_RESOURCE_TYPE" id="@cdk_utils/iam.rbin.RbinConditions.property.REQUEST_RESOURCE_TYPE"></a>

```typescript
public readonly REQUEST_RESOURCE_TYPE: string;
```

- *Type:* string

Condition key: rbin:Request/ResourceType (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnlockRuleConditionKeys`<sup>Required</sup> <a name="UnlockRuleConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.UnlockRuleConditionKeys"></a>

```typescript
public readonly UnlockRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnlockRule action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateRuleConditionKeys`<sup>Required</sup> <a name="UpdateRuleConditionKeys" id="@cdk_utils/iam.rbin.RbinConditions.property.UpdateRuleConditionKeys"></a>

```typescript
public readonly UpdateRuleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateRule action.

---

### RbinOperations <a name="RbinOperations" id="@cdk_utils/iam.rbin.RbinOperations"></a>

API operation to required IAM actions mapping for rbin.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rbin.RbinOperations.Initializer"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

new rbin.RbinOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.CreateRule">CreateRule</a></code> | <code>string[]</code> | IAM actions required for the CreateRule API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.DeleteRule">DeleteRule</a></code> | <code>string[]</code> | IAM actions required for the DeleteRule API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.ListRules">ListRules</a></code> | <code>string[]</code> | IAM actions required for the ListRules API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.LockRule">LockRule</a></code> | <code>string[]</code> | IAM actions required for the LockRule API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.opGetRule">opGetRule</a></code> | <code>string[]</code> | IAM actions required for the GetRule API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.UnlockRule">UnlockRule</a></code> | <code>string[]</code> | IAM actions required for the UnlockRule API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.rbin.RbinOperations.property.UpdateRule">UpdateRule</a></code> | <code>string[]</code> | IAM actions required for the UpdateRule API call. |

---

##### `CreateRule`<sup>Required</sup> <a name="CreateRule" id="@cdk_utils/iam.rbin.RbinOperations.property.CreateRule"></a>

```typescript
public readonly CreateRule: string[];
```

- *Type:* string[]

IAM actions required for the CreateRule API call.

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdk_utils/iam.rbin.RbinOperations.property.DeleteRule"></a>

```typescript
public readonly DeleteRule: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRule API call.

---

##### `ListRules`<sup>Required</sup> <a name="ListRules" id="@cdk_utils/iam.rbin.RbinOperations.property.ListRules"></a>

```typescript
public readonly ListRules: string[];
```

- *Type:* string[]

IAM actions required for the ListRules API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.rbin.RbinOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `LockRule`<sup>Required</sup> <a name="LockRule" id="@cdk_utils/iam.rbin.RbinOperations.property.LockRule"></a>

```typescript
public readonly LockRule: string[];
```

- *Type:* string[]

IAM actions required for the LockRule API call.

---

##### `opGetRule`<sup>Required</sup> <a name="opGetRule" id="@cdk_utils/iam.rbin.RbinOperations.property.opGetRule"></a>

```typescript
public readonly opGetRule: string[];
```

- *Type:* string[]

IAM actions required for the GetRule API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.rbin.RbinOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UnlockRule`<sup>Required</sup> <a name="UnlockRule" id="@cdk_utils/iam.rbin.RbinOperations.property.UnlockRule"></a>

```typescript
public readonly UnlockRule: string[];
```

- *Type:* string[]

IAM actions required for the UnlockRule API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.rbin.RbinOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateRule`<sup>Required</sup> <a name="UpdateRule" id="@cdk_utils/iam.rbin.RbinOperations.property.UpdateRule"></a>

```typescript
public readonly UpdateRule: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRule API call.

---

### RbinResources <a name="RbinResources" id="@cdk_utils/iam.rbin.RbinResources"></a>

ARN builders, validators, and parsers for rbin resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.rbin.RbinResources.Initializer"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

new rbin.RbinResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.rbin.RbinResources.isValidRuleArn">isValidRuleArn</a></code> | Validates whether a string is a valid ARN for the rule resource. |
| <code><a href="#@cdk_utils/iam.rbin.RbinResources.parseRuleArn">parseRuleArn</a></code> | Parses a rule ARN into its components. |
| <code><a href="#@cdk_utils/iam.rbin.RbinResources.rule">rule</a></code> | Builds an ARN for the rule resource. |

---

##### `isValidRuleArn` <a name="isValidRuleArn" id="@cdk_utils/iam.rbin.RbinResources.isValidRuleArn"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinResources.isValidRuleArn(arn: string)
```

Validates whether a string is a valid ARN for the rule resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rbin.RbinResources.isValidRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRuleArn` <a name="parseRuleArn" id="@cdk_utils/iam.rbin.RbinResources.parseRuleArn"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinResources.parseRuleArn(arn: string)
```

Parses a rule ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.rbin.RbinResources.parseRuleArn.parameter.arn"></a>

- *Type:* string

---

##### `rule` <a name="rule" id="@cdk_utils/iam.rbin.RbinResources.rule"></a>

```typescript
import { rbin } from '@cdk_utils/iam'

rbin.RbinResources.rule(props: RbinRuleArnProps)
```

Builds an ARN for the rule resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.rbin.RbinResources.rule.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.rbin.RbinRuleArnProps">RbinRuleArnProps</a>

---




