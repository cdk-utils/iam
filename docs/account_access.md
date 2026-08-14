# `account_access` Submodule <a name="`account_access` Submodule" id="@cdk_utils/iam.account_access"></a>


## Structs <a name="Structs" id="Structs"></a>

### AccountAccessApplicationArnComponents <a name="AccountAccessApplicationArnComponents" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents"></a>

Parsed components of a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.Initializer"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

const accountAccessApplicationArnComponents: account_access.AccountAccessApplicationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### AccountAccessApplicationArnProps <a name="AccountAccessApplicationArnProps" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnProps"></a>

Properties for building a application ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.Initializer"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

const accountAccessApplicationArnProps: account_access.AccountAccessApplicationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.account_access.AccountAccessApplicationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AccountAccessActions <a name="AccountAccessActions" id="@cdk_utils/iam.account_access.AccountAccessActions"></a>

IAM action constants for the account-access service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account_access.AccountAccessActions.Initializer"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

new account_access.AccountAccessActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.actionGetApplication">actionGetApplication</a></code> | <code>string</code> | [Read] account-access:GetApplication. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.actionGetEntitlement">actionGetEntitlement</a></code> | <code>string</code> | [Read] account-access:GetEntitlement. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.CreateApplication">CreateApplication</a></code> | <code>string</code> | [Write] account-access:CreateApplication. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.CreateEntitlement">CreateEntitlement</a></code> | <code>string</code> | [Write] account-access:CreateEntitlement. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.DeleteApplication">DeleteApplication</a></code> | <code>string</code> | [Write] account-access:DeleteApplication. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.DeleteEntitlement">DeleteEntitlement</a></code> | <code>string</code> | [Write] account-access:DeleteEntitlement. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.ListApplications">ListApplications</a></code> | <code>string</code> | [List] account-access:ListApplications. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.ListEntitlements">ListEntitlements</a></code> | <code>string</code> | [List] account-access:ListEntitlements. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] account-access:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] account-access:TagResource. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] account-access:UntagResource. |

---

##### `actionGetApplication`<sup>Required</sup> <a name="actionGetApplication" id="@cdk_utils/iam.account_access.AccountAccessActions.property.actionGetApplication"></a>

```typescript
public readonly actionGetApplication: string;
```

- *Type:* string

[Read] account-access:GetApplication.

---

##### `actionGetEntitlement`<sup>Required</sup> <a name="actionGetEntitlement" id="@cdk_utils/iam.account_access.AccountAccessActions.property.actionGetEntitlement"></a>

```typescript
public readonly actionGetEntitlement: string;
```

- *Type:* string

[Read] account-access:GetEntitlement.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.account_access.AccountAccessActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.account_access.AccountAccessActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.account_access.AccountAccessActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.account_access.AccountAccessActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.account_access.AccountAccessActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.account_access.AccountAccessActions.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string;
```

- *Type:* string

[Write] account-access:CreateApplication.

---

##### `CreateEntitlement`<sup>Required</sup> <a name="CreateEntitlement" id="@cdk_utils/iam.account_access.AccountAccessActions.property.CreateEntitlement"></a>

```typescript
public readonly CreateEntitlement: string;
```

- *Type:* string

[Write] account-access:CreateEntitlement.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.account_access.AccountAccessActions.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string;
```

- *Type:* string

[Write] account-access:DeleteApplication.

---

##### `DeleteEntitlement`<sup>Required</sup> <a name="DeleteEntitlement" id="@cdk_utils/iam.account_access.AccountAccessActions.property.DeleteEntitlement"></a>

```typescript
public readonly DeleteEntitlement: string;
```

- *Type:* string

[Write] account-access:DeleteEntitlement.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.account_access.AccountAccessActions.property.ListApplications"></a>

```typescript
public readonly ListApplications: string;
```

- *Type:* string

[List] account-access:ListApplications.

---

##### `ListEntitlements`<sup>Required</sup> <a name="ListEntitlements" id="@cdk_utils/iam.account_access.AccountAccessActions.property.ListEntitlements"></a>

```typescript
public readonly ListEntitlements: string;
```

- *Type:* string

[List] account-access:ListEntitlements.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.account_access.AccountAccessActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] account-access:ListTagsForResource.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.account_access.AccountAccessActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.account_access.AccountAccessActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] account-access:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.account_access.AccountAccessActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] account-access:UntagResource.

---

### AccountAccessConditions <a name="AccountAccessConditions" id="@cdk_utils/iam.account_access.AccountAccessConditions"></a>

Condition key constants and builders for account-access.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account_access.AccountAccessConditions.Initializer"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

new account_access.AccountAccessConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.account_access.AccountAccessConditions.requestTag"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

account_access.AccountAccessConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.account_access.AccountAccessConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.account_access.AccountAccessConditions.resourceTag"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

account_access.AccountAccessConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.account_access.AccountAccessConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.account_access.AccountAccessConditions.tagKeys"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

account_access.AccountAccessConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.account_access.AccountAccessConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.CreateApplicationConditionKeys">CreateApplicationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateApplication action. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateApplicationConditionKeys`<sup>Required</sup> <a name="CreateApplicationConditionKeys" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.CreateApplicationConditionKeys"></a>

```typescript
public readonly CreateApplicationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateApplication action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.account_access.AccountAccessConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### AccountAccessOperations <a name="AccountAccessOperations" id="@cdk_utils/iam.account_access.AccountAccessOperations"></a>

API operation to required IAM actions mapping for account-access.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account_access.AccountAccessOperations.Initializer"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

new account_access.AccountAccessOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.CreateApplication">CreateApplication</a></code> | <code>string[]</code> | IAM actions required for the CreateApplication API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.CreateEntitlement">CreateEntitlement</a></code> | <code>string[]</code> | IAM actions required for the CreateEntitlement API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.DeleteApplication">DeleteApplication</a></code> | <code>string[]</code> | IAM actions required for the DeleteApplication API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.DeleteEntitlement">DeleteEntitlement</a></code> | <code>string[]</code> | IAM actions required for the DeleteEntitlement API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.ListApplications">ListApplications</a></code> | <code>string[]</code> | IAM actions required for the ListApplications API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.ListEntitlements">ListEntitlements</a></code> | <code>string[]</code> | IAM actions required for the ListEntitlements API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.opGetApplication">opGetApplication</a></code> | <code>string[]</code> | IAM actions required for the GetApplication API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.opGetEntitlement">opGetEntitlement</a></code> | <code>string[]</code> | IAM actions required for the GetEntitlement API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateApplication`<sup>Required</sup> <a name="CreateApplication" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.CreateApplication"></a>

```typescript
public readonly CreateApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreateApplication API call.

---

##### `CreateEntitlement`<sup>Required</sup> <a name="CreateEntitlement" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.CreateEntitlement"></a>

```typescript
public readonly CreateEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the CreateEntitlement API call.

---

##### `DeleteApplication`<sup>Required</sup> <a name="DeleteApplication" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.DeleteApplication"></a>

```typescript
public readonly DeleteApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeleteApplication API call.

---

##### `DeleteEntitlement`<sup>Required</sup> <a name="DeleteEntitlement" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.DeleteEntitlement"></a>

```typescript
public readonly DeleteEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEntitlement API call.

---

##### `ListApplications`<sup>Required</sup> <a name="ListApplications" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.ListApplications"></a>

```typescript
public readonly ListApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListApplications API call.

---

##### `ListEntitlements`<sup>Required</sup> <a name="ListEntitlements" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.ListEntitlements"></a>

```typescript
public readonly ListEntitlements: string[];
```

- *Type:* string[]

IAM actions required for the ListEntitlements API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetApplication`<sup>Required</sup> <a name="opGetApplication" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.opGetApplication"></a>

```typescript
public readonly opGetApplication: string[];
```

- *Type:* string[]

IAM actions required for the GetApplication API call.

---

##### `opGetEntitlement`<sup>Required</sup> <a name="opGetEntitlement" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.opGetEntitlement"></a>

```typescript
public readonly opGetEntitlement: string[];
```

- *Type:* string[]

IAM actions required for the GetEntitlement API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.account_access.AccountAccessOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### AccountAccessResources <a name="AccountAccessResources" id="@cdk_utils/iam.account_access.AccountAccessResources"></a>

ARN builders, validators, and parsers for account-access resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account_access.AccountAccessResources.Initializer"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

new account_access.AccountAccessResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessResources.application">application</a></code> | Builds an ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessResources.isValidApplicationArn">isValidApplicationArn</a></code> | Validates whether a string is a valid ARN for the application resource. |
| <code><a href="#@cdk_utils/iam.account_access.AccountAccessResources.parseApplicationArn">parseApplicationArn</a></code> | Parses a application ARN into its components. |

---

##### `application` <a name="application" id="@cdk_utils/iam.account_access.AccountAccessResources.application"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

account_access.AccountAccessResources.application(props: AccountAccessApplicationArnProps)
```

Builds an ARN for the application resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.account_access.AccountAccessResources.application.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.account_access.AccountAccessApplicationArnProps">AccountAccessApplicationArnProps</a>

---

##### `isValidApplicationArn` <a name="isValidApplicationArn" id="@cdk_utils/iam.account_access.AccountAccessResources.isValidApplicationArn"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

account_access.AccountAccessResources.isValidApplicationArn(arn: string)
```

Validates whether a string is a valid ARN for the application resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.account_access.AccountAccessResources.isValidApplicationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseApplicationArn` <a name="parseApplicationArn" id="@cdk_utils/iam.account_access.AccountAccessResources.parseApplicationArn"></a>

```typescript
import { account_access } from '@cdk_utils/iam'

account_access.AccountAccessResources.parseApplicationArn(arn: string)
```

Parses a application ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.account_access.AccountAccessResources.parseApplicationArn.parameter.arn"></a>

- *Type:* string

---




