# `account` Submodule <a name="`account` Submodule" id="@cdk_utils/iam.account"></a>


## Structs <a name="Structs" id="Structs"></a>

### AccountAccountArnComponents <a name="AccountAccountArnComponents" id="@cdk_utils/iam.account.AccountAccountArnComponents"></a>

Parsed components of a account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.account.AccountAccountArnComponents.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

const accountAccountArnComponents: account.AccountAccountArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountAccountArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.account.AccountAccountArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.account.AccountAccountArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

### AccountAccountArnProps <a name="AccountAccountArnProps" id="@cdk_utils/iam.account.AccountAccountArnProps"></a>

Properties for building a account ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.account.AccountAccountArnProps.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

const accountAccountArnProps: account.AccountAccountArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountAccountArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.account.AccountAccountArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.account.AccountAccountArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

### AccountAccountInOrganizationArnComponents <a name="AccountAccountInOrganizationArnComponents" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents"></a>

Parsed components of a accountInOrganization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

const accountAccountInOrganizationArnComponents: account.AccountAccountInOrganizationArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The ManagementAccountId component. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.memberAccountId">memberAccountId</a></code> | <code>string</code> | The MemberAccountId component. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The ManagementAccountId component.

---

##### `memberAccountId`<sup>Required</sup> <a name="memberAccountId" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.memberAccountId"></a>

```typescript
public readonly memberAccountId: string;
```

- *Type:* string

The MemberAccountId component.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### AccountAccountInOrganizationArnProps <a name="AccountAccountInOrganizationArnProps" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps"></a>

Properties for building a accountInOrganization ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

const accountAccountInOrganizationArnProps: account.AccountAccountInOrganizationArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.managementAccountId">managementAccountId</a></code> | <code>string</code> | The ManagementAccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.memberAccountId">memberAccountId</a></code> | <code>string</code> | The MemberAccountId component of the ARN. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.organizationId">organizationId</a></code> | <code>string</code> | The OrganizationId component of the ARN. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `managementAccountId`<sup>Required</sup> <a name="managementAccountId" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.managementAccountId"></a>

```typescript
public readonly managementAccountId: string;
```

- *Type:* string

The ManagementAccountId component of the ARN.

---

##### `memberAccountId`<sup>Required</sup> <a name="memberAccountId" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.memberAccountId"></a>

```typescript
public readonly memberAccountId: string;
```

- *Type:* string

The MemberAccountId component of the ARN.

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

The OrganizationId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.account.AccountAccountInOrganizationArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### AccountActions <a name="AccountActions" id="@cdk_utils/iam.account.AccountActions"></a>

IAM action constants for the account service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account.AccountActions.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

new account.AccountActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.AcceptPrimaryEmailUpdate">AcceptPrimaryEmailUpdate</a></code> | <code>string</code> | [Write] account:AcceptPrimaryEmailUpdate. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetAccountInformation">actionGetAccountInformation</a></code> | <code>string</code> | [Read] account:GetAccountInformation. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetAlternateContact">actionGetAlternateContact</a></code> | <code>string</code> | [Read] account:GetAlternateContact. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetContactInformation">actionGetContactInformation</a></code> | <code>string</code> | [Read] account:GetContactInformation. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetGovCloudAccountInformation">actionGetGovCloudAccountInformation</a></code> | <code>string</code> | [Read] account:GetGovCloudAccountInformation. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetPrimaryEmail">actionGetPrimaryEmail</a></code> | <code>string</code> | [Read] account:GetPrimaryEmail. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetPrimaryEmailUpdateStatus">actionGetPrimaryEmailUpdateStatus</a></code> | <code>string</code> | [Read] account:GetPrimaryEmailUpdateStatus. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.actionGetRegionOptStatus">actionGetRegionOptStatus</a></code> | <code>string</code> | [Read] account:GetRegionOptStatus. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.CloseAccount">CloseAccount</a></code> | <code>string</code> | [Write] account:CloseAccount. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.DeleteAlternateContact">DeleteAlternateContact</a></code> | <code>string</code> | [Write] account:DeleteAlternateContact. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.DisableRegion">DisableRegion</a></code> | <code>string</code> | [Write] account:DisableRegion. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.EnableRegion">EnableRegion</a></code> | <code>string</code> | [Write] account:EnableRegion. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.ListRegions">ListRegions</a></code> | <code>string</code> | [List] account:ListRegions. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.PutAccountName">PutAccountName</a></code> | <code>string</code> | [Write] account:PutAccountName. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.PutAlternateContact">PutAlternateContact</a></code> | <code>string</code> | [Write] account:PutAlternateContact. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.PutContactInformation">PutContactInformation</a></code> | <code>string</code> | [Write] account:PutContactInformation. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.account.AccountActions.property.StartPrimaryEmailUpdate">StartPrimaryEmailUpdate</a></code> | <code>string</code> | [Write] account:StartPrimaryEmailUpdate. |

---

##### `AcceptPrimaryEmailUpdate`<sup>Required</sup> <a name="AcceptPrimaryEmailUpdate" id="@cdk_utils/iam.account.AccountActions.property.AcceptPrimaryEmailUpdate"></a>

```typescript
public readonly AcceptPrimaryEmailUpdate: string;
```

- *Type:* string

[Write] account:AcceptPrimaryEmailUpdate.

---

##### `actionGetAccountInformation`<sup>Required</sup> <a name="actionGetAccountInformation" id="@cdk_utils/iam.account.AccountActions.property.actionGetAccountInformation"></a>

```typescript
public readonly actionGetAccountInformation: string;
```

- *Type:* string

[Read] account:GetAccountInformation.

---

##### `actionGetAlternateContact`<sup>Required</sup> <a name="actionGetAlternateContact" id="@cdk_utils/iam.account.AccountActions.property.actionGetAlternateContact"></a>

```typescript
public readonly actionGetAlternateContact: string;
```

- *Type:* string

[Read] account:GetAlternateContact.

---

##### `actionGetContactInformation`<sup>Required</sup> <a name="actionGetContactInformation" id="@cdk_utils/iam.account.AccountActions.property.actionGetContactInformation"></a>

```typescript
public readonly actionGetContactInformation: string;
```

- *Type:* string

[Read] account:GetContactInformation.

---

##### `actionGetGovCloudAccountInformation`<sup>Required</sup> <a name="actionGetGovCloudAccountInformation" id="@cdk_utils/iam.account.AccountActions.property.actionGetGovCloudAccountInformation"></a>

```typescript
public readonly actionGetGovCloudAccountInformation: string;
```

- *Type:* string

[Read] account:GetGovCloudAccountInformation.

---

##### `actionGetPrimaryEmail`<sup>Required</sup> <a name="actionGetPrimaryEmail" id="@cdk_utils/iam.account.AccountActions.property.actionGetPrimaryEmail"></a>

```typescript
public readonly actionGetPrimaryEmail: string;
```

- *Type:* string

[Read] account:GetPrimaryEmail.

---

##### `actionGetPrimaryEmailUpdateStatus`<sup>Required</sup> <a name="actionGetPrimaryEmailUpdateStatus" id="@cdk_utils/iam.account.AccountActions.property.actionGetPrimaryEmailUpdateStatus"></a>

```typescript
public readonly actionGetPrimaryEmailUpdateStatus: string;
```

- *Type:* string

[Read] account:GetPrimaryEmailUpdateStatus.

---

##### `actionGetRegionOptStatus`<sup>Required</sup> <a name="actionGetRegionOptStatus" id="@cdk_utils/iam.account.AccountActions.property.actionGetRegionOptStatus"></a>

```typescript
public readonly actionGetRegionOptStatus: string;
```

- *Type:* string

[Read] account:GetRegionOptStatus.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.account.AccountActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.account.AccountActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.account.AccountActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.account.AccountActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.account.AccountActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CloseAccount`<sup>Required</sup> <a name="CloseAccount" id="@cdk_utils/iam.account.AccountActions.property.CloseAccount"></a>

```typescript
public readonly CloseAccount: string;
```

- *Type:* string

[Write] account:CloseAccount.

---

##### `DeleteAlternateContact`<sup>Required</sup> <a name="DeleteAlternateContact" id="@cdk_utils/iam.account.AccountActions.property.DeleteAlternateContact"></a>

```typescript
public readonly DeleteAlternateContact: string;
```

- *Type:* string

[Write] account:DeleteAlternateContact.

---

##### `DisableRegion`<sup>Required</sup> <a name="DisableRegion" id="@cdk_utils/iam.account.AccountActions.property.DisableRegion"></a>

```typescript
public readonly DisableRegion: string;
```

- *Type:* string

[Write] account:DisableRegion.

---

##### `EnableRegion`<sup>Required</sup> <a name="EnableRegion" id="@cdk_utils/iam.account.AccountActions.property.EnableRegion"></a>

```typescript
public readonly EnableRegion: string;
```

- *Type:* string

[Write] account:EnableRegion.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.account.AccountActions.property.ListRegions"></a>

```typescript
public readonly ListRegions: string;
```

- *Type:* string

[List] account:ListRegions.

---

##### `PutAccountName`<sup>Required</sup> <a name="PutAccountName" id="@cdk_utils/iam.account.AccountActions.property.PutAccountName"></a>

```typescript
public readonly PutAccountName: string;
```

- *Type:* string

[Write] account:PutAccountName.

---

##### `PutAlternateContact`<sup>Required</sup> <a name="PutAlternateContact" id="@cdk_utils/iam.account.AccountActions.property.PutAlternateContact"></a>

```typescript
public readonly PutAlternateContact: string;
```

- *Type:* string

[Write] account:PutAlternateContact.

---

##### `PutContactInformation`<sup>Required</sup> <a name="PutContactInformation" id="@cdk_utils/iam.account.AccountActions.property.PutContactInformation"></a>

```typescript
public readonly PutContactInformation: string;
```

- *Type:* string

[Write] account:PutContactInformation.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.account.AccountActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartPrimaryEmailUpdate`<sup>Required</sup> <a name="StartPrimaryEmailUpdate" id="@cdk_utils/iam.account.AccountActions.property.StartPrimaryEmailUpdate"></a>

```typescript
public readonly StartPrimaryEmailUpdate: string;
```

- *Type:* string

[Write] account:StartPrimaryEmailUpdate.

---

### AccountConditions <a name="AccountConditions" id="@cdk_utils/iam.account.AccountConditions"></a>

Condition key constants and builders for account.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account.AccountConditions.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

new account.AccountConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.accountResourceOrgPaths">accountResourceOrgPaths</a></code> | Generates a condition block for `account:AccountResourceOrgPaths`. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.accountResourceOrgTags">accountResourceOrgTags</a></code> | Generates a condition block for `account:AccountResourceOrgTags/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.alternateContactTypes">alternateContactTypes</a></code> | Generates a condition block for `account:AlternateContactTypes`. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.emailTargetDomain">emailTargetDomain</a></code> | Generates a condition block for `account:EmailTargetDomain`. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.targetRegion">targetRegion</a></code> | Generates a condition block for `account:TargetRegion`. |

---

##### `accountResourceOrgPaths` <a name="accountResourceOrgPaths" id="@cdk_utils/iam.account.AccountConditions.accountResourceOrgPaths"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountConditions.accountResourceOrgPaths(values: string[])
```

Generates a condition block for `account:AccountResourceOrgPaths`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.account.AccountConditions.accountResourceOrgPaths.parameter.values"></a>

- *Type:* string[]

---

##### `accountResourceOrgTags` <a name="accountResourceOrgTags" id="@cdk_utils/iam.account.AccountConditions.accountResourceOrgTags"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountConditions.accountResourceOrgTags(value: string)
```

Generates a condition block for `account:AccountResourceOrgTags/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.account.AccountConditions.accountResourceOrgTags.parameter.value"></a>

- *Type:* string

---

##### `alternateContactTypes` <a name="alternateContactTypes" id="@cdk_utils/iam.account.AccountConditions.alternateContactTypes"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountConditions.alternateContactTypes(values: string[])
```

Generates a condition block for `account:AlternateContactTypes`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.account.AccountConditions.alternateContactTypes.parameter.values"></a>

- *Type:* string[]

---

##### `emailTargetDomain` <a name="emailTargetDomain" id="@cdk_utils/iam.account.AccountConditions.emailTargetDomain"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountConditions.emailTargetDomain(value: string)
```

Generates a condition block for `account:EmailTargetDomain`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.account.AccountConditions.emailTargetDomain.parameter.value"></a>

- *Type:* string

---

##### `targetRegion` <a name="targetRegion" id="@cdk_utils/iam.account.AccountConditions.targetRegion"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountConditions.targetRegion(value: string)
```

Generates a condition block for `account:TargetRegion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.account.AccountConditions.targetRegion.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.AcceptPrimaryEmailUpdateConditionKeys">AcceptPrimaryEmailUpdateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the AcceptPrimaryEmailUpdate action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.ACCOUNT_RESOURCE_ORG_PATHS">ACCOUNT_RESOURCE_ORG_PATHS</a></code> | <code>string</code> | Condition key: account:AccountResourceOrgPaths (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.ACCOUNT_RESOURCE_ORG_TAGS">ACCOUNT_RESOURCE_ORG_TAGS</a></code> | <code>string</code> | Condition key: account:AccountResourceOrgTags/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.actionGetAlternateContactConditionKeys">actionGetAlternateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetAlternateContact action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.actionGetRegionOptStatusConditionKeys">actionGetRegionOptStatusConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetRegionOptStatus action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.ALTERNATE_CONTACT_TYPES">ALTERNATE_CONTACT_TYPES</a></code> | <code>string</code> | Condition key: account:AlternateContactTypes (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.DeleteAlternateContactConditionKeys">DeleteAlternateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteAlternateContact action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.DisableRegionConditionKeys">DisableRegionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DisableRegion action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.EMAIL_TARGET_DOMAIN">EMAIL_TARGET_DOMAIN</a></code> | <code>string</code> | Condition key: account:EmailTargetDomain (String). |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.EnableRegionConditionKeys">EnableRegionConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the EnableRegion action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.PutAlternateContactConditionKeys">PutAlternateContactConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutAlternateContact action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.StartPrimaryEmailUpdateConditionKeys">StartPrimaryEmailUpdateConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartPrimaryEmailUpdate action. |
| <code><a href="#@cdk_utils/iam.account.AccountConditions.property.TARGET_REGION">TARGET_REGION</a></code> | <code>string</code> | Condition key: account:TargetRegion (String). |

---

##### `AcceptPrimaryEmailUpdateConditionKeys`<sup>Required</sup> <a name="AcceptPrimaryEmailUpdateConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.AcceptPrimaryEmailUpdateConditionKeys"></a>

```typescript
public readonly AcceptPrimaryEmailUpdateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the AcceptPrimaryEmailUpdate action.

---

##### `ACCOUNT_RESOURCE_ORG_PATHS`<sup>Required</sup> <a name="ACCOUNT_RESOURCE_ORG_PATHS" id="@cdk_utils/iam.account.AccountConditions.property.ACCOUNT_RESOURCE_ORG_PATHS"></a>

```typescript
public readonly ACCOUNT_RESOURCE_ORG_PATHS: string;
```

- *Type:* string

Condition key: account:AccountResourceOrgPaths (ArrayOfString).

---

##### `ACCOUNT_RESOURCE_ORG_TAGS`<sup>Required</sup> <a name="ACCOUNT_RESOURCE_ORG_TAGS" id="@cdk_utils/iam.account.AccountConditions.property.ACCOUNT_RESOURCE_ORG_TAGS"></a>

```typescript
public readonly ACCOUNT_RESOURCE_ORG_TAGS: string;
```

- *Type:* string

Condition key: account:AccountResourceOrgTags/${TagKey} (String).

---

##### `actionGetAlternateContactConditionKeys`<sup>Required</sup> <a name="actionGetAlternateContactConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.actionGetAlternateContactConditionKeys"></a>

```typescript
public readonly actionGetAlternateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetAlternateContact action.

---

##### `actionGetRegionOptStatusConditionKeys`<sup>Required</sup> <a name="actionGetRegionOptStatusConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.actionGetRegionOptStatusConditionKeys"></a>

```typescript
public readonly actionGetRegionOptStatusConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetRegionOptStatus action.

---

##### `ALTERNATE_CONTACT_TYPES`<sup>Required</sup> <a name="ALTERNATE_CONTACT_TYPES" id="@cdk_utils/iam.account.AccountConditions.property.ALTERNATE_CONTACT_TYPES"></a>

```typescript
public readonly ALTERNATE_CONTACT_TYPES: string;
```

- *Type:* string

Condition key: account:AlternateContactTypes (ArrayOfString).

---

##### `DeleteAlternateContactConditionKeys`<sup>Required</sup> <a name="DeleteAlternateContactConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.DeleteAlternateContactConditionKeys"></a>

```typescript
public readonly DeleteAlternateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteAlternateContact action.

---

##### `DisableRegionConditionKeys`<sup>Required</sup> <a name="DisableRegionConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.DisableRegionConditionKeys"></a>

```typescript
public readonly DisableRegionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DisableRegion action.

---

##### `EMAIL_TARGET_DOMAIN`<sup>Required</sup> <a name="EMAIL_TARGET_DOMAIN" id="@cdk_utils/iam.account.AccountConditions.property.EMAIL_TARGET_DOMAIN"></a>

```typescript
public readonly EMAIL_TARGET_DOMAIN: string;
```

- *Type:* string

Condition key: account:EmailTargetDomain (String).

---

##### `EnableRegionConditionKeys`<sup>Required</sup> <a name="EnableRegionConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.EnableRegionConditionKeys"></a>

```typescript
public readonly EnableRegionConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the EnableRegion action.

---

##### `PutAlternateContactConditionKeys`<sup>Required</sup> <a name="PutAlternateContactConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.PutAlternateContactConditionKeys"></a>

```typescript
public readonly PutAlternateContactConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutAlternateContact action.

---

##### `StartPrimaryEmailUpdateConditionKeys`<sup>Required</sup> <a name="StartPrimaryEmailUpdateConditionKeys" id="@cdk_utils/iam.account.AccountConditions.property.StartPrimaryEmailUpdateConditionKeys"></a>

```typescript
public readonly StartPrimaryEmailUpdateConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartPrimaryEmailUpdate action.

---

##### `TARGET_REGION`<sup>Required</sup> <a name="TARGET_REGION" id="@cdk_utils/iam.account.AccountConditions.property.TARGET_REGION"></a>

```typescript
public readonly TARGET_REGION: string;
```

- *Type:* string

Condition key: account:TargetRegion (String).

---

### AccountOperations <a name="AccountOperations" id="@cdk_utils/iam.account.AccountOperations"></a>

API operation to required IAM actions mapping for account.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account.AccountOperations.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

new account.AccountOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.AcceptPrimaryEmailUpdate">AcceptPrimaryEmailUpdate</a></code> | <code>string[]</code> | IAM actions required for the AcceptPrimaryEmailUpdate API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.DeleteAlternateContact">DeleteAlternateContact</a></code> | <code>string[]</code> | IAM actions required for the DeleteAlternateContact API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.DisableRegion">DisableRegion</a></code> | <code>string[]</code> | IAM actions required for the DisableRegion API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.EnableRegion">EnableRegion</a></code> | <code>string[]</code> | IAM actions required for the EnableRegion API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.ListRegions">ListRegions</a></code> | <code>string[]</code> | IAM actions required for the ListRegions API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetAccountInformation">opGetAccountInformation</a></code> | <code>string[]</code> | IAM actions required for the GetAccountInformation API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetAlternateContact">opGetAlternateContact</a></code> | <code>string[]</code> | IAM actions required for the GetAlternateContact API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetContactInformation">opGetContactInformation</a></code> | <code>string[]</code> | IAM actions required for the GetContactInformation API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetGovCloudAccountInformation">opGetGovCloudAccountInformation</a></code> | <code>string[]</code> | IAM actions required for the GetGovCloudAccountInformation API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetPrimaryEmail">opGetPrimaryEmail</a></code> | <code>string[]</code> | IAM actions required for the GetPrimaryEmail API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetPrimaryEmailUpdateStatus">opGetPrimaryEmailUpdateStatus</a></code> | <code>string[]</code> | IAM actions required for the GetPrimaryEmailUpdateStatus API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.opGetRegionOptStatus">opGetRegionOptStatus</a></code> | <code>string[]</code> | IAM actions required for the GetRegionOptStatus API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.PutAccountName">PutAccountName</a></code> | <code>string[]</code> | IAM actions required for the PutAccountName API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.PutAlternateContact">PutAlternateContact</a></code> | <code>string[]</code> | IAM actions required for the PutAlternateContact API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.PutContactInformation">PutContactInformation</a></code> | <code>string[]</code> | IAM actions required for the PutContactInformation API call. |
| <code><a href="#@cdk_utils/iam.account.AccountOperations.property.StartPrimaryEmailUpdate">StartPrimaryEmailUpdate</a></code> | <code>string[]</code> | IAM actions required for the StartPrimaryEmailUpdate API call. |

---

##### `AcceptPrimaryEmailUpdate`<sup>Required</sup> <a name="AcceptPrimaryEmailUpdate" id="@cdk_utils/iam.account.AccountOperations.property.AcceptPrimaryEmailUpdate"></a>

```typescript
public readonly AcceptPrimaryEmailUpdate: string[];
```

- *Type:* string[]

IAM actions required for the AcceptPrimaryEmailUpdate API call.

---

##### `DeleteAlternateContact`<sup>Required</sup> <a name="DeleteAlternateContact" id="@cdk_utils/iam.account.AccountOperations.property.DeleteAlternateContact"></a>

```typescript
public readonly DeleteAlternateContact: string[];
```

- *Type:* string[]

IAM actions required for the DeleteAlternateContact API call.

---

##### `DisableRegion`<sup>Required</sup> <a name="DisableRegion" id="@cdk_utils/iam.account.AccountOperations.property.DisableRegion"></a>

```typescript
public readonly DisableRegion: string[];
```

- *Type:* string[]

IAM actions required for the DisableRegion API call.

---

##### `EnableRegion`<sup>Required</sup> <a name="EnableRegion" id="@cdk_utils/iam.account.AccountOperations.property.EnableRegion"></a>

```typescript
public readonly EnableRegion: string[];
```

- *Type:* string[]

IAM actions required for the EnableRegion API call.

---

##### `ListRegions`<sup>Required</sup> <a name="ListRegions" id="@cdk_utils/iam.account.AccountOperations.property.ListRegions"></a>

```typescript
public readonly ListRegions: string[];
```

- *Type:* string[]

IAM actions required for the ListRegions API call.

---

##### `opGetAccountInformation`<sup>Required</sup> <a name="opGetAccountInformation" id="@cdk_utils/iam.account.AccountOperations.property.opGetAccountInformation"></a>

```typescript
public readonly opGetAccountInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetAccountInformation API call.

---

##### `opGetAlternateContact`<sup>Required</sup> <a name="opGetAlternateContact" id="@cdk_utils/iam.account.AccountOperations.property.opGetAlternateContact"></a>

```typescript
public readonly opGetAlternateContact: string[];
```

- *Type:* string[]

IAM actions required for the GetAlternateContact API call.

---

##### `opGetContactInformation`<sup>Required</sup> <a name="opGetContactInformation" id="@cdk_utils/iam.account.AccountOperations.property.opGetContactInformation"></a>

```typescript
public readonly opGetContactInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetContactInformation API call.

---

##### `opGetGovCloudAccountInformation`<sup>Required</sup> <a name="opGetGovCloudAccountInformation" id="@cdk_utils/iam.account.AccountOperations.property.opGetGovCloudAccountInformation"></a>

```typescript
public readonly opGetGovCloudAccountInformation: string[];
```

- *Type:* string[]

IAM actions required for the GetGovCloudAccountInformation API call.

---

##### `opGetPrimaryEmail`<sup>Required</sup> <a name="opGetPrimaryEmail" id="@cdk_utils/iam.account.AccountOperations.property.opGetPrimaryEmail"></a>

```typescript
public readonly opGetPrimaryEmail: string[];
```

- *Type:* string[]

IAM actions required for the GetPrimaryEmail API call.

---

##### `opGetPrimaryEmailUpdateStatus`<sup>Required</sup> <a name="opGetPrimaryEmailUpdateStatus" id="@cdk_utils/iam.account.AccountOperations.property.opGetPrimaryEmailUpdateStatus"></a>

```typescript
public readonly opGetPrimaryEmailUpdateStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetPrimaryEmailUpdateStatus API call.

---

##### `opGetRegionOptStatus`<sup>Required</sup> <a name="opGetRegionOptStatus" id="@cdk_utils/iam.account.AccountOperations.property.opGetRegionOptStatus"></a>

```typescript
public readonly opGetRegionOptStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetRegionOptStatus API call.

---

##### `PutAccountName`<sup>Required</sup> <a name="PutAccountName" id="@cdk_utils/iam.account.AccountOperations.property.PutAccountName"></a>

```typescript
public readonly PutAccountName: string[];
```

- *Type:* string[]

IAM actions required for the PutAccountName API call.

---

##### `PutAlternateContact`<sup>Required</sup> <a name="PutAlternateContact" id="@cdk_utils/iam.account.AccountOperations.property.PutAlternateContact"></a>

```typescript
public readonly PutAlternateContact: string[];
```

- *Type:* string[]

IAM actions required for the PutAlternateContact API call.

---

##### `PutContactInformation`<sup>Required</sup> <a name="PutContactInformation" id="@cdk_utils/iam.account.AccountOperations.property.PutContactInformation"></a>

```typescript
public readonly PutContactInformation: string[];
```

- *Type:* string[]

IAM actions required for the PutContactInformation API call.

---

##### `StartPrimaryEmailUpdate`<sup>Required</sup> <a name="StartPrimaryEmailUpdate" id="@cdk_utils/iam.account.AccountOperations.property.StartPrimaryEmailUpdate"></a>

```typescript
public readonly StartPrimaryEmailUpdate: string[];
```

- *Type:* string[]

IAM actions required for the StartPrimaryEmailUpdate API call.

---

### AccountResources <a name="AccountResources" id="@cdk_utils/iam.account.AccountResources"></a>

ARN builders, validators, and parsers for account resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.account.AccountResources.Initializer"></a>

```typescript
import { account } from '@cdk_utils/iam'

new account.AccountResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.account.AccountResources.account">account</a></code> | Builds an ARN for the account resource. |
| <code><a href="#@cdk_utils/iam.account.AccountResources.accountInOrganization">accountInOrganization</a></code> | Builds an ARN for the accountInOrganization resource. |
| <code><a href="#@cdk_utils/iam.account.AccountResources.isValidAccountArn">isValidAccountArn</a></code> | Validates whether a string is a valid ARN for the account resource. |
| <code><a href="#@cdk_utils/iam.account.AccountResources.isValidAccountInOrganizationArn">isValidAccountInOrganizationArn</a></code> | Validates whether a string is a valid ARN for the accountInOrganization resource. |
| <code><a href="#@cdk_utils/iam.account.AccountResources.parseAccountArn">parseAccountArn</a></code> | Parses a account ARN into its components. |
| <code><a href="#@cdk_utils/iam.account.AccountResources.parseAccountInOrganizationArn">parseAccountInOrganizationArn</a></code> | Parses a accountInOrganization ARN into its components. |

---

##### `account` <a name="account" id="@cdk_utils/iam.account.AccountResources.account"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountResources.account(props: AccountAccountArnProps)
```

Builds an ARN for the account resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.account.AccountResources.account.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.account.AccountAccountArnProps">AccountAccountArnProps</a>

---

##### `accountInOrganization` <a name="accountInOrganization" id="@cdk_utils/iam.account.AccountResources.accountInOrganization"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountResources.accountInOrganization(props: AccountAccountInOrganizationArnProps)
```

Builds an ARN for the accountInOrganization resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.account.AccountResources.accountInOrganization.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.account.AccountAccountInOrganizationArnProps">AccountAccountInOrganizationArnProps</a>

---

##### `isValidAccountArn` <a name="isValidAccountArn" id="@cdk_utils/iam.account.AccountResources.isValidAccountArn"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountResources.isValidAccountArn(arn: string)
```

Validates whether a string is a valid ARN for the account resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.account.AccountResources.isValidAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidAccountInOrganizationArn` <a name="isValidAccountInOrganizationArn" id="@cdk_utils/iam.account.AccountResources.isValidAccountInOrganizationArn"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountResources.isValidAccountInOrganizationArn(arn: string)
```

Validates whether a string is a valid ARN for the accountInOrganization resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.account.AccountResources.isValidAccountInOrganizationArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccountArn` <a name="parseAccountArn" id="@cdk_utils/iam.account.AccountResources.parseAccountArn"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountResources.parseAccountArn(arn: string)
```

Parses a account ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.account.AccountResources.parseAccountArn.parameter.arn"></a>

- *Type:* string

---

##### `parseAccountInOrganizationArn` <a name="parseAccountInOrganizationArn" id="@cdk_utils/iam.account.AccountResources.parseAccountInOrganizationArn"></a>

```typescript
import { account } from '@cdk_utils/iam'

account.AccountResources.parseAccountInOrganizationArn(arn: string)
```

Parses a accountInOrganization ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.account.AccountResources.parseAccountInOrganizationArn.parameter.arn"></a>

- *Type:* string

---




