# `voiceid` Submodule <a name="`voiceid` Submodule" id="@cdk_utils/iam.voiceid"></a>


## Structs <a name="Structs" id="Structs"></a>

### VoiceidDomainArnComponents <a name="VoiceidDomainArnComponents" id="@cdk_utils/iam.voiceid.VoiceidDomainArnComponents"></a>

Parsed components of a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.Initializer"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

const voiceidDomainArnComponents: voiceid.VoiceidDomainArnComponents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `account`<sup>Required</sup> <a name="account" id="@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component.

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdk_utils/iam.voiceid.VoiceidDomainArnComponents.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

---

### VoiceidDomainArnProps <a name="VoiceidDomainArnProps" id="@cdk_utils/iam.voiceid.VoiceidDomainArnProps"></a>

Properties for building a domain ARN.

#### Initializer <a name="Initializer" id="@cdk_utils/iam.voiceid.VoiceidDomainArnProps.Initializer"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

const voiceidDomainArnProps: voiceid.VoiceidDomainArnProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.domainId">domainId</a></code> | <code>string</code> | The DomainId component of the ARN. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.account">account</a></code> | <code>string</code> | AWS account ID. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.partition">partition</a></code> | <code>string</code> | AWS partition. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.region">region</a></code> | <code>string</code> | AWS region. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DomainId component of the ARN.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

AWS account ID.

Defaults to "*".

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

AWS partition.

Defaults to "aws".

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdk_utils/iam.voiceid.VoiceidDomainArnProps.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

AWS region.

Defaults to "*".

---

## Classes <a name="Classes" id="Classes"></a>

### VoiceidActions <a name="VoiceidActions" id="@cdk_utils/iam.voiceid.VoiceidActions"></a>

IAM action constants for the voiceid service.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.voiceid.VoiceidActions.Initializer"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

new voiceid.VoiceidActions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.AllListActions">AllListActions</a></code> | <code>string[]</code> | All list-level actions. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.AllPermissionManagementActions">AllPermissionManagementActions</a></code> | <code>string[]</code> | All permission-management-level actions. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.AllReadActions">AllReadActions</a></code> | <code>string[]</code> | All read-level actions. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.AllTaggingActions">AllTaggingActions</a></code> | <code>string[]</code> | All tagging-level actions. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.AllWriteActions">AllWriteActions</a></code> | <code>string[]</code> | All write-level actions. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.AssociateFraudster">AssociateFraudster</a></code> | <code>string</code> | [Write] voiceid:AssociateFraudster. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.CreateDomain">CreateDomain</a></code> | <code>string</code> | [Write] voiceid:CreateDomain. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.CreateWatchlist">CreateWatchlist</a></code> | <code>string</code> | [Write] voiceid:CreateWatchlist. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteDomain">DeleteDomain</a></code> | <code>string</code> | [Write] voiceid:DeleteDomain. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteFraudster">DeleteFraudster</a></code> | <code>string</code> | [Write] voiceid:DeleteFraudster. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteSpeaker">DeleteSpeaker</a></code> | <code>string</code> | [Write] voiceid:DeleteSpeaker. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteWatchlist">DeleteWatchlist</a></code> | <code>string</code> | [Write] voiceid:DeleteWatchlist. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeComplianceConsent">DescribeComplianceConsent</a></code> | <code>string</code> | [Read] voiceid:DescribeComplianceConsent. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeDomain">DescribeDomain</a></code> | <code>string</code> | [Read] voiceid:DescribeDomain. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeFraudster">DescribeFraudster</a></code> | <code>string</code> | [Read] voiceid:DescribeFraudster. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeFraudsterRegistrationJob">DescribeFraudsterRegistrationJob</a></code> | <code>string</code> | [Read] voiceid:DescribeFraudsterRegistrationJob. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeSpeaker">DescribeSpeaker</a></code> | <code>string</code> | [Read] voiceid:DescribeSpeaker. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeSpeakerEnrollmentJob">DescribeSpeakerEnrollmentJob</a></code> | <code>string</code> | [Read] voiceid:DescribeSpeakerEnrollmentJob. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeWatchlist">DescribeWatchlist</a></code> | <code>string</code> | [Read] voiceid:DescribeWatchlist. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.DisassociateFraudster">DisassociateFraudster</a></code> | <code>string</code> | [Write] voiceid:DisassociateFraudster. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.EvaluateSession">EvaluateSession</a></code> | <code>string</code> | [Write] voiceid:EvaluateSession. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListDomains">ListDomains</a></code> | <code>string</code> | [List] voiceid:ListDomains. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListFraudsterRegistrationJobs">ListFraudsterRegistrationJobs</a></code> | <code>string</code> | [List] voiceid:ListFraudsterRegistrationJobs. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListFraudsters">ListFraudsters</a></code> | <code>string</code> | [List] voiceid:ListFraudsters. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListSpeakerEnrollmentJobs">ListSpeakerEnrollmentJobs</a></code> | <code>string</code> | [List] voiceid:ListSpeakerEnrollmentJobs. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListSpeakers">ListSpeakers</a></code> | <code>string</code> | [List] voiceid:ListSpeakers. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string</code> | [Read] voiceid:ListTagsForResource. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.ListWatchlists">ListWatchlists</a></code> | <code>string</code> | [List] voiceid:ListWatchlists. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.OptOutSpeaker">OptOutSpeaker</a></code> | <code>string</code> | [Write] voiceid:OptOutSpeaker. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.RegisterComplianceConsent">RegisterComplianceConsent</a></code> | <code>string</code> | [Write] voiceid:RegisterComplianceConsent. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.SERVICE_PREFIX">SERVICE_PREFIX</a></code> | <code>string</code> | The IAM service prefix. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.StartFraudsterRegistrationJob">StartFraudsterRegistrationJob</a></code> | <code>string</code> | [Write] voiceid:StartFraudsterRegistrationJob. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.StartSpeakerEnrollmentJob">StartSpeakerEnrollmentJob</a></code> | <code>string</code> | [Write] voiceid:StartSpeakerEnrollmentJob. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.TagResource">TagResource</a></code> | <code>string</code> | [Tagging] voiceid:TagResource. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.UntagResource">UntagResource</a></code> | <code>string</code> | [Tagging] voiceid:UntagResource. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.UpdateDomain">UpdateDomain</a></code> | <code>string</code> | [Write] voiceid:UpdateDomain. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidActions.property.UpdateWatchlist">UpdateWatchlist</a></code> | <code>string</code> | [Write] voiceid:UpdateWatchlist. |

---

##### `AllListActions`<sup>Required</sup> <a name="AllListActions" id="@cdk_utils/iam.voiceid.VoiceidActions.property.AllListActions"></a>

```typescript
public readonly AllListActions: string[];
```

- *Type:* string[]

All list-level actions.

---

##### `AllPermissionManagementActions`<sup>Required</sup> <a name="AllPermissionManagementActions" id="@cdk_utils/iam.voiceid.VoiceidActions.property.AllPermissionManagementActions"></a>

```typescript
public readonly AllPermissionManagementActions: string[];
```

- *Type:* string[]

All permission-management-level actions.

---

##### `AllReadActions`<sup>Required</sup> <a name="AllReadActions" id="@cdk_utils/iam.voiceid.VoiceidActions.property.AllReadActions"></a>

```typescript
public readonly AllReadActions: string[];
```

- *Type:* string[]

All read-level actions.

---

##### `AllTaggingActions`<sup>Required</sup> <a name="AllTaggingActions" id="@cdk_utils/iam.voiceid.VoiceidActions.property.AllTaggingActions"></a>

```typescript
public readonly AllTaggingActions: string[];
```

- *Type:* string[]

All tagging-level actions.

---

##### `AllWriteActions`<sup>Required</sup> <a name="AllWriteActions" id="@cdk_utils/iam.voiceid.VoiceidActions.property.AllWriteActions"></a>

```typescript
public readonly AllWriteActions: string[];
```

- *Type:* string[]

All write-level actions.

---

##### `AssociateFraudster`<sup>Required</sup> <a name="AssociateFraudster" id="@cdk_utils/iam.voiceid.VoiceidActions.property.AssociateFraudster"></a>

```typescript
public readonly AssociateFraudster: string;
```

- *Type:* string

[Write] voiceid:AssociateFraudster.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.voiceid.VoiceidActions.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string;
```

- *Type:* string

[Write] voiceid:CreateDomain.

---

##### `CreateWatchlist`<sup>Required</sup> <a name="CreateWatchlist" id="@cdk_utils/iam.voiceid.VoiceidActions.property.CreateWatchlist"></a>

```typescript
public readonly CreateWatchlist: string;
```

- *Type:* string

[Write] voiceid:CreateWatchlist.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string;
```

- *Type:* string

[Write] voiceid:DeleteDomain.

---

##### `DeleteFraudster`<sup>Required</sup> <a name="DeleteFraudster" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteFraudster"></a>

```typescript
public readonly DeleteFraudster: string;
```

- *Type:* string

[Write] voiceid:DeleteFraudster.

---

##### `DeleteSpeaker`<sup>Required</sup> <a name="DeleteSpeaker" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteSpeaker"></a>

```typescript
public readonly DeleteSpeaker: string;
```

- *Type:* string

[Write] voiceid:DeleteSpeaker.

---

##### `DeleteWatchlist`<sup>Required</sup> <a name="DeleteWatchlist" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DeleteWatchlist"></a>

```typescript
public readonly DeleteWatchlist: string;
```

- *Type:* string

[Write] voiceid:DeleteWatchlist.

---

##### `DescribeComplianceConsent`<sup>Required</sup> <a name="DescribeComplianceConsent" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeComplianceConsent"></a>

```typescript
public readonly DescribeComplianceConsent: string;
```

- *Type:* string

[Read] voiceid:DescribeComplianceConsent.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string;
```

- *Type:* string

[Read] voiceid:DescribeDomain.

---

##### `DescribeFraudster`<sup>Required</sup> <a name="DescribeFraudster" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeFraudster"></a>

```typescript
public readonly DescribeFraudster: string;
```

- *Type:* string

[Read] voiceid:DescribeFraudster.

---

##### `DescribeFraudsterRegistrationJob`<sup>Required</sup> <a name="DescribeFraudsterRegistrationJob" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeFraudsterRegistrationJob"></a>

```typescript
public readonly DescribeFraudsterRegistrationJob: string;
```

- *Type:* string

[Read] voiceid:DescribeFraudsterRegistrationJob.

---

##### `DescribeSpeaker`<sup>Required</sup> <a name="DescribeSpeaker" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeSpeaker"></a>

```typescript
public readonly DescribeSpeaker: string;
```

- *Type:* string

[Read] voiceid:DescribeSpeaker.

---

##### `DescribeSpeakerEnrollmentJob`<sup>Required</sup> <a name="DescribeSpeakerEnrollmentJob" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeSpeakerEnrollmentJob"></a>

```typescript
public readonly DescribeSpeakerEnrollmentJob: string;
```

- *Type:* string

[Read] voiceid:DescribeSpeakerEnrollmentJob.

---

##### `DescribeWatchlist`<sup>Required</sup> <a name="DescribeWatchlist" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DescribeWatchlist"></a>

```typescript
public readonly DescribeWatchlist: string;
```

- *Type:* string

[Read] voiceid:DescribeWatchlist.

---

##### `DisassociateFraudster`<sup>Required</sup> <a name="DisassociateFraudster" id="@cdk_utils/iam.voiceid.VoiceidActions.property.DisassociateFraudster"></a>

```typescript
public readonly DisassociateFraudster: string;
```

- *Type:* string

[Write] voiceid:DisassociateFraudster.

---

##### `EvaluateSession`<sup>Required</sup> <a name="EvaluateSession" id="@cdk_utils/iam.voiceid.VoiceidActions.property.EvaluateSession"></a>

```typescript
public readonly EvaluateSession: string;
```

- *Type:* string

[Write] voiceid:EvaluateSession.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListDomains"></a>

```typescript
public readonly ListDomains: string;
```

- *Type:* string

[List] voiceid:ListDomains.

---

##### `ListFraudsterRegistrationJobs`<sup>Required</sup> <a name="ListFraudsterRegistrationJobs" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListFraudsterRegistrationJobs"></a>

```typescript
public readonly ListFraudsterRegistrationJobs: string;
```

- *Type:* string

[List] voiceid:ListFraudsterRegistrationJobs.

---

##### `ListFraudsters`<sup>Required</sup> <a name="ListFraudsters" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListFraudsters"></a>

```typescript
public readonly ListFraudsters: string;
```

- *Type:* string

[List] voiceid:ListFraudsters.

---

##### `ListSpeakerEnrollmentJobs`<sup>Required</sup> <a name="ListSpeakerEnrollmentJobs" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListSpeakerEnrollmentJobs"></a>

```typescript
public readonly ListSpeakerEnrollmentJobs: string;
```

- *Type:* string

[List] voiceid:ListSpeakerEnrollmentJobs.

---

##### `ListSpeakers`<sup>Required</sup> <a name="ListSpeakers" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListSpeakers"></a>

```typescript
public readonly ListSpeakers: string;
```

- *Type:* string

[List] voiceid:ListSpeakers.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string;
```

- *Type:* string

[Read] voiceid:ListTagsForResource.

---

##### `ListWatchlists`<sup>Required</sup> <a name="ListWatchlists" id="@cdk_utils/iam.voiceid.VoiceidActions.property.ListWatchlists"></a>

```typescript
public readonly ListWatchlists: string;
```

- *Type:* string

[List] voiceid:ListWatchlists.

---

##### `OptOutSpeaker`<sup>Required</sup> <a name="OptOutSpeaker" id="@cdk_utils/iam.voiceid.VoiceidActions.property.OptOutSpeaker"></a>

```typescript
public readonly OptOutSpeaker: string;
```

- *Type:* string

[Write] voiceid:OptOutSpeaker.

---

##### `RegisterComplianceConsent`<sup>Required</sup> <a name="RegisterComplianceConsent" id="@cdk_utils/iam.voiceid.VoiceidActions.property.RegisterComplianceConsent"></a>

```typescript
public readonly RegisterComplianceConsent: string;
```

- *Type:* string

[Write] voiceid:RegisterComplianceConsent.

---

##### `SERVICE_PREFIX`<sup>Required</sup> <a name="SERVICE_PREFIX" id="@cdk_utils/iam.voiceid.VoiceidActions.property.SERVICE_PREFIX"></a>

```typescript
public readonly SERVICE_PREFIX: string;
```

- *Type:* string

The IAM service prefix.

---

##### `StartFraudsterRegistrationJob`<sup>Required</sup> <a name="StartFraudsterRegistrationJob" id="@cdk_utils/iam.voiceid.VoiceidActions.property.StartFraudsterRegistrationJob"></a>

```typescript
public readonly StartFraudsterRegistrationJob: string;
```

- *Type:* string

[Write] voiceid:StartFraudsterRegistrationJob.

---

##### `StartSpeakerEnrollmentJob`<sup>Required</sup> <a name="StartSpeakerEnrollmentJob" id="@cdk_utils/iam.voiceid.VoiceidActions.property.StartSpeakerEnrollmentJob"></a>

```typescript
public readonly StartSpeakerEnrollmentJob: string;
```

- *Type:* string

[Write] voiceid:StartSpeakerEnrollmentJob.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.voiceid.VoiceidActions.property.TagResource"></a>

```typescript
public readonly TagResource: string;
```

- *Type:* string

[Tagging] voiceid:TagResource.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.voiceid.VoiceidActions.property.UntagResource"></a>

```typescript
public readonly UntagResource: string;
```

- *Type:* string

[Tagging] voiceid:UntagResource.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.voiceid.VoiceidActions.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string;
```

- *Type:* string

[Write] voiceid:UpdateDomain.

---

##### `UpdateWatchlist`<sup>Required</sup> <a name="UpdateWatchlist" id="@cdk_utils/iam.voiceid.VoiceidActions.property.UpdateWatchlist"></a>

```typescript
public readonly UpdateWatchlist: string;
```

- *Type:* string

[Write] voiceid:UpdateWatchlist.

---

### VoiceidConditions <a name="VoiceidConditions" id="@cdk_utils/iam.voiceid.VoiceidConditions"></a>

Condition key constants and builders for voiceid.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.voiceid.VoiceidConditions.Initializer"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

new voiceid.VoiceidConditions()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.requestTag">requestTag</a></code> | Generates a condition block for `aws:RequestTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.resourceTag">resourceTag</a></code> | Generates a condition block for `aws:ResourceTag/${TagKey}`. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.tagKeys">tagKeys</a></code> | Generates a condition block for `aws:TagKeys`. |

---

##### `requestTag` <a name="requestTag" id="@cdk_utils/iam.voiceid.VoiceidConditions.requestTag"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

voiceid.VoiceidConditions.requestTag(value: string)
```

Generates a condition block for `aws:RequestTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.voiceid.VoiceidConditions.requestTag.parameter.value"></a>

- *Type:* string

---

##### `resourceTag` <a name="resourceTag" id="@cdk_utils/iam.voiceid.VoiceidConditions.resourceTag"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

voiceid.VoiceidConditions.resourceTag(value: string)
```

Generates a condition block for `aws:ResourceTag/${TagKey}`.

###### `value`<sup>Required</sup> <a name="value" id="@cdk_utils/iam.voiceid.VoiceidConditions.resourceTag.parameter.value"></a>

- *Type:* string

---

##### `tagKeys` <a name="tagKeys" id="@cdk_utils/iam.voiceid.VoiceidConditions.tagKeys"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

voiceid.VoiceidConditions.tagKeys(values: string[])
```

Generates a condition block for `aws:TagKeys`.

###### `values`<sup>Required</sup> <a name="values" id="@cdk_utils/iam.voiceid.VoiceidConditions.tagKeys.parameter.values"></a>

- *Type:* string[]

---


#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.property.AWS_REQUEST_TAG">AWS_REQUEST_TAG</a></code> | <code>string</code> | Condition key: aws:RequestTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.property.AWS_RESOURCE_TAG">AWS_RESOURCE_TAG</a></code> | <code>string</code> | Condition key: aws:ResourceTag/${TagKey} (String). |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.property.AWS_TAG_KEYS">AWS_TAG_KEYS</a></code> | <code>string</code> | Condition key: aws:TagKeys (ArrayOfString). |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.property.CreateDomainConditionKeys">CreateDomainConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the CreateDomain action. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.property.TagResourceConditionKeys">TagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the TagResource action. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidConditions.property.UntagResourceConditionKeys">UntagResourceConditionKeys</a></code> | <code>string[]</code> | Condition keys applicable to the UntagResource action. |

---

##### `AWS_REQUEST_TAG`<sup>Required</sup> <a name="AWS_REQUEST_TAG" id="@cdk_utils/iam.voiceid.VoiceidConditions.property.AWS_REQUEST_TAG"></a>

```typescript
public readonly AWS_REQUEST_TAG: string;
```

- *Type:* string

Condition key: aws:RequestTag/${TagKey} (String).

---

##### `AWS_RESOURCE_TAG`<sup>Required</sup> <a name="AWS_RESOURCE_TAG" id="@cdk_utils/iam.voiceid.VoiceidConditions.property.AWS_RESOURCE_TAG"></a>

```typescript
public readonly AWS_RESOURCE_TAG: string;
```

- *Type:* string

Condition key: aws:ResourceTag/${TagKey} (String).

---

##### `AWS_TAG_KEYS`<sup>Required</sup> <a name="AWS_TAG_KEYS" id="@cdk_utils/iam.voiceid.VoiceidConditions.property.AWS_TAG_KEYS"></a>

```typescript
public readonly AWS_TAG_KEYS: string;
```

- *Type:* string

Condition key: aws:TagKeys (ArrayOfString).

---

##### `CreateDomainConditionKeys`<sup>Required</sup> <a name="CreateDomainConditionKeys" id="@cdk_utils/iam.voiceid.VoiceidConditions.property.CreateDomainConditionKeys"></a>

```typescript
public readonly CreateDomainConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the CreateDomain action.

---

##### `TagResourceConditionKeys`<sup>Required</sup> <a name="TagResourceConditionKeys" id="@cdk_utils/iam.voiceid.VoiceidConditions.property.TagResourceConditionKeys"></a>

```typescript
public readonly TagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the TagResource action.

---

##### `UntagResourceConditionKeys`<sup>Required</sup> <a name="UntagResourceConditionKeys" id="@cdk_utils/iam.voiceid.VoiceidConditions.property.UntagResourceConditionKeys"></a>

```typescript
public readonly UntagResourceConditionKeys: string[];
```

- *Type:* string[]

Condition keys applicable to the UntagResource action.

---

### VoiceidOperations <a name="VoiceidOperations" id="@cdk_utils/iam.voiceid.VoiceidOperations"></a>

API operation to required IAM actions mapping for voiceid.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.voiceid.VoiceidOperations.Initializer"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

new voiceid.VoiceidOperations()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---




#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.AssociateFraudster">AssociateFraudster</a></code> | <code>string[]</code> | IAM actions required for the AssociateFraudster API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.CreateDomain">CreateDomain</a></code> | <code>string[]</code> | IAM actions required for the CreateDomain API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.CreateWatchlist">CreateWatchlist</a></code> | <code>string[]</code> | IAM actions required for the CreateWatchlist API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteDomain">DeleteDomain</a></code> | <code>string[]</code> | IAM actions required for the DeleteDomain API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteFraudster">DeleteFraudster</a></code> | <code>string[]</code> | IAM actions required for the DeleteFraudster API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteSpeaker">DeleteSpeaker</a></code> | <code>string[]</code> | IAM actions required for the DeleteSpeaker API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteWatchlist">DeleteWatchlist</a></code> | <code>string[]</code> | IAM actions required for the DeleteWatchlist API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeDomain">DescribeDomain</a></code> | <code>string[]</code> | IAM actions required for the DescribeDomain API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeFraudster">DescribeFraudster</a></code> | <code>string[]</code> | IAM actions required for the DescribeFraudster API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeFraudsterRegistrationJob">DescribeFraudsterRegistrationJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeFraudsterRegistrationJob API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeSpeaker">DescribeSpeaker</a></code> | <code>string[]</code> | IAM actions required for the DescribeSpeaker API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeSpeakerEnrollmentJob">DescribeSpeakerEnrollmentJob</a></code> | <code>string[]</code> | IAM actions required for the DescribeSpeakerEnrollmentJob API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeWatchlist">DescribeWatchlist</a></code> | <code>string[]</code> | IAM actions required for the DescribeWatchlist API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.DisassociateFraudster">DisassociateFraudster</a></code> | <code>string[]</code> | IAM actions required for the DisassociateFraudster API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.EvaluateSession">EvaluateSession</a></code> | <code>string[]</code> | IAM actions required for the EvaluateSession API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListDomains">ListDomains</a></code> | <code>string[]</code> | IAM actions required for the ListDomains API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListFraudsterRegistrationJobs">ListFraudsterRegistrationJobs</a></code> | <code>string[]</code> | IAM actions required for the ListFraudsterRegistrationJobs API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListFraudsters">ListFraudsters</a></code> | <code>string[]</code> | IAM actions required for the ListFraudsters API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListSpeakerEnrollmentJobs">ListSpeakerEnrollmentJobs</a></code> | <code>string[]</code> | IAM actions required for the ListSpeakerEnrollmentJobs API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListSpeakers">ListSpeakers</a></code> | <code>string[]</code> | IAM actions required for the ListSpeakers API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListTagsForResource">ListTagsForResource</a></code> | <code>string[]</code> | IAM actions required for the ListTagsForResource API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.ListWatchlists">ListWatchlists</a></code> | <code>string[]</code> | IAM actions required for the ListWatchlists API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.OptOutSpeaker">OptOutSpeaker</a></code> | <code>string[]</code> | IAM actions required for the OptOutSpeaker API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.StartFraudsterRegistrationJob">StartFraudsterRegistrationJob</a></code> | <code>string[]</code> | IAM actions required for the StartFraudsterRegistrationJob API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.StartSpeakerEnrollmentJob">StartSpeakerEnrollmentJob</a></code> | <code>string[]</code> | IAM actions required for the StartSpeakerEnrollmentJob API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.TagResource">TagResource</a></code> | <code>string[]</code> | IAM actions required for the TagResource API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.UntagResource">UntagResource</a></code> | <code>string[]</code> | IAM actions required for the UntagResource API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.UpdateDomain">UpdateDomain</a></code> | <code>string[]</code> | IAM actions required for the UpdateDomain API call. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidOperations.property.UpdateWatchlist">UpdateWatchlist</a></code> | <code>string[]</code> | IAM actions required for the UpdateWatchlist API call. |

---

##### `AssociateFraudster`<sup>Required</sup> <a name="AssociateFraudster" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.AssociateFraudster"></a>

```typescript
public readonly AssociateFraudster: string[];
```

- *Type:* string[]

IAM actions required for the AssociateFraudster API call.

---

##### `CreateDomain`<sup>Required</sup> <a name="CreateDomain" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.CreateDomain"></a>

```typescript
public readonly CreateDomain: string[];
```

- *Type:* string[]

IAM actions required for the CreateDomain API call.

---

##### `CreateWatchlist`<sup>Required</sup> <a name="CreateWatchlist" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.CreateWatchlist"></a>

```typescript
public readonly CreateWatchlist: string[];
```

- *Type:* string[]

IAM actions required for the CreateWatchlist API call.

---

##### `DeleteDomain`<sup>Required</sup> <a name="DeleteDomain" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteDomain"></a>

```typescript
public readonly DeleteDomain: string[];
```

- *Type:* string[]

IAM actions required for the DeleteDomain API call.

---

##### `DeleteFraudster`<sup>Required</sup> <a name="DeleteFraudster" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteFraudster"></a>

```typescript
public readonly DeleteFraudster: string[];
```

- *Type:* string[]

IAM actions required for the DeleteFraudster API call.

---

##### `DeleteSpeaker`<sup>Required</sup> <a name="DeleteSpeaker" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteSpeaker"></a>

```typescript
public readonly DeleteSpeaker: string[];
```

- *Type:* string[]

IAM actions required for the DeleteSpeaker API call.

---

##### `DeleteWatchlist`<sup>Required</sup> <a name="DeleteWatchlist" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DeleteWatchlist"></a>

```typescript
public readonly DeleteWatchlist: string[];
```

- *Type:* string[]

IAM actions required for the DeleteWatchlist API call.

---

##### `DescribeDomain`<sup>Required</sup> <a name="DescribeDomain" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeDomain"></a>

```typescript
public readonly DescribeDomain: string[];
```

- *Type:* string[]

IAM actions required for the DescribeDomain API call.

---

##### `DescribeFraudster`<sup>Required</sup> <a name="DescribeFraudster" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeFraudster"></a>

```typescript
public readonly DescribeFraudster: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFraudster API call.

---

##### `DescribeFraudsterRegistrationJob`<sup>Required</sup> <a name="DescribeFraudsterRegistrationJob" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeFraudsterRegistrationJob"></a>

```typescript
public readonly DescribeFraudsterRegistrationJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeFraudsterRegistrationJob API call.

---

##### `DescribeSpeaker`<sup>Required</sup> <a name="DescribeSpeaker" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeSpeaker"></a>

```typescript
public readonly DescribeSpeaker: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSpeaker API call.

---

##### `DescribeSpeakerEnrollmentJob`<sup>Required</sup> <a name="DescribeSpeakerEnrollmentJob" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeSpeakerEnrollmentJob"></a>

```typescript
public readonly DescribeSpeakerEnrollmentJob: string[];
```

- *Type:* string[]

IAM actions required for the DescribeSpeakerEnrollmentJob API call.

---

##### `DescribeWatchlist`<sup>Required</sup> <a name="DescribeWatchlist" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DescribeWatchlist"></a>

```typescript
public readonly DescribeWatchlist: string[];
```

- *Type:* string[]

IAM actions required for the DescribeWatchlist API call.

---

##### `DisassociateFraudster`<sup>Required</sup> <a name="DisassociateFraudster" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.DisassociateFraudster"></a>

```typescript
public readonly DisassociateFraudster: string[];
```

- *Type:* string[]

IAM actions required for the DisassociateFraudster API call.

---

##### `EvaluateSession`<sup>Required</sup> <a name="EvaluateSession" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.EvaluateSession"></a>

```typescript
public readonly EvaluateSession: string[];
```

- *Type:* string[]

IAM actions required for the EvaluateSession API call.

---

##### `ListDomains`<sup>Required</sup> <a name="ListDomains" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListDomains"></a>

```typescript
public readonly ListDomains: string[];
```

- *Type:* string[]

IAM actions required for the ListDomains API call.

---

##### `ListFraudsterRegistrationJobs`<sup>Required</sup> <a name="ListFraudsterRegistrationJobs" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListFraudsterRegistrationJobs"></a>

```typescript
public readonly ListFraudsterRegistrationJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListFraudsterRegistrationJobs API call.

---

##### `ListFraudsters`<sup>Required</sup> <a name="ListFraudsters" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListFraudsters"></a>

```typescript
public readonly ListFraudsters: string[];
```

- *Type:* string[]

IAM actions required for the ListFraudsters API call.

---

##### `ListSpeakerEnrollmentJobs`<sup>Required</sup> <a name="ListSpeakerEnrollmentJobs" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListSpeakerEnrollmentJobs"></a>

```typescript
public readonly ListSpeakerEnrollmentJobs: string[];
```

- *Type:* string[]

IAM actions required for the ListSpeakerEnrollmentJobs API call.

---

##### `ListSpeakers`<sup>Required</sup> <a name="ListSpeakers" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListSpeakers"></a>

```typescript
public readonly ListSpeakers: string[];
```

- *Type:* string[]

IAM actions required for the ListSpeakers API call.

---

##### `ListTagsForResource`<sup>Required</sup> <a name="ListTagsForResource" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListTagsForResource"></a>

```typescript
public readonly ListTagsForResource: string[];
```

- *Type:* string[]

IAM actions required for the ListTagsForResource API call.

---

##### `ListWatchlists`<sup>Required</sup> <a name="ListWatchlists" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.ListWatchlists"></a>

```typescript
public readonly ListWatchlists: string[];
```

- *Type:* string[]

IAM actions required for the ListWatchlists API call.

---

##### `OptOutSpeaker`<sup>Required</sup> <a name="OptOutSpeaker" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.OptOutSpeaker"></a>

```typescript
public readonly OptOutSpeaker: string[];
```

- *Type:* string[]

IAM actions required for the OptOutSpeaker API call.

---

##### `StartFraudsterRegistrationJob`<sup>Required</sup> <a name="StartFraudsterRegistrationJob" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.StartFraudsterRegistrationJob"></a>

```typescript
public readonly StartFraudsterRegistrationJob: string[];
```

- *Type:* string[]

IAM actions required for the StartFraudsterRegistrationJob API call.

---

##### `StartSpeakerEnrollmentJob`<sup>Required</sup> <a name="StartSpeakerEnrollmentJob" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.StartSpeakerEnrollmentJob"></a>

```typescript
public readonly StartSpeakerEnrollmentJob: string[];
```

- *Type:* string[]

IAM actions required for the StartSpeakerEnrollmentJob API call.

---

##### `TagResource`<sup>Required</sup> <a name="TagResource" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.TagResource"></a>

```typescript
public readonly TagResource: string[];
```

- *Type:* string[]

IAM actions required for the TagResource API call.

---

##### `UntagResource`<sup>Required</sup> <a name="UntagResource" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.UntagResource"></a>

```typescript
public readonly UntagResource: string[];
```

- *Type:* string[]

IAM actions required for the UntagResource API call.

---

##### `UpdateDomain`<sup>Required</sup> <a name="UpdateDomain" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.UpdateDomain"></a>

```typescript
public readonly UpdateDomain: string[];
```

- *Type:* string[]

IAM actions required for the UpdateDomain API call.

---

##### `UpdateWatchlist`<sup>Required</sup> <a name="UpdateWatchlist" id="@cdk_utils/iam.voiceid.VoiceidOperations.property.UpdateWatchlist"></a>

```typescript
public readonly UpdateWatchlist: string[];
```

- *Type:* string[]

IAM actions required for the UpdateWatchlist API call.

---

### VoiceidResources <a name="VoiceidResources" id="@cdk_utils/iam.voiceid.VoiceidResources"></a>

ARN builders, validators, and parsers for voiceid resources.

#### Initializers <a name="Initializers" id="@cdk_utils/iam.voiceid.VoiceidResources.Initializer"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

new voiceid.VoiceidResources()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidResources.domain">domain</a></code> | Builds an ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidResources.isValidDomainArn">isValidDomainArn</a></code> | Validates whether a string is a valid ARN for the domain resource. |
| <code><a href="#@cdk_utils/iam.voiceid.VoiceidResources.parseDomainArn">parseDomainArn</a></code> | Parses a domain ARN into its components. |

---

##### `domain` <a name="domain" id="@cdk_utils/iam.voiceid.VoiceidResources.domain"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

voiceid.VoiceidResources.domain(props: VoiceidDomainArnProps)
```

Builds an ARN for the domain resource.

###### `props`<sup>Required</sup> <a name="props" id="@cdk_utils/iam.voiceid.VoiceidResources.domain.parameter.props"></a>

- *Type:* <a href="#@cdk_utils/iam.voiceid.VoiceidDomainArnProps">VoiceidDomainArnProps</a>

---

##### `isValidDomainArn` <a name="isValidDomainArn" id="@cdk_utils/iam.voiceid.VoiceidResources.isValidDomainArn"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

voiceid.VoiceidResources.isValidDomainArn(arn: string)
```

Validates whether a string is a valid ARN for the domain resource.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.voiceid.VoiceidResources.isValidDomainArn.parameter.arn"></a>

- *Type:* string

---

##### `parseDomainArn` <a name="parseDomainArn" id="@cdk_utils/iam.voiceid.VoiceidResources.parseDomainArn"></a>

```typescript
import { voiceid } from '@cdk_utils/iam'

voiceid.VoiceidResources.parseDomainArn(arn: string)
```

Parses a domain ARN into its components.

###### `arn`<sup>Required</sup> <a name="arn" id="@cdk_utils/iam.voiceid.VoiceidResources.parseDomainArn.parameter.arn"></a>

- *Type:* string

---




