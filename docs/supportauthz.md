# `supportauthz` Submodule <a name="`supportauthz` Submodule" id="@cdk_utils/iam.supportauthz"></a>


## Structs <a name="Structs" id="Structs"></a>

### SupportauthzSupportpermitArnComponents <a name="SupportauthzSupportpermitArnComponents" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents"></a>

Parsed components of a supportpermit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

const supportauthzSupportpermitArnComponents: supportauthz.SupportauthzSupportpermitArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SupportauthzSupportpermitArnProps <a name="SupportauthzSupportpermitArnProps" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps"></a>

Properties for building a supportpermit ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

const supportauthzSupportpermitArnProps: supportauthz.SupportauthzSupportpermitArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SupportauthzSupportpermitrequestArnComponents <a name="SupportauthzSupportpermitrequestArnComponents" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents"></a>

Parsed components of a supportpermitrequest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

const supportauthzSupportpermitrequestArnComponents: supportauthz.SupportauthzSupportpermitrequestArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### SupportauthzSupportpermitrequestArnProps <a name="SupportauthzSupportpermitrequestArnProps" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps"></a>

Properties for building a supportpermitrequest ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

const supportauthzSupportpermitrequestArnProps: supportauthz.SupportauthzSupportpermitrequestArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SupportauthzActions <a name="SupportauthzActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions"></a>

IAM action constants for the supportauthz service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.supportauthz.SupportauthzActions.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

new supportauthz.SupportauthzActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.actionGetAction">actionGetAction</a></code> | <code>string</code> | [Read] supportauthz:GetAction. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.actionGetSupportPermit">actionGetSupportPermit</a></code> | <code>string</code> | [Read] supportauthz:GetSupportPermit. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.CreateSupportPermit">CreateSupportPermit</a></code> | <code>string</code> | [Write] supportauthz:CreateSupportPermit. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.DeleteSupportPermit">DeleteSupportPermit</a></code> | <code>string</code> | [Write] supportauthz:DeleteSupportPermit. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListActions">ListActions</a></code> | <code>string</code> | [List] supportauthz:ListActions. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListSupportPermitRequests">ListSupportPermitRequests</a></code> | <code>string</code> | [List] supportauthz:ListSupportPermitRequests. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListSupportPermits">ListSupportPermits</a></code> | <code>string</code> | [List] supportauthz:ListSupportPermits. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] supportauthz:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.RegisterKey">RegisterKey</a></code> | <code>string</code> | [Write] supportauthz:RegisterKey. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.RejectSupportPermitRequest">RejectSupportPermitRequest</a></code> | <code>string</code> | [Write] supportauthz:RejectSupportPermitRequest. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] supportauthz:TagResource. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] supportauthz:UntagResource. |

---

##### `actionGetAction`<sup>Required</sup> <a name="actionGetAction" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.actionGetAction"></a>

```typescript
public readonly actionGetAction: string;
```

- *Type:* string

[Read] supportauthz:GetAction.

---

##### `actionGetSupportPermit`<sup>Required</sup> <a name="actionGetSupportPermit" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.actionGetSupportPermit"></a>

```typescript
public readonly actionGetSupportPermit: string;
```

- *Type:* string

[Read] supportauthz:GetSupportPermit.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateSupportPermit`<sup>Required</sup> <a name="CreateSupportPermit" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.CreateSupportPermit"></a>

```typescript
public readonly CreateSupportPermit: string;
```

- *Type:* string

[Write] supportauthz:CreateSupportPermit.

---

##### `DeleteSupportPermit`<sup>Required</sup> <a name="DeleteSupportPermit" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.DeleteSupportPermit"></a>

```typescript
public readonly DeleteSupportPermit: string;
```

- *Type:* string

[Write] supportauthz:DeleteSupportPermit.

---

##### `ListActions`<sup>Required</sup> <a name="ListActions" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListActions"></a>

```typescript
public readonly ListActions: string;
```

- *Type:* string

[List] supportauthz:ListActions.

---

##### `ListSupportPermitRequests`<sup>Required</sup> <a name="ListSupportPermitRequests" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListSupportPermitRequests"></a>

```typescript
public readonly ListSupportPermitRequests: string;
```

- *Type:* string

[List] supportauthz:ListSupportPermitRequests.

---

##### `ListSupportPermits`<sup>Required</sup> <a name="ListSupportPermits" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListSupportPermits"></a>

```typescript
public readonly ListSupportPermits: string;
```

- *Type:* string

[List] supportauthz:ListSupportPermits.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] supportauthz:ListTagsForResource.

---

##### `RegisterKey`<sup>Required</sup> <a name="RegisterKey" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.RegisterKey"></a>

```typescript
public readonly RegisterKey: string;
```

- *Type:* string

[Write] supportauthz:RegisterKey.

---

##### `RejectSupportPermitRequest`<sup>Required</sup> <a name="RejectSupportPermitRequest" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.RejectSupportPermitRequest"></a>

```typescript
public readonly RejectSupportPermitRequest: string;
```

- *Type:* string

[Write] supportauthz:RejectSupportPermitRequest.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] supportauthz:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.supportauthz.SupportauthzActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] supportauthz:UntagResource.

---

### SupportauthzConditions <a name="SupportauthzConditions" id="@cdk_utils/iam.supportauthz.SupportauthzConditions"></a>

Condition key constants and builders for supportauthz.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

new supportauthz.SupportauthzConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.requestTag"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.resourceTag"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.tagKeys"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.actionGetSupportPermitConditionKeys">actionGetSupportPermitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSupportPermit action. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.CreateSupportPermitConditionKeys">CreateSupportPermitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSupportPermit action. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.DeleteSupportPermitConditionKeys">DeleteSupportPermitConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSupportPermit action. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetSupportPermitConditionKeys`<sup>Required</sup> <a name="actionGetSupportPermitConditionKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.actionGetSupportPermitConditionKeys"></a>

```typescript
public readonly actionGetSupportPermitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSupportPermit action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateSupportPermitConditionKeys`<sup>Required</sup> <a name="CreateSupportPermitConditionKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.CreateSupportPermitConditionKeys"></a>

```typescript
public readonly CreateSupportPermitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSupportPermit action.

---

##### `DeleteSupportPermitConditionKeys`<sup>Required</sup> <a name="DeleteSupportPermitConditionKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.DeleteSupportPermitConditionKeys"></a>

```typescript
public readonly DeleteSupportPermitConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSupportPermit action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.supportauthz.SupportauthzConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SupportauthzOperations <a name="SupportauthzOperations" id="@cdk_utils/iam.supportauthz.SupportauthzOperations"></a>

API operation to required IAM actions mapping for supportauthz.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

new supportauthz.SupportauthzOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.CreateSupportPermit">CreateSupportPermit</a></code> | <code>string[]</code> | IAM actions required for the CreateSupportPermit API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.DeleteSupportPermit">DeleteSupportPermit</a></code> | <code>string[]</code> | IAM actions required for the DeleteSupportPermit API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListActions">ListActions</a></code> | <code>string[]</code> | IAM actions required for the ListActions API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListSupportPermitRequests">ListSupportPermitRequests</a></code> | <code>string[]</code> | IAM actions required for the ListSupportPermitRequests API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListSupportPermits">ListSupportPermits</a></code> | <code>string[]</code> | IAM actions required for the ListSupportPermits API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.opGetAction">opGetAction</a></code> | <code>string[]</code> | IAM actions required for the GetAction API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.opGetSupportPermit">opGetSupportPermit</a></code> | <code>string[]</code> | IAM actions required for the GetSupportPermit API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.RejectSupportPermitRequest">RejectSupportPermitRequest</a></code> | <code>string[]</code> | IAM actions required for the RejectSupportPermitRequest API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `CreateSupportPermit`<sup>Required</sup> <a name="CreateSupportPermit" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.CreateSupportPermit"></a>

```typescript
public readonly CreateSupportPermit: string[];
```

- *Type:* string[]

IAM actions required for the CreateSupportPermit API call.

---

##### `DeleteSupportPermit`<sup>Required</sup> <a name="DeleteSupportPermit" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.DeleteSupportPermit"></a>

```typescript
public readonly DeleteSupportPermit: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSupportPermit API call.

---

##### `ListActions`<sup>Required</sup> <a name="ListActions" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListActions"></a>

```typescript
public readonly ListActions: string[];
```

- *Type:* string[]

IAM actions required for the ListActions API call.

---

##### `ListSupportPermitRequests`<sup>Required</sup> <a name="ListSupportPermitRequests" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListSupportPermitRequests"></a>

```typescript
public readonly ListSupportPermitRequests: string[];
```

- *Type:* string[]

IAM actions required for the ListSupportPermitRequests API call.

---

##### `ListSupportPermits`<sup>Required</sup> <a name="ListSupportPermits" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListSupportPermits"></a>

```typescript
public readonly ListSupportPermits: string[];
```

- *Type:* string[]

IAM actions required for the ListSupportPermits API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAction`<sup>Required</sup> <a name="opGetAction" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.opGetAction"></a>

```typescript
public readonly opGetAction: string[];
```

- *Type:* string[]

IAM actions required for the GetAction API call.

---

##### `opGetSupportPermit`<sup>Required</sup> <a name="opGetSupportPermit" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.opGetSupportPermit"></a>

```typescript
public readonly opGetSupportPermit: string[];
```

- *Type:* string[]

IAM actions required for the GetSupportPermit API call.

---

##### `RejectSupportPermitRequest`<sup>Required</sup> <a name="RejectSupportPermitRequest" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.RejectSupportPermitRequest"></a>

```typescript
public readonly RejectSupportPermitRequest: string[];
```

- *Type:* string[]

IAM actions required for the RejectSupportPermitRequest API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.supportauthz.SupportauthzOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### SupportauthzResources <a name="SupportauthzResources" id="@cdk_utils/iam.supportauthz.SupportauthzResources"></a>

ARN builders, validators, and parsers for supportauthz resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.supportauthz.SupportauthzResources.Initializer"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

new supportauthz.SupportauthzResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzResources.isValidSupportpermitArn">isValidSupportpermitArn</a></code> | Validates whether a string is a valid ARN for the supportpermit resource. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzResources.isValidSupportpermitrequestArn">isValidSupportpermitrequestArn</a></code> | Validates whether a string is a valid ARN for the supportpermitrequest resource. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzResources.parseSupportpermitArn">parseSupportpermitArn</a></code> | Parses a supportpermit ARN into its components. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzResources.parseSupportpermitrequestArn">parseSupportpermitrequestArn</a></code> | Parses a supportpermitrequest ARN into its components. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzResources.supportpermit">supportpermit</a></code> | Builds an ARN for the supportpermit resource. |
| <code><a href="#@cdk_utils/iam.supportauthz.SupportauthzResources.supportpermitrequest">supportpermitrequest</a></code> | Builds an ARN for the supportpermitrequest resource. |

---

##### `isValidSupportpermitArn` <a name="isValidSupportpermitArn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.isValidSupportpermitArn"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzResources.isValidSupportpermitArn(arn: string)
```

Validates whether a string is a valid ARN for the supportpermit resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.isValidSupportpermitArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSupportpermitrequestArn` <a name="isValidSupportpermitrequestArn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.isValidSupportpermitrequestArn"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzResources.isValidSupportpermitrequestArn(arn: string)
```

Validates whether a string is a valid ARN for the supportpermitrequest resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.isValidSupportpermitrequestArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSupportpermitArn` <a name="parseSupportpermitArn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.parseSupportpermitArn"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzResources.parseSupportpermitArn(arn: string)
```

Parses a supportpermit ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.parseSupportpermitArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSupportpermitrequestArn` <a name="parseSupportpermitrequestArn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.parseSupportpermitrequestArn"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzResources.parseSupportpermitrequestArn(arn: string)
```

Parses a supportpermitrequest ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.supportauthz.SupportauthzResources.parseSupportpermitrequestArn.parameter.arn"></a>

- *Type:* string

---

##### `supportpermit` <a name="supportpermit" id="@cdk_utils/iam.supportauthz.SupportauthzResources.supportpermit"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzResources.supportpermit(props: SupportauthzSupportpermitArnProps)
```

Builds an ARN for the supportpermit resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.supportauthz.SupportauthzResources.supportpermit.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitArnProps">SupportauthzSupportpermitArnProps</a>

---

##### `supportpermitrequest` <a name="supportpermitrequest" id="@cdk_utils/iam.supportauthz.SupportauthzResources.supportpermitrequest"></a>

```typescript
import { supportauthz } from '@cdk_utils/iam'

supportauthz.SupportauthzResources.supportpermitrequest(props: SupportauthzSupportpermitrequestArnProps)
```

Builds an ARN for the supportpermitrequest resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.supportauthz.SupportauthzResources.supportpermitrequest.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.supportauthz.SupportauthzSupportpermitrequestArnProps">SupportauthzSupportpermitrequestArnProps</a>

---




