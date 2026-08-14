# `sts` Submodule <a name="`sts` Submodule" id="@cdk_utils/iam.sts"></a>


## Structs <a name="Structs" id="Structs"></a>

### STSContextProviderArnComponents <a name="STSContextProviderArnComponents" id="@cdk_utils/iam.sts.STSContextProviderArnComponents"></a>

Parsed components of a context-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSContextProviderArnComponents.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSContextProviderArnComponents: sts.STSContextProviderArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnComponents.property.contextProviderName">contextProviderName</a></code> | <code>string</code> | The ContextProviderName component. |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sts.STSContextProviderArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `contextProviderName`<sup>Required</sup> <a name="contextProviderName" id="@cdk_utils/iam.sts.STSContextProviderArnComponents.property.contextProviderName"></a>

```typescript
public readonly contextProviderName: string;
```

- *Type:* string

The ContextProviderName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sts.STSContextProviderArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.sts.STSContextProviderArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### STSContextProviderArnProps <a name="STSContextProviderArnProps" id="@cdk_utils/iam.sts.STSContextProviderArnProps"></a>

Properties for building a context-provider ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSContextProviderArnProps.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSContextProviderArnProps: sts.STSContextProviderArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnProps.property.contextProviderName">contextProviderName</a></code> | <code>string</code> | The ContextProviderName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sts.STSContextProviderArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `contextProviderName`<sup>Required</sup> <a name="contextProviderName" id="@cdk_utils/iam.sts.STSContextProviderArnProps.property.contextProviderName"></a>

```typescript
public readonly contextProviderName: string;
```

- *Type:* string

The ContextProviderName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sts.STSContextProviderArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sts.STSContextProviderArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.sts.STSContextProviderArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### STSFederatedUserArnComponents <a name="STSFederatedUserArnComponents" id="@cdk_utils/iam.sts.STSFederatedUserArnComponents"></a>

Parsed components of a federated-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSFederatedUserArnComponents.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSFederatedUserArnComponents: sts.STSFederatedUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSFederatedUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSFederatedUserArnComponents.property.federatedUserName">federatedUserName</a></code> | <code>string</code> | The FederatedUserName component. |
| <code><a href="#@cdk_utils/iam.sts.STSFederatedUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sts.STSFederatedUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `federatedUserName`<sup>Required</sup> <a name="federatedUserName" id="@cdk_utils/iam.sts.STSFederatedUserArnComponents.property.federatedUserName"></a>

```typescript
public readonly federatedUserName: string;
```

- *Type:* string

The FederatedUserName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sts.STSFederatedUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### STSFederatedUserArnProps <a name="STSFederatedUserArnProps" id="@cdk_utils/iam.sts.STSFederatedUserArnProps"></a>

Properties for building a federated-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSFederatedUserArnProps.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSFederatedUserArnProps: sts.STSFederatedUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSFederatedUserArnProps.property.federatedUserName">federatedUserName</a></code> | <code>string</code> | The FederatedUserName component of the ARN. |
| <code><a href="#@cdk_utils/iam.sts.STSFederatedUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSFederatedUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `federatedUserName`<sup>Required</sup> <a name="federatedUserName" id="@cdk_utils/iam.sts.STSFederatedUserArnProps.property.federatedUserName"></a>

```typescript
public readonly federatedUserName: string;
```

- *Type:* string

The FederatedUserName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sts.STSFederatedUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sts.STSFederatedUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### STSRoleArnComponents <a name="STSRoleArnComponents" id="@cdk_utils/iam.sts.STSRoleArnComponents"></a>

Parsed components of a role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSRoleArnComponents.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSRoleArnComponents: sts.STSRoleArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSRoleArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSRoleArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.sts.STSRoleArnComponents.property.roleNameWithPath">roleNameWithPath</a></code> | <code>string</code> | The RoleNameWithPath component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sts.STSRoleArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sts.STSRoleArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `roleNameWithPath`<sup>Required</sup> <a name="roleNameWithPath" id="@cdk_utils/iam.sts.STSRoleArnComponents.property.roleNameWithPath"></a>

```typescript
public readonly roleNameWithPath: string;
```

- *Type:* string

The RoleNameWithPath component.

---

### STSRoleArnProps <a name="STSRoleArnProps" id="@cdk_utils/iam.sts.STSRoleArnProps"></a>

Properties for building a role ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSRoleArnProps.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSRoleArnProps: sts.STSRoleArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSRoleArnProps.property.roleNameWithPath">roleNameWithPath</a></code> | <code>string</code> | The RoleNameWithPath component of the ARN. |
| <code><a href="#@cdk_utils/iam.sts.STSRoleArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSRoleArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `roleNameWithPath`<sup>Required</sup> <a name="roleNameWithPath" id="@cdk_utils/iam.sts.STSRoleArnProps.property.roleNameWithPath"></a>

```typescript
public readonly roleNameWithPath: string;
```

- *Type:* string

The RoleNameWithPath component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sts.STSRoleArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sts.STSRoleArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### STSRootUserArnComponents <a name="STSRootUserArnComponents" id="@cdk_utils/iam.sts.STSRootUserArnComponents"></a>

Parsed components of a root-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSRootUserArnComponents.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSRootUserArnComponents: sts.STSRootUserArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSRootUserArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSRootUserArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sts.STSRootUserArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sts.STSRootUserArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### STSRootUserArnProps <a name="STSRootUserArnProps" id="@cdk_utils/iam.sts.STSRootUserArnProps"></a>

Properties for building a root-user ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSRootUserArnProps.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSRootUserArnProps: sts.STSRootUserArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSRootUserArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSRootUserArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sts.STSRootUserArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sts.STSRootUserArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### STSSelfSessionArnComponents <a name="STSSelfSessionArnComponents" id="@cdk_utils/iam.sts.STSSelfSessionArnComponents"></a>

Parsed components of a self-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSSelfSessionArnComponents.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSSelfSessionArnComponents: sts.STSSelfSessionArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSSelfSessionArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSSelfSessionArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.sts.STSSelfSessionArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.sts.STSSelfSessionArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### STSSelfSessionArnProps <a name="STSSelfSessionArnProps" id="@cdk_utils/iam.sts.STSSelfSessionArnProps"></a>

Properties for building a self-session ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.sts.STSSelfSessionArnProps.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

const sTSSelfSessionArnProps: sts.STSSelfSessionArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSSelfSessionArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.sts.STSSelfSessionArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.sts.STSSelfSessionArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.sts.STSSelfSessionArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### STSActions <a name="STSActions" id="@cdk_utils/iam.sts.STSActions"></a>

IAM action constants for the sts service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sts.STSActions.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

new sts.STSActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetAccessKeyInfo">actionGetAccessKeyInfo</a></code> | <code>string</code> | [Read] sts:GetAccessKeyInfo. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetCallerIdentity">actionGetCallerIdentity</a></code> | <code>string</code> | [Read] sts:GetCallerIdentity. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetDelegatedAccessToken">actionGetDelegatedAccessToken</a></code> | <code>string</code> | [Write] sts:GetDelegatedAccessToken. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetFederationToken">actionGetFederationToken</a></code> | <code>string</code> | [Write] sts:GetFederationToken. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetServiceBearerToken">actionGetServiceBearerToken</a></code> | <code>string</code> | [Read] sts:GetServiceBearerToken. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetSessionToken">actionGetSessionToken</a></code> | <code>string</code> | [Read] sts:GetSessionToken. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionGetWebIdentityToken">actionGetWebIdentityToken</a></code> | <code>string</code> | [Write] sts:GetWebIdentityToken. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionSetContext">actionSetContext</a></code> | <code>string</code> | [Write] sts:SetContext. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.actionSetSourceIdentity">actionSetSourceIdentity</a></code> | <code>string</code> | [Write] sts:SetSourceIdentity. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AssumeRole">AssumeRole</a></code> | <code>string</code> | [Write] sts:AssumeRole. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AssumeRoleWithSAML">AssumeRoleWithSAML</a></code> | <code>string</code> | [Write] sts:AssumeRoleWithSAML. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AssumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code>string</code> | [Write] sts:AssumeRoleWithWebIdentity. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.AssumeRoot">AssumeRoot</a></code> | <code>string</code> | [Write] sts:AssumeRoot. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.DecodeAuthorizationMessage">DecodeAuthorizationMessage</a></code> | <code>string</code> | [Write] sts:DecodeAuthorizationMessage. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.TagGetWebIdentityToken">TagGetWebIdentityToken</a></code> | <code>string</code> | [Tagging] sts:TagGetWebIdentityToken. |
| <code><a href="#@cdk_utils/iam.sts.STSActions.property.TagSession">TagSession</a></code> | <code>string</code> | [Tagging] sts:TagSession. |

---

##### `actionGetAccessKeyInfo`<sup>Required</sup> <a name="actionGetAccessKeyInfo" id="@cdk_utils/iam.sts.STSActions.property.actionGetAccessKeyInfo"></a>

```typescript
public readonly actionGetAccessKeyInfo: string;
```

- *Type:* string

[Read] sts:GetAccessKeyInfo.

---

##### `actionGetCallerIdentity`<sup>Required</sup> <a name="actionGetCallerIdentity" id="@cdk_utils/iam.sts.STSActions.property.actionGetCallerIdentity"></a>

```typescript
public readonly actionGetCallerIdentity: string;
```

- *Type:* string

[Read] sts:GetCallerIdentity.

---

##### `actionGetDelegatedAccessToken`<sup>Required</sup> <a name="actionGetDelegatedAccessToken" id="@cdk_utils/iam.sts.STSActions.property.actionGetDelegatedAccessToken"></a>

```typescript
public readonly actionGetDelegatedAccessToken: string;
```

- *Type:* string

[Write] sts:GetDelegatedAccessToken.

---

##### `actionGetFederationToken`<sup>Required</sup> <a name="actionGetFederationToken" id="@cdk_utils/iam.sts.STSActions.property.actionGetFederationToken"></a>

```typescript
public readonly actionGetFederationToken: string;
```

- *Type:* string

[Write] sts:GetFederationToken.

---

##### `actionGetServiceBearerToken`<sup>Required</sup> <a name="actionGetServiceBearerToken" id="@cdk_utils/iam.sts.STSActions.property.actionGetServiceBearerToken"></a>

```typescript
public readonly actionGetServiceBearerToken: string;
```

- *Type:* string

[Read] sts:GetServiceBearerToken.

---

##### `actionGetSessionToken`<sup>Required</sup> <a name="actionGetSessionToken" id="@cdk_utils/iam.sts.STSActions.property.actionGetSessionToken"></a>

```typescript
public readonly actionGetSessionToken: string;
```

- *Type:* string

[Read] sts:GetSessionToken.

---

##### `actionGetWebIdentityToken`<sup>Required</sup> <a name="actionGetWebIdentityToken" id="@cdk_utils/iam.sts.STSActions.property.actionGetWebIdentityToken"></a>

```typescript
public readonly actionGetWebIdentityToken: string;
```

- *Type:* string

[Write] sts:GetWebIdentityToken.

---

##### `actionSetContext`<sup>Required</sup> <a name="actionSetContext" id="@cdk_utils/iam.sts.STSActions.property.actionSetContext"></a>

```typescript
public readonly actionSetContext: string;
```

- *Type:* string

[Write] sts:SetContext.

---

##### `actionSetSourceIdentity`<sup>Required</sup> <a name="actionSetSourceIdentity" id="@cdk_utils/iam.sts.STSActions.property.actionSetSourceIdentity"></a>

```typescript
public readonly actionSetSourceIdentity: string;
```

- *Type:* string

[Write] sts:SetSourceIdentity.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.sts.STSActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.sts.STSActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.sts.STSActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.sts.STSActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.sts.STSActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdk_utils/iam.sts.STSActions.property.AssumeRole"></a>

```typescript
public readonly AssumeRole: string;
```

- *Type:* string

[Write] sts:AssumeRole.

---

##### `AssumeRoleWithSAML`<sup>Required</sup> <a name="AssumeRoleWithSAML" id="@cdk_utils/iam.sts.STSActions.property.AssumeRoleWithSAML"></a>

```typescript
public readonly AssumeRoleWithSAML: string;
```

- *Type:* string

[Write] sts:AssumeRoleWithSAML.

---

##### `AssumeRoleWithWebIdentity`<sup>Required</sup> <a name="AssumeRoleWithWebIdentity" id="@cdk_utils/iam.sts.STSActions.property.AssumeRoleWithWebIdentity"></a>

```typescript
public readonly AssumeRoleWithWebIdentity: string;
```

- *Type:* string

[Write] sts:AssumeRoleWithWebIdentity.

---

##### `AssumeRoot`<sup>Required</sup> <a name="AssumeRoot" id="@cdk_utils/iam.sts.STSActions.property.AssumeRoot"></a>

```typescript
public readonly AssumeRoot: string;
```

- *Type:* string

[Write] sts:AssumeRoot.

---

##### `DecodeAuthorizationMessage`<sup>Required</sup> <a name="DecodeAuthorizationMessage" id="@cdk_utils/iam.sts.STSActions.property.DecodeAuthorizationMessage"></a>

```typescript
public readonly DecodeAuthorizationMessage: string;
```

- *Type:* string

[Write] sts:DecodeAuthorizationMessage.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.sts.STSActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagGetWebIdentityToken`<sup>Required</sup> <a name="TagGetWebIdentityToken" id="@cdk_utils/iam.sts.STSActions.property.TagGetWebIdentityToken"></a>

```typescript
public readonly TagGetWebIdentityToken: string;
```

- *Type:* string

[Tagging] sts:TagGetWebIdentityToken.

---

##### `TagSession`<sup>Required</sup> <a name="TagSession" id="@cdk_utils/iam.sts.STSActions.property.TagSession"></a>

```typescript
public readonly TagSession: string;
```

- *Type:* string

[Tagging] sts:TagSession.

---

### STSConditions <a name="STSConditions" id="@cdk_utils/iam.sts.STSConditions"></a>

Condition key constants and builders for sts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sts.STSConditions.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

new sts.STSConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.awsServiceName">awsServiceName</a></code> | Generates a condition block for `sts:AWSServiceName`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.durationSeconds">durationSeconds</a></code> | Generates a condition block for `sts:DurationSeconds`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.externalId">externalId</a></code> | Generates a condition block for `sts:ExternalId`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.identityTokenAudience">identityTokenAudience</a></code> | Generates a condition block for `sts:IdentityTokenAudience`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.requestContext">requestContext</a></code> | Generates a condition block for `sts:RequestContext/${ContextKey}`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.requestContextProviders">requestContextProviders</a></code> | Generates a condition block for `sts:RequestContextProviders`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.roleAuthorizedByIdp">roleAuthorizedByIdp</a></code> | Generates a condition block for `sts:RoleAuthorizedByIdp`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.roleSessionName">roleSessionName</a></code> | Generates a condition block for `sts:RoleSessionName`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.signingAlgorithm">signingAlgorithm</a></code> | Generates a condition block for `sts:SigningAlgorithm`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.sourceIdentity">sourceIdentity</a></code> | Generates a condition block for `sts:SourceIdentity`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.taskPolicyARN">taskPolicyARN</a></code> | Generates a condition block for `sts:TaskPolicyArn`. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.transitiveTagKeys">transitiveTagKeys</a></code> | Generates a condition block for `sts:TransitiveTagKeys`. |

---

##### `awsServiceName` <a name="awsServiceName" id="@cdk_utils/iam.sts.STSConditions.awsServiceName"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.awsServiceName(value: string)
```

Generates a condition block for `sts:AWSServiceName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.awsServiceName.parameter.value"></a>

- *Type:* string

---

##### `durationSeconds` <a name="durationSeconds" id="@cdk_utils/iam.sts.STSConditions.durationSeconds"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.durationSeconds(value: number)
```

Generates a condition block for `sts:DurationSeconds`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.durationSeconds.parameter.value"></a>

- *Type:* number

---

##### `externalId` <a name="externalId" id="@cdk_utils/iam.sts.STSConditions.externalId"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.externalId(value: string)
```

Generates a condition block for `sts:ExternalId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.externalId.parameter.value"></a>

- *Type:* string

---

##### `identityTokenAudience` <a name="identityTokenAudience" id="@cdk_utils/iam.sts.STSConditions.identityTokenAudience"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.identityTokenAudience(values: string[])
```

Generates a condition block for `sts:IdentityTokenAudience`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sts.STSConditions.identityTokenAudience.parameter.values"></a>

- *Type:* string[]

---

##### `requestContext` <a name="requestContext" id="@cdk_utils/iam.sts.STSConditions.requestContext"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.requestContext(value: string)
```

Generates a condition block for `sts:RequestContext/${ContextKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.requestContext.parameter.value"></a>

- *Type:* string

---

##### `requestContextProviders` <a name="requestContextProviders" id="@cdk_utils/iam.sts.STSConditions.requestContextProviders"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.requestContextProviders(values: string[])
```

Generates a condition block for `sts:RequestContextProviders`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sts.STSConditions.requestContextProviders.parameter.values"></a>

- *Type:* string[]

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.sts.STSConditions.requestTag"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.sts.STSConditions.resourceTag"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `roleAuthorizedByIdp` <a name="roleAuthorizedByIdp" id="@cdk_utils/iam.sts.STSConditions.roleAuthorizedByIdp"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.roleAuthorizedByIdp(value: boolean)
```

Generates a condition block for `sts:RoleAuthorizedByIdp`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.roleAuthorizedByIdp.parameter.value"></a>

- *Type:* boolean

---

##### `roleSessionName` <a name="roleSessionName" id="@cdk_utils/iam.sts.STSConditions.roleSessionName"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.roleSessionName(value: string)
```

Generates a condition block for `sts:RoleSessionName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.roleSessionName.parameter.value"></a>

- *Type:* string

---

##### `signingAlgorithm` <a name="signingAlgorithm" id="@cdk_utils/iam.sts.STSConditions.signingAlgorithm"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.signingAlgorithm(value: string)
```

Generates a condition block for `sts:SigningAlgorithm`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.signingAlgorithm.parameter.value"></a>

- *Type:* string

---

##### `sourceIdentity` <a name="sourceIdentity" id="@cdk_utils/iam.sts.STSConditions.sourceIdentity"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.sourceIdentity(value: string)
```

Generates a condition block for `sts:SourceIdentity`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.sourceIdentity.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.sts.STSConditions.tagKeys"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sts.STSConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `taskPolicyARN` <a name="taskPolicyARN" id="@cdk_utils/iam.sts.STSConditions.taskPolicyARN"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.taskPolicyARN(value: string)
```

Generates a condition block for `sts:TaskPolicyArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.sts.STSConditions.taskPolicyARN.parameter.value"></a>

- *Type:* string

---

##### `transitiveTagKeys` <a name="transitiveTagKeys" id="@cdk_utils/iam.sts.STSConditions.transitiveTagKeys"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSConditions.transitiveTagKeys(values: string[])
```

Generates a condition block for `sts:TransitiveTagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.sts.STSConditions.transitiveTagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.actionGetFederationTokenConditionKeys">actionGetFederationTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetFederationToken action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.actionGetServiceBearerTokenConditionKeys">actionGetServiceBearerTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetServiceBearerToken action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.actionGetWebIdentityTokenConditionKeys">actionGetWebIdentityTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetWebIdentityToken action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.actionSetContextConditionKeys">actionSetContextConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetContext action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.actionSetSourceIdentityConditionKeys">actionSetSourceIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SetSourceIdentity action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ACTOR">ACTOR</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:actor (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ACTOR_ID">ACTOR_ID</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:actor_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AMR">AMR</a></code> | <code>string</code> | Condition key: cognito-identity.amazonaws.com:amr (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.APP_ID">APP_ID</a></code> | <code>string</code> | Condition key: graph.facebook.com:app_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AssumeRoleConditionKeys">AssumeRoleConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeRole action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AssumeRoleWithSAMLConditionKeys">AssumeRoleWithSAMLConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeRoleWithSAML action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AssumeRoleWithWebIdentityConditionKeys">AssumeRoleWithWebIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeRoleWithWebIdentity action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AssumeRootConditionKeys">AssumeRootConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AssumeRoot action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AUD">AUD</a></code> | <code>string</code> | Condition key: accounts.google.com:aud (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AWS_SERVICE_NAME">AWS_SERVICE_NAME</a></code> | <code>string</code> | Condition key: sts:AWSServiceName (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.BUILD_BRANCH">BUILD_BRANCH</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:build_branch (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.CLUSTER_ID">CLUSTER_ID</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:cluster_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.CLUSTER_NAME">CLUSTER_NAME</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:cluster_name (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.CN">CN</a></code> | <code>string</code> | Condition key: saml:cn (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.COMMON_NAME">COMMON_NAME</a></code> | <code>string</code> | Condition key: saml:commonName (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.DOC">DOC</a></code> | <code>string</code> | Condition key: saml:doc (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.DURATION_SECONDS">DURATION_SECONDS</a></code> | <code>string</code> | Condition key: sts:DurationSeconds (Numeric). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUORGHOMEPAGEURI">EDUORGHOMEPAGEURI</a></code> | <code>string</code> | Condition key: saml:eduorghomepageuri (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUORGIDENTITYAUTHNPOLICYURI">EDUORGIDENTITYAUTHNPOLICYURI</a></code> | <code>string</code> | Condition key: saml:eduorgidentityauthnpolicyuri (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUORGLEGALNAME">EDUORGLEGALNAME</a></code> | <code>string</code> | Condition key: saml:eduorglegalname (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUORGSUPERIORURI">EDUORGSUPERIORURI</a></code> | <code>string</code> | Condition key: saml:eduorgsuperioruri (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUORGWHITEPAGESURI">EDUORGWHITEPAGESURI</a></code> | <code>string</code> | Condition key: saml:eduorgwhitepagesuri (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONAFFILIATION">EDUPERSONAFFILIATION</a></code> | <code>string</code> | Condition key: saml:edupersonaffiliation (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONASSURANCE">EDUPERSONASSURANCE</a></code> | <code>string</code> | Condition key: saml:edupersonassurance (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONENTITLEMENT">EDUPERSONENTITLEMENT</a></code> | <code>string</code> | Condition key: saml:edupersonentitlement (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONNICKNAME">EDUPERSONNICKNAME</a></code> | <code>string</code> | Condition key: saml:edupersonnickname (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONORGDN">EDUPERSONORGDN</a></code> | <code>string</code> | Condition key: saml:edupersonorgdn (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONORGUNITDN">EDUPERSONORGUNITDN</a></code> | <code>string</code> | Condition key: saml:edupersonorgunitdn (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONPRIMARYAFFILIATION">EDUPERSONPRIMARYAFFILIATION</a></code> | <code>string</code> | Condition key: saml:edupersonprimaryaffiliation (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONPRIMARYORGUNITDN">EDUPERSONPRIMARYORGUNITDN</a></code> | <code>string</code> | Condition key: saml:edupersonprimaryorgunitdn (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONPRINCIPALNAME">EDUPERSONPRINCIPALNAME</a></code> | <code>string</code> | Condition key: saml:edupersonprincipalname (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONSCOPEDAFFILIATION">EDUPERSONSCOPEDAFFILIATION</a></code> | <code>string</code> | Condition key: saml:edupersonscopedaffiliation (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EDUPERSONTARGETEDID">EDUPERSONTARGETEDID</a></code> | <code>string</code> | Condition key: saml:edupersontargetedid (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ENTERPRISE_ID">ENTERPRISE_ID</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:enterprise_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ENVIRONMENT">ENVIRONMENT</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:environment (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.EXTERNAL_ID">EXTERNAL_ID</a></code> | <code>string</code> | Condition key: sts:ExternalId (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.GIVEN_NAME">GIVEN_NAME</a></code> | <code>string</code> | Condition key: saml:givenName (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.GOOGLE_ORGANIZATION_NUMBER">GOOGLE_ORGANIZATION_NUMBER</a></code> | <code>string</code> | Condition key: accounts.google.com:google/organization_number (Numeric). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ID">ID</a></code> | <code>string</code> | Condition key: graph.facebook.com:id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.IDENTITY_TOKEN_AUDIENCE">IDENTITY_TOKEN_AUDIENCE</a></code> | <code>string</code> | Condition key: sts:IdentityTokenAudience (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ISS">ISS</a></code> | <code>string</code> | Condition key: saml:iss (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.JOB_WORKFLOW_REF">JOB_WORKFLOW_REF</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:job_workflow_ref (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.MAIL">MAIL</a></code> | <code>string</code> | Condition key: saml:mail (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.NAME">NAME</a></code> | <code>string</code> | Condition key: saml:name (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.NAMEQUALIFIER">NAMEQUALIFIER</a></code> | <code>string</code> | Condition key: saml:namequalifier (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.NAMESPACE_ID">NAMESPACE_ID</a></code> | <code>string</code> | Condition key: gitlab.com:namespace_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.OAUD">OAUD</a></code> | <code>string</code> | Condition key: accounts.google.com:oaud (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.OIDC_CIRCLECI_COM_PROJECT_ID">OIDC_CIRCLECI_COM_PROJECT_ID</a></code> | <code>string</code> | Condition key: oidc.circleci.com/org/${OrgId}:oidc.circleci.com/project-id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ORGANIZATION_ID">ORGANIZATION_ID</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:organization_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ORGANIZATION_SLUG">ORGANIZATION_SLUG</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:organization_slug (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ORGANIZATION_STATUS">ORGANIZATION_STATUS</a></code> | <code>string</code> | Condition key: saml:organizationStatus (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.PIPELINE_ID">PIPELINE_ID</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:pipeline_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.PIPELINE_SLUG">PIPELINE_SLUG</a></code> | <code>string</code> | Condition key: agent.${Domain}.buildkite.dev:pipeline_slug (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.PIPELINE_SOURCE">PIPELINE_SOURCE</a></code> | <code>string</code> | Condition key: gitlab.com:pipeline_source (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.PRIMARY_GROUP_SID">PRIMARY_GROUP_SID</a></code> | <code>string</code> | Condition key: saml:primaryGroupSID (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.PROJECT_ID">PROJECT_ID</a></code> | <code>string</code> | Condition key: gitlab.com:project_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REF">REF</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:ref (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REF_PROTECTED">REF_PROTECTED</a></code> | <code>string</code> | Condition key: gitlab.com:ref_protected (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REPOSITORY">REPOSITORY</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:repository (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REPOSITORY_ID">REPOSITORY_ID</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:repository_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REPOSITORY_OWNER_ID">REPOSITORY_OWNER_ID</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:repository_owner_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REQUEST_CONTEXT">REQUEST_CONTEXT</a></code> | <code>string</code> | Condition key: sts:RequestContext/${ContextKey} (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.REQUEST_CONTEXT_PROVIDERS">REQUEST_CONTEXT_PROVIDERS</a></code> | <code>string</code> | Condition key: sts:RequestContextProviders (ArrayOfARN). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.RESOURCE_TAG">RESOURCE_TAG</a></code> | <code>string</code> | Condition key: iam:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ROLE_AUTHORIZED_BY_IDP">ROLE_AUTHORIZED_BY_IDP</a></code> | <code>string</code> | Condition key: sts:RoleAuthorizedByIdp (Bool). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.ROLE_SESSION_NAME">ROLE_SESSION_NAME</a></code> | <code>string</code> | Condition key: sts:RoleSessionName (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.RPST_ID">RPST_ID</a></code> | <code>string</code> | Condition key: idcs-${OciUniqueIdentifier}.identity.oraclecloud.com:rpst_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.RUNNER_ENVIRONMENT">RUNNER_ENVIRONMENT</a></code> | <code>string</code> | Condition key: gitlab.com:runner_environment (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.SIGNING_ALGORITHM">SIGNING_ALGORITHM</a></code> | <code>string</code> | Condition key: sts:SigningAlgorithm (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.SOURCE_IDENTITY">SOURCE_IDENTITY</a></code> | <code>string</code> | Condition key: sts:SourceIdentity (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.SUB">SUB</a></code> | <code>string</code> | Condition key: accounts.google.com:sub (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.SUB_TYPE">SUB_TYPE</a></code> | <code>string</code> | Condition key: saml:sub_type (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.SURNAME">SURNAME</a></code> | <code>string</code> | Condition key: saml:surname (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.TagGetWebIdentityTokenConditionKeys">TagGetWebIdentityTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagGetWebIdentityToken action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.TagSessionConditionKeys">TagSessionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagSession action. |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.TASK_POLICY_ARN">TASK_POLICY_ARN</a></code> | <code>string</code> | Condition key: sts:TaskPolicyArn (ARN). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.TRANSITIVE_TAG_KEYS">TRANSITIVE_TAG_KEYS</a></code> | <code>string</code> | Condition key: sts:TransitiveTagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.UID">UID</a></code> | <code>string</code> | Condition key: saml:uid (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.USER_ACCESS_LEVEL">USER_ACCESS_LEVEL</a></code> | <code>string</code> | Condition key: gitlab.com:user_access_level (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.USER_EMAIL">USER_EMAIL</a></code> | <code>string</code> | Condition key: gitlab.com:user_email (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.USER_ID">USER_ID</a></code> | <code>string</code> | Condition key: gitlab.com:user_id (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.USER_LOGIN">USER_LOGIN</a></code> | <code>string</code> | Condition key: gitlab.com:user_login (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.WORKFLOW">WORKFLOW</a></code> | <code>string</code> | Condition key: github.com/enterprises/${EnterpriseName}:workflow (String). |
| <code><a href="#@cdk_utils/iam.sts.STSConditions.property.X500_UNIQUE_IDENTIFIER">X500_UNIQUE_IDENTIFIER</a></code> | <code>string</code> | Condition key: saml:x500UniqueIdentifier (String). |

---

##### `actionGetFederationTokenConditionKeys`<sup>Required</sup> <a name="actionGetFederationTokenConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.actionGetFederationTokenConditionKeys"></a>

```typescript
public readonly actionGetFederationTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetFederationToken action.

---

##### `actionGetServiceBearerTokenConditionKeys`<sup>Required</sup> <a name="actionGetServiceBearerTokenConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.actionGetServiceBearerTokenConditionKeys"></a>

```typescript
public readonly actionGetServiceBearerTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetServiceBearerToken action.

---

##### `actionGetWebIdentityTokenConditionKeys`<sup>Required</sup> <a name="actionGetWebIdentityTokenConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.actionGetWebIdentityTokenConditionKeys"></a>

```typescript
public readonly actionGetWebIdentityTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetWebIdentityToken action.

---

##### `actionSetContextConditionKeys`<sup>Required</sup> <a name="actionSetContextConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.actionSetContextConditionKeys"></a>

```typescript
public readonly actionSetContextConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetContext action.

---

##### `actionSetSourceIdentityConditionKeys`<sup>Required</sup> <a name="actionSetSourceIdentityConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.actionSetSourceIdentityConditionKeys"></a>

```typescript
public readonly actionSetSourceIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SetSourceIdentity action.

---

##### `ACTOR`<sup>Required</sup> <a name="ACTOR" id="@cdk_utils/iam.sts.STSConditions.property.ACTOR"></a>

```typescript
public readonly ACTOR: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:actor (String).

---

##### `ACTOR_ID`<sup>Required</sup> <a name="ACTOR_ID" id="@cdk_utils/iam.sts.STSConditions.property.ACTOR_ID"></a>

```typescript
public readonly ACTOR_ID: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:actor_id (String).

---

##### `AMR`<sup>Required</sup> <a name="AMR" id="@cdk_utils/iam.sts.STSConditions.property.AMR"></a>

```typescript
public readonly AMR: string;
```

- *Type:* string

Condition key: cognito-identity.amazonaws.com:amr (String).

---

##### `APP_ID`<sup>Required</sup> <a name="APP_ID" id="@cdk_utils/iam.sts.STSConditions.property.APP_ID"></a>

```typescript
public readonly APP_ID: string;
```

- *Type:* string

Condition key: graph.facebook.com:app_id (String).

---

##### `AssumeRoleConditionKeys`<sup>Required</sup> <a name="AssumeRoleConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.AssumeRoleConditionKeys"></a>

```typescript
public readonly AssumeRoleConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeRole action.

---

##### `AssumeRoleWithSAMLConditionKeys`<sup>Required</sup> <a name="AssumeRoleWithSAMLConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.AssumeRoleWithSAMLConditionKeys"></a>

```typescript
public readonly AssumeRoleWithSAMLConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeRoleWithSAML action.

---

##### `AssumeRoleWithWebIdentityConditionKeys`<sup>Required</sup> <a name="AssumeRoleWithWebIdentityConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.AssumeRoleWithWebIdentityConditionKeys"></a>

```typescript
public readonly AssumeRoleWithWebIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeRoleWithWebIdentity action.

---

##### `AssumeRootConditionKeys`<sup>Required</sup> <a name="AssumeRootConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.AssumeRootConditionKeys"></a>

```typescript
public readonly AssumeRootConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AssumeRoot action.

---

##### `AUD`<sup>Required</sup> <a name="AUD" id="@cdk_utils/iam.sts.STSConditions.property.AUD"></a>

```typescript
public readonly AUD: string;
```

- *Type:* string

Condition key: accounts.google.com:aud (String).

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.sts.STSConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.sts.STSConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_SERVICE_NAME`<sup>Required</sup> <a name="AWS_SERVICE_NAME" id="@cdk_utils/iam.sts.STSConditions.property.AWS_SERVICE_NAME"></a>

```typescript
public readonly AWS_SERVICE_NAME: string;
```

- *Type:* string

Condition key: sts:AWSServiceName (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.sts.STSConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `BUILD_BRANCH`<sup>Required</sup> <a name="BUILD_BRANCH" id="@cdk_utils/iam.sts.STSConditions.property.BUILD_BRANCH"></a>

```typescript
public readonly BUILD_BRANCH: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:build_branch (String).

---

##### `CLUSTER_ID`<sup>Required</sup> <a name="CLUSTER_ID" id="@cdk_utils/iam.sts.STSConditions.property.CLUSTER_ID"></a>

```typescript
public readonly CLUSTER_ID: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:cluster_id (String).

---

##### `CLUSTER_NAME`<sup>Required</sup> <a name="CLUSTER_NAME" id="@cdk_utils/iam.sts.STSConditions.property.CLUSTER_NAME"></a>

```typescript
public readonly CLUSTER_NAME: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:cluster_name (String).

---

##### `CN`<sup>Required</sup> <a name="CN" id="@cdk_utils/iam.sts.STSConditions.property.CN"></a>

```typescript
public readonly CN: string;
```

- *Type:* string

Condition key: saml:cn (ArrayOfString).

---

##### `COMMON_NAME`<sup>Required</sup> <a name="COMMON_NAME" id="@cdk_utils/iam.sts.STSConditions.property.COMMON_NAME"></a>

```typescript
public readonly COMMON_NAME: string;
```

- *Type:* string

Condition key: saml:commonName (String).

---

##### `DOC`<sup>Required</sup> <a name="DOC" id="@cdk_utils/iam.sts.STSConditions.property.DOC"></a>

```typescript
public readonly DOC: string;
```

- *Type:* string

Condition key: saml:doc (String).

---

##### `DURATION_SECONDS`<sup>Required</sup> <a name="DURATION_SECONDS" id="@cdk_utils/iam.sts.STSConditions.property.DURATION_SECONDS"></a>

```typescript
public readonly DURATION_SECONDS: string;
```

- *Type:* string

Condition key: sts:DurationSeconds (Numeric).

---

##### `EDUORGHOMEPAGEURI`<sup>Required</sup> <a name="EDUORGHOMEPAGEURI" id="@cdk_utils/iam.sts.STSConditions.property.EDUORGHOMEPAGEURI"></a>

```typescript
public readonly EDUORGHOMEPAGEURI: string;
```

- *Type:* string

Condition key: saml:eduorghomepageuri (ArrayOfString).

---

##### `EDUORGIDENTITYAUTHNPOLICYURI`<sup>Required</sup> <a name="EDUORGIDENTITYAUTHNPOLICYURI" id="@cdk_utils/iam.sts.STSConditions.property.EDUORGIDENTITYAUTHNPOLICYURI"></a>

```typescript
public readonly EDUORGIDENTITYAUTHNPOLICYURI: string;
```

- *Type:* string

Condition key: saml:eduorgidentityauthnpolicyuri (ArrayOfString).

---

##### `EDUORGLEGALNAME`<sup>Required</sup> <a name="EDUORGLEGALNAME" id="@cdk_utils/iam.sts.STSConditions.property.EDUORGLEGALNAME"></a>

```typescript
public readonly EDUORGLEGALNAME: string;
```

- *Type:* string

Condition key: saml:eduorglegalname (ArrayOfString).

---

##### `EDUORGSUPERIORURI`<sup>Required</sup> <a name="EDUORGSUPERIORURI" id="@cdk_utils/iam.sts.STSConditions.property.EDUORGSUPERIORURI"></a>

```typescript
public readonly EDUORGSUPERIORURI: string;
```

- *Type:* string

Condition key: saml:eduorgsuperioruri (ArrayOfString).

---

##### `EDUORGWHITEPAGESURI`<sup>Required</sup> <a name="EDUORGWHITEPAGESURI" id="@cdk_utils/iam.sts.STSConditions.property.EDUORGWHITEPAGESURI"></a>

```typescript
public readonly EDUORGWHITEPAGESURI: string;
```

- *Type:* string

Condition key: saml:eduorgwhitepagesuri (ArrayOfString).

---

##### `EDUPERSONAFFILIATION`<sup>Required</sup> <a name="EDUPERSONAFFILIATION" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONAFFILIATION"></a>

```typescript
public readonly EDUPERSONAFFILIATION: string;
```

- *Type:* string

Condition key: saml:edupersonaffiliation (ArrayOfString).

---

##### `EDUPERSONASSURANCE`<sup>Required</sup> <a name="EDUPERSONASSURANCE" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONASSURANCE"></a>

```typescript
public readonly EDUPERSONASSURANCE: string;
```

- *Type:* string

Condition key: saml:edupersonassurance (ArrayOfString).

---

##### `EDUPERSONENTITLEMENT`<sup>Required</sup> <a name="EDUPERSONENTITLEMENT" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONENTITLEMENT"></a>

```typescript
public readonly EDUPERSONENTITLEMENT: string;
```

- *Type:* string

Condition key: saml:edupersonentitlement (ArrayOfString).

---

##### `EDUPERSONNICKNAME`<sup>Required</sup> <a name="EDUPERSONNICKNAME" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONNICKNAME"></a>

```typescript
public readonly EDUPERSONNICKNAME: string;
```

- *Type:* string

Condition key: saml:edupersonnickname (ArrayOfString).

---

##### `EDUPERSONORGDN`<sup>Required</sup> <a name="EDUPERSONORGDN" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONORGDN"></a>

```typescript
public readonly EDUPERSONORGDN: string;
```

- *Type:* string

Condition key: saml:edupersonorgdn (String).

---

##### `EDUPERSONORGUNITDN`<sup>Required</sup> <a name="EDUPERSONORGUNITDN" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONORGUNITDN"></a>

```typescript
public readonly EDUPERSONORGUNITDN: string;
```

- *Type:* string

Condition key: saml:edupersonorgunitdn (ArrayOfString).

---

##### `EDUPERSONPRIMARYAFFILIATION`<sup>Required</sup> <a name="EDUPERSONPRIMARYAFFILIATION" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONPRIMARYAFFILIATION"></a>

```typescript
public readonly EDUPERSONPRIMARYAFFILIATION: string;
```

- *Type:* string

Condition key: saml:edupersonprimaryaffiliation (String).

---

##### `EDUPERSONPRIMARYORGUNITDN`<sup>Required</sup> <a name="EDUPERSONPRIMARYORGUNITDN" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONPRIMARYORGUNITDN"></a>

```typescript
public readonly EDUPERSONPRIMARYORGUNITDN: string;
```

- *Type:* string

Condition key: saml:edupersonprimaryorgunitdn (String).

---

##### `EDUPERSONPRINCIPALNAME`<sup>Required</sup> <a name="EDUPERSONPRINCIPALNAME" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONPRINCIPALNAME"></a>

```typescript
public readonly EDUPERSONPRINCIPALNAME: string;
```

- *Type:* string

Condition key: saml:edupersonprincipalname (String).

---

##### `EDUPERSONSCOPEDAFFILIATION`<sup>Required</sup> <a name="EDUPERSONSCOPEDAFFILIATION" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONSCOPEDAFFILIATION"></a>

```typescript
public readonly EDUPERSONSCOPEDAFFILIATION: string;
```

- *Type:* string

Condition key: saml:edupersonscopedaffiliation (ArrayOfString).

---

##### `EDUPERSONTARGETEDID`<sup>Required</sup> <a name="EDUPERSONTARGETEDID" id="@cdk_utils/iam.sts.STSConditions.property.EDUPERSONTARGETEDID"></a>

```typescript
public readonly EDUPERSONTARGETEDID: string;
```

- *Type:* string

Condition key: saml:edupersontargetedid (ArrayOfString).

---

##### `ENTERPRISE_ID`<sup>Required</sup> <a name="ENTERPRISE_ID" id="@cdk_utils/iam.sts.STSConditions.property.ENTERPRISE_ID"></a>

```typescript
public readonly ENTERPRISE_ID: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:enterprise_id (String).

---

##### `ENVIRONMENT`<sup>Required</sup> <a name="ENVIRONMENT" id="@cdk_utils/iam.sts.STSConditions.property.ENVIRONMENT"></a>

```typescript
public readonly ENVIRONMENT: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:environment (String).

---

##### `EXTERNAL_ID`<sup>Required</sup> <a name="EXTERNAL_ID" id="@cdk_utils/iam.sts.STSConditions.property.EXTERNAL_ID"></a>

```typescript
public readonly EXTERNAL_ID: string;
```

- *Type:* string

Condition key: sts:ExternalId (String).

---

##### `GIVEN_NAME`<sup>Required</sup> <a name="GIVEN_NAME" id="@cdk_utils/iam.sts.STSConditions.property.GIVEN_NAME"></a>

```typescript
public readonly GIVEN_NAME: string;
```

- *Type:* string

Condition key: saml:givenName (String).

---

##### `GOOGLE_ORGANIZATION_NUMBER`<sup>Required</sup> <a name="GOOGLE_ORGANIZATION_NUMBER" id="@cdk_utils/iam.sts.STSConditions.property.GOOGLE_ORGANIZATION_NUMBER"></a>

```typescript
public readonly GOOGLE_ORGANIZATION_NUMBER: string;
```

- *Type:* string

Condition key: accounts.google.com:google/organization_number (Numeric).

---

##### `ID`<sup>Required</sup> <a name="ID" id="@cdk_utils/iam.sts.STSConditions.property.ID"></a>

```typescript
public readonly ID: string;
```

- *Type:* string

Condition key: graph.facebook.com:id (String).

---

##### `IDENTITY_TOKEN_AUDIENCE`<sup>Required</sup> <a name="IDENTITY_TOKEN_AUDIENCE" id="@cdk_utils/iam.sts.STSConditions.property.IDENTITY_TOKEN_AUDIENCE"></a>

```typescript
public readonly IDENTITY_TOKEN_AUDIENCE: string;
```

- *Type:* string

Condition key: sts:IdentityTokenAudience (ArrayOfString).

---

##### `ISS`<sup>Required</sup> <a name="ISS" id="@cdk_utils/iam.sts.STSConditions.property.ISS"></a>

```typescript
public readonly ISS: string;
```

- *Type:* string

Condition key: saml:iss (String).

---

##### `JOB_WORKFLOW_REF`<sup>Required</sup> <a name="JOB_WORKFLOW_REF" id="@cdk_utils/iam.sts.STSConditions.property.JOB_WORKFLOW_REF"></a>

```typescript
public readonly JOB_WORKFLOW_REF: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:job_workflow_ref (String).

---

##### `MAIL`<sup>Required</sup> <a name="MAIL" id="@cdk_utils/iam.sts.STSConditions.property.MAIL"></a>

```typescript
public readonly MAIL: string;
```

- *Type:* string

Condition key: saml:mail (String).

---

##### `NAME`<sup>Required</sup> <a name="NAME" id="@cdk_utils/iam.sts.STSConditions.property.NAME"></a>

```typescript
public readonly NAME: string;
```

- *Type:* string

Condition key: saml:name (String).

---

##### `NAMEQUALIFIER`<sup>Required</sup> <a name="NAMEQUALIFIER" id="@cdk_utils/iam.sts.STSConditions.property.NAMEQUALIFIER"></a>

```typescript
public readonly NAMEQUALIFIER: string;
```

- *Type:* string

Condition key: saml:namequalifier (String).

---

##### `NAMESPACE_ID`<sup>Required</sup> <a name="NAMESPACE_ID" id="@cdk_utils/iam.sts.STSConditions.property.NAMESPACE_ID"></a>

```typescript
public readonly NAMESPACE_ID: string;
```

- *Type:* string

Condition key: gitlab.com:namespace_id (String).

---

##### `OAUD`<sup>Required</sup> <a name="OAUD" id="@cdk_utils/iam.sts.STSConditions.property.OAUD"></a>

```typescript
public readonly OAUD: string;
```

- *Type:* string

Condition key: accounts.google.com:oaud (String).

---

##### `OIDC_CIRCLECI_COM_PROJECT_ID`<sup>Required</sup> <a name="OIDC_CIRCLECI_COM_PROJECT_ID" id="@cdk_utils/iam.sts.STSConditions.property.OIDC_CIRCLECI_COM_PROJECT_ID"></a>

```typescript
public readonly OIDC_CIRCLECI_COM_PROJECT_ID: string;
```

- *Type:* string

Condition key: oidc.circleci.com/org/${OrgId}:oidc.circleci.com/project-id (String).

---

##### `ORGANIZATION_ID`<sup>Required</sup> <a name="ORGANIZATION_ID" id="@cdk_utils/iam.sts.STSConditions.property.ORGANIZATION_ID"></a>

```typescript
public readonly ORGANIZATION_ID: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:organization_id (String).

---

##### `ORGANIZATION_SLUG`<sup>Required</sup> <a name="ORGANIZATION_SLUG" id="@cdk_utils/iam.sts.STSConditions.property.ORGANIZATION_SLUG"></a>

```typescript
public readonly ORGANIZATION_SLUG: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:organization_slug (String).

---

##### `ORGANIZATION_STATUS`<sup>Required</sup> <a name="ORGANIZATION_STATUS" id="@cdk_utils/iam.sts.STSConditions.property.ORGANIZATION_STATUS"></a>

```typescript
public readonly ORGANIZATION_STATUS: string;
```

- *Type:* string

Condition key: saml:organizationStatus (String).

---

##### `PIPELINE_ID`<sup>Required</sup> <a name="PIPELINE_ID" id="@cdk_utils/iam.sts.STSConditions.property.PIPELINE_ID"></a>

```typescript
public readonly PIPELINE_ID: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:pipeline_id (String).

---

##### `PIPELINE_SLUG`<sup>Required</sup> <a name="PIPELINE_SLUG" id="@cdk_utils/iam.sts.STSConditions.property.PIPELINE_SLUG"></a>

```typescript
public readonly PIPELINE_SLUG: string;
```

- *Type:* string

Condition key: agent.${Domain}.buildkite.dev:pipeline_slug (String).

---

##### `PIPELINE_SOURCE`<sup>Required</sup> <a name="PIPELINE_SOURCE" id="@cdk_utils/iam.sts.STSConditions.property.PIPELINE_SOURCE"></a>

```typescript
public readonly PIPELINE_SOURCE: string;
```

- *Type:* string

Condition key: gitlab.com:pipeline_source (String).

---

##### `PRIMARY_GROUP_SID`<sup>Required</sup> <a name="PRIMARY_GROUP_SID" id="@cdk_utils/iam.sts.STSConditions.property.PRIMARY_GROUP_SID"></a>

```typescript
public readonly PRIMARY_GROUP_SID: string;
```

- *Type:* string

Condition key: saml:primaryGroupSID (String).

---

##### `PROJECT_ID`<sup>Required</sup> <a name="PROJECT_ID" id="@cdk_utils/iam.sts.STSConditions.property.PROJECT_ID"></a>

```typescript
public readonly PROJECT_ID: string;
```

- *Type:* string

Condition key: gitlab.com:project_id (String).

---

##### `REF`<sup>Required</sup> <a name="REF" id="@cdk_utils/iam.sts.STSConditions.property.REF"></a>

```typescript
public readonly REF: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:ref (String).

---

##### `REF_PROTECTED`<sup>Required</sup> <a name="REF_PROTECTED" id="@cdk_utils/iam.sts.STSConditions.property.REF_PROTECTED"></a>

```typescript
public readonly REF_PROTECTED: string;
```

- *Type:* string

Condition key: gitlab.com:ref_protected (String).

---

##### `REPOSITORY`<sup>Required</sup> <a name="REPOSITORY" id="@cdk_utils/iam.sts.STSConditions.property.REPOSITORY"></a>

```typescript
public readonly REPOSITORY: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:repository (String).

---

##### `REPOSITORY_ID`<sup>Required</sup> <a name="REPOSITORY_ID" id="@cdk_utils/iam.sts.STSConditions.property.REPOSITORY_ID"></a>

```typescript
public readonly REPOSITORY_ID: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:repository_id (String).

---

##### `REPOSITORY_OWNER_ID`<sup>Required</sup> <a name="REPOSITORY_OWNER_ID" id="@cdk_utils/iam.sts.STSConditions.property.REPOSITORY_OWNER_ID"></a>

```typescript
public readonly REPOSITORY_OWNER_ID: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:repository_owner_id (String).

---

##### `REQUEST_CONTEXT`<sup>Required</sup> <a name="REQUEST_CONTEXT" id="@cdk_utils/iam.sts.STSConditions.property.REQUEST_CONTEXT"></a>

```typescript
public readonly REQUEST_CONTEXT: string;
```

- *Type:* string

Condition key: sts:RequestContext/${ContextKey} (String).

---

##### `REQUEST_CONTEXT_PROVIDERS`<sup>Required</sup> <a name="REQUEST_CONTEXT_PROVIDERS" id="@cdk_utils/iam.sts.STSConditions.property.REQUEST_CONTEXT_PROVIDERS"></a>

```typescript
public readonly REQUEST_CONTEXT_PROVIDERS: string;
```

- *Type:* string

Condition key: sts:RequestContextProviders (ArrayOfARN).

---

##### `RESOURCE_TAG`<sup>Required</sup> <a name="RESOURCE_TAG" id="@cdk_utils/iam.sts.STSConditions.property.RESOURCE_TAG"></a>

```typescript
public readonly RESOURCE_TAG: string;
```

- *Type:* string

Condition key: iam:ResourceTag/${TagKey} (String).

---

##### `ROLE_AUTHORIZED_BY_IDP`<sup>Required</sup> <a name="ROLE_AUTHORIZED_BY_IDP" id="@cdk_utils/iam.sts.STSConditions.property.ROLE_AUTHORIZED_BY_IDP"></a>

```typescript
public readonly ROLE_AUTHORIZED_BY_IDP: string;
```

- *Type:* string

Condition key: sts:RoleAuthorizedByIdp (Bool).

---

##### `ROLE_SESSION_NAME`<sup>Required</sup> <a name="ROLE_SESSION_NAME" id="@cdk_utils/iam.sts.STSConditions.property.ROLE_SESSION_NAME"></a>

```typescript
public readonly ROLE_SESSION_NAME: string;
```

- *Type:* string

Condition key: sts:RoleSessionName (String).

---

##### `RPST_ID`<sup>Required</sup> <a name="RPST_ID" id="@cdk_utils/iam.sts.STSConditions.property.RPST_ID"></a>

```typescript
public readonly RPST_ID: string;
```

- *Type:* string

Condition key: idcs-${OciUniqueIdentifier}.identity.oraclecloud.com:rpst_id (String).

---

##### `RUNNER_ENVIRONMENT`<sup>Required</sup> <a name="RUNNER_ENVIRONMENT" id="@cdk_utils/iam.sts.STSConditions.property.RUNNER_ENVIRONMENT"></a>

```typescript
public readonly RUNNER_ENVIRONMENT: string;
```

- *Type:* string

Condition key: gitlab.com:runner_environment (String).

---

##### `SIGNING_ALGORITHM`<sup>Required</sup> <a name="SIGNING_ALGORITHM" id="@cdk_utils/iam.sts.STSConditions.property.SIGNING_ALGORITHM"></a>

```typescript
public readonly SIGNING_ALGORITHM: string;
```

- *Type:* string

Condition key: sts:SigningAlgorithm (String).

---

##### `SOURCE_IDENTITY`<sup>Required</sup> <a name="SOURCE_IDENTITY" id="@cdk_utils/iam.sts.STSConditions.property.SOURCE_IDENTITY"></a>

```typescript
public readonly SOURCE_IDENTITY: string;
```

- *Type:* string

Condition key: sts:SourceIdentity (String).

---

##### `SUB`<sup>Required</sup> <a name="SUB" id="@cdk_utils/iam.sts.STSConditions.property.SUB"></a>

```typescript
public readonly SUB: string;
```

- *Type:* string

Condition key: accounts.google.com:sub (String).

---

##### `SUB_TYPE`<sup>Required</sup> <a name="SUB_TYPE" id="@cdk_utils/iam.sts.STSConditions.property.SUB_TYPE"></a>

```typescript
public readonly SUB_TYPE: string;
```

- *Type:* string

Condition key: saml:sub_type (String).

---

##### `SURNAME`<sup>Required</sup> <a name="SURNAME" id="@cdk_utils/iam.sts.STSConditions.property.SURNAME"></a>

```typescript
public readonly SURNAME: string;
```

- *Type:* string

Condition key: saml:surname (String).

---

##### `TagGetWebIdentityTokenConditionKeys`<sup>Required</sup> <a name="TagGetWebIdentityTokenConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.TagGetWebIdentityTokenConditionKeys"></a>

```typescript
public readonly TagGetWebIdentityTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagGetWebIdentityToken action.

---

##### `TagSessionConditionKeys`<sup>Required</sup> <a name="TagSessionConditionKeys" id="@cdk_utils/iam.sts.STSConditions.property.TagSessionConditionKeys"></a>

```typescript
public readonly TagSessionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagSession action.

---

##### `TASK_POLICY_ARN`<sup>Required</sup> <a name="TASK_POLICY_ARN" id="@cdk_utils/iam.sts.STSConditions.property.TASK_POLICY_ARN"></a>

```typescript
public readonly TASK_POLICY_ARN: string;
```

- *Type:* string

Condition key: sts:TaskPolicyArn (ARN).

---

##### `TRANSITIVE_TAG_KEYS`<sup>Required</sup> <a name="TRANSITIVE_TAG_KEYS" id="@cdk_utils/iam.sts.STSConditions.property.TRANSITIVE_TAG_KEYS"></a>

```typescript
public readonly TRANSITIVE_TAG_KEYS: string;
```

- *Type:* string

Condition key: sts:TransitiveTagKeys (ArrayOfString).

---

##### `UID`<sup>Required</sup> <a name="UID" id="@cdk_utils/iam.sts.STSConditions.property.UID"></a>

```typescript
public readonly UID: string;
```

- *Type:* string

Condition key: saml:uid (String).

---

##### `USER_ACCESS_LEVEL`<sup>Required</sup> <a name="USER_ACCESS_LEVEL" id="@cdk_utils/iam.sts.STSConditions.property.USER_ACCESS_LEVEL"></a>

```typescript
public readonly USER_ACCESS_LEVEL: string;
```

- *Type:* string

Condition key: gitlab.com:user_access_level (String).

---

##### `USER_EMAIL`<sup>Required</sup> <a name="USER_EMAIL" id="@cdk_utils/iam.sts.STSConditions.property.USER_EMAIL"></a>

```typescript
public readonly USER_EMAIL: string;
```

- *Type:* string

Condition key: gitlab.com:user_email (String).

---

##### `USER_ID`<sup>Required</sup> <a name="USER_ID" id="@cdk_utils/iam.sts.STSConditions.property.USER_ID"></a>

```typescript
public readonly USER_ID: string;
```

- *Type:* string

Condition key: gitlab.com:user_id (String).

---

##### `USER_LOGIN`<sup>Required</sup> <a name="USER_LOGIN" id="@cdk_utils/iam.sts.STSConditions.property.USER_LOGIN"></a>

```typescript
public readonly USER_LOGIN: string;
```

- *Type:* string

Condition key: gitlab.com:user_login (String).

---

##### `WORKFLOW`<sup>Required</sup> <a name="WORKFLOW" id="@cdk_utils/iam.sts.STSConditions.property.WORKFLOW"></a>

```typescript
public readonly WORKFLOW: string;
```

- *Type:* string

Condition key: github.com/enterprises/${EnterpriseName}:workflow (String).

---

##### `X500_UNIQUE_IDENTIFIER`<sup>Required</sup> <a name="X500_UNIQUE_IDENTIFIER" id="@cdk_utils/iam.sts.STSConditions.property.X500_UNIQUE_IDENTIFIER"></a>

```typescript
public readonly X500_UNIQUE_IDENTIFIER: string;
```

- *Type:* string

Condition key: saml:x500UniqueIdentifier (String).

---

### STSOperations <a name="STSOperations" id="@cdk_utils/iam.sts.STSOperations"></a>

API operation to required IAM actions mapping for sts.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sts.STSOperations.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

new sts.STSOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.AssumeRole">AssumeRole</a></code> | <code>string[]</code> | IAM actions required for the AssumeRole API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.AssumeRoleWithSAML">AssumeRoleWithSAML</a></code> | <code>string[]</code> | IAM actions required for the AssumeRoleWithSAML API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.AssumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code>string[]</code> | IAM actions required for the AssumeRoleWithWebIdentity API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.AssumeRoot">AssumeRoot</a></code> | <code>string[]</code> | IAM actions required for the AssumeRoot API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.DecodeAuthorizationMessage">DecodeAuthorizationMessage</a></code> | <code>string[]</code> | IAM actions required for the DecodeAuthorizationMessage API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.opGetAccessKeyInfo">opGetAccessKeyInfo</a></code> | <code>string[]</code> | IAM actions required for the GetAccessKeyInfo API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.opGetCallerIdentity">opGetCallerIdentity</a></code> | <code>string[]</code> | IAM actions required for the GetCallerIdentity API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.opGetDelegatedAccessToken">opGetDelegatedAccessToken</a></code> | <code>string[]</code> | IAM actions required for the GetDelegatedAccessToken API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.opGetFederationToken">opGetFederationToken</a></code> | <code>string[]</code> | IAM actions required for the GetFederationToken API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.opGetSessionToken">opGetSessionToken</a></code> | <code>string[]</code> | IAM actions required for the GetSessionToken API call. |
| <code><a href="#@cdk_utils/iam.sts.STSOperations.property.opGetWebIdentityToken">opGetWebIdentityToken</a></code> | <code>string[]</code> | IAM actions required for the GetWebIdentityToken API call. |

---

##### `AssumeRole`<sup>Required</sup> <a name="AssumeRole" id="@cdk_utils/iam.sts.STSOperations.property.AssumeRole"></a>

```typescript
public readonly AssumeRole: string[];
```

- *Type:* string[]

IAM actions required for the AssumeRole API call.

---

##### `AssumeRoleWithSAML`<sup>Required</sup> <a name="AssumeRoleWithSAML" id="@cdk_utils/iam.sts.STSOperations.property.AssumeRoleWithSAML"></a>

```typescript
public readonly AssumeRoleWithSAML: string[];
```

- *Type:* string[]

IAM actions required for the AssumeRoleWithSAML API call.

---

##### `AssumeRoleWithWebIdentity`<sup>Required</sup> <a name="AssumeRoleWithWebIdentity" id="@cdk_utils/iam.sts.STSOperations.property.AssumeRoleWithWebIdentity"></a>

```typescript
public readonly AssumeRoleWithWebIdentity: string[];
```

- *Type:* string[]

IAM actions required for the AssumeRoleWithWebIdentity API call.

---

##### `AssumeRoot`<sup>Required</sup> <a name="AssumeRoot" id="@cdk_utils/iam.sts.STSOperations.property.AssumeRoot"></a>

```typescript
public readonly AssumeRoot: string[];
```

- *Type:* string[]

IAM actions required for the AssumeRoot API call.

---

##### `DecodeAuthorizationMessage`<sup>Required</sup> <a name="DecodeAuthorizationMessage" id="@cdk_utils/iam.sts.STSOperations.property.DecodeAuthorizationMessage"></a>

```typescript
public readonly DecodeAuthorizationMessage: string[];
```

- *Type:* string[]

IAM actions required for the DecodeAuthorizationMessage API call.

---

##### `opGetAccessKeyInfo`<sup>Required</sup> <a name="opGetAccessKeyInfo" id="@cdk_utils/iam.sts.STSOperations.property.opGetAccessKeyInfo"></a>

```typescript
public readonly opGetAccessKeyInfo: string[];
```

- *Type:* string[]

IAM actions required for the GetAccessKeyInfo API call.

---

##### `opGetCallerIdentity`<sup>Required</sup> <a name="opGetCallerIdentity" id="@cdk_utils/iam.sts.STSOperations.property.opGetCallerIdentity"></a>

```typescript
public readonly opGetCallerIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GetCallerIdentity API call.

---

##### `opGetDelegatedAccessToken`<sup>Required</sup> <a name="opGetDelegatedAccessToken" id="@cdk_utils/iam.sts.STSOperations.property.opGetDelegatedAccessToken"></a>

```typescript
public readonly opGetDelegatedAccessToken: string[];
```

- *Type:* string[]

IAM actions required for the GetDelegatedAccessToken API call.

---

##### `opGetFederationToken`<sup>Required</sup> <a name="opGetFederationToken" id="@cdk_utils/iam.sts.STSOperations.property.opGetFederationToken"></a>

```typescript
public readonly opGetFederationToken: string[];
```

- *Type:* string[]

IAM actions required for the GetFederationToken API call.

---

##### `opGetSessionToken`<sup>Required</sup> <a name="opGetSessionToken" id="@cdk_utils/iam.sts.STSOperations.property.opGetSessionToken"></a>

```typescript
public readonly opGetSessionToken: string[];
```

- *Type:* string[]

IAM actions required for the GetSessionToken API call.

---

##### `opGetWebIdentityToken`<sup>Required</sup> <a name="opGetWebIdentityToken" id="@cdk_utils/iam.sts.STSOperations.property.opGetWebIdentityToken"></a>

```typescript
public readonly opGetWebIdentityToken: string[];
```

- *Type:* string[]

IAM actions required for the GetWebIdentityToken API call.

---

### STSResources <a name="STSResources" id="@cdk_utils/iam.sts.STSResources"></a>

ARN builders, validators, and parsers for sts resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.sts.STSResources.Initializer"></a>

```typescript
import { sts } from '@cdk_utils/iam'

new sts.STSResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.sts.STSResources.contextProvider">contextProvider</a></code> | Builds an ARN for the context-provider resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.federatedUser">federatedUser</a></code> | Builds an ARN for the federated-user resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.isValidContextProviderArn">isValidContextProviderArn</a></code> | Validates whether a string is a valid ARN for the context-provider resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.isValidFederatedUserArn">isValidFederatedUserArn</a></code> | Validates whether a string is a valid ARN for the federated-user resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.isValidRoleArn">isValidRoleArn</a></code> | Validates whether a string is a valid ARN for the role resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.isValidRootUserArn">isValidRootUserArn</a></code> | Validates whether a string is a valid ARN for the root-user resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.isValidSelfSessionArn">isValidSelfSessionArn</a></code> | Validates whether a string is a valid ARN for the self-session resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.parseContextProviderArn">parseContextProviderArn</a></code> | Parses a context-provider ARN into its components. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.parseFederatedUserArn">parseFederatedUserArn</a></code> | Parses a federated-user ARN into its components. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.parseRoleArn">parseRoleArn</a></code> | Parses a role ARN into its components. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.parseRootUserArn">parseRootUserArn</a></code> | Parses a root-user ARN into its components. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.parseSelfSessionArn">parseSelfSessionArn</a></code> | Parses a self-session ARN into its components. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.role">role</a></code> | Builds an ARN for the role resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.rootUser">rootUser</a></code> | Builds an ARN for the root-user resource. |
| <code><a href="#@cdk_utils/iam.sts.STSResources.selfSession">selfSession</a></code> | Builds an ARN for the self-session resource. |

---

##### `contextProvider` <a name="contextProvider" id="@cdk_utils/iam.sts.STSResources.contextProvider"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.contextProvider(props: STSContextProviderArnProps)
```

Builds an ARN for the context-provider resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sts.STSResources.contextProvider.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sts.STSContextProviderArnProps">STSContextProviderArnProps</a>

---

##### `federatedUser` <a name="federatedUser" id="@cdk_utils/iam.sts.STSResources.federatedUser"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.federatedUser(props: STSFederatedUserArnProps)
```

Builds an ARN for the federated-user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sts.STSResources.federatedUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sts.STSFederatedUserArnProps">STSFederatedUserArnProps</a>

---

##### `isValidContextProviderArn` <a name="isValidContextProviderArn" id="@cdk_utils/iam.sts.STSResources.isValidContextProviderArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.isValidContextProviderArn(arn: string)
```

Validates whether a string is a valid ARN for the context-provider resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.isValidContextProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidFederatedUserArn` <a name="isValidFederatedUserArn" id="@cdk_utils/iam.sts.STSResources.isValidFederatedUserArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.isValidFederatedUserArn(arn: string)
```

Validates whether a string is a valid ARN for the federated-user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.isValidFederatedUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRoleArn` <a name="isValidRoleArn" id="@cdk_utils/iam.sts.STSResources.isValidRoleArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.isValidRoleArn(arn: string)
```

Validates whether a string is a valid ARN for the role resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.isValidRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidRootUserArn` <a name="isValidRootUserArn" id="@cdk_utils/iam.sts.STSResources.isValidRootUserArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.isValidRootUserArn(arn: string)
```

Validates whether a string is a valid ARN for the root-user resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.isValidRootUserArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSelfSessionArn` <a name="isValidSelfSessionArn" id="@cdk_utils/iam.sts.STSResources.isValidSelfSessionArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.isValidSelfSessionArn(arn: string)
```

Validates whether a string is a valid ARN for the self-session resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.isValidSelfSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `parseContextProviderArn` <a name="parseContextProviderArn" id="@cdk_utils/iam.sts.STSResources.parseContextProviderArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.parseContextProviderArn(arn: string)
```

Parses a context-provider ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.parseContextProviderArn.parameter.arn"></a>

- *Type:* string

---

##### `parseFederatedUserArn` <a name="parseFederatedUserArn" id="@cdk_utils/iam.sts.STSResources.parseFederatedUserArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.parseFederatedUserArn(arn: string)
```

Parses a federated-user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.parseFederatedUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRoleArn` <a name="parseRoleArn" id="@cdk_utils/iam.sts.STSResources.parseRoleArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.parseRoleArn(arn: string)
```

Parses a role ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.parseRoleArn.parameter.arn"></a>

- *Type:* string

---

##### `parseRootUserArn` <a name="parseRootUserArn" id="@cdk_utils/iam.sts.STSResources.parseRootUserArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.parseRootUserArn(arn: string)
```

Parses a root-user ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.parseRootUserArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSelfSessionArn` <a name="parseSelfSessionArn" id="@cdk_utils/iam.sts.STSResources.parseSelfSessionArn"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.parseSelfSessionArn(arn: string)
```

Parses a self-session ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.sts.STSResources.parseSelfSessionArn.parameter.arn"></a>

- *Type:* string

---

##### `role` <a name="role" id="@cdk_utils/iam.sts.STSResources.role"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.role(props: STSRoleArnProps)
```

Builds an ARN for the role resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sts.STSResources.role.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sts.STSRoleArnProps">STSRoleArnProps</a>

---

##### `rootUser` <a name="rootUser" id="@cdk_utils/iam.sts.STSResources.rootUser"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.rootUser(props: STSRootUserArnProps)
```

Builds an ARN for the root-user resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sts.STSResources.rootUser.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sts.STSRootUserArnProps">STSRootUserArnProps</a>

---

##### `selfSession` <a name="selfSession" id="@cdk_utils/iam.sts.STSResources.selfSession"></a>

```typescript
import { sts } from '@cdk_utils/iam'

sts.STSResources.selfSession(props: STSSelfSessionArnProps)
```

Builds an ARN for the self-session resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.sts.STSResources.selfSession.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.sts.STSSelfSessionArnProps">STSSelfSessionArnProps</a>

---




