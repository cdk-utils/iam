# `signin` Submodule <a name="`signin` Submodule" id="@cdk_utils/iam.signin"></a>


## Structs <a name="Structs" id="Structs"></a>

### SigninConsoleArnComponents <a name="SigninConsoleArnComponents" id="@cdk_utils/iam.signin.SigninConsoleArnComponents"></a>

Parsed components of a console ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninConsoleArnComponents.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinConsoleArnComponents: signin.SigninConsoleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnComponents.property.consoleName">consoleName</a></code> | <code>string</code> | The ConsoleName component. |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signin.SigninConsoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `consoleName`<sup>Required</sup> <a name="consoleName" id="@cdk_utils/iam.signin.SigninConsoleArnComponents.property.consoleName"></a>

```typescript
public readonly consoleName: string;
```

- *Type:* string

The ConsoleName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninConsoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signin.SigninConsoleArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SigninConsoleArnProps <a name="SigninConsoleArnProps" id="@cdk_utils/iam.signin.SigninConsoleArnProps"></a>

Properties for building a console ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninConsoleArnProps.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinConsoleArnProps: signin.SigninConsoleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnProps.property.consoleName">consoleName</a></code> | <code>string</code> | The ConsoleName component of the ARN. |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninConsoleArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `consoleName`<sup>Required</sup> <a name="consoleName" id="@cdk_utils/iam.signin.SigninConsoleArnProps.property.consoleName"></a>

```typescript
public readonly consoleName: string;
```

- *Type:* string

The ConsoleName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signin.SigninConsoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninConsoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signin.SigninConsoleArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SigninOauth2PublicClientLocalhostArnComponents <a name="SigninOauth2PublicClientLocalhostArnComponents" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents"></a>

Parsed components of a oauth2-public-client-localhost ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2PublicClientLocalhostArnComponents: signin.SigninOauth2PublicClientLocalhostArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SigninOauth2PublicClientLocalhostArnProps <a name="SigninOauth2PublicClientLocalhostArnProps" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps"></a>

Properties for building a oauth2-public-client-localhost ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2PublicClientLocalhostArnProps: signin.SigninOauth2PublicClientLocalhostArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SigninOauth2PublicClientRegistrationArnComponents <a name="SigninOauth2PublicClientRegistrationArnComponents" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents"></a>

Parsed components of a oauth2-public-client-registration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2PublicClientRegistrationArnComponents: signin.SigninOauth2PublicClientRegistrationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SigninOauth2PublicClientRegistrationArnProps <a name="SigninOauth2PublicClientRegistrationArnProps" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps"></a>

Properties for building a oauth2-public-client-registration ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2PublicClientRegistrationArnProps: signin.SigninOauth2PublicClientRegistrationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SigninOauth2PublicClientRemoteArnComponents <a name="SigninOauth2PublicClientRemoteArnComponents" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents"></a>

Parsed components of a oauth2-public-client-remote ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2PublicClientRemoteArnComponents: signin.SigninOauth2PublicClientRemoteArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SigninOauth2PublicClientRemoteArnProps <a name="SigninOauth2PublicClientRemoteArnProps" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps"></a>

Properties for building a oauth2-public-client-remote ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2PublicClientRemoteArnProps: signin.SigninOauth2PublicClientRemoteArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SigninOauth2ResourceServicePrincipalArnComponents <a name="SigninOauth2ResourceServicePrincipalArnComponents" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents"></a>

Parsed components of a oauth2-resource-service-principal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2ResourceServicePrincipalArnComponents: signin.SigninOauth2ResourceServicePrincipalArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | The ServicePrincipalName component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnComponents.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

The ServicePrincipalName component.

---

### SigninOauth2ResourceServicePrincipalArnProps <a name="SigninOauth2ResourceServicePrincipalArnProps" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps"></a>

Properties for building a oauth2-resource-service-principal ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

const signinOauth2ResourceServicePrincipalArnProps: signin.SigninOauth2ResourceServicePrincipalArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.servicePrincipalName">servicePrincipalName</a></code> | <code>string</code> | The ServicePrincipalName component of the ARN. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `servicePrincipalName`<sup>Required</sup> <a name="servicePrincipalName" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.servicePrincipalName"></a>

```typescript
public readonly servicePrincipalName: string;
```

- *Type:* string

The ServicePrincipalName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SigninActions <a name="SigninActions" id="@cdk_utils/iam.signin.SigninActions"></a>

IAM action constants for the signin service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signin.SigninActions.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

new signin.SigninActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.actionGetConsoleAuthorizationConfiguration">actionGetConsoleAuthorizationConfiguration</a></code> | <code>string</code> | [Read] signin:GetConsoleAuthorizationConfiguration. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.actionGetResourcePolicy">actionGetResourcePolicy</a></code> | <code>string</code> | [Read] signin:GetResourcePolicy. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.Authenticate">Authenticate</a></code> | <code>string</code> | [Read] signin:Authenticate. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.AuthorizeOAuth2Access">AuthorizeOAuth2Access</a></code> | <code>string</code> | [Read] signin:AuthorizeOAuth2Access. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.CreateAccount">CreateAccount</a></code> | <code>string</code> | [Write] signin:CreateAccount. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.CreateOAuth2PublicClient">CreateOAuth2PublicClient</a></code> | <code>string</code> | [Write] signin:CreateOAuth2PublicClient. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.CreateOAuth2Token">CreateOAuth2Token</a></code> | <code>string</code> | [Read] signin:CreateOAuth2Token. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.CreateTrustedIdentityPropagationApplicationForConsole">CreateTrustedIdentityPropagationApplicationForConsole</a></code> | <code>string</code> | [Write] signin:CreateTrustedIdentityPropagationApplicationForConsole. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.DeleteConsoleAuthorizationConfiguration">DeleteConsoleAuthorizationConfiguration</a></code> | <code>string</code> | [Write] signin:DeleteConsoleAuthorizationConfiguration. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.DeleteResourcePermissionStatement">DeleteResourcePermissionStatement</a></code> | <code>string</code> | [Write] signin:DeleteResourcePermissionStatement. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.IntrospectOAuth2Token">IntrospectOAuth2Token</a></code> | <code>string</code> | [Read] signin:IntrospectOAuth2Token. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.ListResourcePermissionStatements">ListResourcePermissionStatements</a></code> | <code>string</code> | [List] signin:ListResourcePermissionStatements. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.ListTrustedIdentityPropagationApplicationsForConsole">ListTrustedIdentityPropagationApplicationsForConsole</a></code> | <code>string</code> | [List] signin:ListTrustedIdentityPropagationApplicationsForConsole. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.PutConsoleAuthorizationConfiguration">PutConsoleAuthorizationConfiguration</a></code> | <code>string</code> | [Write] signin:PutConsoleAuthorizationConfiguration. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.PutResourcePermissionStatement">PutResourcePermissionStatement</a></code> | <code>string</code> | [Write] signin:PutResourcePermissionStatement. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.RevokeOAuth2Token">RevokeOAuth2Token</a></code> | <code>string</code> | [Write] signin:RevokeOAuth2Token. |
| <code><a href="#@cdk_utils/iam.signin.SigninActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |

---

##### `actionGetConsoleAuthorizationConfiguration`<sup>Required</sup> <a name="actionGetConsoleAuthorizationConfiguration" id="@cdk_utils/iam.signin.SigninActions.property.actionGetConsoleAuthorizationConfiguration"></a>

```typescript
public readonly actionGetConsoleAuthorizationConfiguration: string;
```

- *Type:* string

[Read] signin:GetConsoleAuthorizationConfiguration.

---

##### `actionGetResourcePolicy`<sup>Required</sup> <a name="actionGetResourcePolicy" id="@cdk_utils/iam.signin.SigninActions.property.actionGetResourcePolicy"></a>

```typescript
public readonly actionGetResourcePolicy: string;
```

- *Type:* string

[Read] signin:GetResourcePolicy.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.signin.SigninActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.signin.SigninActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.signin.SigninActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.signin.SigninActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.signin.SigninActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `Authenticate`<sup>Required</sup> <a name="Authenticate" id="@cdk_utils/iam.signin.SigninActions.property.Authenticate"></a>

```typescript
public readonly Authenticate: string;
```

- *Type:* string

[Read] signin:Authenticate.

---

##### `AuthorizeOAuth2Access`<sup>Required</sup> <a name="AuthorizeOAuth2Access" id="@cdk_utils/iam.signin.SigninActions.property.AuthorizeOAuth2Access"></a>

```typescript
public readonly AuthorizeOAuth2Access: string;
```

- *Type:* string

[Read] signin:AuthorizeOAuth2Access.

---

##### `CreateAccount`<sup>Required</sup> <a name="CreateAccount" id="@cdk_utils/iam.signin.SigninActions.property.CreateAccount"></a>

```typescript
public readonly CreateAccount: string;
```

- *Type:* string

[Write] signin:CreateAccount.

---

##### `CreateOAuth2PublicClient`<sup>Required</sup> <a name="CreateOAuth2PublicClient" id="@cdk_utils/iam.signin.SigninActions.property.CreateOAuth2PublicClient"></a>

```typescript
public readonly CreateOAuth2PublicClient: string;
```

- *Type:* string

[Write] signin:CreateOAuth2PublicClient.

---

##### `CreateOAuth2Token`<sup>Required</sup> <a name="CreateOAuth2Token" id="@cdk_utils/iam.signin.SigninActions.property.CreateOAuth2Token"></a>

```typescript
public readonly CreateOAuth2Token: string;
```

- *Type:* string

[Read] signin:CreateOAuth2Token.

---

##### `CreateTrustedIdentityPropagationApplicationForConsole`<sup>Required</sup> <a name="CreateTrustedIdentityPropagationApplicationForConsole" id="@cdk_utils/iam.signin.SigninActions.property.CreateTrustedIdentityPropagationApplicationForConsole"></a>

```typescript
public readonly CreateTrustedIdentityPropagationApplicationForConsole: string;
```

- *Type:* string

[Write] signin:CreateTrustedIdentityPropagationApplicationForConsole.

---

##### `DeleteConsoleAuthorizationConfiguration`<sup>Required</sup> <a name="DeleteConsoleAuthorizationConfiguration" id="@cdk_utils/iam.signin.SigninActions.property.DeleteConsoleAuthorizationConfiguration"></a>

```typescript
public readonly DeleteConsoleAuthorizationConfiguration: string;
```

- *Type:* string

[Write] signin:DeleteConsoleAuthorizationConfiguration.

---

##### `DeleteResourcePermissionStatement`<sup>Required</sup> <a name="DeleteResourcePermissionStatement" id="@cdk_utils/iam.signin.SigninActions.property.DeleteResourcePermissionStatement"></a>

```typescript
public readonly DeleteResourcePermissionStatement: string;
```

- *Type:* string

[Write] signin:DeleteResourcePermissionStatement.

---

##### `IntrospectOAuth2Token`<sup>Required</sup> <a name="IntrospectOAuth2Token" id="@cdk_utils/iam.signin.SigninActions.property.IntrospectOAuth2Token"></a>

```typescript
public readonly IntrospectOAuth2Token: string;
```

- *Type:* string

[Read] signin:IntrospectOAuth2Token.

---

##### `ListResourcePermissionStatements`<sup>Required</sup> <a name="ListResourcePermissionStatements" id="@cdk_utils/iam.signin.SigninActions.property.ListResourcePermissionStatements"></a>

```typescript
public readonly ListResourcePermissionStatements: string;
```

- *Type:* string

[List] signin:ListResourcePermissionStatements.

---

##### `ListTrustedIdentityPropagationApplicationsForConsole`<sup>Required</sup> <a name="ListTrustedIdentityPropagationApplicationsForConsole" id="@cdk_utils/iam.signin.SigninActions.property.ListTrustedIdentityPropagationApplicationsForConsole"></a>

```typescript
public readonly ListTrustedIdentityPropagationApplicationsForConsole: string;
```

- *Type:* string

[List] signin:ListTrustedIdentityPropagationApplicationsForConsole.

---

##### `PutConsoleAuthorizationConfiguration`<sup>Required</sup> <a name="PutConsoleAuthorizationConfiguration" id="@cdk_utils/iam.signin.SigninActions.property.PutConsoleAuthorizationConfiguration"></a>

```typescript
public readonly PutConsoleAuthorizationConfiguration: string;
```

- *Type:* string

[Write] signin:PutConsoleAuthorizationConfiguration.

---

##### `PutResourcePermissionStatement`<sup>Required</sup> <a name="PutResourcePermissionStatement" id="@cdk_utils/iam.signin.SigninActions.property.PutResourcePermissionStatement"></a>

```typescript
public readonly PutResourcePermissionStatement: string;
```

- *Type:* string

[Write] signin:PutResourcePermissionStatement.

---

##### `RevokeOAuth2Token`<sup>Required</sup> <a name="RevokeOAuth2Token" id="@cdk_utils/iam.signin.SigninActions.property.RevokeOAuth2Token"></a>

```typescript
public readonly RevokeOAuth2Token: string;
```

- *Type:* string

[Write] signin:RevokeOAuth2Token.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.signin.SigninActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

### SigninConditions <a name="SigninConditions" id="@cdk_utils/iam.signin.SigninConditions"></a>

Condition key constants and builders for signin.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signin.SigninConditions.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

new signin.SigninConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.oAuthClientAuthentication">oAuthClientAuthentication</a></code> | Generates a condition block for `signin:OAuthClientAuthentication`. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.oAuthClientId">oAuthClientId</a></code> | Generates a condition block for `signin:OAuthClientId`. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.oAuthGrantType">oAuthGrantType</a></code> | Generates a condition block for `signin:OAuthGrantType`. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.oAuthRedirectURI">oAuthRedirectURI</a></code> | Generates a condition block for `signin:OAuthRedirectUri`. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.oAuthTokenType">oAuthTokenType</a></code> | Generates a condition block for `signin:OAuthTokenType`. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.principalARN">principalARN</a></code> | Generates a condition block for `signin:PrincipalArn`. |

---

##### `oAuthClientAuthentication` <a name="oAuthClientAuthentication" id="@cdk_utils/iam.signin.SigninConditions.oAuthClientAuthentication"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninConditions.oAuthClientAuthentication(value: string)
```

Generates a condition block for `signin:OAuthClientAuthentication`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signin.SigninConditions.oAuthClientAuthentication.parameter.value"></a>

- *Type:* string

---

##### `oAuthClientId` <a name="oAuthClientId" id="@cdk_utils/iam.signin.SigninConditions.oAuthClientId"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninConditions.oAuthClientId(value: string)
```

Generates a condition block for `signin:OAuthClientId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signin.SigninConditions.oAuthClientId.parameter.value"></a>

- *Type:* string

---

##### `oAuthGrantType` <a name="oAuthGrantType" id="@cdk_utils/iam.signin.SigninConditions.oAuthGrantType"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninConditions.oAuthGrantType(value: string)
```

Generates a condition block for `signin:OAuthGrantType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signin.SigninConditions.oAuthGrantType.parameter.value"></a>

- *Type:* string

---

##### `oAuthRedirectURI` <a name="oAuthRedirectURI" id="@cdk_utils/iam.signin.SigninConditions.oAuthRedirectURI"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninConditions.oAuthRedirectURI(value: string)
```

Generates a condition block for `signin:OAuthRedirectUri`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signin.SigninConditions.oAuthRedirectURI.parameter.value"></a>

- *Type:* string

---

##### `oAuthTokenType` <a name="oAuthTokenType" id="@cdk_utils/iam.signin.SigninConditions.oAuthTokenType"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninConditions.oAuthTokenType(value: string)
```

Generates a condition block for `signin:OAuthTokenType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signin.SigninConditions.oAuthTokenType.parameter.value"></a>

- *Type:* string

---

##### `principalARN` <a name="principalARN" id="@cdk_utils/iam.signin.SigninConditions.principalARN"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninConditions.principalARN(value: string)
```

Generates a condition block for `signin:PrincipalArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signin.SigninConditions.principalARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.AuthenticateConditionKeys">AuthenticateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the Authenticate action. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.CreateOAuth2PublicClientConditionKeys">CreateOAuth2PublicClientConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateOAuth2PublicClient action. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.IntrospectOAuth2TokenConditionKeys">IntrospectOAuth2TokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the IntrospectOAuth2Token action. |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_CLIENT_AUTHENTICATION">O_AUTH_CLIENT_AUTHENTICATION</a></code> | <code>string</code> | Condition key: signin:OAuthClientAuthentication (String). |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_CLIENT_ID">O_AUTH_CLIENT_ID</a></code> | <code>string</code> | Condition key: signin:OAuthClientId (String). |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_GRANT_TYPE">O_AUTH_GRANT_TYPE</a></code> | <code>string</code> | Condition key: signin:OAuthGrantType (String). |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_REDIRECT_URI">O_AUTH_REDIRECT_URI</a></code> | <code>string</code> | Condition key: signin:OAuthRedirectUri (String). |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_TOKEN_TYPE">O_AUTH_TOKEN_TYPE</a></code> | <code>string</code> | Condition key: signin:OAuthTokenType (String). |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.PRINCIPAL_ARN">PRINCIPAL_ARN</a></code> | <code>string</code> | Condition key: signin:PrincipalArn (ARN). |
| <code><a href="#@cdk_utils/iam.signin.SigninConditions.property.RevokeOAuth2TokenConditionKeys">RevokeOAuth2TokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RevokeOAuth2Token action. |

---

##### `AuthenticateConditionKeys`<sup>Required</sup> <a name="AuthenticateConditionKeys" id="@cdk_utils/iam.signin.SigninConditions.property.AuthenticateConditionKeys"></a>

```typescript
public readonly AuthenticateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the Authenticate action.

---

##### `CreateOAuth2PublicClientConditionKeys`<sup>Required</sup> <a name="CreateOAuth2PublicClientConditionKeys" id="@cdk_utils/iam.signin.SigninConditions.property.CreateOAuth2PublicClientConditionKeys"></a>

```typescript
public readonly CreateOAuth2PublicClientConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateOAuth2PublicClient action.

---

##### `IntrospectOAuth2TokenConditionKeys`<sup>Required</sup> <a name="IntrospectOAuth2TokenConditionKeys" id="@cdk_utils/iam.signin.SigninConditions.property.IntrospectOAuth2TokenConditionKeys"></a>

```typescript
public readonly IntrospectOAuth2TokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the IntrospectOAuth2Token action.

---

##### `O_AUTH_CLIENT_AUTHENTICATION`<sup>Required</sup> <a name="O_AUTH_CLIENT_AUTHENTICATION" id="@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_CLIENT_AUTHENTICATION"></a>

```typescript
public readonly O_AUTH_CLIENT_AUTHENTICATION: string;
```

- *Type:* string

Condition key: signin:OAuthClientAuthentication (String).

---

##### `O_AUTH_CLIENT_ID`<sup>Required</sup> <a name="O_AUTH_CLIENT_ID" id="@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_CLIENT_ID"></a>

```typescript
public readonly O_AUTH_CLIENT_ID: string;
```

- *Type:* string

Condition key: signin:OAuthClientId (String).

---

##### `O_AUTH_GRANT_TYPE`<sup>Required</sup> <a name="O_AUTH_GRANT_TYPE" id="@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_GRANT_TYPE"></a>

```typescript
public readonly O_AUTH_GRANT_TYPE: string;
```

- *Type:* string

Condition key: signin:OAuthGrantType (String).

---

##### `O_AUTH_REDIRECT_URI`<sup>Required</sup> <a name="O_AUTH_REDIRECT_URI" id="@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_REDIRECT_URI"></a>

```typescript
public readonly O_AUTH_REDIRECT_URI: string;
```

- *Type:* string

Condition key: signin:OAuthRedirectUri (String).

---

##### `O_AUTH_TOKEN_TYPE`<sup>Required</sup> <a name="O_AUTH_TOKEN_TYPE" id="@cdk_utils/iam.signin.SigninConditions.property.O_AUTH_TOKEN_TYPE"></a>

```typescript
public readonly O_AUTH_TOKEN_TYPE: string;
```

- *Type:* string

Condition key: signin:OAuthTokenType (String).

---

##### `PRINCIPAL_ARN`<sup>Required</sup> <a name="PRINCIPAL_ARN" id="@cdk_utils/iam.signin.SigninConditions.property.PRINCIPAL_ARN"></a>

```typescript
public readonly PRINCIPAL_ARN: string;
```

- *Type:* string

Condition key: signin:PrincipalArn (ARN).

---

##### `RevokeOAuth2TokenConditionKeys`<sup>Required</sup> <a name="RevokeOAuth2TokenConditionKeys" id="@cdk_utils/iam.signin.SigninConditions.property.RevokeOAuth2TokenConditionKeys"></a>

```typescript
public readonly RevokeOAuth2TokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RevokeOAuth2Token action.

---

### SigninOperations <a name="SigninOperations" id="@cdk_utils/iam.signin.SigninOperations"></a>

API operation to required IAM actions mapping for signin.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signin.SigninOperations.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

new signin.SigninOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.CreateOAuth2Token">CreateOAuth2Token</a></code> | <code>string[]</code> | IAM actions required for the CreateOAuth2Token API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.CreateOAuth2TokenWithIAM">CreateOAuth2TokenWithIAM</a></code> | <code>string[]</code> | IAM actions required for the CreateOAuth2TokenWithIAM API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.DeleteConsoleAuthorizationConfiguration">DeleteConsoleAuthorizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the DeleteConsoleAuthorizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.DeleteResourcePermissionStatement">DeleteResourcePermissionStatement</a></code> | <code>string[]</code> | IAM actions required for the DeleteResourcePermissionStatement API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.IntrospectOAuth2TokenWithIAM">IntrospectOAuth2TokenWithIAM</a></code> | <code>string[]</code> | IAM actions required for the IntrospectOAuth2TokenWithIAM API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.ListResourcePermissionStatements">ListResourcePermissionStatements</a></code> | <code>string[]</code> | IAM actions required for the ListResourcePermissionStatements API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.opGetConsoleAuthorizationConfiguration">opGetConsoleAuthorizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the GetConsoleAuthorizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.opGetResourcePolicy">opGetResourcePolicy</a></code> | <code>string[]</code> | IAM actions required for the GetResourcePolicy API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.PutConsoleAuthorizationConfiguration">PutConsoleAuthorizationConfiguration</a></code> | <code>string[]</code> | IAM actions required for the PutConsoleAuthorizationConfiguration API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.PutResourcePermissionStatement">PutResourcePermissionStatement</a></code> | <code>string[]</code> | IAM actions required for the PutResourcePermissionStatement API call. |
| <code><a href="#@cdk_utils/iam.signin.SigninOperations.property.RevokeOAuth2TokenWithIAM">RevokeOAuth2TokenWithIAM</a></code> | <code>string[]</code> | IAM actions required for the RevokeOAuth2TokenWithIAM API call. |

---

##### `CreateOAuth2Token`<sup>Required</sup> <a name="CreateOAuth2Token" id="@cdk_utils/iam.signin.SigninOperations.property.CreateOAuth2Token"></a>

```typescript
public readonly CreateOAuth2Token: string[];
```

- *Type:* string[]

IAM actions required for the CreateOAuth2Token API call.

---

##### `CreateOAuth2TokenWithIAM`<sup>Required</sup> <a name="CreateOAuth2TokenWithIAM" id="@cdk_utils/iam.signin.SigninOperations.property.CreateOAuth2TokenWithIAM"></a>

```typescript
public readonly CreateOAuth2TokenWithIAM: string[];
```

- *Type:* string[]

IAM actions required for the CreateOAuth2TokenWithIAM API call.

---

##### `DeleteConsoleAuthorizationConfiguration`<sup>Required</sup> <a name="DeleteConsoleAuthorizationConfiguration" id="@cdk_utils/iam.signin.SigninOperations.property.DeleteConsoleAuthorizationConfiguration"></a>

```typescript
public readonly DeleteConsoleAuthorizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the DeleteConsoleAuthorizationConfiguration API call.

---

##### `DeleteResourcePermissionStatement`<sup>Required</sup> <a name="DeleteResourcePermissionStatement" id="@cdk_utils/iam.signin.SigninOperations.property.DeleteResourcePermissionStatement"></a>

```typescript
public readonly DeleteResourcePermissionStatement: string[];
```

- *Type:* string[]

IAM actions required for the DeleteResourcePermissionStatement API call.

---

##### `IntrospectOAuth2TokenWithIAM`<sup>Required</sup> <a name="IntrospectOAuth2TokenWithIAM" id="@cdk_utils/iam.signin.SigninOperations.property.IntrospectOAuth2TokenWithIAM"></a>

```typescript
public readonly IntrospectOAuth2TokenWithIAM: string[];
```

- *Type:* string[]

IAM actions required for the IntrospectOAuth2TokenWithIAM API call.

---

##### `ListResourcePermissionStatements`<sup>Required</sup> <a name="ListResourcePermissionStatements" id="@cdk_utils/iam.signin.SigninOperations.property.ListResourcePermissionStatements"></a>

```typescript
public readonly ListResourcePermissionStatements: string[];
```

- *Type:* string[]

IAM actions required for the ListResourcePermissionStatements API call.

---

##### `opGetConsoleAuthorizationConfiguration`<sup>Required</sup> <a name="opGetConsoleAuthorizationConfiguration" id="@cdk_utils/iam.signin.SigninOperations.property.opGetConsoleAuthorizationConfiguration"></a>

```typescript
public readonly opGetConsoleAuthorizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the GetConsoleAuthorizationConfiguration API call.

---

##### `opGetResourcePolicy`<sup>Required</sup> <a name="opGetResourcePolicy" id="@cdk_utils/iam.signin.SigninOperations.property.opGetResourcePolicy"></a>

```typescript
public readonly opGetResourcePolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetResourcePolicy API call.

---

##### `PutConsoleAuthorizationConfiguration`<sup>Required</sup> <a name="PutConsoleAuthorizationConfiguration" id="@cdk_utils/iam.signin.SigninOperations.property.PutConsoleAuthorizationConfiguration"></a>

```typescript
public readonly PutConsoleAuthorizationConfiguration: string[];
```

- *Type:* string[]

IAM actions required for the PutConsoleAuthorizationConfiguration API call.

---

##### `PutResourcePermissionStatement`<sup>Required</sup> <a name="PutResourcePermissionStatement" id="@cdk_utils/iam.signin.SigninOperations.property.PutResourcePermissionStatement"></a>

```typescript
public readonly PutResourcePermissionStatement: string[];
```

- *Type:* string[]

IAM actions required for the PutResourcePermissionStatement API call.

---

##### `RevokeOAuth2TokenWithIAM`<sup>Required</sup> <a name="RevokeOAuth2TokenWithIAM" id="@cdk_utils/iam.signin.SigninOperations.property.RevokeOAuth2TokenWithIAM"></a>

```typescript
public readonly RevokeOAuth2TokenWithIAM: string[];
```

- *Type:* string[]

IAM actions required for the RevokeOAuth2TokenWithIAM API call.

---

### SigninResources <a name="SigninResources" id="@cdk_utils/iam.signin.SigninResources"></a>

ARN builders, validators, and parsers for signin resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signin.SigninResources.Initializer"></a>

```typescript
import { signin } from '@cdk_utils/iam'

new signin.SigninResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.console">console</a></code> | Builds an ARN for the console resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.isValidConsoleArn">isValidConsoleArn</a></code> | Validates whether a string is a valid ARN for the console resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientLocalhostArn">isValidOauth2PublicClientLocalhostArn</a></code> | Validates whether a string is a valid ARN for the oauth2-public-client-localhost resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientRegistrationArn">isValidOauth2PublicClientRegistrationArn</a></code> | Validates whether a string is a valid ARN for the oauth2-public-client-registration resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientRemoteArn">isValidOauth2PublicClientRemoteArn</a></code> | Validates whether a string is a valid ARN for the oauth2-public-client-remote resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.isValidOauth2ResourceServicePrincipalArn">isValidOauth2ResourceServicePrincipalArn</a></code> | Validates whether a string is a valid ARN for the oauth2-resource-service-principal resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.oauth2PublicClientLocalhost">oauth2PublicClientLocalhost</a></code> | Builds an ARN for the oauth2-public-client-localhost resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.oauth2PublicClientRegistration">oauth2PublicClientRegistration</a></code> | Builds an ARN for the oauth2-public-client-registration resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.oauth2PublicClientRemote">oauth2PublicClientRemote</a></code> | Builds an ARN for the oauth2-public-client-remote resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.oauth2ResourceServicePrincipal">oauth2ResourceServicePrincipal</a></code> | Builds an ARN for the oauth2-resource-service-principal resource. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.parseConsoleArn">parseConsoleArn</a></code> | Parses a console ARN into its components. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientLocalhostArn">parseOauth2PublicClientLocalhostArn</a></code> | Parses a oauth2-public-client-localhost ARN into its components. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientRegistrationArn">parseOauth2PublicClientRegistrationArn</a></code> | Parses a oauth2-public-client-registration ARN into its components. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientRemoteArn">parseOauth2PublicClientRemoteArn</a></code> | Parses a oauth2-public-client-remote ARN into its components. |
| <code><a href="#@cdk_utils/iam.signin.SigninResources.parseOauth2ResourceServicePrincipalArn">parseOauth2ResourceServicePrincipalArn</a></code> | Parses a oauth2-resource-service-principal ARN into its components. |

---

##### `console` <a name="console" id="@cdk_utils/iam.signin.SigninResources.console"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.console(props: SigninConsoleArnProps)
```

Builds an ARN for the console resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signin.SigninResources.console.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signin.SigninConsoleArnProps">SigninConsoleArnProps</a>

---

##### `isValidConsoleArn` <a name="isValidConsoleArn" id="@cdk_utils/iam.signin.SigninResources.isValidConsoleArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.isValidConsoleArn(arn: string)
```

Validates whether a string is a valid ARN for the console resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.isValidConsoleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOauth2PublicClientLocalhostArn` <a name="isValidOauth2PublicClientLocalhostArn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientLocalhostArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.isValidOauth2PublicClientLocalhostArn(arn: string)
```

Validates whether a string is a valid ARN for the oauth2-public-client-localhost resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientLocalhostArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOauth2PublicClientRegistrationArn` <a name="isValidOauth2PublicClientRegistrationArn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientRegistrationArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.isValidOauth2PublicClientRegistrationArn(arn: string)
```

Validates whether a string is a valid ARN for the oauth2-public-client-registration resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientRegistrationArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOauth2PublicClientRemoteArn` <a name="isValidOauth2PublicClientRemoteArn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientRemoteArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.isValidOauth2PublicClientRemoteArn(arn: string)
```

Validates whether a string is a valid ARN for the oauth2-public-client-remote resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2PublicClientRemoteArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidOauth2ResourceServicePrincipalArn` <a name="isValidOauth2ResourceServicePrincipalArn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2ResourceServicePrincipalArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.isValidOauth2ResourceServicePrincipalArn(arn: string)
```

Validates whether a string is a valid ARN for the oauth2-resource-service-principal resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.isValidOauth2ResourceServicePrincipalArn.parameter.arn"></a>

- *Type:* string

---

##### `oauth2PublicClientLocalhost` <a name="oauth2PublicClientLocalhost" id="@cdk_utils/iam.signin.SigninResources.oauth2PublicClientLocalhost"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.oauth2PublicClientLocalhost(props: SigninOauth2PublicClientLocalhostArnProps)
```

Builds an ARN for the oauth2-public-client-localhost resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signin.SigninResources.oauth2PublicClientLocalhost.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientLocalhostArnProps">SigninOauth2PublicClientLocalhostArnProps</a>

---

##### `oauth2PublicClientRegistration` <a name="oauth2PublicClientRegistration" id="@cdk_utils/iam.signin.SigninResources.oauth2PublicClientRegistration"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.oauth2PublicClientRegistration(props: SigninOauth2PublicClientRegistrationArnProps)
```

Builds an ARN for the oauth2-public-client-registration resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signin.SigninResources.oauth2PublicClientRegistration.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRegistrationArnProps">SigninOauth2PublicClientRegistrationArnProps</a>

---

##### `oauth2PublicClientRemote` <a name="oauth2PublicClientRemote" id="@cdk_utils/iam.signin.SigninResources.oauth2PublicClientRemote"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.oauth2PublicClientRemote(props: SigninOauth2PublicClientRemoteArnProps)
```

Builds an ARN for the oauth2-public-client-remote resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signin.SigninResources.oauth2PublicClientRemote.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signin.SigninOauth2PublicClientRemoteArnProps">SigninOauth2PublicClientRemoteArnProps</a>

---

##### `oauth2ResourceServicePrincipal` <a name="oauth2ResourceServicePrincipal" id="@cdk_utils/iam.signin.SigninResources.oauth2ResourceServicePrincipal"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.oauth2ResourceServicePrincipal(props: SigninOauth2ResourceServicePrincipalArnProps)
```

Builds an ARN for the oauth2-resource-service-principal resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signin.SigninResources.oauth2ResourceServicePrincipal.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signin.SigninOauth2ResourceServicePrincipalArnProps">SigninOauth2ResourceServicePrincipalArnProps</a>

---

##### `parseConsoleArn` <a name="parseConsoleArn" id="@cdk_utils/iam.signin.SigninResources.parseConsoleArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.parseConsoleArn(arn: string)
```

Parses a console ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.parseConsoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOauth2PublicClientLocalhostArn` <a name="parseOauth2PublicClientLocalhostArn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientLocalhostArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.parseOauth2PublicClientLocalhostArn(arn: string)
```

Parses a oauth2-public-client-localhost ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientLocalhostArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOauth2PublicClientRegistrationArn` <a name="parseOauth2PublicClientRegistrationArn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientRegistrationArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.parseOauth2PublicClientRegistrationArn(arn: string)
```

Parses a oauth2-public-client-registration ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientRegistrationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOauth2PublicClientRemoteArn` <a name="parseOauth2PublicClientRemoteArn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientRemoteArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.parseOauth2PublicClientRemoteArn(arn: string)
```

Parses a oauth2-public-client-remote ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2PublicClientRemoteArn.parameter.arn"></a>

- *Type:* string

---

##### `parseOauth2ResourceServicePrincipalArn` <a name="parseOauth2ResourceServicePrincipalArn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2ResourceServicePrincipalArn"></a>

```typescript
import { signin } from '@cdk_utils/iam'

signin.SigninResources.parseOauth2ResourceServicePrincipalArn(arn: string)
```

Parses a oauth2-resource-service-principal ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signin.SigninResources.parseOauth2ResourceServicePrincipalArn.parameter.arn"></a>

- *Type:* string

---




