# `cognito_identity` Submodule <a name="`cognito_identity` Submodule" id="@cdk_utils/iam.cognito_identity"></a>


## Structs <a name="Structs" id="Structs"></a>

### CognitoIdentityIdentitypoolArnComponents <a name="CognitoIdentityIdentitypoolArnComponents" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents"></a>

Parsed components of a identitypool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.Initializer"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

const cognitoIdentityIdentitypoolArnComponents: cognito_identity.CognitoIdentityIdentitypoolArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### CognitoIdentityIdentitypoolArnProps <a name="CognitoIdentityIdentitypoolArnProps" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps"></a>

Properties for building a identitypool ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.Initializer"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

const cognitoIdentityIdentitypoolArnProps: cognito_identity.CognitoIdentityIdentitypoolArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.identityPoolId">identityPoolId</a></code> | <code>string</code> | The IdentityPoolId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `identityPoolId`<sup>Required</sup> <a name="identityPoolId" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.identityPoolId"></a>

```typescript
public readonly identityPoolId: string;
```

- *Type:* string

The IdentityPoolId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### CognitoIdentityActions <a name="CognitoIdentityActions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions"></a>

IAM action constants for the cognito-identity service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.Initializer"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

new cognito_identity.CognitoIdentityActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetCredentialsForIdentity">actionGetCredentialsForIdentity</a></code> | <code>string</code> | [Read] cognito-identity:GetCredentialsForIdentity. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetId">actionGetId</a></code> | <code>string</code> | [Write] cognito-identity:GetId. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityPoolAnalytics">actionGetIdentityPoolAnalytics</a></code> | <code>string</code> | [Read] cognito-identity:GetIdentityPoolAnalytics. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityPoolDailyAnalytics">actionGetIdentityPoolDailyAnalytics</a></code> | <code>string</code> | [Read] cognito-identity:GetIdentityPoolDailyAnalytics. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityPoolRoles">actionGetIdentityPoolRoles</a></code> | <code>string</code> | [Read] cognito-identity:GetIdentityPoolRoles. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityProviderDailyAnalytics">actionGetIdentityProviderDailyAnalytics</a></code> | <code>string</code> | [Read] cognito-identity:GetIdentityProviderDailyAnalytics. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetOpenIdToken">actionGetOpenIdToken</a></code> | <code>string</code> | [Read] cognito-identity:GetOpenIdToken. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetOpenIdTokenForDeveloperIdentity">actionGetOpenIdTokenForDeveloperIdentity</a></code> | <code>string</code> | [Read] cognito-identity:GetOpenIdTokenForDeveloperIdentity. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetPrincipalTagAttributeMap">actionGetPrincipalTagAttributeMap</a></code> | <code>string</code> | [Read] cognito-identity:GetPrincipalTagAttributeMap. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionSetIdentityPoolRoles">actionSetIdentityPoolRoles</a></code> | <code>string</code> | [Write] cognito-identity:SetIdentityPoolRoles. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionSetPrincipalTagAttributeMap">actionSetPrincipalTagAttributeMap</a></code> | <code>string</code> | [Write] cognito-identity:SetPrincipalTagAttributeMap. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.CreateIdentityPool">CreateIdentityPool</a></code> | <code>string</code> | [Write] cognito-identity:CreateIdentityPool. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DeleteIdentities">DeleteIdentities</a></code> | <code>string</code> | [Write] cognito-identity:DeleteIdentities. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DeleteIdentityPool">DeleteIdentityPool</a></code> | <code>string</code> | [Write] cognito-identity:DeleteIdentityPool. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DescribeIdentity">DescribeIdentity</a></code> | <code>string</code> | [Read] cognito-identity:DescribeIdentity. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DescribeIdentityPool">DescribeIdentityPool</a></code> | <code>string</code> | [Read] cognito-identity:DescribeIdentityPool. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.ListIdentities">ListIdentities</a></code> | <code>string</code> | [List] cognito-identity:ListIdentities. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.ListIdentityPools">ListIdentityPools</a></code> | <code>string</code> | [List] cognito-identity:ListIdentityPools. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] cognito-identity:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.LookupDeveloperIdentity">LookupDeveloperIdentity</a></code> | <code>string</code> | [Read] cognito-identity:LookupDeveloperIdentity. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.MergeDeveloperIdentities">MergeDeveloperIdentities</a></code> | <code>string</code> | [Write] cognito-identity:MergeDeveloperIdentities. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cognito-identity:TagResource. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UnlinkDeveloperIdentity">UnlinkDeveloperIdentity</a></code> | <code>string</code> | [Write] cognito-identity:UnlinkDeveloperIdentity. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UnlinkIdentity">UnlinkIdentity</a></code> | <code>string</code> | [Write] cognito-identity:UnlinkIdentity. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cognito-identity:UntagResource. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UpdateIdentityPool">UpdateIdentityPool</a></code> | <code>string</code> | [Write] cognito-identity:UpdateIdentityPool. |

---

##### `actionGetCredentialsForIdentity`<sup>Required</sup> <a name="actionGetCredentialsForIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetCredentialsForIdentity"></a>

```typescript
public readonly actionGetCredentialsForIdentity: string;
```

- *Type:* string

[Read] cognito-identity:GetCredentialsForIdentity.

---

##### `actionGetId`<sup>Required</sup> <a name="actionGetId" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetId"></a>

```typescript
public readonly actionGetId: string;
```

- *Type:* string

[Write] cognito-identity:GetId.

---

##### `actionGetIdentityPoolAnalytics`<sup>Required</sup> <a name="actionGetIdentityPoolAnalytics" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityPoolAnalytics"></a>

```typescript
public readonly actionGetIdentityPoolAnalytics: string;
```

- *Type:* string

[Read] cognito-identity:GetIdentityPoolAnalytics.

---

##### `actionGetIdentityPoolDailyAnalytics`<sup>Required</sup> <a name="actionGetIdentityPoolDailyAnalytics" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityPoolDailyAnalytics"></a>

```typescript
public readonly actionGetIdentityPoolDailyAnalytics: string;
```

- *Type:* string

[Read] cognito-identity:GetIdentityPoolDailyAnalytics.

---

##### `actionGetIdentityPoolRoles`<sup>Required</sup> <a name="actionGetIdentityPoolRoles" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityPoolRoles"></a>

```typescript
public readonly actionGetIdentityPoolRoles: string;
```

- *Type:* string

[Read] cognito-identity:GetIdentityPoolRoles.

---

##### `actionGetIdentityProviderDailyAnalytics`<sup>Required</sup> <a name="actionGetIdentityProviderDailyAnalytics" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetIdentityProviderDailyAnalytics"></a>

```typescript
public readonly actionGetIdentityProviderDailyAnalytics: string;
```

- *Type:* string

[Read] cognito-identity:GetIdentityProviderDailyAnalytics.

---

##### `actionGetOpenIdToken`<sup>Required</sup> <a name="actionGetOpenIdToken" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetOpenIdToken"></a>

```typescript
public readonly actionGetOpenIdToken: string;
```

- *Type:* string

[Read] cognito-identity:GetOpenIdToken.

---

##### `actionGetOpenIdTokenForDeveloperIdentity`<sup>Required</sup> <a name="actionGetOpenIdTokenForDeveloperIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetOpenIdTokenForDeveloperIdentity"></a>

```typescript
public readonly actionGetOpenIdTokenForDeveloperIdentity: string;
```

- *Type:* string

[Read] cognito-identity:GetOpenIdTokenForDeveloperIdentity.

---

##### `actionGetPrincipalTagAttributeMap`<sup>Required</sup> <a name="actionGetPrincipalTagAttributeMap" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionGetPrincipalTagAttributeMap"></a>

```typescript
public readonly actionGetPrincipalTagAttributeMap: string;
```

- *Type:* string

[Read] cognito-identity:GetPrincipalTagAttributeMap.

---

##### `actionSetIdentityPoolRoles`<sup>Required</sup> <a name="actionSetIdentityPoolRoles" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionSetIdentityPoolRoles"></a>

```typescript
public readonly actionSetIdentityPoolRoles: string;
```

- *Type:* string

[Write] cognito-identity:SetIdentityPoolRoles.

---

##### `actionSetPrincipalTagAttributeMap`<sup>Required</sup> <a name="actionSetPrincipalTagAttributeMap" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.actionSetPrincipalTagAttributeMap"></a>

```typescript
public readonly actionSetPrincipalTagAttributeMap: string;
```

- *Type:* string

[Write] cognito-identity:SetPrincipalTagAttributeMap.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateIdentityPool`<sup>Required</sup> <a name="CreateIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.CreateIdentityPool"></a>

```typescript
public readonly CreateIdentityPool: string;
```

- *Type:* string

[Write] cognito-identity:CreateIdentityPool.

---

##### `DeleteIdentities`<sup>Required</sup> <a name="DeleteIdentities" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DeleteIdentities"></a>

```typescript
public readonly DeleteIdentities: string;
```

- *Type:* string

[Write] cognito-identity:DeleteIdentities.

---

##### `DeleteIdentityPool`<sup>Required</sup> <a name="DeleteIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DeleteIdentityPool"></a>

```typescript
public readonly DeleteIdentityPool: string;
```

- *Type:* string

[Write] cognito-identity:DeleteIdentityPool.

---

##### `DescribeIdentity`<sup>Required</sup> <a name="DescribeIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DescribeIdentity"></a>

```typescript
public readonly DescribeIdentity: string;
```

- *Type:* string

[Read] cognito-identity:DescribeIdentity.

---

##### `DescribeIdentityPool`<sup>Required</sup> <a name="DescribeIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.DescribeIdentityPool"></a>

```typescript
public readonly DescribeIdentityPool: string;
```

- *Type:* string

[Read] cognito-identity:DescribeIdentityPool.

---

##### `ListIdentities`<sup>Required</sup> <a name="ListIdentities" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.ListIdentities"></a>

```typescript
public readonly ListIdentities: string;
```

- *Type:* string

[List] cognito-identity:ListIdentities.

---

##### `ListIdentityPools`<sup>Required</sup> <a name="ListIdentityPools" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.ListIdentityPools"></a>

```typescript
public readonly ListIdentityPools: string;
```

- *Type:* string

[List] cognito-identity:ListIdentityPools.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] cognito-identity:ListTagsForResource.

---

##### `LookupDeveloperIdentity`<sup>Required</sup> <a name="LookupDeveloperIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.LookupDeveloperIdentity"></a>

```typescript
public readonly LookupDeveloperIdentity: string;
```

- *Type:* string

[Read] cognito-identity:LookupDeveloperIdentity.

---

##### `MergeDeveloperIdentities`<sup>Required</sup> <a name="MergeDeveloperIdentities" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.MergeDeveloperIdentities"></a>

```typescript
public readonly MergeDeveloperIdentities: string;
```

- *Type:* string

[Write] cognito-identity:MergeDeveloperIdentities.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cognito-identity:TagResource.

---

##### `UnlinkDeveloperIdentity`<sup>Required</sup> <a name="UnlinkDeveloperIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UnlinkDeveloperIdentity"></a>

```typescript
public readonly UnlinkDeveloperIdentity: string;
```

- *Type:* string

[Write] cognito-identity:UnlinkDeveloperIdentity.

---

##### `UnlinkIdentity`<sup>Required</sup> <a name="UnlinkIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UnlinkIdentity"></a>

```typescript
public readonly UnlinkIdentity: string;
```

- *Type:* string

[Write] cognito-identity:UnlinkIdentity.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cognito-identity:UntagResource.

---

##### `UpdateIdentityPool`<sup>Required</sup> <a name="UpdateIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityActions.property.UpdateIdentityPool"></a>

```typescript
public readonly UpdateIdentityPool: string;
```

- *Type:* string

[Write] cognito-identity:UpdateIdentityPool.

---

### CognitoIdentityConditions <a name="CognitoIdentityConditions" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions"></a>

Condition key constants and builders for cognito-identity.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.Initializer"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

new cognito_identity.CognitoIdentityConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.identityPoolARN">identityPoolARN</a></code> | Generates a condition block for `cognito-identity:IdentityPoolArn`. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `identityPoolARN` <a name="identityPoolARN" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.identityPoolARN"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityConditions.identityPoolARN(value: string)
```

Generates a condition block for `cognito-identity:IdentityPoolArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.identityPoolARN.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.requestTag"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.resourceTag"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.tagKeys"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.ACCOUNT_ID">ACCOUNT_ID</a></code> | <code>string</code> | Condition key: cognito-identity-auth:AccountId (String). |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.actionGetCredentialsForIdentityConditionKeys">actionGetCredentialsForIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetCredentialsForIdentity action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.actionGetIdConditionKeys">actionGetIdConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetId action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.actionGetOpenIdTokenConditionKeys">actionGetOpenIdTokenConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetOpenIdToken action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.CreateIdentityPoolConditionKeys">CreateIdentityPoolConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateIdentityPool action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.DeleteIdentitiesConditionKeys">DeleteIdentitiesConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteIdentities action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.DescribeIdentityConditionKeys">DescribeIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeIdentity action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.IDENTITY_POOL_ARN">IDENTITY_POOL_ARN</a></code> | <code>string</code> | Condition key: cognito-identity-auth:IdentityPoolArn (ARN). |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.UnlinkIdentityConditionKeys">UnlinkIdentityConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UnlinkIdentity action. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `ACCOUNT_ID`<sup>Required</sup> <a name="ACCOUNT_ID" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.ACCOUNT_ID"></a>

```typescript
public readonly ACCOUNT_ID: string;
```

- *Type:* string

Condition key: cognito-identity-auth:AccountId (String).

---

##### `actionGetCredentialsForIdentityConditionKeys`<sup>Required</sup> <a name="actionGetCredentialsForIdentityConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.actionGetCredentialsForIdentityConditionKeys"></a>

```typescript
public readonly actionGetCredentialsForIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetCredentialsForIdentity action.

---

##### `actionGetIdConditionKeys`<sup>Required</sup> <a name="actionGetIdConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.actionGetIdConditionKeys"></a>

```typescript
public readonly actionGetIdConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetId action.

---

##### `actionGetOpenIdTokenConditionKeys`<sup>Required</sup> <a name="actionGetOpenIdTokenConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.actionGetOpenIdTokenConditionKeys"></a>

```typescript
public readonly actionGetOpenIdTokenConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetOpenIdToken action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateIdentityPoolConditionKeys`<sup>Required</sup> <a name="CreateIdentityPoolConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.CreateIdentityPoolConditionKeys"></a>

```typescript
public readonly CreateIdentityPoolConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateIdentityPool action.

---

##### `DeleteIdentitiesConditionKeys`<sup>Required</sup> <a name="DeleteIdentitiesConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.DeleteIdentitiesConditionKeys"></a>

```typescript
public readonly DeleteIdentitiesConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteIdentities action.

---

##### `DescribeIdentityConditionKeys`<sup>Required</sup> <a name="DescribeIdentityConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.DescribeIdentityConditionKeys"></a>

```typescript
public readonly DescribeIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeIdentity action.

---

##### `IDENTITY_POOL_ARN`<sup>Required</sup> <a name="IDENTITY_POOL_ARN" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.IDENTITY_POOL_ARN"></a>

```typescript
public readonly IDENTITY_POOL_ARN: string;
```

- *Type:* string

Condition key: cognito-identity-auth:IdentityPoolArn (ARN).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UnlinkIdentityConditionKeys`<sup>Required</sup> <a name="UnlinkIdentityConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.UnlinkIdentityConditionKeys"></a>

```typescript
public readonly UnlinkIdentityConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UnlinkIdentity action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cognito_identity.CognitoIdentityConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### CognitoIdentityOperations <a name="CognitoIdentityOperations" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations"></a>

API operation to required IAM actions mapping for cognito-identity.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.Initializer"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

new cognito_identity.CognitoIdentityOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.CreateIdentityPool">CreateIdentityPool</a></code> | <code>string[]</code> | IAM actions required for the CreateIdentityPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DeleteIdentities">DeleteIdentities</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentities API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DeleteIdentityPool">DeleteIdentityPool</a></code> | <code>string[]</code> | IAM actions required for the DeleteIdentityPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DescribeIdentity">DescribeIdentity</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentity API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DescribeIdentityPool">DescribeIdentityPool</a></code> | <code>string[]</code> | IAM actions required for the DescribeIdentityPool API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.ListIdentities">ListIdentities</a></code> | <code>string[]</code> | IAM actions required for the ListIdentities API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.ListIdentityPools">ListIdentityPools</a></code> | <code>string[]</code> | IAM actions required for the ListIdentityPools API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.LookupDeveloperIdentity">LookupDeveloperIdentity</a></code> | <code>string[]</code> | IAM actions required for the LookupDeveloperIdentity API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.MergeDeveloperIdentities">MergeDeveloperIdentities</a></code> | <code>string[]</code> | IAM actions required for the MergeDeveloperIdentities API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetCredentialsForIdentity">opGetCredentialsForIdentity</a></code> | <code>string[]</code> | IAM actions required for the GetCredentialsForIdentity API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetId">opGetId</a></code> | <code>string[]</code> | IAM actions required for the GetId API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetIdentityPoolRoles">opGetIdentityPoolRoles</a></code> | <code>string[]</code> | IAM actions required for the GetIdentityPoolRoles API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetOpenIdToken">opGetOpenIdToken</a></code> | <code>string[]</code> | IAM actions required for the GetOpenIdToken API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetOpenIdTokenForDeveloperIdentity">opGetOpenIdTokenForDeveloperIdentity</a></code> | <code>string[]</code> | IAM actions required for the GetOpenIdTokenForDeveloperIdentity API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetPrincipalTagAttributeMap">opGetPrincipalTagAttributeMap</a></code> | <code>string[]</code> | IAM actions required for the GetPrincipalTagAttributeMap API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opSetIdentityPoolRoles">opSetIdentityPoolRoles</a></code> | <code>string[]</code> | IAM actions required for the SetIdentityPoolRoles API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opSetPrincipalTagAttributeMap">opSetPrincipalTagAttributeMap</a></code> | <code>string[]</code> | IAM actions required for the SetPrincipalTagAttributeMap API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UnlinkDeveloperIdentity">UnlinkDeveloperIdentity</a></code> | <code>string[]</code> | IAM actions required for the UnlinkDeveloperIdentity API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UnlinkIdentity">UnlinkIdentity</a></code> | <code>string[]</code> | IAM actions required for the UnlinkIdentity API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UpdateIdentityPool">UpdateIdentityPool</a></code> | <code>string[]</code> | IAM actions required for the UpdateIdentityPool API call. |

---

##### `CreateIdentityPool`<sup>Required</sup> <a name="CreateIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.CreateIdentityPool"></a>

```typescript
public readonly CreateIdentityPool: string[];
```

- *Type:* string[]

IAM actions required for the CreateIdentityPool API call.

---

##### `DeleteIdentities`<sup>Required</sup> <a name="DeleteIdentities" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DeleteIdentities"></a>

```typescript
public readonly DeleteIdentities: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentities API call.

---

##### `DeleteIdentityPool`<sup>Required</sup> <a name="DeleteIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DeleteIdentityPool"></a>

```typescript
public readonly DeleteIdentityPool: string[];
```

- *Type:* string[]

IAM actions required for the DeleteIdentityPool API call.

---

##### `DescribeIdentity`<sup>Required</sup> <a name="DescribeIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DescribeIdentity"></a>

```typescript
public readonly DescribeIdentity: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentity API call.

---

##### `DescribeIdentityPool`<sup>Required</sup> <a name="DescribeIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.DescribeIdentityPool"></a>

```typescript
public readonly DescribeIdentityPool: string[];
```

- *Type:* string[]

IAM actions required for the DescribeIdentityPool API call.

---

##### `ListIdentities`<sup>Required</sup> <a name="ListIdentities" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.ListIdentities"></a>

```typescript
public readonly ListIdentities: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentities API call.

---

##### `ListIdentityPools`<sup>Required</sup> <a name="ListIdentityPools" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.ListIdentityPools"></a>

```typescript
public readonly ListIdentityPools: string[];
```

- *Type:* string[]

IAM actions required for the ListIdentityPools API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `LookupDeveloperIdentity`<sup>Required</sup> <a name="LookupDeveloperIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.LookupDeveloperIdentity"></a>

```typescript
public readonly LookupDeveloperIdentity: string[];
```

- *Type:* string[]

IAM actions required for the LookupDeveloperIdentity API call.

---

##### `MergeDeveloperIdentities`<sup>Required</sup> <a name="MergeDeveloperIdentities" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.MergeDeveloperIdentities"></a>

```typescript
public readonly MergeDeveloperIdentities: string[];
```

- *Type:* string[]

IAM actions required for the MergeDeveloperIdentities API call.

---

##### `opGetCredentialsForIdentity`<sup>Required</sup> <a name="opGetCredentialsForIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetCredentialsForIdentity"></a>

```typescript
public readonly opGetCredentialsForIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GetCredentialsForIdentity API call.

---

##### `opGetId`<sup>Required</sup> <a name="opGetId" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetId"></a>

```typescript
public readonly opGetId: string[];
```

- *Type:* string[]

IAM actions required for the GetId API call.

---

##### `opGetIdentityPoolRoles`<sup>Required</sup> <a name="opGetIdentityPoolRoles" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetIdentityPoolRoles"></a>

```typescript
public readonly opGetIdentityPoolRoles: string[];
```

- *Type:* string[]

IAM actions required for the GetIdentityPoolRoles API call.

---

##### `opGetOpenIdToken`<sup>Required</sup> <a name="opGetOpenIdToken" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetOpenIdToken"></a>

```typescript
public readonly opGetOpenIdToken: string[];
```

- *Type:* string[]

IAM actions required for the GetOpenIdToken API call.

---

##### `opGetOpenIdTokenForDeveloperIdentity`<sup>Required</sup> <a name="opGetOpenIdTokenForDeveloperIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetOpenIdTokenForDeveloperIdentity"></a>

```typescript
public readonly opGetOpenIdTokenForDeveloperIdentity: string[];
```

- *Type:* string[]

IAM actions required for the GetOpenIdTokenForDeveloperIdentity API call.

---

##### `opGetPrincipalTagAttributeMap`<sup>Required</sup> <a name="opGetPrincipalTagAttributeMap" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opGetPrincipalTagAttributeMap"></a>

```typescript
public readonly opGetPrincipalTagAttributeMap: string[];
```

- *Type:* string[]

IAM actions required for the GetPrincipalTagAttributeMap API call.

---

##### `opSetIdentityPoolRoles`<sup>Required</sup> <a name="opSetIdentityPoolRoles" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opSetIdentityPoolRoles"></a>

```typescript
public readonly opSetIdentityPoolRoles: string[];
```

- *Type:* string[]

IAM actions required for the SetIdentityPoolRoles API call.

---

##### `opSetPrincipalTagAttributeMap`<sup>Required</sup> <a name="opSetPrincipalTagAttributeMap" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.opSetPrincipalTagAttributeMap"></a>

```typescript
public readonly opSetPrincipalTagAttributeMap: string[];
```

- *Type:* string[]

IAM actions required for the SetPrincipalTagAttributeMap API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UnlinkDeveloperIdentity`<sup>Required</sup> <a name="UnlinkDeveloperIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UnlinkDeveloperIdentity"></a>

```typescript
public readonly UnlinkDeveloperIdentity: string[];
```

- *Type:* string[]

IAM actions required for the UnlinkDeveloperIdentity API call.

---

##### `UnlinkIdentity`<sup>Required</sup> <a name="UnlinkIdentity" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UnlinkIdentity"></a>

```typescript
public readonly UnlinkIdentity: string[];
```

- *Type:* string[]

IAM actions required for the UnlinkIdentity API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateIdentityPool`<sup>Required</sup> <a name="UpdateIdentityPool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityOperations.property.UpdateIdentityPool"></a>

```typescript
public readonly UpdateIdentityPool: string[];
```

- *Type:* string[]

IAM actions required for the UpdateIdentityPool API call.

---

### CognitoIdentityResources <a name="CognitoIdentityResources" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources"></a>

ARN builders, validators, and parsers for cognito-identity resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.Initializer"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

new cognito_identity.CognitoIdentityResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityResources.identitypool">identitypool</a></code> | Builds an ARN for the identitypool resource. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityResources.isValidIdentitypoolArn">isValidIdentitypoolArn</a></code> | Validates whether a string is a valid ARN for the identitypool resource. |
| <code><a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityResources.parseIdentitypoolArn">parseIdentitypoolArn</a></code> | Parses a identitypool ARN into its components. |

---

##### `identitypool` <a name="identitypool" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.identitypool"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityResources.identitypool(props: CognitoIdentityIdentitypoolArnProps)
```

Builds an ARN for the identitypool resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.identitypool.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cognito_identity.CognitoIdentityIdentitypoolArnProps">CognitoIdentityIdentitypoolArnProps</a>

---

##### `isValidIdentitypoolArn` <a name="isValidIdentitypoolArn" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.isValidIdentitypoolArn"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityResources.isValidIdentitypoolArn(arn: string)
```

Validates whether a string is a valid ARN for the identitypool resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.isValidIdentitypoolArn.parameter.arn"></a>

- *Type:* string

---

##### `parseIdentitypoolArn` <a name="parseIdentitypoolArn" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.parseIdentitypoolArn"></a>

```typescript
import { cognito_identity } from '@cdk_utils/iam'

cognito_identity.CognitoIdentityResources.parseIdentitypoolArn(arn: string)
```

Parses a identitypool ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cognito_identity.CognitoIdentityResources.parseIdentitypoolArn.parameter.arn"></a>

- *Type:* string

---




