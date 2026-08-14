# `sns` Submodule <a name="`sns` Submodule" id="@cdk_utils/iam.sns"></a>


## Structs <a name="Structs" id="Structs"></a>

### SNSTopicArnComponents <a name="SNSTopicArnComponents" id="@cdk_utils/iam.sns.SNSTopicArnComponents"></a>

Parsed components of a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sns.SNSTopicArnComponents.Initializer"></a>

```typescript
import { sns } from '@cdk_utils/iam'

const sNSTopicArnComponents: sns.SNSTopicArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnComponents.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sns.SNSTopicArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sns.SNSTopicArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sns.SNSTopicArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.sns.SNSTopicArnComponents.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component.

---

### SNSTopicArnProps <a name="SNSTopicArnProps" id="@cdk_utils/iam.sns.SNSTopicArnProps"></a>

Properties for building a topic ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sns.SNSTopicArnProps.Initializer"></a>

```typescript
import { sns } from '@cdk_utils/iam'

const sNSTopicArnProps: sns.SNSTopicArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnProps.property.topicName">topicName</a></code> | <code>string</code> | The TopicName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sns.SNSTopicArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `topicName`<sup>Required</sup> <a name="topicName" id="@cdk_utils/iam.sns.SNSTopicArnProps.property.topicName"></a>

```typescript
public readonly topicName: string;
```

- *Type:* string

The TopicName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sns.SNSTopicArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sns.SNSTopicArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sns.SNSTopicArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SNSActions <a name="SNSActions" id="@cdk_utils/iam.sns.SNSActions"></a>

IAM action constants for the sns service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sns.SNSActions.Initializer"></a>

```typescript
import { sns } from '@cdk_utils/iam'

new sns.SNSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetDataProtectionPolicy">actionGetDataProtectionPolicy</a></code> | <code>string</code> | [Read] sns:GetDataProtectionPolicy. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetEndpointAttributes">actionGetEndpointAttributes</a></code> | <code>string</code> | [Read] sns:GetEndpointAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetPlatformApplicationAttributes">actionGetPlatformApplicationAttributes</a></code> | <code>string</code> | [Read] sns:GetPlatformApplicationAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetSMSAttributes">actionGetSMSAttributes</a></code> | <code>string</code> | [Read] sns:GetSMSAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetSMSSandboxAccountStatus">actionGetSMSSandboxAccountStatus</a></code> | <code>string</code> | [Read] sns:GetSMSSandboxAccountStatus. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetSubscriptionAttributes">actionGetSubscriptionAttributes</a></code> | <code>string</code> | [Read] sns:GetSubscriptionAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionGetTopicAttributes">actionGetTopicAttributes</a></code> | <code>string</code> | [Read] sns:GetTopicAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionSetEndpointAttributes">actionSetEndpointAttributes</a></code> | <code>string</code> | [Write] sns:SetEndpointAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionSetPlatformApplicationAttributes">actionSetPlatformApplicationAttributes</a></code> | <code>string</code> | [Write] sns:SetPlatformApplicationAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionSetSMSAttributes">actionSetSMSAttributes</a></code> | <code>string</code> | [Write] sns:SetSMSAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionSetSubscriptionAttributes">actionSetSubscriptionAttributes</a></code> | <code>string</code> | [Write] sns:SetSubscriptionAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.actionSetTopicAttributes">actionSetTopicAttributes</a></code> | <code>string</code> | [PermissionManagement] sns:SetTopicAttributes. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.AddPermission">AddPermission</a></code> | <code>string</code> | [PermissionManagement] sns:AddPermission. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.CheckIfPhoneNumberIsOptedOut">CheckIfPhoneNumberIsOptedOut</a></code> | <code>string</code> | [Read] sns:CheckIfPhoneNumberIsOptedOut. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ConfirmSubscription">ConfirmSubscription</a></code> | <code>string</code> | [Write] sns:ConfirmSubscription. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.CreatePlatformApplication">CreatePlatformApplication</a></code> | <code>string</code> | [Write] sns:CreatePlatformApplication. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.CreatePlatformEndpoint">CreatePlatformEndpoint</a></code> | <code>string</code> | [Write] sns:CreatePlatformEndpoint. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.CreateSMSSandboxPhoneNumber">CreateSMSSandboxPhoneNumber</a></code> | <code>string</code> | [Write] sns:CreateSMSSandboxPhoneNumber. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.CreateTopic">CreateTopic</a></code> | <code>string</code> | [Write] sns:CreateTopic. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string</code> | [Write] sns:DeleteEndpoint. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.DeletePlatformApplication">DeletePlatformApplication</a></code> | <code>string</code> | [Write] sns:DeletePlatformApplication. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.DeleteSMSSandboxPhoneNumber">DeleteSMSSandboxPhoneNumber</a></code> | <code>string</code> | [Write] sns:DeleteSMSSandboxPhoneNumber. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.DeleteTopic">DeleteTopic</a></code> | <code>string</code> | [Write] sns:DeleteTopic. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListEndpointsByPlatformApplication">ListEndpointsByPlatformApplication</a></code> | <code>string</code> | [List] sns:ListEndpointsByPlatformApplication. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListOriginationNumbers">ListOriginationNumbers</a></code> | <code>string</code> | [List] sns:ListOriginationNumbers. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListPhoneNumbersOptedOut">ListPhoneNumbersOptedOut</a></code> | <code>string</code> | [Read] sns:ListPhoneNumbersOptedOut. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListPlatformApplications">ListPlatformApplications</a></code> | <code>string</code> | [List] sns:ListPlatformApplications. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListSMSSandboxPhoneNumbers">ListSMSSandboxPhoneNumbers</a></code> | <code>string</code> | [List] sns:ListSMSSandboxPhoneNumbers. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string</code> | [List] sns:ListSubscriptions. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListSubscriptionsByTopic">ListSubscriptionsByTopic</a></code> | <code>string</code> | [List] sns:ListSubscriptionsByTopic. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] sns:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.ListTopics">ListTopics</a></code> | <code>string</code> | [List] sns:ListTopics. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.OptInPhoneNumber">OptInPhoneNumber</a></code> | <code>string</code> | [Write] sns:OptInPhoneNumber. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.Publish">Publish</a></code> | <code>string</code> | [Write] sns:Publish. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.PutDataProtectionPolicy">PutDataProtectionPolicy</a></code> | <code>string</code> | [Write] sns:PutDataProtectionPolicy. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.RemovePermission">RemovePermission</a></code> | <code>string</code> | [PermissionManagement] sns:RemovePermission. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.Subscribe">Subscribe</a></code> | <code>string</code> | [Write] sns:Subscribe. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] sns:TagResource. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.Unsubscribe">Unsubscribe</a></code> | <code>string</code> | [Write] sns:Unsubscribe. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] sns:UntagResource. |
| <code><a href="#@cdk_utils/iam.sns.SNSActions.property.VerifySMSSandboxPhoneNumber">VerifySMSSandboxPhoneNumber</a></code> | <code>string</code> | [Write] sns:VerifySMSSandboxPhoneNumber. |

---

##### `actionGetDataProtectionPolicy`<sup>Required</sup> <a name="actionGetDataProtectionPolicy" id="@cdk_utils/iam.sns.SNSActions.property.actionGetDataProtectionPolicy"></a>

```typescript
public readonly actionGetDataProtectionPolicy: string;
```

- *Type:* string

[Read] sns:GetDataProtectionPolicy.

---

##### `actionGetEndpointAttributes`<sup>Required</sup> <a name="actionGetEndpointAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionGetEndpointAttributes"></a>

```typescript
public readonly actionGetEndpointAttributes: string;
```

- *Type:* string

[Read] sns:GetEndpointAttributes.

---

##### `actionGetPlatformApplicationAttributes`<sup>Required</sup> <a name="actionGetPlatformApplicationAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionGetPlatformApplicationAttributes"></a>

```typescript
public readonly actionGetPlatformApplicationAttributes: string;
```

- *Type:* string

[Read] sns:GetPlatformApplicationAttributes.

---

##### `actionGetSMSAttributes`<sup>Required</sup> <a name="actionGetSMSAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionGetSMSAttributes"></a>

```typescript
public readonly actionGetSMSAttributes: string;
```

- *Type:* string

[Read] sns:GetSMSAttributes.

---

##### `actionGetSMSSandboxAccountStatus`<sup>Required</sup> <a name="actionGetSMSSandboxAccountStatus" id="@cdk_utils/iam.sns.SNSActions.property.actionGetSMSSandboxAccountStatus"></a>

```typescript
public readonly actionGetSMSSandboxAccountStatus: string;
```

- *Type:* string

[Read] sns:GetSMSSandboxAccountStatus.

---

##### `actionGetSubscriptionAttributes`<sup>Required</sup> <a name="actionGetSubscriptionAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionGetSubscriptionAttributes"></a>

```typescript
public readonly actionGetSubscriptionAttributes: string;
```

- *Type:* string

[Read] sns:GetSubscriptionAttributes.

---

##### `actionGetTopicAttributes`<sup>Required</sup> <a name="actionGetTopicAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionGetTopicAttributes"></a>

```typescript
public readonly actionGetTopicAttributes: string;
```

- *Type:* string

[Read] sns:GetTopicAttributes.

---

##### `actionSetEndpointAttributes`<sup>Required</sup> <a name="actionSetEndpointAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionSetEndpointAttributes"></a>

```typescript
public readonly actionSetEndpointAttributes: string;
```

- *Type:* string

[Write] sns:SetEndpointAttributes.

---

##### `actionSetPlatformApplicationAttributes`<sup>Required</sup> <a name="actionSetPlatformApplicationAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionSetPlatformApplicationAttributes"></a>

```typescript
public readonly actionSetPlatformApplicationAttributes: string;
```

- *Type:* string

[Write] sns:SetPlatformApplicationAttributes.

---

##### `actionSetSMSAttributes`<sup>Required</sup> <a name="actionSetSMSAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionSetSMSAttributes"></a>

```typescript
public readonly actionSetSMSAttributes: string;
```

- *Type:* string

[Write] sns:SetSMSAttributes.

---

##### `actionSetSubscriptionAttributes`<sup>Required</sup> <a name="actionSetSubscriptionAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionSetSubscriptionAttributes"></a>

```typescript
public readonly actionSetSubscriptionAttributes: string;
```

- *Type:* string

[Write] sns:SetSubscriptionAttributes.

---

##### `actionSetTopicAttributes`<sup>Required</sup> <a name="actionSetTopicAttributes" id="@cdk_utils/iam.sns.SNSActions.property.actionSetTopicAttributes"></a>

```typescript
public readonly actionSetTopicAttributes: string;
```

- *Type:* string

[PermissionManagement] sns:SetTopicAttributes.

---

##### `AddPermission`<sup>Required</sup> <a name="AddPermission" id="@cdk_utils/iam.sns.SNSActions.property.AddPermission"></a>

```typescript
public readonly AddPermission: string;
```

- *Type:* string

[PermissionManagement] sns:AddPermission.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sns.SNSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sns.SNSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sns.SNSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sns.SNSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sns.SNSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CheckIfPhoneNumberIsOptedOut`<sup>Required</sup> <a name="CheckIfPhoneNumberIsOptedOut" id="@cdk_utils/iam.sns.SNSActions.property.CheckIfPhoneNumberIsOptedOut"></a>

```typescript
public readonly CheckIfPhoneNumberIsOptedOut: string;
```

- *Type:* string

[Read] sns:CheckIfPhoneNumberIsOptedOut.

---

##### `ConfirmSubscription`<sup>Required</sup> <a name="ConfirmSubscription" id="@cdk_utils/iam.sns.SNSActions.property.ConfirmSubscription"></a>

```typescript
public readonly ConfirmSubscription: string;
```

- *Type:* string

[Write] sns:ConfirmSubscription.

---

##### `CreatePlatformApplication`<sup>Required</sup> <a name="CreatePlatformApplication" id="@cdk_utils/iam.sns.SNSActions.property.CreatePlatformApplication"></a>

```typescript
public readonly CreatePlatformApplication: string;
```

- *Type:* string

[Write] sns:CreatePlatformApplication.

---

##### `CreatePlatformEndpoint`<sup>Required</sup> <a name="CreatePlatformEndpoint" id="@cdk_utils/iam.sns.SNSActions.property.CreatePlatformEndpoint"></a>

```typescript
public readonly CreatePlatformEndpoint: string;
```

- *Type:* string

[Write] sns:CreatePlatformEndpoint.

---

##### `CreateSMSSandboxPhoneNumber`<sup>Required</sup> <a name="CreateSMSSandboxPhoneNumber" id="@cdk_utils/iam.sns.SNSActions.property.CreateSMSSandboxPhoneNumber"></a>

```typescript
public readonly CreateSMSSandboxPhoneNumber: string;
```

- *Type:* string

[Write] sns:CreateSMSSandboxPhoneNumber.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.sns.SNSActions.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string;
```

- *Type:* string

[Write] sns:CreateTopic.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.sns.SNSActions.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string;
```

- *Type:* string

[Write] sns:DeleteEndpoint.

---

##### `DeletePlatformApplication`<sup>Required</sup> <a name="DeletePlatformApplication" id="@cdk_utils/iam.sns.SNSActions.property.DeletePlatformApplication"></a>

```typescript
public readonly DeletePlatformApplication: string;
```

- *Type:* string

[Write] sns:DeletePlatformApplication.

---

##### `DeleteSMSSandboxPhoneNumber`<sup>Required</sup> <a name="DeleteSMSSandboxPhoneNumber" id="@cdk_utils/iam.sns.SNSActions.property.DeleteSMSSandboxPhoneNumber"></a>

```typescript
public readonly DeleteSMSSandboxPhoneNumber: string;
```

- *Type:* string

[Write] sns:DeleteSMSSandboxPhoneNumber.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.sns.SNSActions.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string;
```

- *Type:* string

[Write] sns:DeleteTopic.

---

##### `ListEndpointsByPlatformApplication`<sup>Required</sup> <a name="ListEndpointsByPlatformApplication" id="@cdk_utils/iam.sns.SNSActions.property.ListEndpointsByPlatformApplication"></a>

```typescript
public readonly ListEndpointsByPlatformApplication: string;
```

- *Type:* string

[List] sns:ListEndpointsByPlatformApplication.

---

##### `ListOriginationNumbers`<sup>Required</sup> <a name="ListOriginationNumbers" id="@cdk_utils/iam.sns.SNSActions.property.ListOriginationNumbers"></a>

```typescript
public readonly ListOriginationNumbers: string;
```

- *Type:* string

[List] sns:ListOriginationNumbers.

---

##### `ListPhoneNumbersOptedOut`<sup>Required</sup> <a name="ListPhoneNumbersOptedOut" id="@cdk_utils/iam.sns.SNSActions.property.ListPhoneNumbersOptedOut"></a>

```typescript
public readonly ListPhoneNumbersOptedOut: string;
```

- *Type:* string

[Read] sns:ListPhoneNumbersOptedOut.

---

##### `ListPlatformApplications`<sup>Required</sup> <a name="ListPlatformApplications" id="@cdk_utils/iam.sns.SNSActions.property.ListPlatformApplications"></a>

```typescript
public readonly ListPlatformApplications: string;
```

- *Type:* string

[List] sns:ListPlatformApplications.

---

##### `ListSMSSandboxPhoneNumbers`<sup>Required</sup> <a name="ListSMSSandboxPhoneNumbers" id="@cdk_utils/iam.sns.SNSActions.property.ListSMSSandboxPhoneNumbers"></a>

```typescript
public readonly ListSMSSandboxPhoneNumbers: string;
```

- *Type:* string

[List] sns:ListSMSSandboxPhoneNumbers.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.sns.SNSActions.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string;
```

- *Type:* string

[List] sns:ListSubscriptions.

---

##### `ListSubscriptionsByTopic`<sup>Required</sup> <a name="ListSubscriptionsByTopic" id="@cdk_utils/iam.sns.SNSActions.property.ListSubscriptionsByTopic"></a>

```typescript
public readonly ListSubscriptionsByTopic: string;
```

- *Type:* string

[List] sns:ListSubscriptionsByTopic.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sns.SNSActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] sns:ListTagsForResource.

---

##### `ListTopics`<sup>Required</sup> <a name="ListTopics" id="@cdk_utils/iam.sns.SNSActions.property.ListTopics"></a>

```typescript
public readonly ListTopics: string;
```

- *Type:* string

[List] sns:ListTopics.

---

##### `OptInPhoneNumber`<sup>Required</sup> <a name="OptInPhoneNumber" id="@cdk_utils/iam.sns.SNSActions.property.OptInPhoneNumber"></a>

```typescript
public readonly OptInPhoneNumber: string;
```

- *Type:* string

[Write] sns:OptInPhoneNumber.

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdk_utils/iam.sns.SNSActions.property.Publish"></a>

```typescript
public readonly Publish: string;
```

- *Type:* string

[Write] sns:Publish.

---

##### `PutDataProtectionPolicy`<sup>Required</sup> <a name="PutDataProtectionPolicy" id="@cdk_utils/iam.sns.SNSActions.property.PutDataProtectionPolicy"></a>

```typescript
public readonly PutDataProtectionPolicy: string;
```

- *Type:* string

[Write] sns:PutDataProtectionPolicy.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.sns.SNSActions.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string;
```

- *Type:* string

[PermissionManagement] sns:RemovePermission.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sns.SNSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.sns.SNSActions.property.Subscribe"></a>

```typescript
public readonly Subscribe: string;
```

- *Type:* string

[Write] sns:Subscribe.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sns.SNSActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] sns:TagResource.

---

##### `Unsubscribe`<sup>Required</sup> <a name="Unsubscribe" id="@cdk_utils/iam.sns.SNSActions.property.Unsubscribe"></a>

```typescript
public readonly Unsubscribe: string;
```

- *Type:* string

[Write] sns:Unsubscribe.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sns.SNSActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] sns:UntagResource.

---

##### `VerifySMSSandboxPhoneNumber`<sup>Required</sup> <a name="VerifySMSSandboxPhoneNumber" id="@cdk_utils/iam.sns.SNSActions.property.VerifySMSSandboxPhoneNumber"></a>

```typescript
public readonly VerifySMSSandboxPhoneNumber: string;
```

- *Type:* string

[Write] sns:VerifySMSSandboxPhoneNumber.

---

### SNSConditions <a name="SNSConditions" id="@cdk_utils/iam.sns.SNSConditions"></a>

Condition key constants and builders for sns.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sns.SNSConditions.Initializer"></a>

```typescript
import { sns } from '@cdk_utils/iam'

new sns.SNSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.endpoint">endpoint</a></code> | Generates a condition block for `sns:Endpoint`. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.protocol">protocol</a></code> | Generates a condition block for `sns:Protocol`. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `endpoint` <a name="endpoint" id="@cdk_utils/iam.sns.SNSConditions.endpoint"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSConditions.endpoint(value: string)
```

Generates a condition block for `sns:Endpoint`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sns.SNSConditions.endpoint.parameter.value"></a>

- *Type:* string

---

##### `protocol` <a name="protocol" id="@cdk_utils/iam.sns.SNSConditions.protocol"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSConditions.protocol(value: string)
```

Generates a condition block for `sns:Protocol`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sns.SNSConditions.protocol.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sns.SNSConditions.requestTag"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sns.SNSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sns.SNSConditions.resourceTag"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sns.SNSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sns.SNSConditions.tagKeys"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sns.SNSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.CreateTopicConditionKeys">CreateTopicConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateTopic action. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.ENDPOINT">ENDPOINT</a></code> | <code>string</code> | Condition key: sns:Endpoint (String). |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.PROTOCOL">PROTOCOL</a></code> | <code>string</code> | Condition key: sns:Protocol (String). |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.SubscribeConditionKeys">SubscribeConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Subscribe action. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.sns.SNSConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sns.SNSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sns.SNSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sns.SNSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateTopicConditionKeys`<sup>Required</sup> <a name="CreateTopicConditionKeys" id="@cdk_utils/iam.sns.SNSConditions.property.CreateTopicConditionKeys"></a>

```typescript
public readonly CreateTopicConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateTopic action.

---

##### `ENDPOINT`<sup>Required</sup> <a name="ENDPOINT" id="@cdk_utils/iam.sns.SNSConditions.property.ENDPOINT"></a>

```typescript
public readonly ENDPOINT: string;
```

- *Type:* string

Condition key: sns:Endpoint (String).

---

##### `PROTOCOL`<sup>Required</sup> <a name="PROTOCOL" id="@cdk_utils/iam.sns.SNSConditions.property.PROTOCOL"></a>

```typescript
public readonly PROTOCOL: string;
```

- *Type:* string

Condition key: sns:Protocol (String).

---

##### `SubscribeConditionKeys`<sup>Required</sup> <a name="SubscribeConditionKeys" id="@cdk_utils/iam.sns.SNSConditions.property.SubscribeConditionKeys"></a>

```typescript
public readonly SubscribeConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Subscribe action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.sns.SNSConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.sns.SNSConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SNSOperations <a name="SNSOperations" id="@cdk_utils/iam.sns.SNSOperations"></a>

API operation to required IAM actions mapping for sns.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sns.SNSOperations.Initializer"></a>

```typescript
import { sns } from '@cdk_utils/iam'

new sns.SNSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.AddPermission">AddPermission</a></code> | <code>string[]</code> | IAM actions required for the AddPermission API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.CheckIfPhoneNumberIsOptedOut">CheckIfPhoneNumberIsOptedOut</a></code> | <code>string[]</code> | IAM actions required for the CheckIfPhoneNumberIsOptedOut API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ConfirmSubscription">ConfirmSubscription</a></code> | <code>string[]</code> | IAM actions required for the ConfirmSubscription API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.CreatePlatformApplication">CreatePlatformApplication</a></code> | <code>string[]</code> | IAM actions required for the CreatePlatformApplication API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.CreatePlatformEndpoint">CreatePlatformEndpoint</a></code> | <code>string[]</code> | IAM actions required for the CreatePlatformEndpoint API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.CreateSMSSandboxPhoneNumber">CreateSMSSandboxPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the CreateSMSSandboxPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.CreateTopic">CreateTopic</a></code> | <code>string[]</code> | IAM actions required for the CreateTopic API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.DeleteEndpoint">DeleteEndpoint</a></code> | <code>string[]</code> | IAM actions required for the DeleteEndpoint API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.DeletePlatformApplication">DeletePlatformApplication</a></code> | <code>string[]</code> | IAM actions required for the DeletePlatformApplication API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.DeleteSMSSandboxPhoneNumber">DeleteSMSSandboxPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the DeleteSMSSandboxPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.DeleteTopic">DeleteTopic</a></code> | <code>string[]</code> | IAM actions required for the DeleteTopic API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListEndpointsByPlatformApplication">ListEndpointsByPlatformApplication</a></code> | <code>string[]</code> | IAM actions required for the ListEndpointsByPlatformApplication API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListOriginationNumbers">ListOriginationNumbers</a></code> | <code>string[]</code> | IAM actions required for the ListOriginationNumbers API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListPhoneNumbersOptedOut">ListPhoneNumbersOptedOut</a></code> | <code>string[]</code> | IAM actions required for the ListPhoneNumbersOptedOut API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListPlatformApplications">ListPlatformApplications</a></code> | <code>string[]</code> | IAM actions required for the ListPlatformApplications API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListSMSSandboxPhoneNumbers">ListSMSSandboxPhoneNumbers</a></code> | <code>string[]</code> | IAM actions required for the ListSMSSandboxPhoneNumbers API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListSubscriptions">ListSubscriptions</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptions API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListSubscriptionsByTopic">ListSubscriptionsByTopic</a></code> | <code>string[]</code> | IAM actions required for the ListSubscriptionsByTopic API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.ListTopics">ListTopics</a></code> | <code>string[]</code> | IAM actions required for the ListTopics API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetDataProtectionPolicy">opGetDataProtectionPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetDataProtectionPolicy API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetEndpointAttributes">opGetEndpointAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetEndpointAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetPlatformApplicationAttributes">opGetPlatformApplicationAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetPlatformApplicationAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetSMSAttributes">opGetSMSAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetSMSAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetSMSSandboxAccountStatus">opGetSMSSandboxAccountStatus</a></code> | <code>string[]</code> | IAM actions required for the GetSMSSandboxAccountStatus API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetSubscriptionAttributes">opGetSubscriptionAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetSubscriptionAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opGetTopicAttributes">opGetTopicAttributes</a></code> | <code>string[]</code> | IAM actions required for the GetTopicAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opSetEndpointAttributes">opSetEndpointAttributes</a></code> | <code>string[]</code> | IAM actions required for the SetEndpointAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opSetPlatformApplicationAttributes">opSetPlatformApplicationAttributes</a></code> | <code>string[]</code> | IAM actions required for the SetPlatformApplicationAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opSetSMSAttributes">opSetSMSAttributes</a></code> | <code>string[]</code> | IAM actions required for the SetSMSAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opSetSubscriptionAttributes">opSetSubscriptionAttributes</a></code> | <code>string[]</code> | IAM actions required for the SetSubscriptionAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.opSetTopicAttributes">opSetTopicAttributes</a></code> | <code>string[]</code> | IAM actions required for the SetTopicAttributes API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.OptInPhoneNumber">OptInPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the OptInPhoneNumber API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.Publish">Publish</a></code> | <code>string[]</code> | IAM actions required for the Publish API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.PublishBatch">PublishBatch</a></code> | <code>string[]</code> | IAM actions required for the PublishBatch API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.PutDataProtectionPolicy">PutDataProtectionPolicy</a></code> | <code>string[]</code> | IAM actions required for the PutDataProtectionPolicy API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.RemovePermission">RemovePermission</a></code> | <code>string[]</code> | IAM actions required for the RemovePermission API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.Subscribe">Subscribe</a></code> | <code>string[]</code> | IAM actions required for the Subscribe API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.Unsubscribe">Unsubscribe</a></code> | <code>string[]</code> | IAM actions required for the Unsubscribe API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.sns.SNSOperations.property.VerifySMSSandboxPhoneNumber">VerifySMSSandboxPhoneNumber</a></code> | <code>string[]</code> | IAM actions required for the VerifySMSSandboxPhoneNumber API call. |

---

##### `AddPermission`<sup>Required</sup> <a name="AddPermission" id="@cdk_utils/iam.sns.SNSOperations.property.AddPermission"></a>

```typescript
public readonly AddPermission: string[];
```

- *Type:* string[]

IAM actions required for the AddPermission API call.

---

##### `CheckIfPhoneNumberIsOptedOut`<sup>Required</sup> <a name="CheckIfPhoneNumberIsOptedOut" id="@cdk_utils/iam.sns.SNSOperations.property.CheckIfPhoneNumberIsOptedOut"></a>

```typescript
public readonly CheckIfPhoneNumberIsOptedOut: string[];
```

- *Type:* string[]

IAM actions required for the CheckIfPhoneNumberIsOptedOut API call.

---

##### `ConfirmSubscription`<sup>Required</sup> <a name="ConfirmSubscription" id="@cdk_utils/iam.sns.SNSOperations.property.ConfirmSubscription"></a>

```typescript
public readonly ConfirmSubscription: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmSubscription API call.

---

##### `CreatePlatformApplication`<sup>Required</sup> <a name="CreatePlatformApplication" id="@cdk_utils/iam.sns.SNSOperations.property.CreatePlatformApplication"></a>

```typescript
public readonly CreatePlatformApplication: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlatformApplication API call.

---

##### `CreatePlatformEndpoint`<sup>Required</sup> <a name="CreatePlatformEndpoint" id="@cdk_utils/iam.sns.SNSOperations.property.CreatePlatformEndpoint"></a>

```typescript
public readonly CreatePlatformEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the CreatePlatformEndpoint API call.

---

##### `CreateSMSSandboxPhoneNumber`<sup>Required</sup> <a name="CreateSMSSandboxPhoneNumber" id="@cdk_utils/iam.sns.SNSOperations.property.CreateSMSSandboxPhoneNumber"></a>

```typescript
public readonly CreateSMSSandboxPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the CreateSMSSandboxPhoneNumber API call.

---

##### `CreateTopic`<sup>Required</sup> <a name="CreateTopic" id="@cdk_utils/iam.sns.SNSOperations.property.CreateTopic"></a>

```typescript
public readonly CreateTopic: string[];
```

- *Type:* string[]

IAM actions required for the CreateTopic API call.

---

##### `DeleteEndpoint`<sup>Required</sup> <a name="DeleteEndpoint" id="@cdk_utils/iam.sns.SNSOperations.property.DeleteEndpoint"></a>

```typescript
public readonly DeleteEndpoint: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEndpoint API call.

---

##### `DeletePlatformApplication`<sup>Required</sup> <a name="DeletePlatformApplication" id="@cdk_utils/iam.sns.SNSOperations.property.DeletePlatformApplication"></a>

```typescript
public readonly DeletePlatformApplication: string[];
```

- *Type:* string[]

IAM actions required for the DeletePlatformApplication API call.

---

##### `DeleteSMSSandboxPhoneNumber`<sup>Required</sup> <a name="DeleteSMSSandboxPhoneNumber" id="@cdk_utils/iam.sns.SNSOperations.property.DeleteSMSSandboxPhoneNumber"></a>

```typescript
public readonly DeleteSMSSandboxPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSMSSandboxPhoneNumber API call.

---

##### `DeleteTopic`<sup>Required</sup> <a name="DeleteTopic" id="@cdk_utils/iam.sns.SNSOperations.property.DeleteTopic"></a>

```typescript
public readonly DeleteTopic: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTopic API call.

---

##### `ListEndpointsByPlatformApplication`<sup>Required</sup> <a name="ListEndpointsByPlatformApplication" id="@cdk_utils/iam.sns.SNSOperations.property.ListEndpointsByPlatformApplication"></a>

```typescript
public readonly ListEndpointsByPlatformApplication: string[];
```

- *Type:* string[]

IAM actions required for the ListEndpointsByPlatformApplication API call.

---

##### `ListOriginationNumbers`<sup>Required</sup> <a name="ListOriginationNumbers" id="@cdk_utils/iam.sns.SNSOperations.property.ListOriginationNumbers"></a>

```typescript
public readonly ListOriginationNumbers: string[];
```

- *Type:* string[]

IAM actions required for the ListOriginationNumbers API call.

---

##### `ListPhoneNumbersOptedOut`<sup>Required</sup> <a name="ListPhoneNumbersOptedOut" id="@cdk_utils/iam.sns.SNSOperations.property.ListPhoneNumbersOptedOut"></a>

```typescript
public readonly ListPhoneNumbersOptedOut: string[];
```

- *Type:* string[]

IAM actions required for the ListPhoneNumbersOptedOut API call.

---

##### `ListPlatformApplications`<sup>Required</sup> <a name="ListPlatformApplications" id="@cdk_utils/iam.sns.SNSOperations.property.ListPlatformApplications"></a>

```typescript
public readonly ListPlatformApplications: string[];
```

- *Type:* string[]

IAM actions required for the ListPlatformApplications API call.

---

##### `ListSMSSandboxPhoneNumbers`<sup>Required</sup> <a name="ListSMSSandboxPhoneNumbers" id="@cdk_utils/iam.sns.SNSOperations.property.ListSMSSandboxPhoneNumbers"></a>

```typescript
public readonly ListSMSSandboxPhoneNumbers: string[];
```

- *Type:* string[]

IAM actions required for the ListSMSSandboxPhoneNumbers API call.

---

##### `ListSubscriptions`<sup>Required</sup> <a name="ListSubscriptions" id="@cdk_utils/iam.sns.SNSOperations.property.ListSubscriptions"></a>

```typescript
public readonly ListSubscriptions: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptions API call.

---

##### `ListSubscriptionsByTopic`<sup>Required</sup> <a name="ListSubscriptionsByTopic" id="@cdk_utils/iam.sns.SNSOperations.property.ListSubscriptionsByTopic"></a>

```typescript
public readonly ListSubscriptionsByTopic: string[];
```

- *Type:* string[]

IAM actions required for the ListSubscriptionsByTopic API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.sns.SNSOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTopics`<sup>Required</sup> <a name="ListTopics" id="@cdk_utils/iam.sns.SNSOperations.property.ListTopics"></a>

```typescript
public readonly ListTopics: string[];
```

- *Type:* string[]

IAM actions required for the ListTopics API call.

---

##### `opGetDataProtectionPolicy`<sup>Required</sup> <a name="opGetDataProtectionPolicy" id="@cdk_utils/iam.sns.SNSOperations.property.opGetDataProtectionPolicy"></a>

```typescript
public readonly opGetDataProtectionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetDataProtectionPolicy API call.

---

##### `opGetEndpointAttributes`<sup>Required</sup> <a name="opGetEndpointAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opGetEndpointAttributes"></a>

```typescript
public readonly opGetEndpointAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetEndpointAttributes API call.

---

##### `opGetPlatformApplicationAttributes`<sup>Required</sup> <a name="opGetPlatformApplicationAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opGetPlatformApplicationAttributes"></a>

```typescript
public readonly opGetPlatformApplicationAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetPlatformApplicationAttributes API call.

---

##### `opGetSMSAttributes`<sup>Required</sup> <a name="opGetSMSAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opGetSMSAttributes"></a>

```typescript
public readonly opGetSMSAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetSMSAttributes API call.

---

##### `opGetSMSSandboxAccountStatus`<sup>Required</sup> <a name="opGetSMSSandboxAccountStatus" id="@cdk_utils/iam.sns.SNSOperations.property.opGetSMSSandboxAccountStatus"></a>

```typescript
public readonly opGetSMSSandboxAccountStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetSMSSandboxAccountStatus API call.

---

##### `opGetSubscriptionAttributes`<sup>Required</sup> <a name="opGetSubscriptionAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opGetSubscriptionAttributes"></a>

```typescript
public readonly opGetSubscriptionAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetSubscriptionAttributes API call.

---

##### `opGetTopicAttributes`<sup>Required</sup> <a name="opGetTopicAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opGetTopicAttributes"></a>

```typescript
public readonly opGetTopicAttributes: string[];
```

- *Type:* string[]

IAM actions required for the GetTopicAttributes API call.

---

##### `opSetEndpointAttributes`<sup>Required</sup> <a name="opSetEndpointAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opSetEndpointAttributes"></a>

```typescript
public readonly opSetEndpointAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SetEndpointAttributes API call.

---

##### `opSetPlatformApplicationAttributes`<sup>Required</sup> <a name="opSetPlatformApplicationAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opSetPlatformApplicationAttributes"></a>

```typescript
public readonly opSetPlatformApplicationAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SetPlatformApplicationAttributes API call.

---

##### `opSetSMSAttributes`<sup>Required</sup> <a name="opSetSMSAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opSetSMSAttributes"></a>

```typescript
public readonly opSetSMSAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SetSMSAttributes API call.

---

##### `opSetSubscriptionAttributes`<sup>Required</sup> <a name="opSetSubscriptionAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opSetSubscriptionAttributes"></a>

```typescript
public readonly opSetSubscriptionAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SetSubscriptionAttributes API call.

---

##### `opSetTopicAttributes`<sup>Required</sup> <a name="opSetTopicAttributes" id="@cdk_utils/iam.sns.SNSOperations.property.opSetTopicAttributes"></a>

```typescript
public readonly opSetTopicAttributes: string[];
```

- *Type:* string[]

IAM actions required for the SetTopicAttributes API call.

---

##### `OptInPhoneNumber`<sup>Required</sup> <a name="OptInPhoneNumber" id="@cdk_utils/iam.sns.SNSOperations.property.OptInPhoneNumber"></a>

```typescript
public readonly OptInPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the OptInPhoneNumber API call.

---

##### `Publish`<sup>Required</sup> <a name="Publish" id="@cdk_utils/iam.sns.SNSOperations.property.Publish"></a>

```typescript
public readonly Publish: string[];
```

- *Type:* string[]

IAM actions required for the Publish API call.

---

##### `PublishBatch`<sup>Required</sup> <a name="PublishBatch" id="@cdk_utils/iam.sns.SNSOperations.property.PublishBatch"></a>

```typescript
public readonly PublishBatch: string[];
```

- *Type:* string[]

IAM actions required for the PublishBatch API call.

---

##### `PutDataProtectionPolicy`<sup>Required</sup> <a name="PutDataProtectionPolicy" id="@cdk_utils/iam.sns.SNSOperations.property.PutDataProtectionPolicy"></a>

```typescript
public readonly PutDataProtectionPolicy: string[];
```

- *Type:* string[]

IAM actions required for the PutDataProtectionPolicy API call.

---

##### `RemovePermission`<sup>Required</sup> <a name="RemovePermission" id="@cdk_utils/iam.sns.SNSOperations.property.RemovePermission"></a>

```typescript
public readonly RemovePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemovePermission API call.

---

##### `Subscribe`<sup>Required</sup> <a name="Subscribe" id="@cdk_utils/iam.sns.SNSOperations.property.Subscribe"></a>

```typescript
public readonly Subscribe: string[];
```

- *Type:* string[]

IAM actions required for the Subscribe API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.sns.SNSOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `Unsubscribe`<sup>Required</sup> <a name="Unsubscribe" id="@cdk_utils/iam.sns.SNSOperations.property.Unsubscribe"></a>

```typescript
public readonly Unsubscribe: string[];
```

- *Type:* string[]

IAM actions required for the Unsubscribe API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.sns.SNSOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `VerifySMSSandboxPhoneNumber`<sup>Required</sup> <a name="VerifySMSSandboxPhoneNumber" id="@cdk_utils/iam.sns.SNSOperations.property.VerifySMSSandboxPhoneNumber"></a>

```typescript
public readonly VerifySMSSandboxPhoneNumber: string[];
```

- *Type:* string[]

IAM actions required for the VerifySMSSandboxPhoneNumber API call.

---

### SNSResources <a name="SNSResources" id="@cdk_utils/iam.sns.SNSResources"></a>

ARN builders, validators, and parsers for sns resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sns.SNSResources.Initializer"></a>

```typescript
import { sns } from '@cdk_utils/iam'

new sns.SNSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sns.SNSResources.isValidTopicArn">isValidTopicArn</a></code> | Validates whether a string is a valid ARN for the topic resource. |
| <code><a href="#@cdk_utils/iam.sns.SNSResources.parseTopicArn">parseTopicArn</a></code> | Parses a topic ARN into its components. |
| <code><a href="#@cdk_utils/iam.sns.SNSResources.topic">topic</a></code> | Builds an ARN for the topic resource. |

---

##### `isValidTopicArn` <a name="isValidTopicArn" id="@cdk_utils/iam.sns.SNSResources.isValidTopicArn"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSResources.isValidTopicArn(arn: string)
```

Validates whether a string is a valid ARN for the topic resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sns.SNSResources.isValidTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `parseTopicArn` <a name="parseTopicArn" id="@cdk_utils/iam.sns.SNSResources.parseTopicArn"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSResources.parseTopicArn(arn: string)
```

Parses a topic ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sns.SNSResources.parseTopicArn.parameter.arn"></a>

- *Type:* string

---

##### `topic` <a name="topic" id="@cdk_utils/iam.sns.SNSResources.topic"></a>

```typescript
import { sns } from '@cdk_utils/iam'

sns.SNSResources.topic(props: SNSTopicArnProps)
```

Builds an ARN for the topic resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sns.SNSResources.topic.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sns.SNSTopicArnProps">SNSTopicArnProps</a>

---




