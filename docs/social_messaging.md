# `social_messaging` Submodule <a name="`social_messaging` Submodule" id="@cdk_utils/iam.social_messaging"></a>


## Structs <a name="Structs" id="Structs"></a>

### SocialMessagingPhoneNumberIdArnComponents <a name="SocialMessagingPhoneNumberIdArnComponents" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents"></a>

Parsed components of a phone-number-id ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

const socialMessagingPhoneNumberIdArnComponents: social_messaging.SocialMessagingPhoneNumberIdArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.originationPhoneNumberId">originationPhoneNumberId</a></code> | <code>string</code> | The OriginationPhoneNumberId component. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `originationPhoneNumberId`<sup>Required</sup> <a name="originationPhoneNumberId" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.originationPhoneNumberId"></a>

```typescript
public readonly originationPhoneNumberId: string;
```

- *Type:* string

The OriginationPhoneNumberId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SocialMessagingPhoneNumberIdArnProps <a name="SocialMessagingPhoneNumberIdArnProps" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps"></a>

Properties for building a phone-number-id ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

const socialMessagingPhoneNumberIdArnProps: social_messaging.SocialMessagingPhoneNumberIdArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.originationPhoneNumberId">originationPhoneNumberId</a></code> | <code>string</code> | The OriginationPhoneNumberId component of the ARN. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `originationPhoneNumberId`<sup>Required</sup> <a name="originationPhoneNumberId" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.originationPhoneNumberId"></a>

```typescript
public readonly originationPhoneNumberId: string;
```

- *Type:* string

The OriginationPhoneNumberId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SocialMessagingWabaArnComponents <a name="SocialMessagingWabaArnComponents" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents"></a>

Parsed components of a waba ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

const socialMessagingWabaArnComponents: social_messaging.SocialMessagingWabaArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.wabaId">wabaId</a></code> | <code>string</code> | The WabaId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnComponents.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

The WabaId component.

---

### SocialMessagingWabaArnProps <a name="SocialMessagingWabaArnProps" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps"></a>

Properties for building a waba ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

const socialMessagingWabaArnProps: social_messaging.SocialMessagingWabaArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.wabaId">wabaId</a></code> | <code>string</code> | The WabaId component of the ARN. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `wabaId`<sup>Required</sup> <a name="wabaId" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.wabaId"></a>

```typescript
public readonly wabaId: string;
```

- *Type:* string

The WabaId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SocialMessagingActions <a name="SocialMessagingActions" id="@cdk_utils/iam.social_messaging.SocialMessagingActions"></a>

IAM action constants for the social-messaging service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

new social_messaging.SocialMessagingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetLinkedWhatsAppBusinessAccount">actionGetLinkedWhatsAppBusinessAccount</a></code> | <code>string</code> | [Read] social-messaging:GetLinkedWhatsAppBusinessAccount. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetLinkedWhatsAppBusinessAccountPhoneNumber">actionGetLinkedWhatsAppBusinessAccountPhoneNumber</a></code> | <code>string</code> | [Read] social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppFlow">actionGetWhatsAppFlow</a></code> | <code>string</code> | [Read] social-messaging:GetWhatsAppFlow. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppFlowPreview">actionGetWhatsAppFlowPreview</a></code> | <code>string</code> | [Read] social-messaging:GetWhatsAppFlowPreview. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppMessageMedia">actionGetWhatsAppMessageMedia</a></code> | <code>string</code> | [Write] social-messaging:GetWhatsAppMessageMedia. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppMessageTemplate">actionGetWhatsAppMessageTemplate</a></code> | <code>string</code> | [Read] social-messaging:GetWhatsAppMessageTemplate. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AssociateWhatsAppBusinessAccount">AssociateWhatsAppBusinessAccount</a></code> | <code>string</code> | [Write] social-messaging:AssociateWhatsAppBusinessAccount. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppFlow">CreateWhatsAppFlow</a></code> | <code>string</code> | [Write] social-messaging:CreateWhatsAppFlow. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppMessageTemplate">CreateWhatsAppMessageTemplate</a></code> | <code>string</code> | [Write] social-messaging:CreateWhatsAppMessageTemplate. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppMessageTemplateFromLibrary">CreateWhatsAppMessageTemplateFromLibrary</a></code> | <code>string</code> | [Write] social-messaging:CreateWhatsAppMessageTemplateFromLibrary. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppMessageTemplateMedia">CreateWhatsAppMessageTemplateMedia</a></code> | <code>string</code> | [Write] social-messaging:CreateWhatsAppMessageTemplateMedia. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeleteWhatsAppFlow">DeleteWhatsAppFlow</a></code> | <code>string</code> | [Write] social-messaging:DeleteWhatsAppFlow. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeleteWhatsAppMessageMedia">DeleteWhatsAppMessageMedia</a></code> | <code>string</code> | [Write] social-messaging:DeleteWhatsAppMessageMedia. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeleteWhatsAppMessageTemplate">DeleteWhatsAppMessageTemplate</a></code> | <code>string</code> | [Write] social-messaging:DeleteWhatsAppMessageTemplate. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeprecateWhatsAppFlow">DeprecateWhatsAppFlow</a></code> | <code>string</code> | [Write] social-messaging:DeprecateWhatsAppFlow. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DisassociateWhatsAppBusinessAccount">DisassociateWhatsAppBusinessAccount</a></code> | <code>string</code> | [Write] social-messaging:DisassociateWhatsAppBusinessAccount. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListLinkedWhatsAppBusinessAccounts">ListLinkedWhatsAppBusinessAccounts</a></code> | <code>string</code> | [List] social-messaging:ListLinkedWhatsAppBusinessAccounts. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] social-messaging:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppFlowAssets">ListWhatsAppFlowAssets</a></code> | <code>string</code> | [List] social-messaging:ListWhatsAppFlowAssets. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppFlows">ListWhatsAppFlows</a></code> | <code>string</code> | [List] social-messaging:ListWhatsAppFlows. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppMessageTemplates">ListWhatsAppMessageTemplates</a></code> | <code>string</code> | [List] social-messaging:ListWhatsAppMessageTemplates. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppTemplateLibrary">ListWhatsAppTemplateLibrary</a></code> | <code>string</code> | [List] social-messaging:ListWhatsAppTemplateLibrary. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.PostWhatsAppMessageMedia">PostWhatsAppMessageMedia</a></code> | <code>string</code> | [Write] social-messaging:PostWhatsAppMessageMedia. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.PublishWhatsAppFlow">PublishWhatsAppFlow</a></code> | <code>string</code> | [Write] social-messaging:PublishWhatsAppFlow. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.PutWhatsAppBusinessAccountEventDestinations">PutWhatsAppBusinessAccountEventDestinations</a></code> | <code>string</code> | [Write] social-messaging:PutWhatsAppBusinessAccountEventDestinations. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.SendWhatsAppMessage">SendWhatsAppMessage</a></code> | <code>string</code> | [Write] social-messaging:SendWhatsAppMessage. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] social-messaging:TagResource. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] social-messaging:UntagResource. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UpdateWhatsAppFlow">UpdateWhatsAppFlow</a></code> | <code>string</code> | [Write] social-messaging:UpdateWhatsAppFlow. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UpdateWhatsAppFlowAssets">UpdateWhatsAppFlowAssets</a></code> | <code>string</code> | [Write] social-messaging:UpdateWhatsAppFlowAssets. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UpdateWhatsAppMessageTemplate">UpdateWhatsAppMessageTemplate</a></code> | <code>string</code> | [Write] social-messaging:UpdateWhatsAppMessageTemplate. |

---

##### `actionGetLinkedWhatsAppBusinessAccount`<sup>Required</sup> <a name="actionGetLinkedWhatsAppBusinessAccount" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetLinkedWhatsAppBusinessAccount"></a>

```typescript
public readonly actionGetLinkedWhatsAppBusinessAccount: string;
```

- *Type:* string

[Read] social-messaging:GetLinkedWhatsAppBusinessAccount.

---

##### `actionGetLinkedWhatsAppBusinessAccountPhoneNumber`<sup>Required</sup> <a name="actionGetLinkedWhatsAppBusinessAccountPhoneNumber" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetLinkedWhatsAppBusinessAccountPhoneNumber"></a>

```typescript
public readonly actionGetLinkedWhatsAppBusinessAccountPhoneNumber: string;
```

- *Type:* string

[Read] social-messaging:GetLinkedWhatsAppBusinessAccountPhoneNumber.

---

##### `actionGetWhatsAppFlow`<sup>Required</sup> <a name="actionGetWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppFlow"></a>

```typescript
public readonly actionGetWhatsAppFlow: string;
```

- *Type:* string

[Read] social-messaging:GetWhatsAppFlow.

---

##### `actionGetWhatsAppFlowPreview`<sup>Required</sup> <a name="actionGetWhatsAppFlowPreview" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppFlowPreview"></a>

```typescript
public readonly actionGetWhatsAppFlowPreview: string;
```

- *Type:* string

[Read] social-messaging:GetWhatsAppFlowPreview.

---

##### `actionGetWhatsAppMessageMedia`<sup>Required</sup> <a name="actionGetWhatsAppMessageMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppMessageMedia"></a>

```typescript
public readonly actionGetWhatsAppMessageMedia: string;
```

- *Type:* string

[Write] social-messaging:GetWhatsAppMessageMedia.

---

##### `actionGetWhatsAppMessageTemplate`<sup>Required</sup> <a name="actionGetWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.actionGetWhatsAppMessageTemplate"></a>

```typescript
public readonly actionGetWhatsAppMessageTemplate: string;
```

- *Type:* string

[Read] social-messaging:GetWhatsAppMessageTemplate.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateWhatsAppBusinessAccount`<sup>Required</sup> <a name="AssociateWhatsAppBusinessAccount" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.AssociateWhatsAppBusinessAccount"></a>

```typescript
public readonly AssociateWhatsAppBusinessAccount: string;
```

- *Type:* string

[Write] social-messaging:AssociateWhatsAppBusinessAccount.

---

##### `CreateWhatsAppFlow`<sup>Required</sup> <a name="CreateWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppFlow"></a>

```typescript
public readonly CreateWhatsAppFlow: string;
```

- *Type:* string

[Write] social-messaging:CreateWhatsAppFlow.

---

##### `CreateWhatsAppMessageTemplate`<sup>Required</sup> <a name="CreateWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppMessageTemplate"></a>

```typescript
public readonly CreateWhatsAppMessageTemplate: string;
```

- *Type:* string

[Write] social-messaging:CreateWhatsAppMessageTemplate.

---

##### `CreateWhatsAppMessageTemplateFromLibrary`<sup>Required</sup> <a name="CreateWhatsAppMessageTemplateFromLibrary" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppMessageTemplateFromLibrary"></a>

```typescript
public readonly CreateWhatsAppMessageTemplateFromLibrary: string;
```

- *Type:* string

[Write] social-messaging:CreateWhatsAppMessageTemplateFromLibrary.

---

##### `CreateWhatsAppMessageTemplateMedia`<sup>Required</sup> <a name="CreateWhatsAppMessageTemplateMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.CreateWhatsAppMessageTemplateMedia"></a>

```typescript
public readonly CreateWhatsAppMessageTemplateMedia: string;
```

- *Type:* string

[Write] social-messaging:CreateWhatsAppMessageTemplateMedia.

---

##### `DeleteWhatsAppFlow`<sup>Required</sup> <a name="DeleteWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeleteWhatsAppFlow"></a>

```typescript
public readonly DeleteWhatsAppFlow: string;
```

- *Type:* string

[Write] social-messaging:DeleteWhatsAppFlow.

---

##### `DeleteWhatsAppMessageMedia`<sup>Required</sup> <a name="DeleteWhatsAppMessageMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeleteWhatsAppMessageMedia"></a>

```typescript
public readonly DeleteWhatsAppMessageMedia: string;
```

- *Type:* string

[Write] social-messaging:DeleteWhatsAppMessageMedia.

---

##### `DeleteWhatsAppMessageTemplate`<sup>Required</sup> <a name="DeleteWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeleteWhatsAppMessageTemplate"></a>

```typescript
public readonly DeleteWhatsAppMessageTemplate: string;
```

- *Type:* string

[Write] social-messaging:DeleteWhatsAppMessageTemplate.

---

##### `DeprecateWhatsAppFlow`<sup>Required</sup> <a name="DeprecateWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DeprecateWhatsAppFlow"></a>

```typescript
public readonly DeprecateWhatsAppFlow: string;
```

- *Type:* string

[Write] social-messaging:DeprecateWhatsAppFlow.

---

##### `DisassociateWhatsAppBusinessAccount`<sup>Required</sup> <a name="DisassociateWhatsAppBusinessAccount" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.DisassociateWhatsAppBusinessAccount"></a>

```typescript
public readonly DisassociateWhatsAppBusinessAccount: string;
```

- *Type:* string

[Write] social-messaging:DisassociateWhatsAppBusinessAccount.

---

##### `ListLinkedWhatsAppBusinessAccounts`<sup>Required</sup> <a name="ListLinkedWhatsAppBusinessAccounts" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListLinkedWhatsAppBusinessAccounts"></a>

```typescript
public readonly ListLinkedWhatsAppBusinessAccounts: string;
```

- *Type:* string

[List] social-messaging:ListLinkedWhatsAppBusinessAccounts.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] social-messaging:ListTagsForResource.

---

##### `ListWhatsAppFlowAssets`<sup>Required</sup> <a name="ListWhatsAppFlowAssets" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppFlowAssets"></a>

```typescript
public readonly ListWhatsAppFlowAssets: string;
```

- *Type:* string

[List] social-messaging:ListWhatsAppFlowAssets.

---

##### `ListWhatsAppFlows`<sup>Required</sup> <a name="ListWhatsAppFlows" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppFlows"></a>

```typescript
public readonly ListWhatsAppFlows: string;
```

- *Type:* string

[List] social-messaging:ListWhatsAppFlows.

---

##### `ListWhatsAppMessageTemplates`<sup>Required</sup> <a name="ListWhatsAppMessageTemplates" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppMessageTemplates"></a>

```typescript
public readonly ListWhatsAppMessageTemplates: string;
```

- *Type:* string

[List] social-messaging:ListWhatsAppMessageTemplates.

---

##### `ListWhatsAppTemplateLibrary`<sup>Required</sup> <a name="ListWhatsAppTemplateLibrary" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.ListWhatsAppTemplateLibrary"></a>

```typescript
public readonly ListWhatsAppTemplateLibrary: string;
```

- *Type:* string

[List] social-messaging:ListWhatsAppTemplateLibrary.

---

##### `PostWhatsAppMessageMedia`<sup>Required</sup> <a name="PostWhatsAppMessageMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.PostWhatsAppMessageMedia"></a>

```typescript
public readonly PostWhatsAppMessageMedia: string;
```

- *Type:* string

[Write] social-messaging:PostWhatsAppMessageMedia.

---

##### `PublishWhatsAppFlow`<sup>Required</sup> <a name="PublishWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.PublishWhatsAppFlow"></a>

```typescript
public readonly PublishWhatsAppFlow: string;
```

- *Type:* string

[Write] social-messaging:PublishWhatsAppFlow.

---

##### `PutWhatsAppBusinessAccountEventDestinations`<sup>Required</sup> <a name="PutWhatsAppBusinessAccountEventDestinations" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.PutWhatsAppBusinessAccountEventDestinations"></a>

```typescript
public readonly PutWhatsAppBusinessAccountEventDestinations: string;
```

- *Type:* string

[Write] social-messaging:PutWhatsAppBusinessAccountEventDestinations.

---

##### `SendWhatsAppMessage`<sup>Required</sup> <a name="SendWhatsAppMessage" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.SendWhatsAppMessage"></a>

```typescript
public readonly SendWhatsAppMessage: string;
```

- *Type:* string

[Write] social-messaging:SendWhatsAppMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] social-messaging:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] social-messaging:UntagResource.

---

##### `UpdateWhatsAppFlow`<sup>Required</sup> <a name="UpdateWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UpdateWhatsAppFlow"></a>

```typescript
public readonly UpdateWhatsAppFlow: string;
```

- *Type:* string

[Write] social-messaging:UpdateWhatsAppFlow.

---

##### `UpdateWhatsAppFlowAssets`<sup>Required</sup> <a name="UpdateWhatsAppFlowAssets" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UpdateWhatsAppFlowAssets"></a>

```typescript
public readonly UpdateWhatsAppFlowAssets: string;
```

- *Type:* string

[Write] social-messaging:UpdateWhatsAppFlowAssets.

---

##### `UpdateWhatsAppMessageTemplate`<sup>Required</sup> <a name="UpdateWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingActions.property.UpdateWhatsAppMessageTemplate"></a>

```typescript
public readonly UpdateWhatsAppMessageTemplate: string;
```

- *Type:* string

[Write] social-messaging:UpdateWhatsAppMessageTemplate.

---

### SocialMessagingConditions <a name="SocialMessagingConditions" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions"></a>

Condition key constants and builders for social-messaging.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

new social_messaging.SocialMessagingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.requestTag"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.resourceTag"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.tagKeys"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AssociateWhatsAppBusinessAccountConditionKeys">AssociateWhatsAppBusinessAccountConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateWhatsAppBusinessAccount action. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AssociateWhatsAppBusinessAccountConditionKeys`<sup>Required</sup> <a name="AssociateWhatsAppBusinessAccountConditionKeys" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AssociateWhatsAppBusinessAccountConditionKeys"></a>

```typescript
public readonly AssociateWhatsAppBusinessAccountConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateWhatsAppBusinessAccount action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.social_messaging.SocialMessagingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SocialMessagingOperations <a name="SocialMessagingOperations" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations"></a>

API operation to required IAM actions mapping for social-messaging.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

new social_messaging.SocialMessagingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.AssociateWhatsAppBusinessAccount">AssociateWhatsAppBusinessAccount</a></code> | <code>string[]</code> | IAM actions required for the AssociateWhatsAppBusinessAccount API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppDataset">CreateWhatsAppDataset</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatsAppDataset API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppFlow">CreateWhatsAppFlow</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatsAppFlow API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppMessageTemplate">CreateWhatsAppMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatsAppMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppMessageTemplateFromLibrary">CreateWhatsAppMessageTemplateFromLibrary</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatsAppMessageTemplateFromLibrary API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppMessageTemplateMedia">CreateWhatsAppMessageTemplateMedia</a></code> | <code>string[]</code> | IAM actions required for the CreateWhatsAppMessageTemplateMedia API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeleteWhatsAppFlow">DeleteWhatsAppFlow</a></code> | <code>string[]</code> | IAM actions required for the DeleteWhatsAppFlow API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeleteWhatsAppMessageMedia">DeleteWhatsAppMessageMedia</a></code> | <code>string[]</code> | IAM actions required for the DeleteWhatsAppMessageMedia API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeleteWhatsAppMessageTemplate">DeleteWhatsAppMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeleteWhatsAppMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeprecateWhatsAppFlow">DeprecateWhatsAppFlow</a></code> | <code>string[]</code> | IAM actions required for the DeprecateWhatsAppFlow API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DisassociateWhatsAppBusinessAccount">DisassociateWhatsAppBusinessAccount</a></code> | <code>string[]</code> | IAM actions required for the DisassociateWhatsAppBusinessAccount API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListLinkedWhatsAppBusinessAccounts">ListLinkedWhatsAppBusinessAccounts</a></code> | <code>string[]</code> | IAM actions required for the ListLinkedWhatsAppBusinessAccounts API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppFlowAssets">ListWhatsAppFlowAssets</a></code> | <code>string[]</code> | IAM actions required for the ListWhatsAppFlowAssets API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppFlows">ListWhatsAppFlows</a></code> | <code>string[]</code> | IAM actions required for the ListWhatsAppFlows API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppMessageTemplates">ListWhatsAppMessageTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListWhatsAppMessageTemplates API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppTemplateLibrary">ListWhatsAppTemplateLibrary</a></code> | <code>string[]</code> | IAM actions required for the ListWhatsAppTemplateLibrary API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetLinkedWhatsAppBusinessAccount">opGetLinkedWhatsAppBusinessAccount</a></code> | <code>string[]</code> | IAM actions required for the GetLinkedWhatsAppBusinessAccount API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetLinkedWhatsAppBusinessAccountPhoneNumber">opGetLinkedWhatsAppBusinessAccountPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the GetLinkedWhatsAppBusinessAccountPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppFlow">opGetWhatsAppFlow</a></code> | <code>string[]</code> | IAM actions required for the GetWhatsAppFlow API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppFlowPreview">opGetWhatsAppFlowPreview</a></code> | <code>string[]</code> | IAM actions required for the GetWhatsAppFlowPreview API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppMessageMedia">opGetWhatsAppMessageMedia</a></code> | <code>string[]</code> | IAM actions required for the GetWhatsAppMessageMedia API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppMessageTemplate">opGetWhatsAppMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetWhatsAppMessageTemplate API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.PostWhatsAppMessageMedia">PostWhatsAppMessageMedia</a></code> | <code>string[]</code> | IAM actions required for the PostWhatsAppMessageMedia API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.PublishWhatsAppFlow">PublishWhatsAppFlow</a></code> | <code>string[]</code> | IAM actions required for the PublishWhatsAppFlow API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.PutWhatsAppBusinessAccountEventDestinations">PutWhatsAppBusinessAccountEventDestinations</a></code> | <code>string[]</code> | IAM actions required for the PutWhatsAppBusinessAccountEventDestinations API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.SendWhatsAppConversionEvent">SendWhatsAppConversionEvent</a></code> | <code>string[]</code> | IAM actions required for the SendWhatsAppConversionEvent API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.SendWhatsAppMessage">SendWhatsAppMessage</a></code> | <code>string[]</code> | IAM actions required for the SendWhatsAppMessage API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UpdateWhatsAppFlow">UpdateWhatsAppFlow</a></code> | <code>string[]</code> | IAM actions required for the UpdateWhatsAppFlow API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UpdateWhatsAppFlowAssets">UpdateWhatsAppFlowAssets</a></code> | <code>string[]</code> | IAM actions required for the UpdateWhatsAppFlowAssets API call. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UpdateWhatsAppMessageTemplate">UpdateWhatsAppMessageTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdateWhatsAppMessageTemplate API call. |

---

##### `AssociateWhatsAppBusinessAccount`<sup>Required</sup> <a name="AssociateWhatsAppBusinessAccount" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.AssociateWhatsAppBusinessAccount"></a>

```typescript
public readonly AssociateWhatsAppBusinessAccount: string[];
```

- *Type:* string[]

IAM actions required for the AssociateWhatsAppBusinessAccount API call.

---

##### `CreateWhatsAppDataset`<sup>Required</sup> <a name="CreateWhatsAppDataset" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppDataset"></a>

```typescript
public readonly CreateWhatsAppDataset: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatsAppDataset API call.

---

##### `CreateWhatsAppFlow`<sup>Required</sup> <a name="CreateWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppFlow"></a>

```typescript
public readonly CreateWhatsAppFlow: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatsAppFlow API call.

---

##### `CreateWhatsAppMessageTemplate`<sup>Required</sup> <a name="CreateWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppMessageTemplate"></a>

```typescript
public readonly CreateWhatsAppMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatsAppMessageTemplate API call.

---

##### `CreateWhatsAppMessageTemplateFromLibrary`<sup>Required</sup> <a name="CreateWhatsAppMessageTemplateFromLibrary" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppMessageTemplateFromLibrary"></a>

```typescript
public readonly CreateWhatsAppMessageTemplateFromLibrary: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatsAppMessageTemplateFromLibrary API call.

---

##### `CreateWhatsAppMessageTemplateMedia`<sup>Required</sup> <a name="CreateWhatsAppMessageTemplateMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.CreateWhatsAppMessageTemplateMedia"></a>

```typescript
public readonly CreateWhatsAppMessageTemplateMedia: string[];
```

- *Type:* string[]

IAM actions required for the CreateWhatsAppMessageTemplateMedia API call.

---

##### `DeleteWhatsAppFlow`<sup>Required</sup> <a name="DeleteWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeleteWhatsAppFlow"></a>

```typescript
public readonly DeleteWhatsAppFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWhatsAppFlow API call.

---

##### `DeleteWhatsAppMessageMedia`<sup>Required</sup> <a name="DeleteWhatsAppMessageMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeleteWhatsAppMessageMedia"></a>

```typescript
public readonly DeleteWhatsAppMessageMedia: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWhatsAppMessageMedia API call.

---

##### `DeleteWhatsAppMessageTemplate`<sup>Required</sup> <a name="DeleteWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeleteWhatsAppMessageTemplate"></a>

```typescript
public readonly DeleteWhatsAppMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWhatsAppMessageTemplate API call.

---

##### `DeprecateWhatsAppFlow`<sup>Required</sup> <a name="DeprecateWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DeprecateWhatsAppFlow"></a>

```typescript
public readonly DeprecateWhatsAppFlow: string[];
```

- *Type:* string[]

IAM actions required for the DeprecateWhatsAppFlow API call.

---

##### `DisassociateWhatsAppBusinessAccount`<sup>Required</sup> <a name="DisassociateWhatsAppBusinessAccount" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.DisassociateWhatsAppBusinessAccount"></a>

```typescript
public readonly DisassociateWhatsAppBusinessAccount: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateWhatsAppBusinessAccount API call.

---

##### `ListLinkedWhatsAppBusinessAccounts`<sup>Required</sup> <a name="ListLinkedWhatsAppBusinessAccounts" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListLinkedWhatsAppBusinessAccounts"></a>

```typescript
public readonly ListLinkedWhatsAppBusinessAccounts: string[];
```

- *Type:* string[]

IAM actions required for the ListLinkedWhatsAppBusinessAccounts API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWhatsAppFlowAssets`<sup>Required</sup> <a name="ListWhatsAppFlowAssets" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppFlowAssets"></a>

```typescript
public readonly ListWhatsAppFlowAssets: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatsAppFlowAssets API call.

---

##### `ListWhatsAppFlows`<sup>Required</sup> <a name="ListWhatsAppFlows" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppFlows"></a>

```typescript
public readonly ListWhatsAppFlows: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatsAppFlows API call.

---

##### `ListWhatsAppMessageTemplates`<sup>Required</sup> <a name="ListWhatsAppMessageTemplates" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppMessageTemplates"></a>

```typescript
public readonly ListWhatsAppMessageTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatsAppMessageTemplates API call.

---

##### `ListWhatsAppTemplateLibrary`<sup>Required</sup> <a name="ListWhatsAppTemplateLibrary" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.ListWhatsAppTemplateLibrary"></a>

```typescript
public readonly ListWhatsAppTemplateLibrary: string[];
```

- *Type:* string[]

IAM actions required for the ListWhatsAppTemplateLibrary API call.

---

##### `opGetLinkedWhatsAppBusinessAccount`<sup>Required</sup> <a name="opGetLinkedWhatsAppBusinessAccount" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetLinkedWhatsAppBusinessAccount"></a>

```typescript
public readonly opGetLinkedWhatsAppBusinessAccount: string[];
```

- *Type:* string[]

IAM actions required for the GetLinkedWhatsAppBusinessAccount API call.

---

##### `opGetLinkedWhatsAppBusinessAccountPhoneNumber`<sup>Required</sup> <a name="opGetLinkedWhatsAppBusinessAccountPhoneNumber" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetLinkedWhatsAppBusinessAccountPhoneNumber"></a>

```typescript
public readonly opGetLinkedWhatsAppBusinessAccountPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the GetLinkedWhatsAppBusinessAccountPhoneNumber API call.

---

##### `opGetWhatsAppFlow`<sup>Required</sup> <a name="opGetWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppFlow"></a>

```typescript
public readonly opGetWhatsAppFlow: string[];
```

- *Type:* string[]

IAM actions required for the GetWhatsAppFlow API call.

---

##### `opGetWhatsAppFlowPreview`<sup>Required</sup> <a name="opGetWhatsAppFlowPreview" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppFlowPreview"></a>

```typescript
public readonly opGetWhatsAppFlowPreview: string[];
```

- *Type:* string[]

IAM actions required for the GetWhatsAppFlowPreview API call.

---

##### `opGetWhatsAppMessageMedia`<sup>Required</sup> <a name="opGetWhatsAppMessageMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppMessageMedia"></a>

```typescript
public readonly opGetWhatsAppMessageMedia: string[];
```

- *Type:* string[]

IAM actions required for the GetWhatsAppMessageMedia API call.

---

##### `opGetWhatsAppMessageTemplate`<sup>Required</sup> <a name="opGetWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.opGetWhatsAppMessageTemplate"></a>

```typescript
public readonly opGetWhatsAppMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetWhatsAppMessageTemplate API call.

---

##### `PostWhatsAppMessageMedia`<sup>Required</sup> <a name="PostWhatsAppMessageMedia" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.PostWhatsAppMessageMedia"></a>

```typescript
public readonly PostWhatsAppMessageMedia: string[];
```

- *Type:* string[]

IAM actions required for the PostWhatsAppMessageMedia API call.

---

##### `PublishWhatsAppFlow`<sup>Required</sup> <a name="PublishWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.PublishWhatsAppFlow"></a>

```typescript
public readonly PublishWhatsAppFlow: string[];
```

- *Type:* string[]

IAM actions required for the PublishWhatsAppFlow API call.

---

##### `PutWhatsAppBusinessAccountEventDestinations`<sup>Required</sup> <a name="PutWhatsAppBusinessAccountEventDestinations" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.PutWhatsAppBusinessAccountEventDestinations"></a>

```typescript
public readonly PutWhatsAppBusinessAccountEventDestinations: string[];
```

- *Type:* string[]

IAM actions required for the PutWhatsAppBusinessAccountEventDestinations API call.

---

##### `SendWhatsAppConversionEvent`<sup>Required</sup> <a name="SendWhatsAppConversionEvent" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.SendWhatsAppConversionEvent"></a>

```typescript
public readonly SendWhatsAppConversionEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendWhatsAppConversionEvent API call.

---

##### `SendWhatsAppMessage`<sup>Required</sup> <a name="SendWhatsAppMessage" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.SendWhatsAppMessage"></a>

```typescript
public readonly SendWhatsAppMessage: string[];
```

- *Type:* string[]

IAM actions required for the SendWhatsAppMessage API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateWhatsAppFlow`<sup>Required</sup> <a name="UpdateWhatsAppFlow" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UpdateWhatsAppFlow"></a>

```typescript
public readonly UpdateWhatsAppFlow: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWhatsAppFlow API call.

---

##### `UpdateWhatsAppFlowAssets`<sup>Required</sup> <a name="UpdateWhatsAppFlowAssets" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UpdateWhatsAppFlowAssets"></a>

```typescript
public readonly UpdateWhatsAppFlowAssets: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWhatsAppFlowAssets API call.

---

##### `UpdateWhatsAppMessageTemplate`<sup>Required</sup> <a name="UpdateWhatsAppMessageTemplate" id="@cdk_utils/iam.social_messaging.SocialMessagingOperations.property.UpdateWhatsAppMessageTemplate"></a>

```typescript
public readonly UpdateWhatsAppMessageTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWhatsAppMessageTemplate API call.

---

### SocialMessagingResources <a name="SocialMessagingResources" id="@cdk_utils/iam.social_messaging.SocialMessagingResources"></a>

ARN builders, validators, and parsers for social-messaging resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.Initializer"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

new social_messaging.SocialMessagingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingResources.isValidPhoneNumberIdArn">isValidPhoneNumberIdArn</a></code> | Validates whether a string is a valid ARN for the phone-number-id resource. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingResources.isValidWabaArn">isValidWabaArn</a></code> | Validates whether a string is a valid ARN for the waba resource. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingResources.parsePhoneNumberIdArn">parsePhoneNumberIdArn</a></code> | Parses a phone-number-id ARN into its components. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingResources.parseWabaArn">parseWabaArn</a></code> | Parses a waba ARN into its components. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingResources.phoneNumberId">phoneNumberId</a></code> | Builds an ARN for the phone-number-id resource. |
| <code><a href="#@cdk_utils/iam.social_messaging.SocialMessagingResources.waba">waba</a></code> | Builds an ARN for the waba resource. |

---

##### `isValidPhoneNumberIdArn` <a name="isValidPhoneNumberIdArn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.isValidPhoneNumberIdArn"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingResources.isValidPhoneNumberIdArn(arn: string)
```

Validates whether a string is a valid ARN for the phone-number-id resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.isValidPhoneNumberIdArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWabaArn` <a name="isValidWabaArn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.isValidWabaArn"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingResources.isValidWabaArn(arn: string)
```

Validates whether a string is a valid ARN for the waba resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.isValidWabaArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePhoneNumberIdArn` <a name="parsePhoneNumberIdArn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.parsePhoneNumberIdArn"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingResources.parsePhoneNumberIdArn(arn: string)
```

Parses a phone-number-id ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.parsePhoneNumberIdArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWabaArn` <a name="parseWabaArn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.parseWabaArn"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingResources.parseWabaArn(arn: string)
```

Parses a waba ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.parseWabaArn.parameter.arn"></a>

- *Type:* string

---

##### `phoneNumberId` <a name="phoneNumberId" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.phoneNumberId"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingResources.phoneNumberId(props: SocialMessagingPhoneNumberIdArnProps)
```

Builds an ARN for the phone-number-id resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.phoneNumberId.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.social_messaging.SocialMessagingPhoneNumberIdArnProps">SocialMessagingPhoneNumberIdArnProps</a>

---

##### `waba` <a name="waba" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.waba"></a>

```typescript
import { social_messaging } from '@cdk_utils/iam'

social_messaging.SocialMessagingResources.waba(props: SocialMessagingWabaArnProps)
```

Builds an ARN for the waba resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.social_messaging.SocialMessagingResources.waba.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.social_messaging.SocialMessagingWabaArnProps">SocialMessagingWabaArnProps</a>

---




