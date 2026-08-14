# `signer` Submodule <a name="`signer` Submodule" id="@cdk_utils/iam.signer"></a>


## Structs <a name="Structs" id="Structs"></a>

### SignerSigningJobArnComponents <a name="SignerSigningJobArnComponents" id="@cdk_utils/iam.signer.SignerSigningJobArnComponents"></a>

Parsed components of a signing-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signer.SignerSigningJobArnComponents.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

const signerSigningJobArnComponents: signer.SignerSigningJobArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.jobId">jobId</a></code> | <code>string</code> | The JobId component. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signer.SignerSigningJobArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SignerSigningJobArnProps <a name="SignerSigningJobArnProps" id="@cdk_utils/iam.signer.SignerSigningJobArnProps"></a>

Properties for building a signing-job ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signer.SignerSigningJobArnProps.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

const signerSigningJobArnProps: signer.SignerSigningJobArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnProps.property.jobId">jobId</a></code> | <code>string</code> | The JobId component of the ARN. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningJobArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdk_utils/iam.signer.SignerSigningJobArnProps.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

The JobId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signer.SignerSigningJobArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signer.SignerSigningJobArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signer.SignerSigningJobArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

### SignerSigningProfileArnComponents <a name="SignerSigningProfileArnComponents" id="@cdk_utils/iam.signer.SignerSigningProfileArnComponents"></a>

Parsed components of a signing-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signer.SignerSigningProfileArnComponents.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

const signerSigningProfileArnComponents: signer.SignerSigningProfileArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.profileName">profileName</a></code> | <code>string</code> | The ProfileName component. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The ProfileName component.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.signer.SignerSigningProfileArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### SignerSigningProfileArnProps <a name="SignerSigningProfileArnProps" id="@cdk_utils/iam.signer.SignerSigningProfileArnProps"></a>

Properties for building a signing-profile ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.signer.SignerSigningProfileArnProps.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

const signerSigningProfileArnProps: signer.SignerSigningProfileArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.profileName">profileName</a></code> | <code>string</code> | The ProfileName component of the ARN. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

The ProfileName component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.signer.SignerSigningProfileArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### SignerActions <a name="SignerActions" id="@cdk_utils/iam.signer.SignerActions"></a>

IAM action constants for the signer service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signer.SignerActions.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

new signer.SignerActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.actionGetRevocationStatus">actionGetRevocationStatus</a></code> | <code>string</code> | [Read] signer:GetRevocationStatus. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.actionGetSigningPlatform">actionGetSigningPlatform</a></code> | <code>string</code> | [Read] signer:GetSigningPlatform. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.actionGetSigningProfile">actionGetSigningProfile</a></code> | <code>string</code> | [Read] signer:GetSigningProfile. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.AddProfilePermission">AddProfilePermission</a></code> | <code>string</code> | [PermissionManagement] signer:AddProfilePermission. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.CancelSigningProfile">CancelSigningProfile</a></code> | <code>string</code> | [Write] signer:CancelSigningProfile. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.DescribeSigningJob">DescribeSigningJob</a></code> | <code>string</code> | [Read] signer:DescribeSigningJob. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.ListProfilePermissions">ListProfilePermissions</a></code> | <code>string</code> | [Read] signer:ListProfilePermissions. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.ListSigningJobs">ListSigningJobs</a></code> | <code>string</code> | [List] signer:ListSigningJobs. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.ListSigningPlatforms">ListSigningPlatforms</a></code> | <code>string</code> | [List] signer:ListSigningPlatforms. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.ListSigningProfiles">ListSigningProfiles</a></code> | <code>string</code> | [List] signer:ListSigningProfiles. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] signer:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.PutSigningProfile">PutSigningProfile</a></code> | <code>string</code> | [Write] signer:PutSigningProfile. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.RemoveProfilePermission">RemoveProfilePermission</a></code> | <code>string</code> | [PermissionManagement] signer:RemoveProfilePermission. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.RevokeSignature">RevokeSignature</a></code> | <code>string</code> | [Write] signer:RevokeSignature. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.RevokeSigningProfile">RevokeSigningProfile</a></code> | <code>string</code> | [Write] signer:RevokeSigningProfile. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.SignPayload">SignPayload</a></code> | <code>string</code> | [Write] signer:SignPayload. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.StartSigningJob">StartSigningJob</a></code> | <code>string</code> | [Write] signer:StartSigningJob. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] signer:TagResource. |
| <code><a href="#@cdk_utils/iam.signer.SignerActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] signer:UntagResource. |

---

##### `actionGetRevocationStatus`<sup>Required</sup> <a name="actionGetRevocationStatus" id="@cdk_utils/iam.signer.SignerActions.property.actionGetRevocationStatus"></a>

```typescript
public readonly actionGetRevocationStatus: string;
```

- *Type:* string

[Read] signer:GetRevocationStatus.

---

##### `actionGetSigningPlatform`<sup>Required</sup> <a name="actionGetSigningPlatform" id="@cdk_utils/iam.signer.SignerActions.property.actionGetSigningPlatform"></a>

```typescript
public readonly actionGetSigningPlatform: string;
```

- *Type:* string

[Read] signer:GetSigningPlatform.

---

##### `actionGetSigningProfile`<sup>Required</sup> <a name="actionGetSigningProfile" id="@cdk_utils/iam.signer.SignerActions.property.actionGetSigningProfile"></a>

```typescript
public readonly actionGetSigningProfile: string;
```

- *Type:* string

[Read] signer:GetSigningProfile.

---

##### `AddProfilePermission`<sup>Required</sup> <a name="AddProfilePermission" id="@cdk_utils/iam.signer.SignerActions.property.AddProfilePermission"></a>

```typescript
public readonly AddProfilePermission: string;
```

- *Type:* string

[PermissionManagement] signer:AddProfilePermission.

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.signer.SignerActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.signer.SignerActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.signer.SignerActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.signer.SignerActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.signer.SignerActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `CancelSigningProfile`<sup>Required</sup> <a name="CancelSigningProfile" id="@cdk_utils/iam.signer.SignerActions.property.CancelSigningProfile"></a>

```typescript
public readonly CancelSigningProfile: string;
```

- *Type:* string

[Write] signer:CancelSigningProfile.

---

##### `DescribeSigningJob`<sup>Required</sup> <a name="DescribeSigningJob" id="@cdk_utils/iam.signer.SignerActions.property.DescribeSigningJob"></a>

```typescript
public readonly DescribeSigningJob: string;
```

- *Type:* string

[Read] signer:DescribeSigningJob.

---

##### `ListProfilePermissions`<sup>Required</sup> <a name="ListProfilePermissions" id="@cdk_utils/iam.signer.SignerActions.property.ListProfilePermissions"></a>

```typescript
public readonly ListProfilePermissions: string;
```

- *Type:* string

[Read] signer:ListProfilePermissions.

---

##### `ListSigningJobs`<sup>Required</sup> <a name="ListSigningJobs" id="@cdk_utils/iam.signer.SignerActions.property.ListSigningJobs"></a>

```typescript
public readonly ListSigningJobs: string;
```

- *Type:* string

[List] signer:ListSigningJobs.

---

##### `ListSigningPlatforms`<sup>Required</sup> <a name="ListSigningPlatforms" id="@cdk_utils/iam.signer.SignerActions.property.ListSigningPlatforms"></a>

```typescript
public readonly ListSigningPlatforms: string;
```

- *Type:* string

[List] signer:ListSigningPlatforms.

---

##### `ListSigningProfiles`<sup>Required</sup> <a name="ListSigningProfiles" id="@cdk_utils/iam.signer.SignerActions.property.ListSigningProfiles"></a>

```typescript
public readonly ListSigningProfiles: string;
```

- *Type:* string

[List] signer:ListSigningProfiles.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.signer.SignerActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] signer:ListTagsForResource.

---

##### `PutSigningProfile`<sup>Required</sup> <a name="PutSigningProfile" id="@cdk_utils/iam.signer.SignerActions.property.PutSigningProfile"></a>

```typescript
public readonly PutSigningProfile: string;
```

- *Type:* string

[Write] signer:PutSigningProfile.

---

##### `RemoveProfilePermission`<sup>Required</sup> <a name="RemoveProfilePermission" id="@cdk_utils/iam.signer.SignerActions.property.RemoveProfilePermission"></a>

```typescript
public readonly RemoveProfilePermission: string;
```

- *Type:* string

[PermissionManagement] signer:RemoveProfilePermission.

---

##### `RevokeSignature`<sup>Required</sup> <a name="RevokeSignature" id="@cdk_utils/iam.signer.SignerActions.property.RevokeSignature"></a>

```typescript
public readonly RevokeSignature: string;
```

- *Type:* string

[Write] signer:RevokeSignature.

---

##### `RevokeSigningProfile`<sup>Required</sup> <a name="RevokeSigningProfile" id="@cdk_utils/iam.signer.SignerActions.property.RevokeSigningProfile"></a>

```typescript
public readonly RevokeSigningProfile: string;
```

- *Type:* string

[Write] signer:RevokeSigningProfile.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.signer.SignerActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `SignPayload`<sup>Required</sup> <a name="SignPayload" id="@cdk_utils/iam.signer.SignerActions.property.SignPayload"></a>

```typescript
public readonly SignPayload: string;
```

- *Type:* string

[Write] signer:SignPayload.

---

##### `StartSigningJob`<sup>Required</sup> <a name="StartSigningJob" id="@cdk_utils/iam.signer.SignerActions.property.StartSigningJob"></a>

```typescript
public readonly StartSigningJob: string;
```

- *Type:* string

[Write] signer:StartSigningJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.signer.SignerActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] signer:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.signer.SignerActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] signer:UntagResource.

---

### SignerConditions <a name="SignerConditions" id="@cdk_utils/iam.signer.SignerConditions"></a>

Condition key constants and builders for signer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signer.SignerConditions.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

new signer.SignerConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.profileVersion">profileVersion</a></code> | Generates a condition block for `signer:ProfileVersion`. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `profileVersion` <a name="profileVersion" id="@cdk_utils/iam.signer.SignerConditions.profileVersion"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerConditions.profileVersion(value: string)
```

Generates a condition block for `signer:ProfileVersion`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signer.SignerConditions.profileVersion.parameter.value"></a>

- *Type:* string

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.signer.SignerConditions.requestTag"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signer.SignerConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.signer.SignerConditions.resourceTag"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.signer.SignerConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.signer.SignerConditions.tagKeys"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.signer.SignerConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.actionGetSigningProfileConditionKeys">actionGetSigningProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the GetSigningProfile action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.CancelSigningProfileConditionKeys">CancelSigningProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CancelSigningProfile action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.PROFILE_VERSION">PROFILE_VERSION</a></code> | <code>string</code> | Condition key: signer:ProfileVersion (String). |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.PutSigningProfileConditionKeys">PutSigningProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the PutSigningProfile action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.RevokeSignatureConditionKeys">RevokeSignatureConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RevokeSignature action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.RevokeSigningProfileConditionKeys">RevokeSigningProfileConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the RevokeSigningProfile action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.SignPayloadConditionKeys">SignPayloadConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the SignPayload action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.StartSigningJobConditionKeys">StartSigningJobConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the StartSigningJob action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.signer.SignerConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `actionGetSigningProfileConditionKeys`<sup>Required</sup> <a name="actionGetSigningProfileConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.actionGetSigningProfileConditionKeys"></a>

```typescript
public readonly actionGetSigningProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the GetSigningProfile action.

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.signer.SignerConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.signer.SignerConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.signer.SignerConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CancelSigningProfileConditionKeys`<sup>Required</sup> <a name="CancelSigningProfileConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.CancelSigningProfileConditionKeys"></a>

```typescript
public readonly CancelSigningProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CancelSigningProfile action.

---

##### `PROFILE_VERSION`<sup>Required</sup> <a name="PROFILE_VERSION" id="@cdk_utils/iam.signer.SignerConditions.property.PROFILE_VERSION"></a>

```typescript
public readonly PROFILE_VERSION: string;
```

- *Type:* string

Condition key: signer:ProfileVersion (String).

---

##### `PutSigningProfileConditionKeys`<sup>Required</sup> <a name="PutSigningProfileConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.PutSigningProfileConditionKeys"></a>

```typescript
public readonly PutSigningProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the PutSigningProfile action.

---

##### `RevokeSignatureConditionKeys`<sup>Required</sup> <a name="RevokeSignatureConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.RevokeSignatureConditionKeys"></a>

```typescript
public readonly RevokeSignatureConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RevokeSignature action.

---

##### `RevokeSigningProfileConditionKeys`<sup>Required</sup> <a name="RevokeSigningProfileConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.RevokeSigningProfileConditionKeys"></a>

```typescript
public readonly RevokeSigningProfileConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the RevokeSigningProfile action.

---

##### `SignPayloadConditionKeys`<sup>Required</sup> <a name="SignPayloadConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.SignPayloadConditionKeys"></a>

```typescript
public readonly SignPayloadConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the SignPayload action.

---

##### `StartSigningJobConditionKeys`<sup>Required</sup> <a name="StartSigningJobConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.StartSigningJobConditionKeys"></a>

```typescript
public readonly StartSigningJobConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the StartSigningJob action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.signer.SignerConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### SignerOperations <a name="SignerOperations" id="@cdk_utils/iam.signer.SignerOperations"></a>

API operation to required IAM actions mapping for signer.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signer.SignerOperations.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

new signer.SignerOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.AddProfilePermission">AddProfilePermission</a></code> | <code>string[]</code> | IAM actions required for the AddProfilePermission API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.CancelSigningProfile">CancelSigningProfile</a></code> | <code>string[]</code> | IAM actions required for the CancelSigningProfile API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.DescribeSigningJob">DescribeSigningJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeSigningJob API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.ListProfilePermissions">ListProfilePermissions</a></code> | <code>string[]</code> | IAM actions required for the ListProfilePermissions API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.ListSigningJobs">ListSigningJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSigningJobs API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.ListSigningPlatforms">ListSigningPlatforms</a></code> | <code>string[]</code> | IAM actions required for the ListSigningPlatforms API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.ListSigningProfiles">ListSigningProfiles</a></code> | <code>string[]</code> | IAM actions required for the ListSigningProfiles API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.opGetRevocationStatus">opGetRevocationStatus</a></code> | <code>string[]</code> | IAM actions required for the GetRevocationStatus API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.opGetSigningPlatform">opGetSigningPlatform</a></code> | <code>string[]</code> | IAM actions required for the GetSigningPlatform API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.opGetSigningProfile">opGetSigningProfile</a></code> | <code>string[]</code> | IAM actions required for the GetSigningProfile API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.PutSigningProfile">PutSigningProfile</a></code> | <code>string[]</code> | IAM actions required for the PutSigningProfile API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.RemoveProfilePermission">RemoveProfilePermission</a></code> | <code>string[]</code> | IAM actions required for the RemoveProfilePermission API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.RevokeSignature">RevokeSignature</a></code> | <code>string[]</code> | IAM actions required for the RevokeSignature API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.RevokeSigningProfile">RevokeSigningProfile</a></code> | <code>string[]</code> | IAM actions required for the RevokeSigningProfile API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.SignPayload">SignPayload</a></code> | <code>string[]</code> | IAM actions required for the SignPayload API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.StartSigningJob">StartSigningJob</a></code> | <code>string[]</code> | IAM actions required for the StartSigningJob API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.signer.SignerOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |

---

##### `AddProfilePermission`<sup>Required</sup> <a name="AddProfilePermission" id="@cdk_utils/iam.signer.SignerOperations.property.AddProfilePermission"></a>

```typescript
public readonly AddProfilePermission: string[];
```

- *Type:* string[]

IAM actions required for the AddProfilePermission API call.

---

##### `CancelSigningProfile`<sup>Required</sup> <a name="CancelSigningProfile" id="@cdk_utils/iam.signer.SignerOperations.property.CancelSigningProfile"></a>

```typescript
public readonly CancelSigningProfile: string[];
```

- *Type:* string[]

IAM actions required for the CancelSigningProfile API call.

---

##### `DescribeSigningJob`<sup>Required</sup> <a name="DescribeSigningJob" id="@cdk_utils/iam.signer.SignerOperations.property.DescribeSigningJob"></a>

```typescript
public readonly DescribeSigningJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSigningJob API call.

---

##### `ListProfilePermissions`<sup>Required</sup> <a name="ListProfilePermissions" id="@cdk_utils/iam.signer.SignerOperations.property.ListProfilePermissions"></a>

```typescript
public readonly ListProfilePermissions: string[];
```

- *Type:* string[]

IAM actions required for the ListProfilePermissions API call.

---

##### `ListSigningJobs`<sup>Required</sup> <a name="ListSigningJobs" id="@cdk_utils/iam.signer.SignerOperations.property.ListSigningJobs"></a>

```typescript
public readonly ListSigningJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSigningJobs API call.

---

##### `ListSigningPlatforms`<sup>Required</sup> <a name="ListSigningPlatforms" id="@cdk_utils/iam.signer.SignerOperations.property.ListSigningPlatforms"></a>

```typescript
public readonly ListSigningPlatforms: string[];
```

- *Type:* string[]

IAM actions required for the ListSigningPlatforms API call.

---

##### `ListSigningProfiles`<sup>Required</sup> <a name="ListSigningProfiles" id="@cdk_utils/iam.signer.SignerOperations.property.ListSigningProfiles"></a>

```typescript
public readonly ListSigningProfiles: string[];
```

- *Type:* string[]

IAM actions required for the ListSigningProfiles API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.signer.SignerOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `opGetRevocationStatus`<sup>Required</sup> <a name="opGetRevocationStatus" id="@cdk_utils/iam.signer.SignerOperations.property.opGetRevocationStatus"></a>

```typescript
public readonly opGetRevocationStatus: string[];
```

- *Type:* string[]

IAM actions required for the GetRevocationStatus API call.

---

##### `opGetSigningPlatform`<sup>Required</sup> <a name="opGetSigningPlatform" id="@cdk_utils/iam.signer.SignerOperations.property.opGetSigningPlatform"></a>

```typescript
public readonly opGetSigningPlatform: string[];
```

- *Type:* string[]

IAM actions required for the GetSigningPlatform API call.

---

##### `opGetSigningProfile`<sup>Required</sup> <a name="opGetSigningProfile" id="@cdk_utils/iam.signer.SignerOperations.property.opGetSigningProfile"></a>

```typescript
public readonly opGetSigningProfile: string[];
```

- *Type:* string[]

IAM actions required for the GetSigningProfile API call.

---

##### `PutSigningProfile`<sup>Required</sup> <a name="PutSigningProfile" id="@cdk_utils/iam.signer.SignerOperations.property.PutSigningProfile"></a>

```typescript
public readonly PutSigningProfile: string[];
```

- *Type:* string[]

IAM actions required for the PutSigningProfile API call.

---

##### `RemoveProfilePermission`<sup>Required</sup> <a name="RemoveProfilePermission" id="@cdk_utils/iam.signer.SignerOperations.property.RemoveProfilePermission"></a>

```typescript
public readonly RemoveProfilePermission: string[];
```

- *Type:* string[]

IAM actions required for the RemoveProfilePermission API call.

---

##### `RevokeSignature`<sup>Required</sup> <a name="RevokeSignature" id="@cdk_utils/iam.signer.SignerOperations.property.RevokeSignature"></a>

```typescript
public readonly RevokeSignature: string[];
```

- *Type:* string[]

IAM actions required for the RevokeSignature API call.

---

##### `RevokeSigningProfile`<sup>Required</sup> <a name="RevokeSigningProfile" id="@cdk_utils/iam.signer.SignerOperations.property.RevokeSigningProfile"></a>

```typescript
public readonly RevokeSigningProfile: string[];
```

- *Type:* string[]

IAM actions required for the RevokeSigningProfile API call.

---

##### `SignPayload`<sup>Required</sup> <a name="SignPayload" id="@cdk_utils/iam.signer.SignerOperations.property.SignPayload"></a>

```typescript
public readonly SignPayload: string[];
```

- *Type:* string[]

IAM actions required for the SignPayload API call.

---

##### `StartSigningJob`<sup>Required</sup> <a name="StartSigningJob" id="@cdk_utils/iam.signer.SignerOperations.property.StartSigningJob"></a>

```typescript
public readonly StartSigningJob: string[];
```

- *Type:* string[]

IAM actions required for the StartSigningJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.signer.SignerOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.signer.SignerOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

### SignerResources <a name="SignerResources" id="@cdk_utils/iam.signer.SignerResources"></a>

ARN builders, validators, and parsers for signer resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.signer.SignerResources.Initializer"></a>

```typescript
import { signer } from '@cdk_utils/iam'

new signer.SignerResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.signer.SignerResources.isValidSigningJobArn">isValidSigningJobArn</a></code> | Validates whether a string is a valid ARN for the signing-job resource. |
| <code><a href="#@cdk_utils/iam.signer.SignerResources.isValidSigningProfileArn">isValidSigningProfileArn</a></code> | Validates whether a string is a valid ARN for the signing-profile resource. |
| <code><a href="#@cdk_utils/iam.signer.SignerResources.parseSigningJobArn">parseSigningJobArn</a></code> | Parses a signing-job ARN into its components. |
| <code><a href="#@cdk_utils/iam.signer.SignerResources.parseSigningProfileArn">parseSigningProfileArn</a></code> | Parses a signing-profile ARN into its components. |
| <code><a href="#@cdk_utils/iam.signer.SignerResources.signingJob">signingJob</a></code> | Builds an ARN for the signing-job resource. |
| <code><a href="#@cdk_utils/iam.signer.SignerResources.signingProfile">signingProfile</a></code> | Builds an ARN for the signing-profile resource. |

---

##### `isValidSigningJobArn` <a name="isValidSigningJobArn" id="@cdk_utils/iam.signer.SignerResources.isValidSigningJobArn"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerResources.isValidSigningJobArn(arn: string)
```

Validates whether a string is a valid ARN for the signing-job resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signer.SignerResources.isValidSigningJobArn.parameter.arn"></a>

- *Type:* string

---

##### `isValidSigningProfileArn` <a name="isValidSigningProfileArn" id="@cdk_utils/iam.signer.SignerResources.isValidSigningProfileArn"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerResources.isValidSigningProfileArn(arn: string)
```

Validates whether a string is a valid ARN for the signing-profile resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signer.SignerResources.isValidSigningProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSigningJobArn` <a name="parseSigningJobArn" id="@cdk_utils/iam.signer.SignerResources.parseSigningJobArn"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerResources.parseSigningJobArn(arn: string)
```

Parses a signing-job ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signer.SignerResources.parseSigningJobArn.parameter.arn"></a>

- *Type:* string

---

##### `parseSigningProfileArn` <a name="parseSigningProfileArn" id="@cdk_utils/iam.signer.SignerResources.parseSigningProfileArn"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerResources.parseSigningProfileArn(arn: string)
```

Parses a signing-profile ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.signer.SignerResources.parseSigningProfileArn.parameter.arn"></a>

- *Type:* string

---

##### `signingJob` <a name="signingJob" id="@cdk_utils/iam.signer.SignerResources.signingJob"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerResources.signingJob(props: SignerSigningJobArnProps)
```

Builds an ARN for the signing-job resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signer.SignerResources.signingJob.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signer.SignerSigningJobArnProps">SignerSigningJobArnProps</a>

---

##### `signingProfile` <a name="signingProfile" id="@cdk_utils/iam.signer.SignerResources.signingProfile"></a>

```typescript
import { signer } from '@cdk_utils/iam'

signer.SignerResources.signingProfile(props: SignerSigningProfileArnProps)
```

Builds an ARN for the signing-profile resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.signer.SignerResources.signingProfile.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.signer.SignerSigningProfileArnProps">SignerSigningProfileArnProps</a>

---




