# `verifiedpermissions` Submodule <a name="`verifiedpermissions` Submodule" id="@cdk_utils/iam.verifiedpermissions"></a>


## Structs <a name="Structs" id="Structs"></a>

### VerifiedpermissionsPolicyStoreAliasArnComponents <a name="VerifiedpermissionsPolicyStoreAliasArnComponents" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents"></a>

Parsed components of a policy-store-alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

const verifiedpermissionsPolicyStoreAliasArnComponents: verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.aliasName">aliasName</a></code> | <code>string</code> | The AliasName component. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

The AliasName component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### VerifiedpermissionsPolicyStoreAliasArnProps <a name="VerifiedpermissionsPolicyStoreAliasArnProps" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps"></a>

Properties for building a policy-store-alias ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

const verifiedpermissionsPolicyStoreAliasArnProps: verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.aliasName">aliasName</a></code> | <code>string</code> | The AliasName component of the ARN. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `aliasName`<sup>Required</sup> <a name="aliasName" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.aliasName"></a>

```typescript
public readonly aliasName: string;
```

- *Type:* string

The AliasName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### VerifiedpermissionsPolicyStoreArnComponents <a name="VerifiedpermissionsPolicyStoreArnComponents" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents"></a>

Parsed components of a policy-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

const verifiedpermissionsPolicyStoreArnComponents: verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | The PolicyStoreId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnComponents.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

The PolicyStoreId component.

---

### VerifiedpermissionsPolicyStoreArnProps <a name="VerifiedpermissionsPolicyStoreArnProps" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps"></a>

Properties for building a policy-store ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

const verifiedpermissionsPolicyStoreArnProps: verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.property.policyStoreId">policyStoreId</a></code> | <code>string</code> | The PolicyStoreId component of the ARN. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `policyStoreId`<sup>Required</sup> <a name="policyStoreId" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.property.policyStoreId"></a>

```typescript
public readonly policyStoreId: string;
```

- *Type:* string

The PolicyStoreId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedpermissionsActions <a name="VerifiedpermissionsActions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions"></a>

IAM action constants for the verifiedpermissions service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

new verifiedpermissions.VerifiedpermissionsActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetIdentitySource">actionGetIdentitySource</a></code> | <code>string</code> | [Read] verifiedpermissions:GetIdentitySource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicy">actionGetPolicy</a></code> | <code>string</code> | [Read] verifiedpermissions:GetPolicy. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicyStore">actionGetPolicyStore</a></code> | <code>string</code> | [Read] verifiedpermissions:GetPolicyStore. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicyStoreAlias">actionGetPolicyStoreAlias</a></code> | <code>string</code> | [Read] verifiedpermissions:GetPolicyStoreAlias. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicyTemplate">actionGetPolicyTemplate</a></code> | <code>string</code> | [Read] verifiedpermissions:GetPolicyTemplate. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetSchema">actionGetSchema</a></code> | <code>string</code> | [Read] verifiedpermissions:GetSchema. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreateIdentitySource">CreateIdentitySource</a></code> | <code>string</code> | [Write] verifiedpermissions:CreateIdentitySource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicy">CreatePolicy</a></code> | <code>string</code> | [Write] verifiedpermissions:CreatePolicy. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicyStore">CreatePolicyStore</a></code> | <code>string</code> | [Write] verifiedpermissions:CreatePolicyStore. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicyStoreAlias">CreatePolicyStoreAlias</a></code> | <code>string</code> | [Write] verifiedpermissions:CreatePolicyStoreAlias. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicyTemplate">CreatePolicyTemplate</a></code> | <code>string</code> | [Write] verifiedpermissions:CreatePolicyTemplate. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeleteIdentitySource">DeleteIdentitySource</a></code> | <code>string</code> | [Write] verifiedpermissions:DeleteIdentitySource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicy">DeletePolicy</a></code> | <code>string</code> | [Write] verifiedpermissions:DeletePolicy. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicyStore">DeletePolicyStore</a></code> | <code>string</code> | [Write] verifiedpermissions:DeletePolicyStore. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicyStoreAlias">DeletePolicyStoreAlias</a></code> | <code>string</code> | [Write] verifiedpermissions:DeletePolicyStoreAlias. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicyTemplate">DeletePolicyTemplate</a></code> | <code>string</code> | [Write] verifiedpermissions:DeletePolicyTemplate. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.IsAuthorized">IsAuthorized</a></code> | <code>string</code> | [Read] verifiedpermissions:IsAuthorized. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.IsAuthorizedWithToken">IsAuthorizedWithToken</a></code> | <code>string</code> | [Read] verifiedpermissions:IsAuthorizedWithToken. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListIdentitySources">ListIdentitySources</a></code> | <code>string</code> | [List] verifiedpermissions:ListIdentitySources. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicies">ListPolicies</a></code> | <code>string</code> | [List] verifiedpermissions:ListPolicies. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicyStoreAliases">ListPolicyStoreAliases</a></code> | <code>string</code> | [List] verifiedpermissions:ListPolicyStoreAliases. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicyStores">ListPolicyStores</a></code> | <code>string</code> | [List] verifiedpermissions:ListPolicyStores. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicyTemplates">ListPolicyTemplates</a></code> | <code>string</code> | [List] verifiedpermissions:ListPolicyTemplates. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] verifiedpermissions:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.PutSchema">PutSchema</a></code> | <code>string</code> | [Write] verifiedpermissions:PutSchema. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] verifiedpermissions:TagResource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] verifiedpermissions:UntagResource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdateIdentitySource">UpdateIdentitySource</a></code> | <code>string</code> | [Write] verifiedpermissions:UpdateIdentitySource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string</code> | [Write] verifiedpermissions:UpdatePolicy. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdatePolicyStore">UpdatePolicyStore</a></code> | <code>string</code> | [Write] verifiedpermissions:UpdatePolicyStore. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdatePolicyTemplate">UpdatePolicyTemplate</a></code> | <code>string</code> | [Write] verifiedpermissions:UpdatePolicyTemplate. |

---

##### `actionGetIdentitySource`<sup>Required</sup> <a name="actionGetIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetIdentitySource"></a>

```typescript
public readonly actionGetIdentitySource: string;
```

- *Type:* string

[Read] verifiedpermissions:GetIdentitySource.

---

##### `actionGetPolicy`<sup>Required</sup> <a name="actionGetPolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicy"></a>

```typescript
public readonly actionGetPolicy: string;
```

- *Type:* string

[Read] verifiedpermissions:GetPolicy.

---

##### `actionGetPolicyStore`<sup>Required</sup> <a name="actionGetPolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicyStore"></a>

```typescript
public readonly actionGetPolicyStore: string;
```

- *Type:* string

[Read] verifiedpermissions:GetPolicyStore.

---

##### `actionGetPolicyStoreAlias`<sup>Required</sup> <a name="actionGetPolicyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicyStoreAlias"></a>

```typescript
public readonly actionGetPolicyStoreAlias: string;
```

- *Type:* string

[Read] verifiedpermissions:GetPolicyStoreAlias.

---

##### `actionGetPolicyTemplate`<sup>Required</sup> <a name="actionGetPolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetPolicyTemplate"></a>

```typescript
public readonly actionGetPolicyTemplate: string;
```

- *Type:* string

[Read] verifiedpermissions:GetPolicyTemplate.

---

##### `actionGetSchema`<sup>Required</sup> <a name="actionGetSchema" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.actionGetSchema"></a>

```typescript
public readonly actionGetSchema: string;
```

- *Type:* string

[Read] verifiedpermissions:GetSchema.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateIdentitySource`<sup>Required</sup> <a name="CreateIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreateIdentitySource"></a>

```typescript
public readonly CreateIdentitySource: string;
```

- *Type:* string

[Write] verifiedpermissions:CreateIdentitySource.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string;
```

- *Type:* string

[Write] verifiedpermissions:CreatePolicy.

---

##### `CreatePolicyStore`<sup>Required</sup> <a name="CreatePolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicyStore"></a>

```typescript
public readonly CreatePolicyStore: string;
```

- *Type:* string

[Write] verifiedpermissions:CreatePolicyStore.

---

##### `CreatePolicyStoreAlias`<sup>Required</sup> <a name="CreatePolicyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicyStoreAlias"></a>

```typescript
public readonly CreatePolicyStoreAlias: string;
```

- *Type:* string

[Write] verifiedpermissions:CreatePolicyStoreAlias.

---

##### `CreatePolicyTemplate`<sup>Required</sup> <a name="CreatePolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.CreatePolicyTemplate"></a>

```typescript
public readonly CreatePolicyTemplate: string;
```

- *Type:* string

[Write] verifiedpermissions:CreatePolicyTemplate.

---

##### `DeleteIdentitySource`<sup>Required</sup> <a name="DeleteIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeleteIdentitySource"></a>

```typescript
public readonly DeleteIdentitySource: string;
```

- *Type:* string

[Write] verifiedpermissions:DeleteIdentitySource.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string;
```

- *Type:* string

[Write] verifiedpermissions:DeletePolicy.

---

##### `DeletePolicyStore`<sup>Required</sup> <a name="DeletePolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicyStore"></a>

```typescript
public readonly DeletePolicyStore: string;
```

- *Type:* string

[Write] verifiedpermissions:DeletePolicyStore.

---

##### `DeletePolicyStoreAlias`<sup>Required</sup> <a name="DeletePolicyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicyStoreAlias"></a>

```typescript
public readonly DeletePolicyStoreAlias: string;
```

- *Type:* string

[Write] verifiedpermissions:DeletePolicyStoreAlias.

---

##### `DeletePolicyTemplate`<sup>Required</sup> <a name="DeletePolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.DeletePolicyTemplate"></a>

```typescript
public readonly DeletePolicyTemplate: string;
```

- *Type:* string

[Write] verifiedpermissions:DeletePolicyTemplate.

---

##### `IsAuthorized`<sup>Required</sup> <a name="IsAuthorized" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.IsAuthorized"></a>

```typescript
public readonly IsAuthorized: string;
```

- *Type:* string

[Read] verifiedpermissions:IsAuthorized.

---

##### `IsAuthorizedWithToken`<sup>Required</sup> <a name="IsAuthorizedWithToken" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.IsAuthorizedWithToken"></a>

```typescript
public readonly IsAuthorizedWithToken: string;
```

- *Type:* string

[Read] verifiedpermissions:IsAuthorizedWithToken.

---

##### `ListIdentitySources`<sup>Required</sup> <a name="ListIdentitySources" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListIdentitySources"></a>

```typescript
public readonly ListIdentitySources: string;
```

- *Type:* string

[List] verifiedpermissions:ListIdentitySources.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string;
```

- *Type:* string

[List] verifiedpermissions:ListPolicies.

---

##### `ListPolicyStoreAliases`<sup>Required</sup> <a name="ListPolicyStoreAliases" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicyStoreAliases"></a>

```typescript
public readonly ListPolicyStoreAliases: string;
```

- *Type:* string

[List] verifiedpermissions:ListPolicyStoreAliases.

---

##### `ListPolicyStores`<sup>Required</sup> <a name="ListPolicyStores" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicyStores"></a>

```typescript
public readonly ListPolicyStores: string;
```

- *Type:* string

[List] verifiedpermissions:ListPolicyStores.

---

##### `ListPolicyTemplates`<sup>Required</sup> <a name="ListPolicyTemplates" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListPolicyTemplates"></a>

```typescript
public readonly ListPolicyTemplates: string;
```

- *Type:* string

[List] verifiedpermissions:ListPolicyTemplates.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] verifiedpermissions:ListTagsForResource.

---

##### `PutSchema`<sup>Required</sup> <a name="PutSchema" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.PutSchema"></a>

```typescript
public readonly PutSchema: string;
```

- *Type:* string

[Write] verifiedpermissions:PutSchema.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] verifiedpermissions:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] verifiedpermissions:UntagResource.

---

##### `UpdateIdentitySource`<sup>Required</sup> <a name="UpdateIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdateIdentitySource"></a>

```typescript
public readonly UpdateIdentitySource: string;
```

- *Type:* string

[Write] verifiedpermissions:UpdateIdentitySource.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string;
```

- *Type:* string

[Write] verifiedpermissions:UpdatePolicy.

---

##### `UpdatePolicyStore`<sup>Required</sup> <a name="UpdatePolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdatePolicyStore"></a>

```typescript
public readonly UpdatePolicyStore: string;
```

- *Type:* string

[Write] verifiedpermissions:UpdatePolicyStore.

---

##### `UpdatePolicyTemplate`<sup>Required</sup> <a name="UpdatePolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsActions.property.UpdatePolicyTemplate"></a>

```typescript
public readonly UpdatePolicyTemplate: string;
```

- *Type:* string

[Write] verifiedpermissions:UpdatePolicyTemplate.

---

### VerifiedpermissionsConditions <a name="VerifiedpermissionsConditions" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions"></a>

Condition key constants and builders for verifiedpermissions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

new verifiedpermissions.VerifiedpermissionsConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.requestTag"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.resourceTag"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.tagKeys"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.CreatePolicyStoreConditionKeys">CreatePolicyStoreConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreatePolicyStore action. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreatePolicyStoreConditionKeys`<sup>Required</sup> <a name="CreatePolicyStoreConditionKeys" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.CreatePolicyStoreConditionKeys"></a>

```typescript
public readonly CreatePolicyStoreConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreatePolicyStore action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### VerifiedpermissionsOperations <a name="VerifiedpermissionsOperations" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations"></a>

API operation to required IAM actions mapping for verifiedpermissions.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

new verifiedpermissions.VerifiedpermissionsOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.BatchGetPolicy">BatchGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the BatchGetPolicy API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.BatchIsAuthorized">BatchIsAuthorized</a></code> | <code>string[]</code> | IAM actions required for the BatchIsAuthorized API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.BatchIsAuthorizedWithToken">BatchIsAuthorizedWithToken</a></code> | <code>string[]</code> | IAM actions required for the BatchIsAuthorizedWithToken API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreateIdentitySource">CreateIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the CreateIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicy">CreatePolicy</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicy API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicyStore">CreatePolicyStore</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicyStore API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicyStoreAlias">CreatePolicyStoreAlias</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicyStoreAlias API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicyTemplate">CreatePolicyTemplate</a></code> | <code>string[]</code> | IAM actions required for the CreatePolicyTemplate API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeleteIdentitySource">DeleteIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicy">DeletePolicy</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicy API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicyStore">DeletePolicyStore</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyStore API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicyStoreAlias">DeletePolicyStoreAlias</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyStoreAlias API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicyTemplate">DeletePolicyTemplate</a></code> | <code>string[]</code> | IAM actions required for the DeletePolicyTemplate API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.IsAuthorized">IsAuthorized</a></code> | <code>string[]</code> | IAM actions required for the IsAuthorized API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.IsAuthorizedWithToken">IsAuthorizedWithToken</a></code> | <code>string[]</code> | IAM actions required for the IsAuthorizedWithToken API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListIdentitySources">ListIdentitySources</a></code> | <code>string[]</code> | IAM actions required for the ListIdentitySources API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicies">ListPolicies</a></code> | <code>string[]</code> | IAM actions required for the ListPolicies API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicyStoreAliases">ListPolicyStoreAliases</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyStoreAliases API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicyStores">ListPolicyStores</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyStores API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicyTemplates">ListPolicyTemplates</a></code> | <code>string[]</code> | IAM actions required for the ListPolicyTemplates API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetIdentitySource">opGetIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the GetIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicy">opGetPolicy</a></code> | <code>string[]</code> | IAM actions required for the GetPolicy API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicyStore">opGetPolicyStore</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyStore API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicyStoreAlias">opGetPolicyStoreAlias</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyStoreAlias API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicyTemplate">opGetPolicyTemplate</a></code> | <code>string[]</code> | IAM actions required for the GetPolicyTemplate API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetSchema">opGetSchema</a></code> | <code>string[]</code> | IAM actions required for the GetSchema API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.PutSchema">PutSchema</a></code> | <code>string[]</code> | IAM actions required for the PutSchema API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdateIdentitySource">UpdateIdentitySource</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdentitySource API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdatePolicy">UpdatePolicy</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicy API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdatePolicyStore">UpdatePolicyStore</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicyStore API call. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdatePolicyTemplate">UpdatePolicyTemplate</a></code> | <code>string[]</code> | IAM actions required for the UpdatePolicyTemplate API call. |

---

##### `BatchGetPolicy`<sup>Required</sup> <a name="BatchGetPolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.BatchGetPolicy"></a>

```typescript
public readonly BatchGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the BatchGetPolicy API call.

---

##### `BatchIsAuthorized`<sup>Required</sup> <a name="BatchIsAuthorized" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.BatchIsAuthorized"></a>

```typescript
public readonly BatchIsAuthorized: string[];
```

- *Type:* string[]

IAM actions required for the BatchIsAuthorized API call.

---

##### `BatchIsAuthorizedWithToken`<sup>Required</sup> <a name="BatchIsAuthorizedWithToken" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.BatchIsAuthorizedWithToken"></a>

```typescript
public readonly BatchIsAuthorizedWithToken: string[];
```

- *Type:* string[]

IAM actions required for the BatchIsAuthorizedWithToken API call.

---

##### `CreateIdentitySource`<sup>Required</sup> <a name="CreateIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreateIdentitySource"></a>

```typescript
public readonly CreateIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdentitySource API call.

---

##### `CreatePolicy`<sup>Required</sup> <a name="CreatePolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicy"></a>

```typescript
public readonly CreatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicy API call.

---

##### `CreatePolicyStore`<sup>Required</sup> <a name="CreatePolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicyStore"></a>

```typescript
public readonly CreatePolicyStore: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicyStore API call.

---

##### `CreatePolicyStoreAlias`<sup>Required</sup> <a name="CreatePolicyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicyStoreAlias"></a>

```typescript
public readonly CreatePolicyStoreAlias: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicyStoreAlias API call.

---

##### `CreatePolicyTemplate`<sup>Required</sup> <a name="CreatePolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.CreatePolicyTemplate"></a>

```typescript
public readonly CreatePolicyTemplate: string[];
```

- *Type:* string[]

IAM actions required for the CreatePolicyTemplate API call.

---

##### `DeleteIdentitySource`<sup>Required</sup> <a name="DeleteIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeleteIdentitySource"></a>

```typescript
public readonly DeleteIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentitySource API call.

---

##### `DeletePolicy`<sup>Required</sup> <a name="DeletePolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicy"></a>

```typescript
public readonly DeletePolicy: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicy API call.

---

##### `DeletePolicyStore`<sup>Required</sup> <a name="DeletePolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicyStore"></a>

```typescript
public readonly DeletePolicyStore: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyStore API call.

---

##### `DeletePolicyStoreAlias`<sup>Required</sup> <a name="DeletePolicyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicyStoreAlias"></a>

```typescript
public readonly DeletePolicyStoreAlias: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyStoreAlias API call.

---

##### `DeletePolicyTemplate`<sup>Required</sup> <a name="DeletePolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.DeletePolicyTemplate"></a>

```typescript
public readonly DeletePolicyTemplate: string[];
```

- *Type:* string[]

IAM actions required for the DeletePolicyTemplate API call.

---

##### `IsAuthorized`<sup>Required</sup> <a name="IsAuthorized" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.IsAuthorized"></a>

```typescript
public readonly IsAuthorized: string[];
```

- *Type:* string[]

IAM actions required for the IsAuthorized API call.

---

##### `IsAuthorizedWithToken`<sup>Required</sup> <a name="IsAuthorizedWithToken" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.IsAuthorizedWithToken"></a>

```typescript
public readonly IsAuthorizedWithToken: string[];
```

- *Type:* string[]

IAM actions required for the IsAuthorizedWithToken API call.

---

##### `ListIdentitySources`<sup>Required</sup> <a name="ListIdentitySources" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListIdentitySources"></a>

```typescript
public readonly ListIdentitySources: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentitySources API call.

---

##### `ListPolicies`<sup>Required</sup> <a name="ListPolicies" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicies"></a>

```typescript
public readonly ListPolicies: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicies API call.

---

##### `ListPolicyStoreAliases`<sup>Required</sup> <a name="ListPolicyStoreAliases" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicyStoreAliases"></a>

```typescript
public readonly ListPolicyStoreAliases: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyStoreAliases API call.

---

##### `ListPolicyStores`<sup>Required</sup> <a name="ListPolicyStores" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicyStores"></a>

```typescript
public readonly ListPolicyStores: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyStores API call.

---

##### `ListPolicyTemplates`<sup>Required</sup> <a name="ListPolicyTemplates" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListPolicyTemplates"></a>

```typescript
public readonly ListPolicyTemplates: string[];
```

- *Type:* string[]

IAM actions required for the ListPolicyTemplates API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetIdentitySource`<sup>Required</sup> <a name="opGetIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetIdentitySource"></a>

```typescript
public readonly opGetIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentitySource API call.

---

##### `opGetPolicy`<sup>Required</sup> <a name="opGetPolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicy"></a>

```typescript
public readonly opGetPolicy: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicy API call.

---

##### `opGetPolicyStore`<sup>Required</sup> <a name="opGetPolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicyStore"></a>

```typescript
public readonly opGetPolicyStore: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyStore API call.

---

##### `opGetPolicyStoreAlias`<sup>Required</sup> <a name="opGetPolicyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicyStoreAlias"></a>

```typescript
public readonly opGetPolicyStoreAlias: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyStoreAlias API call.

---

##### `opGetPolicyTemplate`<sup>Required</sup> <a name="opGetPolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetPolicyTemplate"></a>

```typescript
public readonly opGetPolicyTemplate: string[];
```

- *Type:* string[]

IAM actions required for the GetPolicyTemplate API call.

---

##### `opGetSchema`<sup>Required</sup> <a name="opGetSchema" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.opGetSchema"></a>

```typescript
public readonly opGetSchema: string[];
```

- *Type:* string[]

IAM actions required for the GetSchema API call.

---

##### `PutSchema`<sup>Required</sup> <a name="PutSchema" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.PutSchema"></a>

```typescript
public readonly PutSchema: string[];
```

- *Type:* string[]

IAM actions required for the PutSchema API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateIdentitySource`<sup>Required</sup> <a name="UpdateIdentitySource" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdateIdentitySource"></a>

```typescript
public readonly UpdateIdentitySource: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdentitySource API call.

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdatePolicy"></a>

```typescript
public readonly UpdatePolicy: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicy API call.

---

##### `UpdatePolicyStore`<sup>Required</sup> <a name="UpdatePolicyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdatePolicyStore"></a>

```typescript
public readonly UpdatePolicyStore: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicyStore API call.

---

##### `UpdatePolicyTemplate`<sup>Required</sup> <a name="UpdatePolicyTemplate" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsOperations.property.UpdatePolicyTemplate"></a>

```typescript
public readonly UpdatePolicyTemplate: string[];
```

- *Type:* string[]

IAM actions required for the UpdatePolicyTemplate API call.

---

### VerifiedpermissionsResources <a name="VerifiedpermissionsResources" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources"></a>

ARN builders, validators, and parsers for verifiedpermissions resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.Initializer"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

new verifiedpermissions.VerifiedpermissionsResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreAliasArn">isValidPolicyStoreAliasArn</a></code> | Validates whether a string is a valid ARN for the policy-store-alias resource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreArn">isValidPolicyStoreArn</a></code> | Validates whether a string is a valid ARN for the policy-store resource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreAliasArn">parsePolicyStoreAliasArn</a></code> | Parses a policy-store-alias ARN into its components. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreArn">parsePolicyStoreArn</a></code> | Parses a policy-store ARN into its components. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.policyStore">policyStore</a></code> | Builds an ARN for the policy-store resource. |
| <code><a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.policyStoreAlias">policyStoreAlias</a></code> | Builds an ARN for the policy-store-alias resource. |

---

##### `isValidPolicyStoreAliasArn` <a name="isValidPolicyStoreAliasArn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreAliasArn"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreAliasArn(arn: string)
```

Validates whether a string is a valid ARN for the policy-store-alias resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidPolicyStoreArn` <a name="isValidPolicyStoreArn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreArn"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreArn(arn: string)
```

Validates whether a string is a valid ARN for the policy-store resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.isValidPolicyStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyStoreAliasArn` <a name="parsePolicyStoreAliasArn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreAliasArn"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreAliasArn(arn: string)
```

Parses a policy-store-alias ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreAliasArn.parameter.arn"></a>

- *Type:* string

---

##### `parsePolicyStoreArn` <a name="parsePolicyStoreArn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreArn"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreArn(arn: string)
```

Parses a policy-store ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.parsePolicyStoreArn.parameter.arn"></a>

- *Type:* string

---

##### `policyStore` <a name="policyStore" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.policyStore"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsResources.policyStore(props: VerifiedpermissionsPolicyStoreArnProps)
```

Builds an ARN for the policy-store resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.policyStore.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreArnProps">VerifiedpermissionsPolicyStoreArnProps</a>

---

##### `policyStoreAlias` <a name="policyStoreAlias" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.policyStoreAlias"></a>

```typescript
import { verifiedpermissions } from '@cdk_utils/iam'

verifiedpermissions.VerifiedpermissionsResources.policyStoreAlias(props: VerifiedpermissionsPolicyStoreAliasArnProps)
```

Builds an ARN for the policy-store-alias resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsResources.policyStoreAlias.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.verifiedpermissions.VerifiedpermissionsPolicyStoreAliasArnProps">VerifiedpermissionsPolicyStoreAliasArnProps</a>

---




