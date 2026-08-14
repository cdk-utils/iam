# `chatbot` Submodule <a name="`chatbot` Submodule" id="@cdk_utils/iam.chatbot"></a>


## Structs <a name="Structs" id="Structs"></a>

### ChatbotChatbotConfigurationArnComponents <a name="ChatbotChatbotConfigurationArnComponents" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents"></a>

Parsed components of a ChatbotConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

const chatbotChatbotConfigurationArnComponents: chatbot.ChatbotChatbotConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.chatbotConfigurationName">chatbotConfigurationName</a></code> | <code>string</code> | The ChatbotConfigurationName component. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.configurationType">configurationType</a></code> | <code>string</code> | The ConfigurationType component. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `chatbotConfigurationName`<sup>Required</sup> <a name="chatbotConfigurationName" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.chatbotConfigurationName"></a>

```typescript
public readonly chatbotConfigurationName: string;
```

- *Type:* string

The ChatbotConfigurationName component.

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.configurationType"></a>

```typescript
public readonly configurationType: string;
```

- *Type:* string

The ConfigurationType component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ChatbotChatbotConfigurationArnProps <a name="ChatbotChatbotConfigurationArnProps" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps"></a>

Properties for building a ChatbotConfiguration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

const chatbotChatbotConfigurationArnProps: chatbot.ChatbotChatbotConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.chatbotConfigurationName">chatbotConfigurationName</a></code> | <code>string</code> | The ChatbotConfigurationName component of the ARN. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.configurationType">configurationType</a></code> | <code>string</code> | The ConfigurationType component of the ARN. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `chatbotConfigurationName`<sup>Required</sup> <a name="chatbotConfigurationName" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.chatbotConfigurationName"></a>

```typescript
public readonly chatbotConfigurationName: string;
```

- *Type:* string

The ChatbotConfigurationName component of the ARN.

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.configurationType"></a>

```typescript
public readonly configurationType: string;
```

- *Type:* string

The ConfigurationType component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### ChatbotCustomActionArnComponents <a name="ChatbotCustomActionArnComponents" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents"></a>

Parsed components of a custom-action ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

const chatbotCustomActionArnComponents: chatbot.ChatbotCustomActionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.property.actionName">actionName</a></code> | <code>string</code> | The ActionName component. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

The ActionName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### ChatbotCustomActionArnProps <a name="ChatbotCustomActionArnProps" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps"></a>

Properties for building a custom-action ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

const chatbotCustomActionArnProps: chatbot.ChatbotCustomActionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.property.actionName">actionName</a></code> | <code>string</code> | The ActionName component of the ARN. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `actionName`<sup>Required</sup> <a name="actionName" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.property.actionName"></a>

```typescript
public readonly actionName: string;
```

- *Type:* string

The ActionName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### ChatbotActions <a name="ChatbotActions" id="@cdk_utils/iam.chatbot.ChatbotActions"></a>

IAM action constants for the chatbot service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chatbot.ChatbotActions.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

new chatbot.ChatbotActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetAccountPreferences">actionGetAccountPreferences</a></code> | <code>string</code> | [Read] chatbot:GetAccountPreferences. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetCustomAction">actionGetCustomAction</a></code> | <code>string</code> | [Read] chatbot:GetCustomAction. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetMicrosoftTeamsChannelConfiguration">actionGetMicrosoftTeamsChannelConfiguration</a></code> | <code>string</code> | [Read] chatbot:GetMicrosoftTeamsChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetMicrosoftTeamsOauthParameters">actionGetMicrosoftTeamsOauthParameters</a></code> | <code>string</code> | [Read] chatbot:GetMicrosoftTeamsOauthParameters. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetSlackOauthParameters">actionGetSlackOauthParameters</a></code> | <code>string</code> | [Read] chatbot:GetSlackOauthParameters. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.AssociateToConfiguration">AssociateToConfiguration</a></code> | <code>string</code> | [Write] chatbot:AssociateToConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.CreateChimeWebhookConfiguration">CreateChimeWebhookConfiguration</a></code> | <code>string</code> | [Write] chatbot:CreateChimeWebhookConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.CreateCustomAction">CreateCustomAction</a></code> | <code>string</code> | [Write] chatbot:CreateCustomAction. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.CreateMicrosoftTeamsChannelConfiguration">CreateMicrosoftTeamsChannelConfiguration</a></code> | <code>string</code> | [Write] chatbot:CreateMicrosoftTeamsChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.CreateSlackChannelConfiguration">CreateSlackChannelConfiguration</a></code> | <code>string</code> | [Write] chatbot:CreateSlackChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteChimeWebhookConfiguration">DeleteChimeWebhookConfiguration</a></code> | <code>string</code> | [Write] chatbot:DeleteChimeWebhookConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteCustomAction">DeleteCustomAction</a></code> | <code>string</code> | [Write] chatbot:DeleteCustomAction. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteMicrosoftTeamsChannelConfiguration">DeleteMicrosoftTeamsChannelConfiguration</a></code> | <code>string</code> | [Write] chatbot:DeleteMicrosoftTeamsChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteMicrosoftTeamsConfiguredTeam">DeleteMicrosoftTeamsConfiguredTeam</a></code> | <code>string</code> | [Write] chatbot:DeleteMicrosoftTeamsConfiguredTeam. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteMicrosoftTeamsUserIdentity">DeleteMicrosoftTeamsUserIdentity</a></code> | <code>string</code> | [Write] chatbot:DeleteMicrosoftTeamsUserIdentity. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteSlackChannelConfiguration">DeleteSlackChannelConfiguration</a></code> | <code>string</code> | [Write] chatbot:DeleteSlackChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteSlackUserIdentity">DeleteSlackUserIdentity</a></code> | <code>string</code> | [Write] chatbot:DeleteSlackUserIdentity. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteSlackWorkspaceAuthorization">DeleteSlackWorkspaceAuthorization</a></code> | <code>string</code> | [Write] chatbot:DeleteSlackWorkspaceAuthorization. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeChimeWebhookConfigurations">DescribeChimeWebhookConfigurations</a></code> | <code>string</code> | [Read] chatbot:DescribeChimeWebhookConfigurations. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackChannelConfigurations">DescribeSlackChannelConfigurations</a></code> | <code>string</code> | [Read] chatbot:DescribeSlackChannelConfigurations. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackChannels">DescribeSlackChannels</a></code> | <code>string</code> | [Read] chatbot:DescribeSlackChannels. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackUserIdentities">DescribeSlackUserIdentities</a></code> | <code>string</code> | [Read] chatbot:DescribeSlackUserIdentities. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackWorkspaces">DescribeSlackWorkspaces</a></code> | <code>string</code> | [Read] chatbot:DescribeSlackWorkspaces. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.DisassociateFromConfiguration">DisassociateFromConfiguration</a></code> | <code>string</code> | [Write] chatbot:DisassociateFromConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.ListAssociations">ListAssociations</a></code> | <code>string</code> | [Read] chatbot:ListAssociations. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.ListCustomActions">ListCustomActions</a></code> | <code>string</code> | [List] chatbot:ListCustomActions. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.ListMicrosoftTeamsChannelConfigurations">ListMicrosoftTeamsChannelConfigurations</a></code> | <code>string</code> | [Read] chatbot:ListMicrosoftTeamsChannelConfigurations. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.ListMicrosoftTeamsConfiguredTeams">ListMicrosoftTeamsConfiguredTeams</a></code> | <code>string</code> | [Read] chatbot:ListMicrosoftTeamsConfiguredTeams. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.ListMicrosoftTeamsUserIdentities">ListMicrosoftTeamsUserIdentities</a></code> | <code>string</code> | [Read] chatbot:ListMicrosoftTeamsUserIdentities. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] chatbot:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.RedeemMicrosoftTeamsOauthCode">RedeemMicrosoftTeamsOauthCode</a></code> | <code>string</code> | [Write] chatbot:RedeemMicrosoftTeamsOauthCode. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.RedeemSlackOauthCode">RedeemSlackOauthCode</a></code> | <code>string</code> | [Write] chatbot:RedeemSlackOauthCode. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] chatbot:TagResource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] chatbot:UntagResource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateAccountPreferences">UpdateAccountPreferences</a></code> | <code>string</code> | [Write] chatbot:UpdateAccountPreferences. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateChimeWebhookConfiguration">UpdateChimeWebhookConfiguration</a></code> | <code>string</code> | [Write] chatbot:UpdateChimeWebhookConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateCustomAction">UpdateCustomAction</a></code> | <code>string</code> | [Write] chatbot:UpdateCustomAction. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateMicrosoftTeamsChannelConfiguration">UpdateMicrosoftTeamsChannelConfiguration</a></code> | <code>string</code> | [Write] chatbot:UpdateMicrosoftTeamsChannelConfiguration. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateSlackChannelConfiguration">UpdateSlackChannelConfiguration</a></code> | <code>string</code> | [Write] chatbot:UpdateSlackChannelConfiguration. |

---

##### `actionGetAccountPreferences`<sup>Required</sup> <a name="actionGetAccountPreferences" id="@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetAccountPreferences"></a>

```typescript
public readonly actionGetAccountPreferences: string;
```

- *Type:* string

[Read] chatbot:GetAccountPreferences.

---

##### `actionGetCustomAction`<sup>Required</sup> <a name="actionGetCustomAction" id="@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetCustomAction"></a>

```typescript
public readonly actionGetCustomAction: string;
```

- *Type:* string

[Read] chatbot:GetCustomAction.

---

##### `actionGetMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="actionGetMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly actionGetMicrosoftTeamsChannelConfiguration: string;
```

- *Type:* string

[Read] chatbot:GetMicrosoftTeamsChannelConfiguration.

---

##### `actionGetMicrosoftTeamsOauthParameters`<sup>Required</sup> <a name="actionGetMicrosoftTeamsOauthParameters" id="@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetMicrosoftTeamsOauthParameters"></a>

```typescript
public readonly actionGetMicrosoftTeamsOauthParameters: string;
```

- *Type:* string

[Read] chatbot:GetMicrosoftTeamsOauthParameters.

---

##### `actionGetSlackOauthParameters`<sup>Required</sup> <a name="actionGetSlackOauthParameters" id="@cdk_utils/iam.chatbot.ChatbotActions.property.actionGetSlackOauthParameters"></a>

```typescript
public readonly actionGetSlackOauthParameters: string;
```

- *Type:* string

[Read] chatbot:GetSlackOauthParameters.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.chatbot.ChatbotActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.chatbot.ChatbotActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.chatbot.ChatbotActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.chatbot.ChatbotActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.chatbot.ChatbotActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateToConfiguration`<sup>Required</sup> <a name="AssociateToConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.AssociateToConfiguration"></a>

```typescript
public readonly AssociateToConfiguration: string;
```

- *Type:* string

[Write] chatbot:AssociateToConfiguration.

---

##### `CreateChimeWebhookConfiguration`<sup>Required</sup> <a name="CreateChimeWebhookConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.CreateChimeWebhookConfiguration"></a>

```typescript
public readonly CreateChimeWebhookConfiguration: string;
```

- *Type:* string

[Write] chatbot:CreateChimeWebhookConfiguration.

---

##### `CreateCustomAction`<sup>Required</sup> <a name="CreateCustomAction" id="@cdk_utils/iam.chatbot.ChatbotActions.property.CreateCustomAction"></a>

```typescript
public readonly CreateCustomAction: string;
```

- *Type:* string

[Write] chatbot:CreateCustomAction.

---

##### `CreateMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="CreateMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.CreateMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly CreateMicrosoftTeamsChannelConfiguration: string;
```

- *Type:* string

[Write] chatbot:CreateMicrosoftTeamsChannelConfiguration.

---

##### `CreateSlackChannelConfiguration`<sup>Required</sup> <a name="CreateSlackChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.CreateSlackChannelConfiguration"></a>

```typescript
public readonly CreateSlackChannelConfiguration: string;
```

- *Type:* string

[Write] chatbot:CreateSlackChannelConfiguration.

---

##### `DeleteChimeWebhookConfiguration`<sup>Required</sup> <a name="DeleteChimeWebhookConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteChimeWebhookConfiguration"></a>

```typescript
public readonly DeleteChimeWebhookConfiguration: string;
```

- *Type:* string

[Write] chatbot:DeleteChimeWebhookConfiguration.

---

##### `DeleteCustomAction`<sup>Required</sup> <a name="DeleteCustomAction" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteCustomAction"></a>

```typescript
public readonly DeleteCustomAction: string;
```

- *Type:* string

[Write] chatbot:DeleteCustomAction.

---

##### `DeleteMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="DeleteMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly DeleteMicrosoftTeamsChannelConfiguration: string;
```

- *Type:* string

[Write] chatbot:DeleteMicrosoftTeamsChannelConfiguration.

---

##### `DeleteMicrosoftTeamsConfiguredTeam`<sup>Required</sup> <a name="DeleteMicrosoftTeamsConfiguredTeam" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteMicrosoftTeamsConfiguredTeam"></a>

```typescript
public readonly DeleteMicrosoftTeamsConfiguredTeam: string;
```

- *Type:* string

[Write] chatbot:DeleteMicrosoftTeamsConfiguredTeam.

---

##### `DeleteMicrosoftTeamsUserIdentity`<sup>Required</sup> <a name="DeleteMicrosoftTeamsUserIdentity" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteMicrosoftTeamsUserIdentity"></a>

```typescript
public readonly DeleteMicrosoftTeamsUserIdentity: string;
```

- *Type:* string

[Write] chatbot:DeleteMicrosoftTeamsUserIdentity.

---

##### `DeleteSlackChannelConfiguration`<sup>Required</sup> <a name="DeleteSlackChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteSlackChannelConfiguration"></a>

```typescript
public readonly DeleteSlackChannelConfiguration: string;
```

- *Type:* string

[Write] chatbot:DeleteSlackChannelConfiguration.

---

##### `DeleteSlackUserIdentity`<sup>Required</sup> <a name="DeleteSlackUserIdentity" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteSlackUserIdentity"></a>

```typescript
public readonly DeleteSlackUserIdentity: string;
```

- *Type:* string

[Write] chatbot:DeleteSlackUserIdentity.

---

##### `DeleteSlackWorkspaceAuthorization`<sup>Required</sup> <a name="DeleteSlackWorkspaceAuthorization" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DeleteSlackWorkspaceAuthorization"></a>

```typescript
public readonly DeleteSlackWorkspaceAuthorization: string;
```

- *Type:* string

[Write] chatbot:DeleteSlackWorkspaceAuthorization.

---

##### `DescribeChimeWebhookConfigurations`<sup>Required</sup> <a name="DescribeChimeWebhookConfigurations" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeChimeWebhookConfigurations"></a>

```typescript
public readonly DescribeChimeWebhookConfigurations: string;
```

- *Type:* string

[Read] chatbot:DescribeChimeWebhookConfigurations.

---

##### `DescribeSlackChannelConfigurations`<sup>Required</sup> <a name="DescribeSlackChannelConfigurations" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackChannelConfigurations"></a>

```typescript
public readonly DescribeSlackChannelConfigurations: string;
```

- *Type:* string

[Read] chatbot:DescribeSlackChannelConfigurations.

---

##### `DescribeSlackChannels`<sup>Required</sup> <a name="DescribeSlackChannels" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackChannels"></a>

```typescript
public readonly DescribeSlackChannels: string;
```

- *Type:* string

[Read] chatbot:DescribeSlackChannels.

---

##### `DescribeSlackUserIdentities`<sup>Required</sup> <a name="DescribeSlackUserIdentities" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackUserIdentities"></a>

```typescript
public readonly DescribeSlackUserIdentities: string;
```

- *Type:* string

[Read] chatbot:DescribeSlackUserIdentities.

---

##### `DescribeSlackWorkspaces`<sup>Required</sup> <a name="DescribeSlackWorkspaces" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DescribeSlackWorkspaces"></a>

```typescript
public readonly DescribeSlackWorkspaces: string;
```

- *Type:* string

[Read] chatbot:DescribeSlackWorkspaces.

---

##### `DisassociateFromConfiguration`<sup>Required</sup> <a name="DisassociateFromConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.DisassociateFromConfiguration"></a>

```typescript
public readonly DisassociateFromConfiguration: string;
```

- *Type:* string

[Write] chatbot:DisassociateFromConfiguration.

---

##### `ListAssociations`<sup>Required</sup> <a name="ListAssociations" id="@cdk_utils/iam.chatbot.ChatbotActions.property.ListAssociations"></a>

```typescript
public readonly ListAssociations: string;
```

- *Type:* string

[Read] chatbot:ListAssociations.

---

##### `ListCustomActions`<sup>Required</sup> <a name="ListCustomActions" id="@cdk_utils/iam.chatbot.ChatbotActions.property.ListCustomActions"></a>

```typescript
public readonly ListCustomActions: string;
```

- *Type:* string

[List] chatbot:ListCustomActions.

---

##### `ListMicrosoftTeamsChannelConfigurations`<sup>Required</sup> <a name="ListMicrosoftTeamsChannelConfigurations" id="@cdk_utils/iam.chatbot.ChatbotActions.property.ListMicrosoftTeamsChannelConfigurations"></a>

```typescript
public readonly ListMicrosoftTeamsChannelConfigurations: string;
```

- *Type:* string

[Read] chatbot:ListMicrosoftTeamsChannelConfigurations.

---

##### `ListMicrosoftTeamsConfiguredTeams`<sup>Required</sup> <a name="ListMicrosoftTeamsConfiguredTeams" id="@cdk_utils/iam.chatbot.ChatbotActions.property.ListMicrosoftTeamsConfiguredTeams"></a>

```typescript
public readonly ListMicrosoftTeamsConfiguredTeams: string;
```

- *Type:* string

[Read] chatbot:ListMicrosoftTeamsConfiguredTeams.

---

##### `ListMicrosoftTeamsUserIdentities`<sup>Required</sup> <a name="ListMicrosoftTeamsUserIdentities" id="@cdk_utils/iam.chatbot.ChatbotActions.property.ListMicrosoftTeamsUserIdentities"></a>

```typescript
public readonly ListMicrosoftTeamsUserIdentities: string;
```

- *Type:* string

[Read] chatbot:ListMicrosoftTeamsUserIdentities.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.chatbot.ChatbotActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] chatbot:ListTagsForResource.

---

##### `RedeemMicrosoftTeamsOauthCode`<sup>Required</sup> <a name="RedeemMicrosoftTeamsOauthCode" id="@cdk_utils/iam.chatbot.ChatbotActions.property.RedeemMicrosoftTeamsOauthCode"></a>

```typescript
public readonly RedeemMicrosoftTeamsOauthCode: string;
```

- *Type:* string

[Write] chatbot:RedeemMicrosoftTeamsOauthCode.

---

##### `RedeemSlackOauthCode`<sup>Required</sup> <a name="RedeemSlackOauthCode" id="@cdk_utils/iam.chatbot.ChatbotActions.property.RedeemSlackOauthCode"></a>

```typescript
public readonly RedeemSlackOauthCode: string;
```

- *Type:* string

[Write] chatbot:RedeemSlackOauthCode.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.chatbot.ChatbotActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.chatbot.ChatbotActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] chatbot:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.chatbot.ChatbotActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] chatbot:UntagResource.

---

##### `UpdateAccountPreferences`<sup>Required</sup> <a name="UpdateAccountPreferences" id="@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateAccountPreferences"></a>

```typescript
public readonly UpdateAccountPreferences: string;
```

- *Type:* string

[Write] chatbot:UpdateAccountPreferences.

---

##### `UpdateChimeWebhookConfiguration`<sup>Required</sup> <a name="UpdateChimeWebhookConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateChimeWebhookConfiguration"></a>

```typescript
public readonly UpdateChimeWebhookConfiguration: string;
```

- *Type:* string

[Write] chatbot:UpdateChimeWebhookConfiguration.

---

##### `UpdateCustomAction`<sup>Required</sup> <a name="UpdateCustomAction" id="@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateCustomAction"></a>

```typescript
public readonly UpdateCustomAction: string;
```

- *Type:* string

[Write] chatbot:UpdateCustomAction.

---

##### `UpdateMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="UpdateMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly UpdateMicrosoftTeamsChannelConfiguration: string;
```

- *Type:* string

[Write] chatbot:UpdateMicrosoftTeamsChannelConfiguration.

---

##### `UpdateSlackChannelConfiguration`<sup>Required</sup> <a name="UpdateSlackChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotActions.property.UpdateSlackChannelConfiguration"></a>

```typescript
public readonly UpdateSlackChannelConfiguration: string;
```

- *Type:* string

[Write] chatbot:UpdateSlackChannelConfiguration.

---

### ChatbotConditions <a name="ChatbotConditions" id="@cdk_utils/iam.chatbot.ChatbotConditions"></a>

Condition key constants and builders for chatbot.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chatbot.ChatbotConditions.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

new chatbot.ChatbotConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.chatbot.ChatbotConditions.requestTag"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.chatbot.ChatbotConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.chatbot.ChatbotConditions.resourceTag"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.chatbot.ChatbotConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.tagKeys"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.chatbot.ChatbotConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.actionGetCustomActionConditionKeys">actionGetCustomActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCustomAction action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.actionGetMicrosoftTeamsChannelConfigurationConditionKeys">actionGetMicrosoftTeamsChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetMicrosoftTeamsChannelConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.AssociateToConfigurationConditionKeys">AssociateToConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssociateToConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateChimeWebhookConfigurationConditionKeys">CreateChimeWebhookConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateChimeWebhookConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateCustomActionConditionKeys">CreateCustomActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateCustomAction action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateMicrosoftTeamsChannelConfigurationConditionKeys">CreateMicrosoftTeamsChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateMicrosoftTeamsChannelConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateSlackChannelConfigurationConditionKeys">CreateSlackChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateSlackChannelConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteChimeWebhookConfigurationConditionKeys">DeleteChimeWebhookConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteChimeWebhookConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteCustomActionConditionKeys">DeleteCustomActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteCustomAction action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteMicrosoftTeamsChannelConfigurationConditionKeys">DeleteMicrosoftTeamsChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteMicrosoftTeamsChannelConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteSlackChannelConfigurationConditionKeys">DeleteSlackChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteSlackChannelConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.DisassociateFromConfigurationConditionKeys">DisassociateFromConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisassociateFromConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateChimeWebhookConfigurationConditionKeys">UpdateChimeWebhookConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateChimeWebhookConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateCustomActionConditionKeys">UpdateCustomActionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateCustomAction action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateMicrosoftTeamsChannelConfigurationConditionKeys">UpdateMicrosoftTeamsChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateMicrosoftTeamsChannelConfiguration action. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateSlackChannelConfigurationConditionKeys">UpdateSlackChannelConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateSlackChannelConfiguration action. |

---

##### `actionGetCustomActionConditionKeys`<sup>Required</sup> <a name="actionGetCustomActionConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.actionGetCustomActionConditionKeys"></a>

```typescript
public readonly actionGetCustomActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCustomAction action.

---

##### `actionGetMicrosoftTeamsChannelConfigurationConditionKeys`<sup>Required</sup> <a name="actionGetMicrosoftTeamsChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.actionGetMicrosoftTeamsChannelConfigurationConditionKeys"></a>

```typescript
public readonly actionGetMicrosoftTeamsChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetMicrosoftTeamsChannelConfiguration action.

---

##### `AssociateToConfigurationConditionKeys`<sup>Required</sup> <a name="AssociateToConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.AssociateToConfigurationConditionKeys"></a>

```typescript
public readonly AssociateToConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssociateToConfiguration action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateChimeWebhookConfigurationConditionKeys`<sup>Required</sup> <a name="CreateChimeWebhookConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateChimeWebhookConfigurationConditionKeys"></a>

```typescript
public readonly CreateChimeWebhookConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateChimeWebhookConfiguration action.

---

##### `CreateCustomActionConditionKeys`<sup>Required</sup> <a name="CreateCustomActionConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateCustomActionConditionKeys"></a>

```typescript
public readonly CreateCustomActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateCustomAction action.

---

##### `CreateMicrosoftTeamsChannelConfigurationConditionKeys`<sup>Required</sup> <a name="CreateMicrosoftTeamsChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateMicrosoftTeamsChannelConfigurationConditionKeys"></a>

```typescript
public readonly CreateMicrosoftTeamsChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateMicrosoftTeamsChannelConfiguration action.

---

##### `CreateSlackChannelConfigurationConditionKeys`<sup>Required</sup> <a name="CreateSlackChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.CreateSlackChannelConfigurationConditionKeys"></a>

```typescript
public readonly CreateSlackChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateSlackChannelConfiguration action.

---

##### `DeleteChimeWebhookConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteChimeWebhookConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteChimeWebhookConfigurationConditionKeys"></a>

```typescript
public readonly DeleteChimeWebhookConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteChimeWebhookConfiguration action.

---

##### `DeleteCustomActionConditionKeys`<sup>Required</sup> <a name="DeleteCustomActionConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteCustomActionConditionKeys"></a>

```typescript
public readonly DeleteCustomActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteCustomAction action.

---

##### `DeleteMicrosoftTeamsChannelConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteMicrosoftTeamsChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteMicrosoftTeamsChannelConfigurationConditionKeys"></a>

```typescript
public readonly DeleteMicrosoftTeamsChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteMicrosoftTeamsChannelConfiguration action.

---

##### `DeleteSlackChannelConfigurationConditionKeys`<sup>Required</sup> <a name="DeleteSlackChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.DeleteSlackChannelConfigurationConditionKeys"></a>

```typescript
public readonly DeleteSlackChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteSlackChannelConfiguration action.

---

##### `DisassociateFromConfigurationConditionKeys`<sup>Required</sup> <a name="DisassociateFromConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.DisassociateFromConfigurationConditionKeys"></a>

```typescript
public readonly DisassociateFromConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisassociateFromConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateChimeWebhookConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateChimeWebhookConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateChimeWebhookConfigurationConditionKeys"></a>

```typescript
public readonly UpdateChimeWebhookConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateChimeWebhookConfiguration action.

---

##### `UpdateCustomActionConditionKeys`<sup>Required</sup> <a name="UpdateCustomActionConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateCustomActionConditionKeys"></a>

```typescript
public readonly UpdateCustomActionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateCustomAction action.

---

##### `UpdateMicrosoftTeamsChannelConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateMicrosoftTeamsChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateMicrosoftTeamsChannelConfigurationConditionKeys"></a>

```typescript
public readonly UpdateMicrosoftTeamsChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateMicrosoftTeamsChannelConfiguration action.

---

##### `UpdateSlackChannelConfigurationConditionKeys`<sup>Required</sup> <a name="UpdateSlackChannelConfigurationConditionKeys" id="@cdk_utils/iam.chatbot.ChatbotConditions.property.UpdateSlackChannelConfigurationConditionKeys"></a>

```typescript
public readonly UpdateSlackChannelConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateSlackChannelConfiguration action.

---

### ChatbotOperations <a name="ChatbotOperations" id="@cdk_utils/iam.chatbot.ChatbotOperations"></a>

API operation to required IAM actions mapping for chatbot.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chatbot.ChatbotOperations.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

new chatbot.ChatbotOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.AssociateToConfiguration">AssociateToConfiguration</a></code> | <code>string[]</code> | IAM actions required for the AssociateToConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateChimeWebhookConfiguration">CreateChimeWebhookConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateChimeWebhookConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateCustomAction">CreateCustomAction</a></code> | <code>string[]</code> | IAM actions required for the CreateCustomAction API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateMicrosoftTeamsChannelConfiguration">CreateMicrosoftTeamsChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateMicrosoftTeamsChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateSlackChannelConfiguration">CreateSlackChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateSlackChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteChimeWebhookConfiguration">DeleteChimeWebhookConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteChimeWebhookConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteCustomAction">DeleteCustomAction</a></code> | <code>string[]</code> | IAM actions required for the DeleteCustomAction API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteMicrosoftTeamsChannelConfiguration">DeleteMicrosoftTeamsChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteMicrosoftTeamsChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteMicrosoftTeamsConfiguredTeam">DeleteMicrosoftTeamsConfiguredTeam</a></code> | <code>string[]</code> | IAM actions required for the DeleteMicrosoftTeamsConfiguredTeam API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteMicrosoftTeamsUserIdentity">DeleteMicrosoftTeamsUserIdentity</a></code> | <code>string[]</code> | IAM actions required for the DeleteMicrosoftTeamsUserIdentity API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteSlackChannelConfiguration">DeleteSlackChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlackChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteSlackUserIdentity">DeleteSlackUserIdentity</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlackUserIdentity API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteSlackWorkspaceAuthorization">DeleteSlackWorkspaceAuthorization</a></code> | <code>string[]</code> | IAM actions required for the DeleteSlackWorkspaceAuthorization API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeChimeWebhookConfigurations">DescribeChimeWebhookConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeChimeWebhookConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeSlackChannelConfigurations">DescribeSlackChannelConfigurations</a></code> | <code>string[]</code> | IAM actions required for the DescribeSlackChannelConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeSlackUserIdentities">DescribeSlackUserIdentities</a></code> | <code>string[]</code> | IAM actions required for the DescribeSlackUserIdentities API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeSlackWorkspaces">DescribeSlackWorkspaces</a></code> | <code>string[]</code> | IAM actions required for the DescribeSlackWorkspaces API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.DisassociateFromConfiguration">DisassociateFromConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFromConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.ListAssociations">ListAssociations</a></code> | <code>string[]</code> | IAM actions required for the ListAssociations API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.ListCustomActions">ListCustomActions</a></code> | <code>string[]</code> | IAM actions required for the ListCustomActions API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.ListMicrosoftTeamsChannelConfigurations">ListMicrosoftTeamsChannelConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListMicrosoftTeamsChannelConfigurations API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.ListMicrosoftTeamsConfiguredTeams">ListMicrosoftTeamsConfiguredTeams</a></code> | <code>string[]</code> | IAM actions required for the ListMicrosoftTeamsConfiguredTeams API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.ListMicrosoftTeamsUserIdentities">ListMicrosoftTeamsUserIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListMicrosoftTeamsUserIdentities API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.opGetAccountPreferences">opGetAccountPreferences</a></code> | <code>string[]</code> | IAM actions required for the GetAccountPreferences API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.opGetCustomAction">opGetCustomAction</a></code> | <code>string[]</code> | IAM actions required for the GetCustomAction API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.opGetMicrosoftTeamsChannelConfiguration">opGetMicrosoftTeamsChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetMicrosoftTeamsChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateAccountPreferences">UpdateAccountPreferences</a></code> | <code>string[]</code> | IAM actions required for the UpdateAccountPreferences API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateChimeWebhookConfiguration">UpdateChimeWebhookConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateChimeWebhookConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateCustomAction">UpdateCustomAction</a></code> | <code>string[]</code> | IAM actions required for the UpdateCustomAction API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateMicrosoftTeamsChannelConfiguration">UpdateMicrosoftTeamsChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateMicrosoftTeamsChannelConfiguration API call. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateSlackChannelConfiguration">UpdateSlackChannelConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateSlackChannelConfiguration API call. |

---

##### `AssociateToConfiguration`<sup>Required</sup> <a name="AssociateToConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.AssociateToConfiguration"></a>

```typescript
public readonly AssociateToConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the AssociateToConfiguration API call.

---

##### `CreateChimeWebhookConfiguration`<sup>Required</sup> <a name="CreateChimeWebhookConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateChimeWebhookConfiguration"></a>

```typescript
public readonly CreateChimeWebhookConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateChimeWebhookConfiguration API call.

---

##### `CreateCustomAction`<sup>Required</sup> <a name="CreateCustomAction" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateCustomAction"></a>

```typescript
public readonly CreateCustomAction: string[];
```

- *Type:* string[]

IAM actions required for the CreateCustomAction API call.

---

##### `CreateMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="CreateMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly CreateMicrosoftTeamsChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateMicrosoftTeamsChannelConfiguration API call.

---

##### `CreateSlackChannelConfiguration`<sup>Required</sup> <a name="CreateSlackChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.CreateSlackChannelConfiguration"></a>

```typescript
public readonly CreateSlackChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateSlackChannelConfiguration API call.

---

##### `DeleteChimeWebhookConfiguration`<sup>Required</sup> <a name="DeleteChimeWebhookConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteChimeWebhookConfiguration"></a>

```typescript
public readonly DeleteChimeWebhookConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteChimeWebhookConfiguration API call.

---

##### `DeleteCustomAction`<sup>Required</sup> <a name="DeleteCustomAction" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteCustomAction"></a>

```typescript
public readonly DeleteCustomAction: string[];
```

- *Type:* string[]

IAM actions required for the DeleteCustomAction API call.

---

##### `DeleteMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="DeleteMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly DeleteMicrosoftTeamsChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMicrosoftTeamsChannelConfiguration API call.

---

##### `DeleteMicrosoftTeamsConfiguredTeam`<sup>Required</sup> <a name="DeleteMicrosoftTeamsConfiguredTeam" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteMicrosoftTeamsConfiguredTeam"></a>

```typescript
public readonly DeleteMicrosoftTeamsConfiguredTeam: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMicrosoftTeamsConfiguredTeam API call.

---

##### `DeleteMicrosoftTeamsUserIdentity`<sup>Required</sup> <a name="DeleteMicrosoftTeamsUserIdentity" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteMicrosoftTeamsUserIdentity"></a>

```typescript
public readonly DeleteMicrosoftTeamsUserIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteMicrosoftTeamsUserIdentity API call.

---

##### `DeleteSlackChannelConfiguration`<sup>Required</sup> <a name="DeleteSlackChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteSlackChannelConfiguration"></a>

```typescript
public readonly DeleteSlackChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlackChannelConfiguration API call.

---

##### `DeleteSlackUserIdentity`<sup>Required</sup> <a name="DeleteSlackUserIdentity" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteSlackUserIdentity"></a>

```typescript
public readonly DeleteSlackUserIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlackUserIdentity API call.

---

##### `DeleteSlackWorkspaceAuthorization`<sup>Required</sup> <a name="DeleteSlackWorkspaceAuthorization" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DeleteSlackWorkspaceAuthorization"></a>

```typescript
public readonly DeleteSlackWorkspaceAuthorization: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSlackWorkspaceAuthorization API call.

---

##### `DescribeChimeWebhookConfigurations`<sup>Required</sup> <a name="DescribeChimeWebhookConfigurations" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeChimeWebhookConfigurations"></a>

```typescript
public readonly DescribeChimeWebhookConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeChimeWebhookConfigurations API call.

---

##### `DescribeSlackChannelConfigurations`<sup>Required</sup> <a name="DescribeSlackChannelConfigurations" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeSlackChannelConfigurations"></a>

```typescript
public readonly DescribeSlackChannelConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSlackChannelConfigurations API call.

---

##### `DescribeSlackUserIdentities`<sup>Required</sup> <a name="DescribeSlackUserIdentities" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeSlackUserIdentities"></a>

```typescript
public readonly DescribeSlackUserIdentities: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSlackUserIdentities API call.

---

##### `DescribeSlackWorkspaces`<sup>Required</sup> <a name="DescribeSlackWorkspaces" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DescribeSlackWorkspaces"></a>

```typescript
public readonly DescribeSlackWorkspaces: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSlackWorkspaces API call.

---

##### `DisassociateFromConfiguration`<sup>Required</sup> <a name="DisassociateFromConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.DisassociateFromConfiguration"></a>

```typescript
public readonly DisassociateFromConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFromConfiguration API call.

---

##### `ListAssociations`<sup>Required</sup> <a name="ListAssociations" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.ListAssociations"></a>

```typescript
public readonly ListAssociations: string[];
```

- *Type:* string[]

IAM actions required for the ListAssociations API call.

---

##### `ListCustomActions`<sup>Required</sup> <a name="ListCustomActions" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.ListCustomActions"></a>

```typescript
public readonly ListCustomActions: string[];
```

- *Type:* string[]

IAM actions required for the ListCustomActions API call.

---

##### `ListMicrosoftTeamsChannelConfigurations`<sup>Required</sup> <a name="ListMicrosoftTeamsChannelConfigurations" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.ListMicrosoftTeamsChannelConfigurations"></a>

```typescript
public readonly ListMicrosoftTeamsChannelConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrosoftTeamsChannelConfigurations API call.

---

##### `ListMicrosoftTeamsConfiguredTeams`<sup>Required</sup> <a name="ListMicrosoftTeamsConfiguredTeams" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.ListMicrosoftTeamsConfiguredTeams"></a>

```typescript
public readonly ListMicrosoftTeamsConfiguredTeams: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrosoftTeamsConfiguredTeams API call.

---

##### `ListMicrosoftTeamsUserIdentities`<sup>Required</sup> <a name="ListMicrosoftTeamsUserIdentities" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.ListMicrosoftTeamsUserIdentities"></a>

```typescript
public readonly ListMicrosoftTeamsUserIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListMicrosoftTeamsUserIdentities API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetAccountPreferences`<sup>Required</sup> <a name="opGetAccountPreferences" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.opGetAccountPreferences"></a>

```typescript
public readonly opGetAccountPreferences: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountPreferences API call.

---

##### `opGetCustomAction`<sup>Required</sup> <a name="opGetCustomAction" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.opGetCustomAction"></a>

```typescript
public readonly opGetCustomAction: string[];
```

- *Type:* string[]

IAM actions required for the GetCustomAction API call.

---

##### `opGetMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="opGetMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.opGetMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly opGetMicrosoftTeamsChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetMicrosoftTeamsChannelConfiguration API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAccountPreferences`<sup>Required</sup> <a name="UpdateAccountPreferences" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateAccountPreferences"></a>

```typescript
public readonly UpdateAccountPreferences: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAccountPreferences API call.

---

##### `UpdateChimeWebhookConfiguration`<sup>Required</sup> <a name="UpdateChimeWebhookConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateChimeWebhookConfiguration"></a>

```typescript
public readonly UpdateChimeWebhookConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateChimeWebhookConfiguration API call.

---

##### `UpdateCustomAction`<sup>Required</sup> <a name="UpdateCustomAction" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateCustomAction"></a>

```typescript
public readonly UpdateCustomAction: string[];
```

- *Type:* string[]

IAM actions required for the UpdateCustomAction API call.

---

##### `UpdateMicrosoftTeamsChannelConfiguration`<sup>Required</sup> <a name="UpdateMicrosoftTeamsChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateMicrosoftTeamsChannelConfiguration"></a>

```typescript
public readonly UpdateMicrosoftTeamsChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateMicrosoftTeamsChannelConfiguration API call.

---

##### `UpdateSlackChannelConfiguration`<sup>Required</sup> <a name="UpdateSlackChannelConfiguration" id="@cdk_utils/iam.chatbot.ChatbotOperations.property.UpdateSlackChannelConfiguration"></a>

```typescript
public readonly UpdateSlackChannelConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateSlackChannelConfiguration API call.

---

### ChatbotResources <a name="ChatbotResources" id="@cdk_utils/iam.chatbot.ChatbotResources"></a>

ARN builders, validators, and parsers for chatbot resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.chatbot.ChatbotResources.Initializer"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

new chatbot.ChatbotResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotResources.chatbotConfiguration">chatbotConfiguration</a></code> | Builds an ARN for the ChatbotConfiguration resource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotResources.customAction">customAction</a></code> | Builds an ARN for the custom-action resource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotResources.isValidChatbotConfigurationArn">isValidChatbotConfigurationArn</a></code> | Validates whether a string is a valid ARN for the ChatbotConfiguration resource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotResources.isValidCustomActionArn">isValidCustomActionArn</a></code> | Validates whether a string is a valid ARN for the custom-action resource. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotResources.parseChatbotConfigurationArn">parseChatbotConfigurationArn</a></code> | Parses a ChatbotConfiguration ARN into its components. |
| <code><a href="#@cdk_utils/iam.chatbot.ChatbotResources.parseCustomActionArn">parseCustomActionArn</a></code> | Parses a custom-action ARN into its components. |

---

##### `chatbotConfiguration` <a name="chatbotConfiguration" id="@cdk_utils/iam.chatbot.ChatbotResources.chatbotConfiguration"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotResources.chatbotConfiguration(props: ChatbotChatbotConfigurationArnProps)
```

Builds an ARN for the ChatbotConfiguration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chatbot.ChatbotResources.chatbotConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chatbot.ChatbotChatbotConfigurationArnProps">ChatbotChatbotConfigurationArnProps</a>

---

##### `customAction` <a name="customAction" id="@cdk_utils/iam.chatbot.ChatbotResources.customAction"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotResources.customAction(props: ChatbotCustomActionArnProps)
```

Builds an ARN for the custom-action resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.chatbot.ChatbotResources.customAction.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.chatbot.ChatbotCustomActionArnProps">ChatbotCustomActionArnProps</a>

---

##### `isValidChatbotConfigurationArn` <a name="isValidChatbotConfigurationArn" id="@cdk_utils/iam.chatbot.ChatbotResources.isValidChatbotConfigurationArn"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotResources.isValidChatbotConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the ChatbotConfiguration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chatbot.ChatbotResources.isValidChatbotConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidCustomActionArn` <a name="isValidCustomActionArn" id="@cdk_utils/iam.chatbot.ChatbotResources.isValidCustomActionArn"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotResources.isValidCustomActionArn(arn: string)
```

Validates whether a string is a valid ARN for the custom-action resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chatbot.ChatbotResources.isValidCustomActionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseChatbotConfigurationArn` <a name="parseChatbotConfigurationArn" id="@cdk_utils/iam.chatbot.ChatbotResources.parseChatbotConfigurationArn"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotResources.parseChatbotConfigurationArn(arn: string)
```

Parses a ChatbotConfiguration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chatbot.ChatbotResources.parseChatbotConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseCustomActionArn` <a name="parseCustomActionArn" id="@cdk_utils/iam.chatbot.ChatbotResources.parseCustomActionArn"></a>

```typescript
import { chatbot } from '@cdk_utils/iam'

chatbot.ChatbotResources.parseCustomActionArn(arn: string)
```

Parses a custom-action ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.chatbot.ChatbotResources.parseCustomActionArn.parameter.arn"></a>

- *Type:* string

---




