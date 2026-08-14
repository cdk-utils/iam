# `notifications_contacts` Submodule <a name="`notifications_contacts` Submodule" id="@cdk_utils/iam.notifications_contacts"></a>


## Structs <a name="Structs" id="Structs"></a>

### NotificationsContactsEmailContactResourceArnComponents <a name="NotificationsContactsEmailContactResourceArnComponents" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents"></a>

Parsed components of a EmailContactResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.Initializer"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

const notificationsContactsEmailContactResourceArnComponents: notifications_contacts.NotificationsContactsEmailContactResourceArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.property.emailContactId">emailContactId</a></code> | <code>string</code> | The EmailContactId component. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `emailContactId`<sup>Required</sup> <a name="emailContactId" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.property.emailContactId"></a>

```typescript
public readonly emailContactId: string;
```

- *Type:* string

The EmailContactId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### NotificationsContactsEmailContactResourceArnProps <a name="NotificationsContactsEmailContactResourceArnProps" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps"></a>

Properties for building a EmailContactResource ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.Initializer"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

const notificationsContactsEmailContactResourceArnProps: notifications_contacts.NotificationsContactsEmailContactResourceArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.property.emailContactId">emailContactId</a></code> | <code>string</code> | The EmailContactId component of the ARN. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `emailContactId`<sup>Required</sup> <a name="emailContactId" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.property.emailContactId"></a>

```typescript
public readonly emailContactId: string;
```

- *Type:* string

The EmailContactId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### NotificationsContactsActions <a name="NotificationsContactsActions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions"></a>

IAM action constants for the notifications-contacts service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.Initializer"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

new notifications_contacts.NotificationsContactsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.actionGetEmailContact">actionGetEmailContact</a></code> | <code>string</code> | [Read] notifications-contacts:GetEmailContact. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.ActivateEmailContact">ActivateEmailContact</a></code> | <code>string</code> | [Write] notifications-contacts:ActivateEmailContact. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.CreateEmailContact">CreateEmailContact</a></code> | <code>string</code> | [Write] notifications-contacts:CreateEmailContact. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.DeleteEmailContact">DeleteEmailContact</a></code> | <code>string</code> | [Write] notifications-contacts:DeleteEmailContact. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.ListEmailContacts">ListEmailContacts</a></code> | <code>string</code> | [List] notifications-contacts:ListEmailContacts. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] notifications-contacts:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.SendActivationCode">SendActivationCode</a></code> | <code>string</code> | [Write] notifications-contacts:SendActivationCode. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] notifications-contacts:TagResource. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] notifications-contacts:UntagResource. |

---

##### `actionGetEmailContact`<sup>Required</sup> <a name="actionGetEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.actionGetEmailContact"></a>

```typescript
public readonly actionGetEmailContact: string;
```

- *Type:* string

[Read] notifications-contacts:GetEmailContact.

---

##### `ActivateEmailContact`<sup>Required</sup> <a name="ActivateEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.ActivateEmailContact"></a>

```typescript
public readonly ActivateEmailContact: string;
```

- *Type:* string

[Write] notifications-contacts:ActivateEmailContact.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateEmailContact`<sup>Required</sup> <a name="CreateEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.CreateEmailContact"></a>

```typescript
public readonly CreateEmailContact: string;
```

- *Type:* string

[Write] notifications-contacts:CreateEmailContact.

---

##### `DeleteEmailContact`<sup>Required</sup> <a name="DeleteEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.DeleteEmailContact"></a>

```typescript
public readonly DeleteEmailContact: string;
```

- *Type:* string

[Write] notifications-contacts:DeleteEmailContact.

---

##### `ListEmailContacts`<sup>Required</sup> <a name="ListEmailContacts" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.ListEmailContacts"></a>

```typescript
public readonly ListEmailContacts: string;
```

- *Type:* string

[List] notifications-contacts:ListEmailContacts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] notifications-contacts:ListTagsForResource.

---

##### `SendActivationCode`<sup>Required</sup> <a name="SendActivationCode" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.SendActivationCode"></a>

```typescript
public readonly SendActivationCode: string;
```

- *Type:* string

[Write] notifications-contacts:SendActivationCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] notifications-contacts:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] notifications-contacts:UntagResource.

---

### NotificationsContactsConditions <a name="NotificationsContactsConditions" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions"></a>

Condition key constants and builders for notifications-contacts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.Initializer"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

new notifications_contacts.NotificationsContactsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.requestTag"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

notifications_contacts.NotificationsContactsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.resourceTag"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

notifications_contacts.NotificationsContactsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.tagKeys"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

notifications_contacts.NotificationsContactsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.CreateEmailContactConditionKeys">CreateEmailContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEmailContact action. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEmailContactConditionKeys`<sup>Required</sup> <a name="CreateEmailContactConditionKeys" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.CreateEmailContactConditionKeys"></a>

```typescript
public readonly CreateEmailContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEmailContact action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### NotificationsContactsOperations <a name="NotificationsContactsOperations" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations"></a>

API operation to required IAM actions mapping for notifications-contacts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.Initializer"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

new notifications_contacts.NotificationsContactsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.ActivateEmailContact">ActivateEmailContact</a></code> | <code>string[]</code> | IAM actions required for the ActivateEmailContact API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.CreateEmailContact">CreateEmailContact</a></code> | <code>string[]</code> | IAM actions required for the CreateEmailContact API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.DeleteEmailContact">DeleteEmailContact</a></code> | <code>string[]</code> | IAM actions required for the DeleteEmailContact API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.ListEmailContacts">ListEmailContacts</a></code> | <code>string[]</code> | IAM actions required for the ListEmailContacts API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.opGetEmailContact">opGetEmailContact</a></code> | <code>string[]</code> | IAM actions required for the GetEmailContact API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.SendActivationCode">SendActivationCode</a></code> | <code>string[]</code> | IAM actions required for the SendActivationCode API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `ActivateEmailContact`<sup>Required</sup> <a name="ActivateEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.ActivateEmailContact"></a>

```typescript
public readonly ActivateEmailContact: string[];
```

- *Type:* string[]

IAM actions required for the ActivateEmailContact API call.

---

##### `CreateEmailContact`<sup>Required</sup> <a name="CreateEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.CreateEmailContact"></a>

```typescript
public readonly CreateEmailContact: string[];
```

- *Type:* string[]

IAM actions required for the CreateEmailContact API call.

---

##### `DeleteEmailContact`<sup>Required</sup> <a name="DeleteEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.DeleteEmailContact"></a>

```typescript
public readonly DeleteEmailContact: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEmailContact API call.

---

##### `ListEmailContacts`<sup>Required</sup> <a name="ListEmailContacts" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.ListEmailContacts"></a>

```typescript
public readonly ListEmailContacts: string[];
```

- *Type:* string[]

IAM actions required for the ListEmailContacts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetEmailContact`<sup>Required</sup> <a name="opGetEmailContact" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.opGetEmailContact"></a>

```typescript
public readonly opGetEmailContact: string[];
```

- *Type:* string[]

IAM actions required for the GetEmailContact API call.

---

##### `SendActivationCode`<sup>Required</sup> <a name="SendActivationCode" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.SendActivationCode"></a>

```typescript
public readonly SendActivationCode: string[];
```

- *Type:* string[]

IAM actions required for the SendActivationCode API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### NotificationsContactsResources <a name="NotificationsContactsResources" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources"></a>

ARN builders, validators, and parsers for notifications-contacts resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.Initializer"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

new notifications_contacts.NotificationsContactsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.emailContactResource">emailContactResource</a></code> | Builds an ARN for the EmailContactResource resource. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.isValidEmailContactResourceArn">isValidEmailContactResourceArn</a></code> | Validates whether a string is a valid ARN for the EmailContactResource resource. |
| <code><a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.parseEmailContactResourceArn">parseEmailContactResourceArn</a></code> | Parses a EmailContactResource ARN into its components. |

---

##### `emailContactResource` <a name="emailContactResource" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.emailContactResource"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

notifications_contacts.NotificationsContactsResources.emailContactResource(props: NotificationsContactsEmailContactResourceArnProps)
```

Builds an ARN for the EmailContactResource resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.emailContactResource.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.notifications_contacts.NotificationsContactsEmailContactResourceArnProps">NotificationsContactsEmailContactResourceArnProps</a>

---

##### `isValidEmailContactResourceArn` <a name="isValidEmailContactResourceArn" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.isValidEmailContactResourceArn"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

notifications_contacts.NotificationsContactsResources.isValidEmailContactResourceArn(arn: string)
```

Validates whether a string is a valid ARN for the EmailContactResource resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.isValidEmailContactResourceArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEmailContactResourceArn` <a name="parseEmailContactResourceArn" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.parseEmailContactResourceArn"></a>

```typescript
import { notifications_contacts } from '@cdk_utils/iam'

notifications_contacts.NotificationsContactsResources.parseEmailContactResourceArn(arn: string)
```

Parses a EmailContactResource ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.notifications_contacts.NotificationsContactsResources.parseEmailContactResourceArn.parameter.arn"></a>

- *Type:* string

---




