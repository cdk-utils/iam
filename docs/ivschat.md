# `ivschat` Submodule <a name="`ivschat` Submodule" id="@cdk_utils/iam.ivschat"></a>


## Structs <a name="Structs" id="Structs"></a>

### IvschatLoggingConfigurationArnComponents <a name="IvschatLoggingConfigurationArnComponents" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents"></a>

Parsed components of a Logging-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

const ivschatLoggingConfigurationArnComponents: ivschat.IvschatLoggingConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvschatLoggingConfigurationArnProps <a name="IvschatLoggingConfigurationArnProps" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps"></a>

Properties for building a Logging-Configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

const ivschatLoggingConfigurationArnProps: ivschat.IvschatLoggingConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### IvschatRoomArnComponents <a name="IvschatRoomArnComponents" id="@cdk_utils/iam.ivschat.IvschatRoomArnComponents"></a>

Parsed components of a Room ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivschat.IvschatRoomArnComponents.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

const ivschatRoomArnComponents: ivschat.IvschatRoomArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivschat.IvschatRoomArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### IvschatRoomArnProps <a name="IvschatRoomArnProps" id="@cdk_utils/iam.ivschat.IvschatRoomArnProps"></a>

Properties for building a Room ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.ivschat.IvschatRoomArnProps.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

const ivschatRoomArnProps: ivschat.IvschatRoomArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.ivschat.IvschatRoomArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### IvschatActions <a name="IvschatActions" id="@cdk_utils/iam.ivschat.IvschatActions"></a>

IAM action constants for the ivschat service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivschat.IvschatActions.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

new ivschat.IvschatActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.actionGetLoggingConfiguration">actionGetLoggingConfiguration</a></code> | <code>string</code> | [Read] ivschat:GetLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.actionGetRoom">actionGetRoom</a></code> | <code>string</code> | [Read] ivschat:GetRoom. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.CreateChatToken">CreateChatToken</a></code> | <code>string</code> | [Write] ivschat:CreateChatToken. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.CreateLoggingConfiguration">CreateLoggingConfiguration</a></code> | <code>string</code> | [Write] ivschat:CreateLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.CreateRoom">CreateRoom</a></code> | <code>string</code> | [Write] ivschat:CreateRoom. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string</code> | [Write] ivschat:DeleteLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.DeleteMessage">DeleteMessage</a></code> | <code>string</code> | [Write] ivschat:DeleteMessage. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.DeleteRoom">DeleteRoom</a></code> | <code>string</code> | [Write] ivschat:DeleteRoom. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.DisconnectUser">DisconnectUser</a></code> | <code>string</code> | [Write] ivschat:DisconnectUser. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string</code> | [List] ivschat:ListLoggingConfigurations. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.ListRooms">ListRooms</a></code> | <code>string</code> | [List] ivschat:ListRooms. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] ivschat:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.SendEvent">SendEvent</a></code> | <code>string</code> | [Write] ivschat:SendEvent. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] ivschat:TagResource. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] ivschat:UntagResource. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.UpdateLoggingConfiguration">UpdateLoggingConfiguration</a></code> | <code>string</code> | [Write] ivschat:UpdateLoggingConfiguration. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatActions.property.UpdateRoom">UpdateRoom</a></code> | <code>string</code> | [Write] ivschat:UpdateRoom. |

---

##### `actionGetLoggingConfiguration`<sup>Required</sup> <a name="actionGetLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatActions.property.actionGetLoggingConfiguration"></a>

```typescript
public readonly actionGetLoggingConfiguration: string;
```

- *Type:* string

[Read] ivschat:GetLoggingConfiguration.

---

##### `actionGetRoom`<sup>Required</sup> <a name="actionGetRoom" id="@cdk_utils/iam.ivschat.IvschatActions.property.actionGetRoom"></a>

```typescript
public readonly actionGetRoom: string;
```

- *Type:* string

[Read] ivschat:GetRoom.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.ivschat.IvschatActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.ivschat.IvschatActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.ivschat.IvschatActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.ivschat.IvschatActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.ivschat.IvschatActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateChatToken`<sup>Required</sup> <a name="CreateChatToken" id="@cdk_utils/iam.ivschat.IvschatActions.property.CreateChatToken"></a>

```typescript
public readonly CreateChatToken: string;
```

- *Type:* string

[Write] ivschat:CreateChatToken.

---

##### `CreateLoggingConfiguration`<sup>Required</sup> <a name="CreateLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatActions.property.CreateLoggingConfiguration"></a>

```typescript
public readonly CreateLoggingConfiguration: string;
```

- *Type:* string

[Write] ivschat:CreateLoggingConfiguration.

---

##### `CreateRoom`<sup>Required</sup> <a name="CreateRoom" id="@cdk_utils/iam.ivschat.IvschatActions.property.CreateRoom"></a>

```typescript
public readonly CreateRoom: string;
```

- *Type:* string

[Write] ivschat:CreateRoom.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatActions.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string;
```

- *Type:* string

[Write] ivschat:DeleteLoggingConfiguration.

---

##### `DeleteMessage`<sup>Required</sup> <a name="DeleteMessage" id="@cdk_utils/iam.ivschat.IvschatActions.property.DeleteMessage"></a>

```typescript
public readonly DeleteMessage: string;
```

- *Type:* string

[Write] ivschat:DeleteMessage.

---

##### `DeleteRoom`<sup>Required</sup> <a name="DeleteRoom" id="@cdk_utils/iam.ivschat.IvschatActions.property.DeleteRoom"></a>

```typescript
public readonly DeleteRoom: string;
```

- *Type:* string

[Write] ivschat:DeleteRoom.

---

##### `DisconnectUser`<sup>Required</sup> <a name="DisconnectUser" id="@cdk_utils/iam.ivschat.IvschatActions.property.DisconnectUser"></a>

```typescript
public readonly DisconnectUser: string;
```

- *Type:* string

[Write] ivschat:DisconnectUser.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.ivschat.IvschatActions.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string;
```

- *Type:* string

[List] ivschat:ListLoggingConfigurations.

---

##### `ListRooms`<sup>Required</sup> <a name="ListRooms" id="@cdk_utils/iam.ivschat.IvschatActions.property.ListRooms"></a>

```typescript
public readonly ListRooms: string;
```

- *Type:* string

[List] ivschat:ListRooms.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ivschat.IvschatActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] ivschat:ListTagsForResource.

---

##### `SendEvent`<sup>Required</sup> <a name="SendEvent" id="@cdk_utils/iam.ivschat.IvschatActions.property.SendEvent"></a>

```typescript
public readonly SendEvent: string;
```

- *Type:* string

[Write] ivschat:SendEvent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.ivschat.IvschatActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ivschat.IvschatActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] ivschat:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ivschat.IvschatActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] ivschat:UntagResource.

---

##### `UpdateLoggingConfiguration`<sup>Required</sup> <a name="UpdateLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatActions.property.UpdateLoggingConfiguration"></a>

```typescript
public readonly UpdateLoggingConfiguration: string;
```

- *Type:* string

[Write] ivschat:UpdateLoggingConfiguration.

---

##### `UpdateRoom`<sup>Required</sup> <a name="UpdateRoom" id="@cdk_utils/iam.ivschat.IvschatActions.property.UpdateRoom"></a>

```typescript
public readonly UpdateRoom: string;
```

- *Type:* string

[Write] ivschat:UpdateRoom.

---

### IvschatConditions <a name="IvschatConditions" id="@cdk_utils/iam.ivschat.IvschatConditions"></a>

Condition key constants and builders for ivschat.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivschat.IvschatConditions.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

new ivschat.IvschatConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.ivschat.IvschatConditions.requestTag"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ivschat.IvschatConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.ivschat.IvschatConditions.resourceTag"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.ivschat.IvschatConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.tagKeys"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.ivschat.IvschatConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.CreateChatTokenConditionKeys">CreateChatTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChatToken action. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.CreateLoggingConfigurationConditionKeys">CreateLoggingConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateLoggingConfiguration action. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.CreateRoomConditionKeys">CreateRoomConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateRoom action. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.ListTagsForResourceConditionKeys">ListTagsForResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the ListTagsForResource action. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.ivschat.IvschatConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.ivschat.IvschatConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.ivschat.IvschatConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChatTokenConditionKeys`<sup>Required</sup> <a name="CreateChatTokenConditionKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.property.CreateChatTokenConditionKeys"></a>

```typescript
public readonly CreateChatTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChatToken action.

---

##### `CreateLoggingConfigurationConditionKeys`<sup>Required</sup> <a name="CreateLoggingConfigurationConditionKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.property.CreateLoggingConfigurationConditionKeys"></a>

```typescript
public readonly CreateLoggingConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateLoggingConfiguration action.

---

##### `CreateRoomConditionKeys`<sup>Required</sup> <a name="CreateRoomConditionKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.property.CreateRoomConditionKeys"></a>

```typescript
public readonly CreateRoomConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateRoom action.

---

##### `ListTagsForResourceConditionKeys`<sup>Required</sup> <a name="ListTagsForResourceConditionKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.property.ListTagsForResourceConditionKeys"></a>

```typescript
public readonly ListTagsForResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the ListTagsForResource action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.ivschat.IvschatConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### IvschatOperations <a name="IvschatOperations" id="@cdk_utils/iam.ivschat.IvschatOperations"></a>

API operation to required IAM actions mapping for ivschat.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivschat.IvschatOperations.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

new ivschat.IvschatOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.CreateChatToken">CreateChatToken</a></code> | <code>string[]</code> | IAM actions required for the CreateChatToken API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.CreateLoggingConfiguration">CreateLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.CreateRoom">CreateRoom</a></code> | <code>string[]</code> | IAM actions required for the CreateRoom API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.DeleteLoggingConfiguration">DeleteLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.DeleteMessage">DeleteMessage</a></code> | <code>string[]</code> | IAM actions required for the DeleteMessage API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.DeleteRoom">DeleteRoom</a></code> | <code>string[]</code> | IAM actions required for the DeleteRoom API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.DisconnectUser">DisconnectUser</a></code> | <code>string[]</code> | IAM actions required for the DisconnectUser API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.ListLoggingConfigurations">ListLoggingConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListLoggingConfigurations API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.ListRooms">ListRooms</a></code> | <code>string[]</code> | IAM actions required for the ListRooms API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.opGetLoggingConfiguration">opGetLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.opGetRoom">opGetRoom</a></code> | <code>string[]</code> | IAM actions required for the GetRoom API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.SendEvent">SendEvent</a></code> | <code>string[]</code> | IAM actions required for the SendEvent API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.UpdateLoggingConfiguration">UpdateLoggingConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateLoggingConfiguration API call. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatOperations.property.UpdateRoom">UpdateRoom</a></code> | <code>string[]</code> | IAM actions required for the UpdateRoom API call. |

---

##### `CreateChatToken`<sup>Required</sup> <a name="CreateChatToken" id="@cdk_utils/iam.ivschat.IvschatOperations.property.CreateChatToken"></a>

```typescript
public readonly CreateChatToken: string[];
```

- *Type:* string[]

IAM actions required for the CreateChatToken API call.

---

##### `CreateLoggingConfiguration`<sup>Required</sup> <a name="CreateLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatOperations.property.CreateLoggingConfiguration"></a>

```typescript
public readonly CreateLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateLoggingConfiguration API call.

---

##### `CreateRoom`<sup>Required</sup> <a name="CreateRoom" id="@cdk_utils/iam.ivschat.IvschatOperations.property.CreateRoom"></a>

```typescript
public readonly CreateRoom: string[];
```

- *Type:* string[]

IAM actions required for the CreateRoom API call.

---

##### `DeleteLoggingConfiguration`<sup>Required</sup> <a name="DeleteLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatOperations.property.DeleteLoggingConfiguration"></a>

```typescript
public readonly DeleteLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteLoggingConfiguration API call.

---

##### `DeleteMessage`<sup>Required</sup> <a name="DeleteMessage" id="@cdk_utils/iam.ivschat.IvschatOperations.property.DeleteMessage"></a>

```typescript
public readonly DeleteMessage: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMessage API call.

---

##### `DeleteRoom`<sup>Required</sup> <a name="DeleteRoom" id="@cdk_utils/iam.ivschat.IvschatOperations.property.DeleteRoom"></a>

```typescript
public readonly DeleteRoom: string[];
```

- *Type:* string[]

IAM actions required for the DeleteRoom API call.

---

##### `DisconnectUser`<sup>Required</sup> <a name="DisconnectUser" id="@cdk_utils/iam.ivschat.IvschatOperations.property.DisconnectUser"></a>

```typescript
public readonly DisconnectUser: string[];
```

- *Type:* string[]

IAM actions required for the DisconnectUser API call.

---

##### `ListLoggingConfigurations`<sup>Required</sup> <a name="ListLoggingConfigurations" id="@cdk_utils/iam.ivschat.IvschatOperations.property.ListLoggingConfigurations"></a>

```typescript
public readonly ListLoggingConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListLoggingConfigurations API call.

---

##### `ListRooms`<sup>Required</sup> <a name="ListRooms" id="@cdk_utils/iam.ivschat.IvschatOperations.property.ListRooms"></a>

```typescript
public readonly ListRooms: string[];
```

- *Type:* string[]

IAM actions required for the ListRooms API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.ivschat.IvschatOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetLoggingConfiguration`<sup>Required</sup> <a name="opGetLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatOperations.property.opGetLoggingConfiguration"></a>

```typescript
public readonly opGetLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLoggingConfiguration API call.

---

##### `opGetRoom`<sup>Required</sup> <a name="opGetRoom" id="@cdk_utils/iam.ivschat.IvschatOperations.property.opGetRoom"></a>

```typescript
public readonly opGetRoom: string[];
```

- *Type:* string[]

IAM actions required for the GetRoom API call.

---

##### `SendEvent`<sup>Required</sup> <a name="SendEvent" id="@cdk_utils/iam.ivschat.IvschatOperations.property.SendEvent"></a>

```typescript
public readonly SendEvent: string[];
```

- *Type:* string[]

IAM actions required for the SendEvent API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.ivschat.IvschatOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.ivschat.IvschatOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateLoggingConfiguration`<sup>Required</sup> <a name="UpdateLoggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatOperations.property.UpdateLoggingConfiguration"></a>

```typescript
public readonly UpdateLoggingConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateLoggingConfiguration API call.

---

##### `UpdateRoom`<sup>Required</sup> <a name="UpdateRoom" id="@cdk_utils/iam.ivschat.IvschatOperations.property.UpdateRoom"></a>

```typescript
public readonly UpdateRoom: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRoom API call.

---

### IvschatResources <a name="IvschatResources" id="@cdk_utils/iam.ivschat.IvschatResources"></a>

ARN builders, validators, and parsers for ivschat resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.ivschat.IvschatResources.Initializer"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

new ivschat.IvschatResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatResources.isValidLoggingConfigurationArn">isValidLoggingConfigurationArn</a></code> | Validates whether a string is a valid ARN for the Logging-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatResources.isValidRoomArn">isValidRoomArn</a></code> | Validates whether a string is a valid ARN for the Room resource. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatResources.loggingConfiguration">loggingConfiguration</a></code> | Builds an ARN for the Logging-Configuration resource. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatResources.parseLoggingConfigurationArn">parseLoggingConfigurationArn</a></code> | Parses a Logging-Configuration ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatResources.parseRoomArn">parseRoomArn</a></code> | Parses a Room ARN into its components. |
| <code><a href="#@cdk_utils/iam.ivschat.IvschatResources.room">room</a></code> | Builds an ARN for the Room resource. |

---

##### `isValidLoggingConfigurationArn` <a name="isValidLoggingConfigurationArn" id="@cdk_utils/iam.ivschat.IvschatResources.isValidLoggingConfigurationArn"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatResources.isValidLoggingConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the Logging-Configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivschat.IvschatResources.isValidLoggingConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoomArn` <a name="isValidRoomArn" id="@cdk_utils/iam.ivschat.IvschatResources.isValidRoomArn"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatResources.isValidRoomArn(arn: string)
```

Validates whether a string is a valid ARN for the Room resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivschat.IvschatResources.isValidRoomArn.parameter.arn"></a>

- *Type:* string

---

##### `loggingConfiguration` <a name="loggingConfiguration" id="@cdk_utils/iam.ivschat.IvschatResources.loggingConfiguration"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatResources.loggingConfiguration(props: IvschatLoggingConfigurationArnProps)
```

Builds an ARN for the Logging-Configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivschat.IvschatResources.loggingConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivschat.IvschatLoggingConfigurationArnProps">IvschatLoggingConfigurationArnProps</a>

---

##### `parseLoggingConfigurationArn` <a name="parseLoggingConfigurationArn" id="@cdk_utils/iam.ivschat.IvschatResources.parseLoggingConfigurationArn"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatResources.parseLoggingConfigurationArn(arn: string)
```

Parses a Logging-Configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivschat.IvschatResources.parseLoggingConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoomArn` <a name="parseRoomArn" id="@cdk_utils/iam.ivschat.IvschatResources.parseRoomArn"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatResources.parseRoomArn(arn: string)
```

Parses a Room ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.ivschat.IvschatResources.parseRoomArn.parameter.arn"></a>

- *Type:* string

---

##### `room` <a name="room" id="@cdk_utils/iam.ivschat.IvschatResources.room"></a>

```typescript
import { ivschat } from '@cdk_utils/iam'

ivschat.IvschatResources.room(props: IvschatRoomArnProps)
```

Builds an ARN for the Room resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.ivschat.IvschatResources.room.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.ivschat.IvschatRoomArnProps">IvschatRoomArnProps</a>

---




