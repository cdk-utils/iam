# `cloud9` Submodule <a name="`cloud9` Submodule" id="@cdk_utils/iam.cloud9"></a>


## Structs <a name="Structs" id="Structs"></a>

### Cloud9EnvironmentArnComponents <a name="Cloud9EnvironmentArnComponents" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents"></a>

Parsed components of a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.Initializer"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

const cloud9EnvironmentArnComponents: cloud9.Cloud9EnvironmentArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnComponents.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component.

---

### Cloud9EnvironmentArnProps <a name="Cloud9EnvironmentArnProps" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps"></a>

Properties for building a environment ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.Initializer"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

const cloud9EnvironmentArnProps: cloud9.Cloud9EnvironmentArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.resourceId">resourceId</a></code> | <code>string</code> | The ResourceId component of the ARN. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

The ResourceId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### Cloud9Actions <a name="Cloud9Actions" id="@cdk_utils/iam.cloud9.Cloud9Actions"></a>

IAM action constants for the cloud9 service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloud9.Cloud9Actions.Initializer"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

new cloud9.Cloud9Actions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetEnvironmentConfig">actionGetEnvironmentConfig</a></code> | <code>string</code> | [Read] cloud9:GetEnvironmentConfig. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetEnvironmentSettings">actionGetEnvironmentSettings</a></code> | <code>string</code> | [Read] cloud9:GetEnvironmentSettings. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetMembershipSettings">actionGetMembershipSettings</a></code> | <code>string</code> | [Read] cloud9:GetMembershipSettings. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetMigrationExperiences">actionGetMigrationExperiences</a></code> | <code>string</code> | [Read] cloud9:GetMigrationExperiences. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetUserPublicKey">actionGetUserPublicKey</a></code> | <code>string</code> | [Read] cloud9:GetUserPublicKey. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetUserSettings">actionGetUserSettings</a></code> | <code>string</code> | [Read] cloud9:GetUserSettings. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.ActivateEC2Remote">ActivateEC2Remote</a></code> | <code>string</code> | [Write] cloud9:ActivateEC2Remote. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentEC2">CreateEnvironmentEC2</a></code> | <code>string</code> | [Write] cloud9:CreateEnvironmentEC2. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentMembership">CreateEnvironmentMembership</a></code> | <code>string</code> | [Write] cloud9:CreateEnvironmentMembership. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentSSH">CreateEnvironmentSSH</a></code> | <code>string</code> | [Write] cloud9:CreateEnvironmentSSH. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentToken">CreateEnvironmentToken</a></code> | <code>string</code> | [Read] cloud9:CreateEnvironmentToken. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string</code> | [Write] cloud9:DeleteEnvironment. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DeleteEnvironmentMembership">DeleteEnvironmentMembership</a></code> | <code>string</code> | [Write] cloud9:DeleteEnvironmentMembership. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEC2Remote">DescribeEC2Remote</a></code> | <code>string</code> | [Read] cloud9:DescribeEC2Remote. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEnvironmentMemberships">DescribeEnvironmentMemberships</a></code> | <code>string</code> | [Read] cloud9:DescribeEnvironmentMemberships. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEnvironments">DescribeEnvironments</a></code> | <code>string</code> | [Read] cloud9:DescribeEnvironments. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEnvironmentStatus">DescribeEnvironmentStatus</a></code> | <code>string</code> | [Read] cloud9:DescribeEnvironmentStatus. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeSSHRemote">DescribeSSHRemote</a></code> | <code>string</code> | [Read] cloud9:DescribeSSHRemote. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.ListEnvironments">ListEnvironments</a></code> | <code>string</code> | [Read] cloud9:ListEnvironments. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] cloud9:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.ModifyTemporaryCredentialsOnEnvironmentEC2">ModifyTemporaryCredentialsOnEnvironmentEC2</a></code> | <code>string</code> | [Write] cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] cloud9:TagResource. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] cloud9:UntagResource. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string</code> | [Write] cloud9:UpdateEnvironment. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateEnvironmentMembership">UpdateEnvironmentMembership</a></code> | <code>string</code> | [Write] cloud9:UpdateEnvironmentMembership. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateEnvironmentSettings">UpdateEnvironmentSettings</a></code> | <code>string</code> | [Write] cloud9:UpdateEnvironmentSettings. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateMembershipSettings">UpdateMembershipSettings</a></code> | <code>string</code> | [Write] cloud9:UpdateMembershipSettings. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateSSHRemote">UpdateSSHRemote</a></code> | <code>string</code> | [Write] cloud9:UpdateSSHRemote. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateUserSettings">UpdateUserSettings</a></code> | <code>string</code> | [Write] cloud9:UpdateUserSettings. |

---

##### `actionGetEnvironmentConfig`<sup>Required</sup> <a name="actionGetEnvironmentConfig" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetEnvironmentConfig"></a>

```typescript
public readonly actionGetEnvironmentConfig: string;
```

- *Type:* string

[Read] cloud9:GetEnvironmentConfig.

---

##### `actionGetEnvironmentSettings`<sup>Required</sup> <a name="actionGetEnvironmentSettings" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetEnvironmentSettings"></a>

```typescript
public readonly actionGetEnvironmentSettings: string;
```

- *Type:* string

[Read] cloud9:GetEnvironmentSettings.

---

##### `actionGetMembershipSettings`<sup>Required</sup> <a name="actionGetMembershipSettings" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetMembershipSettings"></a>

```typescript
public readonly actionGetMembershipSettings: string;
```

- *Type:* string

[Read] cloud9:GetMembershipSettings.

---

##### `actionGetMigrationExperiences`<sup>Required</sup> <a name="actionGetMigrationExperiences" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetMigrationExperiences"></a>

```typescript
public readonly actionGetMigrationExperiences: string;
```

- *Type:* string

[Read] cloud9:GetMigrationExperiences.

---

##### `actionGetUserPublicKey`<sup>Required</sup> <a name="actionGetUserPublicKey" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetUserPublicKey"></a>

```typescript
public readonly actionGetUserPublicKey: string;
```

- *Type:* string

[Read] cloud9:GetUserPublicKey.

---

##### `actionGetUserSettings`<sup>Required</sup> <a name="actionGetUserSettings" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.actionGetUserSettings"></a>

```typescript
public readonly actionGetUserSettings: string;
```

- *Type:* string

[Read] cloud9:GetUserSettings.

---

##### `ActivateEC2Remote`<sup>Required</sup> <a name="ActivateEC2Remote" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.ActivateEC2Remote"></a>

```typescript
public readonly ActivateEC2Remote: string;
```

- *Type:* string

[Write] cloud9:ActivateEC2Remote.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CreateEnvironmentEC2`<sup>Required</sup> <a name="CreateEnvironmentEC2" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentEC2"></a>

```typescript
public readonly CreateEnvironmentEC2: string;
```

- *Type:* string

[Write] cloud9:CreateEnvironmentEC2.

---

##### `CreateEnvironmentMembership`<sup>Required</sup> <a name="CreateEnvironmentMembership" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentMembership"></a>

```typescript
public readonly CreateEnvironmentMembership: string;
```

- *Type:* string

[Write] cloud9:CreateEnvironmentMembership.

---

##### `CreateEnvironmentSSH`<sup>Required</sup> <a name="CreateEnvironmentSSH" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentSSH"></a>

```typescript
public readonly CreateEnvironmentSSH: string;
```

- *Type:* string

[Write] cloud9:CreateEnvironmentSSH.

---

##### `CreateEnvironmentToken`<sup>Required</sup> <a name="CreateEnvironmentToken" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.CreateEnvironmentToken"></a>

```typescript
public readonly CreateEnvironmentToken: string;
```

- *Type:* string

[Read] cloud9:CreateEnvironmentToken.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string;
```

- *Type:* string

[Write] cloud9:DeleteEnvironment.

---

##### `DeleteEnvironmentMembership`<sup>Required</sup> <a name="DeleteEnvironmentMembership" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DeleteEnvironmentMembership"></a>

```typescript
public readonly DeleteEnvironmentMembership: string;
```

- *Type:* string

[Write] cloud9:DeleteEnvironmentMembership.

---

##### `DescribeEC2Remote`<sup>Required</sup> <a name="DescribeEC2Remote" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEC2Remote"></a>

```typescript
public readonly DescribeEC2Remote: string;
```

- *Type:* string

[Read] cloud9:DescribeEC2Remote.

---

##### `DescribeEnvironmentMemberships`<sup>Required</sup> <a name="DescribeEnvironmentMemberships" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEnvironmentMemberships"></a>

```typescript
public readonly DescribeEnvironmentMemberships: string;
```

- *Type:* string

[Read] cloud9:DescribeEnvironmentMemberships.

---

##### `DescribeEnvironments`<sup>Required</sup> <a name="DescribeEnvironments" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEnvironments"></a>

```typescript
public readonly DescribeEnvironments: string;
```

- *Type:* string

[Read] cloud9:DescribeEnvironments.

---

##### `DescribeEnvironmentStatus`<sup>Required</sup> <a name="DescribeEnvironmentStatus" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeEnvironmentStatus"></a>

```typescript
public readonly DescribeEnvironmentStatus: string;
```

- *Type:* string

[Read] cloud9:DescribeEnvironmentStatus.

---

##### `DescribeSSHRemote`<sup>Required</sup> <a name="DescribeSSHRemote" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.DescribeSSHRemote"></a>

```typescript
public readonly DescribeSSHRemote: string;
```

- *Type:* string

[Read] cloud9:DescribeSSHRemote.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string;
```

- *Type:* string

[Read] cloud9:ListEnvironments.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] cloud9:ListTagsForResource.

---

##### `ModifyTemporaryCredentialsOnEnvironmentEC2`<sup>Required</sup> <a name="ModifyTemporaryCredentialsOnEnvironmentEC2" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.ModifyTemporaryCredentialsOnEnvironmentEC2"></a>

```typescript
public readonly ModifyTemporaryCredentialsOnEnvironmentEC2: string;
```

- *Type:* string

[Write] cloud9:ModifyTemporaryCredentialsOnEnvironmentEC2.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] cloud9:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] cloud9:UntagResource.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string;
```

- *Type:* string

[Write] cloud9:UpdateEnvironment.

---

##### `UpdateEnvironmentMembership`<sup>Required</sup> <a name="UpdateEnvironmentMembership" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateEnvironmentMembership"></a>

```typescript
public readonly UpdateEnvironmentMembership: string;
```

- *Type:* string

[Write] cloud9:UpdateEnvironmentMembership.

---

##### `UpdateEnvironmentSettings`<sup>Required</sup> <a name="UpdateEnvironmentSettings" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateEnvironmentSettings"></a>

```typescript
public readonly UpdateEnvironmentSettings: string;
```

- *Type:* string

[Write] cloud9:UpdateEnvironmentSettings.

---

##### `UpdateMembershipSettings`<sup>Required</sup> <a name="UpdateMembershipSettings" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateMembershipSettings"></a>

```typescript
public readonly UpdateMembershipSettings: string;
```

- *Type:* string

[Write] cloud9:UpdateMembershipSettings.

---

##### `UpdateSSHRemote`<sup>Required</sup> <a name="UpdateSSHRemote" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateSSHRemote"></a>

```typescript
public readonly UpdateSSHRemote: string;
```

- *Type:* string

[Write] cloud9:UpdateSSHRemote.

---

##### `UpdateUserSettings`<sup>Required</sup> <a name="UpdateUserSettings" id="@cdk_utils/iam.cloud9.Cloud9Actions.property.UpdateUserSettings"></a>

```typescript
public readonly UpdateUserSettings: string;
```

- *Type:* string

[Write] cloud9:UpdateUserSettings.

---

### Cloud9Conditions <a name="Cloud9Conditions" id="@cdk_utils/iam.cloud9.Cloud9Conditions"></a>

Condition key constants and builders for cloud9.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloud9.Cloud9Conditions.Initializer"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

new cloud9.Cloud9Conditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.environmentId">environmentId</a></code> | Generates a condition block for `cloud9:EnvironmentId`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.environmentName">environmentName</a></code> | Generates a condition block for `cloud9:EnvironmentName`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.instanceType">instanceType</a></code> | Generates a condition block for `cloud9:InstanceType`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.ownerARN">ownerARN</a></code> | Generates a condition block for `cloud9:OwnerArn`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.permissions">permissions</a></code> | Generates a condition block for `cloud9:Permissions`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.subnetId">subnetId</a></code> | Generates a condition block for `cloud9:SubnetId`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.userARN">userARN</a></code> | Generates a condition block for `cloud9:UserArn`. |

---

##### `environmentId` <a name="environmentId" id="@cdk_utils/iam.cloud9.Cloud9Conditions.environmentId"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.environmentId(value: string)
```

Generates a condition block for `cloud9:EnvironmentId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.environmentId.parameter.value"></a>

- *Type:* string

---

##### `environmentName` <a name="environmentName" id="@cdk_utils/iam.cloud9.Cloud9Conditions.environmentName"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.environmentName(value: string)
```

Generates a condition block for `cloud9:EnvironmentName`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.environmentName.parameter.value"></a>

- *Type:* string

---

##### `instanceType` <a name="instanceType" id="@cdk_utils/iam.cloud9.Cloud9Conditions.instanceType"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.instanceType(value: string)
```

Generates a condition block for `cloud9:InstanceType`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.instanceType.parameter.value"></a>

- *Type:* string

---

##### `ownerARN` <a name="ownerARN" id="@cdk_utils/iam.cloud9.Cloud9Conditions.ownerARN"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.ownerARN(value: string)
```

Generates a condition block for `cloud9:OwnerArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.ownerARN.parameter.value"></a>

- *Type:* string

---

##### `permissions` <a name="permissions" id="@cdk_utils/iam.cloud9.Cloud9Conditions.permissions"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.permissions(value: string)
```

Generates a condition block for `cloud9:Permissions`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.permissions.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.cloud9.Cloud9Conditions.requestTag"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.cloud9.Cloud9Conditions.resourceTag"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `subnetId` <a name="subnetId" id="@cdk_utils/iam.cloud9.Cloud9Conditions.subnetId"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.subnetId(value: string)
```

Generates a condition block for `cloud9:SubnetId`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.subnetId.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.tagKeys"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.cloud9.Cloud9Conditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---

##### `userARN` <a name="userARN" id="@cdk_utils/iam.cloud9.Cloud9Conditions.userARN"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Conditions.userARN(value: string)
```

Generates a condition block for `cloud9:UserArn`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.cloud9.Cloud9Conditions.userARN.parameter.value"></a>

- *Type:* string

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.actionGetUserPublicKeyConditionKeys">actionGetUserPublicKeyConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetUserPublicKey action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.CreateEnvironmentEC2ConditionKeys">CreateEnvironmentEC2ConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentEC2 action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.CreateEnvironmentMembershipConditionKeys">CreateEnvironmentMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentMembership action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.CreateEnvironmentSSHConditionKeys">CreateEnvironmentSSHConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateEnvironmentSSH action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.DeleteEnvironmentMembershipConditionKeys">DeleteEnvironmentMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DeleteEnvironmentMembership action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.DescribeEnvironmentMembershipsConditionKeys">DescribeEnvironmentMembershipsConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the DescribeEnvironmentMemberships action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.ENVIRONMENT_ID">ENVIRONMENT_ID</a></code> | <code>string</code> | Condition key: cloud9:EnvironmentId (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.ENVIRONMENT_NAME">ENVIRONMENT_NAME</a></code> | <code>string</code> | Condition key: cloud9:EnvironmentName (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.INSTANCE_TYPE">INSTANCE_TYPE</a></code> | <code>string</code> | Condition key: cloud9:InstanceType (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.OWNER_ARN">OWNER_ARN</a></code> | <code>string</code> | Condition key: cloud9:OwnerArn (ARN). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.PERMISSIONS">PERMISSIONS</a></code> | <code>string</code> | Condition key: cloud9:Permissions (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.SUBNET_ID">SUBNET_ID</a></code> | <code>string</code> | Condition key: cloud9:SubnetId (String). |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.UpdateEnvironmentMembershipConditionKeys">UpdateEnvironmentMembershipConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UpdateEnvironmentMembership action. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Conditions.property.USER_ARN">USER_ARN</a></code> | <code>string</code> | Condition key: cloud9:UserArn (ARN). |

---

##### `actionGetUserPublicKeyConditionKeys`<sup>Required</sup> <a name="actionGetUserPublicKeyConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.actionGetUserPublicKeyConditionKeys"></a>

```typescript
public readonly actionGetUserPublicKeyConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetUserPublicKey action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateEnvironmentEC2ConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentEC2ConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.CreateEnvironmentEC2ConditionKeys"></a>

```typescript
public readonly CreateEnvironmentEC2ConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentEC2 action.

---

##### `CreateEnvironmentMembershipConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentMembershipConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.CreateEnvironmentMembershipConditionKeys"></a>

```typescript
public readonly CreateEnvironmentMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentMembership action.

---

##### `CreateEnvironmentSSHConditionKeys`<sup>Required</sup> <a name="CreateEnvironmentSSHConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.CreateEnvironmentSSHConditionKeys"></a>

```typescript
public readonly CreateEnvironmentSSHConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateEnvironmentSSH action.

---

##### `DeleteEnvironmentMembershipConditionKeys`<sup>Required</sup> <a name="DeleteEnvironmentMembershipConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.DeleteEnvironmentMembershipConditionKeys"></a>

```typescript
public readonly DeleteEnvironmentMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DeleteEnvironmentMembership action.

---

##### `DescribeEnvironmentMembershipsConditionKeys`<sup>Required</sup> <a name="DescribeEnvironmentMembershipsConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.DescribeEnvironmentMembershipsConditionKeys"></a>

```typescript
public readonly DescribeEnvironmentMembershipsConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the DescribeEnvironmentMemberships action.

---

##### `ENVIRONMENT_ID`<sup>Required</sup> <a name="ENVIRONMENT_ID" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.ENVIRONMENT_ID"></a>

```typescript
public readonly ENVIRONMENT_ID: string;
```

- *Type:* string

Condition key: cloud9:EnvironmentId (String).

---

##### `ENVIRONMENT_NAME`<sup>Required</sup> <a name="ENVIRONMENT_NAME" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.ENVIRONMENT_NAME"></a>

```typescript
public readonly ENVIRONMENT_NAME: string;
```

- *Type:* string

Condition key: cloud9:EnvironmentName (String).

---

##### `INSTANCE_TYPE`<sup>Required</sup> <a name="INSTANCE_TYPE" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.INSTANCE_TYPE"></a>

```typescript
public readonly INSTANCE_TYPE: string;
```

- *Type:* string

Condition key: cloud9:InstanceType (String).

---

##### `OWNER_ARN`<sup>Required</sup> <a name="OWNER_ARN" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.OWNER_ARN"></a>

```typescript
public readonly OWNER_ARN: string;
```

- *Type:* string

Condition key: cloud9:OwnerArn (ARN).

---

##### `PERMISSIONS`<sup>Required</sup> <a name="PERMISSIONS" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.PERMISSIONS"></a>

```typescript
public readonly PERMISSIONS: string;
```

- *Type:* string

Condition key: cloud9:Permissions (String).

---

##### `SUBNET_ID`<sup>Required</sup> <a name="SUBNET_ID" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.SUBNET_ID"></a>

```typescript
public readonly SUBNET_ID: string;
```

- *Type:* string

Condition key: cloud9:SubnetId (String).

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

##### `UpdateEnvironmentMembershipConditionKeys`<sup>Required</sup> <a name="UpdateEnvironmentMembershipConditionKeys" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.UpdateEnvironmentMembershipConditionKeys"></a>

```typescript
public readonly UpdateEnvironmentMembershipConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UpdateEnvironmentMembership action.

---

##### `USER_ARN`<sup>Required</sup> <a name="USER_ARN" id="@cdk_utils/iam.cloud9.Cloud9Conditions.property.USER_ARN"></a>

```typescript
public readonly USER_ARN: string;
```

- *Type:* string

Condition key: cloud9:UserArn (ARN).

---

### Cloud9Operations <a name="Cloud9Operations" id="@cdk_utils/iam.cloud9.Cloud9Operations"></a>

API operation to required IAM actions mapping for cloud9.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloud9.Cloud9Operations.Initializer"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

new cloud9.Cloud9Operations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.CreateEnvironmentEC2">CreateEnvironmentEC2</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentEC2 API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.CreateEnvironmentMembership">CreateEnvironmentMembership</a></code> | <code>string[]</code> | IAM actions required for the CreateEnvironmentMembership API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.DeleteEnvironment">DeleteEnvironment</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironment API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.DeleteEnvironmentMembership">DeleteEnvironmentMembership</a></code> | <code>string[]</code> | IAM actions required for the DeleteEnvironmentMembership API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.DescribeEnvironmentMemberships">DescribeEnvironmentMemberships</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironmentMemberships API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.DescribeEnvironments">DescribeEnvironments</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironments API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.DescribeEnvironmentStatus">DescribeEnvironmentStatus</a></code> | <code>string[]</code> | IAM actions required for the DescribeEnvironmentStatus API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.ListEnvironments">ListEnvironments</a></code> | <code>string[]</code> | IAM actions required for the ListEnvironments API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.UpdateEnvironment">UpdateEnvironment</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironment API call. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Operations.property.UpdateEnvironmentMembership">UpdateEnvironmentMembership</a></code> | <code>string[]</code> | IAM actions required for the UpdateEnvironmentMembership API call. |

---

##### `CreateEnvironmentEC2`<sup>Required</sup> <a name="CreateEnvironmentEC2" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.CreateEnvironmentEC2"></a>

```typescript
public readonly CreateEnvironmentEC2: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentEC2 API call.

---

##### `CreateEnvironmentMembership`<sup>Required</sup> <a name="CreateEnvironmentMembership" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.CreateEnvironmentMembership"></a>

```typescript
public readonly CreateEnvironmentMembership: string[];
```

- *Type:* string[]

IAM actions required for the CreateEnvironmentMembership API call.

---

##### `DeleteEnvironment`<sup>Required</sup> <a name="DeleteEnvironment" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.DeleteEnvironment"></a>

```typescript
public readonly DeleteEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironment API call.

---

##### `DeleteEnvironmentMembership`<sup>Required</sup> <a name="DeleteEnvironmentMembership" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.DeleteEnvironmentMembership"></a>

```typescript
public readonly DeleteEnvironmentMembership: string[];
```

- *Type:* string[]

IAM actions required for the DeleteEnvironmentMembership API call.

---

##### `DescribeEnvironmentMemberships`<sup>Required</sup> <a name="DescribeEnvironmentMemberships" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.DescribeEnvironmentMemberships"></a>

```typescript
public readonly DescribeEnvironmentMemberships: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironmentMemberships API call.

---

##### `DescribeEnvironments`<sup>Required</sup> <a name="DescribeEnvironments" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.DescribeEnvironments"></a>

```typescript
public readonly DescribeEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironments API call.

---

##### `DescribeEnvironmentStatus`<sup>Required</sup> <a name="DescribeEnvironmentStatus" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.DescribeEnvironmentStatus"></a>

```typescript
public readonly DescribeEnvironmentStatus: string[];
```

- *Type:* string[]

IAM actions required for the DescribeEnvironmentStatus API call.

---

##### `ListEnvironments`<sup>Required</sup> <a name="ListEnvironments" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.ListEnvironments"></a>

```typescript
public readonly ListEnvironments: string[];
```

- *Type:* string[]

IAM actions required for the ListEnvironments API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateEnvironment`<sup>Required</sup> <a name="UpdateEnvironment" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.UpdateEnvironment"></a>

```typescript
public readonly UpdateEnvironment: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironment API call.

---

##### `UpdateEnvironmentMembership`<sup>Required</sup> <a name="UpdateEnvironmentMembership" id="@cdk_utils/iam.cloud9.Cloud9Operations.property.UpdateEnvironmentMembership"></a>

```typescript
public readonly UpdateEnvironmentMembership: string[];
```

- *Type:* string[]

IAM actions required for the UpdateEnvironmentMembership API call.

---

### Cloud9Resources <a name="Cloud9Resources" id="@cdk_utils/iam.cloud9.Cloud9Resources"></a>

ARN builders, validators, and parsers for cloud9 resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.cloud9.Cloud9Resources.Initializer"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

new cloud9.Cloud9Resources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Resources.environment">environment</a></code> | Builds an ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Resources.isValidEnvironmentArn">isValidEnvironmentArn</a></code> | Validates whether a string is a valid ARN for the environment resource. |
| <code><a href="#@cdk_utils/iam.cloud9.Cloud9Resources.parseEnvironmentArn">parseEnvironmentArn</a></code> | Parses a environment ARN into its components. |

---

##### `environment` <a name="environment" id="@cdk_utils/iam.cloud9.Cloud9Resources.environment"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Resources.environment(props: Cloud9EnvironmentArnProps)
```

Builds an ARN for the environment resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.cloud9.Cloud9Resources.environment.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.cloud9.Cloud9EnvironmentArnProps">Cloud9EnvironmentArnProps</a>

---

##### `isValidEnvironmentArn` <a name="isValidEnvironmentArn" id="@cdk_utils/iam.cloud9.Cloud9Resources.isValidEnvironmentArn"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Resources.isValidEnvironmentArn(arn: string)
```

Validates whether a string is a valid ARN for the environment resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloud9.Cloud9Resources.isValidEnvironmentArn.parameter.arn"></a>

- *Type:* string

---

##### `parseEnvironmentArn` <a name="parseEnvironmentArn" id="@cdk_utils/iam.cloud9.Cloud9Resources.parseEnvironmentArn"></a>

```typescript
import { cloud9 } from '@cdk_utils/iam'

cloud9.Cloud9Resources.parseEnvironmentArn(arn: string)
```

Parses a environment ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.cloud9.Cloud9Resources.parseEnvironmentArn.parameter.arn"></a>

- *Type:* string

---




