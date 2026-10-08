# `end_user_messaging` Submodule <a name="`end_user_messaging` Submodule" id="@cdk_utils/iam.end_user_messaging"></a>


## Structs <a name="Structs" id="Structs"></a>

### EndUserMessagingBrandProfileArnComponents <a name="EndUserMessagingBrandProfileArnComponents" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents"></a>

Parsed components of a brand-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

const endUserMessagingBrandProfileArnComponents: end_user_messaging.EndUserMessagingBrandProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### EndUserMessagingBrandProfileArnProps <a name="EndUserMessagingBrandProfileArnProps" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps"></a>

Properties for building a brand-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

const endUserMessagingBrandProfileArnProps: end_user_messaging.EndUserMessagingBrandProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### EndUserMessagingNotifyCodeConfigurationArnComponents <a name="EndUserMessagingNotifyCodeConfigurationArnComponents" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents"></a>

Parsed components of a notify-code-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

const endUserMessagingNotifyCodeConfigurationArnComponents: end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### EndUserMessagingNotifyCodeConfigurationArnProps <a name="EndUserMessagingNotifyCodeConfigurationArnProps" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps"></a>

Properties for building a notify-code-configuration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

const endUserMessagingNotifyCodeConfigurationArnProps: end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### EndUserMessagingActions <a name="EndUserMessagingActions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions"></a>

IAM action constants for the end-user-messaging service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

new end_user_messaging.EndUserMessagingActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetBrandProfile">actionGetBrandProfile</a></code> | <code>string</code> | [Read] end-user-messaging:GetBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetBrandProfileAttribute">actionGetBrandProfileAttribute</a></code> | <code>string</code> | [Read] end-user-messaging:GetBrandProfileAttribute. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetJob">actionGetJob</a></code> | <code>string</code> | [Read] end-user-messaging:GetJob. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetNotifyCodeConfiguration">actionGetNotifyCodeConfiguration</a></code> | <code>string</code> | [Read] end-user-messaging:GetNotifyCodeConfiguration. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateBrandProfile">CreateBrandProfile</a></code> | <code>string</code> | [Write] end-user-messaging:CreateBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateBrandProfileAttributes">CreateBrandProfileAttributes</a></code> | <code>string</code> | [Write] end-user-messaging:CreateBrandProfileAttributes. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateBrandProfileFromRegistration">CreateBrandProfileFromRegistration</a></code> | <code>string</code> | [Write] end-user-messaging:CreateBrandProfileFromRegistration. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateNotifyCodeConfiguration">CreateNotifyCodeConfiguration</a></code> | <code>string</code> | [Write] end-user-messaging:CreateNotifyCodeConfiguration. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateRegistrationsFromBrandProfile">CreateRegistrationsFromBrandProfile</a></code> | <code>string</code> | [Write] end-user-messaging:CreateRegistrationsFromBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.DeleteBrandProfile">DeleteBrandProfile</a></code> | <code>string</code> | [Write] end-user-messaging:DeleteBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.DeleteBrandProfileAttribute">DeleteBrandProfileAttribute</a></code> | <code>string</code> | [Write] end-user-messaging:DeleteBrandProfileAttribute. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.DeleteNotifyCodeConfiguration">DeleteNotifyCodeConfiguration</a></code> | <code>string</code> | [Write] end-user-messaging:DeleteNotifyCodeConfiguration. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListBrandProfileAttributes">ListBrandProfileAttributes</a></code> | <code>string</code> | [List] end-user-messaging:ListBrandProfileAttributes. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListBrandProfiles">ListBrandProfiles</a></code> | <code>string</code> | [List] end-user-messaging:ListBrandProfiles. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListJobs">ListJobs</a></code> | <code>string</code> | [List] end-user-messaging:ListJobs. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListNotifyCodeConfigurations">ListNotifyCodeConfigurations</a></code> | <code>string</code> | [List] end-user-messaging:ListNotifyCodeConfigurations. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListRegistrationsFromBrandProfile">ListRegistrationsFromBrandProfile</a></code> | <code>string</code> | [List] end-user-messaging:ListRegistrationsFromBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] end-user-messaging:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.SendNotifyCodeVerification">SendNotifyCodeVerification</a></code> | <code>string</code> | [Write] end-user-messaging:SendNotifyCodeVerification. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] end-user-messaging:TagResource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] end-user-messaging:UntagResource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateBrandProfile">UpdateBrandProfile</a></code> | <code>string</code> | [Write] end-user-messaging:UpdateBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateBrandProfileAttribute">UpdateBrandProfileAttribute</a></code> | <code>string</code> | [Write] end-user-messaging:UpdateBrandProfileAttribute. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateBrandProfileFromRegistration">UpdateBrandProfileFromRegistration</a></code> | <code>string</code> | [Write] end-user-messaging:UpdateBrandProfileFromRegistration. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateNotifyCodeConfiguration">UpdateNotifyCodeConfiguration</a></code> | <code>string</code> | [Write] end-user-messaging:UpdateNotifyCodeConfiguration. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateRegistrationsFromBrandProfile">UpdateRegistrationsFromBrandProfile</a></code> | <code>string</code> | [Write] end-user-messaging:UpdateRegistrationsFromBrandProfile. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ValidateNotifyCodeVerification">ValidateNotifyCodeVerification</a></code> | <code>string</code> | [Write] end-user-messaging:ValidateNotifyCodeVerification. |

---

##### `actionGetBrandProfile`<sup>Required</sup> <a name="actionGetBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetBrandProfile"></a>

```typescript
public readonly actionGetBrandProfile: string;
```

- *Type:* string

[Read] end-user-messaging:GetBrandProfile.

---

##### `actionGetBrandProfileAttribute`<sup>Required</sup> <a name="actionGetBrandProfileAttribute" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetBrandProfileAttribute"></a>

```typescript
public readonly actionGetBrandProfileAttribute: string;
```

- *Type:* string

[Read] end-user-messaging:GetBrandProfileAttribute.

---

##### `actionGetJob`<sup>Required</sup> <a name="actionGetJob" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetJob"></a>

```typescript
public readonly actionGetJob: string;
```

- *Type:* string

[Read] end-user-messaging:GetJob.

---

##### `actionGetNotifyCodeConfiguration`<sup>Required</sup> <a name="actionGetNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.actionGetNotifyCodeConfiguration"></a>

```typescript
public readonly actionGetNotifyCodeConfiguration: string;
```

- *Type:* string

[Read] end-user-messaging:GetNotifyCodeConfiguration.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateBrandProfile`<sup>Required</sup> <a name="CreateBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateBrandProfile"></a>

```typescript
public readonly CreateBrandProfile: string;
```

- *Type:* string

[Write] end-user-messaging:CreateBrandProfile.

---

##### `CreateBrandProfileAttributes`<sup>Required</sup> <a name="CreateBrandProfileAttributes" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateBrandProfileAttributes"></a>

```typescript
public readonly CreateBrandProfileAttributes: string;
```

- *Type:* string

[Write] end-user-messaging:CreateBrandProfileAttributes.

---

##### `CreateBrandProfileFromRegistration`<sup>Required</sup> <a name="CreateBrandProfileFromRegistration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateBrandProfileFromRegistration"></a>

```typescript
public readonly CreateBrandProfileFromRegistration: string;
```

- *Type:* string

[Write] end-user-messaging:CreateBrandProfileFromRegistration.

---

##### `CreateNotifyCodeConfiguration`<sup>Required</sup> <a name="CreateNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateNotifyCodeConfiguration"></a>

```typescript
public readonly CreateNotifyCodeConfiguration: string;
```

- *Type:* string

[Write] end-user-messaging:CreateNotifyCodeConfiguration.

---

##### `CreateRegistrationsFromBrandProfile`<sup>Required</sup> <a name="CreateRegistrationsFromBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.CreateRegistrationsFromBrandProfile"></a>

```typescript
public readonly CreateRegistrationsFromBrandProfile: string;
```

- *Type:* string

[Write] end-user-messaging:CreateRegistrationsFromBrandProfile.

---

##### `DeleteBrandProfile`<sup>Required</sup> <a name="DeleteBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.DeleteBrandProfile"></a>

```typescript
public readonly DeleteBrandProfile: string;
```

- *Type:* string

[Write] end-user-messaging:DeleteBrandProfile.

---

##### `DeleteBrandProfileAttribute`<sup>Required</sup> <a name="DeleteBrandProfileAttribute" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.DeleteBrandProfileAttribute"></a>

```typescript
public readonly DeleteBrandProfileAttribute: string;
```

- *Type:* string

[Write] end-user-messaging:DeleteBrandProfileAttribute.

---

##### `DeleteNotifyCodeConfiguration`<sup>Required</sup> <a name="DeleteNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.DeleteNotifyCodeConfiguration"></a>

```typescript
public readonly DeleteNotifyCodeConfiguration: string;
```

- *Type:* string

[Write] end-user-messaging:DeleteNotifyCodeConfiguration.

---

##### `ListBrandProfileAttributes`<sup>Required</sup> <a name="ListBrandProfileAttributes" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListBrandProfileAttributes"></a>

```typescript
public readonly ListBrandProfileAttributes: string;
```

- *Type:* string

[List] end-user-messaging:ListBrandProfileAttributes.

---

##### `ListBrandProfiles`<sup>Required</sup> <a name="ListBrandProfiles" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListBrandProfiles"></a>

```typescript
public readonly ListBrandProfiles: string;
```

- *Type:* string

[List] end-user-messaging:ListBrandProfiles.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListJobs"></a>

```typescript
public readonly ListJobs: string;
```

- *Type:* string

[List] end-user-messaging:ListJobs.

---

##### `ListNotifyCodeConfigurations`<sup>Required</sup> <a name="ListNotifyCodeConfigurations" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListNotifyCodeConfigurations"></a>

```typescript
public readonly ListNotifyCodeConfigurations: string;
```

- *Type:* string

[List] end-user-messaging:ListNotifyCodeConfigurations.

---

##### `ListRegistrationsFromBrandProfile`<sup>Required</sup> <a name="ListRegistrationsFromBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListRegistrationsFromBrandProfile"></a>

```typescript
public readonly ListRegistrationsFromBrandProfile: string;
```

- *Type:* string

[List] end-user-messaging:ListRegistrationsFromBrandProfile.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] end-user-messaging:ListTagsForResource.

---

##### `SendNotifyCodeVerification`<sup>Required</sup> <a name="SendNotifyCodeVerification" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.SendNotifyCodeVerification"></a>

```typescript
public readonly SendNotifyCodeVerification: string;
```

- *Type:* string

[Write] end-user-messaging:SendNotifyCodeVerification.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] end-user-messaging:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] end-user-messaging:UntagResource.

---

##### `UpdateBrandProfile`<sup>Required</sup> <a name="UpdateBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateBrandProfile"></a>

```typescript
public readonly UpdateBrandProfile: string;
```

- *Type:* string

[Write] end-user-messaging:UpdateBrandProfile.

---

##### `UpdateBrandProfileAttribute`<sup>Required</sup> <a name="UpdateBrandProfileAttribute" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateBrandProfileAttribute"></a>

```typescript
public readonly UpdateBrandProfileAttribute: string;
```

- *Type:* string

[Write] end-user-messaging:UpdateBrandProfileAttribute.

---

##### `UpdateBrandProfileFromRegistration`<sup>Required</sup> <a name="UpdateBrandProfileFromRegistration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateBrandProfileFromRegistration"></a>

```typescript
public readonly UpdateBrandProfileFromRegistration: string;
```

- *Type:* string

[Write] end-user-messaging:UpdateBrandProfileFromRegistration.

---

##### `UpdateNotifyCodeConfiguration`<sup>Required</sup> <a name="UpdateNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateNotifyCodeConfiguration"></a>

```typescript
public readonly UpdateNotifyCodeConfiguration: string;
```

- *Type:* string

[Write] end-user-messaging:UpdateNotifyCodeConfiguration.

---

##### `UpdateRegistrationsFromBrandProfile`<sup>Required</sup> <a name="UpdateRegistrationsFromBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.UpdateRegistrationsFromBrandProfile"></a>

```typescript
public readonly UpdateRegistrationsFromBrandProfile: string;
```

- *Type:* string

[Write] end-user-messaging:UpdateRegistrationsFromBrandProfile.

---

##### `ValidateNotifyCodeVerification`<sup>Required</sup> <a name="ValidateNotifyCodeVerification" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingActions.property.ValidateNotifyCodeVerification"></a>

```typescript
public readonly ValidateNotifyCodeVerification: string;
```

- *Type:* string

[Write] end-user-messaging:ValidateNotifyCodeVerification.

---

### EndUserMessagingConditions <a name="EndUserMessagingConditions" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions"></a>

Condition key constants and builders for end-user-messaging.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

new end_user_messaging.EndUserMessagingConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.requestTag"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.resourceTag"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.tagKeys"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.CreateBrandProfileConditionKeys">CreateBrandProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBrandProfile action. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.CreateBrandProfileFromRegistrationConditionKeys">CreateBrandProfileFromRegistrationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateBrandProfileFromRegistration action. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.CreateNotifyCodeConfigurationConditionKeys">CreateNotifyCodeConfigurationConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateNotifyCodeConfiguration action. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateBrandProfileConditionKeys`<sup>Required</sup> <a name="CreateBrandProfileConditionKeys" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.CreateBrandProfileConditionKeys"></a>

```typescript
public readonly CreateBrandProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBrandProfile action.

---

##### `CreateBrandProfileFromRegistrationConditionKeys`<sup>Required</sup> <a name="CreateBrandProfileFromRegistrationConditionKeys" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.CreateBrandProfileFromRegistrationConditionKeys"></a>

```typescript
public readonly CreateBrandProfileFromRegistrationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateBrandProfileFromRegistration action.

---

##### `CreateNotifyCodeConfigurationConditionKeys`<sup>Required</sup> <a name="CreateNotifyCodeConfigurationConditionKeys" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.CreateNotifyCodeConfigurationConditionKeys"></a>

```typescript
public readonly CreateNotifyCodeConfigurationConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateNotifyCodeConfiguration action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### EndUserMessagingOperations <a name="EndUserMessagingOperations" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations"></a>

API operation to required IAM actions mapping for end-user-messaging.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

new end_user_messaging.EndUserMessagingOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateBrandProfile">CreateBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateBrandProfileAttributes">CreateBrandProfileAttributes</a></code> | <code>string[]</code> | IAM actions required for the CreateBrandProfileAttributes API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateBrandProfileFromRegistration">CreateBrandProfileFromRegistration</a></code> | <code>string[]</code> | IAM actions required for the CreateBrandProfileFromRegistration API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateNotifyCodeConfiguration">CreateNotifyCodeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the CreateNotifyCodeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateRegistrationsFromBrandProfile">CreateRegistrationsFromBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the CreateRegistrationsFromBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.DeleteBrandProfile">DeleteBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.DeleteBrandProfileAttribute">DeleteBrandProfileAttribute</a></code> | <code>string[]</code> | IAM actions required for the DeleteBrandProfileAttribute API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.DeleteNotifyCodeConfiguration">DeleteNotifyCodeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteNotifyCodeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListBrandProfileAttributes">ListBrandProfileAttributes</a></code> | <code>string[]</code> | IAM actions required for the ListBrandProfileAttributes API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListBrandProfiles">ListBrandProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListBrandProfiles API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListJobs">ListJobs</a></code> | <code>string[]</code> | IAM actions required for the ListJobs API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListNotifyCodeConfigurations">ListNotifyCodeConfigurations</a></code> | <code>string[]</code> | IAM actions required for the ListNotifyCodeConfigurations API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListRegistrationsFromBrandProfile">ListRegistrationsFromBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the ListRegistrationsFromBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetBrandProfile">opGetBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the GetBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetBrandProfileAttribute">opGetBrandProfileAttribute</a></code> | <code>string[]</code> | IAM actions required for the GetBrandProfileAttribute API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetJob">opGetJob</a></code> | <code>string[]</code> | IAM actions required for the GetJob API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetNotifyCodeConfiguration">opGetNotifyCodeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetNotifyCodeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.SendNotifyCodeVerification">SendNotifyCodeVerification</a></code> | <code>string[]</code> | IAM actions required for the SendNotifyCodeVerification API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateBrandProfile">UpdateBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateBrandProfileAttribute">UpdateBrandProfileAttribute</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrandProfileAttribute API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateBrandProfileFromRegistration">UpdateBrandProfileFromRegistration</a></code> | <code>string[]</code> | IAM actions required for the UpdateBrandProfileFromRegistration API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateNotifyCodeConfiguration">UpdateNotifyCodeConfiguration</a></code> | <code>string[]</code> | IAM actions required for the UpdateNotifyCodeConfiguration API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateRegistrationsFromBrandProfile">UpdateRegistrationsFromBrandProfile</a></code> | <code>string[]</code> | IAM actions required for the UpdateRegistrationsFromBrandProfile API call. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ValidateNotifyCodeVerification">ValidateNotifyCodeVerification</a></code> | <code>string[]</code> | IAM actions required for the ValidateNotifyCodeVerification API call. |

---

##### `CreateBrandProfile`<sup>Required</sup> <a name="CreateBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateBrandProfile"></a>

```typescript
public readonly CreateBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrandProfile API call.

---

##### `CreateBrandProfileAttributes`<sup>Required</sup> <a name="CreateBrandProfileAttributes" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateBrandProfileAttributes"></a>

```typescript
public readonly CreateBrandProfileAttributes: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrandProfileAttributes API call.

---

##### `CreateBrandProfileFromRegistration`<sup>Required</sup> <a name="CreateBrandProfileFromRegistration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateBrandProfileFromRegistration"></a>

```typescript
public readonly CreateBrandProfileFromRegistration: string[];
```

- *Type:* string[]

IAM actions required for the CreateBrandProfileFromRegistration API call.

---

##### `CreateNotifyCodeConfiguration`<sup>Required</sup> <a name="CreateNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateNotifyCodeConfiguration"></a>

```typescript
public readonly CreateNotifyCodeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the CreateNotifyCodeConfiguration API call.

---

##### `CreateRegistrationsFromBrandProfile`<sup>Required</sup> <a name="CreateRegistrationsFromBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.CreateRegistrationsFromBrandProfile"></a>

```typescript
public readonly CreateRegistrationsFromBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the CreateRegistrationsFromBrandProfile API call.

---

##### `DeleteBrandProfile`<sup>Required</sup> <a name="DeleteBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.DeleteBrandProfile"></a>

```typescript
public readonly DeleteBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrandProfile API call.

---

##### `DeleteBrandProfileAttribute`<sup>Required</sup> <a name="DeleteBrandProfileAttribute" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.DeleteBrandProfileAttribute"></a>

```typescript
public readonly DeleteBrandProfileAttribute: string[];
```

- *Type:* string[]

IAM actions required for the DeleteBrandProfileAttribute API call.

---

##### `DeleteNotifyCodeConfiguration`<sup>Required</sup> <a name="DeleteNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.DeleteNotifyCodeConfiguration"></a>

```typescript
public readonly DeleteNotifyCodeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteNotifyCodeConfiguration API call.

---

##### `ListBrandProfileAttributes`<sup>Required</sup> <a name="ListBrandProfileAttributes" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListBrandProfileAttributes"></a>

```typescript
public readonly ListBrandProfileAttributes: string[];
```

- *Type:* string[]

IAM actions required for the ListBrandProfileAttributes API call.

---

##### `ListBrandProfiles`<sup>Required</sup> <a name="ListBrandProfiles" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListBrandProfiles"></a>

```typescript
public readonly ListBrandProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListBrandProfiles API call.

---

##### `ListJobs`<sup>Required</sup> <a name="ListJobs" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListJobs"></a>

```typescript
public readonly ListJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListJobs API call.

---

##### `ListNotifyCodeConfigurations`<sup>Required</sup> <a name="ListNotifyCodeConfigurations" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListNotifyCodeConfigurations"></a>

```typescript
public readonly ListNotifyCodeConfigurations: string[];
```

- *Type:* string[]

IAM actions required for the ListNotifyCodeConfigurations API call.

---

##### `ListRegistrationsFromBrandProfile`<sup>Required</sup> <a name="ListRegistrationsFromBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListRegistrationsFromBrandProfile"></a>

```typescript
public readonly ListRegistrationsFromBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the ListRegistrationsFromBrandProfile API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetBrandProfile`<sup>Required</sup> <a name="opGetBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetBrandProfile"></a>

```typescript
public readonly opGetBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetBrandProfile API call.

---

##### `opGetBrandProfileAttribute`<sup>Required</sup> <a name="opGetBrandProfileAttribute" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetBrandProfileAttribute"></a>

```typescript
public readonly opGetBrandProfileAttribute: string[];
```

- *Type:* string[]

IAM actions required for the GetBrandProfileAttribute API call.

---

##### `opGetJob`<sup>Required</sup> <a name="opGetJob" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetJob"></a>

```typescript
public readonly opGetJob: string[];
```

- *Type:* string[]

IAM actions required for the GetJob API call.

---

##### `opGetNotifyCodeConfiguration`<sup>Required</sup> <a name="opGetNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.opGetNotifyCodeConfiguration"></a>

```typescript
public readonly opGetNotifyCodeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetNotifyCodeConfiguration API call.

---

##### `SendNotifyCodeVerification`<sup>Required</sup> <a name="SendNotifyCodeVerification" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.SendNotifyCodeVerification"></a>

```typescript
public readonly SendNotifyCodeVerification: string[];
```

- *Type:* string[]

IAM actions required for the SendNotifyCodeVerification API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateBrandProfile`<sup>Required</sup> <a name="UpdateBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateBrandProfile"></a>

```typescript
public readonly UpdateBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrandProfile API call.

---

##### `UpdateBrandProfileAttribute`<sup>Required</sup> <a name="UpdateBrandProfileAttribute" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateBrandProfileAttribute"></a>

```typescript
public readonly UpdateBrandProfileAttribute: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrandProfileAttribute API call.

---

##### `UpdateBrandProfileFromRegistration`<sup>Required</sup> <a name="UpdateBrandProfileFromRegistration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateBrandProfileFromRegistration"></a>

```typescript
public readonly UpdateBrandProfileFromRegistration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateBrandProfileFromRegistration API call.

---

##### `UpdateNotifyCodeConfiguration`<sup>Required</sup> <a name="UpdateNotifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateNotifyCodeConfiguration"></a>

```typescript
public readonly UpdateNotifyCodeConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the UpdateNotifyCodeConfiguration API call.

---

##### `UpdateRegistrationsFromBrandProfile`<sup>Required</sup> <a name="UpdateRegistrationsFromBrandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.UpdateRegistrationsFromBrandProfile"></a>

```typescript
public readonly UpdateRegistrationsFromBrandProfile: string[];
```

- *Type:* string[]

IAM actions required for the UpdateRegistrationsFromBrandProfile API call.

---

##### `ValidateNotifyCodeVerification`<sup>Required</sup> <a name="ValidateNotifyCodeVerification" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingOperations.property.ValidateNotifyCodeVerification"></a>

```typescript
public readonly ValidateNotifyCodeVerification: string[];
```

- *Type:* string[]

IAM actions required for the ValidateNotifyCodeVerification API call.

---

### EndUserMessagingResources <a name="EndUserMessagingResources" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources"></a>

ARN builders, validators, and parsers for end-user-messaging resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.Initializer"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

new end_user_messaging.EndUserMessagingResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.brandProfile">brandProfile</a></code> | Builds an ARN for the brand-profile resource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.isValidBrandProfileArn">isValidBrandProfileArn</a></code> | Validates whether a string is a valid ARN for the brand-profile resource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.isValidNotifyCodeConfigurationArn">isValidNotifyCodeConfigurationArn</a></code> | Validates whether a string is a valid ARN for the notify-code-configuration resource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.notifyCodeConfiguration">notifyCodeConfiguration</a></code> | Builds an ARN for the notify-code-configuration resource. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.parseBrandProfileArn">parseBrandProfileArn</a></code> | Parses a brand-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.parseNotifyCodeConfigurationArn">parseNotifyCodeConfigurationArn</a></code> | Parses a notify-code-configuration ARN into its components. |

---

##### `brandProfile` <a name="brandProfile" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.brandProfile"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingResources.brandProfile(props: EndUserMessagingBrandProfileArnProps)
```

Builds an ARN for the brand-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.brandProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingBrandProfileArnProps">EndUserMessagingBrandProfileArnProps</a>

---

##### `isValidBrandProfileArn` <a name="isValidBrandProfileArn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.isValidBrandProfileArn"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingResources.isValidBrandProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the brand-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.isValidBrandProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidNotifyCodeConfigurationArn` <a name="isValidNotifyCodeConfigurationArn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.isValidNotifyCodeConfigurationArn"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingResources.isValidNotifyCodeConfigurationArn(arn: string)
```

Validates whether a string is a valid ARN for the notify-code-configuration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.isValidNotifyCodeConfigurationArn.parameter.arn"></a>

- *Type:* string

---

##### `notifyCodeConfiguration` <a name="notifyCodeConfiguration" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.notifyCodeConfiguration"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingResources.notifyCodeConfiguration(props: EndUserMessagingNotifyCodeConfigurationArnProps)
```

Builds an ARN for the notify-code-configuration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.notifyCodeConfiguration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.end_user_messaging.EndUserMessagingNotifyCodeConfigurationArnProps">EndUserMessagingNotifyCodeConfigurationArnProps</a>

---

##### `parseBrandProfileArn` <a name="parseBrandProfileArn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.parseBrandProfileArn"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingResources.parseBrandProfileArn(arn: string)
```

Parses a brand-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.parseBrandProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseNotifyCodeConfigurationArn` <a name="parseNotifyCodeConfigurationArn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.parseNotifyCodeConfigurationArn"></a>

```typescript
import { end_user_messaging } from '@cdk_utils/iam'

end_user_messaging.EndUserMessagingResources.parseNotifyCodeConfigurationArn(arn: string)
```

Parses a notify-code-configuration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.end_user_messaging.EndUserMessagingResources.parseNotifyCodeConfigurationArn.parameter.arn"></a>

- *Type:* string

---




