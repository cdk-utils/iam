# `cognito_idp` Submodule <a name="`cognito_idp` Submodule" id="@cdk_utils/iam.cognito_idp"></a>


## Structs <a name="Structs" id="Structs"></a>

### CognitoIdpUserpoolArnComponents <a name="CognitoIdpUserpoolArnComponents" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents"></a>

Parsed components of a userpool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

const cognitoIdpUserpoolArnComponents: cognito_idp.CognitoIdpUserpoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.userPoolId">userPoolId</a></code> | <code>string</code> | The UserPoolId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnComponents.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The UserPoolId component.

---

### CognitoIdpUserpoolArnProps <a name="CognitoIdpUserpoolArnProps" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps"></a>

Properties for building a userpool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

const cognitoIdpUserpoolArnProps: cognito_idp.CognitoIdpUserpoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.userPoolId">userPoolId</a></code> | <code>string</code> | The UserPoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.userPoolId"></a>

```typescript
public readonly userPoolId: string;
```

- *Type:* string

The UserPoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### CognitoIdpWebaclArnComponents <a name="CognitoIdpWebaclArnComponents" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents"></a>

Parsed components of a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

const cognitoIdpWebaclArnComponents: cognito_idp.CognitoIdpWebaclArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.id">id</a></code> | <code>string</code> | The Id component. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.name">name</a></code> | <code>string</code> | The Name component. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.scope">scope</a></code> | <code>string</code> | The Scope component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnComponents.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component.

---

### CognitoIdpWebaclArnProps <a name="CognitoIdpWebaclArnProps" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps"></a>

Properties for building a webacl ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

const cognitoIdpWebaclArnProps: cognito_idp.CognitoIdpWebaclArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.id">id</a></code> | <code>string</code> | The Id component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.name">name</a></code> | <code>string</code> | The Name component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.scope">scope</a></code> | <code>string</code> | The Scope component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The Id component of the ARN.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Name component of the ARN.

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The Scope component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdpActions <a name="CognitoIdpActions" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions"></a>

IAM action constants for the cognito-idp service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

new cognito_idp.CognitoIdpActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetCSVHeader">actionGetCSVHeader</a></code> | <code>string</code> | [Read] cognito-idp:GetCSVHeader. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetDevice">actionGetDevice</a></code> | <code>string</code> | [Read] cognito-idp:GetDevice. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetGroup">actionGetGroup</a></code> | <code>string</code> | [Read] cognito-idp:GetGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetIdentityProviderByIdentifier">actionGetIdentityProviderByIdentifier</a></code> | <code>string</code> | [Read] cognito-idp:GetIdentityProviderByIdentifier. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetLogDeliveryConfiguration">actionGetLogDeliveryConfiguration</a></code> | <code>string</code> | [Read] cognito-idp:GetLogDeliveryConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetProvisionedLimit">actionGetProvisionedLimit</a></code> | <code>string</code> | [Read] cognito-idp:GetProvisionedLimit. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetSigningCertificate">actionGetSigningCertificate</a></code> | <code>string</code> | [Read] cognito-idp:GetSigningCertificate. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetTokensFromRefreshToken">actionGetTokensFromRefreshToken</a></code> | <code>string</code> | [Write] cognito-idp:GetTokensFromRefreshToken. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUICustomization">actionGetUICustomization</a></code> | <code>string</code> | [Read] cognito-idp:GetUICustomization. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUser">actionGetUser</a></code> | <code>string</code> | [Read] cognito-idp:GetUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUserAttributeVerificationCode">actionGetUserAttributeVerificationCode</a></code> | <code>string</code> | [Read] cognito-idp:GetUserAttributeVerificationCode. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUserPoolMfaConfig">actionGetUserPoolMfaConfig</a></code> | <code>string</code> | [Read] cognito-idp:GetUserPoolMfaConfig. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetWebACLForResource">actionGetWebACLForResource</a></code> | <code>string</code> | [Read] cognito-idp:GetWebACLForResource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetLogDeliveryConfiguration">actionSetLogDeliveryConfiguration</a></code> | <code>string</code> | [Write] cognito-idp:SetLogDeliveryConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetRiskConfiguration">actionSetRiskConfiguration</a></code> | <code>string</code> | [Write] cognito-idp:SetRiskConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUICustomization">actionSetUICustomization</a></code> | <code>string</code> | [Write] cognito-idp:SetUICustomization. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUserMFAPreference">actionSetUserMFAPreference</a></code> | <code>string</code> | [Write] cognito-idp:SetUserMFAPreference. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUserPoolMfaConfig">actionSetUserPoolMfaConfig</a></code> | <code>string</code> | [Write] cognito-idp:SetUserPoolMfaConfig. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUserSettings">actionSetUserSettings</a></code> | <code>string</code> | [Write] cognito-idp:SetUserSettings. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AddCustomAttributes">AddCustomAttributes</a></code> | <code>string</code> | [Write] cognito-idp:AddCustomAttributes. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AddUserPoolClientSecret">AddUserPoolClientSecret</a></code> | <code>string</code> | [Write] cognito-idp:AddUserPoolClientSecret. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminAddUserToGroup">AdminAddUserToGroup</a></code> | <code>string</code> | [Write] cognito-idp:AdminAddUserToGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminConfirmSignUp">AdminConfirmSignUp</a></code> | <code>string</code> | [Write] cognito-idp:AdminConfirmSignUp. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminCreateUser">AdminCreateUser</a></code> | <code>string</code> | [Write] cognito-idp:AdminCreateUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDeleteUser">AdminDeleteUser</a></code> | <code>string</code> | [Write] cognito-idp:AdminDeleteUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDeleteUserAttributes">AdminDeleteUserAttributes</a></code> | <code>string</code> | [Write] cognito-idp:AdminDeleteUserAttributes. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDisableProviderForUser">AdminDisableProviderForUser</a></code> | <code>string</code> | [Write] cognito-idp:AdminDisableProviderForUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDisableUser">AdminDisableUser</a></code> | <code>string</code> | [Write] cognito-idp:AdminDisableUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminEnableUser">AdminEnableUser</a></code> | <code>string</code> | [Write] cognito-idp:AdminEnableUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminForgetDevice">AdminForgetDevice</a></code> | <code>string</code> | [Write] cognito-idp:AdminForgetDevice. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminGetDevice">AdminGetDevice</a></code> | <code>string</code> | [Read] cognito-idp:AdminGetDevice. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminGetUser">AdminGetUser</a></code> | <code>string</code> | [Read] cognito-idp:AdminGetUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminGetUserAuthFactors">AdminGetUserAuthFactors</a></code> | <code>string</code> | [Read] cognito-idp:AdminGetUserAuthFactors. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminInitiateAuth">AdminInitiateAuth</a></code> | <code>string</code> | [Write] cognito-idp:AdminInitiateAuth. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminLinkProviderForUser">AdminLinkProviderForUser</a></code> | <code>string</code> | [Write] cognito-idp:AdminLinkProviderForUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminListDevices">AdminListDevices</a></code> | <code>string</code> | [List] cognito-idp:AdminListDevices. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminListGroupsForUser">AdminListGroupsForUser</a></code> | <code>string</code> | [List] cognito-idp:AdminListGroupsForUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminListUserAuthEvents">AdminListUserAuthEvents</a></code> | <code>string</code> | [Read] cognito-idp:AdminListUserAuthEvents. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminRemoveUserFromGroup">AdminRemoveUserFromGroup</a></code> | <code>string</code> | [Write] cognito-idp:AdminRemoveUserFromGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminResetUserPassword">AdminResetUserPassword</a></code> | <code>string</code> | [Write] cognito-idp:AdminResetUserPassword. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminRespondToAuthChallenge">AdminRespondToAuthChallenge</a></code> | <code>string</code> | [Write] cognito-idp:AdminRespondToAuthChallenge. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminSetUserMFAPreference">AdminSetUserMFAPreference</a></code> | <code>string</code> | [Write] cognito-idp:AdminSetUserMFAPreference. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminSetUserPassword">AdminSetUserPassword</a></code> | <code>string</code> | [Write] cognito-idp:AdminSetUserPassword. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminSetUserSettings">AdminSetUserSettings</a></code> | <code>string</code> | [Write] cognito-idp:AdminSetUserSettings. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUpdateAuthEventFeedback">AdminUpdateAuthEventFeedback</a></code> | <code>string</code> | [Write] cognito-idp:AdminUpdateAuthEventFeedback. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUpdateDeviceStatus">AdminUpdateDeviceStatus</a></code> | <code>string</code> | [Write] cognito-idp:AdminUpdateDeviceStatus. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUpdateUserAttributes">AdminUpdateUserAttributes</a></code> | <code>string</code> | [Write] cognito-idp:AdminUpdateUserAttributes. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUserGlobalSignOut">AdminUserGlobalSignOut</a></code> | <code>string</code> | [Write] cognito-idp:AdminUserGlobalSignOut. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AssociateSoftwareToken">AssociateSoftwareToken</a></code> | <code>string</code> | [Write] cognito-idp:AssociateSoftwareToken. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AssociateWebACL">AssociateWebACL</a></code> | <code>string</code> | [Write] cognito-idp:AssociateWebACL. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ChangePassword">ChangePassword</a></code> | <code>string</code> | [Write] cognito-idp:ChangePassword. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ConfirmDevice">ConfirmDevice</a></code> | <code>string</code> | [Write] cognito-idp:ConfirmDevice. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ConfirmForgotPassword">ConfirmForgotPassword</a></code> | <code>string</code> | [Write] cognito-idp:ConfirmForgotPassword. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ConfirmSignUp">ConfirmSignUp</a></code> | <code>string</code> | [Write] cognito-idp:ConfirmSignUp. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateGroup">CreateGroup</a></code> | <code>string</code> | [Write] cognito-idp:CreateGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateIdentityProvider">CreateIdentityProvider</a></code> | <code>string</code> | [Write] cognito-idp:CreateIdentityProvider. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateManagedLoginBranding">CreateManagedLoginBranding</a></code> | <code>string</code> | [Write] cognito-idp:CreateManagedLoginBranding. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateResourceServer">CreateResourceServer</a></code> | <code>string</code> | [Write] cognito-idp:CreateResourceServer. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateTerms">CreateTerms</a></code> | <code>string</code> | [Write] cognito-idp:CreateTerms. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserImportJob">CreateUserImportJob</a></code> | <code>string</code> | [Write] cognito-idp:CreateUserImportJob. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPool">CreateUserPool</a></code> | <code>string</code> | [Write] cognito-idp:CreateUserPool. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPoolClient">CreateUserPoolClient</a></code> | <code>string</code> | [Write] cognito-idp:CreateUserPoolClient. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPoolDomain">CreateUserPoolDomain</a></code> | <code>string</code> | [Write] cognito-idp:CreateUserPoolDomain. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPoolReplica">CreateUserPoolReplica</a></code> | <code>string</code> | [Write] cognito-idp:CreateUserPoolReplica. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteGroup">DeleteGroup</a></code> | <code>string</code> | [Write] cognito-idp:DeleteGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteIdentityProvider">DeleteIdentityProvider</a></code> | <code>string</code> | [Write] cognito-idp:DeleteIdentityProvider. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteManagedLoginBranding">DeleteManagedLoginBranding</a></code> | <code>string</code> | [Write] cognito-idp:DeleteManagedLoginBranding. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteResourceServer">DeleteResourceServer</a></code> | <code>string</code> | [Write] cognito-idp:DeleteResourceServer. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteTerms">DeleteTerms</a></code> | <code>string</code> | [Write] cognito-idp:DeleteTerms. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUser">DeleteUser</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUser. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserAttributes">DeleteUserAttributes</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUserAttributes. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPool">DeleteUserPool</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUserPool. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolClient">DeleteUserPoolClient</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUserPoolClient. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolClientSecret">DeleteUserPoolClientSecret</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUserPoolClientSecret. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolDomain">DeleteUserPoolDomain</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUserPoolDomain. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolReplica">DeleteUserPoolReplica</a></code> | <code>string</code> | [Write] cognito-idp:DeleteUserPoolReplica. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeIdentityProvider">DescribeIdentityProvider</a></code> | <code>string</code> | [Read] cognito-idp:DescribeIdentityProvider. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeManagedLoginBranding">DescribeManagedLoginBranding</a></code> | <code>string</code> | [Read] cognito-idp:DescribeManagedLoginBranding. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeManagedLoginBrandingByClient">DescribeManagedLoginBrandingByClient</a></code> | <code>string</code> | [Read] cognito-idp:DescribeManagedLoginBrandingByClient. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeResourceServer">DescribeResourceServer</a></code> | <code>string</code> | [Read] cognito-idp:DescribeResourceServer. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeRiskConfiguration">DescribeRiskConfiguration</a></code> | <code>string</code> | [Read] cognito-idp:DescribeRiskConfiguration. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeTerms">DescribeTerms</a></code> | <code>string</code> | [Read] cognito-idp:DescribeTerms. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserImportJob">DescribeUserImportJob</a></code> | <code>string</code> | [Read] cognito-idp:DescribeUserImportJob. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserPool">DescribeUserPool</a></code> | <code>string</code> | [Read] cognito-idp:DescribeUserPool. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserPoolClient">DescribeUserPoolClient</a></code> | <code>string</code> | [Read] cognito-idp:DescribeUserPoolClient. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserPoolDomain">DescribeUserPoolDomain</a></code> | <code>string</code> | [Read] cognito-idp:DescribeUserPoolDomain. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DisassociateWebACL">DisassociateWebACL</a></code> | <code>string</code> | [Write] cognito-idp:DisassociateWebACL. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ForgetDevice">ForgetDevice</a></code> | <code>string</code> | [Write] cognito-idp:ForgetDevice. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ForgotPassword">ForgotPassword</a></code> | <code>string</code> | [Write] cognito-idp:ForgotPassword. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.GlobalSignOut">GlobalSignOut</a></code> | <code>string</code> | [Write] cognito-idp:GlobalSignOut. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.InitiateAuth">InitiateAuth</a></code> | <code>string</code> | [Write] cognito-idp:InitiateAuth. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListDevices">ListDevices</a></code> | <code>string</code> | [List] cognito-idp:ListDevices. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListGroups">ListGroups</a></code> | <code>string</code> | [List] cognito-idp:ListGroups. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListIdentityProviders">ListIdentityProviders</a></code> | <code>string</code> | [List] cognito-idp:ListIdentityProviders. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListResourceServers">ListResourceServers</a></code> | <code>string</code> | [List] cognito-idp:ListResourceServers. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListResourcesForWebACL">ListResourcesForWebACL</a></code> | <code>string</code> | [List] cognito-idp:ListResourcesForWebACL. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [List] cognito-idp:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListTerms">ListTerms</a></code> | <code>string</code> | [List] cognito-idp:ListTerms. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserImportJobs">ListUserImportJobs</a></code> | <code>string</code> | [List] cognito-idp:ListUserImportJobs. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPoolClients">ListUserPoolClients</a></code> | <code>string</code> | [List] cognito-idp:ListUserPoolClients. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPoolClientSecrets">ListUserPoolClientSecrets</a></code> | <code>string</code> | [List] cognito-idp:ListUserPoolClientSecrets. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPoolReplicas">ListUserPoolReplicas</a></code> | <code>string</code> | [List] cognito-idp:ListUserPoolReplicas. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPools">ListUserPools</a></code> | <code>string</code> | [List] cognito-idp:ListUserPools. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUsers">ListUsers</a></code> | <code>string</code> | [List] cognito-idp:ListUsers. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUsersInGroup">ListUsersInGroup</a></code> | <code>string</code> | [List] cognito-idp:ListUsersInGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ResendConfirmationCode">ResendConfirmationCode</a></code> | <code>string</code> | [Write] cognito-idp:ResendConfirmationCode. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.RespondToAuthChallenge">RespondToAuthChallenge</a></code> | <code>string</code> | [Write] cognito-idp:RespondToAuthChallenge. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.RevokeToken">RevokeToken</a></code> | <code>string</code> | [Write] cognito-idp:RevokeToken. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.SignUp">SignUp</a></code> | <code>string</code> | [Write] cognito-idp:SignUp. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.StartUserImportJob">StartUserImportJob</a></code> | <code>string</code> | [Write] cognito-idp:StartUserImportJob. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.StopUserImportJob">StopUserImportJob</a></code> | <code>string</code> | [Write] cognito-idp:StopUserImportJob. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cognito-idp:TagResource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cognito-idp:UntagResource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateAuthEventFeedback">UpdateAuthEventFeedback</a></code> | <code>string</code> | [Write] cognito-idp:UpdateAuthEventFeedback. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateDeviceStatus">UpdateDeviceStatus</a></code> | <code>string</code> | [Write] cognito-idp:UpdateDeviceStatus. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateGroup">UpdateGroup</a></code> | <code>string</code> | [Write] cognito-idp:UpdateGroup. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateIdentityProvider">UpdateIdentityProvider</a></code> | <code>string</code> | [Write] cognito-idp:UpdateIdentityProvider. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateManagedLoginBranding">UpdateManagedLoginBranding</a></code> | <code>string</code> | [Write] cognito-idp:UpdateManagedLoginBranding. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateProvisionedLimit">UpdateProvisionedLimit</a></code> | <code>string</code> | [Write] cognito-idp:UpdateProvisionedLimit. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateResourceServer">UpdateResourceServer</a></code> | <code>string</code> | [Write] cognito-idp:UpdateResourceServer. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateTerms">UpdateTerms</a></code> | <code>string</code> | [Write] cognito-idp:UpdateTerms. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserAttributes">UpdateUserAttributes</a></code> | <code>string</code> | [Write] cognito-idp:UpdateUserAttributes. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPool">UpdateUserPool</a></code> | <code>string</code> | [Write] cognito-idp:UpdateUserPool. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPoolClient">UpdateUserPoolClient</a></code> | <code>string</code> | [Write] cognito-idp:UpdateUserPoolClient. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPoolDomain">UpdateUserPoolDomain</a></code> | <code>string</code> | [Write] cognito-idp:UpdateUserPoolDomain. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPoolReplica">UpdateUserPoolReplica</a></code> | <code>string</code> | [Write] cognito-idp:UpdateUserPoolReplica. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.VerifySoftwareToken">VerifySoftwareToken</a></code> | <code>string</code> | [Write] cognito-idp:VerifySoftwareToken. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.VerifyUserAttribute">VerifyUserAttribute</a></code> | <code>string</code> | [Write] cognito-idp:VerifyUserAttribute. |

---

##### `actionGetCSVHeader`<sup>Required</sup> <a name="actionGetCSVHeader" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetCSVHeader"></a>

```typescript
public readonly actionGetCSVHeader: string;
```

- *Type:* string

[Read] cognito-idp:GetCSVHeader.

---

##### `actionGetDevice`<sup>Required</sup> <a name="actionGetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetDevice"></a>

```typescript
public readonly actionGetDevice: string;
```

- *Type:* string

[Read] cognito-idp:GetDevice.

---

##### `actionGetGroup`<sup>Required</sup> <a name="actionGetGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetGroup"></a>

```typescript
public readonly actionGetGroup: string;
```

- *Type:* string

[Read] cognito-idp:GetGroup.

---

##### `actionGetIdentityProviderByIdentifier`<sup>Required</sup> <a name="actionGetIdentityProviderByIdentifier" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetIdentityProviderByIdentifier"></a>

```typescript
public readonly actionGetIdentityProviderByIdentifier: string;
```

- *Type:* string

[Read] cognito-idp:GetIdentityProviderByIdentifier.

---

##### `actionGetLogDeliveryConfiguration`<sup>Required</sup> <a name="actionGetLogDeliveryConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetLogDeliveryConfiguration"></a>

```typescript
public readonly actionGetLogDeliveryConfiguration: string;
```

- *Type:* string

[Read] cognito-idp:GetLogDeliveryConfiguration.

---

##### `actionGetProvisionedLimit`<sup>Required</sup> <a name="actionGetProvisionedLimit" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetProvisionedLimit"></a>

```typescript
public readonly actionGetProvisionedLimit: string;
```

- *Type:* string

[Read] cognito-idp:GetProvisionedLimit.

---

##### `actionGetSigningCertificate`<sup>Required</sup> <a name="actionGetSigningCertificate" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetSigningCertificate"></a>

```typescript
public readonly actionGetSigningCertificate: string;
```

- *Type:* string

[Read] cognito-idp:GetSigningCertificate.

---

##### `actionGetTokensFromRefreshToken`<sup>Required</sup> <a name="actionGetTokensFromRefreshToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetTokensFromRefreshToken"></a>

```typescript
public readonly actionGetTokensFromRefreshToken: string;
```

- *Type:* string

[Write] cognito-idp:GetTokensFromRefreshToken.

---

##### `actionGetUICustomization`<sup>Required</sup> <a name="actionGetUICustomization" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUICustomization"></a>

```typescript
public readonly actionGetUICustomization: string;
```

- *Type:* string

[Read] cognito-idp:GetUICustomization.

---

##### `actionGetUser`<sup>Required</sup> <a name="actionGetUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUser"></a>

```typescript
public readonly actionGetUser: string;
```

- *Type:* string

[Read] cognito-idp:GetUser.

---

##### `actionGetUserAttributeVerificationCode`<sup>Required</sup> <a name="actionGetUserAttributeVerificationCode" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUserAttributeVerificationCode"></a>

```typescript
public readonly actionGetUserAttributeVerificationCode: string;
```

- *Type:* string

[Read] cognito-idp:GetUserAttributeVerificationCode.

---

##### `actionGetUserPoolMfaConfig`<sup>Required</sup> <a name="actionGetUserPoolMfaConfig" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetUserPoolMfaConfig"></a>

```typescript
public readonly actionGetUserPoolMfaConfig: string;
```

- *Type:* string

[Read] cognito-idp:GetUserPoolMfaConfig.

---

##### `actionGetWebACLForResource`<sup>Required</sup> <a name="actionGetWebACLForResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionGetWebACLForResource"></a>

```typescript
public readonly actionGetWebACLForResource: string;
```

- *Type:* string

[Read] cognito-idp:GetWebACLForResource.

---

##### `actionSetLogDeliveryConfiguration`<sup>Required</sup> <a name="actionSetLogDeliveryConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetLogDeliveryConfiguration"></a>

```typescript
public readonly actionSetLogDeliveryConfiguration: string;
```

- *Type:* string

[Write] cognito-idp:SetLogDeliveryConfiguration.

---

##### `actionSetRiskConfiguration`<sup>Required</sup> <a name="actionSetRiskConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetRiskConfiguration"></a>

```typescript
public readonly actionSetRiskConfiguration: string;
```

- *Type:* string

[Write] cognito-idp:SetRiskConfiguration.

---

##### `actionSetUICustomization`<sup>Required</sup> <a name="actionSetUICustomization" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUICustomization"></a>

```typescript
public readonly actionSetUICustomization: string;
```

- *Type:* string

[Write] cognito-idp:SetUICustomization.

---

##### `actionSetUserMFAPreference`<sup>Required</sup> <a name="actionSetUserMFAPreference" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUserMFAPreference"></a>

```typescript
public readonly actionSetUserMFAPreference: string;
```

- *Type:* string

[Write] cognito-idp:SetUserMFAPreference.

---

##### `actionSetUserPoolMfaConfig`<sup>Required</sup> <a name="actionSetUserPoolMfaConfig" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUserPoolMfaConfig"></a>

```typescript
public readonly actionSetUserPoolMfaConfig: string;
```

- *Type:* string

[Write] cognito-idp:SetUserPoolMfaConfig.

---

##### `actionSetUserSettings`<sup>Required</sup> <a name="actionSetUserSettings" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.actionSetUserSettings"></a>

```typescript
public readonly actionSetUserSettings: string;
```

- *Type:* string

[Write] cognito-idp:SetUserSettings.

---

##### `AddCustomAttributes`<sup>Required</sup> <a name="AddCustomAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AddCustomAttributes"></a>

```typescript
public readonly AddCustomAttributes: string;
```

- *Type:* string

[Write] cognito-idp:AddCustomAttributes.

---

##### `AddUserPoolClientSecret`<sup>Required</sup> <a name="AddUserPoolClientSecret" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AddUserPoolClientSecret"></a>

```typescript
public readonly AddUserPoolClientSecret: string;
```

- *Type:* string

[Write] cognito-idp:AddUserPoolClientSecret.

---

##### `AdminAddUserToGroup`<sup>Required</sup> <a name="AdminAddUserToGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminAddUserToGroup"></a>

```typescript
public readonly AdminAddUserToGroup: string;
```

- *Type:* string

[Write] cognito-idp:AdminAddUserToGroup.

---

##### `AdminConfirmSignUp`<sup>Required</sup> <a name="AdminConfirmSignUp" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminConfirmSignUp"></a>

```typescript
public readonly AdminConfirmSignUp: string;
```

- *Type:* string

[Write] cognito-idp:AdminConfirmSignUp.

---

##### `AdminCreateUser`<sup>Required</sup> <a name="AdminCreateUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminCreateUser"></a>

```typescript
public readonly AdminCreateUser: string;
```

- *Type:* string

[Write] cognito-idp:AdminCreateUser.

---

##### `AdminDeleteUser`<sup>Required</sup> <a name="AdminDeleteUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDeleteUser"></a>

```typescript
public readonly AdminDeleteUser: string;
```

- *Type:* string

[Write] cognito-idp:AdminDeleteUser.

---

##### `AdminDeleteUserAttributes`<sup>Required</sup> <a name="AdminDeleteUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDeleteUserAttributes"></a>

```typescript
public readonly AdminDeleteUserAttributes: string;
```

- *Type:* string

[Write] cognito-idp:AdminDeleteUserAttributes.

---

##### `AdminDisableProviderForUser`<sup>Required</sup> <a name="AdminDisableProviderForUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDisableProviderForUser"></a>

```typescript
public readonly AdminDisableProviderForUser: string;
```

- *Type:* string

[Write] cognito-idp:AdminDisableProviderForUser.

---

##### `AdminDisableUser`<sup>Required</sup> <a name="AdminDisableUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminDisableUser"></a>

```typescript
public readonly AdminDisableUser: string;
```

- *Type:* string

[Write] cognito-idp:AdminDisableUser.

---

##### `AdminEnableUser`<sup>Required</sup> <a name="AdminEnableUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminEnableUser"></a>

```typescript
public readonly AdminEnableUser: string;
```

- *Type:* string

[Write] cognito-idp:AdminEnableUser.

---

##### `AdminForgetDevice`<sup>Required</sup> <a name="AdminForgetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminForgetDevice"></a>

```typescript
public readonly AdminForgetDevice: string;
```

- *Type:* string

[Write] cognito-idp:AdminForgetDevice.

---

##### `AdminGetDevice`<sup>Required</sup> <a name="AdminGetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminGetDevice"></a>

```typescript
public readonly AdminGetDevice: string;
```

- *Type:* string

[Read] cognito-idp:AdminGetDevice.

---

##### `AdminGetUser`<sup>Required</sup> <a name="AdminGetUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminGetUser"></a>

```typescript
public readonly AdminGetUser: string;
```

- *Type:* string

[Read] cognito-idp:AdminGetUser.

---

##### `AdminGetUserAuthFactors`<sup>Required</sup> <a name="AdminGetUserAuthFactors" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminGetUserAuthFactors"></a>

```typescript
public readonly AdminGetUserAuthFactors: string;
```

- *Type:* string

[Read] cognito-idp:AdminGetUserAuthFactors.

---

##### `AdminInitiateAuth`<sup>Required</sup> <a name="AdminInitiateAuth" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminInitiateAuth"></a>

```typescript
public readonly AdminInitiateAuth: string;
```

- *Type:* string

[Write] cognito-idp:AdminInitiateAuth.

---

##### `AdminLinkProviderForUser`<sup>Required</sup> <a name="AdminLinkProviderForUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminLinkProviderForUser"></a>

```typescript
public readonly AdminLinkProviderForUser: string;
```

- *Type:* string

[Write] cognito-idp:AdminLinkProviderForUser.

---

##### `AdminListDevices`<sup>Required</sup> <a name="AdminListDevices" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminListDevices"></a>

```typescript
public readonly AdminListDevices: string;
```

- *Type:* string

[List] cognito-idp:AdminListDevices.

---

##### `AdminListGroupsForUser`<sup>Required</sup> <a name="AdminListGroupsForUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminListGroupsForUser"></a>

```typescript
public readonly AdminListGroupsForUser: string;
```

- *Type:* string

[List] cognito-idp:AdminListGroupsForUser.

---

##### `AdminListUserAuthEvents`<sup>Required</sup> <a name="AdminListUserAuthEvents" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminListUserAuthEvents"></a>

```typescript
public readonly AdminListUserAuthEvents: string;
```

- *Type:* string

[Read] cognito-idp:AdminListUserAuthEvents.

---

##### `AdminRemoveUserFromGroup`<sup>Required</sup> <a name="AdminRemoveUserFromGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminRemoveUserFromGroup"></a>

```typescript
public readonly AdminRemoveUserFromGroup: string;
```

- *Type:* string

[Write] cognito-idp:AdminRemoveUserFromGroup.

---

##### `AdminResetUserPassword`<sup>Required</sup> <a name="AdminResetUserPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminResetUserPassword"></a>

```typescript
public readonly AdminResetUserPassword: string;
```

- *Type:* string

[Write] cognito-idp:AdminResetUserPassword.

---

##### `AdminRespondToAuthChallenge`<sup>Required</sup> <a name="AdminRespondToAuthChallenge" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminRespondToAuthChallenge"></a>

```typescript
public readonly AdminRespondToAuthChallenge: string;
```

- *Type:* string

[Write] cognito-idp:AdminRespondToAuthChallenge.

---

##### `AdminSetUserMFAPreference`<sup>Required</sup> <a name="AdminSetUserMFAPreference" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminSetUserMFAPreference"></a>

```typescript
public readonly AdminSetUserMFAPreference: string;
```

- *Type:* string

[Write] cognito-idp:AdminSetUserMFAPreference.

---

##### `AdminSetUserPassword`<sup>Required</sup> <a name="AdminSetUserPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminSetUserPassword"></a>

```typescript
public readonly AdminSetUserPassword: string;
```

- *Type:* string

[Write] cognito-idp:AdminSetUserPassword.

---

##### `AdminSetUserSettings`<sup>Required</sup> <a name="AdminSetUserSettings" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminSetUserSettings"></a>

```typescript
public readonly AdminSetUserSettings: string;
```

- *Type:* string

[Write] cognito-idp:AdminSetUserSettings.

---

##### `AdminUpdateAuthEventFeedback`<sup>Required</sup> <a name="AdminUpdateAuthEventFeedback" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUpdateAuthEventFeedback"></a>

```typescript
public readonly AdminUpdateAuthEventFeedback: string;
```

- *Type:* string

[Write] cognito-idp:AdminUpdateAuthEventFeedback.

---

##### `AdminUpdateDeviceStatus`<sup>Required</sup> <a name="AdminUpdateDeviceStatus" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUpdateDeviceStatus"></a>

```typescript
public readonly AdminUpdateDeviceStatus: string;
```

- *Type:* string

[Write] cognito-idp:AdminUpdateDeviceStatus.

---

##### `AdminUpdateUserAttributes`<sup>Required</sup> <a name="AdminUpdateUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUpdateUserAttributes"></a>

```typescript
public readonly AdminUpdateUserAttributes: string;
```

- *Type:* string

[Write] cognito-idp:AdminUpdateUserAttributes.

---

##### `AdminUserGlobalSignOut`<sup>Required</sup> <a name="AdminUserGlobalSignOut" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AdminUserGlobalSignOut"></a>

```typescript
public readonly AdminUserGlobalSignOut: string;
```

- *Type:* string

[Write] cognito-idp:AdminUserGlobalSignOut.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateSoftwareToken`<sup>Required</sup> <a name="AssociateSoftwareToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AssociateSoftwareToken"></a>

```typescript
public readonly AssociateSoftwareToken: string;
```

- *Type:* string

[Write] cognito-idp:AssociateSoftwareToken.

---

##### `AssociateWebACL`<sup>Required</sup> <a name="AssociateWebACL" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.AssociateWebACL"></a>

```typescript
public readonly AssociateWebACL: string;
```

- *Type:* string

[Write] cognito-idp:AssociateWebACL.

---

##### `ChangePassword`<sup>Required</sup> <a name="ChangePassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ChangePassword"></a>

```typescript
public readonly ChangePassword: string;
```

- *Type:* string

[Write] cognito-idp:ChangePassword.

---

##### `ConfirmDevice`<sup>Required</sup> <a name="ConfirmDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ConfirmDevice"></a>

```typescript
public readonly ConfirmDevice: string;
```

- *Type:* string

[Write] cognito-idp:ConfirmDevice.

---

##### `ConfirmForgotPassword`<sup>Required</sup> <a name="ConfirmForgotPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ConfirmForgotPassword"></a>

```typescript
public readonly ConfirmForgotPassword: string;
```

- *Type:* string

[Write] cognito-idp:ConfirmForgotPassword.

---

##### `ConfirmSignUp`<sup>Required</sup> <a name="ConfirmSignUp" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ConfirmSignUp"></a>

```typescript
public readonly ConfirmSignUp: string;
```

- *Type:* string

[Write] cognito-idp:ConfirmSignUp.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string;
```

- *Type:* string

[Write] cognito-idp:CreateGroup.

---

##### `CreateIdentityProvider`<sup>Required</sup> <a name="CreateIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateIdentityProvider"></a>

```typescript
public readonly CreateIdentityProvider: string;
```

- *Type:* string

[Write] cognito-idp:CreateIdentityProvider.

---

##### `CreateManagedLoginBranding`<sup>Required</sup> <a name="CreateManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateManagedLoginBranding"></a>

```typescript
public readonly CreateManagedLoginBranding: string;
```

- *Type:* string

[Write] cognito-idp:CreateManagedLoginBranding.

---

##### `CreateResourceServer`<sup>Required</sup> <a name="CreateResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateResourceServer"></a>

```typescript
public readonly CreateResourceServer: string;
```

- *Type:* string

[Write] cognito-idp:CreateResourceServer.

---

##### `CreateTerms`<sup>Required</sup> <a name="CreateTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateTerms"></a>

```typescript
public readonly CreateTerms: string;
```

- *Type:* string

[Write] cognito-idp:CreateTerms.

---

##### `CreateUserImportJob`<sup>Required</sup> <a name="CreateUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserImportJob"></a>

```typescript
public readonly CreateUserImportJob: string;
```

- *Type:* string

[Write] cognito-idp:CreateUserImportJob.

---

##### `CreateUserPool`<sup>Required</sup> <a name="CreateUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPool"></a>

```typescript
public readonly CreateUserPool: string;
```

- *Type:* string

[Write] cognito-idp:CreateUserPool.

---

##### `CreateUserPoolClient`<sup>Required</sup> <a name="CreateUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPoolClient"></a>

```typescript
public readonly CreateUserPoolClient: string;
```

- *Type:* string

[Write] cognito-idp:CreateUserPoolClient.

---

##### `CreateUserPoolDomain`<sup>Required</sup> <a name="CreateUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPoolDomain"></a>

```typescript
public readonly CreateUserPoolDomain: string;
```

- *Type:* string

[Write] cognito-idp:CreateUserPoolDomain.

---

##### `CreateUserPoolReplica`<sup>Required</sup> <a name="CreateUserPoolReplica" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.CreateUserPoolReplica"></a>

```typescript
public readonly CreateUserPoolReplica: string;
```

- *Type:* string

[Write] cognito-idp:CreateUserPoolReplica.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string;
```

- *Type:* string

[Write] cognito-idp:DeleteGroup.

---

##### `DeleteIdentityProvider`<sup>Required</sup> <a name="DeleteIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteIdentityProvider"></a>

```typescript
public readonly DeleteIdentityProvider: string;
```

- *Type:* string

[Write] cognito-idp:DeleteIdentityProvider.

---

##### `DeleteManagedLoginBranding`<sup>Required</sup> <a name="DeleteManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteManagedLoginBranding"></a>

```typescript
public readonly DeleteManagedLoginBranding: string;
```

- *Type:* string

[Write] cognito-idp:DeleteManagedLoginBranding.

---

##### `DeleteResourceServer`<sup>Required</sup> <a name="DeleteResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteResourceServer"></a>

```typescript
public readonly DeleteResourceServer: string;
```

- *Type:* string

[Write] cognito-idp:DeleteResourceServer.

---

##### `DeleteTerms`<sup>Required</sup> <a name="DeleteTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteTerms"></a>

```typescript
public readonly DeleteTerms: string;
```

- *Type:* string

[Write] cognito-idp:DeleteTerms.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUser.

---

##### `DeleteUserAttributes`<sup>Required</sup> <a name="DeleteUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserAttributes"></a>

```typescript
public readonly DeleteUserAttributes: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUserAttributes.

---

##### `DeleteUserPool`<sup>Required</sup> <a name="DeleteUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPool"></a>

```typescript
public readonly DeleteUserPool: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUserPool.

---

##### `DeleteUserPoolClient`<sup>Required</sup> <a name="DeleteUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolClient"></a>

```typescript
public readonly DeleteUserPoolClient: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUserPoolClient.

---

##### `DeleteUserPoolClientSecret`<sup>Required</sup> <a name="DeleteUserPoolClientSecret" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolClientSecret"></a>

```typescript
public readonly DeleteUserPoolClientSecret: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUserPoolClientSecret.

---

##### `DeleteUserPoolDomain`<sup>Required</sup> <a name="DeleteUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolDomain"></a>

```typescript
public readonly DeleteUserPoolDomain: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUserPoolDomain.

---

##### `DeleteUserPoolReplica`<sup>Required</sup> <a name="DeleteUserPoolReplica" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DeleteUserPoolReplica"></a>

```typescript
public readonly DeleteUserPoolReplica: string;
```

- *Type:* string

[Write] cognito-idp:DeleteUserPoolReplica.

---

##### `DescribeIdentityProvider`<sup>Required</sup> <a name="DescribeIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeIdentityProvider"></a>

```typescript
public readonly DescribeIdentityProvider: string;
```

- *Type:* string

[Read] cognito-idp:DescribeIdentityProvider.

---

##### `DescribeManagedLoginBranding`<sup>Required</sup> <a name="DescribeManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeManagedLoginBranding"></a>

```typescript
public readonly DescribeManagedLoginBranding: string;
```

- *Type:* string

[Read] cognito-idp:DescribeManagedLoginBranding.

---

##### `DescribeManagedLoginBrandingByClient`<sup>Required</sup> <a name="DescribeManagedLoginBrandingByClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeManagedLoginBrandingByClient"></a>

```typescript
public readonly DescribeManagedLoginBrandingByClient: string;
```

- *Type:* string

[Read] cognito-idp:DescribeManagedLoginBrandingByClient.

---

##### `DescribeResourceServer`<sup>Required</sup> <a name="DescribeResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeResourceServer"></a>

```typescript
public readonly DescribeResourceServer: string;
```

- *Type:* string

[Read] cognito-idp:DescribeResourceServer.

---

##### `DescribeRiskConfiguration`<sup>Required</sup> <a name="DescribeRiskConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeRiskConfiguration"></a>

```typescript
public readonly DescribeRiskConfiguration: string;
```

- *Type:* string

[Read] cognito-idp:DescribeRiskConfiguration.

---

##### `DescribeTerms`<sup>Required</sup> <a name="DescribeTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeTerms"></a>

```typescript
public readonly DescribeTerms: string;
```

- *Type:* string

[Read] cognito-idp:DescribeTerms.

---

##### `DescribeUserImportJob`<sup>Required</sup> <a name="DescribeUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserImportJob"></a>

```typescript
public readonly DescribeUserImportJob: string;
```

- *Type:* string

[Read] cognito-idp:DescribeUserImportJob.

---

##### `DescribeUserPool`<sup>Required</sup> <a name="DescribeUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserPool"></a>

```typescript
public readonly DescribeUserPool: string;
```

- *Type:* string

[Read] cognito-idp:DescribeUserPool.

---

##### `DescribeUserPoolClient`<sup>Required</sup> <a name="DescribeUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserPoolClient"></a>

```typescript
public readonly DescribeUserPoolClient: string;
```

- *Type:* string

[Read] cognito-idp:DescribeUserPoolClient.

---

##### `DescribeUserPoolDomain`<sup>Required</sup> <a name="DescribeUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DescribeUserPoolDomain"></a>

```typescript
public readonly DescribeUserPoolDomain: string;
```

- *Type:* string

[Read] cognito-idp:DescribeUserPoolDomain.

---

##### `DisassociateWebACL`<sup>Required</sup> <a name="DisassociateWebACL" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.DisassociateWebACL"></a>

```typescript
public readonly DisassociateWebACL: string;
```

- *Type:* string

[Write] cognito-idp:DisassociateWebACL.

---

##### `ForgetDevice`<sup>Required</sup> <a name="ForgetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ForgetDevice"></a>

```typescript
public readonly ForgetDevice: string;
```

- *Type:* string

[Write] cognito-idp:ForgetDevice.

---

##### `ForgotPassword`<sup>Required</sup> <a name="ForgotPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ForgotPassword"></a>

```typescript
public readonly ForgotPassword: string;
```

- *Type:* string

[Write] cognito-idp:ForgotPassword.

---

##### `GlobalSignOut`<sup>Required</sup> <a name="GlobalSignOut" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.GlobalSignOut"></a>

```typescript
public readonly GlobalSignOut: string;
```

- *Type:* string

[Write] cognito-idp:GlobalSignOut.

---

##### `InitiateAuth`<sup>Required</sup> <a name="InitiateAuth" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.InitiateAuth"></a>

```typescript
public readonly InitiateAuth: string;
```

- *Type:* string

[Write] cognito-idp:InitiateAuth.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListDevices"></a>

```typescript
public readonly ListDevices: string;
```

- *Type:* string

[List] cognito-idp:ListDevices.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListGroups"></a>

```typescript
public readonly ListGroups: string;
```

- *Type:* string

[List] cognito-idp:ListGroups.

---

##### `ListIdentityProviders`<sup>Required</sup> <a name="ListIdentityProviders" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListIdentityProviders"></a>

```typescript
public readonly ListIdentityProviders: string;
```

- *Type:* string

[List] cognito-idp:ListIdentityProviders.

---

##### `ListResourceServers`<sup>Required</sup> <a name="ListResourceServers" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListResourceServers"></a>

```typescript
public readonly ListResourceServers: string;
```

- *Type:* string

[List] cognito-idp:ListResourceServers.

---

##### `ListResourcesForWebACL`<sup>Required</sup> <a name="ListResourcesForWebACL" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListResourcesForWebACL"></a>

```typescript
public readonly ListResourcesForWebACL: string;
```

- *Type:* string

[List] cognito-idp:ListResourcesForWebACL.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[List] cognito-idp:ListTagsForResource.

---

##### `ListTerms`<sup>Required</sup> <a name="ListTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListTerms"></a>

```typescript
public readonly ListTerms: string;
```

- *Type:* string

[List] cognito-idp:ListTerms.

---

##### `ListUserImportJobs`<sup>Required</sup> <a name="ListUserImportJobs" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserImportJobs"></a>

```typescript
public readonly ListUserImportJobs: string;
```

- *Type:* string

[List] cognito-idp:ListUserImportJobs.

---

##### `ListUserPoolClients`<sup>Required</sup> <a name="ListUserPoolClients" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPoolClients"></a>

```typescript
public readonly ListUserPoolClients: string;
```

- *Type:* string

[List] cognito-idp:ListUserPoolClients.

---

##### `ListUserPoolClientSecrets`<sup>Required</sup> <a name="ListUserPoolClientSecrets" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPoolClientSecrets"></a>

```typescript
public readonly ListUserPoolClientSecrets: string;
```

- *Type:* string

[List] cognito-idp:ListUserPoolClientSecrets.

---

##### `ListUserPoolReplicas`<sup>Required</sup> <a name="ListUserPoolReplicas" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPoolReplicas"></a>

```typescript
public readonly ListUserPoolReplicas: string;
```

- *Type:* string

[List] cognito-idp:ListUserPoolReplicas.

---

##### `ListUserPools`<sup>Required</sup> <a name="ListUserPools" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUserPools"></a>

```typescript
public readonly ListUserPools: string;
```

- *Type:* string

[List] cognito-idp:ListUserPools.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUsers"></a>

```typescript
public readonly ListUsers: string;
```

- *Type:* string

[List] cognito-idp:ListUsers.

---

##### `ListUsersInGroup`<sup>Required</sup> <a name="ListUsersInGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ListUsersInGroup"></a>

```typescript
public readonly ListUsersInGroup: string;
```

- *Type:* string

[List] cognito-idp:ListUsersInGroup.

---

##### `ResendConfirmationCode`<sup>Required</sup> <a name="ResendConfirmationCode" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.ResendConfirmationCode"></a>

```typescript
public readonly ResendConfirmationCode: string;
```

- *Type:* string

[Write] cognito-idp:ResendConfirmationCode.

---

##### `RespondToAuthChallenge`<sup>Required</sup> <a name="RespondToAuthChallenge" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.RespondToAuthChallenge"></a>

```typescript
public readonly RespondToAuthChallenge: string;
```

- *Type:* string

[Write] cognito-idp:RespondToAuthChallenge.

---

##### `RevokeToken`<sup>Required</sup> <a name="RevokeToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.RevokeToken"></a>

```typescript
public readonly RevokeToken: string;
```

- *Type:* string

[Write] cognito-idp:RevokeToken.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SignUp`<sup>Required</sup> <a name="SignUp" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.SignUp"></a>

```typescript
public readonly SignUp: string;
```

- *Type:* string

[Write] cognito-idp:SignUp.

---

##### `StartUserImportJob`<sup>Required</sup> <a name="StartUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.StartUserImportJob"></a>

```typescript
public readonly StartUserImportJob: string;
```

- *Type:* string

[Write] cognito-idp:StartUserImportJob.

---

##### `StopUserImportJob`<sup>Required</sup> <a name="StopUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.StopUserImportJob"></a>

```typescript
public readonly StopUserImportJob: string;
```

- *Type:* string

[Write] cognito-idp:StopUserImportJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cognito-idp:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cognito-idp:UntagResource.

---

##### `UpdateAuthEventFeedback`<sup>Required</sup> <a name="UpdateAuthEventFeedback" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateAuthEventFeedback"></a>

```typescript
public readonly UpdateAuthEventFeedback: string;
```

- *Type:* string

[Write] cognito-idp:UpdateAuthEventFeedback.

---

##### `UpdateDeviceStatus`<sup>Required</sup> <a name="UpdateDeviceStatus" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateDeviceStatus"></a>

```typescript
public readonly UpdateDeviceStatus: string;
```

- *Type:* string

[Write] cognito-idp:UpdateDeviceStatus.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string;
```

- *Type:* string

[Write] cognito-idp:UpdateGroup.

---

##### `UpdateIdentityProvider`<sup>Required</sup> <a name="UpdateIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateIdentityProvider"></a>

```typescript
public readonly UpdateIdentityProvider: string;
```

- *Type:* string

[Write] cognito-idp:UpdateIdentityProvider.

---

##### `UpdateManagedLoginBranding`<sup>Required</sup> <a name="UpdateManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateManagedLoginBranding"></a>

```typescript
public readonly UpdateManagedLoginBranding: string;
```

- *Type:* string

[Write] cognito-idp:UpdateManagedLoginBranding.

---

##### `UpdateProvisionedLimit`<sup>Required</sup> <a name="UpdateProvisionedLimit" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateProvisionedLimit"></a>

```typescript
public readonly UpdateProvisionedLimit: string;
```

- *Type:* string

[Write] cognito-idp:UpdateProvisionedLimit.

---

##### `UpdateResourceServer`<sup>Required</sup> <a name="UpdateResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateResourceServer"></a>

```typescript
public readonly UpdateResourceServer: string;
```

- *Type:* string

[Write] cognito-idp:UpdateResourceServer.

---

##### `UpdateTerms`<sup>Required</sup> <a name="UpdateTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateTerms"></a>

```typescript
public readonly UpdateTerms: string;
```

- *Type:* string

[Write] cognito-idp:UpdateTerms.

---

##### `UpdateUserAttributes`<sup>Required</sup> <a name="UpdateUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserAttributes"></a>

```typescript
public readonly UpdateUserAttributes: string;
```

- *Type:* string

[Write] cognito-idp:UpdateUserAttributes.

---

##### `UpdateUserPool`<sup>Required</sup> <a name="UpdateUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPool"></a>

```typescript
public readonly UpdateUserPool: string;
```

- *Type:* string

[Write] cognito-idp:UpdateUserPool.

---

##### `UpdateUserPoolClient`<sup>Required</sup> <a name="UpdateUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPoolClient"></a>

```typescript
public readonly UpdateUserPoolClient: string;
```

- *Type:* string

[Write] cognito-idp:UpdateUserPoolClient.

---

##### `UpdateUserPoolDomain`<sup>Required</sup> <a name="UpdateUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPoolDomain"></a>

```typescript
public readonly UpdateUserPoolDomain: string;
```

- *Type:* string

[Write] cognito-idp:UpdateUserPoolDomain.

---

##### `UpdateUserPoolReplica`<sup>Required</sup> <a name="UpdateUserPoolReplica" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.UpdateUserPoolReplica"></a>

```typescript
public readonly UpdateUserPoolReplica: string;
```

- *Type:* string

[Write] cognito-idp:UpdateUserPoolReplica.

---

##### `VerifySoftwareToken`<sup>Required</sup> <a name="VerifySoftwareToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.VerifySoftwareToken"></a>

```typescript
public readonly VerifySoftwareToken: string;
```

- *Type:* string

[Write] cognito-idp:VerifySoftwareToken.

---

##### `VerifyUserAttribute`<sup>Required</sup> <a name="VerifyUserAttribute" id="@cdk_utils/iam.cognito_idp.CognitoIdpActions.property.VerifyUserAttribute"></a>

```typescript
public readonly VerifyUserAttribute: string;
```

- *Type:* string

[Write] cognito-idp:VerifyUserAttribute.

---

### CognitoIdpConditions <a name="CognitoIdpConditions" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions"></a>

Condition key constants and builders for cognito-idp.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

new cognito_idp.CognitoIdpConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.requestTag"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.resourceTag"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.tagKeys"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.CreateUserPoolConditionKeys">CreateUserPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateUserPool action. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.UpdateUserPoolConditionKeys">UpdateUserPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateUserPool action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateUserPoolConditionKeys`<sup>Required</sup> <a name="CreateUserPoolConditionKeys" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.CreateUserPoolConditionKeys"></a>

```typescript
public readonly CreateUserPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateUserPool action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateUserPoolConditionKeys`<sup>Required</sup> <a name="UpdateUserPoolConditionKeys" id="@cdk_utils/iam.cognito_idp.CognitoIdpConditions.property.UpdateUserPoolConditionKeys"></a>

```typescript
public readonly UpdateUserPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateUserPool action.

---

### CognitoIdpOperations <a name="CognitoIdpOperations" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations"></a>

API operation to required IAM actions mapping for cognito-idp.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

new cognito_idp.CognitoIdpOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AddCustomAttributes">AddCustomAttributes</a></code> | <code>string[]</code> | IAM actions required for the AddCustomAttributes API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AddUserPoolClientSecret">AddUserPoolClientSecret</a></code> | <code>string[]</code> | IAM actions required for the AddUserPoolClientSecret API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminAddUserToGroup">AdminAddUserToGroup</a></code> | <code>string[]</code> | IAM actions required for the AdminAddUserToGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminConfirmSignUp">AdminConfirmSignUp</a></code> | <code>string[]</code> | IAM actions required for the AdminConfirmSignUp API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminCreateUser">AdminCreateUser</a></code> | <code>string[]</code> | IAM actions required for the AdminCreateUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDeleteSoftwareToken">AdminDeleteSoftwareToken</a></code> | <code>string[]</code> | IAM actions required for the AdminDeleteSoftwareToken API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDeleteUser">AdminDeleteUser</a></code> | <code>string[]</code> | IAM actions required for the AdminDeleteUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDeleteUserAttributes">AdminDeleteUserAttributes</a></code> | <code>string[]</code> | IAM actions required for the AdminDeleteUserAttributes API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDisableProviderForUser">AdminDisableProviderForUser</a></code> | <code>string[]</code> | IAM actions required for the AdminDisableProviderForUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDisableUser">AdminDisableUser</a></code> | <code>string[]</code> | IAM actions required for the AdminDisableUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminEnableUser">AdminEnableUser</a></code> | <code>string[]</code> | IAM actions required for the AdminEnableUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminForgetDevice">AdminForgetDevice</a></code> | <code>string[]</code> | IAM actions required for the AdminForgetDevice API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminGetDevice">AdminGetDevice</a></code> | <code>string[]</code> | IAM actions required for the AdminGetDevice API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminGetUser">AdminGetUser</a></code> | <code>string[]</code> | IAM actions required for the AdminGetUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminGetUserAuthFactors">AdminGetUserAuthFactors</a></code> | <code>string[]</code> | IAM actions required for the AdminGetUserAuthFactors API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminInitiateAuth">AdminInitiateAuth</a></code> | <code>string[]</code> | IAM actions required for the AdminInitiateAuth API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminLinkProviderForUser">AdminLinkProviderForUser</a></code> | <code>string[]</code> | IAM actions required for the AdminLinkProviderForUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminListDevices">AdminListDevices</a></code> | <code>string[]</code> | IAM actions required for the AdminListDevices API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminListGroupsForUser">AdminListGroupsForUser</a></code> | <code>string[]</code> | IAM actions required for the AdminListGroupsForUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminListUserAuthEvents">AdminListUserAuthEvents</a></code> | <code>string[]</code> | IAM actions required for the AdminListUserAuthEvents API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminRemoveUserFromGroup">AdminRemoveUserFromGroup</a></code> | <code>string[]</code> | IAM actions required for the AdminRemoveUserFromGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminResetUserPassword">AdminResetUserPassword</a></code> | <code>string[]</code> | IAM actions required for the AdminResetUserPassword API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminRespondToAuthChallenge">AdminRespondToAuthChallenge</a></code> | <code>string[]</code> | IAM actions required for the AdminRespondToAuthChallenge API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminSetUserMFAPreference">AdminSetUserMFAPreference</a></code> | <code>string[]</code> | IAM actions required for the AdminSetUserMFAPreference API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminSetUserPassword">AdminSetUserPassword</a></code> | <code>string[]</code> | IAM actions required for the AdminSetUserPassword API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminSetUserSettings">AdminSetUserSettings</a></code> | <code>string[]</code> | IAM actions required for the AdminSetUserSettings API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUpdateAuthEventFeedback">AdminUpdateAuthEventFeedback</a></code> | <code>string[]</code> | IAM actions required for the AdminUpdateAuthEventFeedback API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUpdateDeviceStatus">AdminUpdateDeviceStatus</a></code> | <code>string[]</code> | IAM actions required for the AdminUpdateDeviceStatus API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUpdateUserAttributes">AdminUpdateUserAttributes</a></code> | <code>string[]</code> | IAM actions required for the AdminUpdateUserAttributes API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUserGlobalSignOut">AdminUserGlobalSignOut</a></code> | <code>string[]</code> | IAM actions required for the AdminUserGlobalSignOut API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AssociateSoftwareToken">AssociateSoftwareToken</a></code> | <code>string[]</code> | IAM actions required for the AssociateSoftwareToken API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ChangePassword">ChangePassword</a></code> | <code>string[]</code> | IAM actions required for the ChangePassword API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CompleteWebAuthnRegistration">CompleteWebAuthnRegistration</a></code> | <code>string[]</code> | IAM actions required for the CompleteWebAuthnRegistration API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ConfirmDevice">ConfirmDevice</a></code> | <code>string[]</code> | IAM actions required for the ConfirmDevice API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ConfirmForgotPassword">ConfirmForgotPassword</a></code> | <code>string[]</code> | IAM actions required for the ConfirmForgotPassword API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ConfirmSignUp">ConfirmSignUp</a></code> | <code>string[]</code> | IAM actions required for the ConfirmSignUp API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateGroup">CreateGroup</a></code> | <code>string[]</code> | IAM actions required for the CreateGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateIdentityProvider">CreateIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the CreateIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateManagedLoginBranding">CreateManagedLoginBranding</a></code> | <code>string[]</code> | IAM actions required for the CreateManagedLoginBranding API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateResourceServer">CreateResourceServer</a></code> | <code>string[]</code> | IAM actions required for the CreateResourceServer API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateTerms">CreateTerms</a></code> | <code>string[]</code> | IAM actions required for the CreateTerms API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserImportJob">CreateUserImportJob</a></code> | <code>string[]</code> | IAM actions required for the CreateUserImportJob API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPool">CreateUserPool</a></code> | <code>string[]</code> | IAM actions required for the CreateUserPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPoolClient">CreateUserPoolClient</a></code> | <code>string[]</code> | IAM actions required for the CreateUserPoolClient API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPoolDomain">CreateUserPoolDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateUserPoolDomain API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPoolReplica">CreateUserPoolReplica</a></code> | <code>string[]</code> | IAM actions required for the CreateUserPoolReplica API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteGroup">DeleteGroup</a></code> | <code>string[]</code> | IAM actions required for the DeleteGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteIdentityProvider">DeleteIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteManagedLoginBranding">DeleteManagedLoginBranding</a></code> | <code>string[]</code> | IAM actions required for the DeleteManagedLoginBranding API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteResourceServer">DeleteResourceServer</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourceServer API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteTerms">DeleteTerms</a></code> | <code>string[]</code> | IAM actions required for the DeleteTerms API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUser">DeleteUser</a></code> | <code>string[]</code> | IAM actions required for the DeleteUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserAttributes">DeleteUserAttributes</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserAttributes API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPool">DeleteUserPool</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolClient">DeleteUserPoolClient</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPoolClient API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolClientSecret">DeleteUserPoolClientSecret</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPoolClientSecret API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolDomain">DeleteUserPoolDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPoolDomain API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolReplica">DeleteUserPoolReplica</a></code> | <code>string[]</code> | IAM actions required for the DeleteUserPoolReplica API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteWebAuthnCredential">DeleteWebAuthnCredential</a></code> | <code>string[]</code> | IAM actions required for the DeleteWebAuthnCredential API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeIdentityProvider">DescribeIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeManagedLoginBranding">DescribeManagedLoginBranding</a></code> | <code>string[]</code> | IAM actions required for the DescribeManagedLoginBranding API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeManagedLoginBrandingByClient">DescribeManagedLoginBrandingByClient</a></code> | <code>string[]</code> | IAM actions required for the DescribeManagedLoginBrandingByClient API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeResourceServer">DescribeResourceServer</a></code> | <code>string[]</code> | IAM actions required for the DescribeResourceServer API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeRiskConfiguration">DescribeRiskConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DescribeRiskConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeTerms">DescribeTerms</a></code> | <code>string[]</code> | IAM actions required for the DescribeTerms API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserImportJob">DescribeUserImportJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserImportJob API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserPool">DescribeUserPool</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserPoolClient">DescribeUserPoolClient</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserPoolClient API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserPoolDomain">DescribeUserPoolDomain</a></code> | <code>string[]</code> | IAM actions required for the DescribeUserPoolDomain API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ForgetDevice">ForgetDevice</a></code> | <code>string[]</code> | IAM actions required for the ForgetDevice API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ForgotPassword">ForgotPassword</a></code> | <code>string[]</code> | IAM actions required for the ForgotPassword API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.GlobalSignOut">GlobalSignOut</a></code> | <code>string[]</code> | IAM actions required for the GlobalSignOut API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.InitiateAuth">InitiateAuth</a></code> | <code>string[]</code> | IAM actions required for the InitiateAuth API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListDevices">ListDevices</a></code> | <code>string[]</code> | IAM actions required for the ListDevices API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListGroups">ListGroups</a></code> | <code>string[]</code> | IAM actions required for the ListGroups API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListIdentityProviders">ListIdentityProviders</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityProviders API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListResourceServers">ListResourceServers</a></code> | <code>string[]</code> | IAM actions required for the ListResourceServers API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListTerms">ListTerms</a></code> | <code>string[]</code> | IAM actions required for the ListTerms API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserImportJobs">ListUserImportJobs</a></code> | <code>string[]</code> | IAM actions required for the ListUserImportJobs API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPoolClients">ListUserPoolClients</a></code> | <code>string[]</code> | IAM actions required for the ListUserPoolClients API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPoolClientSecrets">ListUserPoolClientSecrets</a></code> | <code>string[]</code> | IAM actions required for the ListUserPoolClientSecrets API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPoolReplicas">ListUserPoolReplicas</a></code> | <code>string[]</code> | IAM actions required for the ListUserPoolReplicas API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPools">ListUserPools</a></code> | <code>string[]</code> | IAM actions required for the ListUserPools API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUsers">ListUsers</a></code> | <code>string[]</code> | IAM actions required for the ListUsers API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUsersInGroup">ListUsersInGroup</a></code> | <code>string[]</code> | IAM actions required for the ListUsersInGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListWebAuthnCredentials">ListWebAuthnCredentials</a></code> | <code>string[]</code> | IAM actions required for the ListWebAuthnCredentials API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetCSVHeader">opGetCSVHeader</a></code> | <code>string[]</code> | IAM actions required for the GetCSVHeader API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetDevice">opGetDevice</a></code> | <code>string[]</code> | IAM actions required for the GetDevice API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetGroup">opGetGroup</a></code> | <code>string[]</code> | IAM actions required for the GetGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetIdentityProviderByIdentifier">opGetIdentityProviderByIdentifier</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityProviderByIdentifier API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetLogDeliveryConfiguration">opGetLogDeliveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetLogDeliveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetProvisionedLimit">opGetProvisionedLimit</a></code> | <code>string[]</code> | IAM actions required for the GetProvisionedLimit API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetSigningCertificate">opGetSigningCertificate</a></code> | <code>string[]</code> | IAM actions required for the GetSigningCertificate API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetTokensFromRefreshToken">opGetTokensFromRefreshToken</a></code> | <code>string[]</code> | IAM actions required for the GetTokensFromRefreshToken API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUICustomization">opGetUICustomization</a></code> | <code>string[]</code> | IAM actions required for the GetUICustomization API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUser">opGetUser</a></code> | <code>string[]</code> | IAM actions required for the GetUser API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUserAttributeVerificationCode">opGetUserAttributeVerificationCode</a></code> | <code>string[]</code> | IAM actions required for the GetUserAttributeVerificationCode API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUserAuthFactors">opGetUserAuthFactors</a></code> | <code>string[]</code> | IAM actions required for the GetUserAuthFactors API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUserPoolMfaConfig">opGetUserPoolMfaConfig</a></code> | <code>string[]</code> | IAM actions required for the GetUserPoolMfaConfig API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetLogDeliveryConfiguration">opSetLogDeliveryConfiguration</a></code> | <code>string[]</code> | IAM actions required for the SetLogDeliveryConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetRiskConfiguration">opSetRiskConfiguration</a></code> | <code>string[]</code> | IAM actions required for the SetRiskConfiguration API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUICustomization">opSetUICustomization</a></code> | <code>string[]</code> | IAM actions required for the SetUICustomization API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUserMFAPreference">opSetUserMFAPreference</a></code> | <code>string[]</code> | IAM actions required for the SetUserMFAPreference API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUserPoolMfaConfig">opSetUserPoolMfaConfig</a></code> | <code>string[]</code> | IAM actions required for the SetUserPoolMfaConfig API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUserSettings">opSetUserSettings</a></code> | <code>string[]</code> | IAM actions required for the SetUserSettings API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ResendConfirmationCode">ResendConfirmationCode</a></code> | <code>string[]</code> | IAM actions required for the ResendConfirmationCode API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.RespondToAuthChallenge">RespondToAuthChallenge</a></code> | <code>string[]</code> | IAM actions required for the RespondToAuthChallenge API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.RevokeToken">RevokeToken</a></code> | <code>string[]</code> | IAM actions required for the RevokeToken API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.SignUp">SignUp</a></code> | <code>string[]</code> | IAM actions required for the SignUp API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.StartUserImportJob">StartUserImportJob</a></code> | <code>string[]</code> | IAM actions required for the StartUserImportJob API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.StartWebAuthnRegistration">StartWebAuthnRegistration</a></code> | <code>string[]</code> | IAM actions required for the StartWebAuthnRegistration API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.StopUserImportJob">StopUserImportJob</a></code> | <code>string[]</code> | IAM actions required for the StopUserImportJob API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateAuthEventFeedback">UpdateAuthEventFeedback</a></code> | <code>string[]</code> | IAM actions required for the UpdateAuthEventFeedback API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateDeviceStatus">UpdateDeviceStatus</a></code> | <code>string[]</code> | IAM actions required for the UpdateDeviceStatus API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateGroup">UpdateGroup</a></code> | <code>string[]</code> | IAM actions required for the UpdateGroup API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateIdentityProvider">UpdateIdentityProvider</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdentityProvider API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateManagedLoginBranding">UpdateManagedLoginBranding</a></code> | <code>string[]</code> | IAM actions required for the UpdateManagedLoginBranding API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateProvisionedLimit">UpdateProvisionedLimit</a></code> | <code>string[]</code> | IAM actions required for the UpdateProvisionedLimit API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateResourceServer">UpdateResourceServer</a></code> | <code>string[]</code> | IAM actions required for the UpdateResourceServer API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateTerms">UpdateTerms</a></code> | <code>string[]</code> | IAM actions required for the UpdateTerms API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserAttributes">UpdateUserAttributes</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserAttributes API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPool">UpdateUserPool</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPoolClient">UpdateUserPoolClient</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserPoolClient API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPoolDomain">UpdateUserPoolDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserPoolDomain API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPoolReplica">UpdateUserPoolReplica</a></code> | <code>string[]</code> | IAM actions required for the UpdateUserPoolReplica API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.VerifySoftwareToken">VerifySoftwareToken</a></code> | <code>string[]</code> | IAM actions required for the VerifySoftwareToken API call. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.VerifyUserAttribute">VerifyUserAttribute</a></code> | <code>string[]</code> | IAM actions required for the VerifyUserAttribute API call. |

---

##### `AddCustomAttributes`<sup>Required</sup> <a name="AddCustomAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AddCustomAttributes"></a>

```typescript
public readonly AddCustomAttributes: string[];
```

- *Type:* string[]

IAM actions required for the AddCustomAttributes API call.

---

##### `AddUserPoolClientSecret`<sup>Required</sup> <a name="AddUserPoolClientSecret" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AddUserPoolClientSecret"></a>

```typescript
public readonly AddUserPoolClientSecret: string[];
```

- *Type:* string[]

IAM actions required for the AddUserPoolClientSecret API call.

---

##### `AdminAddUserToGroup`<sup>Required</sup> <a name="AdminAddUserToGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminAddUserToGroup"></a>

```typescript
public readonly AdminAddUserToGroup: string[];
```

- *Type:* string[]

IAM actions required for the AdminAddUserToGroup API call.

---

##### `AdminConfirmSignUp`<sup>Required</sup> <a name="AdminConfirmSignUp" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminConfirmSignUp"></a>

```typescript
public readonly AdminConfirmSignUp: string[];
```

- *Type:* string[]

IAM actions required for the AdminConfirmSignUp API call.

---

##### `AdminCreateUser`<sup>Required</sup> <a name="AdminCreateUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminCreateUser"></a>

```typescript
public readonly AdminCreateUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminCreateUser API call.

---

##### `AdminDeleteSoftwareToken`<sup>Required</sup> <a name="AdminDeleteSoftwareToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDeleteSoftwareToken"></a>

```typescript
public readonly AdminDeleteSoftwareToken: string[];
```

- *Type:* string[]

IAM actions required for the AdminDeleteSoftwareToken API call.

---

##### `AdminDeleteUser`<sup>Required</sup> <a name="AdminDeleteUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDeleteUser"></a>

```typescript
public readonly AdminDeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminDeleteUser API call.

---

##### `AdminDeleteUserAttributes`<sup>Required</sup> <a name="AdminDeleteUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDeleteUserAttributes"></a>

```typescript
public readonly AdminDeleteUserAttributes: string[];
```

- *Type:* string[]

IAM actions required for the AdminDeleteUserAttributes API call.

---

##### `AdminDisableProviderForUser`<sup>Required</sup> <a name="AdminDisableProviderForUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDisableProviderForUser"></a>

```typescript
public readonly AdminDisableProviderForUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminDisableProviderForUser API call.

---

##### `AdminDisableUser`<sup>Required</sup> <a name="AdminDisableUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminDisableUser"></a>

```typescript
public readonly AdminDisableUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminDisableUser API call.

---

##### `AdminEnableUser`<sup>Required</sup> <a name="AdminEnableUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminEnableUser"></a>

```typescript
public readonly AdminEnableUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminEnableUser API call.

---

##### `AdminForgetDevice`<sup>Required</sup> <a name="AdminForgetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminForgetDevice"></a>

```typescript
public readonly AdminForgetDevice: string[];
```

- *Type:* string[]

IAM actions required for the AdminForgetDevice API call.

---

##### `AdminGetDevice`<sup>Required</sup> <a name="AdminGetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminGetDevice"></a>

```typescript
public readonly AdminGetDevice: string[];
```

- *Type:* string[]

IAM actions required for the AdminGetDevice API call.

---

##### `AdminGetUser`<sup>Required</sup> <a name="AdminGetUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminGetUser"></a>

```typescript
public readonly AdminGetUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminGetUser API call.

---

##### `AdminGetUserAuthFactors`<sup>Required</sup> <a name="AdminGetUserAuthFactors" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminGetUserAuthFactors"></a>

```typescript
public readonly AdminGetUserAuthFactors: string[];
```

- *Type:* string[]

IAM actions required for the AdminGetUserAuthFactors API call.

---

##### `AdminInitiateAuth`<sup>Required</sup> <a name="AdminInitiateAuth" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminInitiateAuth"></a>

```typescript
public readonly AdminInitiateAuth: string[];
```

- *Type:* string[]

IAM actions required for the AdminInitiateAuth API call.

---

##### `AdminLinkProviderForUser`<sup>Required</sup> <a name="AdminLinkProviderForUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminLinkProviderForUser"></a>

```typescript
public readonly AdminLinkProviderForUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminLinkProviderForUser API call.

---

##### `AdminListDevices`<sup>Required</sup> <a name="AdminListDevices" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminListDevices"></a>

```typescript
public readonly AdminListDevices: string[];
```

- *Type:* string[]

IAM actions required for the AdminListDevices API call.

---

##### `AdminListGroupsForUser`<sup>Required</sup> <a name="AdminListGroupsForUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminListGroupsForUser"></a>

```typescript
public readonly AdminListGroupsForUser: string[];
```

- *Type:* string[]

IAM actions required for the AdminListGroupsForUser API call.

---

##### `AdminListUserAuthEvents`<sup>Required</sup> <a name="AdminListUserAuthEvents" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminListUserAuthEvents"></a>

```typescript
public readonly AdminListUserAuthEvents: string[];
```

- *Type:* string[]

IAM actions required for the AdminListUserAuthEvents API call.

---

##### `AdminRemoveUserFromGroup`<sup>Required</sup> <a name="AdminRemoveUserFromGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminRemoveUserFromGroup"></a>

```typescript
public readonly AdminRemoveUserFromGroup: string[];
```

- *Type:* string[]

IAM actions required for the AdminRemoveUserFromGroup API call.

---

##### `AdminResetUserPassword`<sup>Required</sup> <a name="AdminResetUserPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminResetUserPassword"></a>

```typescript
public readonly AdminResetUserPassword: string[];
```

- *Type:* string[]

IAM actions required for the AdminResetUserPassword API call.

---

##### `AdminRespondToAuthChallenge`<sup>Required</sup> <a name="AdminRespondToAuthChallenge" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminRespondToAuthChallenge"></a>

```typescript
public readonly AdminRespondToAuthChallenge: string[];
```

- *Type:* string[]

IAM actions required for the AdminRespondToAuthChallenge API call.

---

##### `AdminSetUserMFAPreference`<sup>Required</sup> <a name="AdminSetUserMFAPreference" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminSetUserMFAPreference"></a>

```typescript
public readonly AdminSetUserMFAPreference: string[];
```

- *Type:* string[]

IAM actions required for the AdminSetUserMFAPreference API call.

---

##### `AdminSetUserPassword`<sup>Required</sup> <a name="AdminSetUserPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminSetUserPassword"></a>

```typescript
public readonly AdminSetUserPassword: string[];
```

- *Type:* string[]

IAM actions required for the AdminSetUserPassword API call.

---

##### `AdminSetUserSettings`<sup>Required</sup> <a name="AdminSetUserSettings" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminSetUserSettings"></a>

```typescript
public readonly AdminSetUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the AdminSetUserSettings API call.

---

##### `AdminUpdateAuthEventFeedback`<sup>Required</sup> <a name="AdminUpdateAuthEventFeedback" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUpdateAuthEventFeedback"></a>

```typescript
public readonly AdminUpdateAuthEventFeedback: string[];
```

- *Type:* string[]

IAM actions required for the AdminUpdateAuthEventFeedback API call.

---

##### `AdminUpdateDeviceStatus`<sup>Required</sup> <a name="AdminUpdateDeviceStatus" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUpdateDeviceStatus"></a>

```typescript
public readonly AdminUpdateDeviceStatus: string[];
```

- *Type:* string[]

IAM actions required for the AdminUpdateDeviceStatus API call.

---

##### `AdminUpdateUserAttributes`<sup>Required</sup> <a name="AdminUpdateUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUpdateUserAttributes"></a>

```typescript
public readonly AdminUpdateUserAttributes: string[];
```

- *Type:* string[]

IAM actions required for the AdminUpdateUserAttributes API call.

---

##### `AdminUserGlobalSignOut`<sup>Required</sup> <a name="AdminUserGlobalSignOut" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AdminUserGlobalSignOut"></a>

```typescript
public readonly AdminUserGlobalSignOut: string[];
```

- *Type:* string[]

IAM actions required for the AdminUserGlobalSignOut API call.

---

##### `AssociateSoftwareToken`<sup>Required</sup> <a name="AssociateSoftwareToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.AssociateSoftwareToken"></a>

```typescript
public readonly AssociateSoftwareToken: string[];
```

- *Type:* string[]

IAM actions required for the AssociateSoftwareToken API call.

---

##### `ChangePassword`<sup>Required</sup> <a name="ChangePassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ChangePassword"></a>

```typescript
public readonly ChangePassword: string[];
```

- *Type:* string[]

IAM actions required for the ChangePassword API call.

---

##### `CompleteWebAuthnRegistration`<sup>Required</sup> <a name="CompleteWebAuthnRegistration" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CompleteWebAuthnRegistration"></a>

```typescript
public readonly CompleteWebAuthnRegistration: string[];
```

- *Type:* string[]

IAM actions required for the CompleteWebAuthnRegistration API call.

---

##### `ConfirmDevice`<sup>Required</sup> <a name="ConfirmDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ConfirmDevice"></a>

```typescript
public readonly ConfirmDevice: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmDevice API call.

---

##### `ConfirmForgotPassword`<sup>Required</sup> <a name="ConfirmForgotPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ConfirmForgotPassword"></a>

```typescript
public readonly ConfirmForgotPassword: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmForgotPassword API call.

---

##### `ConfirmSignUp`<sup>Required</sup> <a name="ConfirmSignUp" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ConfirmSignUp"></a>

```typescript
public readonly ConfirmSignUp: string[];
```

- *Type:* string[]

IAM actions required for the ConfirmSignUp API call.

---

##### `CreateGroup`<sup>Required</sup> <a name="CreateGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateGroup"></a>

```typescript
public readonly CreateGroup: string[];
```

- *Type:* string[]

IAM actions required for the CreateGroup API call.

---

##### `CreateIdentityProvider`<sup>Required</sup> <a name="CreateIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateIdentityProvider"></a>

```typescript
public readonly CreateIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdentityProvider API call.

---

##### `CreateManagedLoginBranding`<sup>Required</sup> <a name="CreateManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateManagedLoginBranding"></a>

```typescript
public readonly CreateManagedLoginBranding: string[];
```

- *Type:* string[]

IAM actions required for the CreateManagedLoginBranding API call.

---

##### `CreateResourceServer`<sup>Required</sup> <a name="CreateResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateResourceServer"></a>

```typescript
public readonly CreateResourceServer: string[];
```

- *Type:* string[]

IAM actions required for the CreateResourceServer API call.

---

##### `CreateTerms`<sup>Required</sup> <a name="CreateTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateTerms"></a>

```typescript
public readonly CreateTerms: string[];
```

- *Type:* string[]

IAM actions required for the CreateTerms API call.

---

##### `CreateUserImportJob`<sup>Required</sup> <a name="CreateUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserImportJob"></a>

```typescript
public readonly CreateUserImportJob: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserImportJob API call.

---

##### `CreateUserPool`<sup>Required</sup> <a name="CreateUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPool"></a>

```typescript
public readonly CreateUserPool: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserPool API call.

---

##### `CreateUserPoolClient`<sup>Required</sup> <a name="CreateUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPoolClient"></a>

```typescript
public readonly CreateUserPoolClient: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserPoolClient API call.

---

##### `CreateUserPoolDomain`<sup>Required</sup> <a name="CreateUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPoolDomain"></a>

```typescript
public readonly CreateUserPoolDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserPoolDomain API call.

---

##### `CreateUserPoolReplica`<sup>Required</sup> <a name="CreateUserPoolReplica" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.CreateUserPoolReplica"></a>

```typescript
public readonly CreateUserPoolReplica: string[];
```

- *Type:* string[]

IAM actions required for the CreateUserPoolReplica API call.

---

##### `DeleteGroup`<sup>Required</sup> <a name="DeleteGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteGroup"></a>

```typescript
public readonly DeleteGroup: string[];
```

- *Type:* string[]

IAM actions required for the DeleteGroup API call.

---

##### `DeleteIdentityProvider`<sup>Required</sup> <a name="DeleteIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteIdentityProvider"></a>

```typescript
public readonly DeleteIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityProvider API call.

---

##### `DeleteManagedLoginBranding`<sup>Required</sup> <a name="DeleteManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteManagedLoginBranding"></a>

```typescript
public readonly DeleteManagedLoginBranding: string[];
```

- *Type:* string[]

IAM actions required for the DeleteManagedLoginBranding API call.

---

##### `DeleteResourceServer`<sup>Required</sup> <a name="DeleteResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteResourceServer"></a>

```typescript
public readonly DeleteResourceServer: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourceServer API call.

---

##### `DeleteTerms`<sup>Required</sup> <a name="DeleteTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteTerms"></a>

```typescript
public readonly DeleteTerms: string[];
```

- *Type:* string[]

IAM actions required for the DeleteTerms API call.

---

##### `DeleteUser`<sup>Required</sup> <a name="DeleteUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUser"></a>

```typescript
public readonly DeleteUser: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUser API call.

---

##### `DeleteUserAttributes`<sup>Required</sup> <a name="DeleteUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserAttributes"></a>

```typescript
public readonly DeleteUserAttributes: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserAttributes API call.

---

##### `DeleteUserPool`<sup>Required</sup> <a name="DeleteUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPool"></a>

```typescript
public readonly DeleteUserPool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPool API call.

---

##### `DeleteUserPoolClient`<sup>Required</sup> <a name="DeleteUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolClient"></a>

```typescript
public readonly DeleteUserPoolClient: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPoolClient API call.

---

##### `DeleteUserPoolClientSecret`<sup>Required</sup> <a name="DeleteUserPoolClientSecret" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolClientSecret"></a>

```typescript
public readonly DeleteUserPoolClientSecret: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPoolClientSecret API call.

---

##### `DeleteUserPoolDomain`<sup>Required</sup> <a name="DeleteUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolDomain"></a>

```typescript
public readonly DeleteUserPoolDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPoolDomain API call.

---

##### `DeleteUserPoolReplica`<sup>Required</sup> <a name="DeleteUserPoolReplica" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteUserPoolReplica"></a>

```typescript
public readonly DeleteUserPoolReplica: string[];
```

- *Type:* string[]

IAM actions required for the DeleteUserPoolReplica API call.

---

##### `DeleteWebAuthnCredential`<sup>Required</sup> <a name="DeleteWebAuthnCredential" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DeleteWebAuthnCredential"></a>

```typescript
public readonly DeleteWebAuthnCredential: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWebAuthnCredential API call.

---

##### `DescribeIdentityProvider`<sup>Required</sup> <a name="DescribeIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeIdentityProvider"></a>

```typescript
public readonly DescribeIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentityProvider API call.

---

##### `DescribeManagedLoginBranding`<sup>Required</sup> <a name="DescribeManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeManagedLoginBranding"></a>

```typescript
public readonly DescribeManagedLoginBranding: string[];
```

- *Type:* string[]

IAM actions required for the DescribeManagedLoginBranding API call.

---

##### `DescribeManagedLoginBrandingByClient`<sup>Required</sup> <a name="DescribeManagedLoginBrandingByClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeManagedLoginBrandingByClient"></a>

```typescript
public readonly DescribeManagedLoginBrandingByClient: string[];
```

- *Type:* string[]

IAM actions required for the DescribeManagedLoginBrandingByClient API call.

---

##### `DescribeResourceServer`<sup>Required</sup> <a name="DescribeResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeResourceServer"></a>

```typescript
public readonly DescribeResourceServer: string[];
```

- *Type:* string[]

IAM actions required for the DescribeResourceServer API call.

---

##### `DescribeRiskConfiguration`<sup>Required</sup> <a name="DescribeRiskConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeRiskConfiguration"></a>

```typescript
public readonly DescribeRiskConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DescribeRiskConfiguration API call.

---

##### `DescribeTerms`<sup>Required</sup> <a name="DescribeTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeTerms"></a>

```typescript
public readonly DescribeTerms: string[];
```

- *Type:* string[]

IAM actions required for the DescribeTerms API call.

---

##### `DescribeUserImportJob`<sup>Required</sup> <a name="DescribeUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserImportJob"></a>

```typescript
public readonly DescribeUserImportJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserImportJob API call.

---

##### `DescribeUserPool`<sup>Required</sup> <a name="DescribeUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserPool"></a>

```typescript
public readonly DescribeUserPool: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserPool API call.

---

##### `DescribeUserPoolClient`<sup>Required</sup> <a name="DescribeUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserPoolClient"></a>

```typescript
public readonly DescribeUserPoolClient: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserPoolClient API call.

---

##### `DescribeUserPoolDomain`<sup>Required</sup> <a name="DescribeUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.DescribeUserPoolDomain"></a>

```typescript
public readonly DescribeUserPoolDomain: string[];
```

- *Type:* string[]

IAM actions required for the DescribeUserPoolDomain API call.

---

##### `ForgetDevice`<sup>Required</sup> <a name="ForgetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ForgetDevice"></a>

```typescript
public readonly ForgetDevice: string[];
```

- *Type:* string[]

IAM actions required for the ForgetDevice API call.

---

##### `ForgotPassword`<sup>Required</sup> <a name="ForgotPassword" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ForgotPassword"></a>

```typescript
public readonly ForgotPassword: string[];
```

- *Type:* string[]

IAM actions required for the ForgotPassword API call.

---

##### `GlobalSignOut`<sup>Required</sup> <a name="GlobalSignOut" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.GlobalSignOut"></a>

```typescript
public readonly GlobalSignOut: string[];
```

- *Type:* string[]

IAM actions required for the GlobalSignOut API call.

---

##### `InitiateAuth`<sup>Required</sup> <a name="InitiateAuth" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.InitiateAuth"></a>

```typescript
public readonly InitiateAuth: string[];
```

- *Type:* string[]

IAM actions required for the InitiateAuth API call.

---

##### `ListDevices`<sup>Required</sup> <a name="ListDevices" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListDevices"></a>

```typescript
public readonly ListDevices: string[];
```

- *Type:* string[]

IAM actions required for the ListDevices API call.

---

##### `ListGroups`<sup>Required</sup> <a name="ListGroups" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListGroups"></a>

```typescript
public readonly ListGroups: string[];
```

- *Type:* string[]

IAM actions required for the ListGroups API call.

---

##### `ListIdentityProviders`<sup>Required</sup> <a name="ListIdentityProviders" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListIdentityProviders"></a>

```typescript
public readonly ListIdentityProviders: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityProviders API call.

---

##### `ListResourceServers`<sup>Required</sup> <a name="ListResourceServers" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListResourceServers"></a>

```typescript
public readonly ListResourceServers: string[];
```

- *Type:* string[]

IAM actions required for the ListResourceServers API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListTerms`<sup>Required</sup> <a name="ListTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListTerms"></a>

```typescript
public readonly ListTerms: string[];
```

- *Type:* string[]

IAM actions required for the ListTerms API call.

---

##### `ListUserImportJobs`<sup>Required</sup> <a name="ListUserImportJobs" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserImportJobs"></a>

```typescript
public readonly ListUserImportJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListUserImportJobs API call.

---

##### `ListUserPoolClients`<sup>Required</sup> <a name="ListUserPoolClients" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPoolClients"></a>

```typescript
public readonly ListUserPoolClients: string[];
```

- *Type:* string[]

IAM actions required for the ListUserPoolClients API call.

---

##### `ListUserPoolClientSecrets`<sup>Required</sup> <a name="ListUserPoolClientSecrets" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPoolClientSecrets"></a>

```typescript
public readonly ListUserPoolClientSecrets: string[];
```

- *Type:* string[]

IAM actions required for the ListUserPoolClientSecrets API call.

---

##### `ListUserPoolReplicas`<sup>Required</sup> <a name="ListUserPoolReplicas" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPoolReplicas"></a>

```typescript
public readonly ListUserPoolReplicas: string[];
```

- *Type:* string[]

IAM actions required for the ListUserPoolReplicas API call.

---

##### `ListUserPools`<sup>Required</sup> <a name="ListUserPools" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUserPools"></a>

```typescript
public readonly ListUserPools: string[];
```

- *Type:* string[]

IAM actions required for the ListUserPools API call.

---

##### `ListUsers`<sup>Required</sup> <a name="ListUsers" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUsers"></a>

```typescript
public readonly ListUsers: string[];
```

- *Type:* string[]

IAM actions required for the ListUsers API call.

---

##### `ListUsersInGroup`<sup>Required</sup> <a name="ListUsersInGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListUsersInGroup"></a>

```typescript
public readonly ListUsersInGroup: string[];
```

- *Type:* string[]

IAM actions required for the ListUsersInGroup API call.

---

##### `ListWebAuthnCredentials`<sup>Required</sup> <a name="ListWebAuthnCredentials" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ListWebAuthnCredentials"></a>

```typescript
public readonly ListWebAuthnCredentials: string[];
```

- *Type:* string[]

IAM actions required for the ListWebAuthnCredentials API call.

---

##### `opGetCSVHeader`<sup>Required</sup> <a name="opGetCSVHeader" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetCSVHeader"></a>

```typescript
public readonly opGetCSVHeader: string[];
```

- *Type:* string[]

IAM actions required for the GetCSVHeader API call.

---

##### `opGetDevice`<sup>Required</sup> <a name="opGetDevice" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetDevice"></a>

```typescript
public readonly opGetDevice: string[];
```

- *Type:* string[]

IAM actions required for the GetDevice API call.

---

##### `opGetGroup`<sup>Required</sup> <a name="opGetGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetGroup"></a>

```typescript
public readonly opGetGroup: string[];
```

- *Type:* string[]

IAM actions required for the GetGroup API call.

---

##### `opGetIdentityProviderByIdentifier`<sup>Required</sup> <a name="opGetIdentityProviderByIdentifier" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetIdentityProviderByIdentifier"></a>

```typescript
public readonly opGetIdentityProviderByIdentifier: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityProviderByIdentifier API call.

---

##### `opGetLogDeliveryConfiguration`<sup>Required</sup> <a name="opGetLogDeliveryConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetLogDeliveryConfiguration"></a>

```typescript
public readonly opGetLogDeliveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetLogDeliveryConfiguration API call.

---

##### `opGetProvisionedLimit`<sup>Required</sup> <a name="opGetProvisionedLimit" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetProvisionedLimit"></a>

```typescript
public readonly opGetProvisionedLimit: string[];
```

- *Type:* string[]

IAM actions required for the GetProvisionedLimit API call.

---

##### `opGetSigningCertificate`<sup>Required</sup> <a name="opGetSigningCertificate" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetSigningCertificate"></a>

```typescript
public readonly opGetSigningCertificate: string[];
```

- *Type:* string[]

IAM actions required for the GetSigningCertificate API call.

---

##### `opGetTokensFromRefreshToken`<sup>Required</sup> <a name="opGetTokensFromRefreshToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetTokensFromRefreshToken"></a>

```typescript
public readonly opGetTokensFromRefreshToken: string[];
```

- *Type:* string[]

IAM actions required for the GetTokensFromRefreshToken API call.

---

##### `opGetUICustomization`<sup>Required</sup> <a name="opGetUICustomization" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUICustomization"></a>

```typescript
public readonly opGetUICustomization: string[];
```

- *Type:* string[]

IAM actions required for the GetUICustomization API call.

---

##### `opGetUser`<sup>Required</sup> <a name="opGetUser" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUser"></a>

```typescript
public readonly opGetUser: string[];
```

- *Type:* string[]

IAM actions required for the GetUser API call.

---

##### `opGetUserAttributeVerificationCode`<sup>Required</sup> <a name="opGetUserAttributeVerificationCode" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUserAttributeVerificationCode"></a>

```typescript
public readonly opGetUserAttributeVerificationCode: string[];
```

- *Type:* string[]

IAM actions required for the GetUserAttributeVerificationCode API call.

---

##### `opGetUserAuthFactors`<sup>Required</sup> <a name="opGetUserAuthFactors" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUserAuthFactors"></a>

```typescript
public readonly opGetUserAuthFactors: string[];
```

- *Type:* string[]

IAM actions required for the GetUserAuthFactors API call.

---

##### `opGetUserPoolMfaConfig`<sup>Required</sup> <a name="opGetUserPoolMfaConfig" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opGetUserPoolMfaConfig"></a>

```typescript
public readonly opGetUserPoolMfaConfig: string[];
```

- *Type:* string[]

IAM actions required for the GetUserPoolMfaConfig API call.

---

##### `opSetLogDeliveryConfiguration`<sup>Required</sup> <a name="opSetLogDeliveryConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetLogDeliveryConfiguration"></a>

```typescript
public readonly opSetLogDeliveryConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the SetLogDeliveryConfiguration API call.

---

##### `opSetRiskConfiguration`<sup>Required</sup> <a name="opSetRiskConfiguration" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetRiskConfiguration"></a>

```typescript
public readonly opSetRiskConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the SetRiskConfiguration API call.

---

##### `opSetUICustomization`<sup>Required</sup> <a name="opSetUICustomization" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUICustomization"></a>

```typescript
public readonly opSetUICustomization: string[];
```

- *Type:* string[]

IAM actions required for the SetUICustomization API call.

---

##### `opSetUserMFAPreference`<sup>Required</sup> <a name="opSetUserMFAPreference" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUserMFAPreference"></a>

```typescript
public readonly opSetUserMFAPreference: string[];
```

- *Type:* string[]

IAM actions required for the SetUserMFAPreference API call.

---

##### `opSetUserPoolMfaConfig`<sup>Required</sup> <a name="opSetUserPoolMfaConfig" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUserPoolMfaConfig"></a>

```typescript
public readonly opSetUserPoolMfaConfig: string[];
```

- *Type:* string[]

IAM actions required for the SetUserPoolMfaConfig API call.

---

##### `opSetUserSettings`<sup>Required</sup> <a name="opSetUserSettings" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.opSetUserSettings"></a>

```typescript
public readonly opSetUserSettings: string[];
```

- *Type:* string[]

IAM actions required for the SetUserSettings API call.

---

##### `ResendConfirmationCode`<sup>Required</sup> <a name="ResendConfirmationCode" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.ResendConfirmationCode"></a>

```typescript
public readonly ResendConfirmationCode: string[];
```

- *Type:* string[]

IAM actions required for the ResendConfirmationCode API call.

---

##### `RespondToAuthChallenge`<sup>Required</sup> <a name="RespondToAuthChallenge" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.RespondToAuthChallenge"></a>

```typescript
public readonly RespondToAuthChallenge: string[];
```

- *Type:* string[]

IAM actions required for the RespondToAuthChallenge API call.

---

##### `RevokeToken`<sup>Required</sup> <a name="RevokeToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.RevokeToken"></a>

```typescript
public readonly RevokeToken: string[];
```

- *Type:* string[]

IAM actions required for the RevokeToken API call.

---

##### `SignUp`<sup>Required</sup> <a name="SignUp" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.SignUp"></a>

```typescript
public readonly SignUp: string[];
```

- *Type:* string[]

IAM actions required for the SignUp API call.

---

##### `StartUserImportJob`<sup>Required</sup> <a name="StartUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.StartUserImportJob"></a>

```typescript
public readonly StartUserImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StartUserImportJob API call.

---

##### `StartWebAuthnRegistration`<sup>Required</sup> <a name="StartWebAuthnRegistration" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.StartWebAuthnRegistration"></a>

```typescript
public readonly StartWebAuthnRegistration: string[];
```

- *Type:* string[]

IAM actions required for the StartWebAuthnRegistration API call.

---

##### `StopUserImportJob`<sup>Required</sup> <a name="StopUserImportJob" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.StopUserImportJob"></a>

```typescript
public readonly StopUserImportJob: string[];
```

- *Type:* string[]

IAM actions required for the StopUserImportJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateAuthEventFeedback`<sup>Required</sup> <a name="UpdateAuthEventFeedback" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateAuthEventFeedback"></a>

```typescript
public readonly UpdateAuthEventFeedback: string[];
```

- *Type:* string[]

IAM actions required for the UpdateAuthEventFeedback API call.

---

##### `UpdateDeviceStatus`<sup>Required</sup> <a name="UpdateDeviceStatus" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateDeviceStatus"></a>

```typescript
public readonly UpdateDeviceStatus: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDeviceStatus API call.

---

##### `UpdateGroup`<sup>Required</sup> <a name="UpdateGroup" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateGroup"></a>

```typescript
public readonly UpdateGroup: string[];
```

- *Type:* string[]

IAM actions required for the UpdateGroup API call.

---

##### `UpdateIdentityProvider`<sup>Required</sup> <a name="UpdateIdentityProvider" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateIdentityProvider"></a>

```typescript
public readonly UpdateIdentityProvider: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdentityProvider API call.

---

##### `UpdateManagedLoginBranding`<sup>Required</sup> <a name="UpdateManagedLoginBranding" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateManagedLoginBranding"></a>

```typescript
public readonly UpdateManagedLoginBranding: string[];
```

- *Type:* string[]

IAM actions required for the UpdateManagedLoginBranding API call.

---

##### `UpdateProvisionedLimit`<sup>Required</sup> <a name="UpdateProvisionedLimit" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateProvisionedLimit"></a>

```typescript
public readonly UpdateProvisionedLimit: string[];
```

- *Type:* string[]

IAM actions required for the UpdateProvisionedLimit API call.

---

##### `UpdateResourceServer`<sup>Required</sup> <a name="UpdateResourceServer" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateResourceServer"></a>

```typescript
public readonly UpdateResourceServer: string[];
```

- *Type:* string[]

IAM actions required for the UpdateResourceServer API call.

---

##### `UpdateTerms`<sup>Required</sup> <a name="UpdateTerms" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateTerms"></a>

```typescript
public readonly UpdateTerms: string[];
```

- *Type:* string[]

IAM actions required for the UpdateTerms API call.

---

##### `UpdateUserAttributes`<sup>Required</sup> <a name="UpdateUserAttributes" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserAttributes"></a>

```typescript
public readonly UpdateUserAttributes: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserAttributes API call.

---

##### `UpdateUserPool`<sup>Required</sup> <a name="UpdateUserPool" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPool"></a>

```typescript
public readonly UpdateUserPool: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserPool API call.

---

##### `UpdateUserPoolClient`<sup>Required</sup> <a name="UpdateUserPoolClient" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPoolClient"></a>

```typescript
public readonly UpdateUserPoolClient: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserPoolClient API call.

---

##### `UpdateUserPoolDomain`<sup>Required</sup> <a name="UpdateUserPoolDomain" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPoolDomain"></a>

```typescript
public readonly UpdateUserPoolDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserPoolDomain API call.

---

##### `UpdateUserPoolReplica`<sup>Required</sup> <a name="UpdateUserPoolReplica" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.UpdateUserPoolReplica"></a>

```typescript
public readonly UpdateUserPoolReplica: string[];
```

- *Type:* string[]

IAM actions required for the UpdateUserPoolReplica API call.

---

##### `VerifySoftwareToken`<sup>Required</sup> <a name="VerifySoftwareToken" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.VerifySoftwareToken"></a>

```typescript
public readonly VerifySoftwareToken: string[];
```

- *Type:* string[]

IAM actions required for the VerifySoftwareToken API call.

---

##### `VerifyUserAttribute`<sup>Required</sup> <a name="VerifyUserAttribute" id="@cdk_utils/iam.cognito_idp.CognitoIdpOperations.property.VerifyUserAttribute"></a>

```typescript
public readonly VerifyUserAttribute: string[];
```

- *Type:* string[]

IAM actions required for the VerifyUserAttribute API call.

---

### CognitoIdpResources <a name="CognitoIdpResources" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources"></a>

ARN builders, validators, and parsers for cognito-idp resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.Initializer"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

new cognito_idp.CognitoIdpResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpResources.isValidUserpoolArn">isValidUserpoolArn</a></code> | Validates whether a string is a valid ARN for the userpool resource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpResources.isValidWebaclArn">isValidWebaclArn</a></code> | Validates whether a string is a valid ARN for the webacl resource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpResources.parseUserpoolArn">parseUserpoolArn</a></code> | Parses a userpool ARN into its components. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpResources.parseWebaclArn">parseWebaclArn</a></code> | Parses a webacl ARN into its components. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpResources.userpool">userpool</a></code> | Builds an ARN for the userpool resource. |
| <code><a href="#@cdk_utils/iam.cognito_idp.CognitoIdpResources.webacl">webacl</a></code> | Builds an ARN for the webacl resource. |

---

##### `isValidUserpoolArn` <a name="isValidUserpoolArn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.isValidUserpoolArn"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpResources.isValidUserpoolArn(arn: string)
```

Validates whether a string is a valid ARN for the userpool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.isValidUserpoolArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidWebaclArn` <a name="isValidWebaclArn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.isValidWebaclArn"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpResources.isValidWebaclArn(arn: string)
```

Validates whether a string is a valid ARN for the webacl resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.isValidWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `parseUserpoolArn` <a name="parseUserpoolArn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.parseUserpoolArn"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpResources.parseUserpoolArn(arn: string)
```

Parses a userpool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.parseUserpoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseWebaclArn` <a name="parseWebaclArn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.parseWebaclArn"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpResources.parseWebaclArn(arn: string)
```

Parses a webacl ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.parseWebaclArn.parameter.arn"></a>

- *Type:* string

---

##### `userpool` <a name="userpool" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.userpool"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpResources.userpool(props: CognitoIdpUserpoolArnProps)
```

Builds an ARN for the userpool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.userpool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cognito_idp.CognitoIdpUserpoolArnProps">CognitoIdpUserpoolArnProps</a>

---

##### `webacl` <a name="webacl" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.webacl"></a>

```typescript
import { cognito_idp } from '@cdk_utils/iam'

cognito_idp.CognitoIdpResources.webacl(props: CognitoIdpWebaclArnProps)
```

Builds an ARN for the webacl resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cognito_idp.CognitoIdpResources.webacl.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cognito_idp.CognitoIdpWebaclArnProps">CognitoIdpWebaclArnProps</a>

---




